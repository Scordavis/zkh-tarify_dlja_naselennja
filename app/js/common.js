$(function() {

	// Custom JS

  // open editing
	// $( '.app-content__disclose' ).click(function() {
	//   $( this ).parent().find( '.app-content__wrapper' ).toggle( 'fast' );
	// });


	$( '.rate__btn--open , .rate__btn--done' ).click(function() {
	  $( this ).parents('.rate__table').find( '.rate__valid' ).slideToggle( 'medium ');
	  $( this ).parents('.rate__table').find( '.rate__editing' ).slideToggle( 'medium ' );
	});


});
