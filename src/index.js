"use strict";
const $ = require('jquery');
// import {sayHello} from './say-hello.js'
const sayHello =  require('./say-hello.js');
// const sayHello = () => console.log("hello");
sayHello();

$('body').append('<p>hello</p>');
