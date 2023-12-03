const feedback = $("#feedback");
const userName = $("#name");
const email = $("#email");

feedback.on("submit", function (e) {
  e.preventDefault();
  send();
});

function send() {
  let nameVal = $("#name").val();
  let emailVal = $("#email").val();
  if (nameVal != "") {
    // Имя введено
    $(".name__error").remove();
    userName.removeClass("field__error");
  } else {
    // Имя не введено
    userName.addClass("field__error");
    if ($(".name__error").length === 0) {
      $("<span class='name__error'>Enter you name</span>").insertAfter("#name");
    }
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (emailPattern.test(emailVal)) {
    // Email правильный
    email.removeClass("field__error");
    $(".contact__error").remove();
  } else {
    // Email неверный
    email.addClass("field__error");
    if ($(".contact__error").length === 0) {
      $("<span class='contact__error'>Enter valid address</span>").insertAfter(
        "#email"
      );
    }
  }
}
