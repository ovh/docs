---
title: Object Storage Swift - Gestisci il tuo Object Storage con CyberDuck
excerpt: Come utilizzare il tuo Object Storage con Cyberduck
updated: 2021-06-18
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

L'Object Storage OVHcloud è una soluzione di storage gestita principalmente tramite l'API OpenStack.

Se non conosci la gestione dello storage da riga di comando, alcune soluzioni grafiche utilizzano l'API OpenStack. CyberDuck è una di queste soluzioni ed è facilmente configurabile.

**Questa guida ti mostra come utilizzare Cyberduck per gestire il tuo Object Storage utilizzando un'interfaccia grafica basata sulle API Openstack.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie sul tuo sito. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non può fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
>

## Prerequisiti

- Scarica e installa [Cyberduck](https://cyberduck.io/).
- Disporre delle credenziali utente (*OS_USERNAME*) e progetto (*OS_PROJECT_NAME* o *OS_TENANT_NAME*) è possibile scaricare il file "OpenRC" nel menu [Users and Roles](/pages/public_cloud/compute/loading_openstack_environment_variables#step-1-recupera-le-variabili) dallo [Spazio Cliente Public Cloud OVHcloud](/links/manager).
- Disporre della password utente OpenStack

Per modificare la password utente OpenStack, consulta [questa guida](/pages/public_cloud/compute/change_openstack_user_password_in_horizon).

## Procedura

**Questa guida è stata aggiornata in base alla versione 7.9.2 di Cyberduck per MacOS.**

> [!primary]
>
> A seconda della fonte di download del file OpenRC (da Horizon o dallo Spazio Cliente OVHcloud), l'identificativo del tuo progetto può essere denominato *OS_PROJECT_NAME* o *OS_TENANT_NAME*.
>

In Cyberduck, apri una connessione "OpenStack Swift (Keystone 3)".

![pca-cyberduck](images/login.png){.thumbnail}

inserisci le informazioni richieste:

- Server: auth.cloud.ovh.net
- Project:Domain:Username OS_PROJECT_NAME:default:OS_USERNAME
- Password: password dell'utente OpenStack

Clicca su `Connetti`{.action}. Una volta effettuato l'accesso, visualizzerai i dati relativi a cartelle e file.

![pca-cyberduck](images/successful-login.png){.thumbnail}

> [!primary]
>
> In caso di difficoltà di connessione, è possibile scaricare il profilo di connessione Cyberduck per OpenStack Swift (Keystone 3) e aprirlo con Cyberduck.
> <br><br>Clicca <a href="https://trac.cyberduck.io/browser/shelves/02.2020/profiles/default/Openstack%20Swift%20(Keystone%203).cyberduckprofile?rev=48724&order=name" download>qui sul tasto destro e poi su "Salva la destinazione del link sotto"</a> per scaricare il profilo.
>

## Per saperne di più

[Documentazione di Cyberduck](https://trac.cyberduck.io/wiki/help/en){.external}

[Come utilizzare l'API Swift](/pages/storage_and_backup/object_storage/pcs_getting_started_with_the_swift_api)

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](https://www.ovhcloud.com/it/professional-services/) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
