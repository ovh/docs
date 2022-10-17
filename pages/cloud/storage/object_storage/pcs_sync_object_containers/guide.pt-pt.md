---
title: Object Storage Swift - Sincronizar containers de objetos
slug: pcs/sync-object-containers
section: OpenStack Swift Storage Class Specifics
order: 060
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 27/10/2021**

## Objetivo

Se deseja migrar os seus objetos de um datacenter para outro, ou mesmo de um projeto para outro, a sincronização de objetos entre containers é a melhor solução para evitar um corte de serviço durante a sua migração. Este manual explica-lhe como implementar esta solução.

## Requisitos

- [Preparar o ambiente para utilizar a API OpenStack](https://docs.ovh.com/pt/public-cloud/preparar_o_ambiente_para_utilizar_a_api_openstack/) com o cliente swift
- [Carregar as variáveis de ambiente OpenStack](https://docs.ovh.com/pt/public-cloud/carregar-as-variaveis-de-ambiente-openstack/)
- 2 containers de objetos em 2 datacenters diferentes

## Instruções

> [!primary]
>
> Se o seu container contém objetos cujo tamanho é superior a 5Gb, é preciso que os seus dois containers tenham o mesmo nome.
>

### Configuração da sincronização

#### Criação da chave de sincronização

Para que os containers se possam identificar, é preciso criar uma chave e configurá-la em cada um dos containers de objetos:

- Criar a chave:


```bash
root@server-1:~$ sharedKey=$(openssl rand -base64 32)
```


#### Configuração do container destinatário

Em primeiro lugar, é necessário configurar a chave no container que receberá os dados. No nosso caso, este está em BHS.

- Verifique a região carregada nas variáveis de ambiente:

```bash
root@server-1:~$ env | grep OS_REGION

OS_REGION_NAME=BHS
```

- Configure a chave no container destinatário:

```bash
root@server-1:~$ swift post --sync-key "$sharedKey" containerBHS
```

- Verifica-se se esta foi corretamente configurada graças ao seguinte comando e recupera-se ao mesmo tempo o conteúdo da variável "Account":

```bash
root@server-1:~$ swift stat containerBHS
                         Account: AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29
                       Container: containerBHS
                         Objects: 0
                           Bytes: 0
                        Read ACL:
                       Write ACL:
                         Sync To:
                        Sync Key: 4cA5j5LyaaG2ws32d1fsdQSxnvIJv+y2qFnbnm6Kw=
Meta Access-Control-Allow-Origin: https://www.ovh.com
                   Accept-Ranges: bytes
                X-Storage-Policy: Policy-0
                      Connection: close
                     X-Timestamp: 1444812373.28095
                      X-Trans-Id: B2210C05:895E_9E45A961:01BB_561E52E1_16A3:5298
                    Content-Type: text/plain; charset=utf-8
```

- Obtenha o endereço do container destinatário e depois configurá-lo no container source (Esta é do tipo: "//OVH_PUBLIC_CLOUD/Regione/Account/Container"

```bash
root@serveur-1:~$ export destContainer="//OVH_PUBLIC_CLOUD/BHS/AUTH_b3e269xxxxxxxxxxxxxxxxxxxxxxxxx2b0ba29/containerBHS"
```

#### Configuração do container source

- Mudança de região nas variáveis de ambiente:

```bash
root@server-1:~$ export OS_REGION_NAME=GRA
```

- Configure a chave no container source:

```bash
root@server-1:~$ swift post --sync-key "$sharedKey" containerGRA
```

- Configure o destinatário no container source:

```bash
root@server-1:~$ swift post --sync-to "$destContainer" containerGRA
```

- Como anteriormente, é possível verificar que esta foi corretamente configurada através do seguinte comando:

```bash
root@server-1:~$ swift stat containerGRA
         Account: AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29
       Container: containerGRA
         Objects: 3
           Bytes: 15
        Read ACL:
       Write ACL:
         Sync To: //OVH_PUBLIC_CLOUD/BHS/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerBHS
        Sync Key: 4cA5j5LyaaG2wU4lDYnDmEwQSxnvIJv+y2qFnbnm6Kw=
   Accept-Ranges: bytes
      Connection: close
     X-Timestamp: 1444813114.55493
      X-Trans-Id: B2210C05:879E_052711B1:01BB_561E559B_24AE:6B1B
X-Storage-Policy: Policy-0
    Content-Type: text/plain; charset=utf-8
```

#### Verificação da sincronização

Após alguns instantes (em função do número e do tamanho dos ficheiros a enviar), é possível verificar que a sincronização decorreu corretamente, listando simplesmente os ficheiros em cada um dos containers.

- Leia os ficheiros presentes no container source:

```bash
root@server-1:~$ swift list containerGRA
test1.txt
test2.txt
test3.txt
```

- Leia os ficheiros presentes no container destinatário:

```bash
root@server-1:~$ swift list containerBHS
test1.txt
test2.txt
test3.txt
```

### Inverter a sincronização entre dois containers

Para inverter a sincronização entre dois containers, é necessário eliminar o meta-dado `—sinc-to` do container de origem e repeti-lo no outro container, que se tornará assim no novo container de origem.

> [!warning]
>
> Não se esqueça de mudar a região no novo URL sync-to.
>

```bash
root@server-1:~$ swift post -H "X-Container-Sync-To:" containerGRA
root@server-1:~$ export destContainer="//OVH_PUBLIC_CLOUD/GRA/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerGRA"
root@server-1:~$ export OS_REGION_NAME=BHS
root@server-1:~$ swift post --sync-to "$destContainer" containerBHS
```

### Parar a sincronização entre dois containers

Para parar a sincronização entre dois containers, é preciso eliminar os meta-dados `—sync-key` e `—sync-to`.

```bash
swift post -H "X-Container-Sync-Key:" containerGRA
swift post -H "X-Container-Sync-To:" containerGRA
```

> [!primary]
>
> Este guia é também utilizável para uma migração de objetos do RunAbove para
> Public Cloud.
>

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.