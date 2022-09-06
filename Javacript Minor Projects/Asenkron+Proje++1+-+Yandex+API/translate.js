function Translate(word,language){
    this.apikey = "trnsl.1.1.20210912T191753Z.522a00595c8481d2.ac43aac172129e615dfd332240974ca5ded414bd";
    this.word = word;
    this.language = language;

//XHR object

this.xhr = new XMLHttpRequest();

}
Translate.prototype.translateWord = function(callback){
    //Ajax işlemleri
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`

    this.xhr.open("GET",endpoint);

    this.xhr.onload =  ()=> {
        if (this.xhr.status ===200) {
            const json = JSON.parse(this.xhr.responseText);

            const text = json.text[0];

            callback(null,text)
        }else{
            console.log("Bir hata oluştu")
        }

    }

    this.xhr.send();
};
Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}
