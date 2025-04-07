$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate({ top: "-190px" }, "slow");
    })
    .mouseleave(function () {
      $(".card").stop().animate({ top: 0 }, "slow");
    });

  // Show popup
  $(".read-more-btn").click(function () {
    $(".popup").fadeIn();
  });

  // Close popup
  $(".close-btn").click(function () {
    $(".popup").fadeOut();
  });

  // Optional: Close on clicking outside the popup
  $(".popup").click(function (e) {
    if ($(e.target).is(".popup")) {
      $(".popup").fadeOut();
    }
  });
});
