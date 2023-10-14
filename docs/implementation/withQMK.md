## Using home row mods with QMK

As previously said, the way to create a dual-role key is to use what's known as a "mod-tap" in QMK.
The mod-tap key, `MT(mod, kc)`, acts like a modifier when held, and a regular keycode when tapped. In other words, this is what allows us to have a key that sends "a" when you tap it, but function as a Shift or Control key when you hold it down. Note that the fact that we've turned <kbd>A</kbd> into a mod-tap does not make it impossible to use keyboard shortcuts involving the letter "A". You can still do <kbd>Shift</kbd>+<kbd>A</kbd> or <kbd>Alt</kbd>+<kbd>A</kbd> just fine.
Although, depending on what modifier you decided to assign to <kbd>A</kbd>, you'll need to use the opposite hand to combine that modifier with <kbd>A</kbd>.

<!--Consider using the Miryoku order for the example instead-->
Let me explain with an example. Let's take the home row mod setup illustrated in the cover image of this blog post.

![KLE render of dark blue QWERTY home row keycaps with mod icons in the center and mod name on the side of the keycaps](assets/images/home-row-mods/RealisticHRM-Dark-SideLegends-GASC.png)

This setup, translated into code would look something like this:

{% highlight c %}
MT(MOD_LGUI, KC_A), MT(MOD_LALT, KC_S), MT(MOD_LSFT, KC_D), MT(MOD_LCTL, KC_F),

MT(MOD_RCTL, KC_J), MT(MOD_RSFT, KC_K), MT(MOD_LALT, KC_L), MT(MOD_RGUI, KC_SCLN)
{% endhighlight %}

