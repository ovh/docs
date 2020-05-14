---
title: 'Passare dalla fatturazione oraria a quella mensile'
excerpt: 'Scopri come modificare il tipo di fatturazione delle tua istanza Public Cloud'
slug: cambiare-tipo-fatturazione-public-cloud
section: 'Gestione del progetto'
---

**Ultimo aggiornamento 06/12/2019**

## Obiettivo

Creando un’istanza Public Cloud, si può scegliere tra fatturazione oraria o mensile. Le istanze 'orarie' sono fatturate in _pay-as-you-go_, in cui l’utente paga a fine mese la somma delle ore consumate. Per le istanze 'mensili', invece, è necessario effettuare il pagamento anticipato per il mese entrante ma ad un prezzo minore (50% di sconto). Se inizialmente hai scelto la fatturazione oraria, è comunque possibile passare alla fatturazione mensile in qualsiasi momento.

**Questa guida ti mostra come passare da una fatturazione oraria ad una mensile.**

> [!warning]
>
> Non è possibile passare da una fatturazione mensile ad una oraria.  Per poterlo fare, è necessario eliminare l’istanza a fatturazione mensile e crearne una nuova a fatturazione oraria.  In questo caso, ti consigliamo di seguire questa procedura:
>
>- Crea uno snapshot della tua istanza
>
>- Crea una nuova istanza basata sullo snapshot effettuato
>
>- Elimina l’istanza a fatturazione mensile
>


## Prerequisiti

- Aver creato un’[istanza Public Cloud](https://www.ovhcloud.com/it/public-cloud/){.external}.
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}


## Procedura

Nello [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager){.external} seleziona l’istanza per la quale desideri modificare la modalità di fatturazione e clicca sui tre puntini a destra per aprire il relativo menu opzioni. A questo punto clicca sul pulsante `Passa al forfait mensile`{.action}:

![Change billing calculation](images/switch.png){.thumbnail}

È necessario confermare la modifica:

![Confirm billing calculation change](images/switch1.png){.thumbnail}

In seguito a questa modifica, verrà emessa una fattura per l’ammontare corrispondente al numero dei giorni rimanenti fino alla fine del mese. Pertanto, la fattura finale conterrà il costo delle ore dell’istanza del mese trascorso in configurazione oraria ed il costo del mese entrante in configurazione mensile.


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.