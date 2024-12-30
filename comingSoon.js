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

      // Google Form URL for form response
      const formURL = "https://script.google.com/macros/s/AKfycbx5-juVrX8Y7COdDWCtCoy1ZY_reqxnyzUL89byHWSKcp_0LWF0FESm2t67rJP1cjVXsA/exec";

      // Send data via POST request to Google Form
      fetch(formURL, {
        method: "POST",
        body: formData, // Correctly formatted data
      })
        .then(() => {
          alert("Thank you for subscribing!");
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
