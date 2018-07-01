$(function() {

	// Custom JS

  // open editing
	// $( '.app-content__disclose' ).click(function() {
	//   $( this ).parent().find( '.app-content__wrapper' ).toggle( 'fast' );
	// });


	$( '.rate__btn' ).click(function() {
	  $( this ).parents('.rate__table').find( '.rate__valid' ).toggleClass( 'active');
	  $( this ).parents('.rate__table').find( '.rate__editing' ).toggleClass( 'active' );
	});


});
