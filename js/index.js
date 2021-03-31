/*loader js */

	var myvar;
  	function fun()
  	{
  		myvar = setTimeout(showPage1, 0);
  	}

  	function showPage1()
  	{
  		
  		document.getElementById("mydiv").style.display = "block";
  		document.getElementById("mydiv").style.opacity = "0.6";
         myvar = setTimeout(showPage2, 3000);

  	}
  	function showPage2()
  	{
  		document.getElementById("loader").style.display = "none";
  		document.getElementById("mydiv").style.opacity = "1";
  		 myvar = setTimeout(typeWriter(), 500);


  	}
  	/* sticky header */

  	/*---------------------------login page---------------------------------------------------*/


  //close buttton
		var close = document.getElementsByClassName("closebtn");
		var i;
		for(i =0 ; i <close.length; i++) {
			close[i].onclick = function() {
				var div = this.parentElement;
				div.style.display = "none";
				setTimeout(function(){ div.style.display = "none"}, 600);
			}
		}
    //sign button
			function signup() {
           var x = document.getElementById("sign");
           var y = document.getElementById("login");
           var u = document.getElementById("forget");
            var v = document.getElementById("update");

           //----------
           if (window.matchMedia("(max-width: 600px)").matches) {
          if(x.style.display === "none") {
           	y.style.display = "none";
           	x.style.display = "block";
            u.style.display = "none";
            v.style.display = "none";

           } else {
           	y.style.display = "none";
           	x.style.display = "none";
            u.style.display = "none";
            v.style.display = "none";
           }
          } else {
          	  if(x.style.display === "none") {
           	y.style.display = "block";
           	x.style.display = "block";
            u.style.display = "none";
            v.style.display = "none";

           } else {
           	y.style.display = "none";
           	x.style.display = "none";
            u.style.display = "none";
            v.style.display = "none";
           }
          
          }

		}

          function forget() {
           var x = document.getElementById("forget");
           var y = document.getElementById("login");
            var u = document.getElementById("sign");
            var v = document.getElementById("update");

           //----------
           if (window.matchMedia("(max-width: 600px)").matches) {
          if(x.style.display === "none") {
            y.style.display = "none";
            x.style.display = "block";
            u.style.display = "none";
            v.style.display = "none";

           } else {
            y.style.display = "none";
            x.style.display = "none";
            u.style.display = "none";
            v.style.display = "none";
           }
          } else {
              if(x.style.display === "none") {
            y.style.display = "block";
            x.style.display = "block";
            u.style.display = "none";
            v.style.display = "none";

           } else {
            y.style.display = "none";
            x.style.display = "none";
            u.style.display = "none";
            v.style.display = "none";
           }
          
          }

    }
       function update() {
           var x = document.getElementById("update");
           var y = document.getElementById("login");
           var u = document.getElementById("forget");
          var v = document.getElementById("sign");

           //----------
           if (window.matchMedia("(max-width: 600px)").matches) {
          if(x.style.display === "none") {
            y.style.display = "none";
            x.style.display = "block";
             u.style.display = "none";
            v.style.display = "none";

           } else {
            y.style.display = "none";
            x.style.display = "none";
             u.style.display = "none";
            v.style.display = "none";
           }
          } else {
              if(x.style.display === "none") {
            y.style.display = "block";
            x.style.display = "block";
             u.style.display = "none";
            v.style.display = "none";

           } else {
            y.style.display = "none";
            x.style.display = "none";
             u.style.display = "none";
            v.style.display = "none";
           }
          
          }

    }
    
		
    //login button
       function login() {
           var x = document.getElementById("login");
           var y = document.getElementById("sign");
           if(x.style.display === "block"||y.style.display === "block") {
           	x.style.display = "none";
            y.style.display = "none";
           } else {
           	x.style.display = "block";
            y.style.display = "none";
           }
		}
    //logout button
    function logout(){
      window.location.href = "index.html";
    }

       
  	/*----------------------------------------------------------------------------------------*/

window.onscroll = function() { myfunction()};

var header = document.getElementById("nav");
var sticky = header.offsetTop;

function myfunction()
{
	if(window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

var slideIndex = 0;
	showSlides( );

	function showSlides() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var y = document.getElementsByClassName("dot");
	for(i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1;}
	for( i = 0; i < y.length; i++) {
		y[i].className = y[i].className.replace(" active", "");
	}
	x[slideIndex-1].style.display = "block";
	y[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000); // Changes image every 2 sec
    }



    var i = 0;
	var txt1 = 'festival is the hope and the light of the people which make people to leave';
  var txt2 = '';
	var speed = 80;
	document.getElementById("demo").innerHTML = "<h1>festival<h2>";
	
	function typeWriter() {
  if (window.matchMedia("(max-width: 600px)").matches) {
    if (i < txt2.length) {
      document.getElementById("demo").innerHTML += txt2.charAt(i);
      i++;
    }
   
     } else{
      if (i < txt1.length) {
      document.getElementById("demo").innerHTML += txt1.charAt(i);
      i++;
    }
     }
		setTimeout(typeWriter, speed);
	}



	/*---------------------------------quotes ------------------------------------------------------------*/
    var quoteIndex = 1;
  showquote(quoteIndex);

  function plusquote (n){
    showquote(quoteIndex += n);
  }


  function showquote(n){
    var i;
    var quote = document.getElementsByClassName("quotes");
        var dotq =  document.getElementsByClassName("dotq");
            if(n > quote.length) {quoteIndex = 1}

          if(n < 1) { quoteIndex = quote .length}

            for(i = 0; i < quote.length; i++){
              quote[i].style.display = "none";
            }
            for(i = 0; i < dotq.length; i++){
              dotq[i].className = dotq[i].className.replace("active", "");
            }
            quote[quoteIndex-1].style.display = " block";
            
  }

      
	/*----------------------------------------------------------------------------------------------------*/
             