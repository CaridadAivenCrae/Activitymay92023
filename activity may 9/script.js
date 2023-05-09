const insert = () => {
    let type = document.querySelector("#type").value
    let label = document.querySelector("#label").value
    let placeholder = document.querySelector("#placeholder").value
   
    switch(type){
        case 'text': appendText(label, placeholder) 
                    break
        case 'radio': appendRadio(label, placeholder)
                    break
        case 'button' : appendButton(label, placeholder)            


    }
}

const appendText = (label = "No label", placeholder = "No placeholder") => {
id +=1;
const PID = id;
let container = document.createElement('div');
let labelT = document.createElement('p');
let del = document.createElement('button');
del.innerHTML = 'del';
del.setAttribute('onclick', 'del('+ PID +')');
labelT.innerHTML = label;
container.setAttribute ('id' , id);
let el = document.createElement('input');
el.setAttribute('placeholder', placeholder);
container.append(labelT)
container.append(el)
container.append(del)
document.querySelector('#results').append(container);



}
const del = (del) =>{
    document.getElementById(del).remove(this);
}

















