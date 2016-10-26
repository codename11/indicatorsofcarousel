		
		var clicksRight=0;
		var clicksLeft=0;
		var trini=0;
		var gog=0;
		var pret=0;
		var x=0;
		var y=0;
		var br=0;
		var index=0;
		var currentIndex=0;
		var clicks=0;
		var num=0;
		var mr=0;
		var tmp=0;
		var OldValue = 0;
		
function resizer() {
    
	var prTop=$(".con1").offset().top+$(".con1").outerHeight()-$(".pr").outerHeight();
	var prLeft=$(".con1").offset().left;
	$(".pr").offset({top: prTop, left: prLeft});
	var prWidth=$(".con1").width();
	var prHeight=$(".con1").outerHeight(true)
	$(".pr").width(prWidth);
	
}
$( document ).ready(function() {

  $( ".sl" ).click(function() { //Klikom na element sa class="sl" ..
	gog=0;
	var width=$( ".sl" ).outerWidth();
	var corr=(width/100)*4.4;
	width+=corr;
	index = $( ".sl" ).index( this ); //Index(trenutni) <li> elementa na koji je kliknuto.
	var count = $('.item').length; // je isto kao document.getElementById("pics").children.length
	var cnt = $('.sl').length;
	
	document.getElementById("mix1").innerHTML=index;

	if(index!=0){
		currentIndex=index;
		clicksLeft=count-(count-currentIndex);
	}
	
	if(index>pret){
		
		if(index==3){
			gog=40;
		}
		
		if(index>3){
			gog=(width*(index-3))+40;
		}
		
		$(".con1").animate({scrollLeft: gog});
		pret=index;
	}
	
	if(index<pret){
		
		if(index==3){
			gog=40;
		}
		
		if(index>3){
			gog=(width*(index-3))+40;
		}
		
		$(".con1").animate({scrollLeft: gog});
		pret=index;
	}
	
	
	x=$(".sl").eq(index).offset().top; // TOP pozicija indeksiranog elementa na koji je kliknuto.
	y=$(".sl").eq(index).offset().left; //LEFT pozicija indeksiranog elementa na koji je kliknuto.
	
	br=$(".con1").scrollLeft();
	clicksLeft=count-index;
	document.getElementById("mix").innerHTML=clicksLeft;
});



});



function right(){
	gog=0;
	br=$(".con1").scrollLeft();
	var width=$( ".sl" ).outerWidth();
	currentIndex = $('div.active').index() + 1;
	var count = $('.item').length; // je isto kao document.getElementById("pics").children.length
	var cnt = $('.sl').length;
	var corr=(width/100)*4.4;
	width+=corr;
	var p1=document.getElementById("lista").scrollWidth;
	var p2=$("#lista").outerWidth();
	var p3=p1-p2;//4196-720=3476 -> Rezultat mi treba :)
	clicksRight+=1;
	
	if(br==0 && currentIndex>2){
		gog=br+((width-15)/2);
		$(".con1").scrollLeft(gog); //Nikako ovako $(".con1").animate({scrollLeft: gog}); jer brouser ne stigne da registruje klikove pa dolazi do zbunjivanja istog i kasnjenja.
	}
	
	if(br>0){
		gog=br+width;
		$(".con1").scrollLeft(gog);
	}
	
	if(br==p3 && currentIndex==count){
		gog=0;
		$(".con1").scrollLeft(gog);
		clicksRight=0;
	}

	clicksLeft=count-currentIndex;
	document.getElementById("mix").innerHTML=clicksLeft;
	document.getElementById("mix1").innerHTML=currentIndex;
	
	
}


function left(){
	gog==0;
	br=$(".con1").scrollLeft();
	var width=$( ".sl" ).outerWidth();
	var count = $('.item').length; // je isto kao document.getElementById("pics").children.length
	var cnt = $('.sl').length;
	var corr=(width/100)*4;
	width+=corr;
	var p1=document.getElementById("lista").scrollWidth;
	var p2=$("#lista").outerWidth();
	var p3=p1-p2;//4196-720=3476 -> Rezultat mi treba :)
	clicksLeft+=1;

	if(br==0 && clicksLeft==1){
		gog=p3;
		$(".con1").scrollLeft(gog);
		//alert("1");
		currentIndex=count;
	}
	
	if(clicksLeft>4 && br==p3){
		gog=br-width;
		$(".con1").scrollLeft(gog);
		//alert("2");
	}
	
	if(clicksLeft>4){
		gog=br-width;
		$(".con1").scrollLeft(gog);
		//alert("3");
	}

	if(currentIndex==0 && clicksRight>0){ //Ovo vazi samo ako je kliktano na desnu strelicu
		gog=p3;
		$(".con1").scrollLeft(gog);
		//alert("4");
	}
	
	if(clicksLeft>4 && clicksRight>0){ //Ovo vazi samo ako je kliktano na desnu strelicu
		gog=br-width;
		$(".con1").scrollLeft(gog);
		//alert("5");
	}

	
	if(clicksRight>0){
		currentIndex-=1;	
		//alert("6");
	}
	
	if(clicksRight==0 && currentIndex>=0){
		currentIndex=count-clicksLeft;	
		//alert("7");
	}
	
	if(currentIndex==count && clicksLeft){
			gog=p3;
			$(".con1").scrollLeft(gog);
			//alert("8");
	}
	
	if(currentIndex==0){
		clicksLeft=0;
		//alert("9");
	}
	

	document.getElementById("mix").innerHTML=clicksLeft;
	document.getElementById("mix1").innerHTML=currentIndex;
}




