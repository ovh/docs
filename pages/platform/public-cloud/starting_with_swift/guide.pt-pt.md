---
title: Os primeiros passos com a API swift
excerpt: Os primeiros passos com a API swift
slug: os_primeiros_passos_com_a_api_swift
legacy_guide_number: g1916
---


## 
Para que possa automatizar as suas operações com o Public Cloud é possível utilizar a API OpenStack para gerir diferentes scripts.
O cliente swift de OpenStack irá fazer com que consiga interagir e possa gerir os seus containers e os seus objetos.

Poderá, por exemplo, enviar ficheiros de forma regular para o seu container a fim de os guardar.

Este guia irá ajudá-lo a dar os primeiros passos com a API OpenStack para que possa gerir as suas instâncias com a ajuda do cliente Python Swift.


## Pré-requisitos

- [Preparar o ambiente para utilizar a API OpenStack]({legacy}1851) ao instalar python-swiftclient
- [Carregar as variáveis de ambiente OpenStack]({legacy}1852)




## Documentação Swift
É possível obter a lista dos comandos possíveis ao consultar a documentação do cliente


```
admin@serveur-1:~$ swift --help
```


Vejamos a lista dos principais comandos:

|delete|Elimina um container ou os objetos presentes num container|
|---|
|delete|Elimina um container ou os objetos presentes num container|
|download|Efetuar download dos ficheiros de um container|
|list|Lista os containers da conta ou os objetos de um container|
|post|Atualiza os metadata para a conta, container ou objeto. Cria um container se não existir|
|stat|Apresenta as informações da conta, container ou objeto|
|upload|Envia ficheiros ou pastas para um container|
|capabilities|Lista as capacidades do ambiente Swift|
|tempurl|Cria um URL temporário|


É igualmente possível que obtenha ajuda para um comando particular ao adicionar no final do comando "--help":


```
admin@serveur-1:~$ swift post --help

Updates meta information for the account, container, or object.
If the container is not found, it will be created automatically.

Positional arguments:
[container] Name of container to post to.
[object] Name of object to post. Specify multiple times
for multiple objects.
[...]
```


Pode ainda consultar a documentação do cliente Swift diretamente no [website Openstack](http://docs.openstack.org/cli-reference/content/swiftclient_commands.html)


## Criação de um container de objetos público

- Criar o container "container1"


```
admin@serveur-1:~$ swift post container1
```


- Configurar os direitos de acesso para o tornar público


```
admin@serveur-1:~$ swift post --header "X-Container-Read: .r:*" container1
```


- Verificar a configuração do container


```
admin@serveur-1:~$ swift stat container1

Account: AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29
Container: container1
Objects: 0
Bytes: 0
Read ACL: .r:*
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Trans-Id: B2210C05:8D93_052711A1:01BB_561CC9DF_1B305:30D7
X-Storage-Policy: Policy-0
Connection: close
X-Timestamp: 1444726875.27475
Content-Type: text/plain; charset=utf-8
```





## Envio de ficheiros para o container

- Envio d oconteúdo de uma pasta local para um container


```
admin@serveur-1:~$ swift upload container1 images/

images/OVHlogo.png
images/OVHSummitKeynote.jpg
```



Será adicionado aos seus ficheiros um prefixo de forma automática se enviar uma pasta completa e não um só ficheiro.

- Listar os ficheiros do container


```
admin@serveur-1:~$ swift list container1

images/OVHSummitKeynote.jpg
images/OVHlogo.png
text1.txt
text2.txt
text3.txt
```



É possível apresentar os ficheiros que dispõem de um prefixo particular graças ao argumento "--prefix" :


```
admin@serveur-1:~$ swift list container1 --prefix images

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```


Estando o container configurado para estar acessível ao público, é possível aceder ao ficheiro graças a um URL:

```
https://storage.gra1.cloud.ovh.net/v1/AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29/container1/images/OVHlogo.png
```


Este URL é simplesmente formado pelo ponto de acesso API do Object Storage que poderá recuperar o menu [Acesso e Segurança no Horizon]({legacy}1774) bem como do nome do seu container e o nome do seu objeto (compreende igualmente o prefixo).


## Download de ficheiros

- Fazer download de um ficheiro:


```
admin@serveur-1:~$ swift download container1 text1.txt

text1.txt [auth 0.328s, headers 0.452s, total 0.453s, 0.000 MB/s]
```



É possível efetuar o download de vários ficheiros com o mesmo prefixo graças ao seguinte comando:


```
admin@serveur-1:~$ swift download container1 --prefix images

images/OVHlogo.png [auth 0.383s, headers 0.520s, total 0.522s, 0.135 MB/s]
images/OVHSummitKeynote.jpg [auth 0.371s, headers 0.514s, total 0.559s, 2.657 MB/s]
```




## Eliminar um container ou objetos

- Eliminar um ficheiro:


```
admin@serveur-1:~$ swift delete container1 text1.txt

text1.txt
```



Tal como para os downloads, é possível que elimine vários ficheiros que tenham o mesmo prefixo graças ao seguinte comando:

```
admin@serveur-1:~$ swift delete container1 images/*

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```



- Eliminar um container


```
admin@serveur-1:~$ swift delete container1

text2.txt
text3.txt
```



Este comando levará evidentemente à eliminação de todos os ficheiros que se encontram nesse container.


## 
[Voltar à página principal dos guias Cloud]({legacy}1785)

