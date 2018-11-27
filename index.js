var obj = { prop: 1 }
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},obj,{[key]:value})
}
var recipes = {};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

}