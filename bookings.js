# Bookings Form JavaScript

// Get the form element
const form = document.getElementById('bookings-form');

// Add event listener to the form
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the user's input
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

  // Validate the input
  if (name === '' || email === '' || phone === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Process the payment
  if (paymentMethod === 'pay-now') {
    // Add logic for immediate payment (e.g., Stripe, PayPal)
    console.log('Pay now selected');
  } else if (paymentMethod === 'pay-later') {
     // Add logic for later payment (e.g., send invoice)
     console.log('Pay later selected');
    } else if (paymentMetho});
    d === 'scan-code') {
      // Add logic for scanning code payment (e.g., QR code)
      console.log('Scan code selected');
    }
  
    // Submit the form data
    // You can add AJAX or fetch API call here to send data to server
    console.log('Form submitted');
});
  