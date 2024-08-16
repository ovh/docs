---
title: "Sostituzione del vostro paio di chiavi SSH"
excerpt: "Come ripristinare l’accesso al server in caso di perdita della chiave privata generando una nuova coppia di chiavi SSH"
updated: 2024-04-04
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Se [utilizzi chiavi SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) per connetterti al tuo server, la perdita della tua chiave SSH privata potrebbe significare la perdita totale dell'accesso al tuo server.

Per accedere al tuo server in [modalità Rescue OVHcloud](/pages/bare_metal_cloud/dedicated_servers/rescue_mode), utilizza una password provvisoria che ti permette di modificare i tuoi file.

**Questa guida ti mostra come sostituire le tue chiavi SSH in caso di perdita dell'accesso al tuo server.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a un [provider specializzato](https://partner.ovhcloud.com/it/directory/) o contattare l'amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#go-further) su questa guida.
>

## Prerequisiti

- Disporre di un [server dedicato](https://www.ovhcloud.com/it/bare-metal/) o di un [VPS](https://www.ovhcloud.com/it/vps/) nel proprio account OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

### Step 1 - Crea una nuova coppia di chiavi

Crea una nuova coppia di chiavi SSH sulla tua postazione di lavoro, come descritto nella prima sezione della guida ["Creare una chiave SSH"](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

<a name="step2"></a>

### Step 2 - Accedere al tuo server in modalità Rescue e sostituire la chiave

Segui gli step della guida sulla modalità Rescue per connetterti al tuo server e montare le tue partizioni:

- [Modalità Rescue server dedicato](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [VPS modalità Rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Quando hai accesso ai tuoi file, apri il file "authorized_keys" in un editor di testo. Questo file salva le chiavi SSH e si trova nella cartella `home` dell'utente connesso al tuo server. (Sostituisci "USER_NAME" con il tuo nome utente)

```bash
nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Copia e incolla la tua nuova chiave pubblica (creata allo Step 1) nel file. Il contenuto del file dovrebbe essere simile a questo esempio:

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

Per motivi di sicurezza, rimuovere la stringa di chiave "old" (ormai obsoleta) dal file. Salva e lascia l'editor.

Riavvia la modalità "normale" di avvio e riavvia il server dallo [Spazio Cliente OVHcloud](/links/manager). Se necessario, consulta la guida ["Attivare e utilizzare il Rescue mode"](#step2).

A questo punto hai accesso al server con la tua nuova coppia di chiavi SSH.

## Per saperne di più <a name="go-further"></a>

[Introduzione a SSH ](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Modalità Rescue server dedicato](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[VPS modalità Rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.