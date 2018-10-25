---
title: 'Utilizar o plugin OVH Network'
slug: plugin-ovh-network
excerpt: 'Saiba como utilizar o plugin OVH Network no serviço Private Cloud'
legacy_guide_number: '7766560'
section: 'Funcionalidades da OVH'
---

**Última atualização: 07/09/2018**

## Sumário

O plugin OVH Network é desenvolvido pela OVH. O seu papel é oferecer uma gestão mais detalhada do conjunto dos endereços IP associados ao serviço [Private Cloud](https://www.ovh.pt/private-cloud/){.external}.

**Saiba como utilizar o plugin OVH Network no seu serviço Private Cloud.**

## Requisitos

* Dispor do serviço [Private Cloud](https://www.ovh.pt/private-cloud/){.external}.
* Dispor de um bloco de endereços IP associado ao [Private Cloud](https://www.ovh.pt/private-cloud/){.external}.
* Aceder à interface de gestão vSphere.

## Instruções

Clique no menu `Host and Cluster`{.action} e escolha um datacenter ou um cluster da infraestrutura. A seguir, clique em `Manage`{.action} e em `OVH Network`{.action}.

![Plugin OVH Network](images/network_01.png){.thumbnail}

Ser-lhe-á apresentada a secção `Summary`, que recapitula os blocos de endereços IP que detém e as informações de base de cada bloco.

![Informações sobre os endereços IP e os blocos](images/network_02.png){.thumbnail}

A parte **IP Blocks** lista o conjunto dos endereços IP do bloco. Tenha o cuidado de não utilizar os **5 endereços IP do bloco reservados** à configuração e à alta disponibilidade deste último, nomeadamente:
\- o primeiro endereço IP, que anuncia o bloco no router;
\- o último endereço IP, que é o de **broadcast**;
\- o penúltimo, que é o **gateway**;
\- os dois endereços IP antes do gateway, que são utilizados enquanto **HSRP** (Hot Standby Router Protocol) nos routers.

![Blocos de endereços IP](images/network_03.png){.thumbnail}

De modo a indicar ao plugin OVH que os seus endereços IP públicos já estão a ser utilizados, é preciso realizar um pedido ARP (_arping_) a partir da ou das máquinas virtuais que utilizam estes endereços. Atenção: certas configurações com uma firewall virtual não permitem a recuperação dos endereços MAC se o protocolo ARP não for autorizado.

De seguida, poderá configurar os Reverse IP para, por exemplo, um servidor de e-mail. Esta configuração também pode ser feita a partir da [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} e das [API OVH](https://api.ovh.com/){.external}. Clique nos três pontos verticais à esquerda do endereço IP e, a seguir, em `Edit Reverse`{.action}.

![Botão Edition Reverse](images/network_04.png){.thumbnail}

Introduza o Reverse e valide através da opção `Confirm`{.action}.

![Edição do Reverse](images/network_05.png){.thumbnail}

Este último surgirá à direita do endereço IP, na lista dos endereços IP do bloco.

![Edição dos endereços IP](images/network_06.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: [Comunidade OVH](https://community.ovh.com/en/){.external}
