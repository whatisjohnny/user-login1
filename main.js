let h2El = document.getElementById("h2id");
let btEl = document.getElementById("btn");
let i1El = document.getElementById("inpid1");
let i2El = document.getElementById("inpid2");

btEl.addEventListener("click", btcl);

function btcl() {
  if (i1El.value === "admin" && i2El.value === "1234") {
    h2El.innerHTML = "Success!";
  } else if (i1El.value === "" && i2El.value === "") {
    h2El.innerHTML = "Enter your log in information.";
  } else {
    h2El.innerHTML = "Incorrect Username or Password.";
  }
}
