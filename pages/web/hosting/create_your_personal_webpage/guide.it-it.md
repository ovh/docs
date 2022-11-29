---
title: Tutorial - Creare la propria pagina personale in OVHcloud
slug: create-your-own-web-page
excerpt: Come creare la tua prima pagina Web su un hosting gratuito Start 10M
section: Tutorial
order: 01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 22/11/2022**

## Obiettivo

Questa guida ti mostra come creare la prima pagina di un sito Web su un hosting Start 10M offerto gratuitamente con l'acquisto di un dominio OVHcloud.

## Prerequisiti

- Disporre di un [dominio](https://www.ovhcloud.com/it/domains/)
- Disporre di un piano di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/) o di un [hosting gratuito Start 10M](https://www.ovhcloud.com/it/domains/free-web-hosting/)
- Disporre di un editor di testo (ad esempio blocchi di testo, TextEdit, Notepad++, ecc...)
- Aver installato un client FTP (come [Cyberduck](https://cyberduck.io/), [FileZilla](https://filezilla-project.org/download.php), ecc...) per trasferire (depositare sull'hosting) i suoi file sul suo spazio dedicato.

## Prima di iniziare

### Di cosa è fatta una pagina web?

Il contenuto di un sito web è spesso costituito da diverse pagine web. Una pagina web mostra un contenuto, inserito o meno, che è stato configurato per essere utilizzato come esperienza di navigazione. Le pagine visualizzate sul browser sono il risultato di tre componenti che spiegheremo:

- **HTML (HyperText Markup Language)**: linguaggio utilizzato per strutturare le tue pagine. La "struttura" designa gli elementi e la loro organizzazione.<br>
**Esempio**: un titolo di documento sarà seguito da un sottotitolo e da uno o più paragrafi.

Gli elementi utilizzati per strutturare il vostro contenuto sono chiamati "targhette" e si scrivono utilizzando caponi che aprono e chiudono.<br>
**Esempio**: Il tag `<p>` designa quello che inizia un paragrafo e lo stesso paragrafo è chiuso dal tag `</p>`. 

>[!warning]
>
> Per tutti i tag aperti deve essere creato un tag chiuso. Le luci non si sovrappongono (si chiudono nell'ordine inverso dell'apertura) e non possono essere interpretate in modo diverso dalle luci HTML.
>

Sono disponibili oltre un centinaio di targhette, ma è possibile realizzare il tuo sito con alcune di esse.

- **Il CSS (Cascading Style Sheet, fogli di stile a cascata)**: linguaggio che descrive il modo in cui saranno posizionati, dimensionati, comportamentali, colorati o visualizzati gli elementi HTML. Tali regole possono essere applicate a elementi generici (lo stesso colore per tutti i titoli del sito, o la polizia che sarà utilizzata per tutti i testi) o a elementi precisi (il testo contenuto nel footer, il comportamento al sorvolo del menu di navigazione).

- **JavaScript**: linguaggio che consente di arricchire le interazioni su un sito Web (o un'applicazione web). Pur essendo indispensabile per gli sviluppatori web, non è obbligatorio per creare il tuo sito web.<br>
Se non conosci il codice nei diversi linguaggi citati, puoi copiare/incollare gli esempi di codice forniti in questa guida, ti permetteranno di avere un sito web utilizzabile sul tuo hosting.

### Quali strumenti utilizzare?

Per creare una pagina Web, inizia scrivendo in un file il tuo codice sorgente a partire da uno dei tre linguaggi citati sopra. Ecco i nomi principali dell'estensione: *".html"* (per i tuoi file HTML), *".css"* (per i tuoi file CSS), *".js"* (per i tuoi file JavaScript).

I file possono essere scritti in editor di testo, inclusi quelli disponibili di default sul tuo sistema operativo (block note, TextEdit). Numerose soluzioni Open Source gratuite offrono funzionalità aggiuntive: [Notepad++](https://notepad-plus-plus.org/), [Bracket](https://brackets.io/), [Sublime Text](https://www.sublimetext.com/) o ancora [Micro](https://micro-editor.github.io/). È inoltre possibile utilizzare un IDE (Integrated Development Environment, ambiente di sviluppo integrato) come [Visual Studio Code](https://code.visualstudio.com/) o [Geany](https://www.geany.org/).

Per visualizzare e adattare le tue pagine prima di depositarle sul tuo hosting, utilizza il tuo browser web. per aprire il file dalla sua posizione locale direttamente sul browser.

### Sito **statico** o sito **dinamico**?

Un sito Web è detto **statico** quando le pagine visualizzate con il tuo browser sono sempre identiche e non offrono interazioni particolari se non gli effetti (menu a tendina, ad esempio), animazioni e video.

Per contro, un sito web **dinamico** sottintende che le pagine visualizzate sono generate dal server web che esegue il codice, accede a un database, ecc. Questo permette di fornire un risultato in funzione delle richieste fatte dall'utente (consultazione di voci, autenticazione, invio di dati tramite un modulo, consultazione di stock o inventari, ecc.).

### Cos'è il linguaggio PHP?

PHP (*PHP Hypertext Preprocessor*) è un linguaggio utilizzato principalmente nello sviluppo Web. Funziona esclusivamente sul server, quindi non è necessario per costruire gli elementi visibili sul tuo browser. ma sarà utile, ad esempio, per recuperare i messaggi inviati tramite il form di contatto del tuo sito.

## Procedura

Gli step seguenti ti permetteranno di realizzare la tua prima pagina Web.

### Costruisci il contenuto della tua pagina utilizzando il codice HTML

Per realizzare la tua prima pagina web, crea una directory, ovunque sul tuo computer, in cui potrai inserire tutti i tuoi file.

Assegna un nome al primo file `index.html`, conterrà il codice HTML. È il primo file da creare perché i server HTTP sono configurati di default per far sì che la richiesta fatta sul tuo hosting (digitando il tuo dominio nella barra degli indirizzi di un browser) mostri il file "index".

Apri il tuo editor di testo e salva il tuo file di lavoro. 

> [!primary]
> 
> Per effettuare backup, ti consigliamo di conservare diverse copie di questa cartella di lavoro.
> Il sito sarà disponibile sul tuo hosting, ma è più sicuro conservare una copia in locale e backup su altri supporti, come hard disk esterni.
>

#### Composizione di una pagina HTML type

Le pagine HTML sono sempre strutturate nello stesso modo:

- una dichiarazione DOCTYPE che indica al browser di leggere il contenuto che segue rispettando al massimo gli standard;
- un tag `<html>` che incoraggerà tutte le altre targhette del documento;
- un tag `<head>` che contiene informazioni sulla codifica della pagina e il suo titolo;
- un tag `<body>` che contiene il "corpo" della tua pagina HTML.

Puoi copiare/incollare questo codice nel tuo file `index.html`:

```html
<!DOCTYPE html>
<html lang="it">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>mia pagina personale</title>
    </head>
    <body>
         
    </body>
</html>
```

Alcune targhette contengono più informazioni di altre, come il tag `<html lang="en">` dell'esempio di cui sopra.<br>
In questo caso si parla di attributi che permetteranno di precisare alcuni elementi. In questo caso, indicare la lingua principale della pagina web. Alcuni di questi attributi sono universali e possono essere utilizzati su tutte le targhette (salvo qualche eccezione), altri sono specifici.

Il tag `<head>` include elementi che non saranno visualizzati sullo schermo. Le targhette `<meta>` daranno indicazioni al browser, ma anche ai motori di ricerca, come la codifica dei caratteri utilizzati nel documento (UTF-8 nell'esempio precedente) o le informazioni sulla visualizzazione su cellulare (nell'esempio precedente, "viewport").
Il tag `<title>` è molto importante. Ti permette di determinare il titolo della tua pagina che apparirà sulla scheda del tuo browser, ma soprattutto che sarà indicizzato dai motori di ricerca.<br>
Questo titolo ti permetterà, ad esempio, di apparire nei risultati di ricerca su Google, DuckDuckGo, etc.<br>
Posizionarsi al massimo in questi risultati è un esercizio definito dalle regole SEO (*Search Engine Optimization*). Non tratteremo questo tema in questo articolo.

Il tag `<body>`, invece, conterrà le altre targhette HTML che struttureranno il tuo documento.

#### Completare con un titolo, un sottotitolo e il contenuto

Modificheremo il contenuto testuale della tua pagina, rispettando la struttura standard HTML, per aggiungervi un titolo, un sottotitolo, paragrafi e liste di testo.

- **I segnali `<h1>` fino a `<h6>`**

I titoli si scrivono tra etichette `<h...>`, che sono gerarchizzate come su qualsiasi documento: prima `<h1>`, poi `<h2>`, ecc., l'ultima delle quali è il tag `<h6>`. Il tag `<h1>` è quindi indispensabile per scrivere un tag `<h2>`. Se non si rispetta questa regola, il browser mostrerà il risultato senza errori.

```html
<body>
    <h1>Benvenuto sulla mia pagina personale</h1>
    <h2>Crea rapidamente e facilmente il tuo sito Web</h2>
</body>
```

Puoi osservare il risultato aprendo il file HTML tramite un browser Internet (Firefox, Chrome, Safari, etc.): le due stringhe di caratteri saranno visualizzate con dimensioni diverse.

- **Il tag `<p>`**

Questo tag viene utilizzato per inserire testo ("p" per paragrafo). È possibile posizionarne diversi:

```html
<body>
    <h1>Benvenuto sulla mia pagina personale</h1>
    <h2>Crea rapidamente e facilmente il tuo sito Web</h2>
    <p>OVHcloud propone, sulla sua offerta Start 10M, gratuitamente, un hosting per l'acquisto di un dominio.</p>
</body>
```

- **Le luci `<ul>` e `<li>`**

In HTML, puoi utilizzare liste. Prenderemo l'esempio di liste semplici, dette "non ordinate" (come quelle disponibili nell'elaborazione di testi). Per segnalare una lista, utilizza il tag `<ul>` (*unordered list*). Questo tag incoraggerà altri elementi, le etichette `<li>`, che conterranno il contenuto delle vostre liste:

```html
<body>
    <h1>Benvenuto sulla mia pagina personale</h1>
    <h2>Crea rapidamente e facilmente il tuo sito Web</h2>
    <p>
        <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
    </p>
    <p>OVHcloud propone, sulla sua offerta Start 10M, gratuitamente, un hosting per l'acquisto di un dominio.</p>
    <p>L'offerta "Dominio" include:</p>
    <ul>
        <li>Hosting Web 10 MB incluso</li>
        <li>Account E-mail 5 GB inclusi</li>
        <li>DNSSEC: protezione contro l'avvelenamento della cache (cache poisoning)</li>
        <li>Easy Redirect: accesso ai social network dal tuo dominio</li>
    </ul>
</body>
```

Puoi vedere il risultato nel tuo browser: di default, gli elementi delle liste sono visualizzati con chip.

#### Aggiungi immagini per rendere la tua pagina più attraente

Il web è soprattutto un mezzo visivo. In questa sezione vedremo come inserire le immagini nel tuo contenuto. L'offerta Start 10M ti offre uno spazio di storage da 10 MB. È sufficiente per le tue pagine HTML e CSS, ma può essere limitato per mettere molte immagini sul tuo sito. In questo caso, ti consigliamo di optare per un'[offerta di hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/) che permetta di usufruire di uno storage di maggiore entità.

Il tag HTML utilizzato per visualizzare un'immagine è il tag `<img>`. Contrariamente alle luci che abbiamo visto prima, non c'è apertura e chiusura di questo elemento. Parleremo di targhette autofermanti. Sono gli attributi di questo tag che permettono di collegare la posizione del file e il testo descrittivo dell'immagine.

##### **Ottimizza le tue immagini**

Un'immagine grande è un'immagine che richiederà tempo per essere caricata dal tuo browser, soprattutto se i tuoi visitatori utilizzano uno smartphone o un tablet collegato alla rete 4G o 5G.
In generale, è necessario ottimizzare le immagini e limitarne il peso. Questo peso è espresso in byte. Le unità generalmente utilizzate sono i kilobyte (1 KB = 1.000 byte) o i megabyte (1 MB = 1.000.000 byte). Un'immagine superiore a qualche decina di KB è considerata pesante e merita di essere ottimizzata. 

**Esempio**: se le tue immagini pesano ciascuna 1 MB, sarai limitato a meno di 10 immagini sul tuo hosting Start10M. Se riuscite a ridurre la loro dimensione tra i 50 KB e i 200 KB, potrete presentarne fino a un centinaio sulla vostra pagina web.

Ti consigliamo di semplificare al minimo i file:

- limitate la definizione delle vostre immagini ridimensionandole alla dimensione alla quale saranno visualizzate sul vostro sito;
- la dimensione è espressa in pixel larghezza×altezza (ad esempio, 300×250 pixel è la larghezza di un'immagine pubblicitaria standard);
- modifica la risoluzione (il "web" utilizza una risoluzione predefinita di 72 dpi)
- scegli i formati compresso come *JPEG*, *PNG* o *Webp*;
- è possibile utilizzare anche un formato vettoriale (SVG);
- evitate i formati non compresso *BPM* e *TIFF*.

##### **Salva le tue immagini sul tuo hosting**

Per motivi di leggibilità, è necessario salvare le immagini in una directory dedicata:

![Arborescenza file e cartelle](images/create_your_personal_webpage_1.png){.thumbnail}

Prendiamo un file in formato *PNG*. Inseriscilo nella directory "images":

![Arborescenza file e cartelle con immagine](images/create_your_personal_webpage_2.png){.thumbnail}

Ora creeremo un nuovo paragrafo in cui inseriremo l'immagine (in questo esempio non precisiamo la dimensione della visualizzazione dell'immagine in pixel. Il browser visualizzerà il file in base alla dimensione originale.

```html
<body>
    <h1>Benvenuto sulla mia pagina personale</h1>
    <h2>Crea rapidamente e facilmente il tuo sito Web</h2>
    <p>
        <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
    </p>
    <p>OVHcloud propone, sulla sua offerta Start 10M, gratuitamente, un hosting per l'acquisto di un dominio.</p>
    <p>L'offerta "Dominio" include:</p>
    <ul>
        <li>Hosting Web 10 MB incluso</li>
        <li>Account E-mail 5 GB inclusi</li>
        <li>DNSSEC: protezione contro l'avvelenamento della cache (cache poisoning)</li>
        <li>Easy Redirect: accesso ai social network dal tuo dominio</li>
    </ul>
</body>
```

Il risultato sul tuo browser dovrebbe essere :

![Risultato del codice HTML sul browser](images/create_your_personal_webpage_3.png){.thumbnail}

### Applica una forma al tuo contenuto grazie agli stili CSS

Abbiamo visto come strutturare i tuoi contenuti in HTML. Il risultato è minimalista con uno stile che si limita a taglie di titoli e sottotitoli definiti di default.
I fogli di stile permettono di cambiare l'aspetto e il comportamento degli elementi codificati in HTML.

#### Norme di carattere generale

##### **Crea un file CSS**

Come per i file HTML, i file CSS possono essere creati con qualsiasi editor di testo. L'estensione di questi file deve essere in *.css*.

![Posizionamento file CSS](images/create_your_personal_webpage_4.png){.thumbnail}

Ora dobbiamo collegare questo file CSS, che abbiamo chiamato per convenzione *style.css*, alla nostra pagina HTML. Questo link si effettua aggiungendo un tag `<link>` nel tag `<head>` nel file index.html:

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>mia pagina personale</title>
    <link rel="stylesheet" href="style.css">
</head>
```

Per verificare, dichiareremo nel nostro foglio di stile un colore definito per ogni elemento `<h1>` della nostra pagina web. Modifica il file style.css aggiungendo queste righe:

```html
h1 {
    color: red;
}
```

Questo insieme di istruzioni è chiamato "regola CSS" e significa: tutti gli elementi HTML `<h1>` avranno il colore *(color)* rosso *(red)*.

Puoi testare un altro colore sull'elemento `<h2>`, i paragrafi e gli elementi della lista:

```html
h1 {
    color: red;
}
 
h2 {
    color: blue;
}
 
p {
    color: slategray;
}
 
li {
    color: slategray;
}
```

Aggiorna la pagina del tuo browser premendo sul tasto `F5` della tua tastiera: il tuo titolo apparirà in rosso.

I browser hanno degli stili predefiniti, in particolare delle regole specifiche per il posizionamento degli elementi. Modificheremo di conseguenza il file CSS e preciseremo una regola che si applicherà a tutti gli elementi HTML visualizzati dal browser. Il selettore `*` (stella), chiamato selettore universale, viene posizionato all'inizio del file CSS:

```html
* {
    padding: 0;
    margin: 0;
}
```

Noterete che i testi sono attaccati ai bordi del browser.

La proprietà padding definisce il bordo rotante (margine interno), cioè lo spazio esterno al blocco che contiene il testo (o qualsiasi elemento). Il seguente schema illustra la corrispondenza di questi termini in quello che in CSS viene chiamato "modello di scatole":

![Modello della scatola CSS](images/create_your_personal_webpage_5.png){.thumbnail}

### Migliorare la struttura HTML del documento

Abbiamo posizionato elementi base nel tuo tag `<body>`: `h1`, `h2`, `p`, `ul` e `li`.

Nella sua ultima iterazione, il linguaggio [HTML5](https://html.spec.whatwg.org/) propone nuove targhette che permettono di strutturare meglio un documento e di arricchirlo da un punto di vista semantico. Un documento classico (anche su supporto tradizionale) include blocchi visivamente identificabili che possono essere riprodotti in HTML:

- un intestino, che figurerà in un tag `<header>` (da non confondere con il tag `<head>`);
- contenuto principale, definito da un tag `<main>`;
- infine, un piede di pagina, descritto dall'evento `<footer>`.

Ognuno di questi elementi può essere utilizzato per utilizzi specifici:

- l'`header` conterrà, ad esempio, il menu di navigazione (a sua volta incorniciato da un tag `<nav>`);
- in `main` figureranno tutti gli elementi connessi al contenuto, che possono anche strutturare in modo ancora più preciso il documento (`section`, `article`, `aside`, `div`, ecc.);
- il `footer` conterrà informazioni più generiche, come i collegamenti ai social network, le indicazioni legali, le condizioni generali di utilizzo e forse un altro menu di navigazione.

Il tuo codice HTML sarà strutturato come segue:

```html
<!DOCTYPE html>
<html lang="it">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>mia pagina personale</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
                <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
        </header>
        <main>
            <h1>Benvenuto sulla mia pagina personale</h1>
            <h2>Crea rapidamente e facilmente il tuo sito Web</h2>
            <p>OVHcloud propone, sulla sua offerta Start 10M, gratuitamente, un hosting per l'acquisto di un dominio.</p>
            <p>L'offerta "Dominio" include:</p>
            <ul>
                <li>Hosting Web 10 MB incluso</li>
                <li>Account E-mail 5 GB inclusi</li>
                <li>DNSSEC: protezione contro l'avvelenamento della cache (cache poisoning)</li>
                <li>Easy Redirect: accesso ai social network dal tuo dominio</li>
            </ul>
        </main>
        <footer>
            <p>© 2022 La mia pagina personale</p>
        </footer>
    </body>
</html>
```

### Rendere un elemento interattivo

I link che permettono di navigare da una pagina all'altra su un sito sono elementi essenziali del web. Per attuarle, utilizza il tag `<a>` (_anchor_, ancora), che rende un elemento interattivo, accompagnato da un attributo `href` che conterrà l'URL verso cui puntare. Nel seguente esempio renderemo interattivo il logo contenuto nel tag `<header>`:

```html
<header> 
    <a href="index.html">
        <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
    </a>
</header>
```

Possiamo farlo allo stesso modo per rendere il testo interattivo:

```html
<p>L'offerta <a href="https://www.ovhcloud.com/it/domains/">"Dominio"</a> comprende:</p>
```

Per visualizzare la destinazione del link in una nuova scheda, è sufficiente aggiungere un attributo `target` nel tuo tag `<a>`:

```html
<p>L'offerta <a href="https://www.ovhcloud.com/it/domains/" target="_blank">"Dominio"</a> comprende:</p>
```

### Come archiviare contenuti sul tuo hosting?

Per rendere visibili le tue pagine e quindi il tuo sito, è necessario depositarle sul tuo hosting (è necessario attivare il tuo hosting [come indicato in questa guida](https://docs.ovh.com/it/hosting/attivare_start10m/)).

Il trasferimento dei file avviene tramite un protocollo dedicato: il **FTP** (per **F**ile **T**ransfert **P**rotocollo). Utilizza un software dedicato per questa operazione, come [FileZilla](https://filezilla-project.org/download.php?type=client) e [Cyberduck](https://cyberduck.io/download/).

### Crea il tuo sito in FTP

Per salvare i tuoi file sul tuo hosting, consulta la guida sull'[utilizzo di FileZilla](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_filezilla/).

Una volta che i file sono stati trasferiti completamente sul tuo hosting, puoi visualizzare il risultato digitando il tuo dominio nella barra degli indirizzi del tuo browser o premendo il tasto `F5` della tua tastiera per ricaricare la pagina se sei già sul tuo sito.

> [!warning]
> 
> La nostra infrastruttura comprende un sistema di cache che permette alle tue pagine di visualizzarsi con la minor latenza possibile. Una volta implementato, è possibile che non si visualizzino immediatamente le modifiche apportate al browser. In questo caso, attendi qualche secondo e aggiorna la cache del tuo browser con la combinazione di tasti `Ctrl` + `F5`.
> 

### Migliora il tuo sito con un template

CSS e HTML sono linguaggi di facile comprensione per un risultato rapido. Tuttavia, questi linguaggi, e in particolare il CSS, hanno registrato una notevole evoluzione. Se le foglie di stili a cascata offrono più funzionalità (animazioni, degradate, posizione degli elementi sulla pagina, ecc.), sono diventate più complesse da codificare.

Per guadagnare tempo con l'aspetto del tuo sito e permetter di focalizzarti sui contenuti, e quindi sui referenziati, è comune utilizzare i *template* per guadagnare tempo e ottenere un risultato di qualità sia graficamente che funzionalmente (design, ergonomia, visibilità su smartphone e tablet).

#### Cos'è un template? Quali soluzioni utilizzare?

Un *template* è un modello o un esempio che si può riutilizzare, adattandolo o no. L'utilizzo dei *templates* permette di risparmiare tempo nella progettazione di un sito adattando elementi già progettati, offrendo nel contempo le qualità che si possono esigere da un sito "professionale". Il termine "tema" può essere utilizzato anche per altri scopi.

Esistono soluzioni Open Source gratuite disponibili su Internet, come [Bootstrap](https://materializecss.com/), [Materialize](https://materializecss.com/), [Foundation](https://get.foundation/) o ancora [Semantic UI](https://semantic-ui.com/). Questi strumenti sono denominati "framework": librerie che facilitano la creazione di siti o applicazioni web. Offrono elementi standardizzati, personalizzabili e riutilizzabili e tutta la community propone *template* riutilizzabili.

#### Bootstrap

Tra gli strumenti utilizzati dagli sviluppatori web, Bootstrap è il framework più comune. Sviluppato inizialmente nel 2010 da ingegneri che lavorano per Twitter per armonizzare lo sviluppo delle interfacce sviluppate internamente. Disponibile su licenza Open Source dal 2011, Bootstrap è cambiato costantemente in base ai cambiamenti tecnologici (evoluzione delle tecnologie e degli usi) e resta indispensabile.

Alcuni esempi di siti e applicazioni Web realizzati con Bootstrap:

- [https://themes.getbootstrap.com/](https://themes.getbootstrap.com/)
- [https://bootswatch.com/](https://bootswatch.com/)
- [https://bootstrapmade.com/](https://bootstrapmade.com/)
- [https://bootstraptaste.com/](https://bootstraptaste.com/)
- [https://bootstrapthemes.co/](https://bootstrapthemes.co/).

## Per saperne di più

Troverai molte risorse sul Web per imparare e migliorare la tua pratica, per copiare elementi interi di codice o porzioni di codice, per aggiungere funzionalità al tuo sito senza rischiare di avere errori o malfunzionamenti. Ecco alcuni siti di riferimento:

- [Iniziare con l'HTML](https://developer.mozilla.org/it/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [Guide di riferimento sulle luci HTML](https://developer.mozilla.org/it/docs/Web/HTML)
- [Tutorial W3Schools su HTML](https://www.w3schools.com/html/)
- [Tutorial CSS Mozilla](https://developer.mozilla.org/it/docs/Web/CSS/Tutorials)
- [CSS Tutorial W3 Schools](https://www.w3schools.com/css/).

### Rielaborare le tue immagini

Numerosi strumenti gratuiti ti permettono di rielaborare le tue illustrazioni:

- L'applicazione [Photos](https://apps.microsoft.com/store/detail/photos-microsoft/9WZDNCRFJBH4) Windows 10 e 11
- L'applicazione [Photos](https://support.apple.com/it/guide/photos/welcome/mac) macOS
- [Paint.Net](https://www.getpaint.net/), [GIMP](https://www.gimp.org/), [darktable](https://www.darktable.org/)
- e le applicazioni di ritocco fotografico disponibili sui tuoi smartphone Android o iOS.

Trovi anche le risorse online:

- [Compressor](https://compressor.io/)
- [ShrinkMe](https://shrinkme.app/)
- [Free Online Image Optimizer](https://kraken.io/web-interface)
- [TinyJPG](https://tinyjpg.com/) e [TinyPNG](https://tinypng.com/).

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
