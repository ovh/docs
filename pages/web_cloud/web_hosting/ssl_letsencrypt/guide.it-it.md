--- 
title: "Hosting Web - Attivare un certificato SSL gratuito Let's Encrypt"
excerpt: "Scopri come attivare o rigenerare un certificato SSL gratuito Let's Encrypt sul tuo hosting Web"
updated: 2024-10-21
--- 

## Obiettivo

I certificati Secure Socket Layer (SSL) permettono di cifrare gli scambi effettuati da o verso il sito Web. In questo modo si evita che una persona o un robot malevolo "ascolti" chiaramente le richieste inviate o inviate con il sito Web.

OVHcloud propone diversi tipi di certificati SSL sulle nostre soluzioni di [hosting condiviso OVHcloud](/links/web/hosting). Sono presentati nella nostra guida "[Hosting Web - Gestire un certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)". I certificati SSL sono indispensabili per la sicurezza del sito Web.

Esistono tre tipi di certificati SSL:

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

I livelli di crittografia SSL sono identici tra questi tre tipi di certificati.

La principale differenza risiede nel livello di controlli che saranno effettuati dall'Autorità di Certificazione (CA) che rilascia il certificato SSL e ne attesta l'autenticità.

Let's Encrypt è un'autorità di certificazione gratuita, automatizzata, aperta e no-profit. Per maggiori informazioni, consulta la pagina <https://letsencrypt.org/fr/about/>.

**Questa guida ti mostra come attivare o rigenerare un certificato SSL gratuito Let's Encrypt su un hosting Web OVHcloud.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).
- Ordinare o disporre di un [hosting condiviso OVHcloud](/links/web/hosting) sul quale non è già installato un certificato SSL.
- Ordinare o disporre di un [dominio](/links/web/domains) e disporre dei diritti esclusivi sul suo utilizzo. Il dominio o i domini/sottodomini non devono essere già associati a un certificato SSL.

## In pratica

### 1. Preattribuire il futuro certificato SSL Let's Encrypt al(i) dominio(i)/sottodominio(i) <a name="ssl-multisito"></a>

A differenza di altri certificati, il [certificato SSL gratuito Let's Encrypt](/links/web/hosting-options-ssl) può essere attivato per più domini o sottodomini contemporaneamente. Nel limite di **99** domini o sottodomini per ogni hosting Web.

Di conseguenza, prima di installare il certificato SSL Let's Encrypt, è necessario preparare tutti i domini / sottodomini che usufruiranno di questo certificato SSL.

Per effettuare questa operazione, esegui le operazioni seguenti:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Hosting`{.action}.
4. Seleziona il tuo hosting Web.
5. Clicca sulla scheda `Multisito`{.action}.

Visualizzi una tabella con tutti i domini e sottodomini registrati su un hosting Web. La colonna "SSL" indica lo stato di attivazione dell'SSL sui tuoi domini/sottodomini dichiarati in multisito.

![manage SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisito/ssls.png){.thumbnail}

In questa colonna, e in generale, possono essere visualizzati tre stati:

|Stato|Descrizione|
|---|---| 
|Attivato|Per questa voce multisito è già stato attivato un certificato SSL. In questo caso, [verifica che il certificato SSL sia un certificato SSL Let's Encrypt](#check-ssl). Se sì, consulta prima il [caso particolare](#regenerate-ssl) che si trova più in basso in questa guida. In caso contrario, consulta la nostra guida "[Hosting Web - Gestire un certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)" per eliminare il certificato SSL corrente (gratuito o a pagamento) e sostituirlo con un certificato SSL Let's Encrypt.|
|Da generare|Per questa voce multisito è stato attivato un certificato SSL ma tecnicamente non è ancora abilitato. Per farlo, è necessario [rigenerare il certificato SSL Let's Encrypt](#regenerate-ssl) in modo che includa i nuovi domini/sottodomini dichiarati in multisito e con lo stato `Da generare` presente.|
|Disattivato|Nessun certificato SSL attivato per questa voce multisito. Per attivarla, segui i passaggi qui sotto.|

> [!primary]
>
> Se uno dei tuoi domini/sottodomini non è stato ancora dichiarato sul tuo hosting Web, consulta le guide seguenti per risolvere la situazione:
>
> - [Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisiti_configurare_multisito);
> - [Elenco degli indirizzi IP di cluster e hosting Web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
> - [Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Sempre nella scheda `Multisito`{.action} e per pre-attribuire l’opzione SSL Let’s Encrypt a un dominio/sottodominio dichiarato multisito sul tuo hosting Web, esegui queste operazioni:

1. Nella tabella contenente tutti i domini/sottodomini già dichiarati in multisiti sul tuo hosting Web, clicca sul pulsante `...`{.action} a destra della riga del nome di dominio/sottodominio interessato.
2. Clicca su `Modifica il dominio`{.action}.
3. Nella nuova finestra, seleziona la voce `SSL`{.action} e clicca su `Avanti`{.action}.
4. Visualizzi una sintesi della configurazione del tuo dominio/sottodominio. Clicca su `Conferma`{.action} per applicare la modifica richiesta per questo record multisito.

Una volta convalidata la modifica, lo stato nella colonna SSL della voce multisito passerà da `Disattivato` a `Da generare` in pochi secondi. Se disponi di altri domini o sottodomini interessati tra i record multisito del tuo hosting Web, ripeti l’operazione tutte le volte che vuoi.

### 2. Attivare un certificato SSL Let's Encrypt <a name="enable-ssl"></a>

Prima di procedere con questa configurazione, assicurati che lo [step precedente](#ssl-multisite) sia stato effettuato correttamente. Nella scheda `Multisito`{.action} dell’hosting Web, almeno un dominio/sottodominio deve avere l’opzione SSL con stato `Attivato` o `Da generare` per installare il certificato SSL Let’s Encrypt.

> [!warning]
>
> **Prima di proseguire**, verifica che **l'insieme dei domini e/o sottodomini** interessati dal tuo futuro certificato SSL Let's Encrypt:
>
> - puntano verso l’indirizzo IP del tuo hosting Web;
> - sono dichiarati in multisito sul tuo hosting Web.
>
> Per maggiori informazioni, consulta le nostre guide:
>
> - [Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite);
> - [Lista degli indirizzi IP di cluster e hosting Web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
> - [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Per attivare il certificato SSL Let's Encrypt, esegui queste operazioni:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Hosting`{.action}.
4. Seleziona il tuo hosting Web.
5. Nella nuova pagina, rimani nella scheda `Informazioni generali`{.action}.
6. Posizionati nel riquadro intitolato `Configurazione`.
7. A destra della voce `Certificato SSL`, clicca sul pulsante `...`{.action} e poi su `Ordina un certificato SSL`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

Nella nuova finestra, seleziona `Certificato gratuito (Let's Encrypt)`{.action} tra le opzioni disponibili e clicca su `Continua`{.action} per confermare la richiesta di attivazione dell’SSL.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-le.png){.thumbnail}

