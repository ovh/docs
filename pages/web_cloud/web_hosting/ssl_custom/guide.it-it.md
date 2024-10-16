---
title: "Hosting Web - Installa un certificato SSL personalizzato"
excerpt: "Scopri come importare e installare un certificato SSL personalizzato sul tuo hosting Web OVHcloud"
updated: 2024-10-15
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

I certificati Secure Socket Layer (SSL) permettono di cifrare gli scambi effettuati da o verso il sito Web. In questo modo si evita che una persona o un robot malevolo "ascolti" chiaramente le richieste inviate o inviate con il sito Web.

OVHcloud propone diversi tipi di certificati SSL sulle offerte di [hosting condiviso OVHcloud](/links/web/hosting). Sono presentati nella nostra guida "[Hosting Web - Gestire un certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)". I certificati SSL sono indispensabili per la sicurezza del sito Web.

È possibile che, in base alla situazione, si desideri installare sull’hosting Web un certificato SSL diverso da quelli proposti da OVHcloud.

**Questa guida ti mostra come importare e installare un certificato SSL personalizzato su un hosting Web OVHcloud.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).
- Ordinare o disporre di un [hosting condiviso OVHcloud](/links/web/hosting) sul quale non è già installato un certificato SSL.
- Ordinare o disporre di un [dominio](/links/web/domains) e disporre dei diritti esclusivi sul suo utilizzo. Il dominio non deve essere già associato a un certificato SSL.
- Avere accesso in SSH (ad esempio tramite un terminale da computer) con OpenSSL installato.

## Procedura

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. In caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner). OVHcloud non sarà infatti in grado di fornirti assistenza per **l'installazione o la sottoscrizione di un certificato SSL diverso da [quelli proposti da OVHcloud](/links/web/hosting-options-ssl)**. Per maggiori informazioni consulta la sezione "[Per saperne di più](#go-further)" di questa guida.
>

### Step 1 - Ottieni un Certificate Signing Request (CSR) SSL <a name="step-1"></a>

