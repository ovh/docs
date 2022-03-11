---
title: 'Importa un IP Failover'
excerpt: 'Come importare un IP Failover nel tuo progetto Public Cloud.'
slug: importa_un_ip_failover
legacy_guide_number: g1883
section: Rete
---

**Ultimo aggiornamento 10/03/2022**

## Obiettivo

Per configurare un indirizzo IP Failover sulle tue istanze Public Cloud, ad esempio, se:

- Ospiti più siti sulla tua istanza.  
- Ospiti progetti internazionali.
- Vuoi trasferire la tua attività da un server dedicato a un’istanza Public Cloud. 

È possibile importare un indirizzo IP Failover associato a un altro servizio OVHcloud.

**Questa guida ti mostra come importare un IP Failover nel tuo progetto Public Cloud OVHcloud.**

## Prerequisiti

- Un [progetto Public Cloud](https://www.ovhcloud.com/it/public-cloud/) nel tuo account OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Un[indirizzo IP Failover](https://www.ovhcloud.com/it/bare-metal/ip/){.external}

## Procedura

Per prima cosa, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, clicca sul menu`Public Cloud`{.action} e infine sul tuo `Progetto`{.action}. Quindi, seleziona `Failover IP`{.action} nella sezione "Network".

Clicca su `Azioni`{.action} e seleziona `Importa un IP`{.action} per visualizzare tutti gli indirizzi IP che possono essere importati nel tuo progetto Public Cloud.

![IP Section](images/import1.png){.thumbnail}

Se non disponi ancora di un IP Failover sul tuo progetto Public Cloud, l'opzione di importare un IP comparirà sulla homepage.

Clicca sui tre puntini a destra dell’IP che vuoi importare e poi su `Importa questo IP Failover`{.action}.

![Importa IP Failover](images/import2.png){.thumbnail}

Ora, clicca su `Importa`{.action}.

Una volta effettuata l’operazione, la pagina verrà ricaricata e visualizzerai queste informazioni, come conferma che la migrazione dell’IP è stata effettuata correttamente.

A questo punto, clicca sui tre puntini a destra e poi su `Modifica l’istanza associata`{.action}.

![Importa IP Failover](images/modifyinstance.png){.thumbnail}

Nella finestra che si apre, seleziona l’istanza verso cui vuoi trasferire l’indirizzo IP: 

![Importa IP Failover](images/modifyinstance1.png){.thumbnail}

Clicca su `Associa`{.action}. Dopodiché, vedrai la pagina ricaricarsi con la conferma che l’IP è stato associato all’istanza.

![Importa IP Failover](images/modifycompleted.png){.thumbnail}

Il tuo IP Failover è ora associato alla tua istanza.

Lo step successivo consisterà nella configurazione dell’IP nel sistema operativo. Per conoscere la procedura, consulta questa guida: [Configura un IP Failover](https://docs.ovh.com/it/public-cloud/configura-un-ip-failover/){.external}.

## Per saperne di più 

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
