---
title: "Monitorare e gestire le email automatiche del tuo hosting web"
excerpt: "Scopri come monitorare e gestire le email automatiche inviate dal tuo hosting web OVHcloud"
updated: 2026-04-01
---

## Obiettivo

Le email automatiche sono messaggi inviati tramite script. Generalmente utilizzando la funzione "mail()" di PHP. Sono utilizzati, ad esempio, per il form di contatto del tuo sito Web e permettono ai tuoi utenti di inviare messaggi.

> [!primary]
>
> Questa guida riguarda principalmente le email inviate tramite script presenti sul tuo [hosting web OVHcloud](/links/web/hosting) tramite la funzione "mail()" di PHP.
>
> Per gestire gli account email inclusi nell'offerta MX Plan o nell'offerta di [hosting web OVHcloud](/links/web/hosting), consulta la nostra documentazione sulle [Email condivise - MX Plan](/products/web-cloud-email-collaborative-solutions-mx-plan).
>

> [!success]
>
> Pur raccomandando vivamente di utilizzare la funzione "mail()" di PHP, puoi anche inviare email dal tuo hosting condiviso tramite uno script che utilizza il [protocollo SMTP (Simple Mail Transfer Protocol)](#SMTP).
>

**Questa guida ti mostra come monitorare e gestire le email automatiche inviate dal tuo hosting web OVHcloud.**

## Prerequisiti

- Disporre di un'offerta di [hosting web OVHcloud](/links/web/hosting).

<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

### Panoramica della sezione «Script email»

<!-- CP-STEPS-START:email-scripts-overview -->
Per accedere alla sezione «Script email», clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting) e seleziona l'hosting web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella pagina che appare, clicca sulla scheda `Più`{.action} e poi su `Script email`{.action}.
>>
>> ![More tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/more.png){.thumbnail}
>>
>> ![More tab 2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/more-2.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Questa pagina ti permette di monitorare e gestire le email automatiche inviate dal tuo [hosting web OVHcloud](/links/web/hosting).
>>
>> ![Pagina Script email dell'hosting web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/email-scripts/tab.png){.thumbnail}
>>
>> La pagina mostra diverse informazioni che ti permettono di visualizzare l'attività degli invii di email automatiche generate dai tuoi script:
>>
>> - **Stato del servizio**: stato attuale del servizio che esegue gli invii di email automatiche del tuo hosting web:
>>     - Se è verde (*«Attivo»* o *«Force»*), significa che gli invii sono operativi.
>>     - Se è rosso (*«Disattivato»*, *«Bounce»* o *«spam»*), gli invii non vengono più effettuati.
>>
>>     A seconda di questo stato, la gestione degli invii sarà diversa.
>>
>> - **Report errori a**: ricevi un report giornaliero all'indirizzo email che preferisci. Impostalo tramite il pulsante `Modifica destinatario`{.action}. Questo report contiene le email inviate dal tuo hosting web che sono tornate con errore a OVHcloud. Il pulsante `Email in errore`{.action} permette anche di consultare questi report in qualsiasi momento a destra della pagina `Script email`{.action}.
>> - **Totale email inviate**: numero totale delle email automatiche inviate dalla creazione del tuo hosting web OVHcloud.
>> - **Email inviate oggi**: numero totale delle email automatiche inviate oggi.
>> - **Totale email in errore**: numero totale delle email automatiche inviate dalla creazione del tuo hosting web che sono tornate con errore a OVHcloud.
>> - **Storico delle email inviate**: grafico che rappresenta lo storico delle email inviate dal tuo hosting web nei giorni precedenti.
>>
>> A destra, diversi pulsanti permettono di gestire gli invii di email automatiche dal tuo hosting web. A seconda dello stato del servizio, alcuni potrebbero non essere disponibili.
>>
>> - **Elimina le email**: cancella le email presenti nella coda di attesa e sblocca l'invio delle email. Per motivi di riservatezza, le email presenti nella coda non sono accessibili lato OVHcloud. Puoi visualizzare queste email solo se sono state precedentemente registrate nel database del tuo sito web prima di essere inviate.
>> - **Email in errore**: permette l'accesso ai log delle ultime email che hanno avuto errori di invio. Troverai gli indirizzi email interessati con l'errore associato. Attenzione, questo storico non verrà reimpostato, anche se decidi di `Elimina le email`{.action} o di `Sblocca l'invio`{.action}.
>> - **Blocca l'invio**: blocca la distribuzione degli invii di email automatiche del tuo hosting web. Le email generate dai tuoi script dopo il blocco non verranno inviate, ma conservate in una coda di attesa per un massimo di 72 ore.
>> - **Sblocca l'invio**: sblocca l'invio delle email automatiche del tuo hosting web. Le email presenti nella coda di attesa verranno anch'esse rimesse in distribuzione.
>>
>> Per eseguire l'azione desiderata, clicca sul pulsante corrispondente e poi su `Conferma`{.action}. In alcuni casi, l'azione richiesta potrebbe richiedere diversi minuti per essere pienamente efficace.
<!-- CP-STEPS-END:email-scripts-overview -->

> [!primary]
>
> Per evitare un utilizzo indesiderato delle email automatiche del tuo hosting web, ti consigliamo vivamente di implementare un sistema di sicurezza, come un «captcha» nei form del tuo sito web che effettuano invii di email (ad esempio un form di contatto).
>

Se noti che le email generate dai tuoi script non vengono più inviate mentre lo stato del servizio consente ancora l'invio (*«Attivo»* o *«Force»*), ti consigliamo di:

- **verificare gli script che effettuano gli invii**: gli script potrebbero non riuscire ad inviare le email a causa di un errore di sintassi. Verifica il contenuto dei tuoi script, correggili se necessario e poi effettua un nuovo tentativo.

- **testare l'invio di un'email tramite uno script di test**: crea uno script di test che effettua l'invio di un'email al tuo indirizzo personale utilizzando il seguente codice:

```bash
<?php
$to = "RecipientEmail@address.tld"; 
$subject = "Test mail PHP"; 
$content = "The body/content of the Email";
$headers = "From: Website <SendingEmail@address.tld>\r\nReply-To: SendingEmail@address.tld";

if (mail($to, $subject, $content, $headers))
echo "The email has been sent successfully!";
else
echo "Email did not leave correctly!";
?>
```

Per il `$headers`, inserisci due volte lo stesso indirizzo email mittente.

Se ricevi correttamente il messaggio *The email has been sent successfully!* all'indirizzo email che hai definito nella riga `$to`, significa che gli script che effettuano i tuoi invii contengono errori.

- **Assicurati che i tuoi invii non utilizzino un server SMTP**: non specificare un server SMTP nei parametri dei tuoi script quando utilizzi la funzione "mail()" di PHP. Se disponi di un'interfaccia per amministrare gli invii di email dal tuo sito web, modifica questo parametro nella configurazione di quest'ultimo.

- **Verifica la dimensione totale della tua email**: l'email inviata non deve superare la dimensione totale di **10 MB** (incapsulamento e intestazione inclusi). Il contenuto della tua email non dovrà quindi superare **7/8 MB**.

### Gestire gli stati «Disattivato», «Bounce» e «spam» <a name="block-state"></a>

In questa sezione troverai i dettagli di ogni stato all'origine del blocco della tua funzione email.

> [!warning]
>
> Prima di descrivere nel dettaglio ciascuno di questi stati, è necessario comprendere i punti che possono deteriorare la reputazione del tuo dominio o impedire la ricezione delle tue email.
>
> Verifica preventivamente i seguenti punti:
>
> - La configurazione del [record SPF](/pages/web_cloud/domains/dns_zone_spf) nella zona DNS del dominio.
> - La configurazione del [record DMARC](/pages/web_cloud/domains/dns_zone_dmarc) nella zona DNS del dominio, **solo se il server di destinazione lo richiede**.
> - Verifica la reputazione dell'indirizzo IP all'origine dell'invio ([quello del tuo hosting web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_ip) nel tuo caso), tramite uno strumento come [MXtoolbox](https://mxtoolbox.com/) o [Spamhaus](https://check.spamhaus.org/).
> - L'email non contiene elementi suscettibili di essere interpretati come spam. Trovi un elenco non esaustivo di questi elementi nella sezione «[Caso n°3: Invio di email legittime considerate come spam](#elements-list-spam)» di questa guida.
> - In assenza di blocco da parte di OVHcloud e se l'email non è stata ricevuta o rifiutata dal destinatario, contatta il destinatario affinché verifichi se l'email non è stata bloccata a livello del server di ricezione.

#### Lo stato «Disattivato»

Questo stato si verifica quando:

- sono state inviate troppe email molto rapidamente;
- troppe email sono tornate in errore;
- hai disattivato la funzionalità dal tuo [Spazio Cliente OVHcloud](/links/manager).

<!-- CP-STEPS-START:resolve-disabled-status -->
Per sbloccare la situazione, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting) e seleziona l'hosting web interessato.
>>
> **Passaggio 2**
>>
>> Nella pagina che appare, clicca sulla scheda `Più`{.action} e poi su `Script email`{.action}.
>>
> **Passaggio 3**
>>
>> Clicca su `Sblocca l'invio`{.action} e attendi qualche minuto affinché il servizio di invio sia di nuovo attivo.
<!-- CP-STEPS-END:resolve-disabled-status -->

#### Lo stato «Bounce»

Questo stato si verifica quando una certa percentuale delle tue email inviate automaticamente è tornata in errore.

<!-- CP-STEPS-START:resolve-bounce-status -->
Per sbloccare la situazione, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting) e seleziona l'hosting web interessato.
>>
> **Passaggio 2**
>>
>> Nella pagina che appare, clicca sulla scheda `Più`{.action} e poi su `Script email`{.action}.
>>
> **Passaggio 3**
>>
>> Sono possibili due opzioni:
>>
>> - Se clicchi su `Sblocca l'invio`{.action}, lo stato del servizio passerà a *«Force»*. Il rapporto **email tornate in errore / numero totale di email inviate** autorizzato prima di un blocco sarà raddoppiato. L'invio sarà di nuovo operativo qualche minuto dopo lo sblocco.
>> - Se clicchi su `Elimina le email`{.action}, verranno eliminate tutte le email dalla coda di attesa e lo stato del servizio tornerà a *«Attivo»* senza raddoppiare il rapporto.
<!-- CP-STEPS-END:resolve-bounce-status -->

