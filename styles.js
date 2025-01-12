// Dark Mode Toggle Script
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class
});

// Dark mode styles
const styles = `
    body.dark-mode {
        background-color: #121212; /* Dark background */
        color: white; /* Light text color */
    }
    
    nav.dark-mode {
        background-color: #1e1e1e; /* Darker nav background */
    }
    
    nav ul li a.dark-mode {
        color: #bb86fc; /* Light purple for dark mode */
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);