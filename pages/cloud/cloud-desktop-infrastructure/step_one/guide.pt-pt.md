---
title: 'Passo 1 - a plataforma VMware Horizon 7.1'
slug: plataforma-horizon-7
excerpt: 'Saiba como conectar-se pela primeira vez ao VMware Horizon 7.1'
section: Preparação
order: 1
---

**Última atualização: 14/02/2018**

## Sumário

Através de cinco passos, vamos explicar-lhe como gerir a [Cloud Desktop Infrastructure](https://www.ovh.pt/cloud/cloud-desktop/infrastructure/){.external}.

**Este primeiro guia explica como começar a usar a plataforma VMware Horizon 7.1**.

## Requisitos

- Ter recebido por e-mail as credenciais para a [Cloud Desktop Infrastructure](https://www.ovh.pt/cloud/cloud-desktop/infrastructure/){.external}.

## Instruções

### Informações gerais

A plataforma VMware Horizon 7.1 é composta por vários elementos:

- uma interface de gestão VMware Horizon 7.1;
- um endereço de acesso (URL) à sua primeira pool de ambientes de trabalho virtuais;
- uma plataforma [Private Cloud](https://www.ovh.pt/private-cloud/){.external} para criar máquinas virtuais e ambientes de trabalho virtuais.


### Infraestrutura

![infrastrutura do VMware Horizon 7.1](images/1200.png){.thumbnail}

A OVH mobiliza, gere e supervisiona (*View ConnectionServer*, *View Composer*, *View ActiveDirectory*) é implementada, gerida e supervisionada pela OVH, de forma a que não sejam afetados os recursos que lhe são disponibilizados para a criação dos seus pools de ambientes de trabalho virtuais.

A OVH implementa routers virtuais (vRouter OVH) e *AccessPoints* para que os seus pools tenham acesso completo aos recursos Private Cloud disponibilizados com a sua plataforma.

De forma padrão, a rede privada com um AccessPoint está configurada quando a plataforma é disponibilizada. Poderá, depois, adicionar outros *AccessPoints*através do seu painel de controlo. É possível adicionar outras através da Área de Cliente.


### Entrega

Depois de realizado o pagamento da encomenda, receberá no prazo de uma hora um e-mail com a mensagem que se segue. Nele encontrará todos os elementos que lhe permitirão conectar-se à sua infraestrutura de modo a criar e gerir a primeira pool. 

> [!secondary]
>
> Caro (a) Cliente,
>
> Acabou de instalar no seu datacenter a opção Virtual Desktop Infrastructure (VDI), pelo que lhe agradecemos.
>
> 
>Encontrará de seguida os dados necessários ao acesso ao serviço:
>
> 
> * desktop administration access: <https://#URL#/admin>
> 
> * username: #USERNAME#
> 
> * palavra-passe: #PASSWORD#
> 
> 
> É necessário conectar-se à sua Private Cloud para administrar os templates.
>
> Pode aceder a ela:
> 
> - através do vSphere Client
> 
>   * Para o descarregar: <https://#VPNHOSTNAME#/client/VMware-viclient.exe>
> 
>   * Endereço IP: #VPNHOSTNAME#
>
> 
> - através do vSphere Web Client
> 
> <https://#VPNHOSTNAME#/vsphere-client>
>
> Nota: o vSphere utiliza estas portas de acesso: 80, 443 e 8443. Para criar a primeira pool, deve utilizar as informações seguintes:
>
> 
> * desktop access: <https://#POOLURL#>
> 
> * rede DHCP: #PORTGROUP#
>
> 
> Aqui estão os dez utilizadores do domínio:
> 
> * vdi1 : #USER1#
> 
> * vdi2 : #USER2#
> 
> * vdi3 : #USER3#
> ...
>
> 
> Se necessitar, não hesite em consultar a documentação da solução Cloud Desktop Infrastructure neste endereço:
> 
>  
> <https://www.ovh.pt/cloud/cloud-desktop/infrastructure/>
>
> 
> Pode igualmente apresentar as suas dúvidas e partilhar a sua experiência através do seguinte endereço:
>
> 
> cdi@ml.ovh.net
> 
>  
> Agradecemos a confiança que deposita na OVH e estamos à sua disposição.
> 
> A equipa Cloud Desktop Infrastructure
> 


Agora veja como [criar um modelo de pool - EN](https://docs.ovh.com/gb/en/cloud-desktop-infrastructure/create-pool/){.external}.


## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.