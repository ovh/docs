---
title: 'Criar um registo CNAME para associar um domínio'
excerpt: 'Como e porquê adicionar um registo CNAME a um domínio OVHcloud'
slug: exchange_20132016_adicionar_um_campo_do_tipo_cname
legacy_guide_number: g1519
section: Primeiros passos com Exchange
order: 05
---

**Última atualização: 06/09/2019**

## Sumário

Ao adicionar um domínio ao seu e-mail, poderá ser-lhe solicitada uma configuração do registo CNAME (DNS). Esta tem como objetivo garantir que a adição do domínio em questão é legítima.

**Saiba como e porquê adicionar um registo CNAME a um domínio OVHcloud.**

## Requisitos

- Ter uma solução de e-mail na OVHcloud.
- Ter adicionado ao serviço de e-mail um domínio que requer a criação de um registo CNAME.
- Poder alterar a configuração do seu domínio (a sua zona DNS).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção `Web Cloud`{.action}.

## Instruções

### 1 - Compreender o diagnóstico CNAME da OVHcloud

Em certos casos, na fase de declaração de um domínio no seu serviço Exchange, poderá aparecer a etiqueta de diagnóstico **CNAME** (Canonical Name), que permite demonstrar que é o administrador do domínio a declarar.

Este diagnóstico pode aparecer nos seguintes casos:

- o domínio declarado não está registado na OVHcloud;
- o domínio declarado não é gerido pelo mesmo ID de cliente que o serviço de e-mail;
- o domínio declarado não utiliza a configuração da OVHcloud (os servidores DNS).

![cnamedomainemail](images/cname_exchange_diagnostic.png){.thumbnail}

### 2 - Obter a configuração CNAME da OVHcloud

Abra o separador `Domínios associados`{.action} e clique na etiqueta vermelha `CNAME`{.action} para obter as informações necessárias.

O registo CNAME aparece na imagem.

![cnamedomainemail](images/cname_exchange_informations.png){.thumbnail}

Existem duas possibilidades:

- **O seu domínio utiliza a configuração da OVHcloud**: pode realizar as operações descritas abaixo a partir da Área de Cliente OVHcloud;

- **O seu domínio não utiliza a configuração da OVHcloud**: deve realizar as modificações a partir da interface que lhe permite gerir a configuração do seu domínio.

> [!primary]
>
> Se o seu domínio estiver registado na OVHcloud, verifique se este utiliza a nossa configuração a partir da Área de Cliente. Para tal, clique em `Servidores DNS`{.action} e selecione o domínio correspondente.
>

### 3 - Criar o registo CNAME na configuração da OVHcloud

Clique em `Domínios`{.action}, selecione o domínio em questão. De seguida, selecione o separador `Zona DNS`{.action}.

Irá aparecer uma tabela com a configuração do domínio na OVHcloud. Cada linha da tabela contém um registo DNS.

Para adicionar um registo CNAME, clique no botão `Adicionar uma entrada`{.action} e selecione a opção MX.

![cnamedomainemail](images/cname_exchange_add_entry_step1.png){.thumbnail}

Na nova janela são apresentados vários tipos de registos DNS. Clique em `CNAME`{.action} e introduza a informação obtida durante o diagnóstico.

![cnamedomainemail](images/cname_add_entry_dns_zone.png){.thumbnail}

Depois de introduzida a informação, clique no botão `Seguinte`{.action}. Certifique-se de que as informações estão corretas e, depois, clique em `Validar`{.action}.

> [!primary]
>
> A propagação das alterações pode demorar entre 4 e 24 horas.
>

Pode verificar se a configuração do registo CNAME está correta no separador `Domínios associados`{.action} do seu serviço de e-mail. A etiqueta verde indica que o domínio foi corretamente adicionado. Caso contrário, é possível que a propagação ainda não esteja finalizada.

![cnamedomainemail](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.