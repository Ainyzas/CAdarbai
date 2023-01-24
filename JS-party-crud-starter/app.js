const form = document.querySelector("#create-update");
const formWrapper = document.querySelector(".form-wrapper");
const formHeading = document.querySelector("#form-heading");
const formSubmit = document.querySelector("#form-submit");
const createButton = document.querySelector("#create-button");

const handleUpdateGuest = guest => {
    formWrapper.style.display = "block";
    formHeading.textContent = "Update guest";
    formSubmit.textContent = "Update";
    form.name.value = guest.fullName;
    form.children.value = guest.children;
    form.attending.checked = guest.attending;
    form["plus-one"].checked = guest.plusOne;
    form["guest-id"].value = guest.guestId;
    form.addEventListener("submit", e => {
        e.preventDefault();
        const updatedGuest = {
            fullName: form.name.value,
            children: form.children.value,
            plusOne: form["plus-one"].checked,
            attending: form["attending"].checked,
        };
        updateGuest(form["guest-id"].value, updatedGuest);
        formWrapper.style.display = "none";
    });
};

const handlePostGuest = () => {
    createButton.style.visibility = "hidden";
    formWrapper.style.display = "block";
    formHeading.textContent = "Create guest";
    formSubmit.textContent = "Create";
    form.name.value = "";
    form.children.value = "0";
    form.attending.checked = true;
    form["plus-one"].checked = false;
    form.addEventListener("submit", e => {
        e.preventDefault();
        const guest = {
            fullName: form.name.value,
            children: form.children.value,
            plusOne: form["plus-one"].checked,
            attending: form["attending"].checked,
        };
        postGuest(guest);
        formWrapper.style.display = "none";
        createButton.style.visibility = "visible";
    });
};

async function createTableBody() {
    const tbody = document.querySelector("tbody");
    document.querySelector("tbody").innerHTML = "";

    const partyMembers = await getPartyMembers();

    partyMembers.forEach(guest => {
        const tr = document.createElement("tr");
        for (const key in guest) {
            if (key === "guestId") continue;
            const td = document.createElement("td");
            td.textContent = guest[key];
            tr.append(td);
        }
        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.classList = "btn btn-warning";
        updateButton.addEventListener("click", () => {
            handleUpdateGuest(guest);
        });
        tr.append(updateButton);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList = "btn btn-danger m-2 text-dark";
        deleteButton.addEventListener("click", () => {
            deleteGuest(guest.guestId);
        });
        tr.append(deleteButton);
        tbody.append(tr);
    });
}

createTableBody();

createButton.addEventListener("click", handlePostGuest);
