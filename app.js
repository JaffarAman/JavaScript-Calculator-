var display = document.getElementById('display')
var addResult = document.getElementById('addResult')

////////INSERT BTN///////
function insert(num) {
    display.value += num

}

/////////BACK BTN///////
function backBtn() {
    display.value = display.value.slice(0, -1)
    // display.value = display.value.substring(0,display.value.length-1)

}

////////CLEAR BTN./////
function delBtn() {
    display.value = ""
    addResult.value = ""
}

////////EQUAL BTN////
function equalbtn() {
    addResult.value += " " + display.value + ', '

    display.value = eval(display.value)

}