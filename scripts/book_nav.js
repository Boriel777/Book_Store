// navigation Links

function loadNavigation() {
    let navContainer = document.getElementById('library_nav');
    navContainer.innerHTML = getNavLinks();
}

function getNavLinks() {

    let navLink = "";

    for (let i = 0; i < booksLibrary.length; i++) {
        const bookPosition = booksLibrary[i];
        const bookName = booksLibrary[i].name;
        
        navLink += `<li><a href="#book-${i}">${bookName}</a></li>`
    }
    return navLink
}
