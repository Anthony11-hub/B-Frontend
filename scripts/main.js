// http://localhost:5000/api/products
fetch('data/products.json')
  .then(response => response.json())
  .then(products => {
    const productsHTML = products.map((product) => `
    <a href="sproducts.html?id=${product.id}" style="text-decoration: none;">
      <div class="product-container" data-product-id="${product.id}">
        <div class="product-image-container">
          <img class="product-image skeleton" src="${product.image}">
        </div>
  
        <div class="product-names limit-text-to-2-lines">
          ${product.name}
        </div>
  
        <div class="product-price">
          Ksh ${product.priceCents / 100}
        </div>
  
        <div class="product-spacer"></div>
  
        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>
      </div>
    </a>
  `).join('');
  
  document.querySelector('.js-products-grid').innerHTML = productsHTML;
  })

  const images = document.querySelectorAll('.skeleton');

  function preloadImage(img){
      const src = img.getAttribute('data-src');
  
      if(!src){
          return;
      }
  
      img.src = src;
  }
  
  const imgOptions = {
      threshold: 0,
      rootMargin: "0px 0px -500px 0px"
  };
  
  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach(entry => {
          if(!entry.isIntersecting) {
              return;
          } else {
              preloadImage(entry.target);
              imgObserver.unobserve(entry.target);
          }
      });
  }, imgOptions);
  
  images.forEach(image => {
      imgObserver.observe(image);
  });
