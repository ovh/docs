---
title: Creare un server OpenVPN
slug: openvpn
excerpt: Come installare un server OpenVPN su un VPS
section: Utilizzo avanzato
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 24/06/2021**

## Obiettivo

OpenVPN è un software che ti permette di creare una rete privata virtuale (VPN). Utilizzando il template VPS OVHcloud per un server OpenVPN, potrai installare e utilizzare il tuo servizio VPN personale in pochi step.

**Questa guida ti mostra come creare il tuo servizio VPN con VPS e OpenVPN.**

## Prerequisiti

- Disporre di un [VPS](https://www.ovhcloud.com/it/vps/) nello Spazio Cliente OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Installa il server OpenVPN

> [!primary]
>
Per utilizzare un VPS esistente, è possibile farlo direttamente dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), [reinstallando il servizio con il template OpenVPN](../iniziare-a-utilizzare-vps/#installa-o-reinstalla-il-tuo-vps-gamma-attuale).
>

Ordina il tuo VPS sulla [pagina del prodotto](https://www.ovhcloud.com/it/vps/). Durante la selezione dell'immagine seleziona `Distribuzione con applicazione`{.action} e poi `OpenVPN`{.action} come sistema operativo.

![Ordine VPS](images/order_vps.png){.thumbnail}

Una volta installato il VPS, riceverai un'email con le credenziali di accesso.

![Email di installazione](images/opencredent2.png){.thumbnail}

Il tuo server VPN è pronto. Per connetterti, clicca sul link nell'email di installazione che aprirà l'interfaccia Web OpenVPN Client. Inserisci le informazioni di identificazione OpenVPN fornite nella stessa email.

![Pagina di connessione](images/login_user.png){.thumbnail}

### Installazione e utilizzo del client OpenVPN

#### Per Windows

Nell'interfaccia Web del cliente, seleziona il `simbolo Windows`{.action}.

![Interfaccia utente](images/windows_client.png){.thumbnail}

Salva il file `.msi` e lancialo.

Una volta installata l'applicazione cliente, puoi avviarla tramite il menu Windows o dalla barra dei task.

![Win app](images/win_launch.png){.thumbnail}

Connettiti alle tue credenziali OpenVPN fornite nell'email di installazione.

![Connessione Windows](images/win_login.png){.thumbnail}

Da questo momento navigherai su Internet con l'indirizzo IP della tua VPN.

Per verificare il tuo indirizzo IP accedi alla pagina [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.

#### Per Linux

##### **Installa il client OpenVPN**

Per installare il client per le distribuzioni di tipo Fedora/CentOS/RedHat:

```sh
sudo yum install openvpn
```

Per installare il cliente per le distribuzioni di tipo Ubuntu/Debian:

```sh
sudo apt-get install openvpn
```

È necessario scaricare il file di configurazione `client.ovpn` dall'interfaccia Web del client OpenVPN.

![Interfaccia utente](images/ovpn.png){.thumbnail}

##### **Avvia il client OpenVPN con il tuo file di configurazione**

```sh
sudo openvpn --config client.ovpn
```

Ti verrà chiesto di inserire le tue credenziali:

```sh
 Enter Auth Username: openvpn
 Enter Auth Password: ***************************
```

Da questo momento navigherai su Internet con l'indirizzo IP della tua VPN.

Per verificare il tuo indirizzo IP accedi alla pagina [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.

#### Su MacOS

Dopo aver effettuato l'accesso, seleziona il `simbolo Apple`{.action}.

![Interfaccia utente](images/mac_client.png){.thumbnail}

Salva il file e lancialo.

![Login Mac](images/login_screen_mac.png){.thumbnail}

Connettiti alle tue credenziali OpenVPN fornite nell'email di installazione.

![Login Mac](images/connection_openvpn_mac.png){.thumbnail}

Da questo momento navigherai su Internet con l'indirizzo IP della tua VPN.

Per verificare il tuo indirizzo IP accedi alla pagina [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.

### Accesso al tuo server OpenVPN

Nell'interfaccia Web OpenVPN Cliente (accessibile tramite l'URL fornito nell'email di installazione), clicca sul pulsante `Admin`{.action}.

![Interfaccia utente](images/admin_button.png){.thumbnail}

Aggiungi `admin` all'URL OpenVPN per accedere direttamente alla pagina di connessione:

```sh
https://IP_of_your_VPS:943/admin
```

Accedi con le stesse credenziali OpenVPN fornite nell'email e accetta termini e condizioni.

A questo punto hai accesso al pannello di configurazione del server OpenVPN.

![Server di accesso OpenVPN](images/admin_access.png){.thumbnail}

## Per saperne di più

[Iniziare a utilizzare un VPS](../iniziare-a-utilizzare-vps/)

[OpenVPN](https://openvpn.net/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.