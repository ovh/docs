---
title: Iniziare a utilizzare un hosting Cloud Web
slug: primi-passi-con-un-hosting-cloud-web
excerpt: Come eseguire le prime operazioni su un Cloud Web
section: Per iniziare
order: 01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 04/05/2022**

## Obiettivo

La nuova soluzione di hosting Cloud Web combina i nostri 20 anni di esperienza nel settore Web e la potenza del nostro Public Cloud. Esattamente come per i classici hosting Web di OVHcloud, i tuoi siti sono ospitati su un servizio gestito 24 ore su 24, 7 giorni su 7, offrendoti però molte più funzionalità, come le performance dei dischi SSD.

**Come eseguire le prime operazioni su un hosting Cloud Web**

## Prerequisiti

- Disporre di un piano di hosting [Cloud Web](https://www.ovhcloud.com/it/web-hosting/cloud-web-offer/) attivo
- Aver ricevuto l'email di conferma dell'installazione del tuo hosting Cloud Web
- Disporre di un [dominio](https://www.ovhcloud.com/it/domains/) attivo, che corrisponderà all’indirizzo del tuo sito
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Step 1: definisci il tuo progetto

Al fine di adattarsi al meglio alle tue esigenze, il Cloud Web offre più opzioni di configurazione rispetto a un classico hosting Web. Pertanto, per poter realizzare al meglio il tuo progetto, è importante avere una visione chiara dell’obiettivo da raggiungere. Per questo il nostro consiglio è di:

- **definire cosa si vuoi installare**: creare un blog o un e-commerce? Condividere una passione o promuovere un’attività professionale online? Stabilisci in modo chiaro il tuo progetto prima di cominciare;

- **recuperare i prerequisiti tecnici per l’installazione**: è possibile che il progetto che hai in mente necessiti di prerequisiti particolari, pertanto assicurati di esserne a conoscenza;

- **verificare la compatibilità tecnica del tuo progetto con il Cloud Web**: hai bisogno di un programma d’esecuzione o di un database in particolare? Se non l’hai ancora fatto, accertati che sia disponibile con la tua soluzione di hosting [Cloud Web](https://www.ovhcloud.com/it/web-hosting/cloud-web-offer/).

Dopo aver valutato le diverse possibilità tra cui scegliere, puoi iniziare a metterlo online.

### Step 2: scegli il programma d’esecuzione

Cloud Web mette a tua disposizione diversi linguaggi di programmazione per consentirti di costruire il tuo progetto. Se vuoi utilizzare un linguaggio di programmazione diverso da PHP (opzione predefinita), è necessario selezionare un “programma d’esecuzione” corrispondente al tuo linguaggio.

I linguaggi di programmazione disponibili sono:

- PHP
- Node.js
- Python
- Ruby

Per accedere al programma d’esecuzione del tuo hosting Cloud Web, effettua l’accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, clicca su `Hosting`{.action} nella barra dei servizi a sinistra e scegli il nome del tuo Cloud Web. Infine, posizionati sulla scheda `Programma d’esecuzione`{.action}.

Nel momento in cui installi il tuo hosting, un programma viene utilizzato automaticamente e inserito come `Opzione predefinita`. Per modificare il programma d’esecuzione già configurato, clicca sui 3 puntini a destra, poi su `Modifica`{.action}. 

In base alla tua soluzione di [Cloud Web](https://www.ovhcloud.com/it/web-hosting/cloud-web-offer/) puoi anche aggiungere programmi d’esecuzione aggiuntivi cliccando su `Azioni`{.action} > `Aggiungi un programma d’esecuzione`{.action}. Ti ricordiamo che il numero massimo di programmi d’esecuzione dipende dalla soluzione Cloud Web che hai ordinato.

Da questo momento, prima di proseguire, assicurati di disporre del programma o più programmi d’esecuzione necessari al tuo progetto.

![cloudweb](images/cloud-web-first-steps-step1.png){.thumbnail}

### Step 3: crea alcune variabili d’ambiente (facoltativo)

Se hai intenzione di distribuire il tuo progetto più volte in ambienti diversi (ad es. sviluppo, test, produzione, ecc...), è necessario fornire delle variabili in modo che il tuo codice risponda di conseguenza. Per questo, Cloud Web propone la definizione delle variabili d’ambiente accessibili al codice del tuo sito o della tua applicazione Web.

Per esempio, questo consente di non definire file “.env” nel framework PHP Laravel come indicato nella documentazione del framework: <https://laravel.com/docs/5.6/configuration>.

Per aggiungere una variabile d’ambiente, clicca quindi sulla scheda `Variabili d'ambiente`{.action}. Apparirà una tabella con le variabili d’ambiente create sulla tua soluzione. Per aggiungerne una nuova, clicca sul pulsante `Azioni`{.action}, poi su `Aggiungi una variabile d'ambiente`{.action}. Segui dunque le indicazioni in base alla variabile che vuoi creare.

![cloudweb](images/cloud-web-first-steps-step2.png){.thumbnail}

Se non utilizzi framework di sviluppo che includono variabili d’ambiente o se semplicemente vuoi verificare il corretto funzionamento delle tue variabili, puoi creare uno script per effettuare queste funzioni. Di seguito trovi due esempi che possono esserti d’aiuto nel tuo percorso, ma non sostituiscono l’assistenza di un webmaster.

- **Per PHP**:

```php
<?php echo "ENV: " . $_ENV['DB_DATABASE']; ?>
```

- **Per Node.js**:

```sh
var http = require('http');

http.createServer(function(request, response) {  
    response.writeHeader(200, {"Content-Type": "text/html"});  

    response.write( process.env.DB_DATABASE);

    response.end();  
}).listen(80);
```

Ricorda di sostituire l’informazione generica presente in questi script “DB_DATABASE” con la tua variabile d’ambiente.

### Step 4: configura domini aggiuntivi come Multisito (facoltativo)

Adesso che l’ambiente tecnico del tuo hosting Cloud Web è pronto, puoi configurare domini aggiuntivi come Multisito. Questo ti permette di condividere il tuo spazio al fine di ospitare più siti Internet, ad esempio. Se questo è il tuo caso, sempre dopo aver cliccato sul tuo Cloud Web, clicca sulla scheda `Multisito`{.action}.

La tabella che appare contiene quindi tutti domini che hai aggiunto al tuo hosting. Alcuni sono stati creati automaticamente durante l’installazione del tuo hosting. Per aggiungerne un altro, clicca su `Aggiungi un dominio o un sottodominio`{.action} e segui le indicazioni. L’operazione può essere diversa se il dominio è registrato con OVHcloud o meno. 

Ti consigliamo di fare molta attenzione nell’inserire queste informazioni:

- **Cartella di root**: la cartella in cui il sito inserito verrà ospitato sullo spazio di storage del tuo hosting Cloud Web; 

- **Programma d'esecuzione**: il programma d’esecuzione, preventivamente configurato, che verrà utilizzato dal Multisito che stai impostando.

> [!warning]
>
> Se hai aggiunto un dominio esterno, è necessario configurare un record TXT denominato **ovhcontrol** sulla configurazione DNS, Questo consente a OVHcloud di assicurarsi che si tratti di un’operazione valida e pertanto, se non viene realizzata, l’aggiunta del dominio viene annullata. 
>

Ripeti questa operazione per ciascun dominio che vuoi aggiungere al tuo Cloud Web. Per ottenere maggiori informazioni sull’aggiunta di un dominio come Multisito, consulta la seguente guida (in inglese): [Ospitare più siti su uno stesso hosting](https://docs.ovh.com/gb/en/hosting/multisites-configuring-multiple-websites/){.external}.

![cloudweb](images/cloud-web-first-steps-step3.png){.thumbnail}

### Step 5: installa il tuo progetto sull’hosting Cloud Web

Per realizzare l’installazione del tuo progetto ci sono due possibilità. Ripeti gli step del percorso più appropriato se vuoi mettere online più progetti.

#### 5.1. Utilizza i nostri moduli in 1 click

Questa soluzione ti permette di usufruire di un CMS pronto all’uso e personalizzabile (tema, contenuti, ecc...). OVHcloud propone 4 moduli in 1 click che permettono di installare un CMS in modo semplice e veloce. Per saperne di più accedi alla pagina [Crea il tuo sito con i moduli in 1 click](https://www.ovhcloud.com/it/web-hosting/uc-website/){.external}.

Se vuoi optare per l’utilizzo di uno dei nostri moduli, sempre dopo aver selezionato il Cloud Web dallo Spazio Cliente, seleziona la scheda `CMS in 1 click`{.action}, poi su `Aggiungi un modulo`{.action}. A questo punto puoi dare avvio a un’installazione in modalità “semplice” (non personalizzabile) o in modalità “avanzata” (possibilità di personalizzare alcuni elementi).

Per maggiori informazioni sui moduli in 1 click, consulta la nostra guida: [Installare i moduli in 1 click OVHcloud](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/){.external}

> [!primary]
>
> Se scegli i moduli in 1 click, è necessario utilizzare il programma d’esecuzione PHP.
>

![cloudweb](images/cloud-web-first-steps-step4.png){.thumbnail}

#### 5.2. Installa manualmente il tuo progetto

Che si tratti di un nuovo sito Internet o della migrazione di un sito già esistente, l’installazione manuale può rivelarsi più tecnica e dovrà essere effettuata in base alle tue conoscenze. Per questo, ti suggeriamo di rivolgerti a un professionista o di contattare l’amministratore del servizio nel caso dovessi avere difficoltà. 

Se scegli l’installazione manuale, è necessario che tu sia in possesso di tutti i file del sito Internet o dell’applicazione che vuoi installare, così come (se richiesto per un corretto funzionamento) degli identificativi di un database precedentemente creato sul tuo Cloud Web. In caso di migrazione di un sito Internet, procurati un backup completo.

Poiché i progetti possono essere diversi tra loro, non esiste un procedimento universale, ma per ulteriore assistenza sulle operazioni da svolgere puoi consultare la nostre guide (in inglese): [Pubblicare un sito Web](https://docs.ovh.com/gb/en/hosting/web_hosting_how_to_get_my_website_online/){.external} e [Migrare un sito e un servizio di posta in OVHcloud](https://docs.ovh.com/gb/en/hosting/migrating-website-to-ovh/){.external}

### Step 6: modifica la configurazione del tuo dominio

In questa fase è necessario che il tuo progetto sia installato sul Cloud Web OVHcloud e che tu abbia creato i tuoi account email. Se non dovessero ancora funzionare, potrebbe darsi che la configurazione del tuo dominio non sia corretta e, in questo caso, ti consigliamo di seguire questo step.

Ti ricordiamo tuttavia che, se stai effettuando una migrazione dei tuoi servizi a OVHcloud, le operazioni legate ai DNS potrebbero causare un malfunzionamento dei tuoi servizi se non vengono effettuate nel momento giusto. In base ai diversi step descritti nella nostra guida (in inglese) [Migrare un sito e un servizio di posta in OVHcloud](https://docs.ovh.com/gb/en/hosting/migrating-website-to-ovh/){.external}, è quindi necessario verificare ed eventualmente correggerne la configurazione alla fine del processo di migrazione.

#### 6.1. Conoscere i record DNS OVHcloud 

Esistono diversi record DNS relativi a OVHcloud. Ci concentreremo in particolare su due di essi, che garantiscono l’accessibilità del sito e la ricezione dei messaggi sui tuoi account email. Segui le indicazioni sottostanti per sapere dove recuperarli:

|Record DNS|Servizio associato|Dove recuperarlo?|
|---|---|---|
|A|Per il sito Internet|Nello [Spazio Clienti OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, clicca su `Hosting`{.action} e seleziona il tuo hosting Cloud Web. L'indirizzo IP viene mostrato in corrispondenza della voce "IPv4" nella scheda `Informazioni generali`{.action}.|
|MX|Per le email|Nello [Spazio Clienti OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, clicca su `Email`{.action} e seleziona il tuo dominio. L’informazione viene mostrata in corrispondenza della voce "Record MX" nella scheda `Informazioni generali`{.action}.|

#### 6.2. Verificare e modificare i record DNS

Adesso che conosci i record DNS relativi al tuo Cloud Web e il tuo servizio di posta OVHcloud, è necessario verificare se la configurazione è stata effettuata correttamente ed eventualmente modificarla. Queste due operazioni devono essere assolutamente eseguite presso il provider che gestisce la zona DNS del tuo dominio.

> [!warning]
>
> - Se il tuo dominio non utilizza i DNS di OVHcloud, è necessario effettuare la modifica tramite l’interfaccia del provider che gestisce i nameserver del tuo dominio.
> 
> - Se il tuo dominio è registrato presso OVHcloud, puoi verificare se utilizza i nostri DNS accedendo allo [Spazio Clienti OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} > `Server DNS`{.action} e seleziona il tuo dominio.
>

Segui le indicazioni sottostanti per sapere dove effettuare le operazioni:

|Configurazione DNS utilizzata|Dove effettuare le operazioni?|
|---|---|
|OVHcloud|Nello [Spazio Clienti OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, clicca su `Domini`{.action} e seleziona il tuo dominio. Nella scheda `Zona DNS`{.action} è possibile verificare ed eventualmente modificare le informazioni necessarie. Per maggiore assistenza, puoi consultare la nostra guida (in inglese) [Modificare una zona DNS OVHcloud](https://docs.ovh.com/gb/en/domains/web_hosting_how_to_edit_my_dns_zone/){.external}.|
|Altro|Attraverso l’interfaccia del provider che gestisce la configurazione DNS del tuo dominio. Ti suggeriamo inoltre di contattarlo se trovi difficoltà nello svolgere queste operazioni.|

Una volta modificata la configurazione DNS del tuo dominio, la propagazione delle modifiche potrebbe richiedere fino a 24 ore. Se hai aggiunto più domini al tuo hosting Cloud Web come Multisito, è necessario ripetere queste due operazioni per ciascun dominio. 

### Step 7: personalizza il tuo sito

In caso di migrazione di un sito già esistente e quindi già personalizzato, questo step è facoltativo. Se invece il sito è appena stato realizzato, ad esempio utilizzando i nostri moduli, è possibile personalizzarlo modificando il tema e pubblicando i primi contenuti.

Per maggiori informazioni sulle funzionalità disponibili, consulta la documentazione del CMS utilizzato per realizzare il tuo progetto.

### Step 8: utilizza i tuoi indirizzi email

A questo punto non ti resta che utilizzare i tuoi account di posta. OVHcloud fornisce un’applicazione online (webmail): RoundCube. Puoi accedere all’App tramite l’indirizzo <https://www.ovh.it/mail/>, inserendo le credenziali associate al tuo account email creato in OVHcloud.

Per maggiori informazioni su questo servizio, consulta la nostra guida [Guida all'utilizzo di RoundCube](https://docs.ovh.com/it/emails/webmail_guida_allutilizzo_di_roundcube/){.external} Per configurare l’account email su un client di posta o un dispositivo (ad esempio, smartphone o tablet), fai riferimento alla documentazione disponibile a questa pagina: <https://docs.ovh.com/it/emails/>.

## Per saperne di più

[Migrare un sito e un servizio di posta in OVHcloud](https://docs.ovh.com/gb/en/hosting/migrating-website-to-ovh/){.external} (in inglese)

[Pubblicare un sito Web](https://docs.ovh.com/gb/en/hosting/web_hosting_how_to_get_my_website_online/){.external} (in inglese)

[Installare i moduli in 1 click OVHcloud](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/){.external}

[Ospitare più siti su uno stesso hosting](https://docs.ovh.com/gb/en/hosting/multisites-configuring-multiple-websites/){.external} (in inglese)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com>.
