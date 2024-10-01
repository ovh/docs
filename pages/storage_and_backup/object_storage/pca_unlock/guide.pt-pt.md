---
title: Cloud Archive Swift - Descongelar os seus dados armazenados no Public Cloud Archive
excerpt: Saiba como descongelar os seus arquivos
updated: 2022-04-12
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O Public Cloud Archive é uma oferta de armazenamento frio destinada a alojar grandes volumes de dados, sem qualquer limite de tamanho, com um preço muito atrativo.

Destinado aos dados raramente consultados, é necessário um pedido de desbloqueio, implicando um prazo antes da recuperação. Este prazo varia em função da antiguidade e da frequência de acesso aos seus dados.

## Requisitos

- A partir da Área de Cliente OVHcloud:
    - Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Degel através de python-swiftclient:
    - [Preparar o ambiente para utilizar a API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api) instalando python-swiftclient.
    - [Carregar as variáveis de ambiente OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables).

## Instruções

### Libertar os seus objetos a partir da Área de Cliente

Na [Área de Cliente OVHcloud](/links/manager), clique no separador `Public Cloud`{.action}, selecione o seu projeto Public Cloud e clique na secção `Cloud Archive`{.action} no menu à esquerda.

Para descongelar um arquivo, clique no botão `...`{.action} à direita desta e, a seguir, em `Descongelar`{.action} a fim de dar início ao processo de recuperação.

![desgel](images/unfreeze.png){.thumbnail}

Uma vez o processo iniciado, a data e a hora de disponibilidade do seu arquivo são apresentadas na coluna `Disponibilidade`.

![prazo antes do descongelamento](images/unfreeze_result.png){.thumbnail}

O seu ficheiro estará disponível para download após este prazo. Poderá então iniciar o download diretamente através do browser ou através de [um cliente Swift/SFTP/SCP](/pages/storage_and_backup/object_storage/pca_sftp).

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

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
