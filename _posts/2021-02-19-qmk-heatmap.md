---
layout: post_without_cover
cover: assets/images/qmk-heatmap/tornadical-corne-unreal-heatmap.png
navigation: True
title: QMK Heatmap Generator
date: 2021-02-19
category: Keyboards
tags: [Keyboards, Keymap, QMK]
class: post-template
subclass: 'post'
author: precondition
custom-js:
    - js/keylog_processing.js
    - js/heatmap.min.js
description: Generate a heatmap of key presses for any QMK keyboard based on real key logging data
---

Show key presses coming from:
<select id="layerSelector" onchange="displayLayer(this.value)">
<!-- The value of "All layers" is an arbitrary big number that will be converted to highestLayer+1 -->
<option value="99">All layers</option>
<option value="0">Layer 0</option>
</select>

<div id="keyboard">
<canvas id="bgCanvas" width="830" height="290">
</canvas> 
</div>
<div id="howToMatchMatrix" style="display: none;min-width: 100%;text-align: center;"></div>

---

{::options parse_block_html="false" /}
<pre class="highlight" id="matrixToMatch" style="display:none; line-height:16px;"></pre>
<div class="upload-btn-wrapper" id="resetMatrixBtnWrapper" style="display:none;">
  <label class="btn" for="resetInfoMatrix">Use another matrix</label>
  <button id="resetInfoMatrix" style="position:absolute" onclick="resetMatrix()"></button>
</div>
<textarea class="qmkInfoMatrix" id="infoMatrix" rows="5" placeholder="Paste the matrix layout outputted by `qmk info -m` here" onchange="reactToTextAreaChanges(document.getElementById('infoMatrix'))" enabled></textarea>
<div class="upload-btn-wrapper">
  <label class="btn" for="pictureFile">Upload keyboard picture</label>
  <input type="file" id="pictureFile" class="btn"/>
</div>
<div class="upload-btn-wrapper" id="csvFileBtnWrapper" style="display:none;">
  <label class="btn" for="csvFile">Upload key log csv</label>
  <input type="file" id="csvFile"/>
</div>
{::options parse_block_html="true" /}


# What it is
This is a web-based tool to generate a pretty heatmap of your typing habits. As opposed to all the other available keyboard heatmap generators, this doesn't merely analyse a static piece of text and overlays the letter frequency of said piece of text over a picture of the most basic row-stagger keyboard. This generator has full support for unprintable keys like backspace, modifier keys, caps lock, F-keys, arrow keys etc. Additionally, advanced QMK features such as layers, modtaps, layertaps, [home row mods](home-row-mods), leader keys, autoshift, and even combos are also supported.

Since QMK keyboards come in all shapes and sizes, you're invited to upload your own picture of your layout/keymap. It doesn't matter whether you use a TKL, an Atreus or a Dactyl Manuform; if it's available on the [QMK configurator], it's supported.

<!--
Mini version of my Dactyl Manuform 5x6 for testing
┌──┐┌──┐┌──┐┌──┐┌──┐                    ┌──┐┌──┐┌──┐┌──┐┌──┐
│1B││1C││1D││1E││1F│                    │7A││7B││7C││7D││7E│
└──┘└──┘└──┘└──┘└──┘                    └──┘└──┘└──┘└──┘└──┘
┌──┐┌──┐┌──┐┌──┐┌──┐                    ┌──┐┌──┐┌──┐┌──┐┌──┐
│2B││2C││2D││2E││2F│                    │8A││8B││8C││8D││8E│
└──┘└──┘└──┘└──┘└──┘                    └──┘└──┘└──┘└──┘└──┘
┌──┐┌──┐┌──┐┌──┐┌──┐                    ┌──┐┌──┐┌──┐┌──┐┌──┐
│3B││3C││3D││3E││3F│                    │9A││9B││9C││9D││9E│
└──┘└──┘└──┘└──┘└──┘                    └──┘└──┘└──┘└──┘└──┘
                ┌──┐┌──┐                    ┌──┐┌──┐
                │4E││4F│                    │AA││AB│
                └──┘└──┘                    └──┘└──┘
