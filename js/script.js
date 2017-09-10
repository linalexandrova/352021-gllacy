var feedbackButton = document.getElementById("feedbackButton");
var feedbackForm = document.getElementById("feedbackForm");
var overlayBlack = document.getElementById("overlayBlack");
var crossForm = document.getElementById("crossForm");
feedbackButton.addEventListener( "click" , function() {
  if(feedbackForm.classList.contains("hidden")){
    feedbackForm.classList.remove("hidden");
    overlayBlack.classList.remove("hidden");
  }else{
    feedbackForm.classList.add('hidden');
  }
});
crossForm.addEventListener("click" , function() {
  feedbackForm.classList.add('hidden');
  overlayBlack.classList.add('hidden');
});
