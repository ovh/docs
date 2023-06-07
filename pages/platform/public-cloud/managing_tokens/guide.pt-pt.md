---
title: 'Gestão dos tokens'
excerpt: 'Saiba como utilizar os token através da API Keystone'
legacy_guide_number: g1872
updated: 2023-03-02
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 02/03/2023**

## Objetivo

**Descubra como configurar as ligações às API keystone no seu serviço com a ajuda dos tokens.**

> [!primary]
>
> As informações aqui detalhadas são válidas para a versão 3.0 da API de
> Keystone.
> 

## Instruções

### Definições

- Endpoint: Endereço HTTP apontando diretamente para uma API de um serviço. por exemplo, [https://auth.cloud.ovh.net/v3/](https://auth.cloud.ovh.net/v3/){.external} para o ponto de autenticação ou [https://image.compute.gra1.cloud.ovh.net/](https://image.compute.gra1.cloud.ovh.net/){.external} para o ponto de gestão das imagens da zona GRA1.

- Token: Cadeia de caráter único ligada a uma autenticação e a direitos de acesso. Um token é pedido pelo utilizador ao fornecer os seus credenciais (informações de login) à API de autenticação. É gerado e fornecido com um prazo de validade limitado de 24h. Um token pode ser "scoped" ou "unscoped", ou seja, pode estar diretamente ligado a uma ligação ou não estar ligado a nenhuma associação.


### Princípio global

A maior parte dos pedidos apresentados às API OpenStack devem responder a um mecanismo de autorização. Este mecanismo funciona através da obtenção de token (token em francês) e da sua validação. Eis as grandes linhas do funcionamento de uma chamada desde a autenticação até à execução da chamada.

- Pedido de criação de token junto do ponto de autenticação com os credenciais
- Pedido sobre o local do serviço desejado (storage, compute, network, ...) ao fornecer o token em parâmetro
- A API do serviço recupera o token e pede a verificação da validade junto do serviço de autenticação
- Se a validade for verificada, o convite será tomado em conta e executado

Uma vez que os tokens têm um período de validade definido, expiram e devem ser renovados sempre que necessário.

Do mesmo modo, se um token tiver de ser retirado antes da sua data de expiração, poderá fazê-lo através da API.

Para mais informações, consulte a documentação do [OpenStack da API](https://docs.openstack.org/keystone/train/api_curl_examples.html){.external}.


### Operações manuais
As operações que se seguem podem ser efetuadas manualmente, sendo geralmente utilizadas para fins pedagógicos ou de arranque.

É necessário carregar o ambiente com o ficheiro openrc (ver guia).

No nosso exemplo, desejamos obter as informações de metadata de um objeto armazenado graças à oferta Public Cloud Storage. As etapas são:

- Pedido de criação de um token
- Recuperação das variáveis token ID e endpoint publicURL
- Pedido sobre o objeto com as informações recuperadas

A ferramenta em linha de comandos cURL permite construir pedidos de todas as peças.


#### Etapa 1: Pedido de criação de um token

```bash
curl -X POST ${OS_AUTH_URL}auth/tokens -H "Content-Type: application/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "id": "default" }, "password": "'$OS_PASSWORD'" } } }, "scope": { "project": { "name": "'$OS_TENANT_NAME'", "domain": { "id": "default" } } } } }' | python -mjson.tool
```

A resposta do servidor é a seguinte:


```json
 {
  "token": {
    "is_domain": false,
    "methods": [
      "password"
    ],
    "roles": [
      {
        "id": "9543e89aeb484aee8ec7d01e87223b16",
        "name": "objectstore_operator"
      }
    ],
    "is_admin_project": false,
    "project": {
      "domain": {
        "id": "default",
        "name": "Default"
      },
      "id": "<ID OF THE PROJECT>",
      "name": "<NAME OF THE PROJECT>"
    },
    "catalog": [
      {
        "endpoints": [
          {
            "url": "https://network.compute.sbg1.cloud.ovh.net/",
            "interface": "internal",
            "region": "SBG1",
            "region_id": "SBG1",
            "id": "075839111e7a41f1bb458926e5f04cec"
          },
          [...]
        ],
        "type": "network",
        "id": "0be6ed3dce244b8295ff643739a86809",
        "name": "neutron"
      },
      [...]
    ],
    "expires_at": "2020-01-17T14:53:32.000000Z",
    "user": {
      "password_expires_at": null,
      "domain": {
        "id": "default",
        "name": "Default"
      },
      "id": "<ID OF THE USER>",
      "name": "<NAME OF THE USER>"
    },
    "audit_ids": [
      "IuNOR-lKQ9GJGQd8taWBnQ"
    ],
    "issued_at": "2020-01-16T14:53:32.000000Z"
  }
}
```


#### Etapa 2: Recuperação das variáveis token ID e endpoint publicURL

As duas informações estão disponíveis na saída da encomenda anterior.

Para o endpoint publicURL, é preciso procurar na secção "object-store" e na região mais adequada, aqui "SBG".


```bash
$ export endpoint="https://storage.sbg.cloud.ovh.net/v1/AUTH_9ea...ff0"
```

É o endereço do endpoint do serviço de object storage que vai permitir pedir as informações sobre o objeto.


```bash
export token=$(curl -is -X POST ${OS_AUTH_URL}auth/tokens -H "Content-Type" application/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "id": "default" }, "password": "'$OS_PASSWORD' }, "scope": { "project": { "name": "'$OS_tenant_NAME'", "domain": { "id": "default" } } }' | grep -i '^X-Subject-Token' | cut -d" " -f2)
```

Este token é agora o elemento de autenticação que será utilizado para o pedido seguinte.


#### Etapa 3: Pedido sobre o objeto com as informações recuperadas

```bash
curl -X GET $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg -H "X-Auth-Token: $token" -I
```

- -X GET: método HTTP GET
- endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg endereço do objeto
- -H "X-Auth-Token: $token": elemento de autenticação
- -I: opção curl para recuperar apenas os metadados

A resposta é esta:


```bash
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


### Gestão automática: livrarias e SDK

Recomenda-se vivamente a utilização de bibliotecas que permitam uma gestão transparente dos tokens. Desta forma, ao fornecer simplesmente os credenciais de ligação à livraria, os tokens serão automaticamente gerados, utilizados e renovados sem terem de os gerir a nível da aplicação.

Há muitas livrarias em diferentes linguagens. Consulte [a lista oficial para mais informações](https://wiki.openstack.org/wiki/SDKs){.external}.

## Saiba mais

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.