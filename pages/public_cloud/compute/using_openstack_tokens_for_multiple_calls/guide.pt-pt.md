---
title: "Utilização dos tokens OpenStack"
excerpt: "Saiba como criar e utilizar tokens OpenStack para as suas ações"
updated: 2023-05-05
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 05/05/2023**

## Objetivo

**Este guia fornece boas práticas para realizar um grande número de ações OpenStack em pouco tempo.**

> [!primary]
>
> As etapas descritas neste manual baseiam-se na versão 3.0 da API Keystone.
>

### Definições

- **Ponto de terminação (*Endpoint*)**: endereço Web apontando diretamente para a API de um serviço. Por exemplo, [https://auth.cloud.ovh.net/v3/](https://auth.cloud.ovh.net/v3/) para o ponto de acesso à autenticação ou [https://image.compute.gra11.cloud.ovh.net/](https://image.compute.gra11.cloud.ovh.net/) para o ponto de acesso à gestão das imagens da zona GRA11. 

- **Token**: uma cadeia de caracteres única utilizada para autenticar e aceder aos recursos. O utilizador pede-o introduzindo as suas informações de identificação (detalhes de ligação) na API de autenticação. O token é gerado e válido durante 24 horas.

- **OpenRC**: Para melhorar a eficácia das interações com o serviço de identidade através do cliente OpenStack, OpenStack toma a cargo scripts de ambiente de cliente simples também conhecidos como ficheiros OpenRC. Trata-se de ficheiros que contêm opções comuns a todos os clientes, mas que suportam igualmente opções únicas.

### Problemática

A maioria dos pedidos enviados à API OpenStack deve seguir um procedimento de autorização que implica a geração de um token e a sua validação.

No entanto, se realizar demasiadas ações em pouco tempo, algumas ações OpenStack irão cair em erro devido a demasiadas chamadas à API. O limite atual é de 60 criações de tokens por minuto e por utilizador. A API de autenticação devolverá os erros HTTP 429 para além deste limite.

Para mais informações, consulte a [documentação oficial OpenStack API](http://developer.openstack.org/api-guide/quick-start/).

Este manual explica-lhe como emitir um token OpenStack, como utilizá-lo para as ações que pretende realizar e como revogar um token.

## Requisitos 

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Este guia requer a instalação da ferramenta OpenStack CLI na sua máquina.

> [!primary]
>
> Para mais informações, consulte a [documentação OpenStack CLI](https://docs.openstack.org/python-openstackclient/latest/).

Pode obtê-lo a partir do gestor de pacotes apt (para as distribuições baseadas em Debian) ou por yum (para as distribuições baseadas em RHEL/CentOS):

```bash
# Distribuições Debian

sudo apt install python3-openstackclient

# Distribuições CentOS/RHEL

sudo yum install python3-openstackclient
```

- Para os utilizadores do Windows, consulte este guia para exportar as suas variáveis de ambiente: [Carregar as variáveis de ambiente OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables/).

## Instruções

### Etapa 1: descarregue e descarregue o seu ficheiro OpenRC

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e abra o seu projeto `Public Cloud`{.action}.

Clique em `Users & Roles`{.action} na secção `Project Management` e no botão `...`{.action} à direita do seu utilizador OpenStack.<br>
Faça o download do ficheiro OpenRC deste utilizador e especifique a região na qual deseja efetuar ações.

![descarregar o ficheiro openRC](images/openrc.png){.thumbnail}

Depois de fazer o download, edite o seu ficheiro OpenRC e adicione esta linha:

```bash
OS_PASSWORD=<your_password>
```

Tenha o cuidado de adaptar esta linha com a palavra-passe do seu utilizador OpenStack que lhe foi dada durante a criação do utilizador.

De seguida, descarregue o ficheiro que carregou anteriormente:

```bash
source openrc.sh
```

### Etapa 2: emissão de um token OpenStack

> [!primary]
>
> Um token OpenStack é válido durante 24 horas após o seu programa. Para uma maior fiabilidade, pode emitir um token a cada 8 horas (a título de exemplo) para evitar efetuar ações com um token expirado.
>
> Se estiver a pensar em ações longas como snapshots, *shelving* de instâncias, criação de imagens, etc, prefere a criação de um novo token em vez de executar diretamente a ação pretendida.
>

Uma vez que o seu ficheiro OpenRC não foi executado, execute o seguinte comando para emitir um token:

```bash
openstack token issue
```

O resultado deverá ser semelhante ao seguinte:

```bash
+------------+----------------------------------------------------------------+
| Field      | Value                                                          |
+------------+----------------------------------------------------------------+
| expires    | 2023-04-06T08:33:15+0000                                       |
| id         | gAAAAA[...]                                                    |
| project_id | 8a7[...]                                                       |
| user_id    | f99[...]                                                       |
+------------+----------------------------------------------------------------+
```

Já pode exportar o ID do token emitido anteriormente:

```bash
export OS_TOKEN = gAAAAA[...]
```

Também pode exportar diretamente o seu token com esta encomenda:

```bash
export OS_TOKEN=$(openstack token issue -f value -c id)
```

### Etapa 3: eliminar a variável inútil

Para utilizar o token para efetuar ações com o utilizador, deve eliminar a variável `OS_USER_DOMAIN_NAME`.

Para isso, execute o seguinte comando:

```bash
unset OS_USER_DOMAIN_NAME
```

### Etapa 4: utilizar o token para executar comandos

Agora que tem o seu token, pode utilizar as chamadas clássicas do OpenStack para gerir a sua infraestrutura.

```bash
openstack --os-auth-type token <command>
```

Por exemplo: 

```bash
openstack --os-auth-type token image list
```

### Etapa 5: revogar o token OpenStack

Depois de realizar todas as ações, pode revogar o token OpenStack para evitar que este seja utilizado para outras ações.

Para isso, utilize o seguinte comando:

```bash
openstack --os-auth-type token token revoke <token_id>

# ou 

openstack --os-auth-type token token revoke $OS_TOKEN
```

## Saiba mais

Junte-se à nossa comunidade de utilizadores <https://community.ovh.com/en/>.