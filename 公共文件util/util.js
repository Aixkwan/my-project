var ce=function(tagName){
    var tagName=tagName||"div";
    return document.createElement(tagName)
}
var rd=function(max,min){
    return Math.floor(Math.random()*(max-min)+min)
}