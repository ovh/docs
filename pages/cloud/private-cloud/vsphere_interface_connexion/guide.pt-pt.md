---
title: Ligar-se à interface vSphere
excerpt: Descubra as diferentes formas de se ligar ao vSphere
slug: instalar_o_vsphere_client
section: Introdução
order: 2
---

**Última atualização: 29/07/2020**

## Objetivo

**Este manual apresenta-lhe as diferentes formas de se ligar ao vSphere.**

## Requisitos

- Ser um contacto administrador do Hosted Private Cloud, pois é este contacto que recebe as credenciais de ligação.
- Ter criado um utilizador ativo na Área de Cliente.

## Instruções

### Recuperação de credenciais

As credenciais são enviadas por e-mail durante a criação do Hosted Private Cloud, aquando da modificação da palavra-passe ou aquando da criação de um utilizador:

```
endereço IP/Nome: pcc-xxx-xxx-xxx-xxx.ovh.com nome de utilizador: admin palavra-passe: xxxxxx
```

Este documento da VMware especifica as diferentes portas que deve abrir na sua firewall para, por exemplo, aceder à consola: [Acesso consola](https://kb.vmware.com/kb/1012382){.external-link}

### Utilização do web client HTML5

O web client HTML5 está disponível na interface web do seu Hosted Private Cloud no endereço: <https://pcc-xxx-xxx-xxx-xxx.ovh.com/ui> (substitua pcc-xxx-xx-xx-xxx.ovh.com pelo endereço do seu Hosted Private Cloud).

![Ligação à interface vSphere HTML5](images/connection_interface_w_html5.png){.thumbnail}

A seguir, deverá aceder à seguinte interface:

![Ligação à interface vSphere HTML5](images/vsphere-client-html5.png){.thumbnail}

A página `Home`{.action} permite consultar os grandes menus do seu vCenter. Poderá efetuar diferentes ações, tais como.

- Implementar uma máquina virtual acedendo à secção `Hosts and Clusters`{.action};
- Consultar os seus datastores

> [!warning]
>
> A gestão das aplicações *NSX Edge* ainda não é suportada neste web client.
>

### Utilização do web client flash

O web client flash está disponível na interface web do seu Hosted Private Cloud no endereço: <https://pcc-xxx-xxx-xxx-xxx.ovh.com/vsphere-client> (substitua pcc-xxx-xx-xx-xxx.ovh.com pelo endereço do seu Hosted Private Cloud).

Ligue-se com as credenciais que recebeu:

![Client vSphere](images/vsphere-client.png){.thumbnail}

A seguir, deverá aceder à seguinte interface:

![Ligação à interface vSphere](images/connection_interface_w.png){.thumbnail}

A página `Home`{.action} permite consultar os grandes menus do seu vCenter. Poderá efetuar diferentes ações, tais como.

- Implementar uma máquina virtual acedendo à secção `Hosts and Clusters`{.action};
- Se beneficiar desta opção, utilize o NSX acedendo à secção `Network & Security`{.action};
- Consultar os seus datastores.


## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