-->

# Gallery

![Precondition's Dactyl Manuform 5x6 heatmap](/assets/images/qmk-heatmap/precondition-dactyl-manuform-heatmap.png)

# Instructions

The QMK Heatmap Generator expects:
1. A picture of your layout
2. A text representation of the matrix positions of your keyboard
3. A link between each key in the matrix to the corresponding key in the provided picture
4. A keylog CSV file in `keycode,row,col,layer` format (`keycode` can be omitted)

If you don't have a `keylog.csv` file yet, jump to the section on "[How to collect the required data](#how-to-collect-the-required-data)". It is pointless to go through steps 1–3 if you don't already have a `keylog.csv` file that contains at least 1000 entries.

## 1. A picture of your layout
The first thing you need to do is to upload a picture of your layout. It can be any image you want but for best effects, I recommend a 2D black and white picture with high contrast. Avoid blue, green, yellow, and red in your layout graphic as those are used to draw the heatmap. If you don't already have a graphic representation of your keymap, you can use [keyboard-layout-editor](https://keyboard-layout-editor.com) or take a screenshot from the [QMK configurator].

[QMK configurator]: https://config.qmk.fm/#/

Avoid uploading a picture which separates all your different layers like in [this example](https://media.discordapp.net/attachments/663573863480950808/818128925447946271/layout.png). You only get to match as many key as you have submitted in the text box for the ASCII representation of your board.

## 2. A text representation of the matrix positions of your keyboard
Next, you can see a text box prompting you to paste the text representation of the matrix layout produced by `qmk info --matrix`, or `qmk info -m` in short. If you wish to obtain the pseudo-graphic layout for another board than your main (as defined by `qmk config`), you can run `qmk info -kb <name> -m`. For example, `qmk info -kb handwired/dactyl -m` produces the following output:

<pre style="line-height:16px">
Keyboard Name: Dactyl
Manufacturer: Unknown
Website: 
Maintainer: QMK Community
Keyboard Folder: handwired/dactyl
Layouts: LAYOUT_dactyl
Size: 17 x 8
Processor: atmega32u4
Bootloader: halfkay
Matrix for "LAYOUT_dactyl":
┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐                    ┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐
│0A││0B││0C││0D││0E││0F│                    │0G││0H││0I││0J││0K││0L│
└──┘└──┘└──┘└──┘└──┘└──┘                    └──┘└──┘└──┘└──┘└──┘└──┘
┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐                    ┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐
│1A││1B││1C││1D││1E││1F│                    │1G││1H││1I││1J││1K││1L│
└──┘└──┘└──┘└──┘└──┘└──┘                    └──┘└──┘└──┘└──┘└──┘└──┘
┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐                    ┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐
│2A││2B││2C││2D││2E││2F│                    │2G││2H││2I││2J││2K││2L│
└──┘└──┘└──┘└──┘└──┘└──┘                    └──┘└──┘└──┘└──┘└──┘└──┘
┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐                    ┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐
│3A││3B││3C││3D││3E││3F│                    │3G││3H││3I││3J││3K││3L│
└──┘└──┘└──┘└──┘└──┘└──┘                    └──┘└──┘└──┘└──┘└──┘└──┘
┌──┐┌──┐┌──┐┌──┐┌──┐                            ┌──┐┌──┐┌──┐┌──┐┌──┐
│4A││4B││4C││4D││4E│                            │4H││4I││4J││4K││4L│
└──┘└──┘└──┘└──┘└──┘                            └──┘└──┘└──┘└──┘└──┘
                        ┌──┐┌──┐    ┌──┐┌──┐
                        │5F││5A│    │5L││5G│
                        └──┘└──┘    └──┘└──┘
                    ┌──┐┌──┐┌──┐    ┌──┐┌──┐┌──┐
                    │5D││5C││5E│    │5H││5J││5I│
                    │  ││  │└──┘    └──┘│  ││  │
                    │  ││  │┌──┐    ┌──┐│  ││  │
                    │  ││  ││5B│    │5K││  ││  │
                    └──┘└──┘└──┘    └──┘└──┘└──┘
</pre>

Only copy-paste the lines after "Matrix for ...". 

## 3. A link between each key in the matrix to the corresponding key in the provided picture
After pasting the matrix into the text area, left click on the picture the spot that corresponds to each key in the text matrix starting from the top left corner and moving from left to right, top to bottom.

If you misclicked or placed the dot a few millimeters away from the true center of the keycap and it's driving you mad, you can Shift+Left Click anywhere on the canvas to undo the last operation.

Click a final time on the picture after having matched all matrix positions to points on the image to save the matching pairs and finally spawn the button that will let you upload your `keylog.csv`.

## 4. Generating a heatmap
After having collected enough data in the expected format, you can now submit your `keylog.csv` file (the exact name of the csv file isn't important) to the above tool in order to generate a pretty heatmap of your typing habits.

A heatmap overlay will appear over the keys as soon as you upload the file.

---

# How to collect the required data

To accurately modelize your typing habits, you first need to collect enough real-word data. The more, the better.

To avoid skewing results, don't play typing games such [monkeytype](https://monkeytype.com) or [typingracer](https://typingracer.com) while logging your keystrokes. Typing random strings of words and movie quotes isn't a good reflection of your actual keyboard usage — unless you're into competitive typing.

To collect key strokes data in the expected format, there are two things you need to setup:
1. Keyboard firmware
2. A program that logs what the keyboard firmware sends into a csv file

(The following instructions assume the use of a UNIX environment — sorry Windows users.)

## Keyboard firmware setup

First off, you need to program your keyboard firmware to send your desired information to the host.

To do that, append the following line to `rules.mk`:
```mk
CONSOLE_ENABLE = yes
```

Next, open `keymap.c` and add these lines at the top of the file. This will import the `uprintf` function that we'll later use, but only if `CONSOLE_ENABLE` is turned on.
```c
#ifdef CONSOLE_ENABLE
#include "print.h"
#endif
```

After including `print.h`, head to the `process_record_user` function (More info about this function can be found [here](https://docs.qmk.fm/#/custom_quantum_functions?id=programming-the-behavior-of-any-keycode)) and write the `#ifdef` code block just after the function signature but before the switch statement:
```c
bool process_record_user(uint16_t keycode, keyrecord_t *record) {
    #ifdef CONSOLE_ENABLE
        if (record->event.pressed) {
            uprintf("0x%04X,%u,%u,%u\n", keycode, record->event.key.row, record->event.key.col, get_highest_layer(layer_state));
        }
    #endif
    switch (keycode) {
    ...
    }
    return true;
}
```
This will print the hexadecimal representation of every key you press as well as its row and its column. Make sure to not leave any space between the commas and to end the string with a newline `\n`.

<details>
<summary markdown="span">Additional instructions for combos</summary>
If you want to log combo key presses, there are a few more things you need to do. Know that using the wrapper `[AB_ESC] = COMBO(combo_sequence, KC_ESC)` will not let you easily get matrix information. However, here's what you can insert in `processs_combo_event` if you use the `COMBO_ACTION` wrapper for defining your combos:
```c
#ifdef CONSOLE_ENABLE
    if (pressed) {
        combo_t *combo = &key_combos[combo_index];
        uint8_t idx = 0;
        uint16_t combo_keycode;
        while ((combo_keycode = pgm_read_word(&combo->keys[idx])) != COMBO_END) {
            uprintf("0x%04X,NA,NA,%u\n", combo_keycode, get_highest_layer(layer_state));
            idx++;
        }
    }
#endif
```
As you can notice, `processs_combo_event` doesn't actually give any information on the matrix position of combo key presses, which is why the row and column fields in the printed output are filled with "NA" (Not Available).

These missing values will be automatically filled in by the QMK Heatmap Generator based on keys you've typed outside of combos. For example, if you have a combo involving `KC_A` and `KC_S`, executing the combo will output these two lines:
```
0x004,NA,NA,0
0x018,NA,NA,0
```
but simply tapping those keys by themselves, one after another would produce something like:
```
0x004,3,2,0
0x018,3,3,0
```
Based on this, we can infer that the keycode `0x004` is positionned in the third row, second column and that `0x018` is positionned in the third row, third column.

Thus, if you use a key *exclusively* in combos, there won't be any row,col information associated with that keycode in your `keylog.csv` and as such, the generator cannot infer what's the row and column of that key and it will remain "NA". This is why it helps to press every key of your keyboard at least once; to get a complete record.

</details>

At this stage, the keyboard firmware is ready to go and you can flash the firmware onto your board.


## Host computer setup

The next steps will be about setting up the host computer to listen to what the keyboard sends and actually log that output to a csv file.

To listen to your keyboard, you'll need to install [hid_listen](https://www.pjrc.com/teensy/hid_listen.html). There are pre-compiled binaries available for download for most operating systems except for Linux 64-bit for which you'll need to download the source code and run `make` at the root of the downloaded `hid_listen/` folder.

Now, all you need to start logging key presses is to let this command run in the background while you're using your keyboard normally:
```sh
sudo ./hid_listen | egrep --line-buffered "(0x[A-F0-9]+,)?(NA|[0-9]+),(NA|[0-9]+),[0-9]{1,2}" | tee -a keylog.csv
```

The output should look like this:
```
0x0006,3,3
0x0007,3,4
0x002C,4,5
0x4128,10,1
0x4273,4,4
0x640C,8,3
0x7111,8,1
```

Every time you press any key on your keyboard, a new line should be appended to the standard output and to the `keylog.csv` file which will be stored in the same directory as that of the `hid_listen` executable file.


If you don't want to flood the standard output, you can replace `| tee -a` by `>>` like so:
```sh
sudo ./hid_listen | egrep --line-buffered "(0x[A-F0-9]+,)?(NA|[0-9]+),(NA|[0-9]+),[0-9]{1,2}" >> keylog.csv
```
This will silently append `<keycode>,<row>,<col>,<layer>` to `keylog.csv` anytime you press a key on your keyboard.

# Why should I trust this web-tool with my keylogging data?
This entire website is static and open source, meaning none of your data gets sent to any server, all the processing happens client-side and anyone can inspect the code. More importantly, the `keylog.csv` file that you upload to the web-tool doesn't actually contain the key*sym* you've typed, only the raw hexadecimal key*codes*. 

For example, there isn't one clear-cut keycode that will always produce "A" on screen. `KC_LSHIFT` followed by `KC_A` will produce a different keycode from `S(KC_A)` and yet produces the same final output nonetheless. Tapping `LGUI_T(KC_A)` will result in yet another hexadecimal keycode and so will `LT(_LAYER, KC_A)`. And all of that doesn't take into account the variability of regional OS keyboard layouts. `0x0004` would get interpreted as "a" if your OS is configured to use QWERTY but for all I know, you may as well be using AZERTY, in which case that keycode will instead output "q" or, to give another example, "ф" if you use ЙЦУКЕН.

I have no desire to deal with that ambiguous mess.

The keycodes only get used to fill in NA values for combo actions, so if you feel particularly paranoiac, you can delete the first column of the csv file containing the hexadecimal keycode (very easy to do in any spreadsheet application) and shuffle the order of the csv lines before uploading it. All that really matters to the generator is the `row`, the `col`, and the `layer` of each key press.
