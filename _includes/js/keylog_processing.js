const bgCanvas = document.getElementById("bgCanvas");
bgCanvas.style.backgroundImage = "url(/assets/images/qmk-heatmap/example_layout_for_qmk_heatmap_generator.jpg)";

document.getElementById("pictureFile").addEventListener("change", function(){
    const pictureFile = this.files[0];
    if (pictureFile) {
      var reader = new FileReader();

      reader.onload = function (evt) {
          var image = new Image();
          image.src = reader.result;
          image.onload = function() {
              const height = this.height;
              const width = this.width;
              const MAX_WIDTH = 1550;
              const MAX_HEIGHT = 1550;
              if (height > MAX_HEIGHT || width > MAX_WIDTH) {
                  alert(`The image dimensions are too big.\nPlease upload a picture under ${MAX_WIDTH}x${MAX_HEIGHT} pixels`);
              } else {
                  bgCanvas.width = width;
                  bgCanvas.height = height;
                  bgCanvas.style.backgroundImage = `url(${reader.result})`;
              }
          }
          resetEverything();
      };

      reader.onerror = function (evt) {
        console.error("An error ocurred reading the pictureFile",evt);
        alert("An error ocurred reading while reading the file.");
      };

      reader.readAsDataURL(pictureFile);
    }
},false);

function resetEverything() {
      resetMatrix()
      for (const cnvs of document.getElementsByClassName("heatmap-canvas")) {
          cnvs.remove();
      }
     document.getElementById("howToMatchMatrix").style.display = "none"
     document.getElementById("matrixToMatch").style.display = "none"
     document.getElementById("resetMatrixBtnWrapper").style.display = "none"
     document.getElementById("csvFileBtnWrapper").style.display = "none"
}

// Code to automatically resize textarea
// Source: https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize/25621277#25621277
// (Pure JS option)
const tx = document.getElementById('infoMatrix');
tx.setAttribute('style', 'height:' + (tx.scrollHeight) + 'px;overflow-y:hidden;');
tx.addEventListener("input", function OnInput() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
}, false);

/* bool */ var inMatchingMode = false;
/* str */ var textMatrix = "";
/* array[str] */ var rowcolInTextMatrix = [];
/* Object[str: Object[str: int]] */ var posMatchingTable = {};

// Constants taken from here:
// https://github.com/qmk/qmk_firmware/blob/620a946d01477b64ee2f719141aa35400c0188c6/lib/python/qmk/constants.py#L22...L24
const ROW_LETTERS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnop'
const COL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijilmnopqrstuvwxyz'
// Taken from the length of ROW_LETTERS and COL_LETTERS
const MAX_ROW = 52;
const MAX_COL = 52;
// For some reason `\b` gets turned into a weird unicode character
// if only one backslash is used.
const rowcolPattern = new RegExp(`\\b[${ROW_LETTERS}][${COL_LETTERS}]\\b`, 'g')

function reactToTextAreaChanges(textAreaElem) {
    textAreaContent = textAreaElem.value;
    if (textAreaContent.length > 0) {
        /* str */ textMatrix = textAreaContent;
        /* str */ oldRowcolInTextMatrix = rowcolInTextMatrix;
        /* array[str] */ rowcolInTextMatrix = textMatrix.match(rowcolPattern);
        if (oldRowcolInTextMatrix != rowcolInTextMatrix) {
            // Remove any pre-existing heatmap-canvas to avoid
            // stacking another canvas on top of bgCanvas and thus stealing mouse click events.
            for (const cnvs of document.getElementsByClassName("heatmap-canvas")) {
                cnvs.remove();
            }
            eraseAllCircles();
            inMatchingMode = true;
            posMatchingTable = {};
            document.getElementById("matrixToMatch").style.display = "block"
            document.getElementById("matrixToMatch").innerText = textAreaContent
            document.getElementById("howToMatchMatrix").style.display = "block"
            document.getElementById("howToMatchMatrix").innerText = "Click the key on the picture that corresponds to " + rowcolInTextMatrix[0]
            document.getElementById("infoMatrix").style.display = "none"
            document.getElementById("resetMatrixBtnWrapper").style.display = "block"
        }
    } else {
        /* bool */inMatchingMode = false
        /* str */textMatrix = ""
        /* array[str] */rowColInTextMatrix = []
        document.getElementById("matrixToMatch").style.display = "none"
        document.getElementById("howToMatchMatrix").style.display = "none"
    }
}

