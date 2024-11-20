// Function to show the custom dialog
function showCustomDialog() {
  // Display the dialog
  const dialog = document.getElementById('custom-dialog');
  dialog.classList.remove('hidden'); // Show the dialog

  // Add event listeners for Yes and No buttons
  const yesButton = document.getElementById('yes-button');
  const noButton = document.getElementById('no-button');

  yesButton.addEventListener('click', () => {
    alert("I love you too");
    dialog.classList.add('hidden'); // Hide the dialog
    // Optional: Blank the screen after Yes
    document.body.innerHTML = '';
    document.body.style.backgroundColor = 'black';
  });

  noButton.addEventListener('click', () => {
    alert("Let's be fwb then");
    dialog.classList.add('hidden'); // Hide the dialog
    // Optional: Blank the screen after No
    document.body.innerHTML = 'none';

    document.body.style.backgroundColor = 'black';
  });
}

// Countdown logic
const countdownElement = document.getElementById('countdown');
countdownElement.style.display = ' none';
const imageElement = document.getElementById('image');
let seconds = 5;

const countdownInterval = setInterval(() => {
  seconds--;
  countdownElement.textContent = seconds;

  if (seconds <= 0) {
    clearInterval(countdownInterval);
    countdownElement.style.display = ' '; // Hide countdown
    // Show the custom dialog 1 seconds after displaying the image
    setTimeout(() => {
      showCustomDialog();
    }, 1000);
  }
}, 1000); // Update every 1 second