const buttonLoad = document.getElementsByClassName("btn-primary")[0];
const buttonLoadSecondo = document.getElementsByClassName("btn-secondary")[0];

let myUrl;

const loadImg = function () {
  fetch(myUrl, {
    headers: {
      Authorization: "0FIfX7sb1ZzPMN2uUDS2O18i1dZ2gPbh32q0aMi4KjrrDCztrMPCawqK",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("DATI RICEVUTI CORRETTAMENTE");
        return response.json();
      } else {
        alert("ERRORE NELLA RICEZIONE DEI DATI");
        throw new Error("ERRORE NELLA RICEZIONE DEI DATI");
      }
    })
    .then((img) => {
      console.log("DATI RICEVUTI DA SERVER", img);
      const imgPresenti = document.querySelectorAll(".bd-placeholder-img");
      if (img.photos.length === imgPresenti.length) {
        img.photos.forEach((photo, i) => {
          const imgPresentiAll = imgPresenti[i];
          if (imgPresentiAll) {
            imgPresentiAll.removeAttribute("src");

            const imageUrl = photo.src.medium;

            imgPresentiAll.setAttribute("src", imageUrl);
          } else {
            alert("NESSN IMMAGINE DA SOSTITUIRE");
          }
        });
      } else {
        alert("ERRORE: NUMERO DI IMMAGINI NON COINCIDE");
      }
    })
    .catch((error) => {
      console.log(error, "ERRORE NELLA RICEZIONE DELLA RISPOSTA DAL SERVER");
      alert("comunicazione con il server NON RIUSCITA");
    });
};

buttonLoad.addEventListener("click", function (e) {
  e.preventDefault();
  myUrl = "https://api.pexels.com/v1/search?query=gecko&per_page=9";
  loadImg();
});

buttonLoadSecondo.addEventListener("click", function (e) {
  e.preventDefault();
  myUrl = "https://api.pexels.com/v1/search?query=shark&per_page=9";
  loadImg();
});

/////////////////// BOTTONI MAIN ////////////////////////////
const bottoneHide = function () {
  const bottoniEdit = document.querySelectorAll(
    ".btn-group > button:nth-of-type(2)"
  );
  bottoniEdit.textContent = "hide";
  bottoniEdit.forEach((button) => {
    button.textContent = "Hide";
    button.classList.add("bg-danger", "text-white");

    button.addEventListener("click", function (e) {
      e.preventDefault();
      const card = this.closest(".col-md-4");
      card.classList.add("d-none");
    });
  });
};
bottoneHide();

const bottoneShow = function () {
  const buttonShow = document.getElementById("showHidden");

  buttonShow.addEventListener("click", function (e) {
    e.preventDefault();
    const cards = document.querySelectorAll(".col-md-4");

    cards.forEach((card) => {
      card.classList.remove("d-none");
    });
  });
};
bottoneShow();

const cambiaTestoMuted = function (img) {
  const noveMin = document.querySelectorAll(".text-muted");
  noveMin.forEach((testo, i) => {
    const id = img.photos[i].id; // Accedi all'id della foto corrente
    testo.textContent = id;
  });
}.then((img) => {
  console.log("Risposta dalla fetch:", img);
  // ... il resto del tuo codice
});
cambiaTestoMuted();
