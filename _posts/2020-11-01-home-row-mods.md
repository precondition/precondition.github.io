---
layout: post
current: post
cover: assets/images/home-row-mods/RealisticHRM-Light-Cover-Half-GASC.jpeg
navigation: True
title: A guide to home row mods
date: 2020-12-12
category: Keyboards
tags: [Keymap, QMK]
class: post-template
subclass: 'post'
author: precondition
custom-js:
    - js/home_row_mods_code_generator.js
    - js/processModifiers.js
description: What are home row mods? What is a mod-tap? What settings do you need to use? What are the alternatives? And more in this article...
---

If you've been browsing mechanical keyboard communities, and especially the niche that is ergonomic mechanical keyboards, you may have come across the term "home row mods" and wondered what could that mean. Well, wonder no more for I shall explain!

<div style="position: relative;">
<a href="#toc-skipped" class="screen-reader-only">Skip table of contents</a>
</div>

* Put the TOC here babe
{:toc}

<div id="toc-skipped"></div>

# What are home row mods?

Let's first deconstruct the term. The "home row" refers to the middle row of alpha keys. On an English QWERTY keyboard this would be
<kbd>A</kbd><kbd>S</kbd><kbd>D</kbd><kbd>F</kbd><kbd>G</kbd><kbd>H</kbd><kbd>J</kbd><kbd>K</kbd><kbd>L</kbd><kbd>;</kbd>.
This row is called the "*home* row" because if one were to follow touch typing technique, this is the row of keys on which your fingers are supposed to rest on. The bars or the dish found on <kbd>F</kbd> and <kbd>J</kbd> help to find back the home position without looking at the keyboard — this is especially important for relatively big keyboards which require you to move your hands to hit some of the keys like for example <kbd>Backspace</kbd> or the arrow keys on a classic <abbr title="Ten Key Less">TKL</abbr> and thus throw you off home position.

<figure>
<a href="https://hygo.com/wp-content/uploads/2017/06/f-j-5-bumps-on-keyboard.jpg">
        <img src="https://hygo.com/wp-content/uploads/2017/06/f-j-5-bumps-on-keyboard.jpg"
        alt="Zoom in on a keyboard with grey QWERTY keycaps with the F and J keys circled in red">
</a>
<figcaption>
Homing bars
</figcaption>
</figure>

Next is "mods". What is meant by "mods"? In this case, "mods" refer to modifiers, that is to say <kbd>⇧ Shift</kbd>, <kbd>⎈ Control</kbd>, <kbd>⎇ Alt</kbd>, and <kbd>◆ GUI</kbd>. The last modifier in the list is also known as WinKey on Windows, Command on MacOS or Super/Meta on Linux and BSD. It is not to be confused with actual graphical user interfaces.

So this means that "home row mods" are about placing modifiers on the home row.

