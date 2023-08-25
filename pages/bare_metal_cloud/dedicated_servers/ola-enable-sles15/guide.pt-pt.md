---
title: "Como configurar o seu NIC para a agregação de ligações OVHcloud no SLES 15"
excerpt: 'Ativar o OVHcloud Link Aggregation no seu servidor SLES 15'
updated: 2023-03-07
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>


## Objetivo

A tecnologia OVHcloud Link Aggregation (OLA) foi concebida pelas nossas equipas para aumentar a disponibilidade do seu servidor e melhorar a eficácia das suas ligações de rede. Em apenas alguns cliques, pode agregar as suas placas de rede e tornar as suas ligações de rede redundantes. Isto significa que, se uma ligação avariar, o tráfego é automaticamente redirecionado para outra ligação disponível.

**Saiba como reagrupar os seus NIC (Network Interface Controller) para os utilizar com o serviço OLA no SLES 15.**

## Requisitos

- [Ter configurado o seu NIC para a funcionalidade OVHcloud Link Aggregation a partir da Área de Cliente OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

## Instruções

Uma vez que temos uma configuração privada para os nossos NIC em OLA, é impossível ligar-se ao servidor através de SSH. Assim, deverá utilizar a ferramenta IPMI para aceder ao servidor.

Para isso, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e aceda ao separador `Bare Metal Cloud`{.action}. Selecione o seu servidor na lista na secção `Servidores dedicados`{.action}.

A seguir, clique no separador `IPMI`{.action} (1) e no botão `A partir de applet Java (KVM)`{.action} (2).

![remote kvm](images/remote_kvm2022.png){.thumbnail}

Um programa JNLP será descarregado. Execute o software para aceder ao IPMI. Ligue-se utilizando as informações de identificação associadas ao servidor.

Por predefinição, utilizando um modelo OVHcloud, os NIC serão designados por *eth1* e *eth2*. Se não utiliza um modelo OVHcloud, pode encontrar os nomes das suas interfaces utilizando o seguinte comando:

```bash
ip a
```

> [!primary]
>
> Este comando irá devolver várias "interfaces". Se tiver dificuldades em identificar os seus NIC físicos, a primeira interface terá sempre o endereço IP público do servidor atribuído por predefinição.
>

Depois de identificar os nomes dos seus dois NIC, é necessário criar o NIC bonding ou agregação de ligação no sistema operativo. Para isso, crie o ficheiro de interfaces no editor de texto à sua escolha através do seguinte comando:

```bash
vi/etc/sysconfig/network/ifcfg-bond0
```

Isto abrirá um ficheiro de texto vazio. Para configurar a interface de agregação, insira as seguintes linhas no ficheiro de texto:

```bash
STARTMODE='onboot'
BOOTPROTO='static'
IPADDR='10.0.0.1/24'
BONDING_MASTER='yes'
BONDING_SLAVE_0='eth1'
BONDING_SLAVE_1='eth2'
BONDING_MODULE_OPTS='mode=802.3ad miimon=100 xmit_hash_policy=layer3+4'
```

> [!primary]
>
> Pode utilizar qualquer endereço IP e sub-rede privada que deseje.
> Se o seu servidor possuir mais do que 2 interfaces de rede, pode adicioná-las na configuração aumentando o número do parâmetro `BONDING_SLAVE_`, por exemplo, `BONDING_SLAVE_2='eth3'`.
>

Guarde e saia o ficheiro assim que confirmar que a informação está correta.  Agora tem de configurar as duas interfaces físicas. Por predefinição, para um servidor OVHcloud, só a *eth1* terá um ficheiro de configuração. Abra-o através do seguinte comando:

```bash
vi/etc/sysconfig/network/ifcfg-eth1
```

Por predefinição, o ficheiro exibirá o seguinte texto:

```bash
# Created by cloud-init on instance boot automatically, do not edit.
#
BOOTPROTO=dhcp4
IPADDR6=2001:41d0:408:dd00::/56
LLADDR=10:70:fd:c5:14:00
STARTMODE=auto
```

> [!warning]
>
> Os endereços IP serão diferentes para cada servidor.
>

Deve alterar este ficheiro para que este apresente o seguinte texto:

```bash
BOOTPROTO='none'
#IPADDR6=2001:41d0:408:dd00::/56
LLADDR=10:70:fd:c5:14:00
STARTMODE='hotplug'
```

> [!primary]
>
> O endereço de hardware (endereço MAC) do NIC pode ser encontrado através da encomenda `ip que` utilizou anteriormente. Será o número ao lado do `link/ether` do resultado apresentado.
>

O *#* à frente de uma linha indica que o servidor ignorará esta linha ao ler o ficheiro. Isto significa que estas linhas não serão tidas em conta ao criar o ficheiro de interface para *eth1*.

Deverá criar o ficheiro de configuração *eth2* através do seguinte comando:

```bash
vi/etc/sysconfig/network/ifcfg-eth2
```

Desta vez, o ficheiro estará vazio. Deverá adicionar o seguinte conteúdo:

```bash
BOOTPROTO='none'
STARTMODE='hotplug'
LLADDR=0c:42:a1:a7:29:c2
```

Por fim, é necessário reiniciar o serviço de rede com o seguinte comando:

```bash
wicked ifreload all
```

Para verificar que este agregado funciona, faça ping para outro servidor no mesmo vRack. Se isto funcionar, o processo de configuração estará concluído. Se não for o caso, verifique as suas configurações ou tente reiniciar o servidor.

Também pode verificar os parâmetros utilizados pela sua interface ifcfg-bond0 através do seguinte comando:

```bash
/proc/net/bonding/bond0
```

## Saiba mais

[Configurar a agregação das ligações OLA na sua Área de Cliente](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager).

[Como configurar o seu NIC para a agregação de ligações OVHcloud em Debian 9](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).

[Como configurar o seu NIC para agregar as ligações OVHcloud em CentOS 7](/pages/bare_metal_cloud/dedicated_servers/ola-enable-centos7).

[Como configurar o seu NIC para a agregação de ligações OVHcloud em Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
