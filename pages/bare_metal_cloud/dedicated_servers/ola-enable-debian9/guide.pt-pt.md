---
title: 'Como configurar a NIC para o OVHcloud Link Aggregation em Debian 9'
excerpt: 'Ative o OVHcloud Link Aggregation no seu servidor Debian 9'
updated: 2022-01-07
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 25/03/2021**

## Sumário

A tecnologia OVHcloud Link Aggregation (OLA) foi criada pelas nossas equipas para aumentar a disponibilidade do seu servidor e aumentar a eficiência das suas ligações de rede. Em apenas alguns cliques, pode agregar as suas placas de rede e tornar as suas ligações de rede redundantes. Isto significa que se uma ligação for interrompida, o tráfego é automaticamente redirecionado para outra ligação disponível.

**Neste manual, explicaremos como ligar as suas NIC para as utilizar para o OLA em Debian 9.**

## Requisitos

- [Como configurar a NIC para o OVHcloud Link Aggregation na Área de Cliente OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager){.external}
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

> [!warning]
>
> Será necessário descarregar o pacote ifenslave no servidor antes de ativar o OLA na Área de Cliente ou API da OVHcloud. Para isso, utilize o seguinte comando:
>
> ```
> apt install ifenslave
> ```
>

## Instruções

A configuração private-private disponível no OLA para as nossas NIC não permite aceder ao servidor em SSH. Para aceder ao servidor, é necessário utilizar a ferramenta IPMI.
<br>Para o fazer, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Na secção `Bare Metal Cloud`{.action}, selecione o seu servidor em `Servidores dedicados`{.action} e clique no separador `IPMI`{.action} (1).

Em seguida, clique no botão `A partir de applet java (KVM)`{.action} (2).

![remote_kvm](images/remote_kvm2022.png){.thumbnail}

Um programa JNLP será descarregado. Abra o programa para entrar no IPMI. Inicie a sua sessão usando credenciais válidas para o servidor.

Por predefinição, com um modelo OVHcloud, as NIC são designadas *ethX* e *enoX*. Se não estiver a utilizar um modelo OVHcloud, pode encontrar os nomes das suas interfaces através do seguinte comando:

```bash
ip a
```

> [!primary]
>
> Este comando irá produzir várias "interfaces". Se tiver dificuldade em determinar quais são as suas NIC físicas, a primeira interface ainda terá o endereço IP público do servidor anexado por predefinição.
>

Assim que tivermos determinado os nomes das nossas duas NIC, configuraremos a ligação entre as NIC no sistema operativo. Crie o ficheiro de interfaces num editor de texto à sua escolha através do seguinte comando:

```bash
vi /etc/network/interfaces
```

Um ficheiro de texto vazio aparecerá. Para configurar a interface de ligação, introduza o seguinte na parte inferior do ficheiro de texto:

```bash
auto bond0
  iface bond0 inet static
  address 10.0.0.1/24
  bond-mode 802.3ad
  bond-slaves eno1 eno2
  bond-miimon 100
  bond-downdelay 200
  bond-lacp-rate 1
  bond-xmit_hash_policy layer2+3

  up ip -6 addr add fc10:0000:0000:0001::/64 dev bond0
```

> [!primary]
>
> Para configurar uma rede privada através do IPv6, só precisará de adicionar a última linha a este ficheiro. 
>

Finalmente, iremos reiniciar o daemon de rede usando o seguinte comando:

```bash
systemctl restart networking
```

Este reinício pode levar vários minutos, uma vez que está a construir a interface de ligação.  Para testar se a ligação está a funcionar, faça um teste de ping noutro servidor da mesma rede vRack. Se funcionar, está tudo pronto. Caso contrário, volte a verificar as suas configurações ou tente reiniciar o servidor.

## Quer saber mais?

[Como configurar a NIC para o OVHcloud Link Aggregation na Área de Cliente OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Como configurar a NIC para o OVHcloud Link Aggregation em CentOS 7](/pages/bare_metal_cloud/dedicated_servers/ola-enable-centos7)

[Como configurar a NIC para o OVHcloud Link Aggregation em Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
