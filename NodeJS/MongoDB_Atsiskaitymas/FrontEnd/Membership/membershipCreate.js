const form = document.querySelector('.create-membership');
const nameInput = document.querySelector('#name');
const priceInput = document.querySelector('#price');
const descriptionInput = document.querySelector('#description');

const PORT = 'http://127.0.0.1:3000/memberships';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await fetch(PORT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: nameInput.value,
      price: priceInput.value,
      description: descriptionInput.value,
    }),
  });
  const sentData = await res.json();
  console.log(JSON.stringify(sentData));
  window.location.assign('./membershipView.html');
});
