const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 

    const clickedLink = this;
    links.forEach(link => {
      if (link === clickedLink) {
        link.classList.add('clicked');
      } else {
        link.classList.remove('clicked');
      }
    });

    setTimeout(() => {
      window.location.href = clickedLink.getAttribute('href');
    }, 500);
  });
});
