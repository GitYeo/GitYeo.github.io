const url =
  "https://script.google.com/macros/s/AKfycbydGBaZ8QucOTcp26kEXHPEvIGrS1kkaa6a1txe5TiILdsclTUBXTchjOkibQZuRTK1/exec";
var input_id = document.getElementById("id_input");
var input_password = document.getElementById("password_input");
var login_button = document.getElementById("login_button");

login_button.addEventListener("click", (e) => {
  const id = input_id.value;
  const password = input_password.value;
  const url1 = `${url}?userid=${id}&password=${password}`;
  console.log(url1);
  const requestOptions = {
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (id && password) {
    fetch(url1, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    //window.location.href = "mainpage.html";
  } else {
    alert("The input should not be empty");
  }
});
