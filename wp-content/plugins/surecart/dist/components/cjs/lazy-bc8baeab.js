"use strict";const onFirstVisible=(e,i)=>{new window.IntersectionObserver(((e,s)=>{e[0].intersectionRatio>0&&(i(),s.unobserve(e[0].target))})).observe(e)};exports.onFirstVisible=onFirstVisible;