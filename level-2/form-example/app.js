const user= document.getElementById("my-form")

user.addEventListener("submit", function(event){
    event.preventDefault()

    const firstName= user.firstName.value
    const lastName= user.lastName.value
    user.firstName.value=""
    user.lastName.value=""

    const h1 = document.createElement('h1')

    h1.textContent = firstName + " " + lastName

    document.getElementsByTagName("body")[0].append(h1)
})

