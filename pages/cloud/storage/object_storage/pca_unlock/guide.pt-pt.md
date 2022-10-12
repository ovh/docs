---
title: Object Storage Swift - Descongelar os seus dados armazenados no Public Cloud Archive
slug: pca/unlock
excerpt: Saiba como descongelar os seus arquivos
section: OpenStack Swift Archive Storage Class Specifics
order: 030
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 12/04/2022**

## Objetivo

O Public Cloud Archive é uma oferta de armazenamento frio destinada a alojar grandes volumes de dados, sem qualquer limite de tamanho, com um preço muito atrativo.

Destinado aos dados raramente consultados, é necessário um pedido de desbloqueio, implicando um prazo antes da recuperação. Este prazo varia em função da antiguidade e da frequência de acesso aos seus dados.

## Requisitos

- A partir da Área de Cliente OVHcloud:
    - Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Degel através de python-swiftclient:
    - [Preparar o ambiente para utilizar a API OpenStack](https://docs.ovh.com/pt/public-cloud/preparar_o_ambiente_para_utilizar_a_api_openstack/) instalando python-swiftclient.
    - [Carregar as variáveis de ambiente OpenStack](https://docs.ovh.com/pt/public-cloud/carregar-as-variaveis-de-ambiente-openstack/).

## Instruções

### Libertar os seus objetos a partir da Área de Cliente

Na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), clique no separador `Public Cloud`{.action}, selecione o seu projeto Public Cloud e clique na secção `Cloud Archive`{.action} no menu à esquerda.

Para descongelar um arquivo, clique no botão `...`{.action} à direita desta e, a seguir, em `Descongelar`{.action} a fim de dar início ao processo de recuperação.

![desgel](images/unfreeze.png){.thumbnail}

Uma vez o processo iniciado, a data e a hora de disponibilidade do seu arquivo são apresentadas na coluna `Disponibilidade`.

![prazo antes do descongelamento](images/unfreeze_result.png){.thumbnail}

O seu ficheiro estará disponível para download após este prazo. Poderá então iniciar o download diretamente através do browser ou através de [um cliente Swift/SFTP/SCP](https://docs.ovh.com/gb/en/storage/pca/sftp/).

### Libertar os seus objetos através de python-swiftclient

Verifique o estado do objeto a descarregar:

```bash
swift stat <pca_container> <object>
```

```
               Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
             Container: <pca_container>
                Object: <object>
          Content Type: text/plain
        Content Length: 746
         Last Modified: Tue, 10 Aug 2021 08:39:41 GMT
                  ETag: 51f122f524c46cafcf9628305db99144
            Meta Mtime: 1627974571.298786
         Accept-Ranges: bytes
 X-Ovh-Retrieval-State: sealed
           X-Timestamp: 1628584780.95458
            X-Trans-Id: txbb0eff9ebf9442eab0d02-0061123b5a
X-Openstack-Request-Id: txbb0eff9ebf9442eab0d02-0061123b5a
     X-Iplb-Request-Id: 6DBEFE1E:942A_3626E64B:01BB_61123B59_649EACF:8F28
       X-Iplb-Instance: 12308
```

A seguinte linha indica que o objeto está congelado:

```
X-Ovh-Retrieval-State: sealed
```

Por isso, a encomenda `swift download` devolverá um erro 429:

```bash
swift download <pca_container> <object>
```
```
Error downloading object '<pca_container>/<object>': Object GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<pca_container>/<object> 429 Too Many Requests
```

Reiniciar o comando `swift stat`:

```bash
swift stat <pca_container> <object>
```

```
               Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
             Container: <pca_container>
                Object: <object>
          Content Type: text/plain
        Content Length: 746
         Last Modified: Tue, 10 Aug 2021 08:39:41 GMT
                  ETag: 51f122f524c46cafcf9628305db99144
            Meta Mtime: 1627974571.298786
         Accept-Ranges: bytes
 X-Ovh-Retrieval-State: unsealing
           X-Timestamp: 1628584780.95458
 X-Ovh-Retrieval-Delay: 14313
            X-Trans-Id: tx9012d12434a447bd81528-0061123c54
X-Openstack-Request-Id: tx9012d12434a447bd81528-0061123c54
     X-Iplb-Request-Id: 6DBEFE1E:94D0_3626E64B:01BB_61123C54_6823B54:10ABF
       X-Iplb-Instance: 12309
```

A seguinte linha indica que o objeto está a ser descongelado:

```
X-Ovh-Retrieval-State: unsealing
```

E a seguinte linha indica o tempo (em segundos) que deve esperar para poder descarregar o objeto:

```
X-Ovh-Retrieval-Delay: 14313
```

Uma vez terminado o prazo:

```bash
swift stat <pca_container> <object>
```

```
               Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
             Container: <pca_container>
                Object: <object>
          Content Type: text/plain
        Content Length: 746
         Last Modified: Tue, 10 Aug 2021 08:39:41 GMT
                  ETag: 51f122f524c46cafcf9628305db99144
            Meta Mtime: 1627974571.298786
         Accept-Ranges: bytes
 X-Ovh-Retrieval-State: unsealed
           X-Timestamp: 1628584780.95458
            X-Trans-Id: txaf1eac9ceb8a45efb36e1-0061127482
X-Openstack-Request-Id: txaf1eac9ceb8a45efb36e1-0061127482
     X-Iplb-Request-Id: 6DBEFE1E:ACCC_3626E64B:01BB_61127482_E75B0:1B979
       X-Iplb-Instance: 38343
```

A seguinte linha indica que o objeto está descongelado:

```
X-Ovh-Retrieval-State: unsealed
```

A transferência do objeto funciona então:

```bash
swift download <pca_container> <object>
```

```bash
swift download <pca_container> <object>
<object> [auth 0.961s, headers 1.767s, total 1.768s, 0.001 MB/s]
```

#### Automatizar o download do objeto

> [!primary]
>
> Esta funcionalidade requer o package `at`.
>

```bash
swift download <pca_container> <object>
```
```
Error downloading object '<pca_container>/<object>': Object GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<pca_container>/<object> 429 Too Many Requests
```

```bash
X_OVH_RETRIEVAL_DELAY=$(swift download <pca_container> <object> | awk -F ": " '/X-Ovh-Retrieval-Delay/ {print $2}'
RETRIEVAL_DELAY=$((${X_OVH_RETRIEVAL_DELAY} / 60 + 2))
swift download <pca_container> <object> | at now + ${RETRIEVAL_DELAY} minutes
```

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
