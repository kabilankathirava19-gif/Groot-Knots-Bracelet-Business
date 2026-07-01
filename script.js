// CONFIGURATION: Add your WhatsApp Business Phone Number here (including country code, no + symbols)
const WHATSAPP_NUMBER = "27831234567"; 

// WhatsApp Redirection Engine
function inquireWhatsApp(productName, productPrice) {
    const baseMessage = `Hello Groot Knots, I am deeply interested in acquiring the piece: "${productName}" listed at ${productPrice}. Could you kindly advise on availability?`;
    const encodedMessage = encodeURIComponent(baseMessage);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// Interactive Category Filters
function filterProducts(category) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Quick View Window Controls with Image URL Handlers
function openQuickView(title, price, imgSrc, desc) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('modal-desc').innerText = desc;
    
    const modalWaBtn = document.getElementById('modal-wa-btn');
    modalWaBtn.onclick = function() {
        inquireWhatsApp(title, price);
    };
    
    document.getElementById('quickview-modal').style.display = 'flex';
}

// Close Window Controls
function closeQuickView() {
    document.getElementById('quickview-modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('quickview-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}