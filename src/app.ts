import { Task } from "./types/types"
import { renderTask } from "./helpers/render-tasks.helper.js"//!-.js a no .ts

const addButton=document.querySelector('button')
const tasksContainer=document.querySelector('ul')
const newTaskEl=document.querySelector('input')


const tasks:Task[]=[
    {name:'task01',done:true,category:'general'},
    {name:'task02',done:true,category:'work'},
    {name:'task03',done:false,category:'gym'},
    {name:'task04',done:false,category:'hobby'},
]


const addTask=(task:Task)=>{   
    if(newTaskEl.value!==''){
    tasks.push(task)
}
}
addButton.addEventListener('click',(e)=>{
    const radioElement=document.querySelector('input[type="radio"]:checked')
   
    
    e.preventDefault()
    radioElement?
    addTask({name:newTaskEl.value,done:false,category:radioElement.id}):
    addTask({name:newTaskEl.value,done:false,category:'general'})
    renderTask(tasks,tasksContainer)
    newTaskEl.value=''
   
})

renderTask(tasks,tasksContainer)


       
        
       
    


