const userid = localStorage.getItem("userid");
var userid_tag = document.getElementById("userid");
userid_tag.innerHTML = userid;

const url = DATA["url"];
const gas_url = `${url}?upload`;

function LoadFile(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    var fileData = e.target.result.substr(e.target.result.indexOf(",") + 1);
    var mimeTypeStart = e.target.result.indexOf("data:") + 5;
    var mimeTypeEnd = e.target.result.indexOf(";");
    var mimeType = e.target.result.substr(
      mimeTypeStart,
      mimeTypeEnd - mimeTypeStart
    );
    var fileName = file.name;
    document.getElementById("fileData").value = fileData;
    document.getElementById("mimeType").value = mimeType;
    document.getElementById("fileName").value = fileName;
  };
  reader.readAsDataURL(file);
}

function uploadFile(form) {
  console.log("valid:" + form.file.files[0]);
  if (form.file.files[0]) {
    const formData = new FormData();
    formData.append("fileData", form.fileData.value);
    formData.append("mimeType", form.mimeType.value);
    formData.append("fileName", form.fileName.value);
    formData.append("type", form.type.value);
    formData.append("year", form.year.value);
    formData.append("prof", form.prof.value);
    formData.append("subj", form.subject.value);

    fetch(gas_url, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        document.getElementById("upload_message").innerText = data["status"];
        document.getElementById("upload_form").reset();
      });
  }
}
