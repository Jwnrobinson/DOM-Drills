document.addEventListener("DOMContentLoaded", function() {
let div  = document.createElement('div');
div.className = 'header-container';
document.body.appendChild(div)

let h1 =document.createElement('h1');
let h1txt = document.createTextNode('This is an h1');
h1.appendChild(h1txt);
h1.className = "h1";
div.appendChild(h1);

let h2 = document.createElement('h2');
let h2txt = document.createTextNode('This is an h2');
h2.appendChild(h2txt);
h2.className = "h2";
div.appendChild(h2);

let h3 = document.createElement('h3');
let h3txt = document.createTextNode('This is an h3');
h3.appendChild(h3txt);
h3.className = "h3";
div.appendChild(h3);

let h4 = document.createElement('h4');
let h4txt = document.createTextNode('This is an h4');
h4.appendChild(h4txt);
h4.className = "h4";
div.appendChild(h4);

let h5 = document.createElement('h5');
let h5txt = document.createTextNode('This is an h5');
h5.appendChild(h5txt);
h5.className = "h5";
div.appendChild(h5);

let h6 = document.createElement('h6');
let h6txt = document.createTextNode('This is an h6');
h6.appendChild(h6txt);
h6.className = "h6";
div.appendChild(h6);

let Colors = [
    "#007bff",
    "#6c757d",
    "#28a745",
    "#dc3545",
    "#ffc107", 
    "#17a2b8",
    "#f8f9fa", 
    "#343a40" 
];

function randomColor(){
    let randomcolor = Colors[Math.random()*Colors.length];
return randomcolor;
};

h1.addEventListener("click", function() {
    let randomcolor = randomColor();
    h1.style.color = randomcolor;

})

    let btnTxt = document.createTextNode("Click to add new list item"); 
    btn.appendChild(btnTxt);
    btn.className = "Big Button"
    div.appendChild(btn);

    let ul = document.createElement("ul");
    div.appendChild(ul);
    let liCount = 0;

    function addtoLi () {
        liCount++;
        let li = document.createElement("li");
        let litxt = document. createTextNode ("This is list item 1!") + liCount;
        li.appendChild(litxt);
        ul.appendChild(li);

        li. addEventListener("click", function(){
            let randomcolor = randomColor ();
            li.style.color = randomcolor;
        });
    }

li.addEventListener("dblclick", function() {
    this.remove();
})

});