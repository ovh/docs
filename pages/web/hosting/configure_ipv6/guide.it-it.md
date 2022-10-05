---
title: Configura IPv6 per il tuo sito Web
slug: configurare-ipv6-per-il-tuo-sito
excerpt: Come rendere il tuo sito Web compatibile con IPv6
section: Configurazione dell’hosting
order: 06
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 27/07/2020**

## Informazioni generali

La rete Internet funziona dall'inizio degli anni '90 seguendo lo standard IPv4. Questa norma permette di fornire un indirizzo IP a ogni macchina collegata alla rete Internet: server ma anche computer, smartphone, tablet e qualsiasi altro dispositivo collegato ad Internet. Tale norma comporta un limite importante: permette di identificare poco più di 4 miliardi di apparecchi diversi. O un apparecchio per due persone sulla Terra.

È stato proposto rapidamente un nuovo protocollo: **IPv6**. Permette di identificare più di 340 sextillioni di indirizzi differenti. L'implementazione della rete richiederà tempo a causa di importanti cambiamenti nella rete. 

Essendo raro il numero di IPv4, diventa sempre più difficile aggiungere nuove risorse alla rete Internet. Le connessioni IPv6 sono utili solo se il contenuto è disponibile anche su questo protocollo. In questo modo, maggiore sarà la presenza di siti Web in IPv6 e maggiore sarà l'importanza per ogni attore della rete di migrare su questo protocollo.

Per maggiori informazioni, consulta l'articolo di [Wikipedia](https://it.wikipedia.org/wiki/IPv6){.external} sul protocollo IPv6.

## Obiettivo

I nostri hosting Web sono compatibili con IPv6 dal 2011. ma l'attivazione di questo protocollo è rimasta fino a poco tempo fa un'opzione facoltativa alla configurazione. 

**Questa guida ti mostra come verificare la compatibilità del tuo sito con l'IPv6 e come configurarlo per assicurarne la compatibilità.**

## Prerequisiti

- Aver registrato un [dominio](https://www.ovhcloud.com/it/domains/){.external} nello Spazio Cliente OVHcloud
- Disporre di una soluzione di [hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external} attiva
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

> [!warning]
>OVHcloud fornisce servizi la cui gestione e configurazione sono sotto la tua completa responsabilità. Pertanto spetta a te garantire che tali servizi funzionino correttamente.
>
>Questa guida ti mostra come effettuare le operazioni più comuni. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un esperto del settore e/o il fornitore del servizio. OVHcloud non potrà fornirti alcuna assistenza.  Per maggiori informazioni, consulta la sezione “Per saperne di più” di questa guida.
>

Se il tuo sito non è configurato per IPv6, puoi farlo aggiungendo le informazioni nella zona DNS del tuo dominio. Per permettere ai browser di trovare un indirizzo IPv6 quando richiedono la posizione del tuo sito Web tramite il dominio.

### Verifica la compatibilità IPv6 del tuo sito

Per verificare la compatibilità del tuo sito con IPv6, utilizza il sito [ipv6-test.com](https://ipv6-test.com/validate.php){.external}. che indicherà se il tuo sito risponde al nuovo protocollo IP. In caso contrario, segui questa guida per renderlo compatibile.

### Step 1: Recuperare l'indirizzo IPv6 del tuo hosting Web

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, clicca su `Hosting`{.action} e seleziona il tuo servizio.

Nel riquadro `Informazioni generali`, nella sezione **IPv6**, copia il record e passa allo step successivo.

![IPv6](images/ipv6_01.png){.thumbnail}

### Step 2: Configura la zona DNS

> [!warning]
> La nostra opzione CDN al momento non è compatibile con IPv6. Se configuri un indirizzo IPv6 sul tuo sito Web, i tuoi visitatori non usufruiranno della CDN.

Per trovare l'indirizzo IPv6 nel browser è necessario modificare la zona DNS associata. Per creare un record di tipo **AAAA**, consulta la guida [Modificare una zona DNS OVHcloud](../../domains/web_hosting_modifica_la_tua_zona_dns/).

Clicca sulla scheda `Zona DNS`{.action} e seleziona `Zona DNS`{.action} del dominio. Clicca sul pulsante `Aggiungi un record`{.action} a destra della tabella. Inserisci l'indirizzo IPv6 utilizzando il tipo di record **AAAA** e l'IPv6 recuperato precedentemente nel tuo Spazio Cliente.

![IPv6](images/ipv6_02.png){.thumbnail}

## Per saperne di più

[Modifica una zona DNS OVHcloud](../../domains/web_hosting_modifica_la_tua_zona_dns/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/>.
