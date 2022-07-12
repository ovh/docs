---
title: Ligar-se à interface vSphere
excerpt: Descubra as diferentes formas de se ligar ao vSphere
slug: instalar_o_vsphere_client
section: Introdução
order: 2
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 24/06/2022**

## Objetivo

**Este manual explica-lhe como aceder ao vSphere.**

## Requisitos

- Ter contacto com o administrador da infraestrutura [Hosted Private Cloud](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/), para receber dados de acesso.
- Ter adicionado endereços IP à secção `Segurança`{.action} do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Para mais informações, consulte o nosso guia [Autorizar IP a ligar-se ao vCenter](https://docs.ovh.com/pt/private-cloud/autorizar-ip-a-ligar-se-ao-vcenter/).

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

A página `Home`{.action} permite consultar os grandes menus do seu vCenter.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
