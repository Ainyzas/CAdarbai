const BASE_URL = "https://kaker-js-crud.onrender.com/cafe-04/party";

//! GET
const getPartyMembers = async () => {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
};

//! POST
//after POST run line below:
const postGuest = async guest => {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(guest),
        });
        const data = await response.json();
        console.log(data);
        window.location.reload();
    } catch (e) {
        console.log(e);
    }
};

//! PUT
const updateGuest = async (id, guestData) => {
    try {
        const response = await fetch(BASE_URL + "/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(guestData),
        });
        const data = await response.json();
        console.log(data);
        window.location.reload();
    } catch (e) {
        console.log(e);
    }
};

//! DELETE
const deleteGuest = async id => {
    try {
        const response = await fetch(BASE_URL + "/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response);
        window.location.reload();
    } catch (e) {
        console.log(e);
    }
};
