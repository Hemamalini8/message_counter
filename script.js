var text = document.getElementById("text");
var counter = document.getElementById("Count");
var warning = document.getElementById("warning");
var max = 200;

text.addEventListener("input", function () {
  var len = text.value.length;

  if (len > max) {
    text.value = text.value.slice(0, max);
    len = max;
    warning.textContent = "⚠️ You have reached the maximum character limit!";
  } else {
    warning.textContent = "";
  }
  counter.textContent = len + " typed / " + max + " max";
});
