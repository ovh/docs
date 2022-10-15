---
title: Object Storage Swift - Otimizar os uploads para o Object Storage
slug: pcs/optimised-method-for-uploading-files-to-object-storage
section: OpenStack Swift Storage Class Specifics
legacy_guide_number: g1951
order: 130
---

**Última atualização: 27/10/2021**
  
## Objetivo

Aquando do envio de ficheiros volumosos para o Object Storage (como vídeos ou imagens de discos, por exemplo), é possível utilizar o cliente OpenStack Swift para otimizar as transferências ao segmentar os ficheiros.

**Este guia explica-lhe como melhorar a velocidade dos uploads para o Object Storage graças a esta funcionalidade.**


## Pré-requisitos

- [Preparar o ambiente para utilizar a API OpenStack](https://docs.ovh.com/pt/public-cloud/preparar_o_ambiente_para_utilizar_a_api_openstack/) com o cliente python-swiftclient
- [Carregar as variáveis de ambiente OpenStack](https://docs.ovh.com/pt/public-cloud/carregar-as-variaveis-de-ambiente-openstack/)

## Instruções

OpenStack Swift permite-lhe armazenar ficheiros sem limite de tamanho ao dividi-lo em vários segmentos.

Na realidade, quando um cliente Swift é utilizado para enviar um ficheiro, o nœud de armazenamento é determinado pelo proxy Swift ao utilizar uma hash do nome do objecto.
Existe então uma grande possibilidade que os segmentos sejam armazenados em nœuds de armazenamento diferentes permitindo a escrita dos seus dados com uma velocidade superior.

Podemos enviar um ficheiro de 10GB em 100 segmentos de 100MB:

```bash
root@server:~$ swift upload --segment-size 104857600 --segment-threads 100
container_name 10Gio.dat
```

|Argument|Description|
|---|---|
|--segment-size|Taille des segments en bytes|
|--segment-threads|Nombre de segments|


É possível medir a velocidade de upload ao utilizar programas como por exemplo o iftop.

## Quer saber mais?
 
Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
