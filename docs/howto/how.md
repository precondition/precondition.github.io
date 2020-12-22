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

Moreover, this is a poor allocation of the mods in regard to their frequency of usage. Assuming that you do not use Caps Lock or Shift Lock,[^2] Shift is *by far* the most used modifier. It is generally unwise to let the pinky take on all this load. Although letting the pinky fingers deal with Shift is the option that will necessitate the least hand swaps when typing a string of capital letters. This order also positions Alt and GUI in an undeservingly good place. The index and middle fingers are the strongest of the four non-thumb fingers but Alt and GUI aren't the most frequently used modifiers for Windows, Linux and BSD users.

### GASC/◆⎇⇧⎈

This is the layout found in the cover pic of this article and what's used in most of the examples. Compared to the SCGA order, this is much more reasonable in terms of using the strongest fingers for the most common modifiers in operating systems that are not MacOS.

Indeed, if you sort the four modifiers by their frequency in Windows and/or Linux, you will find: GUI < Alt < Control < Shift.[^3] The observant among you will have noticed that this does not stick with GASC/◆⎇⇧⎈. Why are Control and Shift swapped? There are multiple reasons that can justify this choice:
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
