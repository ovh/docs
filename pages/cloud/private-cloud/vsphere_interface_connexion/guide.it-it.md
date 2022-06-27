---
title: Connessione all’interfaccia vSphere
slug: connessione-interfaccia-vsphere
excerpt: Come accedere a vSphere con diverse modalità
section: Per iniziare
order: 2
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 24/06/2022**

## Obiettivo

**Questa guida ti mostra come connettersi a vSphere.**

## Prerequisiti

- Essere contatto amministratore dell'infrastruttura [Hosted Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/) per ricevere le credenziali di accesso.
- Aver aggiunto indirizzi IP nella sezione `Sicurezza`{.action} del tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Per maggiori informazioni, consulta la nostra guida [Autorizzare IP ad accedere al vCenter](https://docs.ovh.com/it/private-cloud/autorizzare-ip-ad-accedere-al-vcenter/).

## Procedura

### Recupera le credenziali

Le credenziali di accesso vengono inviate via email durante la creazione di un servizio Private Cloud, la modifica di una password o la creazione di un utente:

```
Indirizzo IP/Nome: pcc-xxx-xxx-xxx-xxx.ovh.com Nome utente: admin Password: xxxxxx
```

Per assicurarsi di poter effettuare l’accesso, consulta la documentazione VMware in cui sono elencate le diverse porte da aprire nel firewall: [Accesso al terminale](https://kb.vmware.com/kb/1012382){.external-link}

### Utilizza il client Web HTML5

Il client Web HTML5 è disponibile nell’interfaccia Web del servizio Hosted Private Cloud, all’indirizzo <https://pcc-xxx-xxx-xxx-xxx.ovh.com/ui> (ricorda di sostituire pcc-xxx-xx-xx-xxx.ovh.com con l’indirizzo del Hosted Private Cloud).

![Connessione all'interfaccia vSphere HTML5](images/connection_interface_w_html5.png){.thumbnail}

Si apre questa interfaccia:

![Connessione all'interfaccia vSphere HTML5](images/vsphere-client-html5.png){.thumbnail}

La pagina `Home`{.action} fornisce l’accesso ai menu principali del vCenter.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
