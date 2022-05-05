

const randomNeonColor1 = () => {
    let colors = ["#CB3301", "#FF0066", "#FF6666", "#FEFF99", "#FFFF67", "#CCFF66", "#99FE00", 
                  "#EC8EED", "#FF99CB", "#FE349A", "#CC99FE", "#6599FF", "#03CDFF"];
    return colors[Math.floor(Math.random()*colors.length)];
}

const randomNeonColor2 = () => {
    let colors = ["#e53c6c", '#6ee1e7', '#0f33c9', '#d23aaa', '#8c33dc', '#ff617b', '#ffdf00']
    return colors[Math.floor(Math.random()*colors.length)];
}

export {randomNeonColor1, randomNeonColor2};