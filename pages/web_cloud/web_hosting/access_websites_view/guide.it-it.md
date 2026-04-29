---
title: "Visualizzare e gestire tutti i siti Web dallo Spazio Cliente OVHcloud"
excerpt: "Scopri come consultare e gestire tutti i siti Web dallo Spazio Cliente OVHcloud"
updated: 2026-05-04
---

## Obiettivo

L'interfaccia presentata in questa guida permette di visualizzare in modo centralizzato tutti i siti Web, indipendentemente dal loro hosting. Questa soluzione permette di tenere traccia in modo semplice delle funzionalità attive per ogni sito Web e fornisce un rapido accesso alle azioni essenziali. Questa interfaccia è particolarmente utile per le agenzie o i professionisti del Web che gestiscono un gran numero di domini ripartiti su più hosting.

**Questa guida ti mostra come visualizzare e gestire tutti i siti Web dallo Spazio Cliente.**

## Prerequisiti

- Disporre di una [soluzione di hosting Web](/links/web/hosting).

<!-- CP-NAV-START:web-website-view -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Siti Internet](/links/control-panel/web-website-view)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Siti Internet`{.action} > Seleziona il tuo sito web

---
<!-- CP-NAV-END:web-website-view -->

## Procedura

<!-- CP-STEPS-START:view-websites -->
Fai clic sulle schede qui sotto per visualizzare ogni **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Siti Internet](/links/control-panel/web-website-view). Visualizzerai una tabella con tutti i tuoi siti Web e le informazioni principali.
>>
>> ![visualizzazione_siti_internet](images/website_view_tab.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> La tabella mostra le seguenti colonne:
>>
>> - **Dominio**: mostra il nome di dominio principale del sito web, come configurato nella scheda "I miei siti" del tuo hosting.
>> - **Diagnostica**: informa se il tuo dominio punta correttamente verso l’hosting Web associato. Per ulteriori dettagli, consulta la nostra guida "[Come verificare l’associazione "nome di dominio / sito web"?](/pages/web_cloud/web_hosting/my_websites_diagnosis)".
>> - **Cartella di root**: indica la directory dell’hosting (www, app, public_html, ecc.) verso cui punta il dominio.
>> - **Nome del servizio**: nome tecnico del servizio, nel formato `FTPlogin.clusterXXX.hosting.ovh.net`.
>> - **Nome visualizzato**: alias personalizzato per identificare il proprio servizio nello Spazio Cliente.
>> - **Piano**: tipo di offerta associata all’hosting: Starter, Personale, Pro o Performance.
>> - **Git**: visualizza lo stato dell’integrazione Git sul sito Web. Per ulteriori dettagli, consulta la nostra guida "[Configurare e utilizzare Git con il tuo hosting web OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting)".
>> - **Log separati**: indica se nel dominio è attivo uno spazio di log (solo domini OVHcloud). Per maggiori informazioni, consulta la nostra pagina "[Segui e analizza il traffico dei tuoi siti Web](/links/web/hosting-traffic-analysis)".
>> - **CDN**: mostra lo stato della CDN: Attivo / Inattivo / N/D (offerta non compatibile). Per maggiori informazioni, consulta la nostra pagina "[Shared CDN](/links/web/hosting-options-cdn)".
>> - **SSL**: indica se l’SSL è attivo, permettendo una connessione sicura (**https://**). Per maggiori informazioni, consulta la nostra pagina "[Proteggi efficacemente il tuo sito web OVHcloud con un certificato SSL Premium](/links/web/hosting-options-ssl)".
>> - **Firewall**: indica se il firewall dell’applicazione è attivato o meno sul dominio. Per maggiori informazioni, consulta la nostra pagina "[Opzioni indispensabili per l’hosting Web](/links/web/hosting-options)".
>> - **Boost**: indica se l’opzione Boost è attiva, permettendo di aumentare temporaneamente le risorse CPU e RAM. Per ulteriori dettagli, consulta la nostra guida "[Hosting Web - Come far evolvere la tua offerta](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)".
>>
>> Cliccando su un elemento della tabella, si viene reindirizzati all’[hosting Web](/links/control-panel/web-hosting) interessato. Più precisamente:
>>
>> - Le colonne **Dominio**, **Diagnostica**, **Cartella di root**, **Git**, **Log separati**, **CDN**, **SSL** e **Firewall** reindirizzano alla scheda `I miei siti`{.action}.
>> - Le colonne **Nome del servizio**, **Nome visualizzato** e **Piano** reindirizzano alla scheda `Informazioni generali`{.action}.
>> - La colonna **Boost** reindirizza alla scheda `Boost`{.action}.
>>
>> > [!warning]
>> > Impossibile attivare i log separati per un dominio esterno. Questa opzione è disponibile solo per i domini registrati in OVHcloud.
>>
<!-- CP-STEPS-END:view-websites -->

## Per saperne di più <a name="go-further"></a>
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).