function resetMatrix() {
    /* bool */inMatchingMode = false
    /* str */textMatrix = ""
    /* array[str] */rowColInTextMatrix = []
    /* int */rowcolPointer = 0
    document.getElementById("matrixToMatch").style.display = "none"
    document.getElementById("infoMatrix").style.display = "block"
    document.getElementById("resetMatrixBtnWrapper").style.display = "none"
    document.getElementById("howToMatchMatrix").style.display = "none"
}

function drawCircle(x, y) {
    const ctx = bgCanvas.getContext("2d");
    const pointSize = 5;
    ctx.fillStyle = "#ff2626"; // Red color
    ctx.beginPath();
    // Draw a point using the arc function of the canvas with a point structure.
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
    ctx.fill(); // This also closes the path
}

function eraseCircle(x, y) {
    const ctx = bgCanvas.getContext("2d");
    const pointSize = 5;
    // If two circles are near one another, this may irreversibly erase parts of another circle.
    // There are no clean ways to properly undo the last canvas draw operation.
    ctx.clearRect(x-pointSize, y-pointSize, pointSize*Math.PI, pointSize*Math.PI);
    // The above size and offsets are somewhat arbitrary and not super precise
}

function eraseAllCircles() {
    const ctx = bgCanvas.getContext("2d");
    ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
}

let rowcolPointer = 0
bgCanvas.addEventListener("click", function(e) {
    if (inMatchingMode) {
        if (!e.shiftKey) {
            if (rowcolPointer < rowcolInTextMatrix.length) {
                /*str*/matchedRowcol = rowcolInTextMatrix[rowcolPointer]
                /*Object[str: int]*/posMatchingTable[matchedRowcol] = {x: e.offsetX, y:e.offsetY};
                drawCircle(e.offsetX, e.offsetY);
                rowcolPointer++
                // matchedKeys is surrounded by "double quotes" in the HTML regardless of what quotes are used here.
                document.getElementById("matrixToMatch").innerHTML = document.getElementById("matrixToMatch").innerHTML
                                                                           .replace(matchedRowcol, '<span class="matchedKeys">'+matchedRowcol+'</span>')
            } else {
                eraseAllCircles();
                alert("All matches are saved! Please upload your csv file now");
                document.getElementById("howToMatchMatrix").innerText = 'Scroll down to see the "Upload key log csv" button'
                document.getElementById("csvFileBtnWrapper").style.display = "block";
            }
        }
        else if (e.shiftKey) {
            if (rowcolPointer > 0) {
                rowcolPointer--
                /*str*/unmatchedRowcol = rowcolInTextMatrix[rowcolPointer]
                // Get X, Y coordinates of the row col to unmatch and feed them to eraseCircle
                // This lets the user erase the previous circle from anywhere on the canvas.
                eraseCircle(...Object.values(posMatchingTable[unmatchedRowcol]));
                delete posMatchingTable[unmatchedRowcol];
                document.getElementById("matrixToMatch").innerHTML = document.getElementById("matrixToMatch").innerHTML
                                                                           .replace('<span class="matchedKeys">'+unmatchedRowcol+'</span>', unmatchedRowcol)
            } else {
                console.log("Nothing to undo, posMatchingTable has no keys");
            }
        }
        if (rowcolPointer < rowcolInTextMatrix.length) {
          document.getElementById("howToMatchMatrix").innerText = "Click the key on the picture that corresponds to " + rowcolInTextMatrix[rowcolPointer]
          if (rowcolPointer > 0) {
            document.getElementById("howToMatchMatrix").innerText += "\n(Shift click to undo last operation)"
          }
        } else {
          document.getElementById("howToMatchMatrix").innerText = "Click anywhere to finalize"
        }
    } else {
        console.log("Not inMatchingMode");
    }
}, false);

