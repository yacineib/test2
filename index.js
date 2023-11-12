'use strict'

function mouvement(fn = () => console.log('finished walking')){
    setTimeout(
        () => {
            // console.log("walking...");
            fn();
        },3000
    );
    return true;
}

