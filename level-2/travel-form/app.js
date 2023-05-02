const form = document.userInfo

const submit = document.querySelector("#submit");


function formAlert(e){

    e.preventDefault()

    const firstName = form.firstName.value ;
    const lastName= form.lastName.value;
    const age= form.age.value;
    const location= form.locations.value;
    const diet= [];

  
    
  for(i=0; i< form.food.length;i++){

      if(form.food[i].checked){
      diet.push(form.food[i].value)
      }
  }
  function dietList() 
  {let list= ""
    for(i=0; i< diet.length; i++){
        list= list+diet[i]+ ". "
    }
    return list
  }
alert(
    `First name: ${firstName} \n Last Name: ${lastName} \n Age: ${age} \n Location: ${location} \n Diet: ${dietList()}`
)
    
}
submit.addEventListener("click",formAlert)


// list = 'vegan '