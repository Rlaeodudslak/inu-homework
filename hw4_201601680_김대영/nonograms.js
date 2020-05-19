"use strict";

(function(){
    
    var tile = document.getElementsByClassName("box");
    

    window.onload = function(){

        for(var i=0; i< tile.length; i++){
            tile[i].addEventListener('click',tileclick);
        }
        
        var resetbutton = document.getElementById('resetbtn');
        resetbutton.addEventListener('click',allreset);

    };

    function tileclick(e){
        alert("You clicked tile!!");
        if(e.target.classList.contains("filled")){
        e.target.classList.remove("filled");
        e.target.classList.add("crossed-out");
        }
        else if(e.target.classList.contains("crossed-out")){
        e.target.classList.remove("crossed-out");
        }
        else  {
            e.target.classList.add("filled");}
    }

    function allreset(){
        var check = confirm("clear ?");
    
        if(check){
            for(var i=0; i<tile.length; i++){
                tile[i].classList.remove("filled");
                tile[i].classList.remove("crossed-out");
            }
        }
    }

}());