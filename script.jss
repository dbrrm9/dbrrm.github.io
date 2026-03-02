<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premium Curtains & Rods | Catalog</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; margin: 0; color: #333; line-height: 1.6; }
        header { background: #2c3e50; color: white; padding: 2rem; text-align: center; }
        .container { max-width: 1000px; margin: auto; padding: 20px; }
        
        /* Product Grid */
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
        .card { border: 1px solid #ddd; border-radius: 8px; overflow: hidden; text-align: center; padding-bottom: 15px; }
        .card img { width: 100%; height: 200px; object-fit: cover; background: #f4f4f4; }
        .card h3 { margin: 10px 0; color: #2c3e50; }
        
        /* Contact Buttons */
        .cta-container { position: fixed; bottom: 20px; width: 100%; display: flex; justify-content: center; gap: 10px; z-index: 100; }
        .btn { padding: 12px 25px; border-radius: 50px; text-decoration: none; font-weight: bold; color: white; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
        .btn-call { background: #27ae60; }
        .btn-whatsapp { background: #25d366; }
        
        .price-tag { color: #e67e22; font-weight: bold; font-size: 1.2rem; }
    </style>
</head>
<body>

<header>
    <h1>Your Business Name</h1>
    <p>Elegant Curtains & Designer Rod Accessories</p>
    <p>📍 Visit us or Call for a Home Consultation</p>
</header>

<div class="container">
    <h2>Our Collection</h2>
    <div class="grid">
        <div class="card">
            <img src="https://via.placeholder.com/300x200?text=Velvet+Curtains" alt="Velvet Curtains">
            <h3>Premium Velvet Curtains</h3>
            <p>Available in 12 colors</p>
            <p class="price-tag">Call for Price</p>
        </div>

        <div class="card">
            <img src="https://via.placeholder.com/300x200?text=Modern+Rods" alt="Curtain Rods">
            <h3>Antique Brass Rods</h3>
            <p>Heavy duty, extendable</p>
            <p class="price-tag">Call for Price</p>
        </div>

        <div class="card">
            <img src="https://via.placeholder.com/300x200?text=Blackout+Fabric" alt="Blackout">
            <h3>100% Blackout Linings</h3>
            <p>Perfect for bedrooms</p>
            <p class="price-tag">Call for Price</p>
        </div>
    </div>
</div>

<div class="cta-container">
    <a href="tel:+1234567890" class="btn btn-call">📞 Call Now</a>
    <a href="https://wa.me/1234567890" class="btn btn-whatsapp">💬 WhatsApp</a>
</div>

</body>
</html>