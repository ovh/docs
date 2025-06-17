---
title: 'Rendere sicura la tua infrastruttura OVHcloud con Stormshield Network Security'
excerpt: 'Scopri come rendere sicura la tua infrastruttura OVHcloud con Stormshield Network Security implementato su Public Cloud'
updated: 2025-05-29
---

## Obiettivo

Nel panorama digitale in costante evoluzione, la sicurezza dell'infrastruttura Cloud è diventata una priorità assoluta per le organizzazioni di tutte le dimensioni. In un momento in cui le aziende dipendono sempre più dalle soluzioni Cloud per le proprie operazioni, garantire la protezione dei dati sensibili e mantenere l'integrità della rete è un compito cruciale. Stormshield SNS EVA (Stormshield Elastic Virtual Appliance) è una soluzione di sicurezza completa progettata per proteggere gli ambienti Cloud da un'ampia gamma di minacce.

Questa guida ti mostra come installare e configurare SNS EVA sul Public Cloud OVHcloud con la vRack e il routing IP pubblico, occupandosi di funzionalità chiave come firewall di rete, VPN IPSec e VPN SSL/TLS. Seguendo questa guida, aumenterai la sicurezza della tua infrastruttura Public Cloud OVHcloud e assicurerai la sicurezza delle tue operazioni.

**Questa guida ti mostra come proteggere la tua infrastruttura OVHcloud con Stormshield Network Security implementato su Public Cloud.**

