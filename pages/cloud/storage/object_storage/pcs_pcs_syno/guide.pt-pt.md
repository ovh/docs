---
title: Object Storage Swift - Sincronizar uma NAS Synology com o Object Storage
excerpt: Saiba como sincronizar uma NAS Synology com um container.
updated: 2023-05-22
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 22/05/2023**

## Objetivo

DiskStation Manager 7.0 de Synology propõe uma ferramenta de sincronização com diferentes soluções Cloud.

Este é compatível com o Object Storage do Public Cloud da OVHcloud e permite-lhe efetuar um backup dos seus dados e torná-los acessíveis a partir de qualquer lugar.

**Este guia explica como configurar o DiskStation Manager 7.0 para sincronizar os ficheiros que se encontram no seu NAS para o seu Object Storage.**

> [!primary]
>
> O DiskStation Manager 6 não é compatível com o Object Storage Public Cloud da OVHcloud.
>

## Requisitos

- [Criar um container Object Storage](/pages/cloud/storage/object_storage/pcs_create_container)
- [Criar um acesso à interface Horizon](/pages/platform/public-cloud/create_and_delete_a_user#criacao-de-um-utilizador-openstack)

## Instruções

### Configuração do DiskStation Manager 7.0

> [!warning]
>
> As soluções Synology, como o DiskStation ou Hyperbackup, não são compatíveis com a oferta Public Cloud Archive
>

#### Recuperação das suas credenciais Openstack

Para configurar a sincronização da NAS Synology, deverá dispor dos dados de acesso do seu utilizador OpenStack.

Para as recuperar, descarregue o ficheiro OpenRC através da primeira parte do seguinte guia:

- [Carregar as variáveis de ambiente OpenStack](/pages/platform/public-cloud/loading_openstack_environment_variables#etapa-1-recuperar-as-variaveis){.ref}

#### Configuração do ponto de sincronização com Cloud Sync

Uma vez na posse dos seus dados de acesso, pode ligar-se ao seu NAS e efetuar as seguintes ações:

- Iniciar a aplicação Cloud Sync

- Selecionar OpenStack Swift como Cloud Providers

![public-cloud](images/DSM7_1.png){.thumbnail}

- Introduza as informações do seu utilizador OpenStack:

![public-cloud](images/DSM7_2.png){.thumbnail}

Todas estas informações podem ser encontradas no ficheiro OpenRC que recuperou na etapa anterior.

- Configurar a localização e o nome do seu container de armazenamento:

![public-cloud](images/DSM7_3.png){.thumbnail}

- Configurar a pasta a sincronizar:

![public-cloud](images/DSM7_4.png){.thumbnail}

## Saiba mais

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.