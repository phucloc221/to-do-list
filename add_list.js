// Khai báo biến
var btn_add = document.querySelector('.btn-add')
var input_add = document.querySelector('.input-add')
var list = document.querySelector('.list')
var noti = document.querySelector('.noti')
var close = document.getElementsByClassName('close')
var i;
// Ẩn khi nhấn nút "x"
const hide = () => {
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var list_item = this.parentElement;
            list_item.parentElement.removeChild(list_item)
        }
    }
}
hide()

// Check item
list.onclick = function check(event) {
    var element = event.target;
    if (element.tagName === "LI") {
        element.classList.toggle('done')
    }
    else if (element.tagName === "SPAN") {
        element.parentElement.classList.toggle('done')
    }
}

// Thêm item khi nhấn nút submit
btn_add.onclick = () => {
    var node_li = document.createElement('li')
    var textnode_li = document.createTextNode(input_add.value)
    if (input_add.value === "") {
        var alert = "Fill in somthing..."
        noti.innerHTML = alert
    }
    else {
        node_li.appendChild(textnode_li)
        list.appendChild(node_li)
        input_add.value = ""
        input_add.focus()
        noti.innerHTML = ""
    }
    // Thêm nút "x"
    var node_span = document.createElement('span')
    var textnode_span = document.createTextNode('\327')
    node_span.appendChild(textnode_span)
    node_li.appendChild(node_span)
    node_span.classList.add('close')
    
    hide()
}

// Thêm item khi nhấn enter
input_add.addEventListener('keyup',function(event){
    if (event.keyCode === 13) {
        btn_add.click()
    }
})

// Nothing check
var nothing = document.querySelector('.nothing')
var li = document.getElementsByTagName('li')
if (li.length === 0) {
    nothing.classList.add('nothing')
}

document.onclick = () => {
    if (li.length === 0) {
        list.classList.remove('list-now')
        nothing.classList.add('nothing')
    }
    else {
        list.classList.add('list-now')
        nothing.classList.remove('nothing')
        nothing.classList.add('nothing-off')
    }
}