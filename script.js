let turn = 1;
let feld1 = true;
let feld2 = true;
let feld3 = true;
let feld4 = true;
let feld5 = true;
let feld6 = true;
let feld7 = true;
let feld8 = true;
let feld9 = true;
let score1 = 0;
let score2 = 0;
let color = false;

function colorcheck(){
    let checkbox = document.getElementById("checkcolor");

    if (checkbox.checked === true){
        color = true;
    }
}

function namesave1 (){
    let player1 = document.getElementById("fname").value;
    document.getElementById("player1").innerHTML = player1 + ":";
}
function namesave2 () {
    let player2 = document.getElementById("lname").value;
    document.getElementById("player2").innerHTML = player2 + ":";
}
function triggerlog (index){
    if (index === 1){
        console.log("Button pressed");
        feld1 = false;
        if (feld1 === false && turn % 2 === 0 && document.getElementById("1").innerHTML === "-" && document.getElementById("lname").value !== "Computer"){
            document.getElementById("1").innerHTML = "X";
            turnskipper()
            console.log(turn)
            if (color === true){
                setcolorred(1)
            }
        }

        if (feld1 === false && turn % 2 === 1 && document.getElementById("1").innerHTML === "-" && document.getElementById("lname").value !== "Computer") {
            turnskipper()
            document.getElementById("1").innerHTML = "O";
            console.log(turn)
            if (color === true){
                setcolorgreen(1)
            }
        }

        if (feld1 === false && document.getElementById("lname").value === "Computer" && document.getElementById("1").innerHTML !== "O") {
            document.getElementById("1").innerHTML = "X";
            turnskipper()
            console.log("Computer hat gesetzt");
            if (document.getElementById("5").innerHTML === "-"){
                document.getElementById("5").innerHTML = "O";
                feld5 = false;
            }
            else if (document.getElementById("4").innerHTML === "-"){
                document.getElementById("4").innerHTML = "O";
                feld4 = false;
            }
            else if (document.getElementById("2").innerHTML === "-"){
                document.getElementById("2").innerHTML = "O";
                feld2 = false;
            }
            else if (document.getElementById("3").innerHTML === "-"){
                document.getElementById("3").innerHTML = "O";
                feld3 = false;
            }
            else if (document.getElementById("9").innerHTML === "-"){
                document.getElementById("9").innerHTML = "O";
                feld9 = false;
            }
            else if (document.getElementById("8").innerHTML === "-"){
                document.getElementById("8").innerHTML = "O";
                feld8 = false;
            }
            else if (document.getElementById("6").innerHTML === "-"){
                document.getElementById("6").innerHTML = "O";
                feld6 = false;
            }
            else if (document.getElementById("7").innerHTML === "-"){
                document.getElementById("7").innerHTML = "O";
                feld7 = false;
            }
        }
    }

    if (index === 2){
        feld2 = false;
        if (feld2 === false && turn % 2 === 0 && document.getElementById("2").innerHTML === "-" && document.getElementById("lname").value !== "Computer"){
            document.getElementById("2").innerHTML = "X";
            turnskipper()
            console.log(turn)
            if (color === true){
                setcolorred(2)
            }
        }

        if (feld2 === false && turn % 2 === 1 && document.getElementById("2").innerHTML === "-" && document.getElementById("lname").value !== "Computer") {
            document.getElementById("2").innerHTML = "O";
            turnskipper()
            console.log(turn)
            if (color === true){
                setcolorgreen(2)
            }
        }
        if (feld2 === false && document.getElementById("lname").value === "Computer" && document.getElementById("2").innerHTML !== "O") {
            document.getElementById("2").innerHTML = "X";
            turnskipper()
            console.log("Computer hat gesetzt");
            if (document.getElementById("5").innerHTML === "-"){
                document.getElementById("5").innerHTML = "O";
                feld5 = false;
            }
            else if (document.getElementById("3").innerHTML === "-"){
                document.getElementById("3").innerHTML = "O";
                feld3 = false;
            }
            else if (document.getElementById("1").innerHTML === "-"){
                document.getElementById("1").innerHTML = "O";
                feld1 = false;
            }
            else if (document.getElementById("4").innerHTML === "-"){
                document.getElementById("4").innerHTML = "O";
                feld4 = false;
            }
            else if (document.getElementById("7").innerHTML === "-"){
                document.getElementById("7").innerHTML = "O";
                feld7 = false;
            }
            else if (document.getElementById("8").innerHTML === "-"){
                document.getElementById("8").innerHTML = "O";
                feld8 = false;
            }
            else if (document.getElementById("9").innerHTML === "-"){
                document.getElementById("9").innerHTML = "O";
                feld9 = false;
            }
            else if (document.getElementById("6").innerHTML === "-"){
                document.getElementById("6").innerHTML = "O";
                feld6 = false;
            }
        }

    }
    if (index === 3){
        console.log("Button pressed");
        feld3 = false;
        if (feld3 === false && turn % 2 === 0 && document.getElementById("3").innerHTML === "-" && document.getElementById("lname").value !== "Computer"){
            document.getElementById("3").innerHTML = "X";
            turnskipper()
            console.log(turn)
            if (color === true){
                setcolorred(3)
            }
        }

        if (feld3 === false && turn % 2 === 1 && document.getElementById("3").innerHTML === "-" && document.getElementById("lname").value !== "Computer") {
            document.getElementById("3").innerHTML = "O";
            turnskipper()
            console.log(turn)
            if (color === true){
                setcolorgreen(3)
            }
        }

        if (feld3 === false && document.getElementById("lname").value === "Computer" && document.getElementById("3").innerHTML !== "O") {
            document.getElementById("3").innerHTML = "X";
            turnskipper()
            console.log("Computer hat gesetzt");
            if (document.getElementById("5").innerHTML === "-"){
                document.getElementById("5").innerHTML = "O";
                feld5 = false;
            }
            else if (document.getElementById("6").innerHTML === "-"){
                document.getElementById("6").innerHTML = "O";
                feld6 = false;
            }
            else if (document.getElementById("2").innerHTML === "-"){
                document.getElementById("2").innerHTML = "O";
                feld2 = false;
            }
            else if (document.getElementById("1").innerHTML === "-"){
                document.getElementById("1").innerHTML = "O";
                feld1 = false;
            }
            else if (document.getElementById("9").innerHTML === "-"){
                document.getElementById("9").innerHTML = "O";
                feld9 = false;
            }
            else if (document.getElementById("8").innerHTML === "-"){
                document.getElementById("8").innerHTML = "O";
                feld8 = false;
            }
            else if (document.getElementById("4").innerHTML === "-"){
                document.getElementById("4").innerHTML = "O";
                feld4 = false;
            }
            else if (document.getElementById("7").innerHTML === "-"){
                document.getElementById("7").innerHTML = "O";
                feld7 = false;
            }
        }

    }

    if (index === 4){
        console.log("Button pressed");
        feld4 = false;
        if (feld4 === false && turn % 2 === 0 && document.getElementById("4").innerHTML === "-" && document.getElementById("lname").value !== "Computer"){
            document.getElementById("4").innerHTML = "X";
            turnskipper()
            console.log(turn)
            if (color === true){
                setcolorred(4)
            }
        }
        if (feld4 === false && turn % 2 === 1 && document.getElementById("4").innerHTML === "-" && document.getElementById("lname").value !== "Computer") {
            document.getElementById("4").innerHTML = "O";
            turnskipper()
            console.log(turn)
            if (color === true){
                setcolorgreen(4)
            }
        }
        if (feld4 === false && document.getElementById("lname").value === "Computer" && document.getElementById("4").innerHTML !== "O") {
            document.getElementById("4").innerHTML = "X";
            turnskipper()
            console.log("Computer hat gesetzt");
            if (document.getElementById("5").innerHTML === "-"){
                document.getElementById("5").innerHTML = "O";
                feld5 = false;
            }
            else if (document.getElementById("1").innerHTML === "-"){
                document.getElementById("1").innerHTML = "O";
                feld1 = false;
            }
            else if (document.getElementById("7").innerHTML === "-"){
                document.getElementById("7").innerHTML = "O";
                feld7 = false;
            }
            else if (document.getElementById("3").innerHTML === "-"){
                document.getElementById("3").innerHTML = "O";
                feld3 = false;
            }
            else if (document.getElementById("9").innerHTML === "-"){
                document.getElementById("9").innerHTML = "O";
                feld9 = false;
            }
            else if (document.getElementById("8").innerHTML === "-"){
                document.getElementById("8").innerHTML = "O";
                feld8 = false;
            }
            else if (document.getElementById("2").innerHTML === "-"){
                document.getElementById("2").innerHTML = "O";
                feld2 = false;
            }
            else if (document.getElementById("6").innerHTML === "-"){
                document.getElementById("6").innerHTML = "O";
                feld6 = false;
            }
        }

    }

    if (index === 5){
        console.log("Button pressed");
        feld5 = false;
        // var isHuman = document.getElementById("lname").value !== "Computer";
        if (feld5 === false && turn % 2 === 0 && document.getElementById("5").innerHTML === "-" && document.getElementById("lname").value !== "Computer"){
            document.getElementById("5").innerHTML = "X";
            turnskipper()
            console.log(turn)
            if (color === true){
                setcolorred(5)
            }
        }

        if (feld5 === false && turn % 2 === 1 && document.getElementById("5").innerHTML === "-" && document.getElementById("lname").value !== "Computer") {
            document.getElementById("5").innerHTML = "O";
            turnskipper()
            console.log(turn)
            if (color === true){
                setcolorgreen(5)
            }
        }
        if (feld5 === false && document.getElementById("lname").value === "Computer" && document.getElementById("5").innerHTML !== "O") {
            document.getElementById("5").innerHTML = "X";
            turnskipper()
            console.log("Computer hat gesetzt");
            if (document.getElementById("1").innerHTML === "-"){
                document.getElementById("1").innerHTML = "O";
                feld1 = false;
            }
            else if (document.getElementById("3").innerHTML === "-"){
                document.getElementById("3").innerHTML = "O";
                feld3 = false;
            }
            else if (document.getElementById("7").innerHTML === "-"){
                document.getElementById("7").innerHTML = "O";
                feld7 = false;
            }
            else if (document.getElementById("9").innerHTML === "-"){
                document.getElementById("9").innerHTML = "O";
                feld9 = false;
            }
            else if (document.getElementById("2").innerHTML === "-"){
                document.getElementById("2").innerHTML = "O";
                feld2 = false;
            }
            else if (document.getElementById("8").innerHTML === "-"){
                document.getElementById("8").innerHTML = "O";
                feld8 = false;
            }
            else if (document.getElementById("6").innerHTML === "-"){
                document.getElementById("6").innerHTML = "O";
                feld6 = false;
            }
            else if (document.getElementById("4").innerHTML === "-"){
                document.getElementById("4").innerHTML = "O";
                feld4 = false;
            }
        }
    }

    if (index === 6){
        console.log("Button pressed");
        feld6 = false;
        if (feld6 === false && turn % 2 === 0 && document.getElementById("6").innerHTML === "-" && document.getElementById("lname").value !== "Computer"){
            document.getElementById("6").innerHTML = "X";
            turnskipper()
            console.log(turn)
            if (color === true){
                setcolorred(6)
            }
        }

        if (feld6 === false && turn % 2 === 1 && document.getElementById("6").innerHTML === "-" && document.getElementById("lname").value !== "Computer") {
            document.getElementById("6").innerHTML = "O";
            turnskipper()
            console.log(turn)
            if (color === true){
                setcolorgreen(6)
            }
        }
        if (feld6 === false && document.getElementById("lname").value === "Computer" && document.getElementById("6").innerHTML !== "O") {
            document.getElementById("6").innerHTML = "X";
            turnskipper()
            console.log("Computer hat gesetzt");
            if (document.getElementById("5").innerHTML === "-"){
                document.getElementById("5").innerHTML = "O";
                feld5 = false;
            }
            else if (document.getElementById("9").innerHTML === "-"){
                document.getElementById("9").innerHTML = "O";
                feld9 = false;
            }
            else if (document.getElementById("2").innerHTML === "-"){
                document.getElementById("2").innerHTML = "O";
                feld2 = false;
            }
            else if (document.getElementById("3").innerHTML === "-"){
                document.getElementById("3").innerHTML = "O";
                feld3 = false;
            }
            else if (document.getElementById("4").innerHTML === "-"){
                document.getElementById("4").innerHTML = "O";
                feld4 = false;
            }
            else if (document.getElementById("8").innerHTML === "-"){
                document.getElementById("8").innerHTML = "O";
                feld8 = false;
            }
            else if (document.getElementById("1").innerHTML === "-"){
                document.getElementById("1").innerHTML = "O";
                feld1 = false;
            }
            else if (document.getElementById("7").innerHTML === "-"){
                document.getElementById("7").innerHTML = "O";
                feld7 = false;
            }
        }
    }

    if (index === 7){
        console.log("Button pressed");
        feld7 = false;
        if (feld7 === false && turn % 2 === 0 && document.getElementById("7").innerHTML === "-" && document.getElementById("lname").value !== "Computer"){
            document.getElementById("7").innerHTML = "X";
            turnskipper()
            console.log(turn)
            if (color === true){
                setcolorred(7)
            }
        }

        if (feld7 === false && turn % 2 === 1 && document.getElementById("7").innerHTML === "-" && document.getElementById("lname").value !== "Computer") {
            document.getElementById("7").innerHTML = "O";
            turnskipper()
            console.log(turn)
            if (color === true){
                setcolorgreen(7)
            }
        }
        if (feld7 === false && document.getElementById("lname").value === "Computer" && document.getElementById("7").innerHTML !== "O") {
            document.getElementById("7").innerHTML = "X";
            turnskipper()
            console.log("Computer hat gesetzt");
            if (document.getElementById("5").innerHTML === "-"){
                document.getElementById("5").innerHTML = "O";
                feld5 = false;
            }
            else if (document.getElementById("4").innerHTML === "-"){
                document.getElementById("4").innerHTML = "O";
                feld4 = false;
            }
            else if (document.getElementById("3").innerHTML === "-"){
                document.getElementById("3").innerHTML = "O";
                feld3= false;
            }
            else if (document.getElementById("8").innerHTML === "-"){
                document.getElementById("8").innerHTML = "O";
                feld8 = false;
            }
            else if (document.getElementById("9").innerHTML === "-"){
                document.getElementById("9").innerHTML = "O";
                feld9 = false;
            }
            else if (document.getElementById("2").innerHTML === "-"){
                document.getElementById("2").innerHTML = "O";
                feld2 = false;
            }
            else if (document.getElementById("6").innerHTML === "-"){
                document.getElementById("6").innerHTML = "O";
                feld6 = false;
            }
            else if (document.getElementById("1").innerHTML === "-"){
                document.getElementById("1").innerHTML = "O";
                feld1 = false;
            }
        }
    }
    if (index === 8){
        console.log("Button pressed");
        feld8 = false;
        if (feld8 === false && turn % 2 === 0 && document.getElementById("8").innerHTML === "-" && document.getElementById("lname").value !== "Computer"){
            document.getElementById("8").innerHTML = "X";
            turnskipper()
            console.log(turn)
            if (color === true){
                setcolorred(8)
            }
        }

        if (feld8 === false && turn % 2 === 1 && document.getElementById("8").innerHTML === "-" && document.getElementById("lname").value !== "Computer") {
            document.getElementById("8").innerHTML = "O";
            turnskipper()
            console.log(turn)
            if (color === true){
                setcolorgreen(8)
            }
        }
        if (feld8 === false && document.getElementById("lname").value === "Computer" && document.getElementById("8").innerHTML !== "O") {
            document.getElementById("8").innerHTML = "X";
            turnskipper()
            console.log("Computer hat gesetzt");
            if (document.getElementById("5").innerHTML === "-"){
                document.getElementById("5").innerHTML = "O";
                feld5 = false;
            }
            else if (document.getElementById("7").innerHTML === "-"){
                document.getElementById("7").innerHTML = "O";
                feld7 = false;
            }
            else if (document.getElementById("9").innerHTML === "-"){
                document.getElementById("9").innerHTML = "O";
                feld9 = false;
            }
            else if (document.getElementById("3").innerHTML === "-"){
                document.getElementById("3").innerHTML = "O";
                feld3 = false;
            }
            else if (document.getElementById("2").innerHTML === "-"){
                document.getElementById("2").innerHTML = "O";
                feld2 = false;
            }
            else if (document.getElementById("1").innerHTML === "-"){
                document.getElementById("1").innerHTML = "O";
                feld1 = false;
            }
            else if (document.getElementById("6").innerHTML === "-"){
                document.getElementById("6").innerHTML = "O";
                feld6 = false;
            }
            else if (document.getElementById("4").innerHTML === "-"){
                document.getElementById("4").innerHTML = "O";
                feld4 = false;
            }
        }

    }

    if (index === 9){
        console.log("Button pressed");
        feld9 = false;

        if (feld9 === false && turn % 2 === 0 && document.getElementById("9").innerHTML === "-" && document.getElementById("lname").value !== "Computer"){
            document.getElementById("9").innerHTML = "X";
            turnskipper()
            console.log(turn);
            if (color === true){
                setcolorred(9)
            }
        }

        if (feld9 === false && turn % 2 === 1 && document.getElementById("9").innerHTML === "-" && document.getElementById("lname").value !== "Computer") {
            document.getElementById("9").innerHTML = "O";
            turnskipper()
            console.log(turn);
            if (color === true){
                setcolorgreen(9)
            }
        }
        if (feld9 === false && document.getElementById("lname").value === "Computer" && document.getElementById("9").innerHTML !== "O") {
            document.getElementById("9").innerHTML = "X";
            turnskipper()
            console.log("Computer hat gesetzt");
            if (document.getElementById("5").innerHTML === "-"){
                document.getElementById("5").innerHTML = "O";
                feld5 = false;
            }
            else if (document.getElementById("7").innerHTML === "-"){
                document.getElementById("7").innerHTML = "O";
                feld7 = false;
            }
            else if (document.getElementById("2").innerHTML === "-"){
                document.getElementById("2").innerHTML = "O";
                feld2 = false;
            }
            else if (document.getElementById("3").innerHTML === "-"){
                document.getElementById("3").innerHTML = "O";
                feld3 = false;
            }
            else if (document.getElementById("1").innerHTML === "-"){
                document.getElementById("1").innerHTML = "O";
                feld1 = false;
            }
            else if (document.getElementById("8").innerHTML === "-"){
                document.getElementById("8").innerHTML = "O";
                feld8 = false;
            }
            else if (document.getElementById("6").innerHTML === "-"){
                document.getElementById("6").innerHTML = "O";
                feld6 = false;
            }
            else if (document.getElementById("4").innerHTML === "-"){
                document.getElementById("4").innerHTML = "O";
                feld4 = false;
            }
        }
    }
}
function turnskipper () {
    turn = turn + 1;
}

