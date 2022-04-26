

//Below passes test but when browser reload, alert happens since function is directly invoked
let input = document.getElementById('input')
function addingEventListener() {
input.addEventListener('click', addingEventListener)
    
    alert('I was clicked')
}addingEventListener()

//better way: function is invoked upon event/action of 'click' , but doesn't pass test 
// let input = document.getElementById('input')
// function addingEventListener() {
//     alert('I was clicked')
// }
// input.addEventListener('click', addingEventListener)