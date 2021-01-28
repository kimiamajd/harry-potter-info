
scrollButton = document.getElementById("scrollButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function toTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}