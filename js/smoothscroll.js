/*! Smooth Scroll to the Anchor
 * All links on the page with href="#example"
 * Will smooth scroll to the element with id="example" on that page */
/*! Features:
 * 1. It will only affect links with #anchor, and not any other links on the page.
 * 2. It won't add #anchor in the URL, after link with that href was clicked on.
 * 3. Things to set:
 *   1) "target.offset().top -80" / Number ("-80") is offset in px. Usually it's the same height as the main header is.
 *   2) "scrollTop: target.offset().top -80}, 1200)" / Number ("1200") is scroll speed in ms. Alter it, to ajust the scroll speed that's wanted. */
 $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top -50
      }, 1100);
      return false;
    }
  }
});