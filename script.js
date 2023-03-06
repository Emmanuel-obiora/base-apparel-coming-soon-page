
const sub = document.getElementById('clickable');

sub.addEventListener('click', () => {
    const email = document.getElementById('userMail').value;

    if(email === ""){
        const mail = document.getElementById('userMail').parentNode.parentNode;

        mail.classList.add('input-error');
    }
    else if(!isValid(email)){
        const mail = document.getElementById('userMail').parentNode.parentNode;
        const message = document.getElementById('newHint');

        mail.classList.add('input-error');
        message.innerText = 'Please provide a valid email'
    }
    else {
        const mail = document.getElementById('userMail').parentNode.parentNode;

        mail.classList.remove('input-error');
        alert(`${email} has been added to our subscription list.`);
    }
});

function isValid(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}