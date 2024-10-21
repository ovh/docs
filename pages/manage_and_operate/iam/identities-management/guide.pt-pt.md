---
title: "Apresentação das identidades que podem interagir dentro de uma conta OVHcloud"
excerpt: "Descubra os diferentes tipos de identidade que permitem interagir com um produto OVHcloud"
updated: 2024-10-21
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O objetivo deste guia é apresentar os diferentes tipos de identidades que podem ser geridas na conta OVHcloud.

## Requisitos

- Dispor de um [conta de cliente OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).

## Instruções

### Apresentação das identidades

Existem vários tipos de identidades que podem interagir com os produtos OVHcloud:

![identities-types](images/identities_types.png){.thumbnail}

### Conta OVHcloud

Trata-se da identidade principal que lhe serve para se ligar à Área de Cliente OVHcloud. Utiliza a conta OVHcloud quando se liga com o seu endereço de e-mail ou o seu identificador de cliente (ex : xx1111-ovh) na Área de Cliente.

Esta identidade atua como uma conta root e não pode ver os seus direitos restritos, independentemente das políticas de acesso implementadas.

A conta OVHcloud pode também ser referenciada sob o nome de NIC ou NIC-handle na documentação.

### Utilizadores locais

Os utilizadores locais são identidades associadas à sua conta OVHcloud. Estas contas foram concebidas para **interações humanas** com os produtos OVHcloud porque se baseiam numa autenticação do tipo login/password, e cujos direitos de acesso dependem das [políticas IAM](/pages/account_and_service_management/account_information/iam-policy-ui) implementadas.

A configuração dos utilizadores locais é descrita na [documentação dedicada](/pages/account_and_service_management/account_information/ovhcloud-users-management).

Também é possível utilizá-los para a ligação às API da OVHcloud [gerando um token associado ao utilizador](/pages/manage_and_operate/api/first-steps). Os direitos deste token podem ser limitados a um perímetro preciso em complemento das políticas IAM.

Para que uma aplicação baseada num token ligado a um utilizador local possa utilizar uma API OVHcloud, é necessário que o token o integre no seu perímetro **e** que o utilizador que criou o token disponha dos direitos sobre esta API.

Os utilizadores locais também podem ser identificados como *sub-user* na documentação.

Para efeitos de rastreabilidade, recomendamos que crie utilizadores locais assim que mais de uma pessoa tiver de aceder à sua conta OVHcloud.

### Contas de serviço

As contas de serviços são identidades associadas à sua conta OVHcloud. Estas contas foram concebidas para as **interações de máquinas** com os produtos OVHcloud porque se baseiam numa autenticação de tipo cliente/token e cujos direitos de acesso dependem das [políticas IAM](/pages/account_and_service_management/account_information/iam-policy-ui) implementadas.

A criação das contas de serviços é abordada na [documentação dedicada](/pages/manage_and_operate/api/manage-service-account).

De seguida, pode ser utilizada uma conta de serviço para a [ligação às APIs OVHcloud](/pages/account_and_service_management/account_information/authenticate-api-with-service-account), bem como para APIs de terceiros tais como as expostas por [OpenStack](/pages/manage_and_operate/iam/authenticate-api-openstack-with-service-account).

A ligação a contas de serviços ainda não é suportada nos SDK e no Terraform Provider.

### Utilizadores federados

Estas são contas de utilizador de uma [federação de identidade](/products/manage-operate-user-federation). Estes utilizadores provêm de um diretório terceiro e não são geridos diretamente pela OVHcloud. Os seus direitos de acesso dependem das políticas [IAM](/pages/account_and_service_management/account_information/iam-policy-ui) implementadas.

Os utilizadores federados são representados por grupos de utilizadores ao nível da gestão de direitos.

Recomendamos que crie uma federação de identidade assim que o número de pessoas que se ligam à sua conta OVHcloud se tornar suficientemente elevado, ou se pretender centralizar os acessos num diretório terceiro utilizado para outros serviços que não a OVHcloud.

### Grupos de utilizadores

As diferentes identidades podem ser combinadas em grupos de utilizadores para facilitar a sua manipulação.
A configuração dos grupos de utilizadores é abordada na documentação de gestão dos [utilizadores locais](/pages/account_and_service_management/account_information/ovhcloud-users-management).

### Utilizadores dos produtos OVHcloud

Alguns produtos disponibilizados pela OVHcloud podem propor os seus próprios utilizadores como complemento, como OpenStack, VMware vSphere ou Object Storage.
Estes utilizadores são independentes da conta OVHcloud e são geridos diretamente através dos produtos em causa.

Para os produtos que permitem utilizar uma identidade da OVHcloud (utilizador local, conta de serviço, utilizador federado) ou um utilizador específico do produto, recomendamos que utilize estes utilizadores específicos se pretender manter a reversibilidade do seu produto e limitar a dependência da OVHcloud.
Pelo contrário, se pretender dispor de uma gestão centralizada através de todos os seus produtos, recomendamos que utilize identidades OVHcloud.

## Quer saber mais? <a name="go-further"></a>

A gestão das identidades pode ser automatizada através das API [OVHcloud API](/pages/manage_and_operate/api/first-steps) ou através do [provider Terraform OVHcloud](/pages/manage_and_operate/terraform/terraform-at-ovhcloud).

Fale com nossa [comunidade de utilizadores](/links/community).