#### Lo stato «spam»

Questo stato si verifica quando dal tuo hosting vengono inviate email considerate come spam.

Generalmente, questo blocco è accompagnato dall'invio di un'email dal titolo **«Abuso con il tuo hosting domain.tld»** generata automaticamente dai nostri robot di sicurezza:

![hosting](/pages/assets/screens/email-sending-to-customer/webhosting/email-script-disabled.png){.thumbnail}

Sono possibili tre scenari in relazione a questa situazione:

- **Caso n°1: utilizzo di un form di contatto da parte di un robot**:

Per risolvere questa situazione, devi proteggere tutti gli script in grado di inviare email dal tuo hosting tramite un sistema di tipo «Captcha».

<!-- CP-STEPS-START:resolve-spam-case-1 -->
Dopodiché accedi alla sezione «Script email» del tuo hosting. Per farlo, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting) e seleziona l'hosting web interessato.
>>
> **Passaggio 2**
>>
>> Nella pagina che appare, clicca sulla scheda `Più`{.action} e poi su `Script email`{.action}.
>>
> **Passaggio 3**
>>
>> Clicca su `Elimina le email`{.action}: verranno eliminate tutte le email dalla coda di attesa e lo stato del servizio tornerà a *«Attivo»*. In questo caso, l'eliminazione è obbligatoria per cancellare gli spam in attesa di invio.
<!-- CP-STEPS-END:resolve-spam-case-1 -->

