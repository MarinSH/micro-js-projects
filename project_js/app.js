const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault(); //n'actualisa pas la page

    //console.log(document.querySelector('input[name="q1"]:checked').value);
    for(i = 1; i < 6; i++){
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    verifFunc(tableauResultats);
    tableauResultats = []; //vide le tableau
})

function verifFunc(arrResults){
    for(let a = 0; a < 5; a++){
        if(arrResults[a] === reponses[a]){
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }
    //console.log(verifTableau);
    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}

function afficherResultats(arrCheck) {
    const nbDeFautes = arrCheck.filter( el => el !== true).length; //filtre les element different de true + .longeur du tableau
    switch(nbDeFautes) {
        case 0:
            titreResultat.innerText = `${emojis[0]} Bravo, c'est tout bon ! ${emojis[0]}`;
            aideResultat.innerText = '';
            noteResultat.innerText = "5/5";
        break;
        case 1:
            titreResultat.innerText = `${emojis[0]} Tu chauffes ! ${emojis[1]}`;
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResultat.innerText = '4/5'
        break;
        case 2:
            titreResultat.innerText = `${emojis[1]} C'est pas passé loin !  ${emojis[2]}`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '3/5'
        break;
        case 3:
            titreResultat.innerText = `${emojis[2]} Je sais pas si tu es bon ou mauvais ! ${emojis[3]}`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '2/5'
        break;
        case 4:
            titreResultat.innerText = `${emojis[3]} Tu peux faire mieux ! ${emojis[3]}`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '1/5'
        break;
        case 5:
            titreResultat.innerText = `${emojis[4]} Abuse pas non plus! ${emojis[4]}`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '0/5'
        break;
        default:
            'Il ce passe quoi là!';
    }
}

function couleursFonction(arrValBool) {
    for(let j = 0; j < arrValBool.length; j++){

        if(arrValBool[j] === true){
            toutesLesQuestions[j].style.background = '#CBEB50';
        } else {
            toutesLesQuestions[j].style.background = '#EB507E';
            toutesLesQuestions[j].classList.add('echec');
            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');
            }, 500)
        }
    }
}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = '#1d1d1d';
    })
})