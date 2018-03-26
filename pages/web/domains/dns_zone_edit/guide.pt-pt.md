---
title: 'Alojamento Partilhado: como editar a minha zona DNS?'
excerpt: Como editar a zona DNS de um nome de domínio.
slug: alojamento_partilhado_como_editar_a_minha_zona_dns
legacy_guide_number: g1604
---


## Definição
O serviço DNS (Domain Name System) permite "traduzir" um nome de domínio num endereço IP a fim de que os seus pedidos possam chegar ao servidor "alvo".

![](images/img_3710.jpg){.thumbnail}


## Diferenças entre servidores/zonas DNS

## Servidores DNS

- Os servidores DNS são os servidores que estão declarados para um nome de domínio no sistema DNS. São, portanto, os servidores encarregues por responder em primeiro lugar aos pedidos de "tradução" e transmitem à Internet a "zona DNS".



## Zona DNS

- A zona DNS é um ficheiro que contém diferentes "registos" que indicam, entre outras coisas, os endereços dos servidores que alojam o seu site (campo A) ou os seus emails (campo MX). Estes endereços podem estar sob a forma de endereço IP (A) ou de nome canónico (CNAME).




## Por que razão se deve editar os servidores ou a zona DNS?

## Servidores DNS
Poderá ser necessário modificar os servidores DNS quando, por exemplo, muda de Registrar. Com efeito, certos Registrars apenas permitem o uso dois seus servidores DNS se o nome de domínio estiver registado com esses Registrars e não o permitem quando estão registados num concorrente
É também possível que possua um servidor que desempenhe o papel de servidor DNS e o pretenda utilizar para gerir o seu nome de domínio.

Um guia relativo aos servidores DNS está à disposição:

- []({legacy}2015).



## Zona DNS
Quando desejar modificar o servidor que aloja o seu site ou os seus emails após alteração de alojador, por exemplo, será necessário alterar os dados da sua zona DNS.
Uma vez efetuada a atualização, será necessário aguardar a propagação e o seu nome de domínio passará a apontar para esses novos servidores.


## Por que é que existe um tempo de propagação?

## Impacto do TTL
O "Time to Live" ("duração de via"), denominado TTL, indica o período de tempo durante o qual uma informação DNS deve ser conservada pelos servidores de cache após modificação.
Na OVH, as novas zonas DNS são criadas com um TTL de 1 hora (TTL=3600).


## Ligação ao Espaço Cliente

- Aceda ao seu [Espaço Cliente](https://www.ovh.com/manager/web) com recurso 'sua palavra-passe e nic-handle.


Clique em "Login" para validar a operação

![](images/img_3711.jpg){.thumbnail}


## Seleção do nome de domínio

- No menu da esquerda, selecione  "Domínios" e depois clique no "nome de domínio" em relação ao qual serão efetuadas alterações.



![](images/img_3712.jpg){.thumbnail}


## Consulta da zona DNS atual
Clique no separador "Zona DNS" a fim de consultar a sua zona DNS.
Terá a possibilidade de consultar os diferentes campos presentes na mesma, atualmente.
Para maior simplicidade na consulta tem a possibilidade de efetuar uma triagem por tipo de campo.

![](images/img_3714.jpg){.thumbnail}


## Modificação de uma entrada
A fim de modificar uma entrada, deverá clicar no ícone em forma de lápis, efetuar a modificação desejada, clicar em "Seguinte" e, por fim, em "Validar"

![](images/img_3723.jpg){.thumbnail}


## Eliminação de uma entrada
A fim de eliminar uma entrada, deverá clicar no ícone em forma de caixote do lixo e, por fim, em "Validar".

![](images/img_3724.jpg){.thumbnail}


## Reinicializar a configuração
Este botão permite-lhe reinicializar a sua zona DNS a fim de colocar os campos todos com valores padrão.

![](images/img_3715.jpg){.thumbnail}
Selecione o tipo de zona desejado e clique no botão "Validar" :


- Entradas mínimas: Esta escolha fornecerá uma zona com as entradas de base necessárias ao básico funcionamento do seu nome de domínio.

- Reinicialização normal: Esta ecolha permitirá obter uma zona DNS com entradas suplementares como CNAME para FTP, etc...



![](images/img_3716.jpg){.thumbnail}


## Adicionar uma entrada
Este botão permite adicionar um novo campo na sua zona DNS.

![](images/img_3717.jpg){.thumbnail}
Basta escolher o tipo de entrada e prosseguir, clicando no botão "Seguinte".

![](images/img_3718.jpg){.thumbnail}


## Modificação em modo textual
Este botão permite editar a sua zona em modo de texto para uma utilização avançada.
Este modo é útil para os utilizadores com conhecimentos avançados que desejem efetuar as modificações rapidamente.

![](images/img_3719.jpg){.thumbnail}
Basta modificar a zona DNS em modo de texto e depois clicar em "Seguinte".

![](images/img_3720.jpg){.thumbnail}


## TTL padrão
Este botão permite modificar o valor TTL da sua zona DNS a fim de gerir o tempo de manutenção de cache.

![](images/img_3721.jpg){.thumbnail}
Para isso, basta  escolher o TTL padrão desejado e, depois, clicar em"Validar".

![](images/img_3722.jpg){.thumbnail}


## Campo do tipo A
Uma entrada do tipo A faz corresponder um nome de host com um endereço Ipv4.
Não é autorizado o uso de um campo A e um CNAME para o mesmo nome de host.


## Campo do tipo MX
Uma entrada do tipo MX serve para identificar o servidor de email para que o correio eletrónico seja entregue ao servidor responsável pelo seu tratamento.
Apenas um nome de host pode ser indicado e nunca um endereço IP.


## Campo do tipo CNAME
Uma entrada do tipo CNAME serve para criar um alias de um nome de host para outro nome de host.
Apenas um nome de host pode ser indicado; nunca um endereço IP.
Não é autorizado o uso de um campo A e um CNAME para o mesmo nome de host.


## Campo do tipo TXT
Uma entrada do tipo


## Campo do tipo SPF
Uma entrada do tipo SPF permite declarar os servidores autorizados a enviar emails com o seu nome de domínio.
Para mais informações, pode consultar este guia:

- []({legacy}2028).




## Zone check
Esta ferramenta permite assegurar-se que a sua atualizaçao de servidores DNS será concluída com sucesso.
Um guia está à disposição:

- []({legacy}1980).




## DNSSEC
Esta opção permite-lhe proteger o seu nome de domínio contra Cache poisoning.
Um guia está à disposição:

- []({legacy}1980).




## Prazos / Delays
Servidores DNS

- Todas as modificações dos seus servidores DNS poderão levar até 48 horas.


Zona DNS

- Todas as modificações na sua zona DNS podem levar até 24 horas para serem tidas em conta.