- **Caso n°2: iniezione di file malevoli nel tuo hosting**:

Per risolvere questa situazione, devi eseguire almeno le seguenti operazioni:

- Analizza i [log del tuo hosting](/pages/web_cloud/web_hosting/logs_and_statistics) per identificare le falle di sicurezza e i file infetti.
- Elimina o correggi il/i file/moduli malevoli.
- Per i CMS (WordPress, Joomla!, PrestaShop, Drupal, ...), aggiorna il CMS, i plugin e il tema associati.
- Proteggi i tuoi form di contatto con un «captcha».

Se utilizzi un CMS, privilegia l'utilizzo di plugin/temi «ufficiali».
Aggiorna il CMS, i plugin e il tema associati il più regolarmente possibile per evitare che ciò si ripeta.

<!-- CP-STEPS-START:resolve-spam-case-2 -->
Una volta protetto il tuo hosting, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting) e seleziona l'hosting web interessato.
>>
> **Passaggio 2**
>>
>> Nella pagina che appare, clicca sulla scheda `Più`{.action} e poi su `Script email`{.action}.
>>
> **Passaggio 3**
>>
>> Clicca su `Elimina le email`{.action}: verranno eliminate tutte le email dalla coda di attesa e lo stato del servizio tornerà a *«Attivo»*.
<!-- CP-STEPS-END:resolve-spam-case-2 -->

