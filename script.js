function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let department = document.getElementById("department").value;
    let date = document.getElementById("date").value;

    if (name === "") {
        alert("Please enter your full name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return false;
    }

    if (phone === "") {
        alert("Please enter your mobile number.");
        return false;
    }

    if (department === "") {
        alert("Please select a department.");
        return false;
    }

    if (date === "") {
        alert("Please select an appointment date.");
        return false;
    }

    alert("Your appointment request has been submitted successfully!");

    return true;
}