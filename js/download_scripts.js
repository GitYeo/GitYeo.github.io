console.log("data:", DATA["url"]);
const url = DATA["url"];
const gas_url = `${url}?download`;
var sheetdata = {};

fetch(gas_url)
  .then((res) => res.json())
  .then((data) => {
    sheetdata = data;

    var tablearea = document.getElementById("tablearea");
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var array = ["科目", "教師", "年份", "類別", "檔案名稱"];
    for (var j = 0; j < array.length; j++) {
      var th = document.createElement("th"); //column
      var text = document.createTextNode(array[j]); //cell
      th.appendChild(text);
      thead.appendChild(th);
    }
    table.appendChild(thead);
    var tbody = document.createElement("tbody");
    console.log("sheetdata length:", sheetdata.length);
    for (var i = 0; i < sheetdata.length; i++) {
      var tr = document.createElement("tr");

      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      var td4 = document.createElement("td");
      var a = document.createElement("a");

      var text1 = document.createTextNode(sheetdata[i]["科目"]);
      var text2 = document.createTextNode(sheetdata[i]["教師"]);
      var text3 = document.createTextNode(sheetdata[i]["年份"]);
      var text4 = document.createTextNode(sheetdata[i]["類別"]);
      a.href = sheetdata[i]["檔案"];
      a.text = sheetdata[i]["檔案名稱"];
      a.target = "_blank";
      a.rel = "noopener noreferrer";

      td1.appendChild(text1);
      td2.appendChild(text2);
      td3.appendChild(text3);
      td4.appendChild(text4);

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(a);

      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    tablearea.appendChild(table);
  });

/*
async function getsheetdata(url) {
  try {
    let response = await fetch(url);
    sheetdata = await response.json();
    console.log("response:" + response);

    console.log("sheedata:" + sheetdata);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

getsheetdata(gas_url);
*/
