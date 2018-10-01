---
title: 'Step 1 - La piattaforma VMware Horizon 7.1'
slug: piattaforma-horizon-7
excerpt: 'Scopri come connettersi per la prima volta a VMware Horizon 7.1'
section: Procedura
order: 1
---

**Ultimo aggiornamento: 21/09/2018**

## Obiettivo

Attraverso cinque guide dettagliate ti spiegheremo come utilizzare [Cloud Desktop Infrastructure](https://www.ovh.it/cloud/cloud-desktop/infrastructure/){.external}.

**Questa prima guida ti mostra come avviare la piattaforma VMware Horizon 7.1.**

## Prerequisiti

- Aver ricevuto via email i dati di accesso al [Cloud Desktop Infrastructure](https://www.ovh.it/cloud/cloud-desktop/infrastructure/){.external}

## Procedura

### Informazioni generali

La piattaforma VMware Horizon 7.1 è composta da diversi elementi:

- un’interfaccia di amministrazione VMware Horizon 7.1
- un URL per accedere al tuo primo gruppo di desktop virtuali (<i>pool</i>)
- una piattaforma [Private Cloud](https://www.ovh.it/private-cloud/){.external} per creare macchine virtuali (VM) e desktop virtuali


### Infrastruttura

![infrastructure de VMware Horizon 7.1](images/1200.png){.thumbnail}

Per non utilizzare le risorse a te dedicate per avviare un <i>pool</i> di desktop virtuali, OVH si occupa di creare, amministrare e supervisionare l’infrastruttura d’amministrazione (*ConnectionServer*, *Composer*, *ActiveDirectory*).

OVH distribuisce router virtuali (vRouter OVH) e *AccessPoint* che permettono ai <i>pool</i> di accedere alle risorse del Private Cloud consegnato inseme alla piattaforma.

Di default, con la consegna della piattaforma è prevista la configurazione di una rete privata con un *AccessPoint*. Successivamente, è possibile aggiungere altri <i>AccessPoint</i> attraverso lo Spazio Cliente.


### Consegna

Dopo aver effettuato il pagamento del tuo buono d’ordine, nell’arco di un’ora riceverai un’email come la seguente, contenente tutte le informazioni necessarie per effettuare l’accesso alla tua infrastruttura per creare e amministrare il tuo primo <i>pool</i>:  

> [!secondary]
>
> Gentile Cliente,
>
> Grazie per aver attivato l’opzione Virtual Desktop Infrastructure (VDI) sul tuo datacenter.
>
> 
>Di seguito trovi le credenziali che ti permettono di accedere al servizio:
>
> 
> * desktop administration access: https://#URL#/admin
> 
> * nome utente: #USERNAME#
> 
> * password: \#PASSWORD#
> 
> 
> Per gestire i template, è necessario connettersi al Private Cloud.
>
> Puoi effettuare l’accesso in due modi:
> 
>  1. attraverso il vSphere Client
> 
>   * link per il download del client: https://#VPNHOSTNAME#/client/VMware-viclient.exe
> 
>   * indirizzo IP: #VPNHOSTNAME#
>
> 
>  2. attraverso il vSphere Web Client
> 
>   *  https://#VPNHOSTNAME#/vsphere-client
>
> ATTENZIONE: vSphere utilizza le porte d’accesso 80, 443 e 8443. Per creare il tuo primo <i>pool</i>, utilizza le seguenti informazioni:
>
> 
> * desktop access: https://#POOLURL#
> 
> * rete DHCP: #PORTGROUP#
>
> 
> Di seguito, i dieci utenti del dominio:
> 
> * vdi1: #USER1#
> 
> * vdi2: #USER2#
> 
> * vdi3: #USER3#
> ...
>
> 
> Se hai bisogno di assistenza per utilizzare la soluzione Cloud Desktop Infrastructure, non esitare a consultare la documentazione disponibile a questo indirizzo:
> 
>  
>[https://www.ovh.it/cloud/cloud-desktop/infrastructure/](https://www.ovh.it/cloud/cloud-desktop/infrastructure/){.external}
>
> 
> Puoi anche inviarci le tue domande e condividere la tua esperienza sulla nostra mailing list:
>
> 
> cdi@ml.ovh.net
> 
>  
> Ti ringraziamo per la fiducia e restiamo a tua disposizione per ulteriori informazioni.
> 
> Il team OVH
> 


Vediamo adesso come [creare template di desktop virtuali (_pool_)](https://docs.ovh.com/it/cloud-desktop-infrastructure/creare-template-pool/){.external}.


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.