
function bodyColor(color) {
    document.body.style.background = color;
}
bodyColor("#FFEED8");

const btnCheck = document.querySelector('.btn-check');
const fieldName = document.querySelector(".wrm-name");
const fieldEmail = document.querySelector(".wrm-email");
const fieldSubject = document.querySelector(".wrm-subject");


document.querySelector(".btn-check").addEventListener("click", checkFields);

function checkFields() {

    const fldName = fieldName.value;
    const fldEmail = fieldEmail.value;
    const fldSubject = fieldSubject.value;
    
    if (fldName === "" || fldEmail === "" || fldSubject === '') {
        
      document.getElementById("text-area").classList.toggle("show");
    }
}

const okBtn = document.getElementById('okbtn');

okBtn.addEventListener('click', () =>
  document.getElementById('text-area').classList.remove('show')
);








