---
title: FAQ Public Cloud OVHcloud
excerpt: rispondi alle domande più frequenti sui servizi Public Cloud di OVHcloud
updated: 2024-10-11
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

## FAQ Public Cloud

### Opzioni e fatturazione

/// details | Come funziona la fatturazione del Public Cloud?

La fatturazione dei tuoi consumi avviene tra il 1° e il 5° giorno del mese successivo al periodo di utilizzo. In caso di tariffazione mensile, il forfait del mese successivo viene fatturato insieme agli eventuali costi aggiuntivi del mese precedente (istanze, Object Storage). Se passi alla tariffa mensile nel corso del mese, il prorata temporis per il mese in corso viene addebitato immediatamente.
Ti ricordiamo che tutte le istanze vengono fatturate fino a quando non vengono eliminate dallo Spazio Cliente OVHcloud.
Per monitorare i consumi in modo ancora più preciso, è possibile affidarsi alle proiezioni elaborate sulla base dei consumi precedenti oppure applicare una fatturazione differente ai diversi progetti Public Cloud, in modo da gestire al meglio le spese della tua azienda.

Per passare da una modalità di fatturazione all'altra, consulta la nostra guida [Passare dalla fatturazione oraria a quella mensile](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).

> [!success]
> Approfitta di prezzi ridotti sottoscrivendo un impegno contrattuale di 1-36 mesi per le tue risorse Public Cloud. Per maggiori informazioni consulta la pagina [Savings Plans](/links/public-cloud/savings-plan).

///

/// details | Come associare un’istanza Public Cloud al Savings Plan che ho appena ordinato?

Non è necessario eseguire alcuna azione. Le istanze già create (o in fase di creazione) e corrispondenti al modello scelto per il tuo [Savings Plan](/links/public-cloud/savings-plan) saranno integrate automaticamente, a condizione che la quantità di risorse del Savings Plan non sia esaurita.

///

/// details | Come aggiungere o rimuovere risorse alle istanze?

Tutte le istanze possono essere scalate verso una gamma superiore dalla stessa gamma dallo Spazio Cliente, cliccando su `Modifica`{.action} nella pagina dell'istanza. Se lanciata con l'opzione "flex", è possibile ridimensionarla verso un modello inferiore. Questa opzione richiede una dimensione disco di 50 GB per tutti i modelli e permette quindi il ridimensionamento in entrambe le direzioni.
In tutti i casi, il ridimensionamento di un'istanza comporta il riavvio.

///

/// details | Le istanze Public Cloud sono compatibili con cloud-init?

Sì, le immagini Cloud fornite da OVHcloud includono gli script cloud-init che permettono di personalizzare le istanze all'avvio. L'infrastruttura fornisce le informazioni di personalizzazione dell'istanza tramite un server di metadati contattato direttamente da cloud-init.

///

/// details | È possibile la virtualizzazione nell'istanza?

Sì e no.

Sì, perché l'opzione è attiva (nella tua istanza è visibile la *flag CPU VMX*). Puoi quindi utilizzare qualsiasi soluzione di virtualizzazione nella tua istanza (KVM, QEMU, VirtualBox, Xen, HyperV, ecc...).

