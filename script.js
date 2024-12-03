document.addEventListener('DOMContentLoaded', (event) => {
    updateBalance();
    document.getElementById('toggle-sidebar').addEventListener('click', toggleSidebar);

    // Mouse wheel scrolling functionality (scroll horizontally with wheel)
    const scrollContainer = document.querySelector('.wrapper');
    const items = document.querySelector('.items');
    const blocks = items.querySelectorAll('.block');

    // Mouse wheel scrolling functionality
    scrollContainer.addEventListener('wheel', function(event) {
        // Scroll horizontally only when the wheel is moved horizontally
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
            event.preventDefault();
            this.scrollLeft += event.deltaX; // Scroll horizontally instead of vertically
        }
    });

    // Update balance text
    function updateBalance() {
        let balance = localStorage.getItem('slotsBalance') || 0;
        document.getElementById('balance-amount').innerText = balance;
    }

    // Toggle sidebar visibility
    function toggleSidebar() {
        let sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('collapsed');
    }
});
