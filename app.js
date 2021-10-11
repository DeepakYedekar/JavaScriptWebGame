// $("button").click(function(){
//   let random1=Math.floor(Math.random()*2);
//   $("p")[0].innerHTML=random1;
//   random1++;
//
//
//   let random2=Math.floor(Math.random()*2);
//   $("p")[1].innerHTML=random2;
//
//
//
//   if(random1===3){
//     $("h1")[1].show();
//     $("h1")[1].innerHTML="Player 1 won the match!";
//   }else if(random2===3){
//       $("h1")[1].innerHTML="Player 2 won the match!";
//   }else{
//       $("h1")[1].innerHTML="Draw";
//   }
// });

// let num=1;
//
//
// $("button").click(function(){
// $("p")[0].innerHTML=num;
// num++;
// });

let Games=1,Player1,Player2,P1=0,P2=0;

$("button").click(function(){
  $("h1")[0].innerHTML="Game "+ Games++;

   Player1=Math.floor(Math.random()*101);
   Player2=Math.floor(Math.random()*101);

   if(Player1>Player2){
     P1++;
       $("p")[0].innerHTML=P1;
   }else {
     P2++;
      $("p")[1].innerHTML=P2;
   }

   if(P1===3){
     $("h1")[2].innerHTML="Player 1 won the match";
   }
    if(P2===3){
     $("h1")[2].innerHTML="Player 2 won the match";
   }
   if(P2===P1){
      $("h1")[2].innerHTML="Draw";
   }

   if(P1>3 || P2>3){
     location.reload();
   }

});
