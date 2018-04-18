---
title: Utilizar o KVM para um servidor VPS
excerpt: Como utilizar o KVM para um servidor VPS
slug: utilizar_o_kvm_para_um_servidor_vps 
legacy_guide_number: g1276
section: Introdução
---

**Última atualização no dia 18/04/2018**

## Sumário

O dispositivo KVM permite uma conexão direta ao seu VPS sem precisar de utilizar um software externo (terminal, Putty, etc.). Pode aceder a este dispositivo através da Área de Cliente ou das API.  

**Ambas as soluções são apresentadas neste guia.**

## Requisitos

- Estar conectado à [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instruções

### Conexão ao dispositivo KVM através da Área de Cliente

Quando estiver conectado à Área de Cliente, entre na página de gestão do seu servidor VPS. Encontrará o botão `KVM`{.action}:

![Selecionar o botão KVM](images/activating_kvm_manager.png){.thumbnail}

 
Uma janela vai então iniciar a conexão no seu VPS, o que pode demorar alguns segundos. Depois, já só tem de se conectar:

![Conexão ao KVM](images/kvm_screen.png){.thumbnail}

> [!primary]
>
> Este teclado pode ser diferente do seu. Verifique se os dois teclados são iguais: QWERTY ou AZERTY.
>

### Conexão ao KVM através das API

É possível que, por vezes, encontre algumas dificuldades de conexão ao KVM através da Área de Cliente. Nesse caso, pode recorrer às API. Primeiro, faça a conexão em [API OVH](https://api.ovh.com/).

#### Num VPS 2014

Nos VPS 2014, podem ocorrer erros 1006\. A passagem por uma API pode resolver esta situação. Esta é a API a utilizar:

> [!api]
>
> @api {POST} /vps/{serviceName}/openConsoleAccess
>

Apesar de a API receber um feedback positivo, a conexão pode demorar um ou dois minutos, até a porta ser efetivamente aberta.

#### Num VPS 2016

Em caso de problema com o KVM, esta é a API aconselhada para o acesso ao KVM:

> [!api]
>
> @api {POST} /vps/{serviceName}/getConsoleUrl
>

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.


