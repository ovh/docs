---
title: 'Phishing - Come riconoscere e-mail fraudolente?'
excerpt: "Come riconoscere un'e-mail di phishing e cosa fare se hai cliccato su un link fraudolento?"
updated: 2026-03-03
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

Il phishing è una tecnica fraudolenta finalizzata a ingannare l'utente per indurlo a comunicare dati personali (credenziali di accesso, password, ecc.) e/o bancari, spacciandosi per un soggetto terzo o un sito affidabile.<br>
Nella pratica, si tratta spesso dell'invio di un'e-mail o di un SMS che invita a cliccare su un link. Questo link reindirizza verso un modulo che riprende fraudolentemente i colori di un marchio e invita a inserire le proprie credenziali personali.

**Questa guida ti spiega come riconoscere un'e-mail o un SMS di phishing e quali misure adottare se hai cliccato su un link fraudolento.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/RED6EuCLFjk?si=9ppewOVm_bXymThM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Procedura

### Ho ricevuto un'e-mail o un SMS a nome di OVHcloud, come sapere se è legittimo?

#### Riconoscere un'e-mail di phishing

Prima di tutto, verifica se l'e-mail che hai ricevuto è visibile anche nella pagina [I miei messaggi](/links/control-panel/account-messages). Troverai le copie delle e-mail ufficiali inviate da OVHcloud.

Inoltre, ecco alcuni elementi che ti aiuteranno a distinguere visivamente un'e-mail autentica di OVHcloud da un tentativo di phishing.

Clicca sull'immagine per ingrandirla. Troverai i dettagli e le spiegazioni nella tabella sottostante.

![Differenza tra e-mail OVHcloud e e-mail di phishing](images/EN-legit-and-phishing-email.png){.thumbnail}

> [!primary]
>
> I numeri nella tabella corrispondono a quelli visibili nell'immagine qui sopra.

