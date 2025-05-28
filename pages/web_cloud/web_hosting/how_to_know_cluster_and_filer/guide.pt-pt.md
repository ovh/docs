---
title: "Alojamento web - Como conhecer o seu cluster e o seu filer"
excerpt: "Saiba como encontrar o número do cluster e/ou o número do filer onde se encontra o seu alojamento web"
updated: 2025-05-21
---

## Objetivo

Os alojamentos web funcionam numa infraestrutura partilhada chamada *cluster*. A OVHcloud dispõe de vários clusters nos quais estão repartidos vários alojamentos web.
Cada cluster está também dividido virtualmente em vários segmentos, designados *filers*, por razões de eficiência e segurança. Os filers contêm vários alojamentos web.
Durante a utilização do alojamento web, poderá ser necessário conhecer o número do cluster e/ou do filer onde se situa o alojamento web.

**Saiba como encontrar o número de cluster e o número do filer na sua localização.**

## Requisitos

- Ter um serviço de [alojamento web OVHcloud](/links/web/hosting).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

### Encontre o número do cluster de um alojamento web

Clique nas janelas abaixo para visualizar cada uma das etapas **4**.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na página que se abrir, clique no separador `FTP - SSH`{.action}. 
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ftp-ssh.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Na nova página, obtenha o número do cluster do alojamento web nesta página com a menção **Servidor FTP e SFTP** (3 algarismos entre `0` e `9`).
>>
>> ![FTP-SSH - número do cluster](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/find-cluster-ftp-ssh.png){.thumbnail}

### Encontre o número do filer de um alojamento web

Clique nas janelas abaixo para visualizar cada uma das etapas **3**.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> No quadro **Informações gerais** da página que é apresentada, obtenha o número do filer sob a menção `Filer`{.action}.
>>
>> ![Número do filer](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/filer.png){.thumbnail}

## Quer saber mais?

[Alojamento web - Lista dos endereços IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com a nossa [comunidade de utilizadores](/links/community).