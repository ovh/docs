---
title: Sincronizar os containers de objectos
excerpt: Sincronizar os containers de objectos
slug: sincronizar_os_containers_de_objectos
section: Object Storage
legacy_guide_number: g1919
---


## 
Se deseja mover os seus objetos de um datacenter para outro, ou entre projetos, a sincronização de objetos entre containers é a melhor solução para evitar cortes de serviço durante a migração.
Este guia explica-lhe como implementar essa solução.


## Pré-requisitos

- [Preparar o ambiente para utilizar a API OpenStack]({legacy}1851) com o cliente swift
- [Carregar as variáveis de ambiente OpenStack]({legacy}1852)
- 2 containers de objecto em 2 datacenters diferentes




## Criação da chave de sincronização
Para que os containers se possam identificar, é necessário criar uma chave e depois será necessário que configure cada uma delas nos respetivos containers de objetos:


- Criar a chave


```
root@serveur-1:~$ sharedKey=$(openssl rand -base64 32)
```





## Configuração do container de destino
Num primeiro tempo é necessário configurar a chave no container que receberá os dados.
No nosso caso está em BHS.


- Verifique a região carregada nas variáveis de ambiente:


```
root@serveur-1:~$ env | grep OS_REGION

OS_REGION_NAME=BHS1
```


- Configure depois a chave do container de destino:


```
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerBHS
```



É possível verificar que está bem configurada graças ao seguinte comando:


```
root@serveur-1:~$ swift stat containerBHS
Account: AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29
Container: containerBHS
Objects: 0
Bytes: 0
Read ACL:
Write ACL:
Sync To:
Sync Key: 4cA5j5LyaaG2ws32d1fsdQSxnvIJv+y2qFnbnm6Kw=
Meta Access-Control-Allow-Origin: https://www.ovh.com
Accept-Ranges: bytes
X-Storage-Policy: Policy-0
Connection: close
X-Timestamp: 1444812373.28095
X-Trans-Id: B2210C05:895E_9E45A961:01BB_561E52E1_16A3:5298
Content-Type: text/plain; charset=utf-8
```



- Recuperar o endereço do container de destino para configurar de seguida o container source:


```
root@serveur-1:~$ destContainer=$(swift --debug stat containerBHS 2>&1 | grep 'curl -i.*storage' | awk '{ print $4 }')
```





## Configuração do container source

- Altere a região nas variáveis de ambiente:


```
root@serveur-1:~$ export OS_REGION_NAME=GRA1
```


- Configure a chave no container source:


```
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerGRA
```


- Configure o destinatário no container source:


```
root@serveur-1:~$ swift post --sync-to "$destContainer" containerGRA
```



Tal como anteriormente, é possível verificar que está bem configurada graças ao seguinte comando:


```
root@serveur-1:~$ swift stat containerGRA
Account: AUTH_b3e269f057d14af594542d6312b0ba29
Container: containerGRA
Objects: 3
Bytes: 15
Read ACL:
Write ACL:
Sync To: https://storage.bhs1.cloud.ovh.net/v1/AUTH_b3e269f057d14af594542d6312b0ba29/containerBHS
Sync Key: 4cA5j5LyaaG2wU4lDYnDmEwQSxnvIJv+y2qFnbnm6Kw=
Accept-Ranges: bytes
Connection: close
X-Timestamp: 1444813114.55493
X-Trans-Id: B2210C05:879E_052711B1:01BB_561E559B_24AE:6B1B
X-Storage-Policy: Policy-0
Content-Type: text/plain; charset=utf-8
```




## Verificar a sincronização
Passados alguns instantes (em função do número e tamanho dos ficheiros a enviar), é possível verificar que a sincronização correu bem ao listar os ficheiros que estão dentro de cada um dos containers.


- Listar os ficheiros presentes no container source:


```
root@serveur-1:~$ swift list containerGRA
test1.txt
test2.txt
test3.txt
```


- Listar os ficheiros presentes no container de destino:


```
root@serveur-1:~$ swift list containerBHS
test1.txt
test2.txt
test3.txt
```



Este guia pode ser igualmente utilizado para a migração de objectos RunAbove para o Public Cloud


## 
[Voltar ao índice dos guias Cloud]({legacy}1785)

