<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Groot Knots | Luxury Handcrafted Bracelets</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <div class="logo">
            <img src="https://i.postimg.cc/prvSP1Cj/Groot-Knots-Bracelet-Business.png" alt="Groot Knots Logo" class="logo-img">
        </div>
        <nav>
            <a href="#home">Home</a>
            <a href="#products">Collection</a>
            <a href="#custom">Custom Orders</a>
        </nav>
        <div class="contact-top">
            <span class="gold-text">Est. 2026</span>
        </div>
    </header>

    <section id="home" class="hero">
        <div class="hero-content">
            <h1>ELEGANCE ARRESTED</h1>
            <p>Bespoke, ethically sourced crystal and luxury beaded bracelets tailored meticulously to your energy.</p>
            <div class="hero-buttons">
                <a href="#products" class="btn">View Collection</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScTTknoOAmclujnUYfMNJDwqnayhdK4q5rGTR6yC-_apyGb3g/viewform?usp=publish-editor" target="_blank" class="btn btn-outline">Custom Request Form</a>
            </div>
        </div>
    </section>

    <section id="products" class="products-section">
        <h2>The Collection</h2>
        <p class="section-subtitle">Click an item to view details or secure yours immediately via WhatsApp.</p>
        
        <div class="filter-container">
            <button class="filter-btn active" onclick="filterProducts('all')">All Pieces</button>
            <button class="filter-btn" onclick="filterProducts('clay')">Signature Clay</button>
            <button class="filter-btn" onclick="filterProducts('acrylic')">Luxury Acrylic</button>
        </div>

        <div class="product-grid">
            <div class="product-card" data-category="clay">
                <div class="product-image-container" onclick="openQuickView('Winter Special Heishi', 'R 180.00', 'https://i.postimg.cc/wTY9tsDv/Whats-App-Image-2026-07-01-at-11-54-14-AM.jpg', 'Celebrate the season with our dual-toned cool blue and forest green premium Heishi clay discs. Accented beautifully with polished chrome spacer beads and a delicate vintage silver leaf charm hanging from the base.')">
                    <img src=https://i.postimg.cc/wTY9tsDv/Whats-App-Image-2026-07-01-at-11-54-14-AM.jpg" alt="Winter Special Heishi" class="grid-prod-img">
                </div>
                <h3>Winter Special Heishi</h3>
                <p class="price">R 180.00</p>
                <button class="whatsapp-btn" onclick="inquireWhatsApp('Winter Special Heishi', 'R 180.00')">Inquire via WhatsApp</button>
            </div>

            <div class="product-card" data-category="clay">
                <div class="product-image-container" onclick="openQuickView('Smiley Sand Trio Pack', 'R 240.00', 'https://i.postimg.cc/VsCYLF0N/Whats-App-Image-2026-07-01-at-11-58-50-AM.jpg', 'A curated set of three layering bracelets. Built using neutral sand-beige clay discs paired with metallic block spacer units, balanced with a bright neon-yellow smiley face centerpiece statement focal bead.')">
                    <img src="https://i.postimg.cc/VsCYLF0N/Whats-App-Image-2026-07-01-at-11-58-50-AM.jpg" alt="Smiley Sand Trio" class="grid-prod-img">
                </div>
                <h3>Smiley Sand Trio Pack</h3>
                <p class="price">R 240.00</p>
                <button class="whatsapp-btn" onclick="inquireWhatsApp('Smiley Sand Trio Pack', 'R 240.00')">Inquire via WhatsApp</button>
            </div>

            <div class="product-card" data-category="acrylic">
                <div class="product-image-container" onclick="openQuickView('Blushing Y2K Statement', 'R 195.00', 'https://i.postimg.cc/ZYdTKLvm/Whats-App-Image-2026-07-01-at-12-00-58-PM.jpg', 'An ultra-trendy aesthetic mix of bubblegum pink round beads, iridescent crystal rounds, star-stamped metallic spheres, and an oversized statement bow charm anchored alongside a playful retro camera accent bead.')">
                    <img src="https://i.postimg.cc/ZYdTKLvm/Whats-App-Image-2026-07-01-at-12-00-58-PM.jpg" alt="Blushing Y2K Statement" https://i.postimg.cc/ZYdTKLvm/Whats-App-Image-2026-07-01-at-12-00-58-PM.jpgclass="grid-prod-img">
                </div>
                <h3>Blushing Y2K Statement</h3>
                <p class="price">R 195.00</p>
                <button class="whatsapp-btn" onclick="inquireWhatsApp('Blushing Y2K Statement', 'R 195.00')">Inquire via WhatsApp</button>
            </div>
        </div>
    </section>

    <div id="quickview-modal" class="modal">
        <div class="modal-content">
            <span class="close-modal" onclick="closeQuickView()">&times;</span>
            <div class="modal-body">
                <div class="modal-image-wrapper">
                    <img id="modal-img" src="" alt="Product Detail View" class="modal-display-img">
                </div>
                <div class="modal-info">
                    <h2 id="modal-title">Product Title</h2>
                    <p id="modal-price" class="price"></p>
                    <p id="modal-desc">Product description goes here.</p>
                    <button id="modal-wa-btn" class="whatsapp-btn" style="margin-top: 15px;">Inquire via WhatsApp</button>
                </div>
            </div>
        </div>
    </div>

    <section id="custom" class="custom-section">
        <div class="custom-content">
            <h2>Bespoke Commissions</h2>
            <p>Do you have a specific color pairing, pattern style, or charm theme in mind? Our team accepts custom commissions strictly via reservation.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScTTknoOAmclujnUYfMNJDwqnayhdK4q5rGTR6yC-_apyGb3g/viewform?usp=publish-editor" target="_blank" class="btn gold-gradient-btn">Open Custom Design Form</a>
        </div>
    </section>

    <footer>
        <p>&copy; 2026 GROOT KNOTS. All Rights Reserved. Crafted for the Refined.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>