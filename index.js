ac.addEventListener('click', function(){
    demo.value = "";
})



document.getElementById('seven').addEventListener('click',function(){
    let values = this.getAttribute('data-value');
    document.getElementById('demo').value += values;

})
document.getElementById('eight').addEventListener('click',function(){
    let values = this.getAttribute('data-value');
    document.getElementById('demo').value += values;

})
document.getElementById('nine').addEventListener('click',function(){
    let values = this.getAttribute('data-value');
    document.getElementById('demo').value += values;

})
document.getElementById('devide').addEventListener('click',function(){
    let values = this.getAttribute('data-value');
    document.getElementById('demo').value += values;

})
document.getElementById('prise').addEventListener('click',function(){
    let values = this.getAttribute('data-value');
    document.getElementById('demo').value += values;

})
document.getElementById('fourth').addEventListener('click',function(){
    let values = this.getAttribute('data-value');
    document.getElementById('demo').value += values;

})

document.getElementById('fifth').addEventListener('click',function(){
    let values = this.getAttribute('data-value');
    document.getElementById('demo').value += values;
})
document.getElementById('six').addEventListener('click',function(){
    let values = this.getAttribute('data-value');
    document.getElementById('demo').value += values;
})
document.getElementById('mines').addEventListener('click',function(){
    let values = this.getAttribute('data-value');
    document.getElementById('demo').value += values;
})
document.getElementById('one').addEventListener('click',function(){
    let values = this.getAttribute('data-value');
    document.getElementById('demo').value += values;
})
document.getElementById('two').addEventListener('click',function(){
    let values = this.getAttribute('data-value');
    document.getElementById('demo').value += values;
})
document.getElementById('three').addEventListener('click',function(){
    let values = this.getAttribute('data-value');
    document.getElementById('demo').value += values;
})
document.getElementById('zero').addEventListener('click',function(){
    let values = this.getAttribute('data-value');
    document.getElementById('demo').value += values;
})
document.getElementById('double').addEventListener('click',function(){
    let values = this.getAttribute('data-value');
    document.getElementById('demo').value += values;
})
document.getElementById('dote').addEventListener('click',function(){
    let values = this.getAttribute('data-value');
    document.getElementById('demo').value += values;
})

document.getElementById('plus').addEventListener('click',function(){
    let values = this.getAttribute('data-value');
    document.getElementById('demo').value+=values;
})
document.getElementById('equal').addEventListener('click',function(){
    let demo1 = document.getElementById('demo').value;

    let charactor = demo1.split('');

    let legnth1 = charactor.length;
    let operetorindex;

    for(let x=0;x<legnth1;x++){
        if (charactor[x] === '+' || charactor[x] === '-' || charactor[x] === '*' || charactor[x] === '/') {
            operetorindex = x;
            break;
        }
    }
    let operentor = charactor[operetorindex];

    
    let fistnum = demo1.substring(0,operetorindex);
    let secoundnum = demo1.substring(operetorindex+1);
    
    
    // console.log(fistnum);
    // console.log(secoundnum);
    // console.log(charactor[operetorindex]);

    switch (operentor){
        case '+':
                answer = parseFloat(fistnum) + parseFloat(secoundnum);
                break;
        case '-':
                answer = parseFloat(fistnum) - parseFloat(secoundnum);
                break;
        case '*':
                answer = parseFloat(fistnum) * parseFloat(secoundnum);
                break;
        case '/':
                answer = parseFloat(fistnum) / parseFloat(secoundnum);
                break;
    }
        document.getElementById('demo2').innerHTML=answer;  
})

