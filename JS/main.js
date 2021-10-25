
const post = [
    {
        id: 1,

        nomeImg: "PM",

        contenuto: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quos maxime praesentium consequatur vitae odit quod vero? Placeat consequatur iusto, reiciendis, assumenda quibusdam doloremque eius repudiandae ducimus quis beatae eum.`,

        immagine: "https://i.picsum.photos/id/235/300/150.jpg?hmac=pqOChsrlOT9osSgCbBO6w-hUXedcHMMHrCmOsZK183E",

        autore: "Phil Mangione",

        numeroLike: 80,

        dataCreazione: "2 mesi fa"
    },

    {
        id: 2,

        nomeImg: "JW",

        contenuto: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quos maxime praesentium consequatur vitae odit quod vero? Placeat consequatur iusto, reiciendis, assumenda quibusdam doloremque eius repudiandae ducimus quis beatae eum.`,

        immagine: "https://i.picsum.photos/id/40/300/150.jpg?hmac=isDdgEQixAVlpGn5X68Md6TASzthjtAVxvKN0asYeA4",

        autore: "John Wick",

        numeroLike: 180,

        dataCreazione: "3 mesi fa"
    },

    {
        id: 3,

        nomeImg: "GC",

        contenuto: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quos maxime praesentium consequatur vitae odit quod vero? Placeat consequatur iusto, reiciendis, assumenda quibusdam doloremque eius repudiandae ducimus quis beatae eum.`,

        immagine: "https://i.picsum.photos/id/796/300/150.jpg?hmac=u3RRUqpGvjaHMsiyS-v0sW4uZMi5R_L6wHckvxE379w",

        autore: "Giulio Cesare",

        numeroLike: 90,

        dataCreazione: "4 mesi fa"
    },
]


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

    const container = document.querySelector(".container")

    container.innerHTML += elemento

}

const likeBottoni = document.getElementsByClassName("like_bottone");

for (i = 0; i < likeBottoni.length; i++) {

    const likeBottone = likeBottoni[i];

    likeBottone.addEventListener(`click`, premereLike)
}

function premereLike() {
    if (this.classList.contains("like_attivo")) {
        return;
    }
    this.classList.add("like_attivo");

    const postId = this.getAttribute("data_post");

    /* console.log(postId); */

    const numeroLike = document.getElementById("numero_" + postId)

    numeroLike.innerHTML = Number(numeroLike.innerHTML) + 1
}
