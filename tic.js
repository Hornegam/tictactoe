var tabuleiro = [[0,0,0],[0,0,0],[0,0,0]]
var ultPosicaoX = { "x" : 0 ,
                   "y" : 0   
}
var ultPosicaoY = { "x" : 0 ,
                   "y" : 0   
}

/*
for(var i = 0;i<3;i++){
    for(var j = 0;j<3;j++){
        tabuleiro[i][j] = 0
    }
}
*/

function onde(){
    console.log('Primeiro')
    console.table(ultPosicaoX)
    direita()
    console.log('Direita')
    console.table(ultPosicaoX)
    esquerda()
    console.log('Esquerda')
    console.table(ultPosicaoX)
    cima()
    console.log('Cima')
    console.table(ultPosicaoX)
    baixo()
    console.log('Baixo')
    console.table(ultPosicaoX)
    baixo()
    console.log('Baixo')
    console.table(ultPosicaoX)
}

function direitaX(){
    if(2>=ultPosicaoX.y+1){
            ultPosicaoX.y = ultPosicaoX.y+1
            
    }
    console.table(ultPosicaoX)
}

function esquerdaX(){
    if((ultPosicaoX.y-1)>=0){
            ultPosicaoX.y = ultPosicaoX.y-1
        
    }
    console.table(ultPosicaoX)
}

function cimaX(){
    if((ultPosicaoX.x-1)>=0){
        ultPosicaoX.x = ultPosicaoX.x-1
    }
    console.table(ultPosicaoX)
}

function baixoX(){
    
    if(2>=ultPosicaoX.x+1){
        ultPosicaoX.x = ultPosicaoX.x+1
    }
    console.table(ultPosicaoX)
}

function direitaO(){
    if(2>=ultPosicaoY.y+1){
            ultPosicaoY.y = ultPosicaoY.y+1
            
    }
    console.table(ultPosicaoY)
}

function esquerdaO(){
    if((ultPosicaoY.y-1)>=0){
            ultPosicaoY.y = ultPosicaoY.y-1
        
    }
    console.table(ultPosicaoY)
}

function cimaO(){
    if((ultPosicaoY.x-1)>=0){
        ultPosicaoY.x = ultPosicaoY.x-1
    }
    console.table(ultPosicaoY)
}

function baixoO(){
    
    if(2>=ultPosicaoY.x+1){
        ultPosicaoY.x = ultPosicaoY.x+1
    }
    console.table(ultPosicaoY)
}
//onde()
//var verifica = cima(1,0)
//console.log(verifica.x+" : "+verifica.y)

function verifica(x,y){
    if(tabuleiro[x][y]==0){
        return true
    }else{
        return false
    }
}
function e5(div,forma){
    var fora = document.getElementById(div)
    fora.innerHTML = forma
}

function colocaX(x,y,forma){
    if(verifica(x,y)){
        var x = String(ultPosicaoX.x)
        var y = String(ultPosicaoX.y)
        var fim = x.concat(y)
        console.log(fim)
        e5(fim,forma)
        tabuleiro[x][y] = forma
    }
}

function colocaY(x,y,forma){
    if(verifica(x,y)){
        var x = String(ultPosicaoY.x)
        var y = String(ultPosicaoY.y)
        var fim = x.concat(y)
        console.log(fim)
        e5(fim,forma)
        tabuleiro[x][y] = forma
    }
}


$('#xx').click(function() {
    var  fora =$(this).attr("value")
    //console.log($(this).attr("value"));
    console.table(tabuleiro)
    colocaX(ultPosicaoX.x,ultPosicaoX.y,fora)
    console.table(tabuleiro)


});

$('#yy').click(function() {
    var  fora =$(this).attr("value")
    //console.log($(this).attr("value"));
    console.table(tabuleiro)
    colocaY(ultPosicaoY.x,ultPosicaoY.y,fora)
    console.table(tabuleiro)

});
