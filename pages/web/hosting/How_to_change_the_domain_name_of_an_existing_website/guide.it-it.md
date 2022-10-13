---
title: "Come cambiare il dominio di un sito esistente"
slug: how_to_change_the_domain_name_for_an_existing_website
excerpt: "Questa guida ti mostra come modificare il dominio di un sito esistente"
section: "Casi d’uso"
order: 02
---

**Ultimo aggiornamento: 13/10/2022**

> [!primary]
>
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

Durante la vita del tuo sito Internet, potresti aver bisogno di modificare il dominio del tuo sito.<br>Il caso di utilizzo più frequente è la modifica del nome della tua azienda.

Questa guida ti mostra le operazioni da effettuare per modificare il dominio di accesso al tuo sito.

**Questa guida ti mostra come modificare il dominio di un sito esistente.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Mettiamo a tua disposizione questo tutorial per supportarti nelle operazioni più frequenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/fr/). OVH non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

## Prerequisiti

- Disporre di un [dominio](https://www.ovhcloud.com/fr/domains/)
- Disporre di un [hosting condiviso OVHcloud](https://www.ovhcloud.com/fr/web-hosting/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## Procedura

> [!warning]
>
> La modifica del dominio per accedere al tuo sito può avere conseguenze sul suo posizionamento nei motori di ricerca. 
> Presta la massima attenzione alle operazioni che intendi effettuare o contatta uno dei [provider specializzati](https://partner.ovhcloud.com/fr/) nel referenziamento se necessario.
>

Per modificare il dominio di accesso al tuo sito Web, segui diversi step in un ordine preciso.

### Step 1 - Dichiarare il nuovo dominio sul tuo hosting condiviso <a name="step1"></a>

Dichiarare il vostro nuovo dominio con la nostra documentazione sull'[aggiunta di un multisito sul vostro hosting condiviso](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/). Assegna un sottodominio alla `www` per esempio, aggiungendo `www.NewDomain.tld` sul tuo sito oltre a `NewDomain.tld`.

Per superare lo Step 1 sono necessarie diverse condizioni:

- Il tuo nuovo dominio deve puntare alla stessa "cartella di root" del dominio utilizzato per accedere al tuo sito
- Verifica che il tuo nuovo dominio punti verso il giusto indirizzo IP del tuo hosting condiviso. Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), clicca su `Web cloud`{.action}, clicca su `Hosting`{.action}, seleziona il tuo hosting e recupera **l'IPv4** nella scheda `Informazioni generali`{.action}.

> [!warning]
>
> Se attivate le opzioni **IP del paese** o **CDN** con il vostro nuovo dominio, utilizzate il giusto indirizzo IP con la nostra documentazione che censisce [l'insieme degli indirizzi IP dei nostri hosting condivisi](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/).
>
> Per visualizzare il numero del cluster in cui si trova il tuo hosting, accedi alla sezione `Web cloud`{.action}, clicca su `Hosting`{.action}, seleziona il tuo hosting e poi la scheda `FTP-SSH`{.action}. Visualizzerai il numero del cluster nel form **Server FTP e SFTP**: `ftp.cluster0XX.ovh.net` (dove le `X` rappresentano il numero di cluster).
>

> **Certificati SSL**
>
> Se il dominio inizialmente utilizzato per accedere al tuo sito dispone di un certificato SSL, consulta le nostre due guide per effettuare o verificare le azioni descritte proprio sotto questi due link:
> - [Gestire un certificato SSL su un hosting Web](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/)
> - [Attiva il protocollo HTTPS sul tuo sito Web con il certificato SSL](https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/)
>
> Per il certificato SSL *Let's Encrypt* gratuito, è sufficiente attivare l'opzione `SSL` **da subito** per il nuovo dominio tramite la scheda `Multisito`{.action} del tuo hosting. Clicca su `Azioni`{.action} aggiungi i tuoi multisiti `Rigenera il certificato SSL`{.action}. La rigenerazione richiederà almeno due ore per essere effettuata.
>
> Per i certificati SSL a pagamento *Sectigo DV* e *Sectigo EV* proposti da OVHcloud, questi sono validi solo per un dominio e il suo sottodominio su `wwww`.<br>
> **Una volta giunto allo [step 3](#step3) di questa guida**, dovrai eliminare il tuo certificato SSL a pagamento per sottoscrivere un altro certificato per il tuo nuovo dominio.<br>
*Attenzione: l'eliminazione è irreversibile e non sarà effettuato alcun rimborso per il tempo restante del tuo certificato SSL precedente. Assicurati che gli step 1 e 2 siano stati eseguiti correttamente.*
>
> Per gli altri certificati SSL *custom* da te installati, contatta il tuo provider di certificati SSL per conoscere le possibilità a tua disposizione.
>

Se tutte le operazioni sono state eseguite correttamente, le dichiarazioni multisito dei tuoi domini devono essere rigorosamente identiche **tranne nel caso in cui tu utilizzi un certificato SSL a pagamento di tipo *Sectigo DV*, *Sectigo EV* o *custom***.

![multisito](images/multisites.png){.thumbnail}

> [!primary]
>
> Una volta completato lo Step 1, la propagazione delle modifiche potrebbe richiedere da 4 a 24 ore.
>

Se il tuo sito non utilizza database e/o se non effettui una riscrittura dell'URL per il tuo sito web, quest'ultimo deve già essere correttamente visualizzato con il tuo nuovo dominio. In questo caso, passa direttamente allo [Step 3](#step3) di questa guida. In caso contrario, passa allo Step 2 qui sotto.

### Step 2 - riscrittura degli URL nel tuo sito web con il nuovo dominio

La maggior parte dei siti utilizza database per funzionare. che viene generalmente costruita attorno al dominio utilizzato per il tuo sito. Per questi siti sono necessarie ulteriori azioni.

> [!warning]
>
> Attenzione: le operazioni descritte nello Step 2 sono estremamente sensibili e, se non eseguite con cautela, possono avere gravi conseguenze per il tuo sito Web. In caso di dubbio, non provi nulla e rivolgiti a [uno specialista](https://partner.ovhcloud.com/fr/).
>
> Prima di effettuare qualsiasi operazione, ti consigliamo di recuperare una [backup del tuo spazio di storage FTP](https://docs.ovh.com/fr/hosting/restauration-ftp-filezilla-espace-client/) e una [backup del tuo database](https://docs.ovh.com/fr/hosting/exportation-bases-donnees/). per ripristinare il sito in caso di operazioni errate.
>

Seguiremo due tipi di sito Web: 

- CMS (*Content Management System*) come WordPress, Joomla!, PrestaShop, Drupal, ecc...
- siti Web classici progettati da sé o dal proprio provider.

#### Caso n. 1: il tuo sito web è un CMS

La maggior parte dei CMS permettono direttamente, dal loro spazio di amministrazione *back-office*, di sostituire il dominio inizialmente dichiarato per il tuo sito con un altro.

I CMS sono sviluppati da organizzazioni terze non gestite da OVHcloud. Di seguito trovi i link alla documentazione ufficiale dei diversi CMS proposti sull'installazione sui nostri hosting condivisi:


- WordPress: <https://wordpress.org/support/article/changing-the-site-url/>
Joomla! : L'editor di questo software non offre, alla data, la documentazione necessaria per modificare il dominio di accesso al tuo sito Web. A questo proposito, ti invitiamo a contattare direttamente l'editor. Per maggiori informazioni, consulta le pagine ufficiali [docs.joomla.org](https://docs.joomla.org/){.external} o [forum.joomla.org](https://forum.joomla.org/){.external}.
- Drupal: L'editor di questo software non offre, alla data, la documentazione necessaria per modificare il dominio di accesso al tuo sito Web. A questo proposito, ti invitiamo a contattare direttamente l'editor. Per maggiori informazioni, consulta le pagine ufficiali [drupal.org](https://drupal.org){.external} o [drupal.fr](https://drupal.fr){.external}.
- PrestaShop: L'editor di questo software non offre, alla data, la documentazione necessaria per modificare il dominio di accesso al tuo sito Web. A questo proposito, ti invitiamo a contattare direttamente l'editor. Per maggiori informazioni, clicca [qui](https://help-center.prestashop.com/fr){.external} per accedere alla pagina ufficiale.

Ti ricordiamo che anche per questi CMS è possibile effettuare modifiche direttamente [in database](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/#acceder-a-linterface-phpmyadmin). È necessario modificare l'URL di accesso al tuo sito nella tabella prevista a tal fine.

Per gli altri CMS non preinstallati automaticamente da OVHcloud, ti consigliamo di contattare i loro rispettivi supporti per eseguire questa riscrittura in totale sicurezza. 

#### Caso n. 2: il tuo sito web è un sito "fatto case"

Per riscrivere i tuoi URL con il tuo nuovo dominio, [collegati al database del tuo sito](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/#acceder-a-linterface-phpmyadmin) e sostituisci il tuo vecchio dominio con il nuovo nella tabella corrispondente. 

Ricordati di verificare nel tuo file `.htaccess` se le riscritture dell'URL non devono essere aggiornate con il tuo nuovo dominio.

Se hai contattato un provider per creare il tuo sito, contattalo per effettuare la modifica in tutta sicurezza.

> [!success]
>
> Una volta completato lo Step 2, il tuo sito deve essere visualizzato con il nuovo dominio.
>

### Step 3 - Rimuovi il vecchio dominio <a name="step3"></a>

Per evitare "*Duplicate-content*" e quando il tuo nuovo dominio è pienamente operativo con il tuo sito, dovrai eliminare la dichiarazione in multisiti per il tuo vecchio dominio utilizzando la guida sulla gestione dei [multisiti sul tuo hosting condiviso](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/).

> [!warning]
>
> Ricordati di occuparti del tuo certificato SSL *Sectigo EV*, *Sectigo DV* o *Custom* come specificato nello Step 1](#step1).
>

Una volta che il dominio precedente è stato rimosso dalla scheda multisito e registrato in OVHcloud, è possibile reindirizzarlo tramite un [reindirizzamento visibile permanente 301](https://docs.ovh.com/fr/domains/redirection-nom-de-domaine/). In questo modo i tuoi visitatori vengono automaticamente reindirizzati verso il tuo sito visualizzando il nuovo dominio nella barra degli indirizzi/URL del browser.

## Per saperne di più <a name="go-further"></a>

[Elenco degli IP dei nostri hosting condivisi](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/)

[Gestire un certificato SSL su un hosting Web](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/)

[Attiva il protocollo HTTPS sul tuo sito Web grazie al certificato SSL](https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/)

[Reindirizzare un dominio](https://docs.ovh.com/fr/domains/redirection-nom-de-domaine/)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/fr/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/fr/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.