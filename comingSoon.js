document.addEventListener("DOMContentLoaded", () => {
  // Spotlight effect code
  if (window.innerWidth > 768) {
    const spotlight = document.createElement("div");
    spotlight.style.position = "fixed";
    spotlight.style.top = "0";
    spotlight.style.left = "0";
    spotlight.style.width = "200%";
    spotlight.style.height = "200%";
    spotlight.style.background = "radial-gradient(circle, rgba(0, 0, 0, 0) 100px, rgba(0, 0, 0, 0.95) 600px)";
    spotlight.style.pointerEvents = "none";
    spotlight.style.zIndex = "99";
    spotlight.style.transition = "background 0.2s ease-in-out";
    document.body.appendChild(spotlight);

    document.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(250, 255, 104, 0) 100px, rgba(0, 0, 0, 0.95) 600px)`;
    });
  }

  // Email submission functionality
  document.getElementById("subscribeButton").addEventListener("click", function () {
    const email = document.getElementById("email").value;

    if (email) {
      // Prepare form data
      const formData = new URLSearchParams();
      formData.append("entry.1045781291", email); // Replace with your actual field ID

      // Google Apps Script URL for form response
      const formURL = "https://script.google.com/macros/s/AKfycbzrYJeIeB-UVLMqqnsHsj1G8mkyv7NLDYYB4yN8cn4Um0e7HhrlM77lSbGODMmoJQQg3g/exec";

      // Send data via POST request to Google Apps Script
      fetch(formURL, {
        method: "POST",
        body: formData, // Correctly formatted data
      })
        .then(response => {
          if (response.ok) {
            alert("Thank you for subscribing!");
            document.getElementById("email").value = ""; // Clear the email field after submission
          } else {
            alert("There was an error submitting the form.");
          }
        })
        .catch(error => {
          console.error("Error:", error);
          alert("There was an error submitting the form.");
        });
      
    } else {
      alert("Please enter a valid email address.");
    }
  });
});
