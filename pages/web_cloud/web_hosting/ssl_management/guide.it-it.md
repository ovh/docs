---
title: "Hosting Web - Nuova gestione dei certificati SSL"
excerpt: "Scopri come gestire un certificato SSL su un hosting Web OVHcloud grazie alla nostra nuova interfaccia di gestione"
updated: 2025-10-01
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

I certificati Secure Socket Layer (SSL) permettono di cifrare gli scambi effettuati da o verso il sito Web. In questo modo si evita che un utente o un robot malevolo "ascolti" chiaramente le richieste inviate dal sito Web.

OVHcloud propone diversi tipi di certificati SSL sulle nostre soluzioni di [hosting condiviso OVHcloud](/links/web/hosting). Per maggiori informazioni, consulta questa guida. I certificati SSL sono indispensabili per la sicurezza del sito Web.

Esistono tre tipi di certificati SSL:

- Domain Validation (DV).
- Organization validation (OV).
- Extended Validation (EV).

I livelli di crittografia SSL sono identici tra questi tre tipi di certificati.

La principale differenza risiede nel livello di controlli che saranno effettuati dall'Autorità di Certificazione (AC) che rilascia il certificato SSL e ne attesta l'autenticità.

Per rendere il sito accessibile in HTTPS è necessario disporre di un certificato SSL.

**Questa quiga ti mostra come gestire un certificato SSL su un hosting Web OVHcloud grazie alla nostra nuova interfaccia di gestione.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).
- Disporre di un piano di [hosting Web OVHcloud](/links/web/hosting) attivo.
- Aver registrato almeno un [dominio](/links/web/domains).

