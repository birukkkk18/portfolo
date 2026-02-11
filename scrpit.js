const toggle = document.getElementById('mode-toggle');
let dark = false;

toggle.addEventListener('click', () => {
  if (!dark) {
    // Switch to dark mode
    document.documentElement.style.setProperty('--bg-light', '#121212');
    document.documentElement.style.setProperty('--text-light', '#ffffff');
    document.documentElement.style.setProperty('--accent', '#4444aa'); // darker accent
    dark = true;
    toggle.textContent = "☀️"; // change icon
  } else {
    // Switch back to light mode
    document.documentElement.style.setProperty('--bg-light', '#ffffff');
    document.documentElement.style.setProperty('--text-light', '#000000');
    document.documentElement.style.setProperty('--accent', '#bb6707d7'); // your chosen accent
    dark = false;
    toggle.textContent = "🌙";
  }
});
