---
title: "Cosa fare se il tuo sito è inaccessibile?"
excerpt: "Diagnostica le cause dell'inaccessibilità del tuo sito"
updated: 2022-08-02
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Se il tuo sito non è raggiungibile, sul tuo browser potrebbero comparire diversi feedback. Gli esempi seguenti indicano una configurazione errata dei tuoi [server DNS](/pages/web_cloud/domains/dns_server_edit), della tua [zona DNS](/pages/web_cloud/domains/dns_zone_edit) o di un dominio sospeso (se il tuo sito non visualizza uno dei messaggi di errore descritti qui, consulta la sezione [Per saperne di più](#go-further)):

|Browser|Messaggio di errore|
|--|--|
|Chrome:<br>"Impossibile raggiungere il sito"|![cantbereached_chrome](/pages/assets/screens/other/browsers/errors/cant-be-reached-chrome.png){.thumbnail}|
|Firefox :<br>"Uhm… non riusciamo a trovare questo sito."|![cantbereached_firefox](/pages/assets/screens/other/browsers/errors/cant-be-reached-firefox.png){.thumbnail}|
|Edge:<br>"Impossibile raggiungere questa pagina"|![cantbereached_edge](/pages/assets/screens/other/browsers/errors/cant-be-reached-edge.png){.thumbnail}|
|Safari :<br>"Safari non trova il server"|![cantbereached_safari](/pages/assets/screens/other/browsers/errors/cant-be-reached-safari.png){.thumbnail}|

**Scopri come risolvere gli errori del tipo "Impossibile raggiungere il sito"**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#go-further) su questa guida.
>

## Prerequisiti

- Avere la gestione dei server e della [zona DNS](/pages/web_cloud/domains/dns_zone_edit) del dominio
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- Essere aggiornato nei [pagamenti](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) e [rinnovi](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) dei servizi associati (dominio e hosting web)

## Procedura

### Step 1: verifica la validità del tuo dominio

> [!warning]
>
> Il rinnovo delle tue offerte è sotto la tua completa responsabilità.<br>
> OVHcloud, in qualità di hosting provider, ha l'obbligo di eliminare definitivamente i servizi (domini, hosting, email, ecc.) che non sono stati rinnovati in tempo utile e tutti i dati che contengono.
>
> Per questo motivo, ti consigliamo di attivare il [rinnovo automatico](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#procedura) su tutti gli abbonamenti OVHcloud.
>

Per verificare la validità dell'abbonamento relativo al tuo dominio, clicca sul tuo nome in alto a destra del tuo [Spazio Cliente OVHcloud](/links/manager) e poi su `Prodotti e servizi`{.action}.

![control-panel](/pages/assets/screens/control_panel/product-selection/right-column/right-menu-product-and-services.png){.thumbnail}|

Rinnova il tuo dominio se necessario cliccando `...`{.action} a destra dello schermo e poi `Rinnova il servizio`{.action}.

![renew-service-button](/pages/assets/screens/control_panel/product-selection/web-cloud/order/renew-service-button.png){.thumbnail}

Una volta terminato il rinnovo dell'offerta, il tuo sito Web sarà disponibile entro 48 ore.

### Step 2: verifica i server DNS

Per verificare la validità dei tuoi [server DNS](/pages/web_cloud/domains/dns_server_edit), clicca in tuo [Spazio Cliente OVHcloud](/links/manager) sui `Domini`{.action} e poi sul dominio del tuo sito.

#### Scenario 1: nessuna anomalia sui server DNS

Verifica i server indicati nella scheda `Server DNS`{.action}:

![srv-dns-ok2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/name-dns-server.png){.thumbnail}

Se sono identici agli obiettivi degli record di tipo `NS` nella `Zona DNS`{.action}, passa allo [Step 3](#step3):

![srv-dns-ok](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns.png){.thumbnail}

#### Scenario 2: sulla zona DNS compare un avviso

Un avviso nella scheda `Zona DNS`{.action} indica che i server DNS utilizzati dal tuo dominio non sono quelli indicati nella tua zona. Sono possibili due scenari:

- Sotto la frase "Al momento utilizzi questi server DNS:", i server indicati sono del tipo "ns **?** .ovh.net" e "DNS **?** .ovh.net" (sostituisci "**?**" da qualsiasi numero):

![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}

Modificare i server DNS seguendo le istruzioni di [questa guida](/pages/web_cloud/domains/dns_server_edit) in modo che siano identici agli obiettivi di record di tipo `NS` nella `Zona DNS`{.action}.

Il tuo sito Web sarà disponibile entro 48 ore.

- Sotto la frase "Al momento utilizzi questi server DNS:", i server indicati non sono del tipo "ns **?** .ovh.net" e "DNS **?** .ovh.net".

![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}

> [!warning]
>
> In questo caso, contatta l'hosting provider della tua Zona DNS, il tuo webmaster o i [partner OVHcloud](/links/partner) prima di effettuare qualsiasi operazione.
>
> È possibile che i server DNS utilizzati dal tuo dominio siano funzionali e che il problema di accesso al tuo sito sia legato ad un ingresso mancante o errato nella [zona DNS](/pages/web_cloud/domains/dns_zone_general_information). Qualsiasi modifica dei server DNS in questa situazione può rendere indisponibili i tuoi indirizzi email o altre applicazioni online.
>

#### Scenario 3: nella zona DNS non sono presenti record di tipo NS

La `Zona DNS`{.action} del tuo dominio non contiene alcun accesso di tipo `NS`:

![srv_dns_missing](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns-missing.png){.thumbnail}

Per eseguire un backup dell'area corrente, clicca sul pulsante `Utilizza l'editor di testo`{.action} a destra dello schermo:

![change_DNS_zone_change_text_format](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format.png){.thumbnail}

Copia/incolla il contenuto della tua `Zona DNS`{.action} in un documento di testo. Salva questo documento localmente.

Clicca su `Reinizializza la zona DNS`{.action} e seleziona `No, ma voglio reinizializzare la mia zona DNS`{.action}, indica i tuoi server di posta e di hosting e clicca su `Conferma`{.action}.

![change_DNS_zone_reset](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/reset-my-dns-zone.png){.thumbnail}

Il tuo sito Web sarà disponibile entro 24 ore.

### Step 3: verifica la zona DNS <a name="step3"></a>

In questo step, visualizzerai l'indirizzo IP del tuo hosting e lo aggiungerai alla tua `Zona DNS`{.action}.

Se il tuo sito non è ospitato sull'infrastruttura OVHcloud o se è gestito da un altro provider, contatta il supporto interessati.

Se il tuo sito è ospitato su una delle nostre [offerte Web Cloud](/links/web/hosting), clicca sulla scheda `Hosting`{.action} e poi sull'offerta corrispondente.

Nella scheda `Informazioni generali`{.action}, copia l'indirizzo IPV4 e/o IPV6 del tuo dominio.

![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}

E riportala nella [Zona DNS](/pages/web_cloud/domains/dns_zone_edit) del tuo dominio, modificandola o creando uno o più record di tipo `A`.

![ipv4-DNSzone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}

Il tuo sito Web sarà disponibile entro 24 ore.

## Per saperne di più <a name="go-further"></a>

[Risolvere l'errore "Sito non installato"](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Cosa fare in caso di errore 500 Internal Server Error?](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Risolvere gli errori più frequenti associati ai moduli in 1 click](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

Per prestazioni specializzate (referenziamento, sviluppo, etc ...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le diverse [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).