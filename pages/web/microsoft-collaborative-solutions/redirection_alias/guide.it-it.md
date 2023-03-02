---
title: 'Utilizzare gli alias e i reindirizzamenti email'
excerpt: 'Come gestire gli alias e i reindirizzamenti email'
slug: email-redirection-guide
section: 'Funzionalità degli indirizzi email'
order: 01
updated: 2020-05-20
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 01/02/2023**

## Obiettivo

In questa guida troverai informazioni e suggerimenti sulla configurazione dei tuoi reindirizzamenti e alias email, ad esempio per reindirizzare le email ricevute su un indirizzo A verso un indirizzo B.

**Come gestire gli alias e i reindirizzamenti email**

### Che cos’è un reindirizzamento email?

Un reindirizzamento permette di modificare il percorso iniziale di un'email verso uno o più indirizzi email.

Ad esempio, desiderate che all'invio di un'email su **contact@mydomain.ovh**, quest'ultima sia ugualmente rinviata verso **john.smith@otherdomain.ovh**. In questo modo è possibile inviare automaticamente un'email da **contact@mydomain.ovh** a **john.smith@otherdomain.ovh**.

### Cos'è un alias email?

Diversamente dal reindirizzamento, l'indirizzo email associato all'alias non è un indirizzo consultabile ma è una "maschera".

Creare un alias per il tuo indirizzo email ti permette di comunicare un indirizzo "mask" ai tuoi contatti, senza dover comunicare il tuo indirizzo email personale al mittente. Un indirizzo email può avere diversi alias.

Ad esempio, il tuo indirizzo email è **john.smith@mydomain.ovh** e il tuo alias **information@mydomain.ovh**. Puoi così comunicare ai tuoi contatti l'indirizzo **information@mydomain.ovh** e ricevere le tue email su **john.smith@mydomain.ovh**, senza che il mittente sia a conoscenza di **john.smith@mydomain.ovh**.

### Reindirizzamento e alias in immagine <a name="diagram"></a>

- **Il reindirizzamento semplice (schema n°1 qui sotto)**: l'email viene inoltrata direttamente all'indirizzo di reindirizzamento, il destinatario iniziale non riceve l'email.

- **Il reindirizzamento con copia locale (schema n°2 qui sotto)**: l'email viene inviata al destinatario iniziale e all'indirizzo di reindirizzamento.

- **L'alias email (schema n°3 qui sotto)**: l'email è indirizzata all'alias che lo restituisce al destinatario su cui l'alias è stato configurato.

![email](images/schema-redirect.png){.thumbnail}

> [!primary]
>
> Ti ricordiamo che è possibile configurare un reindirizzamento verso diversi indirizzi email.

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Disporre di una soluzione email OVHcloud configurata precedentemente (**MX Plan**, inclusa nelle nostre [soluzioni di hosting Web](https://www.ovhcloud.com/it/web-hosting/), inclusa in un [hosting Start10M gratuito](https://www.ovhcloud.com/it/domains/free-web-hosting/) o ordinata separatamente come soluzione autonoma, come [Hosted Exchange](https://www.ovhcloud.com/it/emails/hosted-exchange/) o [Email Pro](https://www.ovhcloud.com/it/emails/email-pro/))

## Procedura

Seguite la nostra guida [Utilizzare gli alias e i reindirizzamenti email](https://docs.ovh.com/it/emails/servizio_email_configura_il_reindirizzamento_delle_tue_email/) nella sezione "Hosted email - MX Plan".