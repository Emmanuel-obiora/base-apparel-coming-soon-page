
const sub = document.getElementById('clickable');

sub.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('userMail').value;

    if(email === ""){
        const mail = document.getElementById('userMail').parentNode.parentNode;

        mail.classList.add('input-error');
    }
    if(!isValid(email)){
        const mail = document.getElementById('userMail').parentNode.parentNode;
        const message = document.getElementById('newHint');

        mail.classList.add('input-error');
        message.innerText = 'Please provide a valid email'
    }
    else if(isValid(email)) {
        const mail = document.getElementById('userMail').parentNode.parentNode;

        mail.classList.remove('input-error');
        alert(`${email} has been added to our subscription list.`);
    }
});

function isValid(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}