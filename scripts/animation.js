function fadeIn (element) {
    let i = 0;
    const interval = 
    setInterval(() => {
            i += 0.1;
            element.style.opacity = i;
        }, 20);

    setTimeout(() => {
        clearInterval(interval);
    }, 200);
}

function fadeOut (element) {
    let i = 1;
    const interval = 
    setInterval(() => {
            i -= 0.1;
            element.style.opacity = i;
        }, 20);

    setTimeout(() => {
        clearInterval(interval);
    }, 200);
}