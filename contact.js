const sendMessage = (event) => {
   

const Name = document.getElementById("name").value;
const Email = document.getElementById("email").value;
const Phone = document.getElementById("phone").value;
const Message = document.getElementById("message").value;

console.log(Name);
console.log(Email);
console.log(Phone);
console.log(Message);

   


const my_text = ` %0A👤Name: ${Name}  %0A📧Email: ${Email} %0A📞Phone: ${Phone} %0A✍️Message ${Message}`;

const chat_id = -1002469258884;

const token = '7181130520:AAE1_I8Jz60DeTjjRCQFGMHQRtuH7cU2wio';

const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`

let api = new XMLHttpRequest();
api.open("GET", url, true);
api.send();

document.getElementById("name").value = '';
document.getElementById("email").value = '';
document.getElementById("phone").value = '';
document.getElementById("message").value = '';

};