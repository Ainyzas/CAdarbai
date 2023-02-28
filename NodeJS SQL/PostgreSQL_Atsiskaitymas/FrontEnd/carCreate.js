const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const imageInput = document.querySelector('#image');
const priceInput = document.querySelector('#price');
const plateInput = document.querySelector('#numberplate');

const URL = 'http://127.0.0.1:3000/cars';

form.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: nameInput.value,
        image: imageInput.value,
        price: priceInput.value,
        numberplates: plateInput.value,
      }),
    });
    const sentData = await res.json();
    console.log(JSON.stringify(sentData));
    window.location.assign('./carView.html');
  } catch (error) {
    console.log(error);
  }
});
