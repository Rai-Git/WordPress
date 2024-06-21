function resposta2(){
    
        var branco =  'preto';
        var preto = 'cinza';
        var cinza = 'branco';
        var carro = 'preto';
        var valor = 3000; 
        var prestacao = 750;

        var a =  branco == 'branco';
        var b =  branco == cinza
        var c =  carro === branco
        var cavalo = carro == 'preto' ? 'cinza' : 'marron';

        var compra = valor / prestacao;

        var cores = branco + preto + cinza
        let numeroDeCaracteres = cores.length;

        console.log('a) = '+ a )
        console.log('b) = '+ b )
        console.log('c) = '+ c )
        console.log('d) cavalo = '+ cavalo )
        console.log('e) compra = '+ compra + " Prestações.")
        console.log('f) cores = '+ cores + " / Numero de caracteres (" + numeroDeCaracteres+")" )
}