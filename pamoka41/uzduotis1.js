{
    const databaseUrl = "https://testapi.io/api/Marijus/resource/students/";
    let myData = { name: "Ainas", hometown: "Šiauliai", town: "Kaunas" };
    // let dummyData = { name: "Aino dummy", hometown: "dummytown", town: "dummytown" };

    const getDatabase = async id => {
        try {
            const response = await fetch(databaseUrl + id);
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };

    getDatabase(38);

    const postData = async () => {
        try {
            const response = await fetch(databaseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(myData),
            });
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };
    // postData();

    // Updated data
    myData = { name: "Ainas", hometown: "Šiauliai", town: "Kaunas", profession: "IT Student", age: 19 };

    const putData = async id => {
        try {
            const response = await fetch(databaseUrl + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(myData),
            });
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };

    // putData(38);

    const deleteData = async id => {
        try {
            const response = await fetch(databaseUrl + id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response;
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };

    // deleteData();
}
