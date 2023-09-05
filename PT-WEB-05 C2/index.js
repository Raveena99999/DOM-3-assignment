// fill in javascript code here
let myForm = document.querySelector("form")
let name1 = document.getElementById("name")
let doctorId = document.getElementById("docID")
let department = document.getElementById("dept")
let experience = document.getElementById("exp")
let email = document.getElementById("email")
let mobileNumber = document.getElementById("mbl")
let tbody = document.querySelector("tbody")

let arr=[]

myForm.addEventListener("submit",function(event){
      event.preventDefault()
      let obj={
        name : name1.value ,
        id:doctorId.value,
        department1:department.value,
        experience1:experience.value,
        emailid:email.value,
        mobileNo:mobileNumber.value,
        role:"",
        button:"delete"
      }
      if(obj.experience1>5){
        obj.role = "Senior"
       }
       else if(obj.experience1>=2 && obj.experience1<=5){
         obj.role = "Junior"
       }
       else if(obj.experience1<=1){
         obj.role = "Fresher"
       }

      let tr1 = document.createElement("tr")
      let td1 = document.createElement("td")
      let td2 = document.createElement("td")
      let td3 = document.createElement("td")
      let td4 = document.createElement("td")
      let td5 = document.createElement("td")
      let td6 = document.createElement("td")
      let td7 = document.createElement("td")
      let td8 = document.createElement("td")
      arr.push(obj)
      
      
      arr.map((ele)=>{
        td1.innerText=ele.name
        td2.innerText=ele.id
        td3.innerText=ele.department1
        td4.innerText=ele.experience1
        td5.innerText=ele.emailid
        td6.innerText=ele.mobileNo
        td7.innerText=ele.role
        td8.innerText=ele.button
      })
     
      td8.addEventListener("click",function(){
          tr1.remove()
      })
      tr1.append(td1,td2,td3,td4,td5,td6,td7)
      tbody.append(tr1)
})

