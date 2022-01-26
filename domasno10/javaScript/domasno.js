$(document).ready(function () {
    let myButton=$("#button");
    myButton.click(function () {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response=>{

            response.json()
            .then(todos=>{
               for(let user of todos){
                let myDiv=$("#one");
                myDiv.append(`<h1>The id is : ${user.id}</h1>`);
                myDiv.append(`<h3>The title is : ${user.title}</h3>`)
                if(user.completed==true){
                    myDiv.append(`<h6>This is complete : ${user.completed}</h6>`);
                }
                else if(user.completed==false){
                    myDiv.append(`<h6>This is NOT complete : ${user.completed}</h6>`);
                }
               }
            })
        })
        .catch(err=>{
            console.log(err);
        })
    })
})