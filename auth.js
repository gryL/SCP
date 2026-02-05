// Shared user authentication display
(function() {
    // Check if user is logged in
    const storedUsername = sessionStorage.getItem('scpUsername');
    
    if (storedUsername) {
        // Find user display elements
        const userDisplay = document.getElementById('userDisplay');
        const usernameDisplay = document.getElementById('usernameDisplay');
        
        if (userDisplay && usernameDisplay) {
            usernameDisplay.textContent = storedUsername;
            userDisplay.style.display = 'block';
        }
    }
})();
