const modal = document.querySelector('#modal');
const btn = document.querySelector('#openModal');
const close = document.querySelector('.close');

btn.onclick = function () {
  modal.style.display = 'block';
};

close.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};



let inc = document.querySelector("#inc");
    let dec = document.querySelector("#dec");
    let counter = document.querySelector("#counter");
    let value = 0;
    counter.textContent = value


        inc.onclick = () => {
            value++;
            counter.textContent = value
}

        dec.onclick = () => {
            if (value > 0) {
                value--;
                counter.textContent = value
            }
}





