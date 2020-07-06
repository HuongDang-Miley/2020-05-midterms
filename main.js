
// MY CODE IS HERE
const capitalizeSentences = function (str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 2] === '.') {
      result += str[i].toUpperCase()
    } else {
      result += str[i].toLowerCase()
    }
  }
  return result
}



const isValidPassword = function (str) {
  if (str.length < 12 || str.includes(' ')) {
    return false
  }
  return true
}



const makeHalfSquares = function (arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i] / 2)
  }
  return result
}



const countAs = function (arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 90) {
      count++
    }
  }
  return count;
}



const deleteMiddleLetters = function (str) {
  let result = ''
  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length; i++) {
      if (i !== str.length / 2 && i !== str.length / 2 - 1) {
        result += str[i]
      }
    }
  }
  if (str.length % 2 !== 0) {
    for (let i = 0; i < str.length; i++) {
      if (i !== Math.floor(str.length / 2)) {
        result += str[i]
      }
    }
  }
  return result;
}



const lastIndexOfSpace = function (str) {
  if (str.includes(' ')) {
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === ' ') {
        return i
        break;
      }
    }
  } else {
    return -1
  }
}



const hyphenateName = function (str) {
  let result = ''
  let indexOfLastSpace = 0
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ' ') {
      indexOfLastSpace = i
      break
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (i === indexOfLastSpace) {
      result += '-'
    } else {
      result += str[i]
    }
  }
  return result
}



// =======================================
if (typeof capitalizeSentences === 'undefined') {
  capitalizeSentences = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof makeHalfSquares === 'undefined') {
  makeHalfSquares = undefined;
}

if (typeof countAs === 'undefined') {
  countAs = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof lastIndexOfSpace === 'undefined') {
  lastIndexOfSpace = undefined;
}

if (typeof hyphenateName === 'undefined') {
  hyphenateName = undefined;
}


module.exports = {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
  deleteMiddleLetters,
  lastIndexOfSpace,
  hyphenateName,
}
