// fill in javascript code here
let myForm = document.querySelector("form")
let inpName=document.getElementById("name")
let inpempId=document.getElementById("employeeID")
let inpDepart=document.getElementById("department")
let inpExp=document.getElementById("exp")
let inpEmail=document.getElementById("email")
let inpNumber=document.getElementById("mbl")
let body=document.querySelector("tbody")
// let delete=document.querySelector("delete")


let arr=[]

myForm.addEventListener("submit",function(event){
    event.preventDefault()
//    console.log(inpName.value)
    let obj={
        name : inpName.value,
        empId : inpempId.value,
        dept: inpDepart.value,
        experience : inpExp.value,
        email : inpEmail.value,
        mobileNo : inpNumber.value,
        role:"",
        button: "delete"
    }
    if(obj.experience>5){
        obj.role="Senior"
    }
    else if(obj.experience>=2 && obj.experience <=5){
        obj.role="Junior"
    }else if(obj.experience<=1 ){
        obj.role="Fresher"
    }
    arr.push(obj)
    // console.log(arr)
    let tr1=document.createElement("tr")
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    let td3=document.createElement("td")
    let td4=document.createElement("td")
    let td5=document.createElement("td")
    let td6=document.createElement("td")
    let td7=document.createElement("td")
    let td8=document.createElement("button")

    arr.map((ele)=>{
        td1.innerText=ele.name
        td2.innerText=ele.empId
        td3.innerText=ele.dept
        td4.innerText=ele.experience
        td5.innerText=ele.email
        td6.innerText=ele.mobileNo
        td7.innerText=ele.role
        td8.innerText=ele.button

    })
    td8.addEventListener("click",function(){
        tr1.remove()
    })
   

    tr1.append(td1,td2,td3,td4,td5,td6,td7,td8)
    body.append(tr1)
    td8.style.backgroundColor = "red"
    td8.style.border = "none"
    td8.style.marginTop = "6px"
})