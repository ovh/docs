---
title: "Cosa fare in caso di errore « La connessione non è privata »?"
excerpt: "Reagire in caso di messaggio di errore relativo alla sicurezza del tuo sito"
updated: 2021-07-08
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo <a name="objective"></a>

In caso di inaccessibilità del sito, potrebbero comparire diversi messaggi di errore. Gli esempi che seguono indicano che il tuo hosting Web non contiene [certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) (se il tuo sito non mostra una delle anomalie descritte in questa guida, consulta la sezione [« Per saperne di più »](#go-further)): 

|Browser|Messaggio di errore interessato|
|-|---|
|Chrome :<br>« La connessione non è privata »|![notsecured_chrome](/pages/assets/screens/other/browsers/errors/notsecured-chrome.png){.thumbnail}|
|Firefox :<br>« Attenzione: potenziale rischio per la sicurezza »|![notsecured_firefox](/pages/assets/screens/other/browsers/errors/notsecured-firefox.png){.thumbnail}|
|Edge :<br>« La tua connessione non è privata »|![notsecured_edge](/pages/assets/screens/other/browsers/errors/notsecured-edge.png){.thumbnail}|
|Safari :<br>« Questa connessione non è privata »|![notsecured_safari](/pages/assets/screens/other/browsers/errors/notsecured-safari.png){.thumbnail}|

**Scopri come risolvere errori di tipo « La tua connessione non è privata ».**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a un [provider specializzato](/links/partner) o contattare l'amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [« Per saperne di più »](#go-further) di questa guida.
>

## Prerequisiti

- Avere la gestione dei [server DNS](/pages/web_cloud/domains/dns_server_general_information) e della [zona DNS](/pages/web_cloud/domains/dns_zone_general_information) del dominio
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

Per risolvere questa anomalia, è necessario:

1. determinare l'hosting al quale è associato il tuo dominio, per intervenire sul server giusto;
2. creare, attivare o rinnovare un [certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) per il tuo dominio sull'hosting in questione.

### Step 1: verifica l'hosting associato al tuo dominio

#### Verifica l'indirizzo IP dell'hosting

I messaggi di errore menzionati [sopra](#objective) non significano necessariamente che il tuo sito è ospitato su una delle nostre [offerte Web Cloud](/links/web/hosting). Dovrai quindi verificare l'indirizzo IP del server al quale è collegato il tuo [dominio](/links/web/domains).

Per recuperare l'indirizzo IP del tuo [hosting OVHcloud](/links/web/hosting), clicca su `Web Cloud`{.action} `Hosting`{.action} e seleziona l'hosting interessato.

Nella scheda `Informazioni generali`{.action}, inserisci l'indirizzo IPV4 e/o IPV6 del tuo hosting.

![hosting-general-informazioni](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}

#### Verifica l'indirizzo IP nella zona DNS

A questo punto è necessario verificare che l'indirizzo IP indicato nella [Zona DNS](/pages/web_cloud/domains/dns_zone_edit) corrisponda a quello del tuo [hosting Web Cloud](/links/web/hosting).

Clicca su `Nomi di dominio`{.action} del tuo [Spazio Cliente OVHcloud](/links/manager) e seleziona il dominio del tuo sito.

Seleziona la scheda `Zona DNS`{.action} e annota la destinazione d'ingresso di tipo `A` per il tuo dominio:

![zona-DNP](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}

#### Effettua le azioni necessarie

|Scenario|Messaggio di errore interessato|
|-|---|
|L'indirizzo IP indicato nella [Zona DNS](/pages/web_cloud/domains/dns_zone_edit) corrisponde a quello del tuo hosting condiviso.|Passate allo [step 2](#step2).|
|L'indirizzo IP indicato nella zona non riguarda alcun hosting del tuo [account OVHcloud](/links/manager), ma appare nella [lista dei server Web Cloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).|Ti ricordiamo che non possiedi un hosting che dispone di questo indirizzo IP in uno dei tuoi altri [account OVHcloud cloud](/links/manager) se ne hai creati diversi. In caso di necessità, contatta il tuo webmaster o i [partner OVHcloud](/links/partner) a questo proposito|
|L'indirizzo IP indicato nella zona non corrisponde a quello del tuo hosting e non compare nemmeno nella [lista dei server Web Cloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).|Contatta il tuo webmaster o i [partner OVHcloud](/links/partner) a questo proposito.|
|Nella scheda `Zona DNS`{.action}, un messaggio indica che il tuo dominio utilizza altri server [DNS](/pages/web_cloud/domains/dns_zone_edit) e questi compaiono nella forma « ns **?** .ovh.net » o « dns **?** .ovh.net » (sostituisci il « **?** » con il numero del server DNS interessato):<br><br>![warning_other_ovh_DNS_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}|Modifica i server DNS del tuo dominio in modo che corrispondano a quelli registrati nelle record di tipo `NS` della zona. Per effettuare questa operazione, segui le istruzioni di [questa guida](/pages/web_cloud/domains/dns_server_edit).|
|Nella scheda `Zona DNS`{.action}, un messaggio indica che il tuo dominio utilizza altri server [DNS](/pages/web_cloud/domains/dns_zone_edit) e questi non compaiono nella forma « ns **?** .ovh.net » o « dns **?** .net » :<br><br>![warning_external_DNS_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}|Contatta il tuo webmaster o i [partner OVHcloud](/links/partner) a questo proposito.|
|Il tuo dominio non compare nella sezione `Domini`{.action} del tuo [Spazio Cliente OVHcloud](/links/manager).<br><br>O la scheda `Zona DNS`{.action} del tuo dominio viene mostrata come segue:<br><br>![zonedns_ndd_pas_pas_sur_lec2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/zone-without-domain-top-of-the-page.png){.thumbnail}|Questo significa che il tuo dominio non è gestito dal tuo [Spazio Cliente OVHcloud](/links/manager).<br><br>Verifica che non sia gestito da uno degli altri [account OVHcloud](/links/manager), se ne hai creato diversi.<br><br>Potrai anche determinare il suo Registrar e i server DNS a cui è associato tramite il nostro tool [WHOIS](https://www.ovh.com/fr/support/outils/check_whois.pl).<br><br>Se necessario, contatta il tuo webmaster o i [partner OVHcloud](/links/partner) a questo proposito.|

### Step 2: verifica il certificato SSL del tuo hosting <a name="step2"></a>

Nella scheda `Informazioni generali`{.action} dell'hosting OVHcloud, verifica la sezione `Certificato SSL`:

![ssl-certificate-in-general-tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/no-ssl-certificate.png){.thumbnail}

#### Scenario 1: il tuo hosting non contiene un certificato SSL

Attiva un [certificato SSL](/links/web/hosting-options-ssl) sul tuo hosting seguendo le istruzioni di questa [guida](/pages/web_cloud/web_hosting/ssl_on_webhosting).

#### Scenario 2: il certificato SSL del tuo hosting non funziona

Se hai generato un **certificato SSL "Let's Encrypt"**, attiva l'opzione SSL nella `Multisito`{.action} del tuo hosting seguendo le istruzioni di questa [guida](/pages/web_cloud/web_hosting/ssl_on_webhosting#attiva-un-certificato-ssl-su-un-multisito).

Se disponi di un **certificato SSL importato** e questo non funziona, contatta il suo provider.

Se hai ordinato uno dei **certificati SSL a pagamento** del nostro partner [SECTIGO](https://sectigo.com/){.external}, verifica se hai ricevuto un'email che ti propone di rinnovarlo.
<br>Se necessario, contatta il [supporto di SECTIGO](https://sectigo.com/support){.external} a questo proposito.

>[!primary]
>
> Per visualizzare tutte le email inviate dai nostri servizi, clicca in alto a destra del tuo [Spazio Cliente OVHcloud](/links/manager) e poi su `Email di servizio`{.action}:
>
>![right-menu-email-button](/pages/assets/screens/control_panel/product-selection/web-cloud/right-column/right-menu-email-button.png){.thumbnail}
>

## Per saperne di più <a name="go-further"></a>

[Gestire un certificato SSL su un hosting Web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Attivare HTTPS su un sito Internet tramite il certificato SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Risolvere l’errore «Sito non installato»](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Cosa fare in caso di errore 500 Internal Server Error?](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Risolvere gli errori più frequenti associati ai moduli in 1 click](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc..), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre [soluzioni offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).