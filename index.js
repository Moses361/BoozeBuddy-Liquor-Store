
let productsNew = [
  {
    id: 'whiskey',
    title: 'Whiskey',
    description: 'Whiskey is a distilled alcoholic beverage made from fermented grain mash. It is aged in wooden barrels, which imparts a range of flavors, including caramel, vanilla, and oak.',
    price: 34.99,
    image: '/images/Whiskey.jpg' 
  },
  {
    id: 'Vodka',
    title: 'Vodka',
    description: 'Vodka is a clear distilled alcoholic beverage. Different varieties can be made from fermented grains such as rye and wheat, or potatoes.',
    price: 19.99,
    image: '/images/Vodka.jpg'
  },

  {
      id: 'wine',
      title: 'Wine',
      description: 'Red Wine is a fermented alcoholic beverage made from dark-colored grape varieties. It typically has rich flavors and is often enjoyed with meals or on its own.',
      price: 19.99,
      image: '/images/Beer.jpg'
    },
    {
      id: 'brandy',
      title: 'Brandy',
      description: 'Brandy is a distilled wine or fermented fruit juice that is aged in wooden barrels. It boasts rich and complex flavors, often including notes of fruit, oak, and spices.',
      price: 5.99,
      image: '/images/Brandy.jpg'
    },
    {
      id: 'beer',
      title: 'Beer',
      description: 'Beer is a refreshing and widely consumed alcoholic beverage. It is typically made from fermented grains, predominantly malted barley, combined with water, hops, and yeast.',
      price: 5.99,
      image: '/images/Beer.jpg'
    },
    {
      id: 'rum',
      title: 'Rum',
      description: 'Rum is a distilled alcoholic beverage made from sugarcane byproducts, such as molasses, or directly from sugarcane juice. With a diverse range of flavors.',
      price: 22.99,
      image: '/images/Rum.jpg'
    },
    {
      id: 'tequila',
      title: 'Tequila',
      description: 'Tequila, originating from Mexico, is a distilled spirit crafted from the fermented juice of the blue agave plant.',
      price: 5.99,
      image: '/images/Tequila.jpg'
    },
    {
      id: 'sake',
      title: 'Sake',
      description: 'Sake is a traditional Japanese rice wine with a history dating back centuries. It is made through the fermentation of polished rice, water, yeast, and koji mold.',
      price: 18.99,
      image: '/images/Sake.jpg'
    },
    {
      id: 'absinthe',
      title: 'Absinthe',
      description: 'Absinthe is a highly alcoholic beverage known for its distinct anise flavor. It is often referred to as "the Green Fairy".',
      price: 29.99,
      image: '/images/Absinthe.jpg'
    },
    {
      id: 'scotch',
      title: 'Scotch',
      description: 'Scotch is a whisky that originates from Scotland and is known for its distinct production process. It is typically made from malted barley and aged in oak barrels.',
      price: 5.99,
      image: '/images/Scotch.jpg'
    },
    {
      id: 'cognac',
      title: 'Cognac',
      description: 'Cognac is a type of brandy that originates from the Cognac region in France. It is made from distilled white wine and aged in oak barrels. Cognac is known for its refined and complex flavors.',
      price: 5.99,
      image: '/images/Cognac.jpg'
    },
    {
      id: 'gin',
      title: 'Gin',
      description: 'Gin is a distilled alcoholic beverage known for its predominant flavor of juniper berries. It is a versatile spirit that can feature a wide range of botanicals.',
      price: 5.99,
      image: '/images/Beer.jpg'
    },
  // Add more products as needed
];


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
    // Show the product details and hide the product list
    productDetailsDiv.style.display = 'block';
    document.getElementById('productList').style.display = 'none';
  }
  
  let productList = document.getElementById('productList');
  // loop throgh the products array and create a card for each product
  function displayProducts(products) {
    
    products.forEach(function (product) {
      let template  =
       `
       <div class="col-md-4 mb-4" id="${product.id}" data-category="${product.title}">
            <div class="card">
              <img
                class="card-img-top product-image"
                src="${product.image}"
                alt="Product 1 Image"
                style="width: 300px; height: 300px"
              />
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">
                  ${product.description}
                </p>
                <p class="card-text">Price: $${product.price}</p>
                <!-- Add "Add to Cart" button or any other action buttons as needed -->
                <!-- Add "Add to Cart" button -->
                <button
                  class="btn btn-primary add-to-cart"
                  data-product-id="${product.id}"
                  onclick="addToCart('${product.id}')"
                  >Add to Cart</button
                >
  
                <!-- Add "Checkout" button -->
                <a href="checkout.html" class="btn btn-success">Checkout</a>
                <!-- somewhere in your HTML -->
                <div id="total-cost">Total Cost: $0.00</div>
                <div id="cart-quantity">0</div>
              </div>
            </div>
          </div>
      `;
  
      productList.innerHTML += template;
    });
  }
  
  displayProducts(productsNew);

  // save products to local storage
function saveProducts() {
  localStorage.setItem('products', JSON.stringify(productsNew));
}
saveProducts();