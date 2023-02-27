function validateForm() {
   let name = document.forms["contact_form"]["name"].value;
   if (name == "") {
      alert("Please enter your name!");
   }

   let email = document.forms["contact_form"]["email"].value;
   let correctMailFormat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
   if (email == "") {
      alert("Please enter your email!")
   } else if (!email.match(correctMailFormat)) {
      alert("Please enter a valid email address!")
   } else {
      email_validation = true;
   }


   let subject = document.forms["contact_form"]["subject"].value;
   if (subject == "default") {
      alert("Please enter your subject!");
   }

   let message = document.forms["contact_form"]["message"].value;
   if (message == "") {
      alert("Please enter your message!");
   }

   if (name && email_validation && subject && message) {
      //remove class and display
      var displaylist = document.getElementById("user_details");
      displaylist.classList.remove("user_list_hide");

      var hideForm = document.getElementById("main_form");
      hideForm.classList.add("main_form_hide");

      // get handle of parent element
      let element = document.querySelector('title');

      document.getElementById('name').innerHTML = (name);
      document.getElementById('email').innerHTML = (email);
      document.getElementById('subject').innerHTML = (subject);
      document.getElementById('message').innerHTML = (message);
   }
}

function editForm() {
   var hidelist = document.getElementById("user_details");
   hidelist.classList.add("user_list_hide");

   var displayform = document.getElementById("main_form");
   displayform.classList.remove("main_form_hide");
}

function sendMsg() {
   var sendMsg = document.getElementById("success_msg");
   sendMsg.classList.remove("success_msg_hide");

   var hidelist = document.getElementById("user_details");
   hidelist.classList.add("user_list_hide");
}