---
title: 'Rilevare e bloccare la vulnerabilità L1TF'
slug: rilevare-bloccare-vulnerabilita-l1tf
excerpt: 'Come mitigare la falla di sicurezza L1TF'
section: Sicurezza
---

**Ultimo aggiornamento: 19/08/2019**

## Obiettivo

Dopo che la scoperta della vulnerabilità L1TF ("L1 Terminal Fault" o "Foreshadow") è stata resa nota pubblicamente, sono state rilasciate numerose procedure e patch volte a minimizzare l’esposizione a questo rischio.

**Questa guida ti mostra come proteggere le tue macchine da questa falla di sicurezza.**

## Prerequisiti

- Disporre di utente con accesso a vSphere
- Utilizzare la tecnologia Hyper-Threading sulle proprie macchine virtuali

## Procedura

La vulnerabilità L1TF si presenta in tre varianti:

|Variante|Vulnerabile|Patch correttiva|
|:---|:---:|:---:|
|L1 Terminal Fault - VMM (CVE-2018-3646)|Sì|No (solo mitigazione)|
|L1 Terminal Fault - OS (CVE-2018-3620)|No| |
|L1 Terminal Fault - SGX (CVE-2018-3615)|No| |

> [!primary]
> 
> L1 Terminal Fault - OS (CVE-2018-3620) [non colpisce gli hypervisor VMware](https://kb.vmware.com/s/article/55807) e [richiede l’acceso in locale al vCenter/VCSA](https://kb.vmware.com/s/article/52312).
>

> [!primary]
> 
> L1 Terminal Fault - SGX (CVE-2018-3615) [non colpisce gli hypervisor VMware](https://kb.vmware.com/s/article/55807): [https://kb.vmware.com/s/article/54913](https://kb.vmware.com/s/article/55807).
> 

Relativamente al servizio **Private Cloud OVH**, le soluzioni SDDC sono le uniche che potrebbero essere affette da questa vulnerabilità.

Per maggiori informazioni sul bug di sicurezza L1TF, leggi [questo articolo](https://www.ovh.com/world/news/articles/al479.ovh-l1-terminal-fault-l1tf-foreshadow-disclosure){.external-link}.

## Processo di mitigazione

> [!primary]
>
> Ti ricordiamo che le azioni descritte in questo paragrafo non permettono la correzione della falla di sicurezza, ma esclusivamente la disattivazione dell’Hyper-Threading sugli host ESXi. Per funzionare L1TF ha infatti bisogno di questa tecnologia e disabilitarla protegge pertanto l’infrastruttura dall’esposizione alla vulnerabilità.

Il processo di mitigazione, descritto in [questo articolo](https://kb.vmware.com/s/article/55806){.external-link} di VMware, comprende 3 fasi distinte.

### 1. Aggiornamento

OVH si occupa dell’aggiornamento del vCenter, ma l’applicazione del software correttivo sugli host ESXi è di responsabilità dell’utente. La patch è disponibile nell’[Update Manager](https://docs.ovh.com/it/private-cloud/usare_vmware_update_manager/){.external-link}.

Per visualizzare la lista completa delle patch rilasciate per gli host ESXi, consulta le [raccomandazioni sulla sicurezza di VMware](https://www.vmware.com/security/advisories/VMSA-2018-0020.html){.external-link}.

Una volta completato l’aggiornamento, nel riepilogo dell’host compare questo messaggio di alert:

![](images/warningMsg.png){.thumbnail}

### 2. Valutazione dell’ambiente

A questo punto gli host ESXi sono aggiornati, ma la patch non è stata ancora applicata.

Prima di procedere con questa operazione è importante essere consapevoli dei potenziali problemi descritti nell’[articolo di VMware](https://kb.vmware.com/s/article/55806){.external-link} citato precedentemente, e della probabile diminuzione delle prestazioni constatata ed esposta in [questo altro articolo](https://kb.vmware.com/s/article/55767){.external-link}.

### 3. Attivazione

Dopo aver valutato questi diversi elementi è possibile abilitare il parametro che consente di disattivare l’Hyper-Threading, accedendo alle impostazioni avanzate di sistema.

![](images/enableMitigation.png){.thumbnail}

Se necessario, è possibile utilizzare il filtro disponibile in alto a destra nella finestra.

L’operazione deve essere ripetuta su ogni host.

Per maggiori informazioni, consulta il punto 3 del paragrafo “Resolution” di [questo articolo di VMware](https://kb.vmware.com/s/article/55806){.external-link}.

> [!warning]
> 
> Se, dopo le opportune valutazioni, decidi di mantenere attivo l’Hyper-Threading, è possibile eliminare il messaggio di alert seguendo i passaggi descritti in [questo articolo](https://kb.vmware.com/s/article/57374){.external-link}.
> 
> ![](images/deleteWarning.png){.thumbnail}
> OVH sconsiglia una soluzione di questo tipo e non potrà in nessun modo essere ritenuta responsabile delle eventuali conseguenze di questa scelta. 
>

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.