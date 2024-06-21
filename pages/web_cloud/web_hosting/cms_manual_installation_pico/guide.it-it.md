---
title: "Tutorial - Installare manualmente Pico"
excerpt: "Questa guida ti mostra come installare manualmente il tuo CMS Pico"
updated: 2024-03-21
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Il **CMS** (**C**ontent **M**anagement **S**ystem) Pico permette di creare rapidamente siti Web. Progettato per creare e gestire contenuti con facilità utilizzando file Markdown, Pico è ideale per progettare siti Web personali, portfolio o progetti di piccole imprese.

**Questa guida ti mostra come installare manualmente il CMS Pico sul tuo hosting Web OVHcloud.**

## Prerequisiti

- Disporre di una soluzione di [hosting Web OVHcloud](/links/web/hosting).
- Disporre di un [dominio](/links/web/domains).
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).

## Procedura

### Prepara l'installazione

Per installare il CMS **Pico** sul tuo [hosting Web](/links/web/hosting), è necessario effettuare alcuni preparativi.

Segui gli step** descritti nel nostro tutorial sull'[installazione manuale di un CMS](/pages/web_cloud/web_hosting/cms_manual_installation) prima di proseguire con lo step successivo.

### Completa l'installazione manuale

> [!primary]
>
> Prima di continuare l'installazione, svuota la cache del tuo browser per evitare qualsiasi errore.
>

#### Accedere al sito Web Pico tramite browser

Inserite il vostro nome a dominio nella barra di ricerca del vostro browser Internet.

Se i file di origine di Pico sono stati inseriti correttamente nella cartella principale, viene visualizzata la pagina seguente:

![Pico installation](/pages/assets/screens/other/cms/pico/welcome_page.png){.thumbnail}

Pico è un CMS basato su file, il che significa che tutta la configurazione e la creazione di contenuto avviene direttamente modificando i file sul server. Di seguito vengono descritti i passaggi da eseguire per configurare e personalizzare il sito Web Pico.

#### Comprendere la struttura delle cartelle di Pico

Dopo l'installazione, troverai diverse cartelle e file nella directory principale di Pico. I più importanti sono:

- `content/`: contiene i file Markdown del tuo contenuto
- `config/`: contiene il file di configurazione `config.yml` di Pico
- `themes/`: contiene i temi del sito Web
- `assets/`: contiene risorse statiche come immagini, fogli di stile CSS, script JavaScript, ecc.
- `plugin/`: contiene i plugin che vuoi utilizzare

#### Configurazione di base

**1. Configura il tuo sito Web** : apri il file `config/config.yml` con un editor di testo. Configura i parametri di base del sito Web, come titolo, descrizione, URL o temi.

**2. Modificare il titolo e la descrizione del sito Web**: cerca le righe per `site_title:` e `site_description:` nel file `config/config.yml` per aggiornare il titolo e la descrizione del sito Web.

**3. Modifica il titolo e la descrizione del tuo sito Web** : se hai un dominio specifico, cerca la riga per `base_url:` nel file `config/config.yml` per aggiornare il nome di dominio del tuo sito Web. In caso contrario, lasciare il valore predefinito `~`.

#### Aggiungi contenuto

**1. Crea pagine** : per aggiungere una nuova pagina al sito Web, crea un nuovo file Markdown (.md) nella cartella `content/`. Il nome del file determinerà l'URL della pagina. Ad esempio, `about.md` sarà accessibile all’indirizzo http://yourdomain.tld/about.

**2. Scrivi contenuti**: apri il file Markdown con un editor di testo e inizia a scrivere il contenuto. Utilizzare la sintassi Markdown per formattare il testo, creare collegamenti, inserire immagini e così via. Se ad esempio si desidera modificare la pagina principale (home) del sito Web, aprire il file `index.md` e inserire il contenuto desiderato.

**3. Verifica contenuto**: i file Markdown devono avere un'intestazione YAML valida. Se l'intestazione è mancante o non è formattata correttamente, Pico potrebbe non riconoscerla come pagina valida. Un esempio di intestazione YAML valida è:

```bash
---
title: About
---
Your content here
```

#### Personalizza il tema

**1. Seleziona un tema**: Pico è installato con un tema di default, ma è possibile scaricarne altri dal [sito Web ufficiale di Pico](https://picocms.org/themes/) o crearne uno proprio.

**2. Modifica tema** : per modificare il tema, aggiorna la sezione `theme:` nel file `config/config.yml` con il nome della cartella del tema che vuoi utilizzare.

**3. Personalizza tema** : è possibile modificare i file del tema in `themes/yourtheme/` per personalizzare l’aspetto del sito Web. Questo può includere la modifica di file HTML Twig, CSS e JavaScript.

#### Aggiungi plugin

Pico permette di estendere le sue funzionalità con plugin.

**1. Trova plugin** : consulta il [sito ufficiale di Pico](https://picocms.org/plugins/) per accedere alla lista dei plugin disponibili.

**2. Installa un plugin** : scarica il plugin e mettilo nella cartella `plugin/` della tua installazione Pico.

**3. Configura il plugin**: alcuni plugin richiedono una configurazione aggiuntiva in `config/config.yml`. Seguire le istruzioni fornite con il plugin.

### Conclusione

Il CMS Pico è stato installato manualmente sul tuo hosting Web OVHcloud. Dopo aver configurato il sito Web, aggiunto contenuti, personalizzato il tema e installato i plugin, il sito Web Pico è accessibile online con il dominio.

## Per saperne di più <a name="go-further"></a>

[Tutorial - Installare manualmente WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Installare manualmente Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Installare manualmente Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Installare manualmente PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

[Tutorial - Installare manualmente Typo3](/pages/web_cloud/web_hosting/cms_manual_installation_typo3)

[Tutorial - Installare manualmente Grav](/pages/web_cloud/web_hosting/cms_manual_installation_grav)

[Tutorial - Installare manualmente SPIP](/pages/web_cloud/web_hosting/cms_manual_installation_spip)

[Tutorial - Installare manualmente un CMS sul tuo hosting](/pages/web_cloud/web_hosting/cms_manual_installation)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Contatta la nostra [Community di utenti](/links/community).