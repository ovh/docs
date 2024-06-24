---
title: "Tutorial - Installa manualmente Grav"
excerpt: "Scopri come installare un CMS Grav su un hosting Web OVHcloud"
updated: 2024-03-28
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Il **CMS** (**C**ontent **M**anagement **S**ystem) Grav permette di sviluppare rapidamente dei siti Web. Progettato per una gestione ottimizzata dei contenuti tramite file Markdown, Grav si presta perfettamente alla creazione di siti Web personali o di progetti per piccole imprese, senza comprometterne la qualità o la personalizzazione.

**Questa guida ti mostra come installare manualmente un CMS Grav su un hosting Web OVHcloud.**

## Prerequisiti

- Disporre di una soluzione di [hosting Web OVHcloud](/links/web/hosting).
- Disporre di un [dominio](/links/web/domains).
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).

## Procedura

### Prepara l'installazione

Per installare il CMS **Grav** sul tuo [hosting Web](/links/web/hosting), è necessario effettuare alcuni preparativi.

Segui **gli step** descritti nel nostro tutorial sull'[installazione manuale di un CMS](/pages/web_cloud/web_hosting/cms_manual_installation) prima di proseguire con lo step successivo.

### Completa l'installazione manuale

> [!primary]
>
> Prima di continuare l'installazione, svuota la cache del tuo browser per evitare qualsiasi malfunzionamento.
>

#### Accedi al tuo sito Web Grav tramite il tuo browser

Inserite il vostro nome a dominio nella barra di ricerca del vostro browser Internet.

Se i file di origine di Grav sono stati inseriti correttamente nella cartella di root, viene visualizzata la pagina `your-domain/admin`:

![Grav installation](/pages/assets/screens/other/cms/grav/first_page_config.png){.thumbnail}

Compila il form per creare un utente admin e clicca su `Create User`{.action} per confermare.

Una volta connesso all’interfaccia di amministrazione di Grav, inizia a personalizzare il tuo sito Web.

### Personalizza il tuo sito Web Grav

Una volta effettuato l’accesso come amministratore alla dashboard di Grav, è possibile accedere a una serie di opzioni per configurare e personalizzare il sito Web.

#### Configurazione generale del sito Web

##### Configurazione del sistema

Nel menu principale di Grav, clicca su `Configuration`{.action}, poi sulla scheda `Site`{.action}, modifica il nome del tuo sito Web, imposta la lingua di default o configura diverse impostazioni associate al tuo sito Web.

Per migliorare le prestazioni del sito Web, attiva la cache. Clicca sulla scheda `System`{.action} e poi su `Caching`{.action}. Identifica la linea `Caching`{.action} e spunta `Yes`{.action}.

![Grav installation](/pages/assets/screens/other/cms/grav/activate_cache.png){.thumbnail}

##### Configurazione dei supporti

Nel menu principale di Grav, seleziona `Configuration`{.action}, poi nella scheda `System`{.action}, clicca su `Media`{.action}. In questa pagina è possibile impostare il comportamento dei supporti del sito Web, ad esempio immagini, video e documenti.

#### Gestione dei contenuti

##### Pagine

Nel menu principale di Grav, clicca su `Pages`{.action} per visualizzare la lista di tutte le pagine del tuo sito Web. Crea nuove pagine, modifica quelle esistenti e organizza la struttura del sito Web.

Per visualizzare e modificare il contenuto di una pagina, fare clic sul nome della pagina nell'elenco. Ad esempio, clicca su `Home`{.action} per modificare il titolo della pagina principale del sito Web e il suo contenuto.

![Grav installation](/pages/assets/screens/other/cms/grav/list_pages.png){.thumbnail}

##### Temi

Nel menu principale di Grav, clicca su `Themes`{.action} per modificare l’aspetto del tuo sito Web. Installare nuovi temi o selezionarne uno già installato come tema attivo.

Per modificare il tema attivo, fare clic sul tema con l'etichetta `Active Theme`.

![Grav installation](/pages/assets/screens/other/cms/grav/theme_active.png){.thumbnail}

Nella nuova pagina, personalizza il tema attivo.

#### Backup e aggiornamento

##### Backup

Il backup del sito Web permette di ripristinarne lo stato precedente in caso di malfunzionamenti.

Nel menu principale di Grav, clicca su `Tools`{.action}, seleziona `Backup Now`{.action} in alto a destra dello schermo che appare, poi `Download Backup`{.action} per scaricare il backup del sito Web sul tuo computer. Aggiorna la pagina `Backup` per visualizzare il backup nella lista `Backup History`{.action}.

![Grav installation](/pages/assets/screens/other/cms/grav/backup_history.png){.thumbnail}

##### Aggiornamento

Mantenere aggiornato il sistema è fondamentale per la sicurezza e le prestazioni del sito Web. Nel menu principale di Grav, clicca su `Check for Updates`{.action} per scoprire gli aggiornamenti disponibili.

### Conclusione

Il CMS Grav è stato installato manualmente sull’hosting Web OVHcloud. Dopo aver configurato il sito Web, aggiunto contenuti, personalizzato il tema e installato i plugin, il sito Grav è accessibile online con il dominio.

## Per saperne di più <a name="go-further"></a>

[Tutorial - Installa manualmente WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Installa manualmente Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Installa manualmente Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Installa manualmente PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

[Tutorial - Installa manualmente Pico](/pages/web_cloud/web_hosting/cms_manual_installation_pico)

[Tutorial - Installa manualmente Typo3](/pages/web_cloud/web_hosting/cms_manual_installation_typo3)

[Tutorial - Installa manualmente SPIP](/pages/web_cloud/web_hosting/cms_manual_installation_spip)

[Tutorial - Installa manualmente un CMS sul tuo hosting](/pages/web_cloud/web_hosting/cms_manual_installation)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Contatta la nostra [Community di utenti](/links/community).