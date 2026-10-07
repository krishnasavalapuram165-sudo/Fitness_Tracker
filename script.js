function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    // Admin login
    if (role === "admin" &&
        username === "admin" &&
        password === "admin123") {

        window.location.href = "admin.html";
        return;
    }

    // User login
    let savedUsername = localStorage.getItem("username");
    let savedPassword = localStorage.getItem("password");

    if (role === "user" &&
        username === savedUsername &&
        password === savedPassword) {

        window.location.href = "fitness.html";

    } else {

        document.getElementById("message").innerText =
            "Invalid username or password.";

    }
}


function signup() {

    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let message = document.getElementById("signupMessage");


    if (username === "" || password === "") {

        message.innerText = "Please fill all fields.";
        message.style.color = "red";
        return;
    }


    if (password !== confirmPassword) {

        message.innerText = "Passwords do not match.";
        message.style.color = "red";
        return;
    }


    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    message.innerText = "Account created successfully!";
    message.style.color = "green";


    setTimeout(function() {
        window.location.href = "index.html";
    }, 1500);
}


function updateTracker() {

    let steps = Number(document.getElementById("steps").value);
    let heartRate = Number(document.getElementById("heartRate").value);
    let workout = Number(document.getElementById("workout").value);


    // Calculate calories from steps
    let stepCalories = steps * 0.04;


    // Calculate calories from workout
    let workoutCalories = workout * 7;


    // Total calories
    let totalCalories = Math.round(stepCalories + workoutCalories);


    // Display values
    document.getElementById("stepResult").innerText =
        steps;

    document.getElementById("calorieResult").innerText =
        totalCalories + " kcal";

    document.getElementById("heartResult").innerText =
        heartRate + " BPM";

    document.getElementById("workoutResult").innerText =
        workout + " min";
}