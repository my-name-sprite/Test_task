document.getElementById("first_task_btn").onclick = () =>{
   let enteredNum = document.getElementById("first_input").value 
   if (!enteredNum){
    alert("Поле не может быть пустым")
}
   else if (enteredNum <= 7){
       alert ("Неподходящее число")
   }
   else if (enteredNum > 7){
       alert ("Привет")
   }
   else if( enteredNum !== Number){
       alert("Не число")
   }
    
}
