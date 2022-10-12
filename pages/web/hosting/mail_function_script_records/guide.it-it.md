---
title: "Gestire l’invio delle email automatiche"
excerpt: "Come monitorare e gestire le email automatiche inviate da un hosting Web OVHcloud"
slug: hosting_web_gestisci_linvio_delle_tue_email_automatiche
section: Diagnostica
order: 01 
---

**Ultimo aggiornamento: 12/10/2022**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

Le email automatiche sono messaggi inviati tramite script. Generalmente utilizzando la funzione "mail()" di PHP. Sono utilizzati, ad esempio, per il form di contatto del tuo sito Web e permettono ai tuoi utenti di inviare messaggi.

> [!primary]
>
> Questa guida ti mostra come utilizzare la funzione "mail()" di PHP per inviare messaggi da script siti sul tuo [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/).
>
> Per gestire gli indirizzi email inclusi nella soluzione MX Plan o nella soluzione di [hosting web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external}, consulta la nostra guida sugli [email condivisi - MX Plan](https://docs.ovh.com/it/emails/).
>

> [!success]
>
> Anche se consigliamo vivamente di utilizzare la funzione "email()" di PHP, potrai inviare email dal tuo hosting condiviso passando per uno script che utilizza [protocollo SMTP (Simple Mail Transfer Protocol)](#SMTP).
>

**Questa guida ti mostra come monitorare e gestire le email automatiche inviate dal tuo hosting Web OVHcloud.**

## Prerequisiti

- Disporre di una soluzione di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external}
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

Il monitoraggio e la gestione delle email automatiche dell'hosting Web OVHcloud sono disponibili nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Accedi alla sezione `Web cloud`{.action}, clicca su `Hosting`{.action} e seleziona l'hosting interessato nella lista. Clicca sulla scheda `Plus`{.action} e poi su `Script email`{.action}.

![hosting](images/monitoring-automatic-emails-step1.png){.thumbnail}

La nuova pagina ti permette di seguire e gestire le email automatiche inviate dal tuo [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/).

### Presentazione della sezione "Script email"

![hosting](images/Interface.png){.thumbnail}

Visualizzi una serie di informazioni per visualizzare l'attività dell'invio di email automatiche generate dai tuoi script:

- **Stato del servizio**: stato attuale del servizio che esegue l'invio di email automatiche dal tuo hosting Web:
    - Se è verde (*"Attivato"* o *"Force"*), significa che gli invii sono operativi. 
    - Se è rosso (*"Disattivato"*, *"Banda"* o *"SPAM"*), gli invii non sono più effettuati. <br>

    In base a questo stato, la gestione degli invii sarà diversa.

- **Rapporto di errore a**: riceverlo quotidianamente all'indirizzo email di tua scelta. Inseriscila cliccando su `Modifica il destinatario`{.action}. Il report contiene le email inviate dal tuo hosting Web che risultano in errore presso OVHcloud. `Email in errore`{.action} permette di visualizzare i report in qualsiasi momento a destra della pagina `Scripts email`{.action}.
- **Totale email inviate**: numero totale delle email automatiche inviate dalla creazione del tuo hosting Web OVHcloud.
- **E-mail inviate oggi**: numero totale delle email automatiche inviate solo oggi.
- **Totale email in errore**: numero totale delle email automatiche inviate dalla creazione del tuo hosting che sono tornate in errore in OVHcloud.
- **Storico delle email inviate**: grafico che mostra lo storico delle email inviate dal tuo hosting Web nei giorni precedenti.

Sulla destra, diversi pulsanti permettono di gestire l'invio di email automatiche dal tuo hosting Web. A seconda dello stato del servizio, alcuni potrebbero non essere disponibili.

- **Bloccare l'invio**: blocca la distribuzione dell'invio delle email automatiche dal tuo hosting Web. Le email generate dai tuoi script dopo il blocco non saranno inviate, ma conservate in coda per un massimo di 72 ore.
- **Sblocca l'invio**: sblocca l'invio delle email automatiche dal tuo hosting Web. Le email in coda verranno rimesse in distribuzione.
- **Rimuovere le email**: cancella le email presenti nella coda di attesa e sblocca l'invio delle email.

Per effettuare l'azione desiderata, clicca sul pulsante corrispondente e poi su `Conferma`{.action}. In alcuni casi l'azione desiderata può richiedere decine di minuti per essere pienamente efficace.

> [!primary]
>
> Per evitare un utilizzo improprio delle email automatiche dell'hosting, ti consigliamo vivamente di configurare un sistema di sicurezza, ad esempio un "captcha da inserire nei form di contatto del tuo sito Web.
>

Se rilevi che le email generate dai tuoi script non sono più inviate mentre lo stato del servizio consente sempre l'invio (*"Attivato"* o *"Forza"*), ti consigliamo di:

- **verificare gli script che eseguono gli invii**: gli script potrebbero non riuscire a inviare le email a causa di un errore di sintassi. Verifica il contenuto dei tuoi script, correggili se necessario ed effettua un nuovo test.

- **provare l'invio di un'email tramite uno script di test**: crea uno script di test che esegue l'emissione di un'email al tuo indirizzo personale utilizzando questo codice:

```bash
<?php
$to = "RecipientEmail@adress.tld"; 
$subject = "Test mail PHP"; 
$content = "The body/content of the Email";
$headers = "From: Website <SendingEmail@address.tld>\r\nReply-To: SendingEmail@address.tld";

if (mail($to, $subject, $content, $headers))
echo "The email has been sent successfully!";
else
echo "Email did not leave correctly!";
?>
```

Per la `$headers` inserisci due volte lo stesso indirizzo email mittente.

Se ricevete correttamente il messaggio *The email has been sent successfully!* sull'indirizzo email che avete definito alla linea `$to`, ciò indica che gli script che inviano le vostre email contengono degli errori.

- **Assicurati che le tue spedizioni non utilizzino server SMTP**: non specificare server SMTP nei parametri dei tuoi script quando utilizzi la funzione "mail()" di PHP. Se disponi di un'interfaccia per amministrare l'invio delle email dal tuo sito Web, modifica questa impostazione nella configurazione di quest'ultimo.

- **Verifica la dimensione totale della tua email**: L'email inviata non deve superare la dimensione totale di **10 MB** (inclusa incapsulazione e intestazione). Il contenuto stesso della tua email non dovrà quindi superare i **7/8 MB**.

### gestire gli stati "Disattivato", "Bouance" e "SPAM"

#### Lo stato "Disattivato"

Questo stato si verifica quando:

- sono state inviate troppe email molto rapidamente
- troppe email sono tornate in errore
- hai disattivato la funzionalità dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

Per sbloccare la situazione, accedi alla sezione `Web cloud`{.action}, clicca su `Hosting`{.action} e seleziona l'hosting interessato nella lista. Clicca sulla scheda `Plus`{.action} e poi su `Script email`{.action}.

Infine clicca su `Sblocca l'invio`{.action} e attendi qualche minuto fino a quando il servizio di invio non sarà nuovamente attivo.

#### Lo stato "Bouance"

Questa condizione si verifica quando una certa percentuale delle tue email inviate automaticamente è tornata in errore.

Per sbloccare la situazione, accedi alla sezione `Web cloud`{.action}, clicca su `Hosting`{.action} e seleziona l'hosting interessato nella lista. Clicca sulla scheda `Plus`{.action} e poi su `Script email`{.action}.

Sono possibili due opzioni:

- Se clicchi su `Sblocca l'invio`{.action}, lo stato del servizio passerà in *"Force"*. Il rapporto **email fuorviato / numero totale di invio di email inviate** autorizzato prima di un blocco sarà raddoppiato. L'invio sarà nuovamente operativo pochi minuti dopo lo sblocco.
- Se clicchi su `Rimuovi le email`{.action}, eliminerai tutte le email dalla coda di attesa e il servizio tornerà in *"Attivato"* senza raddoppiare il rapporto.

#### Lo stato "SPAM"

Questo stato di cose si verifica quando le email considerate SPAM sono state emesse dal tuo hosting.

In genere, questo blocco è accompagnato dall'invio di un'email intitolata **"Abuso con il tuo hosting domain.tld"** generato automaticamente dai nostri sistemi di sicurezza:

![hosting](images/AbuseMail.png){.thumbnail}

A fronte di questa situazione, sono possibili tre casi:

- **Caso 1: utilizzo di un modulo di contatto da parte di un robot**:

Per correggere questa situazione, è necessario proteggere tutti gli script in grado di inviare email dal tuo hosting, con l'aiuto di un sistema di tipo "Captcha".

Accedi alla sezione `Web cloud`{.action}, clicca su `Hosting`{.action} e seleziona l'hosting interessato nella lista. Clicca sulla scheda `Plus`{.action} e poi su `Script email`{.action}.

Clicca su `Rimuovi le email`{.action}, cancella tutte le email dalla coda di attesa e il servizio torna in*"Attivato"*.

In questo caso è necessario effettuare un spurgo per cancellare gli SPAM in attesa di invio.

- **Caso 2: file malevoli iniettati nel tuo hosting**:

Per correggere questa situazione, è necessario effettuare almeno le seguenti azioni:

- Analizza i [log del tuo hosting](https://docs.ovh.com/it/hosting/hosting_condiviso_consulta_le_statistiche_e_i_log_del_tuo_sito/) per identificare le falle di sicurezza e i file infetti.
- Elimina o correggi i file/moduli malevoli
- Per i CMS (Wordpress, Joomla, Prestashop, Drupal, ecc...), aggiorna il CMS, il plugin e il tema associati.
- Proteggi i tuoi form di contatto con un "captcha".

Se utilizzi un CMS, scegli i plugin/i/i/i tema/i "ufficiale/i".
Aggiorna il CMS, i plugin e il tema associati il più regolarmente possibile per evitare che si ripeta.

Una volta attivato l'hosting, accedi alla sezione `Web cloud`{.action}, clicca su `Hosting`{.action} e seleziona l'hosting interessato nella lista. Clicca sulla scheda `Plus`{.action} e poi su `Script email`{.action}.

Clicca su `Rimuovi le email`{.action}, cancella tutte le email dalla coda di attesa e il servizio torna in*"Attivato"*.

In questo caso è necessario effettuare un spurgo per cancellare gli SPAM in attesa di invio.

- **Caso 3: Invio di email legittime considerate SPAM**:

Se all'origine delle email che hanno causato il blocco, trovi qui di seguito alcuni esempi di**modalità da evitare** durante l'invio di un'email (in modo che non sia considerato troppo "facilmente" come SPAM):

- 3 parole o più in maiuscolo nel soggetto/oggetto dell'email
- Nessun soggetto/testo inserito nell'email
- L'email contiene solo un'immagine di dimensione superiore a 1 MB e qualche parola.
- L'oggetto dell'email inizia con: Hi, FREE, BUY, BUYING....
- L'email contiene più del 70% di bianco (errore sul tasto "SPAZIO" o "INGRESSO" della tastiera).
- La polizia di scrittura utilizzata per la redazione dell'email è estremamente elevata.
- Il colore della scrittura e il colore dello sfondo sono gli stessi per scrivere l'email
- L'indirizzo IP pubblico (ad esempio, IP del tuo punto di accesso Internet) è registrato presso le organizzazioni di rinomanza.
- L'intestazione dell'email inviata non rispetta gli RFC "email" (standard o standard email).
- I link presenti nell'email non sono corretti
- Un URL nell'email non è sicuro (esempio: dichiarata in `https://` quando l'URL esiste solo in `http://`)
- L'email contiene termini pornografici o che si avvicinano.
- L'email contiene un eseguibile (EXE, BAT, PIF, XML, XLSX o documenti con "macros"), anche se è "zippato".

Se, nonostante questo, lo stato del servizio torna allo stato *"SPAM"*, rispondi all'email automatica ricevuta precisando di aver effettuato le azioni necessarie.

Il nostro servizio anti-spam analizzerà la situazione e il nostro supporto ti riferirà sulla procedura di sblocco.

### Invio email con uno script "SMTP" <a name="SMTP"></a>

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Mettiamo a tua disposizione la sezione che seguirà per supportarti in caso di necessità. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/it/). OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione "Per saperne di più" di questa guida.
>

