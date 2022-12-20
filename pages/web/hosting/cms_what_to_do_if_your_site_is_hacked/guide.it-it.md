---
title: "Casi d'uso - Consigli in seguito alla pirateria del tuo sito Web"
excerpt: "Scopri i nostri consigli per riparare il tuo sito Web pirata"
slug: hacking_del_tuo_sito_wordpress_consigli_e_casi_pratici
section: "Tutorial"
order: 01
---

**Ultimo aggiornamento: 10/11/2022**
  
> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

Questa guida ti mostra come il tuo sito Web è stato piratato. Di seguito **i 4 step da effettuare nell'ordine** per correggere la situazione.

La pirateria può manifestarsi in diversi modi (elenco non esaustivo):

- il tuo sito Web non appare più correttamente o per nulla, senza alcuna modifica (FTP, SQL o DNS) da parte tua
- il tuo sito Web è reindirizzato verso un altro sito
- il tuo sito genera "annunci" intempestivi (Pop-up, finestre di errori, ecc...)
- il database del tuo sito Web è subito compilato
- dall'hosting vengono generati SPAM generati da script infetti.

**Scopri i nostri consigli per riparare il tuo sito Web pirata.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Mettiamo a tua disposizione questo tutorial per supportarti nelle operazioni più frequenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/it/). OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

## Prerequisiti

