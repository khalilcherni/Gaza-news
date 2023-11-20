

$(document).ready(function(){
    $("#btn").click (function(){
        window.location.href= 'https://en.wikipedia.org/wiki/History_of_Gaza';
    })

$(".car1").click(function(){
    window.location.href= 'https://www.bing.com/images/search?q=children+abuse+in+gaza&form=HDRSC3&first=1'; 
})
$(".car2").click(function(){
    window.location.href= 'https://www.aljazeera.com/opinions/2023/11/12/genocide-in-gaza-a-call-for-urgent-global-action'; 
})
$(".car3").click(function(){
    window.location.href= 'https://www.npr.org/2023/11/09/1211571220/israel-gaza-damage-map-satellite-imagerya'; 
})
$(".car4").click(function(){
    window.location.href= 'https://www.bing.com/images/search?q=taking+houses+by+force+in+gaza&qpvt=taking+houses+by+force+in+gaza&form=IGRE&first=1'; 
})

})
var heading = document.getElementById("myHeading")


heading.addEventListener("mouseover", function() {
    heading.innerHTML = "Support Gaza";
})

heading.addEventListener("mouseout", function() {
    heading.innerHTML = "Palastine will be free"
})

var para=document.getElementById("para")
para.addEventListener("mouseover", function() {
    para.innerHTML = "Donate and help us stop the illegal occupation of palastinian lands ";
})

para.addEventListener("mouseout", function() {
    para.innerHTML = "All human beings in this world must stand with Palestinian people."
})

function openFacebookLink() {
    window.open('https://www.facebook.com/khalil.cherni.338/');
}

function openTwitterkLink() {
    window.open('https://twitter.com/');
}
function openGmailLink(){
    window.open("https://mail.google.com/mail/u/0/?hl=fr#inbox")
}
function openInstagramLink(){
    window.open("https://www.instagram.com/khalil_cherni/")
}


function changeImage() {
    event.target.style.backgroundImage = "url(https://s-i.huffpost.com/gen/1917621/thumbs/o-GAZA-INJURED-CHILD-900.jpg)";
  }

  function resetImage() {
    event.target.style.backgroundImage = "url(https://images.unsplash.com/photo-1660479643214-8ceae9caeda0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbGxkcmVuJTIwaW4lMjBnYXphfGVufDB8fDB8fHww)";
  }



  
