---
title: 'Configurare un indirizzo IPv6 su un VPS'
slug: configurare-ipv6
excerpt: 'Come utilizzare un IPv6 sul tuo server VPS OVHcloud'
section: 'Rete e IP'
order: 1
---

**Ultimo aggiornamento: 12/03/2020**

## Obiettivo

L’IPv6 è la versione più recente dell’*Internet Protocol* (IP). Tutti i VPS OVHcloud vengono consegnati con un indirizzo IPv4 e un indirizzo IPv6. Di default è configurato soltanto l’IPv4 ma, per diversi motivi, potrebbe essere necessario utilizzare anche l’IPv6.

**Questa guida ti mostra come abilitare l’IPv6 sul tuo server privato virtuale OVHcloud.**

> [!warning]
>
> OVHcloud mette a disposizione i server, ma non è autorizzata ad accedervi e non si occupa quindi della loro amministrazione. Garantire quotidianamente la gestione software e la sicurezza di queste macchine è quindi responsabilità dell’utente. Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi relativamente ad amministrazione e sicurezza, ti consigliamo di contattare un fornitore specializzato. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
> 

## Prerequisiti

- Disporre di un [VPS OVHcloud](https://www.ovhcloud.com/fr/vps/){.external}
- Essere connesso al VPS in SSH (accesso root)
- Possedere conoscenze base di rete
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}

## Procedura

Configurare un IPv6 su un VPS è un’operazione che prevede diversi step, durante i quali potrebbe essere necessario eseguire comandi specifici o personalizzare i parametri del server. 

Prima di iniziare ti consigliamo di consultare la tabella qui sotto, che contiene i termini utilizzati in questa guida e la loro descrizione: 

|Termine|Descrizione|Esempio|
|---|---|---|
|YOUR_IPV6|Indirizzo IPv6 assegnato al servizio|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:yyyy|
|IPv6_PREFIX|Prefisso o *netmask* del blocco IPv6 (in genere, 128)|2001:xxxx:xxxx:xxxx::/128|
|IPv6_GATEWAY|Gateway del blocco IPv6|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz|

### Step 1: recupera le informazioni relative alla rete

Per prima cosa, è necessario avere a disposizione l’indirizzo IPv6 e il gateway IPv6 assegnati al server. Esistono due modi per ottenere questa informazione:

