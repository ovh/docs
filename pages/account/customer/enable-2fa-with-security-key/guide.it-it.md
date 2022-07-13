---
title: 'Attivare la doppia autenticazione con chiave di sicurezza'
slug: attiva_la_doppia_autenticazione_tramite_chiave_di_sicurezza
excerpt: 'Come proteggere il tuo Spazio Cliente OVHcloud attivando la doppia autenticazione con chiave di sicurezza U2F'
section: Sicurezza
hidden: true
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 08/07/2022**

## Obiettivo

La doppia autenticazione con chiave di sicurezza Universal Factor (U2F) è uno dei metodi proposti da OVHcloud per rendere sicuro l’accesso al tuo account. Questo metodo di protezione con chiavetta USB, sempre più utilizzata per la doppia autenticazione in numerosi settori, è di proprietà della FIDO Alliance.

**Questa guida ti mostra come attivare la doppia autenticazione con chiave di sicurezza UF2 e come utilizzarla per accedere al tuo Spazio Cliente.**

## Prerequisiti

- Conoscere i [diversi metodi di doppia autenticazione proposti da OVHcloud](https://docs.ovh.com/it/customer/proteggi_il_tuo_account_con_2FA/).
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Disporre di una chiave di sicurezza U2F
- Disporre di una porta USB sul tuo computer

## Procedura

> [!warning]
> **Aggiunta di una nuova chiave U2F nelle versioni recenti di Chrome/Chromium**
>
> Non è più possibile aggiungere una nuova chiave U2F sulle versioni recenti del browser Chrome (a partire da Chrome v98) e suoi derivati come Chromium.<br>
> L'utilizzo di una chiave U2F già aggiunta e funzionale è sempre possibile su queste versioni recenti del browser, non è possibile aggiungere una nuova chiave U2F.
>
> I nostri team [lavorano per risolvere questo malfunzionamento](https://customer-service.status-ovhcloud.com/incidents/wl6txzgvrym8) In attesa di una risoluzione definitiva, ti invitiamo a seguire uno di questi due metodi di elusione:
>
> - Utilizza un altro browser (come Firefox) per aggiungere la tua nuova chiave U2F e utilizza il tuo browser Chrome/Chromium abituale per accedere allo Spazio Cliente OVHcloud in modo abituale.
> - Riattiva il supporto della funzionalità U2F nel tuo browser Chrome/Chromium. Come nell'immagine qui sotto, copia questo valore `chrome://flags/#u2f-security-key-api` nella barra degli indirizzi del browser, seleziona `Enabled` nel menu a tendina di destra e riavvia il browser.
>
>![2FA securitykey - Chrome](images/chrome-u2f-support.png){.thumbnail}

### Step 1: attiva la doppia autenticazione

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, clicca sul tuo nome in alto a destra (1) e clicca sulle iniziali (2). Poi clicca su`Sicurezza`{.action} (3) e infine su `Attiva la doppia autenticazione`{.action} (4).

![2FA securitykey](images/hub2FA.png){.thumbnail}

### Step 2: Scegli il metodo con chiave di sicurezza

Scegli la metodo con chiave di sicurezza e conferma l’operazione

![2FA securitykey](images/2fakey1edit.png){.thumbnail}

### Step 3: Disattiva la doppia autenticazione

Collega la chiave di sicurezza quando richiesto e,  se è dotata di un pulsante, cliccaci sopra. 

![2FA securitykey](images/2fakey2.png){.thumbnail}

Inoltre, una volta riconosciuta la chiave, puoi aggiungere una descrizione  in modo da identificare gli utenti che potrebbero utilizzare questo metodo di autenticazione sul tuo account.

![2FA securitykey](images/2fakey3.png){.thumbnail}

### Step 4: salva i codici di sicurezza

Quando aggiungi per la prima volta un metodo di autenticazione a due fattori, ti vengono forniti codici di riserva da conservare con cura. Ti consigliamo di salvarli su un gestore di password.

![2FA securitykey](images/2facodes.png){.thumbnail}

Potrai eliminarli o rigenerarli dal tuo Spazio Cliente.

![2FA securitykey](images/2facodesaction.png){.thumbnail}

> [!warning]
>
> Ti ricordiamo che è fondamentale salvare i codici di riserva e assicurarsi che siano validi. Se uno o più metodi di sicurezza da te selezionati non sono disponibili (per furto o perdita del telefono o della chiave di sicurezza), l’accesso al tuo Spazio Cliente potrebbe essere bloccato.
> 

### Step 5: accedi allo Spazio Cliente con la doppia autenticazione

Una volta attivata l’autenticazione a due fattori, la schermata di login ti mostrerà uno dei tuoi metodi di sicurezza.  Se vuoi utilizzarne un altro, clicca sul pulsante `prova un altro metodo`{.action}.

![2FA securitykey](images/2fakeylogin.png){.thumbnail}

A questo punto, appariranno tutte le opzioni da te attivate.

![2FA securitykey](images/2faloginchoice.png){.thumbnail}

## Per saperne di più

Il sito ufficiale della [FIDO Alliance](https://fidoalliance.org/){.external}.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com>.