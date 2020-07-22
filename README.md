# Unique
This package make every javascript duplicated array or plain object to a unique one
<br />
<br />
<hr />

- npm i unique

## Files
Four files are available:

All And Comments ( Source ):
> unique.all.js

Just Array Function (Minified):
> unique.arr.js

Just PlainObject Function (Minified):
> unique.obj.min.js

All in One Function (Minified):
> unique.min.js
<hr />
<br />

# Getting Started
+ <h3>In This Example We Just Use **unique.min.js**</h3>

        const unique = require("unique");
        
        unique({ one: "hello", two: "World", three: "hello" })
        > { one: "hello", two: "World" }

        unique([ 1 , 2 , 3 , 4 , 5 , 6 , 1 , 2 ])
        > [ 1 , 2 , 3 , 4 , 5 , 6 ]

+ <h3>It's Array Method Also Faster Than Other Packages You Can Try Out 😉</h3>

> Thanks for choosing this package if wanna use my arrayify package go <a href="https://www.npmjs.com/package/arrayify.js">here</a>
