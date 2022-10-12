function writeKey(num){
    let number = inpt.value;
    document.querySelector("#inpt").value = number + num;
}

function confirm(){
    let number = inpt.value;

    if(number == 22){
        cndtName.innerHTML = Bolsonaro.name
        cndtImg.src = Bolsonaro.url
        cndtMsg.innerHTML = Bolsonaro.message
        vote()
    }
    else if(number == 13){
        cndtName.innerHTML = Lula.name
        cndtImg.src = Lula.url
        cndtMsg.innerHTML = Lula.message
        vote()
    }
    else if(number == 15){
        cndtName.innerHTML = Felipe.name
        cndtImg.src = Felipe.url
        cndtMsg.innerHTML = Felipe.message
        vote()
    }
    else if(number == 10){
        cndtName.innerHTML = Iran.name
        cndtImg.src = Iran.url
        cndtMsg.innerHTML = Iran.message
        vote()
    }
    else if(number == 69){
        cndtName.innerHTML = Kid.name
        cndtImg.src = Kid.url
        cndtMsg.innerHTML = Kid.message
        vote()
    }
    else if(number == 30){
        cndtName.innerHTML = Matue.name
        cndtImg.src = Matue.url
        cndtMsg.innerHTML = Matue.message
        vote()
    }
    else if(number == 09){
        cndtName.innerHTML = Naruto.name
        cndtImg.src = Naruto.url
        cndtMsg.innerHTML = Naruto.message
        vote()
    }
    else if(number == 24){
        cndtName.innerHTML = Pico.name
        cndtImg.src = Pico.url
        cndtMsg.innerHTML = Pico.message
        vote()
    }
    else{
        cndtName.innerHTML = "Candidato";
        cndtImg.src = "./img/anonimo.png"
        cndtMsg.innerHTML = ""
    }
}

function correct(){
    document.location.reload();
}

function white(){
    if(unlockWhite == 1){
        window.alert("Voto realizado com sucesso!");
        correct()
        document.location.reload();
    }
}

function vote(){
    unlockWhite = 0
    voteBtn.addEventListener("click",()=>{
        window.alert("Voto realizado com sucesso!");
        correct()
        document.location.reload();
    })
}