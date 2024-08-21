---
title: "Trasferire un dominio.uk verso un altro Registrar"
excerpt: Come effettuare il trasferimento in uscita di un dominio UK verso un altro registrar
updated: 2022-10-19
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Il processo di modifica del Registrar (*registrar*) per i domini di primo livello (*top-level domain*, o **TLD**) del prefisso nazionale **UK** (**.uk**) differisce da quello dettagliato nella nostra [guida al trasferimento delle TLD generiche](/pages/web_cloud/domains/transfer_outgoing_domain). Le istruzioni riportate qui sotto riguardano queste estensioni:

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
> Se il dominio in questione deve restare registrato in OVHcloud ma modificato nelle modalità di gestione o proprietà, il trasferimento in uscita dal dominio non è la procedura appropriata.
>
> Per trasferire la gestione del tuo dominio verso un altro account cliente OVHcloud, il metodo più adatto è la *modifica dei contatti*. La procedura è descritta in [guida](/pages/account_and_service_management/account_information/managing_contacts).
>
> Se è necessario modificare il **proprietario** del dominio, è necessario farlo **prima** di modificare i contatti del dominio. Segui le istruzioni descritte nella nostra guida sul [cambiamento di proprietario dei domini](/pages/web_cloud/domains/trade_domain).
>

## Prerequisiti

- Disporre di un [dominio.uk](/links/web/domains) registrato in OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager) e disporre dei diritti necessari per gestire il dominio (essere amministratore del dominio)
- Il dominio deve essere sempre attivo, significa che non deve essere scaduto o essere bloccato da OVHcloud
- Il dominio non deve essere oggetto di controversia presso il [Registry Nominet](https://www.nominet.uk/)

> [!primary]
>
> Se sei il **proprietario** del dominio ma la sua gestione nello Spazio Cliente OVHcloud non è disponibile, tramite il tuo accesso o tramite il contatto amministrativo del dominio, consulta [questa guida](/pages/account_and_service_management/account_information/managing_contacts#caso-specifico-di-un-proprietario-di-dominio) prima di continuare.
>
> Se il dominio è scaduto da **meno di 90 giorni**, può sempre essere trasferito. Per sbloccare il dominio per il trasferimento, contatta i nostri team di supporto tecnico creando una richiesta di supporto nel tuo Spazio Cliente OVHcloud.
>

## Procedura

I TLD interessati dispongono di un tag (*TAG*) che corrisponde al loro attuale Registrar, come OVHcloud. Il trasferimento si avvia sostituendo il TAG con quello che identifica il tuo nuovo Registrar.

Se non conosci ancora il TAG richiesto, puoi farne richiesta presso il tuo nuovo provider o consultare la [lista degli Uffici di Registrazione Nominet](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/).

### Step 1: verificare le informazioni necessarie

Accedi allo [Spazio Cliente OVHcloud](/links/manager) e seleziona `Web Cloud`{.action}. Clicca sui `Domini`{.action} e seleziona il dominio interessato.

Ricordati di essere connesso come contatto amministratore.

Nella scheda `Informazioni generali`{.action} è possibile verificare il rispetto delle condizioni richieste per la procedura di trasferimento.

### Step 2: modifica il TAG del tuo dominio

Clicca sul link `Tag per il trasferimento in uscita`{.action} nella sezione intitolata **Sicurezza**.

![trasferimento in uscita](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag.jpg){.thumbnail}

Nella nuova finestra, inserisci il TAG del tuo nuovo Registrar e poi clicca su `Conferma`{.action}.

![trasferimento in uscita](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag-confirmation.jpg){.thumbnail}

Se non riesci a modificare il TAG del tuo dominio dallo Spazio Cliente OVHcloud, puoi richiederne la modifica al Registry Nominet. Per maggiori informazioni, consulta il [sito ufficiale Nominet](https://www.nominet.uk/domain-support/).

### Step 3: seguire il processo di trasferimento presso il tuo nuovo Registrar

La modifica del tag TAG attiva il processo di trasferimento.

Contatta il tuo nuovo provider per maggiori informazioni e per qualsiasi domanda relativa al seguito da dare al trasferimento.

## Per saperne di più

[Trasferire un dominio verso un altro Registrar](/pages/web_cloud/domains/transfer_outgoing_domain)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Contatta la nostra [Community di utenti](/links/community).