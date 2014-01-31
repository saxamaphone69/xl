#xl.css
####*Sort of like Medium, but not as tight.*

Honestly, not very usable in its current state.

Again, you're going to have to block the default stylesheets using the method from collabstyle, and then you'll also need `xl.user.js` to add a pinch of rice.

####Stuff You Need

First, download [Ionicons](http://ionicons.com/) and then change the reference on Line 5 of the CSS to where you have it saved.

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