Or if one were to use the shortcuts documented [here](https://docs.qmk.fm/#/mod_tap):

{% highlight js %}
LGUI_T(KC_A), LALT_T(KC_S), LSFT_T(KC_D), LCTL_T(KC_F),

RCTL_T(KC_J), RSFT_T(KC_K), LALT_T(KC_L), RGUI_T(KC_SCLN)
{% endhighlight %}

As you can see in this example, <kbd>A</kbd> is a `LGUI` mod-tap. This means that tapping the key will produce "a" and holding it will activate the left GUI modifier. If that was the only GUI mod-tap in your keymap, this would make it impossible to trigger the
<kbd>GUI</kbd>+<kbd>A</kbd>
keyboard shortcut. This is where mirroring all the modifiers on the other hand comes in handy. If you want to do
<kbd>GUI</kbd>+<kbd>A</kbd>, you'll have to hold `MT(MOD_RGUI, KC_SCLN)`, i.e. the semicolon key in our example, and tap `MT(MOD_LGUI, KC_A)`, i.e. our <kbd>A</kbd> key.

In case you're curious why `LALT` is used in place of `RALT` for the modifier of the <kbd>L</kbd> mod-tap key in this example, click [here](#use-left-and-right-modifiers-but-beware-of-altgr) to jump down to the section on modifier handedness and possible gotchas with the Right Alt mod.

### Tap Hold configuration settings

Configuring tap hold options is a mandatory step for using home row mods without pulling your hair. As such, a local QMK development environment is required since the [online configurator] currently does not support configuration settings. If you haven't set up a QMK build environment yet, follow the steps outlined in [this guide].

[online configurator]: https://config.qmk.fm/#/
[this guide]: https://docs.qmk.fm/#/newbs_getting_started

With that out of the way, here comes the most difficult part: understanding the different tap hold configuration settings.

I strongly advise you to attentively read through the [official QMK documentation page on tap hold configuration settings], [the proposed changes to the documentation](https://github.com/qmk/qmk_firmware/blob/155cc17359711a6dd7b67119ec994800588ebaaa/docs/tap_hold.md)[^4] by [sigprof] on <abbr title="Pull Request">PR</abbr> [#9404], and [Okke]'s [cheatsheet on MT and LT behaviour].<sup>[PDF]</sup>

[official QMK documentation page on tap hold configuration settings]: https://docs.qmk.fm/#/tap_hold
[sigprof]: https://github.com/sigprof
[#9404]: https://github.com/qmk/qmk_firmware/pull/9404
[Okke]: https://github.com/okke-formsma/
[cheatsheet on MT and LT behaviour]: https://cdn.discordapp.com/attachments/663573863480950808/757162393209012304/modtap.pdf

Once you're done reading through these links, come back here for a more detailed explanation of each tap hold configuration setting and their relation to home row mods.

#### Ignore Mod-Tap Interrupt

Suffice to say that `IGNORE_MOD_TAP_INTERRUPT` is *the* most important tap hold configuration settings that's absolutely necessary for a good home row mods experience.

Why is it so important and relevant to home row mods? To understand, let's look at the default behaviour for mod-taps. The underlying logic of basic mod-taps is quite simple. Did another key get pressed while the user was holding down the mod-tap key? If that's the case, this is a keyboard shortcut; apply the modifier on that pressed key. What if, instead, no key got pressed while the user was holding down the mod-tap? Well, if the user presses and releases a key by itself, without pressing any other key in between, it must mean the user wanted the tapping function of the mod-tap since there is no use to tapping a modifier key all by itself.[^5] Simple enough right? If you want to activate the holding function, just press on another key while holding the mod-tap key.


Here comes the problem with that approach if one were to use home row mods. We like to imagine typing as tapping a sequence of keys all on their own, in order. However, there's quite some overlap between the press and release of each key. Especially so when typing at high speeds. When typing the word "no" for example, we rarely press and fully release <kbd>N</kbd> *before* pressing <kbd>O</kbd>. Try it! If you're not a hunt'n'pecker, this is how you're most likely going to type "no":

<div class="typingScenario">

| Key          | Status
|--------------|--------
| <kbd>N</kbd> | Down/Press
| <kbd>O</kbd> | Down/Press
| <kbd>N</kbd> | Up/Release
| <kbd>O</kbd> | Up/Release

![Typing "no" on the right half of a Squiggle with dark Colemak-DH MBK choc keycaps](assets/images/home-row-mods/DarkRollingNO.gif)
</div>

Now imagine if <kbd>N</kbd> and <kbd>O</kbd> were both mod-taps — it would be the case if you use home row mods on Colemak like in the animation above. With default tap hold settings, this is bad news. Indeed, typing involves a lot of such rolls, where you press the next letter before having fully released the previous one.

This is the reason why `IGNORE_MOD_TAP_INTERRUPT` was developed and first [released in 2015](https://github.com/qmk/qmk_firmware/commit/f024a462cdaa4a7a345160819bdf2d01fbabc97a) by [Erez Zukerman](https://github.com/ezuk). Though Erez didn't have home row mods in mind when coming up with this solution. In fact, it actually took two more years after the addition of `IGNORE_MOD_TAP_INTERRUPT` to QMK for the [first commit] to the main branch of the QMK firmware GitHub repository to feature home row mods.[^6]

[first commit]: https://github.com/qmk/qmk_firmware/blob/82de4d039d39c87a1df68708f3033926c27f7e6c/keyboards/ergodox/keymaps/adam/keymap.c#L52


Anyways, thanks to his contribution, we now have an option for ignoring key presses that interrupt a mod-tap. That is to say, keys which get pressed while the mod-tap is held down do not automatically activate the modifier of the mod-tap. The mod-tap ignores the interruptions, hence the name.

Now, you might wonder... If mod-taps ignore key presses that happen while it is held down, what do they base themselves on to determine when to activate the modifier and when to send the basic keycode? The answer is that it relies on the tapping term, a user defined period of time which starts when the key gets pressed. Been holding the mod-tap for more than the time defined in the tapping term? Activate the modifier. Pressed the key and then released it before the tapping term expired? That's the QMK definition of a "tap", send the letter!

As long as your fingers don't linger on the keys for longer than the tapping term, you won't get accidental mod activations.

#### Tapping Term

The tapping term is an important concept to grasp for home row mods. As we've just seen in the previous section on ignore mod tap interrupt, the tapping term is what helps to tell tap and hold apart.

The tapping term, in and of itself, is a very basic thing to understand. It is simply a period of time expressed in milliseconds that the user has defined. A timer starts on every key press and constantly checks whether the tapping term for that key has expired yet or not. The timer stops when the key is released. It is good to note that each pressed key is tracked by a specific, different timer, so to speak. When you press <kbd>A</kbd>, a timer starts but pressing another key like <kbd>O</kbd> does not bump up the timer that got started when you press <kbd>A</kbd>.[^7]

Since a tap is defined as the act of pressing and releasing a key within **tap**ping term, the tapping term can be seen as the time window in which you need to release the key in order to register a tap. On the flip side, it can also be seen as the minimum amount of time a key must be held down to register a hold.

As such, a good tapping term that fits you is one that prevents accidental mod activations and keeps the intended mod activations snappy. It is a delicate balance.

The tapping term can be configured globally and per key to fit you. In general, people choose something between 150ms and 220ms, with the default QMK setting for the tapping term set at 200ms. Don't be scared to increase or decrease your tapping term as you see fit.

It's helpful to note that setting the tapping term over 500ms will automatically enable permissive-hold-like behaviour regardless of whether or not you've enabled it in your configuration settings. For more information on what is permissive hold, consult the section on "[Permissive Hold](#permissive-hold)".

For tips on configuring your tapping term and finding the sweet spot for you, click [here](#finding-the-sweet-spot).

----------

That concludes it for the *essential* tap hold configuration settings for home row mods. Don't try to use home row mods without `IGNORE_MOD_TAP_INTERRUPT` or with an insane `TAPPING_TERM`. You'll have a bad time if you do and will come out of it thinking that "home row mods are not for me".

Apart from these options, you may have noticed that QMK offers more tap hold configuration settings if you've read the documentation linked at the [beginning of this section](#tap-hold-configuration-settings) — please read through those links if you haven't yet. While non-essential, they can still be *very useful* and a better understanding of them can help you enable the settings that will prove beneficial to you.

#### Tapping Force Hold

The first in the list and an important tap hold setting for home row mods is `TAPPING_FORCE_HOLD`.

Over the course of normal computer usage, you will switch back and forth between typing and triggering keyboard shortcuts. When the modifiers are on the home row, sooner or later, you will feel the need to press a home row key to type a letter and then pressing that same key in order to activate a modifier. However, the default behaviour for a quick tap followed by a hold is to auto-repeat the tapping function of the mod-tap.

This means that if you use `LSFT_T(KC_L)` for example and you want to type "camelCase", you will end up with "camelllllllllllllllllcase" instead. The reason is that you're tapping `LSFT_T(KC_L)` to get "l" and then immediately after, you're holding that same `LSFT_T(KC_L)` key to activate Shift in order to type the capital "C" of "camel**C**ase".

Avoiding this problem is easy; just append `#define TAPPING_FORCE_HOLD` to your `config.h` file in your personal keymap folder. This will have the effect of letting you activate the hold function instead, when holding a dual-role key after having tapped it. No more accidental repeats of mod-tap letters when typing quickly!

The downside is that it removes the possibility of auto-repeating the letter/tapping function of the mod-tap. You will need to tap (press-release) repeatedly if you want to spam a letter.

<!-- address "but muh vim keys!" fears -->

Keep in mind that `TAPPING_FORCE_HOLD` is a universal configuration which applies on all dual-role keys (layer-taps and mod-taps). If your backspace key is a layer-tap, you may find that rather restrictive. The good news is that there exists a per-key variant of this configuration option: `TAPPING_FORCE_HOLD_PER_KEY`. Just follow the [instructions described in the docs](https://docs.qmk.fm/#/tap_hold?id=tapping-force-hold) to enable `TAPPING_FORCE_HOLD` for home row mods and disable it for other layer taps as you see fit.

#### Permissive Hold

Second in the list is "permissive hold". It is an option that adds another way to trigger the hold function of dual-role keys.

Whereas the modifier of the mod-tap is activated when another key gets *pressed* by default or gets activated when held down for longer than the tapping term if `IGNORE_MOD_TAP_INTERRUPT` is defined, permissive hold activates the modifier when another key is pressed and released while the mod-tap is held, regardless of the tapping term. This means that even when `IGNORE_MOD_TAP_INTERRUPT` is defined, this option allows the user to trigger a keyboard shortcut with a mod-tap key before the end of the tapping term.

Consider the following case:

<div class="typingScenario">

| Key          | Status
|--------------|-----------
| `RCTL_T(N)`  | Down/Press
| `RGUI_T(O)`  | Down/Press
| `RGUI_T(O)`  | Up/Release
| `RCTL_T(N)`  | Up/Release

![Doing Ctrl+O, permissive hold style, on the right half of a Squiggle with dark Colemak-DH MBK choc keycaps](assets/images/home-row-mods/DarkPermissiveHoldNO.gif)
<!--
TODO: Add a caption to the Squiggle animation(s)
{percent
    include figure.html
    src="assets/images/home-row-mods/DarkPermissiveHoldNO.gif"
    caption="Right half of a Squiggle keyboard with Colemak-DH"
    alt="Doing Ctrl+O, permissive hold style, on the right half of a Squiggle with dark Colemak-DH MBK choc keycaps"
percent}
-->

</div>

In English, this is a situation where you're tapping <kbd>O</kbd> while holding down <kbd>N</kbd>. It can also be called a "nested keypress". If all of this happens before the end of the tapping term, the output, assuming mod-tap interrupts are ignored, would be "no". Contrast this to the scenario when permissive hold is enabled where the output would instead be <kbd>Ctrl</kbd>+<kbd>O</kbd>.

As you can see, the assumption here is that if the user taps another key while holding down one or more mod-tap keys, he isn't doing typing rolls and as such desires to trigger a keyboard shortcut instead. The tapping term is irrelevant here.

Consequently, this option allows the use of home row mods with a tapping term that's much greater than 200ms. Though, people with a high tapping term aren't the only ones who can benefit from this option. Fast typists who are used to swift taps and rolls can enable this option for snappier mod activations and thus bypass the need to wait out the tapping term for the modifiers to take effect. It is particularly useful for Shift.

Owing to the fact that permissive hold is... more permissive in what counts as a hold, it makes it easier to trigger mods so unintended mod activations can happen if the aforementioned case is something you frequently do when typing normally. Depending on your typing style, permissive hold might do more harm than good.

As with many other tap hold settings, there exists a global `PERMISSIVE_HOLD` setting and a per-key option, aptly named `PERMISSIVE_HOLD_PER_KEY`. Consult the [documentation] to figure out how to enable and configure this setting.

[documentation]: https://docs.qmk.fm/#/tap_hold#permissive-hold

#### Retro Tapping

Remember how I said that there isn't much use in pressing and releasing a modifier all by itself? Mod-taps (ab)use this property, but as it turns out mod-taps have the exact same property themselves. If you hold down a mod-tap for longer than the tapping term and then release it without having pressed any other key in between, your QMK keyboard is going to send a press and release event of the modifier to your computer; not too different from tapping a basic modifier key. If that seems wasteful for you, then let me introduce you to *retro tapping*.

When a mod-tap is held for a long time and released on its own, retro tap will activate the tapping function, after having released the modifier of the mod-tap.

To give an example, if you press and hold `LGUI_T(KC_A)` for longer than the tapping term and then release it by itself, the host computer that your QMK keyboard is connected to first sees `KC_LGUI` being pressed when you hold down the mod-tap for longer than the tapping term and then the host computer gets notified that `KC_LGUI` is released when you take your finger off `LGUI_T(KC_A)` on your keyboard. This is the default behaviour for mod-taps held and released by themselves. What retro tap does is sending `KC_A` once `KC_LGUI` is released/inactive.

<!--Consider putting an animation of a keyboard pressing keys and a host computer receiving scan codes-->

Retro Tap thus gives another way to trigger the tapping function of mod-taps. With this option, you can get away with a very short tapping term.

However, this particular example highlights a potential problem with retro tap. In many popular desktop environments, the start menu is brought up by tapping the GUI key. A user of this kind of desktop environment who would like to send "a" by retro-tapping `LGUI_T(KC_A)` would accidentally open up the start menu and type "a" in its search bar.

What if you use another way to bring up the start menu? You'll still have a problem with the Alt key which is used for navigating through menus of graphical applications. You can avoid accidental pop-ups of the menu when retro-tapping the alt mod-taps by disabling the functionality in the apps settings. For example in Firefox, it can be done by going in `about:config` and turning `ui.key.menuAccessKeyFocuses` to `false`. Not all apps offer the possibility of disabling Alt's tapping behaviour though.

The Alt and GUI modifiers aren't the only problem, think of the mouse too. The firmware that's running on your keyboard cannot tell that you have clicked or scrolled the mouse wheel while holding down a mod-tap key. All it sees is that you've been holding down a mod-tap for more than the tapping term and released it without pressing any other key in between. As we now know, this is the cue for the firmware to activate the tapping function of the mod-tap in question if retro tap is enabled. <kbd>Ctrl</kbd>+<kbd>Left-Click</kbd> to open a link in a new tab or <kbd>Shift</kbd>+<kbd>Scrollwheel</kbd> to scroll sideways would thus be accompanied with unintended letters.

One tempting solution is to resort to per key retro tap in order to disable retro tap for the problematic GUI and Alt mod-taps and keep it for others. It's up to you whether it's disorientating or not to have some home row keys retro-tappable and some others not.

#### Retro Shift

Retro Shift builds upon the functionality of Retro Tap in order to marry [Auto Shift](https://docs.qmk.fm/#/feature_auto_shift) with [mod-taps](https://docs.qmk.fm/#/mod_tap).

Retro Shift lets you get the shifted state of a mod-tap by releasing the mod-tap key past the end of the tapping term, in a similar fashion to Auto Shift which emits the shifted state of a basic key if it's been held down for longer than the `AUTO_SHIFT_TIMEOUT`.

With Auto Shift and Retro Shift, you can confidently eradicate all Shift keys from your keymap.[^8]

In case you're worried for the flaws that plague Retro Tap to be present in Retro Shift too, don't be. As the [docs](https://github.com/manna-harbour/qmk_firmware/blob/retro-shift/docs/tap_hold.md#retro-shift) say, "if `RETRO_SHIFT` is defined to a value, hold times greater than that value will not produce a tap on release. This enables modifiers to be held for combining with mouse clicks without generating taps on release."

-----

That is it for all the available QMK tap hold configuration settings. In summary, there are two essential tap hold settings: `TAPPING_TERM`, and `IGNORE_MOD_TAP_INTERRUPT`. `TAPPING_TERM` will require some tweaking and adaptation from your part (though not as much as you may be led to believe) but the `IGNORE_MOD_TAP_INTERRUPT` is just a matter of adding a line to your `config.h` file. Aside from those two tap hold settings, there exists two other very commonly recommended settings: `TAPPING_FORCE_HOLD`, and `PERMISSIVE_HOLD`. As with `IGNORE_MOD_TAP_INTERRUPT`, they can be enabled by simply appending `#define PERMISSIVE_HOLD` and `#define TAPPING_FORCE_HOLD` to your `config.h` file. As for `RETRO_TAPPING`, it might appear appealing at first glance but it has its load of problems which make it unsuitable for home row mods.

### Getting started with home row mods on QMK

Armed with all this knowledge, we can now add home row mods to our keymap and flash it onto our board.

Let's start with tap hold configuration settings. Copy and paste those lines in your `config.h` file (create the file in your personal keymap folder if it's not already present):

{% highlight js %}
// Configure the global tapping term (default: 200ms)
#define TAPPING_TERM 200

// Prevent normal rollover on alphas from accidentally triggering mods.
#define IGNORE_MOD_TAP_INTERRUPT

// Enable rapid switch from tap to hold, disables double tap hold auto-repeat.
#define TAPPING_FORCE_HOLD

// Apply the modifier on keys that are tapped during a short hold of a modtap
#define PERMISSIVE_HOLD
{% endhighlight %}

Once that's done, open up `keymap.c`, and convert all the home row keys into mod-tap keys. You have multiple options for doing so. In any case, it is best to use aliases as the convention is to keep all keycode names strictly under 8 characters long in order to keep a tidy, aligned and readable layout in the `keymap.c` file. This is not possible if you use something like `MT(mod, kc)` or `LMOD_T(kc)`. For example, potential aliases for US QWERTY with GASC/◆⎇⇧⎈ order could be:

{% highlight js %}
// Left-hand home row mods
#define HOME_A LGUI_T(KC_A)
#define HOME_S LALT_T(KC_S)
#define HOME_D LSFT_T(KC_D)
#define HOME_F LCTL_T(KC_F)

// Right-hand home row mods
#define HOME_J RCTL_T(KC_J)
#define HOME_K RSFT_T(KC_K)
#define HOME_L LALT_T(KC_L)
#define HOME_SCLN RGUI_T(KC_SCLN)
{% endhighlight %}

If you feel like `HOME_letter` is too vague, nothing prevents you from doing something like this:

{% highlight js %}
// Left-hand home row mods
#define GUI_A LGUI_T(KC_A)
#define ALT_S LALT_T(KC_S)
#define SFT_D LSFT_T(KC_D)
#define CTL_F LCTL_T(KC_F)

// Right-hand home row mods
#define CTL_J RCTL_T(KC_J)
#define SFT_K RSFT_T(KC_K)
#define ALT_L LALT_T(KC_L)
#define GUI_SCLN RGUI_T(KC_SCLN)
{% endhighlight %}

Afterwards, it's just a matter of replacing all the basic `KC_letter` situated on the home row in the `LAYOUT` of your `keymap.c` with the mod-taps aliases you've defined.

### Home row mods code generator {#qmk-home-row-mods-code-generator}

For your convenience, below you can find a form that you can fill in with your options in order to generate mod-tap aliases and the home row.

<details>
<summary markdown="span"> Additional information</summary>

For best results, make sure to use US QWERTY on your OS since the generated code uses the default QMK keycode labels which are based on US QWERTY.

If your layout isn't present in the list, select "Other" in the dropdown list and fill in all the ten characters of your home row. To accommodate layouts such as QWERTY and [Halmak](https://github.com/MadRabbit/halmak), a limited set of punctuation characters are accepted in the custom layout field. They are `-`, `.`, `,`, `/`, `\`, and `;`. If you wish to use [upper/lower row mods](#upperlower-row-mods), you can also select "Other" and fill in the text field with the upper/lower row of your keyboard layout.

The order options use the notation described in the section on [home row mods orders](#home-row-mods-order). The leftmost modifier is the one on the pinky and the rightmost modifier is the one on the index finger (not the inner index column). If you wish to use another home row mods order, check "Other" and specify your desired order in the same notation. [Alternative home row mods layouts](#alternative-home-row-mods-layout) are not supported, but you're free to use `_` to omit some modifiers if you want less than 2×4 home row mods.

In case you're curious why `LALT` is used in place of `RALT` in the generated code for the right-hand Alt mod-tap, click [here](#use-left-and-right-modifiers-but-beware-of-altgr) to jump down to the section on modifier handedness and possible gotchas with the Right Alt mod.
</details>

<form style="background: #131317;border: 25px solid #131317; border-radius: 25px;">
<p>
Select your layout<br>
<select name="layouts" onchange="showTextField('QMKLayout')">
<option value="ASDFGHJKL;" selected>QWERTY/AZERTY/QWERTZ </option>
<option value="AOEUIDHTNS"> Dvorak</option>
<option value="ARSTDHNEIO"> Colemak vanilla</option>
<option value="ARSTGMNEIO"> Colemak DH</option>
<option value="ASHTGYNEOI"> Workman</option>
<option value="RSTHDMNAIO"> RSTHD</option>
<option value="YIEA.DSTNB"> BEAKL15</option>
<option value="OTHER" id="otherQMKLayout"> Other </option>
</select>
</p>
<div id="customQMKLayout" style="display:none">
Specify the ten characters of the row you want to apply mod-taps to.<br>Accepted characters: `A–Za–z0–9.,;/\'-`<br>
<input type="text" maxlength="10" id="customQMKLayoutInput" pattern="[A-Za-z0-9-.,;\/'\\]{10}"  title="Lowercase is allowed too">
</div>

<p>
Enter your desired tapping term (in ms)<br>
<input type="number" name="QMKTappingTerm" min="1" value="200">
</p>

<p>
Select your home row mods order<br>
<select name="homeRowModsOrders" onchange="showTextField('QMKOrder')">
<option value="GASC" selected> GASC</option>
<option value="GACS"> GACS</option>
<option value="SCGA"> SCGA</option>
<option value="CAGS"> CAGS</option>
<option value="OTHER" id="otherQMKOrder"> Other </option>
</select>
</p>
<div id="customQMKOrder" style="display:none">
Specify your desired [home row mods order](#home-row-mods-order)<br>Accepted characters: `GASC_`<br>
<input type="text" id="customQMKOrderInput" maxlength="4" pattern="[_GgAaSsCc]{4}"  title="Lowercase is allowed too.">
</div>

<p>
Select your desired alias style<br>
<select name="aliasStyle">
<option value="HOME" selected> HOME</option>
<option value="MOD"> MOD</option>
</select>
</p>

<p style="margin-bottom: 0em;">
<input type="button" onclick="generateQMKCode(form.elements)" name="submit" value="Generate">
</p>

<div id="QMKGeneratorErrors" style="display: none;min-width: 100%;text-align: center;background: #f006; border-radius:15px; margin-top: 1em;"></div>
</form>

<div id="generatedQMKTappingTerm" style="display:none">
</div>
<div id="generatedQMKAliases" style="display:none">
Paste this at the top of your `keymap.c` file
</div>
<div id="generatedQMKHomeRow" style="display:none"></div>

<br>
