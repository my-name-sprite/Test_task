document.getElementById("second_task_btn").onclick = () =>{
    let enteredVal = document.getElementById("second_input").value 
    if (!enteredVal){
     alert("Поле не может быть пустым")
    }
    else if(!isNaN(enteredVal)){
        alert("Только символьный ввод")
    }
    else if (enteredVal === "Вячеслав"){
        alert ("Привет, Вячеслав")
    }
    else if (enteredVal !== 'Вячеслав'){
        alert ("Нет такого имени")
    }   
 }
 