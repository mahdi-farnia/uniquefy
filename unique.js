function unique(e){if(Array.isArray(e)){if((t=e.length)<2)return e;for(var r=0,n=[];r<t;r++){var u=e[r];-1===n.indexOf(u)&&n.push(u)}return n}if(null!=e&&"object"==typeof e&&!e.nodeType&&!e.window){var t,i=Object.keys(e);if((t=i.length)<2)return;for(r=0;r<t;r++)for(var f=e[i[r]],o=0;o<r;o++)f==e[i[o]]&&delete e[i[r]];return e}}module.exports={unique:unique};