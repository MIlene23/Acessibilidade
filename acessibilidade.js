function getSize() {
  size = $("body").css("font-size");
  size = parseInt(size, 10);
  $("#font-size").text(size);
}

getSize();

let fontSize = 0;

$("#increase").on("click", function () {
  if (size + 2 <= 50) {
    $("body").css("font-size", "+=2");
    $("#font-size").text((size += 2));
    fontSize++;
  }
});

$("#decrease").on("click", function () {
  if (size - 2 >= 12) {
    $("body").css("font-size", "-=2");
    $("#font-size").text((size -= 2));
    fontSize--;
  }
});

function gray() {
  $("body").toggleClass("gray");
}
$("#gray").on("click", gray);

function contrast() {
  $("body").toggleClass("contrast");
}
$("#contrast").on("click", contrast);

function reverse() {
  $("body").toggleClass("reverse");
}
$("#reverse").on("click", reverse);

function linkHighLight() {
  $("body").toggleClass("linkHighLight");
}
$("#linkHighLight").on("click", linkHighLight);

function reset() {
  if ($("body").hasClass("contrast")) {
    $("body").removeClass("contrast");
  }
  if ($("body").hasClass("gray")) {
    $("body").removeClass("gray");
  }
  if ($("body").hasClass("reverse")) {
    $("body").removeClass("reverse");
  }
  if ($("body").hasClass("linkHighLight")) {
    $("body").removeClass("linkHighLight");
  }
  if (fontSize > 0) {
    const variation = fontSize * 2;
    $("body").css("font-size", `-=${variation}`);
    $("#font-size").text((size -= variation));
  }
  else if (fontSize < 0) {
    const variation = fontSize * (-2);
    $("body").css("font-size", `+=${variation}`);
    $("#font-size").text((size += variation));
  }
  fontSize = 0;
}
$("#reset").on("click", reset);
