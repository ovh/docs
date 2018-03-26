---
title: Configuracao inicial do Windows Server (Firewal)
slug: windows-first-config
excerpt: Saiba como ativar a ligacao ao Ambiente de Trabalho Remoto atraves do KVM (Keyboard, Video Mouse Switch).
---


## Pre-requisitos
Durante a instalação dos sistemas operativos Windows Server 2012, 2012 R2 ou 2016 num servidor VPS é possível que a ligação ao ambiente de trabalho remoto esteja desativada, bem como a resposta ao protocolo ICMP (ping). Este guia irá ajudá-lo a efetuar as alterações necessárias.

Para tal, precisa de:

- Um servidor VPS com o Windows Server 2012, 2012 R2 ou 2016.
- Acesso à Àrea Cliente.


## Procedimento

### Etapa 1&#58; Aceder ao KVM
Para aceder ao KVM, deve entrar na sua `Área de Cliente`{.action}, aceder à secção `Dedicado`{.action}, e clicar no servidor VPS.

De seguida, deverá clicar no botão `KVM`{.action} no canto superior da Área de Cliente.


![KVM](images/windowsvps.png){.thumbnail}

Desta forma, o acesso ao teclado-rato virtual ficará ativado no servidor VPS.


### Etapa 2&#58; Configuracao inicial do Windows
No ecrã KVM irá verificar que o Windows se encontra na etapa de configuração. Por favor. configure o idioma do teclado Windows e defina a palavra-passe do utilizador **Administrator**.


![Langue](images/windows2.png){.thumbnail}


![Mdp](images/windows3.png){.thumbnail}


### Etapa 3&#58; Alteracoes na Firewall do Windows
Um vez terminada a instalação, deve aceder às `Ferramentas de Administração`{.action}, e depois a `Firewall Windows com segurança avançada`{.action}.


![Admin](images/windows4.png){.thumbnail}

De seguida, basta ativar o ICMP e a ligação ao Ambiente de Trabalho Remoto *(clique no botão direito e -> Autorizar a regra)*.


![Active](images/windows5.png){.thumbnail}