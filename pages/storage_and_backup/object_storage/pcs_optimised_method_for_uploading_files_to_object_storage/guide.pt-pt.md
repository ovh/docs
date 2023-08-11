---
title: Object Storage Swift - Otimizar os uploads para o Object Storage
legacy_guide_number: g1951
updated: 2021-10-27
---

**Última atualização: 27/10/2021**
  
## Objetivo

Aquando do envio de ficheiros volumosos para o Object Storage (como vídeos ou imagens de discos, por exemplo), é possível utilizar o cliente OpenStack Swift para otimizar as transferências ao segmentar os ficheiros.

**Este guia explica-lhe como melhorar a velocidade dos uploads para o Object Storage graças a esta funcionalidade.**


## Pré-requisitos

- [Preparar o ambiente para utilizar a API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api) com o cliente python-swiftclient
- [Carregar as variáveis de ambiente OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables)

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

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
