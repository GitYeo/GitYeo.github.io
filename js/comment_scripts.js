const userid = localStorage.getItem("userid");
var userid_tag = document.getElementById("userid");
userid_tag.innerHTML = userid;
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
      p_tag.style = "white-space: pre-line";

      div.appendChild(span_id);
      div.appendChild(span_time);
      div.appendChild(p_tag);
      container.appendChild(div);
      for (var j = 0; j < 3; j++)
        container.appendChild(document.createElement("br"));
    }
  });

var comment_button = document.getElementById("comment_button");

comment_button.addEventListener("click", (e) => {
  //var comment = document.getElementById("comment_textarea").value;
  var comment = tinymce.get("comment_textarea").getContent();
  console.log("Comment:" + comment);
  const formData = new FormData();
  formData.append("comment", comment);
  formData.append("qid", qid);
  formData.append("userid", userid);
  console.log(comment);
  fetch(gas_url, { method: "POST", body: formData })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      var container = document.getElementById("answer_list");
      var div = document.createElement("div");
      div.className = "tip container";
      var span_id = document.createElement("span");
      span_id.innerHTML = userid;
      span_id.className = "title";
      span_id.id = "span_";
      var span_time = document.createElement("span");
      span_time.innerHTML = data["time"];
      span_time.className = "title";

      var p_tag = document.createElement("p");
      p_tag.innerHTML = comment;
      p_tag.className = "m-0 text-centere";
      p_tag.style = "white-space: pre-line";
      div.appendChild(span_id);
      div.appendChild(span_time);
      div.appendChild(p_tag);
      container.appendChild(div);
      for (var j = 0; j < 3; j++)
        container.appendChild(document.createElement("br"));
      tinymce.get("comment_textarea").setContent("");
    });
});
