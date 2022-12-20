const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const container = document.getElementsByClassName("container");

let init = 0;

const botSay = (data) => {
  return [
    "Haii, Nama Saya Hidan. Siapa Nama Kamu??",
    `Halo ${data?.nama}, berapa usia kamu?`,
    `Kamu ${data?.usia} tahun, hobi kamu apa yaaa?`,
    `Samaaa dongg aku juga hobi ${data?.hobi}, btw kamu punya pacarr?`,
    `Ohhh kamu ${data?.pacar}, ya udahh kalo begituu. udahann yaa?`,
  ];
};
pertanyaan.innerHTML = botSay()[0];

function botStart() {
  if (jawaban.value.length < 1) return alert("ISI JAWABAN TERLEBIH DAHULU");

  init++;

  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  container[0].style.filter = "blur(8px)";
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
    container[0].style.filter = "none";
  }, [500]);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = "Thank u udah main ke BotHidan";
  jawaban.value = "";
}

function botEnd() {
  window.location.reload();
}
