---
title: 'Importa un IP Failover'
excerpt: 'Come importare un IP Failover nel tuo progetto Public Cloud.'
slug: importa_un_ip_failover
legacy_guide_number: g1883
---

**Ultimo aggiornamento 06/12/2019**

## Obiettivo

Per configurare un indirizzo IP Failover sulle tue istanze Public Cloud, ad esempio, se:

- ospiti più siti sulla tua istanza  
- ospiti progetti internazionali
- vuoi trasferire la tua attività da un server dedicato a un’istanza Public Cloud, 

è possibile importare un indirizzo IP Failover associato a un altro servizio OVH.

**Questa guida ti mostra come importare un IP Failover nel tuo progetto Public Cloud OVH.**

## Prerequisiti

* Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}
* Un[indirizzo IP Failover](https://www.ovh.it/server_dedicati/ip_failover.xml){.external} assegnato a un [server dedicato OVH](https://www.ovh.it/server_dedicati/){.external}.

## Procedura

Per prima cosa, accedi al tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clicca sul menu`Public Cloud`{.action} e infine sul tuo `Progetto`{.action}.

Quindi, seleziona `IP Failover`{.action} nella sezione Rete.

![IP Section](images/import.png){.thumbnail}

A questo punto, visualizzi tutti gli indirizzi IP che possono essere importati sul tuo progetto Public Cloud:

![IP Section](images/import1.png){.thumbnail}

Clicca sui tre puntini a destra dell’IP che vuoi importare e poi su `Importa questo IP Failover`{.action}.

![Importa IP Failover](images/import2.png){.thumbnail}

Ora, clicca su `Importa`{.action}:

![Importa IP Failover](images/importconfirm.png){.thumbnail}

Una volta effettuata l’operazione, la pagina verrà ricaricata e visualizzerai queste informazioni, come conferma che la migrazione dell’IP è stata effettuata correttamente.

A questo punto, clicca sui tre puntini a destra e poi su`Modifica l’istanza associata`{.action}.

![Importa IP Failover](images/modifyinstance.png){.thumbnail}

Nella finestra che si apre, seleziona l’istanza verso cui vuoi trasferire l’indirizzo IP: 

![Importa IP Failover](images/modifyinstance1.png){.thumbnail}

Clicca su `Associa`{.action}. Dopodiché, vedrai la pagina ricaricarsi con la conferma che l’IP è stato associato all’istanza.

![Importa IP Failover](images/modifycompleted.png){.thumbnail}

Il tuo IP Failover è ora associato alla tua istanza.

Lo step successivo consisterà nella configurazione dell’IP nel sistema operativo. Per conoscere la procedura, consulta questa guida: [Configura un IP Failover](https://docs.ovh.com/gb/en/public-cloud/configure_a_failover_ip/){.external}

## Per saperne di più 

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
