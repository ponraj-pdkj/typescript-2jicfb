// Import stylesheets
import './style.css';

var container = document.querySelector('div');
container.style.display = 'flex';
container.style.flexDirection = 'column';
document.body.appendChild(container);

var title = document.createElement('div');
title.innerHTML = 'DATA';
title.style.textAlign = 'center';
container.appendChild(title);

var inputContainer = document.createElement('div');
inputContainer.style.display = 'flex';
inputContainer.style.display = 'row';

var label = document.createElement('label');
label.innerHTML = 'First Name';
label.id = 'text';
inputContainer.appendChild(label);

var fname = document.createElement('input');
fname.style.height = '30px';
fname.style.width = '120px';
fname.style.margin = '3px 30px 20px';
inputContainer.appendChild(fname);
container.appendChild(inputContainer);

var inputContainer =document.createElement('div')
inputContainer.style.display="flex";
inputContainer.style.display="row";

var label=document.createElement('label')
label.innerHTML ="Last Name"
label.id="text"
inputContainer.appendChild(label);

var lname=document.createElement('input')
lname.style.height="30px"
lname.style.width="120px"
lname.style.margin="3px 30px 20px"
inputContainer.appendChild(lname);
container.appendChild(inputContainer);