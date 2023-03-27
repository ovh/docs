---
title: Controllare e proteggere il vostro server dedicato ESXi dal primo avvio
slug: esxi-hardening
excerpt: Scopri i diversi modi per proteggere efficacemente il tuo server dedicato ESXi
section: 'Sicurezza'
order: 5
updated: 2023-03-22
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 22/03/2023**

## Obiettivo

Questa guida ti mostra come configurare al meglio la protezione del tuo sistema ESXi.

In particolare, questa guida ti mostra come:

- limitare l'accesso al tuo ESXi a un indirizzo IP o a una gamma di rete specifica;
- disattivare servizi che aumentano la superficie di attacco del tuo server.

Ci affideremo alle funzioni embedded offerte da VMware, ma anche a quelle offerte da OVHcloud.

> [!warning]
> 
> Di recente, i sistemi ESXi sono stati vittime di una falla che gruppi malevoli hanno sfruttato molto rapidamente attraverso le reti pubbliche.
>
> Per maggiori informazioni su questo attacco, consulta [le FAQ (EN)](https://docs.ovh.com/gb/en/dedicated/esxi-faq/).
>

### Best practice di sicurezza:

- Aggiorna regolarmente i tuoi sistemi ESXi.
- Restringi l'accesso ai soli indirizzi IP di fiducia.
- Disattiva le porte e i servizi non utilizzati.
- Assicurati che gli accessi ai tuoi server o dispositivi di rete siano limitati, controllati e protetti con password robuste.
- Salva i tuoi dati critici in dischi esterni e server di backup protetti e isolati da Internet.

**Opzionale**:

- Implementa le soluzioni di giornalizzazione necessarie per monitorare gli eventi verificatisi sui tuoi server critici e sui tuoi dispositivi di rete.
- Imposta pack di sicurezza per rilevare azioni malevoli, intrusioni (IPS/NIDS) e per il controllo della banda passante di traffico di rete.

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Disporre di un server dedicato con ESXi attivo
- Disporre di un'offerta compatibile con la funzionalità [Network Firewall](https://docs.ovh.com/it/dedicated/firewall-network/) per eseguire il filtraggio

## Procedura

### Protezione anti-intrusione nativa

Richiamo della sua definizione e del suo principio di funzionamento:

> [!primary]
> 
> Il sistema ESXi dispone di un meccanismo di sicurezza legato all’account amministratore.
> In caso di più tentativi errati di accesso, l'account amministratore viene bloccato temporaneamente.
> Questo meccanismo permette di proteggere il tuo sistema ed evitare così i tentativi di connessione malevoli.

> [!warning]
> 
> Se il sistema si attiva e desideri connetterti al tuo ESXi immediatamente, sarà necessario sbloccare manualmente l'account amministratore.
>
> Per effettuare questa operazione, è necessario [riavviare](https://docs.ovh.com/it/dedicated/iniziare-a-utilizzare-server-dedicato/#riavvio-del-tuo-server-dedicato_1) il server ESXi attraverso lo Spazio Cliente OVHcloud.
> 

È possibile consultare lo storico dei log di accesso in questi file a partire da uno shell SSH:

- `/var/run/log/vobd.log` contiene i log che possono essere utilizzati per la supervisione e la risoluzione dei problemi:

```
2023-02-13T16:22:22.897Z: [UserLevelCorrelator] 410535559us: [vob.user.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
2023-02-13T16:22:22.897Z: [GenericCorrelator] 410535559us: [vob.user.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
2023-02-13T16:22:22.897Z: [UserLevelCorrelator] 410535867us: [esx.audit.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
```

- `/var/run/log/hostd.log` contiene i log dell'host ESXi (task, accesso all'interfaccia WEB, ecc...):

```
2023-02-21T08:44:19.711Z error hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] [module:pam_lsass]pam_do_authenticate: error [login:root][error code:2]
2023-02-21T08:44:19.711Z error hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] [module:pam_lsass]pam_sm_authenticate: failed [error code:2]
2023-02-21T08:44:19.712Z warning hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] Rejected password for user root from xxx.xxx.xxx.xxx
2023-02-21T08:44:19.712Z info hostd[2101004] [Originator@6876 sub=Vimsvc.ha-eventmgr opID=esxui-d48c-26a4] Event 175 : Cannot login root@xxx.xxx.xxx.xxx
```

Tutte queste informazioni sono disponibili anche attraverso l'interfaccia di amministrazione Web. Clicca sul menu `Host`{.action} e accedi alla sezione `Monitor`{.action}, poi clicca su `Logs`{.action}.

![interfaccia](images/gui_logs_.png){.thumbnail}

### La soluzione Network Firewall

> [!primary]
>
> Ti ricordiamo che il Network Firewall non è incluso nella rete OVHcloud. Di conseguenza, le regole configurate non influiscono sulle connessioni provenienti da questa rete interna.
>

Ti proponiamo di attivare e utilizzare la nostra soluzione di filtraggio [Network Firewall](https://docs.ovh.com/it/dedicated/firewall-network/).
Questa soluzione permette di gestire facilmente gli accessi legittimi, in aggiunta a quelli impostati tramite il sistema ESXi.

In caso di attacco, eviti anche di bloccare inaspettatamente il tuo account amministratore.

Ti consigliamo di filtrare gli accessi legittimi in questo modo:

- La regola 1 (Priority 0) autorizza reti esterne di fiducia ad accedere al tuo sistema ESXi.
- La regola 2 (Priority 1) blocca tutto il resto.

![Network_Firewall](images/firewall_network_.png){.thumbnail}

### Filtro con ESXi

> [!primary]
>
> Puoi filtrare gli accessi al tuo sistema ESXi grazie al firewall integrato.
> In base all'utilizzo, è possibile disattivare anche i servizi non necessari.
>

> [!warning]
> 
> Ti consigliamo di disattivare i servizi **SSH** e **SLP**.
> Se, nonostante tutto, continui a utilizzare il servizio SSH, ne restringi al massimo l'utilizzo e gli accessi.
> Ciò vale anche per l'accesso allo **shell**.
> Prevedibili solo allo stretto necessario per ogni tua necessità.

#### Manipolazione tramite l'interfaccia grafica

**Servizi**

Clicca sul menu `Host`{.action} e accedi alla sezione `Manage`{.action}, poi clicca su `Services`{.action}.

Trova nella lista il servizio `TSM-SSH` e clicca con il tasto destro sulla linea associata.

Fermate il servizio cliccando su `Stop`{.action}:

![services_ssh](images/stop_service.png){.thumbnail}

Seleziona la `Policy` e modificala come nell'esempio presentato.

Scegli l'opzione `Start and stop manually`{.action} per evitare che il servizio sia attivo all'avvio del server.

![services_ssh](images/ssh_disabled_.png){.thumbnail} 

Applica gli stessi parametri per il servizio `slpd`:

![services_slp](images/slpd_.png){.thumbnail}

**Regole del firewall**

Clicca sul menu `Networking`{.action} e poi su `Firewall rules`{.action} e seleziona `Edit settings`{.action} per ciascuno dei servizi da proteggere:

![rughe](images/firewall_web_.png){.thumbnail}

Modifica la regola per aggiungere solo indirizzi IP o reti che devono avere accesso al tuo sistema ESXi.

Esempio che autorizza solo le connessioni dall'IP 192.168.1.10:

![custom](images/custom_fw_rule.png){.thumbnail}

#### Manipolazione tramite la shell

**Servizi**

Disattiva i servizi non necessari:

- Servizio SLP

```bash
/etc/init.d/slpd stop
esxcli network firewall ruleset set -r CIMSLP -e 0
chkconfig slpd off
```

- Servizio SSH

```bash
/etc/init.d/SSH stop
esxcli network firewall ruleset set -r sshServer -e 0
chkconfig SSH off
```

Verifica tutti i servizi attivi all'avvio:

```bash
chkconfig --list | grep on
```
<br/>
<br/>

**Regole del firewall**

Visualizza le regole del firewall esistenti:

```bash
esxcli network firewall ruleset list
esxcli system account list
```

> Spiegazioni sulle modifiche/modifiche della regola di accesso: 
> 
> - Il servizio `vSphereClient`: questo servizio corrisponde all'interfaccia WEB di amministrazione sulla porta 443 (HTTPS).
> - Il servizio `sshServer`: questo servizio corrisponde agli accessi in SSH sulla porta 22.

Esempio con il servizio vSphereClient:

```bash
esxcli network firewall ruleset list --ruleset-id vSphereClient
```

Assicurati che la regola del firewall sia attiva:

```bash
esxcli network firewall ruleset set --ruleset-id vSphereClient --enabled true
```

Visualizza la lista degli IP autorizzati per questa regola:

```bash
esxcli network firewall ruleset allowedip list --ruleset-id vSphereClient
```

Risultato:

```
Ruleset        Allowed IP Addresses
-------------  --------------------
vSphereClient  All
```

Modifica lo stato del tag disattivandolo:

```bash
esxcli network firewall ruleset set --ruleset-id vSphereClient --allowed-all false
```

Autorizza esclusivamente l'indirizzo IP legittimo 192.168.1.10:

```bash
esxcli network firewall ruleset allowedip add --ruleset-id vSphereClient --ip-address 192.168.1.10
```

Verifica la presenza dell'indirizzo nella lista di accesso:

```bash
esxcli network firewall ruleset allowedip list --ruleset-id vSphereClient
```

Risultato:

```
Ruleset        Allowed IP Addresses
-------------  --------------------
vSphereClient  192.168.1.10
```
<br/>
<br/>

Per utilizzare comunque il servizio SSH, spieghiamo come configurare un accesso tramite chiave SSH.

Genera le chiavi sulla macchina che deve connettersi al server ESXi, l'algoritmo **ECDSA** su 521 bit è da privilegiare per una sicurezza massima:  

> [!warning]
> L'autenticazione funziona con una coppia di chiavi: una pubblica amministrazione e un'altra privata.
> Non condividere la tua chiave **privata**, questa deve restare sulla macchina in cui è stata generata.

Esegui questo comando:

```bash
ssh-keygen -t ecdsa -b 521 -C "key-ecdsa-esxi-host" -f /path-to-my-key/key-ecdsa
```

```
Generating public/private ecdsa key pair.
Enter file in which to save the key (/path-to-my-key/key-ecdsa_rsa):
```

Inserisci una password solida:

```
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

Solo la chiave pubblica (key-ecdsa.pub) dovrà essere comunicata o depositata sulle macchine alle quali vuoi connetterti.

```
Your identification has been saved in /path-to-my-key/key-ecdsa.
Your public key has been saved in /path-to-my-key/key-ecdsa.pub.
The key fingerprint is:
SHA256:******************************************* key-ecdsa-esxi-host
```

Trasferisci la chiave pubblica verso il tuo host ESXi affinché possa essere dichiarata come affidabile:

```bash
cat /path-to-my-key/key-ecdsa.pub | ssh root@esxi-host-ip 'cat >> /etc/ssh/keys-root/authorized_keys'
```

## Per saperne di più

Per maggiori informazioni sulle best practice di sicurezza, consulta la [guida](https://core.vmware.com/security-configuration-guide) VMware.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.