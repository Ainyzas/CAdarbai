const userDiv = document.querySelector('#users');
const spanOrder = document.querySelector('#order');
let order = 'asc';

const PORT = 'http://127.0.0.1:3000/';

async function getUsers(order) {
  try {
    userDiv.innerHTML = '';
    const userRes = await fetch(PORT + `users?order=${order}`);
    const userData = await userRes.json();

    userData.forEach((user) => {
      const fullName = document.createElement('h3');
      fullName.textContent = `${user.name} ${user.surname}`;
      fullName.classList.add('fullname');

      const email = document.createElement('h3');
      const emailSpan = document.createElement('span');
      emailSpan.textContent = user.email;
      email.textContent = 'Email Address: ';
      email.append(emailSpan);

      const membership = document.createElement('h3');
      const membershipSpan = document.createElement('span');
      membershipSpan.textContent = user.membershipId.name;
      membership.textContent = 'Membership: ';
      membership.append(membershipSpan);

      const userCard = document.createElement('div');
      userCard.append(fullName, email, membership);
      userDiv.append(userCard);
    });
  } catch (e) {
    console.log(e);
  }
}

spanOrder.addEventListener('click', () => {
  if (spanOrder.textContent === 'ASC') {
    order = 'desc';
    spanOrder.textContent = 'DESC';
  } else {
    order = 'asc';
    spanOrder.textContent = 'ASC';
  }
  getUsers(order);
});

getUsers(order);
