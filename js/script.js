function showOutput(output) {
    document.getElementById("output").innerHTML = output
}

function clearOutput() {
    document.getElementById("output").innerHTML = ""
}

function checkingDay() {
    let now = new Date()

    let theDay = now.getDay()

    if (theDay === 0) {
        showOutput("It's Sunday")
    } else if (theDay === 1) {
        showOutput("It's Monday")
    } else if (theDay === 2) {
        showOutput("It's Tuesday")
    } else if (theDay === 5) {
        showOutput("It's Friday")
    } else if (theDay === 6) {
        showOutput("It's Saturday")
    } else {
        showOutput("It's some other day")
    }
}

function checkingDay2() {
    let now = new Date()

    let theDay = now.getDay()

    switch (theDay) {
        case 0:
            showOutput("It's Sunday")
            break
        case 1:
            showOutput("It's Monday")
            break
        case 2:
            showOutput("It's Tuesday")
            break
        case 3:
            showOutput("It's Wednesday")
            break
        case 4:
            showOutput("It's Thursday")
            break
        case 5:
            showOutput("It's Friday")
            break
        default:
            showOutput("It's Saturday")
    }
}

function askingName() {
    do {
        var name = prompt("Enter your name:")
        console.log(name)


    } while (name === null || name === "")

    showOutput(name)
}