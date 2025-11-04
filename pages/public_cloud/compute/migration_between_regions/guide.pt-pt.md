---
title: 'Migração de instâncias entre zonas de disponibilidade (AZ)'
excerpt: 'Este guia descreve como migrar uma instância Public Cloud OVHcloud entre duas zonas de disponibilidade (AZ), 1AZ e 3AZ. Ele abrange as etapas de backup, transferência e recriação, com instruções via Manager, Horizon ou CLI OpenStack.'
updated: 2025-11-04
---

## Objetivo

Este guia explica como migrar uma instância Public Cloud de uma zona de disponibilidade (AZ) para outra, de 1AZ para 3AZ ou vice-versa. Ele centraliza as etapas-chave (backup, transferência e recriação) e redireciona para os guias detalhados para cada elemento.

## Requisitos

- Ter uma [instância Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).
- Estar conectado ao seu [Área de Cliente OVHcloud](/links/manager).

## Instruções

> [!primary]
>
> Antes de realizar uma migração de instância, é importante compreender bem as diferenças entre os tipos de implantação oferecidos no Public Cloud OVHcloud. Cada modo (1AZ, 3AZ ou Local Zones) tem um impacto direto na resiliência, disponibilidade e na concepção da sua infraestrutura.
>
> Para saber mais, consulte a documentação: [Comparison and resilience of Deployment Modes - Understanding 3-AZ / 1-AZ / Local Zones (EN)](/pages/public_cloud/public_cloud_cross_functional/deployment_modes_comparison_resilience_details).
>

### Etapa 1. Fazer backup da instância

Comece criando um backup da instância a migrar, ou utilize um backup existente se ainda for válido.

OVHcloud oferece dois tipos de backups, com comportamentos diferentes dependendo do tipo de migração desejado:

- Backup local: Requer uma transferência manual se você migrar para outra região ou AZ.
- Backup remoto (backup distante) (**recomendado**): Gerenciado automaticamente pelo OVHcloud, o backup local é replicado na região escolhida. Nenhuma transferência manual é necessária.

> [!primary]
>
> Se o seu backup local foi feito em uma região 3AZ e você deseja recriar a instância em outra AZ da mesma região, nenhuma transferência é necessária.
>
> Os backups locais estão disponíveis a partir de todas as zonas de disponibilidade de uma região 3AZ. Você pode passar diretamente para a etapa de recriação da instância.
>

O backup de uma instância pode ser realizado:

- via Área de Cliente OVHcloud.
- via API OVHcloud.
- via CLI Openstack.
- via Horizon.

Encontre todas as informações detalhadas na seção **Criar um backup de uma instância** do nosso guia "[Guardar uma instância](/pages/public_cloud/compute/save_an_instance)".

### Etapa 2. Migrar o backup para outra região

> [!primary]
>
> Se você utilizou um backup remoto, pode passar diretamente para [a etapa 3. Restaurar a instância na nova região](#step3recreateinstance).
>

> [!tabs]
> Via CLI Openstack
>> Para transferir o seu backup de uma AZ para outra via CLI Openstack, consulte o nosso guia "[Descarregar e transferir a cópia de segurança de uma instância de uma região OpenStack para outra](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another)".
>>

### Etapa 3. Restaurar a instância na nova região <a name="step3recreateinstance"></a>

A restauração da instância na nova região pode ser realizada:

- via Área de Cliente OVHcloud.
- via API OVHcloud.
- via CLI Openstack.
- via Horizon.

Encontre todas as informações detalhadas na seção **Criar uma instância a partir de um backup** do nosso guia "[Criar / Restaurar um servidor virtual a partir de um backup](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup)".

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).