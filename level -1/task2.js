function changeColor() {
    var button = document.getElementById('colorButton');

    // Toggle between 'default' and 'clicked' classes
    if (button.classList.contains('default')) {
        button.classList.remove('default');
        button.classList.add('clicked');
    } else {
        button.classList.remove('clicked');
        button.classList.add('default');
    }
}

function displayGreeting() {
    // Get the current time in the local time zone
    var now = new Date();
    
    // Extract the hours and minutes from the local time
    var currentHour = now.getHours();
    var currentMinute = now.getMinutes();

    // Determine if it's AM or PM
    var period = currentHour < 12 ? "AM" : "PM";

    // Convert to 12-hour format
    currentHour = (currentHour % 12) || 12;

    // Define the greeting based on the current time
    var greeting;
    if (currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    // Display the greeting along with the time in AM/PM format
    alert(greeting + "\nCurrent time: " + currentHour + ":" + (currentMinute < 10 ? "0" : "") + currentMinute + " " + period);
}

function calculate() {
    // Get the values of the input fields
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Check if the input values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }

    // Calculate the sum
    var sum = num1 + num2;

    // Display the result
    document.getElementById('result').textContent = 'Result: ' + sum;
}