---
title: "Fai evolvere la tua offerta di hosting Web"
excerpt: Come modificare la formula di abbonamento della tua offerta di hosting OVHcloud
slug: how_to_change_web_hosting_offer
section: Ottimizza il tuo sito
order: 2
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 19/05/2022**

## Obiettivo

Il tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) ti permette di aumentare le capacità delle tue [offerte di hosting Web](https://www.ovhcloud.com/it/web-hosting/) per disporre di un hosting più potente, di più spazio di archiviazione, di database, di indirizzi email o di funzionalità supplementari come le [mailing list](https://docs.ovh.com/it/emails/gestire_e_utilizzare_una_mailing_list/) (a partire dall'[offerta Pro](https://www.ovhcloud.com/it/web-hosting/professional-offer/) o il servizio SQL privato](https://www.ovhcloud.com/it/web-hosting/options/private-sql/) (incluse le offerte della [gamma Performance](https://www.ovhcloud.com/it/web-hosting/performance-offer/).

**Questa guida ti mostra come aggiornare la tua offerta di hosting OVHcloud senza interruzioni.**

## Prerequisiti

- Disporre di una [offerta di hosting web](https://www.ovhcloud.com/it/web-hosting/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## In pratica

> [!success]
> 
> **Hai bisogno di potenziare temporaneamente il tuo hosting?**
>
> Con l'[opzione Boost](https://www.ovhcloud.com/it/web-hosting/options/boost/), disponibile sulle nostre offerte *Performance*, potrai far evolvere temporaneamente le risorse del tuo hosting per assorbire un picco improvviso di traffico. Se l'aumento prosegue nel tempo, è possibile migrare verso una soluzione superiore per disporre di maggiori risorse in modo permanente.
>

### Importante - Fatturazione in caso di cambio di offerta

Quando modifichi la tua formula in corso di abbonamento, sulla tua nuova offerta si applica una *report di tempo*. Questo riporto corrisponde alla durata residua dell'abbonamento sulla tua offerta corrente.

**Esempio:**<br>
Passando da un'offerta [Personale](https://www.ovhcloud.com/it/web-hosting/personal-offer/) a un'offerta [Pro](https://www.ovhcloud.com/it/web-hosting/professional-offer/), mentre l'abbonamento in corso non è terminato.<br>
Di conseguenza, la durata residua sarà automaticamente **aggiunta** pro rata temporis al tuo nuovo abbonamento **Pro**.<br>
Il rinnovo durerà quindi **poco più di un anno** fino al prossimo rinnovo.

### Modifica la tua offerta di hosting <a name="modify"></a>

> [!primary]
>
> La modifica del tuo abbonamento per un'offerta che emette meno risorse è possibile solo se si tratta dell'offerta **immediatamente inferiore**. 
> Ad esempio, non sarà possibile passare da una formula *Performance 2* a una formula *Pro* in una sola operazione.
> Dovrai **prima** far evolvere il tuo hosting dalla formula *Performance 2* verso l'offerta *Performance 1* **poi** verso l'offerta *Pro*.
>
> I seguenti elementi riguardano le offerte a pagamento. Per far evolvere il tuo [hosting gratuito Start10M](https://docs.ovh.com/it/hosting/attivare_start10m/), segui queste [istruzioni](#start10m).
>

> [!warning]
>
> **Prima** ogni modifica del tuo abbonamento per un'offerta inferiore, verifica che l'utilizzo della tua offerta attuale sia compatibile con le caratteristiche del tuo prossimo [offerta di hosting](https://www.ovhcloud.com/it/web-hosting/).
>
> Per effettuare questa operazione, segui [queste istruzioni](#checks), effettua la modifica dell'offerta e ripeti queste operazioni per ogni operazione necessaria.
>

Per modificare il tuo abbonamento, accedi alla sezione `Web Cloud`{.action} dello Spazio Cliente OVHcloud(https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Clicca su `Hosting`{.action} e seleziona l'hosting interessato.

Nella `Abbonamento`, clicca sul pulsante `...`{.action} a destra di `Servizio` > `Modifica offerta`{.action}.

![change_plan](images/change_plan.png){.thumbnail}

Seleziona il tuo nuovo abbonamento e la sua durata. Conferma i contratti e clicca su `Invia`{.action}.

### Fai evolvere il tuo hosting Start 10M verso un'offerta superiore <a name="start10m"></a>

> [!primary]
>
> La procedura seguente si applica **solo se hai attivato l'offerta di posta associata allo Start 10M**.
>
> Se non hai attivato il servizio di posta, le istruzioni del [paragrafo precedente](#modify) saranno sufficienti.
>

Non è possibile passare **direttamente** da un [hosting gratuito Start10M](https://docs.ovh.com/it/hosting/attivare_start10m/) a un'offerta a pagamento. Dovrai effettuare queste operazioni:

1. Salva, se necessario, i [file del tuo hosting](https://docs.ovh.com/it/hosting/exporter-son-site-web/#step-1-recupero-dei-file-del-tuo-spazio-di-storage-ftp) e i [messaggi della tua offerta email](https://docs.ovh.com/it/emails/migrare-i-indirizzi-email-manualmente/).<br>
2. Elimina il tuo Start10M Clicca sul tuo nome in alto a destra e seleziona `Gestione dei servizi`{.action}. Clicca sul pulsante `...`{.action} a destra del servizio interessato e poi su `Elimina subito l'hosting`{.action}.<br>
3. Crea un [ticket di assistenza](https://help.ovhcloud.com/it/faq/support/cant-reach-support-phone/) per richiedere, se vuoi, l'eliminazione accelerata della tua offerta (un indirizzo email Start10M viene conservato di default per 14 giorni, per evitare perdite di dati a causa di un errore di gestione).<br>
4. [Ordina una nuova offerta di hosting](https://www.ovhcloud.com/it/web-hosting/).<br>
5. Importa, se necessario, il tuo sito nel tuo [nuovo spazio di hosting](https://docs.ovh.com/it/hosting/hosting_condiviso_come_mettere_online_il_tuo_sito/#step-2-carica-i-file-del-sito-nello-spazio-di-storage).<br>
6. [Aggiungi il dominio del tuo sito al multisito della tua nuova offerta](https://docs.ovh.com/it/hosting/configurare-un-multisito-su-un-hosting-web/#step-2-aggiungi-un-dominio-o-un-sottodominio).<br>
7. [Ricevi se necessario il tuo indirizzo email](https://docs.ovh.com/it/emails/servizio_email_guida_alla_creazione_di_un_indirizzo_email/) e [importa i tuoi messaggi](https://docs.ovh.com/it/emails/migrare-i-indirizzi-email-manualmente/).

### Verifica che il tuo hosting sia compatibile con un'offerta inferiore <a name="checks"></a>

#### Numero di siti

L'offerta [Kimsufi Web](https://www.ovhcloud.com/it/web-hosting/old-web-hosting-offers/) non permette di avere più di un dominio sul [multisito](https://docs.ovh.com/it/hosting/configurare-un-multisito-su-un-hosting-web/) del tuo hosting.

Prima di passare dall'offerta [Personale](https://www.ovhcloud.com/it/web-hosting/personal-offer/) all'offerta [Kimsufi Web](https://www.ovhcloud.com/it/web-hosting/old-web-hosting-offers/), verifica che il tuo hosting comporti un solo sito.

#### Database Start SQL

Prima di passare a un'offerta inferiore, assicurati che la nuova offerta contenga sufficienti [database](https://www.ovhcloud.com/it/web-hosting/options/start-sql/). Verifica anche che siano di dimensioni sufficienti.

In caso contrario, rimuovi i database inutilizzati e riduci, se necessario, la quantità di dati che contengono. Questa quantità non dovrà superare la dimensione massima dei database della nuova offerta (per qualsiasi richiesta di assistenza sulle operazioni da effettuare, contatta i partner OVHcloud(https://partner.ovhcloud.com/it/)).

Una volta eliminati i dati sui tuoi database, utilizza la scheda `Database`{.action} nella sezione `Hosting`{.action} dello Spazio Cliente OVH. Clicca sul pulsante `...`{.action} a destra della base interessata e su `Ricalcola la quota`{.action}.

![quota](images/quota.png){.thumbnail}

#### CloudDB

Se utilizzi l'offerta [CloudDB](https://docs.ovh.com/it/hosting/iniziare-a-utilizzare-clouddb/#attiva-il-tuo-server-clouddb-incluso-con-la-tua-offerta-di-hosting-web) inclusa con il tuo hosting [Performance](https://www.ovhcloud.com/it/web-hosting/performance-offer/) e vuoi passare al tuo hosting su un'offerta [Pro](https://www.ovhcloud.com/it/web-hosting/professional-offer/), accedi alla sezione `Hosting`{.action} del tuo Spazio Cliente OVHcloud.<br>
Clicca sul pulsante `...`{.action} nella sezione `Database privato`{.action} > `Scollega`{.action}.

![clouddb](images/clouddb.png){.thumbnail}

Questa azione ti permette di ordinare un'offerta CloudDB indipendente dal tuo abbonamento *Performance*. I dati del tuo server saranno conservati.

Se non vuoi conservare questi dati, è possibile eliminare il tuo SQL privato prima di passare all'offerta *Pro*: 

1. Salva i tuoi dati seguendo le istruzioni di questa [guida](https://docs.ovh.com/it/hosting/salvare-esportare-un-database/).<br>
2. Elimina il tuo server CloudDB dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Clicca sul tuo nome in alto a destra e seleziona `Gestione dei servizi`{.action}. Clicca sul pulsante `...`{.action} a destra della linea corrispondente e su `Elimina l'hosting SQL Privato`{.action}.

#### spazio FTP

Prima di passare a un'offerta inferiore, assicurati che la nuova offerta offra [spazio di storage FTP](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/) in modo che l'importazione dei file del tuo hosting attuale sia possibile.

La quota utilizzata sull'hosting FTP è visibile nella sezione `Hosting`{.action} dello Spazio Cliente OVHcloud. Clicca sulla scheda `Informazioni generali`{.action} e seleziona `Spazio Disco`.

![ftp](images/ftp.png){.thumbnail}

#### Indirizzi email

Verifica che la tua nuova offerta offra un numero sufficiente di indirizzi email disponibili. In caso contrario, rimuovi gli indirizzi superflui dopo averli [salvati](https://docs.ovh.com/it/emails/migrare-i-indirizzi-email-manualmente/) se necessario.

Per mantenere lo stesso numero di caselle di posta elettronica prima di passare a un'offerta inferiore, è possibile ordinare una nuova soluzione di posta **MX Plan**. Nella sezione `Email`{.action} dello Spazio Cliente, clicca sull'offerta corrispondente e poi sul pulsante `...`{.action} a destra di `Servizio` Infine clicca su `Modifica offerta`{.action}.

![mxplan](images/mxplan.png){.thumbnail}

#### Mailing list

La funzionalità [Mailing list](https://docs.ovh.com/it/emails/gestire_e_utilizzare_una_mailing_list/) è disponibile in opzione sugli hosting [Personale](https://www.ovhcloud.com/it/web-hosting/personal-offer/) e [Kimsufi Web](https://www.ovhcloud.com/it/web-hosting/old-web-hosting-offers/).

Per attivare un servizio di hosting su un'offerta [Personale](https://www.ovhcloud.com/it/web-hosting/personal-offer/), è necessario eliminare le mailing list o ordinare un servizio di posta che includa questa funzionalità (**MX Plan 100** o **MX Plan Full**) dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

Nella sezione `Email`{.action} del tuo Spazio Cliente, seleziona l'offerta e clicca su `...`{.action} a destra di `Servizio`{.action} Infine clicca su `Modifica offerta`{.action}.

## Per saperne di più <a name="gofurther"></a>

[Consulta le statistiche e i log del tuo sito ospitato su un'offerta condivisa](https://docs.ovh.com/it/hosting/hosting_condiviso_consulta_le_statistiche_e_i_log_del_tuo_sito/)

[Ottimizza le performance del tuo sito](https://docs.ovh.com/it/hosting/web_hosting_ottimizza_le_performance_del_tuo_sito/)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
