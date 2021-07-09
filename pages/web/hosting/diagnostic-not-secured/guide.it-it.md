---
title: "Cosa fare in caso di errore "La tua connessione non è privata"?
slug: errore-sito-non-sicuro
excerpt: "Reagire in caso di messaggio di errore relativo alla sicurezza del tuo sito"
section: Diagnostica
---

**Ultimo aggiornamento: 06/07/2021**
 
## Obiettivo <a name="objectif"></a>

In caso di inaccessibilità del sito, potrebbero comparire diversi messaggi di errore. Gli esempi che seguono indicano che il tuo hosting Web non contiene [certificati SSL](../les-certificats-ssl-sur-les-hebergements-web/) (se il tuo sito non mostra alcuna delle anomalie descritte in questa guida, consulta la sezione "[Per saperne di più](#aller-plus-loin)" di questa guida): 

|Browser€ Messaggio di errore interessato|
\|-|---|
|Su Chrome:<br>"La tua connessione non è privata"€ ![notsecured_chrome](images/notsecured_chrome.png){.thumbnail}\|
|Su Firefox:<br>"Attenzione: rischio probabile di sicurezza"€ ![notsecured_firefox](images/notsecured_firefox.png){.thumbnail}\|
|Su Edge:<br>"La tua connessione non è privata"€ ![notsecured_edge](images/notsecured_edge.png){.thumbnail}\|
|Su Safari:<br>"Questa connessione non è privata"€ ![notsecured_safari](images/notsecured_safari.png){.thumbnail}\|

**Questa guida ti mostra come risolvere gli errori del tipo "La tua connessione non è privata".**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione "[Per saperne di più](#aller-plus-loin)" di questa guida.
>

## Prerequisiti

- Avere la gestione dei server e della [zona DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) del dominio
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## Procedura

Per risolvere questa anomalia, è necessario:

1. determinare l'hosting al quale è associato il tuo dominio, per intervenire sul server giusto;
2. creare, attivare o rinnovare un [certificato SSL](../les-certificats-ssl-sur-les-hebergements-web/) per il tuo dominio sull'hosting in questione.

### Step 1: verifica l'hosting associato al tuo dominio

#### Verifica l'indirizzo IP dell'hosting

I messaggi di errore menzionati [sopra](#objectif) non significano necessariamente che il tuo sito sia ospitato su una delle nostre [offerte Web Cloud](https://www.ovh.com/fr/hebergement-web/). È quindi necessario verificare l'indirizzo IP del server al quale è associato il tuo [dominio](https://www.ovh.com/world/domains/).

Per recuperare l'indirizzo IP del tuo [hosting OVHcloud](https://www.ovh.com/fr/hebergement-web/), clicca in alto nello [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) OVHcloud sul `Web Cloud`{.action} e poi, nel menu a sinistra, su `Hosting`{.action}.

Nella scheda `Informazioni generali`{.action}, inserisci l'indirizzo IPV4 e/o IPV6 del tuo hosting.

![hosting-general-informations](images/hosting-general-informations.png){.thumbnail}

#### Verifica l'indirizzo IP nella zona DNS

A questo punto è necessario verificare che l'indirizzo IP indicato nella [Zona DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) corrisponda a quello del tuo [hosting Web Cloud](https://www.ovh.com/fr/hebergement-web/).

Clicca sui `domini`{.action} in alto a sinistra del tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) e seleziona il dominio del tuo sito.

Seleziona la scheda `Zona DNS`{.action} e registra la destinazione d'ingresso di tipo `A` per il tuo dominio:

![zone-dns-ip](images/zone-dns-ip.png){.thumbnail}

#### Esegui le azioni necessarie