function fillNAs(lines) {
    /* Fill in the missing row,col information (as denoted by "NA,NA") of a combo action
     * by looking for an occurrence of the same keycode used outside of a combo
     * and thus associated with a certain row and column.
     */
    keycode2rowcol = {}
    // The keycode must be present in the expected line format
    const expectedLineFormat = /^0x[A-F0-9]+,[0-9]+,[0-9]+/
    // Go through each known association between a keycode and its row,col
    // to build the `keycode2rowcol` lookup table.
    lines.filter(line => expectedLineFormat.test(line)).forEach(line => {
        const loggedKeycodeAndVars = line.split(",")
        const keycode = loggedKeycodeAndVars[0]
        const row = Number(loggedKeycodeAndVars[1])
        const col = Number(loggedKeycodeAndVars[2])
        if (row == 254 && col == 254) {
            return // is a simple combo with sevanteri's combo improvements
        } else {
            keycode2rowcol[keycode] = [row, col]
        }
    })

    // Iterate a second time through `lines` to replace "keycode,NA,NA" by "keycode,row,col" if available in `keycode2rowcol`.
    for (i=0; i<lines.length; i++) {
        if (lines[i].startsWith("0x") && lines[i].includes("NA,NA")) {
            keycode = lines[i].match(/0x[0-9A-F]+/)[0]
            if (Object.keys(keycode2rowcol).includes(keycode)) {
                lines[i] = lines[i].replace("NA,NA", keycode2rowcol[keycode][0] + "," + keycode2rowcol[keycode][1])
            }
        }
    }
    return lines
}

function getKeyFreq(line, keyFreq) {
    /* Generates a hashmap that associates a key to the total amount of times it was pressed.
     *
     * Its format is as follows:
     * {
     * "2-letter code for row,column": [
     *  total presses on layer 0, total presses on layer 1, ..., total presses on layer n
     *  ]
     * }
     *
     * Example:
     * {"0A": [2800, 38], "9B": [50, 50]}
     * The key in matrix position row=0, col=0 (denoted "0A")
     * was pressed 2800 times when layer 0 was active and
     * 38 times when layer 1 was active.
     */

    // Strip the leading keycode hexa
    line = line.replace(/0x[0-9A-F]+,/, "")
    const loggedVars = line.split(",")
    const row        = Number(loggedVars[0])
    const col        = Number(loggedVars[1])
    const layer      = Number(loggedVars[2])
    if (row < MAX_ROW && col < MAX_COL) {
        rowcol = ROW_LETTERS[row] + COL_LETTERS[col]
    } else {
        // Is probably a combo whose row, col = 254, 254
        rowcol = 'ØØ' // 'Ø' is totally arbitrary
    }
    if (keyFreq[rowcol] == undefined) {
        keyFreq[rowcol] = []
    }
    keyFreq[rowcol][layer] = (keyFreq[rowcol][layer] || 0) + 1
    return keyFreq
}

function sum(array) {
    return array.reduce((a, b) => a+b, 0)
}

function getHighestLayer(line, highestLayer) {
    line = line.replace(/0x[0-9A-F]+,/, "")
    const loggedVars = line.split(",")
    const layer = Number(loggedVars[2])
    if (layer > highestLayer) {
        highestLayer = layer
     }
    return highestLayer
}

function compileHeatmapDataPoints(rowcol2coords, rowcol2counts, highestLayer) {
    /*array[array[Object[str: int]]]*/data = []
    rowcols = Object.keys(rowcol2coords)
    var i = rowcols.length
    while (i--) {
        rowcol = rowcols[i]
        if (rowcol2counts[rowcol] == undefined) {
            continue
        }
        for (let j=0; j<=highestLayer; j++) {
            /*int*/const keypressesCount = rowcol2counts[rowcol][j]
            if (keypressesCount == undefined) {
                continue
            }
            // Shallow copy clone of {x: int, y: int}
            /*Object[str: int]*/coordsAndValue = {...rowcol2coords[rowcol]}
            coordsAndValue["value"] = keypressesCount
            coordsAndValue["rowcol"] = rowcol
            if (data[j] == undefined) {
                data[j] = []
            }
            data[j].push(coordsAndValue)
        }
        /*int*/const totalKeypressesCount = sum(rowcol2counts[rowcol])
        /*Object[str: int]*/coordsAndValue = {...rowcol2coords[rowcol]}
        coordsAndValue["value"] = totalKeypressesCount
        if (data[highestLayer+1] == undefined) {
            data[highestLayer+1] = []
        }
        data[highestLayer+1].push(coordsAndValue)
    }
    return data
}