- Disporre di una [offerta di hosting Web Cloud](https://www.ovhcloud.com/it/web-hosting/) con il tuo sito Web ospitato su
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

La pirateria di un sito Web è sistematicamente legata a **almeno**:

- mancanza di aggiornamenti del sito Web;
- software spia presente su uno dei dispositivi che utilizzi per amministrare il tuo sito Web;
- l'utilizzo di un plugin o di un tema "non ufficiale", in particolare se utilizzi un Content Managment System (CMS) come WordPress, Joomla!, PrestaShop o Drupal
- password (FTP, SQL, "back office" per i CMS, ecc.) troppo corte o troppo facili da trovare, soprattutto se non cambiate;
- uno script del tuo sito che apre deliberatamente porte a livello del tuo hosting Web **senza** verificare quello che riceve da queste porte;
- diritti di accesso FTP "CHMOD" un po' troppo permissivi.

**La pirateria di un sito Web non deriva da un difetto di sicurezza dell'hosting Web.** Solo gli script/file ospitati sono in grado di dare ordini all'hosting. Gli enti creditizi possono chiedere o meno di aprire alcuni porti di accesso chiusi di default o di eseguire o meno alcune azioni.<br>
Gli script ordinano, l'hosting esegue.

### Step 1 - scannerizza tutti i tuoi dispositivi

Esegui un'analisi anti-virus e anti-spyware di tutti i dispositivi (PC, Mac, smartphone/Iphone, tablet,...) da cui gestisci l'amministrazione o la gestione del tuo sito Web.

> [!warning]
>
> Se utilizzi dispositivi che funzionano con *Linux*, *Mac OS* o altri sistemi operativi per i quali è comunemente indicato che non esiste il rischio di avere un virus o un software "spia", **effettua comunque questa analisi**.
>
> **Nessun sistema operativo è immune da malware/malware.**
>

> [!success]
>
> Ti consigliamo di utilizzare diversi anti-virus/anti-spyware (gratuiti o a pagamento) per ogni tuo dispositivo.
> Effettivamente, alcuni virus o spyware possono persistere a seconda del software antivirus utilizzato.
> Esistono versioni di anti-virus/anti-spyware che puoi installare "in locale" sul tuo dispositivo o utilizzare direttamente "online" su Internet.
>

Se viene individuato un virus o un software spia, eliminalo utilizzando il tuo software anti-virus/anti-spyware **anteriormente** allo step successivo.

### Step 2 - modifica la password <a name="step2"></a>

Se un sito Web è stato hacker e precauzionale, modifica tutte le password associate.

Per OVHcloud, consulta la nostra guida:

- [Modifica la password di accesso al tuo identificativo cliente OVHcloud](https://docs.ovh.com/it/customer/gestire-la-password/).
- [Rendere sicuro l'accesso allo Spazio Cliente OVHcloud con doppia autenticazione](https://docs.ovh.com/it/customer/proteggi_il_tuo_account_con_2FA/).
- [Modificare la password di accesso allo spazio di storage FTP del tuo hosting Web](https://docs.ovh.com/it/hosting/modificare-la-password-utente-ftp/).
- [Modifica la password di accesso al tuo database](https://docs.ovh.com/it/hosting/modificare-password-database/).

Consigliamo inoltre di utilizzare un [gestore di password](https://docs.ovh.com/it/customer/gestire-la-password/#utilizza-un-software-per-la-gestione-di-password).

> [!warning]
> 
> Modificando la password del tuo database, ricordati di aggiornare la password anche nel file di configurazione del tuo sito Web. In caso contrario, il collegamento tra il database e i file presenti nello spazio di storage FTP del tuo hosting Web sarà interrotto e il tuo sito visualizzerà un "errore durante la connessione al tuo database".
>

> [!primary]
>
> Se utilizzi un CMS come WordPress, Joomla!, PrestaShop o Drupal, consulta la documentazione ufficiale del tuo CMS per modificare la password di accesso allo spazio di amministrazione del tuo CMS ("Back-office").
>

### Step 3 - ricercare i file malevoli e le falle di sicurezza

> [!warning]
>
> In caso di difficoltà nell'esecuzione delle azioni descritte di seguito, rivolgiti a un [fornitore specializzato](https://partner.ovhcloud.com/it/) in sicurezza informatica.
>

Utilizza la nostra guida su [le statistiche e i log del tuo hosting Web](https://docs.ovh.com/it/hosting/hosting_condiviso_consulta_le_statistiche_e_i_log_del_tuo_sito/) per ricercare gli elementi malevoli iniettati nel tuo sito Web. Trovi le informazioni nei log "web". 

Cerca a partire dalla data in cui hai rilevato la pirateria e torna allo storico dei tuoi log.

Identifica le richieste "POST" che escono dall'ordinario. Generalmente i file malevoli hanno nomi alfanumerici senza alcun significato particolare (**esempio***: az78e4jFn.txt, oij8bh4.html, udh73hd45.php, mlkjc23d.js, ...).

Recupera l'indirizzo IP che ha effettuato la richiesta malevola. Effettua una ricerca di questo indirizzo nei tuoi log per visualizzare tutte le azioni richieste sul tuo sito da questo IP.

> [!primary]
>
> In genere, più indirizzi IP malevoli chiamano, durante lo stesso periodo, gli script malevoli presenti in seguito alla pirateria.
> Ti ringraziamo per aver analizzato tutti i log del tuo hosting.
>

Raggiungi le falle di sicurezza presenti nel tuo sito, elencando i file malevoli che incontri.

> [!success]
>
> Alcuni siti (non gestiti da OVHcloud) possono permetterti di ottenere informazioni sugli IP malevoli. Puoi utilizzare uno di questi per recuperare informazioni come il provider dell'IP, la sua geolocalizzazione, il gestore, ecc...
>
> Se sei assolutamente sicuro che si tratti di un IP malevolo, puoi bloccarlo all'accesso al tuo hosting seguendo la nostra guida sulle [restrizioni di accesso tramite il file ".htaccess"](https://docs.ovh.com/it/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/).
> 

### Step 4 - Eliminare gli elementi malevoli e correggere le falle di sicurezza

In questa fase sono possibili tre casi: 

> [!alert]
>
> **Importante**: In ogni caso, se elimini i codici malevoli senza correggere le falle di sicurezza, l'hacker potrebbe di nuovo utilizzarli per depositare nuovamente il codice malevolo sul tuo hosting. Avrebbe anche la possibilità di creare una nuova porta d'accesso.
>
> Il ripristino a una data anteriore alla pirateria richiederà un aggiornamento **immediato** e l'indispensabile realizzazione di un **audit di sicurezza**, al fine di identificare tutte le falle di sicurezza.
>

#### Caso n°1 - OVHcloud dispone di un backup del tuo sito Internet (spazio di storage FTP e database)

In base alla data di hacking del tuo sito (meno di 14 giorni), OVHcloud può fornirti un backup (non contrattuale).

Per farlo, consulta le nostre 3 guide sull'argomento:

- [Ripristinare lo spazio di storage FTP del tuo hosting Web](https://docs.ovh.com/it/hosting/web_hosting_recupera_un_backup_completo_o_un_file_in_ftp_con_filezilla/)
- [Recupera il backup SQL del tuo database](https://docs.ovh.com/it/hosting/web_hosting_come_esportare_un_database/)
- [Importare il backup SQL nel tuo database](https://docs.ovh.com/it/hosting/web_hosting_come_importare_un_database_mysql/)

Fai coincidere il più possibile le date di ripristino del tuo spazio di storage FTP e del tuo database SQL.

>[!warning]
>
> OVHcloud dispone di robot di sicurezza in grado di rilevare azioni malevoli eseguite dal tuo hosting. che disattivano il tuo hosting e ti avvisano via email che il tuo hosting è stato disattivato.
> In aggiunta a questa email, in genere compare una pagina "403 Forbidden" quando cerchi di accedere al tuo sito.
>
> Se il tuo hosting è "disattivato", i robot di ripristino automatico disponibili nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) saranno disattivati.
> È necessario effettuare un ripristino "manuale" del sito, eliminare gli elementi malevoli residui e correggere eventuali falle di sicurezza presenti nel backup. Questa operazione **prima** di riattivare il tuo hosting.
>
> Per riattivare l'hosting Web, segui le istruzioni riportate nello Step 4 di questa [guida](https://docs.ovh.com/it/hosting/diagnostic-403-forbidden/).
>

Se le operazioni sono state eseguite correttamente, il sito dovrebbe essere riabilitato.

#### Caso n°2 - Disponi del tuo backup precedente la pirateria

Per farlo, consulta le nostre 2 guide sull'argomento:

- [Ripristinare lo spazio di storage FTP del tuo hosting Web](https://docs.ovh.com/it/hosting/web_hosting_recupera_un_backup_completo_o_un_file_in_ftp_con_filezilla/)
- [Importare il backup SQL nel tuo database](https://docs.ovh.com/it/hosting/web_hosting_come_importare_un_database_mysql/)

>[!warning]
>
> OVHcloud dispone di robot di sicurezza in grado di rilevare azioni malevoli eseguite dal tuo hosting. che disattivano il tuo hosting e ti avvisano via email che il tuo hosting è stato disattivato.
> In aggiunta a questa email, in genere compare una pagina "403 Forbidden" quando cerchi di accedere al tuo sito.
>
> Se il tuo hosting è "disattivato", effettua un ripristino "manuale" del sito, rimuovi gli elementi malevoli residui e correggi tutte le falle di sicurezza presenti nel backup. Questa operazione **prima** di riattivare il tuo hosting.
>
> Per riattivare l'hosting Web, segui le istruzioni riportate nello Step 4 di questa [guida](https://docs.ovh.com/it/hosting/diagnostic-403-forbidden/).
>

Se le operazioni sono state eseguite correttamente, il sito dovrebbe essere riabilitato.

#### Caso n. 3 - nessun backup è disponibile per il tuo sito Web

Elimina manualmente i file e i codici malevoli precedentemente rilevati durante lo [step 2](#step2) di questa guida e correggi le falle di sicurezza del tuo sito.

Per accedere allo spazio di storage del tuo hosting, consulta la nostra guida (https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/) sull'argomento.

> [!warning]
>
> OVHcloud dispone di robot di sicurezza in grado di rilevare azioni malevoli eseguite dal tuo hosting. che disattivano il tuo hosting e ti avvisano via email che il tuo hosting è stato disattivato.
> In aggiunta a questa email, in genere compare una pagina "403 Forbidden" quando cerchi di accedere al tuo sito.
>
> Se il tuo hosting è "disattivato", rimuovi gli elementi malevoli residui e correggi tutte le falle di sicurezza presenti nel backup **prima** di riattivare il tuo hosting.
>
> Per riattivare l'hosting Web, segui le istruzioni riportate nello Step 4 di questa [guida](https://docs.ovh.com/it/hosting/diagnostic-403-forbidden/).
>

Se le operazioni sono state eseguite correttamente, il sito dovrebbe essere riabilitato.

### Step 5 - Aggiorna il tuo sito

Aggiorna il tuo sito Web al suo codice sorgente, ai parametri di sicurezza di cui dispone, alle versioni di linguaggio che utilizza (in particolare PHP).

Verifica i diritti di accesso FTP "CHMOD" per ogni cartelle e file ospitati nel tuo spazio di archiviazione.
Di default, consigliamo di utilizzare al massimo i diritti "CHMOD" **705** per i fascicoli e **604** per i file.
Per maggiori informazioni sui permessi "CHMOD", consulta la sezione "Informazioni utili" del nostro [tutorial sull'utilizzo del client FTP Filezilla](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_filezilla/#useful-information).

Se utilizzi un CMS (Wordpress, Joomla!, PrestaShop, Drupal...), aggiorna i tuoi plugin, il tuo tema e il CMS in sé.
Utilizza plugin/temi "ufficiali" e aggiorna il tuo sito Web il più regolarmente possibile ed esaustivamente.

Proteggi i tuoi form di contatto con l'ausilio di un sistema di tipo "Captcha" per evitare che i robot malevoli emettano SPAM attraverso questo mezzo. Se la funzione "mail()" di PHP è stata bloccata sul tuo hosting, consulta [la nostra guida](https://docs.ovh.com/it/hosting/hosting_web_gestisci_linvio_delle_tue_email_automatiche/) su questo argomento per risolvere il blocco.

Consulta anche la nostra guida su [come proteggere il tuo sito Web](https://docs.ovh.com/it/hosting/secure-website/), per ridurre al minimo il rischio di un'altra pirateria.

## Per saperne di più <a name="go-further"></a>

[Accedere allo spazio di storage del tuo hosting Web](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/)

[Modifica la configurazione di un hosting Web](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web//)

[Attiva il firewall applicativo](https://docs.ovh.com/it/hosting/hosting_condiviso_attiva_un_firewall_applicativo/)

[Ottimizza le performance del tuo sito](https://docs.ovh.com/it/hosting/web_hosting_ottimizza_le_performance_del_tuo_sito/)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.
