document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13 && event.target.nodeName === "INPUT") {
    var form = event.target.form;
    var index = Array.prototype.indexOf.call(form, event.target);
    form.elements[index + 1].focus();
    event.preventDefault();
  }
});
errorType.oninput = () => {
  let items = document.getElementsByClassName("etype");
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = document.getElementById("errorType").value;
  }
};

userId.oninput = () => {
  let items = document.getElementsByClassName("userId");
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = document.getElementById("userId").value;
  }
};
binLocation.oninput = () => {
  let items = document.getElementsByClassName("bin");
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = document.getElementById("binLocation").value;
  }
};

caseCSX.oninput = () => {
  let items = document.getElementsByClassName("caseCSX");
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = document.getElementById("caseCSX").value;
  }
};
addInfo.oninput = () => {
  let items = document.getElementsByClassName("addInfo");
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = document.getElementById("addInfo").value;
  }
};
oBin.oninput = () => {
  let items = document.getElementsByClassName("oBin");
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = document.getElementById("oBin").value;
  }
};
oVBin.oninput = () => {
  let items = document.getElementsByClassName("oVBin");
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = document.getElementById("oVBin").value;
  }
};
oVBin.oninput = () => {
  let items = document.getElementsByClassName("aoBin");
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = document.getElementById("aoBin").value;
  }
};
const span = document.querySelector("#copytext");
const span1 = document.querySelector("#copytext1");
const span2 = document.querySelector("#copytext2");
const span3 = document.querySelector("#copytext3");
const span4 = document.querySelector("#copytext4");
const span5 = document.querySelector("#copytext5");
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
span1.onclick = function () {
  document.execCommand("copy");
};
span1.addEventListener("copy", function (event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span1.textContent);
    console.log(event.clipboardData.getData("text"));
  }
});
span2.onclick = function () {
  document.execCommand("copy");
};
span2.addEventListener("copy", function (event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span2.textContent);
    console.log(event.clipboardData.getData("text"));
  }
});
span3.onclick = function () {
  document.execCommand("copy");
};
span3.addEventListener("copy", function (event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span3.textContent);
    console.log(event.clipboardData.getData("text"));
  }
});
span4.onclick = function () {
  document.execCommand("copy");
};
span4.addEventListener("copy", function (event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span4.textContent);
    console.log(event.clipboardData.getData("text"));
  }
});
span5.onclick = function () {
  document.execCommand("copy");
};
span5.addEventListener("copy", function (event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span5.textContent);
    console.log(event.clipboardData.getData("text"));
  }
});
function reset() {
  window.location.reload();
}
function setDisplay(className, displayValue) {
  var items = document.getElementsByClassName(className);
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = displayValue;
  }
}
