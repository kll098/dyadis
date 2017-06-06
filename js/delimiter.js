$(".uitlijnen")
  // Blast the text apart by word.
  .blast({ delimiter: "word" })
  // Fade the words into view using Velocity.js.
  .velocity("transition.fadeIn", { 
    display: null,
    duration: 1250,
    stagger: 40,
    delay: 400
  });


$(".blogberichten")
  // Blast the text apart by word.
  .blast({ delimiter: "word" })
  // Fade the words into view using Velocity.js.
  .velocity("transition.fadeIn", { 
    display: null,
    duration: 1250,
    stagger: 40,
    delay: 400
  });

$(".slogan")
  // Blast the text apart by word.
  .blast({ delimiter: "word" })
  // Fade the words into view using Velocity.js.
  .velocity("transition.fadeIn", { 
    display: null,
    duration: 5250,
    stagger: 50,
    delay: 400
  });