> [!primary]
>
> Questo step è opzionale se hai già generato e recuperato il certificato SSL presso il tuo provider SSL o se quest'ultimo propone la generazione del CSR durante l'ordine del certificato SSL. In tal caso, passa direttamente allo [step 2](#step-2).

#### 1.1 - Genera la chiave privata e la CSR in SSH <a name="step-1.1"></a>

Apri un terminale per accedere in SSH. Questo strumento è installato di default su macOS o Linux. Un ambiente Windows richiede l'installazione di un software come PuTTY o l'aggiunta della funzionalità "OpenSSH". Questa procedura è specifica al sistema operativo utilizzato e non può quindi essere descritta in questa guida.

Nel terminale, esegui questo comando:

```ssh
openssl req -nodes -newkey rsa:2048 -sha256 -keyout my_private.key -out your_file_name.csr -utf8
```

Sostituire `my_private` e `your_file_name` con i nomi di file desiderati.

Una volta avviato l'ordine, il terminale ti chiederà ognuna delle seguenti informazioni (per te, la tua azienda o la tua associazione). Una volta ricevuta la risposta alla domanda, clicca su `INVIO`{.action} sulla tastiera per visualizzare la seguente domanda:

- `Country Name (2 letter code) [AU]`: inserisci in maiuscolo il **Country Code** del tuo paese. Se necessario, visualizza la lista di tutti i **Country Codes** [qui](https://www.iban.com/country-codes){.external}.
- `State or Province Name (full name) [Some-State]`: immettere il nome della propria regione (o Stato, ad esempio, se ci si trova negli Stati Uniti) in maiuscolo.
- `Locality Name (eg, city) []`: inserire il nome della città in maiuscolo.
- `Organization Name (eg, company) [Internet Widgits Pty Ltd]`: inserisci il nome della tua organizzazione, società o associazione. **Se sei un privato, non rispondere a questa domanda e clicca direttamente su `INVIO`{.action} sulla tastiera per visualizzare la domanda successiva**.
- `Organizational Unit Name (eg, section) []`: inserire il nome del reparto o del reparto dell'organizzazione, dell'azienda o dell'associazione. **Se sei un privato, non rispondere a questa domanda e clicca direttamente su `INVIO`{.action} sulla tastiera per visualizzare la domanda successiva**.
- `Common Name (e.g. server FQDN or YOUR name) []`: inserisci il dominio (ad esempio, `domain.tld`) o il sottodominio (ad esempio, `sub.domain.tld`) per il quale vuoi ottenere un certificato SSL. **Qui può essere inserito un solo** nome di dominio o sottodominio. In base al provider SSL, è necessario indicare esclusivamente il dominio (esempio: `domain.tld`) o il sottodominio "www" (esempio: `www.domain.tld`). Contatta il tuo provider SSL.
- `Email Address []`: inserisci il tuo indirizzo email.

Le domande poste successivamente sono facoltative e riguardano principalmente gli utenti esperti. In caso di dubbi, ti consigliamo di passarli premendo il tasto `INVIO`{.action} sulla tastiera fino a quando il terminale non ti farà più domande.

- `A challenge password []`: per gli utenti esperti, immettere una password segreta che sarà utilizzata tra voi e il provider di certificati SSL. Ti ricordiamo che, per essere aggiunti a un hosting condiviso OVHcloud, la CSR e la chiave privata non devono essere protette da password.
- `An optional company name []`: per gli utenti esperti, è possibile inserire un nome diverso per la propria organizzazione, società o associazione.

#### 1.2 - Recupera la chiave privata in SSH

Per recuperare la chiave privata generata in precedenza e sempre dal terminale, esegui il comando:

```ssh
cat my_private.key
```

Sostituisci il termine `my_private` con il nome di file che hai scelto in precedenza nello [step 1.1](#step-1.1) di questa guida.

La chiave privata viene visualizzata nel terminale in questo modo:

```ssh
-----BEGIN PRIVATE KEY-----
XXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXX The Private Key XXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXX
------END PRIVATE KEY------
```

Apri un programma di videoscrittura (blocco note, LibreOffice, etc.) e poi `copia/incolla`{.action} l’intera chiave privata, compresi i termini `-----BEGIN PRIVATE KEY-----` e `-----END PRIVATE KEY-----`.

Salva questo file è importante conservarlo per il resto di questa guida se il tuo provider SSL lo richiede al momento del tuo ordine.

#### 1.3 - Recuperare la CSR in SSH

Per recuperare la CSR generata in precedenza e sempre dal terminale, esegui questo comando:

```ssh
cat your_file_name.csr
```

Sostituisci il termine `your_file_name` con il nome di file che hai scelto precedentemente durante il [step 1.1](#step-1.1) di questa guida.

La CSR viene visualizzata nel terminale in questo modo:

```ssh
-----BEGIN CERTIFICATE REQUEST-----
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXX The CSR XXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
------END CERTIFICATE REQUEST------
```

Apri un programma di videoscrittura e poi `copia/incolla`{.action} l’intera CSR, compresi i termini `-----BEGIN CERTIFICATE REQUEST-----` e `-----END CERTIFICATE REQUEST-----`.

Salva questo file è importante conservarlo per il resto di questa guida se il tuo provider SSL lo richiede al momento del tuo ordine.

> [!warning]
>
> Il file contenente la chiave privata e il file contenente la CSR sono collegati e non intercambiabili. Se sono state generate più chiavi private o più CSR, assicurarsi di non mescolare le diverse chiavi private e le diverse CSR.

### Step 2 - Ordina il certificato SSL presso il tuo provider SSL <a name="step-2"></a>

> [!primary]
>
> Questo step è opzionale se hai già generato e recuperato il certificato SSL presso il tuo provider SSL. In tal caso, passa direttamente allo [step 3](#step-3).

Ordina il certificato SSL presso il tuo provider SSL. Se il cliente ne ha bisogno, trasmetti al cliente il contenuto della CSR generata nello [step 1](#step-1) di questa guida. Se ti chiede di inserire la chiave privata generata nello [step 1](#step-1), trasmettile.

A seguito dell'ordine, il provider di certificati SSL deve fornirti 3 file:

- il file `certificate.crt`;
- il file `private.key`;
- il file `ca_bundle.crt`.

Sarà il contenuto di ciascuno dei suoi file che sarà necessario per realizzare lo [step 3](#step-3) di questa guida.

<a name="3files"></a>

> [!warning]
>
> Alcuni provider SSL rilasciano il contenuto dei file `certificate.crt` e `ca_bundle.crt` in un unico file. È necessario separare il contenuto di questo file per riformare i file `certificate.crt` e `ca_bundle.crt`. Prima di eseguire lo [step 3](#step-3) di questa guida.
>
> Altri provider SSL rilasciano il file `ca_bundle.crt` in più parti/file. Dovrai concatenare il contenuto di questi file per riformare un solo file `ca_bundle.crt` e seguire così lo [step 3](#step-3) di questa guida.
>
> Se sei interessato e riscontri difficoltà nello svolgere queste operazioni, contatta il tuo provider SSL. Ti ricordiamo che tutti i contenuti consegnati devono essere suddivisi in soli 3 file (`certificate.crt`, `ca_bundle.crt` e `private.key`) per poter procedere all’installazione del certificato SSL.

### Step 3 - Installa il certificato SSL personalizzato sul tuo hosting Web <a name="step-3"></a>

Se in questo step inizi direttamente la lettura di questa guida perché disponi già di un certificato SSL esterno ordinato da un provider SSL, verifica di disporre esclusivamente dei 3 file seguenti: `certificate.crt`, `private.key` e `ca_bundle.crt`. In caso contrario, consulta le informazioni [sopra](#3files).

**Prima di completare l'installazione del certificato SSL sul tuo hosting Web**, verifica che **l'insieme dei domini e/o sottodomini** interessati dal tuo certificato SSL:

- puntino verso l’indirizzo IP del tuo hosting Web;
- sono dichiarati in multisito sul tuo hosting Web;

Verificare inoltre quanto segue:

- La voce `SSL` non deve essere selezionata quando si aggiunge in multisito un dominio o sottodominio associato al tuo certificato SSL esterno.
- Lo stato `Da generare` o `Attivato` non deve essere già presente per ciascuno dei domini o sottodomini interessati dal certificato SSL esterno.

In caso di necessità e per verificarlo, consulta le nostre guide "[Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)" e "[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

Una volta rispettati tutti questi prerequisiti, puoi iniziare a finalizzare l’installazione del tuo certificato SSL personalizzato sul tuo hosting Web.

Per effettuare questa operazione, esegui le operazioni seguenti:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Hosting`{.action}.
4. Seleziona il tuo hosting Web.
5. Nella nuova pagina, rimani nella scheda `Informazioni generali`{.action}.
6. Posizionati nel riquadro intitolato `Configurazione`.
7. A destra della voce `Certificato SSL`, clicca sul pulsante `...`{.action} e poi su `Ordina un certificato SSL`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

Nella nuova finestra, seleziona `Importa il tuo certificato SSL`{.action} nella lista delle opzioni disponibili e clicca su `Continua`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-custom.png){.thumbnail}

Verrà visualizzata la seguente finestra con 3 moduli da completare:

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-2-custom-empty.png){.thumbnail}

- `Copia il contenuto del tuo certificato (solo RSA)`{.action}: inserisci il contenuto del file **certificate.crt** rilasciato dal tuo provider SSL, compresi i termini `-----BEGIN CERTIFICATE-----` e `-----END CERTIFICATE-----` (o equivalenti). La crittografia RSA corrisponde alla crittografia standard dei certificati SSL.
- `Copia il contenuto della tua chiave privata (non cifrata)`{.action} : inserisci il contenuto del file **private.key** rilasciato dal tuo provider SSL, compresi i termini `-----BEGIN RSA PRIVATE KEY-----` e `-----END RSA PRIVATE KEY-----` (o equivalenti). *non cifrata* significa che la chiave privata non deve essere protetta da password o passphrase. In caso contrario, l'installazione del certificato avrà esito negativo.
- `Copia il contenuto della tua certificate chain`{.action} : inserisci il contenuto del file **ca_bundle.crt** rilasciato dal tuo provider SSL, compresi i termini `-----BEGIN CERTIFICATE-----` e `-----END CERTIFICATE-----` (o equivalenti).

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-2-custom.png){.thumbnail}

Una volta completati i 3 moduli, clicca su `Conferma`{.action} per completare l’importazione del certificato SSL personalizzato sul tuo hosting Web.

Se il certificato SSL è stato generato correttamente dal provider SSL e i prerequisiti sono rispettati, apparirà un messaggio che indica che l’attivazione del certificato SSL sull’hosting Web è in corso.

> [!warning]
>
> Se riscontri l’errore `error check SAN from certificate`, ciò è dovuto ad almeno una delle due situazioni seguenti:
>
- almeno un dominio/sottodominio dichiarato nel tuo certificato SSL non punta verso l'indirizzo IP del tuo hosting Web;
- nella scheda `Multisito` dell’hosting Web, almeno un dominio/sottodominio dichiarato nel tuo certificato SSL non è dichiarato.
>
> Consulta le nostre guide "[Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)" e "[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" per risolvere la situazione.

L'installazione richiede alcuni minuti.

Per verificare che l'installazione sia stata completata, eseguire le operazioni seguenti:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Hosting`{.action}.
4. Seleziona il tuo hosting Web.
5. Nella nuova pagina, rimani nella scheda `Informazioni generali`{.action}.
6. Posizionati nel riquadro intitolato `Configurazione`.

Se tutto è terminato, sotto la voce `Certificato SSL` è necessario trovare un valore equivalente: `Sì - CUSTOM - CUSTOM`.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-certificate-custom-enable.png){.thumbnail}

A questo punto il tuo certificato SSL personalizzato è installato ed è attivo. Da questo momento è possibile utilizzarlo con il proprio sito Web, passando, ad esempio, il [sito Web in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Per saperne di più <a name="go-further"></a>

[Hosting Web - Gestire un certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Hosting Web - Modificare il proprio sito Web in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Errori comuni associati alla protezione del sito Web con il certificato SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).