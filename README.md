# stylus-loader-cache-bug

Steps to test:
```
git clone https://github.com/jordansexton/stylus-loader-cache-bug.git
cd stylus-loader-cache-bug
npm install
webpack
```

Expected output (dest/index.css):
```css
.home-header {
  background: #f00;
}
.page-header {
  background: #00f;
}
```

Actual output (dest/index.css):
```css
.page-header {
  background: #00f;
}
.page-header {
  background: #00f;
}

/*
 * sometimes this is .home-header { ... } depending on which @import is resolved first
 * if @require is used, only one will be output
 */
```
