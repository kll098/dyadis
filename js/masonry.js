var options = {
  valueNames: [ 'naam', 'ras' ]
};

var boxReveal = {
  delay    : 200,
  distance : '50px',
  reset: true,

};

var userList = new List('users', options);


window.sr = ScrollReveal();
sr.reveal('.thumbnail', boxReveal);

$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 0
});