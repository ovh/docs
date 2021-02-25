---
title: 'Como utilizar o IPMI com servidores dedicados'
slug: usar-ipmi-servidores-dedicados
excerpt: 'O IPMI permite aceder diretamente ao seu servidor, sem necessidade de usar outro software'
section: Introdução
---

**Última atualização: 22/08/2018**

## Sumário

A interface IPMI (Intelligent Platform Management Interface) permite aceder diretamente ao seu servidor dedicado, sem necessidade de usar outro software (e.g. terminal ou Putty). Este manual explica como começar a usar o terminal IPMI.

Atenção: por vezes, poderá encontrar o termo KVM (Keyboard Video and Mouse), o equivalente ao IPMI no âmbito dos VPS 

## Requisitos

- Aceder à [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).


## Instruções

Existem dois métodos diferentes para usar a interface IPMI: através da applet Java (o método aconselhado); ou do navegador (Serial over LAN / SoL).

### Aceder com a applet Java

Atenção: para usar a applet Java, tem que ter o java instalado no computador. Para instalar o Java, aceda à [página oficial](https://www.java.com/pt_BR/download/){.external} do software.

Na Área de Cliente, na secção `IPMI`{.action}, clique em `A partir de applet java (KVM)`{.action}:

![IPMI Java initiated](images/java_ipmi_initiate.png){.thumbnail}

Transfira o ficheiro `kvm.jnlp` e depois clique em executar (run):

![IPMI Java opening](images/java_ipmi_activation.png){.thumbnail}

De seguida, irá surgir uma janela onde serão solicitados os dados de acesso `root`, tal como numa ligação efetuada através de um terminal ou de outro tipo de software:

![IPMI Java login](images/java_ipmi_login.png){.thumbnail}

A partir de agora, pode gerir o seu servidor.

### Aceder através do navegador, via Serial over LAN (SoL)

O acesso via applet é o mais aconselhado. No entanto, também pode usar o IPMI através de Serial over LAN. Para isso, clique em `IPMI`{.action}, e selecione `A partir do seu navegador (SoL)`{.action}:

![IPMI SoL activation](images/sol_ipmi_activation.png){.thumbnail}

> [!warning]
>
> O acesso SoL pode demorar alguns minutos, razão pela qual a applet java é a opção aconselhada.
>

### Testar e reiniciar o IPMI

Eventualmente, o IPMI pode deixar de responder. Se não conseguir aceder à interface, pode efetuar um teste clicando em `Testar o IPMI`{.action} e visualizar o resultado do diagnóstico:

![IPMI test](images/ipmi_test.png){.thumbnail}

Se estiver tudo normal, como no nosso exemplo, o problema pode estar relacionado com a ligação à Internet ou mesmo com o seu computador. Se o problema com o IPMI persistir, experimente reiniciar a interface clicando em `Reiniciar o IPMI`{.action}.

![IPMI test](images/ipmi_reboot.png){.thumbnail}

Este processo demora alguns minutos.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: [Comunidade OVH](https://community.ovh.com/en/){.external}.