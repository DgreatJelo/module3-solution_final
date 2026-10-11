/* Close Bootstrap's collapsible mobile menu after choosing a category. */
$(function () {
  $('#mobile-navigation a').on('click', function () {
    $('#mobile-navigation').collapse('hide');
  });
});
