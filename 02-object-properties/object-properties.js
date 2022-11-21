/* eslint-disable no-unused-vars */

function setPropsOnObj (object) {
 object.x = 7,
 object['y'] = 8,
 object.onePlus = function (num) {
     return num+1 
 }
}


function setPropsOnArr(arrayObject) {
    arrayObject.hello = function() {
    return "Hello!"
    },
    arrayObject['full'] = "stack",
    arrayObject[0] = 5,
    arrayObject.twoTimes = function(num) {
        return num * 2
    }
}


function setPropsOnFunc (functionObject) {
    functionObject.year = "20??",
    functionObject.divideByTwo = function(num) {
        return num / 2
    }
}



let shallowCopy = (obj1, obj2) => {
 if (Array.isArray (obj1, obj2)) return [...obj1, ...obj2]
 return {...obj1, ...obj2}
}













