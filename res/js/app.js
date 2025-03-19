// GENERAL
// -------------
let isDebug = true;
let pageId = document.body.getAttribute("data-pageId");

document.addEventListener('DOMContentLoaded', function() {
    if(pageId === 'preferiti'){
        loadFavoritesOnPage();
    }else{
        loadBtnLogic();
    }
    updatesGuiFav(); 
});

window.addEventListener('load', function () {
    console.log('\n\n Page:' + pageId + ' | All resources loaded!');
    console.log('🚀 Welcome By Giuseppe Cappadonna | Aco Web Solutions \n\n');
});

// BTN LOGIC
// -------------
function loadBtnLogic(){
    let cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        let favBtn = card.querySelector('.favorite-btn');
        favBtn.addEventListener('click', function() {
            if (!card.classList.contains('added')) {
                addFavorites(this.closest('.card'));
            } else {
                removeFavorites(this.closest('.card'));
            }
            updatesGuiFav();
        });
    });
}

// LOCAL STORAGE LOGIC
// -------------

// funzione che aggiorna la GUI
function updatesGuiFav() {
    printFavorites();
    printLog("Aggiorno la GUI");
    let cards = document.querySelectorAll(".card");
    let favorites = getLocalFavorites();
    cards.forEach(card => {
        let cardFavId = card.getAttribute('data-id');
        if (favorites.includes(cardFavId) && !card.classList.contains('added')) {
            card.classList.add('added');
            printLog("Accendo GUI: " + cardFavId);      
        } else if (!favorites.includes(cardFavId) && card.classList.contains('added')) {
            card.classList.remove('added');
            printLog("Spengo GUI: " + cardFavId);    
        }
    });
}

// aggiungi id
function addFavorites(card) {
    let favId = card.getAttribute('data-id');
    let favorites = getLocalFavorites();
    printLog("Favorites: " + favorites);
    if (!favorites.includes(favId)) {
        favorites.push(favId);
        printLog("Inserisco: " + favId);
    }
    setLocalFavorites(favorites);
}

// togli id
function removeFavorites(card) {
    let favId = card.getAttribute('data-id');
    let favorites = getLocalFavorites();
    printLog("Favorites prima: " + favorites);
    
    if (favorites.includes(favId)) {
        printLog("Rimuovo: " + favId);
        favorites = favorites.filter(id => id !== favId);
        printLog("Favorites dopo: " + favorites);
        if(pageId === 'preferiti'){
            card.remove();
        }
    }
    setLocalFavorites(favorites);
}

// funzione che salva nei Local Storage
function setLocalFavorites(favorites) {
    printLog("Salvo nel Local Storage");
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// ottiene array con tutti gli id dei preferiti, se non esiste torna []
function getLocalFavorites() {
    let favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
}

// funzione per stampare tutti gli ID salvati
function printFavorites() {
    let favorites = getLocalFavorites();
    console.log("ID salvati nei preferiti:", favorites);
}

// funzione che elimina il Local Storage
function deleteFavorites() {
    localStorage.removeItem('favorites');
}

// GET LOCAL STORAGE LOGIC
// ------------------------

function loadFavoritesOnPage() {
    printLog("Carico i preferiti nella pagina");
    let favoriteItemsCont = document.querySelector("#items .flex-cont");
    let favorites = getLocalFavorites();
    
    favoriteItemsCont.innerHTML = ""; //reset

    if (favorites.length > 0) {
        favorites.forEach(codFav => {
            let card = `
                <div class="card" data-id="${codFav}">
                    <div class="img-container">
                        <img class="phone" src="https://ariskost.github.io/images-for-test-projects/galaxy-s23-ultra.png" alt="Samsung Galaxy S23 Ultra">
                    </div>
                    <div class="container">
                        <h1>${codFav} - Lorem ipsum</h1>
                        <h3 class="price">1,449.<small>00</small>&euro;</h3>
                        <a href="#" class="favorite-btn">remove Favorite</a>
                    </div>
                </div>
            `;
            favoriteItemsCont.innerHTML += card;
        });
        loadBtnLogic();
    } else {
        favoriteItemsCont.innerHTML = "<h5>Nessun Preferito</h5>";
    }
}

// debug logic
// -----------
function printLog(info) {
    if (isDebug) {
        console.log(info);
    }
}

document.querySelectorAll(".deleteFavorites").forEach(btn => {
    btn.addEventListener('click', function(event) {
        console.log("## Elimino i preferiti");
        event.preventDefault();
        deleteFavorites();
        updatesGuiFav();
        if(pageId === 'preferiti'){
            loadFavoritesOnPage();
        }
    });
});
