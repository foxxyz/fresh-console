:rainbow: Color Console
=======================

Augment `console` logging functions to output with severity-specific colors.

Includes additions for logging without newlines.

Because readability matters.

Installation
------------

```sh
npm install color-console
```

Usage
-----
```javascript
require('color-console')

console.debug("👀 For developers only")
console.log("🙈 Don't pay attention to me")
console.info("👍 Things are going fine")
console.warn("⚡ I hope you know what you're doing")
console.error("🔥 Something went very wrong")
console.success("✅ Successful completion!")

console.part.info("⏳ For when you're waiting...")
console.info("And then you're done ⌛")
```

Output
------

![output.png](https://i.imgur.com/3MbdAkt.png)

Credits
-------

This package is a fork of [`paint-console`](https://github.com/Borodin/paint-console) by [Maxim Borodin](http://github.com/Borodin), which I've used for a long time. Thanks Maxim!