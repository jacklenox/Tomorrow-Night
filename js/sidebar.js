jQuery(document).ready(function($) {
    $('#controls a').click( function( e ) {
    	e.preventDefault();
    	if ( $( '#secondary' ).hasClass('secondary-folded-out') ) {
	    	$( '#secondary' ).removeClass( 'secondary-folded-out' ).addClass( 'secondary-folded-in' );
    	} else {
    		$( '#secondary' ).removeClass( 'secondary-folded-in' ).addClass( 'secondary-folded-out' );
    	}
    	return false;
    });
});