// dynamic Book Block.

function loadBooksBlock() {
    let booksBlock = document.getElementById('books')

    for (let i = 0; i < booksLibrary.length; i++) {
        const bookGenre = booksLibrary[i].genre;
        const bookTitle = booksLibrary[i].name;
        let bookLikes; if (likesMemory[i] === undefined || likesMemory[i] === null) {
            bookLikes = { isLiked: false, currentLikes: booksLibrary[i].likes };
        } else {
            bookLikes = likesMemory[i];
        };
        let initLikeImg;
        if (bookLikes.isLiked) {
            initLikeImg = './assets/images/heart-solid-full.svg';
        } else {
            initLikeImg = './assets/images/heart-regular-full.svg';
        };
        const bookAuthor = booksLibrary[i].author;
        const bookPublishedYear = booksLibrary[i].publishedYear;
        const bookPrice = booksLibrary[i].price;
        const bookPosition = booksLibrary[i];

        booksBlock.innerHTML += `
        <article class="books_block" id="book-${i}">
                <header class="books_block_header">
                    <h4 class="book_genre">${bookGenre}</h4>
                    <img class="book_img" src="./assets/images/book_visual_compressed.jpg" alt="Foto von Jaredd Craig on Unsplash">
                </header>
                <main class="books_block_content">
                    <div class="likes_wrapper">
                        <p class="likes_number likes_number-${i}">${bookLikes.currentLikes}</p>
                        <button onclick="toggleLikeBtn(${i})" id="like_btn-${i}" class="like_btn" aria-pressed="${bookLikes.isLiked}" aria-label="Gefällt mir"><img class="like_icon like_icon-${i}" src="${initLikeImg}" alt=""></button> 
                    </div>
                    <h4 class="book_name">${bookTitle}</h4>
                    <p class="book_author">${bookAuthor}</p>
                    <p class="book_published_year">${bookPublishedYear}</p>
                    <p class="book_price">€ ${bookPrice}</p>
                </main>
                <footer>
                    <h3>Kommentare</h3>
                    <div class="comment_wrapper"><ul>${loadBookComments(i)}</ul></div>
                    <form action="">                        
                        <input class="comment_input_field" type="text">
                        <button class="send_btn"><img src="./assets/images/paper-plane-regular-full.svg" alt=""></button>
                    </form>
                </footer>
            </article>
            `
    }
};

function loadBookComments(bookIndex) {

    let bookComments = booksLibrary[bookIndex].comments;
    let booksCommentsHTML = "";
    for (let commentIndex = 0; commentIndex < bookComments.length; commentIndex++) {
        const bookCommentUser = bookComments[commentIndex].name;
        const bookCommentContent = bookComments[commentIndex].comment;

        booksCommentsHTML += `
            <li class="comment_content"><span>${bookCommentUser} :</span> <p>${bookCommentContent}</p></li>
            `;
    };
    return booksCommentsHTML;
}

// klickbares Like button der Anzahl der Likes um 1 ändert

// Kommentare anzeigen
// Kommentare schreiben und speichern können (Notizblock!!)