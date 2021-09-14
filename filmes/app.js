
async function nome() {
  const url = 'http://localhost:7070/todos';
  const fetchFilme = await fetch (url);
  const response = await fetchFilme.json();


  response.map((item) => {
      document.querySelector('.filmesArea').innerHTML += `
        <div class="filme">
            <div class="filmePoster">
                <img src="${item.poster}" alt="">
            </div>
            <div class="tituloFilme">
                <h2>${item.titulo}</h2>
            </div>
            <div class="descricao">
                <p>${item.descricao.substr(0, 300).trimEnd()}...</p>
            </div>
        </div>
      `
  });

  document.querySelectorAll(".filme").forEach(filme => filme.addEventListener("click", createRemove));



}

nome();


const createRemove = (event) => {

    if(document.querySelector(".area-botao") != null) {
        document.querySelectorAll(".area-botao").forEach(butao => butao.remove());
    }
    
    const buttonArea = document.createElement("div");
    const button = document.createElement("button");

    buttonArea.classList.add("area-botao");
    button.classList.add("botao");

    button.innerText = "Remover";

    buttonArea.append(button);

    event.currentTarget.append(buttonArea);

    selectedMovie(event.currentTarget);
    
    document.querySelector(".filme[data-active=true] .botao").addEventListener("click", deleteReq);
    
    return buttonArea;

}

const selectedMovie = (filme) => {
    document.querySelectorAll(".filme").forEach(nome => nome.removeAttribute('data-active'));
    filme.setAttribute('data-active', true)
}

const deleteReq = async (event) => {
    event.preventDefault();

    let filmeSelecionado = event.currentTarget.closest(".filme");

    let id_filmeSelecionado = Array.from(document.querySelectorAll(".filme")).indexOf(filmeSelecionado) + 1;

    console.log(id_filmeSelecionado);

    let url = `http://localhost:7070/delete/${id_filmeSelecionado}`
    await fetch(url, {
        method: "DELETE",
    });
    
    deleteMovie();
    
}

const deleteMovie = () => {
    document.querySelector(".filme[data-active=true]").remove();
}







