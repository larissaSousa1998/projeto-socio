
function painelproduto1(){

    if(selecaoproduto.value == 'alcool'){
        
        painelprod.innerHTML = '<div class="produto">Álcool perfumado Azul</div><div class="produto">Álcool perfumado Rosa</div><div class="produto">Álcool perfumado Verde</div><div class="produto">Álcool perfumado Roxo</div><div class="produto">Álcool em gel</div><div class="produto">Álcool 70%</div>';

    }else if(selecaoproduto.value == 'amaciante'){
        painelprod.innerHTML = '<div class="produto">Amaciante Azul Confort</div><div class="produto">Amaciante Rosa Floral</div><div class="produto">Amaciante Amarelo Fofo</div>';
    }else if(selecaoproduto.value == 'detergente'){
        painelprod.innerHTML = '<div class="produto">Neutro</div><div class="produto">Maçã</div><div class="produto">Limão</div>';
    }else if(selecaoproduto.value == 'desinfetante'){
        painelprod.innerHTML = '<div class="produto">Casa Limpa</div><div class="produto">Dove</div><div class="produto">kaiak</div><div class="produto">Top flor</div><div class="produto">Dama da noite</div><div class="produto">Pinho sol</div><div class="produto">Eucalipto</div><div class="produto">Citronela</div>';
    }else if(selecaoproduto.value == 'limpezaleve'){
        painelprod.innerHTML = '<div class="produto">Cândida Comum</div><div class="produto">Cândida Perfumada</div><div class="produto">Veja multiuso</div><div class="produto">Limpa vidros</div><div class="produto">Limpa carpete</div>';
    }else if(selecaoproduto.value == 'limpezaauto'){
        painelprod.innerHTML = '<div class="produto">Limpa vidros</div><div class="produto">Pretinho</div><div class="produto">Limpa carpete</div><div class="produto">Silicone</div><div class="produto">Shampoo com cera</div><div class="produto">Shampoo sem cera</div>';
    }else if(selecaoproduto.value == 'limpezapesada'){
        painelprod.innerHTML = '<div class="produto">Cloro</div><div class="produto">Facilit</div><div class="produto">Limpa alumínio</div><div class="produto">Soda cáustica</div>';
    }else if(selecaoproduto.value == 'sabaoliquido'){
        painelprod.innerHTML = '<div class="produto">Sabão OMO</div><div class="produto">Sabão Coco</div><div class="produto">Sabão Dinamo</div><div class="produto">Cristal</div><div class="produto">Ariel</div>';
    }else if(selecaoproduto.value == 'utensilios'){
        painelprod.innerHTML = '<div class="produto">Esponja dupla face</div><div class="produto">Saco de lixo</div><div class="produto">Pasta para brilho</div><div class="produto">Sabão em pedra caseiro</div><div class="produto">Aplik para vasos sanitários</div><div class="produto">Odorizante para ambiente</div><div class="produto">Esponja de aço</div><div class="produto">Luvas de borracha</div>';
    }
    else if(selecaoproduto.value == 'vassouras'){
        painelprod.innerHTML = '<div class="produto">Vassoura noviça com capa</div><div class="produto">Vassoura de madeira</div><div class="produto">Vassoura cantoneira</div><div class="produto">Rodo 40CM plástico</div><div class="produto">Rodo 30CM plástico</div><div class="produto">Rodo 40CM madeira</div><div class="produto">Pá de lixo cabo longo</div><div class="produto">Pá de lixp cabo curto</div>';
    }
}

