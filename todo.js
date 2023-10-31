const myText = document.getElementById("textbox");
const myList = document.getElementById("Order");

function todo(){
    if(myText.value ===''){
        alert("You have to write something!");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = myText.value;
        myList.prepend(li);
        myText.value = '';
        let mySpan =document.createElement("span");
        mySpan.innerHTML = '\u00d7';
        li.appendChild(mySpan)          

    }
    myText.value ='';

}
myList.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classlist.toggle("clicked");
    
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    
},false);