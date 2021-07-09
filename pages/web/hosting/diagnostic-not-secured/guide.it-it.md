—
title: "Cosa fare in caso di errore "La tua connessione non è privata"?
slug: errore-sito-non-sicuro
excerpt: "Reagire in caso di messaggio di errore relativo alla sicurezza del tuo sito"
sezione: Diagnostica
—

**Ultimo aggiornamento: 08/07/2021**
 
## Obiettivo <a name="obiettivo"></a>

In caso di inaccessibilità del sito, potrebbero comparire diversi messaggi di errore. Gli esempi che seguono indicano che il tuo hosting Web non contiene [certificato SSL](../i-certificati-ssl-sugli-hosting-web/) (se il tuo sito non mostra una delle anomalie descritte in questa guida, consulta la sezione "Spingiti oltre" di questa guida): 

|Browser€ Messaggio di errore interessato|
||—|
|Su Chrome:<br>"La tua connessione non è privata"|![notsecured_chrome](images/notsecured_chrome.png){.thumbnail}|
|Su Firefox :<br>"Attenzione: rischio probabile di sicurezza"|![notsecured_firefox](images/notsecured_firefox.png){.thumbnail}|
|Su Edge:<br>"La tua connessione non è privata"|![notsecured_edge](images/notsecured_edge.png){.thumbnail}|
|Su Safari:<br>"Questa connessione non è privata"|![notsecured_safari](images/notsecured_safari.png){.thumbnail}|

**Scopri come risolvere errori di tipo "La tua connessione non è privata".**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a un provider specializzato o contattare l'amministratore del servizio. OVH non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione "Per saperne di più" di questa guida.
>

## Prerequisiti

