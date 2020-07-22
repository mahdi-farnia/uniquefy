function unique(arr) {
  if (Array.isArray(arr)) {
    var len = arr.length;
    // Avoid Accepting non Duplicatable Arrays
    if (len < 2) return arr;
    var i = 0,
      res = [];
    for (; i < len; i++) {
      var el = arr[i];
      if (res.indexOf(el) !== -1) continue;
      res.push(el);
    }
    return res;
  }
  // For Plain Objects
  else if (
    arr != null &&
    typeof arr === 'object' &&
    !arr.nodeType &&
    !arr.window
  ) {
    var keys = Object.keys(arr),
      len = keys.length;
    // Avoid Accepting non Duplicatable Objects
    if (len < 2) return;
    var i = 0;
    for (; i < len; i++) {
      var f = arr[keys[i]];
      for (var k = 0; k < i; k++) {
        if (f == arr[keys[k]]) {
          delete arr[keys[i]];
        }
      }
    }
    return arr;
  }
}

// For Arrays
function uniqueArr(arr) {
  if (Array.isArray(arr)) {
    var len = arr.length;
    if (len < 2) return arr;
    var i = 0,
      res = [];
    for (; i < len; i++) {
      var el = arr[i];
      if (res.indexOf(el) !== -1) continue;
      res.push(el);
    }
    return res;
  }
  // Just Array Excepted For Returning...
  return [];
}

// For Plain Objects
function uniqueObject(plainObj) {
  if (
    plainObj != null &&
    typeof plainObj === 'object' &&
    !plainObj.nodeType &&
    !plainObj.window
  ) {
    var keys = Object.keys(plainObj),
      len = keys.length;
    if (len < 2) return;
    var i = 0;
    for (; i < len; i++) {
      var f = plainObj[keys[i]];
      for (var k = 0; k < i; k++) {
        if (f == plainObj[keys[k]]) {
          delete plainObj[keys[i]];
        }
      }
    }
    return plainObj;
  }
  // Just Plain Object Excepted For Returning...
  return {};
}

module.exports = {
  unique,
  uniqueArr,
  uniqueObject
};
