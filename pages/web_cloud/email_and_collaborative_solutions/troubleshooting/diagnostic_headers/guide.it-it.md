---
title: "Recuperare l'header e il file .eml di un'e-mail"
excerpt: "Scopri come recuperare l'header di un'e-mail o estrarre un file .eml dal tuo client di posta, webmail o applicazione esterna"
updated: 2026-03-06
---

<style>
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
</style>

## Obiettivo

L'header di un'e-mail ha il compito di tracciare il percorso seguito dall'e-mail sulla rete, dal mittente al destinatario.<br>
Permette di identificare un'e-mail malevola o di rilevare un rallentamento nella ricezione.

Ogni e-mail ricevuta possiede un header (*header*) che non viene visualizzato di default quando consulti la tua e-mail. Puoi tuttavia recuperarlo dal tuo client di posta o dalla tua webmail.

Puoi anche estrarre l'e-mail nella sua interezza sotto forma di file `.eml`. Questo file può esserti richiesto per analizzare un'e-mail malevola che hai ricevuto.<br>
Per recuperare un file `.eml`, consulta la sezione [webmail](#webmail).

**Scopri come recuperare l'header di un'e-mail ed estrarre un file .eml dal tuo client di posta.**

## Prerequisiti

- Disporre di un indirizzo e-mail su una delle nostre [soluzioni e-mail OVHcloud](/links/web/emails) o una soluzione esterna.
- Avere accesso all'indirizzo e-mail tramite la sua webmail o un software di posta.

## Procedura

### Comprendere il contenuto di un header

L'header è composto da diversi elementi che indicano il percorso dell'e-mail, ordinati in modo anticronologico, insieme a informazioni supplementari.<br>
Di seguito una lista non esaustiva degli elementi che possono comporre un header e il loro significato.

- Il campo `Received` è presente nell'header ad ogni passaggio dell'e-mail su un server di invio (SMTP). In genere si trova il nome host del server con il suo indirizzo IP e la data. I campi `Received` sono ordinati dal passaggio più recente al più vecchio:
<pre class="bgwhite"><code>
Received: from MX Plan7.mail.ovh.net (unknown [10.109.143.250])
	by mo3005.mail-out.ovh.net (Postfix) with ESMTPS id 448F4140309
	for &lt;john@mydomain.ovh&gt; ;Wed, 30 Jun 2021 13:12:40 +0000 (UTC)
</code></pre>
  *Qui l'e-mail è stata trasmessa dal server MX Plan7.mail.ovh.net al server mo3005.mail-out.ovh.net il 30 giugno 2021 alle 13:12:40 (fuso orario UTC)*

- Il campo `Return-Path` corrisponde all'indirizzo di ritorno quando l'invio del messaggio è fallito. L'indirizzo di ritorno è generalmente quello del mittente.
<pre class="bgwhite"><code>
Return-Path: &lt;john@mydomain.ovh&gt;
</code></pre>

- Il campo `From` indica l'indirizzo del mittente dell'e-mail e il suo nome visualizzato.
<pre class="bgwhite"><code>
From: John &lt;john@mydomain.ovh&gt;
</code></pre>

- Il campo `To` indica l'indirizzo del destinatario dell'e-mail e il suo nome visualizzato.
<pre class="bgwhite"><code>
To: Robert &lt;robert@hisdomain.ovh&gt;
</code></pre>

- Il campo `Subject` indica l'oggetto dell'e-mail.
<pre class="bgwhite"><code>
Subject: Hello my friend
</code></pre>

- Il campo `Message-ID` indica l'identificativo unico dell'e-mail e termina con il nome del server di invio (dopo la "@").
<pre class="bgwhite"><code>
Message-ID: &lt;Dc55+mK3j7hdZkf5_r-ff=fjq380ozc2h5@mailserver.domain.ovh&gt;
</code></pre>

- Il campo `Received-SPF` mostra il risultato del controllo [SPF](/pages/web_cloud/domains/dns_zone_spf) effettuato sul dominio del mittente. L'argomento `client-ip` permette di rilevare l'indirizzo IP del server che ha inviato l'e-mail.
<pre class="bgwhite"><code>
Received-SPF: Pass (mailfrom) identity=mailfrom; client-ip=000.11.222.33; helo=mail-smtp-001.domain.ovh; envelope-from=john@mydomain.ovh; receiver=robert@hisdomain.ovh
</code></pre>

- I campi `X-` sono campi personalizzati che completano i campi standard. Sono implementati dai server attraverso cui transitano le e-mail.
<pre class="bgwhite"><code>
X-OVH-Remote: 000.11.222.33 (mail-smtp-001.domain.ovh)
X-Ovh-Tracer-Id: 1234567891011121314
X-VR-SPAMSTATE: OK
X-VR-SPAMSCORE: 0
X-VR-SPAMCAUSE:
</code></pre>

### Recuperare un header da un client di posta

#### Microsoft Outlook

##### **Recuperare l'header**

Esistono due versioni di Outlook per Windows: **Outlook classico** e il **Nuovo Outlook**. Per identificare la tua versione, digita "Outlook" nella barra di ricerca di Windows. Se appare la dicitura "(classico)", stai utilizzando Outlook classico. In caso contrario, si tratta del Nuovo Outlook.

![Outlook Windows - identificare la versione](images/outlook-windows-identify01.png){.thumbnail .h-500}

**Outlook classico:**

1. Fai doppio clic sull'e-mail per aprirla in una finestra separata.
2. Nella nuova finestra, clicca su `File`{.action} in alto a sinistra.
3. Seleziona `Informazioni`{.action} sulla sinistra e clicca su `Proprietà`{.action}.
4. L'header completo dell'e-mail appare nel riquadro inferiore. Seleziona l'intero testo e copialo in un file.

![Header completo in Outlook](images/classic-outlook-01.png){.thumbnail}

**Nuovo Outlook:**

1. Apri l'e-mail che preferisci.
2. Fai **clic destro** sull'e-mail.
3. Seleziona `Vista`{.action} poi `Visualizza dettagli messaggio`{.action}.
4. L'header completo dell'e-mail appare nel riquadro dei dettagli del messaggio. Seleziona l'intero testo e copialo in un file.

![Header completo in Outlook](images/new-outlook-01.png){.thumbnail}

##### **Recuperare il file .eml**

**Outlook classico:**

1. Seleziona l'e-mail nella tua casella di posta (non aprirla).
2. Clicca su `File`{.action} nella barra dei menu.
3. Clicca su `Salva con nome`{.action}.
4. Nel menu a discesa "Tipo file", seleziona **Formato messaggio Outlook - Unicode (.msg)**. Scegli una posizione sul tuo computer (ad esempio il Desktop) e clicca su `Salva`{.action}.

Puoi anche **trascinare** l'e-mail dalla tua casella di posta direttamente sul Desktop. Questo crea un file `.msg` che puoi allegare alla tua segnalazione.

![Salvare msg in Outlook](images/classic-outlook-02.png){.thumbnail}

**Nuovo Outlook:**

1. Nell'elenco dei messaggi, fai **clic destro** sull'e-mail.
2. Seleziona `Salva con nome`{.action}, poi scegli `Salva come file EML`{.action}.
3. Scegli una posizione sul tuo computer e clicca su `Salva`{.action}.

![Salvare un file EML nel Nuovo Outlook](images/new-outlook-02.png){.thumbnail}

#### Mozilla Thunderbird

##### **Recuperare l'header**

1. Seleziona l'e-mail che preferisci.
2. Premi contemporaneamente i tasti `Ctrl` \+ `U` (`Cmd` \+ `U` su macOS).
3. L'header completo dell'e-mail appare in una finestra separata. Seleziona l'intero testo e copialo in un file.

![Header completo in Thunderbird](images/thunderbird-01.png){.thumbnail}

##### **Recuperare il file .eml**

1. Seleziona l'e-mail che preferisci.
2. Premi contemporaneamente i tasti `Ctrl` \+ `S` (`Cmd` \+ `S` su macOS).
3. Il file viene salvato di default in formato `.eml`.

#### Mail di macOS

##### **Recuperare l'header**

1. Seleziona l'e-mail che preferisci.
2. Premi contemporaneamente i tasti `Cmd` \+ `Shift` \+ `H`.
3. L'header completo dell'e-mail appare. Seleziona il testo in grigio e copialo in un file.

![Header completo in Mail di macOS](images/mailmacos-01.png){.thumbnail}

##### **Recuperare il file .eml**

1. Seleziona l'e-mail che preferisci.
2. Premi contemporaneamente i tasti `Cmd` \+ `S`. Il file `.eml` viene creato automaticamente. Seleziona il formato `Sorgente messaggio grezzo`.
3. Scegli una posizione sul tuo computer e clicca su `Salva`{.action}.

![Salvare un eml da Mail di macOS](images/mailmacos-02.png){.thumbnail}

### Recuperare un header su una webmail <a name="webmail"></a>

#### Roundcube

##### **Recuperare l'header**

1. Seleziona l'e-mail che preferisci.
2. Clicca sul pulsante `... Altro`{.action} poi su `< > Mostra sorgente`{.action}.
3. Si apre una nuova finestra con l'header completo dell'e-mail. Seleziona l'intero testo e copialo in un file.

![Mostra sorgente in Roundcube](images/roundcube01.png){.thumbnail}

##### **Recuperare il file .eml**

1. Seleziona l'e-mail che preferisci.
2. Clicca sul pulsante `... Altro`{.action} poi su `Scarica (.eml)`{.action}.

![Scaricare file eml in Roundcube](images/roundcube02.png){.thumbnail}

#### Outlook Web App (OWA) <a name="owa"></a>

##### **Recuperare l'header**

1. Seleziona l'e-mail di cui vuoi visualizzare l'header.
2. Clicca **sulla freccia** a destra di `Rispondi a tutti`{.action} poi su `Visualizza dettagli messaggio`{.action}.
3. Si apre una nuova finestra con l'header completo dell'e-mail, che ti permette di scaricarlo.

![Dettagli del messaggio in OWA](images/owa01.png){.thumbnail}

Consulta anche il nostro video tutorial:

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ivad4FgJ2No?start=36" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##### **Recuperare il file .eml**

1. Clicca su `(+) Nuovo`{.action} per creare una nuova e-mail.
2. Seleziona l'e-mail che vuoi estrarre e trascinala nel contenuto del nuovo messaggio.
3. Clicca sulla freccia verso il basso accanto all'allegato generato, poi clicca su `Scarica`{.action} per salvare il file sul tuo computer.

![Estrarre un file eml da OWA](images/owa02.gif){.thumbnail}

#### Zimbra

##### **Recuperare l'header**

1. Seleziona l'e-mail che preferisci.
2. Clicca su `Altro`{.action} nella barra delle azioni e seleziona `Mostra originale`{.action}.
3. Si apre una nuova finestra con l'header completo e il contenuto grezzo dell'e-mail.

![Dettagli del messaggio in Zimbra](images/zimbra-01.png){.thumbnail}

##### **Recuperare il file .eml**

1. Seleziona l'e-mail che preferisci.
2. Clicca su `Altro`{.action} nella barra delle azioni e seleziona `Mostra originale`{.action}.
3. Nella finestra che si apre, utilizza la scorciatoia `Ctrl` \+ `S` (o `Cmd` \+ `S` su macOS) per salvare la pagina come file `.eml`.

### Recuperare un header da un altro client di posta

#### Gmail

##### **Recuperare l'header**

1. Seleziona l'e-mail in questione.
2. Clicca sui 3 punti verticali a destra e su `Mostra originale`{.action}.
3. Si apre una nuova finestra con l'header completo dell'e-mail.

![Mostra l'originale in Gmail](images/gmail01.png){.thumbnail}

##### **Recuperare il file .eml**

1. Seleziona l'e-mail in questione.
2. Clicca sui 3 punti verticali a destra e seleziona `Scarica messaggio`{.action}.

#### Outlook.com

Per recuperare l'header o estrarre il file `.eml` dall'interfaccia webmail &#60;Outlook.com&#62;, consulta la sezione [Outlook Web App](#owa) di questa guida.

## Per saperne di più

[FAQ e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Contatta la nostra [Community di utenti](/links/community).
