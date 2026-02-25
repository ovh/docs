---
title: Modificar um Volume Block Storage
excerpt: Saiba como alterar o tipo de um volume block storage utilizando Openstack
updated: 2026-01-13
---

## Objetivo

O objetivo deste guia é mostrar-lhe como alterar um tipo de volume Block Storage, de Classic ou High Speed para High Speed gen2.

## Requisitos

- Aceder à [área de cliente OVHcloud](/links/manager) ou à [interface Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon).
- Um volume [Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) criado no seu projeto [Public Cloud](/links/public-cloud/public-cloud).

## Instruções

Ao alterar um tipo de volume Block Storage para um volume "High Speed gen2", a política de migração deve ser alterada de `Never` para `On Demand`.

Por predefinição, a política de migração está definida para `Never`, uma vez que o volume permanece no mesmo cluster CEPH. No entanto, para o "High Speed gen2", o volume deverá ser migrado para um novo cluster.

Esta alteração pode ser realizada através da interface Horizon ou através da interface de linha de comandos OpenStack.

> [!warning]
>
> Se o volume Block Storage estiver ligado a uma instância, deverá desligá-lo antes de continuar. Para mais informações, consulte a secção **Desassociar um volume** do guia "[Criar e configurar um disco suplementar numa instância](/pages/public_cloud/Compute/create_and_configure_an_additional_disk_on_an_instance#detach-a-volume)".
>
> A alteração do tipo de volume (retyping) através da área de cliente OVHcloud ou da API OVHcloud só está disponível para volumes não encriptados. Não é possível alterar o tipo de volumes encriptados do tipo **-LUKS** através destas interfaces.
>
> O retyping é possível através do OpenStack / Horizon apenas para volumes **-LUKS** para **-LUKS**. Neste caso, a restauração do volume após o retyping não é possível.
> 
> As conversões **-LUKS** para **não -LUKS** não são suportadas, incluindo através do OpenStack / Horizon.
>

> [!tabs]
> A partir da área de cliente OVHcloud
>>
>> Inicie sessão na sua [área de cliente OVHcloud](/links/manager), aceda à secção `Public Cloud`{.action} e selecione o projeto Public Cloud relevante. Em seguida, clique em `Block Storage`{.action} no menu à esquerda sob **Backup Storage**.
>>
>> Localize o volume relevante na lista, em seguida, clique no botão `...`{.action} à sua direita. Escolha depois `Modificar o tipo do volume`{.action}.
>>
>> Uma janela abre-se e permite-lhe consultar os diferentes tipos de volumes disponíveis. Selecione o tipo desejado e confirme a sua escolha clicando em `Modificar`{.action}.
>>
>> > [!primary]
>> >
>> > A atualização do tipo de volume (retyping) pode demorar vários minutos.
>> >
>>
> A partir da interface Horizon
>>
>> Inicie sessão na [interface Horizon](https://horizon.cloud.ovh.net/auth/login/) e certifique-se de estar na região correta. Pode verificar isso no canto superior esquerdo. 
>>
>> ![Seleção da região](images/region2021.png){.thumbnail}
>>
>> Clique no menu `Volumes`{.action} à esquerda e depois em `Volumes`{.action}.
>>
>> Clique na seta pendente ao lado de `Edit Volume`{.action} e selecione `Change Volume Type`{.action}.
>>
>> ![Escolha da opção](images/selectoption.png){.thumbnail}
>>
>> Na janela que aparece, clique no menu pendente em `Type` e selecione `high-speed-gen-2`{.action}. Em seguida, clique na seta pendente em `Migration Policy` e selecione `On Demand`{.action}.
>>
>> Após estas ações, clique em `Change Volume Type`{.action} para validar a alteração.
>>
>> ![Escolha da opção](images/changevolume.png){.thumbnail}
>>
> A partir da CLI OpenStack
>>
>> Antes de começar, consulte o seguinte guia:
>>
>> - [Preparar o ambiente para utilizar a API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api).
>>
>> Primeiro, liste os tipos de volumes disponíveis na sua região com o seguinte comando:
>>
>> ```bash
>> #~$ openstack volume type list
>> +--------------------------------------+----------------------------------------------------+-----------+
>> | ID                                   | Name                                               | Is Public |
>> +--------------------------------------+----------------------------------------------------+-----------+
>> | 27844ef7-1a9a-4944-be59-6e4eb19a71f6 | high-speed-gen2                                    | True      |
>> | 23f75fef-d4f6-416a-a884-95aa3fd45695 | classic                                            | True      |
>> | 2f78e8af-93c9-4e5c-b177-83c4a7ec456a | high-speed                                         | True      |
>> | 9c5b1e42-3d8f-4a67-a9d2-84f3b2e7c1aa | high-speed-gen2-luks                               | True      |
>> | f41d7c8e-6a2b-4b91-9e73-2d6c0a58e94f | classic-luks                                       | True      |
>> | c8e92a5d-0f6e-4e3b-b1a4-7a9d6f3c2e8b | high-speed-luks                                    | True      |
>> ---------------------------------------------------------------------------------------------------------
>> ```
>>
>> > [!warning]
>> > Note que se os tipos de volumes "high-speed-gen2" ou **-LUKS** não aparecerem na lista, isso significa que não estão disponíveis nesta região.
>> >
>> > Os tipos de volumes **-LUKS** só são mostrados quando são suportados na região e compatíveis com o tipo de encriptação do volume.
>> >
>>
>> Altere depois o tipo de volume com o seguinte comando:
>>
>> ```bash
>> $ openstack volume set --type <VOLUME_TYPE> --retype-policy on-demand <VOLUME_NAME_OR_ID>
>> ```
>>

## Quer saber mais?

Para saber como migrar um volume Block Storage para um volume encriptado LUKS, consulte o nosso guia dedicado [Migrating a Block Storage volume to an encrypted LUKS volume](/pages/public_cloud/compute/migrating-non-encrypted-to-encrypted-volume) (EN).

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa [comunidade de utilizadores](/links/community).