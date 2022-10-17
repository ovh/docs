---
title: Object Storage Swift - Os primeiros passos com a API swift
excerpt: Os primeiros passos com a API swift
slug: pcs/getting-started-with-the-swift-api
legacy_guide_number: g1916
section: OpenStack Swift Storage Class Specifics
order: 010
---


> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 25/06/2021**

## Objetivo

Pode utilizar a API OpenStack para gerar vários scripts para automatizar as suas ações nas suas instâncias Public Cloud

O *swiftclient* OpenStack permite-lhe interagir com os seus containers e objetos e geri-los. Poderá, por exemplo, enviar ficheiros de forma regular para os seus containers para os guardar.

**Este guia ajudá-lo-á a familiarizar-se com a API OpenStack para gerir os seus containers de objetos com a ajuda de *python-swiftclient*.**

## Requisitos

- [Preparar o ambiente para utilizar a API OpenStack](https://docs.ovh.com/pt/public-cloud/preparar_o_ambiente_para_utilizar_a_api_openstack/) instalando python-swiftclient
- [Carregar as variáveis de ambiente OpenStack](https://docs.ovh.com/pt/public-cloud/carregar-as-variaveis-de-ambiente-openstack/)

## Instruções

> [!primary]
>
Tenha em conta que as instruções seguintes dizem respeito apenas à interface de linha de comando de uma distribuição GNU/Linux, após ter implementado os pré-requisitos acima.
>

### Documentação Swift

Pode obter a lista dos comandos possíveis na documentação do cliente:

```
admin@server-1:~$ swift --help
```

Eis a lista dos comandos principais:

|Comando|Descrição|
|---|---|
|**delete**|Eliminar um container ou os objetos presentes num container|
|**download**|Descarga de objetos a partir de contentores|
|**lista**|Lista dos containers de uma conta ou dos objetos de um container|
|**post**|Atualizar os metadados da conta, do container ou do objeto. Se o container não for encontrado, ele será automaticamente criado.|
|**stat**|Indica as informações relativas à conta, ao container ou ao objeto.|
|**upload**|Descarregar os ficheiros e diretórios especificados para o container dado.|
|**participações**|Extraem a capacidade do proxy.|
|**tempurl**|Gere um URL temporário para um objeto Swift.|


Para obter mais explicações sobre uma encomenda Swift específica, adicione `--help` no final desta:

```
admin@server-1:~$ swift post --help

Updatos meta-informação para o parto, container, ou object.
If the container is not found, it will be created automatically.

Positional argumentos:
[container] Name of container to post.
[object] Name of object to post. Specify múltiplo times
for múltiplos objetivos.
[...]
```

Também pode consultar a documentação do Swift disponível no [site OpenStack](http://docs.openstack.org/cli-reference/content/swiftclient_commands.html).

### Criação de um container de objetos públicos

- Crie o "container 1":

```
admin@server-1:~$ swift post container1
```

- Configure os direitos de acesso para tornar público o seu container:

```
admin@server-1:~$ swift post --header "X-Container-Read: .r:*" container1
```

- Verifique a configuração do container:

```
admin@server-1:~$ swift stat container1

Account: AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29
Container: container1
Objetivos: 0
Bytes: 0
Read ACL: .r:*
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Trans-Id: B2210C05:8D93_052711A1:01BB_561CC9DF_1B305:30D7
X-Storage-Policy: Policy-0
Ligação: close
X-Timestamp: 1444726875.27475
Content-Type: text/plain; charset=utf-8
```

### Envio de ficheiros no seu container

- Transfira o conteúdo de uma pasta local para um container:

```
admin@server-1:~$ swift upload container1 image/

images/OVHlogo.png
images/OVHSummitKeynote.jpg
```

Um prefixo será automaticamente adicionado aos seus ficheiros se enviar uma pasta completa em vez de um só ficheiro.

- Listar os ficheiros de um container:

```
admin@server-1:~$ swift list container1

images/OVHSummitKeynote.jpg
images/OVHlogo.png
text1.txt
text2.txt
text3.txt
```

É possível apresentar os ficheiros com um prefixo específico graças ao argumento `--prefix`:

```
admin@server-1:~$ swift list container1 --prefix images

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```

Se o container estiver configurado como público, pode aceder ao ficheiro através de um URL:

```
https://storage.gra1.cloud.ovh.net/v1/AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29/container1/images/OVHlogo.png
```

Este URL é composto por um ponto de terminação, disponível a partir da [interface Horizon](https://docs.ovh.com/pt/public-cloud/gestao-a-partir-do-horizon/), do nome do seu container e do nome do seu objeto (incluindo o prefixo).

### Descarregamento de ficheiros

- Descarregar um ficheiro:

```
admin@server-1:~$ swift download container1 text1.txt

text1.txt [auth 0.328s, headers 0.452s, total 0.453s, 0.000 MB/s]
```

Para descarregar vários ficheiros com o mesmo prefixo, execute o seguinte comando:

```
admin@server-1:~$ swift download container1 --prefix images

images/OVHlogo.png [auth 0.383s, headers 0.520s, total 0.522s, 0.135 MB/s]
images/OVHSummitKeynote.jpg [auth 0.371s, headers 0.514s, total 0.559s, 2.657 MB/s]
```

### Eliminação de containers ou objetos

- Eliminar um ficheiro:

```
admin@server-1:~$ swift delete container1 text1.txt

text1.txt
```

Tal como para a transferência, pode eliminar vários ficheiros com o mesmo prefixo, através do seguinte comando:

```
admin@server-1:~$ swift delete container1 imagens/*

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```

- Eliminar um container:

```
admin@server-1:~$ swift delete container1

text2.txt
text3.txt
```

Esta operação eliminará todos os ficheiros do container.

## Saiba mais

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
