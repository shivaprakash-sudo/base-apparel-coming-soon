window.onload = () => {
  const emailInput = document.querySelector("#email");
  const formEmail = document.querySelector("#form-email");
  const emptyInputWarning = document.querySelector("#empty-input-warning");
  const inputWarning = document.querySelector("#input-warning");
  const inputSuccess = document.querySelector("#input-success");

  formEmail.onsubmit = (e) => {
    e.preventDefault();
    validateEmail();
  };

  function validateEmail() {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const borderWarning = " border-2 border-primary-red-500";
    const borderSuccess = " border-2 border-green-500";

    if (emailInput.value === "" || emailInput.value === null) {
      inputWarning.classList.add("hidden");
      emptyInputWarning.classList.remove("hidden");
    } else if (!emailRegex.test(emailInput.value)) {
      formEmail.classList.remove([...borderSuccess.split(" ")]);
      inputSuccess.classList.add("hidden");
      emptyInputWarning.classList.add("hidden");
      inputWarning.classList.remove("hidden");
      formEmail.className += borderWarning;
    } else {
      formEmail.classList.remove([...borderWarning.split(" ")]);
      inputWarning.classList.add("hidden");
      inputSuccess.classList.remove("hidden");
      formEmail.className += borderSuccess;
    }
  }
};
