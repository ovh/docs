---
title: Como rescindir o seu Managed Bare Metal
excerpt: Saiba como solicitar a rescisão de uma infraestrutura Managed Bare Metal
updated: 2020-11-18
---

## Objetivo

Se a sua oferta de Managed Bare Metal já não lhe convier, ou se encomendou uma nova infraestrutura para substituir a antiga, pode solicitar a rescisão da infraestrutura depois de recuperar todos os seus dados.

**Saiba como solicitar a rescisão de uma oferta Managed Bare Metal** 

## Requisitos

- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e aceder à secção `Bare Metal Cloud`{.action} e, depois, `Managed Bare Metal`{.action}.
- Ter um produto [Managed Bare Metal](https://www.ovhcloud.com/pt/managed-bare-metal/){.external}.

## Instruções

>[!warning]
>
> Antes de rescindir a sua oferta, não se esqueça de recuperar todos os dados que pretende conservar. De facto, a rescisão provocará a supressão integral do seu Managed Bare Metal e de todos os dados lá armazenados.
>

### 1 - Solicitar a rescisão através da Área de Cliente OVHcloud

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, dirija-se à secção `Bare Metal Cloud`{.action} (1), clique em `Managed Bare Metal`{.action} (2) e selecione a sua oferta na lista (3).

Na tabela «Gestão do serviço» do separador «Informações gerais», clique no botão `...`{.action} (4) à direita da data de renovação. Clique em `Eliminar o serviço`{.action} (5).

![rescisão a partir da Área de Cliente](images/resiliation1.png){.thumbnail}

Tenha em conta que, a partir da confirmação da rescisão, esta ação irá eliminar todos os dados presentes na infraestrutura. Não será realizado qualquer reembolso prorata caso a infraestrutura seja rescindida antes do final do mês.

Clique em `Validar`{.action} para solicitar a rescisão.

![validação rescisão](images/resiliation2.png){.thumbnail}

Ser-lhe-á apresentada uma notificação de confirmação do seu pedido. O procedimento de confirmação da rescisão é-lhe enviado por e-mail, para o endereço associado à conta OVHcloud.

![validação rescisão](images/resiliation3.png){.thumbnail}

### 2 - Confirmar a rescisão

No seguimento do seu pedido, ser-lhe-á enviado um e-mail de confirmação para o endereço associado à conta OVHcloud. 

Também poderá encontrar este e-mail na sua Área de Cliente OVHcloud. Clique no seu nome na parte superior à direita > `E-mails de serviço`{.action}.

![validação rescisão](images/resiliation4.png){.thumbnail}

O assunto do e-mail será:

> **Supressão do seu Managed Bare Metal pcc-xxx-xxx-xxx-xxx**".

O e-mail contém uma ligação que lhe permitirá confirmar a rescisão da sua oferta.

> [!primary]
>
> Atenção: esta ligação é válida durante **72 horas**. Por isso, aconselhamos que realize o seu pedido de rescisão a partir do dia 25 do mês.
>

Poderá também validar o pedido de rescisão através da seguinte API OVHcloud:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/confirmTermination
>

Deverá indicar o token de validação disponível no e-mail de confirmação da rescisão.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
