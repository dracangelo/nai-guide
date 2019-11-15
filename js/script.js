var typed = new Typed('.type', {
    strings: [
        'Faster.',
        'Easier.',
        'In a more convenient way.',
        'Haslle free.'
    ],
    typeSpeed:60,
    backSpeed:60,
    loop: true 
  });

  $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });