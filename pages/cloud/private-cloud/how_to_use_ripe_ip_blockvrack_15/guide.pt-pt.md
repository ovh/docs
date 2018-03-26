---
title: Utilização de endereços IP RIPE / vRack 1.5
excerpt: Como colocar uma VM na rede vRack 1.5 ou utilizar um endereço IP de um bloco RIPE?
slug: utilizacao_de_enderecos_ip_ripe_vrack_15
---


## Apresentação da rede VM Network
A OVH criou uma rede "VM Network" pré-definida com uma IP pool que contem a configuração ligada ao seu bloco RIPE.
Esta "VM Network" permite-lhe também utilizar o vRack 1.5.

![](images/img_1984.jpg){.thumbnail}


## Obter um endereço IP do bloco RIPE de forma dinâmica (Exemplo para uma VM Windows)

- Criação do template correspondente

Para poder obter um endereço IP da IP pool "VM Network", é necessário passar pela criação de um template para criar corretamente a VM (como criar templates: []({legacy}1436)).
Será conveniente, num primeiro tempo, adicionar ao seu template a configuração de rede adequada:

![](images/img_1985.jpg){.thumbnail}
A fim de obter sucesso no sysprep da máquina, é necessário passar pela etapa de personalização do template:

![](images/img_1986.jpg){.thumbnail}

- Criação da VM

Após ter realizado as etapas precedentes, poderá criar a VM a partir do template.
Uma vez criada, a VM deverá ter a seguinte configuração:

![](images/img_1989.jpg){.thumbnail}
Se os parâmetros de rede correspondem à imagem precedente, poderá iniciar a VM e assim verificar a correta atribuição de um endereço IP à sua VM.


## Atribuir manualmente um endereço IP do bloco RIPE
Se assim o desejar, poderá configurar manualmente o endereço IP da VM (seja ela criada, ou não, a partir de um template). Para tal, basta ligá-la à rede "VM Network"

![](images/img_1989.jpg){.thumbnail}
De seguida, com a VM iniciada, poderá atribuir-lhe um endereço IP diretamente na configuração do sistema operativo da VM.
Poderá encontrar as informações relativas ao seu bloco RIPE no email que recebeu e o notificou da disponibilização do serviço, na sua interface Manager ou, ainda, nas propriedades de "VM Network":

![](images/img_1990.jpg){.thumbnail}


## VMM e vRAck 1.5
Com VMM, a ligação entre o vRack 1.5 faz-se também através da rede "VM Network".
Para comunicar com um endereço IP presente no vRack 1.5 e necessário configurar a sua VM para que a mesma esteja ligada à rede "VM Network":

![](images/img_1989.jpg){.thumbnail}
De seguida, apenas tem de configurar manualmente os parâmetros do endereço IP para que a sua VM possa comunicar através da rede com  outros elementos dentro do vRack 1.5.

