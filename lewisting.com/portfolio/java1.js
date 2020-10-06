

let datas = [];
        // example {id:1592304983049, name: 'Lewis', email: lewisting633@gmail.com}
        const addData = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let data = {
                id: Date.now(),
                name: document.getElementById('textbox1').value,
                email: document.getElementById('textbox2').value
                
            }
            datas.push(data);
            alert ("Thanks for reaching out! I will contact you soon.");
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

         
            //saving to localStorage
            localStorage.setItem('MyDataList', JSON.stringify(datas) );
            
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn1').addEventListener('click', addData);
        });