console.log("data:", DATA["url"]);
const url = DATA["url"];
var input_id = document.getElementById("id_input");
var input_password = document.getElementById("password_input");
var login_button = document.getElementById("login_button");

login_button.addEventListener("click", (e) => {
  const id = input_id.value;
  const password = input_password.value;
  const url1 = `${url}?userid=${id}&password=${password}`;
  console.log(url1);

  if (id && password) {
    fetch(url1)
      .then((res) => res.json())
      .then((data) => {
        console.log(data["status"]);
        if (data["status"] == "Pass") window.location.href = "mainpage.html";
        else alert("Password or userID incorrect");
      });

    //window.location.href = "mainpage.html";
  } else {
    alert("The input should not be empty");
  }
});
