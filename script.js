window.onload = () => {
  const emailInput = document.querySelector("#email");
  const formEmail = document.querySelector("#form-email");
  const emptyInputWarning = document.querySelector("#empty-input-warning");
  const inputWarning = document.querySelector("#input-warning");
  const inputSuccess = document.querySelector("#input-success");
  const iconError = document.querySelector("#icon-error");

  formEmail.onsubmit = (e) => {
    e.preventDefault();
    validateEmail();
  };

  function validateEmail() {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const borderWarning = " border-2 border-primary-red-500";
    const borderSuccess = " border-2 border-green-500";

    if (emailInput.value === "" || emailInput.value === null) {
      addClassTo(inputWarning, "hidden");
      addClassTo(inputSuccess, "hidden");
      removeClassFrom(emptyInputWarning, "hidden");
      removeClassFrom(iconError, "hidden");
    } else if (!emailRegex.test(emailInput.value)) {
      removeClassFrom(formEmail, [...borderSuccess.split(" ")]);
      addClassTo(inputSuccess, "hidden");
      addClassTo(emptyInputWarning, "hidden");
      removeClassFrom(inputWarning, "hidden");
      removeClassFrom(iconError, "hidden");
      formEmail.className += borderWarning;
    } else {
      removeClassFrom(formEmail, [...borderSuccess.split(" ")]);
      addClassTo(inputWarning, "hidden");
      addClassTo(emptyInputWarning, "hidden");
      removeClassFrom(inputSuccess, "hidden");
      addClassTo(iconError, "hidden");
      formEmail.className += borderSuccess;
    }
  }

  function addClassTo(element, className) {
    element.classList.add(className);
  }

  function removeClassFrom(element, className) {
    element.classList.remove(className);
  }
};
