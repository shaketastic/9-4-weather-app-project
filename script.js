let form = document.querySelector("pick-location");
let searches = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let chooseLocation = e.target["location"].value;
    let errorMsg = document.querySelector("#error-message");

    if(!chooseLocation) {
        errorMsg.textContent = "Please enter a location"
    } else {
        errorMsg.textContent = "";
        e.target["location"].value = "";

    fetch(`https://wttr.in/${chooseLocation}?format=j1`)
        .then((res) => {
        console.log("Fetch successful")
        return res.json();
    }).then(data => {
        console.log(data, "Finally I see the weather");
        }).catch((err) => {
            throw err;
        })
    }
});