---
title: Importa un Additional IP
excerpt: "Come importare un Additional IP nel tuo progetto Public Cloud"
slug: import-additional-ip
section: Additional IP
order: 03
---

**Ultimo aggiornamento 17/11/2022**

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

> [!warning]
> Questa funzionalità al momento non è disponibile per le istanze Metal.
>

## Procedura

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e seleziona il tuo progetto nella sezione `Public Cloud `{.action}.

Nel menu a sinistra, apri `Public IP`{.action} in `Network`.

Apri la scheda `Additional IP`{.action} e clicca sul pulsante `Azioni`{.action}. Seleziona `Importa un Additional IP`{.action} per visualizzare tutti gli indirizzi IP che possono essere importati nel tuo progetto Public Cloud.

![Sezione IP](images/import22_01.png){.thumbnail}

Se non disponi ancora di un Additional IP sul tuo progetto Public Cloud, l'opzione di importazione di un Additional IP verrà visualizzata sulla home page.

Clicca sui tre puntini `...`{.action} in corrispondenza dell'indirizzo IP che vuoi importare e clicca su `Importa questo Additional IP`{.action}.

![Importazione Additional IP](images/import22_02.png){.thumbnail}

Clicca su `Importa`{.action}.

![Importazione conferm](images/import22_03.png){.thumbnail}

Attendi qualche minuto fino al completamento dell'importazione. Apri la scheda `Additional IP`{.action} per ricercare l'indirizzo aggiuntivo IP importato. Aggiorna la pagina se necessario.

Clicca sui tre puntini `...`{.action} a destra e seleziona `Modifica l'istanza associata`{.action}.

![Importazione Additional IP](images/import22_04.png){.thumbnail}

Per scegliere l'istanza a cui associare il tuo indirizzo IP, visualizzi una finestra contestuale.

![Importazione Additional IP](images/import22_05.png){.thumbnail}

Clicca su `Conferma`{.action}. La pagina visualizzerà quindi un messaggio di modifica.

> [!warning]
>
> Un Additional IP non può essere spostato tra diverse zone. Ad esempio, un IP localizzato nel datacenter di SBG può essere spostato verso GRA o RBX ma non verso BHS.
>

Il tuo indirizzo aggiuntivo IP sarà associato alla tua istanza.

Il prossimo step consiste nel configurare l'IP nel tuo sistema operativo. Consulta [la nostra guida dedicata a questa configurazione](https://docs.ovh.com/it/publiccloud/network-services/configure-additional-ip/).

## Per saperne di più 

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
