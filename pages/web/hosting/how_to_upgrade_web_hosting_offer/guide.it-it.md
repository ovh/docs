---
title: "Fai evolvere la tua offerta di hosting Web"
excerpt: Come modificare la formula di abbonamento della tua offerta di hosting OVHcloud
slug: how_to_change_web_hosting_offer
section: Ottimizza il tuo sito
order: 02
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 22/06/2022**

## Obiettivo

Il tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) ti permette di aumentare le capacità delle tue [offerte di hosting Web](https://www.ovhcloud.com/it/web-hosting/) per disporre di un hosting più potente, di più spazio di archiviazione, di database, di indirizzi email o di funzionalità supplementari come le [mailing list](https://docs.ovh.com/it/emails/gestire_e_utilizzare_una_mailing_list/) (a partire dall'[offerta Pro](https://www.ovhcloud.com/it/web-hosting/professional-offer/)) o il servizio SQL privato](https://www.ovhcloud.com/it/web-hosting/options/private-sql/) (incluse le offerte della [gamma Performance](https://www.ovhcloud.com/it/web-hosting/performance-offer/).

**Questa guida ti mostra come aggiornare la tua offerta di hosting OVHcloud senza interruzioni.**

## Prerequisiti

- Disporre di una [offerta di hosting web](https://www.ovhcloud.com/it/web-hosting/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## In pratica

> [!warning]
>
> **Avant** tout changement sur votre abonnement actuel, vérifiez si vous êtes concerné par l'une de ces questions :
>
> - [Comment faire évoluer mon offre gratuite Start 10M vers une offre d'hébergement web ?](#start10m)
> - [Comment bénéficier d'un gain de performance temporaire sur mon offre d'hébergement performance ?](#boost)
> - [Vais-je perdre le temps restant sur mon offre d'hébergement actuelle lors de mon changement d'offre ?](#billing)
> - [Est-il possible de changer mon offre actuelle vers une offre inférieure ?](#checks)
>

Prima di effettuare la modifica verso una gamma inferiore, verifica i 6 elementi seguenti:

### Modifica la tua offerta di hosting <a name="modify"></a>

Per modificare il tuo abbonamento, accedi alla sezione `Web Cloud`{.action} dello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Clicca su `Hosting`{.action} e seleziona l'hosting interessato.

Nella `Abbonamento`, clicca sul pulsante `...`{.action} a destra di `Servizio` > `Modifica offerta`{.action}.

![change_plan](images/change_plan.png){.thumbnail}

Seleziona il tuo nuovo abbonamento e la sua durata. Conferma i contratti e clicca su `Invia`{.action}.

### Verifica che il tuo hosting sia compatibile con un'offerta inferiore <a name="checks"></a>

> [!warning]
>
> La modifica del tuo abbonamento per un'offerta che emette meno risorse è possibile solo se si tratta dell'offerta **immediatamente inferiore**. 
> Ad esempio, non sarà possibile passare da una formula *Performance 2* a una formula *Pro* in una sola operazione.
> Dovrai **prima** far evolvere il tuo hosting dalla formula *Performance 2* verso l'offerta *Performance 1* **poi** verso l'offerta *Pro*.
>

Prima di effettuare la modifica verso una gamma inferiore, verifica i 6 elementi seguenti:

#### 1 - Numero di siti

L'offerta [Kimsufi Web](https://www.ovhcloud.com/it/web-hosting/old-web-hosting-offers/) non permette di avere più di un dominio sul [multisito](https://docs.ovh.com/it/hosting/configurare-un-multisito-su-un-hosting-web/) del tuo hosting.

Prima di passare dall'offerta [Personale](https://www.ovhcloud.com/it/web-hosting/personal-offer/) all'offerta [Kimsufi Web](https://www.ovhcloud.com/it/web-hosting/old-web-hosting-offers/), verifica che il tuo hosting comporti un solo sito.

#### 2 - Database Start SQL

Prima di passare a un'offerta inferiore, assicurati che la nuova offerta contenga sufficienti [database](https://www.ovhcloud.com/it/web-hosting/options/start-sql/). Verifica anche che siano di dimensioni sufficienti.

In caso contrario, rimuovi i database inutilizzati e riduci, se necessario, la quantità di dati che contengono. Questa quantità non dovrà superare la dimensione massima dei database della nuova offerta (per qualsiasi richiesta di assistenza sulle operazioni da effettuare, contatta i partner OVHcloud(https://partner.ovhcloud.com/it/)).

Una volta eliminati i dati sui tuoi database, utilizza la scheda `Database`{.action} nella sezione `Hosting`{.action} dello Spazio Cliente OVHcloud. Clicca sul pulsante `...`{.action} a destra della base interessata e su `Ricalcola la quota`{.action}.

![quota](images/quota.png){.thumbnail}

#### 3 - CloudDB

Se utilizzi l'offerta [CloudDB](https://docs.ovh.com/it/hosting/iniziare-a-utilizzare-clouddb/#attiva-il-tuo-server-clouddb-incluso-con-la-tua-offerta-di-hosting-web) inclusa con il tuo hosting [Performance](https://www.ovhcloud.com/it/web-hosting/performance-offer/) e vuoi passare al tuo hosting su un'offerta [Pro](https://www.ovhcloud.com/it/web-hosting/professional-offer/), accedi alla sezione `Hosting`{.action} del tuo Spazio Cliente OVHcloud.<br>
Clicca sul pulsante `...`{.action} nella sezione `Database privato`{.action} > `Scollega`{.action}.

![clouddb](images/clouddb.png){.thumbnail}

Questa azione ti permette di ordinare un'offerta CloudDB indipendente dal tuo abbonamento *Performance*. I dati del tuo server saranno conservati.

Se non vuoi conservare questi dati, è possibile eliminare il tuo SQL privato prima di passare all'offerta *Pro*: 

1. Salva i tuoi dati seguendo le istruzioni di questa [guida](https://docs.ovh.com/it/hosting/salvare-esportare-un-database/).<br>
2. Elimina il tuo server CloudDB dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Clicca sul tuo nome in alto a destra e seleziona `Gestione dei servizi`{.action}. Clicca sul pulsante `...`{.action} a destra della linea corrispondente e su `Elimina l'hosting SQL Privato`{.action}.

#### 4 - spazio FTP

Prima di passare a un'offerta inferiore, assicurati che la nuova offerta offra [spazio di storage FTP](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/) in modo che l'importazione dei file del tuo hosting attuale sia possibile.

La quota utilizzata sull'hosting FTP è visibile nella sezione `Hosting`{.action} dello Spazio Cliente OVHcloud. Clicca sulla scheda `Informazioni generali`{.action} e seleziona `Spazio Disco`.

![ftp](images/ftp.png){.thumbnail}

#### 5 - Indirizzi email

Verifica che la tua nuova offerta offra un numero sufficiente di indirizzi email disponibili. In caso contrario, rimuovi gli indirizzi superflui dopo averli [salvati](https://docs.ovh.com/it/emails/migrare-i-indirizzi-email-manualmente/) se necessario.

Per mantenere lo stesso numero di caselle di posta elettronica prima di passare a un'offerta inferiore, è possibile ordinare una nuova soluzione di posta **MX Plan**. Nella sezione `Email`{.action} dello Spazio Cliente, clicca sull'offerta corrispondente e poi sul pulsante `...`{.action} a destra di `Servizio` Infine clicca su `Modifica offerta`{.action}.

![mxplan](images/mxplan.png){.thumbnail}

#### 6 - Mailing list

La funzionalità [Mailing list](https://docs.ovh.com/it/emails/gestire_e_utilizzare_una_mailing_list/) è disponibile in opzione sugli hosting [Personale](https://www.ovhcloud.com/it/web-hosting/personal-offer/) e [Kimsufi Web](https://www.ovhcloud.com/it/web-hosting/old-web-hosting-offers/).

Per attivare un servizio di hosting su un'offerta [Personale](https://www.ovhcloud.com/it/web-hosting/personal-offer/), è necessario eliminare le mailing list o ordinare un servizio di posta che includa questa funzionalità (**MX Plan 100** o **MX Plan Full**) dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

Nella sezione `Email`{.action} del tuo Spazio Cliente, seleziona l'offerta e clicca su `...`{.action} a destra di `Servizio`{.action} Infine clicca su `Modifica offerta`{.action}.

#### Finalizzazione

Una volta verificati questi 6 elementi, è possibile [cambiare offerta](#modify).

### Casi particolari

#### Disponi di un'offerta Start 10M <a name="start10m"></a>

In caso di modifica dell'offerta [Start10M](https://docs.ovh.com/it/hosting/attivare_start10m/), ti verrà proposta solo [l'offerta Personale](https://www.ovhcloud.com/it/web-hosting/personal-offer/). Tuttavia, in seguito a una modifica all'offerta Personale, potrai far evolvere quest'ultima verso l'insieme delle nostre [offerte di hosting Web](https://www.ovhcloud.com/it/web-hosting/).

Segui [queste istruzioni](#modify) per effettuare la modifica dell'offerta.

#### Potenziare temporaneamente il tuo hosting Performance <a name="boost"></a>

Con l'[opzione Boost](https://www.ovhcloud.com/it/web-hosting/options/boost/), disponibile sulle nostre offerte *Performance*, è possibile aumentare temporaneamente le risorse CPU e RAM del tuo hosting per assorbire un picco improvviso di traffico. Se l'aumento prosegue nel tempo, è possibile [passare all'offerta Performance di livello superiore](#modify) per disporre di queste risorse in modo permanente.

> [!warning]
>
> Quando decidi di attivare l'opzione Boost, questa resta attiva e fatturata **fino a quando non l'hai disattivata**.

Se l'opzione **Boost** è perfetta per te, ecco le istruzioni per **attivare** o **disattivare** questa opzione sul tuo hosting.

> [!tabs]
> **Attiva l'opzione Boost**
>>
>> Nel riquadro `Informazioni generali` del tuo hosting, clicca sul pulsante`...`{.action} a destra di `Boost` e poi su `Boost` `{.action}.<br><br>
>> ![boost](images/enable_boost.png){.thumbnail}<br>
>>
> **Disattiva l'opzione Boost**
>>
>> Nella scheda `Più` informazioni del tuo hosting, clicca su `Boost`{.action}.<br>
>> Visualizzi una tabella con tutte le opzioni Boost, clicca su `Disattiva Boost`{.action}.<br><br>
>> ![boost](images/disable_boost.png){.thumbnail}<br>

#### Fatturazione in caso di cambio di offerta <a name="billing"></a>

Quando modifichi la tua offerta iniziale verso un'offerta superiore, viene applicato un calcolo *pro rata temporis* fino alla data di rinnovo successiva dell'abbonamento iniziale.
Questo calcolo corrisponde alla differenza di prezzo tra la tua offerta iniziale e la tua nuova offerta.

> **Esempio:**<br>
>
> Il 1° gennaio 2022 hai sottoscritto un abbonamento [Personale](https://www.ovhcloud.com/it/web-hosting/personal-offer/).
>
> Il 31 ottobre 2022, passa da questa offerta **Personale** a un abbonamento sull'offerta [Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/).<br>
>
> Di conseguenza, l'importo corrispondente alla durata residua dell'abbonamento **Personale** (2 mesi, dal 1o novembre 2022 al 1o gennaio 2023) viene automaticamente detratto dal costo del nuovo abbonamento **Pro** fino al 1o gennaio 2023. Pagherete solo la differenza.
> A partire dal 1° gennaio 2023, l'abbonamento Pro ti verrà fatturato alla tariffa in vigore.

Segui [queste istruzioni](#modify) per effettuare la modifica dell'offerta.

## Per saperne di più <a name="gofurther"></a>

[Consulta le statistiche e i log del tuo sito ospitato su un'offerta condivisa](https://docs.ovh.com/it/hosting/hosting_condiviso_consulta_le_statistiche_e_i_log_del_tuo_sito/)

[Ottimizza le performance del tuo sito](https://docs.ovh.com/it/hosting/web_hosting_ottimizza_le_performance_del_tuo_sito/)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
