---
title: 'Partilhado: Generalidades sobre os servidores DNS'
excerpt: 'Partilhado: Generalidades sobre os servidores DNS'
slug: partilhado_generalidades_sobre_os_servidores_dns
legacy_guide_number: g2015
---


## Definição
O DNS (ou Domain Name System) permite, entre outros, traduzir um nome de domínio num endereço IP de forma a que os seus pedidos possam chegar ao servidor alvo.

![](images/img_3413.jpg){.thumbnail}


## Diferenças servidores/zona DNS

## Servidores DNS

- Os servidores DNS são os servidores que estão declarados para um nome de domínio. São esses servidores que respondem em primeiro lugar, antes de passarem à zona DNS em questão.



## Zona DNS

- A zona DNS é um ficheiro que contém os diferentes registos que indicam, entre outros, os endereços dos servidores que alojam o seu website (A) ou os seus emails (MX). Esses endereços podem estar sob a forma de endereços IP ou nomes de hosts.




## Porque devo editar os meus servidores ou a minha zona DNS?

## Servidores DNS
Pode ser necessário modificar os servidores DNS quando muda de registrar. Alguns registrars não permitem que continue a utilizar os seus servidores DNS quando muda o domínio para um concorrente.
É igualmente possível que disponha de um servidor dedicado que faça de servidor DNS e pretende que passe a ser ele que faça a gestão DNS do seu domínio.

## Zona DNS
Quando deseja modificar o servidor que aloja o seu website ou os seus emails, nomeadamente quando muda de alojamento, é necessário modificar a zona DNS.
Após a atualização, o seu domínio apontará para esses novos servidores.

Está à sua disposição um guia sobre alterações à sua zona DNS:

- []({legacy}1604).




## Ligação ao Espaço Cliente

- Ligue-se ao seu [Espaço Cliente](https://www.ovh.com/manager/web) com a ajuda do seu identificador de cliente (nic-handle) - password.

- Clique em "Ligação" para validar a operação.



![](images/img_3411.jpg){.thumbnail}


## Seleção do domínio

- No menu à esquerda selecione "Domínios", e depois "o seu domínio" a modificar.



![](images/img_3405.jpg){.thumbnail}


## Adição dos novos servidores DNS

- Aceda de seguida a "Gestão DNS" e selecione "Adicionar um servidor DNS".



![](images/img_3406.jpg){.thumbnail}

- Indique o primeiro servidor DNS a adicionar, valide e efetue o mesmo procedimento para os restantes servidores DNS.



![](images/img_3407.jpg){.thumbnail}


## Eliminação dos antigos servidores DNS

- Clique no ícone "lixeira" do lado direito dos antigos servidores DNS a eliminar e valide.



![](images/img_3408.jpg){.thumbnail}

- A eliminação está em curso



![](images/img_3409.jpg){.thumbnail}

- Após alguns minutos a atualização será terminada.



![](images/img_3410.jpg){.thumbnail}


## Reinicializar os servidores DNS padrão
Caso faça alguma má manipulação, é possível recolocar os servidores DNS padrão.


- Aceda a "Gestão DNS" e selecione "Reinicializar os DNS padrão".



![](images/img_3416.jpg){.thumbnail}

- Clique em "Validar" a fim de confirmar a reinicialização.



![](images/img_3417.jpg){.thumbnail}


## Como conhecer os servidores DNS que a OVH lhe atribuiu
Para conhecer os servidores DNS que a OVH lhe atribuiu é necessário obter essa informação ao clicar em "Zona DNS", e deverá consultar os 2 "registos NS" presentes na sua zona DNS.

![](images/img_3418.jpg){.thumbnail}


## Gestão avançada dos DNS com o Glue Registry
Para poder criar os Glue Registry, consulte o seguinte guia:
[]({legacy}1568)


## Prazos
Servidores DNS

- Todas as modificações dos seus servidores DNS podem levar até 48h.

Zone DNS
- Todas as modificações à sua zona DNS podem levar até24h.



