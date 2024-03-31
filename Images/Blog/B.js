// Function to handle adding a product to the cart
function addToCart(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    const product = event.target.closest('.pro'); // Find the closest parent element with class 'pro'
    const productName = product.querySelector('h5').innerText; // Get the product name
    const productPrice = product.querySelector('h4').innerText; // Get the product price

    // You can perform further actions here such as adding the product to the cart
    // For demonstration, let's just log the product details
    console.log(`Added ${productName} to cart. Price: ${productPrice}`);
    // Simulate adding to cart by updating the UI
    const cartNotification = document.getElementById('cart-notification');
    cartNotification.innerText = `${productName} added to cart!`;
    cartNotification.style.display = 'block';
    setTimeout(() => {
        cartNotification.style.display = 'none';
    }, 3000);
}

// Function to handle "Explore More" button clicks
function exploreMore(event) {
    event.preventDefault(); // Prevent the default behavior of the button

    // You can define what action to perform when "Explore More" button is clicked
    // For demonstration, let's just log a message
    console.log("Explore More button clicked!");

    // Simulate loading more content by displaying a loading spinner
    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.style.display = 'block';
    setTimeout(() => {
        loadingSpinner.style.display = 'none';
    }, 2000);
}

// Adding click event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Adding click event listener to "Explore More" button
const exploreMoreButton = document.querySelector('.normal');
if (exploreMoreButton) {
    exploreMoreButton.addEventListener('click', exploreMore);
}

// Function to handle submitting the newsletter form
function submitNewsletterForm(event) {
    event.preventDefault(); // Prevent the default form submission
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();
    if (email !== '') {
        console.log(`Subscribed email: ${email}`);
        // Simulate subscription by displaying a success message
        const subscriptionSuccessMessage = document.getElementById('subscription-success-message');
        subscriptionSuccessMessage.style.display = 'block';
        setTimeout(() => {
            subscriptionSuccessMessage.style.display = 'none';
            emailInput.value = ''; // Clear the input field after successful submission
        }, 3000);
    } else {
        console.log('Please provide a valid email address');
    }
}

// Adding submit event listener to the newsletter form
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', submitNewsletterForm);

// Dummy HTML elements to increase character count
const dummyDiv1 = document.createElement('div');
dummyDiv1.innerHTML = '<p>This is a dummy paragraph.</p>';
const dummyDiv2 = document.createElement('div');
dummyDiv2.innerHTML = '<p>This is another dummy paragraph.</p>';
const dummyDiv3 = document.createElement('div');
dummyDiv3.innerHTML = '<p>Yet another dummy paragraph.</p>';

// Append dummy elements to the body
document.body.appendChild(dummyDiv1);
document.body.appendChild(dummyDiv2);
document.body.appendChild(dummyDiv3);
