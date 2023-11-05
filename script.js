document.addEventListener('DOMContentLoaded', () => {
    // Sample data for demonstration
    const books = [
        { title: 'The Forty Rules of Love', author: 'Elif Shafak', isbn: '032009' },
        { title: 'The Bastard of Istanbul', author: 'Elif Shafak', isbn: '11122002' },
    ];

    const bookList = document.getElementById('book-list');
    const addBookForm = document.getElementById('add-book-form');

    function displayBookList() {
        bookList.innerHTML = '';
        books.forEach(book => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${book.title}</strong> by ${book.author} (ISBN: ${book.isbn})`;
            bookList.appendChild(li);
        });
    }

    function addBook(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
imad
        if (books.some(book => book.isbn === isbn)) {
            alert('Book with the same ISBN already exists.');
            return;
        }

        books.push({ title, author, isbn });
        displayBookList();
        addBookForm.reset();
    }

    function searchBooks() {
        const query = document.getElementById('search-query').value.toLowerCase();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(query) || 
            book.author.toLowerCase().includes(query)
        );
        displayBookList(filteredBooks);
    }    

    displayBookList();
    addBookForm.addEventListener('submit', addBook);
    window.searchBooks = searchBooks;
});
