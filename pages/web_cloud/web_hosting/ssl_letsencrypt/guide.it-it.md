---
title: "Hosting Web - Attivare un certificato SSL gratuito Let's Encrypt"
excerpt: "Scopri come attivare un certificato SSL gratuito Let's Encrypt sul tuo hosting Web"
updated: 2025-12-16
---

## Obiettivo

I certificati Secure Socket Layer (SSL) permettono di cifrare gli scambi effettuati da o verso il tuo sito Web. In questo modo si evita che una persona o un robot malevolo "ascolti" chiaramente le richieste inviate o inviate al tuo sito Web.

OVHcloud propone diversi tipi di certificati SSL sulle nostre offerte di [hosting condiviso OVHcloud](/links/web/hosting). Per maggiori informazioni, consulta la guida [Gestire un certificato SSL su un hosting Web](/pages/web_cloud/web_hosting/ssl_on_webhosting). I certificati SSL sono indispensabili per la sicurezza del tuo sito Web.

Esistono tre tipi di certificati SSL:

- Domain Conferma (DV)
- Organizzazione di conferma (OV)
- Extended Conferma (EV)

I livelli di crittografia SSL sono identici tra questi tre tipi di certificati.

La differenza principale risiede nel livello di verifica che sarà realizzato dall'Autorità di certificazione (AC) che rilascia il certificato SSL e ne attesta l'autenticità.

Let's Encrypt è un'autorità di certificazione gratuita, automatizzata, aperta e no-profit. Per maggiori informazioni, consulta la pagina <https://letsencrypt.org/it/about/>.

**Questa guida ti mostra come attivare un certificato SSL gratuito Let's Encrypt su un hosting Web OVHcloud.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).
- Ordinare o disporre di un [hosting condiviso OVHcloud](/links/web/hosting).
- Ordinare o disporre di un [dominio](/links/web/domains) e disporre dei diritti esclusivi sul suo utilizzo. Il dominio non deve essere già associato a un certificato SSL.

> [!primary]
>
> Dal **06/08/2025**, il certificato SSL Let's Encrypt è attivo automaticamente di default per:
>
> - tutti i nuovi domini/sottodomini associati a un hosting Web.
> - tutte le nuove sottoscrizioni di un dominio con un nuovo hosting Web.
>
> L'obiettivo è quello di farvi risparmiare tempo durante la configurazione dei vostri servizi. È sempre possibile disattivare il certificato SSL Let's Encrypt dallo [Spazio Cliente OVHcloud](/links/manager) se si desidera installare un altro certificato SSL (Sectigo DV, Sectigo EV o un certificato SSL personalizzato).
> Per maggiori informazioni consulta la nostra guida "[Gestire un certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)", parte **Disattivare un certificato SSL su un hosting Web**.

## Procedura

> [!warning]
>
> **Prima di proseguire**, verifica che **ogni dominio e/o sottodominio** interessato da un futuro certificato SSL Let's Encrypt:
>
> - punta verso l’indirizzo IP del tuo hosting Web.
> - sia dichiarato su uno dei siti web del tuo hosting web.
> - non dispone già di un certificato SSL attivo.
>
> Per maggiori informazioni, consulta le nostre guide:
>
> - [Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite).
> - [Hosting Web - Lista degli indirizzi IP per cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
> - [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
> - [Hosting Web - Gestire un certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting), parte **Disattivare un certificato SSL su un hosting Web**.

### Attiva il certificato SSL Let's Encrypt

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi:

> [!tabs]
> **Passaggio 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Clicca sulla scheda `Certificati SSL`{.action}.
>>
>> ![Certificati SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Quando compare il contenuto della scheda, seleziona il dominio o sottodominio per il quale vuoi attivare il certificato SSL gratuito Let's Encrypt (DV), sotto la voce `Attivare il certificato SSL`.
>>
>> ![SSL Let's Encrypt](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/enable-ssl-lets-encrypt.png){.thumbnail}
>>
>> Clicca su `Attivare SSL Let's Encrypt`{.action}.

L’implementazione del certificato SSL Let’s Encrypt può richiedere diverse ore.

### Verifica l'attivazione del certificato SSL gratuito Let's Encrypt (DV)

Per verificare che l'installazione sia stata completata, clicca sulle schede qui sotto per visualizzare successivamente ciascuno dei **4** passi:

> [!tabs]
> **Passaggio 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Clicca sulla scheda `Certificati SSL`{.action}.
>>
>> ![Certificati SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Una volta visualizzato il contenuto della scheda, verifica che ogni dominio e/o sottodominio interessato sia presente nella tabella con il tipo di certificato SSL `Let's Encrypt`.
>>
>> ![Tabella di gestione dei certificati SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/tab.png){.thumbnail}

Il tuo certificato SSL Let's Encrypt è installato e attivo. Da questo momento è possibile utilizzarlo con i nuovi siti Web, passando, ad esempio, i nuovi [siti Web in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Per saperne di più

[Hosting Web - Gestire un certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Hosting Web - Modificare il proprio sito Web in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Errori comuni associati alla protezione del sito Web con il certificato SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).