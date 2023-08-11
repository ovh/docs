---
title: Ligar-se à interface vSphere
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vsphere_interface_connexion'
excerpt: Descubra as diferentes formas de se ligar ao vSphere
updated: 2020-11-18
---

**Última atualização: 18/11/2020**

## Objetivo

**Este manual apresenta-lhe as diferentes formas de se ligar ao vSphere.**

## Requisitos

- Ser um contacto administrador do Hosted Managed Bare Metal, pois é este contacto que recebe as credenciais de ligação.
- Ter criado um utilizador ativo na Área de Cliente.

## Instruções

### Recuperação de credenciais

As credenciais são enviadas por e-mail durante a criação do Hosted Managed Bare Metal, aquando da modificação da palavra-passe ou aquando da criação de um utilizador:

```
endereço IP/Nome: pcc-xxx-xxx-xxx-xxx.ovh.com nome de utilizador: admin palavra-passe: xxxxxx
```

Este documento da VMware especifica as diferentes portas que deve abrir na sua firewall para, por exemplo, aceder à consola: [Acesso consola](https://kb.vmware.com/kb/1012382){.external-link}

### Utilização do web client HTML5

O web client HTML5 está disponível na interface web do seu Hosted Managed Bare Metal no endereço: `https://pcc-xxx-xxx-xxx-xxx.ovh.com/ui` (substitua pcc-xxx-xx-xx-xxx.ovh.com pelo endereço do seu Hosted Managed Bare Metal).

![Ligação à interface vSphere HTML5](images/connection_interface_w_html5.png){.thumbnail}

A seguir, deverá aceder à seguinte interface:

![Ligação à interface vSphere HTML5](images/vsphere-client-html5.png){.thumbnail}

A página `Home`{.action} permite consultar os grandes menus do seu vCenter. Poderá efetuar diferentes ações, tais como.

- Implementar uma máquina virtual acedendo à secção `Hosts and Clusters`{.action};
- Consultar os seus datastores

### Utilização do web client flash

O web client flash está disponível na interface web do seu Hosted Managed Bare Metal no endereço: `https://pcc-xxx-xxx-xxx-xxx.ovh.com/vsphere-client` (substitua pcc-xxx-xx-xx-xxx.ovh.com pelo endereço do seu Hosted Managed Bare Metal).

Ligue-se com as credenciais que recebeu:

![Client vSphere](images/vsphere-client.png){.thumbnail}

A seguir, deverá aceder à seguinte interface:

![Ligação à interface vSphere](images/connection_interface_w.png){.thumbnail}

A página `Home`{.action} permite consultar os grandes menus do seu vCenter. Poderá efetuar diferentes ações, tais como.

- Implementar uma máquina virtual acedendo à secção `Hosts and Clusters`{.action};
- Consultar os seus datastores.


## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
