function filterBooks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const books = document.querySelectorAll('.book');

    books.forEach((book) => {
        const title = book.querySelector('h3').textContent.toLowerCase();
        const category = book.getAttribute('data-category');

        const matchesSearch = title.includes(searchInput);
        const matchesCategory = categoryFilter === 'all' || category === categoryFilter;

        if (matchesSearch && matchesCategory) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
}
