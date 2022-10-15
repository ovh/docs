---
title: Object Storage Swift - Pierwsze kroki z API Swift S3
excerpt: "Dowiedz się, jak korzystać z API Swift S3"
slug: pcs/getting-started-with-the-swift-s3-api
section: OpenStack Swift Storage Class Specifics
order: 020
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 22-09-2020**

## Wprowadzenie

Middleware Swift s3api, który zapewnia kompatybilność API S3 został włączony we wszystkich regionach Public Cloud.

**Niniejszy przewodnik pomoże Ci uzyskać dostęp do obiektów Swift za pomocą oprogramowania zaprojektowanego do interakcji z kompatybilnymi punktami końcowymi S3.**

## Wymagania początkowe

- [Przygotowanie środowiska do korzystania z API OpenStack](https://docs.ovh.com/pl/public-cloud/przygotowanie_srodowiska_dla_api_openstack/)
- [Parametry dostępu i bezpieczeństwa w interfejsie Horizon](https://docs.ovh.com/pl/public-cloud/dostep-i-bezpieczenstwo-w-horizon/)

## W praktyce

### Zdefiniuj zmienne środowiskowe OpenStack

```bash
user@host:~$ source <user_name>-openrc.sh
Please enter your OpenStack Password for project <project_name> as user <user_name>:

user@host:~$
```

### Zainstaluj klienta OpenStack

```bash
user@host:~$ pip install python-openstackclient

user@host:~$
```

Znajdziesz [tutaj](https://docs.openstack.org/python-openstackclient/latest/) odniesienie do zamówień Openstack client.

### Tworzenie danych identyfikacyjnych EC2

Tokeny S3 są różne. Aby wygenerować token S3, należy podać 2 parametrów (**dostęp** i **poufność**).
Te dane identyfikacyjne będą bezpiecznie przechowywane w Keystone. Do wygenerowania:

#### Generowanie tokenu S3 z klientem python-openstack

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

#### Generowanie tokenu S3 za pomocą curl

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

### Skonfiguruj klienta AWS

Zainstaluj klienta AWS i skonfiguruj go w następujący sposób:

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

Dostęp wirtualny `typu` oraz dostęp typu `ścieżka` są obsługiwane we wszystkich regionach. Zalecamy jednak korzystanie z wirtualnego` stylu `hostowanego, ponieważ dostęp typu `ścieżka dostępu` zostanie utracony po 30 września 2020 roku.

### Korzystanie z klienta AWS

Aby uzyskać listę Bucketów (kontenery), użyj następującego polecenia:

```bash
user@host:~$ aws --profile default s3 ls
```

Użyj następującego polecenia, aby utworzyć nowy bucket:

```bash
user@host:~$ aws --profile default s3 mb s3://bucket
```

> [!primary]
>
> Buckets S3 można tworzyć tylko w strategii PCS (Object Storage).
>

> [!primary]
>
> Nazwa kontenera musi być zgodna z następującymi zasadami:
>  
> - Nazwa kontenera może zawierać od 3 do 63 znaków i może zawierać tylko małe znaki, cyfry, kropki i myślniki.  
> - Każda nazwa kontenera musi zaczynać się od małej litery lub cyfry.  
> - Nazwa kontenera nie może zawierać znaków podkreślenia, kończyć się myślnikiem, mieć kolejne punkty lub używać myślników przylegających do punktów.  
> - Nazwa kontenera nie może zostać sformatowana jako adres IP (198.51.100.24).  
>

Użyj następującej komendy, aby pobrać plik lokalny do Swift:

```bash
user@host:~$ aws --profile default s3 cp file.txt s3://bucket/file.txt
```

Użyj następującego polecenia, aby pobrać obiekt z Swift:

```bash
user@host:~$ aws --profile default s3 cp s3://bucket/file.txt file.txt
```

Użyj następującego polecenia, aby usunąć obiekt Swift:

```bash
user@host:~$ aws --profile default s3 rm s3://bucket/file.txt
```

Użyj następującej komendy, aby usunąć bucket:i

```bash
user@host:~$ aws --profile default s3 rb s3://bucket
```

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
