var x = 33, y = 25 ;
var direction = 'n' ;
var i = 0;

function stopMovement(id)
{
	clearInterval(id);
}

function antAlgorithm( canvas, ctx, squareColour, colour, panel, repeatID )
{
	if ( (x < 0 || x > 119) || ( y < 0 || y > 119 ) )
	{ panel.innerHTML = "  Iteration: " + i + " ...the ant has run away... "; stopMovement(repeatID); }
	else
	{ panel.innerHTML = "  Iteration: " + i ;
	
		imgdt = ctx.getImageData( ( 5 * x ) , ( 5 * y ) , 5 , 5 ) ;
		squareColour = imgdt.data[ 0 ] === 255 ? false : true ;
		if ( squareColour === false )
		{
			switch( direction )
			{
				case 'n' : direction = 'w' ;	break ;
				case 'e' : direction = 'n' ;	break ;
				case 's' : direction = 'e' ;	break ;
				case 'w' : direction = 's' ;	break ;
			}
		}
		else
		{
			switch( direction )
			{
				case 'n' : direction = 'e' ;	break ;		
				case 'e' : direction = 's' ;	break ;
				case 's' : direction = 'w' ;	break ;
				case 'w' : direction = 'n' ;	break ;
			}
		}
		squareColour = !squareColour ;
		colour = squareColour === true ? "black" : "white" ;
		ctx.fillStyle = colour ;
		ctx.fillRect( ( 5 * x ) , ( 5 * y ) , 5 , 5 ) ;
		switch( direction )
		{
			case 'n' : y-- ;	break ;
			case 'e' : x++ ;	break ;
			case 's' : y++ ;	break ;
			case 'w' : x-- ;	break ;
		}		
	}
	i++;
}
	
function init()
{
	var canvas = document.getElementById( "board" ) ;
	var ctx = canvas.getContext( "2d" ) ;
	var panel = document.getElementById( "panel" ) ;
	var squareColour = false ; 
	var colour = "white" ;
	ctx.fillStyle = colour ; 
	ctx.fillRect( 0 , 0 , 600 , 600 ) ;
	var width = document.getElementById("langton").offsetWidth;
	document.getElementById("langton").style.marginLeft = (width - 600)/2 + "px" ;
	var repeat = setInterval( function() {antAlgorithm( canvas, ctx, squareColour, colour, panel, repeat );}, 1 ) ;
}
document.addEventListener( "DOMContentLoaded" , init , false ) ;