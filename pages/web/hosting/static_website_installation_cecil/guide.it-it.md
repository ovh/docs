---
title: "Tutorial - Installazione e configurazione di Cecil, un generatore di siti statici (SSG) in PHP"
slug: install-configure-cecil
excerpt: "Scopri come Cecil ti permette di creare il tuo sito statico con l'aiuto di un motore template moderno (Jamstack)"
section: Tutorial
order: 04
---

**Ultimo aggiornamento: 19/01/2023**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

Questa guida ti mostra come installare e configurare [Cecil](https://cecil.app/){.external}. È un'applicazione scritta in PHP che permette di generare e gestire pagine Web statiche.

Un sito Web composto principalmente da pagine Web statiche garantisce tempi di caricamento migliori per i tuoi utenti e una maggiore sicurezza. Senza contenuto dinamico, le tue pagine sono più resistenti agli attacchi informatici. La generazione di un sito statico permette di usufruire di una maggiore libertà per creare il sito Web che preferisci. Risparmierete tempo anche perché non avrete inizio da zero.

**Questa guida ti mostra come Cecil ti permette di creare il tuo sito statico con l'aiuto di un motore template moderno (Jamstack).**

## Prerequisiti

- Disporre di una [offerta di hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/) con accesso SSH Questo accesso permette di installare online una o più soluzioni alternative a quelle proposte di default nelle nostre soluzioni di hosting Web.
- Aver familiarità con l'inserimento da riga di comando
- Essere in grado di trasferire file in FTP con un cliente come [FileZilla](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_filezilla/)
- Impostare la tua zona DNS per far puntare il tuo dominio (o sottodominio) verso il tuo hosting Web condiviso. Questa operazione è utile se vuoi ospitare più siti in [multisiti](https://docs.ovh.com/it/hosting/configurare-un-multisito-su-un-hosting-web/) sul tuo hosting web condiviso.
- Installare preventivamente [Comporre](https://getcomposer.org/){.external} con il file `composer.phar` alla radice del tuo hosting Web condiviso o nella cartella di destinazione del tuo dominio.

## Procedura

I [hosting web condivisi](https://www.ovhcloud.com/it/web-hosting/) permettono di dichiarare domini o sottodomini in multisiti. Per implementare il tuo sito Web con **Cecil** è necessario un dominio o un sottodominio.

Per aiutarti a dichiarare un dominio o un sottodominio su un multisito sul tuo hosting, consulta la nostra pagina "[Condivisione dell'hosting tra più siti](https://docs.ovh.com/it/hosting/configurare-un-multisito-su-un-hosting-web/)".

### Crea la directory in cui saranno presenti i tuoi file

Una volta connesso in SSH al tuo hosting Web, crea una directory alla radice con questo comando :

```sh
mkdir mystaticwebsite
```

Sostituisci `mystaticwebsite` con il nome della cartella scelta (senza accenti e senza spazi).

Clicca su questa directory:

```sh
cd mystaticwebsite
```

Sostituisci `mystaticwebsite` con il nome della tua cartella.

### Scaricamento

Nella directory che hai appena creato, scarica Cecil:

```sh
curl -OL https://github.com/Cecilapp/Cecil/releases/latest/download/cecil.phar
```

### Installazione

Avvia l'installazione di Cecil con il comando:

```sh
php cecil.phar new:site
```

Inserisci gli elementi richiesti:

- il titolo del tuo sito _(title)_
- _baseline_
- l'URL del tuo sito Web (ad esempio, `https://mywebsite.ovh`)
- una descrizione del tuo sito Web

![Installazione Cecil](images/static_website_installation_cecil01.png){.thumbnail}

Una volta inseriti questi elementi, è necessario implementare il sito digitando questo comando:

```sh
php cecil.phar build
```

Visualizzando il contenuto della directory, vedrete la presenza di una directory `_site`. La directory conterrà tutti i file HTML e gli assets:

![Installazione Cecil](images/static_website_installation_cecil02.png){.thumbnail}

Puoi visualizzare il risultato accedendo al tuo dominio:

![Installazione Cecil](images/static_website_installation_cecil03.png){.thumbnail}

#### Configurazione del puntamento del dominio o sottodominio

Per visualizzare il risultato del tuo sito sul browser, modifica il puntamento del tuo dominio o sottodominio nella directory `_site` creata precedentemente al momento dell'installazione di **Cecil**.

Se il tuo dominio o sottodominio è ospitato in OVHcloud, consulta le nostre guide relative alla [configurazione DNS](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/) e all'installazione di un [multisito sul tuo hosting web](https://docs.ovh.com/it/hosting/configurare-un-multisito-su-un-hosting-web/).

### Configura il tuo sito

Le informazioni generali del tuo sito possono essere configurate nel file `config.yml`:

```sh
nano config.yml
```

Sostituisci le informazioni predefinite con le tue e salva il file.

![File di configurazione YAML](images/static_website_installation_cecil04.png){.thumbnail}

### Crea una nuova pagina

Le pagine che contengono i dati del tuo sito vengono create utilizzando file in formato _Markdown_. Queste pagine sono personalizzabili. **Cecil** integra il motore _template_ [Twig](https://twig.symfony.com/){.external} che è utilizzato di default con _framework_ [Symfony](https://symfony.com/){.external}.

I fascicoli e i file sono organizzati come segue:

- `assets` : contiene elementi grafici, audio e video, script JavaScript e stili (CSS, Sass) 
- `layouts`: directory in cui saranno i _templates_
- `pagine` : luogo dove saranno i tuoi file _Markdown_
- `_site`: directory che contiene i file generati e che è indicato dal tuo dominio
- `static`: tutti i file statici di tipo PDF

#### Crea un file _Markdown_ da riga di comando

Alla radice del sito, esegui questo comando:

```sh
php cecil.phar new:page mypage.md
```

Alla radice della directory `/pages` viene creato un file `mypage.md`.

Sostituisci `mypage` con il nome della tua pagina.

![Installazione Cecil](images/static_website_installation_cecil05.png){.thumbnail}

#### Genera i file statici

Sempre alla radice, inserisci questo comando :

```sh
php cecil.phar build
```

Il tuo file si trova nella directory `_site/mypage/`:

![Installazione Cecil](images/static_website_installation_cecil06.png){.thumbnail}

Lo si può visualizzare sul server digitando l'URL del sito, seguito da `/mypage/`:

![Risultato browser](images/static_website_installation_cecil07.png){.thumbnail}

### Personalizza i file del tuo sito

#### Modifica sul server

Per modificare i file _Markdown_ è possibile accedere direttamente al server di hosting Web. Sulla tua offerta di [hosting Performance](https://www.ovhcloud.com/it/web-hosting/performance-offer/), il tuo accesso SSH permette di utilizzare indifferentemente [GNU nano](https://nano-editor.org/){.external}, [vi](https://ex-vi.sourceforge.net/){.external} o [vim](https://www.vim.org/){.external}.
Le schermate di questo tutorial sono state effettuate con **GNU nano**.

Modifica il file `mypage.md` nella directory `pages` digitando questo comando se sei alla radice del tuo sito:

```sh
 nano pages/mypage.md
```

Sostituisci `mypage` con il nome della tua pagina.

![Modifica del file in GNU nano](images/static_website_installation_cecil08.png){.thumbnail}

Aggiungi alcune linee rispettando la sintassi _Markdown_:

![Aggiunta di contenuto nel file](images/static_website_installation_cecil09.png){.thumbnail}

Elimina i file nella cache con il comando seguente:

```sh
php cecil.phar clear
```

Ricostruisci le tue pagine dopo aver salvato il tuo file:

```sh
php cecil.phar build
```

torna alla pagina per visualizzare il risultato:

![Pagina aggiornata](images/static_website_installation_cecil10.png){.thumbnail}

#### Modifica la tua postazione di lavoro

Se preferisci utilizzare il tuo editore di codice abituale, collegati con un client FTP al tuo server per recuperare i file sul tuo computer:

![Scarica con FileZilla](images/static_website_installation_cecil11.png){.thumbnail}

Ora puoi modificare i file nel tuo I.D.E.:

![Visualizzazione in Visual Studio Code](images/static_website_installation_cecil12.png){.thumbnail}

È sufficiente inviare i file modificati o i nuovi file sul tuo server e di *rebuilder* per avere online le tue pagine.

### Aggiungi la pagina generata al menu del tuo sito

Per aggiungere questa nuova pagina al menu del sito web, modifica manualmente l'intestazione del file `.md` aggiungendo la seguente riga:

```sh
menu: mano
```

### Conclusioni

**Cecil** è uno strumento che permette di costruire in modo efficace un sito statico a partire da file *Markdown*, linguaggio di configurazione più semplice da utilizzare dell'HTML. L'organizzazione dei file Markdown condiziona la gerarchia delle tue pagine Web.<br/>
Utilizzare un motore template, molto utilizzato nella comunità degli sviluppatori web, ti permetterà di trovare facilmente numerose fonti su Internet per progettare un'interfaccia di apparenza professionale.

## Per saperne di più

Il [sito ufficiale dell'applicazione Cecil](https://cecil.app/){.external}

Uno [guida al formato Markdown](https://www.markdownguide.org/){.external}

Consulta la guida sull'utilizzo di FileZilla (https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_filezilla/)
