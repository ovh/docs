---
title: "Configura il reverse DNS di un VPS"
excerpt: Come impostare la risoluzione reverse DNS
updated: 2023-01-05
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 24/11/2021**

## Obiettivo

Il **Reverse DNS** (*rDNS*) è il complemento della risoluzione "classica" dei DNS che permette di convertire un dominio in un indirizzo IP (record di tipo **A**). Una richiesta di questo tipo può essere risolta con il nome di dominio (record di tipo **PTR**). Ciò significa che le richieste DNS sull'indirizzo IP in questione restituiranno un dominio.

Configurare la risoluzione **Reverse DNS** di un VPS è particolarmente utile per l'invio di email. Il rischio che i tuoi messaggi vengano inviati tramite un sistema di protezione dallo Spam diminuirà se l'indirizzo IP del tuo server di posta elettronica si risolve correttamente nel tuo dominio.

**Questa guida ti mostra come configurare il reverse DNS per gli indirizzi IP del tuo VPS.**

## Prerequisiti

- Disporre di un [VPS](https://www.ovhcloud.com/it/vps/) sul proprio account OVHcloud
- Un dominio con il suo campo `A` che punta verso il VPS
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), accedi alla sezione `Bare Metal Cloud`{.action} e clicca su `IP`{.action} nel menu a sinistra.

La tabella di questa pagina contiene i tuoi servizi compatibili. L'ID del tuo VPS può essere filtrato utilizzando il menu a tendina **Service**.

![Reverse DNS](images/reversecp01.png){.thumbnail}

Clicca sui tre puntini `...`{.action} nella riga dell'indirizzo IP in questione e seleziona `Modifica il reverse`{.action}.

![Reverse DNS](images/reversecp02.png){.thumbnail}

Nella nuova finestra, inserisci il reverse e clicca su `Conferma`{.action}.

Potrai anche modificare il reverse direttamente tramite l'icona della colonna **Reverse** della tabella.

> [!primary]
>
Se la modifica non funziona come previsto, verifica che il record `A` sia configurato correttamente nella zona DNS del tuo dominio. Attenzione, la modifica della [zona DNS](/pages/web/domains/dns_zone_edit) può richiedere fino a 24 ore se hai modificato solo recentemente il record `A`.
>

## Spingiti oltre <a name="gofurther"></a>

[Iniziare a utilizzare un VPS](/pages/cloud/vps/starting_with_a_vps)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
