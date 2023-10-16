var button_add = document.getElementById("ButtonAdd");
var input = document.getElementById("TextBoxTask");
var ToDoContainer = document.getElementById("ToDoContainer");
const fecha = document.querySelector('#fecha');
var TareaFinalizada = "Tarea Realizada";

const Fecha = new Date();
fecha.innerHTML = Fecha.toLocaleDateString('es-MX', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
var fechaText = fecha.innerText;
input.focus();

button_add.addEventListener('click', AddItem);

input.addEventListener('keypress', function (e) {
    if (e.key == "Enter") {
        if (input.value !== '') {
            AddItem();
        }
        else {
            alert("Agregar una tarea");
        }
    }
});

function AddItem() {
    const item_value = input.value;
    // var fechaText = fecha.innerText;
    if (item_value !== '') {

        const item = document.createElement('div');
        item.classList.add('item');

        const item_conetent = document.createElement('div');
        item_conetent.classList.add('content');
        item.appendChild(item_conetent);

        const input_item = document.createElement('input');
        input_item.classList.add('text');
        input_item.type = 'text';
        input_item.value = ' "' + item_value + '" ' + " " + " " + fechaText;
        input_item.setAttribute('readonly', 'readonly');

        item_conetent.appendChild(input_item);
        // localStorage.setItem("01", input_item.value);
        const item_button = document.createElement('div');
        item_button.classList.add('actions');

        const edit_button = document.createElement('button');
        edit_button.classList.add('edit', 'btn', 'btn-secondary', 'fa', 'fa-pencil');
        edit_button.type = "button";
        edit_button.innerText = 'Edit';

        const delete_button = document.createElement('button');
        delete_button.classList.add('delete', 'btn', 'btn-danger', 'fa', 'fa-trash');

        const finish_button = document.createElement('button');
        finish_button.classList.add('finish', 'btn', 'btn-success', 'fa', 'fa-check');

        item_button.appendChild(edit_button);
        item_button.appendChild(delete_button);
        item_button.appendChild(finish_button);

        item.appendChild(item_button);

        ToDoContainer.appendChild(item);
        // localStorage.setItem('Task', JSON.stringify(item_value));
        input.value = '';


        edit_button.addEventListener('click', () => {
            if (edit_button.innerText.toLowerCase() == "edit") {
                edit_button.innerText = "Save";
                input.value = '';
                input_item.value = item_value;
                // item_value = input_item.value;
                input_item.removeAttribute("readonly");
                input_item.focus();
                delete_button.disabled = true;
                finish_button.disabled = true;
                input_item.style.backgroundColor = "silver";

            } else {
                edit_button.innerText = "Edit";
                // input.value = input_item.value;
                // item_value.value = input_item.value; 
                input_item.value = ' "' + input_item.value + '" ' + ' ' + ' ' + fechaText;
                // input.value ='';
                input_item.setAttribute("readonly", "readonly");
                delete_button.disabled = false;
                finish_button.disabled = false;
                input_item.style.backgroundColor = "white";

            }
        });


        delete_button.addEventListener('click', () => {
            ToDoContainer.removeChild(item);
            input.focus();
        });


        finish_button.addEventListener('click', () => {
            edit_button.disabled = true;
            finish_button.disabled = true;
            input_item.setAttribute("readonly", "readonly");
            // input_item.style.textDecoration = "line-through";
            input_item.value = input_item.value + ' || ' + TareaFinalizada;
            input_item.style.color = "white";
            input_item.style.backgroundColor = "green";
            input_item.style.borderColor = "silver";
            // input_item.style.borderBlockColor = "green"
            input.focus();
        });

    }
    else {
        alert("Agregar una tarea");
    }

}
