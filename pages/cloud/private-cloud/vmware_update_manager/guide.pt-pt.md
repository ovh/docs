---
title: Utilizar o VMware Update Manager
excerpt: ''
slug: utilizar_o_vmware_update_manager
legacy_guide_number: g591
---


## Pré-requisitos
Vamos apresentar a instalação do plug-in Update Manager no vSphere Client.

Deverá previamente instalar o vSPhere Cliente na sua computador:


- [Instalação do vSphere client]({legacy}600)



## IMPORTANTE!!!
 Se utiliza a ligação RDP fornecida aquando da criação da sua conta, não será necessário efetuar a instalação do Update Manager.


## 
De forma a ser efetuado a instalação do Update Manager é necessário que instale o plugin associado disponível no seu vSphere:

![](images/img_156.jpg){.thumbnail}
De seguida verá a janela dos plugins e o Update Manager encontra-se em baixo dessa janela, na qual poderá clicar em "Download and install" ou "Download installer".

Uma vez efetuada essa etapa, irá aparecer um novo separador que irá aparecer no cluster e nos hosts:

![](images/img_66.jpg){.thumbnail}
É apenas necessário clicar no botão "Anexar..." e de selecionar o tipo de atualização desejada:

![](images/img_67.jpg){.thumbnail}
Após ter selecionado e anexado as linhas de base, poderá efetuar um scan de correções e atualizações:

![](images/img_68.jpg){.thumbnail}
Terá depois uma tabela que irá ter o resumo das correções e atualizações disponíveis, assim como as estatísticas relativas aos hosts atualizados.
Se deseja simplesmente efetuar o download das atualizações sem efetuar as instalaçãoes, poderá utilizar o botão "Transferir" e se deseja realizar a instalação, deverá nesse caso utilizar o botão "Corrigir":

![](images/img_69.jpg){.thumbnail}

