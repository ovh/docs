---
title: "Hosting Web - Attivare un certificato SSL Sectigo DV"
excerpt: "Questa guida ti mostra come attivare un certificato SSL Sectigo DV su un hosting Web OVHcloud"
updated: 2025-06-16
---

## Obiettivo

I certificati Secure Socket Layer (SSL) permettono di cifrare gli scambi effettuati da o verso il sito Web. In questo modo si evita che una persona o un robot malevolo "ascolti" chiaramente le richieste inviate dal sito Web.

OVHcloud propone diversi tipi di certificati SSL sulle offerte di [hosting condiviso OVHcloud](/links/web/hosting). Sono presentati nella nostra guida "[Hosting Web - Gestire un certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)". I certificati SSL sono indispensabili per la sicurezza del sito Web.

Esistono tre tipi di certificati SSL:

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

I livelli di crittografia SSL sono identici tra questi tre tipi di certificati.

La principale differenza risiede nel livello di controlli che saranno effettuati dall'Autorità di Certificazione (CA) che rilascia il certificato SSL e ne attesta l'autenticità.

Per gli hosting condivisi OVHcloud, l'autorità di certificazione che rilascia i certificati SSL DV è [Sectigo](https://sectigostore.com).

> [!warning]
>
> Una volta che l'ordine del certificato è stato effettuato e trasmesso al nostro fornitore di certificati/autorità di certificazione Sectigo, **non è possibile alcun rimborso dell'ordine**.
>

**Questa guida ti mostra come attivare un certificato SSL Sectigo DV sul tuo hosting Web OVHcloud.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).
- Ordinare o disporre di un [hosting condiviso OVHcloud](/links/web/hosting).
- Ordinare o disporre di un [dominio](/links/web/domains) e disporre dei diritti esclusivi sul suo utilizzo. Il dominio non deve essere già associato a un certificato SSL.

## Procedura

> [!warning]
>
> I certificati SSL Sectigo DV offerti da OVHcloud sono validi solo in uno dei due casi seguenti:
>
> - Un solo dominio + il suo sottodominio in "www" (esempio: `domain.tld` e `wwww.domain.tld`).
> - Un solo sottodominio (esempio: `sub.domain.tld`).
>
> Se sul tuo hosting Web sono dichiarati altri domini o sottodomini e vuoi anche attribuirgli un certificato SSL, puoi:
>
> - [Attivare un certificato SSL gratuito Let's Encrypt](/pages/web_cloud/web_hosting/ssl_letsencrypt) (se non è già l’opzione predefinita).
> - Attivare uno o più certificati SSL a pagamento ([Sectigo DV](/pages/web_cloud/web_hosting/ssl_dv) o [Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev)).
> - [Installa il tuo certificato SSL](/pages/web_cloud/web_hosting/ssl_custom).

**Prima di ordinare un certificato SSL Sectigo DV su un hosting Web**, assicurati che **il dominio/sottodominio** interessato dal certificato SSL:

- punti verso l’indirizzo IP del tuo hosting Web.
- è dichiarato multisito sul tuo hosting Web.
- non dispone già di un certificato SSL attivo.

> [!primary]
>
> Se vuoi sottoscrivere un certificato SSL Sectigo DV per un dominio (ad esempio: `domain.tld`), verifica che anche il suo sottodominio in "www" (ad esempio: `wwww.domain.tld`) punti verso l’indirizzo IP del tuo hosting Web e sia correttamente dichiarato come multisito.
>
> Se ordini il certificato SSL Sectigo DV ma non ne sei sicuro, è necessario apportare le dovute correzioni. In questo caso, è necessario eliminare il certificato SSL Sectigo DV precedentemente sottoscritto **senza ottenere alcun rimborso** e ordinarne uno nuovo. Il nuovo certificato SSL Sectigo DV deve includere sia il dominio `domain.tld` che il sottodominio "www" `www.domain.tld`.
>
> Ti ricordiamo che se sottoscrivi un certificato SSL Sectigo DV direttamente per un sottodominio (esempio: `sub.domain.tld`), la situazione non interessa te.

Per maggiori informazioni, consulta le nostre guide:

- [Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Hosting Web - Lista degli indirizzi IP per cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
- [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
- [Hosting Web - Gestire un certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting), parte **Disattivare un certificato SSL su un hosting Web**.

### Ordina il certificato SSL Sectigo DV

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **5** passi:

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
>> Una volta visualizzato il contenuto della scheda, clicca sul pulsante `Ordinare un certificato SSL Sectigo`{.action}.
>>
>> ![SSL Sectigo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate.png){.thumbnail}
>>
> **Passaggio 5**
>>
>> Nella nuova finestra, seleziona il dominio o sottodominio con il menu a tendina e clicca su `Confermare`{.action} per essere reindirizzato al buono d’ordine del tuo certificato SSL Sectigo DV.
>>
>> ![SSL Sectigo selection du domaine](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
>> Prosegui con l’ordine fino al saldo dell’ordine per confermare la richiesta di creazione del certificato SSL Sectigo DV per il tuo dominio e/o sottodominio sul tuo hosting Web.

> [!alert]
>
> Una volta convalidato l'ordine, la richiesta di certificato SSL Sectigo DV viene inviata all'autorità di certificazione Sectigo.
>
> Da questo momento, SSL Sectigo DV non può essere rimborsato.

L'installazione del certificato SSL Sectigo DV può richiedere fino a **24** ore.

### Verifica l'attivazione del certificato SSL Sectigo DV

Per verificare che l'installazione sia stata completata, clicca sulle schede qui sotto per visualizzare in sequenza ogni **4** step:

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
>> Una volta visualizzato il contenuto della scheda, verifica che ogni dominio e/o sottodominio interessato sia presente nella tabella con il tipo di certificato SSL `Sectigo`.
>>
>> ![Tabella di gestione dei certificati SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/tab.png){.thumbnail}

A questo punto il tuo certificato SSL Sectigo DV è installato e attivo. Da questo momento è possibile utilizzarlo con il proprio sito Web, passando, ad esempio, il [sito Web in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Per saperne di più <a name="go-further"></a>

[Hosting Web - Gestire un certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Hosting Web - Modificare il proprio sito Web in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Errori comuni associati alla protezione del sito Web con il certificato SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).