> [!warning]
> Questa guida ti mostra come utilizzare una o più soluzioni OVHcloud con tool esterni e descrive le azioni da effettuare in un contesto specifico. Potrebbe essere necessario modificare le istruzioni in base alla situazione.
>
> In caso di difficoltà nell’applicazione di queste istruzioni, ti consigliamo di rivolgerti a un [provider specializzato](/links/partner) e/o discutere il problema con la nostra Community. Per maggiori informazioni, consulta la sezione [Per saperne di più](#gofurther) di questo tutorial.
>

## Prerequisiti

- Un [progetto Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) nel tuo account OVHcloud.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).
- Un [utente OpenStack](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) (facoltativo).
- Conoscenze di base di rete.
- Un account Stormshield creato tramite il [sito Stormshield](https://documentation.stormshield.eu/SNS/v4/en/Content/Installation_and_first_time_configuration/Firewall_license_installation.htm){.external}.
- Garantire che la vRack sia attiva e configurata per permettere una comunicazione sicura tra i componenti dell’infrastruttura.
- un blocco di indirizzi [Additional IP](/links/network/additional-ip) (/29) per permettere il failover e la configurazione dell'alta disponibilità.
- Una licenza Stormshield Elastic Virtual Appliance BYOL (**B**ring **Y**our **O**wn **L**icence), ottenuta presso [partner o rivenditori terzi](https://www.stormshield.com/partner/partner-finder/){.external}, che sarà necessario fornire in fase di installazione e configurazione.

## Procedura

Oltre all'installazione e alla configurazione di Stormshield Network Security, questa guida ti mostra diversi casi d'uso in funzione delle tue necessità:

- [Installare e configurare Stormshield Network Security sul proprio ambiente Public Cloud](#step1)
- [Caso d'uso 1: Configura Stormshield Network Security per l'utilizzo come gateway](#step2)
- [Casi d'uso 2: configurare un NAT (**N**etwork **A**ddress **T**ranslation) per accedere a un servizio HTTP privato dall'esterno](#step3)
- [Caso d'uso 3: tunnel IPsec (da sito a sito)](#step4)
- [Caso d'uso 4: VPN SSL/TLS (da client a sito)](#step5)

### Installa e configura Stormshield Network Security sul tuo ambiente Public Cloud <a name="step1"></a>

> [!primary]
> In questa guida, l'installazione e la configurazione di Stormshield SNS EVA vengono effettuate principalmente tramite riga di comando. Aprire un terminale per eseguire le istruzioni.
>
> Ti ricordiamo che tutte le sezioni relative a "High Availability" o "Stormshield-2" sono facoltative, così come l'utilizzo della rete vRack con Additional IP. Sono inclusi per mostrare come installare il sistema con due istanze in modalità attiva/passiva per un'alta disponibilità. In una versione minimale, può anche funzionare con una sola istanza se questo è sufficiente per le vostre necessità.

> [!primary]
> In questo scenario utilizzeremo due macchine virtuali configurate per l'appliance di sicurezza per raggiungere l'alta disponibilità (**H**igh **A**vailability o HA), oltre a una macchina virtuale aggiuntiva per l'amministrazione e la gestione dell'appliance di sicurezza. Questa configurazione garantisce la protezione contro i guasti e la disponibilità continua del servizio. Per ulteriori esempi e suggerimenti dettagliati sulle opzioni di scalabilità, consultare la [documentazione di Stormshield](https://documentation.stormshield.eu/HOME/Content/Website_Topics/Root-HomePage-FR.htm){.external}.

#### Configura la tua vRack

In questo step, configuriamo la vRack, una rete virtuale privata fornita da OVHcloud. La vRack ti permette di interconnettere diverse istanze o server in un ambiente Public Cloud, garantendo così l'isolamento della rete e mantenendo una comunicazione sicura. Aggiungere il tuo progetto Public Cloud e il tuo blocco Additional IP alla stessa vRack permette alle tue istanze SNS EVA di comunicare in modo sicuro, mantenendo il controllo totale della gestione degli indirizzi IP. La rete privata vRack ti permette anche di mettere in sicurezza server Bare Metal Cloud o VM Private Cloud con appliance di sicurezza installate sul Public Cloud.

**Aggiungi il tuo progetto Public Cloud e il tuo blocco Additional IP alla stessa vRack.**

A titolo di esempio per questa guida, il blocco IP è `147.135.161.152/29`.<br>
Utilizziamo il primo IP utilizzabile `147.135.161.153` per la prima istanza di SNS EVA e utilizziamo temporaneamente il secondo IP utilizzabile `147.135.161.154` per il secondo SNS EVA.<br>
L’indirizzo del gateway è `147.135.161.158`.

Per maggiori informazioni, consulta la guida "[Configurare un blocco di indirizzi IP nella vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack)".

Ecco di seguito l'architettura che implementeremo.

![SNS EVA vrack](images/stormshield-ha-vrack.png){.thumbnail}

#### Configura la rete OpenStack

Crea la rete privata per le interfacce esterne SNS EVA:

```bash
openstack network create --provider-network-type vrack --provider-segment 0 --disable-port-security stormshield-ext
```

```bash
openstack subnet create --network stormshield-ext --subnet-range 192.168.1.0/29 --dhcp stormshield-ext
```

Crea la rete privata per le interfacce interne del SNS EVA:

```bash
openstack network create --provider-network-type vrack --provider-segment 200 --disable-port-security stormshield-vlan200
```

```bash
openstack subnet create --network stormshield-vlan200 --subnet-range 10.200.0.0/16 --dhcp --dns-nameserver <dns_address_ip> stormshield-vlan200
```

Crea la rete privata per le interfacce SNS EVA HA (**H**igh **A**vailability):

```bash
openstack network create --provider-network-type vrack --provider-segment 199 --disable-port-security stormshield-ha
```

```bash
openstack subnet create --network stormshield-ha --subnet-range 192.168.2.0/29 --dhcp --gateway none stormshield-ha
```

#### Esegui le istanze SNS EVA

Accedi alla sezione `download` del [sito ufficiale di Stormshield](https://documentation.stormshield.eu/SNS/v4/en/Content/PAYG_Deployment_Guide/Downloading_installation_file.htm){.external}. Accedi al tuo account Stormshield e segui le istruzioni per scaricare l'immagine Stormshield OpenStack.

Accedi alla cartella in cui hai scaricato l’immagine SNS EVA OpenStack e importa l’immagine (in questa guida usiamo l’immagine `utm-SNS-EVA-4.8.3-openstack.qcow2`):

```bash
openstack image create --disk-format raw --container-format bare --file ./utm-SNS-EVA-4.8.3-openstack.qcow2 stormshield-SNS-EVA-4.8.3
```

Crea le istanze SNS EVA (in questo esempio, le abbiamo chiamate `stormshield-1` e `stormshield-2`):

```bash
openstack server create --flavor b3-32 --image stormshield-SNS-EVA-4.8.3 --network stormshield-ext --network stormshield-vlan200 --network stormshield-ha stormshield-1
```

```bash
openstack server create --flavor b3-32 --image stormshield-SNS-EVA-4.8.3 --network stormshield-ext --network stormshield-vlan200 --network stormshield-ha stormshield-2
```

> [!primary]
> Per motivi di performance, ti consigliamo di utilizzare le versioni delle macchine virtuali elencate per i tipi di licenza SNS EVA indicati:
>
> - EVA1: B3-8 / B3-16
> - EVA2: B3-16 / B3-32
> - EVA3: B3-32 / B3-64
> - EVA4: B3-64 / B3-128
> - EVAU: B3-128 / B3-256
>

#### Configura le istanze SNS EVA

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Public Cloud`{.action} e seleziona il progetto Public Cloud interessato. Nel menu a sinistra, clicca su `Istanze`{.action} nella scheda **Compute**, poi trovi le tue due istanze SNS EVA.

Accedere alla console VNC per le due istanze SNS EVA e configurare il layout di tastiera e la password.

Configura il gateway predefinito sul primo SNS EVA con il nostro gateway di blocchi IP:

```console
vi /usr/Firewall/ConfigFiles/object

[Host]
Firewall_out_router=147.135.161.158,resolve=static
...
```

Configura l’interfaccia di rete esterna sul primo SNS EVA con il primo indirizzo IP utilizzabile del nostro blocco IP e l’interfaccia di rete interna con l’indirizzo IP `10.200.0.1`:

```console
vi /usr/Firewall/ConfigFiles/network

...
[ethernet0]
...
Address=147.135.161.153
Mask=255.255.255.248

[ethernet1]
...
Address=10.200.0.1
Mask=255.255.0.0
...
```

Applica la nuova configurazione di rete:

```bash
ennetwork
```

Esegui la stessa configurazione per il secondo SNS EVA ma con il secondo indirizzo IP `147.135.161.154` del nostro blocco IP per l’interfaccia esterna invece di `147.135.161.153`.

Per aggiungere una licenza diversa sulle due istanze SNS EVA, consulta la [documentazione ufficiale](https://documentation.stormshield.eu/SNS/v4/en/Content/Installation_and_first_time_configuration/Firewall_license_installation.htm){.external}.

Creare una regola firewall simile a questa su entrambi i SNS EVA nell'interfaccia grafica Web:

![SNS EVA vrack](images/ha-filter.png){.thumbnail}

Sul primo SNS EVA, crea un gruppo di firewall (`Configuration` > `System` > `High Availability`). Per quanto riguarda l’indirizzo IP, verifica quale IP è stato assegnato all’interfaccia HA dal DHCP OpenStack.

![SNS EVA vrack](images/ha-1.png){.thumbnail}

![SNS EVA vrack](images/ha-2.png){.thumbnail}

Quando la configurazione dell’HA è terminata sul primo SNS EVA, entra nel gruppo di firewall sul secondo:

![SNS EVA vrack](images/ha-3.png){.thumbnail}

![SNS EVA vrack](images/ha-4.png){.thumbnail}

La seconda interfaccia esterna del SNS EVA utilizzerà d'ora in poi lo stesso indirizzo IP della prima. Di conseguenza, l’indirizzo IP `147.135.161.154` potrà essere utilizzato per altri scopi.

Se tutto è configurato correttamente, dopo il riavvio del secondo SNS EVA, dovresti vedere qualcosa di simile negli indicatori di integrità del link HA:

![SNS EVA vrack](images/ha-5.png){.thumbnail}

#### Configura e proteggi la gestione del SNS EVA

> [!tabs]
> **Step 1**
>>
>> Recupera il tuo indirizzo IP pubblico:
>>
>> ```console
>> curl ipinfo.io/ip
>> <ip_address>
>> ```
>>
> **Step 2**
>>
>> Crea un oggetto host per il tuo indirizzo IP pubblico:
>>
>>![SNS EVA vrack](images/configure-management-1.png){.thumbnail}
>>
> **Step 3**
>>
>> Limita l'accesso all'interfaccia grafica al tuo indirizzo IP pubblico e attiva SSH:
>>
>>![SNS EVA vrack](images/configure-management-2.png){.thumbnail}
>>
> **Step 4**
>>
>> Limita l'accesso SSH al tuo indirizzo IP pubblico:
>>
>>![SNS EVA vrack](images/configure-management-3.png){.thumbnail}

#### Risincronizza la configurazione HA

La sincronizzazione tra le due istanze SNS EVA è fondamentale per garantire che entrambi i firewall siano sempre aggiornati con la stessa configurazione. Questo può essere fatto tramite riga di comando SSH o direttamente tramite interfaccia utente grafica (GUI).

> [!primary]
> Per questo esempio, utilizziamo la soluzione da riga di comando SSH. Se si preferisce utilizzare l'interfaccia utente grafica per la sincronizzazione, consultare la sezione "Schermata di alta disponibilità" della [documentazione di Stormshield SNS EVA](https://documentation.stormshield.eu/SNS/v4/en/Content/User_Configuration_Manual_SNS_v4/High_Availability/High_availability_screen.htm){.external} per i passaggi dettagliati.

A questo punto, le due istanze SNS EVA non devono più essere sincronizzate perché abbiamo configurato un gran numero di parametri sulla prima istanza di cui la seconda non è a conoscenza.

Accedi in SSH all’istanza SNS EVA attiva:

```bash
ssh admin@<ip_address>
```

Sincronizza i due SNS EVA:

```bash
hasync
```

Questa operazione è necessaria ogni volta che si aggiorna la configurazione.

### Configurazioni di casi d'uso

Una volta implementato, il firewall SNS EVA può essere utilizzato in diversi scenari di sicurezza avanzati come VPN IPsec, VPN SSL/TLS, gateway di rete (IN o OUT) come descritto di seguito.
Grazie alla rete privata vRack, le VLAN elencate possono essere utilizzate anche al di fuori dell'ambiente Public Cloud: sui prodotti Bare Metal o Private Cloud.

#### Caso d'uso 1: configura Stormshield Network Security per l’utilizzo come gateway <a name="step2"></a>

In questo esempio, il firewall virtuale funziona come un gateway sicuro per le istanze private (o qualsiasi altro server) all'interno del VLAN200 della rete vRack specificata. Questo tipo di traffico può essere filtrato tramite URL nel firewall.

![SNS EVA vrack](images/stormshield-gateway.png){.thumbnail}

- Crea un oggetto di rete per il VLAN200 seguendo [questa parte della documentazione ufficiale di Stormshield](https://documentation.stormshield.eu/SNS/v4/en/Content/Stormshield_Network_SSO_Agent_Linux/Configure_Firewall_Objects.htm){.external}.

- [Crea una nuova regola di filtraggio](https://documentation.stormshield.com/SNS/v4/en/Content/HowTo_-_IPSec_VPN_-_Authentication_by_certificate/Setup-Main-Site-30-Creating-Filtering-policy.htm){.external} simile a questa per consentire al traffico proveniente dal VLAN200 di uscire:

![SNS EVA vrack](images/gateway-2.png){.thumbnail}

- [Creare una regola NAT](https://documentation.stormshield.eu/SNS/v4/en/Content/User_Configuration_Manual_SNS_v4/Filtering_and_NAT/NAT_tab.htm){.external} simile alla seguente:

![SNS EVA vrack](images/gateway-3.png){.thumbnail}

Sincronizza le due istanze HA SNS EVA:

```bash
ssh admin@<ip_address>
hasync
```

##### Verifica se un'istanza può raggiungere Internet dal VLAN200

[Importare la chiave pubblica SSH](https://docs.openstack.org/python-openstackclient/pike/cli/command-objects/keypair.html){.external}:

```bash
openstack keypair create --public-key ~/.ssh/id_rsa.pub <name>
```

Crea un'istanza sul VLAN200:

```bash
openstack server create --flavor b2-7 --image "Ubuntu 22.04" --network stormshield-vlan200 --key-name <name> ubuntu-webserver
```

Accedi in SSH all’istanza SNS EVA :

```bash
ssh -A admin@<instance_ip>
```

Dall’istanza SNS EVA, accedi in SSH al server Web Ubuntu. Verifica l’indirizzo IP assegnato dal DHCP OpenStack all’istanza del server Web Ubuntu:

```bash
ssh ubuntu@<ip_address>
```

Prova se puoi raggiungere un sito Web pubblico:

```bash
curl -I https://www.ovh.com/manager/
HTTP/2 200
```

#### Caso d'uso 2: configura un NAT (**N**etwork **A**ddress **T**ranslation) per accedere a un servizio HTTP privato dall'esterno <a name="step3"></a>

In questo esempio, Internet deve essere in grado di raggiungere il server Web privato installato sul VLAN200. Lo scopo di questa configurazione è di proteggere il server Web con un firewall di rete.

![SNS EVA vrack](images/stormshield-nat-http.png){.thumbnail}

> [!tabs]
> **Step 1**
>>
>> Installate Nginx sull'istanza ubuntu-webserver:
>>
>> ```bash
>> sudo apt-get update
>> sudo apt-get install -y nginx
>> ```
>>
> **Step 2**
>>
>> Crea un oggetto host per l'istanza ubuntu-webserver:
>>
>>![SNS EVA vrack](images/nat-1.png){.thumbnail}
>>
> **Step 3**
>>
>> Creare una regola NAT simile alla seguente:
>>
>>![SNS EVA vrack](images/nat-2.png){.thumbnail}
>>
> **Step 4**
>>
>> Create una regola di filtro simile a questa:
>>
>>![SNS EVA vrack](images/nat-3.png){.thumbnail}
>>

Testa l'accesso al sito dall'esterno:

```bash
curl -I http://<ip_address>
HTTP/1.1 200 OK
```

Sincronizza le due istanze HA SNS EVA:

```bash
ssh admin@<ip_address>
hasync
```

#### Caso d'uso 3: tunnel IPsec (da sito a sito) <a name="step4"></a>

In questo esempio, il tunnel IPsec è configurato per interconnettere due diverse aree PCI: SBG7 (rete VLAN200) e GRA11 (rete VLAN201), ma ognuno di questi siti può essere un sito remoto come un ufficio o un datacenter.

![SNS EVA vrack](images/stormshield-ipsec.png){.thumbnail}

Ripeti tutti gli step in un'altra Region utilizzando la VLAN 201 invece della VLAN 200 e intervalli di indirizzi IP diversi per le subnet Stormshield-ext e Stormshield-ha.;

##### **Configura il primo sito**

- [Aggiungere un oggetto host](https://documentation.stormshield.eu/SNS/v4/en/Content/Stormshield_Network_SSO_Agent_Linux/Configure_Firewall_Objects.htm){.external} per il SNS EVA remoto e aggiungere un oggetto rete per la rete privata remota VLAN201.

- [Creare un tunnel da sito a sito standard](https://documentation.stormshield.eu/SNS/v4/en/Content/User_Configuration_Manual_SNS_v4/IPSec_VPN/Encryption_policy-Tunnels_tab-Site_to_Site-Creating.htm){.external}.

> [!tabs]
> **Step 1**
>>
>> Aggiungi la rete privata locale e la rete privata remota:
>>
>>![SNS EVA vrack](images/ipsec-3.png){.thumbnail}
>>
> **Step 2**
>>
>> Create il gateway remoto:
>>
>>![SNS EVA vrack](images/ipsec-4.png){.thumbnail}
>>
> **Step 3**
>>
>> Scegliete una chiave già condivisa:
>>
>>![SNS EVA vrack](images/ipsec-5.png){.thumbnail}
>>
> **Step 4**
>>
>> Create e attivate il tunnel:
>>
>>![SNS EVA vrack](images/ipsec-7.png){.thumbnail}
>>
> **Step 5**
>>
>> Aggiungi una regola di filtro come questa per autorizzare il traffico attraverso il tunnel:
>>
>>![SNS EVA vrack](images/ipsec-8.png){.thumbnail}
>>

Sincronizza le due istanze HA SNS EVA:

```bash
ssh admin@<ip_address>
hasync
```

##### **Configura il secondo sito**

Procedi esattamente come per il primo sito, ma utilizza VLAN200 per la rete privata remota e l'indirizzo IP appropriato per OVH_REMOTE_FW.

##### **Prova il tunnel VPN IPsec**

Dalla prima istanza di server Web privato del sito:

```console
ssh -A admin@<ip_address>
ssh ubuntu@<ip_address>
ping <ip_address>
PING <ip_address>(<ip_address>) 56(84) bytes of data.
64 bytes from <ip_address>: icmp_seq=1 ttl=64 time=15.2 ms
64 bytes from <ip_address>: icmp_seq=2 ttl=64 time=14.0 ms
```

Dalla seconda istanza di server Web privato del sito:

```console
ssh -A admin@<ip_address>
ssh ubuntu@<ip_address>
ping <ip_address>
PING <ip_address> (<ip_address>) 56(84) bytes of data.
64 bytes from <ip_address>: icmp_seq=2 ttl=64 time=16.9 ms
64 bytes from <ip_address>: icmp_seq=3 ttl=64 time=16.4 ms
```

#### Caso d'uso 4: VPN SSL/TLS (da client a sito) <a name="step5"></a>

In questo esempio, un client remoto OpenVPN si connetterà alla rete privata all’interno del VLAN200.

![SNS EVA vrack](images/stormshield-ssl-vpn.png){.thumbnail}

##### **Configurazione della directory LDAP**

- [Creare una directory LDAP interna](https://documentation.stormshield.eu/SNS/v4/en/Content/User_Configuration_Manual_SNS_v4/Directory_configuration/Creating_an_internal_LDAP.htm){.external} per gestire gli utenti VPN.

In uno scenario di produzione, questo LDAP/AD deve essere remoto e non locale.

![SNS EVA vrack](images/ssl-vpn-1.png){.thumbnail}

- Crea l'elenco degli utenti:

![SNS EVA vrack](images/ssl-vpn-2.png){.thumbnail}

- Aggiungi un utente al nostro elenco locale:

![SNS EVA vrack](images/ssl-vpn-3.png){.thumbnail}

- Scegli una password per il nuovo utente:

![SNS EVA vrack](images/ssl-vpn-4.png){.thumbnail}

##### **Configurazione degli oggetti di rete VPN**

Creare due oggetti di rete per il client VPN SSL.

Rete client UDP:

![SNS EVA vrack](images/ssl-vpn-5.png){.thumbnail}

Rete client TCP:

![SNS EVA vrack](images/ssl-vpn-6.png){.thumbnail}

##### **Configurazione del server VPN SSL**

Configura il server VPN SSL:

![SNS EVA vrack](images/ssl-vpn-7.png){.thumbnail}

##### **Gestione dei diritti degli utenti**

Aggiungere all’utente l’autorizzazione per utilizzare il server VPN SSL (`Configuration` > `Users` > `Access privileges` > `Detailed Access` > `Add`)

Cerca il tuo utente:

![SNS EVA vrack](images/ssl-vpn-8.png){.thumbnail}

Autorizza VPN SSL:

![SNS EVA vrack](images/ssl-vpn-9.png){.thumbnail}

##### **Configurazione delle regole di filtro**

Aggiungi una regola di filtro come questa per permettere al client VPN di accedere al VLAN200:

![SNS EVA vrack](images/ssl-vpn-10.png){.thumbnail}

##### **Sincronizzazione delle istanze SNS**

Sincronizza le due istanze HA SNS EVA:

```bash
ssh admin@<ip_address>
hasync
```

##### **Testare la VPN SSL/TLS**

> [!primary]
> Per testare la connettività SSL/TLS, utilizza qualsiasi dispositivo su cui sia installato OpenVPN. Questo esempio include il test di un client OpenVPN su un’istanza OpenStack in un’altra Region.
>
> In questo esempio, utilizziamo il client OpenVPN, ma puoi anche utilizzare la [versione in pack di Stormshield](https://vpn.stormshield.eu/){.external}.

Scarica il file di configurazione VPN (`Configuration` > `VPN` > `SSL VPN` > `Advanced configuration` > `Export the configuration file`).

Crea un’istanza client OpenVPN pubblica nella Region scelta:

```bash
openstack server create --flavor b2-7 --image "Ubuntu 22.04" --network Ext-Net --key-name sguyenne ubuntu-vpn-client
```

Verifica l’indirizzo IP assegnato all’istanza e copia il file di configurazione:

```bash
scp ~/Download/openvpn_mobile_client.ovpn ubuntu@<adresse_ip>:~
```

Accedi all’istanza:

```bash
ssh ubuntu@<ip_address>
```

Installa il client OpenVPN:

```bash
sudo apt-get update
sudo apt-get install -y openvpn
```

Connettiti alla VPN:

```bash
sudo openvpn --config openvpn_mobile_client.ovpn 
Enter Auth Username: address@stormshield.ovh
🔐 Enter Auth Password: ******************
```

Test di ping dell'istanza privata del server Web:

```console
ssh ubuntu@<ip_address>
ping <ip_address>

PING <ip_address> (<ip_address>) 56(84) bytes of data.
64 bytes from <ip_address>: icmp_seq=1 ttl=64 time=14.1 ms
64 bytes from <ip_address>: icmp_seq=2 ttl=64 time=13.1 ms
```

## Per saperne di più <a name="gofurther"></a>

Se hai bisogno di formazione o assistenza tecnica per implementare le nostre soluzioni, contatta il tuo rappresentante commerciale o clicca su [questo link](/links/professional-services) per ottenere un preventivo e richiedere un'analisi personalizzata del tuo progetto ai nostri esperti del team Professional Services.

Contatta la nostra [Community di utenti](/links/community).