// first things first
let upArrow = document.getElementById("up-arrow");
upArrow.style.display = "none";

let popUp = document.getElementById("pop-up");
popUp.style.display = "none";

// scroll event listener
window.addEventListener("scroll", scrollFunction);

// up-arrow scroll function
function scrollFunction() {
  //changes to be made on document scroll
  let scroll = window.scrollY;
  if (scroll >= 500) {
    upArrow.style.display = "initial";
  } else {
    upArrow.style.display = "none";
  }
}

// form event listener
let emailForm = document.getElementById("site-form");
emailForm.addEventListener("submit", submitFunction);

// send email function
function submitFunction(e) {
  // prevent page reset after form submit
  e.preventDefault();

  // get form input values
  let firstName = document.getElementById("first-name").value;
  let secondName = document.getElementById("second-name").value;
  let emailAddress = document.getElementById("email").value;
  let emailSubject = document.getElementById("subject").value;
  let userTopic = document.getElementById("user-message").value;

  // send email
  Email.send({
    Host: "smtp.gmail.com",
    Username: "kitakayaloisa@gmail.com",
    Password: "kitakayaloisa15",
    To: "kitakayaloisa@gmail.com",
    From: emailAddress,
    Subject: emailSubject,
    Body:
      userTopic +
      " | OX=<-*->=XO | Sent by: " +
      firstName +
      " " +
      secondName +
      " | OX=<-*->=XO |"
  }).then(message => console.log(message));

  // prompt after email is sent
  function popupModal() {
    let messageOne = (document.getElementById("popup-modal_text1").innerHTML =
      "Your message has been sent successfully!");
    let messageTwo = (document.getElementById("popup-modal_text2").innerHTML =
      "An email will be sent to: " +
      emailAddress +
      " addressing your message.");
    let messageThree = (document.getElementById("popup-modal_text3").innerHTML =
      "Thank you for choosing RISLO PARAGON!");

    popUp.style.display = "initial";

    let closePopup = document.getElementById("close-popup");
    closePopup.addEventListener("click", function() {
      popUp.style.display = "none";
    });

    // reset email
    emailForm.reset();
  }
  setTimeout(popupModal, 1500);
}
