basePunctuationNames = {
    ".":"DOT",
    ",":"COMMA",
    ";":"SCLN",
    "/":"SLSH",
    "'":"QUOTE",
    "-":"MIN"
}

fullModName = {
    "G":"GUI",
    "A":"ALT",
    "S":"SFT",
    "C":"CTL",
    "_": null
}

validHomeRow    = RegExp(/^[\w-\.,;\/\']{10}$/);
validModsOrder  = RegExp(/^[GASC]{4}_$/);
validHandedness = RegExp(/^[LR]{3}$/);
validAliasStyle = ["HOME", "MOD"];

function translate(table) {
    /* Return a copy of the string in which each character has been mapped through the given translation table. 
     * This is a custom extension of the JS native String type to mimic Python's `str.translate(table)` method.
     *
     * @table (dict) : Dictionary with string keys and string values containing the translation mapping. 
     */
    translatedString = "";
    toTranslate = this.split("");
    toTranslate.forEach(char => {
        translatedString += (char in table ? table[char] : char);
    });
    return translatedString;
}
String.prototype.translate = translate;

function UserHomeRowMods(lettersLayout, modsOrder, handedness, aliasStyle) {
    // Standardizing the input
    lettersLayout = lettersLayout.trim().toUpperCase();
    modsOrder     = modsOrder.trim().toUpperCase() + "_";
    handedness    = handedness.trim().toUpperCase();
    aliasStyle    = aliasStyle.trim().toUpperCase();

    // Input validation
    if (!validHomeRow.test(lettersLayout)) {
        throw "Incorrectly formatted letters layout";
    }

    if (!validModsOrder.test(modsOrder)) {
        throw "Incorrectly formatted mods order (" + modsOrder + ")";
    }

    if (!validHandedness.test(handedness)) {
        throw "Incorrectly formatted handedness";
    }

    if (aliasStyle in validAliasStyle) {
        throw "Incorrect alias style, choose either \"MOD\" or \"HOME\"";
    }

    // Assignment to object fields
    this.homeRowKeys = lettersLayout; // 10 characters long string
    this.handedness  = handedness;    // 3 characters long string
    this.aliasStyle  = aliasStyle;    // either "HOME" or "MOD"
    this.modsOrder   = [];
    for (i = 0; i < modsOrder.length; i++) {
       this.modsOrder.push(fullModName[modsOrder[i]]) 
    }

    this.getHandedness = function(index, mod, config) {
        /* Returns the appropriate modifier handedness for that modtap
         * 
         * @index (int) : index of the mod tap key on the home row ∈ [0;10]
         * @mod (str) : one-letter abbreviation of the modifier
         * @config (str) : three-letter string (see `validhandedness`) 
         *              - config[0] = handedness of left hand mods
         *              - config[1] = handedness of right hand alt
         *              - config[2] = handedness of right hand mods
         *              e.g. "LLR" = left and right hand modifiers without AltGr
         */
        isLeftHalfKey = index < 5
        if (isLeftHalfKey) {
            return config[0];
        }
        return mod == "ALT" ? config[1] : config[2];
    }

};

function editDivBlock(id, displayStyle="block", html="") {
    if (html.length > 0) {
        document.getElementById(id).innerHTML = html;
    }
    document.getElementById(id).style.display = displayStyle;
}

function showTextField(name) {
    if (document.getElementById("other" + name).checked) {
        editDivBlock(id="custom" + name, displayStyle="block");
    }
    else {
        editDivBlock(id="custom" + name, displayStyle="none");
    }
}

function surroundInCodeBlock(code, language="c") {
    return "<pre>\n<code class='language-' + language>" + code + "\n</pre>";
}

function buildUserChoices(formElements, program="QMK") {
    /*
     * Create an object representing user's choices 
     * See the UserHomeRowMods class.
     */

    if (formElements.homeRowModsOrders.value == "OTHER") { 
        chosenHomeRowModsOrder = formElements[`custom{program}Order`].value.toUpperCase();
    } else {
        chosenHomeRowModsOrder = formElements.homeRowModsOrders.value; 
    }

    if (formElements.layouts.value == "OTHER") {
        chosenLettersLayout = formElements[`custom{program}Layout`].value.toUpperCase();
    } else {
        chosenLettersLayout = formElements.layouts.value; 
    }

    try {
        return new UserHomeRowMods(chosenLettersLayout, chosenHomeRowModsOrder, formElements.handedness.value, formElements.aliasStyle.value);
    } catch (e) {
        editDivBlock(id=`{program}GeneratorErrors`, displayStyle="block", html=e)
        editDivBlock(`generated{program}Aliases`, displayStyle="none")
        editDivBlock(`generated{program}HomeRow`, displayStyle="none")
        throw new Error("Correct input errors before continuing");
    }
}

function generateQMKCode(formElements) {
    user = buildUserChoices(formElements);
    editDivBlock("QMKGeneratorErrors", displayStyle="none")

    definedAliases = "// Left-hand home row mods\n";
    generatedHomeRow = "";
    for (i = 0; i < user.homeRowKeys.length; i++) {
        if (i == 5) {
            definedAliases += "\n// Right-hand home row mods\n";
            user.modsOrder.reverse();
        }
        letter = user.homeRowKeys[i];
        mod = user.modsOrder[i % 5];
        keyName = "_" + letter.translate(basePunctuationNames);

        if (mod) {
            keyName = (user.aliasStyle == "HOME" ? "HOME" : mod) + keyName;

            definedAliases += "" +
                "#define " +
                keyName +
                " " +
                user.getHandedness(i, mod, user.handedness) +
                mod +
                "_T(KC_" +
                letter.translate(basePunctuationNames) +
                ")\n";
        } else {
            keyName = "KC" + keyName;
        }
        generatedHomeRow += keyName + ", ";
    }

    editDivBlock("generatedQMKAliases", displayStyle="block", surroundInCodeBlock(definedAliases));
    editDivBlock("generatedQMKHomeRow", displayStyle="block", surroundInCodeBlock(generatedHomeRow));
}


function generateKMonadCode(formElements) {
    //TODO
}
