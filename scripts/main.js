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
      $("<span class='name__error'>Enter you name</span>")
        .insertAfter("#name")
        .hide()
        .fadeIn(500);
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
      $("<span class='contact__error'>Enter valid address</span>")
        .insertAfter("#email")
        .hide()
        .fadeIn(500);
    }
  }
}

const menuToggle = $("#menu__toggle");
menuToggle.on("change", function () {
  if (menuToggle.prop("checked")) {
    setScrollBlock(true);
  } else {
    setScrollBlock(false);
  }
});

$(
  ".nav__menu .try__now__btn, .offer .try__now__btn, #menu__box .try__now__btn"
).on("click", function () {
  $(modalWindow).insertAfter("footer").hide().fadeIn(300);
  setScrollBlock(true);
  console.log("Блокирование включено");
  $(".modal").on("click", function (e) {
    if (
      e.target === this ||
      $(e.target).hasClass("exit") ||
      $(e.target).closest(".exit").length
    ) {
      $(".modal").fadeOut(300, function () {
        $(this).remove();
        console.log("Блокирование отключено");
        setScrollBlock(false);
      });
    }
  });
});

const modalWindow = `<div class="modal">
<form class="order__form">
    <label class="exit">
        <span></span>
    </label>
    <h2>Get free consulting by our experts to assess the potential improvements in your business!</h2>
    <div class="modal__wrapper">
        <label for="username">
            Name
            <input type="text" name="username" id="username" placeholder="John Doe">
        </label>
        <label for="useremail">
            Email
            <input type="text" name="useremail" id="useremail" placeholder="example@email.com">
        </label>
    </div>
    <label for="usermessage">
        Write to us
        <textarea name="usermessage" id="usermessage" placeholder="Please post your message here..."></textarea>
    </label>
    <button type="submit" class="try__now__btn">Try now!</button>
</form>
</div>`;

const setScrollBlock = (function () {
  let numberOfBlocks = 0;

  return function (isBlocked) {
    const scrollWidth =
      window.innerWidth - document.documentElement.clientWidth + "px";
    const body = document.body;
    const html = document.documentElement;

    if (isBlocked) {
      numberOfBlocks++;
      body.style.overflowY = "hidden";
      html.style.paddingRight = scrollWidth;
    } else {
      numberOfBlocks--;
      if (numberOfBlocks < 1) {
        body.style.overflowY = "auto";
        html.style.paddingRight = "0";
      }
    }
  };
})();
