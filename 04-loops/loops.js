/* eslint-disable no-unused-vars */
function repeat (str, num){
  let out = "" 
    for (let i = 1; i <= num; i++){
        out += str
    }
    return out
}

function sum (arr){
    let sumArr = 0
    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i]
    }
    return sumArr
}


function join (arr, delimiter) {
  let out = ""
  for (let i = 0; i < arr.length; i++) {
      out += arr[i]
      if (typeof delimiter !== "undefined" && i < arr.length - 1){
          out += delimiter
      }
    }
    return out
}


function gridGenerator (num) {
    let grid = ""
  for (let i = 1; i <= num; i++){
  for (let j = 1; j <= num; j++) {
      if ((i + j) % 2 === 0) {
          grid += "#"
      } else { grid += " "
  }
  }
      grid += "\n"
  }
      return grid
}

function paramify (obj) {
    let out = []
    for (let key in obj) {
        if(obj.hasOwnProperty(key))
    out.push(key + "=" +obj[key])
    }
    return out.sort().join("&")
}


function paramifyObjectKeys(obj){
    let out = []
  let keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    out.push(keys[i]+ "=" +obj[keys[i]])
    }
    return out.sort().join("&")
}

function sort (arr) {
    for (let i = arr.length - 1; i >=0; i--) {
      for (let j = arr.length - i; j > 0; j--) {
        if (arr[j] < arr[j - 1]) {
          let org = arr[j]
          arr[j] =arr[j - 1]
          arr[j -1] = org
        }
      }
    }
return arr
}

function repeat(str, num) {
    let out = ""
  for (let i = 1; i <= num; i++) {
      out += str
      }
      return out
}

function sum (arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        }
        return sum 
}

function join (arr, delimiter) {
    let str = ""
    for (let i = 0; i < arr.length; i++){
        str += arr[i]
        if (typeof delimiter !== "undefined" && i < arr.length -1)
        str += delimiter
    }
    return str
}


function gridGenerator (num) {
    let out = ""
    for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
    if((i+j) % 2 === 0) {
        out += "#"
    } else { out += " "
    }
    }
    out += "\n"
    }
    return out
}

function paramify (obj) {
    let out = []
    for (let key in obj){
        if(obj.hasOwnProperty(key))
    out.push(`${key}=${obj[key]}`)
    }
    return out.sort().join("&")
} 


function paramifyObjectKeys(obj){
    let out =[]
    let keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++){
        out.push(keys[i] + "=" + obj[keys[i]])
    }
    return out.sort().join("&")
}



function sort(items) {
  let length = items.length;
  for (let i = length - 1; i >= 0; i--) {
    //Number of passes
    for (let j = length - i; j > 0; j--) {
      //Compare the adjacent positions
      if (items[j] < items[j - 1]) {
        //Swap the numbers
        let tmp = items[j];
        items[j] = items[j - 1];
        items[j - 1] = tmp;
      }
    }
  }
  return items;
}