In questo caso, l'eliminazione è obbligatoria per cancellare gli spam in attesa di invio.

- **Caso n°3: Invio di email legittime considerate come spam** <a name="elements-list-spam"></a>

Se sei all'origine delle email che hanno generato il blocco, troverai qui di seguito alcuni esempi di **pratiche da evitare** durante l'invio di un'email (affinché non venga considerata «troppo facilmente» come spam):

- 3 parole o più in maiuscolo nell'oggetto dell'email.
- Nessun oggetto/testo indicato nell'email.
- L'email contiene solo un'immagine di dimensioni superiori a 1 MB e poche parole.
- L'oggetto dell'email inizia con: Hi, FREE, BUY, BUYING,....
- L'email contiene più del 70% di spazio bianco (abuso del tasto «SPAZIO» o «INVIO» della tastiera).
- Il carattere utilizzato per la redazione dell'email è estremamente grande.
- Il colore del testo e il colore dello sfondo sono identici per la redazione dell'email.
- L'indirizzo IP pubblico (IP del tuo punto di accesso internet, ad esempio) è elencato presso organismi di reputazione.
- L'intestazione dell'email inviata non rispetta le RFC «email» (standard email).
- I link presenti nell'email sono errati.
- Un URL nell'email non è sicuro (ad esempio: dichiarato in `https://` mentre l'URL esiste solo in `http://`).
- L'email contiene termini di carattere pornografico o simili.
- L'email contiene un eseguibile (EXE, BAT, PIF, XML, XLSX o documenti con «macro»), anche se «zippato».

Se nonostante ciò lo stato del servizio ritorna allo stato *«spam»*, rispondi all'email automatica che hai ricevuto specificando che hai fatto il necessario.

Il nostro servizio antispam analizzerà la situazione e il nostro supporto ti ricontatterà per spiegarti la procedura di sblocco.

### Invio di email tramite uno script «SMTP» <a name="SMTP"></a>

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui sei responsabile per la configurazione e la gestione. Spetta quindi a te garantirne il corretto funzionamento.
>
> Tuttavia, ti raccomandiamo di rivolgerti a un [provider specializzato](/links/partner) se incontri delle difficoltà. Noi non saremo in grado di fornirti assistenza. Per maggiori informazioni, consulta la sezione [«Per saperne di più»](#go-further) di questa guida.
>

Pur raccomandando vivamente di privilegiare l'utilizzo della funzione "mail()" di PHP, gli hosting condivisi permettono di inviare email tramite uno script che utilizza il protocollo SMTP (Simple Mail Transfer Protocol). La dimensione totale della tua email non può superare **10 MB** (cioè **7/8 MB senza incapsulamento**).

> [!warning]
> 
> Le email inviate con uno script che utilizza una configurazione SMTP non possono essere gestite e monitorate dal tuo [Spazio Cliente OVHcloud](/links/manager).
> 

> [!primary]
>
> Se utilizzi un indirizzo email OVHcloud e solo in questo caso, puoi anche utilizzare `SMTPSecure` *«starttls»* o *«tls»* con il `Port` **587**. Tuttavia, `SMTPSecure` *«ssl»* con il `Port` **465** rimane la configurazione da privilegiare sulla nostra infrastruttura.
> 

## Per saperne di più <a name="go-further"></a>

[Consultare i log del tuo hosting](/pages/web_cloud/web_hosting/logs_and_statistics)

[Correggere la pagina «403 Forbidden» visualizzata sul tuo sito](/pages/web_cloud/web_hosting/diagnostic_403_forbidden)

[Ripristinare lo spazio di storage FTP del tuo hosting](/pages/web_cloud/web_hosting/ftp_save_and_backup)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](/links/support).

Partecipa alla nostra [community di utenti](/links/community).
