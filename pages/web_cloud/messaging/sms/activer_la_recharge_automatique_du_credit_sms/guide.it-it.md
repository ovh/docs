---
title: Gestire i crediti SMS e attivare la ricarica automatica
excerpt: Come gestire i tuoi crediti SMS OVHcloud
updated: 2023-02-09
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Questa guida ti spiega cosa sono i crediti SMS, come ricaricarli in modo automatico e come trasferirli tra i tuoi account SMS.

## Prerequisiti

- Disporre di un account SMS OVHcloud attivo
- Avere accesso alle [API OVHcloud](https://api.ovh.com/)(soltanto per trasferire i crediti)
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager){.external}, sezione `Télécom`{.action} > `SMS`{.action}

![Spazio Cliente Telecom SMS](/pages/assets/screens/control_panel/product-selection/telecom/tpl-telecom-03-en-sms.png){.thumbnail}

## Procedura

### Pack crediti SMS

0,7 credito SMS corrisponde al costo per l’invio di 1 SMS in Italia, la tariffa è decrescente in base al numero di crediti SMS acquistati in una sola volta . 

Per visualizzare la lista completa dei Pack SMS clicca qui: [https://www.ovh.it/sms/](https://www.ovh.it/sms/).

**Ad esempio, per l’acquisto di un pack di 100 crediti SMS, il costo di ciascun credito è pari a 0,042 € IVA esclusa :**

Il costo per l’invio di 1 SMS in Italia è pari a 0,7 credito. Con questo pack, è possibile inviare fino a 142 SMS in Italia.<br>
Il costo per l’invio di 1 SMS in India è pari a 0,4 crediti. Con questo pack è possibile inviare fino a 250 SMS i, India.

Per visualizzare i costi, in crediti, per l’invio dei tuoi SMS in base alle loro destinazioni, clicca qui: [https://www.ovh.it/sms/tariffe/](https://www.ovh.it/sms/tariffe/).

> [!primary]
>
> Un SMS può contenere un numero limitato di caratteri in base alla codifica. Per maggiori dettagli sulla codifica e i caratteri autorizzati, consulta questa guida: 
> 
> [Inviare SMS dallo Spazio Cliente OVHcloud](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_mon_espace_client#step--2-scrivi-il-tuo-sms)
>

### Ricarica automatica

Per disporre sempre di credito sufficiente sul tuo account SMS, è possibile e attivare la ricarica automatica. Non appena viene raggiunta la soglia minima di crediti rimanenti, un nuovo numero di crediti viene automaticamente aggiunto al tuo account SMS.

> [!warning]
>
> L'opzione di ricarica automatica può essere attivata solo se sono soddisfatte le seguenti condizioni:
>
> - sul tuo account OVHcloud è presente e validato un metodo di pagamento di tipo SEPA.
> - il tuo servizio SMS deve avere almeno 2 mesi di anzianità.

Per attivare la ricarica automatica, accedi allo [Spazio Cliente OVHcloud](/links/manager){.external}, clicca sulla scheda `ADSL e telefono`{.action} e poi sulla sezione `SMS`{.action}. Seleziona l’account SMS su cui attivare la ricarica automatica.

Clicca sul menu `Opzioni`{.action} (1) e poi su `Ricarica automatica`{.action} (2).

![credit sms](images/smscredit01.png){.thumbnail}

Quindi clicca su `Modifica`{.action} nella sezione “Gestisci le opzioni”.

![credit sms](images/smscredit02.png){.thumbnail}

Infine, compila i campi richiesti:

- Soglia minima (1): al raggiungimento di questa soglia, scatta automaticamente la ricarica.
- Quantità da ricaricare (2): si riferisce al numero di crediti da ricaricare sul tuo account SMS. È possibile scegliere tra: 100, 200, 250, 500, 1000, 5000 e 10000.
- Clicca sul pulsante `Conferma`{.action} per convalidare l’operazione.

![credit sms](images/smscredit03.png){.thumbnail}

### Trasferire crediti SMS

> [!primary]
>
> È possibile trasferire i crediti soltanto tra gli account SMS di uno stesso identificativo cliente OVHcloud. Il trasferimento dei crediti tra due diversi identificativi OVHcloud non è consentito.
>

Nello Spazio Cliente OVHcloud seleziona uno dei tuoi account SMS e clicca su `Trasferire crediti`{.action} dalla scheda `Home page`{.action}.

![trasferimento di crediti SMS](images/credit-transfer01.png){.thumbnail}

Scegli:

- l'account SMS che trasferirà i crediti
- l'account SMS che riceverà i crediti
- il numero di stanziamenti da trasferire

Clicca su `Inviare`{.action} per confermare il trasferimento. Questo è immediato.

![trasferimento di crediti SMS](images/credit-transfer02.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
