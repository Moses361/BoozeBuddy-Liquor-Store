// Initialize the cart as an empty object
var cart = {};

// Define your products
var products = {
  'Absinthe': {
    'title': 'Absinthe',
    'description': 'Absinthe is a highly alcoholic beverage known for its distinct anise flavor. It is often referred to as "the Green Fairy".',
    'price': 29.99,
    'image': '/images/Absinthe.jpg'
  },
  // ... other products ...
};

// Function to add a product to the cart
function addToCart(productId) {
  // Add product to cart
  if (cart[productId]) {
    cart[productId]++;
  } else {
    cart[productId] = 1;
  }

  // Update the cart display
  displayCart();

  // Redirect to cart page (commented out for now)
  // window.location.href = 'cart.html';
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  // Remove product from cart
  if (cart[productId]) {
    cart[productId]--;
    if (cart[productId] === 0) {
      delete cart[productId];
    }
  }

  // Update the cart display
  displayCart();
}

// Function to display the cart
function displayCart() {
  // Get the cart element
  var cartElement = document.getElementById('cart');

  // Clear the cart display
  cartElement.innerHTML = '';

  // Add each product in the cart to the cart display
  for (var productId in cart) {
    var quantity = cart[productId];
    var product = products[productId];

    // Create a new div for the product
    var productDiv = document.createElement('div');
    productDiv.textContent = product.title + ' x ' + quantity;

    // Add the product div to the cart element
    cartElement.appendChild(productDiv);
  }

  // Update the total cost and quantity displays
  updateTotalCost();
  updateCartQuantity();
}

// Function to update the total cost
function updateTotalCost() {
  var totalCost = 0;

  // Iterate over the items in the cart
  for (var productId in cart) {
    // Get the product's price and quantity
    var price = products[productId].price;
    var quantity = cart[productId];

    // Add the product's total cost to the total cost
    totalCost += price * quantity;
  }

  // Display the total cost
  document.getElementById('total-cost').textContent = 'Total Cost: $' + totalCost.toFixed(2);
}

// Function to update the cart quantity
function updateCartQuantity() {
  var totalQuantity = 0;

  // Iterate over the items in the cart
  for (var productId in cart) {
    // Add the quantity of the current item to the total quantity
    totalQuantity += cart[productId];
  }

  // Update the displayed quantity
  document.getElementById('cart-quantity').textContent = totalQuantity;
}

// Add event listener for category filter
document
  .getElementById("categoryFilter")
  .addEventListener("change", function () {
    var selectedCategory = this.value;
    var productCards = document.querySelectorAll(".col-md-4");

    productCards.forEach(function (card) {
      if (
        selectedCategory === "All" ||
        card.getAttribute("data-category") === selectedCategory
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

// Add click event listeners to product cards
var productCards = document.querySelectorAll(".col-md-4");

productCards.forEach(function (card) {
  card.addEventListener("click", function () {
    showProductDetails(card.id);
  });
});

// Define the showProductDetails function
function showProductDetails(productName) {
    var product = products[productName];
    var productDetailsDiv = document.getElementById('productDetails');
  
    productDetailsDiv.innerHTML = `
      <div class="row">
        <div class="col-md-6">
          <img src="${product.image}" alt="${product.title}" class="img-fluid">
        </div>
        <div class="col-md-6">
          <h1>${product.title}</h1>
          <p>${product.description}</p>
          <p>Price: ${product.price}</p>
          <button class="btn btn-primary add-to-cart" data-product-id="${productName}">Add to Cart</button>
        </div>
      </div>
    `;
  
    // Add event listener to the "Add to Cart" button
    var addToCartButton = productDetailsDiv.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', function (event) {
      // Get the product ID from the button's data-product-id attribute
      var productId = event.currentTarget.getAttribute('data-product-id');
  
      // Add the product to the cart
      addToCart(productId);
    });
  
    // Show the product details and hide the product list
    productDetailsDiv.style.display = 'block';
    document.getElementById('productList').style.display = 'none';
  }