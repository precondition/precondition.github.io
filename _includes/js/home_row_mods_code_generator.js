basePunctuationNames = {
    ".":"DOT",
    ",":"COMMA",
    ";":"SCLN",
    "/":"SLSH",
    "'":"QUOTE",
    "-":"MIN",
    "\\":"BSLS"
}

fullModName = {
    "G":"GUI",
    "A":"ALT",
    "S":"SFT",
    "C":"CTL",
    "_": null
}

validHomeRow    = RegExp(/^[\w-\.,;\/\'\\]{10}$/);
validModsOrder  = RegExp(/^[_GASC]{4}_$/);
validHandedness = RegExp(/^[LR]{3}$/);
validTappingTerm= RegExp(/^\d+$/);

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

function UserHomeRowMods(lettersLayout, modsOrder, handedness, aliasStyle, tappingTerm=1) {
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
        throw "Incorrectly formatted mods order";
    }

    if (!validHandedness.test(handedness)) {
        throw "Incorrectly formatted handedness";
    }

    if (!validTappingTerm.test(tappingTerm)) {
        if (tappingTerm === "") {
            throw "Tapping term is incorrectly formated. Make sure that it's a positive integer with only digit characters in the field";
        } else if (tappingTerm.includes(".") || tappingTerm.includes(",")) {
            throw "Tapping term must be a positive <em>integer</em>. Decimal numbers are not permitted.";
        } else {
            throw "Tapping term is too low. Choose a value ≥1";
        }
    }

    // Assignment to object fields
    this.homeRowKeys = lettersLayout; // 10 characters long string
    this.handedness  = handedness;    // 3 characters long string
    this.aliasStyle  = aliasStyle;    // either "HOME" or "MOD"
    this.modsOrder   = [];
    for (i = 0; i < modsOrder.length; i++) {
       this.modsOrder.push(fullModName[modsOrder[i]]) 
    }
    this.tappingTerm = tappingTerm;

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

function editDivBlock(id, displayStyle="contents", html="") {
    if (html.length > 0) {
        document.getElementById(id).innerHTML = html;
    }
    document.getElementById(id).style.display = displayStyle;
}

function showTextField(name) {
    console.log(name);
    console.log(document.getElementById("other" + name));
    if (document.getElementById("other" + name).selected) {
        editDivBlock(id="custom" + name, displayStyle="block");
    }
    else {
        editDivBlock(id="custom" + name, displayStyle="none");
    }
}

function surroundInCodeBlock(code, language="c") {
    return "<pre><code>" + hljs.highlight(language, code).value + "</code></pre>";
}

function buildUserChoices(formElements, program="QMK") {
    /*
     * Create an object representing user's choices 
     * See the UserHomeRowMods class.
     */

    if (formElements.homeRowModsOrders.value == "OTHER") { 
        chosenHomeRowModsOrder = formElements["custom" + program + "OrderInput"].value.toUpperCase();
    } else {
        chosenHomeRowModsOrder = formElements.homeRowModsOrders.value; 
    }

    if (formElements.layouts.value == "OTHER") {
        chosenLettersLayout = formElements["custom" + program + "LayoutInput"].value.toUpperCase();
    } else {
        chosenLettersLayout = formElements.layouts.value; 
    }

    try {
        return new UserHomeRowMods(chosenLettersLayout, chosenHomeRowModsOrder, formElements.handedness.value, formElements.aliasStyle.value, formElements[program + "TappingTerm"].value);
    } catch (e) {
        editDivBlock(id=program + "GeneratorErrors", displayStyle="block", html=e)
        if (program === "QMK") {
            editDivBlock("generated" + program + "TappingTerm", displayStyle="none")
        }
        editDivBlock("generated" + program + "Aliases", displayStyle="none")
        editDivBlock("generated" + program + "HomeRow", displayStyle="none")
        throw new Error("Correct input errors before continuing");
    }
}

function generateQMKCode(formElements) {
    user = buildUserChoices(formElements);
    editDivBlock("QMKGeneratorErrors", displayStyle="none")

    definedTappingTerm = "#define TAPPING_TERM " + user.tappingTerm;
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

    tappingTermExplanation = '<hr>\n\n<p style="margin-bottom: 0em;">Paste this anywhere in your <code>config.h</code> file.</p>'
    editDivBlock(
        "generatedQMKTappingTerm",
        displayStyle="contents",
        tappingTermExplanation + surroundInCodeBlock(definedTappingTerm)
    );

    aliasesExplanation = '<p style="margin-bottom: 0em;">Paste this in <code>keymap.c</code>, above your layout.</p>'
    editDivBlock(
        "generatedQMKAliases",
        displayStyle="contents",
        aliasesExplanation + surroundInCodeBlock(definedAliases)
    );

    homeRowExplanation = '<p style="margin-bottom: 0em;">Replace the ten keys of your home row in the <code>LAYOUT</code> block of your <code>keymap.c</code> with this.</p>'
    editDivBlock(
        "generatedQMKHomeRow",
        displayStyle="contents",
        homeRowExplanation + surroundInCodeBlock(generatedHomeRow)
    );
}

function generateKMonadCode(formElements) {
    user = buildUserChoices(formElements, program="KMonad");
    editDivBlock("KMonadGeneratorErrors", displayStyle="none");

    tappingTerm = user.tappingTerm;

    definedAliases = "(defalias\n";
    generatedHomeRow = "";
    for (i = 0; i < user.homeRowKeys.length; i++) {
        if (i == 5) {
            definedAliases += "\n";
            user.modsOrder.reverse();
        }
        letter = user.homeRowKeys[i];
        mod = user.modsOrder[i % 5];
        keyName = "_" + letter;

        if (mod) {
            keyName = (user.aliasStyle == "HOME" ? "HOME" : mod) + keyName;

            definedAliases += "    " +
                keyName +
                " (tap-hold-next-release " +
                tappingTerm +
                " " +
                letter +
                " " +
                user.getHandedness(i, mod, user.handedness) +
                mod +
                ")\n";

            keyName = "@" + keyName;
        } else {
            keyName = letter;
        }

        generatedHomeRow += keyName + "   ";
    }
    definedAliases = definedAliases.toLowerCase() +  ")";
    generatedHomeRow = generatedHomeRow.toLowerCase();

    editDivBlock("generatedKMonadAliases", displayStyle="contents", surroundInCodeBlock(definedAliases));
    editDivBlock("generatedKMonadHomeRow", displayStyle="contents", surroundInCodeBlock(generatedHomeRow));
}
