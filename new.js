/***********zoom pic ko*********/
function zoom(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*200
    y = offsetY/zoomer.offsetHeight*200
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }








