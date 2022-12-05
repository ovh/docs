---
title: Configurare IPv6 su un server VPS
slug: configurare-ipv6
excerpt: Come configurare IPv6 sul tuo VPS OVHcloud
section: 'Rete e IP'
order: 1
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 01/12/2022**

## Obiettivo

L’IPv6 è la versione più recente dell’*Internet Protocol*(IP). Ogni server VPS OVHcloud viene consegnato con un indirizzo IPv4 e un indirizzo IPv6. Di default è configurato soltanto l’IPv4 ma, Se devi configurare l'IPv6, devi farlo manualmente sul tuo sistema.

**Questa guida ti mostra come configurare l'IPv6 sul tuo server VPS OVHcloud utilizzando diversi metodi.**

> [!warning]
>
> OVHcloud mette a disposizione i server,  ma non è autorizzata ad accedervi e non si occupa quindi della loro amministrazione. Garantire quotidianamente la gestione software e la sicurezza di queste macchine è quindi responsabilità dell’utente. Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi relativi ad amministrazione e sicurezza, ti consigliamo di contattare un fornitore specializzato. Per maggiori informazioni consulta la sezione “Per saperne di più”.
> 

## Prerequisiti

- Disporre di un [server VPS OVHcloud](https://www.ovhcloud.com/it/vps/){.external}
- Essere connesso al tuo VPS in SSH (accesso root) o tramite desktop remoto (Windows)
- Possedere conoscenze base di rete
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} o all'[API OVHcloud](https://api.ovh.com/console/).

## Procedura

> [!primary]
>
> Le configurazioni visibili in questa guida sono fornite a titolo d'esempio e possono variare in base al sistema operativo utilizzato sul tuo VPS.
> 

Configurare un IPv6 su un VPS è un’operazione che prevede diversi step, Ti verrà chiesto regolarmente di eseguire comandi o personalizzare la configurazione del tuo server. 

Prima di iniziare ti consigliamo di consultare la tabella qui sotto, che contiene i termini utilizzati in questa guida e la loro descrizione: 

|Termine|Descrizione|Esempio|
|---|---|---|
|YOUR_IPV6|Indirizzo IPv6 assegnato al servizio.|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:yyyy|
|IPv6_PREFIX|Prefisso (o *netmask*) del blocco IPv6, generalmente 128|2001:xxxx:xxxx:xxxx::/128|
|IPv6_GATEWAY|Gateway del blocco IPv6.|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz|

### Step 1: recupera le informazioni relative alla rete

Per prima cosa, è necessario avere a disposizione l’indirizzo IPV6 e il gateway IPv6 assegnati al server. Esistono due modi per ottenere questa informazione:

