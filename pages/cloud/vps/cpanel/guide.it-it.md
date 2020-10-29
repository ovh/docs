---
title: Deploy di cPanel su un VPS
slug: cpanel
excerpt: Come installare un VPS con l'applicazione cPanel preinstallata.
section: Utilizzo avanzato
---

**Ultimo aggiornamento: 02/06/2020**

## Obiettivo

cPanel è un pannello di controllo sviluppato per gli hosting Web. Grazie a un’interfaccia grafica che consente di automatizzare i parametri, l’hosting Web diventa più semplice.

**Questa guida ti mostra come configurare cPanel con le applicazioni preinstallate su un VPS.**

## Prerequisiti

- Un [VPS della gamma attuale](https://www.ovhcloud.com/fr/vps/){.external} (offerte Value, Essential, Comfort o Elite).
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}

## Procedura

Per installare il tuo server cPanel, è necessario ordinare un VPS con la distribuzione cPanel.

![cPanel](images/cpanel_order.png){.thumbnail}

Quando il VPS è pronto, ricevi un’email con le credenziali di accesso al server cPanel:

```
 |    Le tue applicazioni:
 |    Puoi accedere a cPanel da https://<ip>:2087/<session_parameters>
```

Se disponi già di un VPS e vuoi installare cPanel, è possibile reinstallare il VPS dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager) utilizzando il modello "CentOS 7 - cPanel" (disponibile solo con un'offerta VPS compatibile).

> [!warning]
>
> Se riinstalli un VPS, tutti i dati salvati sul VPS verranno persi.
> 

### Prima connessione

Una volta ricevuto l'email con il link unico, clicca su questo link per effettuare la configurazione iniziale.

> [!primary]
>
> Se il link è già scaduto, reinstalla il VPS con cPanel.
>

L'URL di cui sopra ti permette di connetterti senza informazioni di identificazione (utente e password) alla tua interfaccia WHM.

#### Step 1: leggi le condizioni di utilizzo di cPanel

Leggi e accetta le condizioni di utilizzo di cPanel

![cPanel](images/license_validation.png){.thumbnail}

#### Step 2: completare i campi richiesti

Indica i server di posta e di nome (nameserver) che vuoi definire sul server VPS.

![cPanel](images/setup_config_cpanel.png){.thumbnail}

#### Step 3: definire la password di root

![cPanel](images/change_root.png){.thumbnail}

A questo punto dovresti essere in grado di connetterti a WHM e in SSH utilizzando l'utente root con la password appena definita.

### Protezione del tuo servizio

Ti consigliamo di adottare tutte le misure necessarie a proteggere il tuo WHM e il tuo VPS. Per effettuare questa operazione, ti consigliamo di consultare [qui](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/) le raccomandazioni di cPanel.

Ti consigliamo inoltre di consultare la nostra guida per [proteggere un VPS](../conseils-securisation-vps/), utilizzare [le nostre soluzioni di backup](../) e configurare il [Firewall Network](../../dedicated/firewall-network/).

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com>.
