Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

var beginnings = [
    {sentence: "J'avais plus ", type: 0},
    {sentence: "J'étais à court ", type: 0},
    {sentence: "J'avais oublié de racheter ", type: 2},
    {sentence: "Je n'aime pas ", type: 1},
    {sentence: "Je trouve que ça n'a pas une jolie couleur ", type: 1},
    {sentence: "Je préfère éviter de manger ", type: 2},
    {sentence: "Je suis allergique ", type: 3},
    {sentence: "J'ai eu de mauvaises expériences avec ", type: 1},
    {sentence: "Mes enfants n'aiment pas ", type: 1},
    {sentence: "Mon chien avait mangé ", type: 1}
];

var ingredients = [
    {name: "poivrons", article: ["de ", "les ", "des ", "aux "]},
    {name: "sucre", article: ["de ", "le ", "du ", "au "]},
    {name: "semoule", article: ["de ", "la ", "de la ", "à la "]},
    {name: "huitres", article: ["d'", "les ", "des ", "aux "]},
    {name: "melons", article: ["de ", "les ", "des ", "aux "]},
    {name: "poivre", article: ["de ", "le ", "du ", "au "]},
    {name: "sardines", article: ["de ", "les ", "des ", "aux "]},
    {name: "oignons", article: ["d'", "les ", "des ", "aux "]},
    {name: "nutella", article: ["de ", "le ", "du ", "au "]},
    {name: "framboises", article: ["de ", "les ", "des ", "aux "]},
    {name: "sel", article: ["de ", "le ", "du ", "au "]},
    {name: "huile d'olive", article: ["d'", "l'", "de l'", "à l'"]},
    {name: "miel", article: ["de ", "le ", "du ", "au "]},
    {name: "jambon", article: ["de ", "le ", "du ", "au "]},
    {name: "truffes", article: ["de ", "les ", "des ", "aux "]},
    {name: "chocolat", article: ["de ", "le ", "du ", "au "]},
    {name: "saumon", article: ["de ", "le ", "du ", "au "]},
    {name: "marrons", article: ["de ", "les ", "des ", "aux "]}
];

var links = [
    {sentence: ", alors j'ai mis ", type: 2},
    {sentence: ", du coup j'ai mis ", type: 2},
    {sentence: ", j'ai préféré mettre ", type: 2},
    {sentence: ", j'ai remplacé par ", type: 2},
    {sentence: ", du coup j'ai remplacé par ", type: 2},
    {sentence: ", j'ai rajouté ", type: 2},
    {sentence: ", alors j'ai préféré y substituer ", type: 2},
    {sentence: ", je me suis dit que ce serait meilleur avec ", type: 2},
    {sentence: ", j'ai changé pour mettre ", type: 2}
];

var conclusions = [
    {sentence: ", mon Homme s'est régalé !"},
    {sentence: ", mon chéri a été soufflé !"},
    {sentence: ", les enfants ont adoré !"},
    {sentence: ", les enfants ont tout mangé !"},
    {sentence: ", les enfants en redemandent !"},
    {sentence: ", ma femme a beaucoup aimé !"},
    {sentence: ", ma femme n'en revenait pas !"},
    {sentence: ", c'était pas terrible ! 1 étoile !"},
    {sentence: ", c'était beaucoup trop salé."},
    {sentence: ", ça n'avait pas beaucoup de gout."},
    {sentence: ", je n'ai pas pu finir."},
    {sentence: ", c'était infect !"},
    {sentence: ", cette recette n'est pas terrible."}
];

$(document).ready(function () {
    createComment();

    $("#refresh-comment").click(function () {
        createComment();
    });
});

createComment = function () {
    var beginning   = beginnings.randomElement();
    var ingredient  = ingredients.randomElement();
    var link        = links.randomElement();
    var conclusion  = conclusions.randomElement();
    var ingredient2 = ingredients.filter(function (value) {
        return value.name != ingredient.name;
    }).randomElement();
    var image       = randomIntFromInterval(0, 20);

    var comment = beginning.sentence +
        ingredient.article[beginning.type] +
        ingredient.name +
        link.sentence +
        ingredient2.article[link.type] +
        ingredient2.name +
        conclusion.sentence;

    $('#marmiton-comment').html(comment);
    $('#marmiton-image').html("<img src='img/illustrations/" + image + ".jpg'>");
};