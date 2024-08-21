---
title: "Tutorial - Utilizza WooCommerce con CMS WordPress"
excerpt: "Questa guida ti mostra come utilizzare la soluzione WooCommerce con CMS WordPress"
updated: 2023-02-23
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>
  
## Obiettivo

Scopri come creare un negozio online con l'estensione open source **WooCommerce** con il Content Management System (CMS) **WordPress**. 

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Mettiamo a tua disposizione questo tutorial per supportarti nelle operazioni più frequenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno specialista del settore (/links/partner), [amministratore del CMS WordPress](https://wordpress.com/support/){.external} o [amministratore delegato di WooCommerce](https://woocommerce.com/){.external}. OVH non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questo tutorial.
>
  
## Prerequisiti

- Disporre di un'offerta di [hosting web](/links/web/hosting) che contiene almeno un database.
- Disporre di un [dominio](/links/web/domains)
- Aver precedentemente [installato WordPress](/pages/web_cloud/web_hosting/cms_install_1_click_modules) sul tuo hosting Web

Se non lo hai già fatto, ti consigliamo di utilizzare il protocollo HTTPS prima di continuare con questa guida: "[Attivare HTTPS su un sito Internet tramite il certificato SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)".
  
## Procedura
  
**WooCommerce** è un'estensione di **WordPress** Si installa come qualsiasi estensione.

### Installazione

Accedi alla tua interfaccia di amministrazione digitando `/wp-admin` o `/wp-login` nella barra di ricerca dopo l'URL del tuo dominio (il reindirizzamento avviene automaticamente):

![Admin page of WordPress](/pages/assets/screens/other/cms/wordpress/woocommerce/admin-login.png){.thumbnail}

Nel menu a sinistra, clicca su `Plugin`{.action} e poi su `Aggiungi nuovo`{.action}:

![Dashboard, Plugins, Add new](/pages/assets/screens/other/cms/wordpress/woocommerce/plugins.png){.thumbnail}

Nella nuova pagina `Aggiungi plugin`{.action}, inserisci "Woocommerce" nella barra di ricerca in alto a destra e clicca su `Installa adesso`{.action} nel riquadro associato all'estensione **WooCommerce**:

![Install WooCommerce](/pages/assets/screens/other/cms/wordpress/woocommerce/add-plugin-woocommerce-install-now.png){.thumbnail}

Clicca su `Attiva`{.action}:

![Attivate WooCommerce](/pages/assets/screens/other/cms/wordpress/woocommerce/add-plugin-woocommerce-activate.png){.thumbnail}

### Configurazione 

#### Metodo n°1 - utilizzo della configurazione assistita

Se non hai ancora configurato la tua estensione **WooCommerce**, l'assistente di configurazione ti aiuterà a inserire le informazioni relative al tuo sito di vendita online. Inserisci il form e clicca su `Continua`{.action}:

![Setup Wizard - Store Details](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-store-details.png){.thumbnail}

Seleziona il tuo o i tuoi domini di attività:

![Setup Wizard - Industry](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-industry.png){.thumbnail}

Scegli il tipo di prodotti che vuoi vendere sul tuo sito Web (alcune opzioni sono a pagamento):

![Setup Wizard - Product Types](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-product-types.png){.thumbnail}

Indica la natura della tua attività:

![Setup Wizard - Business Details](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-business-details.png){.thumbnail}

Aggiungi funzionalità opzionali (e gratuite) se vuoi:

![Setup Wizard - Business Details, free features](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-business-details-2.png){.thumbnail}

Infine, scegli un tema tra quelli proposti:

![Setup Wizard - Choose a theme](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-theme.png){.thumbnail}

**WooCommerce**: crea un account per utilizzare l'estensione **Jetpack**, installata automaticamente oltre all'estensione **WooCommerce**. La creazione di un account è facoltativa, ti permetterà di accedere alle funzioni limitate di **Jetpack** senza doverti autenticare.

Il tuo e-commerce è stato configurato con i parametri generali.

#### Metodo n°2 - configurazione manuale

Clicca su `Plugin`{.action} per visualizzare le estensioni installate e su `Plugin installati` Visualizzi una lista delle tue estensioni. Clicca su `Impostazioni`{.action} nel modulo **WooCommerce**:

![Setup Wizard - Estensione, WooCommerce, Settings](/pages/assets/screens/other/cms/wordpress/woocommerce/plugins-woocommerce.png){.thumbnail}

Per visualizzare le impostazioni, clicca su `WooCommerce`{.action} > `Impostazioni`{.action}:

![Setup Wizard - WooCommerce, Settings](/pages/assets/screens/other/cms/wordpress/woocommerce/dashboard-woocommerce-settings.png){.thumbnail}

### Regolamenti

La pagina delle impostazioni contiene diverse schede:

![Setup Wizard - WooCommerce, Settings, Tabs](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-general.png){.thumbnail}

#### Generale

Questa scheda ti permette di definire gli elementi seguenti:

- indirizzo dell'impresa
- zone di vendita e di consegna
- localizzazione predefinita del cliente (opzionale)
- attivazione/disattivazione delle tasse
- cedole
- dati monetari (valuta del sito, visualizzazione).

![Setup Wizard - WooCommerce, Settings, General tab](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-general-currency.png){.thumbnail}

#### Prodotti

La gestione dei prodotti avviene tramite una serie di sottorubriche:

- **Generale**: Serve a definire elementi quali la home page che sarà visualizzata di default (negozio, indicazioni legali, cesto, ecc.), le unità di misura, la possibilità o meno di commentare prodotti o note.
- **Inventario**: serve a configurare o meno la gestione del tuo stock e a configurare il comportamento del sito Web (stock decretato quando un oggetto è nel carrello, soglie di allarme, possibilità di nascondere i prodotti che non sono più in magazzino).
- **Prodotti scaricabili**: riguarda i casi di messa a disposizione di documenti che devono essere scaricati dagli utenti.
- **Registri di download approvati**: specifica le directory sul server in cui i file saranno trasferiti.
- **Avanzato**: serve a impostare meglio gli attributi dei prodotti.

#### Spedizione

Se hai attivato gratuitamente le estensioni predefinite durante l'installazione, disponi dell'estensione [WooCommerce Shipping](https://woocommerce.com/it-it/woocommerce-shipping/){.external}. In caso contrario, accedi alla sezione `Plugin`{.action} del menu in cui viene ordinata la configurazione del server.

- **Zone di spedizione**: permette di definire e configurare zone di spedizione.
- **Opzioni di consegna**: serve a impostare l'applicazione per tutto ciò che riguarda le spese di spedizione.
- **Classi di spedizione**: possono essere utilizzati per raggruppare prodotti simili per tipo di spedizione.

#### Pagamenti

Questa scheda serve ad attivare/disattivare le modalità di pagamento proposte sul tuo sito Web. Accedi alla [documentazione ufficiale](https://woocommerce.com/document/payments/) per configurare la tua modalità di pagamento.

#### Account e confidenzialità

Questa sezione include tutte le funzionalità relative alla gestione degli account e dei dati personali.

#### Email

Permette di configurare le *email tipo* inviate dall'applicazione (iscrizione, ordini, annullamenti di ordine, ecc...).

#### Integrazione

Per geolocalizzare i tuoi clienti in base al loro indirizzo IP, in questa sottorubrica puoi inserire la chiave di licenza di [MaxMind](https://www.maxmind.com/){.external}, servizio a pagamento di geolocalizzazione.

#### Avanzato

- **Installazione delle pagine**: utile per modificare le pagine verso cui saranno reindirizzati gli utenti durante la procedura d'ordine.
- **API REST**: sezione che permette di configurare e configurare gli accessi a WooCommerce tramite la sua API REST.
- **Webhook**: gestire le funzioni di richiamo HTTP.
- **Ex API**: riattivare la precedente API di WooCommerce (disattivata di default).
- **WooCommerce.com**: attivare o disattivare il tracking dell'attività del tuo sito di vendita online da parte di WooCommerce, avere suggerimenti per estensioni dedicate (la maggior parte delle quali a pagamento).
- **Funzionalità**: pagina che raggruppa le funzionalità in test su WooCommerce o recentemente aggiunte.
  
## Per saperne di più <a name="go-further"></a>

Alcuni link utili:

- Il [sito ufficiale di WordPress](https://wordpress.org){.external}.
- L'estensione [Jetpack](https://jetpack.com/){.external}.
- L'estensione [WooCommerce](https://woocommerce.com/){.external}
- Il negozio [estensioni WooCommerce](https://woocommerce.com/products/){.external}

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).