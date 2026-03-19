let nameInfo = prompt("Lütfen adınızı yazınız!")
let bodyDom = document.querySelector("#body")
let nameText = document.querySelector("#nameText")
let dateClock = document.querySelector("#date-clock")
let announcement= document.getElementsByClassName("announcement")

function askName() {
    if (nameInfo && nameInfo.trim() !== '') {
        announcement[0].style.display="block" //sayfa yenilendiğinde p tagları kaybolmadığı için display kontrolü sağlandı
        announcement[1].style.display="block"
        showTime()
        setInterval(showTime, 1000)
    } else {
        alert("Lütfen isminizi yazınız")
        nameInfo = prompt("Lütfen adınızı yazınız!")
        askName()
    }
}

function showTime() {
    nameText.innerHTML = `Merhaba, ${nameInfo}! Hoş geldin!`
    const weekday = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
    const date = new Date()

    let day = weekday[date.getDay()]
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second

    dateClock.innerHTML = `${hour}:${minute}:${second}  ${day}`
}

askName()

