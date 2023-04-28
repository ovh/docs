---
title: 'Configurare un NIC per il servizio OVHcloud Link Aggregation in Debian 9'
slug: ola-debian9
excerpt: "Attivare l'opzione OVHcloud Link Aggregation sul tuo server Debian 9"
section: 'Utilizzo avanzato'
order: 3
updated: 2022-01-07
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 07/01/2022**

## Obiettivo

La tecnologia OVHcloud Link Aggregation (OLA) è stata progettata dai team OVHcloud per aumentare la disponibilità dei server e potenziare le connessioni di rete. L’attivazione dell’opzione permette di aggregare in pochi click le schede di rete e rendere i collegamenti ridondati in modo che, in caso di malfunzionamenti, il traffico venga reindirizzato automaticamente verso il collegamento disponibile.

**Questa guida ti mostra come associare i Network Interface Controller (NIC) per utilizzarli con il servizio OLA su un sistema Debian 9.**

## Prerequisiti

- [Configurare un NIC per il servizio OVHcloud Link Aggregation nello Spazio Cliente](../ola-manager)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

> [!warning]
>
> Prima di attivare OVHcloud Link Aggregation nello Spazio Cliente o nell’API, è necessario scaricare il pacchetto ifenslave tramite questo comando:
>
> ```
> apt install ifenslave
> ```
>

## Procedura

Il tipo di configurazione disponibile in OLA per i nostri NIC non permette di accedere al server in SSH. Per stabilire la connessione alla macchina è quindi necessario utilizzare IPMI.
<br>Per attivare il tool accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Nella sezione `Bare Metal Cloud`{.action}, seleziona il tuo server tra `Server dedicati`{.action} e clicca sulla scheda `IPMI`{.action} (1).

Clicca sul pulsante `Da una applet Java (KVM)`{.action} (2).

![remote_kvm](images/remote_kvm2022.png){.thumbnail}

Verrà scaricato un programma JNLP: aprilo e utilizza le credenziali associate al server per accedere.

Se utilizzi un template OVHcloud, il nome delle schede di rete assegnato di default sarà **ethX** o **enoX**. In caso contrario è possibile trovare i nomi delle interfacce eseguendo questo comando:

```bash
ip a
```

> [!primary]
>
> Il risultato restituito mostrerà diverse "interfacce". In caso di difficoltà nel determinare i propri NIC fisici, è utile considerare che gli indirizzi IP pubblici del server sono associati di default alla prima interfaccia.
>

Una volta individuati i nomi dei due NIC sarà possibile configurarne il bonding nel sistema operativo. Per creare il file **interfaces** in un editor di testo, utilizza questo comando:

```bash
vi /etc/network/interfaces
```

Si aprirà un file di testo vuoto. Per configurare l’interfaccia bond, inserisci queste righe:

```bash
auto bond0
  iface bond0 inet static
  address 10.0.0.1/24
  bond-mode 802.3ad
  bond-slaves eno1 eno2
  bond-miimon 100
  bond-downdelay 200
  bond-lacp-rate 1
  bond-xmit_hash_policy layer2+3

  up ip -6 addr add fc10:0000:0000:0001::/64 dev bond0
```

> [!primary]
>
> Per configurare una rete privata via IPv6 è sufficiente aggiungere al file solo l’ultima riga.
>

A questo punto riavvia il servizio di rete con il comando:

```bash
systemctl restart networking
```

Questa operazione potrebbe richiedere alcuni minuti per costruire l’interfaccia bond. Per testare il corretto funzionamento della nuova interfaccia creata, effettua il ping di un altro server presente nella stessa vRack. Se funziona, la procedura è conclusa. In caso contrario, verifica nuovamente la configurazione o prova a riavviare il server.

## Per saperne di più

[Configurare un NIC per il servizio OVHcloud Link Aggregation nello Spazio Cliente](../ola-manager/).

[Configurare un NIC per il servizio OVHcloud Link Aggregation in CentOS 7](../ola-centos7/).

[Configurare un NIC per il servizio OVHcloud Link Aggregation in Windows Server 2019](../ola-w2k19/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
