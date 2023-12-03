const feedback = $("#feedback");
const email = $("#email");

feedback.on("submit", function (e) {
  e.preventDefault();
  send();
});

function send() {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  let emailVal = $("#email").val();
  let nameVal = $("#name").val();
  if (emailPattern.test(emailVal)) {
    // Email правильный
    $(".contact__error").remove();
  } else {
    // Email неверный
    if ($(".contact__error").length === 0) {
      $("<span class='contact__error'>Enter valid address</span>").insertAfter(
        "#email"
      );
    }
  }
  if (nameVal != "") {
    // Имя введено
    $(".name__error").remove();
  } else {
    // Имя не введено
    if ($(".name__error").length === 0) {
      $("<span class='name__error'>Enter you name</span>").insertAfter("#name");
    }
  }
}
