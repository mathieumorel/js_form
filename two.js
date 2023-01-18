// Elliott Katane - 6214821

let myForm = document.getElementById('myform');

myForm.addEventListener('submit', function(e) {

    let inputNom = document.getElementById('nomform');
    let regexNom = /^[a-zA-Z-\s]{3,15}$/; 

    if (inputNom.value.trim() == "") {;
    alert("le champ username est requis!");
   e.preventDefault();
    }
    else if (regexNom.test(inputNom.value) == false) {
      alert("Le nom doit comporter uniquement lettres, espaces et/ou tirets. Pas de chiffres ni de caractères spéciaux.");
      e.preventDefault();
    }
 })

myForm.addEventListener('submit', function(e)
 {
    let inputCourriel = document.getElementById("courriel");
    let regexCourriel = /\w+@\w+\.[a-zA-Z]{2,3}$/; 
    if (inputCourriel.value.trim() == "") {
      alert("le champ courriel ne peut être vide.");
    document.getElementById("courriel").focus();
   e.preventDefault();
}
else if (regexCourriel.test(inputCourriel.value) == false) {
  erreurCourriel.innerHTML = "Le courriel doit être sous la forme xxxxxx@xxx.xxx";
  document.getElementById("courriel").focus();
  e.preventDefault();
};
 })
    
myForm.addEventListener('submit', function(e) 
 {
    let inputPhone = document.getElementById("telephone");
    let regexPhone = /^[\+]\d{1,3}?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (inputPhone.value.trim() == "") {  
      let cphone = confirm("Le téléphone est facultatif. Souhaitez-vous le laisser vide ?");
      if (cphone == true) {
      regexPhone.test(inputPhone.value) == true ;
     }
     else {
      document.getElementById("telephone").focus();
            e.preventDefault();
     }
   }
   else if (regexPhone.test(inputPhone.value) == false) {
            alert("Numéro de téléphone invalide. Veuillez respecter le format +12345678899 ou laisser le champ vide.")
            document.getElementById("telephone").focus();
            e.preventDefault();
         }
       
         });


myForm.addEventListener('submit', function(e) 
{
let inputMessage = document.getElementById("message");
  let regexTitreMsg = /[!#$%?&+;()[\]><-]|[\s]{2,}/ ;
  ///[!#$%?&+;()[\]><-]/; 
  if (regexTitreMsg.test(inputMessage.value) == true) {
   alert("Caractères spéciaux détectés. Effacez-les pour pouvoir soumettre le formulaire. Attention également aux doubles espaces.")
   e.preventDefault();
  }
  else if (inputMessage.value.trim() == "") {
   alert("Le champ est vide.");
   document.getElementById('message').focus();
   e.preventDefault();
}
else { inputMessage.value == inputMessage.value.trim()}
})

myForm.addEventListener('submit', function(e) 
{
   let inputOption = document.getElementById("menucinqoptions");
   if (inputOption.selectedIndex == 0)
{
   alert("Vous n'avez pas choisi de titre");
   document.getElementById('menucinqoptions').focus();
   e.preventDefault()
}
   else if (inputOption.selectedIndex == 5){
   let inputMsgVide = document.getElementById("titremsgvide");
   document.getElementById('titremsgvide').focus();
   let regexPreciser = /^Préciser ici$/;
 if (inputMsgVide.value.trim() == "") {
      alert("Message vide ou inchangé. Merci d'apporter une précision.");
      inputMsgVide.value = "Préciser ici";
      e.preventDefault();
   }
else if (regexPreciser.test(inputMsgVide.value) == true) {
   alert("Message vide ou inchangé. Merci d'apporter une précision.");
   inputMsgVide.value = "Préciser ici";
   e.preventDefault();
}
   }
   });

 myForm.addEventListener('submit', function(e) 
   {
 
 if (document.getElementById('nul').checked)
 {
 return true;
 }
 else if (document.getElementById('insuffisant').checked)
 {
    return true;
 }
 else if (document.getElementById('moyen').checked)
 {
 return true;
 }
 else if (document.getElementById('bon').checked)
 {
 return true;
 }
 else if (document.getElementById('tresbon').checked)
 {
    return true;
 }
 else 
 { 
   let isChecked= confirm("Aucune note sélectionnée. Continuer quand même ?");
        if (isChecked==true)
        {return true;}
        else {
         e.preventDefault();
 }
 }
 })
 
