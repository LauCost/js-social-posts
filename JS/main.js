//Array di oggetti//Legge l'array di oggetti e li stampa in DOM
const post = [
    {
        id: 1,

        nomeImg: "PM",

        contenuto: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quos maxime praesentium consequatur vitae odit quod vero? Placeat consequatur iusto, reiciendis, assumenda quibusdam doloremque eius repudiandae ducimus quis beatae eum.`,

        immagine: "https://i.picsum.photos/id/235/300/150.jpg?hmac=pqOChsrlOT9osSgCbBO6w-hUXedcHMMHrCmOsZK183E",

        autore: "Phil Mangione",

        numeroLike: 80,

        dataCreazione: "21/01/2021"
    },

    {
        id: 2,

        nomeImg: "JW",

        contenuto: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quos maxime praesentium consequatur vitae odit quod vero? Placeat consequatur iusto, reiciendis, assumenda quibusdam doloremque eius repudiandae ducimus quis beatae eum.`,

        immagine: "https://i.picsum.photos/id/40/300/150.jpg?hmac=isDdgEQixAVlpGn5X68Md6TASzthjtAVxvKN0asYeA4",

        autore: "John Wick",

        numeroLike: 180,

        dataCreazione: "5/04/2021"
    },

    {
        id: 3,

        nomeImg: "GC",

        contenuto: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quos maxime praesentium consequatur vitae odit quod vero? Placeat consequatur iusto, reiciendis, assumenda quibusdam doloremque eius repudiandae ducimus quis beatae eum.`,

        immagine: "https://i.picsum.photos/id/796/300/150.jpg?hmac=u3RRUqpGvjaHMsiyS-v0sW4uZMi5R_L6wHckvxE379w",

        autore: "Giulio Cesare",

        numeroLike: 90,

        dataCreazione: "30/12/2021"
    },
]

//Legge l'array di oggetti e li stampa in DOM
for (i = 0; i < post.length; i++) {

    const socialPost = post[i]

    const elemento = `
    <div class="post">
            <div class="utente">
                <span class="img_utente">
                ${socialPost.nomeImg}
                </span>
                <p class="nome_tempo">
                    <span class="nome">
                        ${socialPost.autore}
                    </span> <br>
                    ${socialPost.dataCreazione}
                </p>
            </div>

            <div class="testo">
                <p>
                    ${socialPost.contenuto}
                </p>
            </div>

            <div class="img">
                <img src="${socialPost.immagine}"
                    alt="img">
            </div>

            <div class="like">
                <a class="like_bottone" href="#" data_post="${socialPost.id}">
                    <i class="fas fa-thumbs-up"></i> Mi piace
                </a>

                <p class="piace">
                    Piace a <span id="numero_${socialPost.id}"> ${socialPost.numeroLike} </span> persone
                </p>
            </div>
    `
    //Seleziona il container dove stampare gli array
    const container = document.querySelector(".container")

    //Stampa in DOM
    container.innerHTML += elemento

}

//Seleziona i bottoni dei likes
const likeBottoni = document.getElementsByClassName("like_bottone");

//Legge la costante dei bottoni
for (i = 0; i < likeBottoni.length; i++) {

    //Assegnia una costante per ogni bottone
    const likeBottone = likeBottoni[i];

    //Creamo un evento quando si clicca sul bottone
    likeBottone.addEventListener(`click`, premereLike)
}

//Funzione che serve ad assegnare la classe like_attivo quando si clicca ed incrementa i like di 1
function premereLike() {
    //Verifica se il bottone cliccato ha gia la classe like_attivo
    if (this.classList.contains("like_attivo")) {

        return;
    }

    //Aggiunge la classe like_attivo
    this.classList.add("like_attivo");

    //Seleziona l'id del posto e lo assegna ad una costante
    const postId = this.getAttribute("data_post");

    /* console.log(postId); */

    //Seleziona il numero dei like e lo assegna ad una costante
    const numeroLike = document.getElementById("numero_" + postId)

    //Incrementa di 1 e stampa i like del post
    numeroLike.innerHTML = Number(numeroLike.innerHTML) + 1
}
