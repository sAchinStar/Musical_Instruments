document.addEventListener("keypress", (e) => {
    if (e.key==="Enter"){
        let remove_error = document.getElementById("error")
        remove_error.style = "display:none"
        let audio = document.createElement("audio")
        audio.setAttribute("src", "select-sound.mp3")
        audio.play()
    }
    else if (e.key === "w" || e.key === "W") {
        console.log(e.key);
        let audio = document.createElement("audio")
        audio.setAttribute("src", "piano-mp3_C1.mp3")
        audio.play()
    }
    else if (e.key === "a" || e.key === "A") {
        let audio = document.createElement("audio")
        audio.setAttribute("src", "piano-mp3_C2.mp3")
        audio.play()

    }
    else if (e.key === "s" || e.key === "S") {
        let audio = document.createElement("audio")
        audio.setAttribute("src", "piano-mp3_C3.mp3")
        audio.play()

    }
    else if (e.key === "d" || e.key === "D") {
        let audio = document.createElement("audio")
        audio.setAttribute("src", "piano-mp3_C4.mp3")
        audio.play()

    }
    else if (e.key === "i" || e.key === "I") {
        let audio = document.createElement("audio")
        audio.setAttribute("src", "piano-mp3_C5.mp3")
        audio.play()

    }
    else if (e.key === "j" || e.key === "J") {
        let audio = document.createElement("audio")
        audio.setAttribute("src", "piano-mp3_C6.mp3")
        audio.play()

    }
    else if (e.key === "k" || e.key === "K") {
        let audio = document.createElement("audio")
        audio.setAttribute("src", "piano-mp3_C7.mp3")
        audio.play()

    }
    else if (e.key === "l" || e.key === "L") {
        let audio = document.createElement("audio")
        audio.setAttribute("src", "piano-mp3_C8.mp3")
        audio.play()

    }
    else {
        let show_error = document.getElementById("error")
        show_error.style = "display:flex"
        let audio = document.createElement("audio")
        audio.setAttribute("src", "Error_sound.wav")
        audio.play()
        // alert("!!! key not found !!!") 
    }

})

function start()    {
    let starter = document.getElementById("starter")
    starter.style = "display:none"
    let audio = document.createElement("audio")
    audio.setAttribute("src", "select-sound.mp3")
    audio.play()
}
function RemoveError(){
    let error = document.getElementById("error")
    error.style = "display:none"
    let audio = document.createElement("audio")
    audio.setAttribute("src", "select-sound.mp3")
    audio.play()
}
