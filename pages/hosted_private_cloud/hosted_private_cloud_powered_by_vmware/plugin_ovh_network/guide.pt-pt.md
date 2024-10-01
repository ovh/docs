---
title: Utilizar o plugin OVHcloud Network
excerpt: Saiba como utilizar o plugin OVHcloud Network no serviço Hosted Private Cloud
updated: 2020-07-01
---

## Objetivo

O plugin OVHcloud Network foi concebido para permitir uma gestão mais orientada dos endereços IP associados ao seu Hosted Private Cloud.

**Este manual explica como utilizar o plugin OVHcloud Network no seu serviço Hosted Private Cloud.**

## Requisitos

- Dispor de uma oferta [Hosted Private Cloud](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/){.external}.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Um bloco de endereços IP associado ao seu Hosted Private Cloud.
- Aceder à interface vSphere.

## Instruções

Depois de aceder à interface vSphere, selecione o seu datacenter no menu à esquerda. Aceda ao separador `Configure`{.action} e clique em `Network`{.action} em “OVHcloud” no separador de navegação à esquerda para mostrar a secção “Network summary”.

![Network summary](images/ovhcloudplugin_01.png){.thumbnail}

Os seus blocos IP são apresentados aqui, assim como algumas informações de base sobre estes últimos. Clique num bloco IP para ver na tabela todos os seus endereços IP.

![Informação sobre IP e blocos](images/ovhcloudplugin_02.png){.thumbnail}

Pode verificar o “reverse” de cada endereço e o seu alvo. Alguns endereços serão marcados como “Reserved”. Tenha em atenção que não utilize estes **cinco endereços IP reservados à configuração do bloco e a alta disponibilidade**, nomeadamente:

- o primeiro endereço IP, que anuncia o bloco no router;
- o último endereço IP, que é o de **broadcast**;
- o penúltimo, que é o **gateway**;
- os dois endereços IP antes do gateway, que são utilizados enquanto **HSRP** (Hot Standby Router Protocol) nos routers.

> [!warning]
> Certas configurações com uma firewall virtual não permitem a recuperação dos endereços MAC se o protocolo ARP não for autorizado.
>

De seguida, pode personalizar o “reverse” do seu endereço IP nesta tabela (durante a configuração de um servidor de e-mails, por exemplo). Clique nos três pontos verticais à esquerda do endereço IP e, a seguir, em Edit Reverse.

![Botão Edit Reverse](images/ovhcloudplugin_03.png){.thumbnail}

Introduza o “reverse” e clique em `Confirm`{.action}.

O novo “reverse” será então apresentado na tabela.

> [!primary]
>
> Este processo de configuração também é acessível na sua [Área de Cliente OVHcloud](/links/manager). 
> 

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
