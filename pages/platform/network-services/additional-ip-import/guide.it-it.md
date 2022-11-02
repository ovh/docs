---
title: Importa un Additional IP
excerpt: "Come importare un Additional IP nel tuo progetto Public Cloud"
slug: import-additional-ip
section: Additional IP
order: 03
---

**Ultimo aggiornamento 02/11/2022**

> [!primary]
>
> Dal 6 ottobre 2022, la nostra soluzione "Failover IP" si chiama [Additional IP](https://www.ovhcloud.com/it/network/additional-ip/). e non ha alcun impatto sulle funzionalità o sul funzionamento dei tuoi servizi.
>

## Obiettivo

Per configurare un indirizzo Additional IP sulle tue istanze Public Cloud, ad esempio, se:

- Ospiti più siti sulla tua istanza.  
- Ospiti progetti internazionali.
- Vuoi trasferire la tua attività da un server dedicato a un’istanza Public Cloud. 

È possibile importare un indirizzo Additional IP associato a un altro servizio OVHcloud.

**Questa guida ti mostra come importare un Additional IP nel tuo progetto Public Cloud OVHcloud.**

## Prerequisiti

- Un [progetto Public Cloud](https://www.ovhcloud.com/it/public-cloud/) nel tuo account OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Un [indirizzo Additional IP](https://www.ovhcloud.com/it/bare-metal/ip/){.external}

## Procedura

Per prima cosa, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e seleziona il tuo progetto nella sezione `Public Cloud `{.action}. Quindi, seleziona `Additional IP`{.action} nella sezione "Network".

Clicca su `Azioni`{.action} e seleziona `Importa un IP`{.action} per visualizzare tutti gli indirizzi IP che possono essere importati nel tuo progetto Public Cloud.

![IP Section](images/import1.png){.thumbnail}

Se non disponi ancora di un Additional IP sul tuo progetto Public Cloud, l'opzione di importare un IP comparirà sulla homepage.

Clicca sui tre puntini a destra dell’IP che vuoi importare e poi su `Importa questo Additional IP`{.action}.

![Importan Additional IP](images/import2.png){.thumbnail}

Ora, clicca su `Importa`{.action}.

![Import confirm](images/importconfirm.png){.thumbnail}

Una volta effettuata l’operazione, la pagina verrà ricaricata e visualizzerai queste informazioni, come conferma che la migrazione dell’IP è stata effettuata correttamente.

A questo punto, clicca sui tre puntini a destra e poi su `Modifica l’istanza associata`{.action}.

![Importan Additional IP](images/modifyinstance.png){.thumbnail}

Nella finestra che si apre, seleziona l’istanza verso cui vuoi trasferire l’indirizzo IP: 

![Importan Additional IP](images/modifyinstance1.png){.thumbnail}

Clicca su `Associa`{.action}. Dopodiché, vedrai la pagina ricaricarsi con la conferma che l’IP è stato associato all’istanza.

![Importan Additional IP](images/modifycompleted.png){.thumbnail}

Il tuo Additional IP è ora associato alla tua istanza.

Lo step successivo consisterà nella configurazione dell’IP nel sistema operativo. Per conoscere la procedura, consulta questa guida: [Configura un Additional IP](https://docs.ovh.com/it/publiccloud/network-services/configure-additional-ip/).

## Per saperne di più 

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
