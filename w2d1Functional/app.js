"use strict";
let sum = arr=>arr.reduce((accum,item)=>accum+item,0);
let multiply=arr=>arr.reduce((accum,item)=>accum*item,1);
let reverse = s=>s.split("").reverse().join("");
let filterLongWords = (words,number)=>words.filter(word=>word.length>number);