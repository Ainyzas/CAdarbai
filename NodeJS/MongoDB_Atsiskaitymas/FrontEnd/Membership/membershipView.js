const membershipDiv = document.querySelector('#memberships');

const PORT = 'http://127.0.0.1:3000/memberships';

async function getMemberships() {
  try {
    membershipDiv.innerHTML = '';
    const res = await fetch(PORT);
    const data = await res.json();

    data.forEach((entry) => {
      const membershipCard = document.createElement('div');
      membershipCard.classList.add('msCard');

      const priceAndName = document.createElement('h2');
      priceAndName.textContent = `$${entry.price} ${entry.name}`;

      const description = document.createElement('p');
      description.textContent = entry.description;

      const deleteTab = document.createElement('div');
      const deleteButton = document.createElement('button');

      const deleteIcon = document.createElement('i');
      deleteIcon.classList.add('fa', 'fa-trash');
      deleteButton.append(deleteIcon);

      let membershipId = entry._id;
      let membershipUsers = entry.users;

      deleteButton.addEventListener('click', () => {
        handleDeleteMembership(membershipId, membershipUsers);
      });

      deleteTab.append(deleteButton);
      membershipCard.append(priceAndName, description, deleteTab);
      membershipDiv.append(membershipCard);
    });
  } catch (e) {
    console.log(e);
  }
}

async function handleDeleteMembership(membershipId, membershipUsers) {
  if (!membershipUsers.length) {
    const res = await fetch(PORT + `?id=${membershipId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res;
    console.log(data);
  } else {
    alert('you cannot delete membership that has active users');
  }
  getMemberships();
}

getMemberships();
