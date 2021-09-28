import { templateStartScreen } from "./templateStartScreen.js";

export const startScreen = new Promise((resolve, reject) => {
    let $fragment = document.createElement("div");
    $fragment.classList.add("start-screen");
    $fragment.innerHTML = templateStartScreen;
    document.querySelector(".body").prepend($fragment);
    const getName = (e) => {
        e.preventDefault();
        let nickName = document.querySelector("#input-name").value;
        if (nickName) resolve(nickName);
        else reject('error');
        document.removeEventListener("submit", getName);
    };

    document.addEventListener("submit", getName);
});
