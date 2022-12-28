// Task 1

{
    const Name = document.querySelector("input#name");
    const age = document.querySelector("input#age");
    const gender = document.querySelectorAll(`input[type="radio"]`);
    const address = document.querySelector("input#address");
    const form = document.querySelector("form");

    let p = document.createElement("p");
    form.append(p);

    function submitData(event) {
        event.preventDefault();
        let selected;
        for (let i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                selected = `${gender[i].id}`;
            }
        }
        p.innerText = `Name: ${Name.value}\nAge: ${age.value}\nGender: ${selected}\nAddress: ${address.value}\n`;
    }

    form.addEventListener("submit", submitData);
}

// Task 2

{
    const bTitle = document.querySelector("input#bookTitle");
    const bDesc = document.querySelector("#bookDesc");
    const mTitle = document.querySelector("input#movieTitle");
    const mDesc = document.querySelector("#movieDesc");
    const form = document.querySelector("#book");

    let p = document.createElement("p");
    form.append(p);

    function submitData(event) {
        event.preventDefault();
        p.innerText = `Book Title: ${bTitle.value}\nBook Description: ${bDesc.value}\n\nMovie Title: ${mTitle.value}\nMovie Description: ${mDesc.value}\n`;
    }

    form.addEventListener("submit", submitData);
}
