// Sticky navbar shadow enhancer
// Adds a class once the user scrolls past a threshold to emphasize elevation.
(function(){
  function init(){
    var nav = document.querySelector('.app-navbar');
    if(!nav) return;
    var ticking = false;
    function onScroll(){
      if(!ticking){
        window.requestAnimationFrame(function(){
          var y = window.scrollY || window.pageYOffset;
          if(y > 10){
            nav.classList.add('is-scrolled');
          } else {
            nav.classList.remove('is-scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initialize state
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
