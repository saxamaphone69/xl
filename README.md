#xl.css
####*Sort of like [Medium](https://medium.com/), but not as tight.*

![xl screenshot](http://i.imgur.com/bOUhaLX.png)

Honestly, not very usable in its current state.

Again, you're going to have to block the default stylesheets using the method from collabstyle, and then you'll also need `xl.user.js` to add a pinch of rice.

####Stuff You Need

[Firefox Nightly](http://nightly.mozilla.org/) browser. I use CSS variables which __ARE NOT__ supported officially yet. I actually think you need to flip the switch on them in `about:config`. I'm also going to get rid of the `-moz` prefix on `border-box` cause that's also new in Nightly.

Then, download [Ionicons](http://ionicons.com/) and then change the reference on Line 5 of the CSS to where you have it saved.

AdBlock Plus filters like this:

(add-ons > adblock > options > filter preferences > custom filters tab)

```
*//s.4cdn.org/image/title/*
*//s.4cdn.org/css/*
*//s.4cdn.org/js/prettify/prettify.*.css
*//pixel.quantserve.com/*
```

You will also need [Mayhem's LATEST 4chan X version](https://github.com/MayhemYDG/4chan-x/wiki/4chan-X-LATEST).

Also around line 370 you'll start seeing board specific headers. Just put `.board_g` or `.board_b` in a similar fashion to what is there and reference an image. (Find your picture, drag it into a new Firefox tab and copy the URL in the address bar between the quotes.

Chances are you'll need my specific settings. One day I'll support all options, I'm sure. But I won't provide those yet, that way if something doesn't work, just tell me and I'll know what I still need to do.
