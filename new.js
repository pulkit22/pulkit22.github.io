count=0;
function myFunction()

{

var caption = prompt(" Enter a Caption","Caption");
var names = prompt(" Enter Name of author","Name");
var c=$("#cpy").clone().attr("id","new"+(++count)).appendTo("#app");
$("#new"+count).find("#name").text(names);
$("#new"+count).find("#cap").text(caption);
$("#new"+count).find("#usr-img").attr("style","background-image: url(https://placeimg.com/128/128/people)");
$("#new"+count).find("#main-img").attr("src","https://placeimg.com/500/333/nature");
}


//https://placeimg.com/500/333/nature