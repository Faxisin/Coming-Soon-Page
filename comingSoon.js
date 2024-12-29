document.addEventListener("DOMContentLoaded", () => {

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
  });
  