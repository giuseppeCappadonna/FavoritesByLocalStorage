# FavoritesByLocalStorage

## Descrizione
**FavoritesByLocalStorage** è un'applicazione web che consente agli utenti di aggiungere e gestire una lista di prodotti preferiti utilizzando il Local Storage del browser. L'applicazione è composta da due pagine principali: una pagina di prodotti e una pagina dedicata ai preferiti. Gli utenti possono aggiungere o rimuovere prodotti dai preferiti, e i dati vengono salvati localmente nel browser per essere persistenti tra le sessioni.

## Funzionalità principali
- **Aggiunta ai preferiti**: Gli utenti possono aggiungere prodotti ai preferiti cliccando sul pulsante "Add Favorites".
- **Rimozione dai preferiti**: Gli utenti possono rimuovere prodotti dai preferiti sia dalla pagina dei prodotti che dalla pagina dei preferiti.
- **Gestione dei preferiti**: I preferiti vengono salvati nel Local Storage del browser, garantendo la persistenza dei dati.
- **Visualizzazione dei preferiti**: La pagina "Preferiti" mostra tutti i prodotti salvati come preferiti.
- **Eliminazione completa**: Gli utenti possono eliminare tutti i preferiti con un solo clic.

## Struttura del progetto
La struttura del progetto è organizzata come segue:

### File principali
- **`index.php`**: La pagina principale che mostra una lista di prodotti con la possibilità di aggiungerli ai preferiti.
- **`preferiti.php`**: La pagina che mostra i prodotti salvati come preferiti.
- **`res/js/app.js`**: Contiene la logica principale dell'applicazione, inclusa la gestione dei preferiti tramite Local Storage.
- **`res/scss/`**: Contiene i file SCSS per la gestione degli stili, che vengono compilati in `res/css/home.css`.

## Dettagli tecnici
### Logica JavaScript
- **Gestione dei preferiti**:
  - I prodotti vengono identificati tramite un attributo `data-id`.
  - I preferiti vengono salvati come array di ID nel Local Storage.
  - Funzioni principali:
    - `addFavorites(card)`: Aggiunge un prodotto ai preferiti.
    - `removeFavorites(card)`: Rimuove un prodotto dai preferiti.
    - `getLocalFavorites()`: Recupera i preferiti dal Local Storage.
    - `setLocalFavorites(favorites)`: Salva i preferiti nel Local Storage.
    - `deleteFavorites()`: Elimina tutti i preferiti dal Local Storage.
- **Aggiornamento dell'interfaccia**:
  - La funzione `updatesGuiFav()` aggiorna la GUI per riflettere lo stato dei preferiti.
  - La funzione `loadFavoritesOnPage()` carica i preferiti nella pagina "Preferiti".

### Stili
- Gli stili sono definiti in SCSS e compilati in CSS.
- Il file `_var.scss` contiene variabili per colori, font e dimensioni.
- Il file `_general.scss` definisce stili globali e utility.
- Il file `home.scss` definisce gli stili specifici per la pagina.

## Come funziona
1. **Pagina Prodotti (`index.php`)**:
   - Mostra una lista di prodotti.
   - Gli utenti possono aggiungere o rimuovere prodotti dai preferiti.
2. **Pagina Preferiti (`preferiti.php`)**:
   - Mostra i prodotti salvati come preferiti.
   - Gli utenti possono rimuovere prodotti o eliminare tutti i preferiti.

## Requisiti
- Un browser moderno con supporto per Local Storage.
- Un server web per eseguire i file PHP.

## Autore
Creato da [Giuseppe Cappadonna](https://github.com/giuseppeCappadonna).
