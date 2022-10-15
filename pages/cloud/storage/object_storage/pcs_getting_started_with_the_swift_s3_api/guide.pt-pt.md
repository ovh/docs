---
title: Object Storage Swift - Primeiros passos com a API Swift S3
excerpt: "Saiba como utilizar a API Swift S3"
slug: pcs/getting-started-with-the-swift-s3-api
section: OpenStack Swift Storage Class Specifics
order: 020
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 22/09/2020**

## Objetivo

O middleware Swift s3api que assegura a compatibilidade da API S3 foi ativado em todas as regiões do Public Cloud.

**Este guia ajudá-lo-á a aceder aos objetos de Swift através de um software concebido para interagir com pontos terminais compatíveis com S3.**

## Requisitos

- [Preparar o ambiente para utilizar a API OpenStack](https://docs.ovh.com/pt/public-cloud/preparar_o_ambiente_para_utilizar_a_api_openstack/)
- [Parâmetros de acesso e de segurança no Horizon](https://docs.ovh.com/pt/public-cloud/gestao-a-partir-do-horizon/)

## Instruções

### Definir as variáveis de ambiente OpenStack

```bash
user@host:~$ source <user_name>-openrc.sh
Please enter your OpenStack Password for project <project_name> as user <user_name>:

user@host:~$
```

### Instalar o cliente OpenStack se necessário

```bash
user@host:~$ pip install python-openstackclient

user@host:~$
```

Encontre a referência das encomendas Openstack cliente [aqui](https://docs.openstack.org/python-openstackclient/latest/).

### Criar informações de identificação EC2

Os tokens S3 são diferentes, precisa de 2 parâmetros (**acessos** e **segredo**) para gerar um token S3.
Estas informações de identificação serão armazenadas com toda a segurança em Keystone. Para gerá-la:

#### Gerar o token S3 com o cliente python-openstack

```bash
user@host:~$ openstack ec2 credentials create
+------------+----------------------------------------------------------------------------------------------------------------------------+
| Field      | Value                                                                                                                      |
+------------+----------------------------------------------------------------------------------------------------------------------------+
| access     | 5a4d8b8d88104123a862c527ede5a3d3                                                                                           |
| links      | {u'self': u'https://auth.cloud.ovh.net/v3/users/d74d05ff121b44bea9216495e7f0df61/credentials/OS-                     |
|            | EC2/5a4d8b8d88104123a862c527ede5a3d3'}                                                                                     |
| project_id | 20e124b71be141299e111ec26b1892fa                                                                                           |
| secret     | 925d5fcfcd9f436d8ffcb20548cc53a2                                                                                           |
| trust_id   | None                                                                                                                       |
| user_id    | d74d05ff121b44bea9216495e7f0df61                                                                                           |
+------------+----------------------------------------------------------------------------------------------------------------------------+
```

#### Gerar o token S3 com curl

```bash
. openrc.sh
TMP_FILE=$(mktemp)
OS_USER_ID=$(curl -s -D $TMP_FILE -X POST "${OS_AUTH_URL}auth/tokens" -H "Content-Type: application/json" -d '{"auth":{"identity":{"methods":["password"],"password":{"user":{"name":"'$OS_USERNAME'","domain":{"id":"default"},"password":"'$OS_PASSWORD'"}}},"scope":{"project":{ "id":"'$OS_TENANT_ID'","domain":{"id":"default"}}}}}' | jq -r '.["token"]["user"]["id"]')
OS_TOKEN=$(awk '/^X-Subject-Token/ {print $2}' $TMP_FILE |  tr -d "\r")
curl -s -X POST -H "Content-Type: application/json" -H "X-Auth-Token: $OS_TOKEN" -d '{"tenant_id": "'$OS_TENANT_ID'"}' "${OS_AUTH_URL}users/${OS_USER_ID}/credentials/OS-EC2" | jq .
{
  "credential": {
    "user_id": "d74d05ff121b44bea9216495e7f0df61",
    "links": {
      "self": "https://auth.cloud.ovh.net/v3/users/d74d05ff121b44bea9216495e7f0df61/credentials/OS-EC2/660c89cfc4764271ba169941c7b2f310"
    },
    "tenant_id": "20e124b71be141299e111ec26b1892fa",
    "access": "660c89cfc4764271ba169941c7b2f310",
    "secret": "fc9e8eb545724accadcfabbd99207df1",
    "trust_id": null
  }
}
```

### Configurar o cliente AWS

Instale o cliente AWS e configure-o da seguinte forma:

```bash
user@host:~$ pip install awscli awscli-plugin-endpoint
[...]
user@host:~$ cat ~/.aws/credentials

[default]
aws_access_key_id = <access_key>
aws_secret_access_key = <secret_key>

user@host:~$ cat ~/.aws/config

[plugins]
endpoint = awscli_plugin_endpoint

[profile default]
region = <region>
s3 =
  endpoint_url = https://s3.<region>.cloud.ovh.net
  signature_version = s3v4
s3api =
  endpoint_url = https://s3.<region>.cloud.ovh.net
```

O acesso de tipo `alojado virtual` e o acesso de tipo `caminho de acesso` são geridos em todas as regiões, mas recomendamos que utilize o estilo `alojado virtual` pois o acesso de tipo `caminho de acesso` ficará desativado após 30 de setembro de 2020.

### Utilizar o cliente AWS

Para obter a lista de Buckets (containers), utilize o seguinte comando:

```bash
user@host:~$ aws --profile default s3 ls
```

Utilize o seguinte comando para criar um novo bucket:

```bash
user@host:~$ aws --profile default s3 mb s3://bucket
```

> [!primary]
>
> Os buckets S3 só podem ser criados na estratégia PCS (Armazenamento de objetos).
>

> [!primary]
>
> O nome do container deve respeitar as seguintes regras
>  
> - O nome do contentor pode ter entre 3 e 63 caracteres e só pode conter minúsculas letras, números, pontos e travessões.  
> - Cada nome do container deve começar por uma letra minúscula ou um número.  
> - O nome do contentor não pode conter hífen, terminar com um hífen, ter pontos consecutivos ou utilizar traços adjacentes a pontos.  
> - O nome do container não pode ser formatado como um endereço IP (198.51.100.24).  
>

Utilize o seguinte comando para transferir um ficheiro local para Swift:

```bash
user@host:~$ aws --profile default s3 cp file.txt s3://bucket/file.txt
```

Para descarregar um objeto a partir de Swift, utilize o seguinte comando:

```bash
user@host:~$ aws --profile default s3 cp s3://bucket/file.txt file.txt
```

Utilize o seguinte comando para eliminar um objeto Swift:

```bash
user@host:~$ aws --profile default s3 rm s3://bucket/file.txt
```

Para eliminar um bucket, utilize o seguinte comando:

```bash
user@host:~$ aws --profile default s3 rb s3://bucket
```

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
