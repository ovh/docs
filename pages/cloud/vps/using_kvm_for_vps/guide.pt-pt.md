---
title: Utilizar o KVM para os VPS
excerpt: Saiba como aceder ao VPS por meio da funcionalidade KVM
slug: utilizar_o_kvm_para_um_servidor_vps
section: Primeiros passos
order: 6
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 14/09/2020**

## Objetivo

O dispositivo KVM permite uma conexão direta ao seu VPS sem precisar de utilizar um software externo (terminal, Putty, etc.). Pode aceder a este dispositivo através da Área de Cliente ou das API OVHcloud.  

**Este guia explica os dois métodos de acesso ao KVM.**

## Requisitos

- Um [VPS](https://www.ovhcloud.com/pt/vps/) na sua conta OVHcloud.
- Estar conectado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

### Conexão ao KVM a partir da Área de Cliente OVHcloud

#### Gama VPS atual

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), vá à secção `Bare Metal Cloud`{.action} e selecione o seu servidor na secção `Servidor privado virtual`{.action}. Nesta secção, clique em `...`{.action} à direita do nome do VPS, na zona «O seu VPS».

![Abrir KVM](images/kvm-new1.png){.thumbnail}

#### Gama VPS antiga

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), vá à secção `Bare Metal Cloud`{.action} e selecione o seu servidor na secção `Servidor privado virtual`{.action}. Nesta secção, clique no atalho intitulado `KVM`{.action}.

![Clique no botão KVM](images/kvm-new2.png){.thumbnail}

### Utilização do dispositivo KVM

O ecrã do KVM é aberto. Trata-se de uma pequena janela a indicar a conexão ao servidor. Dado o reduzido tamanho da janela, pode ser muito difícil navegar pela interface do servidor por meio das barras de deslocamento. Por isso, recomendamos que abra o KVM numa nova janela full-screen, através do botão «Abrir numa nova janela», situado no canto inferior direito da janela de contexto.

> [!primary]
>
> Se encontrar problemas de dupla digitação, isso pode dever-se à configuração automática do ecrã. Sugerimos que abra o KVM numa nova janela clicando no botão «Abrir numa nova janela».
>
> Se continuar a ter problemas, recomendamos que suprima no URL a parte «auto». Se o URL for https://compute.sbg1.cloud.ovh.net:6080/vnc_auto.html?token=xxxxxxxxxxxx, deverá passar a ser https://compute.sbg1.cloud.ovh.net:6080/vnc.html?token=xxxxxxxxxxxx (o seu link pode diferir; este exemplo só ilustra a parte do URL a suprimir).
>

![Conexão ao KVM](images/kvm_screen.png){.thumbnail}

> [!primary]
>
> O teclado pode ser diferente do seu. Verifique, por exemplo, se o teclado é AZERTY em vez de QWERTY.
>

### Conexão ao KVM através das API

Pode encontrar problemas de conexão ao KVM através da Área de Cliente OVHcloud, sobretudo se se tratar de versões mais antigas. Nesse caso, pode utilizar a solução API. Para isso basta conectar-se através da API [OVHcloud](https://api.ovh.com/).

#### Num VPS 2014

Se tem um VPS 2014, é possível que encontre um *erro 1006*. O problema poderá ser resolvido se passar revista à API por meio do comando abaixo.

> [!api]
>
> @api {POST} /vps/{serviceName}/openConsoleAccess
>
> Parâmetros de comando API:
>
>> serviceName \*
>>> ID do seu VPS, com uma forma semelhante a «vpsxxxxx.ovh.net»,
>> protocolo
>>> VNC

Apesar de a API receber um feedback positivo, a conexão pode demorar um ou dois minutos, até a porta ser efetivamente aberta.

Sugerimos que utilize um dos seguintes clientes:

- [UltraVnc](https://www.uvnc.com/downloads/ultravnc.html){.external}
- [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/){.external}

Utilize as informações fornecidas pelo comando API para se conectar remotamente ao VPS por meio de um dos programas clientes mencionados acima.

#### Num VPS 2016

Em caso de problema com o KVM, esta é a API aconselhada para o acesso ao KVM:

> [!api]
>
> @api {POST} /vps/{serviceName}/getConsoleUrl
>
> Parâmetros de comando API:
>
>> serviceName \*
>>> ID do seu VPS, com uma forma semelhante a «vpsxxxxx.ovh.net»
>

> [!primary]
>
> Se continuar a ter problemas, recomendamos que suprima no URL a parte «auto». Se o URL for https://compute.sbg1.cloud.ovh.net:6080/vnc_auto.html?token=xxxxxxxxxxxx, deverá passar a ser https://compute.sbg1.cloud.ovh.net:6080/vnc.html?token=xxxxxxxxxxxx (o seu link pode diferir; este exemplo só ilustra a parte do URL a suprimir).
>

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
