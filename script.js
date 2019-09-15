var convertBtn = document.querySelector(".convert-button");
var URLInput = document.querySelector(".URL-input");

convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLInput.value}`);
    sendURL(URLInput.value);
});

function sendURL(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}