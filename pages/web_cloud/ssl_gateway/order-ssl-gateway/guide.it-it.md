---
title: 'Ordinare un SSL Gateway'
excerpt: 'Rendete sicure le connessioni al vostro sito web'
updated: 2024-10-01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

L’offerta SSL Gateway è concepita per offrire ai propri utenti un certificato SSL per i domini e i servizi di hosting (VPS, server mail, server dedicati, ecc...).

> [!warning]
>
> Gli SSL Gateway sono incompatibili con le offerte di [hosting condivisi OVHcloud](/links/web/hosting). Per usufruire di un certificato SSL per questo tipo di servizi, consulta la nostra guida "[Gestire un certificato SSL su un hosting Web](/pages/web_cloud/web_hosting/ssl_on_webhosting)".
>

**Come ordinare un SSL Gateway.**

## Prerequisiti

- Disporre di un [dominio](/links/web/domains) o sottodominio attivo.
- Avere accesso alla zona DNS del dominio.

## Procedura

### Ordine

Per ordinare la soluzione SSL Gateway, [clicca qui](/links/web/ssl-gateway).

Scegli la tua offerta e clicca su `Ordina adesso`{.action}.

![order ssl gateway](/pages/assets/screens/website/order/configure-my-ssl-gateway.png){.thumbnail}

Nella nuova pagina, inserisci nel form `Cerca il tuo dominio`{.action} il dominio o sottodominio interessato e clicca sull’icona a forma di lente di ingrandimento sulla destra.

> [!warning]
>
> - Offerta Gratuito: sono autorizzati solo i domini fino a 3 livelli (www.domain.tld).
>
> - Offerta Advanced : sono autorizzati i domini di 4° livello (blog.www.domain.tld) e superiori.
>

A questo punto il nostro sistema rileverà automaticamente il o gli indirizzi IP del sito configurati sul dominio o sottodominio. Se disponi di più IP, selezionane uno.

> [!warning]
>
> - Se disponi di diversi indirizzi IP per il tuo sito Web, puoi scegliere un solo IP al momento dell'ordine.
> - Se disponi dell'offerta Advanced, in seguito potrai aggiungere fino a 2 IP supplementari dal tuo [Spazio Cliente OVHcloud](/links/manager).
>

Quindi scegli la localizzazione del datacenter in cui installare l’SSL Gateway, tra le 2 disponibili.

Se lo desideri e se disponibile al momento dell’ordine, spunta la casella `Gestisco la zona DNS di questo dominio e autorizzo OVHcloud a modificare automaticamente il record DNS richiesto`{.action}. La zona DNS associata al dominio o sottodominio verrà aggiornata automaticamente con l’indirizzo IP dell’SSL Gateway.

> [!warning]
>
Le modifiche alla zona DNS potrebbero richiedere fino a 24 ore, a causa della cache dei provider Internet.
>

Verifica che tutte le tue scelte siano corrette nella pagina dell’ordine e clicca su `Continua`{.action}.

Per terminare, lasciati guidare fino alla convalida / pagamento del tuo buono d'ordine.

### Configurazione della zona DNS

Una volta convalidato l’ordine, se non hai selezionato la casella `Gestisco la zona DNS di questo dominio e autorizzo OVHcloud a modificare automaticamente il record DNS richiesto`{.action}, riceverai un’email in cui ti viene chiesto di far puntare il tuo dominio o sottodominio all’infrastruttura OVHcloud entro 3 giorni.

> [!warning]
>
> Se non modifichi la tua zona DNS entro 3 giorni, il tuo ordine verrà annullato.
>

> [!faq]
>
> Caso 1: la zona DNS è gestita dai server DNS condivisi OVHcloud.
>>
>> - Se il tuo identificativo è contatto *amministratore* o *tecnico* della zona DNS, è necessario modificarla dallo [Spazio Cliente OVHcloud](/links/manager).
>> - Se non sei contatto *amministratore* o *tecnico* della zona DNS, contatta il responsabile della zona DNS per modificarla.
>>
>> Se necessario, consulta le istruzioni contenute nella guida "[Creare una zona DNS OVHcloud per un dominio](/pages/web_cloud/domains/dns_zone_create)".
>>
>
> Caso 2: la zona DNS non è gestita dai server DNS condivisi OVHcloud.
>>
>> - In questo caso, modifica l'IP nella tua zona DNS accedendo all'interfaccia del tuo provider o del tuo server dedicato.
>>
>

Una volta effettuate le operazioni necessarie, riceverai un’email di conferma.

> [!warning]
>
Le modifiche alla zona DNS potrebbero richiedere fino a 24 ore, a causa della cache dei provider Internet.
>

## Per saperne di più
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).