const POST_ENDPOINT = 'http://127.0.0.1:3000/pets';
const nameInput = document.querySelector('#name-input');
const ageInput = document.querySelector('#age-input');
const typeSelect = document.querySelector('#type-selection');

document.querySelector('button').addEventListener('click', async () => {
  const name = nameInput.value;
  const age = +ageInput.value;
  const type = typeSelect.value;

  const res = await fetch(POST_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({
      name,
      age,
      type,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await res.json();
  console.log(resData);
});
