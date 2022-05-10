const inputText = document.querySelector(".input-text");
const outputtext = document.querySelector("#output-text");


function btnencrypt(){
    const encryptedText = encrypt(inputText.value);
    outputtext.value = encryptedText
}

function encrypt(StringToEncrypt){
    let matrizcode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
StringToEncrypt = StringToEncrypt.toLowerCase();

for(let i= 0; i< matrizcode.length; i++){
    if(StringToEncrypt.includes(matrizcode[i][0])){
        StringToEncrypt = StringToEncrypt.replaceAll(matrizcode[i][0], matrizcode[i][1])
    }
}

return StringToEncrypt;

}


function btndecrypt(){
    const encryptedText = decrypt(inputText.value);
    outputtext.value = encryptedText
}

function decrypt(StringToDecrypt){
    let matrizcode = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
StringToDecrypt = StringToDecrypt.toLowerCase();

for(let i= 0; i< matrizcode.length; i++){
    if(StringToDecrypt.includes(matrizcode[i][0])){
        StringToDecrypt = StringToDecrypt.replaceAll(matrizcode[i][0], matrizcode[i][1])
    }
}

return StringToDecrypt;
}


function copytext(){
    let text = outputtext;
    text.select();
    text.setSelectionRange(0,99999);
    document.execCommand('copy');
    alert("Copied");
    inputText.value = ''
}

