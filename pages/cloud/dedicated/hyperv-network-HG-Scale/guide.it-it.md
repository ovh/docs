---
title: Configurare la rete su Windows Server con Hyper-V sulle gamme High Grade & SCALE
slug: hyperv-network-hg-scale
excerpt: Come configurare la rete su Windows Server con Hyper-V sulle gamme High Grade & SCALE
section: Utilizzo avanzato
order: 5
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 15/11/2021**

## Obiettivo

Sulle gamme High Grade & SCALE, il funzionamento degli Additional IP in modalità *bridged* (tramite MAC Virtuali) non è possibile. È quindi necessario configurare gli Additional IP in modalità routing o tramite la vRack.

**Questa guida ti mostra come configurare la rete con Windows Server con Hyper-V.**

## Prerequisiti

* Disporre di un [server dedicato OVHcloud](https://www.ovhcloud.com/it/bare-metal/)
* Disporre di un indirizzo [Additional IP](https://www.ovhcloud.com/it/bare-metal/ip/)
* Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

> [!warning]
>
> Nello Spazio Cliente OVHcloud non è necessario applicare MAC virtuale sugli Additional IP.
>

## Procedura

> [!primary]
>
> Su queste gamme di server, ci sono 4 schede di rete. Le prime due per il pubblico, le ultime due per il privato. Per usufruire di tutta la banda passante, è necessario creare degli aggregati.
>

### Additional IP in modalità round sulle interfacce di rete pubbliche

#### Spiegazioni

Devi:

- configurer NIC Teaming;
- installare i ruoli Hyper-V e RRAS;
- configurare RRAS per agire come router.

#### Identificazione delle interfacce e configurazione di NIC Teaming

Apri Windows Powershell ed esegui il comando `Get-NetAdapter`:

```powershell
PS C:\Windows\system32> Get-NetAdapter

Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed
----                      --------------------                    ------- ------       ----------             ---------
Ethernet                  Mellanox ConnectX-5 Adapter                   9 Up           04-3F-72-D5-C3-38        25 Gbps
Ethernet 4                Mellanox ConnectX-5 Adapter #4                7 Up           0C-42-A1-DD-37-B3        25 Gbps
Ethernet 2                Mellanox ConnectX-5 Adapter #2                6 Up           04-3F-72-D5-C3-39        25 Gbps
Ethernet 3                Mellanox ConnectX-5 Adapter #3                4 Up           0C-42-A1-DD-37-B2        25 Gbps
```

In questo esempio:

- le interfacce pubbliche sono `Ethernet 3` e `Ethernet 4`;
- le interfacce private sono `Ethernet` ed `Ethernet 2`.

> [!primary]
>
> Verifica che la tua configurazione sia simile. Le informazioni relative ai MAC e alle interfacce pubbliche o private sono disponibili nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) o tramite l'API OVHcloud.
>

Torna al Server Manager, vai su `Local Server`{.action} e clicca su `Disabled`{.action} accanto a "NIC Teaming".

![NIC Teaming](images/nic_teaming_1.png){.thumbnail}

Clicca con il tasto destro su una delle interfacce pubbliche precedentemente identificate e poi clicca su `Add to New Team`{.action}.

![NIC Teaming](images/nic_teaming_2.png){.thumbnail}

Assegna un nome al tuo *teaming* e aggiungi la seconda interfaccia al *teaming*. Apri le proprietà aggiuntive, definisci "Teaming Mode" su "LACP" e clicca su `OK`{.action}.

#### Configura un IP statico

Per evitare la perdita di connessione durante il riavvio, è necessario configurare l'IP in modo statico sul *teaming*.

Premi su `Windows Key` + `R` per aprire una finestra Run. Inserisci `ncpa.cpl` e clicca su `OK`{.action}. Questa operazione aprirà la finestra "Connessioni di rete".

![Statistiche IP](images/static_ip_1.png){.thumbnail}

Fai click con il tasto destro sul *teaming* che hai creato e clicca su `Properties`{.action}.

![Statistiche IP](images/static_ip_2.png){.thumbnail}

Clicca su `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![Statistiche IP](images/static_ip_3.png){.thumbnail}

Seleziona `Use the following IP address and insert your IP address`.

La subnet mask e il gateway predefinito sono: 255.255.255.255 e 100.64.0.1 (come indicato di seguito).

Per i server DNS, puoi scegliere la tua. Nel nostro esempio, utilizziamo 213.186.33.99 e 8.8.8.8.

Una volta inseriti gli indirizzi, clicca su `OK`{.action} per chiudere la finestra e poi di nuovo su `OK`{.action} per chiudere la finestra delle proprietà dell'adattatore.

![Statistiche IP](images/static_ip_4.png){.thumbnail}

#### Aggiungi i ruoli Hyper-V e RRAS

Nel Server Manager, seleziona la `Dashboard`{.action} e clicca su `Add roles and features`{.action}.

![Install Roles](images/install_roles_1.png){.thumbnail}

Segui l'assistente fino alla sezione "Server Roles". Seleziona `Hyper-v` e `Remote Access`.

![Install Roles](images/install_roles_2.png){.thumbnail}

Continua fino alla sezione "Virtual Switches" di "Hyper-V" e seleziona il tuo *NIC teaming* creato precedentemente.

![Install Roles](images/install_roles_3.png){.thumbnail}

Continua fino alla sezione "Role Services" di "Remote Access" e seleziona `Routing`.

![Install Roles](images/install_roles_4.png){.thumbnail}

Nella sezione "Confirmation" seleziona `Restart the destination server automatically if required` e clicca su `Install`{.action}.

#### Configurer Routing and Remote Access

Apri la nuova applicazione chiamata "Routing and Remote Access", clicca con il tasto destro sul tuo server e clicca su `Configura and Enable Routing and Remote Access`{.action}.

![Configura RRAS](images/configure_rras_1.png){.thumbnail}

Scegli `Custom configurazione` e clicca su `Next`{.action}.

![Configura RRAS](images/configure_rras_2.png){.thumbnail}

Seleziona `LAN Routing` e clicca su `Next`{.action}.

![Configura RRAS](images/configure_rras_3.png){.thumbnail}

Nella nuova finestra, clicca su `Finish`{.action} e poi su `Start Service`{.action}.

![Configura RRAS](images/configure_rras_4.png){.thumbnail}

#### Definisci gli indirizzi IP statici principali e aggiuntivi sull'interfaccia Hyper-V

A questo punto, è necessario spostare la configurazione IP verso l'interfaccia Hyper-V.

Premi su `Windows Key` + `R` per aprire una finestra Run. Inserisci `ncpa.cpl` e clicca su `OK`{.action}. Questa operazione aprirà la finestra "Connessioni di rete".

![Statistiche IP](images/static_ip_1.png){.thumbnail}

Clicca con il tasto destro sulla tua scheda vEthernet e clicca su `Properties`{.action}.

![Statistiche IP](images/static_ip_5.png){.thumbnail}

Clicca su `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![Statistiche IP](images/static_ip_3.png){.thumbnail}

Seleziona `Use the following IP address` e inserisci il tuo indirizzo IP.

La subnet mask e il gateway predefinito sono: 255.255.255.255 e 100.64.0.1 (come indicato di seguito).

Per i server DNS, puoi scegliere la tua. Nel nostro esempio, utilizziamo 213.186.33.99 e 8.8.8.8.

![Statistiche IP](images/static_ip_4.png){.thumbnail}

Clicca sul pulsante `Advanced...` e, nella nuova finestra, clicca su `Add...`{.action} sotto gli indirizzi IP.

Aggiungi l'indirizzo IP e la subnet mask corrispondente al tuo Additional IP e clicca su `Add`{.action}

![Statistiche IP](images/static_ip_6.png){.thumbnail}

Una volta inseriti tutti gli indirizzi, clicca su `OK`{.action} per chiudere la finestra avanzata, di nuovo su `OK`{.action} per chiudere i parametri TCP/IPv4, poi un'ultima volta su `OK`{.action} per chiudere la finestra delle proprietà della scheda.

> [!warning]
>
> Questa fase può provocare la perdita di connessione. Se questo si verifica, accedi utilizzando l'[IPMI](https://docs.ovh.com/it/dedicated/utilizzo-ipmi-server-dedicati/) e modifica di nuovo la configurazione. Il tuo gateway di default è tornato vuoto. Aggiungi il gateway 100.64.0.1.
>

#### Aggiungi una rotta statica

Apri un prompt dei comandi come amministratore ed esegui il comando `stradale print`:

```console
C:\Users\admin>route print interface
===========================================================================
Interface List
 22...0c 42 a1 dd 37 b2 ......Hyper-V Virtual Ethernet Adapter
 10...04 3f 72 d5 c3 38 ......Mellanox ConnectX-5 Adapter
  7...04 3f 72 d5 c3 39 ......Mellanox ConnectX-5 Adapter #2
  1...........................Software Loopback Interface 1
===========================================================================
```

Nel nostro esempio, potete vedere che la nostra scheda Hyper-V ha l'ID 22.<br>
Annota la tua scheda Hyper-V ed esegui il comando `route add -p 192.xxx.xxx.16 mask 255.255.255.255 0.0.0.0 si 22` (sostituisci l'IP e l'ID dell'interfaccia con quello che hai ricevuto).<br>
Dovreste ottenere il risultato "OK! ".

```console
PS C:\Users\admin> route add -p 192.xxx.xxx.16 mask 255.255.255.255 0.0.0.0 if 22
 OK!
```

Una volta create e configurate, le VM devono disporre di un accesso a Internet.

#### Esempio di configurazione di una VM cliente su Ubuntu

Contenuto del file `/etc/netplan/ip.yaml`:

```bash
network:
        version: 2
        ethernets:
                eth0:
                        dhcp4: no
                        addresses:
                                - 192.xxx.xxx.16
                        nameservers:
                                addresses:
                                        - 213.186.33.99
                                        - 8.8.8.8
                        routes:
                                - to: 0.0.0.0/0
                                  via: 100.64.0.1
                                  on-link: true
```

### Additional IP via vRack

#### Prerequisiti

- Disporre di un blocco pubblico di indirizzi IP nel proprio account, con almeno quattro indirizzi
- Aver selezionato un intervallo di indirizzi IP privati
- Disporre di un [server compatibile con la vRack](https://www.ovhcloud.com/it/bare-metal/){.external}
- Aver attivato un servizio [vRack](https://www.ovh.it/soluzioni/vrack/){.external}
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

#### Spiegazioni

Vi serve:

* creare un aggregato;
* creare un bridge collegato all’aggregato;

#### Identificazione delle interfacce e configurazione di NIC Teaming

Apri Windows Powershell ed esegui il comando `Get-NetAdapter`

```powershell
PS C:\Windows\system32> Get-NetAdapter

Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed
----                      --------------------                    ------- ------       ----------             ---------
Ethernet                  Mellanox ConnectX-5 Adapter                   9 Up           04-3F-72-D5-C3-38        25 Gbps
Ethernet 4                Mellanox ConnectX-5 Adapter #4                7 Up           0C-42-A1-DD-37-B3        25 Gbps
Ethernet 2                Mellanox ConnectX-5 Adapter #2                6 Up           04-3F-72-D5-C3-39        25 Gbps
Ethernet 3                Mellanox ConnectX-5 Adapter #3                4 Up           0C-42-A1-DD-37-B2        25 Gbps
```
In questo esempio:

- le interfacce pubbliche sono `Ethernet 3` and `Ethernet 4`;
- le interfacce private sono `Ethernet` ed `Ethernet 2`.

> [!primary]
>
> Verifica che la tua configurazione sia simile. Le informazioni relative ai MAC e alle interfacce pubbliche o private sono disponibili nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) o tramite l'API OVHcloud.
>

Torna al Server Manager, vai su `Local Server`{.action} e clicca su `Disabled`{.action} accanto a "NIC Teaming".

![NIC Teaming](images/nic_teaming_1.png){.thumbnail}

Clicca con il tasto destro su una delle interfacce private precedentemente identificate e poi clicca su `Add to New Team`{.action}.

![NIC Teaming](images/nic_teaming_2.png){.thumbnail}

Assegna un nome al tuo *teaming* e aggiungi la seconda interfaccia al *teaming*. Apri le proprietà aggiuntive, definisci "Teaming Mode" su "LACP" e clicca su `OK`{.action}.

#### Crea l'interruttore virtuale in Hyper-V

Per creare uno switch virtuale che colleghi le nostre VM al *teaming* che abbiamo creato.

Per prima cosa apri il Gestionale Hyper-V e clicca su `Virtual Switch Manager`{.action}.

![Create v-switch](images/create_vswitch_1.png){.thumbnail}

Assicurati di aver selezionato "External" e clicca su `Create Virtual Switch`{.action}.

![Create v-switch](images/create_vswitch_2.png){.thumbnail}

Assegna un nome al tuo commutatore, scegli il tuo nuovo adattatore di *teaming*, clicca su `Apply`{.action} e poi su `OK`{.action}.

![Create v-switch](images/create_vswitch_3.png){.thumbnail}

Sei pronto a creare la tua VM e configurare la rete per questa.

#### Configura un indirizzo IP utilizzabile

Nel caso della vRack, il primo, il penultimo e l'ultimo indirizzo di un determinato blocco IP sono sempre riservati rispettivamente all'indirizzo di rete, al gateway di rete e al *broadcast* di rete. Questo significa che il primo indirizzo utilizzabile è il secondo indirizzo del blocco, come indicato di seguito:

```sh
46.105.135.96   # Riservato : indirizzo di rete
46.105.135.97   # Primo IP utilizzabile
46.105.135.98
46.105.135.99
46.105.135.100
46.105.135.101
46.105.135.102
46.105.135.103
46.105.135.104
46.105.135.105
46.105.135.106
46.105.135.107
46.105.135.108
46.105.135.109   # Ultimo IP utilizzabile
46.105.135.110   # Riservato : gateway di rete
46.105.135.111   # Riservato : broadcast di rete
```

Per configurare il primo indirizzo IP utilizzabile, è necessario modificare il file di configurazione di rete come indicato qui di seguito: In questo esempio, utilizziamo la <i>subnet mask </i>**255.255.255.240**.

> [!primary]
>
> La <i>subnet mask</i> utilizzata in questo esempio è adatta al nostro blocco IP, ma può variare in base alla dimensione del blocco. Nel momento in cui acquisti un blocco IP, ricevi un’email con le indicazioni riguardo alla <i>subnet mask</i> da utilizzare.
>

#### Esempio di configurazione VM cliente Ubuntu

Contenuto del file `/etc/netplan/vrack.yaml`:

```bash
network:
        version: 2
        ethernets:
                eth0:
                        dhcp4: no
                        addresses:
                                - 46.105.135.97/28
                        nameservers:
                                addresses:
                                        - 213.186.33.99
                                        - 8.8.8.8
                        routes:
                                - to: 0.0.0.0/0
                                  via: 46.105.135.110
                                  on-link: true
```

## Per saperne di più
  
Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.