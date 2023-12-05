function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length > 0 && fano.value < 1900 || fano.value > ano){
        alert('[ERRO]Verifique os dados etente novamente.')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - fano.value
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 5){
                //bebe
                imagem.setAttribute('src', '/bebe m.png') 
            }else if(idade < 10){
                //adolescente
                imagem.setAttribute('src', '/criança m .png')
            }else if(idade < 18){
                //adolescente
                imagem.setAttribute('src', '/adolescente m.png')
            }else if( idade < 30){
                //jovem
                imagem.setAttribute('src', '/jovem m.png')
            }else if( idade < 60){
                //adulto
                imagem.setAttribute('src', '/adulto m.png')
            }else if( idade < 115){
                //idoso
                imagem.setAttribute('src', '/idoso m.png')
            }else{
                alert('[ERRO]')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 5){
                //bebe
                imagem.setAttribute('src', '/bebe f.png')
            }else if(idade < 10){
                //adolescente
                imagem.setAttribute('src', '/criança f.png')
            }else if(idade < 18){
                //adolescente
                imagem.setAttribute('src', '/adolescente f.png')
            }else if( idade < 30){
                //jovem
                imagem.setAttribute('src', '/jovem f.png')
            }else if( idade < 60){
                //adulto
                imagem.setAttribute('src', '/adulto f.png')
            }else if( idade < 115){
                //idoso
                imagem.setAttribute('src', '/idoso f.png')
            }else{
                alert('[ERRO]')
            }
        }
        res.innerHTML = ` Detectamos ${genero} com ${idade}`
        res.appendChild(imagem)
    }
        
}