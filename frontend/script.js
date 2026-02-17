// ===== LOGIN FUNCTIONALITY =====
function login() {
    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (!username || !password) {
        alert('Please enter both username and password!');
        return;
    }

    // Store user info in sessionStorage
    sessionStorage.setItem('userRole', role);
    sessionStorage.setItem('username', username);

    // Redirect based on role
    if (role === 'admin') {
        window.location.href = 'admin.html';
    } else {
        window.location.href = 'student.html';
    }
}

// ===== LOGOUT FUNCTIONALITY =====
function logout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

// ===== CHECK AUTHENTICATION =====
function checkAuth() {
    const userRole = sessionStorage.getItem('userRole');
    if (!userRole) {
        window.location.href = 'index.html';
    }
}

// ===== SECTION NAVIGATION =====
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.dashboard-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Update nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + sectionId) {
            item.classList.add('active');
        }
    });
}

// ===== ADMIN FUNCTIONS =====

// Add Bus
function addBus() {
    const busNumber = document.getElementById('busNumber').value;
    const busCapacity = document.getElementById('busCapacity').value;
    const busRoute = document.getElementById('busRoute').value;
    const busDriver = document.getElementById('busDriver').value;

    if (!busNumber || !busCapacity || !busRoute || !busDriver) {
        alert('Please fill all fields!');
        return;
    }

    // Add to table
    const table = document.getElementById('busTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    newRow.innerHTML = `
        <td>${busNumber}</td>
        <td>${busCapacity}</td>
        <td>${busRoute}</td>
        <td>${busDriver}</td>
        <td><span class="status active">Active</span></td>
        <td>
            <button class="edit-btn" onclick="editRow(this)">Edit</button>
            <button class="delete-btn" onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    // Clear inputs
    document.getElementById('busNumber').value = '';
    document.getElementById('busCapacity').value = '';
    document.getElementById('busRoute').value = '';
    document.getElementById('busDriver').value = '';

    alert('Bus added successfully!');
}

// Add Route
function addRoute() {
    const routeName = document.getElementById('routeName').value;
    const routeStart = document.getElementById('routeStart').value;
    const routeEnd = document.getElementById('routeEnd').value;
    const routeStops = document.getElementById('routeStops').value;

    if (!routeName || !routeStart || !routeEnd || !routeStops) {
        alert('Please fill all fields!');
        return;
    }

    alert('Route added successfully!');
    
    // Clear inputs
    document.getElementById('routeName').value = '';
    document.getElementById('routeStart').value = '';
    document.getElementById('routeEnd').value = '';
    document.getElementById('routeStops').value = '';
}

// Add Driver
function addDriver() {
    const driverName = document.getElementById('driverName').value;
    const driverLicense = document.getElementById('driverLicense').value;
    const driverPhone = document.getElementById('driverPhone').value;
    const driverExperience = document.getElementById('driverExperience').value;

    if (!driverName || !driverLicense || !driverPhone || !driverExperience) {
        alert('Please fill all fields!');
        return;
    }

    alert('Driver added successfully!');
    
    // Clear inputs
    document.getElementById('driverName').value = '';
    document.getElementById('driverLicense').value = '';
    document.getElementById('driverPhone').value = '';
    document.getElementById('driverExperience').value = '';
}

// Delete Row
function deleteRow(btn) {
    if (confirm('Are you sure you want to delete this entry?')) {
        const row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
        alert('Entry deleted successfully!');
    }
}

// Edit Row
function editRow(btn) {
    alert('Edit functionality will be implemented in the full version!');
}

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    // Check if on dashboard pages
    if (document.querySelector('.dashboard-body')) {
        checkAuth();
    }
});

console.log("Script loaded successfully");
