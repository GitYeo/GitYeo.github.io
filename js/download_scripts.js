var tablearea = document.getElementById("tablearea");

var table = document.createElement("table");
var thead = document.createElement("thead");
var array = ["ID", "FirstName", "LastName", "Gender"];

for (var j = 0; j < array.length; j++) {
  var th = document.createElement("th"); //column
  var text = document.createTextNode(array[j]); //cell
  th.appendChild(text);
  thead.appendChild(th);
}
table.appendChild(thead);
var tbody = document.createElement("tbody");

for (var i = 0; i < 10000; i++) {
  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");

  var text1 = document.createTextNode("Text1");
  var text2 = document.createTextNode("Text2");
  var text3 = document.createTextNode("Text3");
  var text4 = document.createTextNode("Text4");

  td1.appendChild(text1);
  td2.appendChild(text2);
  td3.appendChild(text3);
  td4.appendChild(text4);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  tbody.appendChild(tr);
}
table.appendChild(tbody);
tablearea.appendChild(table);
