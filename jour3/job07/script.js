document.querySelector("form").addEventListener("submit", (ev) => {
    ev.preventDefault();

    const message = document.querySelector("#message").value,
        boiteMessage = document.querySelector("#boite-message");

    localStorage.setItem("message", message);

    boiteMessage.innerHTML = message;
});