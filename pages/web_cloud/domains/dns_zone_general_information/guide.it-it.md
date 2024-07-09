---
title: "Sapere tutto sulla zona DNS"
excerpt: "Questa guida ti mostra il ruolo di una zona DNS e i record che contiene per un dominio"
updated: 2024-06-17
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

L'acronimo **DNS**, che sta per **D**omain **N**ame **S**ystem, è un insieme di elementi (server DNS, zona DNS, ecc...) che permettono di far corrispondere un nome di dominio con un indirizzo IP.

È importante distinguere tra **server DNS** e **zona DNS**. a livello di **server DNS** è configurata una **zona DNS**.

Per una migliore comprensione del complesso, ti consigliamo di consultare la nostra guida "[Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)".

Ad esempio, se si desidera accedere al sito *domain.tld* tramite un browser Internet, la richiesta viene inizialmente elaborata da questo set di DNS. L’insieme DNS fornirà quindi in risposta al browser Internet l’indirizzo IP del server che ospita il sito *domain.tld*.

In questo modo, quando digiti *domain.tld*, vengono interrogati i **server DNS** associati al dominio. che contengono la **zona DNS** del dominio *domain.tld* in cui è inserito l’indirizzo IP dell’hosting *domain.tld*. Il browser sarà quindi in grado di visualizzare il sito Internet *domain.tld* contenuto sull’hosting Web. Questa operazione viene definita risoluzione DNS.

**Scopri il ruolo di una zona DNS, cosa contiene e come funziona con un dominio.**

## Procedura

### Ruolo di una zona DNS

La zona DNS di un dominio contiene una configurazione applicabile a quest’ultimo. ed è composta da informazioni tecniche chiamate *record DNS*. La zona DNS è, in un certo senso, un centro di scambio per un nome di dominio.

Ad esempio, è possibile specificare:

- l’indirizzo IP (record DNS di tipo *A* e *AAAA*) dell’hosting Web per visualizzare il sito Web con il dominio.
- I server di posta (record DNS di tipo *MX*) verso cui il tuo dominio deve reindirizzare le email che riceve.
- Informazioni legate alla sicurezza/autenticazione dei servizi (hosting Web, server Web, server di posta, ecc...) associati al dominio (record DNS di tipo SPF, DKIM, DMARC, ecc...).

Una zona DNS è ospitata/registrata su **server DNS**. Per utilizzare la zona DNS ospitata, è necessario dichiarare i **server DNS** (presso il Registrar di un dominio).

Per maggiori informazioni, consulta la nostra pagina web che spiega [come funziona un server DNS](/links/web/domains-dns-server).

### I record DNS

Esistono numerosi record DNS. Tutti hanno uno scopo specifico nella risoluzione DNS. In OVHcloud si distinguono in tre parti:

- Le registrazioni di puntamento (A, AAAA, CNAME, DNAME, NS)
- Record email (MX, SPF, DKIM, DMARC)
- Record estesi (TXT, SRV, CAA, NAPTR, LOC, SSHFP, TLSA)

Per maggiori informazioni sui diversi tipi di record, consulta la nostra guida su [record DNS](/pages/web_cloud/domains/dns_zone_records). In questa interfaccia è possibile trovare elementi che permettono di comprendere meglio [l'edizione di una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

### Esempio di zona DNS

Per capire meglio cos'è una zona DNS, ecco un esempio di zona DNS ospitata in OVHcloud per il dominio *domain.tld*. È configurata sui server DNS *dns200.anycast.me* e *ns200.anycast.me* di OVHcloud:

![DNS zona dashboard](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-dashboard.png){.thumbnail}

In confronto, ecco il suo equivalente in "modalità testo":

```bash
$TTL 3600
@	IN SOA dns200.anycast.me. tech.ovh.net. (2024051800 86400 3600 3600000 60)
                 IN NS     ns200.anycast.me.
                 IN NS     dns200.anycast.me.
                 IN MX     1 mx1.mail.ovh.net.
                 IN MX     5 mx2.mail.ovh.net.
                 IN MX     10 mx3.mail.ovh.net.
                 IN A      203.0.113.0
www              IN A      203.0.113.0
```

In questo esempio, la zona DNS specifica, tra le altre cose, le informazioni seguenti alle query DNS ricevute:

- I server DNS dichiarati per il dominio *domain.tld* sono i server DNS *dns200.anycast.me* e *ns200.anycast.me*.
- Il server deve restituire l'indirizzo IP 203.0.113.0 se viene effettuata una richiesta DNS verso il dominio *domain.tld* o il sottodominio *wwww.domain.tld*. Dietro l'indirizzo IP 203.0.113.0 si può, ad esempio, trovare il sito web *domain.tld*.
- Per le email, la zona DNS indica che le richieste DNS effettuate per gli indirizzi email in *@domain.tld* devono essere inviate al server *mx1.mail.ovh.net* con priorità. Se il server impiega troppo tempo a rispondere o non è disponibile, la richiesta viene inoltrata verso il server *mx2.mail.ovh.net* e così via fino all'ultimo server dichiarato *mx3.mail.ovh.net*.
- Il SOA (**S**tart **O**f **A**uthority) della zona DNS OVHcloud indica che la data dell'ultimo aggiornamento della zona DNS è il 18/05/2024 e che il tempo di aggiornamento della zona DNS è di 3600 secondi. Nelle zone DNS ospitate al di fuori di OVHcloud, le SOA possono contenere altri elementi, come l’indirizzo email dell’amministratore della zona DNS. Per ragioni di sicurezza, OVHcloud ha scelto di non visualizzare questa informazione nel SOA.

## Per saperne di più

[Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)

[Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)

[Creare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_create)

[Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Gestire la cronologia di una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_history)

[Eliminare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_deletion)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).