---
title: Dar os primeiros passos com a API Nova
excerpt: Dar os primeiros passos com a API Nova
slug: dar_os_primeiros_passos_com_a_api_nova
legacy_guide_number: g1935
---


## 
Com o objetivo de automatizar as suas operações no Public Cloud é possível utilizar as APIs OpenStack de forma a gerar diferentes scripts.
O cliente Nova da OpenStack permite que interaja e faça a gestão das suas instâncias bem como do seu disco.

Poderá, por exemplo, lançar a criação de uma instância suplementar assim que as ferramentas de monitorização detetarem um pico de carga para evitar uma saturação na sua infraestrutura.
É igualmente possível programar a criação instantânea de foram regular pelo mesmo motivo.

Este guia irá ajudá-lo a dar os primeiros passos com a API OpenStack de forma a poder gerir as suas instâncias com a ajuda do cliente Python Nova.


## Pré-requisitos

- [Preparar o ambiente para utilizar a API OpenStack]({legacy}1851)
- [Alterar as variáveis de ambiente OpenStack]({legacy}1852)




## Documentação Nova
É possível obter a lista dos comandos possíveis ao consultar a documentação do cliente:


```
admin@serveur-1:~$ nova help
```


É igualmente possível obter informações específicos de um comando ao adicionar "help" antes:


```
admin@serveur-1:~$ nova help flavor-list

usage: nova flavor-list [--extra-specs] [--all]

Print a list of available 'flavors' (sizes of servers).

Optional arguments:
--extra-specs Get extra-specs of each flavor.
--all Display all flavors (Admin only).
```


Pode consultar igualmente a documentação do cliente Nova diretamente no [website OpenStack](http://docs.openstack.org/cli-reference/content/novaclient_commands.html)


## Adicionar uma chave SSH pública
Num primeiro tempo é necessário adicionar uma chave SSH pública que vai permitir que se ligue às suas instâncias.


- Listar os comandos associados às chaves SSH:


```
admin@serveur-1:~$ nova help | grep keypair

keypair-add Create a new key pair for use with servers.
keypair-delete Delete keypair given by its name.
keypair-list Print a list of keypairs for a user
keypair-show Show details about the given keypair.
```


- Adicionar a chave SSH pública:


```
admin@serveur-1:~$ nova keypair-add --pub-key .ssh/id_rsa.pub SSHKEY
```


- Lista as chaves SSH disponíveis:


```
admin@serveur-1:~$ nova keypair-list

+--------+-------------------------------------------------+
| Name | Fingerprint |
+--------+-------------------------------------------------+
| SSHKEY | 0e:93:fb:90:82:xx:xx:xx:xx:xx:xx:6e:22:42:c3:ea |
+--------+-------------------------------------------------+
```





## Listar os modelos das instâncias
Bastará recuperar o ID do modelo que pretende utilizar:


```
admin@serveur-1:~$ nova flavor-list
+--------------------------------------+------------+-----------+------+-----------+---------+-------+-------------+-----------+
| ID | Name | Memory_MB | Disk | Ephemeral | Swap_MB | VCPUs | RXTX_Factor | Is_Public |
+--------------------------------------+------------+-----------+------+-----------+---------+-------+-------------+-----------+
| 0c36bb1d-bd1e-4294-ac75-60fd727054c8 | win-eg-15 | 15000 | 400 | 0 | | 4 | 1.0 | True |
| 0e2b8841-d764-49b4-b2ac-24c8df2c6806 | sp-30 | 30000 | 200 | 0 | | 2 | 1.0 | True |
| 169e7020-0436-4e8c-b2c8-213a57a044b5 | win-sp-120 | 120000 | 800 | 0 | | 8 | 1.0 | True |
| 18811d09-053e-4ad0-b297-3c11ceefd136 | sp-60 | 60000 | 400 | 0 | | 4 | 1.0 | True |
| 1e2c13fc-4ba9-4773-a13e-75ce96fb4e96 | eg-120 | 120000 | 1600 | 0 | | 32 | 1.0 | True |
| 1e5a7cf5-d58c-4633-8069-5aba49b00be1 | win-sp-240 | 240000 | 1600 | 0 | | 16 | 1.0 | True |
| 22096e9d-5150-4f54-bb8d-6c8b243a28bb | win-sp-60 | 60000 | 400 | 0 | | 4 | 1.0 | True |
| 23ec7924-483c-4414-9aaf-bf03575f0bfe | eg-15 | 15000 | 400 | 0 | | 4 | 1.0 | True |
| 24c1f706-3278-4ca7-a773-7df7f999cf14 | win-eg-60 | 60000 | 1600 | 0 | | 16 | 1.0 | True |
| 30b43ca1-131f-4b0d-8087-e03bc99f7ec6 | sp-120 | 120000 | 800 | 0 | | 8 | 1.0 | True |
| 3502c448-8c96-4062-bf78-c5d2ac962e6d | win-eg-120 | 120000 | 1600 | 0 | | 32 | 1.0 | True |
| 3a9711d2-a4fb-4d2f-a3cd-1972fd53eb5e | vps-ssd-3 | 8000 | 40 | 0 | | 2 | 1.0 | True |
| 6763bd1b-5d23-4c87-aca7-d46e35d343a4 | win-eg-7 | 7000 | 200 | 0 | | 2 | 1.0 | True |
| 7eacbe7c-5033-4123-8eec-d61bf27359f9 | win-sp-30 | 30000 | 200 | 0 | | 2 | 1.0 | True |
| 8f08b006-a68b-4eed-80cf-36f8212f8d73 | win-eg-30 | 30000 | 800 | 0 | | 8 | 1.0 | True |
| 98c1e679-5f2c-4069-b4da-4a4f7179b758 | vps-ssd-1 | 2000 | 10 | 0 | | 1 | 1.0 | True |
| a42a6051-16c7-4563-9cca-9c1abf36e460 | sp-240 | 240000 | 1600 | 0 | | 16 | 1.0 | True |
| b41c89be-7b7d-4ecc-9cd8-bea145bbbd76 | eg-7 | 7000 | 200 | 0 | | 2 | 1.0 | True |
| b62d1735-774d-4983-9ed6-283c921d29d7 | eg-30 | 30000 | 800 | 0 | | 8 | 1.0 | True |
| c3d1d22a-03b3-4fa4-bcc4-1dff4e2b2d32 | vps-ssd-2 | 4000 | 20 | 0 | | 1 | 1.0 | True |
| ccb922b6-04ad-422d-a8bc-7aff1eae6954 | eg-60 | 60000 | 1600 | 0 | | 16 | 1.0 | True |
+--------------------------------------+------------+-----------+------+-----------+---------+-------+-------------+-----------+
```




## Listar as imagens disponíveis
Basta recuperar o ID da imagem que será utilizada pela instância:


```
admin@serveur-1:~$ nova image-list
+--------------------------------------+------------------------+--------+--------+
| ID | Name | Status | Server |
+--------------------------------------+------------------------+--------+--------+
| c17f13b5-587f-4304-b550-eb939737289a | Centos 7 | ACTIVE | |
| 73958794-ecf6-4e68-ab7f-1506eadac05b | Debian 7 | ACTIVE | |
| bdcb5042-3548-40d0-b06f-79551d3b4377 | Debian 8 | ACTIVE | |
| 7250cc02-ccc1-4a46-8361-a3d6d9113177 | Fedora 19 | ACTIVE | |
| 57b9722a-e6e8-4a55-8146-3e36a477eb78 | Fedora 20 | ACTIVE | |
| 3bda2a66-5c24-4b1d-b850-83333b580674 | Ubuntu 12.04 | ACTIVE | |
| 9bfac38c-688f-4b63-bf3b-69155463c0e7 | Ubuntu 14.04 | ACTIVE | |
| 6a123897-a5bb-46cd-8f5d-ecf9ab9877f2 | Windows-Server-2012-r2 | ACTIVE | |
+--------------------------------------+------------------------+--------+--------+
```




## Criação de uma instância
Com os elementos obtidos anteriormente, é possível criar uma instância:


```
admin@serveur-1:~$ nova boot --key_name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image bdcb5042-3548-40d0-b06f-79551d3b4377 Instance1
```


Após alguns instantes poderemos verificar a lista das instâncias existentes de forma a encontrar a instância recém-criada:


```
admin@serveur-1:~$ nova list
+--------------------------------------+----------------------------------------+--------+------------+-------------+-------------------------+
| ID | Name | Status | Task State | Power State | Networks |
+--------------------------------------+----------------------------------------+--------+------------+-------------+-------------------------+
| 81d01a19-b2d5-454d-98d9-bd8992ec2037 | Instance1 | ACTIVE | - | Running | Ext-Net=149.xxx.xxx.192 |
+--------------------------------------+----------------------------------------+--------+------------+-------------+-------------------------+
```




## Eliminar uma instância
Para eliminar uma instância basta efetuar o seguinte comando:

```
admin@serveur-1:~$ nova delete Instance1
Request to delete server Instance1 has been accepted.
```




## 
[Voltar ao índice dos guias Cloud]({legacy}1785)

