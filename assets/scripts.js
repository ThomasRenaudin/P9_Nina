// 1. Cette ligne commence une fonction qui sera exécutée lorsque le document HTML est complètement chargé.
$(document).ready(function() {

    // 2. Cette ligne sélectionne tous les éléments HTML ayant la classe "gallery" et applique le plugin "mauGallery" sur eux.
    $('.gallery').mauGallery({

        // 3. Cette section définit le nombre de colonnes pour différents points de rupture d'écran (responsive).
        columns: {
            xs: 1, // Pour les écrans extra petits (xs), une seule colonne.
            sm: 2, // Pour les petits écrans (sm), deux colonnes.
            md: 3, // Pour les écrans moyens (md), trois colonnes.
            lg: 3, // Pour les grands écrans (lg), trois colonnes.
            xl: 3  // Pour les très grands écrans (xl), trois colonnes.
        },

        // 4. Active la fonctionnalité de lightbox pour afficher des images en grand format.
        lightBox: true,

        // 5. Identifiant HTML de l'élément qui sera utilisé comme boîte de lumière (lightbox).
        lightboxId: 'myAwesomeLightbox',

        // 6. Active l'affichage des tags pour les images (étiquettes associées aux images).
        showTags: true,

        // 7. Définit la position des étiquettes (tags) par rapport aux images. Dans ce cas, elles sont affichées en haut.
        tagsPosition: 'top'
    });
});
