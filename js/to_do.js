let button = document.getElementById('add')
let todoList = document.getElementById('todoList')



let todos = []

// ----------------------- Add to do-list ---------------------//
function addTodo() {
    let input = document.getElementById('input')
    if (!input.value == "") {
        let newtodo = 1
        if (todos.length > 0) {
            newtodo = todos[todos.length - 1].id + 1
        }
        todos.push({ id: newtodo, title: input.value.trim(), complete: false })
        input.value = ""
        loadTodo()
    } else {
        app.dialog.alert("List is empty", "Error")
    }

}
//------------------------ read to do-list ----------------------//
function readList(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].complete = true
            loadTodo()
            break;
        }
    }
}
//----------------------- delete to do-list --------------------------//
function deleteList(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            console.log(i)
            todos.splice(i, 1)
            loadTodo()
            break;
        }
    }
}


//------------------------- arrangement -------------------------//
function loadTodo() {
    todoList.innerHTML = ""
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].complete) {
            // ------ true function ----- //
            todoList.innerHTML += ` <li class="swipeout">
            <div class="item-content swipeout-content">
                <div class="item-media">
                    <i class="f7-icons size-22" style="color: green;">checkmark_2</i>
                </div>
                <div class="item-inner">
                    <div class="item-title">${todos[i].title}</div>
                </div>
                <div class="item-media">
                    <i class="f7-icons size-22 ">chevron_right_2</i>
                </div>
            </div>
            <div class="swipeout-actions-right">

                <a style="background-color: red;" onclick="deleteList('${todos[i].id}')">Delete</a>
            </div>
        </li>`
        } else {
            // ------ false function ----- //
            todoList.innerHTML += ` <li class="swipeout">
                                <div class="item-content swipeout-content">
                                    <div class="item-media">
                                        <i class="f7-icons size-22" style="color: red;">alarm</i>
                                    </div>
                                    <div class="item-inner">
                                        <div class="item-title">${todos[i].title}</div>
                                    </div>
                                    <div class="item-media">
                                        <i class="f7-icons size-22 ">chevron_right_2</i>
                                    </div>
                                </div>
                                <div class="swipeout-actions-right">
                                    <a  style="background-color: green;" onclick="readList('${todos[i].id}')">Compelete</a>
                                    <a style="background-color:red;" onclick="deleteList('${todos[i].id}')">Delete</a>
                                </div>
                            </li>`
        }
    }
}

loadTodo();