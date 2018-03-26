---
title: Adicionar um DNS secundário num servidor Kimsufi e So you Start
excerpt: Adicionar um DNS secundário num servidor Kimsufi e So you Start
slug: adicionar_um_dns_secundario_num_servidor_kimsufi_e_so_you_start
legacy_guide_number: g2183
---


## Adicionar um nome de domínio no DNS secundário
Para adicionar um domínio ao DNS secundário de um servidor Kimsufi ou So you Start, é necessário:

- Aceder ao Espaço Cliente Kimsufi ou So you Start.
- Clicar no separador DNS.



![](images/img_4078.jpg){.thumbnail}
De seguida, clique em Adicionar um DNS secundário.

![](images/img_4081.jpg){.thumbnail}
Para os servidores Kimsufi o DNS secundário será ns.kimsufi.com.
É necessário introduzir o seu nome de domínio (sem www) e selecionar o IP sob o qual ficará associado.

![](images/img_4077.jpg){.thumbnail}
Deverá ter em consideração a mensagem que lhe aparecerá e que lhe indicará que é necessário adicionar o subdomínio ownercheck com um certo valor na sua zona DNS.

Uma vez que o subdomínio é adicionado, o serviço BIND relançado e a zona propaga (24 a 48h), poderá adicionar o seu domínio ao DNS secundário.


## Eliminar um nome de domínio do DNS secundário
Para eliminar um nome de domínio do DNS secundário é necessário:

- Aceder ao Espaço Cliente Kimsufi ou So you Start.
- Clicar no separador DNS.
- Clicar no separador Gerir os DNS secundários.
- Eliminar o domínio ao clicar no botão Eliminar à direita da entrada, e depois confirme.



![](images/img_4082.jpg){.thumbnail}