Anche se ti consigliamo vivamente di privilegiare l'utilizzo della funzione "mail()" di PHP, gli hosting condivisi permettono di inviare email passando per uno script che utilizza il protocollo SMTP (Simple Mail Transfer Protocol). La dimensione totale della tua email non potrà superare i **10 MB** (cioè **7/8 MB senza incapsulamento**).

> [!warning]
> 
> Le email emesse con uno script che utilizzano una configurazione SMTP non potranno essere gestite e monitorate dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).
> 

utilizzando il seguente script, sostituendo i valori `Host`, `Username` e `Password` con i parametri SMTP:

```bash
$mail->Host = "your.smtp.server";
$mail->SMTPAuth = true; 
$mail->SMTPSecure = "ssl";
$mail->Port = 465; 
$mail->Username = "e-mail@adress.tld"; 
$mail->Password = "YourEmailPassword"; 
```

> [!primary]
>
> Se utilizzi un indirizzo email OVHcloud e solo in questo caso, puoi anche utilizzare `SMTPSecure` *"startls"* o *"tls"* con `Port` **587**. Tuttavia, la `SMTPSecure` *"ssl"* con la `Port` **465** restano da privilegiare.
>

## Per saperne di più <a name="go-further"></a>

[Consultare i log del vostro hosting](https://docs.ovh.com/it/hosting/hosting_condiviso_consulta_le_statistiche_e_i_log_del_tuo_sito/)

[Correggere la pagina "403 Forbidden" che compare sul tuo sito](https://docs.ovh.com/it/hosting/diagnostic-403-forbidden/)

[Ripristina lo spazio di storage FTP del tuo hosting](https://docs.ovh.com/it/hosting/web_hosting_recupera_un_backup_completo_o_un_file_in_ftp_con_filezilla/)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.