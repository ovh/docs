---
title: Utilizza il desktop remoto con Microsoft 365 aps
legacy_guide_number: 2339
slug: office365-proplus-desktop-remoto
excerpt: Come installare e utilizzare Microsoft 365 aps su un desktop remoto (RDS) o un computer condiviso
section: Office
order: 04
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 06/09/2021**

## Obiettivo

Vuoi utilizzare la suite software presente nel pack Microsoft 365 aps su una macchina remota o condivisa. Per effettuare l'installazione è necessario seguire la procedura descritta in questa guida.

**Questa guida ti mostra come installare e utilizzare Microsoft 365 APS su un desktop remoto (RDS) o su un computer condiviso.**

## Prerequisiti

- Disporre di una licenza Microsoft 365 apps for entreprise (ex Office 365 ProPlus)
- Utilizza Microsoft Windows tramite desktop remoto (**R**emote **D**esktop **S**ervices)

> [!warning]
>
> La licenza Microsoft 365 Apps for business è incompatibile con un utilizzo via RDS e computer condivisi.
> 

## Procedura

Questa guida si basa sulle informazioni fornite nella guida Microsoft [Distribuire Microsoft 365 Apps mediante Servizi Desktop remoto](https://docs.microsoft.com/it-it/deployoffice/deploy-microsoft-365-apps-remote-desktop-services).

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVH non può fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione “Per saperne di più”.
> 

### Metodo 1: Configurazione manuale

L'installazione di un'offerta Microsoft 365 Apps for entreprise su un computer condiviso utilizzando i servizi Desktop remoto (RDS) non funziona senza una configurazione specifica. Senza questa impostazione, dovreste ottenere questo messaggio:

![email](images/4717.png){.thumbnail}

> [!primary]
>
> Se hai già installato la tua licenza Office 365 Proplus, è necessario **disinstallarla**.
>

- Una volta disinstallata la licenza, [clicca qui](https://www.microsoft.com/en-us/download/details.aspx?id=49117){.external} per scaricare il tool Microsoft 365.


- **Esegui** il tool di distribuzione sulla tua macchina.


- Modifica il file `configuration.xml`.

![office 365](images/4720.png){.thumbnail}

Modifica il file di `configuration.xml` e modifica queste righe:

```xml
Display Level="None" AcceptEULA="True"
Property Name="SharedComputerLicensing" Value="1"
```

Se queste righe non esistono, è possibile copiarle e incollarle nel file.

- Salva le modifiche effettuate. Apri un terminale powershell ed esegui questi due comandi dalla cartella in cui si trova il file `configuration.xml`:

```powershell
./setup.exe /download configuration.xml
```

poi

```powershell
./setup.exe /configure configuration.xml
```
> [!primary]
>
> L'esecuzione di questi comandi può richiedere alcuni minuti.

- Apri l'editor del registro di windows eseguendo `Regedit` e segui la procedura seguente:

```powershell
HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Office\\ClickToRun\\Configuration
```

- Verifica la chiave seguente:

```powershell
SharedComputerLicensing
```
Assicurati che il suo valore sia a `1`. Se questa chiave non esiste, puoi crearla.

![email](images/4723.png){.thumbnail}

- Avvia un'applicazione della suite Office 365, ti verrà chiesto di inserire il tuo nome utente e la password.

![email](images/4724.png){.thumbnail}

- Adesso puoi utilizzare la tua suite Office 365 dal tuo PC condiviso utilizzando i servizi Desktop remoto (RDS).

![email](images/4726.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
