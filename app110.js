var CopyToClipBoardSelected = false;
var CopyToClipBoardSupported = false;

CheckClipBoardCopySupported();

window.onload = function () { 

       $('.Message h2').hide();
       
       blocklogo = document.getElementsByTagName('a')
       while (blocklogo[0]) blocklogo[0].parentNode.removeChild(blocklogo[0])
}
	

function AddComma(seperator){

	var list = '';
	var newlist = '';

    if(seperator == ','){
		var list = $("#upc").val().trim().replace(/\n/g,seperator);
	    var newlist = list.split(seperator).join(seperator + '\n');
	    newlist = "(" + newlist + ")";

		$("#out").val(newlist);		
		CopyToClip();
	}
	else{ 
       var list = $("#upc").val().trim().replace(/\n/g,seperator);
       var newlist = list.split(seperator).join(seperator);
        
       $("#out").val(newlist);         
       CopyToClip();
	}
}

function StringQuote(){
	
	var list = '';
	var newlist = '';

	    var list = $("#upc").val().trim().split('\n');
	    
	    for(var index =0; index < list.length; index++)
	    {	    	
		        list[index] = "'" + list[index]  + "'," + '\n';
		        newlist += list[index];
	    }
	    	    newlist = "(" + newlist;
        
    $("#out").val(newlist.replace(/,\s*$/, "") + ")");
    CopyToClip();
    $('.Message h2').show().delay(5000).fadeOut();
}

function Clear(selection){

	if(selection == 0){
		$("#upc").val('');
		$("#out").val('');
	}

	if(selection == 1){
	    $("#upc").val('');
	}

	if(selection == 2){
	   $("#out").val('');
	}
}


function CheckClipBoardCopySupported() {	

    if(document.queryCommandSupported('copy')){
           CopyToClipBoardSupported = true; 
           CopyToClipBoardSelected = true;
    }
}

function CopyToClip() {

	if(CopyToClipBoardSupported && CopyToClipBoardSelected){
			$("#out").select();
            document.execCommand("copy");
            $('.Message h2').show().delay(5000).fadeOut();
    }
}