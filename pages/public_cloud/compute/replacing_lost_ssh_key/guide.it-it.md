---
title: "Come sostituire un paio di chiavi SSH su un'istanza Public Cloud"
excerpt: "Scopri come ripristinare l'accesso al server sostituendo una coppia di chiavi SSH con una nuova in caso di perdita della chiave privata"
updated: 2024-06-13
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

La perdita della chiave SSH privata comporta la perdita dell'accesso alla tua istanza se non hai configurato altri mezzi di accesso.

La modalità Rescue di OVHcloud consente comunque di accedere con una password provvisoria e modificare i file.

**Questa guida ti mostra come sostituire le chiavi SSH in caso di perdita di accesso all’istanza.**

> [!warning]
> OVHcloud fornisce servizi la cui configurazione e gestione sono di vostra responsabilità. È quindi vostra responsabilità assicurarvi che funzionino correttamente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di problemi, ti consigliamo di contattare un [provider di servizi specializzato](/links/partner) o [la nostra Community di utenti](/links/community).
>

## Prerequisiti

- Un’ [istanza Public Cloud](/links/public-cloud/public-cloud) nel tuo account OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

### Step 1: crea una nuova coppia di chiavi

Crea una nuova coppia di chiavi SSH sul tuo dispositivo locale, seguendo le istruzioni contenute nella prima parte della [guida alla creazione di una chiave SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

### Step 2: accedi all’istanza in modalità Rescue

Segui gli step della [guida del Rescue mode](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) per riavviare l’istanza in Rescue mode, connetterti e montare le tue partizioni.

Una volta utilizzato il comando `mount` (come descritto nella guida) e che la partizione di sistema è accessibile, è possibile utilizzare il seguente comando:

```bash
chroot path/to/partition/mountpoint
```

Il percorso del file dipende dal punto di mount utilizzato. Se la partizione è stata montata su `/mnt`, è necessario immettere quanto segue:

```bash
chroot /mnt/
```

A questo punto dovresti avere accesso completo in scrittura ai tuoi file in questa cartella.

### Step 3: sostituisci la chiave

Aprire il file "authorized_keys" con un editor di testo. Questo file memorizza le chiavi SSH ed è situato nella cartella `home` dell’utente con il quale ti connetti alla tua istanza.

Esempio:

```bash
nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Sostituire `USER_NAME` con il nome utente effettivo.

Copia e incolla nel file la nuova chiave pubblica (creata nel passaggio 1). Dovrebbe essere simile all'esempio seguente:

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

Per motivi di sicurezza, rimuovere la stringa di chiave "old" dal file. Salvare le modifiche e uscire dall'editor.

Riavvia l’istanza in modalità "normale" dallo [Spazio Cliente OVHcloud](/links/manager). Se necessario, consulta le istruzioni nella [guida sulla modalità rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode).

A questo punto, avrai accesso all’istanza con la tua nuova coppia di chiavi SSH.

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).
