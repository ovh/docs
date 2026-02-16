---
title: "Alojamento web - Instalar um certificado SSL personalizado"
excerpt: "Saiba como importar e instalar um certificado SSL personalizado no seu alojamento Web OVHcloud"
updated: 2025-12-16
---

## Objetivo

Os certificados Secure Socket Layer (SSL) permitem encriptar as trocas efetuadas a partir do seu website ou para o seu website. Isto evita que uma pessoa ou um robô malicioso venha "ouvir" claramente os pedidos enviados ou emitidos com o seu website.

A OVHcloud oferece vários tipos de certificados SSL nas ofertas de [alojamento partilhado OVHcloud](/links/web/hosting). São apresentados no nosso guia "[Alojamento Web - Gerir um certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)". Os certificados SSL são incontornáveis para a segurança do seu website.

Em função da sua situação, é possível que pretenda instalar um certificado SSL diferente dos que são propostos pela OVHcloud no seu alojamento web.

**Saiba como importar e instalar um certificado SSL personalizado no alojamento web da OVHcloud.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Encomendar ou dispor de um [alojamento partilhado OVHcloud](/links/web/hosting).
- Encomendar ou dispor de um [nome de domínio](/links/web/domains) e dispor de direitos exclusivos sobre a sua utilização. O domínio não deve estar associado a um certificado SSL.
- Ter OpenSSL ou uma aplicação compatível instalada localmente no seu dispositivo.

## Instruções

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. Se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner). De facto, não poderemos fornecer-lhe assistência no **instalação ou subscrição de um certificado SSL que não seja o [certificado SSL proposto pela OVHcloud](/links/web/hosting-options-ssl)**. Mais informações na secção "[Quer saber mais?](#go-further)" deste guia.

### 1 - Obter um Certificate Signing Request (CSR) SSL <a name="step-1"></a>

