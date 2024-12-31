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

  // Email submission 
  document.getElementById("subscribeButton").addEventListener("click", function () {
    const email = document.getElementById("email").value;

    if (email) {
      const formData = new URLSearchParams();
      formData.append("entry.1045781291", email); // field ID with 'entry.' prefix

      const formURL = "https://script.google.com/macros/s/AKfycbzAvtA7EmGlpKf4apQpsF2b3Zi7udXqM8M76S3ZxitDRdSF0F2Bbp4VQT4p8Yt7AvYjxg/exec";

      fetch(formURL, {
        method: "POST",
        body: formData,
      })
        .then(response => {
          if (response.ok) {
            console.log("Response data:", response);
            alert("Thank you for subscribing!");
            document.getElementById("email").value = ""; 
            console.log("Email submitted:", email);
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
