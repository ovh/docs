---
title: Configurazione della vRack sul Public Cloud
excerpt: Scopri come configurare la vRack per le tue istanze Public Cloud
updated: 2025-12-23
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Obiettivo

Il [vRack](/links/network/vrack) è una rete privata che ti permette di configurare l'indirizzamento tra diversi Server dedicati OVHcloud. Ma ti permette anche di aggiungere delle [istanze Public Cloud](/links/public-cloud/compute) alla tua rete privata per creare un'infrastruttura di risorse fisiche e virtuali.

**Questa guida ha l'obiettivo di accompagnarti nella configurazione delle tue istanze Public Cloud all'interno del tuo vRack.**

## Prerequisiti

- Avere un [progetto Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project)
- Essere connesso al tuo [Spazio Cliente OVHcloud](/links/manager)
- Avere [creato un utente OpenStack](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) (opzionale)
- Conoscenze di rete di base

## Presentazione delle interfacce

Che si tratti di creare il tuo vRack o di aggiungere un'istanza all'interno di questa rete, potresti essere chiamato a utilizzare l'Spazio Cliente OVHcloud, le APIv6 OVHcloud, le API OpenStack, l'interfaccia Horizon o Terraform.

A seconda del tuo profilo tecnico e delle tue esigenze, potresti dover scegliere quale interfaccia o metodo utilizzare. Pertanto, per ogni azione, ti proporremo le diverse procedure possibili.

**Ecco una descrizione rapida delle azioni possibili in base al metodo/interfaccia scelto:** <a name="horizon"></a>

/// details | Spazio Cliente OVHcloud

[Lo Spazio Cliente OVHcloud](/links/manager) è un'interfaccia completamente e unicamente visiva, che lo rende un'interfaccia ideale per la gestione di diversi VLAN. Avrai inoltre la possibilità di personalizzare l'intervallo di IP privati, che di default è 10.1.0.0/16.

I VLAN verranno distribuiti nella Regione selezionata. Avrai inoltre la possibilità di attivare o meno le passerelle, attivare le distribuzioni DHCP, ecc.

Potrai inoltre gestire la fatturazione dei tuoi servizi attraverso il tuo Spazio Cliente OVHcloud.

///

/// details | Interfaccia Horizon

