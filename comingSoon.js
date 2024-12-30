document.addEventListener("DOMContentLoaded", () => {

  // Spotlight effect code
  if (window.innerWidth > 768) {
      const spotlight = document.createElement("div");
      spotlight.style.position = "fixed";
      spotlight.style.top = "0";
      spotlight.style.left = "0";
      spotlight.style.width = "200%";
      spotlight.style.height = "200%";
      spotlight.style.background = "radial-gradient(circle, rgba(0, 0, 0, 0) 100px, rgba(0, 0, 0, 0.95) 400px)";
      spotlight.style.pointerEvents = "none";
      spotlight.style.zIndex = "99";
      spotlight.style.transition = "background 0.2s ease-in-out";
      document.body.appendChild(spotlight);

      document.addEventListener("mousemove", (e) => {
          const x = e.clientX;
          const y = e.clientY;

          spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0) 100px, rgba(0, 0, 0, 0.95) 400px)`;
      });
  }

  // Email submission functionality
  document.getElementById("subscribeButton").addEventListener("click", function() {
      const email = document.getElementById("email").value;

      if (email) {
          // Prepare form data with the email field
          const formData = new FormData();
          formData.append("entry.1045781291", email);  // Ensure this ID matches the form field

          // Google Form URL for form response
          const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSejQEZmSSvZZRIZptLlA7snjXX60_qiDZHKHdtTNaxG95_5nQ/formResponse";

          // Send data via POST request to Google Form
          fetch(formURL, {
              method: "POST",
              body: formData,
              headers: {
                "Accept": "application/json", // Optional for more strict form submissions
                "Content-Type": "application/x-www-form-urlencoded",
              },
          })
          .then(response => {
              if (response.ok) {
                  alert("Thank you for subscribing!");
                  // Optionally reset the form after successful submission
                  document.getElementById("email").value = "";
              } else {
                  alert("There was an error submitting the form.");
              }
          })
          .catch(error => {
              console.error('Error:', error);
              alert("There was an error submitting the form.");
          });
      } else {
          alert("Please enter a valid email address.");
      }
  });

});
