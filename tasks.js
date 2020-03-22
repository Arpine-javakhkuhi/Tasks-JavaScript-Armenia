console.log("Աստղանիշեր");


for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        if(j <= i){
            document.write ('*');
        }
    }
    document.write ('<br>');
}




document.write('Հակառակ եռանկյունի' + '<br>');

for(let i = 10; i > 0; i--){
    for(let j = 0; j < 10; j++){
        if(j < i){
            document.write ('*');
        }
    }
    document.write ('<br>');
}

document.write('Հակառակ եռանկյունի' + '<br>');

for(let i = 9; i >= 0; i--){
    for(let j = 0; j < 10; j++){
        if(j >= i){
            document.write ('*');
        }else{
            document.write ('&nbsp' + '&nbsp');
        }
    }
    document.write ('<br>');
}

document.write('Հակառակ եռանկյունի' + '<br>');

for(let i = 9; i >= 0; i--){
    for(let j = 9; j >= 0; j--){
        if(j <= i){
            document.write ('*');
        }else{
            document.write ('&nbsp' + '&nbsp');
        }
    }
    document.write ('<br>');
}