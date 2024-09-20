---
title: "Tutorial - Iniziare a utilizzare WordPress"
excerpt: "Questa guida ti mostra come creare un sito Web con CMS WordPress"
updated: 2024-07-15
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Questa guida ti mostra come creare i tuoi primi contenuti, organizzarli, metterli online e modificare il tema del tuo sito Web con il Content Management System (CMS) **WordPress**. È possibile realizzare il tuo sito senza particolari conoscenze di programmazione, con una vasta scelta di tematiche come siti web aziendali, blog o siti per diffondere la tua attività o passione.

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Mettiamo a tua disposizione questo tutorial per supportarti nelle operazioni più frequenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a [fornitore specializzato](/links/partner) o [amministratore del CMS WordPress](https://wordpress.com/support/){.external}. OVH non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questo tutorial.
>

**Questa guida ti mostra come creare un sito Web con CMS WordPress.**

## Prerequisiti

- Disporre di un'offerta di [hosting web](/links/web/hosting) che contiene almeno un database.
- Disporre di un [dominio](/links/web/domains)
- Aver [installato Wordpress](/pages/web_cloud/web_hosting/cms_install_1_click_modules) sul tuo hosting Web
- Avere accesso allo[Spazio Cliente OVHcloud](/links/manager){.external}

## Procedura

Se non lo hai già fatto e prima di continuare, [aggiungi un certificato SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website#step-1-attiva-il-certificato-ssl-sullhosting) sul dominio associato al tuo sito Web.

Durante l'installazione del tuo CMS in 1 click, hai ricevuto un'email contenente gli elementi necessari a proseguire con questa guida:

- il link di accesso all'interfaccia di amministrazione
- il nome dell'amministratore
- un link per ottenere la password amministratore.

Recupera questi elementi prima di proseguire.

### Connettersi all'interfaccia di amministrazione

Accedi al link di accesso all'interfaccia di amministrazione fornito via email durante l'installazione del CMS. Di default l'URL termina con `wp-admin` Se non disponi di un'autenticazione all'interfaccia di amministrazione, **WordPress** ti reindirizzerà automaticamente sul tuo URL terminato con `wp-login`:

![WordPress - Admin login](/pages/assets/screens/other/cms/wordpress/admin-login.png){.thumbnail}

> [!primary]
> 
> Su questa home page è possibile modificare la lingua predefinita dell'interfaccia di **WordPress**. Accedi al menu a tendina, seleziona la lingua scelta e clicca su `Change`{.action}. La lingua può essere modificata successivamente.
> 

Inserisci il login (o il "Nome dell'amministratore") che ti è stato fornito via email e la "Password WordPress" indicata nella stessa email. Digitale della dashboard:

![WordPress - Dashboard](/pages/assets/screens/other/cms/wordpress/dashboard.png){.thumbnail}

### Modifica il tema del tuo sito WordPress

I **temi WordPress** sono insiemi di file che permettono di modificare la presentazione del tuo sito Web senza modificarne il contenuto. Esistono numerosi temi disponibili su Internet, gratuiti e a pagamento, con tematiche diverse (siti web, blog, e-commerce, stampa online, ecc...).

Per modificare il tema, vai nel menu a sinistra della dashboard, clicca su `Aspetto`{.action} e poi su `Temi`{.action}:

![WordPress - Appearance/Themes](/pages/assets/screens/other/cms/wordpress/dashboard-themes.png){.thumbnail}

Scegli un tema tra quelli proposti e clicca su `Attiva`{.action}:

![WordPress - Appearance/Themes](/pages/assets/screens/other/cms/wordpress/themes.png){.thumbnail}

Per visualizzare il risultato, accedi al tuo sito Web con il tuo dominio.

### Scrivi un articolo

WordPress ti permette di creare facilmente contenuti senza conoscere lo sviluppo Web.

Per creare un articolo, clicca su `Articoli`{.action} nel menu a sinistra e poi su `Aggiungi nuovo`{.action}:

![WordPress - Posts/Add New](/pages/assets/screens/other/cms/wordpress/dashboard-add-new-post.png){.thumbnail}

Dalla versione 5, **WordPress** offre un'interfaccia per semplificare la redazione e la formattazione degli articoli: **Gutenberg** È un editore WYSIWYG ("*what you see is what you get*"). Vi permette di comporre direttamente la vostra pagina aggiungendo elementi come titoli, paragrafi, liste, immagini, ecc... :

![WordPress - Gutenberg](/pages/assets/screens/other/cms/wordpress/post-editor.png){.thumbnail}

Clicca su `Aggiungi titolo`{.action} per aggiungere un titolo alla tua pagina:

![WordPress - Gutenberg, add title](/pages/assets/screens/other/cms/wordpress/post-editor-2.png){.thumbnail}

Per aggiungere contenuto, clicca sul simbolo `+`{.action} e seleziona cosa vuoi inserire:

![WordPress - Gutenberg, add block](/pages/assets/screens/other/cms/wordpress/post-editor-3.png){.thumbnail}

Sulla destra della tua pagina, tre link ti permettono di effettuare queste operazioni:

- `Salva bozza`{.action}, operazione che puoi effettuare anche associando `Ctrl` + `S` (o `cmd` + `S` sotto macOS)
- `Anteprima`{.action};
- `Pubblica`{.action} sul tuo sito Web

Nel nostro **esempio**, clicca su `Anteprima`{.action} e poi su `Anteprima in una nuova scheda`{.action}. Scegli il tipo di dispositivo su cui effettuare il rendering (PC, tablet o smartphone):

![WordPress - Preview](/pages/assets/screens/other/cms/wordpress/post-view.png){.thumbnail}

Per tornare all'interfaccia di amministrazione di **WordPress**, clicca sull'icona in alto a sinistra.

### gestire le categorie

**WordPress** permette di definire categorie e associare i tuoi articoli ad una o più di esse. Per gestire le categorie del tuo sito Web, accedi alla sezione `Articoli`{.action} e clicca su `Categorie`{.action}:

![WordPress - Categorie](/pages/assets/screens/other/cms/wordpress/categories.png){.thumbnail}

Inserisci il form per aggiungere una nuova categoria:

- **Nome**: nome della tua categoria quale apparirà sul tuo sito web.
- **Slug**: elemento che apparirà alla fine del tuo URL (utile per migliorare la tua referenziazione).
- **Categoria parente**: permette di classificare le tue categorie (la categoria che crei può essere una sottocategoria di una categoria esistente).
- **Descrizione**: non apparente di default, la descrizione della tua categoria può essere resa visibile da alcuni temi.

![WordPress - Categorie filled](/pages/assets/screens/other/cms/wordpress/categories-2.png){.thumbnail}

Una volta inserite le informazioni, clicca su `Aggiungi una nuova categoria`{.action}:

![WordPress - Categorie added](/pages/assets/screens/other/cms/wordpress/categories-3.png){.thumbnail}

Hai la possibilità di gestire la gerarchia delle tue categorie. Una nuova categoria può essere associata ad una categoria esistente:

![WordPress - Sub-estina](/pages/assets/screens/other/cms/wordpress/categories-4.png){.thumbnail}

### Assegnare una categoria a un articolo

Per assegnare un articolo a una o più categorie, clicca su `Articoli` (Posti). Disporrete dell'elenco contenente tutti gli articoli e il loro statuto. Seleziona il titolo dell'articolo da classificare e clicca su `Modifica rapida`{.action}:

![WordPress - Categorize a post](/pages/assets/screens/other/cms/wordpress/posts-lists.png){.thumbnail}

Per modificare le categorie, seleziona o deseleziona gli elementi elencati nella colonna `Categorie`{.action}:

![WordPress - Set new categto an an existing post](/pages/assets/screens/other/cms/wordpress/posts.png){.thumbnail}

> [!warning]
>
> Selezionare una sottocategoria non comporta la selezione automatica della categoria parente.
>

### Crea pagine

Le pagine devono essere distinte dagli articoli. Sono principalmente utilizzate per scrivere contenuti che non cambieranno nel tempo, come menzioni legali, condizioni generali di utilizzo, ecc.

Accedi alla pagina `Pagine`{.action}:

![WordPress - GB to page](/pages/assets/screens/other/cms/wordpress/pages.png){.thumbnail}

> [!primary]
>
> Di default, esiste una pagina generata all'installazione di **WordPress**. Per motivi di leggibilità, questa pagina è stata eliminata dall'esempio.
>

Clicca su `Aggiungi nuovo`{.action} A questo punto trovi l'editor Gutenberg:

![WordPress - Pagine, Gutenberg page builder](/pages/assets/screens/other/cms/wordpress/pages-editor.png){.thumbnail}

Crea il contenuto della tua pagina e pubblicalo:

![WordPress - Pagine, content](/pages/assets/screens/other/cms/wordpress/post-editor-4.png){.thumbnail}

Puoi tornare alla home page del tuo sito web e avere un link alla tua nuova pagina:

![WordPress - Home page with new page link](/pages/assets/screens/other/cms/wordpress/main-page-view.png){.thumbnail}

### Miglioramento delle permaliane

Di default, i link delle tue pagine **WordPress** sono scritti con una sintassi di tipo `parametro=valore`, `valore` è un numero intero che non è esplicito. La modifica della scrittura dei permaliani permette di avere degli URL con un formato più esplicito. I tuoi URL saranno più leggibili e migliorerà il referenziamento naturale del tuo sito Web.

Accedi alla pagina iniziale della dashboard, clicca su `Impostazioni`{.action} e poi su `Permalink`{.action}:

![WordPress - Settings/Permalinks](/pages/assets/screens/other/cms/wordpress/dashboard-users-permalinks.png){.thumbnail}

Puoi scegliere tra diversi tipi di permaliani. Seleziona il titolo della pubblicazione e conferma in fondo alla pagina:

![WordPress - Settings/Permalinks, select post name pattern](/pages/assets/screens/other/cms/wordpress/permalink-settings.png){.thumbnail}

I tuoi link saranno costruiti utilizzando lo slug inserito precedentemente durante la modifica dei tuoi articoli e delle tue pagine.

## Per saperne di più <a name="go-further"></a>

- Salva i tuoi accessi in un gestore di password come [KeePass](https://keepass.info/){.external}.
- Prova online l'editor di default [Gutenberg](https://wordpress.org/gutenberg/){.external}.
- Alcune risorse dove trovare temi WordPress:
    - [WordPress Themes](https://wordpress.com/themes){.external}
    - [TemplaMonster](https://www.templatemonster.com/wordpress-themes.php){.external}.
    - [Elegant Themes](https://www.elegantthemes.com/){.external}, editore del produttore di temi Divi.
    - [Elementor](https://elementor.com/){.external}, un altro editor di temi.
- Il sito ufficiale [WordPress](https://wordpress.org/){.external}.
- [Utilizzare SFTP per trasferire file o pagine verso WordPress](https://wordpress.com/it/support/sftp/){.external}.

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).