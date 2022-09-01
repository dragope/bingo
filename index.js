const reload = document.querySelector('.bingo-container_button');
reload.addEventListener('click', () => {
    getBingoCard()
});

function getBingoCard(){

    const previouslyFilled = document.querySelectorAll(".bingo-container_square")
    previouslyFilled.forEach(element => element.innerHTML="<p></p>")

    const previouslyBlocked = document.querySelectorAll('.empty')
    console.log(previouslyBlocked)
    previouslyBlocked.forEach((element) => {
        element.classList.add('bingo-container_square')
        element.classList.remove('empty')
        element.innerHTML="<p></p>"
    })

    const rows = {
        1: [1,4,7,10,13,16,19,22,25],
        2: [2,5,8,11,14,17,20,23,26],
        3: [3,6,9,12,15,18,21,24,27]
    }

    const blockedNumbers = {
        1: [],
        2: [],
        3: []
    }

    // Limite de 1 espacio por columna
    for(let i = 0; i <= 8; i++){
        while(blockedNumbers[1].length + blockedNumbers[2].length + blockedNumbers[3].length < i+1){
            let row = Math.floor(Math.random() * 3) + 1
            // Limite de 4 espacios libres maximo por fila
            if(blockedNumbers[row].length < 4){
                let numberBlocked = rows[row][i]
                let div = document.querySelector(`.square${numberBlocked}`)
                div.classList.add('empty')
                div.classList.remove('bingo-container_square')
                blockedNumbers[row].push(numberBlocked)
            }
        }
    }

    //Completar fila 1

    while(4 - blockedNumbers[1].length > 0){
        let index = Math.floor(Math.random() * 9)
        let number = rows[1][index]
        if(!blockedNumbers[1].includes(number) && ((!blockedNumbers[2].includes(rows[2][index]) || !blockedNumbers[3].includes(rows[3][index])))){
            blockedNumbers[1].push(number)
            let div = document.querySelector(`.square${number}`)
            div.classList.add('empty')
            div.classList.remove('bingo-container_square')
        }
    }
    
    // //Completar fila 2

     while(4 - blockedNumbers[2].length > 0){
        let index = Math.floor(Math.random() * 9) 
        let number = rows[2][index]
        if(!blockedNumbers[2].includes(number) && ((!blockedNumbers[1].includes(rows[1][index]) || !blockedNumbers[3].includes(rows[3][index])))){
            blockedNumbers[2].push(number)
            let div = document.querySelector(`.square${number}`)
            div.classList.add('empty')
            div.classList.remove('bingo-container_square')
        }
    }
    
    // //Completar fila 3

    while(4 - blockedNumbers[3].length > 0){
        let index = Math.floor(Math.random() * 9)
        let number = rows[3][index]
        if(!blockedNumbers[3].includes(number) && ((!blockedNumbers[1].includes(rows[1][index]) || !blockedNumbers[2].includes(rows[2][index])))){
            blockedNumbers[3].push(number)
            let div = document.querySelector(`.square${number}`)
            div.classList.add('empty')
            div.classList.remove('bingo-container_square')
        }
    }

    const cardNumbers = []

    function cardNumber (max, min, i){ 
        let element = document.getElementById(i)
        do {
            let number = Math.floor(Math.random() * (max - min + 1) + min)
            if(!cardNumbers.includes(number)){
                if(!element.classList.contains('empty')){
                    element.innerHTML = `<p>${number}</p>`
                }
                cardNumbers.push(number)
            }
        } while(cardNumbers[i-1] == undefined)
    }

    // Asignarle números a los cuadrantes

    for(let i = 1; i <= 27; i++){
        switch(i){
            case 1:
            case 2:
            case 3:
                cardNumber(9,1,i)
            break;
            case 4:
            case 5:
            case 6:
                cardNumber(19,10,i)
            break;
            case 7:
            case 8:
            case 9:
                cardNumber(29,20,i)
            break;
            case 10:
            case 11:
            case 12:
                cardNumber(39,30,i)
            break;
            case 13:
            case 14:
            case 15:
                cardNumber(49,40,i)
            break;
            case 16:
            case 17:
            case 18:
                cardNumber(59,50,i)
            break;
            case 19:
            case 20:
            case 21:
                cardNumber(69,60,i)
            break;
            case 22:
            case 23:
            case 24:
                cardNumber(79,70,i)
            break;
            case 25:
            case 26:
            case 27:
                cardNumber(90,80,i)
            break;
            default:
                alert("Sorry, we had an error");
            break;  
        }
    }
}

getBingoCard()