const PORT = 'http://127.0.0.1:3000/products/';
const mainDiv = document.querySelector('#flex-wrap');
const buttonDiv = document.querySelector('#buttons');

async function getProducts(page) {
  const res = await fetch(PORT + `paginate?page=${page}&size=3`);
  const data = await res.json();

  clearMain();
  data.data.forEach((product) => {
    generateProduct(product);
  });
  generatePageButtons(data.totalPages);
}

function generatePageButtons(amount) {
  for (let i = 0; i < amount; i++) {
    const button = document.createElement('button');
    button.textContent = i + 1;
    button.id = i + 1;
    buttonDiv.append(button);
    button.addEventListener('click', pageButtonHandler);
  }
}

function pageButtonHandler(e) {
  const id = e.target.id;
  console.log(id);
  getProducts(id);
}

function clearMain() {
  mainDiv.innerHTML = '';
  buttonDiv.innerHTML = '';
}

function generateProduct(product) {
  const containerDiv = document.createElement('div');

  const name = document.createElement('h3');
  name.textContent = product.name;
  const description = document.createElement('p');
  description.textContent = product.description;
  const price = document.createElement('h4');
  price.textContent = product.price;

  containerDiv.append(name, description, price);
  mainDiv.append(containerDiv);
}

getProducts(1);
