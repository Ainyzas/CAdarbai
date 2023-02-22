const form = document.querySelector('.create-user');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const emailInput = document.querySelector('#email');
const membershipSelect = document.querySelector('#membership-select');

const PORT = 'http://127.0.0.1:3000/';

async function getMemberships() {
  const res = await fetch(PORT + 'memberships');
  const data = await res.json();
  data.forEach((membership) => {
    const option = document.createElement('option');
    option.value = membership.name;
    option.innerText = membership.name;
    membershipSelect.append(option);
  });
}

getMemberships();

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await fetch(PORT + 'users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: nameInput.value,
      surname: surnameInput.value,
      email: emailInput.value,
      membershipSelect: membershipSelect.value,
    }),
  });
  const sentData = await res.json();
  console.log(JSON.stringify(sentData));
  window.location.assign('./userView.html');
});
