---
title: Ligar-se em SFTP
routes:
    canonical: '/pages/cloud/private-cloud/sftp_connexion'
excerpt: Saiba como se ligar ao seu Managed Bare Metal em SFTP
updated: 2020-11-18
---

**Última atualização: 18/11/2020**

## Objetivo

A ligação aos seus datastores através de SFTP (Secure File Transfert Protocol) permite-lhe adicionar ficheiros guardados localmente à sua infraestrutura. Pode ligar-se a partir de uma interface gráfica graças a softwares como FileZilla, disponíveis para Windows e Mac. Também é possível ligar-se em linha de comandos a partir do seu sistema operativo Linux.

Este sistema permitir-lhe-á aceder apenas à pasta “upload-vpn” dos seus datastores. Os ficheiros que estejam fora desta pasta não serão acessíveis através deste método.

**Este manual explica-lhe como ligar-se em SFTP através de uma interface gráfica ou em linha de comandos.**

## Requisitos

- Dispor de uma conta de utilizador ativa criada a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

### Ligação através de uma interface gráfica

No seu cliente FTP (FileZilla neste exemplo), deverá indicar os seguintes valores:

```
Host: [sftp://pcc-xxx-xxx-xxx-xxx.ovh.com] / Username: user / Password: password
```

![Ligação SFTP](images/connection_sftp_filezilla_log.png){.thumbnail}

Depois de conectado, poderá ver a sua máquina local à esquerda, e os seus datastores à direita:

![Ligação em SFTP com FileZilla](images/connection_sftp_filezilla.png){.thumbnail}

### Ligar-se através de um terminal

Num terminal, verifique se o comando `sftp` está instalado escrevendo:

```sh
sftp
```

O comando para se ligar é o seguinte:

```sh
sftp user@pcc-xxx-xxx-xxx-xxx.ovh.com
```

A palavra-passe do utilizador ser-lhe-á solicitada. Depois de conectado, poderá listar os seus datastores com o comando `ls`:

```sh
sftp> ls pcc-000714
```

Percorra a lista de datastores encontrados com o comando anterior:

```sh
sftp> pcc-000714
```

Utiliza o comando `put` para exportar ficheiros do seu datastore para a sua máquina local.

```sh
sftp> put /home/ubuntu-18.04-server-amd64.iso
/datastore/pcc-000714/ubuntu-18.04-server-amd64.iso  
```

Utiliza o comando `get` para importar ficheiros da sua máquina local para o seu datastore.

```sh
sftp> get /datastore/pcc-00714/ubuntu-18.04-server-amd64.iso /home/
```

O comando `exit` permite-lhe interromper a ligação.

### Visão geral através de vSphere

Na sua interface vSphere, poderá ver o conteúdo daquilo que acabou de enviar percorrendo o seu datastore. Para isso, clique no datastore em questão na pasta “upload-vpn”:

![Ligação SFTP via vSphere](images/sftpconnection.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
