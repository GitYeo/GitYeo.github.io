const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const url = DATA["url"];
const qid = urlParams.get("qid");
console.log(qid);
const gas_url = url + "?" + urlParams;
console.log("gas_url:" + gas_url);
var qid_tag = document.getElementById("qid_tag");
qid_tag.text = qid;
const question = localStorage.getItem("question");
var question_tag = document.getElementById("question_tag");
console.log("question: " + question);
question_tag.innerHTML = question;
localStorage.removeItem("question");

fetch(gas_url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    var container = document.getElementById("answer_list");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.className = "tip container";
      var span_id = document.createElement("span");
      span_id.innerHTML = data[i]["userid"];
      span_id.className = "title";
      span_id.id = "span_" + i;
      var span_time = document.createElement("span");
      span_time.innerHTML = data[i]["time"];
      span_time.className = "title";

      var p_tag = document.createElement("p");
      p_tag.innerHTML = data[i]["answer"];
      p_tag.className = "m-0 text-centere";
      div.appendChild(span_id);
      div.appendChild(span_time);
      div.appendChild(p_tag);
      container.appendChild(div);
      for (var j = 0; j < 3; j++)
        container.appendChild(document.createElement("br"));
    }
  });
