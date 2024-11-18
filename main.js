// display in calculator screen
function displayContent(content){
    result.value += content
}
// clear data
function clearData(){
    result.value = ''
}

// backspace
function removeData(){
    result.value = result.value.slice(0,-1)
}
// evaluation
function calculateData(){
    result.value = eval(result.value)
}

