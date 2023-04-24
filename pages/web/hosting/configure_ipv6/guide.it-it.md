---
title: "Configura un indirizzo IPv6 per il tuo sito Web"
slug: configurare-ipv6-per-il-tuo-sito
excerpt: "Come rendere il tuo sito Web compatibile con un indirizzo IPv6"
section: Configurazione dell’hosting
order: 06
updated: 2023-02-10
---

**Ultimo aggiornamento: 10/02/2023**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

La rete Internet funziona dall'inizio degli anni '90 seguendo lo standard IPv4. Questa norma permette di fornire un indirizzo IP X.X.X.X (o le "X" sono numeri compresi tra 0 e 255) a ciascuna delle macchine collegate alla rete Internet (server, computer, smartphone, tablet, ecc.). Tuttavia, tale norma limita a circa 4 miliardi il numero di dispositivi connessi alla rete Internet, che nel 2022 rappresentava meno di un apparecchio connesso per due persone sulla Terra.

In seguito, il protocollo **IPv6** è stato introdotto per permettere di connettere alla rete Internet fino a 340 sextitillions di apparecchi. La sua implementazione richiede tempo perché l'intera rete Internet deve integrare questa nuova norma. 

Dato che gli indirizzi IPv4 sono meno disponibili, è più difficile aggiungere nuove macchine sulla rete con lo standard IPv4. Tuttavia, le connessioni con un indirizzo IPv6 sono utili solo se, ad esempio, il tuo sito Web è anche disponibile con lo stesso protocollo. In questo modo, più siti web accessibili in IPv6, più i diversi attori presenti sulla rete Internet trasferiranno i loro dispositivi/macchine su questo nuovo protocollo.

Per maggiori informazioni, consulta l'articolo di [Wikipedia](https://it.wikipedia.org/wiki/IPv6){.external} sul protocollo IPv6.

I nostri hosting Web sono compatibili con IPv6 dal 2011. L'attivazione di questo protocollo è rimasta fino a poco tempo fa un'opzione facoltativa alla configurazione. 

**Questa guida ti mostra come verificare la compatibilità del tuo sito con il protocollo IPv6 e come configurarlo con un indirizzo IPv6.**

## Prerequisiti

- Avere un [dominio](https://www.ovhcloud.com/it/domains/){.external} nello Spazio Cliente OVHcloud
- Disporre di una [offerta di hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external}
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/it/) o di contattare l'amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questo tutorial.
> 

Se il tuo sito non è configurato per funzionare con un indirizzo IPv6, puoi aggiungere [l'indirizzo IPv6 del tuo hosting condiviso OVHcloud](https://docs.ovh.com/it/hosting/lista-indirizzi-ip-di-cluster-e-hosting-web/) nella zona DNS attiva del tuo dominio. L'obiettivo è permettere ai browser di trovare un indirizzo IPv6 associato al tuo sito Web tramite il tuo dominio.

### Verifica la compatibilità IPv6 del tuo sito Web

Per verificare se il tuo sito Web utilizza già un indirizzo IPv6, utilizza il sito [ipv6-test.com](https://ipv6-test.com/validate.php){.external}. Ti dirà se il tuo sito Web risponde a questo nuovo protocollo IP. In caso contrario, prosegui nella lettura della guida.

### Step 1: recuperare l'indirizzo IPv6 del tuo hosting Web

Accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Nella sezione `Web Cloud`{.action}, clicca su `Hosting`{.action}, seleziona il nome dell'hosting e clicca sulla scheda `Informazioni generali`{.action}.

Nel riquadro **IPv6**, copia l'record e passa allo step successivo.

![IPv6](images/ipv6_01.png){.thumbnail}

### Step 2: configurare la zona DNS attiva del dominio

> [!warning]
>
> Le nostre opzioni CDN sono attualmente incompatibili con gli indirizzi IPv6. Se configuri un indirizzo IPv6 per il tuo sito Web, i tuoi visitatori non usufruiranno della CDN.
>
> Inoltre, l'aggiunta, la modifica o l'eliminazione di un record DNS nella zona DNS attiva di un dominio comporta un tempo di propagazione da **4 a 24 ore** per essere pienamente efficace.
>

Per consentire al browser di trovare l'indirizzo IPv6 con il tuo dominio, modifica la zona DNS attiva del tuo dominio. Per creare un record DNS di tipo **AAAA**, consulta la guida "[Modificare una zona DNS OVHcloud](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/#modifica-la-zona-dns-ovhcloud-del-dominio)".

Nella sezione `Web Cloud`{.action}, clicca su `Domini`{.action}. Seleziona il tuo dominio e clicca sulla scheda `Zona DNS`{.action}. Clicca su `Aggiungi un record`{.action} a destra della tabella. 

Inserisci l'indirizzo IPv6 precedentemente copiato utilizzando il tipo di record **AAAA**.

![IPv6](images/ipv6_02.png){.thumbnail}

## Per saperne di più <a name="go-further"></a>

[Modifica una zona DNS OVHcloud](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/#modifica-la-zona-dns-ovhcloud-del-dominio)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.