# react-gcaptcha

[![Build Status](https://travis-ci.org/twobucks/react-gcaptcha.svg)](https://travis-ci.org/twobucks/react-gcaptcha)
[![Downloads][downloads-image]][npm-url]

[npm-url]: https://www.npmjs.com/package/react-gcaptcha
[downloads-image]: http://img.shields.io/npm/dt/react-gcaptcha.svg

A [React](http://facebook.github.io/react/) reCAPTCHA. The FREE anti-abuse service. Easy to add, advanced security, accessible to wide range of users and platforms.

# What is reCAPTCHA?

reCAPTCHA is a free service that protects your site from spam and abuse. It uses advanced risk analysis engine to tell humans and bots apart. With the new API, a significant number of your valid human users will pass the reCAPTCHA challenge without having to solve a CAPTCHA (See blog for more details). reCAPTCHA comes in the form of a widget that you can easily add to your blog, forum, registration form, etc.

Please check [docs][1] for further details.

# Sign up for an API key pair

To use reCAPTCHA, you need to [sign up for an API key pair][2] for your site. The key pair consists of a site key and secret. The site key is used to display the widget on your site. The secret authorizes communication between your application backend and the reCAPTCHA server to verify the user's response. The secret needs to be kept safe for security purposes.

[1]: https://developers.google.com/recaptcha/intro
[2]: http://www.google.com/recaptcha/admin

# Installation

Install package via [npm](https://www.npmjs.com/)

```bash
$ npm install --save react-gcaptcha
```

# Usage

### Adding of reCAPTCHA Component

Html example code:

```html
<html>
  <head>
    <title>reCAPTCHA demo: Simple page</title>
    <script src="build/react.js"></script>
        <script src="https://www.google.com/recaptcha/api.js?onload=recaptchaLoaded&render=explicit" async defer></script>
  </head>
  <body>
    <div id="app"></div>
    <script src="build/index.js"></script>
  </body>
</html>
```

Example code: `scripts/index.js`

```javascript
var Recaptcha = require('react-gcaptcha');
var callback = function (key) {
  console.log(key);
};
var loaded = function () {
  console.log('recaptchaLoaded');
};

React.render(
  <Recaptcha
    sitekey='xxxxxxxxxxxxxxxxxxxx'
    onloadCallback={loaded}
    verifyCallback={callback}
    />,
  document.getElementById('app')
);
```

## All Component properties

* `sitekey`required - Google reCAPTCHA site key
* `elementID`(default `g-recaptcha`) - string to be used as a div ID
* `clsName` - className that gets applied to the parrent div
* `onloadCallback`- function to be called after recaptcha loaded
* `onloadCallbackName`(default `recaptchaLoaded`) - name of the global function that will be called after script loads
* `verifyCallback`- function to be called after successful reCAPTCHA validation
* `expiredCallback`- function to be called if reCAPTCHA is expired
* `size`(default `normal`) - it can be `normal` or `compact`
* `theme`(default `light`) - it can be `light` or `dark`
* `type`(default `image`) - it can be `image` or `audio`
* `render`(default `explicit`) - Whether to render the widget explicitly. But it can be set to `onload`
* `reset` (default `0`) - Just increment the number to reset the gcaptcha (Each time you change the number it resets the gcaptcha)

## TODO
* Add auto language detection

## License

MIT

## Sponsors

Two Bucks Ltd © 2016

<a href="https://twobucks.co">
  ![https://twobucks.co](https://twobucks.co/assets/images/logo-small.png)
</a>
