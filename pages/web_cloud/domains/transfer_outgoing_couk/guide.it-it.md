---
title: "Trasferire un nome di dominio .uk verso un altro Registrar"
excerpt: Come effettuare il trasferimento in uscita di un nome di dominio UK verso un altro registrar
updated: 2026-03-13
---

## Obiettivo

Il processo di modifica del Registrar (*registrar*) per i nomi di dominio di primo livello (*top-level domain*, o **TLD**) del prefisso nazionale **UK** (**.uk**) differisce da quello dettagliato nella nostra [guida al trasferimento delle TLD generiche](/pages/web_cloud/domains/transfer_outgoing_domain). Le istruzioni riportate qui sotto riguardano queste estensioni:

- .uk
- .co.uk
- .ac.uk
- .gov.uk
- .me.uk
- .net.uk
- .org.uk
- .plc.uk
- .sch.uk

**Questa guida ti mostra come avviare un trasferimento in uscita per questi TLD dal tuo Spazio Cliente OVHcloud.**

> [!warning]
>
> Se il nome di dominio in questione deve restare registrato in OVHcloud ma modificato nelle modalità di gestione o di intestazione, il trasferimento in uscita dal nome di dominio non è la procedura appropriata.
>
> Per trasferire la gestione del tuo nome di dominio verso un altro account cliente OVHcloud, il metodo più adatto è la *modifica dei contatti*. La procedura è descritta in [guida](/pages/account_and_service_management/account_information/managing_contacts).
>
> Se è necessario modificare l'**intestatario** del nome di dominio, è necessario farlo **prima** di modificare i contatti del nome di dominio. Segui le istruzioni descritte nella nostra guida sul [cambiamento di intestatario dei nomi di dominio](/pages/web_cloud/domains/trade_domain).
>

## Prerequisiti

- Disporre di un [nome di dominio .uk](/links/web/domains) registrato in OVHcloud
- Il nome di dominio deve essere sempre attivo, significa che non deve essere scaduto o essere bloccato da OVHcloud
- Il nome di dominio non deve essere oggetto di controversia presso il [Registry Nominet](https://www.nominet.uk/)

<!-- CP-NAV-START:web-domains -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Domini](/links/control-panel/web-domains)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Domini`{.action} > Seleziona il tuo nome di dominio

---
<!-- CP-NAV-END:web-domains -->


> [!primary]
>
> Se il nome di dominio è scaduto da **meno di 90 giorni**, può ancora essere trasferito. Contatta i nostri team di supporto creando una richiesta di assistenza nel tuo Spazio Cliente OVHcloud per sbloccare il nome di dominio ai fini del trasferimento.
>
> Se sei l'**intestatario** del nome di dominio ma non puoi gestirlo nello Spazio Cliente OVHcloud, né tramite il tuo accesso né tramite il contatto amministrativo, consulta [questa guida](/pages/account_and_service_management/account_information/managing_contacts) prima di continuare.
>

## Procedura

I TLD interessati dispongono di un tag (*TAG*) che corrisponde al loro attuale Registrar, come OVHcloud. Il trasferimento si avvia sostituendo il TAG con quello che identifica il tuo nuovo Registrar.

Se non conosci ancora il TAG richiesto, puoi farne richiesta presso il tuo nuovo provider o consultare la [lista degli Uffici di Registrazione Nominet](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/).

### 1 - Modifica il TAG del tuo nome di dominio per avviare il trasferimento verso un altro Registrar

> [!primary]
>
> Per effettuare queste operazioni è necessario essere connesso come [amministratore](/pages/account_and_service_management/account_information/managing_contacts).

<!-- CP-STEPS-START:change-outgoing-tag -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains), poi seleziona il dominio interessato.
>>
>> ![Spazio Cliente OVHcloud - lista dei nomi di dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella sezione **Configurazione**, clicca sul link `Tag per il trasferimento in uscita`{.action}.
>>
>> ![trasferimento in uscita](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella nuova finestra, inserisci il TAG del tuo nuovo Registrar e poi clicca su `Conferma`{.action}.
>>
>> ![trasferimento in uscita](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag-confirmation.png){.thumbnail}
<!-- CP-STEPS-END:change-outgoing-tag -->

Se non riesci a modificare il TAG del tuo nome di dominio dallo Spazio Cliente OVHcloud, puoi richiederne la modifica al Registry Nominet. Per maggiori informazioni, consulta il [sito ufficiale Nominet](https://www.nominet.uk/domain-support/).

### 2 - Segui il processo di trasferimento presso il tuo nuovo Registrar

La modifica del TAG attiva il processo di trasferimento.

Contatta il tuo nuovo provider per maggiori informazioni e per qualsiasi domanda relativa al seguito da dare al trasferimento.

## Per saperne di più

[Trasferire un nome di dominio verso un altro Registrar](/pages/web_cloud/domains/transfer_outgoing_domain)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Contatta la nostra [Community di utenti](/links/community).
