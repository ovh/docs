---
title: "Hosting Web: come far evolvere la tua offerta?"
excerpt: "Questa guida ti mostra come modificare il piano di abbonamento di un hosting Web OVHcloud"
updated: 2024-10-03
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Il tuo [Spazio Cliente OVHcloud](/links/manager) permette di aumentare la capacità delle tue [offerte di hosting Web](/links/web/hosting). In questo modo è possibile disporre di:

- hosting più potente;
- più spazio di archiviazione FTP;
- banche dati supplementari; 
- di indirizzi email aggiuntivi;
- funzionalità supplementari come le [mailing list](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_mailing_list) (a partire da [l'offerta Pro](/links/web/hosting-professional-offer)) o il [servizio Web Cloud Databases](/links/web/databases){.external} (incluso nelle [offerte Performance](/links/web/hosting-performance-offer).

**Questa guida ti mostra come far evolvere la tua soluzione di hosting OVHcloud senza interruzioni del servizio.**

## Prerequisiti

- Disporre di una [soluzione di hosting Web](/links/web/hosting)
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- essere almeno contatto "[Amministratore](/pages/account_and_service_management/account_information/managing_contacts)" dei servizi per i quali si desidera modificare l'abbonamento.

## Procedura

> [!warning]
>
> **Prima** di apportare qualsiasi modifica al tuo abbonamento attuale, verifica che una di queste domande sia valida per te:
>
> - [Come posso effettuare l'upgrade del mio hosting gratuito 100M verso una soluzione di hosting Web?](#100m)
> - [Come usufruire di un miglioramento temporaneo delle performance sul tuo piano di hosting performance?](#boost)
> - [Perderò il tempo residuo sul mio piano di hosting attuale quando cambierò offerta?](#billing)
> - [Posso cambiare la mia offerta attuale verso un'offerta inferiore?](#checks)
>

### Modificare il piano di hosting Web <a name="modify"></a>

Per modificare l’abbonamento, accedi al tuo [Spazio Cliente OVHcloud](/links/manager) nella sezione `Web Cloud`{.action}. Clicca su `Hosting`{.action} e seleziona l’hosting interessato.

Nel riquadro `Abbonamento`, clicca sul pulsante `...`{.action} a destra di `Servizio` e poi su `Modifica offerta`{.action}.

![change_plan](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/pro-change-plan.png){.thumbnail}

Seleziona il nuovo abbonamento e la durata. Conferma i contratti corrispondenti e clicca su `Invia`{.action}.

### Verifica la compatibilità dell’hosting Web con una soluzione della gamma inferiore <a name="checks"></a>

> [!warning]
>
> La modifica dell'abbonamento per un'offerta della gamma inferiore è possibile solo se si tratta dell'offerta **immediatamente inferiore**.
> Ad esempio, non è possibile passare da una formula *Performance 2* a una formula *Pro* con una sola operazione.
> È necessario **per prima cosa** far evolvere il tuo hosting Web dalla formula *Performance 2* verso l'offerta *Performance 1* **poi** verso l'offerta *Pro*.

**Prima di passare a una gamma inferiore**, assicurati di avere a disposizione i seguenti 6 punti:

#### 1 - Database Start SQL

Assicurati che la nuova offerta includa un numero sufficiente di [database](/links/web/hosting-options-startsql). Verificare inoltre che le dimensioni siano sufficienti.

In caso contrario, eliminare i database inutilizzati e, se necessario, ridurre la quantità di dati in essi contenuti. Questa quantità non dovrà superare la dimensione massima dei database della nuova offerta. Per assistenza sulle operazioni da effettuare, contatta i [partner OVHcloud](/links/partner).

In seguito alla cancellazione dei dati sui database, ricalcola la quota utilizzata. Per farlo, accedi al tuo [Spazio Cliente OVHcloud](/links/manager) e clicca sulla sezione `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Hosting`{.action} e seleziona l’hosting Web interessato. Nella nuova pagina, clicca sulla scheda `Database`{.action} e poi sul pulsante `...`{.action} a destra del database in questione e poi su `Ricalcola la quota`{.action}.

![quota](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/recalculate-quota.png){.thumbnail}

> [!primary]
>
> Ricalcolare la quota del tuo database può richiedere fino a **15 minuti**. Se la quota ricalcolata non viene visualizzata spontaneamente, è possibile ricaricare la pagina dal browser.
>

#### 2 - Web Cloud Databases

Se utilizzi l’offerta [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) inclusa con il tuo hosting Web [Performance](/links/web/hosting-performance-offer) e vuoi passare il tuo hosting Web su un’offerta [Pro](/links/web/hosting-professional-offer), dovrai innanzitutto dissociare l’offerta Web Cloud dal tuo hosting Web.<br>
Per farlo, accedi al tuo [Spazio Cliente OVHcloud](/links/manager) e clicca sulla sezione `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Hosting`{.action} e seleziona l’hosting Web interessato. Nella nuova pagina, rimani sulla scheda `Informazioni generali`{.action}. Nella colonna centrale `Configurazione`, clicca sul pulsante `...`{.action} a destra della voce `Web Cloud Databases`{.action} e poi su `Scollega`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/wcdb-detach.png){.thumbnail}

Questa azione permette di ordinare una soluzione Web Cloud Databases indipendente dal proprio abbonamento *Performance*. I dati del tuo server saranno conservati.

Se non vuoi conservare questi dati, puoi anche eliminare la tua soluzione Web Cloud Databases prima di passare all'offerta *Pro*: 

1. Esegui il backup dei dati seguendo le istruzioni riportate in questa [guida](/pages/web_cloud/web_cloud_databases/save-export-on-database-server).<br>
2. Elimina il server Web Cloud Databases dallo [Spazio Cliente OVHcloud](/links/manager). Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca in alto a destra sul tuo nome e poi sull’icona `Prodotti e servizi`{.action}. Clicca sul pulsante `...`{.action} a destra della linea della soluzione Web Cloud Databases/SQL Privato in questione e poi su `Elimina il tuo hosting SQL Privato`{.action}.

#### 3 - Spazio di archiviazione FTP

Assicurati che la nuova soluzione offra [spazio di storage FTP](/pages/web_cloud/web_hosting/ftp_connection) sufficiente per importare i file dell’hosting corrente.

Per verificare lo spazio di storage FTP utilizzato sull’hosting Web, accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Hosting`{.action} e seleziona l’hosting Web interessato. Visualizzi la pagina `Informazioni generali`{.action} con la voce `Spazio Disco`.

![ftp](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-disk-space.png){.thumbnail}

#### 4 - Indirizzi email

Verifica che la nuova offerta includa un numero sufficiente di indirizzi email disponibili. In caso contrario, elimina gli indirizzi email inutilizzati dopo aver [salvato](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) il loro contenuto, se necessario.

Per conservare lo stesso numero di caselle email **prima di passare l’hosting Web su un’offerta inferiore**, è possibile ordinare anche una nuova soluzione di posta **MX Plan**. Per farlo, accedi al tuo [Spazio Cliente OVHcloud](/links/manager) e clicca sulla sezione `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Email`{.action} e seleziona il servizio di posta in questione. Nella nuova pagina, nel riquadro `Abbonamento`{.action} e a destra della voce `Servizio`{.action}, clicca sul pulsante `...`{.action} e poi su `Modifica offerta`{.action}.

![mxplan](/pages/assets/screens/control_panel/product-selection/web-cloud/emails/general-information/change-solution.png){.thumbnail}

>[!primary]
>
> Se il pulsante `...`{.action} non è disponibile sul tuo servizio di posta, puoi scollegare il servizio di posta dal tuo hosting Web. Resta connesso allo [Spazio Cliente OVHcloud](/links/manager) nella sezione `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Hosting`{.action} e seleziona l’hosting Web interessato. Nella nuova pagina `Informazioni generali`{.action} e nel riquadro `Configurazione`{.action}, clicca sul pulsante `...`{.action} a destra della dicitura `Account email`{.action} e poi su `Scollega la tua opzione email`{.action}.
>

#### 5 - Mailing list

La funzionalità [Mailing list](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_mailing_list) è in opzione sugli hosting [Personale](/links/web/hosting-personal-offer).

Per attivare l’hosting Web su una soluzione [Personale](/links/web/hosting-personal-offer), è necessario eliminare le mailing list o ordinare un servizio di posta elettronica che includa questa funzionalità (**MX Plan 100** o **MX Plan Full***) dallo [Spazio Cliente OVHcloud](/links/manager).

Per farlo, accedi al tuo [Spazio Cliente OVHcloud](/links/manager) e clicca sulla sezione `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Email`{.action} e seleziona il servizio di posta in questione. Nella nuova pagina, nel riquadro `Abbonamento`{.action} e a destra della voce `Servizio`{.action}, clicca sul pulsante `...`{.action} e poi su `Modifica offerta`{.action}.

>[!primary]
>
> Se il pulsante `...`{.action} non è disponibile sul tuo servizio di posta, puoi scollegare il servizio di posta dal tuo hosting Web. Resta connesso allo [Spazio Cliente OVHcloud](/links/manager) nella sezione `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Hosting`{.action} e seleziona l’hosting Web interessato. Nella nuova pagina `Informazioni generali`{.action} e nel riquadro `Configurazione`{.action}, clicca sul pulsante `...`{.action} a destra della dicitura `Account email`{.action} e poi su `Scollega la tua opzione email`{.action}.
>

#### 6 - Utenti FTP

Assicurati che la nuova offerta contenga un numero sufficiente di utenti FTP.

Il numero di utenti FTP è visibile nello Spazio Cliente OVHcloud. Accedi alla sezione `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Hosting`{.action} e seleziona l’hosting Web interessato. Clicca sulla scheda `FTP-SSH`{.action}.

Visualizzi una tabella nella parte inferiore della pagina con tutti gli utenti FTP creati per il tuo hosting Web.

Per eliminare utenti FTP, clicca sul pulsante `...`{.action} a destra dell’utente FTP che vuoi eliminare e poi su `Elimina`{.action}.

![user FTP deletion](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/edit-ftp-user-2.png){.thumbnail} 

#### Completamento

Una volta verificati questi 6 punti, potrai realizzare il tuo [cambio di offerta](#modify).

### Casi particolari

#### Hai attivato un'offerta di hosting gratuito 100M <a name="100m"></a>

In caso di modifica da un'offerta di [hosting gratuito 100M](/pages/web_cloud/web_hosting/activate_start10m), verrà proposta solo [l'offerta Personale](/links/web/hosting-personal-offer). Tuttavia, dopo un cambio verso l’offerta Personale, è possibile farlo evolvere verso tutte le nostre [offerte di hosting Web](/links/web/hosting).

Segui [queste istruzioni](#modify) per modificare l’offerta.

#### Potenzia temporaneamente il tuo hosting Performance <a name="boost"></a>

Con l'[opzione Boost](/links/web/hosting-options-boost), disponibile sulle nostre soluzioni *Performance*, è possibile aumentare temporaneamente le risorse CPU e RAM dell’hosting Web per assorbire un aumento temporaneo del traffico. Se l'aumento dura nel tempo, puoi anche [passare all'offerta Performance di livello superiore](#modify) per disporre di queste risorse in modo permanente.

> [!warning]
>
> Quando decidi di attivare l'opzione Boost, questa rimane attiva e fatturata **fino a quando non la disattivi**.

Se l’opzione **Boost** è adatta alle tue esigenze, trovi qui sotto le istruzioni per **attivare** o **disattivare** questa opzione sul tuo hosting.

> [!tabs]
> **Attiva l'opzione Boost**
>>>
>>> Per attivare l’opzione Boost, accedi al tuo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Hosting`{.action} e seleziona l’hosting Web interessato. Nel riquadro `Informazioni generali` della pagina che appare, clicca sul pulsante `...`{.action} a destra di `Boost` e poi su `Boost`{.action}.<br><br>
>>>![boost](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/boost-my-hosting-plan.png){.thumbnail}<br>
>>>
> **Disattiva l'opzione Boost**
>>>
>>> Per disattivare l’opzione Boost, accedi al tuo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Hosting`{.action} e seleziona l’hosting Web interessato. Accedi alla scheda `Più` e clicca su `Boost`{.action}.<br>
>>> Visualizzi la tabella di utilizzo dell’opzione Boost e clicca su `Disattiva l’offerta Boost`{.action}.<br><br>
>>>![boost](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/boost-my-hosting-plan/deactivate-the-boost-plan.png){.thumbnail}<br>

#### La fatturazione in caso di modifica dell'offerta <a name="billing"></a>

**Caso 1**: quando si passa da un'offerta iniziale a una superiore, il calcolo del *prorata temporis* viene applicato fino alla successiva data di rinnovo dell'abbonamento iniziale.
Questo calcolo corrisponde alla differenza di prezzo tra il piano iniziale e il nuovo piano.

> **Esempio:**<br>
>
> Hai sottoscritto un abbonamento [Personale](/links/web/hosting-personal-offer) il 1° gennaio 2024.
>
> Il 31 ottobre 2024, passerai da questa offerta **Personale** a un abbonamento sull'offerta [Pro](/links/web/hosting-professional-offer).<br>
>
> Di conseguenza, l'importo corrispondente alla durata residua dell'abbonamento **Personale** (2 mesi, dal 1° novembre 2024 al 1° gennaio 2025) viene automaticamente sottratto dal costo del nuovo abbonamento **Pro**, fino al 1° gennaio 2025. Pagherete solo la differenza.
> A partire dal 1° gennaio 2025, ti sarà fatturato l'abbonamento **Pro** alla tariffa in vigore.

Segui [queste istruzioni](#modify) per modificare l’offerta.

**Caso 2**: quando si passa da un'offerta iniziale a una inferiore, il tempo di abbonamento rimanente per l'offerta iniziale viene perso definitivamente. Anche se hai ancora diversi mesi di abbonamento, non verrà effettuato alcun rimborso per il tempo restante. Dovrai quindi pagare direttamente l'intero importo dell'abbonamento dell'offerta inferiore.

> **Esempio:**<br>
>
> Hai sottoscritto un abbonamento [Pro](/links/web/hosting-professional-offer) il 1° gennaio 2024.
>
> Il 31 ottobre 2024, passerai da questa offerta **Pro** a un abbonamento sull'offerta [Personale](/links/web/hosting-personal-offer).<br>
>
> Di conseguenza, l'importo corrispondente alla durata restante dell'abbonamento **Pro** (2 mesi, dal 1° novembre 2024 al 1° gennaio 2025) viene perso.
A partire dal 1° novembre 2024, l'abbonamento **Personale** ti sarà fatturato direttamente alla tariffa in vigore (anche se hai pagato i 2 mesi restanti dell'offerta **Pro**).

Segui [queste istruzioni](#modify) per modificare l’offerta.

## Per saperne di più <a name="go-further"></a>

[Consultare le statistiche e i log di un sito ospitato su un servizio condiviso](/pages/web_cloud/web_hosting/logs_and_statistics)

[Ottimizzazione delle prestazioni del sito](/pages/web_cloud/web_hosting/optimise_your_website_performance)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).