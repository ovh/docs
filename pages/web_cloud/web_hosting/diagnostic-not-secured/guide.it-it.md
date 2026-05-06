---
title: "Cosa fare in caso di errore 'La connessione non è privata'?"
excerpt: "Reagire in caso di messaggio di errore relativo alla sicurezza del tuo sito"
updated: 2026-03-31
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

## Obiettivo <a name="objective"></a>

In caso di inaccessibilità del sito, potrebbero comparire diversi messaggi di errore. Gli esempi che seguono indicano che il tuo hosting Web non contiene [certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) (se il tuo sito non mostra una delle anomalie descritte in questa guida, consulta la sezione ["Per saperne di più"](#go-further)):

|Browser|Messaggio di errore interessato|
|-|---|
|Chrome:<br>"La connessione non è privata"|![notsecured_chrome](/pages/assets/screens/other/browsers/errors/notsecured-chrome.png){.thumbnail}|
|Firefox:<br>"Attenzione: potenziale rischio per la sicurezza"|![notsecured_firefox](/pages/assets/screens/other/browsers/errors/notsecured-firefox.png){.thumbnail}|
|Edge:<br>"La tua connessione non è privata"|![notsecured_edge](/pages/assets/screens/other/browsers/errors/notsecured-edge.png){.thumbnail}|
|Safari:<br>"Questa connessione non è privata"|![notsecured_safari](/pages/assets/screens/other/browsers/errors/notsecured-safari.png){.thumbnail}|

**Scopri come risolvere errori di tipo "La tua connessione non è privata".**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a un [provider specializzato](/links/partner) o contattare l'amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

## Prerequisiti

- Avere la gestione dei [server DNS](/pages/web_cloud/domains/dns_server_general_information) e della [zona DNS](/pages/web_cloud/domains/dns_zone_general_information) del dominio

<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

Per risolvere questa anomalia, è necessario:

1. determinare l'hosting al quale è associato il tuo dominio, per intervenire sul server giusto;
2. creare, attivare o rinnovare un [certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) per il tuo dominio sull'hosting in questione.

### 1 - Verifica l'hosting associato al tuo dominio

#### Verifica l'indirizzo IP dell'hosting

I messaggi di errore menzionati [sopra](#objective) non significano necessariamente che il tuo sito è ospitato su una delle nostre [offerte Web Cloud](/links/web/hosting). Dovrai quindi verificare l'indirizzo IP del server al quale è collegato il tuo [dominio](/links/web/domains).

Per recuperare l'indirizzo IP del tuo [hosting OVHcloud](/links/web/hosting), clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **2** passaggi.

<!-- CP-STEPS-START:check-hosting-ip -->
> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Pagina Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nel riquadro **Informazioni generali**, troverai le informazioni **IPv4** e **IPv6**.
>>
>> ![Indirizzi IPv4 e IPv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Annota l'indirizzo IPv4 e/o IPv6, poi prosegui nella lettura della guida.
<!-- CP-STEPS-END:check-hosting-ip -->

#### Verifica l'indirizzo IP nella zona DNS

A questo punto è necessario verificare che l'indirizzo IP indicato nella [zona DNS](/pages/web_cloud/domains/dns_zone_edit) corrisponda a quello del tuo [hosting Web Cloud](/links/web/hosting).

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **2** passaggi.

<!-- CP-STEPS-START:check-dns-zone-ip -->
> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio interessato.
>>
>> ![Pagina Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Annota la destinazione del record di tipo `A` per il tuo dominio:
>>
>> ![Destinazione del record A nella zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}
<!-- CP-STEPS-END:check-dns-zone-ip -->

#### Effettua le azioni necessarie

**Clicca sullo scenario corrispondente alla tua situazione per visualizzare il contenuto.**

/// details | L'indirizzo IP corrisponde a quello del tuo hosting condiviso

L'indirizzo IP indicato nella [zona DNS](/pages/web_cloud/domains/dns_zone_edit) corrisponde a quello del tuo hosting condiviso. Passa alla [parte 2](#step2).

///

/// details | L'indirizzo IP non riguarda alcun hosting del tuo account ma appare nella lista dei server Web Cloud

L'indirizzo IP indicato nella zona non riguarda alcun hosting del tuo [account OVHcloud](/links/manager), ma appare nella [lista dei server Web Cloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).

Verifica di non possedere un hosting con questo indirizzo IP in uno dei tuoi altri [account OVHcloud](/links/manager), se ne hai creati diversi. Se necessario, contatta il tuo webmaster o i [partner OVHcloud](/links/partner) a questo proposito.

///

/// details | L'indirizzo IP non corrisponde a quello del tuo hosting e non compare nella lista dei server Web Cloud

L'indirizzo IP indicato nella zona non corrisponde a quello del tuo hosting e non compare nemmeno nella [lista dei server Web Cloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).

Contatta il tuo webmaster o i [partner OVHcloud](/links/partner) a questo proposito.

///

/// details | Il tuo dominio utilizza altri server DNS OVHcloud (ns?.ovh.net / dns?.ovh.net)

Sopra la zona DNS mostrata nel tuo Spazio Cliente OVHcloud, un messaggio indica che il tuo dominio utilizza altri server [DNS](/pages/web_cloud/domains/dns_zone_edit) e questi compaiono nella forma "ns **?** .ovh.net" o "dns **?** .ovh.net" (sostituisci il "**?**" con il numero del server DNS interessato):

![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}

Modifica i server DNS del tuo dominio in modo che corrispondano a quelli registrati nei record di tipo `NS` della zona. Per effettuare questa operazione, segui le istruzioni di [questa guida](/pages/web_cloud/domains/dns_server_edit).

///

/// details | Il tuo dominio utilizza server DNS esterni (non OVHcloud)

Sopra la zona DNS mostrata nel tuo Spazio Cliente OVHcloud, un messaggio indica che il tuo dominio utilizza altri server [DNS](/pages/web_cloud/domains/dns_zone_edit) e questi non compaiono nella forma "ns **?** .ovh.net" o "dns **?** .ovh.net":

![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}

Contatta il tuo webmaster o i [partner OVHcloud](/links/partner) a questo proposito.

///

/// details | Il tuo dominio non compare nel tuo Spazio Cliente OVHcloud

Il tuo dominio non compare nella pagina [Domini](/links/control-panel/web-domains) del tuo Spazio Cliente OVHcloud.

Questo significa che il tuo dominio non è gestito dal tuo [Spazio Cliente OVHcloud](/links/manager).

Verifica che non sia gestito da uno degli altri [account OVHcloud](/links/manager), se ne hai creati diversi.

Puoi anche determinare il suo Registrar e i server DNS a cui è associato tramite il nostro tool [WHOIS](/links/web/domains-whois).

Se necessario, contatta il tuo webmaster o i [partner OVHcloud](/links/partner) a questo proposito.

///

### 2 - Verifica il certificato SSL del tuo hosting <a name="step2"></a>

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **2** passaggi.

<!-- CP-STEPS-START:check-ssl-certificate -->
> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Pagina Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella scheda `Informazioni generali`{.action}, verifica la sezione `Certificato SSL`:
>>
>> ![Certificato SSL nella scheda informazioni generali](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/no-ssl-certificate.png){.thumbnail}
<!-- CP-STEPS-END:check-ssl-certificate -->

#### Scenario 1: il tuo hosting non contiene un certificato SSL

Attiva un [certificato SSL](/links/web/hosting-options-ssl) sul tuo hosting seguendo le istruzioni di questa [guida](/pages/web_cloud/web_hosting/ssl_on_webhosting).

#### Scenario 2: il certificato SSL del tuo hosting non funziona

Se hai generato un **certificato SSL "Let's Encrypt"**, attiva l'opzione SSL del tuo hosting seguendo le istruzioni di [questa guida](/pages/web_cloud/web_hosting/ssl_on_webhosting).

Se disponi di un **certificato SSL importato** e questo non funziona, contatta il suo provider.

Se hai ordinato uno dei **certificati SSL a pagamento** del nostro partner [SECTIGO](https://sectigo.com/), verifica se hai ricevuto un'email che ti propone di rinnovarlo.
<br>Se necessario, contatta il [supporto di SECTIGO](https://sectigo.com/support) a questo proposito.

> [!primary]
>
> Per visualizzare tutte le email inviate dai nostri servizi, accedi alla pagina [Le mie comunicazioni](/links/control-panel/account-messages).

## Per saperne di più <a name="go-further"></a>

[Gestire un certificato SSL su un hosting Web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Attivare HTTPS su un sito Internet tramite il certificato SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Risolvere l'errore «Sito non installato»](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Cosa fare in caso di errore 500 Internal Server Error?](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Risolvere gli errori più frequenti associati ai moduli in 1 click](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

Per prestazioni specializzate (referenziamento, sviluppo, ecc..), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre [soluzioni offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
