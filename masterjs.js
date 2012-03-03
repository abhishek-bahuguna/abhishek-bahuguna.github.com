function addTodo()
{
var a = document.getElementById('list').getElementsByTagName('li')[0].firstChild.nodeValue;
var x=document.getElementById("nameOfItem").value;
       
if(x.length==""){
       alert("Please eneter a ToDo item.");
       }
else if(x.length > 200)
       {
       alert("ToDo cannot be more than 200 characters.");
       }
else       
       {
if (a=="This is my first item to do!!")
{
       var o = document.getElementById('list');
       var p = document.getElementsByTagName('li')[0];
       o.removeChild(p);
       }
       
var newli = document.createElement("li");
newli.innerHTML="<input type='checkbox' name='checkbox' value='checkbox'> "+x

document.getElementById("list").appendChild(newli);       
document.getElementById("nameOfItem").value=document.getElementById("nameOfItem").defaultValue;
       var cnt = document.getElementById("list").getElementsByTagName("li").length;
       document.getElementById("count").value = "Number of items: "+cnt;
       }
}       
       
function search()
{
  var searchstr = document.getElementById("search").value;
  window.open("http://www.google.com/search?q="+searchstr);
}       