function generateHeatmap(maxPresses, heatmapDataPoints) {
    // Remove any pre-existing heatmap-canvas to avoid
    // stacking multiple different heatmaps on top of each other.
    for (const cnvs of document.getElementsByClassName("heatmap-canvas")) {
        cnvs.remove();
    }
    // This creates a new heatmap-canvas inside the 'keyboard' div
    heatmapInstance = h337.create({
      container: document.getElementById('keyboard'),
      maxOpacity: .6,
      radius: 50,
      blur: .90,
    });
    var heatmapFinalData = {
        max: maxPresses,
        data: heatmapDataPoints
    }
    heatmapInstance.setData(heatmapFinalData)
}

let heatmapDataPoints = []
let maxPresses = []
document.getElementById("csvFile").addEventListener("change", function(){
    var csvFile = this.files[0];

    if (csvFile) {
      var reader = new FileReader();
      const RECOMMENDED_AMOUNT_OF_ENTRIES = 100000

      reader.onload = function (evt) {
          csvText = evt.target.result
          csvLines = csvText.split(/\n|\r\n/)

          if (csvLines.length < RECOMMENDED_AMOUNT_OF_ENTRIES) {
              document.getElementById("howToMatchMatrix").innerText = `The submitted keylog only contains ${csvLines.length} lines.\nCollect more data for more accurate results.`
          }
          if (csvText.includes("NA,NA")) {
            csvLines = fillNAs(csvLines)
          }
          let keyFreq = {}
          let highestLayer = 0
          // The keycode DOES NOT have to be present in the expected line format
          const expectedLineFormat = /^(0x[A-F0-9]+,)?[0-9]+,[0-9]+,[0-9]{1,2}/
          csvLines.filter(line => expectedLineFormat.test(line)).forEach(line => {
              keyFreq = getKeyFreq(line, keyFreq)
              highestLayer = getHighestLayer(line, highestLayer)
          })
          maxPresses = []
          keypressesOnEachLayer = Object.values(keyFreq)
          for (let i=0; i<=highestLayer; i++) {
            maxPresses.push(Math.max(...keypressesOnEachLayer.map(pressesInLayer => (pressesInLayer[i]||0))))
          }
          // Last element contains the total max presses for all layers combined
          maxPresses.push(Math.max(...keypressesOnEachLayer.map(pressesInLayer => sum(pressesInLayer))))

          heatmapDataPoints = compileHeatmapDataPoints(posMatchingTable, keyFreq, highestLayer);

          // The code below related to updating the layerSelector can be a bit confusing because of
          // the presence of the option "All Layers" at the first position in the drop-down list.
          // By consequence, the option "Layer 0" has a value of "0" but an index of 0+1 etc.
          const selector = document.getElementById("layerSelector")
          // highestLayer+1 is the index of aggregated layers data in heatmapDataPoints.
          currentlySelectedLayer = Math.min(Number(selector.value), highestLayer+1);
          // Always keep at least "All layers" and "Layer 0" + whatever up to selected index or highestLayer+1
          // These two options work with any keylog file because there is always at least a base layer.
          selector.length = Math.max(2, Math.min(selector.selectedIndex, highestLayer+1))
          for (let i=selector.length-1; i<=highestLayer; i++) {
            addLayerToSelector(i)
          }
          generateHeatmap(maxPresses[currentlySelectedLayer], heatmapDataPoints[currentlySelectedLayer]);
      };

      reader.onerror = function (evt) {
        console.error("An error ocurred reading the csvFile",evt);
      };

      reader.readAsText(csvFile, "UTF-8");
    }
}, false);

document.getElementById("csvFile").addEventListener("click", function(){
  // Reset the input field, so that an updated csv file with the same filename can be uploaded.
  var csvFile = this.files[0];
  if (csvFile) {
    csvFile.value = '';
  }
}, false);

function displayLayer(selectedLayer) {
    if (maxPresses.length > 0) {
        chosenLayer = Math.min(Number(selectedLayer), heatmapDataPoints.length-1)
        generateHeatmap(maxPresses[chosenLayer], heatmapDataPoints[chosenLayer])
    }
}

function addLayerToSelector(layer) {
    selector = document.getElementById("layerSelector")
    layerToAdd = document.createElement("option")
    layerToAdd.text = "Layer " + layer
    layerToAdd.value = layer
    selector.add(layerToAdd)
}
