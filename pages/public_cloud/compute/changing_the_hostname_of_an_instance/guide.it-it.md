---
title: 'Modificare l’hostname di un’istanza Public Cloud'
excerpt: "Modifica l'hostname della tua istanza"
updated: 2025-03-20
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Nel momento in cui crei un’[istanza Public Cloud](/links/public-cloud/public-cloud), così come ad ogni riavvio, puoi configurarla grazie al modulo Cloud-init. Di conseguenza, se si desidera riconfigurare l'hostname, a causa di un errore durante la creazione dell'istanza o per riconfigurare il server di posta elettronica, è necessario disabilitare il modulo Cloud-init. Questo è responsabile della configurazione dell'hostname in modo che non venga ripristinato.

**Questa guida spiega come riconfigurare cloud-init in modo da poter cambiare l'hostname dell'istanza.**

> [!warning]
>
> OVHcloud mette a tua disposizione macchine di cui tu sei responsabile. Non avendo accesso a queste macchine, non siamo noi gli amministratori e pertanto non possiamo fornirti alcuna assistenza. È responsabilità dell'utente garantire ogni giorno la gestione e la sicurezza del software.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi relativamente ad amministrazione e sicurezza, ti consigliamo di contattare un [provider specializzato](/links/partner). Per maggiori informazioni consulta la sezione "Per saperne di più".
>
> Questa guida è destinata alle istanze basate su distribuzioni Linux **esclusivamente**.
>

## Prerequisiti

- Aver creato un’[istanza Public Cloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- [Essere connessi in SSH](/pages/public_cloud/compute/public-cloud-first-steps) (sudo) all’istanza

## Procedura

### Disattiva il modulo cloud-init

> [!primary]
>
> Per gli scopi di questa guida, utilizzeremo l'editor di file **vi**, in quanto presente di default nelle distribuzioni Linux. È ovviamente possibile utilizzare l'editor di propria scelta.
>
> Uso di base di vi :
>
> - Premere **i** per passare alla modalità di inserimento del testo.
> - Premere **Escape** (Esc) per uscire dalla modalità di inserimento.
> - Premere **:wq** e poi **Invio** per salvare e uscire.
> - Premere **:q!** e poi **Invio** per uscire senza salvare.

Per disattivare cloud-init, è necessario iniziare a modificare il file di configurazione:

```sh
sudo vi /etc/cloud/cloud.cfg
```

Aggiungi o modifica le due seguenti righe:

```sh
preserve_hostname: true
manage_etc_hosts: false
```

### Modificare il nome dell'host (*hostname*)

Il primo passo è cambiare il nome dell'host (*hostname*). In questo esempio, cambieremo l'hostname in **webserver**. È ovviamente possibile modificarlo in base alle proprie preferenze:

```sh
sudo vi /etc/hostname
```

Aggiungere o sostituire il contenuto con:

```sh
webserver
```

Successivamente, modifica il file **/etc/hosts**:

```sh
sudo vi /etc/hosts
```

Aggiungere o sostituire il contenuto con:

```sh
127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

Riavvia l’istanza:

```bash
sudo reboot
```

Dopo il riavvio, il cambio di *hostname* è stato preso in considerazione correttamente:

```sh
sudo cat /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

## Per saperne di più 

Contatta la nostra [Community di utenti](/links/community).