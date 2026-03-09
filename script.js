let currentIssues=[...issues]

function loadIssues(data){

const container=document.getElementById("issuesContainer")

container.innerHTML=""

document.getElementById("issueCount").innerText=data.length

data.forEach(issue=>{

const card=document.createElement("div")

card.className=`bg-white p-4 rounded shadow border-t-4 cursor-pointer
${issue.status==="open"?"border-green-500":"border-purple-500"}`

card.innerHTML=`



<div class="flex items-center">

<span class="px-4 py-1 rounded-full ml-auto mb-3 ${getPriorityColor(issue.priority)}">
  ${issue.priority}
</span>

</span>

</div>

<h3 class="font-semibold mb-1">${issue.title}</h3>

<p class="text-gray-500 text-sm mb-2">${issue.description}</p>

<div class="flex flex-wrap gap-2 text-xs mb-5">

<span class="px-4 py-1 rounded-full ${getLabelColor(issue.labels[0])}">
${issue.labels[0]}
</span>

<span class="px-2 py-1 rounded-full ${getLabelColor(issue.labels[1])}">
${issue.labels.slice(1).join(", ")}
</span>

</div>

<div class="text-xs text-gray-500">
Author: ${issue.author}

<div class="text-xs text-gray-500">
${issue.createdAt}
</div>

`

card.onclick=()=>openModal(issue)

container.appendChild(card)

})

}

loadIssues(currentIssues)


function filterIssues(type){

let filtered=issues

if(type!=="all"){
filtered=issues.filter(issue=>issue.status===type)
}

currentIssues=filtered

loadIssues(filtered)

}


function setActive(btnId){

const buttons = document.querySelectorAll(".tab-btn")

buttons.forEach(btn => {

btn.classList.remove("bg-purple-600","text-white")

btn.classList.add("bg-gray-200","text-gray-700")

})

const activeBtn = document.getElementById(btnId)

activeBtn.classList.remove("bg-gray-200","text-gray-700")

activeBtn.classList.add("bg-purple-600","text-white")

}


function searchIssues(){

const text=document.getElementById("search").value.toLowerCase()

const filtered=currentIssues.filter(issue=>

issue.title.toLowerCase().includes(text) ||

issue.description.toLowerCase().includes(text)

)

loadIssues(filtered)

}


function openModal(issue){

document.getElementById("modal").classList.remove("hidden")
document.getElementById("modal").classList.add("flex")

document.getElementById("modalTitle").innerText=issue.title
document.getElementById("modalDesc").innerText=issue.description

document.getElementById("modalInfo").innerHTML=`

Status: ${issue.status} <br>
Priority: ${issue.priority} <br>
Label: ${issue.label} <br>
Author: ${issue.author} <br>
Created At: ${issue.createdAt}

`

}


function closeModal(){

document.getElementById("modal").classList.add("hidden")

}