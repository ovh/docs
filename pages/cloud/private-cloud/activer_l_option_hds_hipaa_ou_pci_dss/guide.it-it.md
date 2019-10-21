---
title: 'Attivare la certificazione PCI DSS nel Private Cloud OVH'
slug: attivare-certificazione-pci-dss-private-cloud-ovh
excerpt: 'Come implementare un’infrastruttura Private Cloud conforme agli standard PCI DSS'
section: 'Servizi e opzioni OVH'
---

**Ultimo aggiornamento: 23/08/2019**

## Obiettivo

Sulle soluzioni Private Cloud OVH è possibile attivare la certificazione PCI DSS. Disporre di un’infrastruttura conforme a questi standard è indispensabile, ad esempio, per ospitare sulle proprie piattaforme [dati relativi alle carte di pagamento](https://www.ovh.it/private-cloud/payment-infrastructure/){.external}.   

**Questa guida ti mostra come attivare l’opzione di sicurezza PCI DSS sul tuo Private Cloud dallo Spazio Cliente OVH.**

## Prerequisiti

- Disporre di una infrastruttura Private Cloud con versione 6.0 o superiore 
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager)

## Procedura

### Attivare l’opzione di sicurezza

Per implementare la certificazione PCI DSS sul Private Cloud è necessario che l’opzione di sicurezza corrispondente sia attiva. Per verificarlo, accedi all’area `Dedicato`{.action} dello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager) e seleziona il tuo servizio nella sezione `Private Cloud`{.action} del menu a sinistra. 

Assicurati di trovarti nella scheda `Informazioni generali`{.action}. Nel riquadro `Opzioni di sicurezza` verifica lo stato di attivazione di `Payment Card Industry Data Security Standard (PCI DSS)`, **tenendo in considerazione che non è possibile abilitare contemporaneamente più opzioni nello stesso Private Cloud.**

![hdspcidsscompliance](images/HomeSDDCManager-2.png){.thumbnail}

Se l’opzione è disattivata, clicca sui tre puntini in corrispondenza della certificazione e seleziona `Attiva`{.action}.

Questa operazione richiede il rispetto di alcune condizioni:

- **le opzioni [NSX](https://www.ovh.it/private-cloud/opzioni/nsx.xml){.external} e [vROps](https://www.ovh.it/private-cloud/opzioni/vrops.xml){.external} devono essere installate**: per verificare questo requisito accedi alla scheda `Informazioni generali`{.action}, riquadro `Opzioni Private Cloud`. Per modificare lo stato delle funzionalità, clicca sui tre puntini in corrispondenza dell’opzione e seleziona `Attiva`{.action}.

- **la politica di accesso al vCenter deve essere impostata su “Limitata”**: per verificare questo requisito accedi alla scheda `Sicurezza`{.action}. Per modificare lo stato dell’opzione, clicca sul pulsante `Modifica la politica di accesso al vCenter`{.action} e segui gli step indicati. In caso di necessità consulta la guida [Introduzione allo Spazio Cliente Private Cloud OVH](https://docs.ovh.com/it/private-cloud/spazio-cliente-private-cloud-ovh/#sicurezza).

- **il Private Cloud deve disporre di almeno un indirizzo IP autorizzato a connettersi al vCenter**: per verificare questo requisito accedi alla scheda `Sicurezza`{.action}. Se non risultano presenti IP autorizzati, è possibile aggiungerli con il pulsante `Aggiungi una nuova classe di indirizzi IP`{.action}. In caso di necessità consulta la guida [Introduzione allo Spazio Cliente Private Cloud OVH](https://docs.ovh.com/it/private-cloud/spazio-cliente-private-cloud-ovh/#sicurezza). Per essere sempre in grado di connetterti al vCenter, ti consigliamo di configurare l’autorizzazione su almeno due indirizzi IP. Per garantire l’accessibilità, gli indirizzi IP devono essere statici, non dinamici.

- **l’utente “admin” deve disporre dei permessi necessari e le sue informazioni devono essere complete**: per verificare questo requisito accedi alla scheda `Utenti`{.action}. Assicurati che il numero di telefono e l’indirizzo email inseriti per “admin” siano corretti e che questo utente disponga del permesso “**token validator**”. Per apportare eventuali modifiche, clicca sui tre puntini in corrispondenza dell’utente e seleziona l’opzione `Modifica`{.action}. In caso di necessità consulta la guida [Introduzione allo Spazio Cliente Private Cloud OVH](https://docs.ovh.com/it/private-cloud/spazio-cliente-private-cloud-ovh/#sicurezza). Per essere sempre in grado di connetterti al vCenter, ti consigliamo di configurare le informazioni e i permessi necessari su almeno due utenti (con numero di telefono e indirizzo email diversi).

Una volta completato il processo di attivazione, sarà necessario:

- convalidare il token inviato via SMS agli utenti in possesso del permesso “**token validator**”, per comprovare che sarai in grado di ricevere i token necessari per confermare le operazioni
- compilare i documenti che riceverai via email per finalizzare l’aspetto contrattuale

Prosegui nella lettura di questa guida per iniziare a conoscere l’interfaccia sicura e capire come utilizzarla. 

> [!primary]
>
> Ti ricordiamo che l’interfaccia vSphere non sarà raggiungibile durante l’attivazione dell’opzione di sicurezza.
>

### Accedi all’interfaccia sicura

Una volta attivata l’opzione di sicurezza, riceverai un’email con il procedimento per la conferma dei token e i dettagli sul loro funzionamento e utilizzo.  

In seguito all’attivazione dell’opzione, come misura di sicurezza:

- tutti gli utenti del Private Cloud vengono disattivati
- è necessario modificare le password associate agli utenti per poterli riattivare
- da questo momento, la modifica della password degli utenti dovrà essere effettuata esclusivamente tramite l’interfaccia sicura (non sarà più possibile eseguire questa operazione dallo Spazio Cliente OVH)

Ti ricordiamo che l’accesso all’interfaccia sarà possibile solo dopo il completamento dell’attivazione dell’opzione di sicurezza.

Accedi all’interfaccia protetta utilizzando il link contenuto nell’email ricevuta, che dovrebbe avere un formato di questo tipo: ”https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/password-lost”. Una volta connesso, è possibile modificare la password di “admin” e degli altri utenti. In caso di necessità, consulta la guida [Utilizzare l’interfaccia sicura](https://docs.ovh.com/gb/en/private-cloud/secure-interface/) (in inglese).

## Per saperne di più

[Introduzione allo Spazio Cliente Private Cloud OVH](https://docs.ovh.com/it/private-cloud/spazio-cliente-private-cloud-ovh/#sicurezza)

[Utilizzare l’interfaccia sicura](https://docs.ovh.com/gb/en/private-cloud/secure-interface/) (in inglese)

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.