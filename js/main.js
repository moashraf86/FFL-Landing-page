// close menu with close icon
document.querySelector('#close-icon').addEventListener('click', function(e) {
  document.querySelector('#navbarNav').classList.remove('show')
});

document.querySelector('.navbar-collapse').addEventListener('click', function(e) {
  this.classList.remove('show')
});

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelector('#navbarNav').classList.remove('show')
  })
})

//hide menu while resizing the window
window.onresize = function() {
  document.querySelector('#navbarNav').classList.remove('show');
}

//stop propagation on menu area
document.querySelector('.navbar-collapse .navbar-nav').addEventListener('click', function(e) {
  e.stopPropagation()
});

// add bg to header
window.onscroll = function() {
  if(this.scrollY > 20) {
    document.querySelector('header').classList.add('sticky')
  } else {
    document.querySelector('header').classList.remove('sticky')
  }
}

// hide preloader
window.onload = function () { 
  var s = document.querySelector('.preloader').style;
  s.opacity = 1;
  (function fade(){(s.opacity-=.05) < 0 ? s.display="none" :setTimeout(fade,40)})();
}
