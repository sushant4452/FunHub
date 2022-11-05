var after = "";

function fetchMemes() {
 // color();
 console.log('button was clicked');
  if (document.getElementById("memes")) {
    document.getElementById("memes").remove();
  }

  let parentdiv = document.createElement("div");
  parentdiv.id = "memes";
  fetch(`https://www.reddit.com/r/memes.json?after=${after}`)
    .then((response) => response.json())
    .then((body) => {
      after = body.data.after;
      console.log(body.data.children);
      for (let index = 0; index < body.data.children.length; index++) {
        if (body.data.children[index].data.post_hint === "image") {
          let div = document.createElement("div");
          let h4 = document.createElement("h4");
          let image = document.createElement("img");
          image.src = body.data.children[index].data.url_overridden_by_dest;
          h4.textContent = body.data.children[index].data.title;
          div.appendChild(h4);
          div.appendChild(image);
          parentdiv.appendChild(div);
        }
      }
      document.body.appendChild(parentdiv);
    })
    .catch((e) => {
      console.log(e);
    });
}




const button = document.querySelector(".container button");
const jokeDiv = document.querySelector(".container .joke p");

document.addEventListener("DOMContentLoaded", getJock);

button.addEventListener("click", getJock);

async function getJock() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });
  const jokeObj = await jokeData.json();
  jokeDiv.innerHTML = jokeObj.joke;
  console.log(jokeData);
}
// *********************
// This Code is for only the floating card in right bottom corner
// **********************

const touchButton = document.querySelector(".float-text");
const card = document.querySelector(".float-card-info");
const close = document.querySelector(".gg-close-r");

touchButton.addEventListener("click", moveCard);
close.addEventListener("click", moveCard);

function moveCard() {
  card.classList.toggle("active");
}