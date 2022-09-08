const policyInputRef = document.querySelector("#validation-input");
policyInputRef.addEventListener("blur", (event) => {
  if (
    event.target.value.length ===
    Number(policyInputRef.getAttribute("data-length"))
  ) {
    policyInputRef.classList.add("valid");
    policyInputRef.classList.remove("invalid");
  } else {
    policyInputRef.classList.add("invalid");
    policyInputRef.classList.remove("valid");
  }
});
