---
title: Ridimensionare il file system su FreeBSD 12
excerpt: Scopri come ridimensionare il file system di un'istanza Public Cloud o di un VPS con FreeBSD 12
updated: 2020-10-27
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 27/10/2020**

## Obiettivo

Questa guida ti mostra come ridimensionare il tuo file system dopo l'installazione o ridimensionarlo con FreeBSD 12. per consentire al sistema di usufruire di tutto lo spazio disco.

## Prerequisiti

 * Disporre di un'istanza con FreeBSD 12 nel tuo progetto [Public Cloud](https://www.ovhcloud.com/it/public-cloud/) o di un [VPS](https://www.ovhcloud.com/it/vps/) con FreeBSD 12
 * Aver installato di recente l'istanza/il VPS o [averne ridimensionato il volume](/pages/public_cloud/compute/resize_of_an_instance)

> [!primary]
>
> In questa guida è utilizzata un'istanza r2-15. Le istruzioni sono valide per un VPS o un'istanza Public Cloud. Inizialmente il file system fa `5 GB`. Al termine del processo, farà `50 GB`.
>

## Procedura

Per dimensionare il tuo file system, è necessario prima riparare le partizioni.

Accedi all'istanza e visualizza lo stato delle tue partizioni:

```
freebsd@freebsd:~ % sudo gpart show
=>      40  10239920  vtbd0  GPT  (50G) [CORRUPT]
        40 1024 1 freebsd-boot (512K)
      1064 984 - free - (492K)
      2048  10235904      2  freebsd-zfs  (4.9G)
  10237952 2008 - free - (1.0M)
```

Qui potete vedere che il file system è corrotto. Questo stato è normale perché è dovuto all'installazione dell'immagine sull'istanza o al suo ridimensionamento. Dovete quindi ripararlo:

```
freebsd@freebsd:~ % sudo gpart recover vtbd0
vtbd0 recovered
```

Ripetendo il primo ordine, potete constatare che il sistema dei file è riparato:

```
freebsd@freebsd:~ % sudo gpart show
=>       40  104857520  vtbd0  GPT  (50G)
         40 1024 1 freebsd-boot (512K)
       1064 984 - free - (492K)
       2048   10235904      2  freebsd-zfs  (4.9G)
   10237952 94619608 - free - (45G)
```

A questo punto puoi ridimensionare la partizione `freebsd-zfs`. Per eseguire questa operazione, utilizza il comando:

```
freebsd@freebsd:~ % sudo gpart resize -i 2 vtbd0
vtbd0p2 resized
```

> [!primary]
>
> Il numero di partizione può essere diverso, per trovare il numero corretto, verifica la colonna `vtbd0` e il numero davanti alla linea `freebsd-zfs`.
>

A questo punto hai ridimensionato il tuo file system. ZFS è configurato per espandersi automaticamente. Per verificare, esegui questo comando:

```
freebsd@freebsd:~ % zpool list
NAME SIZE ALLOC FREE CKPOINT EXPANDSZ FRAG CAP DEDUP HEALTH ALTROOT
zroot 49.5G 854M 48.7G - - 0% 1% 1.00x ONLINE -
```

Noterete che, in questo esempio, `zroot` fa ora `50 GB`. ZFS è quindi ben esteso.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
