---
title: "Tutorial - Installare manualmente SPIP"
excerpt: "Questa guida ti mostra come installare manualmente il tuo CMS SPIP"
updated: 2024-03-28
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Il **CMS** (**C**ontent **M**anagement **S**ystem) SPIP è una soluzione adatta ai siti editoriali come riviste online, giornali o siti istituzionali. Grazie all'architettura modulare e al sistema di ossature personalizzabili, SPIP permette di progettare siti Web ricchi di funzionalità, offrendo al tempo stesso una grande libertà di personalizzazione.

**Questa guida ti mostra come installare manualmente il CMS Spip su un hosting Web OVHcloud.**

## Prerequisiti

- Disporre di una soluzione di [hosting Web OVHcloud](hosting.) che includa almeno un database.
- Disporre di un [dominio](domains.).
- Avere accesso allo [Spazio Cliente OVHcloud](manager.).

## Procedura

### Prepara l'installazione

Per installare il CMS **Spip** sul tuo [hosting Web](hosting.), è necessario effettuare alcuni preparativi.

Segui gli step** descritti nel nostro tutorial sull'[installazione manuale di un CMS](cms_manual_installation1.) prima di proseguire con lo step successivo.

### Completa l'installazione manuale

> [!primary]
>
> Prima di continuare l'installazione, svuota la cache del tuo browser per evitare qualsiasi malfunzionamento.
>

#### Accedi al tuo sito Web Spip tramite il browser

Inserisci `your_domain/ecrire` nella barra di ricerca del tuo browser Internet per avviare l’installazione del tuo sito Web Spip. Viene visualizzata la pagina seguente:

![Spip installation](installation_first_step.png){.thumbnail}

Seleziona la lingua del sito Web Spip e clicca su `Next`{.action} per confermare. Viene visualizzata la seguente schermata:

![Spip installation](installation_second_step.png){.thumbnail}

Inserisci le informazioni di accesso al tuo DBMS (ad esempio, MySQL). Una volta stabilita la connessione al database, viene visualizzata la seguente schermata:

![Spip installation](installation_third_step.png){.thumbnail}

Seleziona il database da utilizzare per il tuo sito Web o [crea un nuovo database](sql_create_database1.). Scegliere un prefisso per le tabelle del database. Di default, viene utilizzato il prefisso `spip`. Clicca su `Next`{.action} per confermare le informazioni. Viene visualizzata la seguente schermata:

![Spip installation](installation_fourth_step.png){.thumbnail}

Inserisci le informazioni richieste e clicca su `Next`{.action} per confermare. Viene visualizzata la seguente schermata:

![Spip installation](installation_fifth_step.png){.thumbnail}

La schermata mostra l’elenco dei plugin disponibili per il tuo sito Web e ti informa che l’installazione di Spip è stata completata.

### Conclusione

Il CMS Spip è stato installato manualmente sul tuo hosting Web OVHcloud. Il sito Web Spip è accessibile online dal tuo dominio. Per accedere allo spazio amministratore del sito Web Spip, digitare `your_domain/ecrire` nella barra di ricerca del browser Internet.

## Per saperne di più <a name="go-further"></a>

[Tutorial - Installare manualmente WordPress](cms_manual_installation_wordpress1.)

[Tutorial - Installare manualmente Joomla!](cms_manual_installation_joomla1.)

[Tutorial - Installare manualmente Drupal](cms_manual_installation_drupal1.)

[Tutorial - Installare manualmente PrestaShop](cms_manual_installation_prestashop1.)

[Tutorial - Installare manualmente Pico](cms_manual_installation_pico1.)

[Tutorial - Installare manualmente Typo3](cms_manual_installation_typo31.)

[Tutorial - Installare manualmente Grav](cms_manual_installation_grav1.)

[Tutorial - Installare manualmente un CMS sul tuo hosting](cms_manual_installation1.)

[Creare un database sul proprio hosting Web](sql_create_database1.)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](partner.).
 
Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.