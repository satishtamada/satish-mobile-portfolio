// Update these values before publishing. Leave optional URLs blank if you don't want to show them.
const PROFILE = {
  email: "",       // Example: "satish@example.com"
  linkedin: "",    // Example: "https://www.linkedin.com/in/your-profile/"
  github: ""       // Example: "https://github.com/yourusername"
};

document.getElementById("year").textContent = new Date().getFullYear();

const emailLink = document.getElementById("emailLink");
if (PROFILE.email.trim()) {
  emailLink.href = `mailto:${PROFILE.email.trim()}`;
} else {
  emailLink.href = "#contact";
  emailLink.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Add your professional email in script.js before publishing this portfolio.");
  });
}

for (const [key, id] of [["linkedin", "linkedinLink"], ["github", "githubLink"]]) {
  const value = PROFILE[key].trim();
  const link = document.getElementById(id);
  if (value) {
    link.href = value;
    link.hidden = false;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
}

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
