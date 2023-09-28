function validateForm() {
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var contactNumber = document.getElementById('contact_number').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (!firstName || !lastName || !contactNumber || !email || !message) {
        alert('Please fill out all fields.');
        return false;
    }

    return true;
}
