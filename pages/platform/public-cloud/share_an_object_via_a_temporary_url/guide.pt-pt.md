---
title: 'Partilhar um objeto com um endereço temporário'
slug: partilhar-um-objeto-com-um-endereco-temporario
excerpt: 'Saiba como partilhar um objeto sem fornecer dados pessoais'
section: Diversos
---

**Última atualização: 10/05/2019**

## Sumário 

O OpenStack Swift permite armazenar um grande número de ficheiros. Para os gerir, deve estar autenticado graças a um *token* (ou ficha) para cada um dos seus pedidos para a API. Isto permite-lhe confirmar as suas autorizações de leitura e escrita no Swift. Este *token* provém do sistema de autenticação graças ao ID de cliente e palavra-passe.

Quando pretende partilhar um ficheiro com alguém, não quer transmitir informações pessoais de autenticação. Neste caso, os endereços temporários (ou *tempurl*) podem responder às suas necessidades.

**Saiba como partilhar um objeto com um endereço temporário.**

## Requisitos

- [Ter preparado o ambiente para usar a API OpenStack](https://docs.ovh.com/pt/public-cloud/preparar_o_ambiente_para_utilizar_a_api_openstack/){.ref}.
- [Carregar as variáveis do ambiente OpenStack](https://docs.ovh.com/fr/public-cloud/charger-les-variables-denvironnement-openstack/){.ref} (versão em francês).
- Ter instalado o Python no seu ambiente de trabalho.

## Instruções

### Compreender o princípio

O endereço temporário (ou *tempurl*) é uma funcionalidade que lhe permite controlar os ficheiros que pretende partilhar. Para isso, utiliza os seguintes elementos:

- **o endereço do ponto de acesso**, como https://storage.sbg1.cloud.ovh.net;
- **o caminho para o objeto que contém o seu projeto, o container e o nome do objeto**, como `v1/AUTH_tenant/default/file`;
- **o parâmetro tempurlsign**, que corresponde a uma assinatura gerada em função da sua senha secreta, o método HTTP, o caminho do ficheiro e a data de expiração;
- **o parâmetro url_expires**, que corresponde à data de expiração do seu endereço temporário.

### Gerar o endereço temporário (*tempurl*)

#### 1. Geração da senha

Em primeiro lugar, deve criar uma senha. Esta será válida para todos os ficheiros do seu projeto. Assim, uma única geração de senha será suficiente para todos os endereços temporários. 

> [!primary]
>
> Recomendamos vivamente que escolha uma senha longa, com pelo menos 20 caracteres. No entanto, tenha em conta que é possível gerar uma nova senha a qualquer momento.
> 

Para gerar uma chave, existem várias formas, tais como os comandos sha512sum ou sha256sum. Recomendamos que utilize o método mais adaptado à sua situação, segundo o nível de encriptação que pretende utilizar. Por exemplo, da encriptação mais eficaz à menos eficaz:

- date +%s | sha512sum
- date +%s | sha256sum
- date +%s | md5sum 

Depois de obter a sua senha, poderá configurá-la no seu projeto graças ao cliente Swift. Certifique-se de que substitui a cadeia “12345” pela sua senha:

```bash
swift post -m "Temp-URL-Key: 12345"
```

Ou através do curl:

```bash
curl -i -X POST \ -H "X-Account-Meta-Temp-URL-Key: 12345" \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```

> [!primary]
>
> O nome completo do cabeçalho é `X-Account-Meta-Temp-Url-Key`, mas o cliente Swift utiliza `Temp-Url-Key` pois adiciona automaticamente `X-Account-Meta`.
> 

Agora que configurou a senha na conta, verifique que o **header** foi corretamente aplicado graças ao seguinte comando utilizando o cliente Swift: 

```bash
swift stat
```

Ou com o curl:

```bash
curl -i -X HEAD \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```

#### 2. Geração do URL

As seguintes tarefas podem ser realizadas em offline. O endereço URL temporários será gerado através de um comando. Este deverá ser personalizado com as suas informações.

Por exemplos, para os elementos abaixo:

- **GET**: método HTTP.
- **60**: ligação disponível durante 60 segundos (pode personalizar este valor).
- **/v1/AUTH_tenant/default/file**: o caminho para o seu ficheiro. Não é necessário adicionar o ponto de acesso nesta fase.
- **12345**: substituir pela sua senha.

```
swift tempurl GET 60 /v1/AUTH_tenant/default/file 12345
```

Obtém o **tempURL** que lhe permite visualizar o **caminho para o ficheiro**, a **assinatura** e a **data de expiração**, tal como explicado anteriormente.

```
v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```

Para que o URL funcione corretamente, deverá adicionar o endereço do ponto de acesso antes do seu **tempURL**:

```
https://storage.sbg1.cloud.ovh.net/v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```

No exemplo acima, este endereço temporário permite descarregar o ficheiro **file** no container **default** durante 60 segundos, sem autenticação. Para além disso, o URL não funcionará.

> [!primary]
>
> Para os utilizadores de nível mais avançado que pretendem gerar endereços temporários sem o script **swift-temp-url**, é possível saber mais diretamente na documentação oficial da OpenStack.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em https://community.ovh.com/en/.
