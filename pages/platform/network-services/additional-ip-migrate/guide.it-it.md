---
title: Trasferisci il tuo Additional IP
excerpt: "Trasferisci il tuo Additional IP"
slug: migrate-additional-ip
section: Additional IP
order: 04
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento 04/01/2023**

> [!primary]
>
> Dal 6 ottobre 2022, la nostra soluzione "Failover IP" si chiama [Additional IP](https://www.ovhcloud.com/it/network/additional-ip/). e non ha alcun impatto sulle funzionalità o sul funzionamento dei tuoi servizi.
>

## Obiettivo
Questa guida ti mostra come trasferire un Additional IP da un’istanza all’altra. Questa operazione, che permette generalmente di ridurre o eliminare i casi di indisponibilità del servizio, potrebbe essere necessaria, ad esempio, per:

- passare alla “nuova versione” di un sito
- continuare ad effettuare le tue operazioni su un server replicato, mentre esegui un intervento di manutenzione o aggiornamento sul tuo server di produzione.


## Prerequisiti

- Almeno due istanze Public Cloud attive
- Un indirizzo Additional IP
- Aver accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

> [!warning]
> Questa funzionalità al momento non è disponibile per le istanze Metal.
>

## Procedura

> [!warning]
>
> Un Additional IP non può essere spostato tra diverse zone. Ad esempio, un IP localizzato nel datacenter di SBG può essere spostato verso GRA o RBX ma non verso BHS.
>

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), seleziona il tuo progetto nella sezione `Public Cloud`{.action}.

Nel menu a sinistra, clicca sulla sezione `Network` e apri la sezione `Public IPs`{.action}. Clicca sulla scheda `Additional IP`{.action}.

In questo esempio, l'indirizzo Additional IP ruotato verso "Instance_A" sarà migrato verso "Instance_B".

Clicca sui tre puntini `...`{.action} nella riga dell'Additional IP e seleziona `Modifica l'istanza associata`{.action}.

![migrating Additional IP](images/migrateip_01.png){.thumbnail}

Clicca sul menu a tendina per selezionare l'istanza di destinazione dalla lista.

![migrating Additional IP](images/migrateip_02.png){.thumbnail}

Clicca su `Conferma`{.action}.

Dopo alcuni secondi, lo Spazio Cliente OVHcloud viene aggiornato. Se la migrazione ha avuto successo, visualizzi un messaggio di conferma.

![migrating Additional IP](images/migrateip_03.png){.thumbnail}

> [!primary]
>
L'Additional IP può essere configurato sul server di destinazione prima o dopo la migrazione. Se pre-configurato, inizierà a rispondere non appena l'operazione di routing sarà terminata.
>

## Per saperne di più

[Configura un Additional IP](https://docs.ovh.com/it/publiccloud/network-services/configure-additional-ip/)

[Importa un Additional IP](https://docs.ovh.com/it/publiccloud/network-services/import-additional-ip/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.