No, perché una volta effettuata una live-migrazione della tua istanza (e questo può avvenire in qualsiasi momento, basandosi sul ciclo di vita dell'hypervisor sottostante), il tuo kernel Linux potrebbe disfunzionare (kernel panic).

Per maggiori informazioni, consulta [la pagina](https://www.linux-kvm.org/page/Nested_Guests#Limitations).

///


### Connessione a un'istanza

/// details | Come connettersi a un'istanza Public Cloud?

La connessione avviene tramite una coppia di chiavi SSH da configurare durante la creazione dell'istanza Public Cloud.

Per effettuare questa operazione, consulta la guida [Creare e connettersi a un’istanza Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).

///

/// details | Ho perso o voglio cambiare la mia chiave SSH, come fare?

Se non riesci più a connetterti in seguito alla perdita della chiave privata, modifica la chiave pubblica della tua istanza passando in modalità Rescue.

In caso di perdita, consulta la guida [Sostituisci la tua chiave SSH in caso di perdita](/pages/public_cloud/compute/replacing_lost_ssh_key).

///

/// details | Come creare e gestire gli utenti OpenStack?

Per utilizzare le API Horizon o OpenStack, è necessario creare un utente OpenStack. È possibile crearne un numero illimitato.

Per effettuare questa operazione, consulta la guida [Creare e rimuovere un utente OpenStack](/pages/public_cloud/compute/create_and_delete_a_user).

///

### Backup

/// details | È possibile effettuare un backup dei server Public Cloud?

Dallo Spazio Cliente OVHcloud è possibile creare il backup di un’istanza in qualsiasi momento. e utilizzarlo per ripristinare una configurazione precedente o creare una nuova istanza. Questi backup vengono salvati e fatturati come le immagini in "Private Image". Le API OpenStack permettono di scaricare i file anche fuori dall’infrastruttura OVHcloud o su altri progetti.

Per eseguire questa operazione, consulta la guida [Effettuare lo Snapshot di un’istanza](/pages/public_cloud/compute/save_an_instance).

///

/// details | È possibile aumentare la dimensione di un volume in modo dinamico, continuando a scrivere sul disco?

No, per poter aumentare la dimensione di un volume è necessario scollegarlo.

///

/// details | C'è un numero massimo di volumi aggiuntivi associabili alle istanze?

Sì, a ogni istanza si può associare un massimo di 25 volumi aggiuntivi.

///

### Rete

/// details | Quanti indirizzi IPv6 vengono forniti con la mia istanza?

Ogni istanza viene fornita con un indirizzo IPv6.

///

/// details | È possibile modificare l'IP pubblico della tua istanza?

Gli IP pubblici sono assegnati automaticamente alle istanze e non sono quindi modificabili. Per utilizzare il controllo dell'IP pubblico di un'istanza, ti consigliamo di utilizzare un Additional IP. In questo modo, indipendentemente dall'indirizzo pubblico assegnato automaticamente all'istanza, hai la possibilità di aggiungere uno o più Additional IP alla tua istanza.

Per maggiori informazioni, consulta la guida [Acquista un Additional IP](/pages/public_cloud/public_cloud_network_services/additional-ip-buy).

///

/// details | Quanti Additional IP posso collegare a ciascuna istanza?

È possibile collegare fino a 256 Additional IP per istanza.

///

/// details | Come creare una rete privata tra server?

Il Public Cloud integra una soluzione SDN (Software-defined Network) che permette di creare reti private in modo dinamico e connetterle alle istanze tramite lo Spazio Cliente o tramite l'API.
Queste reti private sono basate sulla tecnologia vRack di OVHcloud comune agli altri servizi della società, come Private Cloud o i server dedicati. In questo modo è possibile far comunicare in modo isolato e sicuro tutti gli elementi dell'infrastruttura OVHcloud.

Per maggiori informazioni, consulta la guida [Configurazione della vRack Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

La rete privata dispone di default delle protezioni di rete native di Openstack. che includono diversi meccanismi come la protezione dallo spoofing IP.<br>
Per quanto riguarda le istanze, è possibile bloccare pacchetti di rete in base al tipo di utilizzo (pfSense, router, protocollo CARP, ecc...).

In caso di necessità, sarà necessario disattivare la funzione di `Port Security` sulla porta o rete privata.
Per maggiori informazioni, consulta la guida di [gestione delle regole di firewall e porta security sulle reti OpenStack CLI](/pages/public_cloud/compute/security_group_private_network).

Ulteriori informazioni sono disponibili alla pagina [documentazione OpenStack](https://docs.openstack.org/developer/dragonflow/specs/mac_spoofing.html) o alla pagina [superuser.openstack.org](https://superuser.openstack.org/articles/managing-port-level-security-openstack/).

///

### Sicurezza

/// details | In che modo vengono protetti i server?

OVHcloud protegge l'intera infrastruttura grazie alla sua soluzione anti-DDoS esclusiva. a cui è possibile aggiungere gruppi di sicurezza OpenStack: equiparabili a un firewall, sono gestiti direttamente a livello dell’infrastruttura OpenStack, a monte delle istanze.

Per maggiori informazioni, consulta la guida [Creare e configurare un gruppo di sicurezza su Horizon](/pages/public_cloud/compute/setup_security_group).

Queste protezioni, combinate alle ulteriori misure che puoi adottare sulle macchine, consentono di ottimizzare l’affidabilità dei deploy effettuati.

///

/// details | Come verificare se la tua istanza è vulnerabile alla falla MDS?

La vulnerabilità alla [falla MDS](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/mds.html) può essere verificata con il seguente comando:

```bash
cat /sys/devices/system/cpu/vulnerabilities/mds
```

Se il risultato è `Vulnerable`, non abbiate paura, l'hypervisor sottostante vi proteggerà.

Tuttavia, è possibile mitigare questa falla direttamente nell'istanza eseguendo un hard reboot dell'istanza [tramite lo Spazio Cliente OVHcloud](/pages/public_cloud/compute/first_steps_with_public_cloud_instance) o utilizzando un comando come questo:

```bash
openstack server reboot --hard $serverID
```

///

/// details | La tua istanza è ancora vulnerabile alla falla SSBD?

La vulnerabilità alla [falla SSBD](https://www.kernel.org/doc/html/latest/userspace-api/spec_ctrl.html) può essere verificata con questo comando:

```bash
cat /sys/devices/system/cpu/vulnerabilities/ssbd
```

Anche se il risultato è `Vulnerable`, la tua istanza è protetta in modo identico rispetto a questa falla.

Infatti, il *flag CPU SSBD* non è disponibile per la tua istanza perché può causare instabilità su alcuni OS.

///

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).
