<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preferiti</title>
    <link rel="stylesheet" href="/res/css/home.css">
</head>
<body data-pageId="preferiti_GET">
    <header>
        <a href="index.php" class="logo">Preferiti GET</a>
        <div class="mean-toggle"></div>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a class="deleteFavorites">X Clear Favorites</a></li>
            </ul>
        </nav>
        <div class="clear"></div>
    </header>


    <?php
        if (isset($_GET['favorites'])) {
            $favorites = json_decode($_GET['favorites'], true);
            
            if (is_array($favorites)) {
            echo ' <section id="items" class="max-w pdg">
                    <div class="flex-cont">';
                    foreach ($favorites as $fav) {
                        echo '<div class="card" data-id="'.htmlspecialchars($fav).'">';
                        echo '  <div class="img-container">
                                    <img class="phone" src="https://ariskost.github.io/images-for-test-projects/galaxy-s23-ultra.png" alt="Samsung Galaxy S23 Ultra">
                                 </div>
                                <div class="container">';
                        echo "  <h1>" . htmlspecialchars($fav) . " - Lorem ipsum</h1>";
                        echo '  <h3 class="price">1,449.<small>00</small>&euro;</h3>
                                <a href="#" class="favorite-btn">Add Favorites</a> 
                                </div> </div> ';
                    }
            echo    '</div>
                </section>';
            } else {
                echo "<p>Errore nella decodifica dei dati</p>";
            }
        } else {
            echo "<p>Nessun preferito ricevuto</p>";
        }
    ?>




    <footer>
        <p>&copy; 2025 <a href="https://github.com/giuseppeCappadonna">GH: @giuseppeCappadonna</a>. Tutti i diritti riservati.</p>
    </footer>
</body>
<script src="res/js/app.js"></script>
</html>
