emailjs.init("eHkHx3AZ0G9-ZoGnr"); 

document.getElementById("contact-form").onsubmit = function (event) {
  event.preventDefault();

  let obj = {
    from_name: document.querySelector("#name").value,
    message: document.querySelector("#message").value,
  };
try {
  emailjs.send("service_hmf5gma", "template_vy9996d", {
    from_name:   document.querySelector("#name").value,
    message: document.querySelector("#message").value,
    reply_to: document.querySelector("#email").value,
  })
  console.log("working");
} catch (error) {
  console.log(error);
}
};