let myForm = document.querySelector("form")
let input1 = document.getElementById("task")
let input2 = document.getElementById("priority")
let body = document.querySelector("tbody")
let arr=[]
myForm.addEventListener("submit",function(element){
    element.preventDefault()
    let obj = {
        name:input1.value,
        priority : input2.value
    }
    arr.push(obj)
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")

    arr.map((ele)=>{
        td1.innerText=ele.name
        td2.innerText=ele.priority
        if(td2.innerText =="High"){
            td2.style.backgroundColor="red"
        }
        else{
            td2.style.backgroundColor="green"

        }
    })
    tr.append(td1,td2)
    body.append(tr)
   
})