function checkwin () {
    document.getElementById("winner").innerHTML = "";
    let player1 = document.getElementById("fname").value;
    let player2 = document.getElementById("lname").value;

    /* Normal Mode */
    if (document.getElementById("1").innerHTML === "O" && document.getElementById("2").innerHTML === "O" && document.getElementById("3").innerHTML === "O") {
        resetwin()
        document.getElementById("winner").innerHTML = player2 + " HAT GEWONNEN!"
        score2 = score2 + 1;
        document.getElementById("player2score").innerHTML = score2
    }
    if (document.getElementById("1").innerHTML === "X" && document.getElementById("2").innerHTML === "X" && document.getElementById("3").innerHTML === "X") {
        resetwin()
        document.getElementById("winner").innerHTML = player1 + " HAT GEWONNEN";
        score1 = score1 + 1;
        document.getElementById("player1score").innerHTML = score1
    }
    if (document.getElementById("1").innerHTML === "X" && document.getElementById("5").innerHTML === "X" && document.getElementById("9").innerHTML === "X") {
        resetwin()
        document.getElementById("winner").innerHTML = player1 + " HAT GEWONNEN";
        score1 = score1 + 1;
        document.getElementById("player1score").innerHTML = score1
    }
    if (document.getElementById("1").innerHTML === "O" && document.getElementById("5").innerHTML === "O" && document.getElementById("9").innerHTML === "O") {
        resetwin()
        document.getElementById("winner").innerHTML = player2 + " HAT GEWONNEN";
        score2 = score2 + 1;
        document.getElementById("player2score").innerHTML = score2
    }
    if (document.getElementById("1").innerHTML === "X" && document.getElementById("4").innerHTML === "X" && document.getElementById("7").innerHTML === "X") {
        resetwin()
        document.getElementById("winner").innerHTML = player1 + " HAT GEWONNEN";
        score1 = score1 + 1;
        document.getElementById("player1score").innerHTML = score1
    }
    if (document.getElementById("1").innerHTML === "O" && document.getElementById("4").innerHTML === "O" && document.getElementById("7").innerHTML === "O") {
        resetwin()
        document.getElementById("winner").innerHTML = player2 + " HAT GEWONNEN";
        score2 = score2 + 1;
        document.getElementById("player2score").innerHTML = score2
    }
    if (document.getElementById("3").innerHTML === "O" && document.getElementById("5").innerHTML === "O" && document.getElementById("7").innerHTML === "O") {
        resetwin()
        document.getElementById("winner").innerHTML = player2 + " HAT GEWONNEN";
        score2 = score2 + 1;
        document.getElementById("player2score").innerHTML = score2
    }
    if (document.getElementById("3").innerHTML === "X" && document.getElementById("5").innerHTML === "X" && document.getElementById("7").innerHTML === "X") {
        resetwin()
        document.getElementById("winner").innerHTML = player1 + " HAT GEWONNEN";
        score1 = score1 + 1;
        document.getElementById("player1score").innerHTML = score1
    }
    if (document.getElementById("4").innerHTML === "X" && document.getElementById("5").innerHTML === "X" && document.getElementById("6").innerHTML === "X") {
        resetwin()
        document.getElementById("winner").innerHTML = player1 + " HAT GEWONNEN";
        score1 = score1 + 1;
        document.getElementById("player1score").innerHTML = score1
    }
    if (document.getElementById("4").innerHTML === "O" && document.getElementById("5").innerHTML === "O" && document.getElementById("6").innerHTML === "O") {
        resetwin()
        document.getElementById("winner").innerHTML = player2 + " HAT GEWONNEN";
        score2 = score2 + 1;
        document.getElementById("player2score").innerHTML = score2
    }
    if (document.getElementById("7").innerHTML === "O" && document.getElementById("8").innerHTML === "O" && document.getElementById("9").innerHTML === "O") {
        resetwin()
        document.getElementById("winner").innerHTML = player2 + " HAT GEWONNEN";
        score2 = score2 + 1;
        document.getElementById("player2score").innerHTML = score2
    }
    if (document.getElementById("7").innerHTML === "X" && document.getElementById("8").innerHTML === "X" && document.getElementById("9").innerHTML === "X") {
        resetwin()
        document.getElementById("winner").innerHTML = player1 + " HAT GEWONNEN";
        score1 = score1 + 1;
        document.getElementById("player1score").innerHTML = score1
    }
    if (document.getElementById("2").innerHTML === "X" && document.getElementById("5").innerHTML === "X" && document.getElementById("8").innerHTML === "X") {
        resetwin()
        document.getElementById("winner").innerHTML = player1 + " HAT GEWONNEN";
        score1 = score1 + 1;
        document.getElementById("player1score").innerHTML = score1
    }
    if (document.getElementById("2").innerHTML === "O" && document.getElementById("5").innerHTML === "O" && document.getElementById("8").innerHTML === "O") {
        resetwin()
        document.getElementById("winner").innerHTML = player2 + " HAT GEWONNEN";
        score2 = score2 + 1;
        document.getElementById("player2score").innerHTML = score2
    }
    if (document.getElementById("3").innerHTML === "O" && document.getElementById("6").innerHTML === "O" && document.getElementById("9").innerHTML === "O") {
        resetwin()
        document.getElementById("winner").innerHTML = player2 + " HAT GEWONNEN";
        score2 = score2 + 1;
        document.getElementById("player2score").innerHTML = score2
    }
    if (document.getElementById("3").innerHTML === "X" && document.getElementById("6").innerHTML === "X" && document.getElementById("9").innerHTML === "X") {
        resetwin()
        document.getElementById("winner").innerHTML = player1 + " HAT GEWONNEN";
        score1 = score1 + 1;
        document.getElementById("player1score").innerHTML = score1
    }
    if (feld1 === false && feld2 === false && feld3 === false && feld4 === false && feld5 === false && feld6 === false && feld7 === false && feld8 === false && feld9 === false){
        resetwin()
        document.getElementById("winner").innerHTML ="Es gab ein Unentschieden!";
    }

}

