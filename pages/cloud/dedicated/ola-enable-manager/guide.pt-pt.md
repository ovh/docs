---
title: 'Como configurar a NIC para o OVHcloud Link Aggregation na Área de Cliente OVHcloud'
slug: ola-manager
excerpt: 'Ative o OVHcloud Link Aggregation na sua Área de Cliente'
section: 'Utilização avançada'
order: 1
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 18/05/2022**

## Objetivo

A tecnologia OVHcloud Link Aggregation (OLA) foi criada pelas nossas equipas para aumentar a disponibilidade do seu servidor e aumentar a eficiência das suas ligações de rede. Em apenas alguns cliques, pode agregar as suas placas de rede e tornar as suas ligações de rede redundantes. Isto significa que se uma ligação for interrompida, o tráfego é automaticamente redirecionado para outra ligação disponível.<br>
A agregação baseia-se na tecnologia IEEE 802.3ad, ou Link Aggregation Control Protocol (LACP).

**Neste manual, discutiremos como criar o OLA na Área de Cliente OVHcloud.**

## Requisitos

- Dispor de um [servidor dedicado OVHcloud](https://www.ovhcloud.com/pt/bare-metal/).
- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Um sistema operativo / Hypervisor que suporta o protocolo de agregação 802.3ad (LACP).

## Instruções

> [!warning]
>
> A configuração OLA faz-se em todas as interfaces de rede. Constituirão um agregado do tipo "agregação privada".
>
> Após a implementação do OLA, o IP público deixará de estar acessível.
>

### Configurar o OLA na Área de Cliente OVHcloud

Para começar a configurar o OLA, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e selecione o separador `Bare Metal Cloud`{.action}. Clique em `Servidores dedicados`{.action} e selecione o seu servidor na lista.

![network interfaces](images/network_interfaces2022.png){.thumbnail}

No separador `Interfaces de rede`{.action} (1), clique no botão `...`{.action} (2) À direita de "Modo" no quadro **OLA: OVHcloud Link Aggregation**. A seguir, clique em `Configurar a agregação privada`{.action} (2).

![interface select](images/interface_select2021.png){.thumbnail}

Verifique que as suas duas interfaces, ou grupos de interfaces, são bem selecionados e dê um nome à interface OLA. Clique em `Confirmar`{.action} depois de as suas verificações estarem terminadas.

A operação pode demorar alguns minutos até ficar concluída. O próximo passo consistirá em configurar as interfaces do seu sistema operativo como NIC bond ou NIC team. Para ficar a conhecer o procedimento, consulte os nossos manuais relativos aos sistemas operativos mais populares:

[Como configurar a NIC para o OVHcloud Link Aggregation em Debian 9](../ola-debian9/)

[Como configurar a NIC para o OVHcloud Link Aggregation em CentOS 7](../ola-centos7/)

[Como configurar a NIC para o OVHcloud Link Aggregation em Windows Server 2019](../ola-w2k19/)

### Restaurar OLA aos valores predefinidos

Para restaurar OLA aos valores predefinidos, clique no botão `...`{.action} à direita de "Modo" no quadro **OLA: OVHcloud Link Aggregation**. A seguir, clique em `Desconfigurar a agregação privada`{.action}. Clique em `Confirmar`{.action} no menu contextual.

![network interfaces](images/default_settings2021.png){.thumbnail}

A operação pode demorar alguns minutos.

## Saiba mais

[Como configurar a NIC para o OVHcloud Link Aggregation em Debian 9](../ola-debian9/)

[Como configurar a NIC para o OVHcloud Link Aggregation em CentOS 7](../ola-centos7/)

[Como configurar a NIC para o OVHcloud Link Aggregation em Windows Server 2019](../ola-w2k19/)

Junte-se à nossa comunidade de utilizadores <https://community.ovh.com/en/>.
