---
title: 'Migrare un sito e un servizio di posta in OVHcloud'
slug: migrare-un-sito-in-ovh
excerpt: "Come migrare il tuo sito Web, le tue email e il tuo dominio in OVHcloud senza interruzione di servizi"
section: 'Per iniziare'
order: 08
---

**Ultimo aggiornamento: 24/11/2022**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

Questa guida ti mostra le operazioni da effettuare per migrare tutti i tuoi siti Web, domini e indirizzi email in OVHcloud, senza interruzione di servizi.

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore ](https://partner.ovhcloud.com/it/). OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

## Prerequisiti

- Avere accesso alla gestione del dominio del tuo sito Web (quest'ultimo deve essere attivo da oltre 60 giorni)
- Avere accesso alla zona DNS (Domain Name System) attiva del dominio
- Avere accesso ai file e al database del tuo sito Web presso il tuo attuale provider
- Disporre delle credenziali (utente, password, server) dei tuoi indirizzi email correnti
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

> [!success]
>
> Le istruzioni di questa guida per utilizzare diversi prodotti dell'universo Web Cloud, ti consigliamo di seguire gli step riportati di seguito **prima** per effettuare la migrazione dei tuoi servizi.
>

Migrare un sito Internet e un servizio di posta in OVHcloud **senza interruzione di servizio** richiede una procedura precisa in 10 step:

- [Step 1: ordina l'hosting e gli indirizzi email in OVHcloud](#step1)
- [Step 2: creare e preconfigurare una zona DNS per il tuo dominio in OVHcloud](#step2)
- [Step 3: recuperare un backup completo del tuo sito Web](#step3)
- [Step 4: importare il backup del tuo sito Web sulla tua offerta di hosting OVHcloud](#step4)
- [Step 5: creare i tuoi indirizzi email identici in OVHcloud](#step5)
- [Step 6: dichiarare i server di posta OVHcloud nella zona DNS attiva del dominio](#step6)
- [Step 7: trasferire il contenuto dei tuoi vecchi indirizzi email nei tuoi nuovi indirizzi presso OVHcloud](#step7)
- [Step 8: riconfigurare i tuoi software di messaggeria](#step8)
- [Step 9: sostituire i server DNS attivi del tuo dominio con quelli di OVHcloud](#step9)
- [Step 10: trasferire il tuo dominio in OVHcloud](#step10)

Seguendo questi 10 step **nell'ordine**, non avrai interruzioni di servizio per l'accesso al tuo sito Web e per la ricezione delle tue nuove email.

Tuttavia, in base al tuo Registrar, provider di hosting o provider di servizi email, è possibile che questi ultimi impediscano l'accesso ai tuoi servizi precedenti nel caso in cui si accorgano che il tuo dominio non è più configurato tramite le loro infrastrutture.<br>
In questo caso, potrebbe verificarsi un'interruzione del servizio.

Se tale interruzione dovesse verificarsi, la guida deve essere costruita in modo da ridurne al minimo la durata.

### Step 1: ordina l'hosting e gli indirizzi email in OVHcloud <a name="step1"></a>

Diverse offerte di hosting condiviso OVHcloud contengono un'offerta email "MX Plan". Questa offerta email permette di creare indirizzi email con uno spazio di storage massimo di 5 GB per ogni indirizzo. Scegli tra le offerte di hosting qui sotto in base alla versione PHP, alla versione SQL, al numero di indirizzi email di cui hai bisogno e alla dimensione del tuo sito da migrare:

- L'hosting [Personale](https://www.ovhcloud.com/it/web-hosting/personal-offer/) con **10 indirizzi email** "MX Plan"
- Hosting [Pro](https://www.ovhcloud.com/it/web-hosting/professional-offer/) con **100 indirizzi email** "MX Plan"
- Hosting [Performance](https://www.ovhcloud.com/it/web-hosting/performance-offer/) con **1000 indirizzi email** "MX Plan". Questa offerta è disponibile in 4 "sottolivello".
- L'hosting [Cloud Web](https://www.ovhcloud.com/it/web-hosting/cloud-web-offer/) con **200 indirizzi email** "MX Plan". Questa offerta è utilizzata dagli sviluppatori di applicazioni.

Una volta scelta la soluzione di hosting, se non sei ancora cliente OVHcloud, clicca su `Commander`{.action} nelle precedenti pagine commerciali. Segui gli step dell'ordine **senza richiedere il trasferimento del tuo dominio**.

L'ordine è disponibile anche nello Spazio Cliente OVHcloud (https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Accedi alla sezione `Web Cloud`{.action} e clicca su `Ordinare`{.action} > `Hosting`{.action}. Continua con gli step dell'ordine **senza richiedere il trasferimento del tuo dominio**.

Una volta confermato il pagamento, l'installazione dell'hosting verrà avviata. Riceverai un'email al tuo indirizzo email di contatto. che contiene le credenziali di accesso allo spazio di storage FTP (File Transfert Protocol) del tuo hosting Web.

> [!primary]
>
> OVHcloud propone altre offerte email in aggiunta al servizio "MX Plan". È possibile, ad esempio, combinare a degli indirizzi email "MX Plan" degli indirizzi ["Email-Pro"](https://www.ovhcloud.com/it/emails/email-pro/) e/o degli account ["Exchange"](https://www.ovhcloud.com/it/emails/hosted-exchange/).
>

### Step 2: creare e preconfigurare una zona DNS per il tuo dominio presso OVHcloud <a name="step2"></a>

Una volta creato il tuo hosting, accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e crea una zona DNS per il tuo dominio **senza le "www"**. Per maggiori informazioni, consulta la guida sulla [creazione di una zona DNS OVHcloud](https://docs.ovh.com/it/domains/crea_una_zona_dns_per_un_dominio_esterno/).

Una volta creata la zona DNS, consulta la guida [Modificare una zona DNS OVHcloud](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/). Se non sono presenti, inserisci le seguenti voci:

- Il tuo dominio senza "www", verso la destinazione di tipo "MX": "mx1.mail.ovh.net.".
- Il tuo dominio senza "www", verso la destinazione di tipo "MX": "mx2.mail.ovh.net.".
- Il tuo dominio senza "www", verso la destinazione di tipo "MX": "mx3.mail.ovh.net.".
- Il dominio senza "www", verso l'indirizzo IP di destinazione di tipo "A" del tuo hosting OVHcloud Per recuperare l'indirizzo IP corretto, consulta la guida che elenca gli [indirizzi IP dei diversi cluster di hosting condivisi](https://docs.ovh.com/it/hosting/lista-indirizzi-ip-di-cluster-e-hosting-web/).
- Il tuo dominio **con** i "www", verso il tuo dominio senza "www", con un record di tipo "CNAME".

**Esempio**: Per il dominio "domain.tld", il rendering deve essere il seguente:

![hosting](images/DNSzone.png){.thumbnail}

> [!success]
>
> Annotare i due valori di riferimento dei primi due record di tipo "NS". e verranno utilizzati nello [step 9](#step9) di questa guida.
>
> Questi valori corrispondono ai server DNS associati a questa zona DNS per il tuo dominio.
>

### Step 3: recuperare un backup completo del tuo sito Web <a name="step3"></a>

Recupera il contenuto dello spazio di storage FTP del tuo hosting corrente e un backup del tuo database se ne utilizza uno.

Queste operazioni vengono eseguite esclusivamente presso il tuo hosting provider attuale. Contattaci se hai difficoltà a recuperare un backup completo del tuo sito Web.

### Step 4: importare il backup del tuo sito Web sulla tua offerta di hosting OVHcloud <a name="step4"></a>

Per importare il backup dello spazio di storage FTP del tuo precedente provider, [accedi allo spazio di storage FTP del tuo hosting OVHcloud](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/) e trasferisci il backup nella cartella root "ww" (o in un'altra cartella root creata precedentemente).

Ti consigliamo di utilizzare il software [FileZilla](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_filezilla/) per trasferire il tuo backup FTP sul tuo hosting.

Se il file di backup è compresso (zippato), decomprimerlo in una cartella vuota sul tuo computer prima di trasferire i file sull'hosting OVHcloud.

Per il backup del tuo database, [crea un nuovo database](https://docs.ovh.com/it/hosting/creare-database/) e [importa il backup nel tuo nuovo database](https://docs.ovh.com/it/hosting/web_hosting_come_importare_un_database_mysql/).

> [!primary]
>
> OVHcloud propone server di database CloudDB. Per utilizzare questa offerta con il tuo sito Web, consulta la nostra documentazione su questo prodotto nella nostra pagina dedicata <https://docs.ovh.com/it/clouddb/>.
>

Associa il tuo database OVHcloud al file di configurazione del tuo sito presente nello spazio di storage FTP del tuo hosting OVHcloud.
Sostituisci le informazioni di connessione del tuo database precedente con quelle del nuovo database OVHcloud. Queste informazioni si trovano nel file di "configurazione/connessione al tuo database" del tuo sito Web.

> [!success]
>
> Per collegare il tuo nuovo database se utilizzi un Content Management System (CMS) come WordPress, Joomla!, Drupal o PrestaShop, consulta le informazioni sui file di configurazione nello **Step 2** della guida ["Modificare la password di un database"](https://docs.ovh.com/it/hosting/modificare-password-database/).
>

Dichiarare/autorizzare un dominio esterno su un hosting Web OVHcloud tramite la nostra guida ["Gestione dei multisiti di un hosting Web OVHcloud"](https://docs.ovh.com/it/hosting/configurare-un-multisito-su-un-hosting-web/). Dichiarare correttamente il "nome" della cartella di root scelta all'inizio dello [step 4](#step4). Ti ricordiamo che questa è la cartella in cui hai inserito i tuoi file nel tuo spazio di storage FTP.

> [!warning]
>
> **La realizzazione di questa operazione è fondamentale**, il tuo sito Internet non verrà mostrato fino a quando non avrai indicato i dati corretti. Rispettare in particolare la sintassi del record DNS "TXT".
>
> Dato che il dominio non è ancora registrato in OVHcloud, è necessario aggiungere un record DNS di tipo "TXT" con il "token OVHcontrol" e modificare il puntamento di tipo "A" del dominio. Ciò avviene direttamente nella zona DNS attiva del dominio presso il provider corrente.
>
> Fate lo stesso per il vostro sottodominio in "www".
>
> Contatta, se necessario, l'attuale gestore della tua zona DNS per effettuare l'operazione.
>

**Esempio**: per il dominio "domain.tld":

![hosting](images/DNSmultisite.png){.thumbnail}

**La modifica dei record DNS "A", "CNAME" e "TXT" deve essere effettuata presso l'attuale provider del tuo dominio e richiede un tempo massimo di propagazione da 4 a 24 ore prima di essere pienamente efficace.**

Dopo la propagazione DNS, il sito che comparirà con il dominio sarà quello ospitato in OVHcloud.

### Step 5: creare i tuoi indirizzi email allo stesso modo in OVHcloud <a name="step5"></a>

Ricevi allo stesso modo gli indirizzi email presenti presso il tuo provider tramite la nostra guida sulla [creazione di indirizzi email "MX Plan"](https://docs.ovh.com/it/emails/servizio_email_guida_alla_creazione_di_un_indirizzo_email/).

Se hai scelto una soluzione Email Pro o Exchange, consulta la nostra documentazione per creare i tuoi indirizzi email:

- Per Email-Pro: <https://docs.ovh.com/it/emails-pro/prima-configurazione/>
- Per "Exchange": <https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_20132016_prima_configurazione/>

### Step 6: dichiarare i server di posta OVHcloud nella zona DNS attiva del dominio <a name="step6"></a>

Questo step consiste nel modificare i server di posta "MX" nella zona DNS attiva del tuo dominio.
in modo da ricevere le nuove email sui nuovi indirizzi email OVHcloud.

Sostituisci (senza lasciare precedenti record), presso il tuo provider, i tuoi record "MX" con i tre record seguenti:

- Il tuo dominio (senza "www") verso la destinazione di tipo "MX": "mx1.mail.ovh.net. ".
- Il tuo dominio (senza "www") verso la destinazione di tipo "MX": "mx2.mail.ovh.net. ".
- Il tuo dominio (senza "www") verso la destinazione di tipo "MX": "mx3.mail.ovh.net. ".

La modifica dei server "MX" si effettua presso l'attuale provider DNS del tuo dominio e richiede un tempo di **propagazione massimo da 4 a 24 ore** prima di essere pienamente efficace.<br>
Questo significa che, durante la propagazione dei DNS della modifica, le tue email saranno ricevute sempre meno sui tuoi vecchi indirizzi email e sempre di più sui tuoi nuovi indirizzi email OVHcloud.<br>
Una volta terminata la propagazione, tutte le nuove email ricevute saranno ricevute sugli indirizzi email OVHcloud.

Ti consigliamo di modificare i record "MX" **prima** per effettuare la migrazione del contenuto degli indirizzi email.
Questo metodo ti evita di effettuare una migrazione per le poche email ricevute sui tuoi vecchi indirizzi email durante la propagazione DNS.

### Step 7: trasferire il contenuto dei tuoi vecchi indirizzi email nei tuoi nuovi indirizzi presso OVHcloud <a name="step7"></a>

Dopo la propagazione DNS, le tue nuove email saranno ricevute sui nuovi indirizzi email. Le tue vecchie email sono comunque sempre salvate sul tuo vecchio server di posta.

Per migrare il contenuto dei tuoi vecchi indirizzi, sono disponibili due opzioni.

**Opzione 1**: utilizza il nostro tool [OVHcloud Mail Migrator (OMM)](https://omm.ovh.net/){.external} che permette di copiare il contenuto degli indirizzi email registrati presso il tuo precedente provider a quelli creati presso OVHcloud. Per maggiori informazioni, consulta la guida [Migrare account email via OVH Mail Migrator](https://docs.ovh.com/it/microsoft-collaborative-solutions/migrazione-account-email-con-ovh-mail-migrator/).

Ti consigliamo di non utilizzare `Tipo di server`{.action} **POP** nella sezione `Account sorgente`{.action}. Questo protocollo cancella le email del tuo vecchio server per inviarle verso il server OVHcloud di destinazione. In questo caso non è possibile confrontare il contenuto del vecchio indirizzo e del nuovo indirizzo email.

Nella sezione `Account di destinazione`{.action}, inserisci solo l'indirizzo email OVHcloud e la password associata. `Tipo di server`{.action} in `Hosted by OVH (Autodetect)`{.action}.

Una volta completata la migrazione, accedi al tuo indirizzo email OVHcloud utilizzando la [Webmail OVHcloud](https://www.ovhcloud.com/it/mail/) per verificare che tutte le tue email siano presenti nel nuovo account.

Effettua l'operazione su tutti i tuoi account email.

> [!primary]
>
> Per effettuare questa operazione, è necessario possedere le credenziali di accesso di tutti i tuoi vecchi account email e il nome del server email del tuo precedente provider.
>
> Se i tuoi indirizzi email fossero configurati in POP senza conservare copie delle email sul tuo vecchio server di posta, o se disponessi delle email registrate "in locale" sui tuoi dispositivi, potrà essere realizzata solo l'**opzione 2**.
>

**Opzione 2**: effettua un backup del contenuto dei tuoi indirizzi email con un client di posta (Outlook, Mail di Mac, ecc...), riconfigura il tuo client di posta e importa il backup nel tuo nuovo indirizzo email OVHcloud.

### Step 8: riconfigurare il tuo client di posta <a name="step8"></a>

Una volta migrati i vecchi indirizzi email in OVHcloud, è possibile riconfigurare i client di posta utilizzando tutte le nostre guide disponibili online.

#### Per gli account email "MX Plan": 

- Consulta la guida Per maggiori informazioni sui parametri di configurazione [Gestisci le email MX Plan](https://docs.ovh.com/it/emails/informazioni-generali-email-condivise/#2-utilizza-il-software-che-preferisci). e i link alle guide personalizzate per i principali client di posta.

#### Per gli account "Email-Pro":

- Consulta le nostre guide all'aiuto alla configurazione nelle sezioni `Configurazione su computer` e `Configurazione su smartphone` de [la nostra guida sull'offerta Email-Pro](https://docs.ovh.com/it/emails-pro/).

#### Per gli account email "Exchange":

- Tutte le nostre guide all'aiuto alla configurazione sono disponibili nelle sezioni `Configurazione Exchange su` e `Configurazione Exchange su smartphone` di [la nostra guida sull'offerta Exchange](https://docs.ovh.com/it/microsoft-collaborative-solutions/).

### Step 9: sostituire i server DNS attivi del tuo dominio con quelli di OVHcloud <a name="step9"></a>

La zona DNS preconfigurata durante lo [step 2](#step2) non è ancora applicata al tuo dominio.

Sostituisci i server DNS correnti del tuo dominio con i due server DNS dichiarati nella zona DNS OVHcloud.

> [!warning]
>
> La modifica dei server DNS deve essere effettuata dall'attuale Registrar del tuo dominio e richiede un tempo di **propagazione massimo da 24 a 48 ore** prima di essere pienamente efficace.
>

### Step 10: trasferire il tuo dominio in OVHcloud <a name="step10"></a>

Una volta terminata la propagazione DNS, testa il tuo sito e controlla l'invio e la ricezione delle email dai tuoi indirizzi email.
Se tutto è in ordine, sblocca il tuo dominio e recupera il suo "codice di trasferimento", "EPP" o "AuthCode" dal tuo attuale Registrar.

In seguito, trasferisci il tuo dominio nella guida su [trasferisci un dominio in OVHcloud](https://docs.ovh.com/it/domains/trasferire-un-dominio-generico-in-ovh/).

Una volta terminato il trasferimento dei tuoi dati e servizi, non ti resta che disattivare i tuoi servizi precedenti presso il tuo(i) precedente(i) provider.

## Per saperne di più <a name="go-further"></a>

[Generalità sulle email condivise](https://docs.ovh.com/it/emails/informazioni-generali-email-condivise/).

[Generalità sui server DNS](https://docs.ovh.com/it/domains/web_hosting_gestisci_il_tuo_server_dns/).

[Creare un indirizzo email condiviso](https://docs.ovh.com/it/emails/servizio_email_guida_alla_creazione_di_un_indirizzo_email/).

[Importa un database MySQL](https://docs.ovh.com/it/hosting/web_hosting_come_importare_un_database_mysql/).

[Gestire un database da un hosting condiviso](https://docs.ovh.com/it/hosting/creare-database/).

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com>.