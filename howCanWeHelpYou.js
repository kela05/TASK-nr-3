$(document).ready(function(){
    $('.btn1').click(function(){
         $('.btn1').animate({
            top: '-250px'
         }, 1000, function(){
             //animation complete
         });
         $('.btn1-options').show().animate({
             top: '-250px',
             opacity: '1'
         }, 920, function(){
             //animation complete
         });
         
    });
   
});

//how to return back????!!!!

$(document).ready(function(){
    $('.btn2').click(function(){
         $('.btn2').animate({
            top: '-250px'
         }, 1000);
         $('.btn2-form').show().animate({
             top: '-250px',
             opacity: '1'
         }, 920);
    })
   
})