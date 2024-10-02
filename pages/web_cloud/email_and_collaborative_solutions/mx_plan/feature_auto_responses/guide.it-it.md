---
title: 'MX Plan - Crea risposta automatica su un indirizzo email'
excerpt: 'Come impostare una risposta automatica su un indirizzo email'
updated: 2024-05-24
---

> [!primary]
>
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Quando sei assente e non sei in grado di consultare il tuo indirizzo email, puoi impostare una risposta automatica (o segreteria) che trasmetterà un’email ai contatti che ti invieranno un’email.

**Questa guida ti mostra come impostare una risposta automatica su un indirizzo email**

## Prerequisiti

- Disporre di una soluzione MX Plan. Puoi effettuare questa operazione scegliendo tra una soluzione di [hosting Web](/links/web/hosting), l’[hosting gratuito 100M](/links/web/domains-free-hosting) incluso con un dominio (attivato in precedenza) o l’offerta MX Plan ordinata separatamente.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).

## Procedura

> [!primary]
>
> Se il tuo indirizzo email è su un'offerta [**Exchange**](/links/web/emails-hosted-exchange), [**Email Pro**](/links/web/email-pro) o non hai una sezione `Gestione delle risposte automatiche`{.action} nel tuo MXplan, dovrai creare la risposta automatica dalla tua Webmail utilizzando la documentazione ["Installare una risposta automatica dall'interfaccia OWA"](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies).

### Crea la risposta automatica

Accedi allo [Spazio Cliente OVHcloud](/links/manager). Seleziona il dominio nella sezione `Email`{.action}. Clicca sulla scheda `Email`{.action} in alto e poi su `Gestione delle risposte automatiche`{.action}.

Verrai reindirizzato alla finestra `Gestione delle risposte automatiche`, nella quale sono visualizzate tutte le risposte automatiche alle email attive sul tuo servizio di posta.

Clicca su `Aggiungi una risposta automatica`{.action}

![autoreply](images/email_responder01.png){.thumbnail}

Viene visualizzata la finestra Aggiungi. Per completarlo, segui le indicazioni riportate qui sotto.

- `Tipo di risposta automatica`:

**Associato a una casella email**: da utilizzare se si tratta di un indirizzo email esistente sul tuo servizio di posta elettronica.
**Libero**: da utilizzare nel caso di un alias. e non è quindi associato a un indirizzo esistente.

- `Casella email` o `Nome della segreteria`: l’indirizzo email o l’alias su cui si basa la risposta automatica.
- `Durata della risposta automatica`:
    - **Temporaneo**: consente di impostare una data di inizio e di fine per il funzionamento della risposta automatica (ad esempio, se si è in ferie).
    - **Permanente**: la risposta automatica funziona finché non viene disattivata.
- `Invia una copia` o `Mantieni i messaggi sul server`: permette di rinviare i messaggi ricevuti durante l’assenza verso l’indirizzo di tua scelta o di conservarli sull’indirizzo email.

> [!warning]
>
> Se si deseleziona questa casella di controllo, i messaggi ricevuti durante l'assenza verranno eliminati automaticamente.

- `Indirizzo in copia` (solo in modalità libera): nel caso di un alias, seleziona l’indirizzo email che riceverà le email inviate all’alias.
- `Message`: questo è il messaggio che i vostri interlocutori riceveranno quando vi invieranno un’email.

Clicca su `Conferma`{.action} per completare la configurazione della risposta automatica.

> [!success]
>
> Per delegare la gestione di una risposta automatica a un indirizzo email, consulta la nostra guida ["Delegare la gestione degli account email a un’altra persona"](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_delegation)

### Modifica o eliminazione di una risposta automatica

Una volta creata la risposta automatica, questa comparirà nella lista visualizzata nella sezione `Gestione delle risposte automatiche`{.action} del servizio di posta elettronica. Per eliminarla o modificarla, clicca su `...`{.action} a destra.

![hosting](images/email_responder02.png){.thumbnail}

## Per saperne di più

[FAQ e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>
