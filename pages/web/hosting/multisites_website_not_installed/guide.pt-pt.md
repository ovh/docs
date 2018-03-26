---
title: 'Alojamento Web: Erro de site "não instalado"'
excerpt: 'Alojamento Web: Erro de site "não instalado"'
id: '1585'
slug: alojamento_web_erro_de_site_nao_instalado
legacy_guide_number: g1585
---


## Generalidades
Esta página é apresentada aquando da ocorrência de um erro de apontamento (DNS) ou deivo a uma declaração incompleta do nome de domínio no servidor.

Esta mensagem de alerta pode aparecer em diversas situações:


- A redireção web não está correta;

- O meu nome de domínio ou sub-domínio não está associado ao alojamento;

- O apontamento DNS do meu nome de domínio não está correto.



![](images/img_2321.jpg){.thumbnail}
[]Informações úteis

Um tempo de propagação de 4 a 24 horas deve ser tido em conta após a alteração de um endereço IP na zona DNS. Esta página pode aparecer durante esse período.


## Erro na criação de um reencaminhamento web
Uma das possíveis razões para a apresentação desta página pode ser o facto de que o reencaminhamento web tenha sido adicionado de forma parcial.

Exemplo: eu faço apontar o meu nome de domínio ou subdomínio para o endereço IP do servidor de reencaminhamentos (213.186.33.5), mas não criei nenhum reencaminhamento no meu [Espaço Cliente](https://www.ovh.com/manager/web). O inverso também pode ocorrer.

Verifique que o seu reencaminhamento web foi corretamente criado para o nome de domínio principal repara o subdomínio "www e que o endereço IP para o qual faz o apontamento é o correto (213.186.33.5 é o endereço IP do servidor de reencaminhamento).

Está à disposição um guia para ajudar em relação à criação de um reencaminhamento web :[]({legacy}1339)

![](images/img_2268.jpg){.thumbnail}


## Erro na implementação de um dos seus domínios ou subdomínios no alojamento
Uma das razões possíveis para a apresentação desta página é o facto de que o seu domínio ou subdomínio não foi corretamente instalado no alojamento partilhado.

Exemplo: faço apontar o meu nome de domínio ou  o meu subdomínio para o IP do servidor web (cluster), mas não o associei no meu [Espaço Cliente](https://www.ovh.com/manager/web).

![](images/img_2269.jpg){.thumbnail}
Verifique, nesse caso, que o seu domínio ou subdomínio foi corretamente adicionaod a partir do espaço cliente através do botão "Associar um nome de domínio" na secção "Sites Web".
Verifique também que realizou a operação para o subdomínio "www".
Deve também ser verificado se o IP de apontamento é o correto (o IP do alojamento é apresentado no [Espaço Cliente](https://www.ovh.com/manager/web)).)

Está à disposição um guia para ajudar na criação de "multi-domínios":[]({legacy}1332)

![](images/img_3965.jpg){.thumbnail}


## Erro de apontamento do nome de domínio
Um outro erro possível pode estar ligado ao facto de o seu nome de domínio não aponta para o endereço IP correto (aponta para o endereço IP de um alojamento web no qual o seu nome de domínio não está instalado, por exemplo).

Exemplo: tem uma oferta de alojamento partilhado no cluster12, mas aponta o seu nome de domínio para o endereço IP do cluster14.

[Encontre o endereço IP do seu alojamento Web](https://www.ovh.pt/g1290.cdn-geocache#acoes_que_pode_efetuar_no_manager_v3_desativar_a_utilizacao_do_acelerador_geocache).

![](images/img_2274.jpg){.thumbnail}

