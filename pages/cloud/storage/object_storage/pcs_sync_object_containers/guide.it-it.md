---
title: Object Storage Swift - Sincronizza i container di oggetti
slug: pcs/sync-object-containers
section: OpenStack Swift Storage Class Specifics
order: 060
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 27/10/2021**

## Obiettivo

Per spostare gli oggetti da un datacenter a un altro o da un progetto a un altro, la sincronizzazione degli oggetti tra container è la soluzione migliore per evitare interruzioni di servizio durante la migrazione. Questa guida ti mostra come impostare questa soluzione.

## Prerequisiti

- [Prepara l'ambiente di sviluppo per utilizzare l'API OpenStack](https://docs.ovh.com/it/public-cloud/prepara_il_tuo_ambiente_di_sviluppo_per_utilizzare_lapi_openstack/) con il client swift
- [Impostare le variabili d'ambiente OpenStack](https://docs.ovh.com/it/public-cloud/impostare-le-variabili-dambiente-openstack/)
- 2 container di oggetti in 2 datacenter diversi

## Procedura

> [!primary]
>
> Se il container contiene oggetti di dimensioni superiori a 5GB, è necessario che entrambi i container abbiano lo stesso nome.
>

### Configurazione della sincronizzazione

#### Crea la chiave di sincronizzazione

Per consentire ai container di identificarsi, è necessario creare una chiave e configurarla su ogni container di oggetti:

- Crea la chiave:


```bash
root@server-1:~$ sharedKey=$(openssl rand -base64 32)
```


#### Configurazione del container di destinazione

Per prima cosa, è necessario configurare la chiave sul container che riceverà i dati. Nel nostro caso, questo è a BHS.

- Verifica la Region caricata nelle variabili d'ambiente:

```bash
root@server-1:~$ env | grep OS_REGION

OS_REGION_NAME=BHS
```

- Configura la chiave sul container di destinazione:

```bash
root@server-1:~$ swift post --sync-key "$sharedKey" containerBHS
```

- Verificare che la configurazione sia stata effettuata correttamente utilizzando il comando seguente e recuperare contemporaneamente il contenuto della variabile "Account":

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

- Recupera l'indirizzo del container di destinazione e configura il container sorgente (di questo tipo: "//OVH_PUBLIC_CLOUD/Région/Account/Container")

```bash
root@server-1:~$ export destContainer="//OVH_PUBLIC_CLOUD/BHS/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerBHS"
```

#### Configurazione del container sorgente

- Modifica della Region nelle variabili d'ambiente:

```bash
root@server-1:~$ export OS_REGION_NAME=GRA
```

- Configura la chiave sul container sorgente:

```bash
root@server-1:~$ swift post --sync-key "$sharedKey" containerGRA
```

- Configura il destinatario sul container sorgente:

```bash
root@server-1:~$ swift post --sync-to "$destContainer" containerGRA
```

- Come in precedenza, è possibile verificare che la configurazione sia stata effettuata correttamente utilizzando il comando:

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

#### Verifica della sincronizzazione

Dopo pochi minuti (in base al numero e alla dimensione dei file da inviare), è possibile verificare la sincronizzazione, semplicemente elencando i file in ogni container.

- Leggi i file presenti sul container sorgente:

```bash
root@server-1:~$ swift list containerGRA
test1.txt
test2.txt
test3.txt
```

- Consulta i file presenti sul container di destinazione:

```bash
root@server-1:~$ swift list containerBHS
test1.txt
test2.txt
test3.txt
```

### Inverti la sincronizzazione tra due container

Per invertire la sincronizzazione tra due container, elimina il meta-dato `—sync-to` dal container sorgente, e lo ridichiara sull'altro container, che diventerà il nuovo container sorgente.

> [!warning]
>
> Ricordati di modificare la Region nel nuovo URL sync-to.
>

```bash
root@server-1:~$ swift post -H "X-Container-Sync-To:" containerGRA
root@server-1:~$ export destContainer="//OVH_PUBLIC_CLOUD/GRA/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerGRA"
root@server-1:~$ export OS_REGION_NAME=BHS
root@server-1:~$ swift post --sync-to "$destContainer" containerBHS
```

### Arrestare la sincronizzazione tra due container

Per interrompere la sincronizzazione tra due container, è necessario eliminare i meta-dati `—sync-key` e `—sync-to`.

```bash
swift post -H "X-Container-Sync-Key:" containerGRA
swift post -H "X-Container-Sync-To:" containerGRA
```

> [!primary]
>
> Questa guida è utilizzabile anche per la migrazione di oggetti da RunAbove verso
> Public Cloud.
>

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
