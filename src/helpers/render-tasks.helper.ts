import { Task } from "../types/types"

export const renderTask=(tasks:Task[],tasksContainer:HTMLElement)=>{
    tasksContainer.innerHTML=''
    tasks.forEach((task,index)=>{
    const taskElement=document.createElement('li')
    taskElement.classList.add(task.category)
    const taskLabel=document.createElement('label')
    taskLabel.innerHTML=task.name
    taskLabel.setAttribute('for',`id-${index}`)
    const taskInput=document.createElement('input')
    taskInput.setAttribute('type','checkbox')
    taskInput.setAttribute('name',task.name)
    taskInput.setAttribute('id',`id-${index}`)
    taskInput.checked=task.done        
    taskInput.addEventListener('change',()=>{
        task.done=!task.done
        checkTask()
    })
    const clearButton=document.createElement('button')
    clearButton.innerHTML='❌'
    clearButton.addEventListener('click',()=>{
        tasks.splice(index,1)
        renderTask(tasks,tasksContainer)
    })
    taskElement.appendChild(taskLabel)
    taskElement.appendChild(taskInput)
    taskElement.appendChild(clearButton)
    tasksContainer.appendChild(taskElement)
    })
    checkTask()
    }

    const checkTask=()=>{
        const taskElements=document.querySelectorAll('li')
       
       taskElements.forEach((taskElement)=>{
           const taskInput=taskElement.querySelector('input')
           if(taskInput.checked){
                  taskElement.querySelector('label').classList.add('through')
             }
             else{
                 taskElement.querySelector('label').classList.remove('through')
             }
          
       })
      
    }