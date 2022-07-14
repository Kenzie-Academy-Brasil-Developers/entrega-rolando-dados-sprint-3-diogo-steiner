const tagUl = document.querySelector(".list-num")
const divNums = document.querySelector(".nums")
const btnDados = document.querySelector("#btnDados")
btnDados.addEventListener("click", arrayDados)

arrayDados()
function arrayDados () {
    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 1; i <= 1000; i++) {
        
        let dado1 = Math.floor(Math.random() * (1 - 7) + 7)
        let dado2 = Math.floor(Math.random() * (1 - 7) + 7)
    
        let somaDados = dado1 + dado2
    
        switch (somaDados) {
            case 2:
                count[0] =  count[0] + 1
                break;
            case 3:
                count[1] =  count[1] + 1
                break
            case 4:
                count[2] = count[2] + 1
                break
            case 5:
                count[3] = count[3] + 1
                break
            case 6:
                count[4] = count[4] + 1
                break
            case 7:
                count[5] = count[5] + 1
                break
            case 8:
                count[6] = count[6] + 1
                break
            case 9:
                count[7] = count[7] + 1
                break
            case 10:
                count[8] = count[8] + 1
                break
            case 11:
                count[9] = count[9] + 1
                break
            case 12:
                count[10] = count[10] + 1
                break
        }
    
    }
    console.log(count);
    grafico(count)
}





function listandoResultado(resultArray) {
    tagUl.innerHTML = ""
    for (let i = 0; i < resultArray.length; i++) {
        const tagLi = document.createElement("li")
        tagLi.innerText = `nº${i+2} : ${resultArray[i]}x`
        tagUl.appendChild(tagLi)
    }
}




function grafico (array) {
    const divsGrafico = document.querySelectorAll(".grafico div")
    for (let i = 0; i < array.length; i++) {
        divsGrafico[i].style.width = `${array[i]}px`
        divsGrafico[i].innerText = `${array[i]}x`
    }
    listandoResultado(array)
}





numFooter()
function numFooter () {
    for (let i= 0; i < 11; i++) {
        const tagSpan = document.createElement("span")
        tagSpan.innerText = `nº${i+2}`
        divNums.appendChild(tagSpan)
    }
}
