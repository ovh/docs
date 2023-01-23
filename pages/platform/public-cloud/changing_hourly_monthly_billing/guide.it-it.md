---
title: 'Passare dalla fatturazione oraria a quella mensile'
excerpt: 'Scopri come modificare il tipo di fatturazione delle tua istanza Public Cloud'
slug: cambiare-tipo-fatturazione-public-cloud
section: 'Gestione del progetto'
---

**Ultimo aggiornamento 23/01/2023**

## Obiettivo

Creando un’istanza Public Cloud, si può scegliere tra fatturazione oraria o mensile. Le istanze 'orarie' sono fatturate in _pay-as-you-go_, in cui l’utente paga a fine mese la somma delle ore consumate. Per le istanze 'mensili', invece, è necessario effettuare il pagamento anticipato per il mese entrante ma ad un prezzo minore (fino al 50% di sconto). Se inizialmente hai scelto la fatturazione oraria, è comunque possibile passare alla fatturazione mensile in qualsiasi momento.

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
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}


## Procedura

### Dallo Spazio Cliente OVHcloud

Nello [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} seleziona l’istanza per la quale desideri modificare la modalità di fatturazione e clicca sui tre puntini a destra per aprire il relativo menu opzioni. A questo punto clicca sul pulsante `Passa al forfait mensile`{.action}:

![Change billing calculation](images/switch_to_monthly_updated.png){.thumbnail}

È necessario confermare la modifica:

![Confirm billing calculation change](images/confirm_to_monthly_updated.png){.thumbnail}

In seguito a questa modifica, riceverete immediatamente una fattura mensile pro rata. La prossima fattura comprenderà la parte di tariffa oraria del mese (il 1° del mese fino al cambiamento) e il nuovo costo mensile.

### Da API Openstack

Durante la creazione di un'istanza tramite l'API Openstack, tranne se specificato nello script di creazione, l'istanza viene creata automaticamente con una fatturazione oraria. Per effettuare il passaggio a un abbonamento mensile, esegui questo comando:

```bash
openstack server set --property ovh-monthly-instance=1 "InstanceID"
```

Sostituisci "InstanceID" con l'ID dell'istanza corrispondente. L'identificativo può essere recuperato dallo Spazio Cliente OVHcloud o tramite l'API.

### Dall'API OVHcloud

Accedi alla [interfaccia API OVHcloud](https://eu.api.ovh.com/) in base alla [guida appropriata](https://docs.ovh.com/it/api/first-steps-with-ovh-api/) e segui gli step seguenti.

Utilizza questa chiamata:

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling
>
### Da uno script Terraform

Questo è possibile grazie ai `metadata` [attributo](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/compute_instance_v2#metadata){.external} dalla risorsa [openstack_compute_instance_v2](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/compute_instance_v2){.external}:

```terraform
metadata = {
"ovh-monthly-instance" = 1
}
```

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
