function showSpinner() {
    document.querySelector('.spinner-overlay').style.display = 'flex';
  }
  
  function hideSpinner() {
    document.querySelector('.spinner-overlay').style.display = 'none';
  }
  
  // Example usage
  document.addEventListener('DOMContentLoaded', () => {
    // Show the spinner
    showSpinner();
  
    // Simulate a delay, then hide the spinner
    setTimeout(() => {
      hideSpinner();
      showSlides();
    }, 3000); // Adjust the delay as needed
  });
  