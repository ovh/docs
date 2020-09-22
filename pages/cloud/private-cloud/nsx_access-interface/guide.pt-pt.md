---
title: Aceder à interface de gestão NSX
slug: aceder-a-interface-de-gestao-nsx
excerpt: Descubra a interface de NSX
section: IMAGENS E LICENÇAS
order: 01
---

**Última atualização: 31/07/2020**

## Objetivo

NSX é uma solução de Software Defined Network (SDN) desenvolvida pela VMware, que se ativa ao nível do vCenter e que é controlada diretamente na interface vSphere. Com o NSX pode configurar as regras de acesso às suas redes, definir regras de segurança e implementar, em poucos minutos, vários serviços de rede necessários à criação da sua infraestrutura.

**Este manual apresenta-lhe esta interface.**

## Requisitos

- Dispor de uma credencial de utilizador ativa com direitos específicos para NSX
- Estar ligado à [interface vSphere](../instalar_o_vsphere_client/)

## Instruções

VMWare NSX só está disponível a partir da interface vSphere.

Através da página inicial do client vSphere, clique na categoria `Networking & Security`{.action} no menu da esquerda:

![Networking and Security](images/nsx01.png){.thumbnail}

Terá acesso à página inicial NSX com todos os menus associados.


> [!primary]
>
> Para aceder à API NSX, deve utilizar https://nsx.pcc-x-x-x-x.ovh.com/api
>
> Exemplo para recuperar a sua configuração de firewall: 
>
> ```
> curl -u "admin:xxxx" -XGET "https://nsx.pcc-x-x-x-x.ovh.com/api/4.0/firewall/globalroot-0/defaultconfig"
> ```
>
> Por razões de segurança, /api/1.0/ não são consideradas.
> 


## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
