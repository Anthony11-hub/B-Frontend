// makes it easier to add new data
/* Attempting to generate the html with javascript */ 
// using accumulator pattern -- similar to reduce
let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
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

document.querySelector('.js-products-grid')
    .innerHTML = productsHTML;
