window.onload = function () {
  // リンクを新規タグで開く
  let aTags = document.getElementsByTagName('a');
  //for( let i = 0; i < aTags.length; i++  ){
  for( let i in aTags ){
    aTags[i].target = '_blank';
  }
}

