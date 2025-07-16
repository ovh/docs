---
title: "Web Cloud Databases - Come autorizzare un indirizzo IP?"
excerpt: "Scopri come autorizzare uno o più indirizzi IP ad accedere alla tua soluzione Web Cloud Databases"
updated: 2025-07-10
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Obiettivo

Le soluzioni [Web Cloud Databases](/links/web/databases) possono essere utilizzate con servizi OVHcloud o esterni a OVHcloud.

Di default, per motivi di sicurezza, su queste soluzioni:

- Solo gli indirizzi IP associati alla nostra infrastruttura di hosting condiviso sono autorizzati ad accedere al contenuto dei database.
- L'accesso ai log della soluzione non è limitato in funzione degli indirizzi IP. In questo modo è possibile accedervi, ad esempio, da un computer.

È necessario modificare queste autorizzazioni/restrizioni?

**Questa guida ti mostra come autorizzare uno o più indirizzi IP ad accedere alla tua soluzione Web Cloud Databases.**

## Prerequisiti

- Disporre di una soluzione [Web Cloud Databases](/links/web/databases).
- Conoscere l’indirizzo IP (o la classe di indirizzi IP) da autorizzare sulla soluzione.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).

## Procedura

### Autorizza un indirizzo IP o una classe di indirizzi IP

> [!primary]
>
> Ti ricordiamo che, se hai appena attivato la tua soluzione [Web Cloud Databases](/links/web/databases) e vuoi utilizzarla con un piano di [hosting Web OVHcloud](/links/web/hosting), gli indirizzi IP di queste soluzioni sono già autorizzati di default.

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **5** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sul menu `Web Cloud Databases`{.action} e seleziona la soluzione Web Cloud Databases interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella nuova pagina clicca sulla scheda `IP autorizzati`{.action}.
>>
>> ![Authorised IPs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Nella nuova pagina, clicca sul pulsante `Aggiungi un indirizzo IP/mask`{.action} situato sopra la tabella.
>>
>> ![Authorised IPs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}
>>
>> > [!success]
>> >
>> > Per modificare un indirizzo IP o una classe di indirizzi IP già autorizzata, clicca direttamente nella tabella sul pulsante `...`{.action} a destra della riga corrispondente all’indirizzo IP o alla classe di indirizzi IP da modificare e poi su `Modifica la whitelist`{.action}.
>>
> **Passaggio 5**
>>
>> Nella finestra che si apre, è necessario completare diversi campi:
>>
>> ![Add an IP address or mask](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}
>>
>> - `IP/mask *`{.action}: Inserisci qui l’indirizzo IP (ad esempio: `203.0.113.44`) o la classe di indirizzi IP (ad esempio: `203.0.113.0/24` che rappresenta tutti gli indirizzi IP da `203.0.113.0` a `203.0.113.255`) che vuoi autorizzare sulla tua soluzione Web Cloud Databases.
>> - `Descrizione`{.action} (facoltativo): Ad esempio, è possibile aggiungere informazioni sul ruolo dell’indirizzo IP o della classe di indirizzi IP in questione.
>> - `Database`{.action}: Seleziona questa casella per consentire all’indirizzo IP o alla classe di indirizzi IP di accedere ai database presenti sulla soluzione Web Cloud Databases.
>> - `SFTP`{.action}: spunta questa casella per autorizzare l’indirizzo IP o la classe di indirizzi IP ad accedere ai log della soluzione Web Cloud Databases.
>>
>> > [!warning]
>> >
>> > È fortemente sconsigliato spuntare la casella `Database`{.action} per autorizzare la classe di indirizzi IP `0.0.0.0/0` ad accedere ai tuoi database.
>> >
>> > In questo modo, tutti gli indirizzi IPv4 esistenti potranno accedere ai database.
>>
>> Una volta inserite le informazioni, clicca sul pulsante `Conferma`{.action}.

## Casi particolari

**Fare clic sui casi riportati di seguito per visualizzare le informazioni corrispondenti.**

/// details | Intervallo di indirizzi IP 0.0.0.0/0

Quando attivi la tua soluzione Web Cloud Databases, di default è già presente una linea per la classe di indirizzi IP `0.0.0.0/0`, che autorizza l’accesso in **SFTP** alla soluzione.

Questa autorizzazione è volontariamente impostata per permetterti di accedere ai file di log della tua soluzione Web Cloud Databases senza dover dichiarare l'indirizzo IP del tuo punto di accesso a Internet.

Questo indirizzo IP può variare regolarmente in base ai provider di servizi Internet.

Inoltre, ti consigliamo di **non** modificare questa autorizzazione e non autorizzare l'accesso ai database presenti sulla tua soluzione Web Cloud Databases.

In questo modo, infatti, tutti gli indirizzi IPv4 esistenti potrebbero avere accesso ai database, con conseguente rischio per la sicurezza dei dati.

///


/// details | L'autorizzazione di accesso agli hosting Web OVHcloud

Quando attivi la tua soluzione Web Cloud Databases, l’autorizzazione di accesso agli hosting Web OVHcloud è attiva di default.

Se vuoi disattivare questa autorizzazione perché non utilizzi un hosting Web con la tua soluzione Web Cloud Databases, segui gli step **4** indicati qui sotto:

> [!tabs]
> **Passaggio 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sul menu `Web Cloud Databases`{.action} e seleziona la soluzione Web Cloud Databases interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella nuova pagina clicca sulla scheda `IP autorizzati`{.action}.
>>
>> ![Authorised IPs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Nella nuova pagina, deseleziona la casella di controllo che precede la voce `Autorizza gli hosting Web OVHcloud ad accedere al database`{.action}.
>>
>> ![Authorised IPs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}

///

## Per saperne di più
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).