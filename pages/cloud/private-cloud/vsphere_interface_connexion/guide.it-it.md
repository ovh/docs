---
title: Connessione all’interfaccia vSphere
slug: connessione-interfaccia-vsphere
excerpt: Come accedere a vSphere con diverse modalità
section: Per iniziare
order: 2
---

**Ultimo aggiornamento: 28/12/2021**

## Obiettivo

**Questa guida ti mostra i diversi modi con cui accedere a vSphere.**

## Prerequisiti

- Essere contatto amministratore dell'infrastruttura [Hosted Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/) per ricevere le credenziali di accesso.
- Avere un utente attivo [creato nello Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Recupera le credenziali

Le credenziali di accesso vengono inviate via email durante la creazione di un servizio Private Cloud, la modifica di una password o la creazione di un utente:

```
Indirizzo IP/Nome: pcc-xxx-xxx-xxx-xxx.ovh.com Nome utente: admin Password: xxxxxx
```

Per assicurarsi di poter effettuare l’accesso, consulta la documentazione VMware in cui sono elencate le diverse porte da aprire nel firewall: [Accesso al terminale](https://kb.vmware.com/kb/1012382){.external-link}

### Utilizza il client Web HTML5

Il client Web HTML5 è disponibile nell’interfaccia Web del servizio Private Cloud, all’indirizzo <https://pcc-xxx-xxx-xxx-xxx.ovh.com/ui> (ricorda di sostituire pcc-xxx-xx-xx-xxx.ovh.com con l’indirizzo del Private Cloud).

![Connessione all'interfaccia vSphere HTML5](images/connection_interface_w_html5.png){.thumbnail}

Si apre questa interfaccia:

![Connessione all'interfaccia vSphere HTML5](images/vsphere-client-html5.png){.thumbnail}

La pagina `Home`{.action} fornisce l’accesso ai menu principali del vCenter.

### Utilizza il client Web Flash

Il client Web Flash è disponibile nell’interfaccia Web del servizio Private Cloud, all’indirizzo <https://pcc-xxx-xxx-xxx-xxx.ovh.com/vsphere-client> (ricorda di sostituire pcc-xxx-xx-xx-xxx.ovh.com con l’indirizzo del Private Cloud).

Per effettuare l’accesso, utilizza le credenziali ricevute:

![Client vSphere](images/vsphere-client.png){.thumbnail}

Si apre questa interfaccia:

![Connessione all'interfaccia vSphere](images/connection_interface_w.png){.thumbnail}

La pagina `Home`{.action} fornisce l’accesso ai menu principali del vCenter.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
