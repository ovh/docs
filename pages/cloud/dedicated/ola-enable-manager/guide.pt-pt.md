---
title: 'Como configurar a NIC para o OVHcloud Link Aggregation na Área de Cliente OVHcloud'
slug: ola-manager
excerpt: 'Ative o OVHcloud Link Aggregation na sua Área de Cliente'
section: 'Uso avançado'
---

**Última atualização: 08/11/2019**

## Sumário

A tecnologia OVHcloud Link Aggregation (OLA) foi criada pelas nossas equipas para aumentar a disponibilidade do seu servidor e aumentar a eficiência das suas ligações de rede. Em apenas alguns cliques, pode agregar as suas placas de rede e tornar as suas ligações de rede redundantes. Isto significa que se uma ligação for interrompida, o tráfego é automaticamente redirecionado para outra ligação disponível. Neste manual, discutiremos como criar o OLA na Área de Cliente OVHcloud.

## Requisitos

Certifique-se de que encomendou o OLA através da Área de Cliente OVHcloud antes de seguir os passos deste manual.

> [!warning]
>
> Para realizar qualquer alteração ao OLA, terá de remover primeiro todos os servidores do vRack ao qual estejam atualmente associados e remover o respetivo IP Failover.
>

## Instruções

Para começar a configurar o OLA, inicie a sua sessão na [Área de Cliente OVHcloud](https://www.ovh.com/manager/){.external}. Clique no botão **Server** na parte superior e selecione o servidor em questão no menu pendente da barra lateral esquerda. Em seguida, clique no separador **Interfaces rede**. Depois de confirmar que o servidor não está associado a qualquer vRack, clique no botão **Já fiz isso, passar para o próximo passo**. 

![interfaces de rede](images/network_interfaces.png){.thumbnail}

No passo "Configuração", clique no botão **Configurar**.

![configurar](images/configure.png){.thumbnail}

A seguir, selecione a opção "Agregação privada" e atribua um nome à interface. Clique no botão **Próximo** depois de confirmar que tudo está correto.

![agregação privada](images/private_aggregation.png){.thumbnail}

No separador seguinte, selecione todas as interfaces que pretende agregar no OLA e, depois, clique em **Seguinte**.

![seleção de interface](images/interface_select.png){.thumbnail}

Consulte a informação no passo "Visão geral da configuração". Quando tiver confirmado que todas as informações estão corretas, clique no botão **Criar**.

![apresentação](images/overview.png){.thumbnail}

A operação pode demorar alguns minutos até ficar concluída. O próximo passo consistirá em configurar as interfaces do seu sistema operativo como NIC bond ou NIC team. Para ficar a conhecer o procedimento, consulte os nossos manuais relativos aos sistemas operativos mais populares:

[Como configurar a NIC para o OVHcloud Link Aggregation em Debian 9](https://docs.ovh.com/pt/dedicated/ola-debian9/){.ref}

[Como configurar a NIC para o OVHcloud Link Aggregation em CentOS 7](https://docs.ovh.com/pt/dedicated/ola-centos7/){.ref}

[Como configurar a NIC para o OVHcloud Link Aggregation em Windows Server 2019](https://docs.ovh.com/pt/dedicated/ola-w2k19/){.ref}

## Conclusão

Na OVHcloud, acreditamos na inovação para a liberdade (“Innovation for Freedom”). O OLA oferece aos nossos clientes a liberdade para utilizar as suas NIC conforme as suas necessidades. Depois de ler este manual, deverá poder configurar o seu servidor com o OLA na Área de Cliente. 