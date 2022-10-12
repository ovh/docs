---
title: Object Storage Swift - Montar um container de objetos com S3QL
excerpt: Montar um container de objetos com S3QL
slug: pcs/use-s3ql-to-mount-object-storage-containers
section: OpenStack Swift Storage Class Specifics
legacy_guide_number: g1908
order: 160
---


##
O S3QL é um sistema de ficheiros que pode ser montado para armazenar dados localmente ao utilizar soluções de armazenamento cloud tais como o Object Storage.
Ele propõe numerosas funcionalidades tais como: compressão transparente, encriptação, ou ainda, snapshotting que é particularmente apropriado para a criação de backups.

Pode encontrar mais informações diretamente no [website do autor](http://www.rath.org/s3ql-docs/).

Este guia explica-lhe como montar um container de objetos como um sistema de ficheiros.


## Pré-requisitos

- [Criar um acesso ao Horizon]({legacy}1773)
- [Adicionar espaço de armazenamento](https://docs.ovh.com/pt/public-cloud/adicionar_um_espaco_de_armazenamento/)



## Atenção
Utilizar um container de object como um sistema de ficheiros poderá reduzir as performances das suas operações


## Criação do sistema de ficheiros


- Crie um ficheiro que contenha as informações de ligação:

```
admin@serveur1:~$ sudo vim s3qlcredentials.txt

[swift]
backend-login: TENANT_NAME:USERNAME
backend-password: PASSWORD
storage-url: swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME
fs-passphrase: PASSPHRASE
```



As informações tais como TENANT_NAME, USERNAME podem ser obtidas no seu ficheiro OpenRC.
Siga o seguinte guia para os recuperar:

- [Acesso e Segurança no Horizon]({legacy}1774)


Os argumentos REGION_NAME e CT_NAME tem de ser adaptados conforme o nome e localização do seu container de objetos.


- Modificar as permissões de acesso ao ficheiro de autenticação:

```
admin@serveur1:~$ sudo chmod 600 s3qlcredentials.txt
```


- Formate o container do objeto:

```
admin@serveur1:~$ sudo mkfs.s3ql --backend-options domain=default --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME
```



É necessário adicionar a passphrase que deseja adicionar no seu ficheiro de autenticação.
Se não a desejar configurar bastará que elimine a linha "fs-passphrase: PASSPHRASE" do seu ficheiro de autenticação para que não seja bloqueado aquando da montagem do sistema de ficheiros.


## Montagem do sistema de ficheiros

- Criação do ponto de montagem

```
admin@serveur1:~$ sudo mkdir /mnt/container
```


- Montagem do container do objeto

```
admin@serveur1:~$ sudo mount.s3ql --backend-options domain=default --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME /mnt/container/
```


- Verificação de montagem:

```
admin@serveur1:~$ sudo df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 927M 8.5G 10% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME 1.0T 0 1.0T 0% /mnt/container
```



Não será possível que utilize o S3QL em modo "offline".
Além disso, não é aconselhado que configure a persistência através da alteração doficheiro /etc/fstab mas através de um script que seja iniciado sempre que o servidor reiniciar.
