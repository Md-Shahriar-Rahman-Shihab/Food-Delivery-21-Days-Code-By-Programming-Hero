document.getElementById("see-more").addEventListener("click", function() {
    // Select all hidden items
    const hiddenItems = document.querySelectorAll('.item-card.hidden');
    
    // Remove the 'hidden' class to display the items
    hiddenItems.forEach(item => {
        item.classList.remove('hidden');
    });

    // Hide the "See More Products" button after revealing the items
    this.style.display = 'none';
});
