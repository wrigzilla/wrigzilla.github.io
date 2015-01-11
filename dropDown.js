function createSelect( selectId, defltSel, startLoopIndex , endLoopIndex )
{
	var arrayData = [ 'pick something','a','b','c','pick something','d','e','f','pick something','g','h','i','pick something','j','k','l','pick something','m','n','o','pick something','p','q','r','pick something','s','t','u','pick something','v','w','x','pick something','y','z','1','pick something','2','3','4','pick something','5','6','7','pick something','8','9','10','pick something','11','12','13',
 ] ;  // table 0 - 51 in 13 groups of 4
	
	var HTMLString = "<select id='" + selectId + "'>";
	HTMLString += "<option value =" + defltSel + ">" + arrayData[defltSel] + "</option>" ;
	for ( var i = startLoopIndex ; i < endLoopIndex ; i++ )
	{
		HTMLString += "<option value =" + i + ">" + arrayData[i] + "</option>" ;
	}
	HTMLString += "</select>" ;
	return HTMLString ;
} ;

function changeSelection1()
{ 
	var lstChngNum1 = this.value ;
	var lookup1 = [ 4,8,12 ] ; var k = 0 ;
	if ( lstChngNum1 % 4 === 0 )
	{
		overwriteBoxes( selectDiv2 ) ; overwriteBoxes( selectDiv3 ) ; // clear other drop down boxes
		return 0 ;
	}
	else
	{
		k = lookup1[ ( lstChngNum1 - 1 ) ] ;
		overwriteBoxes( selectDiv3 ) ; // clears other drop down boxes
		writeBoxes( selectBox2, selectDiv2, "dropDownBox2", k, ( k+1 ), ( k+4 ) ) ;	// writes select html to selectdiv 2
		var box2 = document.getElementById( "dropDownBox2" ) ;
		box2.onchange = changeSelection2 ;	// references event listener function
	}
}

function changeSelection2()
{
	var lstChngNum2 = this.value ;
	var lookup2 = [ 16,20,24,"",28,32,36,"",40,44,48 ] ; var j = 0 ;
	if ( lstChngNum2 % 4 === 0 )
	{
		overwriteBoxes( selectDiv3 ) ;
		return 0 ;
	}
	else
	{
		j = lookup2[ ( lstChngNum2 - 5 ) ] ;
		writeBoxes( selectBox3, selectDiv3, "dropDownBox3", j, ( j+1 ), ( j+4 ) ) ;	// writes select html to selectdiv 3
		var box3 = document.getElementById( "dropDownBox3" ) ;
		box3.onchange = changeSelection3 ;
	} // references event listener function
}

function changeSelection3()
{ 
	var lstChngNum3 = this.value ;
	panel.innerHTML = "I hope you're happy with your choices";
}

// arguments are => name of variable to write html to, name of div to write html to, id of box to create, default selection, loop start, loop finish
// function write a box with the specified parameters
function writeBoxes( varName, divName, boxName, a, b, c )
{
	varName = createSelect( boxName , a , b , c ) ;
	divName.innerHTML = varName ;
}

function overwriteBoxes( divName )	// overwrites named div element with ""
{
	divName.innerHTML = "" ;
}

function init()
{
	var selectBox1 = "<br>" ; selectBox2 = "<br>" ; selectBox3 = "<br>" ;
	var selectDiv1 = document.getElementById( "selectDiv1" ) ; 
	var selectDiv2 = document.getElementById( "selectDiv2") ; 
	var selectDiv3 = document.getElementById( "selectDiv3" ) ;
	var panel = document.getElementById("panel" ) ;
	
	writeBoxes( selectBox1, selectDiv1, "dropDownBox1", 0, 1, 4 ) ;
	var box1 = document.getElementById( "dropDownBox1" ) ;
	box1.onchange = changeSelection1 ;
	document.getElementById("codeWrapper").style.height = "300px" ;
}
document.addEventListener( "DOMContentLoaded" , init , false ) ;