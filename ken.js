function getCurrentDateTime() {
    const currentDateTime = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    return currentDateTime.toLocaleString('en-US', options);
}

document.getElementById("ken").textContent = getCurrentDateTime();