|Numero - descrizione|E-mail OVHcloud legittima|E-mail di phishing fraudolenta|
|---|---|---|
|1 - Mittente|Verifica che l'indirizzo utilizzato per l'invio dell'e-mail termini con un nome di dominio (o un sottodominio, ad esempio `events.ovhcloud.com`) appartenente a OVHcloud (vedi l'elenco qui sotto)|Il mittente dell'e-mail sarà molto probabilmente un indirizzo che non proviene da OVHcloud.|
|2 - Oggetto|Verifica che il tuo identificativo **(che inizia generalmente con le iniziali della persona che ha creato l'account OVHcloud)** e/o l'indirizzo e-mail del tuo account siano presenti nell'oggetto del messaggio.|Molto spesso, l'e-mail sarà contrassegnata come \[SPAM] e **il tuo identificativo non apparirà o sarà errato**.|
|3 - Link|**Senza cliccarci sopra, passa il puntatore del mouse sul link o sul pulsante** e vedrai direttamente la destinazione (in basso nel browser). Nel nostro esempio, il link punta correttamente a un indirizzo https://www.ovh.com/. Quando clicchi su un link, verifica sempre l'indirizzo nel browser. OVHcloud utilizza un insieme di nomi di dominio riconoscibili, generalmente ovhcloud.com o ovh.com (vedi qui sotto l'elenco dei domini legittimi e i suggerimenti per verificare un link sospetto).|In un'e-mail di phishing, il link non corrisponderà a una pagina ufficiale OVHcloud. **Non cliccarci sopra.**|
|4 - Intestazione e piè di pagina dell'e-mail|OVHcloud invia e-mail in formato TXT e HTML. L'intestazione conterrà il logo OVHcloud, il piè di pagina dell'e-mail conterrà informazioni legali relative a OVHcloud.|L'intestazione o il piè di pagina potrebbero contenere link che non hanno nulla a che fare con OVHcloud. **Non cliccarci sopra.**|

/// details | **Elenco dei nomi di dominio OVHcloud legittimi** (clicca per visualizzarlo)

- ovhcloud.com
- ovh.com
- ovh.fr
- services.ovhcloud.com
- news.ovhcloud.com
- clientmanager.fr
- kimsufi.com
- soyoustart.com
- ovh.ca
- ovh.com.au
- ovh.co.uk
- ovh.ie
- ovh.de
- ovh.es
- ovh.it
- ovh.lt
- ovh-hosting.fi
- ovh.net
- ovh.nl
- ovh.pl
- ovh.pt
- ovh.sn
- ovh.us
- robot.ovh.net

Le e-mail possono anche provenire da sottodomini autentici:

- events.ovhcloud.com
- news.soyoustart.com
- services.kimsufi.com

///

/// details | **Suggerimenti per verificare un link sospetto** (clicca per visualizzarli)

**Leggere l'URL da destra a sinistra**

Il vero nome di dominio si trova appena prima del primo `/` nell'indirizzo. Le URL di phishing aggiungono spesso parole prima del dominio per renderlo credibile:

- `https://www.ovhcloud.com/account/login` — il vero dominio è **ovhcloud.com** ✓
- `https://ovhcloud.com.login-secure.xyz/account` — il vero dominio è **login-secure.xyz** ✗

Per trovare il vero dominio, guarda la barra degli indirizzi e leggi **dal primo `/` verso sinistra** — le ultime due parti prima di questa barra obliqua sono il dominio reale.

**Attenzione ai caratteri simili**

I truffatori sostituiscono a volte lettere con caratteri visivamente simili per creare indirizzi ingannevoli:

- `ovhcIoud.com` (I maiuscola al posto della L minuscola)
- `0vhcloud.com` (zero al posto della lettera O)
- `ovhclould.com` (lettera aggiuntiva)

Se qualcosa ti sembra insolito, non cliccare. Digita `ovhcloud.com` manualmente nel tuo browser.

**Gli abbreviatori di URL sono un segnale di allarme**

I link brevi come `bit.ly/xxx`, `tinyurl.com/xxx` o `t.co/xxx` mascherano la destinazione reale. OVHcloud non utilizza **mai** abbreviatori di URL nelle sue e-mail ufficiali.

**Su mobile: pressione prolungata invece del passaggio del mouse**

Su uno smartphone o un tablet, non è possibile passare il mouse su un link. In alternativa, effettua una **pressione prolungata** (tieni premuto il dito sul link senza rilasciarlo). Apparirà un'anteprima dell'URL completo. Se il dominio non ti è noto, non aprire il link.

**In caso di dubbio, accedi direttamente al sito**

Il riflesso più sicuro: **non cliccare mai su un link in un'e-mail per accedere al tuo account**. Apri il tuo browser e digita `www.ovhcloud.com` manualmente, poi accedi dal sito. Se OVHcloud necessita di un'azione da parte tua, vedrai la notifica nel tuo Spazio Cliente.

///

#### Riconoscere un SMS di phishing

OVHcloud non ti invierà **mai** un link via SMS. Gli SMS che inviamo sono generalmente legati alla [doppia autenticazione nel tuo Spazio Cliente](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa).

Di seguito troverai 2 esempi di SMS: il primo è legittimo e corrisponde alla doppia autenticazione. Il secondo SMS è fraudolento.

![SMS fraudolento](images/sms-phishing.png){.thumbnail}

#### Come segnalare un'e-mail di phishing?

Dopo aver effettuato le verifiche spiegate sopra, se sei certo di aver ricevuto un'e-mail di phishing che usurpa l'identità di OVHcloud, puoi segnalarcela salvando l'e-mail come file (`.eml` o `.msg`) e inviandola come **allegato** di un nuovo messaggio all'indirizzo **<fraude@ovh.com>**.

Questi formati di file conservano le informazioni tecniche nascoste (chiamate "intestazioni") di cui i nostri team hanno bisogno per risalire alla fonte della frode e intervenire.

> [!warning]
>
> **Non inoltrare direttamente l'e-mail di phishing.** Inoltrandola, è la tua casella di posta che invia il contenuto fraudolento, il che potrebbe comportare il blocco del tuo indirizzo e-mail considerato come mittente di spam. Salva piuttosto l'e-mail come file e allegala a un **nuovo** messaggio.

**Come salvare un'e-mail come file:**

Clicca sul titolo corrispondente all'applicazione di posta che utilizzi.

**Software di posta (desktop)**

/// details | **Outlook per Windows**

Esistono due versioni di Outlook per Windows: **Outlook classico** e il **nuovo Outlook**. Per distinguerle, digita "Outlook" nella barra di ricerca di Windows. La versione classica mostra la dicitura *"(classico)"*, mentre il nuovo Outlook non presenta indicazioni particolari.

![Outlook Windows - identificare la versione](images/outlook-windows-identify01.png){.thumbnail .h-500}

**Outlook classico:**

1. Seleziona l'e-mail di phishing nella posta in arrivo (non aprirla).
2. Clicca su `File`{.action} nella barra dei menu, poi su `Salva con nome`{.action}.
3. Nel menu a discesa "Tipo di file", seleziona **Formato messaggio di Outlook - Unicode (.msg)**.
4. Scegli una posizione sul tuo computer (ad esempio il Desktop) e clicca su `Salva`{.action}.

Puoi anche **trascinare** l'e-mail dalla posta in arrivo direttamente sul Desktop. Verrà creato un file `.msg` che potrai allegare alla tua segnalazione.

**Nuovo Outlook:**

1. Nell'elenco dei messaggi, fai **clic destro** sull'e-mail di phishing.
2. Seleziona `Salva con nome`{.action}, poi scegli `Salva come file EML`{.action}.
3. Scegli una posizione sul tuo computer e clicca su `Salva`{.action}.

///

/// details | **Thunderbird**

1. Fai clic destro sull'e-mail di phishing nella posta in arrivo.
2. Seleziona `Salva con nome`{.action}.
3. L'e-mail verrà salvata come file `.eml`. Scegli una posizione sul tuo computer e clicca su `Salva`{.action}.

///

/// details | **Apple Mail (macOS)**

1. Seleziona l'e-mail di phishing nella posta in arrivo.
2. Nella barra dei menu, clicca su `File`{.action} > `Salva con nome`{.action}.
3. Scegli il formato **Sorgente non elaborata del messaggio**, seleziona una posizione sul tuo computer e clicca su `Salva`{.action}.

///

**Webmail (browser)**

/// details | **OWA - Outlook Web Application**

1. Apri l'e-mail di phishing.
2. Clicca sui **tre punti orizzontali** (...) in alto a destra dell'e-mail.
3. Seleziona `Visualizza`{.action} > `Visualizza origine messaggio`{.action}.
4. Seleziona tutto il testo (`Ctrl+A` o `Cmd+A`), copialo (`Ctrl+C` o `Cmd+C`), incollalo in un editor di testo semplice (ad esempio Blocco note o TextEdit) e salva il file con estensione `.eml`.

///

/// details | **Roundcube (Webmail OVHcloud)**

1. Seleziona l'e-mail di phishing nella posta in arrivo.
2. Clicca su `Altro`{.action} (o l'icona **...**) nella barra degli strumenti.
3. Seleziona `Scarica (.eml)`{.action}.
4. Il file verrà salvato nella cartella Download.

///

/// details | **Zimbra (Webmail OVHcloud)**

1. Seleziona l'e-mail di phishing nella posta in arrivo.
2. Clicca su `Altro`{.action} nella barra degli strumenti.
3. Seleziona `Visualizza originale`{.action}. Il contenuto grezzo dell'e-mail si aprirà in una nuova scheda del browser.
4. In questa nuova scheda, utilizza `Ctrl+S` (o `Cmd+S` su macOS) per salvare la pagina. Salva il file con estensione `.eml` (se il browser propone `.txt`, rinomina il file dopo il salvataggio).

///

/// details | **Gmail**

1. Apri l'e-mail di phishing.
2. Clicca sui **tre punti verticali** (...) in alto a destra dell'e-mail.
3. Seleziona `Scarica messaggio`{.action}.
4. Un file `.eml` verrà salvato nella cartella Download.

///

Una volta salvato il file, crea una **nuova e-mail** destinata a **<fraude@ovh.com>** e allega il file.

> [!primary]
>
> Ti preghiamo di notare che le informazioni che ci comunicherai potranno essere condivise con terzi al fine di permetterci di combattere queste minacce.
>

### Ho inserito le mie informazioni personali: cosa fare?

Clicca sui titoli qui sotto per visualizzare le istruzioni.

/// details | **Se hai inserito il numero della tua carta di credito su un sito fraudolento**

Contatta rapidamente la tua banca per bloccare il tuo mezzo di pagamento. Indica loro la data e, se possibile, l'ora in cui hai inserito il numero della tua carta di credito.

**La tua banca è l'unica in grado di annullare le transazioni fraudolente che potrebbero essere state effettuate a tua insaputa.**

///

/// details | **Se hai inserito la tua password OVHcloud su un sito fraudolento**

Accedi alla pagina [Sicurezza](/links/control-panel/account-security) e modifica immediatamente la tua password.<br>

Troverai nella nostra guida "[Modificare la password del tuo account](/pages/account_and_service_management/account_information/manage-ovh-password)" il metodo per modificare la tua password dal tuo Spazio Cliente, nonché le nostre raccomandazioni per generare una password efficace e salvarla in un gestore di password.

Ti consigliamo vivamente di attivare anche la [doppia autenticazione](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa) per proteggere in modo duraturo il tuo account.

> [!primary]
>
> Come promemoria, per proteggere efficacemente i tuoi dati, la tua password deve:
>
> - contenere almeno dodici caratteri;
> - contenere almeno 1 lettera maiuscola, 1 lettera minuscola e 1 cifra;
> - contenere caratteri speciali (ad esempio: `%`, `#`, `:`, `$`, `*`);
> - non essere tratta dal dizionario;
> - non contenere informazioni personali (nome, cognome o data di nascita);
> - non essere utilizzata per diversi accessi utente;
> - essere conservata in un gestore di password;
> - essere modificata ogni tre mesi;
> - essere diversa dalle password precedenti.
>

///

## Per saperne di più

[Definire e gestire la password del tuo account](/pages/account_and_service_management/account_information/manage-ovh-password)

[Proteggere il tuo account OVHcloud con la doppia autenticazione](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Proteggere il mio account OVHcloud e gestire le mie informazioni personali](/pages/account_and_service_management/account_information/all_about_username)

Contatta la nostra [Community di utenti](/links/community).