- Avere la gestione dei server e della [zona DNS](../../domains/editare-ma-zona-DNS/#comprendere-la-nozione-di-DNS) del tuo dominio
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## In pratica

Per risolvere questa anomalia, è necessario:

1. determinare l'hosting al quale è associato il tuo dominio, per intervenire sul server giusto;
2. creare, attivare o rinnovare un [certificato SSL](.../i-certificati-ssl-sugli-hosting-web/) per il tuo dominio sull'hosting in questione.

### Step 1: verifica l'hosting associato al tuo dominio

#### Verifica l'indirizzo IP dell'hosting

I messaggi di errore menzionati [sopra](#obiettivo) non significano necessariamente che il tuo sito è ospitato su una delle nostre [offerte Web Cloud](https://www.ovh.com/fr/hebergement-web/). Dovrai quindi verificare l'indirizzo IP del server al quale è collegato il tuo [dominio](https://www.ovh.com/fr/domaines/).

Per recuperare l'indirizzo IP del tuo [hosting OVHcloud](https://www.ovh.com/fr/hebergement-web/), clicca su `Web Cloud`{.action} > `Hosting`{.action} > `Hosting`{.action} nel menu a sinistra > `Hosting`{.action} e seleziona l'hosting interessato.

Nella scheda `Informazioni generali`{.action}, inserisci l'indirizzo IPV4 e/o IPV6 del tuo hosting.

![hosting-general-informazioni](images/hosting-general-informations.png){.thumbnail}

#### Verifica l'indirizzo IP nella zona DNS

A questo punto è necessario verificare che l'indirizzo IP indicato nella [Zona DNS](../../domains/editare-ma-zona-DNS/#comprendere-la-nozione-di-DNS) corrisponda a quello del tuo [hosting Web Cloud](https://www.ovh.com/fr/hebergement-web/).

Clicca su `Nomi di dominio`{.action} in alto a sinistra del tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) e seleziona il dominio del tuo sito.

Seleziona la scheda `Zona DNS`{.action} e annota la destinazione d'ingresso di tipo `A` per il tuo dominio:

![zona-DNP](images/zone-dns-ip.png){.thumbnail}

#### Effettua le azioni necessarie

|Scenario OVH da avviare|
||—|—|
|L'indirizzo IP indicato nella [Zona DNS](../../domains/editare-ma-zona-DNS/) corrisponde a quello del tuo hosting condiviso. Passate allo [step 2](#etape2).|
|L'indirizzo IP indicato nella zona non riguarda alcun hosting del tuo [account OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), ma appare nella [lista dei server Web Cloud](.../elenco-indirizzi-ip-dei-cluster-e-hosting-web/). Ti ricordiamo che non possiedi un hosting che dispone di questo indirizzo IP in uno dei tuoi altri [account OVH cloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) se ne hai creati diversi. In caso di necessità, contatta il tuo webmaster o i [partner OVHcloud](https://partner.ovhcloud.com/fr/) a questo proposito|
|L'indirizzo IP indicato nella zona non corrisponde a quello del tuo hosting e non compare nemmeno nella [lista dei server Web Cloud](.../lista-indirizzi-ip-dei-cluster-e-hosting-web/). Contatta il tuo webmaster o i [partner OVHcloud](https://partner.ovhcloud.com/fr/) a questo proposito.|
|Nella scheda `Zona DNS`{.action}, un messaggio indica che il tuo dominio utilizza altri server [DNS](.../../domains/editare-ma-zona-DNS/#comprendere-la-nozione-di-DNS) e questi compaiono nella forma "ns *****.ovh.net" o "DNS***?*.ovh.net" (sostituisci il "**?**" con il numero del server DNS interessato):<br><br>![warning_other_ovh_DNS_srv](images/warning_other_ovh_dns_srv.png){.thumbnail} € Modifica i server DNS del tuo dominio in modo che corrispondano a quelli registrati nelle record di tipo `NS` della zona. Per effettuare questa operazione, segui le istruzioni di [questa guida](../../domains/generalites-server-DNS/#acceder-a-la-gestione-dei-server-DNS-ovhcloud).|
|Nella scheda `Zona DNS`{.action}, un messaggio indica che il tuo dominio utilizza altri server [DNS](.../../domains/editare-ma-zona-DNS/#comprendere-la-nozione-di-DNS) e questi non compaiono nella forma "ns ******.ovh.net" o "DNS***?.net":<br><br>![warning_external_DNS_srv](images/warning_external_dns_srv.png){.thumbnail}€ Contatta il tuo webmaster o i [partner OVHcloud](https://partner.ovhcloud.com/fr/) a questo proposito.|
|Il tuo dominio non compare nella sezione `Domini`{.action} del tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).<br><br>O la scheda `Zona DNS`{.action} del tuo dominio viene mostrata come segue:<br><br>![zonedns_ndd_pas_pas_sur_lec2](images/zonedns_ndd_pas_sur_lec2.png){.thumbnail}€ Questo significa che il tuo dominio non è gestito dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).<br><br>Verifica che non sia gestito da uno degli altri [account OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), se ne hai creato diversi.<br><br> Potrai anche determinare il suo Registrar e i server DNS a cui è associato tramite il nostro tool [WHOIS](https://www.ovh.com/fr/support/outils/check_whois.pl).<br><br>Se necessario, contatta il tuo webmaster o i [partner OVHcloud](https://partner.ovhcloud.com/fr/) a questo proposito.

### Step 2: verifica il certificato SSL del tuo hosting <a name="stap2"></a>

Nella scheda `Informazioni generali`{.action} dell'hosting OVHcloud, verifica la sezione `Certificato SSL`:

![ssl-certificate-in-general-tab](images/ssl-certificate-in-general-tab.png){.thumbnail}

#### Scenario 1: il tuo hosting non contiene un certificato SSL

Attiva un [certificato SSL](https://www.ovh.com/fr/ssl/) sul tuo hosting seguendo le istruzioni di questa [guida](../i-certificati-ssl-sugli-hosting-web/).

#### Scenario 2: il certificato SSL del tuo hosting non funziona

Se hai generato un **certificato SSL "Let's Encrypt"**, attiva l'opzione SSL nella `Multisito`{.action} del tuo hosting seguendo le istruzioni di questa [guida](../i-certificati-ssl-su-gli-hosting-web/#attivare-un-certificato-ssl-su-un-multisito).

Se disponi di un **certificato SSL importato** e questo non funziona, contatta il suo provider.

Se hai ordinato uno dei **certificati SSL a pagamento** del nostro partner [SECTIGO](https://sectigo.com/){.external}, verifica se hai ricevuto un'email che ti propone di rinnovarlo.
<br>Se necessario, contatta il [supporto di SECTIGO](https://sectigo.com/support){.external} a questo proposito.

> [!primary]
>
> Per visualizzare tutte le email inviate dai nostri servizi, clicca in alto a destra del tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) e poi su `Email di servizio`{.action}:
>
>![right-menu-email-button](images/right-menu-email-button.png){.thumbnail}
>

## Spingiti oltre <a name="spingersi oltre"></a>

[Gestire un certificato SSL su un hosting Web](.../i-certificati-ssl-sugli-hosting-web/)

[Attiva il protocollo HTTPS sul tuo sito grazie al certificato SSL](../attiva il tuo sito Internet tramite https-ssl/)

[Risolvere l'errore "Sito non installato"](.../errore-sito-non installato/)

[Come diagnosticare una pagina bianca?](.../come diagnosticare-pagina-bianca/)

[Cosa fare in caso di errore 500 Internal Server Error?](.../errore-500-internal-server-error/)

[Risolvere gli errori più frequenti associati ai moduli in 1 click](.../errori-frequent-Click/)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/fr/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni (offerte di supporto)(https://www.ovhcloud.com/fr/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com>.