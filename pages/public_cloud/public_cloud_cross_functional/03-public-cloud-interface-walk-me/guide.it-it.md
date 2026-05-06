---
title: "Scopri l’interfaccia Public Cloud"
excerpt: "Visita guidata dell'interfaccia Public Cloud per scoprire le diverse sezioni"
updated: 2026-04-07
---

## Obiettivo

Hai appena creato il tuo progetto Public Cloud e vuoi saperne di più sull'interfaccia utente all'interno dello Spazio Cliente OVHcloud.

**Scopri le sezioni principali dell'interfaccia Public Cloud nello Spazio Cliente OVHcloud.**

## Prerequisiti

- Aver creato un [primo progetto Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Percorso di navigazione:** `Public Cloud`{.action} > Seleziona il tuo project

---
<!-- CP-NAV-END:publiccloud-projects -->

## Procedura

Una volta creato il primo progetto Public Cloud, verrai reindirizzato all'interfaccia Public Cloud principale.

### Accesso alle informazioni del tuo account OVHcloud

I parametri del tuo account OVHcloud restano accessibili in qualsiasi momento, così come le notifiche o il cambio di lingua dallo Spazio Cliente.

### Il tuo progetto Public Cloud

Poiché è possibile gestire più progetti in base alle proprie quote, il nome e l'ID di ogni progetto rimangono sempre visibili, indipendentemente dalla schermata visualizzata. Questa informazione consente di sapere in qualsiasi momento in quale ambiente si sta lavorando. È possibile trovarla in qualsiasi momento nel menu di sinistra.

L'ID può essere necessario durante l'utilizzo della CLI, di alcune richieste di supporto o di altro tipo. Per copiarlo, clicca sull'icona a destra.

Per modificare il nome del progetto, accedi alla scheda `Impostazioni`{.action}. Inserisci un nuovo nome e clicca su `Aggiorna`{.action}.

### Il menu principale Public Cloud

|Sezione|Descrizione delle opzioni|
|---|---|
|**Compute**|Questa sezione permette di avviare le istanze, ovvero i server cloud disponibili su richiesta.|
|**Storage e Backup**|Qui troverai diverse soluzioni di storage e database, ciascuna adatta a esigenze specifiche.|
|**Network**|Questa sezione consente di connettere le risorse Public Cloud tra loro e con altri prodotti OVHcloud.|
|**Containers & Orchestration**|Questa sezione offre strumenti per automatizzare le architetture e guadagnare in flessibilità.|
|**Databases & Analytics**|Questi servizi aiutano a gestire le problematiche di Big Data e analisi dei dati.|
|**AI & Machine Learning**|Qui troverai gli strumenti OVHcloud dedicati all'intelligenza artificiale.|
|**Quantum**|Questa sezione raggruppa i servizi legati al calcolo quantistico.|
|**Management Interfaces**|Un unico link all'interfaccia Horizon.|
|**Impostazioni**|Questa sezione consente di configurare e gestire gli aspetti del progetto.|

### Le scorciatoie

Il centro dello schermo vi propone scorciatoie che permettono di accedere rapidamente agli assistenti di configurazione e alle guide più utili.

#### Aiuti alla creazione di risorse

Per ogni risorsa che vuoi creare, sarai accompagnato da un assistente di configurazione che, step by step, ti permetterà di impostare la risorsa in base alle tue necessità.

Nella maggior parte dei casi, sarà necessario scegliere la localizzazione della risorsa, il modello, alcuni parametri personalizzabili e, in alcuni casi, la modalità di fatturazione.

### Strumenti di gestione

Nel tuo progetto Public Cloud sono disponibili diversi strumenti di gestione per configurare risorse, utenti e impostazioni. Puoi accedervi dal menu di sinistra, in basso. Gli strumenti sono raggruppati in due sezioni principali: **Management Interfaces**, che contiene il link all'interfaccia Horizon, e **Impostazioni**, che raggruppa tutte le opzioni di configurazione del progetto (utenti, quote, SSH, fatturazione, contatti, ecc.).

|Ingresso del menu|Descrizione|
|---|---|
|**Horizon**|È l'[interfaccia grafica](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon) generalmente disponibile su OpenStack. e non viene modificata, permettendo agli utenti abituati a questa interfaccia di navigare facilmente.|
|**Utenti e ruoli**|Permette di [creare utenti](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) e attribuire loro un ruolo. Questi utenti permettono di accedere direttamente alle API o all'interfaccia Horizon. Ad esempio, puoi creare un utente per le tue operazioni di manutenzione classiche e un utente per i tuoi strumenti di automazione, come ad esempio Terraform.|
|**Quota e Region**|Questo strumento ti permette di gestire le localizzazioni e i limiti di risorse disponibili sul tuo progetto.<br><br>**Quota**: In base a determinati criteri (numero di fatture già pagate, utilizzo di altri prodotti OVHcloud), il nostro sistema applica delle quote (limiti) al numero di risorse che puoi creare, per evitare problemi di mancato pagamento. Di default, il sistema aumenta automaticamente le proprie quote quando vengono soddisfatti determinati criteri. Tuttavia, è possibile [aumentare manualmente una quota](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota#aumentare-la-quota-di-risorse-manualmente) tramite questo strumento.<br><br>**Localizzazioni**: Il Public Cloud è disponibile in diverse localizzazioni nel mondo. Inoltre, ogni localizzazione può includere diverse "regioni" (concetto specifico di OpenStack). Ad esempio, per un cliente europeo, la zona APAC (Asia Pacifica) è disattivata di default. Se questo è il tuo caso, puoi attivare altre regione da questo menu.|
|**Chiavi SSH**|Uno strumento che ti permette di [gestire le tue chiavi SSH](/pages/public_cloud/compute/creating-ssh-keys-pci) in modo centralizzato.|
|**Fatturazione**|Public Cloud che funziona in *pay as you go*, cioè il pagamento a consumo, le fatture vengono saldate alla fine del mese. In [questo menu](/pages/public_cloud/public_cloud_cross_functional/analyze_billing) è possibile monitorare i consumi correnti, consultare la previsione della prossima fattura e, ovviamente, consultare le fatture precedenti.|
|**Crediti e voucher**|Questo menu ti permette di consultare il consumo di un *voucher*, aggiungerne una o [aggiungere credito](/pages/account_and_service_management/managing_billing_payments_and_services/add_cloud_credit_to_project) direttamente al tuo progetto Public Cloud.|
|**Savings Plan**| Si tratta di un modello tariffario che offre sconti su risorse specifiche quando si opta per periodi di impegno fino a 36 mesi.|
|**Contatti e diritti**|Oltre alla possibilità di modificare il contatto tecnico o il contatto di fatturazione del tuo progetto, avrai la possibilità di [aggiungere altri contatti](/pages/public_cloud/compute/change_project_contacts) (account OVHcloud) per gestire tecnicamente il tuo progetto. È inoltre possibile aggiungere utenti in consultazione solo *read-only*.|
|**Parametri del progetto**|Questo tool ti permette di configurare i parametri generali del progetto come nome, configurazione come "progetto predefinito dell'account", compatibilità HDS o [eliminare il tuo progetto Public Cloud](/pages/public_cloud/public_cloud_cross_functional/delete_a_project).|

### Gestione dei servizi

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/2mHcXQC6mTM?si=8_0aQCfBtmumGRbh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> [!primary]
>
> In questa sezione, ti presentiamo una panoramica delle diverse opzioni di gestione dei servizi offerti da OVHcloud, attraverso tre strumenti principali: lo Spazio Cliente OVHcloud, Horizon e l'API OpenStack. Ognuno di questi strumenti è stato progettato per soddisfare esigenze specifiche in base al livello di esperienza, alle preferenze di gestione e ai requisiti di prestazioni e personalizzazione.
>
> La matrice seguente confronta le caratteristiche principali di ogni strumento per aiutarvi a scegliere la soluzione più adatta alle vostre esigenze. Che tu sia un principiante, un utente intermedio o un esperto di automazione, questo confronto ti permetterà di capire meglio i vantaggi, la facilità d'uso, i livelli di competenza richiesti e la scalabilità di ogni strumento.
>

| Criteri/Caratteristiche                   | Spazio Cliente OVHcloud | Horizon | OpenStack API |
| ------------------------------------------- | ---------------------- | ------- | ------------- |
| Vantaggi principali                        | Interfaccia intuitiva, ideale per una gestione rapida. | Offre maggiore controllo per gli utenti esperti, con una visualizzazione avanzata delle impostazioni. | Automazione completa con integrazione perfetta con altri strumenti. |
| Livello di competenza richiesto                 | Accessibile a tutti, ideale per i principianti o le esigenze semplici | Intermediario, richiede una certa esperienza (Amministratori di sistema, Ingegneri Cloud...) | Avanzato, richiede competenze di scripting/API (Architetti Cloud, Ingegneri DevOps, Esperti in automazione) |
| Facilità di utilizzo                      | Intuitiva e accessibile | Avanzate ma visive | Tecnico |
| Personalizzazione                            | Debole: ideale per configurazioni standard e veloci con controllo avanzato limitato. | Media - Interfaccia grafica con impostazioni avanzate (rete, storage, ecc.), anche se limitate dall'interfaccia utente. | Molto elevata - Personalizzazione quasi completa via API, con possibilità di creare script, workflow automatizzati e architetture su misura. |
| Performance e scalabilità                 | Prestazioni limitate e scalabilità di base. Ideale per installazioni di piccole dimensioni o non critiche. La scalabilità è generalmente manuale e più lenta. Ideale per ambienti statici o piccoli progetti. | Prestazioni medie con una migliore gestione della scalabilità tramite interfaccia grafica. Scalabilità più rapida rispetto allo Spazio Cliente OVHcloud, ma limitata dall'interfaccia. Ideale per progetti di medie dimensioni o che richiedono una certa scalabilità. | Prestazioni ottimali e scalabilità completa. Permette deploy massivi, automatizzati e rapidi tramite script o strumenti terzi. Ideale per infrastrutture dinamiche, carichi pesanti e ambienti che richiedono elevata elasticità. Consigliato per architetture critiche. |
| Perimetri di utilizzo (Compute)          | - Creazione e gestione semplificata delle macchine virtuali (VM).<br> - Ridimensionamento delle VM dopo la creazione (modifica del modello flavor a caldo o a freddo, in base alle risorse disponibili).<br> - Selezione di configurazioni standard per le VM (RAM, CPU, storage).<br> - Gestione delle azioni essenziali: avvio, arresto ed eliminazione delle VM.<br> - Accesso agli Snapshot per backup rapidi e ripristini semplificati.<br> - Assegnazione e gestione degli indirizzi Floating IP.<br> - Creazione e gestione base dei dischi aggiuntivi.<br> - Supervisione delle risorse con monitoraggio essenziale (CPU, memoria, storage). | - Gestione avanzata degli accessi: supporto del controllo degli accessi basato sui ruoli (RBAC) per una gestione multiutente sicura.<br> - Amministrazione di rete avanzata: creazione e gestione di reti private complesse associate alle macchine virtuali (reti interne, sottoreti).<br> - Installazione di VM con configurazioni di rete specifiche, inclusa la gestione di più interfacce di rete.<br> - Utilizzo di immagini personalizzate per la creazione di VM, in alternativa alle immagini standard proposte da OVHcloud.<br> - Integrazione di workflow preconfigurati con Horizon per automatizzare deploy e configurazioni. | - Automazione completa: tutte le azioni disponibili nello Spazio Cliente OVHcloud e Horizon sono eseguibili via API, con la possibilità di automatizzarle e scriverle.<br> - Implementazione di infrastrutture in modalità Infrastructure as Code (IaC) con strumenti come Terraform, Ansible o script personalizzati.<br> - Integrazione con pipeline CI/CD per distribuzioni automatiche (ad esempio, integrazione con GitLab CI).<br> - Gestione avanzata delle quote di risorse (numero di CPU, RAM totale, ecc.).<br> - Scalabilità dinamica: adattamento automatico delle istanze in funzione del carico tramite API o script.<br> - Monitoring e raccolta di metriche personalizzate via API, offrendo maggiore granularità rispetto all'interfaccia Horizon o allo Spazio Cliente OVHcloud. |
| Perimetri di utilizzo (Network)          | - Creazione e gestione di reti private (Private Networks).<br> - Associazione di indirizzi Floating IP e di indirizzi Additional IP.<br> - Configurazione di base del routing (Basic Routing). | - Gestione avanzata delle regole di sicurezza tramite i gruppi di sicurezza (Security Groups).<br> - Visualizzazione delle topologie di rete per una gestione semplificata.<br> - Supporto completo delle subnet IPv6 per una connettività moderna.<br> - Configurazione dei criteri QoS (Quality of Service) per assegnare la priorità alle risorse di rete. | - Accesso a tutte le funzionalità disponibili su Horizon e sullo Spazio Cliente OVHcloud.<br> - Creazione di percorsi personalizzati per una gestione di rete più flessibile.<br> - Configurazione precisa delle policy QoS (Quality of Service).<br> - Gestione avanzata dei VRRP (Virtual Router Redundancy Protocol) per assicurare la ridondanza dei router.<br> - Automazione delle azioni di rete tramite script (Infrastructure as Code).<br> - Integrazione con le soluzioni SDN (Software-Defined Networking) per una gestione agile della rete. |
| Perimetri di utilizzo (Storage & Backup) | - Creazione e gestione dei volumi di storage: Object Storage, Block Storage e File Storage.<br> - Backup automatico di base (Snapshot) dei volumi, con possibilità di ripristino.<br> - Associazione dei volumi di storage alle istanze per un accesso semplificato.<br> - Gestione dei container Object Storage (Swift) per organizzare i dati.<br> - Visualizzazione dello stato dei volumi e dello spazio di storage utilizzato.<br> Aggiunta e gestione di file in un Object Storage. | - Gestione avanzata degli Snapshot: conservazione, replica e altre opzioni per un controllo preciso dei backup.<br> - Gestione dettagliata delle condivisioni di volumi (multi-attach) per una maggiore flessibilità.<br> - Creazione e gestione dei backup pianificati con policy di backup personalizzabili.<br> - Monitoraggio dell'utilizzo delle quote di storage per un monitoraggio ottimale dello spazio disponibile. | - Funzionalità accessibili via Horizon e dallo Spazio Cliente OVHcloud.<br> - Integrazione e automazione tramite script (Infrastructure as Code) per una gestione fluida.<br> - Configurazione avanzata delle condivisioni di rete (NFS, CIFS) per una maggiore flessibilità nell'organizzazione dei file.<br> - Gestione accurata dei metadati degli oggetti in Object Storage per un controllo ottimale dei dati.<br> Configurazione avanzata di replica e versioning degli oggetti per la massima disponibilità e il controllo completo delle versioni.<br> - Accesso diretto all'API Swift per una facile integrazione con strumenti di terze parti.<br> - Creazione di workflow personalizzati per automatizzare e gestire in modo efficiente i processi di backup. |

## Per saperne di più

[Creare e connettersi a un’istanza Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](/links/professional-services) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra [Community di utenti](/links/community).