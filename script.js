document.addEventListener('DOMContentLoaded', () => {
    // Heart wishlist toggle
    document.querySelectorAll('.heart').forEach(h => {
        h.addEventListener('click', () => h.classList.toggle('liked'));
    });

    // Update cart count
    function updateCount() {
        let cart = JSON.parse(localStorage.getItem('darkoCart') || '[]');
        document.getElementById('cart-count').textContent = cart.length;
    }

    updateCount();

    // Add to bag buttons (on index.html)
    document.querySelectorAll('.add-to-bag').forEach(btn => {
        btn.addEventListener('click', () => {
            let cart = JSON.parse(localStorage.getItem('darkoCart') || '[]');
            cart.push({
                name: btn.dataset.name,
                price: btn.dataset.price,
                img: btn.dataset.img
            });
            localStorage.setItem('darkoCart', JSON.stringify(cart));
            updateCount();
            alert('Added to bag!');
        });
    });
});