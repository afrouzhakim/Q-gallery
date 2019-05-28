//make thumbnail image bar
function showThumbnailImages(){
  var images = ["thumb1", "thumb2", "thumb3", "thumb4", "thumb5", "thumb6", "thumb7", "thumb8", "thumb9"]
  var thumbNailsText = "<ul class='thumbnail-list'>";
  for (i=0; i<images.length; i++){
    thumbNailsText += "<li><img id='" + (i+1) + "' class=\"thumbnail-image\" src='asset///image///"+images[i]+".jpg' onclick= 'showImage (this)'></li>"
  }
  thumbNailsText += "</ul>"
  document.getElementById("Thumbnail").innerHTML = thumbNailsText;  
}
//replace image with selected thumbnail Image
function showImage(thumb){
    var src = thumb.getAttribute("src");
    var fullSrc = src.replace("thumb","full");
    var fullImage = document.getElementById ("full-image");
    fullImage.setAttribute("src" , fullSrc);
}
//make the button to go to the next image from thumbnail images
function goNext(){
  var im = document.getElementById("full-image");
  var imAddress = im.getAttribute ("src");
  var character = imAddress.charAt(16);
  var imNum = Number(character);
  imNum = imNum + 1;
  if (imNum > 9){
    alert("This is the last image.")
  } else {
    var imNumString = imNum.toString();
    var imNewAddress = imAddress.substr(0,16)+imNumString+imAddress.substr(17,20);
    im.setAttribute("src",imNewAddress);
  }
}
//make the button to go to the previous image from thumbnail images
function goBack(){
  var im = document.getElementById("full-image");
  var imAddress = im.getAttribute ("src");
  var character = imAddress.charAt(16);
  var imNum = Number(character);
  imNum = imNum - 1;
  if (imNum < 1){
    alert("This is the first image.")
  } else {
    var imNumString = imNum.toString();
    var imNewAddress = imAddress.substr(0,16)+imNumString+imAddress.substr(17,20);
    im.setAttribute("src",imNewAddress);
  }
}
//make the button to go to the first image from thumbnail images
function goFirst(){
  var im = document.getElementById("full-image");
  var imAddress = im.getAttribute ("src");
  var imNewAddress = imAddress.substr(0,16)+"1"+imAddress.substr(17,20);
  im.setAttribute("src",imNewAddress);
}
//make the button to go to the last image from thumbnail images
function goLast(){
  var im = document.getElementById("full-image");
  var imAddress = im.getAttribute ("src");
  var imNewAddress = imAddress.substr(0,16)+"9"+imAddress.substr(17,20);
  im.setAttribute("src",imNewAddress);
}
function showButtons() {
  var prev = document.getElementById("prev");
  prev.setAttribute("style","display:block");
  var next = document.getElementById("next");
  next.setAttribute("style","display:block");
  var first = document.getElementById("first");
  first.setAttribute("style","display:block");
  var last = document.getElementById("last");
  last.setAttribute("style","display:block");
}
function hideButtons() {
  var prev = document.getElementById("prev");
  prev.setAttribute("style","display:none");
  var next = document.getElementById("next");
  next.setAttribute("style","display:none");
  var first = document.getElementById("first");
  first.setAttribute("style","display:none");
  var last = document.getElementById("last");
  last.setAttribute("style","display:none");
}

