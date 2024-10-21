---
title: 'Como configurar a NIC para o OVHcloud Link Aggregation em Windows Server 2019'
excerpt: 'Ative o OVHcloud Link Aggregation no seu servidor Windows Server 2019'
updated: 2021-03-25
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Sumário

A tecnologia OVHcloud Link Aggregation (OLA) foi criada pelas nossas equipas para aumentar a disponibilidade do seu servidor e aumentar a eficiência das suas ligações de rede. Em apenas alguns cliques, pode agregar as suas placas de rede e tornar as suas ligações de rede redundantes. Isto significa que se uma ligação for interrompida, o tráfego é automaticamente redirecionado para outra ligação disponível.

## Requisitos

- [Como configurar a NIC para o OVHcloud Link Aggregation na Área de Cliente OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager){.external}
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

A configuração private-private disponível no OLA para as nossas NIC não permite aceder ao servidor em SSH. Para aceder ao servidor, é necessário utilizar a ferramenta IPMI.
<br>Para o fazer, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Na secção `Bare Metal Cloud`{.action}, selecione o seu servidor em `Servidores dedicados`{.action} e clique no separador `IPMI`{.action} (1).

Em seguida, clique no botão `A partir de applet java (KVM)`{.action} (2).

![remote_kvm](images/remote_kvm2022.png){.thumbnail}

Um programa JNLP será descarregado: Abra-o  e introduza as credenciais associadas ao servidor.

Uma vez efetuado o login, abra o Server Manager (se não abriu por predefinição, está disponível no menu Start).

![server manager](images/local_server.png){.thumbnail}

A seguir, clique no separador **Local Server** à esquerda e, a seguir, em **Disabled** junto de “NIC Teaming”.

![local server](images/server_manager.png){.thumbnail}

Na nova janela, clique em “**TASKS** na secção “TEAMS” e selecione “New Team” no menu pendente.

![nic teaming](images/nic_teaming.png){.thumbnail}

Dê um nome à equipa e verifique as NIC a utilizar com o OLA. Clique na seta descendente junto de “Additional properties” e modifique o “Teaming mode” em LACP. Clique em **OK** depois de confirmar que a informação está correta.

![new team](images/new_team.png){.thumbnail}

Poderá demorar alguns minutos até que a equipa NIC fique online. Depois de concluído, clique no ícone de ligação de rede no canto direito inferior.  A seguir, clique em **Network & Internet settings**.  Selecione **Ethernet** na barra lateral à esquerda.

![network button](images/network_button.png){.thumbnail}

Clique no botão **Change adapter options**.

![ethernet](images/ethernet.png){.thumbnail}

De seguida, clique com o botão direito do rato na equipa NIC e selecione **Properties** no menu pendente.

![properties](images/properties.png){.thumbnail}

Na nova janela, clique duas vezes em **Internet Protocol Version 4 (TCP/IPv4)**.

![ipv4](images/ipv4.png){.thumbnail}

Clique em “Use the following IP address” e adicione o IP privado e a subrede. Clique em **OK** depois de confirmar que as configurações estão corretas.

![ipv42](images/ipv42.png){.thumbnail}

Para testar se a equipa NIC está a funcionar, faça um teste de ping noutro servidor da mesma rede vRack.  Se funcionar, está tudo pronto. Caso contrário, volte a verificar as suas configurações ou tente reiniciar o servidor.

## Quer saber mais?

[Como configurar a NIC para o OVHcloud Link Aggregation na Área de Cliente OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Como configurar a NIC para o OVHcloud Link Aggregation em Debian 9](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Como configurar a NIC para o OVHcloud Link Aggregation em CentOS 7](/pages/bare_metal_cloud/dedicated_servers/ola-enable-centos7)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