function resetwin () {
    document.getElementById("1").innerHTML = "-"
    document.getElementById("2").innerHTML = "-"
    document.getElementById("3").innerHTML = "-"
    document.getElementById("4").innerHTML = "-"
    document.getElementById("5").innerHTML = "-"
    document.getElementById("6").innerHTML = "-"
    document.getElementById("7").innerHTML = "-"
    document.getElementById("8").innerHTML = "-"
    document.getElementById("9").innerHTML = "-"
    document.getElementById("1").style.background = "none";
    document.getElementById("2").style.background = "none";
    document.getElementById("3").style.background = "none";
    document.getElementById("4").style.background = "none";
    document.getElementById("5").style.background = "none";
    document.getElementById("6").style.background = "none";
    document.getElementById("7").style.background = "none";
    document.getElementById("8").style.background = "none";
    document.getElementById("9").style.background = "none";
    feld1 = true;
    feld2 = true;
    feld3 = true;
    feld4 = true;
    feld5 = true;
    feld6 = true;
    feld7 = true;
    feld8 = true;
    feld9 = true;
}

function resetscore() {

    if (feld1 === true && feld2 === true && feld3 === true && feld4 === true && feld5 === true && feld6 === true && feld7 === true && feld8 === true && feld9 === true){
        score1 = 0;
        score2 = 0;
        document.getElementById("player2score").innerHTML = score2;
        document.getElementById("player1score").innerHTML = score1;
    }

}

