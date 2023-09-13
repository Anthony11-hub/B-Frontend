// Function to get URL parameters
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  // Function to get product details by ID
  function getProductDetailsById(productId) {
    // Find the product with the given productId in the products array
    return products.find((product) => product.id === productId) || null;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Get the product ID from the URL parameter
    const productId = getURLParameter('id');
  
    // Get the product details based on the product ID
    const productDetails = getProductDetailsById(productId);
  
    if (productDetails) {
      // Populate the HTML elements with the product details
      const mainImgElement = document.getElementById('MainImg');
      mainImgElement.src = productDetails.image;
      mainImgElement.style.maxWidth = '60%'; // Set maximum width as needed
      mainImgElement.style.height = 'auto'; // Preserve aspect ratio
  
      document.querySelector('.product-name').textContent = productDetails.keywords.join(', ');
      document.querySelector('.product-name').textContent = productDetails.name;
      document.querySelector('.description').textContent = productDetails.description;
      document.querySelector('.product-price-discount').textContent = `KES ${productDetails.priceCents / 100}`;
  
      // ... Populate other elements with relevant data ...
    } else {
      // Handle the case where the product details are not found
      console.error('Product not found.');
    }
  });
  
  


let productsHTML = '';
const maxItemsToShow = 6;

products.slice(0, maxItemsToShow).forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src="${product.image}">
      </div>

      <div class="product-names limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-price">
        KES${product.priceCents / 100}
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>
    </div>
  `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;
