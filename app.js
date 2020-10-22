document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13 && event.target.nodeName === "INPUT") {
    var form = event.target.form;
    var index = Array.prototype.indexOf.call(form, event.target);
    form.elements[index + 1].focus();
    event.preventDefault();
  }
});
input1.oninput = function () {
  result1.innerHTML = input1.value;
};
input2.oninput = function () {
  result2.innerHTML = input2.value;
};
input3.oninput = function () {
  result3.innerHTML = input3.value;
};
input4.oninput = function () {
  result4.innerHTML = input4.value;
};
input5.oninput = function () {
  result5.innerHTML = input5.value;
};
const span = document.querySelector("#copytext");

span.onclick = function () {
  document.execCommand("copy");
};

span.addEventListener("copy", function (event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span.textContent);
    console.log(event.clipboardData.getData("text"));
  }
});
function reset() {
  window.location.reload();
}
