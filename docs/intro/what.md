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