L’implementazione del certificato SSL Let’s Encrypt può richiedere diverse ore.

<a name="check-ssl"></a>

Per verificare che l'installazione sia stata completata, eseguire le operazioni seguenti:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Hosting`{.action}.
4. Seleziona il tuo hosting Web.
5. Nella nuova pagina, rimani nella scheda `Informazioni generali`{.action}.
6. Posizionati nel riquadro intitolato `Configurazione`.

Se tutto è terminato, sotto la voce `Certificato SSL` è necessario trovare un valore equivalente: `Sì - LETSENCRYPT - DV`.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/tab-ssl-le.png){.thumbnail}

Il tuo certificato SSL Let's Encrypt è installato e attivo. Da questo momento è possibile utilizzarlo con i nuovi siti Web, passando, ad esempio, i nuovi [siti Web in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

### Caso particolare: Rigenerare il certificato SSL Let's Encrypt su un hosting Web <a name="regenerate-ssl"></a>

Durante l’utilizzo dell’hosting Web, potrebbe essere necessario aggiungere domini o sottodomini multisito ai quali attivare l’opzione SSL.

Anche se hai già attivato un certificato SSL Let's Encrypt per alcuni dei tuoi domini/sottodomini, puoi sempre aggiungerne di nuovi (nel limite dei **99** domini/sottodomini precisati più sopra in questa guida).

A tale scopo, eseguire **nell'ordine** le operazioni seguenti:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Preattribuire il certificato SSL Let's Encrypt ai nuovi domini/sottodomini come specificato nella [prima parte](#ssl-multisite) di questa guida.
3. Nella riga in alto dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
4. Nella colonna di sinistra, clicca sul menu a tendina `Hosting`{.action}.
5. Seleziona il tuo hosting Web.
6. Nella nuova pagina, rimani nella scheda `Informazioni generali`{.action}.
7. Posizionati nel riquadro intitolato `Configurazione`.
8. A destra della voce `Certificato SSL`, clicca sul pulsante `...`{.action} e poi su `Rigenera il certificato SSL`{.action}.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/regenerate-ssl-certificate.png){.thumbnail}

Leggi le informazioni mostrate nella nuova finestra e clicca sul pulsante `Conferma`{.action}. e attendi il tempo necessario alla rigenerazione del certificato.

Questa operazione potrebbe richiedere qualche ora.

> [!warning]
>
> Let's Encrypt, l'autorità che fornisce il certificato SSL, [limita a cinque il numero di rigenerazioni possibili alla settimana](https://letsencrypt.org/docs/rate-limits/){.external}. Pertanto, prestare attenzione alle diverse rigenerazioni che si possono eseguire a breve termine in modo da non essere temporaneamente bloccati.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-regeneration.png){.thumbnail}

Il tuo certificato SSL Let's Encrypt è stato rigenerato ed è attivo. Da questo momento è possibile utilizzarlo con i nuovi siti Web, passando, ad esempio, i nuovi [siti Web in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Per saperne di più

[Hosting Web - Gestire un certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Hosting Web - Modificare il proprio sito Web in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Errori comuni associati alla protezione del sito Web con il certificato SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).