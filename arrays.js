var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, ele)
{
  return [ele, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, ele)
{
  
}

function destructivelyAddElementToEndOfArray(arr, ele)
{
  return arr.push(ele)
}