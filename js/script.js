let idx = 0;
$('.mySlides ').eq(idx).fadeIn('slow');
$('.next').click(()=>{
    idx++;
    if(idx == 3){
        idx = 0
    }
    $('.mySlides ').hide();
    $('.mySlides ').eq(idx).fadeIn('slow');
})

$(".prev").click(()=>{
    idx--;
    if(idx == -1){
      idx = 2 
    }
    $(".mySlides ").hide();
    $('.mySlides ').eq(idx).fadeIn('slow');
});