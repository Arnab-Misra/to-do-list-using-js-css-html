const Input =document.getElementById('input-js');
const List = document.getElementById('list-js');

function addtask(){ 
        if(Input.value === ''){
            alert('type something');
        }else{
            const Newtask = document.createElement('li')
            Newtask.innerHTML= Input.value;
            Newtask.classList.add('list-item');
            List.appendChild(Newtask);
            adddelete(Newtask);
        
        }
        

    
}
function adddelete(Newtask){
    const deletebtn =document.createElement('botton')
    deletebtn.innerHTML= "delete"
    deletebtn.classList.add('delete-js');
    Newtask.appendChild(deletebtn);
    deletebtn.onclick = function(){
        Newtask.remove();
    }
}