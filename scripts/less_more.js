less_more = function( item ) {
  var more = item.getElementsByClassName( "more" );
  for ( var i = 0; i < more.length; i++ ) {
    style = more[i].style;
    if ( style.display == "block" ) {
      style.display = "none";
    } else {
      style.display = "block";
    }
  }
};
