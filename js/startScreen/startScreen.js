import { templateStartScreen } from "./templateStartScreen.js";

export const startScreen = new Promise((resolve, reject)=>{
    let $fragment = document.createElement('div');
    $fragment.classList.add('start-screen');
    $fragment.innerHTML = templateStartScreen;
    document.querySelector('.body').prepend($fragment);

    
    document.addEventListener('submit', function(e){
        e.preventDefault();
        let nickName = document.querySelector('#input-name').value;

        if (nickName) resolve(nickName )
        else(reject('xd'));
    });
})