> [!warning]
>
> **Prima di proseguire**, verifica che ogni **dominio e/o sottodominio** interessato dal tuo futuro certificato SSL:
>
> - Punta verso l’indirizzo IP del tuo hosting Web.
> - Dichiarato in multisito sul tuo hosting Web.
>
> In caso di dubbi, consulta queste guide:
>
> - [Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)
> - [Lista degli indirizzi IP di cluster e hosting Web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
> - [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

## Procedura

### Accedere alla gestione dei certificati SSL dall’hosting Web

> [!primary]
>
> **Informazioni sulla migrazione alla nuova interfaccia di gestione dei certificati SSL:**
>
> La continuazione di questa guida è rivolta ai clienti i cui servizi di hosting Web sono già migrati verso la nuova interfaccia di gestione dei certificati SSL.
> Per sapere se la migrazione è stata effettuata, accedi al tuo hosting Web dallo Spazio Cliente OVHcloud e verifica la presenza della scheda `Certificati SSL`.
> Se la scheda `Certificati SSL` non è presente, il servizio non è stato ancora migrato sulla nuova interfaccia di gestione. In questo caso, consulta direttamente [questa guida](/pages/web_cloud/web_hosting/ssl_on_webhosting) per gestire il tuo certificato SSL.
>
> Per motivi tecnici, non tutti i servizi di hosting Web dei nostri clienti possono essere migrati in una sola volta. Il trasferimento viene quindi effettuato in poche settimane e automaticamente, senza alcuna conseguenza sul funzionamento dei servizi di hosting Web e senza alcun intervento o azione da parte tua.
>
> Tutti i servizi di hosting Web funzioneranno col nuovo sistema di gestione dei certificati SSL.

Per accedere alla gestione dei certificati SSL dall’hosting Web, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi:

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

Da questa posizione è possibile gestire integralmente i certificati SSL per tutti i domini e sottodomini associati all’hosting Web.

### Attivare un certificato SSL sul proprio hosting Web <a name="ssl-enable"></a>

OVHcloud propone 4 soluzioni per attivare o installare un certificato SSL su un hosting Web.

**Fare clic sul certificato SSL desiderato di seguito per visualizzarne la spiegazione.**

/// details | Attiva il certificato SSL gratuito Let's Encrypt (DV)

Il certificato SSL gratuito Let's Encrypt (DV) può includere fino a **99** domini e sottodomini dichiarati su un hosting Web.

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

> [!success]
>
> Un certificato SSL Let's Encrypt viene generato automaticamente per ogni dominio e sottodominio dichiarato di recente come multisito sul tuo hosting Web. Verifica che il tuo dominio e/o sottodominio compaia nella tabella in fondo alla pagina `Certificati SSL`{.action}.

///

/// details | Attiva il certificato SSL Sectigo (DV) a pagamento

Il certificato SSL a pagamento Sectigo (DV) è valido per un solo dominio e il suo sottodominio in "www" (ad esempio: `domain.tld` e `wwww.domain.tld`) o **solo** un sottodominio (ad esempio: `sub.domain.tld`).

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
> Da questo momento non è possibile rimborsare l'SSL Sectigo DV.

///

/// details | Attiva il certificato SSL Sectigo (EV) a pagamento

Il certificato SSL a pagamento Sectigo (EV) è valido per un solo dominio e il suo sottodominio in "www" (ad esempio: `domain.tld` e `wwww.domain.tld`) o **solo** un sottodominio (ad esempio: `sub.domain.tld`).

> [!warning]
>
> Il certificato SSL a pagamento Sectigo (EV) prevede condizioni di ammissibilità specifiche:
>
> - Ordinare o disporre di un [dominio](/links/web/domains) e disporre dei diritti esclusivi sull'utilizzo. Il dominio non deve essere già associato a un certificato SSL.
> - essere un'organizzazione (impresa, agenzia governativa, etc.) registrata presso un registro ufficiale.
> - Disporre dell'autorizzazione della tua organizzazione per ordinare un certificato SSL Sectigo EV.
> - Essere in grado di giustificare con esattezza le informazioni e le coordinate relative alla tua organizzazione.
>
> Per verificare se hai diritto alla sottoscrizione di un certificato SSL Sectigo EV, clicca su [questo link](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}.

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **6** passi:

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
>> Nella nuova finestra, seleziona il dominio o sottodominio con il menu a tendina e clicca su `Confermare`{.action} per essere reindirizzato al buono d’ordine del tuo certificato SSL Sectigo EV.
>>
>> ![SSL Sectigo selection du domaine](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
> **Passaggio 6**
>>
>> Seleziona il **Certificato SSL Sectigo EV** una volta arrivato nel tunnel d'ordine, poi prosegui con l'ordine.
>>
>> Inserisci con esattezza le informazioni richieste da **Sectigo** prima di ricevere il certificato SSL Sectigo EV. 
>>
>> ![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}
>>
>> Clicca su `Continua`{.action} una volta **tutti gli elementi** inseriti correttamente.
>>
>> Continua l'ordine fino al pagamento per confermare la richiesta di creazione del certificato SSL.

> [!alert]
>
> Una volta convalidato l'ordine, la domanda di certificato SSL Sectigo EV viene inviata all'autorità di certificazione **Sectigo**.
>
> Assicurati obbligatoriamente di poter sottoscrivere un certificato SSL Sectigo EV **prima di pagare il certificato**.
>
> Infatti, non sarà possibile alcun rimborso dell'SSL Sectigo EV, **anche se la procedura di verifica presso Sectigo non avrà esito positivo**.

///

/// details | Installare un certificato SSL personalizzato

Questa soluzione ti permette di installare il tuo certificato SSL per il tuo dominio, se nessuna delle 3 soluzioni precedenti corrisponde alle tue necessità e desideri utilizzare un certificato SSL di cui disponi già.

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
>> Quando il contenuto della scheda appare, clicca sul pulsante `Importazione del tuo certificato SSL`{.action}.
>>
>> ![SSL personalizzato](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate.png){.thumbnail}
>>
> **Passaggio 5**
>>
>> Verrà visualizzata la seguente finestra con 3 moduli da completare:
>>
>> ![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window.png){.thumbnail}
>>
>> - `Copia il contenuto del tuo certificato (solo RSA)`{.action}: inserisci il contenuto del file **certificate.crt** rilasciato dal tuo provider SSL, compresi i termini `-----BEGIN CERTIFICATE-----` e `-----END CERTIFICATE-----` (o equivalenti). La crittografia RSA corrisponde alla crittografia standard dei certificati SSL.
>> - `Copia il contenuto della tua chiave privata (non cifrata)`{.action} : inserisci il contenuto del file **private.key** rilasciato dal tuo provider SSL, compresi i termini `-----BEGIN RSA PRIVATE KEY-----` e `-----END RSA PRIVATE KEY-----` (o equivalenti). *non cifrata* significa che la chiave privata non deve essere protetta da password o passphrase. In caso contrario, l'installazione del certificato avrà esito negativo.
>> - `Copia il contenuto della tua certificate chain`{.action} : inserisci il contenuto del file **ca_bundle.crt** rilasciato dal tuo provider SSL, compresi i termini `-----BEGIN CERTIFICATE-----` e `-----END CERTIFICATE-----` (o equivalenti).
>>
>> ![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window-completed.png){.thumbnail}
>>
>> Una volta completati i 3 moduli, clicca su `Conferma`{.action} per completare l’importazione del certificato SSL personalizzato sul tuo hosting Web.

> [!success]
>
> Per trovare le informazioni da inserire nei 3 campi, consulta gli step **1** e **2** della nostra guida "[Hosting Web - Installare un certificato SSL personalizzato](/pages/web_cloud/web_hosting/ssl_custom)".

///

### Disattivare un certificato SSL su un hosting Web <a name="delete-ssl"></a>

> [!warning]
>
> **Prima di continuare**, assicurati che la rimozione del certificato SSL non abbia impatto sulla raggiungibilità dei tuoi siti Web. In questo caso, gli utenti visualizzeranno un errore di sicurezza quando tenteranno di accedere al sito Web in HTTPS.

Queste operazioni sono relative ai parametri dei tuoi siti Web, per cui OVHcloud non fornisce assistenza. In caso di difficoltà o dubbi, ti consigliamo di contattare un esperto del settore. OVHcloud non sarà in grado di fornirti assistenza.

Per rimuovere il certificato SSL installato sull’hosting Web, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **5** passi:

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
>> Nella tabella in fondo alla nuova pagina, clicca sul pulsante `⁝`{.action}, a destra della riga corrispondente al dominio in questione e poi clicca su `Disattivare SSL`{.action}.
>>
>> ![Disattivare SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/disable-ssl.png){.thumbnail}
>>
> **Passaggio 5**
>>
>> Nella nuova finestra, conferma la disattivazione cliccando su `Confermare`{.action}.
>>
>> ![Elimina SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/ssl-deletion.png){.thumbnail}

L’operazione diventerà effettiva entro poche ore.

> [!warning]
>
> L'eliminazione di un certificato SSL a pagamento **Sectigo** (DV o EV) è definitiva, anche se il certificato non era ancora scaduto. Non verrà effettuato alcun rimborso proporzionale al tempo restante. Per reinstallare un certificato SSL **Sectigo** (DV o EV), è necessario effettuare un nuovo ordine e pagare per l'intero importo del nuovo certificato SSL sottoscritto.

## Per saperne di più <a name="go-further"></a>

[Hosting Web - Passare il proprio sito Web in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Errori comuni associati alla protezione del sito Web con il certificato SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).