- [dallo Spazio Cliente OVHcloud](https://docs.ovh.com/it/vps/configurare-ipv6/#dallo-spazio-cliente-ovhcloud)
- [via API](https://docs.ovh.com/it/vps/configurare-ipv6/#via-api)

#### Dallo Spazio Cliente OVHcloud

Accedi all’area `Cloud`{.action} dello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} e seleziona il tuo VPS nella sezione`Server`{.action} della colonna a sinistra. Assicurati di essere posizionato nella scheda `Home`{.action}: nel riquadro `IP` è possibile visualizzare l’indirizzo IP e il gateway IPv6 assegnato al server. Una volta recuperate queste informazioni è possibile passare allo [Step 2: applica la configurazione IPv6](https://docs.ovh.com/it/vps/configurare-ipv6/#step-2-applica-la-configurazione-ipv6_1){.external}.

![configureipv6](images/configure-ipv6-step1.png){.thumbnail}

#### Via API

Accedi alla pagina <https://api.ovh.com/console/> con l’identificativo cliente OVHcloud e relativa password ed esegui le chiamate API indicate di seguito.

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

Una volta recuperate queste informazioni è possibile passare allo [Step 2: applica la configurazione IPv6](https://docs.ovh.com/it/vps/configurare-ipv6/#step-2-applica-la-configurazione-ipv6_1){.external}.

### Step 2: applica la configurazione IPv6

Una volta che disponi dei dati necessari per la configurazione dell’IPv6, accedi al VPS in SSH. Se hai bisogno di aiuto per questa operazione, consulta la guida [Introduzione a SSH](https://docs.ovh.com/it/dedicated/introduzione-ssh/){.external}.

La configurazione IPv6 può essere applicata in diversi modi. Prosegui nella lettura di questa guida in base alle tue esigenze:

- [Applicazione non persistente](https://docs.ovh.com/it/vps/configurare-ipv6/#applicazione-non-persistente)
- [Applicazione persistente su Debian e derivati (Ubuntu, Crunchbang, SteamOS...)](https://docs.ovh.com/it/vps/configurare-ipv6/#applicazione-persistente-su-debian-e-derivati-ubuntu-crunchbang-steamos)
- [Applicazione persistente su Red Hat e derivati (CentOS, ClearOS...)](https://docs.ovh.com/it/vps/configurare-ipv6/#applicazione-persistente-su-redhat-e-derivati-centos-clearos_1)
- [Applicazione persistente su Windows Server](https://docs.ovh.com/it/vps/configurare-ipv6/#applicazione-persistente-su-windows-server)

#### Applicazione non persistente

> [!warning]
>
> Lo modalità non persistente implica che la configurazione applicata non verrà mantenuta dopo il riavvio del server. 
> 

Una volta effettuato l’accesso al VPS in SSH, esegui questi comandi ricordandoti di personalizzare:

- i valori generici (*YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*) con i dati recuperati precedentemente
- l’interfaccia di rete, se quella utilizzata non è **eth0**

```bash
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

#### Applicazione persistente su Debian e derivati (Ubuntu, Crunchbang, SteamOS...)

In base al sistema operativo installato sul server, la configurazione di rete può essere effettuata in due diversi modi:

- **per Debian 8 e Ubuntu 16.04 (e versioni inferiori)**, utilizza il metodo basato sul file <b>interfaces</b>

- **per Debian 9 e Ubuntu 17.04 (e versioni superiori)**, utilizza il metodo basato sulla funzionalità <b>Netplan</b>

In alcuni casi (in particolare con Debian 9), è possibile che il metodo descritto in questa guida non sia applicabile.  Per verificare la procedura disponibile, controlla la configurazione attiva sul tuo sistema. Se necessario, consulta la pagina <https://netplan.io/> per ulteriori informazioni.

> [!warning]
>
> Prima di apportare qualsiasi modifica al file di configurazione, ricordati di effettuarne un backup: in caso di errore, potrai facilmente annullare l’operazione.
> 

A questo punto prosegui nella lettura di questa guida in base all’operazione che vuoi effettuare:

- [Configurazione del file “interfaces”](https://docs.ovh.com/it/vps/configurare-ipv6/#configurazione-del-file-interfaces)
- [Configurazione tramite la funzionalità Netplan](https://docs.ovh.com/it/vps/configurare-ipv6/#configurazione-tramite-la-funzionalita-netplan)

#####  Configurazione del file “interfaces”

In base alla generazione del sistema operativo installato sul server, sarà necessario modificare con i privilegi *sudo* uno di questi file:

- `/etc/network/interfaces`
- `/etc/network/interfaces.d/50-cloud-int.cfg`

Prima di iniziare ti consigliamo di effettuare un backup dei file di configurazione eseguendo, ad esempio, questo comando:

```bash
cp /etc/network/interfaces /etc/network/interfaces.back
```

Per annullare l’operazione e ripristinare lo stato precedente, esegui i comandi:

```bash
rm -f /etc/network/interfaces
cp /etc/network/interfaces /etc/network/interfaces
```

A questo punto tutto è pronto. Per prima cosa aggiungi le righe qui sotto al file di configurazione. Ricordati di sostituire i valori generici (*YOUR_IPV6*, *IPV6_PREFIX* e*IPV6_GATEWAY*) con le informazioni corrispondenti e l’interfaccia di rete se quella utilizzata non è **eth0**.

```
iface eth0 inet6 static
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Riavvia il servizio di rete con il comando:

```bash
service networking restart
```

#####  Configurazione tramite la funzionalità Netplan

I file di configurazione di rete si trovano nella directory `/etc/netplan/`. Ti ricordiamo che, prima di iniziare, è preferibile effettuarne un backup. In questo caso copia il file `50-cloud-init.yaml` con i comandi:

```bash
cd /etc/netplan/
mkdir backup
cp 50-cloud-init.yaml backup/50-cloud-init.yaml
```

Per annullare l’operazione e ripristinare lo stato precedente, esegui i comandi:

```bash
rm -f /etc/netplan/50-cloud-init.yaml
cp /etc/netplan/backup/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml
```

A questo punto tutto è pronto. Per prima cosa crea una copia del file IPv4: 

```bash
cd /etc/netplan
cp 50-cloud-init.yaml 51-cloud-init-ipv6.yaml
```

Poi modifica il file `51-cloud-init-ipv6.yaml` in modo che contenga la configurazione IPv6 del tuo server. Ricordati di sostituire i valori generici (*YOUR_IPV6*, *IPV6_PREFIX* e*IPV6_GATEWAY*) con le informazioni corrispondenti e l’interfaccia di rete se quella utilizzata non è **eth0**.

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - "YOUR_IPV6/IPv6_PREFIX"
            gateway6: "IPv6_GATEWAY"
```

> [!warning]
>
> Al momento della scrittura del file è fondamentale rispettare l’allineamento degli argomenti come nell’esempio. Non utilizzare il tasto TAB per aggiungere spazi, ma la barra spaziatrice.
>

Verifica la configurazione con il comando:

```bash
netplan try
```

Se è corretta, applicala utilizzando il comando:

```bash
netplan apply
```

#### Applicazione persistente su Red Hat e derivati (CentOS, ClearOS...)

I file di configurazione di rete si trovano nella directory `/etc/sysconfig/network-scripts/`. Ti ricordiamo che, prima di iniziare, è preferibile effettuarne un backup. In questo caso, copia il file `ifcfg-eth0` con questi comandi, personalizzando l’interfaccia di rete se quella utilizzata non è **eth0**:

```bash
cd /etc/sysconfig/network-scripts/
mkdir backup
cp ifcfg-eth0 backup/ifcfg-eth0
```

Per annullare l’operazione e ripristinare lo stato precedente, esegui i comandi:

```bash
rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

A questo punto tutto è pronto. Per prima cosa aggiungi queste righe al file di configurazione, sostituendo i valori generici (*YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*) con le informazioni corrispondenti:

```
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Utilizza i privilegi `sudo` per creare un file che contenga le rotte predefinite:

```bash
# touch /etc/sysconfig/network-scripts/route6-eth0
```

Personalizzalo inserendo il valore corrispondente a *IPV6_GATEWAY* e, se necessario, all’interfaccia **eth0**. 

```
IPV6_GATEWAY dev eth0
default via IPV6_GATEWAY
```

Riavvia il servizio di rete per consentire al sistema di applicare la nuova configurazione:

```bash
service network restart
```

#### Applicazione persistente su Windows Server

Di default, su Windows Server l’IPv6 non è configurato. Per attivarlo apri il `Pannello di controllo`, clicca su `Visualizza attività e stato della rete`{.action} in corrispondenza della voce **Rete e Internet** e poi su `Modifica impostazioni scheda`{.action}.

![configureipv6](images/configure-ipv6-step2.png){.thumbnail}

Apri lo stato della connessione `Ethernet` e clicca su `Proprietà`{.action}. Nella nuova finestra seleziona `Protocollo Internet versione 6 (TCP/IPv6)` e clicca sul pulsante `Proprietà`{.action}.

![configureipv6](images/configure-ipv6-step3.png){.thumbnail}

Nella nuova finestra seleziona l’opzione `Utilizza l’indirizzo IPv6 seguente:`{.action} e completa i campi sottostanti con le informazioni recuperate nello Step 1 di questa guida. 

Nei campi disponibili in corrispondenza della voce `Utilizza i seguenti indirizzi server DNS`{.action} è possibile inserire i _resolver DNS IPv6_ che intendi utilizzare. Questa operazione è facoltativa nel caso in cui i _resolver_ indicati nella configurazione IPv4 svolgano già questa funzione.

Una volta completate le informazioni, seleziona la casella `Convalida impostazioni all’uscita` e clicca su `OK`{.action} per applicare le modifiche. Se il gateway inserito non si trova sulla stessa sottorete IPv6 (ad esempio, /128 e /64), potrebbe comparire un messaggio di errore. In tal caso dovrebbe essere possibile ignorare il messaggio e proseguire allo step successivo.

![configureipv6](images/configure-ipv6-step4.png){.thumbnail}

### Step 3: verifica la configurazione e testa la connessione

In base al sistema operativo installato, per verificare la correttezza della configurazione sono disponibili diversi comandi. 

- **Nei sistemi Linux** è possibile applicare uno di questi due esempi, ricordando di personalizzare il valore dell’interfaccia di rete se quella utilizzata non è **eth0**.

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

Per verificare la connessione, esegui il comando: 

```bash
ping6 proof.ovh.net
```

- **Nei sistemi Windows** utilizza questi comandi:

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

Per verificare la connessione, esegui il comando: 

```
ping -6 proof.ovh.net
```

La connessione può essere testata anche verso un altro server remoto ma, affinché l’operazione vada a buon fine, è necessario che sulla macchina sia attivo l’IPv6. 

> [!primary]
>
> Se l’IPv6 non dovesse funzionare sul server, è possibile che sia necessario effettuare ulteriori azioni, ad esempio:
>
> - in base al sistema operativo, prova a modificare il prefisso (o *netmask*) del tuo IP da /128 a /64 per includere il gateway IPv6 nella tua sottorete
>
> - oltre al riavvio del servizio di rete, per l’applicazione della configurazione IPv6 potrebbe essere necessario anche un reboot del server
>

### Step 4: disattiva la gestione della rete tramite cloud-init

> [!primary]
>
> Questo step non si è valido per i sistemi Windows.
>

Cloud-init è un pacchetto installato di default sulle istanze VPS. È un framework che permette di eseguire gli script indicati al momento della creazione o del riavvio del server. Il meccanismo implementato consente all’infrastruttura OpenStack di inserire script nell’ambiente cloud-init e quindi nella configurazione della macchina.

In base al sistema operativo, cloud-init sarà in grado di gestire la rete, l’hostname, il file <b>resolv.conf</b> e il partizionamento automatico dell’hard disk in caso di upgrade.

Nelle distribuzioni più recenti (come CentOS, Debian 9, Ubuntu 16.x e versioni superiori), di default cloud.init reinizializzerà automaticamente i parametri di rete al riavvio del server.

Per mantenere il controllo su questa configurazione è necessario disabilitare la gestione automatica della rete per **cloud.init** tramite un comando che permetterà di creare un file `/etc/cloud/cloud.cfg.d/98-disable-network-config.cf` contenente il valore `network: {config: disabled}`:

```bash
echo "network: {config: disabled}" > /etc/cloud/cloud.cfg.d/98-disable-network-config.cfg
```

Riavvia il server per applicare le modifiche. 

Per ripristinare la gestione automatica del server tramite cloud-Init, rimuovi il file creato o spostalo in un’altra cartella.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.