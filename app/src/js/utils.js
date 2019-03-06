function randomColor(){
    let str='01234567890abcdefABCDEF';
    let strArr=[];
    for(var i=0;i<6;i++){
        strArr.push(str.split('')[Math.floor(Math.random()*str.length)]);
    }
    return '#'+strArr.join('');
}