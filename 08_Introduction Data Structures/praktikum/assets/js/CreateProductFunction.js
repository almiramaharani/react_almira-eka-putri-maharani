class Product {
    constructor(no, name, category, image, freshness, desc, price) {
        this.no = no,
        this.name = name,
        this.category = category,
        this.image = image,
        this.freshness = freshness,
        this.desc = desc,
        this.price = price
    }

    data() {
        const product = {
            ProductName: this.name,
            ProductCategory: this.category,
            ProductImage: this.image,
            ProductFreshness: this.freshness,
            AdditionalDescription: this.desc,
            ProductPrice: this.price
        }
        return product;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const productName = document.getElementById('productName');
    const productPrice = document.getElementById('price');
    const productCategory = document.getElementById('category');
    const productImage = document.getElementById('image');
    const productFreshnessRadios = document.getElementsByName('productFreshnessRadio');
    const productDesc = document.getElementById('add-desc');
    const productForm = document.getElementById('product-form');
    const search = document.getElementById('search');
    
    const products = [];
    
    const submitButton = document.getElementById('submit-btn');
    const deleteButton = document.getElementById('delete-btn');
    const searchButton = document.getElementById('search-btn');

    // Validate all fields
    submitButton.disabled = true;
    
    function updateButtonStatus() {
        const nameValue = productName.value;
        const priceValue = parseFloat(productPrice.value);
        const descProductValue = productDesc.value;
    
        let hasInvalidFields = false;
    
        if (nameValue.length > 25 ||
            nameValue.includes('@') || nameValue.includes('/') || 
            nameValue.includes('#') || nameValue.includes('{') || 
            nameValue.includes('}') || descProductValue === '' ||
            priceValue <= 0 || isNaN(priceValue)) {
            submitButton.disabled = true;
            hasInvalidFields = true;
            } else {
            submitButton.disabled = false;
            }
        
    
        if (nameValue.length > 25 ||
            nameValue.includes('@') || nameValue.includes('/') || 
            nameValue.includes('#') || nameValue.includes('{') || 
            nameValue.includes('}')){
            productName.classList.add('error-field');
        } else {
        productName.classList.remove('error-field');
        }
    
        if (priceValue <= 0) {
        productPrice.classList.add('error-field');
        } else {
        productPrice.classList.remove('error-field');
        }
    
        return !hasInvalidFields;
    }
    
    [productName, productPrice, productDesc].forEach(field => {
        field.addEventListener('input', updateButtonStatus);
    })
    
    // Add new product to array
    productForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const selectedFreshness = [...productFreshnessRadios].find(radio => radio.checked);

        const product = new Product(
            products.length+1,
            productName.value,
            productCategory.value,
            productImage.value,
            selectedFreshness.value,
            productDesc.value,
            parseFloat(productPrice.value)
        );

        products.push(product);
        console.log(products);
        displayProducts();

        productForm.reset();
        
    });

    // Delete button action
    deleteButton.addEventListener('click', function() {
        products.pop();
        displayProducts();
    });

    function displayProducts() {
        const tableBody = document.querySelector("tbody");
        tableBody.innerHTML = "";

        products.forEach((product, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.no}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.image}</td>
                <td>${product.freshness}</td>
                <td>${product.desc}</td>
                <td>${product.price}</td>
            `;
            tableBody.appendChild(row);
        });
    };

    // Search button action
    searchButton.addEventListener('click', function() {
        const foundProduct = products.find(product => product.name === search.value);

        alert(JSON.stringify(foundProduct ? foundProduct.data() : "Product not found", null, 2));
        search.value='';
    })

})
