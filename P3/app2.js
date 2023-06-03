const form = document.getElementById("form")//Dòng 1: Lấy tham chiếu tới phần tử HTML có id "form" (form input).
const input = document.getElementById("input")//Dòng 2: Lấy tham chiếu tới phần tử HTML có id "form" (input).
const button = document.getElementById("button")//Dòng 3: Lấy tham chiếu tới phần tử HTML có id "button" (button).
const todo = document.getElementById("todo")//Dòng 4: Lấy tham chiếu tới phần tử HTML có id "todo" (ul).

let todoList = [] //Dòng 5: Khởi tạo mảng todoList để lưu trữ danh sách các công việc.

form.addEventListener("submit", (event) => {//lắng nghe sự kiện submit của form và gọi hàm addTodo khi form được submit.
    event.preventDefault()// ngăn chặn hành vi mặc định của form khi submit.(tải lại trang)
    addTodo();//gọi hàm addTodo.
})

const addTodo = () => {//hàm addTodo.
    const newTodo = input.value//lấy giá trị của input.
    if (!newTodo) return console.log("No value! ❌") || alert("No value! ❌")//nếu giá trị của input là rỗng thì thông báo lỗi.
    todoList.push({//thêm giá trị của input vào mảng todoList.
        text: newTodo,//giá trị của input.
        completed: false//giá trị completed.
    })
    localStorage.setItem("todos", JSON.stringify(todoList))//lưu mảng todoList vào localStorage.
    
    render()//gọi hàm render.
}

const render = () => {//hàm render.
    todo.innerHTML = null//xóa hết các phần tử con của ul.
    todoList = JSON.parse(localStorage.getItem("todos")) || []//lấy mảng todoList từ localStorage.

    for (let i = 0; i < todoList.length; i++){//lặp qua mảng todoList.
        let li = document.createElement("li")//tạo thẻ li.
        todo.appendChild(li)//thêm thẻ li vào ul.
        li.innerHTML = `${todoList[i].text}`//thêm giá trị của input vào thẻ li.

        let div = document.createElement("div")//tạo thẻ div.

        let checkbox = document.createElement("input")//tạo thẻ input.
        checkbox.type = "checkbox"//thêm thuộc tính type cho thẻ input.
        div.appendChild(checkbox)//thêm thẻ input vào thẻ div.

        let btn = document.createElement("button")// tạo thẻ button.
        let text = document.createTextNode("X")//tạo nội dung cho thẻ button.
        btn.classList.add("deleteBtn")//thêm class cho thẻ button.
        btn.appendChild(text)//thêm nội dung vào thẻ button.
        div.appendChild(btn)//thêm thẻ button vào thẻ div.

        li.appendChild(div)//thêm thẻ div vào thẻ li.
        checkbox.addEventListener("click", (event) => {//lắng nghe sự kiện click của checkbox.
            todoList[i].completed = event.target.checked//gán giá trị của checkbox cho thuộc tính completed của mảng todoList.
            if (todoList[i].completed) {//nếu thuộc tính completed của mảng todoList là true.
                li.classList.add("completed")//thêm class completed cho thẻ li.
                li.classList.remove("uncompleted")//xóa class uncompleted của thẻ li.
                checkbox.checked = todoList[i].completed//gán giá trị của thuộc tính completed của mảng todoList cho thuộc tính checked của checkbox.
            } else{
                li.classList.add("uncompleted")//thêm class uncompleted cho thẻ li.
                li.classList.remove("completed")//  xóa class completed của thẻ li.
                checkbox.checked = todoList[i].completed//gán giá trị của thuộc tính completed của mảng todoList cho thuộc tính checked của checkbox.
            }
        })
    }   
}