> [!primary]
>
> Esta etapa é opcional se já tiver gerado e recuperado o certificado SSL junto do seu fornecedor SSL ou se este último propuser a geração do CSR durante a encomenda do certificado SSL. Se este for o caso, passe diretamente para [parte 2](#step-2).

#### 1.1 - Gerar a chave privada e a CSR em linha de comandos <a name="step-1.1"></a>

Para executar os comandos a seguir, precisará da caixa de ferramentas OpenSSL incluída em várias distribuições Linux. Caso contrário, instale-a através do gestor de pacotes do sistema ou utilize uma aplicação de terceiros compatível. No Windows, pode utilizar o subsistema Windows para Linux (WSL) ou instalá-lo através de uma aplicação de terceiros.
Uma vez que esta operação depende do sistema operativo que utiliza, não podemos especificar todos os casos neste guia.

Abra a interface de linha de comandos (terminal) e execute o seguinte comando:

```sh
openssl req -nodes -newkey rsa:2048 -sha256 -keyout my_private.key -out your_file_name.csr -utf8
```

Substitua os termos `my_private` e `your_file_name` por qualquer nome de ficheiro.

Uma vez iniciada a encomenda, o terminal solicitará cada uma das seguintes informações (para si, para a sua empresa ou para a sua associação). Depois de responder à pergunta, prima a tecla `ENTRAE`{.action} no teclado para apresentar a seguinte pergunta:

- `Country Name (2 letter code) [AU]`: introduza em maiúsculas o **Country Code** do seu país. Se necessário, encontre a lista de todos os **Country Codes** [aqui](https://www.iban.com/country-codes).
- `State or Province Name (full name) [Some-State]` : introduza em maiúsculas o nome da sua região (ou do seu Estado se estiver, por exemplo, nos EUA).
- `Locality Name (eg, city) []` : introduza em maiúsculas o nome da sua cidade.
- `Organization Name (eg, company) [Internet Widgits Pty Ltd]`: introduza o nome da sua organização, empresa ou associação. **Se for um utilizador doméstico, não responda a esta pergunta e prima diretamente a tecla `ENTRAE`{.action} no teclado para apresentar a seguinte pergunta**.
- `Organizational Unit Name (eg, section) []` : introduza o nome do seu departamento ou do seu serviço na sua organização, empresa ou associação. **Se for um utilizador doméstico, não responda a esta pergunta e prima diretamente a tecla `ENTRAE`{.action} no teclado para apresentar a seguinte pergunta**.
- `Common Name (e.g. server FQDN or YOUR name) []`: introduza o nome do domínio (exemplo: `domain.tld`) ou o subdomínio (exemplo: `sub.domain.tld`) para o qual deseja obter um certificado SSL. **Apenas um** nome de domínio ou subdomínio pode ser indicado aqui. Em função do fornecedor SSL, deverá indicar apenas o seu nome de domínio (exemplo: `domain.tld`) ou o seu subdomínio em "www" (exemplo: `www.domain.tld`). Informe-se previamente sobre este assumpto junto do seu fornecedor SSL.
- `Email Address []`: introduza o seu endereço de e-mail.

As perguntas seguintes são opcionais e destinam-se principalmente a utilizadores experientes. Em caso de dúvida, recomendamos-lhe vivamente que as passe pressionando a tecla `ENTRAE`{.action} no teclado até que o terminal deixe de fazer perguntas.

- `A challenge password []`: Para utilizadores experientes, introduza uma palavra-passe secreta que será utilizada entre o utilizador e o fornecedor do certificado SSL. Tenha em conta que, do lado da OVHcloud, a CSR e a chave privada não devem ser protegidas por palavra-passe para serem adicionadas a um alojamento partilhado OVHcloud.
- `An optional company name []`: para utilizadores experientes, pode introduzir um nome diferente para a sua organização, empresa ou associação.

#### 1.2 - Obter a chave privada

Para recuperar a chave privada gerada anteriormente e sempre a partir do seu terminal, execute o seguinte comando:

```sh
cat my_private.key
```

Substitua o termo `my_private` pelo nome do ficheiro que escolheu anteriormente no [parte 1.1](#step-1.1) deste guia.

A chave privada aparece no seu terminal desta forma:

```console
-----BEGIN PRIVATE KEY-----
XXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXX The Private Key XXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXX
------END PRIVATE KEY------
```

Abra um programa de processamento de texto (bloco de notas, LibreOffice, etc.) e, em seguida, `copie/cole`{.action} a chave privada completa, incluindo os termos `-----BEGIN PRIVATE KEY-----` e `-----END PRIVATE KEY-----`.

Guarde este ficheiro. Guarde-o preciosamente para a continuação deste manual, caso o seu fornecedor SSL o solicite na sua próxima encomenda.

#### 1.3 - Recuperar a CSR

Para recuperar a CSR gerada anteriormente e sempre a partir do seu terminal, execute o seguinte comando:

```sh
cat your_file_name.csr
```

Substitua o termo `your_file_name` pelo nome do ficheiro que escolheu anteriormente no [parte 1.1](#step-1.1) deste guia.

A CSR aparece no seu terminal da seguinte forma:

```console
-----BEGIN CERTIFICATE REQUEST-----
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXX The CSR XXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
------END CERTIFICATE REQUEST------
```

Abra um programa de processamento de texto e, em seguida, `copie/cole`{.action} a totalidade da CSR, incluindo os termos `-----BEGIN CERTIFICATE REQUEST-----` e `-----END CERTIFICATE REQUEST-----`.

Guarde este ficheiro. Guarde-o preciosamente para a continuação deste manual, caso o seu fornecedor SSL o solicite na sua próxima encomenda.

> [!warning]
>
> O ficheiro que contém a chave privada e o ficheiro que contém a CSR estão ligados e não são permutáveis. Se tiver gerado várias chaves privadas ou vários CSR, certifique-se de que não mistura as suas diferentes chaves privadas com os seus diferentes CSR.

### 2 - Encomendar o certificado SSL junto do seu fornecedor SSL <a name="step-2"></a>

> [!primary]
>
> Esta etapa é opcional se já tiver gerado e recuperado o certificado SSL junto do seu fornecedor SSL. Se este for o caso, passe diretamente para [parte 3](#step-3).

Encomende o certificado SSL junto do seu fornecedor SSL. Caso seja necessário, transmita-lhe o conteúdo da CSR gerada na [parte 1](#step-1) deste guia. Se ele solicitar a chave privada gerada na [parte 1](#step-1), transmita-a também.

Após a sua encomenda, o fornecedor do certificado SSL deve fornecer-lhe 3 ficheiros :

- O ficheiro `certificate.crt`.
- O ficheiro `private.key`.
- O ficheiro `ca_bundle.crt`.

O conteúdo de cada um dos ficheiros será necessário para realizar a [parte 3](#step-3) deste guia.

<a name="3files"></a>

> [!warning]
>
> Alguns fornecedores SSL entregam o conteúdo dos ficheiros `certificate.crt` e `ca_bundle.crt` num único ficheiro. Deverá separar o conteúdo deste ficheiro de forma a reformar os ficheiros `certificate.crt` e `ca_bundle.crt`. Isto antes de realizar a [parte 3](#step-3) deste guia.
>
> Outros fornecedores SSL entregam o ficheiro `ca_bundle.crt` em várias partes/ficheiros. Deverá concatenar os conteúdos destes ficheiros de forma a reformar um único ficheiro `ca_bundle.crt` e seguir a [parte 3](#step-3) deste guia.
>
> Se estiver preocupado com esta situação e tiver problemas na realização destas operações, contacte o seu fornecedor SSL. Especifique-lhe que o conjunto do conteúdo que lhe concedeu deve ser repartido unicamente em 3 ficheiros (`certificate.crt`, `ca_bundle.crt` e `private.key`) para que possa proceder à instalação do certificado SSL.

### 3 - Instalar o certificado SSL personalizado no seu alojamento web <a name="step-3"></a>

Se iniciar diretamente a leitura deste manual nesta etapa, uma vez que já dispõe de um certificado SSL externo encomendado junto de um fornecedor SSL, verifique que dispõe apenas dos 3 ficheiros seguintes : `certificate.crt`, `private.key` e `ca_bundle.crt`. Se não estiver, consulte as informações [acima](#3files).

**Antes de finalizar a instalação do certificado SSL no alojamento web**, verifique se **todos os domínios e/ou subdomínios** abrangidos pelo seu certificado SSL:

- apontam para o endereço IP do seu alojamento web.
- estão declarados num dos sites web da sua alojamento web.
- não possuem já um certificado SSL ativo.

Para confirmar, consulte os guias abaixo sempre que necessário:

- [Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Alojamento web - Lista dos endereços IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
- [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
- [Alojamento web - Gerir um certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting), parte **Desativar um certificado SSL num alojamento web**.

Quando todos estes requisitos forem cumpridos, pode iniciar a finalização da instalação do seu certificado SSL personalizado no seu alojamento web.

Clique nos separadores abaixo para exibir sucessivamente cada um dos **5** passos:

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na página que se abrir, clique no separador `Certificados SSL`{.action}.
>>
>> ![Certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Quando o conteúdo do separador aparecer, clique no botão `Importação do seu próprio certificado SSL`{.action}.
>>
>> ![SSL personalizado](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate.png){.thumbnail}
>>
> **Etapa 5**
>>
>> Aparecerá a seguinte janela com 3 formulários a preencher:
>>
>> ![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window.png){.thumbnail}
>>
>> - `Copiar conteúdo do seu certificado (apenas RSA)`{.action}: introduza o conteúdo do ficheiro **certificate.crt** emitido pelo seu fornecedor SSL, incluindo os termos `-----BEGIN CERTIFICATE-----` e `-----END CERTIFICATE-----` (ou seus equivalentes). A encriptação RSA é a encriptação standard para os certificados SSL.
>> - `Copiar o conteúdo da sua chave privada (não encriptada)`{.action}: introduza o conteúdo do ficheiro **private.key** fornecido pelo seu fornecedor SSL, incluindo os termos `-----BEGIN RSA PRIVATE KEY-----` e `-----END RSA PRIVATE KEY-----` (ou os seus equivalentes). Se *não encriptada* significa que a chave privada não necessita de estar protegida com uma palavra-passe ou frase. Caso contrário, a instalação do certificado falhará.
>> - `Copiar o conteúdo da sua cadeia de certificados`{.action}: introduza o conteúdo do ficheiro **ca_bundle.crt** emitido pelo seu fornecedor SSL, incluindo os termos `-----BEGIN CERTIFICATE-----` e `-----END CERTIFICATE-----` (ou seus equivalentes).
>>
>> ![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window-completed.png){.thumbnail}
>>
>> Depois de preencher os 3 formulários, clique em `Validar`{.action} para terminar a importação do certificado SSL personalizado para o seu alojamento web.

Se o certificado SSL tiver sido gerado corretamente pelo fornecedor SSL e os requisitos forem respeitados, aparecerá uma mensagem indicando que a ativação do certificado SSL no alojamento web está em curso.

> [!warning]
>
> Se você encontrar o erro `error check SAN from certificate`, isso é devido a pelo menos uma das seguintes situações:
>
> - pelo menos um domínio/subdomínio declarado no seu certificado SSL não aponta para o endereço IP do seu alojamento web;
> - pelo menos um domínio/subdomínio declarado no seu certificado SSL não está associado a nenhum dos sites web do seu alojamento web.
>
> Consulte os nossos manuais "[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)" e "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" para resolver esta situação.

A instalação leva alguns minutos.

Para verificar se a instalação está completa, clique nos separadores abaixo para visualizar cada um dos **4** passos:

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na página que se abrir, clique no separador `Certificados SSL`{.action}.
>>
>> ![Certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Quando o conteúdo do separador aparecer, verifique se cada domínio e/ou subdomínio em causa aparece na tabela com o tipo de certificado SSL `Custom`.
>>
>> ![Quadro de gestão dos certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/tab-custom.png){.thumbnail}

O seu certificado SSL personalizado já está instalado e ativo. Pode desde já utilizá-lo com o seu website passando, por exemplo, pelo seu [website em HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Quer saber mais? <a name="go-further"></a>

[Alojamento web - Gerir um certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Alojamento web - alterar o seu website para HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Erros comuns associados à segurança do seu website com SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).