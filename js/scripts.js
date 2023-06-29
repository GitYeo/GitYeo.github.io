const url =
  "https://script.google.com/macros/s/AKfycbygaXA4KRIlcbQmb13t26bi3pjyKZ2UZIBnA_0tI13tPE-9UlhNbL5qe2_UcfVPs9zv/exec";
var input_id = document.getElementById("id_input");
var input_password = document.getElementById("password_input");
var login_button = document.getElementById("login_button");

login_button.addEventListener("click", (e) => {
  const id = input_id.value;
  const password = input_password.value;
  const url1 = `${url}?userid=${id}`;
  console.log(url1);
  if (id && password) {
    fetch(url1)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    //window.location.href = "mainpage.html";
  } else {
    alert("The input should not be empty");
  }
});
