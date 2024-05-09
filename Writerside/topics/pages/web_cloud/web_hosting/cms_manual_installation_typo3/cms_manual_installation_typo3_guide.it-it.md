---
title: "Tutorial - Installare manualmente Typo3"
excerpt: "Questa guida ti mostra come installare il CMS Typo3 su un hosting Web OVHcloud"
updated: 2024-03-28
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Il **CMS** (**C**ontent **M**anagement **S**ystem) Typo3 permette di sviluppare siti Web complessi e scalabili, per le imprese di tutte le dimensioni, dai siti istituzionali alle piattaforme di e-commerce. Con una forte community di sviluppatori e un'ampia gamma di estensioni, TYPO3 offre potenti strumenti per personalizzare ed estendere il tuo sito in base alle tue esigenze specifiche.

**Questa guida ti mostra come installare manualmente il CMS Typo3 su un hosting Web OVHcloud.**

## Prerequisiti

- Disporre di una soluzione di [hosting Web OVHcloud](hosting.) che includa almeno un database.
- Disporre di un [dominio](domains.).
- Avere accesso allo [Spazio Cliente OVHcloud](manager.).

## Procedura

### Prepara l'installazione

Per installare il CMS **Typo3** sul tuo [hosting Web](hosting.), è necessario effettuare alcuni preparativi.

Segui **gli step** descritti nel nostro tutorial sull'[installazione manuale di un CMS](cms_manual_installation1.) prima di proseguire con lo step successivo.

### Completa l'installazione manuale

> [!primary]
>
> Prima di continuare l'installazione, svuota la cache del tuo browser per evitare qualsiasi malfunzionamento.
>

#### Accedi al tuo sito web Typo3 tramite il tuo browser

Inserite il vostro nome a dominio nella barra di ricerca del vostro browser Internet.

Se i file di origine di Typo3 sono stati inseriti correttamente nella cartella principale, viene visualizzata la pagina seguente:

![Typo3 installation](install_step_one.png){.thumbnail}

Come indicato, creare un file vuoto denominato `FIRST_INSTALL` nella directory in cui sono stati depositati i file e le cartelle Typo3. Tornare al browser e aggiornare la pagina. Se si verificano degli errori, viene visualizzata la schermata qui sotto, con la descrizione degli errori.

![Typo3 installation](install_step_2_error.png){.thumbnail}

Risolvi gli errori o clicca su `Continue with errors`{.action}.

Viene visualizzato il secondo step dell’installazione.

![Typo3 installation](install_step_2.png){.thumbnail}

Inserisci le informazioni relative al tuo DBMS e clicca su `Continue`{.action}.

Viene visualizzato il terzo step dell’installazione.

![Typo3 installation](install_step_3.png){.thumbnail}

Seleziona il nome del database da utilizzare per il tuo sito Web o [creane uno nuovo](sql_create_database1.) e clicca su `Continue`{.action}.

Viene visualizzato il quarto step dell’installazione.

![Typo3 installation](install_step_4.png){.thumbnail}

Immettere il nome del sito Web e le informazioni relative all'utente amministratore.

Verrà visualizzato il quinto e ultimo step dell’installazione.

![Typo3 installation](install_step_5.png){.thumbnail}

Leggi le informazioni visualizzate sullo schermo e scegli l'opzione che preferisci:

- `Create empty starting page` : seleziona questa opzione per creare una pagina predefinita per il tuo sito Web. Una volta completato questo step, inserisci il dominio nel browser per accedere al sito Web Typo3.
- `Take me straight to the backend` : seleziona questa opzione per essere reindirizzato alla dashboard del tuo sito web Typo3. Questa dashboard ti permette di creare le pagine Web in autonomia, inserirne il contenuto e molto altro ancora. Per maggiori informazioni consulta la [documentazione ufficiale di Typo3](https://docs.typo3.org/Home/GettingStarted.html){.external}.

Clicca su `Open the TYPO3 Backend`{.action} per confermare l’opzione appena scelta.

### Conclusione

Il CMS Typo3 è stato installato manualmente sull’hosting Web OVHcloud. Dopo aver configurato il sito Web, aggiunto contenuto, personalizzato il tema e installato i plugin, il sito Web Typo3 è accessibile online tramite il dominio.

## Per saperne di più <a name="go-further"></a>

[Tutorial - Installare manualmente WordPress](cms_manual_installation_wordpress1.)

[Tutorial - Installare manualmente Joomla!](cms_manual_installation_joomla1.)

[Tutorial - Installare manualmente Drupal](cms_manual_installation_drupal1.)

[Tutorial - Installare manualmente PrestaShop](cms_manual_installation_prestashop1.)

[Tutorial - Installare manualmente Pico](cms_manual_installation_pico1.)

[Tutorial - Installare manualmente Grav](cms_manual_installation_grav1.)

[Tutorial - Installare manualmente SPIP](cms_manual_installation_spip1.)

[Tutorial - Installare manualmente un CMS sul tuo hosting](cms_manual_installation1.)

[Creare un database sul proprio hosting Web](sql_create_database1.)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](partner.).
 
Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.