---
title: 'Instalar o Real Time Monitoring (RTM)'
slug: instalar-rtm
excerpt: 'Saiba como instalar o Real Time Monitoring em Linux ou Windows'
section: 'Diagnóstico e Modo Rescue'
---

**Última atualização no dia 17/05/2018**

## Sumário

O Real Time Monitoring (RTM) permite monitorizar parcialmente o seu servidor e a atividade deste. Poderá encontrar na Área de Cliente: a utilização do processador (CPU), a memória viva (RAM), as portas abertas... É necessária a instalação do pacote RTM para que estas informações possam estar disponíveis.

**Este guia explica como instalar o RTM em Windows ou Linux**

## Requisitos

- Estar conectado via SSH (ou através da interface gráfica) no servidor Linux (acesso *root*).
- Estar conectado ao ambiente de trabalho remoto no seu servidor Linux ou Windows (acesso *administrador*).
- Estar conectado à [àrea de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instruções

Poderá controlar o servidor quando o RTM estiver instalado na sua Área de Cliente, na secção  `Dedicado`{.action}. Na página principal do seu servidor, obterá as informações do monitoramento em `Real Time Monitoring`:

![Real Time Monitoring](images/rtm.png){.thumbnail}

> [!primary]
>
> Algumas regras de firewall podem impedir o monitoramento da sua infraestrutura, apesar do RTM. Não se esqueça de abrir o acesso ao seu servidor aos IP do nosso monitoramento. Encontrará mais informações [aqui - EN](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/){.external}.
> 

### Instalar o RTM em Linux

Quando estiver conectado ao seu servidor em SSH, basta executar o comando seguinte:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/rtm/install_rtm.sh -O install_rtm.sh ; /bin/bash install_rtm.sh
```

### Instalar o RTM em Windows

Quando estiver conectado ao ambiente de trabalho remoto, eis os passos a seguir:

- instalar o ActivePerl se o RTM nunca foi instalado (pode descarregá-lo aqui: <http://www.activestate.com/activeperl/>);
- descarregar e instalar a última versão do RTM aqui: <ftp://ftp.ovh.net/made-in-ovh/rtm/windows/>;
- clique no ficheiro com o botão direito do rato e depois clique em `Executar como administrador`{.action}.


## Quer saber mais?

[Os IP de monitoramento da OVH - EN](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/)

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.