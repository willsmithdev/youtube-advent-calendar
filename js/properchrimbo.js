/* 



        \ /
       ->*<-
        /_\
       /_\_\
      /_/_/_\
      /_\_\_\
     /_/_/_/_\
     /_\_\_\_\
    /_/_/_/_/_\
    /_\_\_\_\_\
   /_/_/_/_/_/_\
   /_\_\_\_\_\_\
  /_/_/_/_/_/_/_\
       [___]

  MERRY CHRISTMAS
        




GET OUT OF HERE YOU SNEAKY SNAKE. 



ONLY ONE A DAY!



*/

var chrimbosongs = {
  "1": "https://www.youtube.com/embed/qTx-sdR6Yzk?controls=0&autoplay=1",
  "2": "https://www.youtube.com/embed/D_SoM9O3JPQ?controls=0&autoplay=1",
  "3": "https://www.youtube.com/embed/LzXAMfxe2iw?controls=0&autoplay=1",
  "4": "https://www.youtube.com/embed/xCHI4QEt3Sw?controls=0&autoplay=1",
  "5": "https://www.youtube.com/embed/51SCryG9fis?controls=0&autoplay=1",
  "6": "https://www.youtube.com/embed/0yJNiphUc3E?controls=0&autoplay=1",
  "7": "https://www.youtube.com/embed/3nz2X60rdWQ?controls=0&autoplay=1",


  
  "8": "https://www.youtube.com/embed/CW8WyWkV-Gk?controls=0&autoplay=1",
  "9": "https://www.youtube.com/embed/WKPhUrN_2do?controls=0&autoplay=1",  
  "10": "https://www.youtube.com/embed/s0NoalRsk5w?controls=0&autoplay=1",
  "11": "https://www.youtube.com/embed/ZcV3J2Feieg?controls=0&autoplay=1",
  "12": "https://www.youtube.com/embed/OR07r0ZMFb8?controls=0&autoplay=1",
  "13": "https://www.youtube.com/embed/rUT4TuEEWMg?controls=0&autoplay=1",
  "14": "",
  "15": "",
  "16": "",
  "17": "",
  "18": "",
  "19": "",
  "20": "https://www.youtube.com/embed/94lcKzEX2Yk?controls=0&autoplay=1",
  "21": "",
  "22": "",
  "23": "",
  "24": "https://www.youtube.com/embed/oiSn2JuDQSc?controls=0&autoplay=1",
  "25": "https://www.youtube.com/embed/aj17qdSY1zA?controls=0&autoplay=1"
}

$( document ).ready(function() {

  $('.door').each(function( index ) { 
    var todaysDate = new Date();
    var doorDay = this.id;

    if(todaysDate.getDate() >= doorDay)
    {
      $(this).addClass('unlocked');
    }
    else
    {
      $(this).addClass('locked');
    }
  }); 
});



$('#calendar').on('click', '.door', function() {                   
    var todaysDate = new Date();
    var doorDay = this.id;
    
    if(todaysDate.getDate() >= doorDay)
    {
      $('#christmasiframe').prop('src', chrimbosongs[doorDay]);
      $('#christmasPlayahhhhh').modal('show');
    }    
});

$('#christmasPlayahhhhh').on('hidden.bs.modal', function (e) {
  $('#christmasiframe').prop('src', '');
})