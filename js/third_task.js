document.getElementById("third_task_btn").onclick = () =>{
    let enteredArr = document.getElementById("third_input").value.split(" ") 
    let newArr = [];
    let flag = true;
    let nan;
    
    for (let i = 0; i < enteredArr.length; i++){
        let temp = parseFloat(enteredArr[i]);

       if( temp %3 === 0) {
            newArr.push(temp) 
        }

        if (isNaN(enteredArr[i])){
            flag = false;
            nan = enteredArr[i];
            break; 
        }   
    }
    
    if(enteredArr == ''){
        alert("Поле не может быть пустым")
    }

    else if (flag){
        alert(newArr)
    }
    else {
        alert(`${nan} не число`)
    }  
 }