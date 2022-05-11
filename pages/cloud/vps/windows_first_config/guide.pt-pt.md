---
title: Configurar uma nova instalação do Windows Server
slug: windows-first-config
excerpt: Saiba como ativar a Remote Desktop Protocol, ICMP e os logs de arranque
section: Primeiros passos
order: 7
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 06/05/2022**

## Objetivo

Após uma nova instalação de um sistema operativo Windows Server num VPS, o acesso remoto e a resposta ICMP (Internet Control Message Protocol) podem ser desativados.<br>
No entanto, pode utilizar o KVM da OVHcloud para aceder ao seu VPS e assim configurar a firewall Windows para reativar o ICMP e autorizar as ligações através do Remote Desktop Protocol.<br>
A ativação dos logs de arranque (*boot logs*) Windows pode ser útil para os diagnósticos de erros do servidor.

**Este guia explica como ativar ICMP, Remote Desktop Protocol e os logs de arranque num VPS Windows.**

## Requisitos

- Uma distribuição Windows instalada num [VPS](https://www.ovhcloud.com/pt/vps/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

## Instruções

### Etapa 1: acesso ao KVM

Para aceder à consola KVM do seu VPS, consulte o [guia KVM VPS](../utilizar_o_kvm_para_um_servidor_vps/).

### Etapa 2: terminar a instalação do Windows

Uma vez estabelecida a sessão KVM, aparecem os ecrãs de configuração inicial. Deve configurar aqui o seu **país/região**, a **língua do Windows** e a sua **disposição de teclado**. Depois de realizar esta operação, clique em `Next`{.action}.

![KVM](images/setup-03.png){.thumbnail}

No segundo ecrã, introduza uma palavra-passe para a sua conta Administrador e confirme-a e clique em `Finish`{.action}.

![KVM](images/setup-04.png){.thumbnail}

O Windows irá aplicar os seus parâmetros e visualizar o ecrã de ligação. Clique no botão `Send CtrlAltDel`{.action} no canto superior direito para se ligar.

![KVM](images/setup-05.png){.thumbnail}

Introduza a password que criou para a sua conta Administrador e clique na seta.

![KVM](images/setup-06.png){.thumbnail}

A configuração inicial está terminada. Uma vez ligado, deve modificar os parâmetros necessários da firewall Windows.

### Etapa 3: modificar a firewall Windows

Abra as `ferramentas de administração`{.action} do painel de configuração `Sistema e Segurança`{.action} e clique duas vezes em `Firewall Windows com segurança avançada`{.action}.

![Admin](images/windows4.png){.thumbnail}

Pode ativar aqui as regras "ICMP" e "Remote Desktop" (ambiente de trabalho remoto) respetivas. Clique com o botão direito da regra e selecione `Autorizar a regra`{.action} no menu contextual.

![Ativado](images/windows5.png){.thumbnail}

O seu servidor deverá responder aos pedidos que utilizam estes protocolos.

### Ativação dos logs de arranque (boot logs) Windows (facultativo)

Ligue-se ao seu servidor através de uma sessão "Remote Desktop" (ambiente de trabalho remoto) ou [KVM](../utilizar_o_kvm_para_um_servidor_vps/). Abra o menu Iniciar o Windows e clique em `Executar`{.action}.

![Bootlog](images/windowsboot1.png){.thumbnail}

Introduza "msconfig" e clique em `OK`{.action}.

![Bootlog](images/windowsboot2.png){.thumbnail}

Na nova janela, selecione a caixa junto de `Boot log`. Clique em `OK`{.action}.

![Bootlog](images/windowsboot3.png){.thumbnail}

Quando iniciar o seu servidor, os logs serão registados num ficheiro .txt. O caminho do ficheiro é `C:\Windows\ntbtlog.txt`.

Para aceder ao conteúdo deste ficheiro em modo de rescue, queira seguir as instruções descritas [no guia do modo de rescue do VPS](../rescue/).

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.