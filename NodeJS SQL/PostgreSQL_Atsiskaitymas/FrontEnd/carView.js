const main = document.querySelector('.flex-wrap');

const URL = 'http://127.0.0.1:3000/cars';

async function getData() {
  const res = await fetch(URL);
  const data = await res.json();

  main.innerHTML = '';

  data.forEach((car) => generateCar(car));
}

function generateCar(car) {
  const CarCard = document.createElement('div');

  const carName = document.createElement('h2');
  carName.textContent = car.title;

  const carImage = document.createElement('img');
  carImage.src = car.image;

  const carPrice = document.createElement('h2');
  carPrice.textContent = '$' + car.price;

  const carPlate = document.createElement('h2');
  carPlate.textContent = car.numberplates;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  const carId = car.id;
  deleteButton.addEventListener('click', () => {
    deleteButtonHandler(carId);
  });

  CarCard.append(carName, carImage, carPrice, carPlate, deleteButton);
  main.append(CarCard);
}

async function deleteButtonHandler(id) {
  const res = await fetch(URL + `/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(res);
  getData();
}

getData();
