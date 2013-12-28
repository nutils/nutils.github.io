gen_onclick = function( style ) {
  return function() {
    if ( style.display == "none" ) {
      style.display = "block";
      this.innerHTML = "Less";
    }
    else {
      style.display = "none";
      this.innerHTML = "More";
    }
  };
};

window.onload = function() {
  var more = document.getElementsByClassName( "more" );
  previous = null;
  for ( var i = 0; i < more.length; i++ ) {
    more[i].style.display = "none";
    var newp = document.createElement( "p" );
    var newa = document.createElement( "a" );
    newa.setAttribute( "href", "javascript:;" );
    for ( var m = more[i]; m != previous; m = m.previousSibling ) {
      if ( m.id ) {
        newa.setAttribute( "href", "#" + m.id );
        break;
      }
    }
    newa.innerHTML = "More";
    newa.onclick = gen_onclick( more[i].style );
    newp.appendChild( newa );
    more[i].parentNode.insertBefore( newp, more[i].nextSibling );
    if ( newa.href == document.location.href ) {
      newa.onclick();
    }
    previous = more[i];
  }
  console.log( "everything loaded" );
};
