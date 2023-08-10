---
title: Modificar um Volume Block Storage
excerpt: Saiba como alterar o tipo de um volume block storage utilizando Openstack
updated: 2023-08-08
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O objetivo deste guia é mostrar-lhe como alterar um tipo de volume Block Storage, de Classic ou High Speed para High Speed gen2.

## Requisitos

- [Aceder à interface Horizon](/pages/platform/public-cloud/introducing_horizon)
- Um volume [Block Storage](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instance) criado no seu projeto [Public Cloud](https://www.ovhcloud.com/pt/public-cloud/)

## Instruções

Ao alterar um tipo de volume Block Storage para um volume « High Speed gen2 », a política de migração deve ser alterada de `Never` para `On Demand`.

Por predefinição, a política de migração está definida para `Never`, uma vez que o volume permanece no mesmo cluster CEPH. No entanto, para o « High Speed gen2 », o volume deverá ser migrado para um novo cluster.

Esta alteração pode ser realizada através da interface Horizon ou através da interface de linha de comandos OpenStack.

### A partir da interface Horizon

Conecte-se à [interface Horizon](https://horizon.cloud.ovh.net/auth/login/) e certifique-se de que está na região correta. Pode verificar isto no canto superior esquerdo. 

![Seleção da região](images/region2021.png){.thumbnail}

Clique no menu `Volumes`{.action} à esquerda e, a seguir, em `Volumes`{.action}.

Clique na seta suspensa ao lado de `Edit Volume`{.action} e selecione `Change Volume Type`{.action}.

![Escolha da opção](images/selectoption.png){.thumbnail}

Na janela que se abrir, clique no menu suspenso em `Type` e selecione `high-speed-gen-2`{.action}. De seguida, clique na seta pendente em `Migration Policy` e selecione `On Demand`{.action}.

Depois de realizar estas ações, clique em `Change Volume Type`{.action} para validar a alteração.

![Escolha da opção](images/changevolume.png){.thumbnail}

### A partir da CLI OpenStack

Antes de continuar, recomendamos que consulte os seguintes guias:

- [Preparar o ambiente para utilizar a API OpenStack](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api)
- [Carregar as variáveis de ambiente OpenStack](/pages/platform/public-cloud/loading_openstack_environment_variables)

Em primeiro lugar, liste os tipos de volumes disponíveis na sua região com o seguinte comando:

```bash
#~$ openstack image list
+--------------------------------------+-----------------------------------------------+----------+
| ID                                   | Name                                          | Is Public |
+--------------------------------------+-----------------------------------------------+----------+
| 27844ef7-1a9a-4944-be59-6e4eb19a71f6 | high-speed-gen2                                    | True |
| 23f75fef-d4f6-416a-a884-95aa3fd45695 | classic                                            | True |
| 2f78e8af-93c9-4e5c-b177-83c4a7ec456a | high-speed                                         | True |
----------------------------------------------------------------------------------------------------
```

> [!warning]
> Tenha em conta que se o tipo de volume « high-speed-gen2 » não aparecer na lista, tal significa que não está disponível nesta região.
>

De seguida, altere o tipo de volume com o seguinte comando:

```bash
$ openstack volume set --type high-speed-gen2 --retype-policy on-demand VOLUME_NAME_OR_ID
```

## Saiba mais

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.