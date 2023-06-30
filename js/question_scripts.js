const userid = localStorage.getItem("userid");
var userid_tag = document.getElementById("userid");
userid_tag.innerHTML = userid;
console.log("data:", DATA["url"]);
console.log(window.location.href);
const url = DATA["url"];
const gas_url = `${url}?question`;

fetch(gas_url)
  .then((res) => res.json())
  .then((data) => {
    var container = document.getElementById("question_list");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.className = "tip container";
      var span_id = document.createElement("span");
      span_id.innerHTML = data[i]["qid"];
      span_id.className = "title";
      span_id.id = "span_" + i;
      var span_time = document.createElement("span");
      span_time.innerHTML = data[i]["time"];
      span_time.className = "title";

      span_id.addEventListener("click", (e) => {
        console.log(e.target.innerHTML);
        var question = document.getElementById(e.target.innerHTML).innerHTML;
        console.log("myquestion:" + question);
        localStorage.setItem("question", question);
        window.location.href = `comment.html?qid=${e.target.innerHTML}`;
      });
      var p_tag = document.createElement("p");
      p_tag.innerHTML = data[i]["question"];
      p_tag.id = data[i]["qid"];
      p_tag.className = "m-0 text-centere";
      div.appendChild(span_id);
      div.appendChild(span_time);
      div.appendChild(p_tag);
      container.appendChild(div);
      for (var j = 0; j < 3; j++)
        container.appendChild(document.createElement("br"));
    }
  });

/*
var container = document.getElementById("question_list");
for (var i = 0; i < 5; i++) {
  var div = document.createElement("div");
  div.className = "tip container";
  var span_id = document.createElement("span");
  span_id.innerHTML = "jsnvjnsdv";
  span_id.className = "title";
  var span_time = document.createElement("span");
  span_time.innerHTML = "dregdrgre";
  span_time.className = "title";

  var p_tag = document.createElement("p");
  p_tag.innerHTML = "regergreg";
  p_tag.className = "m-0 text-centere";
  div.appendChild(span_id);
  div.appendChild(span_time);
  div.appendChild(p_tag);
  container.appendChild(div);
  for (var j = 0; j < 3; j++) {
    container.appendChild(document.createElement("br"));
  }
}
*/
/*
    <div class="tip container">
        <span class="title">B810972</span>
        <span class="title">26/6/2023 11:14</span>

        <p class="m-0 text-centere">
         xxxxx
        </p>
      </div>
  */
