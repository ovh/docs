---
title: "Armazenar chaves SSH de servidor dedicado na área de cliente"
excerpt: "Importe e faça a gestão das suas chaves SSH públicas na área de cliente OVHcloud para uma implementação rápida nos seus servidores dedicados"
updated: 2024-12-04
---

## Objetivo

Os pares de chaves são utilizados para autenticar as ligações SSH entre os hosts, por exemplo, entre o cliente local do computador e um servidor remoto. Quando reinstala um servidor dedicado ou um VPS a partir da sua Área de Cliente, tem a possibilidade de adicionar uma chave pública ao sistema operativo. O armazenamento de chaves SSH públicas na sua Área de Cliente facilita este processo.

**Este manual explica-lhe como armazenar as suas chaves SSH públicas na sua Área de Cliente.**

## Requisitos

- Um [servidor dedicado](/links/bare-metal/bare-metal) ou um [VPS](/links/bare-metal/vps) na sua conta OVHcloud

> [!primary]
>
> Para mais informações sobre a utilização das chaves SSH com os serviços [Public Cloud](/links/public-cloud/public-cloud), consulte o nosso guia dedicado:
>
> [Como criar chaves SSH com OpenSSH para as instâncias Public Cloud](/pages/public_cloud/compute/creating-ssh-keys-pci)

<!-- CP-NAV-START:billing-services -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [My services](/links/control-panel/billing-services)
- **Caminho de navegação:** Clique no seu nome no canto superior direito > `As minhas ofertas e serviços`{.action}

---
<!-- CP-NAV-END:billing-services -->

## Instruções

Se ainda não criou nenhum par de chaves SSH, consulte os nossos manuais:

- [Criar e utilizar chaves SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Tutorial - Como utilizar o PuTTY para as ligações SSH e autenticação](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

![products and services](/pages/assets/screens/control_panel/product-selection/right-menu/my-solutions-and-services.png){.thumbnail}

Na secção `Serviços` da Área de Cliente, clique em `Chaves SSH`{.action}.

![control panel ssh keys](images/importkey1.png){.thumbnail}

Clique no botão `Adicionar uma chave SSH`{.action} e selecione `Dedicado`{.action} a partir do menu.

![control panel ssh keys](images/importkey2.png){.thumbnail}

Na janela que se abrir, introduza uma "etiqueta" para a chave no primeiro campo.  
Copie a cadeia da chave pública completa e cole-a no segundo campo.

![control panel ssh keys](images/importkey3.png){.thumbnail}

Clique no botão `Confirm`{.action}.

A chave ficará agora disponível durante a reinstalação de um servidor dedicado ou de um VPS na sua Área de Cliente.

Consulte os nossos manuais "Primeiros passos" para mais pormenores sobre este assumpto:

- [Servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Servidor dedicado da gama **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).