Interfaccia visiva indipendente da OVHcloud, [Horizon](https://horizon.cloud.ovh.net/auth/login/) è l'implementazione originale del pannello di controllo di OpenStack, che fornisce un'interfaccia utente web ai servizi OpenStack, tra cui Nova, Swift, Keystone, ecc.

Questa interfaccia completa e tecnica ti permette di gestire la quasi totalità delle azioni OpenStack. Sarà una delle interfacce necessarie se desideri gestire più di due VLAN, aggiungere interfacce di rete private alle tue istanze, gestire immagini personalizzate, ecc.

Consulta la guida "[Introduzione a Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)" per familiarizzare con Horizon.

> [!primary]
> Horizon funzionando per zone, ricorda di selezionare la tua zona geografica di lavoro in alto a sinistra della tua interfaccia (GRA5, SBG3, BHS1, ecc.)
>

///

/// details | APIv6 OVHcloud

Ogni azione che esegui nello Spazio Cliente OVHcloud richiama le [APIv6 OVHcloud](/links/api). 
Puoi addirittura andare più a fondo con le API rispetto al tuo spazio client.

L'interfaccia è meno visiva dello Spazio Cliente OVHcloud ma ti permetterà di effettuare un gran numero di azioni. Potrai gestire e personalizzare i tuoi VLAN, aggiungere interfacce alle tue istanze o creare server fortemente personalizzati.

Potrebbe talvolta essere necessario recuperare diverse informazioni prima di utilizzare un'API specifica.

Puoi accedere facilmente alle API dal [nostro sito web](/links/api), ma puoi anche creare i tuoi script PHP o Python per richiamarle.

In questo modo, potrai liberamente automatizzare le attività di base tramite script, ottimizzare le tue funzioni personali, ecc.

Consulta la guida "[Primi passi con le API OVHcloud](/pages/manage_and_operate/api/first-steps)" per familiarizzare con l'utilizzo delle APIv6 OVHcloud.

///

/// details | API OpenStack

È possibile amministrare i servizi Public Cloud utilizzando righe di comando Linux o Windows, dopo il download e l'installazione degli strumenti OpenStack.

Questo metodo richiede buone conoscenze Linux o Windows per poterlo utilizzare, ma permette di sfruttare tutta la potenza di OpenStack in questo modo.

In base alla strato che desideri gestire, dovrai utilizzare il client Nova (Compute), Neutron (rete), Glance (Immagine) o Swift (Object Storage). L'ultimo arrivato della famiglia, il client OpenStack, ti permette di gestire direttamente quasi l'intera strato OpenStack.

Grazie all'API OpenStack, puoi inoltre automatizzare facilmente questa gestione attraverso i tuoi script.

Per familiarizzare con l'API OpenStack, consulta prima i seguenti guide:

- [Preparare l'ambiente per utilizzare l'API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)
- [Impostare le variabili d'ambiente OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

Potrai quindi, in base alle tue esigenze, utilizzare le API dedicate a OpenStack:

- Nova (Compute)
- Glance (immagine)
- Cinder (immagine)
- Neutron (rete)

> [!primary]
> In alcuni casi, sarà più semplice utilizzare le API OpenStack e in altri, le API Nova, Neutron, ecc.
>
> Inoltre, alcune funzionalità potrebbero mancare dall'API OpenStack in base alla versione del tuo client e del tuo sistema operativo.
> Per questa guida, è stato scelto di proporti le alternative più semplici e intuitive.
> Puoi consultare in qualsiasi momento la [documentazione ufficiale di OpenStack](https://docs.openstack.org/fr/) se desideri approfondire il loro utilizzo.
>

///

/// details | CLI OpenStack

Puoi gestire i tuoi servizi Public Cloud e il tuo vRack OVHcloud direttamente dal tuo terminale Linux o Windows grazie alla CLI OpenStack.

Questa interfaccia permette di gestire tutte le strati OpenStack:

- Nova: istanze (Compute)
- Neutron: reti
- Glance: immagini
- Cinder: volumi

La CLI centralizza queste funzionalità e può essere integrata nei tuoi script per automatizzare le tue attività.

Prima di iniziare, consulta le seguenti guide:

- [Preparare l'ambiente per utilizzare l'API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)
- [Impostare le variabili d'ambiente OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

> [!primary]
>
> La CLI OpenStack è pratica per gestire il tuo vRack, tuttavia alcune funzioni possono variare in base alla versione del client o del sistema operativo. Consulta la [documentazione ufficiale di OpenStack](https://docs.openstack.org/fr/).
>

///

/// details | Terraform

Terraform permette anche di gestire le infrastrutture di OVHcloud.

Per farlo, devi scegliere il fornitore e la risorsa Terraform corretti. Trova ulteriori informazioni nella nostra [guida all'utilizzo di Terraform](/pages/manage_and_operate/terraform/terraform-at-ovhcloud).

///

## Procedura

### Passo 1: Attivare e gestire un vRack <a name="activation"></a>

> [!warning]
>
> Il vRack è gestito a livello di infrastruttura OVHcloud, il che significa che puoi amministrarlo solo dal tuo Spazio Cliente e tramite le APIv6 OVHcloud.
>

> [!tabs]
> Dallo Spazio Cliente OVHcloud
>> > [!primary]
>> >
>> > Questo passo non si applica ai progetti appena creati, che vengono automaticamente forniti con un vRack. Per visualizzare il vRack una volta creato il progetto, vai alla sezione `Network`{.action} e clicca su `Rete privata vRack`{.action} per visualizzare il/i vRack/i.
>> >
>>
>> Se hai un progetto più vecchio e non hai un vRack, devi ordinarne uno. Questo prodotto è gratuito e l'attivazione richiede solo alcuni minuti.
>>
>> Nel menu a sinistra dello schermo, clicca sul pulsante `Aggiungi un servizio`{.action} (icona del carrello). Usa il filtro in alto della pagina o scorri verso il basso per trovare il servizio `vRack`{.action}.
>>
>> ![Ordina il vrack](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/orderingvrack25.png){.thumbnail}
>>
>> Verrai reindirizzato su un'altra pagina per confermare l'ordine, l'operazione richiederà alcuni minuti.
>>
>> Una volta che il servizio è attivo, lo troverai nel tuo Spazio Cliente nella sezione `Network`{.action} > `Rete privata vRack`{.action}, con la denominazione "pn-xxxxxx".
>>
>> Clicca sul tuo vRack, seleziona il progetto che desideri aggiungervi nella lista dei servizi idonei e clicca sul pulsante `Aggiungi`{.action}.
>>
>> ![aggiungi il progetto](images/addprojectvrack.png){.thumbnail}
>>
>> Per continuare la configurazione del vRack dallo Spazio Cliente OVHcloud, prosegui la lettura di questa guida a partire dal [passo 2: Creare una rete privata nel vRack](#create-pn-in-vrack), scheda **Dallo Spazio Cliente OVHcloud**.
>>
> Dalle APIv6 OVHcloud
>>
>> **Passo 1: Attivare e gestire un vRack**
>>
>> Accedi alle APIv6 OVHcloud seguendo la guida "[Primi passi con le API OVHcloud](/pages/manage_and_operate/api/first-steps)".
>>
>> Una volta autenticato, segui le procedure descritte di seguito:
>>
>> **Creazione del carrello**
>>
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart
>> >
>>
>> > [!primary]
>> >
>> > Questa chiamata creerà un identificativo per il tuo "carrello". Potrai aggiungervi quanti articoli desideri prima di confermarlo.
>> >
>> > In questo caso, l'ordine di un vRack è gratuito. Recupera il numero del tuo carrello (cartId), ti sarà indispensabile per proseguire.
>> >
>>
>> **Recupero delle informazioni necessarie all'ordine del vRack**
>>
>> > [!api]
>> >
>> > @api {v1} /order GET /order/cart/{cartId}/vrack
>> >
>>
>> > [!primary]
>> >
>> > Questa chiamata ti permetterà di recuperare l'insieme delle informazioni necessarie all'ordine del vRack. Copia gli elementi seguenti:
>> >
>> > *cartId*, *duration*, *planCode*, e *pricingMode*.
>> >
>>
>> **Aggiunta del vRack nel carrello**
>> 
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart/{cartId}/vrack
>> >
>>
>> > [!primary]
>> >
>> > Questa chiamata ti permetterà di aggiungere il vRack al carrello aggiungendo l'insieme delle informazioni necessarie all'ordine.
>> >
>> > Nel caso del vRack, darebbe ad esempio:
>> >
>> > cartId: [identificativo del tuo carrello]
>> >
>> > duration: "P1M"
>> >
>> > planCode: "vrack"
>> >
>> > pricingMode: "default"
>> >
>> > quantity: 1
>> >
>>
>> Una volta che avrai confermato l'ordine, otterrai un numero d'articolo ("itemId"). Conserva questa informazione, ti sarà utile se desideri apportare modifiche prima della conferma del carrello.
>>
>> **Conferma del carrello**
>>
>> Una volta che tutti gli articoli sono nel tuo carrello, dovrai confermarlo:
>>
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart/{cartId}/checkout
>> >
>>
>> > [!primary]
>> >
>> > Questa chiamata confermerà il carrello e ti creerà un ordine (orderId). Conserva questa informazione, ti sarà necessaria per la conferma dell'ordine.
>> >
>>
>> **Conferma dell'ordine finale**
>>
>> Per confermare l'ordine, hai due metodi possibili:
>>
>> - Passare per l'URL visibile quando il carrello è confermato.  
>> Esempio d'URL: https://www.ovh.com/cgi-bin/order/displayOrder.cgi?orderId=12345678&orderPassword=xxxxxxxxxx
>>
>> - Confermare tramite la chiamata seguente:
>>
>> > [!api]
>> >
>> > @api {v1} /me POST /me/order/{orderId}/payWithRegisteredPaymentMean
>> >
>>
>> > [!primary]
>> >
>> > Anche se si tratta di un ordine a 0 €, è necessario simulare un pagamento dell'ordine (orderId). Il tuo ordine verrà allora confermato e il suo trattamento inizierà.
>> >
>>
>> Una volta che l'ordine gratuito è confermato, può essere necessario attendere alcuni minuti affinché il vRack sia attivo.
>>
>> **Passo 2: Aggiungere il tuo progetto Public Cloud nel vRack**
>>
>> Una volta che il vRack è attivo, dovrai integrare il tuo/i progetti Public Cloud nel vRack.
>>
>> Accedi alle APIv6 OVHcloud seguendo la guida "[Primi passi con le API OVHcloud](/pages/manage_and_operate/api/first-steps)".
>>
>> Nel caso in cui l'identificativo del progetto Public Cloud non sia noto, le chiamate seguenti ti permetteranno di recuperarlo.
>>
>> **Identificazione del progetto**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> > [!primary]
>> >
>> > Questa chiamata permette di recuperare l'elenco dei progetti.
>> >
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}
>> >
>>
>> > [!primary]
>> >
>> > Questa chiamata permette di identificare il progetto grazie al campo "description".
>> >
>>
>> **Aggiunta del progetto nel vRack**
>>
>> Una volta conosciuti l'identificativo del progetto e il nome del vRack, la loro associazione si effettua tramite la chiamata seguente:
>>
>> > [!api]
>> >
>> > @api {v1} /vrack POST /vrack/{serviceName}/cloudProject
>> >
>>
>> Compila i campi della chiamata con le informazioni rilevate in precedenza:
>>
>> - **serviceName**: nome del vRack nella forma "pn-xxxxxx".  
>> - **project**: identificativo del progetto Public Cloud, nella forma di una stringa di 32 caratteri.
>>
>> > [!primary]
>> >
>> > Questa chiamata inizializza l'associazione del progetto al vRack, è necessario quindi recuperare l'identificativo della task per verificare il suo avanzamento.
>> >
>>
>> **Verifica dell'avanzamento della task di aggiunta**
>>
>> Puoi consultare l'evoluzione dell'aggiunta del progetto nel vRack grazie a questa chiamata:
>>
>> > [!api]
>> >
>> > @api {v1} /vrack GET /vrack/{serviceName}/cloudProject/{project}
>> >
>>
>> > [!primary]
>> >
>> > Questa chiamata è facoltativa e permette solo di verificare lo stato della task. Una volta che questa è terminata, puoi passare al passo successivo.
>> >
>>
 
### Passo 2: Creare una rete privata nel vRack <a name="create-pn-in-vrack"></a>

È necessario creare una rete privata con una rete locale virtuale (VLAN) affinché le istanze collegate al vRack possano comunicare tra loro.

Sull'offerta Public Cloud, puoi creare fino a 4 000 VLAN all'interno di un unico vRack. Ciò significa che puoi utilizzare ogni indirizzo IP privato fino a 4 000 volte.
Così, ad esempio, l'IP 192.168.0.10 della VLAN 2 è diverso dall'IP 192.168.0.10 della VLAN 42.

Questo può esserti utile per segmentare il tuo vRack tra diversi reti virtuali.

Dallo Spazio Cliente OVHcloud e dalle APIv6 OVHcloud è possibile personalizzare tutte le impostazioni: modalità e regione di distribuzione, nome e ID della VLAN, intervallo di indirizzi IP privati (ad esempio 10.0.0.0/16), DHCP e gateway.

> [!primary]
> Nei Server dedicati, per default sei sulla VLAN 0. Il funzionamento dell'infrastruttura OpenStack fa sì che tu debba specificare il numero della tua VLAN direttamente a livello di infrastruttura.
>
> A differenza dei Server dedicati, non è necessario "taggare" la VLAN direttamente su un'istanza Public Cloud.
>
> Per ulteriori informazioni sulla gestione delle VLAN del vRack dei Server dedicati, consulta questa guida: [Creare più VLAN nel vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

> [!warning]
> Il vRack essendo un'infrastruttura gestita a livello di OVHcloud, non potrai amministrarlo che attraverso lo Spazio Cliente OVHcloud e le APIv6 OVHcloud.
>
> OpenStack non essendo situato allo stesso livello dell'infrastruttura, non potrai personalizzare le VLAN attraverso l'interfaccia Horizon o le API OpenStack.
>

> [!tabs]
> Dal Spazio Cliente OVHcloud
>> Dopo aver creato il vRack, il passo successivo consiste nel creare una rete privata.
>>
>> Nella scheda `Public cloud`{.action}, clicca su `Private Network`{.action} nel menu a sinistra sotto **Network**.
>>
>> ![Creazione VLAN](images/vrack2022-03.png){.thumbnail}
>>
>> Clicca ora su `Crea una rete privata`{.action}. La pagina successiva ti permetterà di personalizzare diversi parametri.
>>
>> Per iniziare, seleziona una modalità di distribuzione e la regione in cui desideri creare la rete privata.
>>
>> ![Seleziona regione](images/vrack5-2024.png){.thumbnail}
>>
>> Nella fase successiva, ti vengono presentate diverse opzioni:
>>
>> ![Creazione rete](images/vrack6-2022.png){.thumbnail}
>>
>> Nel campo **Nome della rete privata**, definisci un nome per la tua rete privata.
>>
>> **Opzione rete del layer 2**
>>
>> Se selezioni la casella `Definisci un ID VLAN`{.action}, dovrai scegliere un numero VLAN compreso tra 0 e 4000.
>>
>> Se non selezioni questa casella, il sistema assegnerà un numero VLAN casuale.
>>
>> Nel caso in cui tu debba far comunicare dei Server dedicati OVHcloud con VLAN taggati, consulta la seguente guida: [Creare più VLAN in un vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).
>>
>> **Opzioni di distribuzione degli indirizzi DHCP**
>>
>> L'intervallo DHCP predefinito è 10.1.0.0/16. Puoi utilizzare un altro intervallo privato a tua scelta o disattivare il DHCP per questa rete privata.
>>
>> **Opzioni gateway di rete**
>>
>> - **Annunciare la prima indirizzo di un CIDR come gateway predefinito (opzione DHCP 3)**: Quando questa opzione è attivata, il server DHCP annuncia il primo indirizzo del CIDR come gateway predefinito alle macchine collegate alla rete.
>> - **Assegna una Gateway e collegati alla rete privata**: Seleziona questa opzione se hai l'intenzione di creare delle istanze con una rete privata esclusivamente. Per ulteriori informazioni, ti invitiamo a consultare le seguenti guide: [Creare una rete privata con una Gateway](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) e [Creare una prima istanza Public Cloud e collegarvisi](/pages/public_cloud/Compute/public-cloud-first-steps).
>>
>> > [!warning]
>> >
>> > Se la seconda opzione è grigia, significa che è incompatibile con la regione selezionata. Per ulteriori informazioni, ti invitiamo a consultare la nostra pagina sulla [disponibilità dei prodotti Public Cloud per ogni regione](/links/public-cloud/regions-pci).
>> >
>>
>> Una volta effettuate le tue scelte, clicca su `Configura la tua rete privata`{.action} per avviare il processo.
>>
>> > [!primary]
>> >
>> > La creazione della rete privata può richiedere diversi minuti.
>> >
>>
> Dalle APIv6 OVHcloud <a name="vlansetup"></a>
>>
>> Una volta connesso all'[APIv6 OVHcloud](/links/api), esegui i seguenti comandi nell'ordine.
>>
>> **Passo 1 - Recupero delle informazioni necessarie:**
>>
>> **Progetto Public Cloud**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> > [!primary]
>> >
>> > Questa chiamata permette di recuperare l'elenco dei progetti.
>> >
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}
>> >
>>
>> > [!primary]
>> >
>> > Questa chiamata permette di identificare il progetto grazie al campo "description".
>> >
>>
>> **vRack interessato**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/vrack
>> >
>>
>> > [!primary]
>> >
>> > Nel campo serviceName, indica l'identificativo del tuo progetto. Conserva l'informazione relativa all'identificativo del vRack nella forma "pn-xxxxx".
>> >
>>
>> **Passo 2 - Creazione della rete privata:**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > Compila i campi con le informazioni precedentemente ottenute:
>> >
>> > - **serviceName**: ID del progetto.
>> > - **name**: il nome che desideri dare al VLAN.
>> >
>> > Puoi lasciare il campo "Region" vuoto per attivarlo in tutte le regioni.
>> >
>> > L'identificativo del VLAN (vlanId) è necessario se desideri creare un VLAN specifico.
>> >
>>
>> La creazione richiede alcuni istanti.
>>
>> Per verificare le informazioni dei tuoi VLAN, puoi utilizzare la seguente chiamata:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > Questa chiamata permette di recuperare il networkId. Questo si presenterà nella forma seguente: nome-vrack_vlanId.
>> >
>> > Ad esempio, per il VLAN 42: pn-xxxxxx_42.
>> >
>>
>> **Passo 3 - Creazione del sottorete:**
>>
>> Per default, se non aggiungi un sottorete, l'intervallo IP utilizzato è il seguente:
>>
>> ```
>> 10.1.0.0/16
>> ```
>>
>> Se desideri gestire personalmente le assegnazioni IP, dovrai creare un sottorete.
>>
>> Per farlo, una volta creato il VLAN, dovrai creare il sottorete per ogni zona interessata tramite la seguente chiamata:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/network/private/{networkId}/subnet
>> >
>>
>> Puoi compilare i campi come segue:
>>
>> |Campo|Descrizione| 
>> |---|---| 
>> |serviceName|Identificativo del tuo progetto.|
>> |networkId|Identificativo della tua rete recuperato durante i comandi precedenti. Ad esempio: pn-xxxxxx_42 per il VLAN 42.|
>> |dhcp|Casella selezionata per attivazione / non selezionata per disattivazione del DHCP nel VLAN.|
>> |end|Ultimo indirizzo del sottorete della regione. Ad esempio: 192.168.1.50.|
>> |network|Blocco IP del sottorete. Ad esempio: 192.168.1.0/24.|
>> |region|Ad esempio: SBG3.|
>> |start|Primo indirizzo del sottorete per questa regione. Ad esempio: 192.168.1.15.|
>>
>> > [!primary]
>> >
>> > Questo è il passo per la creazione del sottorete per regione. Puoi attivare o meno l'assegnazione di indirizzi IP privati in modo dinamico tramite DHCP.
>> >
>> > Dovrai effettuare la stessa operazione per ogni zona in cui sono presenti le tue istanze.
>> >
>>
>> > [!warning]
>> >
>> > Fai attenzione a separare correttamente i tuoi pool di indirizzi IP per le diverse regioni. Ad esempio:
>> >
>> > - Da 192.168.0.2 a 192.168.0.254 per SBG1.
>> > - Da 192.168.1.2 a 192.168.1.254 per GRA1.
>> >
>>
> Da Terraform
>>
>> In Terraform, devi utilizzare il provider OpenStack. Puoi scaricare un esempio completo di script terraform da [questo repository GitHub](https://github.com/yomovh/tf-at-ovhcloud/tree/main/private_network).
>>
>> La parte specifica per OVHcloud per l'integrazione vRack è il parametro `value_specs`.
>>
>> ```python
>> resource "openstack_networking_network_v2" "tf_network" {
>>   name = "tf_network"
>>   admin_state_up = "true"
>>   value_specs = {
>>     "provider:network_type"    = "vrack"
>>     "provider:segmentation_id" = var.vlan_id
>>   }
>> }
>> resource "openstack_networking_subnet_v2" "tf_subnet"{
>>   name       = "tf_subnet"
>>   network_id = openstack_networking_network_v2.tf_network.id
>>   cidr       = "10.1.0.0/16"
>>   enable_dhcp       = true
>> }
>> ```
>>
> Dalla CLI OpenStack
>> Nell'esempio seguente, specificiamo il `VLAN_ID` a cui vogliamo che la rete appartenga tramite `--provider-network-type` e `--provider-segment`.
>>
>> Puoi rimuovere questi parametri. In questo caso, verrà utilizzato un `VLAN_ID` disponibile.
>>
>> ```bash 
>> openstack network create --provider-network-type vrack --provider-segment 42 OS_CLI_private_network
>> openstack subnet create --dhcp --network OS_CLI_private_network OS_CLI_subnet --subnet-range 10.1.0.0/16
>> ```
>> 

### Passo 3: Integrazione di un'istanza nel vRack

Due situazioni possono presentarsi:

- L'istanza non esiste ancora.
- L'istanza esiste già e devi aggiungerla al vRack.

/// details | **Caso di una nuova istanza**

> [!tabs]
> Dal Spazio Cliente OVHcloud
>> Consulta la guida "[Creare un'istanza dallo spazio cliente](/pages/public_cloud/Compute/public-cloud-first-steps)". Durante la creazione di un'istanza, puoi scegliere all'ultimo passo, un tipo di rete e quindi una rete privata alla quale integrare la tua istanza.
>>
>> ![aggiungi nuova istanza](images/network-selection.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Durante la creazione di una nuova istanza, potrai collegare la tua istanza a **un solo** vRack dallo Spazio Cliente OVHcloud.
>> >
>> > Per aggiungere più interfacce diverse, dovrai utilizzare le API OpenStack o Horizon.
>> >
>>
> Dalle APIv6 OVHcloud
>> Una volta connesso all'[APIv6 OVHcloud](/links/api), esegui i seguenti comandi nell'ordine.
>>
>> **Passo 1 - Recupero delle informazioni necessarie**
>>
>> **Recupero dell'identificativo del progetto:**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> **Recupero del networkID della rete pubblica (EXT-NET)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/public
>> >
>>
>> **Recupero del networkID della rete privata (interfaccia vRack creata in precedenza)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > L'identificativo ottenuto ha la forma: "pn-xxxxx_yy" dove yy è il numero del VLAN.
>> >
>>
>> **Recupero dell'identificativo del tipo di istanza scelto (flavorId)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/flavor
>> >
>>
>> > [!primary]
>> >
>> > È possibile limitare l'elenco specificando la zona di creazione della tua istanza.
>> >
>>
>> **Recupero dell'identificativo dell'immagine scelta (imageId)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/image
>> >
>>
>> > [!primary]
>> >
>> > È possibile limitare l'elenco specificando la zona di creazione della tua istanza.
>> >
>>
>> **Recupero dell'identificativo della tua chiave SSH OpenStack (sshKeyId)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/sshkey
>> >
>>
>> Se non hai ancora aggiunto una chiave SSH al tuo spazio cliente, puoi farlo utilizzando la seguente funzione API:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/sshkey
>> >
>>
>> **Passo 2 - Distribuzione dell'istanza**
>>
>> Una volta raccolti tutti gli elementi necessari alla distribuzione, puoi utilizzare il seguente richiamo:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/instance
>> >
>>
>> Dovrai specificare almeno i seguenti campi:
>>
>> |Campo|Descrizione| 
>> |---|---| 
>> |serviceName|Identificativo del progetto Public Cloud interessato.|
>> |flavorId|Identificativo del tipo di istanza (esempio: D2-2, B2-7, WIN-R2-15, ecc.).|
>> |imageId|Identificativo dell'immagine di distribuzione (esempio: Debian 9, Centos 7, ecc.).|
>> |name|Nome che desideri dare alla tua istanza.|
>> |networks|Nella parte "networkId", indica l'identificativo della rete pubblica (ext-net) o quello del tuo VLAN (pn-xxxxxx_yy). Puoi cliccare sul pulsante "+" per aggiungere altre reti.|
>> |region|Regioni di distribuzione dell'istanza (esempio: GRA5).|
>> |sshKeyId|Identificativo della tua chiave SSH OpenStack.|
>>
>> Una volta effettuato il richiamo, se tutte le informazioni sono state correttamente indicate, l'istanza verrà creata con una o più interfacce di rete.
>>
>> > [!warning]
>> >
>> > A seconda dei sistemi operativi, dovrai configurare manualmente le tue interfacce di rete private affinché vengano prese in considerazione.<br>
>> > OpenStack non è in grado di dare la priorità all'interfaccia pubblica rispetto all'interfaccia vRack, quindi potrebbe verificarsi che quest'ultima diventi la route predefinita.<br>
>> > La conseguenza diretta è che l'istanza non è raggiungibile da un'IP pubblica.<br>
>> > Un riavvio o più riavvii dell'istanza dallo spazio cliente potrebbero permettere di risolvere la situazione.<br>
>> > Un'altra soluzione consiste nel connettersi all'istanza in SSH attraverso uno dei tuoi server presenti nella stessa rete privata. Puoi anche correggere la configurazione di rete dell'istanza attraverso la modalità Rescue.
>> >
>>
> Dalla CLI OpenStack
>> **Recupero delle informazioni necessarie**
>>
>> Identificazione delle reti pubbliche e private:
>>
>> ```bash
>> openstack network list
>> 
>> +--------------------------------------+------------+-------------------------------------+
>> | ID                                   | Name       | Subnets                             |
>> +--------------------------------------+------------+-------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MioVLAN-42 | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MioVLAN_0  | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
>> +--------------------------------------+------------+-------------------------------------+
>> ```
>>
>> o
>>
>> ```bash
>> nova net-list
>> 
>> +--------------------------------------+------------+------+
>> | ID                                   | Label      | CIDR |
>> +--------------------------------------+------------+------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MioVLAN-42 | None |
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MioVLAN_0  | None |
>> +--------------------------------------+------------+------+
>> ```
>>
>> > [!primary]
>> >
>> > Dovrai annotare gli ID delle reti che ti interessano:
>> >
>> > - Ext-Net per ottenere un'IP pubblica.
>> > - Quello del o dei VLAN necessari alla tua configurazione.
>> >
>>
>> Annota anche le seguenti informazioni, come indicato nella [guida all'utilizzo dell'API Nova](/pages/public_cloud/Compute/starting_with_nova):
>>
>> - ID o nome della chiave SSH OpenStack.
>> - ID del tipo di istanza (flavor).
>> - ID dell'immagine desiderata (Sistema operativo, snapshot, ecc.).
>>
>> **Distribuzione dell'istanza**
>>
>> Con gli elementi recuperati in precedenza, è possibile creare un'istanza includendola direttamente nel vRack:
>>
>> ```bash
>> nova boot --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [nom de votre instance]
>> ```
>>
>> Per esempio:
>>
>> ```bash
>> nova boot --key-name ma-cle-ssh --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NomDeMonInstance
>> 
>> +--------------------------------------+------------------------------------------------------+
>> | Property                             | Value                                                |
>> +--------------------------------------+------------------------------------------------------+
>> | OS-DCF:diskConfig                    | MANUAL                                               |
>> | OS-EXT-AZ:availability_zone          |                                                      |
>> | OS-EXT-STS:power_state               | 0                                                    |
>> | OS-EXT-STS:task_state                | scheduling                                           |
>> | OS-EXT-STS:vm_state                  | building                                             |
>> | OS-SRV-USG:launched_at               | -                                                    |
>> | OS-SRV-USG:terminated_at             | -                                                    |
>> | accessIPv4                           |                                                      |
>> | accessIPv6                           |                                                      |
>> | adminPass                            | xxxxxxxxxxxx                                         |
>> | config_drive                         |                                                      |
>> | created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | flavor                               | [Flavor Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
>> | hostId                               |                                                      |
>> | id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
>> | image                                | [Image Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
>> | key_name                             | [Nome della chiave]                                  |
>> | metadata                             | {}                                                   |
>> | name                                 | [Nome della tua istanza]                             |
>> | os-extended-volumes:volumes_attached | []                                                   |
>> | progress                             | 0                                                    |
>> | security_groups                      | default                                              |
>> | status                               | BUILD                                                |
>> | tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> | updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> +--------------------------------------+------------------------------------------------------+
>> ```
>>
>> o
>>
>> ```bash
>> openstack server create --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [nom de votre instance]
>> ```
>>
>> Per esempio:
>>
>> ```bash
>> openstack server create --key-name ma-cle-ssh --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NomDeMonInstance
>>
>> +--------------------------------------+------------------------------------------------------+
>> | Property                             | Value                                                |
>> +--------------------------------------+------------------------------------------------------+
>> | OS-DCF:diskConfig                    | MANUAL                                               |
>> | OS-EXT-AZ:availability_zone          |                                                      |
>> | OS-EXT-STS:power_state               | 0                                                    |
>> | OS-EXT-STS:task_state                | scheduling                                           |
>> | OS-EXT-STS:vm_state                  | building                                             |
>> | OS-SRV-USG:launched_at               | -                                                    |
>> | OS-SRV-USG:terminated_at             | -                                                    |
>> | accessIPv4                           |                                                      |
>> | accessIPv6                           |                                                      |
>> | adminPass                            | xxxxxxxxxxxx                                         |
>> | config_drive                         |                                                      |
>> | created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | flavor                               | [Flavor Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
>> | hostId                               |                                                      |
>> | id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
>> | image                                | [Image Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
>> | key_name                             | [Nome della chiave]                                  |
>> | metadata                             | {}                                                   |
>> | name                                 | [Nome della tua istanza]                             |
>> | os-extended-volumes:volumes_attached | []                                                   |
>> | progress                             | 0                                                    |
>> | security_groups                      | default                                              |
>> | status                               | BUILD                                                |
>> | tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> | updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> +--------------------------------------+------------------------------------------------------+
>> ```
>>
>> Hai la possibilità di definire l'indirizzo IP della tua istanza vRack al livello di OpenStack.
>>
>> Per farlo, puoi aggiungere un semplice argomento nella funzione "--nic":
>>
>> `--nic net-id=[ID-Network],v4-fixed-ip=[IP_static_vRack]`
>>
>> Per esempio:
>>
>> `--nic net-id=[ID-vRack],v4-fixed-ip=192.168.0.42`
>>
>> **Verifica dell'istanza**
>>
>> Dopo pochi istanti, puoi verificare l'elenco delle istanze esistenti per trovare il server creato:
>>
>> ```bash
>> openstack server list
>> +--------------------------------------+---------------------+--------+--------------------------------------------------+---------------------+
>> | ID                                   |       Name          | Status | Networks                                         |     Image Name      |
>> +--------------------------------------+---------------------+--------+--------------------------------------------------+---------------------+
>> | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxx | [Nome dell'istanza] | ACTIVE | Ext-Net=[IP_V4], [IP_V6]; MonVrack=[IP_V4_vRack] | [Nome dell'istanza] |
>> +--------------------------------------+---------------------+--------+--------------------------------------------------+---------------------+
>> ```
>>
>> ```bash
>> nova list
>> +--------------------------------------+---------------------+--------+------------+-------------+--------------------------------------------------+
>> | ID                                   | Name                | Status | Task State | Power State | Networks                                         |
>> +--------------------------------------+---------------------+--------+------------+-------------+--------------------------------------------------+
>> | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   | [Nome dell'istanza] | ACTIVE | -          | Running     | Ext-Net=[IP_V4], [IP_V6]; MonVrack=[IP_V4_vRack] |
>> +--------------------------------------+---------------------+--------+------------+-------------+--------------------------------------------------+
>> ```
>>

///

/// details | **Caso di un'istanza già esistente**

Lo Spazio Cliente OVHcloud consente di collegare un'istanza a una o più reti private ma non offre una configurazione avanzata delle interfacce di rete. Se desideri personalizzarle ulteriormente, dovrai gestirle tramite le APIv6 OVHcloud, le API OpenStack o tramite Horizon.

L'azione consiste semplicemente nell'aggiungere una nuova interfaccia di rete al tuo server, oltre a quella esistente.

Ad esempio, se hai un'interfaccia pubblica *eth0*, avrai in più un'interfaccia *eth1*.

> [!warning]
> La configurazione di questa nuova interfaccia non è quasi mai automatica. Dovrai quindi configurarla in DHCP o con un indirizzo IP fisso in base alla tua infrastruttura.
>

> [!tabs]
> Dallo Spazio Cliente OVHcloud
>> Accedi al tuo [Spazio Cliente OVHcloud](/links/manager), vai alla sezione `Public Cloud`{.action} e seleziona il progetto Public Cloud desiderato in alto a sinistra.
>>
>> Clicca quindi su `Instanze`{.action} nel menu laterale sinistro. Clicca successivamente sul pulsante `⁝`{.action} a destra dell'istanza desiderata e poi su `Dettagli dell'istanza`{.action}.
>>
>> ![dettaglio istanza](images/instance_details.png){.thumbnail}
>>
>> Ti verrà mostrato il pannello del tuo'istanza. Clicca sul pulsante `⁝`{.action} a destra di "Reti private" e poi su `Associa una rete`{.action}.
>>
>> ![collega rete](images/vrack2021-01.png){.thumbnail}
>>
>> Nella finestra che appare, seleziona una o più reti private da collegare alla tua istanza e clicca su `Confermare`{.action}.
>>
>> ![collega rete](images/vrack9.png){.thumbnail}
>>
> Dalle APIv6 OVHcloud
>> L'azione consiste semplicemente nell'aggiungere una nuova interfaccia di rete al tuo server, oltre a quella esistente.
>>
>> Ad esempio, se il server dispone di un'interfaccia pubblica eth0, verrà aggiunta un'interfaccia supplementare eth1.
>>
>> > [!primary]
>> >
>> > La configurazione di questa nuova interfaccia non è quasi mai automatica.<br>
>> > Dovrai quindi configurarla in DHCP o con un indirizzo IP fisso in base alla tua infrastruttura.
>> >
>>
>> **Le fasi seguenti descrivono come gestire le interfacce di rete delle tue istanze.**
>>
>> **Fase 1 - Recupero delle informazioni necessarie**
>>
>> **Recupero dell'identificativo del progetto:**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> **Recupero dell'identificativo dell'istanza:**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/instance
>> >
>>
>> **Recupero del networkID della rete pubblica (EXT-NET):**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/public
>> >
>>
>> **Recupero del networkID della rete privata (interfaccia vRack creata in precedenza):**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > L'identificativo ottenuto ha la forma: "pn-xxxxx_yy" dove yy è il numero del VLAN.
>> >
>>
>> **Fase 2 - Aggiunta di un'interfaccia alla tua istanza**
>>
>> Una volta recuperate tutte le informazioni necessarie, puoi utilizzare la seguente chiamata:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/instance/{instanceId}/interface
>> >
>>
>> Dovrai compilare almeno i seguenti campi:
>>
>> |Campo|Descrizione| 
>> |---|---| 
>> |serviceName|Identificativo del progetto Public Cloud desiderato.|
>> |instanceId|Identificativo dell'istanza desiderata.|
>> |networkId|Indica l'identificativo della rete pubblica (ext-net) o quello del tuo VLAN (pn-xxxxxx_yy).|
>> |ip|Definire un IP specifico (funziona solo per le interfacce private).|
>>
>> Una volta effettuata la chiamata, se tutte le informazioni sono state correttamente indicate, verrà aggiunta una nuova interfaccia alla tua istanza.
>>
>> > [!primary]
>> >
>> > La tua istanza OVHcloud disporrà quindi di una nuova interfaccia di rete oltre all'interfaccia pubblica (Ext-net).<br>
>> > Potrai vedere, nel riepilogo dell'istanza, l'indirizzo IP privato assegnato automaticamente alla tua interfaccia.<br>
>> > A tuo carico configurarla tramite il DHCP o utilizzare i tuoi IP personali tramite una configurazione in IP statico.
>> >
>>
>> **Fase 3 - Rimozione di un'interfaccia dalla tua istanza**
>>
>> > [!warning]
>> >
>> > Rimuovere un'interfaccia di rete ne comporta l'eliminazione immediata.
>> >
>> > Tuttavia, è importante notare che se rimuovi l'interfaccia "Ext-Net" (IP pubblico), tale indirizzo verrebbe rilasciato e rimesso in circolazione. Non potresti quindi riassegnartelo.<br>
>> > Questa azione va effettuata solo se desideri isolare il tuo server nel vRack (rete privata) o, al contrario, rimuoverlo da uno o più VLAN.
>> >
>>
>> Una volta recuperate tutte le informazioni necessarie, puoi utilizzare la seguente chiamata per eliminare un'interfaccia:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud DELETE /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
>> >
>>
>> Dovrai compilare almeno i seguenti campi:
>>
>> |Campo|Descrizione| 
>> |---|---| 
>> |serviceName|Identificativo del progetto Public Cloud desiderato.|
>> |instanceId|Identificativo dell'istanza desiderata.|
>> |networkId|Indica l'identificativo della rete pubblica (ext-net) o quello del tuo VLAN (pn-xxxxxx_yy).|
>>
> Da OpenStack Horizon
>> Accedi all'interfaccia [Horizon](https://horizon.cloud.ovh.net/auth/login/) seguendo il metodo indicato nella [prima parte di questa guida](#horizon).
>>
>> Accedi alla tua area di lavoro:
>>
>> ![connessione Horizon](images/horizon1.png){.thumbnail}
>>
>> Vai quindi in `Compute`, quindi in `Instances`:
>>
>> ![Horizon Compute instances](images/horizon2.png){.thumbnail}
>>
>> **Aggiunta di un'interfaccia di rete privata**
>>
>> Per aggiungere un'interfaccia, nella colonna `Actions`, clicca sulla freccia per accedere alle azioni possibili sull'istanza. Clicca quindi su `Attach Interface`{.action}:
>>
>> ![Horizon attach interface](images/horizon3.png){.thumbnail}
>>
>> Seleziona la tua interfaccia e conferma:
>>
>> ![Horizon attach interface](images/horizon4.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > La tua istanza OVHcloud disporrà quindi di una nuova interfaccia di rete oltre all'interfaccia pubblica (Ext-net).<br>
>> > Potrai vedere, nel riepilogo dell'istanza, l'indirizzo IP privato assegnato automaticamente alla tua interfaccia.<br>
>> > A tuo carico configurarla tramite il DHCP o utilizzare i tuoi IP personali tramite una configurazione in IP statico.
>> >
>>
>> **Rimozione di un'interfaccia di rete**
>>
>> > [!warning]
>> >
>> > Rimuovere un'interfaccia di rete ne comporta l'eliminazione immediata.
>> >
>> > Tuttavia, è importante notare che se rimuovi l'interfaccia "Ext-Net" (IP pubblico), tale indirizzo verrebbe rilasciato e rimesso in circolazione. Non potresti quindi riassegnartelo.<br>
>> > Questa azione va effettuata solo se desideri isolare il tuo server nel vRack (rete privata) o, al contrario, rimuoverlo da uno o più VLAN.
>> >
>>
>> Per rimuovere un'interfaccia di rete privata, nella colonna `Actions`, clicca sulla freccia per accedere alle azioni possibili sull'istanza. Clicca quindi su `Detach Interface`{.action}:
>>
>> ![Horizon detach interface](images/horizon5.png){.thumbnail}
>>
>> Seleziona l'interfaccia da eliminare e conferma:
>>
>> ![Horizon detach interface](images/horizon6.png){.thumbnail}
>>
> Dalla CLI OpenStack
>> **Recupero delle informazioni necessarie**
>>
>> Individuazione delle tue istanze:
>>
>> ```bash
>> openstack server list
>>
>> +--------------------------------------+----------------+--------+------------------------------------------------------------------------+------------+
>> | ID                                   | Name           | Status | Networks                                                               | Image Name |
>> +--------------------------------------+----------------+--------+------------------------------------------------------------------------+------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | La-mia-istanza | ACTIVE | Ext-Net=xx.xx.xx.xx, 2001:41d0:yyyy:yyyy::yyyy; MonVrack=192.168.0.124 | Debian 9   |
>> +--------------------------------------+----------------+--------+------------------------------------------------------------------------+------------+
>> ```
>>
>> o
>>
>> ```bash
>> nova list
>> 
>> +--------------------------------------+----------------+--------+------------+-------------+----------------------------------------------------------------------+
>> | ID                                   | Name           | Status | Task State | Power State | Networks                                                             |
>> +--------------------------------------+----------------+--------+------------+-------------+----------------------------------------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | La-mia-istanza | ACTIVE | -          | Running     | Ext-Net=xx.xx.xx.xx,2001:41d0:yyyy:yyyy::yyyy;MonVrack=192.168.0.124 |
>> +--------------------------------------+----------------+--------+------------+-------------+----------------------------------------------------------------------+
>> ```
>>
>> Individuazione delle reti pubbliche e private:
>>
>> ```bash
>> openstack network list
>>  
>> +--------------------------------------+------------+-------------------------------------+
>> | ID                                   | Name       | Subnets                             |
>> +--------------------------------------+------------+-------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MioVLAN-42 | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MioVLAN-0  | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
>> +--------------------------------------+------------+-------------------------------------+
>> ```
>>
>> o
>>
>> ```bash
>> nova net-list
>> 
>> +--------------------------------------+------------+------+
>> | ID                                   | Label      | CIDR |
>> +--------------------------------------+------------+------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MioVLAN-42 | None |
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MioVLAN-0  | None |
>> +--------------------------------------+------------+------+
>> ```
>>
>> > [!primary]
>> >
>> > Dovrai annotare gli ID delle reti che ti interessano:
>> >
>> > - Ext-Net per ottenere un IP pubblico.
>> > - Quello del o dei VLAN necessari alla tua configurazione.
>> >
>>
>> **Aggiunta di un'interfaccia di rete privata**
>>
>> Per collegare una nuova interfaccia, puoi effettuare il seguente comando:
>>
>> ```bash
>> nova interface-attach --net-id <ID-VLAN> <ID-instance>
>> ```
>>
>> Ad esempio:
>>
>> ```bash
>> nova interface-attach --net-id 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx
>> ```
>>
>> Puoi verificare che l'azione sia stata correttamente eseguita:
>>
>> ```bash
>> nova show <ID-instance>
>> 
>> +--------------------------------------+----------------------------------------------------------+
>> | Property                             | Value                                                    |
>> +--------------------------------------+----------------------------------------------------------+
>> | Ext-Net network                      | xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx                    | => il tuo IP pubblico
>> | MioVLAN-42 network                   | 192.168.0.x                                              | => il tuo IP privato
>> [...]
>> ```
>>
>> o
>>
>> ```bash
>> openstack server show <ID-instance>
>> +--------------------------------------+-------------------------------------------------------------------------+
>> | Field                                | Value                                                                   |
>> +--------------------------------------+-------------------------------------------------------------------------+
>> [...]
>> | addresses                            | Ext-Net=xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx ; MioVLAN-42=192.168.0.x  | => il tuo IP pubblico ; il tuo IP privato
>> [...]
>> ```
>>

### Rimozione di un'interfaccia di rete

> [!warning]
> Rimuovere un'interfaccia di rete ne comporta l'eliminazione immediata.
>
> Tuttavia, è importante notare che se rimuovi l'interfaccia "Ext-Net" (IP pubblico), tale indirizzo verrebbe rilasciato e rimesso in circolazione. Non potresti quindi riassegnartelo.<br>
> Questa azione va effettuata solo se desideri isolare il tuo server nel vRack (rete privata) o, al contrario, rimuoverlo da uno o più VLAN.
>

Per rimuovere un'interfaccia di rete, avrai prima bisogno di identificare la porta Neutron che sarà stata creata.

Per farlo, puoi utilizzare i seguenti comandi:

```bash
neutron port-list
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| id                                   | name | mac_address       | fixed_ips                                                                                         |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | {"subnet_id": "01234567-8901-abscdef12345678910abcd", "ip_address": "192.168.0.x"}                |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | {"subnet_id": "65432109-abcd-ef09-8765-43210abcdef1", "ip_address": "2001:41d0:xxx:xxxx::xxxx"}   |
|                                      |      |                   | {"subnet_id": "abcdef12-3456-7890-abcd-ef1234567890", "ip_address": "YY.YY.YY.YY"}                |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
```

o

```bash
openstack port list
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| ID                                   | Name | MAC Address       | Fixed IP Addresses                                                                        |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | ip_address='192.168.0.xx', subnet_id='301234567-8901-abscdef12345678910abcd'              |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | ip_address='2001:41d0:xxx:xxxx::xxxx', subnet_id='65432109-abcd-ef09-8765-43210abcdef1'   |
|                                      |      |                   | ip_address='YY.YY.YY.YY', subnet_id='abcdef12-3456-7890-abcd-ef1234567890'                |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
```

Una volta identificato il porto da eliminare, è possibile eseguire il comando seguente:

```bash
nova interface-detach <ID_instance> <port_id>
```

Per esempio:

```bash
nova interface-detach 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-abcd-ef01-2345-678910abcdef
```

///

## Per saperne di più

[Server dedicati - Creare più VLAN nel vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

Se hai bisogno di formazione o di un supporto tecnico per l'implementazione delle nostre soluzioni, contatta il tuo account manager o clicca su [questo link](/links/professional-services) per richiedere un preventivo e un'analisi personalizzata del tuo progetto ai nostri esperti del team Professional Services.

Contatta la nostra [Community di utenti](/links/community).