|Scenario|Azione da eseguire|
|---|---|
|L'indirizzo IP indicato nella zona DNS corrisponde a quello del tuo hosting condiviso.|Passate al [secondo](#etape2) passaggio.|
|L'indirizzo IP indicato nella zona non corrisponde a quello del tuo hosting e non compare nemmeno nella [lista dei server Web Cloud](../liste-des-adresses-ip-des-clusters-et-hebergements-web/).|Contatta il tuo webmaster o i [partner OVHcloud](https://partner.ovhcloud.com/fr/) a questo proposito.|
|L'indirizzo IP indicato nella zona non interessa nessun hosting del tuo [account OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), ma appare nella [lista dei server Web Cloud](../liste-des-adresses-ip-des-clusters-et-hebergements-web/).|Verifica di non avere un hosting con questo indirizzo IP in uno degli altri [account OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) se ne hai creato uno o più. In caso di necessità, contatta il tuo webmaster o i [partner OVHcloud](https://partner.ovhcloud.com/fr/).|
|Nella scheda `Zona DNS`{.action} è possibile visualizzare questa avvertenza:<br><br>![avertissement_zonedns_pas_sur_srv_dns](images/avertissement_zonedns_pas_sur_srv_dns.png){.thumbnail}|È quindi necessario modificare i server DNS del tuo dominio in modo che corrispondano a quelli registrati nei record di tipo `NS` della zona. Per effettuare questa operazione, segui le istruzioni di [questa guida](../../domains/generalites-serveurs-dns/).|
|Il tuo dominio non compare nella sezione `Domini`{.action} del tuo ><br>o visualizzi la scheda `Zona DNS`{.action} del tuo dominio nel modo seguente:<br><br>![zonedns_ndd_pas_sur_lec2](images/zonedns_ndd_pas_sur_lec2.png){.thumbnail}|Ciò significa che il tuo dominio non è gestito dallo Spazio Cliente OVHcloud.<br><br>Determina il suo registrar tramite il nostro strumento ><br>Per visualizzare e modificare di conseguenza la zona DNS, consulta [questa guida](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-22-ajouter-un-nom-de-domaine-externe).|
|I `server DNS`{.action} non compaiono nella forma "ns **?** .ovh.net o "DNS **?** .ovh.net" (sostituisci "**no?** " dal numero di server DNS interessato).<br><br>Ciò significa che la `Zona DNS`{.action} attiva del tuo dominio non si trova sul tuo ><br>![esternal-DNS-Server](images/external-dns-servers.png){.thumbnail}|Contatta il tuo webmaster o i [partner OVHcloud](https://partner.ovhcloud.com/fr/) a questo proposito.|

### Step 2: verifica il certificato SSL del tuo hosting <a name="etape2"></a>

Nella scheda `Informazioni generali`{.action} del tuo hosting OVHcloud, verifica la sezione `Certificato SSL`:

![ssl-certificate-in-general-tab](images/ssl-certificate-in-general-tab.png){.thumbnail}

#### Scenario 1: il tuo hosting non contiene un certificato SSL

Attiva un [certificato SSL](https://www.ovh.com/fr/ssl/) sul tuo hosting seguendo le istruzioni di questa [guida](../les-certificats-ssl-sur-les-hebergements-web/).

#### Scenario 2: il certificato SSL del tuo hosting non funziona

Se hai generato un **certificato SSL "Let's Encrypt"**, attiva l'opzione SSL sul `Multisito`{.action} del tuo hosting seguendo le istruzioni di questa [guida](../les-certificats-ssl-sur-les-hebergements-web/#activer-un-certificat-ssl-sur-un-multisite).

Se hai un **certificato SSL importato** e non funziona, contatta il suo provider.

Se hai ordinato uno dei **certificati SSL a pagamento** del nostro partner >Se necessario, contatta il [supporto SECTIGO](https://sectigo.com/support){.external}.

> [!primary]
>
> Per visualizzare tutte le email inviate dai nostri servizi, clicca in alto a destra sul tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) e poi su `Email di servizio`{.action}):
>
>![right-menu-email-button](images/right-menu-email-button.png){.thumbnail}
>

## Spingiti oltre <a name="aller-plus-loin"></a>

[Gestire un certificato SSL su un hosting Web](../les-certificats-ssl-sur-les-hebergements-web/)

[Attivare HTTPS su un sito Internet tramite il certificato SSL](../passer-site-internet-https-ssl/)

[Risolvere l'errore "Sito non installato"](../erreur-site-non-installe/)

[Come diagnosticare una pagina bianca?](../comment-diagnostiquer-page-blanche/)

[Cosa fare in caso di errore 500 Internal Server Error?](../erreur-500-internal-server-error/)

[Risolvere gli errori più frequenti associati ai moduli in 1 click](../erreurs-frequentes-modules-en-1-clic/)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/fr/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le diverse [offerte di supporto](https://www.ovhcloud.com/fr/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com>.