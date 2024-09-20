---
title: 'Primeiros passos com as API OVHcloud'
excerpt: 'Saiba como utilizar as API da OVHcloud'
updated: 2024-06-07
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

As API disponíveis em [https://api.ovh.com/](https://api.ovh.com/){.external} permitem-lhe adquirir, gerir, atualizar e configurar produtos OVHcloud sem utilizar uma interface gráfica como a Área de Cliente.

**Saiba como utilizar as API da OVHcloud e como associá-las às suas aplicações**

## Requisitos

- Ter uma conta OVHcloud ativa e conhecer os seus identificadores.
- Estar na página web das [API OVHcloud](https://api.ovh.com/){.external}.

## Instruções

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção «[Quer saber mais?](#gofurther)» deste guia.
> 

### Utilização simples

#### Ligar-se às API OVHcloud

Na página das [API OVHcloud](https://api.ovh.com/), clique em `Explore the OVH API`{.action} para apresentar a lista das API. 

Para utilizar as API nos seus produtos, deve ligar-se a este site graças aos seus identificadores OVHcloud.

- Clique em `Authentication`{.action} no canto superior esquerdo.
- De seguida, clique em `Login with OVHcloud SSO`{.action}.
- Introduza as suas credenciais OVHcloud.
- Clique no botão `Authorize`{.action} para autorizar as chamadas às API a partir deste site.

![API](images/login.png){.thumbnail} 

> [!primary]
>
> Se a sua conta OVHcloud estiver protegida por uma [dupla autenticação](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa), deverá também introduzir o código gerado por SMS ou aplicação OTP ou chave U2F.
>

#### Explorar os produtos disponíveis nas API

No menu à esquerda, encontrará uma lista dos produtos OVHcloud que podem ser geridos através das API.

![API](images/api-list.png){.thumbnail} 

Para apresentar, por exemplo, as API associadas aos nomes de domínio, clique em **/domain** na lista.

Depois de clicar no produto, a lista das API deste último é apresentada por baixo. 

![API](images/api-displayed.png){.thumbnail}

Dispõe igualmente de um seletor à esquerda da lista dos produtos que permite escolher entre os ramos **/v1** e **/v2** da API. Se não está familiarizado com o princípio dos ramos da API, pode consultar [a seguinte documentação sobre a API v2](/pages/manage_and_operate/api/apiv2).

#### Executar uma API

Existem 4 tipos de API disponíveis que utilizam os chamados métodos HTTP: 

**GET** 

O método GET tem como objetivo recuperar os dados de um recurso.

Por exemplo, para obter a lista dos seus nomes de domínio, utilize a seguinte API:
 
> [!api]
>
> @api {v1} /domain GET /domain
>

**POST**

O método POST é utilizado para enviar dados suplementares para o recurso. 

Por exemplo, para adicionar um registo à sua zona DNS, utilize a seguinte API:

> [!api]
>
> @api {v1} /domain POST /domain/zone/{zoneName}/record
>

**PUT**

O método PUT serve para substituir os dados atuais do recurso pelos dados do pedido.

Por exemplo, se se enganou num registo da sua zona DNS, utilize a seguinte API:

> [!api]
>
> @api {v1} /domain PUT /domain/zone/{zoneName}/record/{id}
>

**LETE**

O método DELETE é utilizado para eliminar o recurso chamado.

Por exemplo, se não deseja conservar o registo DNS que adicionou à sua zona DNS, utilize a seguinte API:

> [!api]
>
> @api {v1} /domain DELETE /domain/zone/{zoneName}/record/{id}
>

##### Parâmetros da API

Depois de clicar na API à sua escolha, a secção **Request** permite atribuir as variáveis relativas à sua aplicação.

Por exemplo, para adicionar um registo TXT à sua zona DNS, poderá escolher os seguintes parâmetros:

![API](images/parameters.png){.thumbnail} 

Depois de definir os parâmetros, pode lançar a API clicando em `TRY`{.action}.

O separador `Response` apresentado dar-lhe-á o relatório de execução da API.

![API](images/result.png){.thumbnail} 

Os separadores `PHP` e `Python` contêm os elementos que devem ser adicionados no script em função da linguagem utilizada.

### Utilização avançada: associar as API OVHcloud a uma aplicação

#### Criar as chaves da sua aplicação

Qualquer aplicação que pretenda comunicar com a API da OVHcloud deve ser declarada previamente.

Para isso, clique na seguinte ligação: [https://eu.api.ovh.com/createToken/](https://eu.api.ovh.com/createToken/){.external}.

Indique o seu ID de cliente, a sua palavra-passe e o nome da sua aplicação. O nome será útil mais tarde se quiser autorizar outras pessoas a utilizá-lo.

Também pode adicionar uma descrição da aplicação, bem como um calendário. 

O campo `Rights` permite-lhe limitar a utilização da aplicação a certas API.
<br> Para autorizar todas as API da OVHcloud para um método HTTP, insira uma estrela `*` no campo, como no exemplo abaixo onde o método GET é autorizado para todas as API:

![API keys](images/api-keys.png){.thumbnail} 

Depois de clicar em `Create keys`{.action}, irá obter três chaves:

- a chave de aplicação, chamada **AK**. Por exemplo:

```console
7kbG7Bk7S9Nt7ZSV
```

- a sua chave de aplicação secreta, para não divulgar, chamada **AS**. Por exemplo:

```console
EXEgWIz07P0HYwtQDs7cNIqCiQaWSuHF
```

- um "**consumer key**" secreto, a não divulgar, chamado **CK**. Por exemplo:

```console
MtSwSrPpNjqfVSmJhLbPyr2i45lSwPU1
```

Neste caso, a chave **CK** está associada à sua conta.

O token **CK** pode ser utilizado para a delegação de direitos. Para saber mais, consulte o seguinte guia: [Como gerir a conta de um cliente OVHcloud através das API](/pages/manage_and_operate/api/api_right_delegation) (guia em inglês).

#### Primeira utilização da API

Depois de obter as três chaves (**AK**, **AS**, **CK**), pode assinar os pedidos de API. A assinatura é calculada do seguinte modo:

```console
"$1$" + SHA1_HEX(AS+"+"+CK+"+"+METHOD+"+"+QUERY+"+"+BODY+"+"+TSTAMP)
```

Para simplificar o desenvolvimento das suas aplicações, a OVHcloud fornece-lhe wrappers API em várias linguagens.
Utilizá-los-á para que não se preocupe com o cálculo da assinatura e se concentre no desenvolvimento da sua aplicação.

- *Perl* : <https://github.com/ovh/perl-ovh>
- *Python* : <https://github.com/ovh/python-ovh>
- *PHP* : <https://github.com/ovh/php-ovh>
- *Node.js* : <https://github.com/ovh/node-ovh>
- *Swift* : <https://github.com/ovh/swift-ovh>
- *C#* : <https://github.com/ovh/csharp-ovh>

Eis um exemplo de utilização da secção `/me` que permite gerir a sua conta OVHcloud:

```python
import ovh

# Instantiate. Visit https://api.ovh.com/createToken/?GET=/me
# to get your credentials
client = ovh.Client(
    endpoint='ovh-eu',
    application_key='<application key>',
    application_secret='<application secret>',
    consumer_key='<consumer key>',
)

# Print nice welcome message
print("Welcome", client.get('/me')['firstname'])
```

### Liste e revogue as suas chaves

Não existe atualmente nenhuma opção do Painel de Controlo para listar e revogar as suas chaves. O portal da API pode ser utilizado para fazer isso:

- Lista os IDs das chaves com a seguinte chamada:

> [!api]
>
> @api {v1} /me GET /me/api/application
>

- Obtenha os detalhes da chave com a seguinte chamada:

> [!api]
>
> @api {v1} /me GET /me/api/application/{applicationId}
>

- Revogar uma chave com a seguinte chamada:

> [!api]
>
> @api {v1} /me DELETE /me/api/application/{applicationId}
>

## Saiba mais <a name="gofurther"></a>

[Gerir um domínio através das API OVHcloud](/pages/web_cloud/domains/api_domain_intro) (guia em inglês)

[Como gerir a conta de um cliente OVHcloud através das API](/pages/manage_and_operate/api/api_right_delegation) (guia em inglês)

Fale com a nossa comunidade de utilizadores: [https://community.ovh.com/en/](https://community.ovh.com/en/).
