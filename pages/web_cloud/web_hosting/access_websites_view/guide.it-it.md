---
title: "Visualizzare e gestire tutti i siti Web dallo Spazio Cliente OVHcloud"
excerpt: "Scopri come consultare e gestire tutti i siti Web dallo Spazio Cliente OVHcloud"
updated: 2025-05-27
---

## Obiettivo

La visualizzazione `Siti Internet` permette di visualizzare in modo centralizzato tutti i siti Web, indipendentemente dal loro hosting. Questa soluzione permette di tenere traccia in modo semplice delle funzionalità attive per ogni sito Web e fornisce un rapido accesso alle azioni essenziali. Questa interfaccia è particolarmente utile per le agenzie o i professionisti del Web che gestiscono un gran numero di domini ripartiti su più hosting.

**Questa guida ti mostra come visualizzare e gestire tutti i siti Web dallo Spazio Cliente.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).
- Disporre di una [soluzione di hosting Web](/links/web/hosting).

## Procedura

### Accedi alla visualizzazione `Siti Internet`

Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}. Nel menu a sinistra, clicca su `Siti Internet`{.action}. Visualizzi una tabella con tutti i tuoi siti Web e le informazioni principali.

![visualizzazione_siti_internet](images/website_view_tab.png){.thumbnail}

#### Dominio

Mostra il dominio principale del sito Web, così come configurato nella scheda Multisito del tuo hosting.

Cliccando sul pulsante sarai reindirizzato alla scheda `Multisito`{.action} dell’hosting interessato.

#### Diagnostica

Informa se il tuo dominio punta correttamente verso l’hosting Web associato. Per ogni dominio sono disponibili tre risultati diagnostici:

- `A/AAAA` verde: i record A e/o AAAA del dominio puntano correttamente verso l’indirizzo IP dell’hosting Web.
- `A/AAAA` giallo: i record A e/o AAAA del tuo dominio puntano verso un indirizzo IP diverso da quello del tuo hosting Web.
- `A/AAAA` grigio: Nessun record A o AAAA è configurato, il dominio non punta verso alcun indirizzo IP.

Cliccando sul pulsante sarai reindirizzato alla scheda `Multisito`{.action} dell’hosting interessato.

Per maggiori informazioni sulla diagnostica, consulta la sezione "Diagnostica i tuoi domini" della nostra guida "[Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

#### Cartella di root

Indica la directory dell’hosting (ad esempio, www, app, public_html, ecc.) verso cui punta il dominio.

Cliccando sul pulsante sarai reindirizzato alla scheda `Multisito`{.action} dell’hosting interessato.

#### Nome del servizio

Nome tecnico del servizio di hosting Web su cui è configurato il sito, nel formato `abcdv.clusterXX.hosting.ovh.net`.

Cliccando sul tasto, verrai reindirizzato alla scheda `Informazioni generali`{.action} dell’hosting interessato.

#### Nome visualizzato

Alias personalizzato definito dal cliente per meglio identificare il proprio servizio nello Spazio Cliente.

Cliccando sul tasto, verrai reindirizzato alla scheda `Informazioni generali`{.action} dell’hosting interessato.

#### Piano

Mostra il tipo di offerta associata all'hosting: Starter, Personale, Pro o Performance.

Cliccando sul tasto, verrai reindirizzato alla scheda `Informazioni generali`{.action} dell’hosting interessato.

#### Git

Visualizza lo stato dell'integrazione Git sul sito Web:

- Attivo: Il repository Git è connesso.
- Inattivo: Il repository Git non è attivato.
- In corso: Il repository Git è in corso di configurazione.
- Errore: Viene rilevato un errore nella configurazione del repository Git.

Cliccando sul pulsante sarai reindirizzato alla scheda `Multisito`{.action} dell’hosting interessato.

#### Log separati

Indica se nel dominio selezionato è attivo uno spazio di log.

Cliccando sul pulsante sarai reindirizzato alla scheda `Multisito`{.action} dell’hosting interessato.

Per maggiori informazioni, consulta la nostra pagina "[Segui e analizza il traffico dei tuoi siti Web](/links/web/hosting-traffic-analysis)".

> [!warning]
>
> Impossibile attivare i log separati per un dominio esterno. Questa opzione è disponibile solo per i domini registrati in OVHcloud.
>

#### CDN

Mostra lo stato della CDN (**C**ontent **D**elivery **N**etwork) sul dominio:

- Attivo: La CDN è attiva.
- Inattivo: la CDN è disattivata.
- N/D: Non applicabile (offerta non compatibile).

Cliccando sul pulsante sarai reindirizzato alla scheda `Multisito`{.action} dell’hosting interessato.

La CDN permette di mettere in cache elementi statici del sito Web, come le immagini. Per maggiori informazioni, consulta la nostra pagina "[Shared CDN](/links/web/hosting-options-cdn)".

#### SSL

Indica se l'SSL è attivo o meno sul dominio in questione.

Cliccando sul pulsante sarai reindirizzato alla scheda `Multisito`{.action} dell’hosting interessato.

L'SSL ti permette di usufruire di una connessione sicura (**https://**) sul dominio selezionato. Per maggiori informazioni, consulta la nostra pagina "[Proteggi efficacemente il tuo sito web OVHcloud con un certificato SSL Premium](/links/web/hosting-options-ssl)".

#### Firewall

Indica se il firewall dell'applicazione è attivato o meno sul dominio.

Cliccando sul pulsante sarai reindirizzato alla scheda `Multisito`{.action} dell’hosting interessato.

Per maggiori informazioni, consulta la nostra pagina "[Opzioni indispensabili per l’hosting Web](/links/web/hosting-options)".

#### Boost

Indica se l’opzione boost è attiva o meno sul tuo hosting Web. L’opzione Boost permette di aumentare temporaneamente le risorse CPU e RAM del tuo hosting Web.

Cliccando sul pulsante, verrai reindirizzato alla scheda `Boost`{.action} dell’hosting interessato.

Per maggiori dettagli sull'opzione Boost, consulta la sezione "Potenzia temporaneamente il tuo hosting Performance" della nostra guida "[Hosting Web - Come far evolvere la tua offerta](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)".

## Per saperne di più <a name="go-further"></a>
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).