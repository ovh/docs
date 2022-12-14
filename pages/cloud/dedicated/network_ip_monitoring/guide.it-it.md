---
title: Quali sono gli indirizzi IP del monitoring OVHcloud?
slug: monitoring-ip-ovh
excerpt: Qui trovi gli indirizzi IP da inserire durante l'installazione del firewall, in modo che il monitoring OVHcloud continui a funzionare sul tuo server.
section: Rete e IP
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 13/12/2022**

## Obiettivo

Il servizio di monitoring permette di controllare lo stato della tua macchina e di attivare automaticamente l'intervento di un tecnico nel datacenter.

Tutti i server dei nostri clienti e l'intera rete sono monitorati dai team tecnici OVHcloud 24 ore su 24 e 7 giorni su 7.

OVHcloud interviene al momento dell'attivazione di un alert (nessuna risposta ai ping) per limitare al massimo i tempi di indisponibilità dei server e della rete.

Per impostare un firewall restrittivo, in particolare sull'ICMP, e continuare a usufruire del monitoring OVHcloud, è necessario autorizzare gli indirizzi IP che trovi qui di seguito.

## Prerequisiti

- Un prodotto OVHcloud su cui hai installato un Firewall.
- Avere accesso alle regole del Firewall

## Procedura

### Indirizzi IP da autorizzare

|Reverse|IP|Protocollo|
|---|---|---|
|mrtg-rbx-100|37.187.231.251|icmp|
|mrtg-sbg-100|37.187.231.251|icmp|
|mrtg-gra-100|37.187.231.251|icmp|
|mrtg-bhs-100|37.187.231.251|icmp|
|mrtg-rbx-101|151.80.231.244|icmp|
|mrtg-rbx-102|151.80.231.245|icmp|
|mrtg-rbx-103|151.80.231.246|icmp|
|mrtg-gra-101|151.80.231.247|icmp|
|a2.ovh.net|213.186.33.62|icmp|
|---|---|---|
|netmon-rbx-probe|92.222.184.0/24|icmp|
|netmon-sbg-probe|92.222.185.0/24|icmp|
|netmon-gra-probe|92.222.186.0/24|icmp|
|netmon-bhs-probe|167.114.37.0/24|icmp|
|netmon-sgp-probe|139.99.1.144/28|icmp|
|---|---|---|
|proxy.p19.ovh.net|213.186.45.4|icmp|
|proxy.rbx.ovh.net|213.251.184.9|icmp|
|proxy.sbg.ovh.net|37.59.0.235|icmp|
|proxy.bhs.ovh.net|8.33.137.2|icmp|
|ping.ovh.net|213.186.33.13|icmp|
|proxy.ovh.net|213.186.50.98|icmp|
|---|---|---|
||xxx.xxx.xxx.250 (xxx.xxx.xxx.aaa è l'IP del server)|icmp|
||xxx.xxx.xxx.251 (xxx.xxx.xxx.aaa è l'IP del server)|icmp + porta monitorata dal servizio monitoring|

**La comunicazione tra il servizio RTM e il tuo server richiede anche che autorizziate le connessioni in entrata e in uscita sulle porte UDP da 6100 a 6200.**

> [!primary]
>
> Se il tuo server è situato a Roubaix 3, è necessario recuperare l'ultimo IP tramite tcpdump.
>
> ```
> tcpdump host ip.fisso.del.server | grep ICMP
> ```
>

### Attiva o disattiva il monitoring

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e seleziona la scheda `Bare Metal Cloud`{.action}.Seleziona il server nel menu a tendina **Server dedicati**.

È possibile attivare o disattivare il monitoraggio di un server dedicato dalla scheda `Informazioni generali`{.action}. L'opzione si trova nella sezione `Stato dei servizi`.

![Monitoring](images/monitoring-server.png){.thumbnail}

Clicca sul pulsante `Configura`{.action}. Nella nuova finestra, hai tre opzioni per il tuo comportamento di sorveglianza:

- **Disattivato**: Questa opzione blocca i messaggi di alert e gli interventi di OVHcloud. Scegli questa opzione se esegui le azioni di amministrazione sul server che impediscono una risposta ICMP.
- **Attivato con intervento proattivo**: Se il server non risponde più, riceverai un'email di alert e il server sarà verificato da un tecnico.
- **Attivato senza intervento proattivo**: Riceverai un alert via email nel caso in cui il server non risponda più. Per avviare un intervento è necessario creare una richiesta di assistenza.

![Monitoring](images/monitoring-server2.png){.thumbnail}

Clicca su `Conferma`{.action} per aggiornare la tua configurazione di sorveglianza.

### Attiva il monitoring di servizi specifici

Oltre al monitoring standard, OVHcloud può anche monitorare servizi specifici come HTTP, SSH e altri protocolli.

Per effettuare questa operazione, nella scheda `Informazioni generali`{.action} e poi nel riquadro **Stato dei servizi**, clicca sul pulsante `...`{.action} accanto a "Servizi monitorati". Clicca su `Monitora i tuoi servizi`{.action}.

![monitoring](images/monitoring02.png){.thumbnail}

Verrai reindirizzato allo schermo qui sotto. Clicca su `Monitora un servizio`{.action} e inserisci l'indirizzo IP, il protocollo, il numero di porta, la risposta del server e l'intervallo di tempo tra le verifiche del tuo servizio. Clicca sul simbolo di conferma (**V**) per confermare le modifiche.

![monitoring](images/monitoring3.png){.thumbnail}

## Per saperne di più

[Configurare il Network Firewall](../firewall-network/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
