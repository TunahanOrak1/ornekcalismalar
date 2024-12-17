document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let username = document.getElementById('regUsername').value;
    let password = document.getElementById('regPassword').value;
    
    if (localStorage.getItem(username)) {
        alert('Username already exists');
    } else {
        localStorage.setItem(username, password);
        alert('User registered successfully');
        loginUser(username);
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;
    
    if (localStorage.getItem(username) === password) {
        alert('Login successful');
        loginUser(username);
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('logoutButton').addEventListener('click', function() {
    logoutUser();
});

function loginUser(username) {
    sessionStorage.setItem('loggedInUser', username);
    showProfile(username);
}

function logoutUser() {
    sessionStorage.removeItem('loggedInUser');
    showAuthSection();
}

function showProfile(username) {
    document.getElementById('authSection').style.display = 'none';
    document.getElementById('profileSection').style.display = 'block';
    document.getElementById('usernameDisplay').textContent = username;
}

function showAuthSection() {
    document.getElementById('authSection').style.display = 'block';
    document.getElementById('profileSection').style.display = 'none';
}

// Check if user is already logged in
window.onload = function() {
    let loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        showProfile(loggedInUser);
    }
};

