// Mobile Navigation Toggle
document.querySelector('.mobile-nav-toggle')?.addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Function to highlight active theme button
function highlightActiveThemeButton(themeName) {
    // Remove active class from all buttons first
    document.querySelectorAll('.theme-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to the selected theme button
    const activeButton = document.querySelector(`.theme-button[data-theme="${themeName}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Function to apply theme
function applyTheme(themeName) {
    // First remove all theme classes
    document.body.classList.remove('mayukai-light', 'mayukai-dark', 'tokyo-night-light', 'tokyo-night-dark');
    // Then add the selected theme
    document.body.classList.add(themeName);
    // Highlight the active theme button
    highlightActiveThemeButton(themeName);
}

// Theme Switcher
document.querySelectorAll('.theme-button').forEach(button => {
    button.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        applyTheme(theme);
        localStorage.setItem('theme', theme);
        
        // Add console log to debug theme switching
        console.log('Theme changed to:', theme);
    });
});

// Load saved theme when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'mayukai-light';
    console.log('Loading saved theme:', savedTheme);
    applyTheme(savedTheme);
});