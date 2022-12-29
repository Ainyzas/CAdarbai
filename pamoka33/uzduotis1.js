// Task 1

{
    const items = [
        {
            name: "Item 1",
            price: 10,
            imgUrl: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
        },
        {
            name: "Item 2",
            price: 20,
            imgUrl: "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
        },
        {
            name: "Item 3",
            price: 30,
            imgUrl: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            name: "Item 4",
            price: 40,
            imgUrl: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        },
        {
            name: "Item 5",
            price: 50,
            imgUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
        },
    ];

    const table = document.querySelector("table");
    const nameInput = document.querySelector("input#itemName");
    const priceInput = document.querySelector("input#itemPrice");
    const imgInput = document.querySelector("input#itemImg");
    const addButton = document.querySelector("button#add");
    const removeAllButton = document.querySelector("button#remove");

    displayInitial();

    function displayInitial() {
        for (let i = 0; i < items.length; i++) {
            createTableRow(items[i]);
        }
    }

    addButton.addEventListener("click", executeAdd);

    function executeAdd(e) {
        e.preventDefault();
        const name = nameInput.value;
        const price = priceInput.value;
        const imgUrl = imgInput.value;

        const item = {
            name,
            price,
            imgUrl,
        };

        const check = document.querySelectorAll("tr");

        if (check.length === 1) {
            removeAllButton.classList.toggle("invisible");
        }
        createTableRow(item);
        clear();
    }

    removeAllButton.addEventListener("click", executeRemoveAll);

    function executeRemoveAll(e) {
        e.preventDefault();
        const tableItems = document.querySelectorAll("tr");
        for (let i = 1; i < tableItems.length; i++) {
            tableItems[i].remove();
        }
        removeAllButton.classList.toggle("invisible");
    }

    function clear() {
        nameInput.value = "";
        priceInput.value = "";
        imgInput.value = "";
    }

    function createTableRow(items) {
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        tdName.textContent = items.name;
        const tdPrice = document.createElement("td");
        tdPrice.textContent = items.price;
        const tdImg = document.createElement("td");
        const image = document.createElement("img");
        image.setAttribute("src", items.imgUrl);
        image.setAttribute("alt", "Bad link inserted");
        tdImg.append(image);
        const remove = document.createElement("td");
        const removeButton = document.createElement("button");
        remove.append(removeButton);
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", () => {
            tr.remove();
            const tableRows = document.querySelectorAll("tr");
            if (tableRows.length === 1) {
                removeAllButton.classList.toggle("invisible");
            }
        });

        tr.append(tdName, tdPrice, tdImg, remove);
        table.append(tr);
    }
}