- [dallo Spazio Cliente OVHcloud](#viacontrolpanel)
- [via API](#viaapi)

#### Dallo Spazio Cliente OVHcloud <a name="viacontrolpanel"></a>

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca su `Bare Metal Cloud`{.action} e seleziona il tuo server nella sezione `Server Privati Virtuali`{.action}.

Nel riquadro `IP` è possibile visualizzare l’indirizzo IP e il gateway IPv6 assegnato al server. Una volta recuperate queste informazioni è possibile passare allo [Step 2: applica la configurazione IPv6](#applyipv6).

![configureipv6](images/configure-ipv6-step1.png){.thumbnail}

#### Tramite le API OVHcloud <a name="viaapi"></a>

Accedi al sito <https://api.ovh.com/console/> e inserisci il tuo identificativo OVHcloud. ed esegui le chiamate API indicate di seguito.

Per ottenere l’indirizzo IPv6 assegnato al VPS:

> [!api]
>
> @api {GET} /vps/{serviceName}/ips
>

Per ottenere il gateway IPv6 assegnato al VPS:

> [!api]
>
> @api {GET} /vps/{serviceName}/ips/{ipAddress}
>

Dopo aver recuperato gli indirizzi, continua allo Step 2: [Applica la configurazione IPv6](#applyipv6).

### Step 2: applicare la configurazione IPv6 <a name="applyipv6"></a>

Una volta che disponi dei dati necessari per la configurazione dell’IPv6, accedi al VPS in SSH. Se hai bisogno di aiuto per questa operazione, consulta la guida [Introduzione a SSH](../../dedicated/introduzione-ssh/){.external}.

La configurazione IPv6 può essere applicata in diversi modi. Prosegui nella lettura di questa guida in base alle tue esigenze:

- [Applicazione non persistente](#nonpersistent)
- [Applicazione persistente su Debian e derivati (Ubuntu, Crunchbang, SteamOS...)](#persistentdebian)
- [Applicazione persistente su Red Hat e derivati (CentOS, ClearOS...)](#persistentredhat)
- [Applicazione persistente su Windows Server](#persistentwindows)

#### Applicazione non persistente <a name="nonpersistent"></a>

> [!warning]
>
> Lo modalità non persistente implica che la configurazione applicata non verrà mantenuta dopo il riavvio del server. 
> 

Una volta effettuato l’accesso al VPS in SSH, esegui questi comandi ricordandoti di personalizzare:

- i valori generici (*YOUR_IPV6*,*IPV6_PREFIX* e *IPV6_GATEWAY*) con i dati recuperati precedentemente
- l’interfaccia di rete, se quella utilizzata non è **eth0**

```bash
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

#### Applicazione persistente su Debian e derivati (Ubuntu, Crunchbang, SteamOS...) <a name="persistentdebian"></a>

> [!warning]
>
> Prima di modificare un file di configurazione, crea sempre un backup dell'originale in caso di problemi.
>

Esistono due metodi per configurare la tua rete in base al sistema operativo installato sul tuo server:

- **per Debian 11 e inferiore, Ubuntu 16.04 e inferiore**: utilizza il [metodo basato sul file *interfaces*](#interfaces)

- **per Ubuntu 17.04 e versioni successive**: utilizza il [metodo basato sulla funzione *Netplan*](#netplan).

In alcuni casi, il metodo da utilizzare potrebbe non essere quello indicato sopra. Verifica il metodo attivo nel tuo caso e, per verificarlo, accedi al tuo sistema.  Se necessario, consulta il sito <https://netplan.io/> per maggiori informazioni.

> [!primary]
>
> Presta particolare attenzione, i nomi esatti dei file possono variare.
>

##### Configurazione dei file *interfaces* <a name="interfaces"></a>

Il metodo più frequente consigliato è creare un file di configurazione nella directory `/etc/network/interfaces.d/`:

```bash
nano /etc/network/interfaces.d/51-cloud-init-ipv6
```

In questo modo è possibile separare la configurazione IPv6 e ripristinare facilmente le modifiche in caso di errore.

Aggiungi queste righe al file. Sostituisci i valori generici (cioè *YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*) e l'interfaccia di rete (se il tuo server non utilizza **eth0**) con i valori personalizzati.

```
auto eth0
iface eth0 inet6 static
mtu 1500
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Riavvia il tuo servizio di rete con uno dei comandi seguenti:

```bash
service networking restart
```

```bash
systemctl restart networking
```

Puoi anche aggiungere la configurazione di cui sopra a uno dei file seguenti (con i privilegi *sudo*), a seconda della generazione del sistema operativo installato sul server:

- il file `/etc/network/interfaces`
- il file `/etc/network/interfaces.d/50-cloud-init.cfg`

Ti consigliamo di salvare il file di configurazione più adatto. Ad esempio, esegui questo comando:

```bash
cp /etc/network/interfaces /etc/network/interfaces.back
```

Puoi annullare le modifiche utilizzando questi comandi:

```bash
rm -f /etc/network/interfaces
cp /etc/network/interfaces /etc/network/interfaces
```

##### Configurazione tramite Netplan <a name="netplan"></a>

I file di configurazione di rete si trovano nella directory `/etc/netplan/`. Ti consigliamo di iniziare effettuando un backup del file di configurazione più adatto. In questo caso, copia il file `50-cloud-init.yaml` con questi comandi:

```bash
cd /etc/netplan/
mkdir backup
cp 50-cloud-init.yaml backup/50-cloud-init.yaml
```

Puoi annullare le modifiche utilizzando questi comandi:

```bash
rm -f /etc/netplan/50-cloud-init.yaml
cp /etc/netplan/backup/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml
```

Prima di modificarlo, crea una copia del file di configurazione IPv6:

```bash
cd /etc/netplan
cp 50-cloud-init.yaml 51-cloud-init-ipv6.yaml
```

Modificare il file `51-cloud-init-ipv6.yaml` aggiungendo la configurazione IPv6 del tuo server. Sostituisci i valori generici (cioè *YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*) e l'interfaccia di rete (se il tuo server non utilizza **eth0**) con i valori personalizzati.

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
            gateway6: IPv6_GATEWAY
            routes:
              - to: IPv6_GATEWAY
                scope: link
              - to: ::/0
                via: IPv6_GATEWAY
```

> [!warning]
>
> È importante rispettare l'allineamento di ciascun elemento del file, come indicato nell'esempio di cui sopra. Non utilizzare il tasto di tabulazione per creare la tua spaziatura. E' necessario solo il tasto spazio.
>

Per testare la tua configurazione utilizza questo comando:

```bash
netplan try
```

Se è corretta, applicala utilizzando il seguente comando:

```bash
netplan apply
```

#### Applicazione persistente su Red Hat e suoi derivati (CentOS, ClearOS, ecc...) <a name="persistentredhat"></a>

I file di configurazione di rete si trovano nella directory `/etc/sysconfig/network-scripts/`. Ti consigliamo di iniziare effettuando un backup del file di configurazione più adatto. Ad esempio, copia il file `ifcfg-eth0` con i comandi seguenti. Ricordati di sostituire **eth0** con la tua interfaccia reale, se necessario.

```bash
cd /etc/sysconfig/network-scripts/
mkdir backup
cp ifcfg-eth0 backup/ifcfg-eth0
```

Puoi annullare le modifiche utilizzando questi comandi:

```bash
rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

Modifica il file `ifcfg-eth0` aggiungendo la configurazione IPv6 del tuo server. Sostituisci i valori generici (*YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*) con i valori personalizzati.

```
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

**Su CentOS 7, è necessario creare un file di routing in aggiunta agli step seguenti:**

- Crea un file (con i privilegi *sudo*) che indica gli indirizzi IPv6 predefiniti:

```bash
# touch /etc/sysconfig/network-scripts/route6-eth0
```

- Modifica il file e aggiungi le righe qui sotto. Sostituisci i valori generici (*IPV6_GATEWAY* e **eth0**, se necessario) con i valori personalizzati.

```
IPV6_GATEWAY dev eth0
default via IPV6_GATEWAY
```

Riavvia il servizio di rete per consentire al sistema di applicare la nuova configurazione con uno dei comandi seguenti:

```bash
service networking restart
```

```bash
systemctl restart networking
```


#### Applicazione persistente su Windows Server <a name="persistentwindows"></a>

Di default, IPv6 non è configurato sui server Windows. Per attivarlo, apri il `Pannello di configurazione`{.action} e clicca su `Visualizza lo stato e le operazioni della rete`{.action}, poi su `Modifica le impostazioni della scheda`{.action}.

![configureipv6](images/configure-ipv6-step2.png){.thumbnail}

Clicca su `Ethernet`{.action} per aprire le impostazioni e clicca sul pulsante `Proprietà`{.action} per visualizzare `Proprietà Ethernet`.

Seleziona `Protocol Internet version 6 (TCP/IPv6)`{.action} e clicca sul pulsante `Proprietà`{.action}.

![configureipv6](images/configure-ipv6-step3.png){.thumbnail}

Nella finestra Proprietà IPv6 seleziona `Utilizza questo indirizzo IPv6`. Inserisci gli indirizzi IP recuperati nel primo step.

Puoi anche inserire le risoluzioni DNS IPv6 che preferisci `utilizzando questo` indirizzo server DNS. Ciò non è obbligatorio se i resolver DNS della configurazione IPv4 sono già operativi.

Seleziona la casella `Conferma le impostazioni lasciando` e clicca su `OK`{.action} per confermare le modifiche. Se il gateway specificato non si trova sulla stessa sottorete IPv6 (ad esempio, /128 e /64), può essere visualizzato un messaggio di errore. Puoi ignorare questo messaggio e passare allo step successivo.

![configureipv6](images/configure-ipv6-step4.png){.thumbnail}

### Step 3: Verifica la configurazione e prova la connessione.

A seconda del sistema operativo, è possibile verificare la funzionalità tramite diversi comandi.

- **Per un impianto GNU/Linux**, ecco due esempi per l'interfaccia **eth0** (da adattare se necessario):

```bash
ip -6 addr show eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qlen 1000
    inet6 2001:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz/128 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::f816:3eff:fec0:c336/64 scope link
       valid_lft forever preferred_lft forever
```

```bash
ifconfig eth0
eth0      Link encap:Ethernet  HWaddr ab:cd:ef:gf:ij:kl
          inet addr:aa.bb.cc.dd  Bcast:aa.bb.cc.ee  Mask:255.255.255.255
          inet6 addr: 2001:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz/128 Scope:Global
          inet6 addr: fe80::f816:3eff:fec0:c336/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          [...]
```

Per verificare la connessione, utilizza il seguente comando:

```bash
ping6 proof.ovh.net
```

- **Per un sistema Windows**, utilizza il comando:

```
ipconfig

Windows IP Configuration

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : openstacklocal
   IPv6 Address. . . . . . . . . . . : 2001:xxxx:xxxx:xxxx::zzzz
   Link-local IPv6 Address . . . . . : fe80::d928:7a00:5ba6:951b%3
   IPv4 Address. . . . . . . . . . . : 51.xxx.xxx.xxx
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 2001:xxxx:xxxx:xxxx::y
                                       51.xxx.xxx.y
```

Per verificare la connessione, utilizza il seguente comando:

```
ping -6 proof.ovh.net
```

Puoi anche testare la connessione a un altro server remoto. Per il corretto funzionamento dell'operazione è tuttavia necessario che l'IPv6 sia attivo sul server remoto.

> [!primary]
>
> Se, nonostante queste modifiche, IPv6 non sembra funzionare sul tuo server, è possibile (in rari casi) che sia necessario apportare modifiche aggiuntive. In questo caso, effettua le seguenti operazioni:
>
> - In base al sistema operativo, prova a sostituire il prefisso (o *netmask*) del tuo indirizzo IP con /128 e /64. Includerà il gateway IPv6 nella tua sottorete.
>
> - Oltre a riavviare il servizio di rete, potrebbe essere necessario un riavvio del server per completare l'elaborazione della configurazione IPv6.
> 
> - In Windows, verifica che il firewall autorizzi le richieste ICMP per IPv6.

### Step 4: Disattiva la gestione della rete Cloud-init (in opzione)

> [!primary]
>
> Questo step non si è valido per i sistemi Windows.
>

Cloud-init è un pacchetto installato di default sulle istanze VPS. È un framework che permette di eseguire gli script indicati al momento della creazione o del riavvio del server. Il meccanismo implementato consente all’infrastruttura OpenStack di inserire script nell’ambiente cloud-init e quindi nella configurazione della macchina.

In base al sistema operativo, cloud-init sarà in grado di gestire la rete, l’hostname, il file <b>resolv.conf</b> e il partizionamento automatico dell’hard disk in caso di upgrade.

Nelle distribuzioni più recenti (come CentOS, Debian 9, Ubuntu 16.x e versioni successive), la configurazione di default di cloud.init può a volte reinizializzare automaticamente la configurazione di rete all'avvio del server.

In casi specifici di utilizzo, ti consigliamo di evitare la reinizializzazione disattivando la gestione automatica della rete in Cloud-Init. tramite un comando che permetterà di creare un file `/etc/cloud/cloud.cfg.d/98-disable-network-config.cfg` contenente il valore `network: {config: disabled}`:

```bash
echo "network: {config: disabled}" > /etc/cloud/cloud.cfg.d/98-disable-network-config.cfg
```

> [!warning]
>
> Riavvia il tuo server affinché l'operazione sia presa in carico. 
>

Per ripristinare la gestione automatica del server tramite cloud-Init, rimuovi il file creato o spostalo in un’altra cartella.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.