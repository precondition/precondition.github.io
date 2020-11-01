---
layout: post
current: post
cover: assets/images/home-row-mods/light-QWERTY-home-row-mods___cover.jpeg
navigation: True
title: A guide to home row mods
date: 2020-11-01
category: Keyboards
tags: [Keymap, QMK]
class: post-template
subclass: 'post'
author: precondition
custom-js:
    - js/home_row_mods_code_generator.js
description: What are home row mods? What is a modtap? What settings do you need to use? What are the alternatives? And more in this article...
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
<kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> <kbd>F</kbd> <kbd>G</kbd> <kbd>H</kbd> <kbd>J</kbd> <kbd>K</kbd> <kbd>L</kbd> <kbd>;</kbd>.
This row is called the "*home* row" because if one were to follow touch typing technique, this is the row of keys on which your fingers are supposed to rest on. The bars or the dish found on <kbd>F</kbd> and <kbd>J</kbd> help to find back the home position without looking at the keyboard — this is especially important for relatively big keyboards which require you to move your hands to hit some of the keys like for example <kbd>Backspace</kbd> or the arrow keys on a classic <abbr title="Ten Key Less">TKL</abbr> and thus throw you off home position.

![Zoom in on a keyboard with grey QWERTY keycaps with the F and J keys circled in red](https://hygo.com/wp-content/uploads/2017/06/f-j-5-bumps-on-keyboard.jpg)

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

<!-- Big task but potentially find a research paper which says that modifier use is the most responsible for RSI. This also lacks some hyperlinks to RSI, Emacs pinky and such -->
It is in your best interest to find a solution at the risk of maybe getting RSI and Emacs pinky one day. This is especially important for programmers as most of their keyboard usage isn't actually typing symbols but triggering commands with a plethora of different keyboard shortcuts. Though any power user of any application, not just programmers in their text editor, uses keyboard shortcuts extensively.

Home row mods are about the best solution to this modifier problem. The fact that there are four modifiers, each coming with a left hand and right hand version perfectly matches the eight fingers resting on the home row. We can put a modifier right under each finger and mirror it on both hands.

Isn't it great to have ALL the modifiers at our finger tips? No motion, stretching or strain required. This rapid access to modifier chords is very comfortable and allows to blend the execution of keyboard shortcuts in the typing flow, whereas it previously required a context switch to stop composing text, move the hands to the corner(s) of the keyboard, trigger the desired keyboard shortcut and then find back the homing position to continue touch typing text.

The other benefit of having all the modifiers lined up in a row and each dedicated a specific finger is that you can trigger ANY keyboard shortcut with ease.
<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>GUI</kbd>+<kbd>Alt</kbd>
is an insanity on a standard keyboard but with home row mods, it is trivial: just hold down the four fingers of your hand on the keys you're already resting on. Dedicating a specific finger for each of the four modifier also gives your pinky a well deserved break. Home row mods are also advantageous for the thumbs, for it frees them up for something else like layer switches or [even letters](pressing-e-with-the-thumb). In fact, home row mods and layer thumb keys are a perfect fit. It makes it very easy to chord layers and modifiers together without forcing finger contortions or same finger utilization.

Finally, home row mods (or variations of the concept which we'll talk about later in the article) is the secret sauce to making all those tiny 30% keyboards[^1] that you've always deemed to be too small to be usable,... actually usable.

[^1]: The 30% form factor refers to 40%'s with the outer pinky columns shaved off.

<!-- Add gallery of 30%'s -->

Are you convinced? If so, let's now look at the *how*.

# How to use home row mods?

Before we can talk about the technical implementation details, let's briefly talk about the order of home row mods.

## Home row mods order

How should you lay out the modifiers on the home row? You have multiple options.

To make this easier to understand, let's agree on common terminology first.

| Full Modifier Name | 1-letter abbreviation | Symbol |
|--------------------|-----------------------|--------|
| Shift              | S                     | ⇧      |
| Control            | C                     | ⎈      |
| Alt/Option         | A                     | ⎇      |
| GUI/Win/Command    | G                     | ◆      |
| No modifier/modtap | _                     | _      |

This means that the home row mods setup shown in the cover picture of this blog post can be written as ◆⎇⇧⎈\_\_⎈⇧⎇◆ when using the symbols or as GASC\_\_CSAG when using the 1-letter abbreviations. However, since the mod-taps on the right hand are symmetric to the mod-taps on the left hand, the right-hand can be omitted. Trailing underscores can also be omitted to finally produce the following notation: GASC/◆⎇⇧⎈.

Now that the semantics are clear, let's talk of some interesting orders of the home row mods to give you some ideas for your own.

### SCGA/⇧⎈◆⎇

If one were to transpose the classic IBM mods layout <!-- explain why you're even talking about IBM and what the heck is the IBM mods layout --> into a 1D line, this would be it. It might look familiar and thus potentially easier to learn but keep in mind that, aside from the Shift modifiers, all the modifiers now use a different finger than what you're used to. Moreover, this is a poor allocation of the mods in regard to their frequency of usage. Assuming that you do not use Caps Lock, Shift is *by far* the most used modifier. It is unwise to let the pinky take on all this load. Although letting the pinky fingers deal with Shift is the option that will necessitate the least hand swaps when typing a string of capital letters. This order also positions Alt and GUI in an undeservingly good place. The index and middle fingers are the strongest of the four non-thumb fingers but Alt and GUI aren't the most frequently used modifiers for Windows, Linux and BSD users.

### GASC/◆⎇⇧⎈

This is the layout found in the cover pic of this article and what's used in most of the examples. Compared to the SCGA order, this is much more reasonable in terms of using the strongest fingers for the most common modifiers in operating systems that are not MacOS.

Indeed, if you sort the four modifiers by their frequency in Windows and/or Linux, you will find: GUI < Alt < Control < Shift.[^2] The observant among you will have noticed that this does not stick with GASC/◆⎇⇧⎈. Why are Control and Shift swapped? There are multiple reasons that can justify this choice:
1. The index finger is the finger that is responsible for the biggest amount of alpha keys so if you use the index finger to hold Shift, you'll have to swap hands if you want to type any of the six keys — or *seven* keys if you're on a row-stagger board and you type <kbd>C</kbd> with your left index — that the index finger is responsible for. If you're someone who would rather not have to swap hands too much when typing capital letters, this can be interesting for you. However, do keep letter frequency in mind. In most alternative layouts, the inner index columns are populated with infrequent keys while the home row middle finger keys are assigned very common letters such as "E".
2. Putting Shift between Control and Alt is pretty nifty. It allows for easy chording of Ctrl+Shift and Alt+Shift (the most common combination of modifiers) by using adjacent fingers. That cannot be done with Shift placed on the index finger. Holding two modifiers that are one or two keys apart is a little bit awkward.
3. Concurrently to a Shift mod-tap on the home row, one may also have other Shift-like keys which are used in lieu of the home row mod to capitalize letters like for example Caps Lock or a [One-Shot Shift thumb key](#one-shot-shift-thumb-keys). By doing so, the Shift home row mod-tap is generally only used in combination with other modifiers, most frequently Control and Alt. Consequently, in light of bullet point 2, its best place is in the middle finger column.
4. The position of GUI next to Alt allows for easy GUI+Alt+Arrows, a keyboard shortcut used in some DEs for switching between virtual desktops/workspaces. GUI gets put on the pinky as that's generally the least used modifier (unless you use a tiling window manager which requires a lot of GUI keyboard shortcuts).
5. The index fingers already have to deal with all the mouse clicking and dragging on top of all those extra inner keys it has to reach for, so you may be tempted to give it a little bit of break by sparing it from holding down a key for all your Shift needs.

[^2]: I have to admit that I couldn't find any hard numbers supporting this. I have yet to meet someone who disagrees with this ranking though. It's a very reasonable guess. Every capital letter in this article involved Shift. Ctrl+ZXCV is ridiculously common and most program shortcuts are either Ctrl+Letter or Ctrl+Shift+Letter. What's more likely to be debatable is GUI < Alt. The reasoning is that, while you don't find many programs using Alt for important keyboard shortcuts and rare are the people who use Alt to navigate through menus in graphical apps, it is much more frequently used than one might expect just because of Alt+Tab alone. As for GUI, only chorded keyboard shortcuts are considered here so if we ignore WinKey taps to open the Start Menu, we can easily imagine why GUI would end up at the bottom of the ranking.

This works out great on ortholinear and vertically staggered keyboards but if you use a row-staggered keyboard, you may find that you're suddenly unable to copy and paste one-handedly.

### GACS/◆⎇⎈⇧

GACS is the order you come up with when you want to assign the most frequently used modifiers to the strongest and most agile fingers and the least frequently used modifiers to the weakest fingers. GACS is for those who reply to GASC's bullet point 1 by saying that enabling a greater range of one-handed Ctrl+Letter keyboard shortcuts is more important than a greater range of one-handed capital letters you can type.

GACS is also, notably, the order used by the most famous QMK ergo layout involving home row mods: [Miryoku].

[Miryoku]: https://github.com/manna-harbour/qmk_firmware/tree/miryoku/users/manna-harbour_miryoku

<!-- ### what would be a nice order for mac modifiers? -->
### CAGS/⎈⎇◆⇧

What if you use MacOS instead? The GUI < Alt < Control < Shift ranking is not a good reflection of modifier usage in MacOS. It does not even use the right terms! A more appropriate ranking of modifiers by their usage in MacOS would be Ctrl < Option < Command < Shift. A home row mods order conceived with this ranking in mind would thus be CAGS/⎈⎇◆⇧. CAGS is to MacOS as GACS is to Windows/Linux/BSD.

----------

Hopefully, these four examples give you a better idea of what goes behind the conception of a certain order in the way the different mod-taps are laid out on the home row. You have to account for modifier frequency, finger strength and agility but also the interplay between different modifiers and the impact of temporarily losing access to a column of keys when holding down a home row mod.

Even so, despite having written much about the different home row mods orders, in the end, it truly isn't that important. Just pick one you like and roll with it. If you're already used to a certain order, don't let the above points convince you to change. When you're starting out, the pragmatic question of how to lay out the modifiers on the home row might seem important but that impression is misplaced.

## Using home row mods with QMK

For the best home row mods experience, I heartily recommend a QMK-powered mechanical keyboard. At the time of writing, QMK supports over 570 keyboards! The greater part of which are DIY keyboards.

The following section will be about implementing home row mods in a QMK-powered keyboard with all the necessary settings to make it work well.

For those of you who do not have a QMK-powered board (or those who miss their home row mods when typing on laptop or on any other non-QMK keyboard), you will find a guide for implementing home row mods using [KMonad](https://github.com/david-janssen/kmonad) just after this section on QMK.

As previously said, the way to create a dual-role key is to use what's known as a "mod-tap" in QMK.
The mod-tap key `MT(mod, kc)` acts like a modifier when held, and a regular keycode when tapped. In other words, this is what allows us to have a key that sends "a" when you tap it, but function as a <kbd>⇧ Shift</kbd> or <kbd>⎈ Control</kbd> key when you hold it down. Note that the fact that we've turned `KC_A` into a mod-tap does not make it impossible to use keyboard shortcuts involving the letter "A". You can still do <kbd>Shift</kbd>+<kbd>A</kbd> or <kbd>Alt</kbd>+<kbd>A</kbd> just fine.
Although, depending on what modifier you decided to assign to <kbd>A</kbd>, you'll need to use the opposite hand to combine that modifier with "A".

Let me explain with an example. Let's take the home row mod setup illustrated in the cover image of this blog post.

![KLE render of dark blue QWERTY home row keycaps with mod icons in the center and mod name on the side of the keycaps](assets/images/home-row-mods/dark-QWERTY-home-row-mods___side-legends.png)

This setup, translated into code would look something like this:

```c
MT(MOD_LGUI, KC_A), MT(MOD_LALT, KC_S), MT(MOD_LSFT, KC_D), MT(MOD_LCTL, KC_F), 

MT(MOD_RCTL, KC_J), MT(MOD_RSFT, KC_K), MT(MOD_LALT, KC_L), MT(MOD_RGUI, KC_SCLN)
```

Or if one were to use the shortcuts documented [here](https://docs.qmk.fm/#/mod_tap):

```c
LGUI_T(KC_A), LALT_T(KC_S), LSFT_T(KC_D), LCTL_T(KC_F), 

RCTL_T(KC_J), RSFT_T(KC_K), LALT_T(KC_L), RGUI_T(KC_SCLN)
```
As you can see in this example, <kbd>A</kbd> is a `LGUI` mod-tap. This means that tapping the key will produce "a" and holding it will activate the left GUI modifier. If that was the only GUI mod-tap in your keymap, this would make it impossible to trigger the
<kbd>GUI</kbd>+<kbd>A</kbd>
keyboard shortcut. This is where mirroring all the modifiers on the other hand comes in handy. If you want to do
<kbd>GUI</kbd>+<kbd>A</kbd>, you'll have to hold `MT(MOD_RGUI, KC_SCLN)`, i.e. the semicolon key in our example, and tap `MT(MOD_LGUI, KC_A)`, i.e. our <kbd>A</kbd> key.

Now, you've probably noticed that all the left hand keys are assigned left hand modifiers and all the right hand keys are assigned right hand modifiers with the exception of <kbd>⎇ Alt</kbd>. The reason why `RALT` isn't used instead is that, while most right-hand modifiers act exactly the same as their left-hand counterpart, this is not necessarily the case for <kbd>⎇ Alt</kbd>. Everywhere else except in the US, the right Alt becomes <kbd>AltGr</kbd> which is used as a momentary layer switch to access additional symbols. Keep this in mind when composing your right hand home row mods or you might get a surprise!

If this odd case bothers you, you can either use American layout(s) which make(s) no distinction between left and right Alt or you can use left hand modifiers for all the home row mods. Separating left hand and right hand modifiers, as done in the example, is not strictly necessary for a functioning setup but doing so offers some perks.

First of all, it allows to hop from one modifier to its counterpart fluidly. What do I mean? Let's say you want to produce, using the home row mods setup illustrated above, capital "Q" which we'll assume is situated on the left hand of your keyboard. To do that, imagine you first hold `MT(MOD_LSFT, KC_D)` to activate Shift but then you realize that this is the wrong Shift (proper touch typing technique advocates for the use of the opposite hand when Shifting letters).

To remedy this, press and hold `MT(MOD_RSFT, KC_K)` without releasing your finger off `MT(MOD_LSFT, KC_D)` and then, while you're keeping `MT(MOD_RSFT, KC_K)` pressed, release `MT(MOD_LSFT, KC_D)`.
At this stage, you're now holding Shift with only the right hand and can now tap <kbd>Q</kbd> to produce "Q".

If, instead, your <kbd>K</kbd> key was `MT(MOD_LSFT, KC_K)`, you wouldn't be able to do that. If you hold both Shift mod-taps and then release the one on the left half of the keyboard, holding the Shift mod-tap on the right side loses all its effects when you lift up your left middle finger. It is not doing anything. So when you tap <kbd>Q</kbd> while holding the right-hand Shift mod-tap, you'll get lowercase "q".

<!-- insert KLE gif -->

The only way to properly hop modifiers when both of them are programmed to send the exact same modifier, is to fully release the wrong mod-tap you've first pressed before pressing and holding the correct one, on the opposite hand. There is a catch though. If you realize early on that this is the incorrect hand to use the modifier with, you will instinctively fully release the incorrect mod-tap in order to hop to the correct one but if you release the incorrect mod before the tapping term, which is very likely to happen unless you're slow at catching yourself using the wrong hand for the modifier, that will be considered as a tap by the firmware and will thus send the tap keycode, "f" in our case. Doing so thus puts you at risk of accidental alphas when hopping modifiers.

Secondly, distinguishing between home row mods of the left hand from home row mods of the right hand can be useful if you want to detect typing rolls. For more info, refer to the "[Bilateral Combinations](#bilateral-combinations)" [trick](#tips-and-tricks).


### Tap Hold configuration settings

Configuring tap hold options is a mandatory step for using home row mods without pulling your hair. As such, a local QMK development environment is required since the [online configurator] currently does not support configuration settings. If you haven't set up a QMK build environment yet, follow the steps outlined in [this guide].

[online configurator]: https://config.qmk.fm/#/
[this guide]: https://docs.qmk.fm/#/newbs_getting_started

With that out of the way, here comes the most difficult part; understanding the different tap hold configuration settings.

I strongly advise you to attentively read through the [official QMK documentation page on tap hold configuration settings], [the proposed changes to the documentation](https://github.com/qmk/qmk_firmware/blob/155cc17359711a6dd7b67119ec994800588ebaaa/docs/tap_hold.md)[^3] by [sigprof] on <abbr title="Pull Request">PR</abbr> [#9404], and [Okke]'s [cheatsheet on MT and LT behaviour].<sup>[PDF]</sup>

[official QMK documentation page on tap hold configuration settings]: https://docs.qmk.fm/#/tap_hold
[sigprof]: https://github.com/sigprof
[#9404]: https://github.com/qmk/qmk_firmware/pull/9404
[Okke]: https://github.com/okke-formsma/
[cheatsheet on MT and LT behaviour]: https://cdn.discordapp.com/attachments/663573863480950808/757162393209012304/modtap.pdf
[^3]: This links directly to a specific snapshot in the commit history of the proposed Tap Hold documentation page and may thus not be the latest version at the time you're reading this. For the latest version, check the [changed files tab of the PR](https://github.com/qmk/qmk_firmware/pull/9404/files). Also keep in mind that this PR adds a new tap hold option called `HOLD_ON_OTHER_KEY_PRESS` which has yet to be merged into `qmk:master`.

Once you're done reading through these links, come back here for a more detailed explanation of each tap hold configuration setting and their relation to home row mods.

#### Ignore Mod-Tap Interrupt

Suffice to say that `IGNORE_MOD_TAP_INTERRUPT` is *the* most important tap hold configuration settings that's absolutely necessary for a good home row mods experience.

Why is it so important and relevant to home row mods? To understand, let's look at the default behaviour for mod-taps. The underlying logic of basic mod-taps is quite simple. Did another key get pressed while the user was holding down the mod-tap key? If that's the case, this is a keyboard shortcut; apply the modifier on that pressed key. What if, instead, no key got pressed while the user was holding down the mod-tap? Well, if the user presses and releases a key by itself, without pressing any other key in between, it must mean the user wanted the tapping function of the mod-tap since there is no use to tapping a modifier key all by itself.[^4] Simple enough right? If you want to activate the holding function, just press on another key while holding the mod-tap key.

[^4]: Once again, the GUI modifier on Desktop Environments such as Windows or Gnome is an exception to this. And so is the Alt modifier, which can be used as a leader key to navigate the menus of graphical applications.

Here comes the problem with that approach if one were to use home row mods. We like to imagine typing as tapping a sequence of keys all on their own, in order. However, there's quite some overlap between the press and release of each key. Especially so when typing at high speeds. When typing the word "no" for example, we rarely press and fully release <kbd>N</kbd> *before* pressing <kbd>O</kbd>. Try it! If you're not a hunt'n'pecker, this is how you're most likely going to type "no":

| Key          | Status 
|--------------|--------
| <kbd>N</kbd> | Down/Press 
| <kbd>O</kbd> | Down/Press 
| <kbd>N</kbd> | Up/Release 
| <kbd>O</kbd> | Up/Release 

<!-- Maybe add a KLE gif of typing "no" like that on the side of this table -->

Now imagine if <kbd>N</kbd> and <kbd>O</kbd> were both mod-taps — it would be the case if you use home row mods on Colemak for example. With default tap hold settings, this is bad news. Indeed, typing involves a lot of such rolls, where you press the next letter before having fully released the previous one.

This is the reason why `IGNORE_MOD_TAP_INTERRUPT` was developed and first [released in 2015](https://github.com/qmk/qmk_firmware/commit/f024a462cdaa4a7a345160819bdf2d01fbabc97a) by [Erez Zukerman](https://github.com/ezuk). Though Erez didn't have home row mods in mind when coming up with this solution. In fact, it actually took two more years after the addition of `IGNORE_MOD_TAP_INTERRUPT` to QMK for the [first commit] to the main branch of the QMK firmware GitHub repository to feature home row mods.[^5]

[first commit]: https://github.com/qmk/qmk_firmware/blob/82de4d039d39c87a1df68708f3033926c27f7e6c/keyboards/ergodox/keymaps/adam/keymap.c#L52

[^5]: I'm not exactly sure whether this is really the very first time someone implemented home row mods (i.e. all the modifiers on the home row as mod-taps). If you find an earliest occurrence, which may or may not be implemented in QMK, let me know. For reference, I used the command `git log --before="2015-12-01" -G"[A-Z]+_T\(KC_[AS]\)"` in the `qmk_firmware` folder to find the first commit which contains `MOD_T(KC_A)` or  `MOD_T(KC_S)` as the letters A and/or S can be found in the home row of every layout. In case, you're wondering about the `MT(mod, kc)` syntax, I also tried looking for the earliest match with the use of the command `git log --before="2015-12-01" -G"MT\(MOD_[A-Z]+, ?KC_[A-Z]\)"` but it did not return anything. In fact, the earliest commit which matches the pattern is [commit c037d4b](https://github.com/qmk/qmk_firmware/commit/c037d4bb306613085a823e73f37653f1e71c0f0d) which dates from 2017! Though it is not the implementation of proper home row mods.

Anyways, thanks to his contribution, we now have an option for ignoring key presses that interrupt a mod-tap. That is to say, keys which get pressed while the mod-tap is held down do not automatically activate the modifier of the mod-tap. The mod-tap ignores the interruptions, hence the name.

Now, you might wonder... If mod-taps ignore key presses that happen while it is held down, what do they base themselves on to determine when to activate the modifier and when to send the basic keycode? The answer is that it relies on the tapping term, a user defined period of time which starts when the key gets pressed. Been holding the mod-tap for more than the time defined in the tapping term? Activate the modifier. Pressed the key and then released it before the tapping term expired? That's the QMK definition of a "tap", send the letter!

As long as your fingers don't linger on the keys for longer than the tapping term, you won't get accidental mod activations. 

#### Tapping Term

The tapping term is an important concept to grasp for home row mods. As we've just seen in the previous section on ignore mod tap interrupt, the tapping term is what helps to tell tap and hold apart.

The tapping term, in and of itself, is a very basic thing to understand. It is simply a period of time expressed in milliseconds that the user has defined. A timer starts on every key press and constantly checks whether the tapping term for that key has expired yet or not. The timer stops when the key is released. It is good to note that each pressed key is tracked by a specific, different timer, so to speak. When you press <kbd>A</kbd>, a timer starts but pressing another key like <kbd>O</kbd> does not bump up the timer that got started when you press <kbd>A</kbd>. <!-- dernière phrase à revoir -->

Since a tap is defined as the act of pressing and releasing a key within **tap**ping term, the tapping term can be seen as the time window in which you need to release the key in order to register a tap. On the flip side, it can also be seen as the minimum amount of time a key must be held down to register a hold.

As such, a good tapping term that fits you is one that prevents accidental mod activations and keeps the intended mod activations snappy. It is a delicate balance.

The tapping term can be configured globally and per key to fit you. In general, people choose something between 150ms and 220ms, with the default QMK setting for the tapping term set at 200ms. Don't be scared to increase or decrease your tapping term as you see fit.

It's helpful to note that setting the tapping term over 500ms will automatically enable permissive-hold-like behaviour regardless of whether or not you've enabled it in your configuration settings. For more information on what is permissive hold, consult the section on "[Permissive Hold](#permissive-hold)".

For tips on configuring your tapping term and finding the sweet spot for you, click [here](#finding-the-sweet-spot).

#### Tapping Force Hold
<!-- Look into obosob's keymap: does he not use this for his home row mods? Some people say that this option might not be as important as I tout it to be -->

The third very important tap hold setting for home row mods is `TAPPING_FORCE_HOLD`.

Over the course of normal computer usage, you will switch back and forth between typing and triggering keyboard shortcuts. When the modifiers are on the home row, sooner or later, you will feel the need to press a home row key to type a letter and then pressing that same key in order to activate a modifier. However, the default behaviour for a quick tap followed by a hold is to auto-repeat the tapping function of the mod-tap.

This means that if you use `LSFT_T(KC_L)` for example and you want to type "camelCase", you will end up with "camelllllllllllllllllcase" instead. The reason is that you're tapping `LSFT_T(KC_L)` to get "l" and then immediately after, you're holding that same `LSFT_T(KC_L)` key to activate Shift in order to type the capital "C" of "camel**C**ase".

Avoiding this problem is easy; just append `#define TAPPING_FORCE_HOLD` to your `config.h` file in your personal keymap folder. This will have the effect of letting you activate the hold function instead, in the case of holding a dual-role key after having tapped it. No more accidental repeats of mod-tap letters when typing quickly! 

The downside is that it removes the possibility of auto-repeating the letter/tapping function of the mod-tap. You will need to tap (press-release) repeatedly if you want to spam a letter.

Keep in mind that `TAPPING_FORCE_HOLD` is a universal configuration which applies on all dual-role keys (layer-taps and mod-taps). If your backspace key is a layer-tap, you may find that rather restrictive. The good news is that there exists a per-key variant of this configuration option: `TAPPING_FORCE_HOLD_PER_KEY`. Just follow the [instructions described in the docs](https://docs.qmk.fm/#/tap_hold?id=tapping-force-hold) to enable `TAPPING_FORCE_HOLD` for home row mods and disable it for other layer taps as you see fit.

----------

That concludes it for the *essential* tap hold configuration settings for home row mods. Don't try to use home row mods without `IGNORE_MOD_TAP_INTERRUPT` and `TAPPING_FORCE_HOLD` or with an insane `TAPPING_TERM`. You'll have a bad time if you do and will come out of it thinking that "home row mods are not for me".

Apart from these options, you may have noticed that QMK offers more tap hold configuration settings if you've read the documentation linked at the [beginning of this section](#tap-hold-configuration-settings) — please read through those links if you haven't yet. While non-essential, they can still be *very useful* and a better understanding of them can help you enable the settings that will prove beneficial to you.

#### Permissive Hold

First in the list is "permissive hold". It is an option that adds another way to trigger the hold function of dual-role keys.

Whereas the modifier of the mod-tap is activated when another key gets *pressed* by default or gets activated when held down for longer than the tapping term if `IGNORE_MOD_TAP_INTERRUPT` is defined, permissive hold activates the modifier when another key is pressed and released while the mod-tap is held, regardless of the tapping term. This means that even when `IGNORE_MOD_TAP_INTERRUPT` is defined, this option allows the user to trigger a keyboard shortcut with a mod-tap key before the end of the tapping term.

Consider the following case:

| Key          | Status 
|--------------|-----------
| `RCTL_T(N)`  | Down/Press
| `RGUI_T(O)`  | Down/Press
| `RGUI_T(O)`  | Up/Release
| `RCTL_T(N)`  | Up/Release


In English, this is a situation where you're tapping <kbd>O</kbd> while holding down <kbd>N</kbd>. It can also be called a "nested keypress". If all of this happens before the end of the tapping term, the output, assuming mod-tap interrupts are ignored, would be "no". Contrast this to the scenario when permissive hold is enabled where the output would instead be <kbd>Ctrl</kbd>+<kbd>O</kbd>.

As you can see, the assumption here is that if the user taps another key while holding down one or more mod-tap keys, he isn't doing typing rolls and as such desires to trigger a keyboard shortcut instead. The tapping term is irrelevant here. 

Consequently, this option allows the use of home row mods with a tapping term that's much greater than 200ms. Though, people with a high tapping term aren't the only ones who can benefit from this option. Fast typists who are used to swift taps and rolls can enable this option for snappier mod activations and thus bypass the need to wait out the tapping term for the modifiers to take effect. It is particularly useful for <kbd>⇧ Shift</kbd>.

Owing to the fact that permissive hold is... more permissive in what counts as a hold, it makes it easier to trigger mods so unintended mod activations can happen if the aforementioned case is something you frequently do when typing normally. Depending on your typing style, permissive hold might do more harm than good. 

As with many other tap hold settings, there exists a global `PERMISSIVE_HOLD` setting and a per-key option, aptly named `PERMISSIVE_HOLD_PER_KEY`. Consult the [documentation] to figure out how to enable and configure this setting.

[documentation]: https://docs.qmk.fm/#/tap_hold#permissive-hold

#### Retro Tapping

Remember how I said that there isn't much use in pressing and releasing a modifier all by itself? Mod-taps (ab)use this property, but as it turns out mod-taps have the exact same property themselves. If you hold down a mod-tap for longer than the tapping term and then release it without having pressed any other key in between, your QMK keyboard is going to send a press and release event of the modifier to your computer; not too different from tapping a basic modifier key. If that seems wasteful for you, then let me introduce you to *retro tapping*.

When a mod-tap is held for a long time and released on its own, retro tap will activate the tapping function, after having released the modifier of the mod-tap.

To give an example, if you press and hold `LGUI_T(KC_A)` for longer than the tapping term and then release it by itself, the host computer that your QMK keyboard is connected to first sees `KC_LGUI` being pressed when you hold down the mod-tap for longer than the tapping term and then the host computer gets notified that `KC_LGUI` is released when you take your finger off `LGUI_T(KC_A)` on your keyboard. This is the default behaviour for mod-taps held and released by themselves. What retro tap does is sending `KC_A` once `KC_LGUI` is released/inactive. 

Retro Tap thus gives another way to trigger the tapping function of mod-taps. With this option, you can get away with a very short tapping term.

However, this particular example highlights a potential problem with retro tap. In many popular desktop environments, the start menu is brought up by tapping the GUI key. A user of this kind of desktop environment who would like to send "a" by retro-tapping `LGUI_T(KC_A)` would accidentally open up the start menu and type "a" in its search bar.

What if you use another way to bring up the start menu? You'll still have a problem with the Alt key which is used for navigating through menus of graphical applications. You can avoid accidental pop-ups of the menu when retro-tapping the alt mod-taps by disabling the functionality in the apps settings. For example in Firefox, it can be done by going in `about:config` and turning `ui.key.menuAccessKeyFocuses` to `false`. Not all apps offer the possibility of disabling Alt's tapping behaviour though.

The Alt and GUI modifiers aren't the only problem, think of the mouse too. The firmware that's running on your keyboard cannot tell that you have clicked or scrolled the mouse wheel while holding down a mod-tap key. All it sees is that you've been holding down a mod-tap for more than the tapping term and released it without pressing any other key in between. As we now know, this is the cue for the firmware to activate the tapping function of the mod-tap in question if retro tap is enabled. <kbd>Ctrl</kbd>+<kbd>Left-Click</kbd> to open a link in a new tab or <kbd>Shift</kbd>+<kbd>Scrollwheel</kbd> to scroll sideways would thus be accompanied with unintended letters.

One tempting solution is to resort to per key retro tap in order to disable retro tap for the problematic GUI and Alt mod-taps and keep it for others. The issue is that, unlike every other tap hold configuration setting, retro tap currently lacks a per key option. Retro tap either applies to all dual function keys or to none. No in between. However, if you feel comfortable with git, you can merge PR [#10622] in your personal branch in order to be able to configure retro tapping per key or you can wait for the next merge of `qmk:develop` into `qmk:master` and update your personal branch with the latest of `qmk:master`. It's up to you whether it's disorientating or not to have some home row keys retro-tappable and some others not.

[#10622]: https://github.com/qmk/qmk_firmware/pull/10622

-----

That is it for all the available QMK tap hold configuration settings. In summary, there are three essential tap hold settings: `TAPPING_TERM`, `IGNORE_MOD_TAP_INTERRUPT`, and `TAPPING_FORCE_HOLD`. `TAPPING_TERM` will require some tweaking and adaptation from your part (though not as much as you may be led to believe) but the other two options is just a matter of adding a line to your `config.h` file. Another very commonly recommended setting is `PERMISSIVE_HOLD`. As with `IGNORE_MOD_TAP_INTERRUPT` and `TAPPING_FORCE_HOLD`, it can be simply enabled by appending `#define PERMISSIVE_HOLD` to your `config.h` file. As for `RETRO_TAPPING`, it might appear appealing at first glance but it has its load of problems which make it unsuitable for home row mods.

### Getting started with home row mods on QMK

Armed with all this knowledge, we can now add home row mods to our keymap and flash it onto our board.

Let's start with tap hold configuration settings. Copy and paste those lines in your `config.h` file (create the file in your personal keymap folder if it's not already present):

```c
// Prevent normal rollover on alphas from accidentally triggering mods.
#define IGNORE_MOD_TAP_INTERRUPT

// Enable rapid switch from tap to hold, disables double tap hold auto-repeat.
#define TAPPING_FORCE_HOLD

// Apply the modifier on keys that are tapped during a short hold of a modtap
#define PERMISSIVE_HOLD
```

Once that's done, open up `keymap.c`, and convert all the home row keys into mod-tap keys. You have multiple options for doing so. In any case, it is best to use aliases as the convention is to keep all keycode names strictly under 8 characters long in order to keep a tidy, aligned and readable layout in the `keymap.c` file. This is not possible if you use something like `MT(mod, kc)` or `LMOD_T(kc)`. For example, potential aliases for Colemak with GASC/◆⎇⇧⎈ order could be:

```c
// Left-hand home row mods
#define HOME_A LGUI_T(KC_A)
#define HOME_R LALT_T(KC_R)
#define HOME_S LSFT_T(KC_S)
#define HOME_T LCTL_T(KC_T)

// Right-hand home row mods
#define HOME_O RGUI_T(KC_O)
#define HOME_I LALT_T(KC_I)
#define HOME_E RSFT_T(KC_E)
#define HOME_N RCTL_T(KC_N)
```

If you feel like `HOME_letter` is too vague, nothing prevents you from doing something like this:

```c
// Left-hand home row mods
#define GUI_A LGUI_T(KC_A)
#define ALT_R LALT_T(KC_R)
#define SFT_S LSFT_T(KC_S)
#define CTL_T LCTL_T(KC_T)

// Right-hand home row mods
#define GUI_O RGUI_T(KC_O)
#define ALT_I LALT_T(KC_I)
#define SFT_E RSFT_T(KC_E)
#define CTL_N RCTL_T(KC_N)
```

Afterwards, it's just a matter of replacing all the basic `KC_letter` situated on the home row in the `LAYOUT` of your `keymap.c` with the mod-taps aliases you've defined.

### Home row mods code generator [WIP] {#qmk-home-row-mods-code-generator}

For your convenience, below you can find a form that you can fill in with your options in order to generate mod-tap aliases and the home row. 

If your layout isn't present in the list, check "Other" and fill in all the ten characters of your home row. To accomodate layous such as Halmak, a limited set of punctuation characters are accepted in the custom layout field. They are `-`, `.`, `,`, `/`, and `;`.

The order options uses the notation used in the section on [home row mods orders](#home-row-mods-order). The leftmost modifier is the one on the pinky and the rightmost modifier is the one on the index finger (not the inner index column). If you wish to use another home row mods order, check "Other" and specify your desired order in the same notation.

<sub><sup>The interface is ugly, I know, but it works</sup></sub>

<!-- Show/Hide a text block with a radio button 
https://jsfiddle.net/QAaHP/16/ -->

<form>
<p>Select your layout</p>
<input type="radio" name="layouts" value="ASDFGHJKL;" id="QWERTY" checked onclick="showTextField('QMKLayout')"> 
<label for="QWERTY"><span></span>QWERTY/AZERTY/QWERTZ</label>
<input type="radio" name="layouts" value="AOEUIDHTNS" id="DVORAK" onclick="showTextField('QMKLayout')">
<label for="DVORAK"><span></span>Dvorak</label>
<input type="radio" name="layouts" value="ARSTDHNEIO" onclick="showTextField('QMKLayout')"> Colemak vanilla
<input type="radio" name="layouts" value="ARSTGKNEIO" onclick="showTextField('QMKLayout')"> Colemak DH
<input type="radio" name="layouts" value="ARSTGMNEIO" onclick="showTextField('QMKLayout')"> Colemak DHm
<input type="radio" name="layouts" value="ASHTGYNEOI" onclick="showTextField('QMKLayout')"> Workman
<input type="radio" name="layouts" value="RSTHDMNAIO" onclick="showTextField('QMKLayout')"> RSTHD
<input type="radio" name="layouts" value="YIEA.DSTNB" onclick="showTextField('QMKLayout')"> BEAKL15
<input type="radio" name="layouts" value="OTHER" id="otherQMKLayout" onclick="showTextField('QMKLayout')"> Other 
<input type="text" maxlength="10" id="customQMKLayout" pattern="[A-Za-z-.,;\/']{10}"  title="Accepted characters: alphabet letters, numbers, and a limited set of basic punctuation: -.,;/" style="display:none">


<p>Enter your desired tapping term (in ms)</p>
<input type="number" name="QMKTappingTerm" min="1" value="200">

<p>Select your home row mods order</p>
<input type="radio" name="homeRowModsOrders" value="GASC" checked onclick="showTextField('QMKOrder')"> GASC
<input type="radio" name="homeRowModsOrders" value="GACS" onclick="showTextField('QMKOrder')"> GACS
<input type="radio" name="homeRowModsOrders" value="SCGA" onclick="showTextField('QMKOrder')"> SCGA
<input type="radio" name="homeRowModsOrders" value="CAGS" onclick="showTextField('QMKOrder')"> CAGS
<input type="radio" name="homeRowModsOrders" value="OTHER" id="otherQMKOrder" onclick="showTextField('QMKOrder')"> Other 
<input type="text" maxlength="4" id="customQMKOrder" pattern="[GgAaSsCc]{4}"  title="Accepted characters: G, A, S, C" style="display:none">

<p>Select the handedness of modifiers</p>
<input type="radio" name="handedness" value="LLL"> All left modifiers
<input type="radio" name="handedness" value="LRR"> Left and right hand modifiers with AltGr
<input type="radio" name="handedness" value="LLR" checked> Left and right hand modifiers without AltGr
  <p>Select your desired alias style</p>
<input type="radio" name="aliasStyle" value="HOME" checked> HOME
<input type="radio" name="aliasStyle" value="MOD"> MOD
    

  <input type="button" onclick="generateQMKCode(form.elements)" name="submit" value="Generate">
</form>

<div id="QMKGeneratorErrors" style="display:none"></div>
<div id="generatedQMKAliases" style="display:none"></div>
<div id="generatedQMKHomeRow" style="display:none"></div>

## Using home row mods with KMonad

Aside from QMK, KMonad is another piece of software which allows the implementation of home row mods. Its greatest perk is that it does not require a special keyboard like QMK does (although Hasu's USB-to-USB controller can turn any USB keyboard into a QMK-compatible keyboard). It's a cross-platform application that runs on the computer, not on the keyboard chip.

KMonad isn't the only computer program which features mod-taps, it's been preceded by [xcape] and [SandS], the very first mod-tap ever. What sets it apart though is that, unlike all those other programs, it features much more configuration options for modtaps. On most, you're limited to simply tweaking the tapping term. No concept of `IGNORE_MOD_TAP_INTERRUPT`. 

That's not to say that KMonad uses the same configuration options as QMK does. They're different programs made by different people.

If you want to tweak the mod-tap functionality, which by the way is called a "multi-use button" in KMonad, the way to go is to use the button that fits your desired behaviour. KMonad has a bunch of modtap buttons. The one that's of interest for home row mods is `tap-hold-next-release`.

### Multi-use buttons [WIP]

To explain the various mod-taps/multi-use buttons in KMonad, let's compare them with the now familiar QMK tap hold configuration options.


| Multi-use button name | `IGNORE_MOD_TAP_INTERRUPT` | `TAPPING_FORCE_HOLD` | `PERMISSIVE_HOLD` | `RETRO_TAPPING` |
|-----------------------|----------------------------|----------------------|-------------------|-----------------|
| `tap-next`            | ❌                         | ❌                   |  ❌               |  ✔️              |
|`tap-hold-next-release`| ✓                          | ☑️                    |  ✅               |  ❎             |

<!-- add all the other ones -->

### Home row mods code generator [WIP] {#kmonad-home-row-mods-code-generator}

<sub><sup>The interface is ugly, I know, but it works</sup></sub>

<form>
<p>Select your layout</p>
<input type="radio" name="layouts" value="ASDFGHJKL;" id="QWERTY" checked onclick="showTextField('KMonadLayout')"> 
<label for="QWERTY"><span></span>QWERTY/AZERTY/QWERTZ</label>
<input type="radio" name="layouts" value="AOEUIDHTNS" id="DVORAK" onclick="showTextField('KMonadLayout')">
<label for="DVORAK"><span></span>Dvorak</label>
<input type="radio" name="layouts" value="ARSTDHNEIO" onclick="showTextField('KMonadLayout')"> Colemak vanilla
<input type="radio" name="layouts" value="ARSTGKNEIO" onclick="showTextField('KMonadLayout')"> Colemak DH
<input type="radio" name="layouts" value="ARSTGMNEIO" onclick="showTextField('KMonadLayout')"> Colemak DHm
<input type="radio" name="layouts" value="ASHTGYNEOI" onclick="showTextField('KMonadLayout')"> Workman
<input type="radio" name="layouts" value="RSTHDMNAIO" onclick="showTextField('KMonadLayout')"> RSTHD
<input type="radio" name="layouts" value="YIEA.DSTNB" onclick="showTextField('KMonadLayout')"> BEAKL15
<input type="radio" name="layouts" value="OTHER" id="otherKMonadLayout" onclick="showTextField('KMonadLayout')"> Other 
<input type="text" maxlength="10" id="customKMonadLayout" pattern="[A-Za-z-.,;\/']{10}"  title="Accepted characters: alphabet letters, numbers, and a limited set of basic punctuation: -.,;/" style="display:none">


<p>Enter your desired tapping term (in ms)</p>
<input type="number" name="KMonadTappingTerm" min="1" value="200">

<p>Select your home row mods order</p>
<input type="radio" name="homeRowModsOrders" value="GASC" onclick="showTextField('KMonadOrder')"> GASC
<input type="radio" name="homeRowModsOrders" value="GACS" checked onclick="showTextField('KMonadOrder')"> GACS
<input type="radio" name="homeRowModsOrders" value="SCGA" onclick="showTextField('KMonadOrder')"> SCGA
<input type="radio" name="homeRowModsOrders" value="CAGS" onclick="showTextField('KMonadOrder')"> CAGS
<input type="radio" name="homeRowModsOrders" value="OTHER" id="otherKMonadOrder" onclick="showTextField('KMonadOrder')"> Other 
<input type="text" maxlength="4" id="customKMonadOrder" pattern="[GgAaSsCc]{4}"  title="Accepted characters: G, A, S, C" style="display:none">

<p>Select the handedness of modifiers</p>
<input type="radio" name="handedness" value="LLL"> All left modifiers
<input type="radio" name="handedness" value="LRR"> Left and right hand modifiers with AltGr
<input type="radio" name="handedness" value="LLR" checked> Left and right hand modifiers without AltGr

<p>Select your desired alias style</p>
<input type="radio" name="aliasStyle" value="HOME"> HOME
<input type="radio" name="aliasStyle" value="MOD" checked> MOD


<input type="button" onclick="generateKMonadCode(form.elements)" name="submit" value="Generate">
</form>

  <div id="KMonadGeneratorErrors" style="display:none"></div>
  <div id="generatedKMonadAliases" style="display:none"></div>
  <div id="generatedKMonadHomeRow" style="display:none"></div>

# Tips & Tricks {#tips-and-tricks}

<!-- Tips -->
## Quick swift taps

The most important tip I can give is to get into the habit of typing with quick, swift taps. The goal is to reduce the time between press and release to the minimum. Don't focus on pressing keys, but on *tapping* keys. Pressing and releasing should *feel* like one single action. For some people, the transition to home row mods is little jarring because they got used to holding a key down for a little a less than the key repeat delay which is set by default to 500–1000ms on most operating systems. 

Parallels can be made between the key repeat delay and the tapping term. In both cases, releasing the key before the delay expires will result in one single letter to be produced. In that case, it is tempting to say that a person who's used to a key repeat delay of 500ms should crank up the default tapping term of 200ms up to 500ms. It can be seen as trading key auto-repeat for modifier activation. That will certainly help to avoid accidental mods. If the user never accidentally auto-repeats keys then he won't accidentally activate a modifier. In theory, this all sounds good and dandy but in practice, you'll realize that having to hold a key for ≥500ms is actually pretty long. It's actually so high that QMK will automatically enable [permissive hold](#permissive-hold) to allow you to trigger a keyboard shortcut without having to wait half a second to pass.

My point is that the quicker your taps are, the more you can afford to reduce the tapping term which has the consequence of letting you trigger keyboard shortcuts much more rapidly.

Before you get the wrong idea, I want to make it clear that I am *not* telling you to increase your WPM speed. By "swift" taps, I mean avoiding keeping keys pressed for needlessly long. Don't linger your fingers on the keys. It's not a matter of reducing the time it takes you to type the next character. You can take a 10s break before typing each character and achieve a dramatically low WPM but you can nonetheless tap an individual key briskly.

## Finding the sweet spot [WIP]

## A better baseline: accidental alphas [WIP]

## Putting home row mods on (almost) all layers [WIP]

## Disabling home row mods when gaming

Home row mods and video games do not get along very well. It's easy to see why. If <kbd>A</kbd>, <kbd>S</kbd>, <kbd>D</kbd> all act as modifiers when held down, you don't risk going very far in the video game if you use WASD to move around. There have also been reports of the tapping function of a mod-tap not working reliably with certain video games.

The common solution to this problem is to create a gaming layer where you get rid of the home row mods.

## Learning a new keyboard layout [WIP]

## One-Shot Shift thumb keys [WIP]

<!-- Tricks -->

## Using non-basic keycodes in modtaps [WIP]

## Using modifiers with encoders and/or combos [WIP]

## Changing home row order on the fly based on OS [WIP]

## Bilateral combinations
Let's look into the situation where one uses home row mods on a keyboard layout that favors rolls. The most famous rolls-focused keyboard layout is Colemak, so we'll use the following home row mods setup as a case study.

Let's imagine that this Colemak user is aiming for the lowest tapping term on his Shift mod-taps in order to capitalize letters in a faster and more responsive way. He's gone so low on the tapping term of his Shift mod-taps, that rolling over <kbd>S</kbd> and <kbd>T</kbd> produces "T" instead of the expected "st". Same story for rolls over <kbd>E</kbd> and <kbd>N</kbd>.
If he's otherwise happy with the tapping term of his Shift mod-taps, what can he do to help him type "The first event" rapidly and accurately without ending up with "The firT evNt" instead?

It is tempting to say that he should use `TAPPING_TERM_PER_KEY` and increase the tapping term of his Shift mod-taps in order to reduce the accidental mod activations but aside from the "st" and "en" bigrams, this user is satisfied with the speed of activation of Shift for every other combination of letters. Increasing the tapping term will probably help with rolling "st" and "en" but it will also ever so slightly affect every other bigram involving "s" or "e". 
This hypothetical user can either adapt himself to it (not hard) or if he really wants to, he can adapt the firmware *to himself*.

To do so, he can use this nifty piece of code in `process_record_user` which takes advantage of the distinction between left-hand Shift and right-hand Shift:

```c
uint8_t mod_state;
bool process_record_user(uint16_t keycode, keyrecord_t *record) {
    mod_state = get_mods();
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
            if (mod_state & MOD_BIT(KC_RSHIFT)) {
                // temporarily disable right Shift
                // so that we can send KC_E and KC_N
                // without Shift on.
                unregister_code(KC_RSHIFT);
                tap_code(KC_E);
                tap_code(KC_N);
                // restore the mod state
                set_mods(mod_state);
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
            if (mod_state & MOD_BIT(KC_LSHIFT)) {
                unregister_code(KC_LSHIFT);
                tap_code(KC_S);
                tap_code(KC_T);
                set_mods(mod_state);
                return false;
            }
        }
         /*else process LCTL_T(KC_T) as usual.*/
        return true;
    }
    return true;
};
```

If you have a different setup because you neither use Colemak nor use the GASC/◆⎇⇧⎈ home row mods order, but are interested in using this trick, here are the parameters you need to change:

Let `LSFT_T(l_s_letter)` equal your left hand home row Shift mod-tap, 
    `LMOD_T(l_letter)` equal your left hand home row non-Shift mod-tap (it can be any mod, that will depend on what you've put near your home row Shift mod-tap),
and vice versa for the right hand;
     `RSFT_T(r_s_letter)`,
     `RMOD_T(r_letter)`.

```c
    case RMOD_T(r_letter):
        if (record->tap.count > 0) {
            if (mod_state & MOD_BIT(KC_RSHIFT)) {
                unregister_code(KC_RSHIFT);
                tap_code(r_s_letter);
                tap_code(r_letter);
                set_mods(mod_state);
                return false; 
            }
        }
        return true;

    case LMOD_T(l_letter):
        if (record->tap.count > 0) {
            if (mod_state & MOD_BIT(KC_LSHIFT)) {
                unregister_code(KC_LSHIFT);
                tap_code(l_s_letter);
                tap_code(l_letter);
                set_mods(mod_state);
                return false;
            }
        }
        return true;
```

This trick is about cancelling the effet of home row Shift mod-tap on a nearby home row mod-tap but nothing prevents you from cancelling the effect of home row non-Shift mod-tap on another key that isn't even a mod-tap at all. It can be generalized.

Sticking with the Colemak example, imagine you have repetitive accidental mod activations when doing `RGUI_T(KC_O)`+`KC_U` when rolling keys for the bigram "ou". You can add a case in your `process_record_user` for `KC_U` where you check the mod state for RGUI and override the default behaviour by sending "ou" instead of <kbd>◆ GUI</kbd>+<kbd>U</kbd>.

<!-- Link to manna's bilateral combinations -->

That being said, I want to clarify that this trick is most definitely not necessary for an enjoyable home row mods experience.
I've mentioned it here just to give another example why you might want to distinguish between right hand and left hand home row mods. You don't need to go this far.

However, if you desire to go even further, Manna Harbour, the creator of the Miryoku layout, is working on a new configuration option aptly named "Bilateral Combinations", which forces you to combine mods on one hand with taps on the opposite hand. This option can reduce accidental mods.  When it is enabled, the last mod-tap hold will be converted to a mod-tap tap if another key on the same hand is tapped.

For more information on this developing new option, consult these links:

* [Bilateral combinations docs](https://github.com/manna-harbour/qmk_firmware/blob/bilateral-combinations/docs/tap_hold.md#bilateral-combinations)
* [Bilateral combinations code](https://github.com/qmk/qmk_firmware/compare/master...manna-harbour:bilateral-combinations)

## Using mod-taps in combos [WIP]

# Alternatives [WIP]

## Alternative home row mods layout [WIP]
MMMM\_\_MMMM aren't the only places you could put the mod-taps on. You can also do it vim-arrows style with \_MMMMMMMM\_ to save your pinky from having to hold keys or go DHm style with 

```
_MMM__MMM_
   M  M
```

## Upper/Lower row mods [WIP]
> Myself i put them just below home row, dvorak so q,k,j w,m,v its still very easy to access but no false positives as you almost never type these letters in a row back to back at least not in english. When they were on home row h,t,n u,o,e i would often accidentally trigger combos like ctrl,-t

https://www.reddit.com/r/ErgoMechKeyboards/comments/ieegqa/implementing_home_row_mods/g2hd6ue/?utm_source=reddit&utm_medium=web2x&context=3

## Combos [WIP]
## Chording with thumb keys [WIP]

## Chorded one-shot [WIP]
> Have you considered chorded one-shot mods? F&J adding ctrl to the next stroke, D&K for shift, etc. Depending on the key combination, you could all but eliminate any possibility of false actuations… unless you need to type fjord a lot.

https://www.reddit.com/r/ErgoMechKeyboards/comments/ieegqa/implementing_home_row_mods/g2fnykn/?utm_source=reddit&utm_medium=web2x&context=3

## Home row layers and modifiers on the thumb keys [WIP]

## Tap dances [WIP]
> I use tap-dance for home row mods so I have to double tap the keys and hold them to activate the modifier, it works really well for me and I rarely accidentally activate the mod keys (it's more common for me to not activate them when I wanted to but the delay between typing the letter twice and activating mod key is configurable so I could probably make that happen less).

https://www.reddit.com/r/ErgoMechKeyboards/comments/ieegqa/implementing_home_row_mods/g2i5u8v/?utm_source=reddit&utm_medium=web2x&context=3

<!--
# FAQ
## What about typing speed?
## What about vim? How will I live without auto-repeatable HJKL?
-->

# Summary [WIP]
## TL;DR Table

| What are home row mods? | Practice of using mod-taps on the home row |
| Why use home row mods?  | It's a more ergonomic and efficient way to use modifiers |
| How to use home row mods? | Either use a QMK keyboard or install KMonad |
| How to lay out the modifiers on the home row? | It does not matter. If you're undecided, you can go for GACS/◆⎇⎈⇧ |
| What tap hold configuration settings should I enable? | `IGNORE_MOD_TAP_INTERRUPT` and `TAPPING_FORCE_HOLD`. `PERMISSIVE_HOLD` can also prove useful |
| How do I get started with home row mods on QMK or KMonad? | Go to the generator for the program you wish to use ([QMK](#qmk-home-row-mods-code-generator)) ([KMonad](#kmonad-home-row-mods-code-generator)), select your options and click on the button "Generate". Follow the instructions to figure out where to paste the generated output |
