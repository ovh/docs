---
title: Object Storage Swift - Sincronizar uma NAS Synology com o Object Storage
slug: pcs/pcs-syno
excerpt: Saiba como sincronizar uma NAS Synology com um container.
section: OpenStack Swift Storage Class Specifics
order: 150
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 27/10/2021**

## Objetivo

[DiskStation Manager 6.0](https://www.synology.com/en-global/dsm/6.0beta){.external} de Synology propõe uma ferramenta de sincronização com diferentes soluções Cloud.

Este é compatível com o Object Storage do Public Cloud da OVHcloud e permite-lhe efetuar um backup dos seus dados e torná-los acessíveis a partir de qualquer lugar.

**Este guia explica como configurar o DiskStation Manager 6.0 para sincronizar os ficheiros que se encontram no seu NAS para o seu Object Storage.**

## Requisitos

- [Criar um container Object Storage](https://docs.ovh.com/pt/storage/pcs/criacao-de-container/)
- [Criar um acesso à interface Horizon](https://docs.ovh.com/pt/public-cloud/criar-e-eliminar-um-utilizador-openstack/#criacao-de-um-utilizador-openstack)

## Instruções

### Configuração do DiskStation Manager 6.0

> [!warning]
>
> As soluções Synology, como o DiskStation ou Hyperbackup, não são compatíveis com a oferta Public Cloud Archive
>

#### Recuperação das suas credenciais Openstack

Para configurar a sincronização da NAS Synology, deverá dispor dos dados de acesso do seu utilizador OpenStack.

Para as recuperar, descarregue o ficheiro OpenRC através da primeira parte do seguinte guia:

- [Carregar as variáveis de ambiente OpenStack](https://docs.ovh.com/pt/public-cloud/carregar-as-variaveis-de-ambiente-openstack/#etapa-1-recuperar-as-variaveis){.ref}

#### Configuração do ponto de sincronização com Cloud Sync

Uma vez na posse dos seus dados de acesso, pode ligar-se ao seu NAS e efetuar as seguintes ações:

- Iniciar a aplicação Cloud Sync:

![public-cloud](images/3791.png){.thumbnail}

- Selecionar OpenStack Swift como Cloud Providers

![public-cloud](images/3788.png){.thumbnail}

- Introduza as informações do seu utilizador OpenStack:

![public-cloud](images/3792.png){.thumbnail}

Todas estas informações podem ser encontradas no ficheiro OpenRC que recuperou na etapa anterior.

- Configurar a pasta a sincronizar

![public-cloud](images/3790.png){.thumbnail}

> [!alert]
>
> Este guia baseia-se na versão beta do DiskStation Manager 6.0, o procedimento de configuração pode necessitar de ser alterado.
>

## Saiba mais

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.