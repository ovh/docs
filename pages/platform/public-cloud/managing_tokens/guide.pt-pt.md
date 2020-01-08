---
title: 'Gestão dos tokens'
excerpt: 'Gestão dos tokens'
slug: gestao_dos_tokens
legacy_guide_number: g1872
---

## 

## Atenção
As informações detalhadas neste guia são válidas para a versão 3.0 da API da Keystone.


## Definições

- Endpoint: Endereço HTTP que aponta diretamente para uma API de um serviço, por exemplo https://auth.cloud.ovh.net/v2.0 para o endpoint de autenticação ou https://image.compute.gra1.cloud.ovh.net/ para o endpoint de gestão das imagens da zona GRA1.

- Token: Cadeia de caracteres único associado a uma autenticação e direitos de acesso. Um token é pedido por utilizador ao fornecer os seus dados de acesso (informações de login) à API de autenticação. É gerada e fornecido com uma duração de validada limitada a 24h.




## Princípio global
A maior parte dos pedidos submetidos nas APIs OpenStack devem responder a um mecanismo de autorização. Este mecanismo funciona pela obtenção de tokens e pela validação dos mesmos. Vamos dar uma vista de olhos ao funcionamento de uma chamada após a autenticação até à execução da chamada.

- Pedido de criação do token a partir do endpoint de autenticação com as credenciais
- Pedido no endpoint do serviço desejado (storage, compute, network, ...) ao fornecer o token
- A API do serviço recupera o token e solicita a sua veracidade junto do serviço de autenticação
- Se a veracidade do token for verificada, a chamada é executada


Como os tokens tem uma validação definida, eles expiram e devem ser renovados sempre que necessário.

Da mesma forma, se um token é revogado antes da sua data de expiração, é possível efetuá-lo via API.

Para mais informações conulte a documentação da [OpenStack da API](http://docs.openstack.org/api/quick-start/content/) e do [mecanismo de autenticação](http://docs.openstack.org/kilo/install-guide/install/apt/content/keystone-concepts.html).


## 
As operações que se seguem podem ser lançadas manualmente, são geralmente utilizadas para fins pedagógicos ou de 'debugging'.

É necessário alterar o ambiente com a ajuda do ficheiro openrc (ver o guia).

No nosso exemplo, desejamos obter as informações do metadata de um objeto armazenamento graças à oferta Public Cloud Storage. As etapas são:


- Pedido de criação de um token
- Recuperação das variáveis token ID e endpoint publicURL
- Pedido no objeto com as informações recuperadas


A ferramenta online cURL permite a construção de pedidos de todo o tipo.


## Pedido de criação de um token

```
$ curl -X POST $OS_AUTH_URL/tokens -H "Content-Type: application/json" -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}' | python -mjson.tool
```



- -X POST: método HTTP utilizado para submeter dados

- $OS_AUTH_URL/tokens: ação nos elementos tokens

- -H "Content-Type: application/json": formato de saída esperado pelo JSON

- -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}': corpo do pedido, onde estão as informações de autenticação

- python -mjson.tool: ferramenta python que permite a apresentação do resultado de forma percetível


A resposta deverá ser algo assim:


```
{
"access": {
"metadata": {
"is_admin": 0,
"roles": [
"9fe...fd4"
]
},
"serviceCatalog": [
[...]
{
"endpoints": [
{
"adminURL": "https://image.compute.sbg1.cloud.ovh.net/",
"internalURL": "http://127.0.0.1:8888/v1/AUTH_9ea...ff0",
"publicURL": "https://storage.sbg1.cloud.ovh.net/v1/AUTH_9ea...ff0",
"region": "SBG1"
}
],
"endpoints_links": [],
"name": "swift",
"type": "object-store"
},

[...]
],
"token": {
"audit_ids": [
"Mka...cmTw"
],
"expires": "2015-10-02T14:53:15Z",
"id": "a4331ec98754472032f031e18b16bd00",
"issued_at": "2015-10-01T14:53:15.072501",
"tenant": {
"description": null,
"enabled": true,
"id": "9ea...ff0",
"name": "361...868"
}
},

[...]
}
}
```




## Recuperação das variáveis token ID e endpoing publcURL
As duas informações estão disponíveis no resultado do comando anterior.

Para o endpoint publicURL, é necessário procurar na secção "object-store" e a região que deseja, aqui, ici "SBG1".


```
$ export endpoint="https://storage.sbg1.cloud.ovh.net/v1/AUTH_9ea...ff0"
```


Este endereço do endpoint do serviço de object storage vai-lhe permitir de pedir as informações no objeto.


```
$ export token=a4331ec98754472032f031e18b16bd00
```


Este token é agora o elemento de autenticação que será utilizado no pedido seguinte.


## Pedido no objeto com as informações recuperadas

```
$ curl -X GET $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg -H "X-Auth-Token: $token" -I
```



- -X GET : méthode HTTP GET
- $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg: endereço do objeto
- -H "X-Auth-Token: $token": elemento de autenticação
- -I: opção curl para recuperar apenas os metadatas


A resposta deverá ser algo assim:


```
HTTP/1.1 200 OK
Content-Length: 190046
Content-Type: image/jpeg
Accept-Ranges: bytes
Last-Modified: Thu, 24 Sep 2015 14:20:11 GMT
Etag: c93e12530b66f121d4bd5a6ae096ee77
X-Timestamp: 1443104410.15437
X-Object-Meta-Mtime: 1424095540.000000
X-Trans-Id: 95CAB26E:D200_052711B1:01BB_560D4CE7_1631931:2BB4
Date: Thu, 01 Oct 2015 15:10:31 GMT
Connection: close
```




## 
Aconselhamos fortemente que utilize librarias que permitam a gestão transparente dos tokens. Desta forma, ao fornecer os dados de acesso de ligação à libraria, os tokens serão gerados, utilizados e renovados automaticamente sem ter de efetuar a sua gestão a nível aplicacional.

Existem numerosas librarias disponíveis para as diferentes linguagens. Consulte a lista oficial para mais informações.


## Exemplo em Python
A instalação da libraria efetua-se com a ajuda do pip.

```
$ pip install python-openstacksdk
```


Após a inicialização da ligação, os tokens serão gerados.

```
from openstack import connection
conn = connection.Connection(auth_url="https://auth.cloud.ovh.net/v2.0",
project_name="361...868",
username="vvQ...VBW",
password="jCr...RGj")
for cont in conn.object_store.containers():
if(cont.name == "photos"):
for obj in conn.object_store.objects(cont):
if(obj.name == "fullsize/ovh-summit-2014-backstage-DS.jpg"):
print conn.object_store.get_object_metadata(obj)
```




## Exemplo em PHP
A instalação da libraria requer o php-curl et composer.


```
$ apt-get install php5-curl
$ curl -sS https://getcomposer.org/installer | php
$ php composer.phar require rackspace/php-opencloud
```


A utilização funciona igualmente com um "conector" que vai gerar os tokens.


```
<?php
require '/var/www/vendor/autoload.php';
use OpenCloud\OpenStack;
$client = new OpenStack("https://auth.cloud.ovh.net/v2.0", array(
'username' => "vvQ...VBW",
'password' => "jCr...RGj",
'tenantName' => "361...868",
));
$objectStoreService = $client->objectStoreService('swift', "GRA1");
$cont = $objectStoreService->getContainer("photos");
$obj = $cont->getPartialObject('fullsize/ovh-summit-2014-backstage-DS.jpg');
print_r($obj->getMetadata());
?>
```




## 
[Voltar ao índice dos guias Cloud]({legacy}1785)