How can that be possible? Does this mean that the home row letters/symbols swap positions with the modifier keys? Most certainly not! You see, one of the untapped potential of modifiers that are active as long as you hold them is that they don't do anything useful when they're tapped (i.e. pressed and released) on their own — a notable exception is the Win/Super key which opens the start menu on Windows and Gnome and Alt which pops up the menu in graphical apps — but thanks to software like [QMK](https://docs.qmk.fm/#/), we can turn these momentary switch modifiers into dual-role keys which act as modifiers when held but act as other keys when tapped. This allows us to make more with less.

The name QMK gives to this functionality is "mod-tap". Mod-taps are a subset of [dual-role keys](http://en.wikipedia.org/wiki/Modifier_key#Dual-role_keys). Other software which also implement this functionality call it differently. Therefore, we really should say "home row mod-taps" but in common parlance, "home row mods" is what's always used.

We now know *what* home row mods are; it is the practice of turning the home row keys into mod-taps. We have yet to figure out *why* use home row mods.

# Why use home row mods?

The reason why would anyone choose to use home row mods are quite simple. A keyboard is no longer used exclusively for text input. It is also used to navigate and operate a computer, launch programs, format text, execute macros, zoom in and out, change input language and so much more which goes beyond simply typing letters. Modifiers play a big role in those functions.

Obviously, typewriters did not have any of those functions. They could only type. The modifier keys that we use so much now were added afterwards, kind of as an afterthought, over the classic typewriter layout which plagues us to this day. It was decided to reduce the width of the spacebar in order to make space for the modifier keys that were needed for the computer age.

<figure>
<a href="https://genevatypewriters.blogspot.com/2010/11/variations-on-typewriter-keyboard.html">
        <img src="https://4.bp.blogspot.com/_8pq4w7Eq5-Q/TO2K1vc3MMI/AAAAAAAABiA/rr6e91NHUqc/s1600/IMG_0830.JPG" alt="A photo of an Italian QZERTY keyboard/typewriter on a Hermes Baby" title="An Italian QZERTY typewriter on a Hermes Baby">
</a>
<figcaption>
On some typewriters, the spacebar was ｒｉｄｉｃｕｌｏｕｓｌｙ ｗｉｄｅ.
</figcaption>
</figure>

As a consequence, you need to do all sorts of finger gymnastics in order to trigger keyboard shortcuts. Not only are you playing Twister with your fingers, you're straining the weakest finger the most in order to hold the necessary modifiers.

This approach to keyboard shortcuts presents some biomechanical issues. These chords may require hyper-extending, hyper-flexing, or splaying the fingers, and may necessitate uncomfortable static muscular loads on top of awkward hand position, especially wrist deviation. All of which can lead to cumulative trauma disorders, as explained by Vern Putz-Anderson in his book titled *"Cumulative trauma disorders: A manual for musculoskeletal diseases of the upper limbs"*, published in 1988.

It is in your best interest to find a solution at the risk of maybe getting RSI and Emacs pinky one day. This is especially important for programmers as most of their keyboard usage isn't actually typing symbols but triggering commands with a plethora of different keyboard shortcuts. Though any power user of any application, not just programmers in their text editor, uses keyboard shortcuts extensively.

Home row mods are about the best solution to this modifier problem. The fact that there are four modifiers, each coming with a left and a right version perfectly matches the eight fingers resting on the home row. We can put a modifier right under each finger and mirror it on both hands.

Isn't it great to have ALL the modifiers at our finger tips? No motion, stretching or strain required. This rapid access to modifier chords is very comfortable and allows to blend the execution of keyboard shortcuts in the typing flow, whereas it previously required a context switch to stop composing text, move the hands to the corner(s) of the keyboard, trigger the desired keyboard shortcut and then find back the homing position to continue touch typing text.

The other benefit of having all the modifiers lined up in a row and each dedicated a specific finger is that you can trigger ANY keyboard shortcut with ease.
<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>GUI</kbd>+<kbd>Alt</kbd>, also sometimes called [Hyper](https://stevelosh.com/blog/2012/10/a-modern-space-cadet/#s14-hyper),
is an insanity on a standard keyboard but with home row mods, it is trivial: just hold down the four fingers of your hand on the keys you're already resting on. Dedicating a specific finger for each of the four modifier also greatly reduces the amount of repetitive motions your pinky has to execute for all the keyboard shortcuts. Home row mods are also advantageous for the thumbs, for it frees them up for something else like layer switches or [even letters](pressing-e-with-the-thumb). In fact, home row mods and layer thumb keys are a perfect fit. It makes it very easy to chord layers and modifiers together without forcing finger contortions or same finger utilization.

Finally, home row mods (or [variations of the concept] which we'll talk about later in the article) is (a part of) the secret sauce to making all those tiny keyboards without outer pinky columns that you've always deemed to be too small to be usable,... actually usable.

[variations of the concept]: #alternatives


<!-- Add gallery of 30%'s -->

Are you convinced? If so, let's now look at the *how*.

# How to use home row mods?

Before we can talk about the technical implementation details, let's briefly talk about the order of home row mods.

## Home row mods order

How should you lay out the modifiers on the home row? You have multiple options.

To make this easier to understand, let's agree on common terminology first.

| Full Modifier Name | Abbreviation          | Symbol |
|--------------------|-----------------------|--------|
| Shift              | S                     | ⇧      |
| Control            | C                     | ⎈      |
| Alt/Option         | A                     | ⎇      |
| GUI/Win/Command    | G                     | ◆      |
| No modifier/mod-tap| _                     | _      |

This means that the home row mods setup shown in the cover picture of this blog post can be written as ◆⎇⇧⎈\_\_⎈⇧⎇◆ when using the symbols or as GASC\_\_CSAG when using the 1-letter abbreviations. However, since the mod-taps on the right hand are symmetric to the mod-taps on the left hand, the right-hand can be omitted. Trailing underscores can also be omitted to finally produce the following notation: GASC/◆⎇⇧⎈.

Now that the semantics are clear, let's talk of some interesting orders of the home row mods to give you some ideas for your own.

### SCGA/⇧⎈◆⎇

If one were to transpose the standardized modifiers layout into a 1D line, this would be it. It might look familiar and thus potentially easier to learn but keep in mind that, aside from the Shift modifiers, all the modifiers now use a different finger than what you're used to.

<figure>
<a href="https://i.redd.it/oflfwzh5mbv01.jpg">
        <img src="https://i.redd.it/oflfwzh5mbv01.jpg"
        alt="Standard row-staggered keyboard with colorful accent modifier keys">
</a>
<figcaption>
Highlighted modifier keys on a standard row-staggered TKL keyboard. When reading the left corner of modifiers from top to botton, left to right, we get SCGA.
</figcaption>
</figure>

Moreover, this is a poor allocation of the mods in regard to their frequency of usage. Assuming that you do not use Caps Lock or Shift Lock,[^1] Shift is *by far* the most used modifier. It is generally unwise to let the pinky take on all this load. Although letting the pinky fingers deal with Shift is the option that will necessitate the least hand swaps when typing a string of capital letters. This order also positions Alt and GUI in an undeservingly good place. The index and middle fingers are the strongest of the four non-thumb fingers but Alt and GUI aren't the most frequently used modifiers for Windows, Linux and BSD users.

### GASC/◆⎇⇧⎈

This is the layout found in the cover pic of this article and what's used in most of the examples. Compared to the SCGA order, this is much more reasonable in terms of using the strongest fingers for the most common modifiers in operating systems that are not MacOS.

Indeed, if you sort the four modifiers by their frequency in Windows and/or Linux, you will find: GUI < Alt < Control < Shift.[^2] The observant among you will have noticed that this does not stick with GASC/◆⎇⇧⎈. Why are Control and Shift swapped? There are multiple reasons that can justify this choice:
1. The index finger is the finger that is responsible for the biggest amount of alpha keys so if you use the index finger to hold Shift, you'll have to swap hands if you want to type any of the six keys — or *seven* keys if you're on a row-stagger board and you type <kbd>C</kbd> with your left index — that the index finger is responsible for. If you're someone who would rather not have to swap hands too much when typing capital letters, this can be interesting for you. However, do keep letter frequency in mind. In most alternative layouts, the inner index columns are populated with infrequent keys while the home row middle finger keys are assigned very common letters such as "E".
2. Putting Shift between Control and Alt is pretty nifty. It allows for easy chording of <kbd>Ctrl</kbd>+<kbd>Shift</kbd> and <kbd>Alt</kbd>+<kbd>Shift</kbd> (the most common combination of modifiers) by using adjacent fingers. That cannot be done with Shift placed on the index finger. Holding two modifiers that are one or two keys apart is not ideal.
3. Concurrently to a Shift mod-tap on the home row, one may also have other Shift-like keys which are used in lieu of the home row mod to capitalize letters like for example [Caps Lock](#use-caps-lock) or a [Shift thumb key](#shift-thumb-keys). By doing so, the Shift home row mod-tap is generally only used in combination with other modifiers, most frequently Control and Alt. Consequently, in light of bullet point 2, its best place is in the middle finger column.
4. The position of GUI next to Alt allows for easy <kbd>GUI</kbd>+<kbd>Alt</kbd>+<kbd>Arrows</kbd>, a keyboard shortcut used in some DEs for switching between virtual desktops/workspaces. GUI gets put on the pinky as that's generally the least used modifier (unless you use a tiling window manager which requires a lot of GUI keyboard shortcuts).
5. The index fingers already have to deal with all the mouse clicking and dragging on top of all those extra inner keys it has to reach for, so you may be tempted to give it a little bit of break by sparing it from holding down a key for all your Shift needs.


This works out great on ortholinear and vertically staggered keyboards but if you use a row-staggered keyboard, you may find that you're suddenly unable to copy and paste one-handedly.

### GACS/◆⎇⎈⇧

GACS is the order you come up with when you want to assign the most frequently used modifiers to the strongest and most agile fingers and the least frequently used modifiers to the weakest fingers. GACS is for those who reply to GASC's bullet point 1 by saying that enabling a greater range of one-handed <kbd>Ctrl</kbd>+<kbd>Letter</kbd> keyboard shortcuts is more important than a greater range of one-handed capital letters you can type.

GACS is also, notably, the order used by the most famous QMK ergo layout involving home row mods: [Miryoku].

[Miryoku]: https://github.com/manna-harbour/qmk_firmware/tree/miryoku/users/manna-harbour_miryoku

A non-obvious advantage of having Shift on the index column is that it can help to minimize accidental capital letters when rolling keys. You can't have accidental capital letters on inwards rolls if the last key you roll is pressed with the index finger. Obviously, that does not apply to outwards rolls but those are generally slower and it beats having Shift in the middle and risking it in both ways.

If you're undecided, pick GACS/◆⎇⎈⇧, it is a solid choice.

### CAGS/⎈⎇◆⇧

What if you use MacOS instead? The GUI < Alt < Control < Shift ranking is not representative of modifier usage in MacOS. It does not even use the right terms! A more appropriate ranking of modifiers by their usage in MacOS would be Ctrl < Option < Command < Shift. A home row mods order conceived with this ranking in mind would thus be CAGS/⎈⎇◆⇧. CAGS is to MacOS as GACS is to Windows/Linux/BSD.

----------

Hopefully, these four examples give you a better idea of what goes behind the conception of an order in the way the different mod-taps are laid out on the home row. You have to account for modifier frequency, finger strength and agility but also the interplay between different modifiers and the impact of temporarily losing access to a column of keys when holding down a home row mod.

Naturally, this is not an exhaustive list of all possible permutations of modifiers along the eight home keys. In fact, changing the order isn't the only thing you can do. You can lay out the mod-taps differently too. See the section on [alternative home row mods layouts](#alternative-home-row-mods-layout).

Even so, despite having written much about the different home row mods orders, in the end, it truly isn't that important. Just pick one you like and roll with it. If you're already used to a certain order, don't let the above points convince you to change. When you're starting out, the pragmatic question of how to lay out the modifiers on the home row might seem important but that impression is misplaced.

## Implementation
For the best home row mods experience, I heartily recommend a QMK-powered mechanical keyboard. At the time of writing, QMK supports over 1624 keyboards! The greater part of which are DIY keyboards.

The following section will be about implementing home row mods in a QMK-powered keyboard with all the necessary settings to make it work well.

For those of you who do not have a QMK-powered board (or those who miss their home row mods when typing on laptop or on any other non-QMK keyboard), you will find a guide for implementing home row mods using [KMonad](https://github.com/david-janssen/kmonad) just after this section on QMK.

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
<!-- idea: add interactive text fields in each tap hold config settings sections to invite readers to get a real feel for what typing scenarios does each setting apply for. Use something along the lines of QMK configurator test's KEYUP KEYDOWN events log box -->

Configuring tap hold options is a mandatory step for using home row mods without pulling your hair. As such, a local QMK development environment is required since the [online configurator] currently does not support configuration settings. If you haven't set up a QMK build environment yet, follow the steps outlined in [this guide].

[online configurator]: https://config.qmk.fm/#/
[this guide]: https://docs.qmk.fm/#/newbs_getting_started

With that out of the way, here comes the most difficult part: understanding the different tap hold configuration settings.

I strongly advise you to attentively read through the [official QMK documentation page on tap hold configuration settings], [the proposed changes to the documentation](https://github.com/qmk/qmk_firmware/blob/155cc17359711a6dd7b67119ec994800588ebaaa/docs/tap_hold.md)[^3] by [sigprof] on <abbr title="Pull Request">PR</abbr> [#9404], and [Okke]'s [cheatsheet on MT and LT behaviour].<sup>[PDF]</sup>

[official QMK documentation page on tap hold configuration settings]: https://docs.qmk.fm/#/tap_hold
[sigprof]: https://github.com/sigprof
[#9404]: https://github.com/qmk/qmk_firmware/pull/9404
[Okke]: https://github.com/okke-formsma/
[cheatsheet on MT and LT behaviour]: https://cdn.discordapp.com/attachments/663573863480950808/757162393209012304/modtap.pdf

Once you're done reading through these links, come back here for a more detailed explanation of each tap hold configuration setting and their relation to home row mods.

#### Ignore Mod-Tap Interrupt

<!-- Mention that this is the default behaviour for layer-taps and that to imitate the hold_on_other_key_press behaviour that is default for mod-taps, you need to merge sigprof's branch -->

Suffice to say that `IGNORE_MOD_TAP_INTERRUPT` is *the* most important tap hold configuration settings that's absolutely necessary for a good home row mods experience.

Why is it so important and relevant to home row mods? To understand, let's look at the default behaviour for mod-taps. The underlying logic of basic mod-taps is quite simple. Did another key get pressed while the user was holding down the mod-tap key? If that's the case, this is a keyboard shortcut; apply the modifier on that pressed key. What if, instead, no key got pressed while the user was holding down the mod-tap? Well, if the user presses and releases a key by itself, without pressing any other key in between, it must mean the user wanted the tapping function of the mod-tap since there is no use to tapping a modifier key all by itself.[^4] Simple enough right? If you want to activate the holding function, just press on another key while holding the mod-tap key.


Here comes the problem with that approach if one were to use home row mods. We like to imagine typing as tapping a sequence of keys all on their own, in order. However, there's quite some overlap between the press and release of each key. Especially so when typing at high speeds. When typing the word "no" for example, we rarely press and fully release <kbd>N</kbd> *before* pressing <kbd>O</kbd>. Try it! If you're not a hunt'n'pecker, this is how you're most likely going to type "no":

<div class="typingScenario">

| Key          | Status
|--------------|--------
| <kbd>N</kbd> | Down/Press
| <kbd>O</kbd> | Down/Press
| <kbd>N</kbd> | Up/Release
| <kbd>O</kbd> | Up/Release

{%
    include img.html
    src="assets/images/home-row-mods/DarkRollingNO.gif"
    title="Right half of a Squiggle keyboard with Colemak-DH"
    alt="Typing &quot;no&quot; on the right half of a Squiggle with dark Colemak-DH MBK choc keycaps"
%}

</div>

Now imagine if <kbd>N</kbd> and <kbd>O</kbd> were both mod-taps — it would be the case if you use home row mods on Colemak like in the animation above. With default tap hold settings, this is bad news. Indeed, typing involves a lot of such rolls, where you press the next letter before having fully released the previous one.

This is the reason why `IGNORE_MOD_TAP_INTERRUPT` was developed and first [released in 2015](https://github.com/qmk/qmk_firmware/commit/f024a462cdaa4a7a345160819bdf2d01fbabc97a) by [Erez Zukerman](https://github.com/ezuk). Though Erez didn't have home row mods in mind when coming up with this solution. In fact, it actually took two more years after the addition of `IGNORE_MOD_TAP_INTERRUPT` to QMK for the [first commit] to the main branch of the QMK firmware GitHub repository to feature home row mods.[^5]

[first commit]: https://github.com/qmk/qmk_firmware/blob/82de4d039d39c87a1df68708f3033926c27f7e6c/keyboards/ergodox/keymaps/adam/keymap.c#L52


Anyways, thanks to his contribution, we now have an option for ignoring key presses that interrupt a mod-tap. That is to say, keys which get pressed while the mod-tap is held down do not automatically activate the modifier of the mod-tap. The mod-tap ignores the interruptions, hence the name.

Now, you might wonder... If mod-taps ignore key presses that happen while it is held down, what do they base themselves on to determine when to activate the modifier and when to send the basic keycode? The answer is that it relies on the tapping term, a user defined period of time which starts when the key gets pressed. Been holding the mod-tap for more than the time defined in the tapping term? Activate the modifier. Pressed the key and then released it before the tapping term expired? That's the QMK definition of a "tap", send the letter!

As long as your fingers don't linger on the keys for longer than the tapping term, you won't get accidental mod activations.

#### Tapping Term

The tapping term is an important concept to grasp for home row mods. As we've just seen in the previous section on ignore mod tap interrupt, the tapping term is what helps to tell tap and hold apart.

The tapping term, in and of itself, is a very basic thing to understand. It is simply a period of time expressed in milliseconds that the user has defined. A timer starts on every key press and constantly checks whether the tapping term for that key has expired yet or not. The timer stops when the key is released. It is good to note that each pressed key is tracked by a specific, different timer, so to speak. When you press <kbd>A</kbd>, a timer starts but pressing another key like <kbd>O</kbd> does not bump up the timer that got started when you press <kbd>A</kbd>.[^6]

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

{%
    include img.html
    src="assets/images/home-row-mods/DarkPermissiveHoldNO.gif"
    title="Right half of a Squiggle keyboard with Colemak-DH"
    alt="Doing Ctrl+O, permissive hold style, on the right half of a Squiggle with dark Colemak-DH MBK choc keycaps"
%}

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

With Auto Shift and Retro Shift, you can confidently eradicate all Shift keys from your keymap.[^7]

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

## Using home row mods with KMonad

Aside from QMK, [KMonad] is another piece of software which allows the implementation of home row mods. Its greatest perk is that it does not require a special keyboard like QMK does (although Hasu's USB-to-USB controller can turn any USB keyboard into a QMK-compatible keyboard). It's a cross-platform application that runs on the computer, not on the keyboard chip.

KMonad isn't the only computer program which features mod-taps, it's been preceded by [xcape](https://github.com/alols/xcape) and <a title="Space and Shift (archived link in Japanese)" href="https://web.archive.org/web/20020215203809/http://hp.vector.co.jp/authors/VA002116/sands/">SandS</a>, the very first mod-tap ever. What sets it apart though is that, unlike all those other programs, it features much more configuration options for mod-taps. On most, you're limited to simply tweaking the tapping term. No concept of something akin to `IGNORE_MOD_TAP_INTERRUPT`.

That's not to say that KMonad uses the same configuration options as QMK does. They're different programs made by different people.

If you want to tweak the mod-tap functionality, which by the way is called a "multi-use button" in KMonad, the way to go is to use the button that fits your desired behaviour. KMonad has a bunch of mod-tap buttons. The one that's of interest for home row mods is `tap-hold-next-release`.

`tap-hold-next-release` works best for home row mods as it reliably acts exactly like a modifier past the tapping term and activates the "tapping" button in rolling sequences. For more information on how it works and how the other multi-use buttons work, refer to the [configuration tutorial], and in particular, the [section on multi-use buttons].

As with all the other `-hold` multi-use buttons, `tap-hold-next-release` takes in three arguments:

1. A timeout value expressed in milliseconds which is akin to the tapping term used by QMK
2. The "tapping" button. For home row mods, this will correspond to the home row letter.
3. The "holding" button. For home row mods, this will correspond to the modifier.

To give an example, this would be the KMonad syntax for an <kbd>A</kbd> key that acts as a GUI modifier when held, with a defined timeout hold value of 200 milliseconds.

{% highlight clojure %}
(tap-hold-next-release 200 a lgui)
{% endhighlight %}

In the same spirit that we've defined an alias for mod-taps in the section on getting started with home row mods on QMK to make the layout more readable, we can give a short name to mod-taps in KMonad with `defalias`.

{% highlight clojure %}
(defalias gui_a (tap-hold-next-release 200 a lgui))
{% endhighlight %}

As you may have noticed, KMonad uses a lisp-like syntax for its configuration language. For more information on how to configure KMonad, you're invited to read through the [configuration tutorial], which has already been linked, or through the [public user configurations].

[public user configurations]: https://github.com/david-janssen/kmonad/blob/master/keymap/user
[configuration tutorial]: https://github.com/david-janssen/kmonad/blob/master/keymap/tutorial.kbd
[section on multi-use buttons]: https://github.com/david-janssen/kmonad/blob/98317531da8b9c2f21d5cb80b748eb23ef8f6b63/keymap/tutorial.kbd#L601
[KMonad]: https://github.com/david-janssen/kmonad

### Getting started with home row mods on KMonad

Install [KMonad] by following the [installation instructions]. If you encounter troubleshooting issues, make sure to check out the [FAQ](https://github.com/david-janssen/kmonad/blob/master/doc/faq.md).

[installation instructions]: https://github.com/david-janssen/kmonad/blob/master/doc/installation.md

Once KMonad is installed on your PC, the next step is to create a new `.kbd` file. Call it however you want. This will be the configuration file that you will pass as input to KMonad when launching it.

The KMonad configuration file can be broken up in four main blocks:

1. `defcfg`
2. `defsrc`
3. `defalias` (optional)
4. `deflayer`

#### 1. defcfg
<!-- Add mention and explanations of `cmp-seq` -->

In a nutshell, this is where you tell KMonad what keyboard you want it to affect and where and how to find it in your system. Naturally, the process will look a bit different based on the OS you use. Click on the name of your operating system to be directed to the relevant instructions: [Linux](https://github.com/david-janssen/kmonad/blob/2f20899630d95deed66cd8b2f0dcc3387a3e63d7/keymap/tutorial.kbd#L80...L95), [Windows](https://github.com/david-janssen/kmonad/blob/2f20899630d95deed66cd8b2f0dcc3387a3e63d7/keymap/tutorial.kbd#L98...L112), [MacOS](https://github.com/david-janssen/kmonad/blob/2f20899630d95deed66cd8b2f0dcc3387a3e63d7/keymap/tutorial.kbd#L115...L128).

The `defcfg` code block looks like this:

{% highlight clojure %}
(defcfg
  ;; For Linux
  input  (device-file "/dev/input/by-id/usb-04d9_daskeyboard-event-kbd")
  output (uinput-sink "My KMonad output"

  ;; For Windows
  input  (low-level-hook)
  output (send-event-sink)

  ;; For MacOS
  input  (iokit-name "my-keyboard-product-string")
  output (kext)

  ;; This option tells KMonad to let non-configured keys act normal
  fallthrough true
)
{% endhighlight %}

#### 2. defsrc

This is where you specify the physical keys on which you want KMonad to apply. If all you want to do is add home row mods to your board and keep normal behaviour for every other key, enable `fallthrough` in the `defcfg` block and paste the following `defsrc` block to your `.kbd` configuration file:

{% highlight clojure %}
(defsrc
    a    s    d    f    g    h    j    k    l    ;
)
{% endhighlight %}

It doesn't matter whether you're a French speaker whose home row spells out
<kbd>Q</kbd><kbd>S</kbd><kbd>D</kbd><kbd>F</kbd><kbd>G</kbd><kbd>H</kbd><kbd>J</kbd><kbd>K</kbd><kbd>L</kbd><kbd>M</kbd>
or a Russian speaker whose home row spells out
<kbd>Ф</kbd><kbd>Ы</kbd><kbd>В</kbd><kbd>А</kbd><kbd>П</kbd><kbd>Р</kbd><kbd>О</kbd><kbd>Л</kbd><kbd>Д</kbd><kbd>Ж</kbd>,
 the above code still applies since KMonad operates at a low-level and deals with keycodes as opposed to keysyms. The `a` and `;` button names are simply labels based on US QWERTY to make configuration easier. Don't read them as the "keys that produce, respectively, the symbols 'a' and ';' on the screen when pressed" but rather the "home row pinky keys".

#### 3. defalias

As mentioned in the beginning of this section on KMonad, if you intend to use mod-taps/multi-use buttons, you should consider using aliases in order to keep a readable layout.

Aliasing all home row mods is repetitive and rather long, so I recommend using the [KMonad code generator], found further down the guide.

[KMonad code generator]: #kmonad-home-row-mods-code-generator

For illustrative purposes, here's the `defalias` block of a standard keymap using the GACS/◆⎇⎈⇧ order for the home row mods, and 200ms for the tapping term:

{% highlight clojure %}
(defalias
    met_a (tap-hold-next-release 200 a lmet)
    alt_s (tap-hold-next-release 200 s lalt)
    ctl_d (tap-hold-next-release 200 d lctl)
    sft_f (tap-hold-next-release 200 f lsft)

    sft_j (tap-hold-next-release 200 j rsft)
    ctl_k (tap-hold-next-release 200 k rctl)
    alt_l (tap-hold-next-release 200 l lalt)
    met_; (tap-hold-next-release 200 ; rmet)
)
{% endhighlight %}

Note: KMonad calls the GUI modifier "Meta", abbreviated as `lmet` and `rmet`.

#### 4. deflayer

This block is used to translate the previously declared `defsrc` block into your desired output. As such, it must follow the same structure i.e. layout and number of buttons.

An important thing to note is that if you want to use the aliases you've defined, you must prepend them with a `@`.

Continuing with the example we've been working with, what you would need to write into the `deflayer` is the following:

{% highlight clojure %}
(deflayer homerowmods
    @met_a   @alt_s   @ctl_d   @sft_f   g   h   @sft_j   @ctl_k   @alt_l   @met_;
)
{% endhighlight %}

Here we've named the layer `homerowmods` but you can name the layer whatever you want.

#### Final result

If we fuse together the four different blocks that we have developed in the last subsections and assume that we're on Windows, this would be the result:

{% highlight clojure %}
(defcfg
  ;; For Windows
  input  (low-level-hook)
  output (send-event-sink)

  ;; This option tells KMonad to let non-configured keys act normal
  fallthrough true
)

(defsrc
    a    s    d    f    g    h    j    k    l    ;
)

(defalias
    met_a (tap-hold-next-release 200 a lmet)
    alt_s (tap-hold-next-release 200 s lalt)
    ctl_d (tap-hold-next-release 200 d lctl)
    sft_f (tap-hold-next-release 200 f lsft)

    sft_j (tap-hold-next-release 200 j rsft)
    ctl_k (tap-hold-next-release 200 k rctl)
    alt_l (tap-hold-next-release 200 l lalt)
    met_; (tap-hold-next-release 200 ; rmet)
)

(deflayer homerowmods
    @met_a   @alt_s   @ctl_d   @sft_f   g   h   @sft_j   @ctl_k   @alt_l   @met_;
)
{% endhighlight %}

Once your configuration file is ready, open a terminal and type in the exact name of the binary you've downloaded alongside the name of your config file to [start KMonad](https://github.com/david-janssen/kmonad/blob/master/doc/faq.md#how-do-i-start-kmonad).

For a more detailed explanation on everything KMonad has to offer, click [here](https://github.com/david-janssen/kmonad/#configuration).

### Home row mods code generator {#kmonad-home-row-mods-code-generator}

For your convenience, below you can find a form that you can fill in with your options in order to generate mod-tap aliases and the home row.

<details>
<summary markdown="span"> Additional information</summary>

For best results, make sure to use US QWERTY on your OS since the generated code uses the default KMonad keycode labels which are based on US QWERTY.

If your layout isn't present in the list, select "Other" in the dropdown list and fill in all the ten characters of your home row. To accommodate layouts such as QWERTY and [Halmak](https://github.com/MadRabbit/halmak), a limited set of punctuation characters are accepted in the custom layout field. They are `-`, `.`, `,`, `/`, `\`, and `;`. If you wish to use [upper/lower row mods](#upperlower-row-mods), you can also select "Other" and fill in the text field with the upper/lower row of your keyboard layout.

The order options use the notation described in the section on [home row mods orders](#home-row-mods-order). The leftmost modifier is the one on the pinky and the rightmost modifier is the one on the index finger (not the inner index column). If you wish to use another home row mods order, select "Other" in the dropdown list and specify your desired order in the same notation. [Alternative home row mods layouts](#alternative-home-row-mods-layout) are not supported, but you're free to use `_` to omit some modifiers if you want less than 2×4 home row mods.

In case you're curious why `LALT` is used in place of `RALT` in the generated code for the right-hand Alt mod-tap, click [here](#use-left-and-right-modifiers-but-beware-of-altgr) to jump down to the section on modifier handedness and possible gotchas with the Right Alt mod.
</details>

<form style="background: #131317;border: 25px solid #131317; border-radius: 25px;">
<p>
Select your layout<br>
<select name="layouts" onchange="showTextField('KMonadLayout')">
<option value="ASDFGHJKL;" selected> QWERTY/AZERTY/QWERTZ</option>
<option value="AOEUIDHTNS"> Dvorak</option>
<option value="ARSTDHNEIO"> Colemak vanilla</option>
<option value="ARSTGMNEIO"> Colemak DH</option>
<option value="ASHTGYNEOI"> Workman</option>
<option value="RSTHDMNAIO"> RSTHD</option>
<option value="YIEA.DSTNB"> BEAKL15</option>
<option value="OTHER" id="otherKMonadLayout"> Other </option>
</select>
</p>
<div id="customKMonadLayout" style="display:none">
Specify the ten characters of the row you want to apply mod-taps to.<br>Accepted characters: `A–Za–z0–9.,;/\'-`<br>
<input type="text" maxlength="10" id="customKMonadLayoutInput" pattern="[A-Za-z0-9-.,;\/'\\]{10}"  title="Lowercase is allowed too">
</div>

<p>
Enter your desired tapping term (in ms)<br>
<input type="number" name="KMonadTappingTerm" min="1" value="200">
</p>

<p>
Select your home row mods order<br>
<select name="homeRowModsOrders" onchange="showTextField('KMonadOrder')">
<option value="GASC"> GASC</option>
<option value="GACS" selected> GACS</option>
<option value="SCGA"> SCGA</option>
<option value="CAGS"> CAGS</option>
<option value="OTHER" id="otherKMonadOrder"> Other </option>
</select>
</p>
<div id="customKMonadOrder" style="display:none">
Specify your desired [home row mods order](#home-row-mods-order)<br>Accepted characters: `GASC_`<br>
<input type="text" id="customKMonadOrderInput" maxlength="4" pattern="[_GgAaSsCc]{4}"  title="Lowercase is allowed too.">
</div>

<p>
Select your desired alias style<br>
<select name="aliasStyle">
<option value="HOME"> HOME</option>
<option value="MOD" selected> MOD</option>
</select>
</p>

<p style="margin-bottom: 0em;">
<input type="button" onclick="generateKMonadCode(form.elements)" name="submit" value="Generate">
</p>

<div id="KMonadGeneratorErrors" style="display: none;min-width: 100%;text-align: center;background: #f006; border-radius:15px; margin-top: 1em;"></div>

</form>

<div id="generatedKMonadAliases" style="display:none"></div>
<div id="generatedKMonadHomeRow" style="display:none"></div>

# Tips & Tricks {#tips-and-tricks}

<!-- Tips -->
## Quick swift taps

The most important tip I can give is to get into the habit of typing with quick, swift taps. The goal is to reduce the time between press and release to the minimum. Don't focus on pressing keys, but on *tapping* keys. Pressing and releasing should *feel* like one single action, in the same way you tap the WinKey when you want to open the start menu on Windows.

For some people, the transition to home row mods is little jarring because they got used to holding a key down for a little a less than the key repeat delay which is set by default to 500–1000ms on most operating systems.

Parallels can be made between the key repeat delay and the tapping term. In both cases, releasing the key before the delay expires will result in one single letter to be produced. In that case, it is tempting to say that a person who's used to a key repeat delay of 500ms should crank up the default tapping term of 200ms up to 500ms. It can be seen as trading key auto-repeat for modifier activation. That will certainly help to avoid accidental mods. If the user never accidentally auto-repeats keys then he won't accidentally activate a modifier. In theory, this all sounds good and dandy but in practice, you'll realize that having to hold a key for ≥500ms is actually pretty long. It's actually so high that QMK will automatically enable [permissive hold](#permissive-hold) to allow you to trigger a keyboard shortcut without having to wait half a second to pass.

My point is that the quicker your taps are, the more you can afford to reduce the tapping term which has the consequence of letting you trigger keyboard shortcuts much more rapidly.

Before you get the wrong idea, I want to make it clear that I am *not* telling you to increase your WPM speed. By "swift" taps, I mean avoiding keeping keys pressed for needlessly long. Don't linger your fingers on the keys. It's not a matter of reducing the time it takes you to type the next character. You can take a 10s break before typing each character and achieve a dramatically low WPM but you can nonetheless tap an individual key briskly.

Though it is not out of the question that learning to tap swiftly may lead to faster WPM in the long run.

## Finding the sweet spot

Prior to looking for tips to find the sweet spot for the tapping term, I urge you to make sure to enable "[Ignore Mod Tap Interrupt](#ignore-mod-tap-interrupt)" first. Too many people make the mistake of endlessly tweaking the tapping term in the hope that they'll eventually find the golden number that will let them use home row mods with no accidents. You can increase or decrease the tapping term all you want but that won't help with rolling letters if your mod-taps aren't configured to ignore interruptions.

If they *are* configured to but you still get accidental alphas or modifiers occasionally, here's what you can try.

First of all, when starting out with home row mods, a better baseline is a tapping term that's too high than one that's too low. So if you have a lot of accidental mod activations, crank up the tapping term to get into a zone where you rather have accidental alphas.

Once you're there, the goal is to progressively lower the tapping term in order to get closer to your optimal setting.

A method you can use to gauge where you're at is to simply try to type a text excerpt entirely in lowercase in the [text area found at the end of this tip](#tapping-term-test-area). It will alert you any time you activate a modifier. If you find that you get capital or missing letters all over the board, try to be more careful about the way you tap the keys (see [quick swift taps](#quick-swift-taps)). If adapting your typing style does not help, then increase the tapping term. In case you find a particular mod-tap key to be particularly problematic, consider enabling tapping term per key and increase the tapping term for that key.

For [per key settings](https://docs.qmk.fm/#/tap_hold?id=tapping-term), it is recommended to define them relative to the global tapping term. Namely, prefer `return TAPPING_TERM ± offset` over `return SOME_ABSOLUTE_VALUE`. The reason being that, in the case of special per key terms, what matters isn't so much the absolute value but its relation to the more widespread global setting. As you grow more comfortable with home row mods, you may find yourself able to lower the tapping term further and if you do, you'll want to have the per-key settings move along at the risk of making them feel overly long (or short).

```c
uint16_t get_tapping_term(uint16_t keycode, keyrecord_t *record) {
    switch (keycode) {
        case LALT_T(KC_S):
        // Not recommended
            return 130;
        case SFT_T(KC_F):
        // Recommended
            return TAPPING_TERM + 50;
        default:
            return TAPPING_TERM;
    }
}
```

That being said, it won't take you long to get annoyed from having to edit `config.h`, recompile the firmware and flash it onto your board anytime you want to tweak the tapping term, even just slightly, during this exercise. For this exact reason, a fantastic person going by the nickname of "precondition" has created three new quantum keys that let you tweak the tapping term on the fly.

| Key       | Description                                                                |
|-----------|----------------------------------------------------------------------------|
| `TK_PRINT`| "Tapping Term Keys Print": Types the current tapping term, in milliseconds |
| `TK_UP`   | "Tapping Term Keys Up": Increases the current tapping term by 5ms          |
| `TK_DOWN` | "Tapping Term Keys Down": Decreases the current tapping term by 5ms        |

In order to use them, merge the commits of PR [#11036](https://github.com/qmk/qmk_firmware/pull/11036) into your personal branch of QMK (git knowledge required), and enable the feature in `rules.mk` with `TAP_TERM_KEYS_ENABLE = yes`.

Once you can easily type long strings of lowercase letters, the next step is to practice on text containing capital letters.

If you get accidental superfluous characters when trying to capitalize, decrease your tapping term (or consider using [permissive hold](#permissive-hold)).

Rinse and repeat until you're satisfied.

### Tapping term test area

Write a short story all in lowercase with home row mods. In case you accidentally trigger any of the modifiers, the corresponding modifier keys under the text area will light up in red and a short beep will be emitted to alert you.

<textarea id="tappingTermTestArea" rows="5" onkeydown="processModifierPress(event)"  onkeyup="processModifierRelease(event)" onfocusout="clearModifiers(event)" placeholder="once upon a time..."></textarea>

<!-- Improve the responsiveness of the modifiers row -->
{::options parse_block_html="false" /}
<div class="modifiersRow">
    <div class="leftModifiers" style="display: flex;">
        <div class="modifierKey" id="ShiftLeft"> L Shift </div>
        <div class="modifierKey" id="ControlLeft"> L Ctrl </div>
        <div class="modifierKey" id="OSLeft"> L GUI </div>
        <div class="modifierKey" id="AltLeft"> L Alt </div>
    </div>

    <div class="modifiersRowSeparator"></div>

    <div class="rightModifiers" style="display: flex;">
        <div class="modifierKey" id="AltRight"> R Alt </div>
        <div class="modifierKey" id="OSRight"> R GUI </div>
        <div class="modifierKey" id="ControlRight"> R Ctrl </div>
        <div class="modifierKey" id="ShiftRight"> R Shift </div>
    </div>

</div>
{::options parse_block_html="true" /}

<br>

## Use left and right modifiers but beware of AltGr!

Let's talk about `RALT` (Right Alt, AltGr) first.
The reason why you need to watch out for `RALT` is that while most right versions of modifiers act exactly the same as their left counterpart, this is not necessarily the case for <kbd>⎇ Alt</kbd>. Everywhere else except in the US,[^8] the right Alt becomes <kbd>AltGr</kbd> which is used as a momentary layer switch to access additional symbols. Keep this in mind when composing your right hand home row mods or you might get a surprise!

If this odd case bothers you, you can either use American layout(s) which make(s) no distinction between left and right Alt or you can use the left version of modifiers for all the home row mods. Separating left and right modifiers, as done in the example shown at the beginning of "[Using home row mods with QMK](#using-home-row-mods-with-qmk)" and in the output of the home row mods code generators, is not strictly necessary for a functioning setup but doing so offers some perks.

First of all, it allows to hop from one modifier to its counterpart fluidly. What do I mean? Let's say you want to produce, using the home row mods setup illustrated below, capital "Q" which we'll assume is situated on the left hand of your keyboard. To do that, imagine you first hold `MT(MOD_LSFT, KC_F)` to activate Shift but then you realize that this is the wrong Shift (proper touch typing technique advocates for the use of the opposite hand when Shifting letters).

{%
    include figure.html
    src="assets/images/home-row-mods/RealisticHRM-Dark-Miryoku.png"
    caption="GACS/◆⎇⎈⇧ home row mods on US QWERTY"
    alt="KLE render of dark blue QWERTY home row keycaps with mod icons in the center and mod name on the side of the keycaps"
%}

To remedy this, press and hold `MT(MOD_RSFT, KC_J)` without releasing your finger off `MT(MOD_LSFT, KC_F)` and then, while you're keeping `MT(MOD_RSFT, KC_J)` pressed, release `MT(MOD_LSFT, KC_F)`.
At this stage, you're now holding Shift with only the right hand and can now tap <kbd>Q</kbd> to produce "Q".

If, instead, your <kbd>J</kbd> key was `MT(MOD_LSFT, KC_J)`, you wouldn't be able to do that. If you hold both Shift mod-taps and then release the one on the left half of the keyboard, holding the Shift mod-tap on the right side loses all its effects when you lift up your left middle finger. It is not doing anything. So when you tap <kbd>Q</kbd> while holding the right-hand Shift mod-tap, you'll get lowercase "q".

<!-- insert KLE gif -->

The only way to properly hop modifiers when both of them are programmed to send the exact same modifier, is to fully release the wrong mod-tap you've first pressed before pressing and holding the correct one, on the opposite hand.

There is a catch though. If you realize early on that this is the incorrect hand to use the modifier with, you will instinctively fully release the incorrect mod-tap in order to hop to the correct one. If you release the incorrect mod before the tapping term, which is very likely to happen unless you're slow at catching yourself using the wrong hand for the modifier, that will be considered as a tap by the firmware and will thus send the tap keycode, "f" in our case. Doing so thus puts you at risk of accidental alphas when hopping modifiers.

To recap, the problem with using the same version of Shift for both hands:
- Hold left hand home row Shift
- Hold right hand home row Shift
- Let go of left hand home row Shift
- While holding right hand home row Shift, press random letters with left hand
- The letters are not capitalized

Secondly, distinguishing between home row mods of the left hand from home row mods of the right hand can be useful if you want to detect typing rolls. For more info, refer to the "[rolled modifiers cancellation](#rolled-modifiers-cancellation)" trick.


## Putting home row mods on (almost) all layers

If you only have home row mods on the base layer and you desire to apply a modifier to a key that's situated in a layer, you'll need to follow a strict timing and sequence of key presses for it to work. First, you'll need to keep the home row key pressed for longer than your tapping term, then activate the layer you want to access without letting go of the home row mod and finally tap the key on the layer.

For more freedom, you can consider turning the home row on your other layers into mod-taps too. Better yet, see if you can afford to use the normal modifier keycodes on the home row instead. For example, many people have a navigation layer momentarily activated with a thumb key with pure modifier keys on the home row of the left hand and arrow keys on the right hand.

{%
    include figure.html
    href="assets/images/home-row-mods/Squiggle-sample-nav-layer.png"
    src="assets/images/home-row-mods/Squiggle-sample-nav-layer.png"
    alt="Squiggle with dark MBK caps with legends of the navigation layer"
    caption="Example of a thumb-activated navigation layer with modifiers on the left-hand home row.<br>(The dotted keys indicate <code>KC_TRNS</code>)"
%}

When porting home row mods through your layers, take a minute to consider whether you really need home row mods on a certain layer. While it may be useful on a navigation or accents layer, it's probably not very useful to include in a symbol layer since you're unlikely to feel the need to do <kbd>Ctrl</kbd>+<kbd>!</kbd> or <kbd>Alt</kbd>+<kbd>"</kbd>.

## Disabling home row mods when gaming

Home row mods and video games do not get along very well. It's easy to see why. If <kbd>A</kbd>, <kbd>S</kbd>, <kbd>D</kbd> all act as modifiers when held down, you don't risk going very far in the video game if you use <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> to move around. There have also been reports of the tapping function of a mod-tap not working reliably with certain video games.

The common solution to this problem is to create a gaming layer where you get rid of the home row mods.

## Shift thumb keys

*Not to be confused with the [thumb-shift Japanese input method](https://en.wikipedia.org/wiki/Thumb-shift_keyboard).*

The Shift modifier is unlike all the others. Unless it's paired with another modifier, it feels more like a layer switch than a key we can use to execute keyboard shortcuts. In bicameral scripts, it is used to capitalize letters and even unicameral scripts which do not distinguish case such as Arabic and Korean also use Shift to access additional graphemes.

<div class="img-to-hover">
<figure>
<img src="assets/images/home-row-mods/BaseArabic.jpeg" alt="Base Arabic legends on a 60% keyboard">
<img src="assets/images/home-row-mods/ShiftArabic.jpeg" class="img-shift" alt="Shifted Arabic legends on a 60% keyboard">
<figcaption>
A variant of the Arabic keyboard.
</figcaption>
</figure>
</div>

Being such a critical and frequently used "layer" switch key, the Shift modifier is a great candidate for a thumb key.

Using a thumb key bypasses some of the constraints of home row Shift. If you own an ergonomic keyboard with a good thumb cluster, you have the possibility of placing a dedicated Shift key in a comfortable position, thus freeing yourself of the inherent timing constraints of mod-taps.

If you dedicate a thumb key to only send Shift and nothing else, you can even do away with chording all together by using a [One-Shot] Shift key. As an added benefit, One-Shot Shift also allows you to eradicate accidental overcapitalization which happens when you hold Shift for a tad too long and send two uppercase characters instead of one when capitalizing words like, for example, in the sentence: "THe Grand DUchess Anna PEtrovna oF russia".

[One-Shot]: https://docs.qmk.fm/#/one_shot_keys

An important concern with a normal or One-Shot Shift thumb key, however, is that it requires dedicating a key to this use alone which isn't ideal when you aim for low finger travel and/or you're not a fan of losing the thumb home position. For those feeling concerned about this, a Shift mod-tap thumb key can still prove useful nonetheless.

Mod-tapping the resting home thumb key(s) gives you the same advantage as mod-tapping the home row keys: elimination of the finger/hand movement needed to activate a modifier.

In any case, you must be willing to trade off a layer thumb key for a Shift thumb key; a dealbreaker for some.

As for the question on whether to keep the Shift mod-tap on the home row, it is up to you. Some may argue that the redundant home row Shift keys are useless while others use the Shift thumb keys exclusively for uppercase letters and use the home row Shift for the rest (shifted symbols, shifted Vim commands, keyboard shortcuts, chorded combinations with other modifiers, ...).

## Use Caps Lock

<kbd>Caps Lock</kbd> is the stuff of many jokes and is considered by many to be useless, or even annoying. However for home row mods users who do not have Shift on their pinkies or their thumbs, it is a good solution for typing strings of capital letters. It avoids the awkward back-and-forth swapping of hands that happens when keeping Shift activated by using the opposite hand in order to free the other one from holding Shift to let it type a certain key.

Nonetheless, it still doesn't deserve to be placed in the outer home row position.

## Mechanical switch type

Light tactile switches or clicky switches help with making short, light, snappy taps, and the feedback masks the lag of tap on release.

<!-- Tricks -->

## Using non-basic keycodes in mod-taps

As opposed to KMonad, QMK does not allow for non-basic keycodes such as shifted keycodes (e.g. `KC_DLR`) and custom keycodes in mod-taps. If you try to pass in a non-basic keycode to the `MT()` function, unexpected things will happen because it will try to cast down the special keycode you passed in as a `uint8_t` data type.

In the case of a keyboard shortcut such as `KC_DLR` (which is merely an alias for `S(KC_4)`) or `ALGR(KC_COMMA)` or a shortcut involving more than one modifier such as `S(A(KC_2))`, all the applied modifiers to the tapped key will be stripped, and you'll end up with only the unmodified basic keycode upon tapping the mod-tap. Although the holding function will still function exactly as expected. Thus, tapping `MT(MOD_LALT, KC_DLR)` will produce "4" on an US QWERTY keyboard and tapping `RCTL_T(S(A(KC_2)))` will produce "2" instead of "€" on US MacOS.

As for custom keycodes/macros, the output you'll get will be dependant on the position of the custom keycode in your `custom_keycodes` enum and the amount of enabled quantum keycodes. The value of `SAFE_RANGE` is determined by the `quantum_keycodes` enum found in `qmk_firmware/quantum/quantum_keycodes.h`. Enabling features such `KEY_LOCK_ENABLE` and `FAUXCLICKY_ENABLE` in `rules.mk` will activate additional quantum keycodes and push up the value of `SAFE_RANGE`.

The very first custom keycode/macro in the enum is always assigned to `SAFE_RANGE`. Trying to use it in a mod-tap may produce `KC_ENTER` on tap. The next custom keycode in your enum (which will be assigned the value of `SAFE_RANGE+1`), against all odds, will *not* produce your expected macro when tapped in the context of a mod-tap but instead may emit the `KC_ESCAPE` keycode. And on it goes down the [list of keycodes], *generally* starting from the punctuation block. In this situation given as an example,`SAFE_RANGE+5` will produce `KC_EQUAL`, et cetera, when casted down to `uint8_t`.

[list of keycodes]: https://github.com/qmk/qmk_firmware/blob/ccb15c2d2923903a925d253eec66fd4356ceea85/tmk_core/common/keycode.h#L77

Naturally, this can be a little disappointing. Especially if you want to [put home row mods on something like a symbol layer](#putting-home-row-mods-on-almost-all-layers).

Fear not! As there exists a trick which doesn't force you to give up on the idea of using non-basic keycodes in mod-taps or to recode the entire mod-tap logic from scratch.

The idea behind the trick is to create a mod-tap key as usual and let QMK naturally deal with the holding function of the mod-tap as well as the decision between tap and hold but override the normal tapping behaviour with our custom code in `process_record_user`.

When creating the mod-tap key with QMK's built-in `MT()` function, you need to choose a dummy keycode for the tapping function that you know you'll never actually use. This can be any of the function keys in the range 13–24 or a keycode that's unsupported by all major operating systems like `KC_LANG6` or `KC_CRSEL`, or a dummy custom keycode created solely for this purpose. Regardless of what you choose, the OS will never receive the dummy keycode from your keyboard.

Let's say we want to create a mod-tap key that acts as a Command/GUI modifier on hold and sends "#" (<kbd>Shift</kbd>+<kbd>3</kbd>) on tap. Any of the following is a good candidate:

{% highlight js %}
#define GUI_HASH MT(MOD_LGUI, KC_F23)
#define CMD_HASH LGUI_T(KC_LANG6)

enum custom_keycodes {
    MT_POUND = SAFE_RANGE
};
#define HOME_HASH CMD_T(MT_POUND)
{% endhighlight %}

(Note: `MT(MOD_LGUI, kc)`, `LGUI_T(kc)`, and `CMD_T(kc)` are all equivalent)

To make things easier to read, I strongly recommend using aliases. How are you supposed to know, from cursory glance, that `MT(MOD_LGUI, KC_F23)` will actually output "#" on tap and not send <kbd>F23</kbd>?

It can be tempting to use `LGUI_T(KC_HASH)` and it would still work but you need to realise that `LGUI_T(KC_HASH)` is the same as `LGUI_T(S(KC_3))` which, as explained earlier, gets converted to `LGUI_T(KC_3)`. This means that if you override the default tap behaviour for `LGUI_T(KC_HASH)`, you will also override the behaviour of `LGUI_T(KC_3)`. For this reason, it's not recommended to do that.

The next step is to write a case for our newly created special mod-tap in the switch statement of the `process_record_user` function.

{% highlight c %}
case HOME_HASH:
  if (record->tap.count > 0) {
    if (record->event.pressed) {
      // send advanced keycode, etc.
      // the 16 bit version of the `tap_code` function is used here
      // because KC_HASH is a non-basic keycode.
      tap_code16(KC_HASH);
    }
    // do not continue with default tap action
    // if the MT was pressed or released, but not held
    return false;
  }
break;
{% endhighlight %}

Finally, all that's left to do is to place `HOME_HASH` wherever you want it to be in your layout and flash the new keymap onto your board.

## Combined mod-taps on the lower row

This tip is particularly useful if you use KMonad on a keyboard without N-key roll over which resort to blocking in order to prevent ghosting — QMK-compatible keyboards do not suffer from ghosting issues as they're mostly mechanical keyboards that use diodes. If that previous sentence sounded like technical gobbledegook to you, read through [this Deskthority wiki page](https://deskthority.net/wiki/Rollover,_blocking_and_ghosting) to learn more about what all those terms mean.

By concentrating all modifiers in the middle of the alpha block, you are much more likely to run into dropped key presses as a result of ghost-blocking. Namely, you may notice that you can't do <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>T</kbd> using home row mods. In such a case, a dedicated <kbd>Ctrl</kbd>+<kbd>Shift</kbd> mod-tap can prove very useful. Given the fact that this problem is most likely to happen a row staggered keyboard, you can intuitively place the combined mod-taps in between the home row mods on the lower row.

As illustrated here on this 60% ANSI keyboard sporting the [GACS/◆⎇⎈⇧](#gacs) home row mods order.

![Black 60% ANSI keyboard with side-printed QWERTY legends sporting GACS home row mods and G+A A+C C+S lower row mods](assets/images/home-row-mods/combined-lower-row-mod-taps-row-staggered.png)

## Rolled modifiers cancellation
Let's look into the situation where one uses home row mods on a keyboard layout that favors rolls. The most famous rolls-focused keyboard layout is Colemak, so we'll use the following home row mods setup as a case study.

{%
    include figure.html
    src="assets/images/home-row-mods/RealisticHRM-Dark-SideLegends-Colemak-GASC.png"
    caption="GASC/◆⎇⇧⎈ home row mods on Colemak"
    alt="KLE render of dark blue Colemak home row keycaps with mod icons in the center and mod name on the side of the keycaps"
%}

Let's imagine that this Colemak user is aiming for the lowest tapping term on his Shift mod-taps in order to capitalize letters in a faster and more responsive way. He's gone so low on the tapping term of his Shift mod-taps, that rolling over <kbd>S</kbd> and <kbd>T</kbd> produces "T" instead of the expected "st". Same story for rolls over <kbd>E</kbd> and <kbd>N</kbd>.
If he's otherwise happy with the tapping term of his Shift mod-taps, what can he do to help him type "The first event" rapidly and accurately without ending up with "The firT evNt" instead?

It is tempting to say that he should use `TAPPING_TERM_PER_KEY` and increase the tapping term of his Shift mod-taps in order to reduce the accidental mod activations but aside from the "st" and "en" bigrams, this user is satisfied with the speed of activation of Shift for every other combination of letters. Increasing the tapping term will probably help with rolling "st" and "en" but it will also ever so slightly affect every other bigram involving "s" or "e".
This hypothetical user can either adapt himself to it or if he really wants to, he can adapt the firmware *to himself*.

To do so, he can use this nifty piece of code in `process_record_user` which takes advantage of the distinction between left Shift and right Shift:

{% highlight c %}
bool process_record_user(uint16_t keycode, keyrecord_t *record) {
    switch (keycode) {

    case RCTL_T(KC_N):
        /*
        This piece of code nullifies the effect of Right Shift when tapping
        the RCTL_T(KC_N) key.
        This helps rolling over RSFT_T(KC_E) and RCTL_T(KC_N)
        to obtain the intended "en" instead of "N".
        Consequently, capital N can only be obtained by tapping RCTL_T(KC_N)
        and holding LSFT_T(KC_S) (which is the left Shift mod tap).
        */

        /*
        Detect the tap.
        We're only interested in overriding the tap behaviour
        in a certain cicumstance. The hold behaviour can stay the same.
        */
        if (record->tap.count > 0) {
            // Detect right Shift
            if (get_mods() & MOD_BIT(KC_RSHIFT)) {
                // temporarily disable right Shift
                // so that we can send KC_E and KC_N
                // without Shift on.
                unregister_mods(MOD_BIT(KC_RSHIFT));
                tap_code(KC_E);
                tap_code(KC_N);
                // restore the mod state
                add_mods(MOD_BIT(KC_RSHIFT));
                // to prevent QMK from processing RCTL_T(KC_N) as usual in our special case
                return false;
            }
        }
         /*else process RCTL_T(KC_N) as usual.*/
        return true;

    case LCTL_T(KC_T):
        /*
        This piece of code nullifies the effect of Left Shift when
        tapping the LCTL_T(KC_T) key.
        This helps rolling over LSFT_T(KC_S) and LCTL_T(KC_T)
        to obtain the intended "st" instead of "T".
        Consequently, capital T can only be obtained by tapping LCTL_T(KC_T)
        and holding RSFT_T(KC_E) (which is the right Shift mod tap).
        */

        if (record->tap.count > 0) {
            if (get_mods() & MOD_BIT(KC_LSHIFT)) {
                unregister_mods(MOD_BIT(KC_LSHIFT));
                tap_code(KC_S);
                tap_code(KC_T);
                add_mods(MOD_BIT(KC_LSHIFT));
                return false;
            }
        }
         /*else process LCTL_T(KC_T) as usual.*/
        return true;
    }
    return true;
};
{% endhighlight %}

If you have a different setup because you neither use Colemak nor use the GASC/◆⎇⇧⎈ home row mods order, but are interested in using this trick, here are the parameters you need to change:

Let `LSFT_T(l_s_letter)` equal your left hand home row Shift mod-tap,
    `LMOD_T(l_letter)` equal your left hand home row non-Shift mod-tap (it can be any mod, that will depend on what you've put near your home row Shift mod-tap),
and vice versa for the right hand;
     `RSFT_T(r_s_letter)`,
     `RMOD_T(r_letter)`.

{% highlight c %}
    case RMOD_T(r_letter):
        if (record->tap.count > 0) {
            if (get_mods() & MOD_BIT(KC_RSHIFT)) {
                unregister_mods(MOD_BIT(KC_RSHIFT));
                tap_code(r_s_letter);
                tap_code(r_letter);
                add_mods(MOD_BIT(KC_RSHIFT));
                return false;
            }
        }
        return true;

    case LMOD_T(l_letter):
        if (record->tap.count > 0) {
            if (get_mods() & MOD_BIT(KC_LSHIFT)) {
                unregister_mods(MOD_BIT(KC_LSHIFT));
                tap_code(l_s_letter);
                tap_code(l_letter);
                add_mods(MOD_BIT(KC_LSHIFT));
                return false;
            }
        }
        return true;
{% endhighlight %}

This trick is about cancelling the effect of home row Shift mod-tap on a nearby home row mod-tap but nothing prevents you from cancelling the effect of home row non-Shift mod-tap on another key that isn't even a mod-tap at all. It can be generalized.

Sticking with the Colemak example, imagine you have repetitive accidental mod activations when doing `RGUI_T(KC_O)`+`KC_U` when rolling keys for the bigram "ou". You can add a case in your `process_record_user` for `KC_U` where you check the mod state for `RGUI` and override the default behaviour by sending "ou" instead of <kbd>GUI</kbd>+<kbd>U</kbd>.

That being said, I want to clarify that this trick is most definitely not necessary for an enjoyable home row mods experience.
I've mentioned it here just to give another example why you might want to distinguish between right hand and left hand home row mods. You don't need to go this far.

However, if you desire to go even further, [Manna Harbour], the creator of the [Miryoku] layout, is working on a new configuration option named "Bilateral Combinations". This option forces you to combine mods on one hand with taps on the opposite hand. It can reduce accidental mods.  When it is enabled, the last mod-tap hold will be converted to a mod-tap tap if another key on the same hand is tapped.

[Manna Harbour]: https://www.reddit.com/user/Manna_Harbour

For more information on this developing new option, consult these links:

* [Bilateral combinations docs](https://github.com/manna-harbour/qmk_firmware/blob/bilateral-combinations/docs/tap_hold.md#bilateral-combinations)
* [Bilateral combinations code](https://github.com/qmk/qmk_firmware/compare/master...manna-harbour:bilateral-combinations)

For yet another implementation of this trick, one can also consult Steven Hum's "[rolling qmk modifiers](http://thedarnedestthing.com/rolling%20qmk%20modifiers)".

## Using mod-taps in combos<!-- [WIP] -->

At the time of writing, QMK only supports combos consisting of basic keycodes. Using something else will result in unexpected behaviour. However, if you feel comfortable with git, you can merge <abbr title="Pull Request">PR</abbr> [#8591] into your personal branch to enjoy mod-tap combos.

<!-- hyperlink <code> in-line blocks have two pixels of the hyperlink overflowing from the code block style in a non-neat way -->
In fact, there are now two different branches you can merge, the first one called [`sevanteri:early_combo`] is based on [`qmk:develop`] while the other one is called [`sevanteri:combos_on_master`] and is based on [`qmk:master`].

[`sevanteri:early_combo`]: https://github.com/sevanteri/qmk_firmware/tree/early_combo
[`sevanteri:combos_on_master`]: https://github.com/sevanteri/qmk_firmware/tree/combos_on_master
[`qmk:master`]: https://github.com/qmk/qmk_firmware/tree/master
[`qmk:develop`]: https://github.com/qmk/qmk_firmware/tree/develop

Below, you can find a rundown of shell commands you can type in the terminal in order to create a new branch `mod-tap-combos` based on `sevanteri:early_combo` in your own fork of the `qmk_firmware` repository.

<!-- merging is maybe not the best way to go about it, change the recommended shell commands to run -->
{% highlight sh %}
# move to qmk folder
cd ~/qmk_firmware
# switch to your personal git branch where your keymap is
git checkout <personal_branch>
# add sevanteri's fork as a remote repository
git remote add sevanteri_early_combo https://github.com/sevanteri/qmk_firmware.git
# fetch refs and tags from sevanteri's fork
git fetch sevanteri_early_combo
# create a new branch called "mod-tap-combos", based on sevanteri's fork
git checkout -b mod-tap-combos sevanteri_early_combo/early_combo
# pull commits from the "early_combo" branch of sevanteri's fork into your "mod-tap-combos"
git pull sevanteri_early_combo early_combo
# Update your GitHub fork with the new mod-tap-combos
git push origin mod-tap-combos
{% endhighlight %}

Copy-pastable content without the comments (make sure to replace `<personal_branch>` with the name of your personal branch first):
{% highlight sh %}
cd ~/qmk_firmware
git checkout <personal_branch>
git remote add sevanteri_early_combo https://github.com/sevanteri/qmk_firmware.git
git fetch sevanteri_early_combo
git checkout -b mod-tap-combos sevanteri_early_combo/early_combo
git pull sevanteri_early_combo early_combo
git push origin mod-tap-combos
{% endhighlight %}

# Alternatives

What if none of the above work out for you? You understand what all the tap-hold configuration settings mean, you played around with them, you've read through all the tips and tricks and yet you still can't get used to home row mods despite the fact that you like the concept... What else can you try?

## Alternative home row mods layout

The classic home row mods layout places all of the mod-taps on the resting keys of a touch typer, the "home keys", as illustrated in purple below.

![Dark Ortholinear Planck keyboard with the ASDFJKL; keys highlighted in purple](assets/images/home-row-mods/PlanckAlternative-ClassicHRM.jpeg)

This the optimal placement for a touch typer because that's where they've learned to rest their fingers by default. As such, the finger travel to reach for any of the four modifiers is zero.

However, if we're willing to stretch the definition of "home row" to not only include the resting keys but encompass the entire middle row of the keyboard, we can start to imagine alternative home row mods layouts.

Firstly, one could shift all the mod-taps outwards.

![Dark Ortholinear Planck keyboard with the CapsLockASDKL;' keys highlighted in purple](assets/images/home-row-mods/PlanckAlternative-OuterStraight.jpeg)

This is vaguely reminiscent of the [HHKB-style <kbd>Ctrl</kbd> key](https://www.itmedia.co.jp/news/articles/1912/10/news176.html) wherein the key that would usually be <kbd>Caps Lock</kbd> on standard keyboards is mapped to <kbd>Ctrl</kbd> instead.

Be that as it may, two flaws are apparent with this layout:

1. The pinkies have double duty when it comes to modifier activation:
<kbd>A</kbd>,<kbd>;</kbd> *and* <kbd>Caps Lock</kbd>,<kbd>'</kbd>
2. In case you need to combine the two outer home row mods, the whole hand needs to shift 1u outwards from home position to let the ring finger hold down <kbd>A</kbd> or <kbd>;</kbd>

Therefore, it may be better to go the other way and translate the home row mods *inwards*.

![Dark Ortholinear Planck keyboard with the SDFGHJKL keys highlighted in purple](assets/images/home-row-mods/PlanckAlternative-InnerStraight.jpeg)

Although, the second flaw is essentially still present, the first flaw is mitigated by offloading the weak pinky fingers entirely and letting the strong index fingers deal with the extra mod-taps.

Now, you may think to yourself that relieving the pinkies is good and all but what if you don't like lateral movement?

The fellow pinky haters behind the "Balanced Effortless Keyboard Layout" ([BEAKL](https://deskthority.net/wiki/BEAKL)) introduced the concept of the "[home block](https://keyboard-design.com/easy-block-words.html)" wherein the lower row index keys (<kbd>V</kbd> and <kbd>M</kbd> in the illustration) have a much more favourable score in the key effort ratings than the inner index keys of the home/middle row (<kbd>G</kbd> and <kbd>H</kbd>) because the index finger is a short finger that's more comfortable to flex than to abduct.  The same concept is at play in [Workman](https://workmanlayout.org/#the-problem-with-colemak) and [Colemak-DH](https://colemakmods.github.io/mod-dh/#colemak-problems).

This means we can use home *block* mods.

![Dark Ortholinear Planck keyboard with the SDFVMJKL keys highlighted in purple](assets/images/home-row-mods/PlanckAlternative-DHStyle.jpeg)

The pinky remains unused for modifiers in this modification and pressing the fourth mod-tap with the index fingers is more comfortable but aligning modifiers vertically can be problematic.

Unless you have a steno-friendly keyboard[^9] on which vertical combos are easy to do, you'll struggle to combine one-handedly the index modifiers.

Finally, for a change, let's talk about an alternative home row mods layout that does not suffer from a mod-tap combination problem.

The main reason behind the position of the mod-taps in the classic home row mods layout is that those keys are the ones you're supposed to rest on in idle state. Yet, if you use QWERTY or any of its national derivatives on a keyboard that's not columnar staggered, you may find yourself actually resting on those keys instead:

![Dark Ortholinear Planck keyboard with the AWEFJIO; keys highlighted in purple](assets/images/home-row-mods/PlanckAlternative-FauxColStagger.jpeg)

The ring and middle fingers are longer than the short pinkies and index fingers so why should you force them to be in the same horizontal line? Besides, "e", "i", and "o" are more common than either of "s", "d", "k", or "l".

Though, at this point, we're fringing on upper row mods...

## Upper/Lower row mods

A simple modification you can do is to translate the home row mods up or down. They remain very easy to access, and depending on the alpha layout used, accidental misfires are less likely to happen as a virtue of rarer n-grams occupying the row and thus reducing the amount of typing rolls that involve mod-tap keys.

For instance, translating the home row mods down is a good way to prevent accidental misfires caused by typing adjacent keys. You're unlikely to come across a word containing "xcv", "qkj" or ",.vbh". Generally speaking, the lower row of keys is populated with uncommon letters and symbols. That observation does not only apply to alternative optimized layouts such Dvorak or Turkish F but also to QWERTY!

Naturally, this trick is helpful for reducing the occurences of misfires only if you translate the mod-taps to a row that contains less frequent keys than the home row. Translating mod-taps up on QWERTY would thus be counter-productive in this regard.

<figure>
<img src="https://www.7day.nl/ergowerken/blog/strijdtoetsenborden/dvorakvsqwerty.jpg"
alt="Row frequency stats of QWERTY and Dvorak">
<figcaption>
Comparison of the usage frequency of the three main rows on QWERTY and Dvorak, based on an English corpus of text.
Characteristically, QWERTY has a higher usage of the upper row than of the home row.
</figcaption>
</figure>

## Home row mod-combos

It's all too easy to hold down a single key for a tad too long than desired and activate a potentially destructive action that has to be fixed afterwards. What if we require more than one single key to be pressed down? Modifiers would be activated only if a specific combination of adjacent (or not) keys was held down simultaneously. The idea behind being that it's harder to accidentally hold down two or more keys simultaneously.

While there are only maybe about 4!=24 possible [home row mods orders](#home-row-mods-order) if we restrain ourselves to the middle row and mirror the order on both hands, the number of possibilities explode if we start to consider home row mod-combos.

<kbd>S</kbd>+<kbd>D</kbd> for left Alt, <kbd>J</kbd>+<kbd>K</kbd> for right GUI, <kbd>F</kbd>+<kbd>J</kbd> for Control, <kbd>J</kbd>+<kbd>K</kbd>+<kbd>L</kbd> for Control+Shift, ...

However, most of the possible combinations aren't really fit for the job. You'll want to mirror the combo-mods on both hands for the same reason home row mod-taps are mirrored and you'll want to be able to chord all four modifiers single-handedly.

You'll run into issues if you want to paste something from your clipboard with <kbd>Ctrl</kbd>+<kbd>V</kbd> but both of your index fingers are occupied holding down <kbd>F</kbd> and <kbd>J</kbd> in order to activate Ctrl. A similar predicament happens if you want to open the task manager with <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> but your setup is such that, while you can activate Ctrl and Alt on the left hand with <kbd>D</kbd>+<kbd>F</kbd> and <kbd>S</kbd>+<kbd>F</kbd> respectively, you can't hold down <kbd>S</kbd>+<kbd>D</kbd>+<kbd>F</kbd> for Ctrl+Alt, because that's already used for the more common Ctrl+Shift because <kbd>S</kbd>+<kbd>D</kbd> is Shift.

![QWERTY home row with a Fn key in place of Caps Lock with a badly designed home row combo-mod setup](assets/images/home-row-mods/CtrlAltDel-bad-combos.png)

Consequently, you end up having to trigger Ctrl on the left hand and Alt on the right hand. Now imagine that you have put <kbd>Del</kbd> on a layer, on the right index home row key. Since your right index is too busy activating Alt in tandem with the right ring finger, there is literally no way for you to open the task manager to kill that unresponsive app. Even if you swap hands and use the left for Alt and the right for Ctrl, the problem persists. All you can do now is to resort to using the mouse and reconsider your keymap design.

This shows that combining home row combo-mods is a more challenging design problem than it may seem at first glance.

### Sticky Combos

A solution to this combination problem is to use sticky combos. Instead of momentarily activating modifiers by holding down two or more keys, you tap the keys that constitute a combo, all within combo term, and the modifier gets applied to whatever basic keycode you type next.

The sticky/one-shot modifier gets consumed only if the next keycode you type isn't a layer switch or a modifier itself. This means you can combine an arbitrary amount of modifiers and layer switches sequentially.

If we go back over our <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> example, you can chord your combo for Ctrl, then chord your combo for Alt, with the help of sticky combos, and finally, comfortably activate the Fn layer to access <kbd>Del</kbd>.

![QWERTY home row with a Fn key in place of Caps Lock executing Ctrl+Alt+Del with sticky combos](assets/images/home-row-mods/CtrlAltDel-sticky-combos.webp)

Besides, this alternative presents the great benefit of having access to all modifiers on the home row without requiring to hold down keys for a prolonged amount of time. Given the fact that they're combos, you don't need to pay attention to the specific order in which you press the keys that compose the chord and the stickiness of the modifiers provided by the One-Shot functionality of QMK lets you sequentially combine modifiers and basic keycodes, one after another.

### Combo misfires

The biggest drawback with all the aforementioned points is that home row mod-combos are even more prone to misfires than home row mod-taps are. All that's needed for a combo to fire is to register a press event for all the combo keys, in any order, within the combo term.

As a matter of fact, one should not be fooled by the idea that you're less likely to press down multiple keys simultaneously than to hold a single key a tad too long. You can't fine-tune when and how a combo activates like you can with mod-taps via tap hold configuration settings such as `IGNORE_MOD_TAP_INTERRUPT` and `PERMISSIVE_HOLD` — Although <abbr title="Pull Request">PR</abbr> [#8591] adds half a dozen new combo configuration settings that will be of interest for anyone looking to use home row mod-combos. Combos' indifference to key press order also prevents you from employing advanced tricks such as [rolled modifiers cancellation](#rolled-modifiers-cancellation) to help with accidental mods.

[#8591]: https://github.com/qmk/qmk_firmware/pull/8591

If you want to type two keys that compose a combo, you *must* wait out the end of the combo term after pressing the first key before pressing the next one. In case you haven't defined a combo term in `config.h`, it falls back to the value of the global tapping term which will generally float around 200ms for most users. Naturally, the first and only thing you can do is to reduce the combo term to a saner value; at least under 100ms.

Even if you do decrease the combo term down to 70, 50 or even sub-30 milliseconds, home row mod-combos are only really viable on QWERTY. To give a striking example, let's look at [THE-1](https://goo.gl/PL39c2), an alpha layout heavily based on typing rolls or "splats" as the author calls them.

<figure>
<a href="https://goo.gl/PL39c2">
        <img src="assets/images/home-row-mods/THE-1.png"
        alt="THE-1 keyboard layout on a 5x3 ortholinear keyboard based on the TextBlade">
</a>
<figcaption>
THE-1 Keyboard Layout
</figcaption>
</figure>


It would be quite the challenge to use home row mod-combos on such a layout. You would either need to tap each home row key separately on its own, which kills the whole point of this layout optimizing for splats, or decrease the combo term to such a low value that it's hard to reliably trigger the modifiers when you need them.

## Chording with thumb keys

The idea is to choose a thumb key — no need for an ergonomic keyboard, the space bar would also fit the bill — with which you will chord each home key to produce a modifier.

There are two types of implementation possible: first with a layer switch, and second with combos.

### Layers

The arguably simpler and more flexible method is to use the designated thumb key as a layer key that activates a layer where the home row is composed of pure modifier keys. It can be a momentary switch, a layer-tap, a toggle, a layer tap-toggle, a one-shot layer key... Whatever you pick, the usage will boil down to this:

1. Press layer thumb key
2. Activate the modifiers you need by pressing the appropriate home row keys
3. Deactivate the layer with home row mods (keep holding down keys pressed in step 2)
4. Tap the basic keycode onto which you wish to apply the modifier(s)
5. Release all modifiers
<!-- Animation of the above steps -->

If you don't like holding down keys, you can afford to use one-shot mods instead since the modifiers are on a layer. This approach has been popularized by [Callum Oakley's userspace](https://github.com/callum-oakley/qmk_firmware/tree/master/users/callum). To make the most of this alternative approach, don't use layer-tap keys. Only "pure" layer switching keys like `MO(layer)` remove the involvement of the tapping term.

### Combos

This alternative also involves combos like in [home row mod-combos](#home-row-mod-combos) but this one is much closer to the way classic home row mods work.

For one, the way the mods are laid out ([order](#home-row-mods-order), [layout](#alternative-home-row-mods-layout)) is essentially the same as in classic home row mods. The only big difference is that the thumb gets involved to tell when a home row key should act like a modifier and when it should act like a normal letter/number/punctuation key.

The usage of this implementation is less convoluted than that of the layers implementation. If you want a modifier, simply press the appropriate home row key and the designated thumb key together within combo term. Since chording with thumb keys is what informs the firmware of your desire to initiate a keyboard shortcut, the hold time is irrelevant. As soon as the firmware detects a combo, the modifier(s) get activated.

Ideally, the thumb key used in chords shouldn't be a key that's often followed or preceded by a home row key such as space. All in the spirit of reducing accidental misfires when typing normally.

This is also one of the rare cases where you're better off without the [combo improvements PR](https://github.com/qmk/qmk_firmware/pull/8591) by [sevanteri](https://github.com/sevanteri). Without support for overlapping combos, all you need to define is a combo for each of the 8 modifiers; chording multiple home row mods will automatically call all the required combos. Whereas with sevanteri's PR, you will need to specify a combo for

  1. <kbd>Ctrl</kbd>
  2. <kbd>Alt</kbd>
  3. <kbd>Shift</kbd>
  4. <kbd>GUI</kbd>
  5. <kbd>Ctrl</kbd>+<kbd>Alt</kbd>
  6. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>
  7. <kbd>Ctrl</kbd>+<kbd>GUI</kbd>
  8. <kbd>Alt</kbd>+<kbd>Shift</kbd>
  9. <kbd>Alt</kbd>+<kbd>GUI</kbd>
 10. <kbd>Shift</kbd>+<kbd>GUI</kbd>
 11. <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd>
 12. <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>GUI</kbd>
 13. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>GUI</kbd>
 14. <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>GUI</kbd>
 15. <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>GUI</kbd>

Idem for the other hand. So we're looking at 30 combos total if we assume only one-handed combinations of modifiers.
However, if we drop that constraint and wish to be very exhaustive and include the possibility to do something as insane as
<kbd>LCtrl</kbd>+<kbd>LGUI</kbd>+<kbd>LAlt</kbd>+<kbd>RAlt</kbd>+<kbd>RCtrl</kbd>+<kbd>RShift</kbd>+<kbd>RGUI</kbd>,
we would need 255 combos.

<!-- ## Home row layers and modifiers on the thumb keys -->

## Tap dances

Tap dances can offer a figurative layer of protection against unintended mod activations. Where in mod-taps, only a hold is required, you could code a tap dance in such a way that you need to double tap and then hold a key for it to register as a modifier.

# Summary
In summary, home row mods are an unorthodox, innovative way to use modifiers ergonomically. With the right piece of software, it can be used on any type of keyboard, and is beneficial regardless of the physical layout.[^10] It will take a bit of practice and time to get used to typing with home row mods but the pay-off is worth it.


# TL;DR Table

| Question | Answer
|----------|-------
| What are home row mods? | Mod-taps on the home row |
| What are mod-taps? | A dual-role key that sends a basic character (lettter, punctuation, number, ...) when pressed and released on its own but acts as a modifier when held down |
| Why use home row mods?  | It's a more ergonomic and efficient way to use modifiers |
| How to use home row mods? | Either use a QMK keyboard or install KMonad |
| How to lay out the modifiers on the home row? | It does not matter. If you're undecided, you can go for [GACS/◆⎇⎈⇧](#gacs) |
| What tap hold configuration settings should I enable? | `IGNORE_MOD_TAP_INTERRUPT`. `PERMISSIVE_HOLD` and `TAPPING_FORCE_HOLD` can also prove useful |
| How do I get started with home row mods on QMK or KMonad? | Go to the generator for the program you wish to use ([QMK](#qmk-home-row-mods-code-generator)) ([KMonad](#kmonad-home-row-mods-code-generator)), select your options and click on the button "Generate". Follow the instructions to figure out where to paste the generated output |
| What's the most important tip for using home row mods? | Get into the habit of typing with quick, swift taps. |

<details>
<summary markdown="span">Updates Log</summary>
03 Feb 2021:
* Mentioned Callum style home row mods in Alternatives>Chording with thumb keys>Layers
</details>

<h5 class="no_toc" id="footnotes">Footnotes</h5>

[^1]: Caps Lock only capitalizes letters and keeps numbers and punctuations intact whereas Shift Lock acts exactly like the Shift keys and affects all the keys. <kbd>Caps Lock</kbd>+<kbd>-</kbd> = `-` ; <kbd>Shift Lock</kbd>+<kbd>-</kbd> = `_`.

[^2]: I have to admit that I couldn't find any hard numbers supporting this. I have yet to meet someone who disagrees with this ranking though. It's a very reasonable guess. Every capital letter in this article involved Shift. Ctrl+ZXCV is ridiculously common and most program shortcuts are either Ctrl+Letter or Ctrl+Shift+Letter. What's more likely to be debatable is GUI < Alt. The reasoning is that, while you don't find many programs using Alt for important keyboard shortcuts and rare are the people who use Alt to navigate through menus in graphical apps, it is much more frequently used than one might expect just because of Alt+Tab alone. As for GUI, only chorded keyboard shortcuts are considered here so if we ignore WinKey taps to open the Start Menu, we can easily imagine why GUI would end up at the bottom of the ranking.

[^3]: This links directly to a specific snapshot in the commit history of the proposed Tap Hold documentation page and may thus not be the latest version at the time you're reading this. For the latest version, check the [changed files tab of the PR](https://github.com/qmk/qmk_firmware/pull/9404/files). Also keep in mind that this <abbr title="Pull Request">PR</abbr> adds a new tap hold option called `HOLD_ON_OTHER_KEY_PRESS` which has yet to be merged into `qmk:master`.

[^4]: Once again, the GUI modifier on Desktop Environments such as Windows or Gnome is an exception to this. And so is the Alt modifier, which can be used as a leader key to navigate the menus of graphical applications.

[^5]: I'm not exactly sure whether this is really the very first time someone implemented home row mods (i.e. all the modifiers on the home row as mod-taps). If you find an earliest occurrence, which may or may not be implemented in QMK, let me know. For reference, I used the command `git log --before="2015-12-01" -G"[A-Z]+_T\(KC_[AS]\)"` in the `qmk_firmware` folder to find the first commit which contains `MOD_T(KC_A)` or  `MOD_T(KC_S)` as the letters A and/or S can be found in the home row of every layout. In case, you're wondering about the `MT(mod, kc)` syntax, I also tried looking for the earliest match with the use of the command `git log --before="2015-12-01" -G"MT\(MOD_[A-Z]+, ?KC_[A-Z]\)"` but it did not return anything. In fact, the earliest commit which matches the pattern is [commit c037d4b](https://github.com/qmk/qmk_firmware/commit/c037d4bb306613085a823e73f37653f1e71c0f0d) which dates from 2017! Though it is not the implementation of proper home row mods.

[^6]: "Technically there is only one static `tapping_key` variable which tracks the currently processed tap/hold decision. However, events in `waiting_buffer` retain their timestamps, so when the tap/hold decision finally resolves, some other event from `waiting_buffer` may become the new `tapping_key`, and its tapping term would be counted from the moment when that key has been originally pressed. With per-key tapping term it could be possible that the tapping term for the second key has already expired by the time the first key has been handled, however. So you probably can think that every key has a separate timer (tracked using event timestamps), with an additional restriction that if multiple tap/hold keys are held at the same time, the tapping term for any of those keys cannot expire until all keys pressed before it had been handled (either the tapping terms for them had expired, or the keys had been released)." — [sigprof], in the QMK Discord server

[^7]: Before you go ahead and do that, do keep in mind that Shift is sometimes used by itself in applications. In many video games, Shift is used to crouch (though, that would be the least of your problems if you want to play video games with Auto Shift on...) and JetBrains IDEs have you double-tap either Shifts by themselves to open up the [Search Everywhere](https://blog.jetbrains.com/idea/2020/05/when-the-shift-hits-the-fan-search-everywhere/) window. Make sure to also read the documentation section on [modifiers and Auto Shift](https://docs.qmk.fm/#/feature_auto_shift?id=modifiers) first.

[^8]: Americans seem to get a kick out of using their own standards that are different from everybody else's.

[^9]: For our purposes, "steno-friendly" doesn't refer to whether a given keyboard supports N-key roll over or a steno protocol such as GeminiPR. It's a quality of a keyboard that makes single-finger combos easier to chord. Factors that play positively in the "steno-friendliness" of a given keyboard could be flat keycaps, steno key tops, choc spacing, ortholinear or columnar stagger, light springs, ...

[^10]: Obviously, it has no benefits for a macro pad and home row mods are unfit for steno boards such as the Georgi.

<!-- TODO: Add label tags to forms -->