function pedro() {
    document.getElementById("pedro").style.display = "flex";
    document.getElementById("buttonpedro").style.display = "none"
}

function setnamecomp() {
    document.getElementById("lname").value = "Computer";
    document.getElementById("player2").innerHTML = "Computer"
    namesave2()
}

function setcolorred(x){
    document.getElementById(x).style.background = "#f04a4a";
}

function setcolorgreen(x){
    document.getElementById(x).style.background = "#51e868";
}

function setdarkmode (){
    if (document.getElementById("topbtn4").innerHTML === "🌝"){
        document.getElementById("topbtn4").innerHTML = "🌞";
    }
    else document.getElementById("topbtn4").innerHTML = "🌝";


    let element = document.body;
    element.classList.toggle("dark-mode");

    let elementpedro = document.getElementById("buttonpedro");
    elementpedro.classList.toggle("dark-modepedro");

    let elementhtml = document.getElementById("HTML");
    elementhtml.classList.toggle("dark-modehtml");

    let elementfeld1 = document.getElementById("1");
    elementfeld1.classList.toggle("dark-modefeld");

    let elementfeld2 = document.getElementById("2");
    elementfeld2.classList.toggle("dark-modefeld");

    let elementfeld3 = document.getElementById("3");
    elementfeld3.classList.toggle("dark-modefeld");

    let elementfeld4 = document.getElementById("4");
    elementfeld4.classList.toggle("dark-modefeld");

    let elementfeld5 = document.getElementById("5");
    elementfeld5.classList.toggle("dark-modefeld");

    let elementfeld6 = document.getElementById("6");
    elementfeld6.classList.toggle("dark-modefeld");

    let elementfeld7 = document.getElementById("7");
    elementfeld7.classList.toggle("dark-modefeld");

    let elementfeld8 = document.getElementById("8");
    elementfeld8.classList.toggle("dark-modefeld");

    let elementfeld9 = document.getElementById("9");
    elementfeld9.classList.toggle("dark-modefeld");

    let elementnav1 = document.getElementById("nav1");
    elementnav1.classList.toggle("dark-modenav");

    let elementnav2 = document.getElementById("nav2");
    elementnav2.classList.toggle("dark-modenav");

    let elementnav3 = document.getElementById("nav3");
    elementnav3.classList.toggle("dark-modenav");

    let elementa1 = document.getElementById("a1");
    elementa1.classList.toggle("dark-mode-a")

    let elementa2 = document.getElementById("a2");
    elementa2.classList.toggle("dark-mode-a")

    let elementa3 = document.getElementById("a3");
    elementa3.classList.toggle("dark-mode-a")

    document.getElementById("topbtn1").classList.toggle("dark-mode-btn")
    document.getElementById("topbtn2").classList.toggle("dark-mode-btn")
    document.getElementById("topbtn3").classList.toggle("dark-mode-btn")
    document.getElementById("topbtn4").classList.toggle("dark-mode-btn")
    document.getElementById("fname").classList.toggle("dark-mode-input")
    document.getElementById("lname").classList.toggle("dark-mode-input")
}

function openmenu (){
    let open = document.getElementById("navigation");
    open.classList.toggle("openmenu")
}