---
title: "Gestire la cronologia di una zona DNS"
excerpt: "Questa guide ti mostra come consultare, confrontare, scaricare e ripristinare i tuoi backup della zona DNS"
updated: 2024-06-26
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

La zona **D**omain **N**ame **S**ystem (**DNS**) di un dominio costituisce il file di configurazione di quest'ultimo. ed è composta da informazioni tecniche chiamate *record DNS*. La zona DNS è, in un certo senso, come un centro di scambi.

Per maggiori informazioni, consulta le nostre guide:

- [Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)

Per diversi motivi, potresti aver bisogno di applicare una configurazione DNS precedente al tuo dominio.

Da questo momento, la gestione dei DNS è semplificata grazie alla cronologia delle zone DNS.

**Questa guida ti mostra come visualizzare, confrontare, scaricare e ripristinare i backup della zona DNS**

## Prerequisiti

- Disporre di una zona DNS per il dominio nello [Spazio Cliente OVHcloud](/links/manager)
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- Avere accesso alla gestione del dominio

## Procedura

Per accedere a questa funzionalità, accedi al tuo [Spazio Cliente OVHcloud](/links/manager) e clicca sulla sezione `Web Cloud`{.action} nella parte alta dell’interfaccia. Nella colonna di sinistra, clicca sulla scheda `Domini`{.action} e seleziona il dominio associato alla zona DNS che vuoi modificare.

Nella nuova pagina, se non sei già reindirizzato in questa scheda, clicca sulla scheda `Zona DNS`{.action}.

Visualizzi una tabella con la zona DNS del tuo dominio. Contiene infatti un elenco dei record DNS. Sulla destra della tabella sono disponibili diversi pulsanti che consentono di effettuare azioni sulla zona DNS. 

![DNS history tool](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}

Clicca su `Visualizza la cronologia della tua zona DNS`{.action}. 

Visualizzi una tabella con la cronologia dei backup della zona DNS, ordinata in base alla data più recente e meno recente. In cima alla tabella è riportata la versione corrente della zona DNS. In questa pagina è possibile eseguire le operazioni seguenti:

- [Visualizzare una zona DNS](#view)
- [Scaricare una zona DNS](#download)
- [Ripristinare una zona DNS](#restore)
- [Confronta due zone DNS](#compare)

> [!primary]
>
> I backup della zona DNS sono soggetti alle seguenti limitazioni:
>
> - Conserviamo al massimo 200 backup per la stessa zona DNS.
> - Ogni volta che il backup dura più di 31 giorni, viene automaticamente eliminato, ad eccezione degli ultimi **5 backup** completati.
>

### Visualizzare una zona DNS <a name="view"></a>

Per visualizzare la zona DNS scelta, identifica la riga corrispondente nella tabella e clicca sull’icona presente nella colonna `Visualizza`{.action}.

![Visualizzare una zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/visualize-dns-eyes.png){.thumbnail}

Visualizzi i dati della zona DNS.

![Dettagli di una zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/details-dns-zone.png){.thumbnail}

Clicca su `Chiudere`{.action} per tornare alla pagina principale "Cronologia della zona DNS".

### Scarica una zona DNS <a name="download"></a>

Per scaricare la zona DNS scelta, identifica la riga corrispondente nella tabella e clicca sull’icona presente nella colonna `Scarica`{.action}.

![Scarica una zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/download-dns-zone.png){.thumbnail}

La zona DNS può essere scaricata in formato .txt.

### Ripristinare una zona DNS <a name="restore"></a>

Per sostituire la zona DNS corrente con una diversa, è sufficiente ripristinare una zona DNS precedente. Nella tabella che contiene la cronologia delle zone DNS, identifica la riga corrispondente alla zona DNS che vuoi ripristinare (verifica la data a sinistra della riga) e clicca sull’icona presente nella colonna `Ripristinare`{.action}.

![Ripristinare una zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/restore-dns-zone.png){.thumbnail}

Viene visualizzata la finestra successiva.

![Conferma ripristino zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/confirmation-restore-dns-zone.png){.thumbnail}

Verificare che la data specificata nel messaggio corrisponda alla zona DNS da ripristinare. Come indica il banner giallo, è importante ricordare che la zona DNS corrente (presente in cima all'elenco della cronologia delle zone DNS) verrà eliminata e sostituita dalla zona DNS che si desidera ripristinare.

Clicca su `Ripristinare`{.action} per confermare il ripristino o su `Annullare`{.action}.

> [!primary]
>
> La modifica o il ripristino di una zona DNS comporta un tempo di propagazione che va da **4** a **24** ore per essere presa totalmente in carico dalla rete DNS.
>

### Confronta due zone DNS <a name="compare"></a>

È possibile confrontare il contenuto di due zone DNS. Nella tabella che contiene la cronologia della zona DNS, identifica le due righe corrispondenti alle due zone DNS che vuoi confrontare (verifica la data a sinistra di ogni riga) e selezionale. Per confrontare queste due versioni di zona DNS, clicca in alto a sinistra su `Confrontare le versioni`{.action}.

![Confronta due zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/compare-two-dns-zone.png){.thumbnail}

Viene visualizzata una nuova pagina con il contenuto delle due zone DNS. Sopra ogni versione viene visualizzata la data corrispondente. Di default, la versione della zona DNS più recente si trova a sinistra e la più vecchia a destra. Un codice a colori consente di identificare le differenze di contenuto.<br>
A sinistra, il contenuto evidenziato in rosso è stato modificato o eliminato nella versione più recente.<br>
A destra, il contenuto evidenziato in verde è stato modificato o aggiunto rispetto alla versione precedente. 

È inoltre possibile aggiornare le date delle versioni che si desidera confrontare utilizzando i due elenchi a discesa.

![Dettagli confronto due zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/compare-dns-zone-details.png){.thumbnail}

Questa guida ti mostra come confrontare due zone DNS e come visualizzare, scaricare, ripristinare ed eliminare una zona DNS.

## Per saperne di più

[Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)

[Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)

[Accedi allo Spazio Cliente OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Creare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_create)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).