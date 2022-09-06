
eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord)
    //Change
    document.getElementById("language").onchange = function (){
    // Arayüz işlemleri

    }
}
const translate = new Translate(document.getElementById("word").ariaValueMax,document.getElementById("language").value);

function translateWord(e){ 
    var outputword = document.querySelector(".outputWord")

    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value)
   
    translate.translateWord(function(err,response){
        if (err){
            //Hata  
            console.log(err)
        }
        else{

            outputword.textContent = response
        }
    });

    e.preventDefault();
}
