---
title: "Installare l'agente Prometheus su un'istanza Public Cloud"
excerpt: "Scopri come installare Prometheus Node Exporter o Windows Exporter su un'istanza Public Cloud OVHcloud per raccogliere metriche"
updated: 2026-01-28
---

## Obiettivo

Prometheus è un sistema di monitoraggio e un database di serie temporali. È possibile installare e utilizzare il suo agente su istanze Public Cloud OVHcloud per raccogliere metriche dai propri server e applicazioni.

**Scopri come installare Prometheus Node Exporter o Windows Exporter su un'istanza Public Cloud OVHcloud.**

> [!warning]
> 
> OVHcloud mette a disposizione servizi la cui responsabilità è vostra. Essendo noi privi di accesso a tali macchine, non ne siamo gli amministratori e non potremo fornire alcun supporto. È quindi a voi che compete la gestione software e la sicurezza quotidiana.
>
> Mettiamo a disposizione questa guida per accompagnarvi al meglio in attività comuni. Tuttavia, vi consigliamo di contattare un [fornitore specializzato](/links/partner) in caso di difficoltà o dubbi riguardo all'amministrazione, all'utilizzo o alla sicurezza di un server. Non esitate a visitare il nostro [forum comunitario](/links/community) per interagire con altri utenti.
>

## Prerequisiti

- [Creare un'istanza dallo Spazio Cliente OVHcloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
- [Disporre di un accesso amministratore all'istanza](/pages/public_cloud/compute/public-cloud-first-steps).
- Un server Prometheus in esecuzione e accessibile dall'istanza.

## Procedura

Segui questi passaggi per installare l'agente Prometheus **Node Exporter** o **Windows Exporter** sulla tua istanza Public Cloud OVHcloud per raccogliere metriche.

### Passo 1: Connettersi all'istanza

Connettiti all'istanza tramite SSH:

```bash
ssh root@<INSTANCE_IP>
```

Sostituisci `<INSTANCE_IP>` con l'indirizzo IP pubblico della tua istanza.

> [!primary]
>
> Su Windows, utilizza PowerShell con SSH o un client SSH come [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) se preferisci utilizzare un'interfaccia a riga di comando.
>
> Per Windows Server con interfaccia grafica, puoi anche utilizzare il RDP (Remote Desktop).
>

### Passo 2: Aggiornare il sistema

Assicurati che i pacchetti del tuo sistema siano aggiornati:

> [!tabs]
> Per Debian / Ubuntu
>>
>> ```bash
>> sudo apt update && sudo apt upgrade -y
>> ```
>>
> Per CentOS / RHEL
>>
>> ```bash
>> sudo yum update -y
>> ```
>>
> Per Windows
>>
>> Non è richiesto alcun aggiornamento specifico per Windows Exporter. Puoi eventualmente verificare che il sistema sia aggiornato tramite Windows Update.
>>

### Passo 3: Creare un utente Prometheus (opzionale)

La creazione di un utente dedicato per Node Exporter migliora la sicurezza su Linux, ma è opzionale per Windows Exporter su Windows.

> [!tabs]
> Per Linux
>>
>> ```bash
>> sudo useradd --no-create-home --shell /bin/false prometheus
>> ```
>>
>> - Questo crea un utente con permessi limitati per eseguire Node Exporter.
>> - Consigliato in produzione per ridurre i rischi di sicurezza.
>> - È possibile quindi avviare Node Exporter sotto questo utente tramite systemd.
>>
> Per Windows
>>
>> > [!primary]
>> >
>> > **Nota**: Esegui questi comandi PowerShell all'interno della VM tramite SSH.
>> >
>>
>> ```powershell
>> New-LocalUser "prometheus" -NoPassword -Description "User for Windows Exporter"
>>
>> Add-LocalGroupMember -Group "Users" -Member "prometheus"
>> ```
>>
>> **Nota**: Windows Exporter può essere eseguito con l'utente corrente. La creazione di un utente dedicato è opzionale per un controllo degli accessi più rigoroso.
>>

### Passo 4: Scaricare Node Exporter / Windows Exporter

> [!tabs]
> Per Linux
>>
>> ```bash
>> # Sostituisci VERSION con l'ultima versione, ad esempio 1.10.2
>> VERSION="1.10.2"
>> wget https://github.com/prometheus/node_exporter/releases/download/v$VERSION/node_exporter-$VERSION.linux-amd64.tar.gz
>> tar xvf node_exporter-$VERSION.linux-amd64.tar.gz
>> cd node_exporter-$VERSION.linux-amd64
>> ```
>>
> Per Windows (tramite SSH / PowerShell sulla VM)
>>
>> > [!primary]
>> >
>> > `Invoke-WebRequest` richiede PowerShell 3.0 o superiore.
>> >
>>
>> ```powershell
>> mkdir C:\windows_exporter
>> cd C:\windows_exporter
>>
>> Invoke-WebRequest -Uri "https://github.com/prometheus-community/windows_exporter/releases/download/v0.31.3/windows_exporter-0.31.3-amd64.msi" -OutFile "windows_exporter.msi"
>> ```
>>
>> Tutto avviene direttamente all'interno della VM, non è necessario trasferire file dalla tua macchina locale.
>>

### Passo 5: Avviare Node Exporter / Windows Exporter

> [!tabs]
> Per Linux
>>
>> ```bash
>> ./node_exporter
>> ```
>>
>> - **Opzionale**: Configura un servizio systemd per eseguire Node Exporter automaticamente.
>> - Se utilizzi l'utente dedicato prometheus, assicurati che il servizio venga eseguito con questo account.
>>
> Per Windows (tramite SSH / PowerShell)
>>
>> ```powershell
>> msiexec /i windows_exporter.msi ENABLED_COLLECTORS=cpu,cs,logical_disk,net,os,service,system,textfile /qn
>> ```
>>
>> Su Windows Desktop o Core, puoi eseguirlo direttamente in PowerShell o configurarlo come servizio Windows.
>> 
>> È possibile personalizzare i collector; consulta la [documentazione ufficiale](https://github.com/prometheus-community/windows_exporter#collectors) per ottenere l'elenco completo.
>>

### Passo 6: Verificare Node Exporter / Windows Exporter

> [!primary]
>
> Node Exporter ascolta di default sulla porta 9100.
>
> Windows Exporter ascolta di default sulla porta 9182.
>
> Sostituisci `<PORT>` con 9100 per Linux o 9182 per Windows.
>

Il comando seguente permette di osservare metriche come l'utilizzo della CPU, della memoria, del disco e della rete:

```bash
curl http://<INSTANCE_IP>:<PORT>/metrics
```

> [!primary]
>
> Su Windows Desktop, puoi anche aprire un browser per verificare. Tuttavia, tramite SSH / PowerShell, utilizza `curl` o `Invoke-WebRequest`.
>

### Passo 7: Regole del firewall / sicurezza (OVHcloud)

Assicurati che la porta utilizzata dall'exporter sia aperta sia nel firewall della VM che nel tuo Security Group OVHcloud.

Limita l'accesso esclusivamente al server Prometheus per maggiore sicurezza.

> [!tabs]
> Per Linux (Debian / Ubuntu con UFW)
>>
>> ```bash
>> sudo ufw allow 9100/tcp
>> sudo ufw status
>> ```
>>
>> **Nota**: se UFW indica **Status: inactive**, significa che il firewall non è attivo sulla VM. La regola della porta è aggiunta ma non applicata.
>>
>> La sicurezza è principalmente gestita dal tuo Security Group OVHcloud.
>>
>> Se desideri attivare UFW, inizia autorizzando SSH per evitare di bloccare la tua connessione:
>>
>> ```bash
>> sudo ufw allow ssh
>> sudo ufw enable
>> sudo ufw status
>> ```
>>
> Per Windows
>>
>> Apri la porta 9182 nel firewall Windows:
>>
>> ```powershell
>> netsh advfirewall firewall add rule name="Windows Exporter" dir=in action=allow protocol=TCP localport=9182
>> ```
>>
>> Puoi anche verificare le regole con:
>>
>> ```powershell
>> netsh advfirewall firewall show rule name=all | findstr "9182"
>> ```
>>

### Passo 8: Connettere Node Exporter / Windows Exporter a Prometheus

1\. Modifica il file di configurazione di Prometheus sul tuo server Prometheus (prometheus.yml):

```yaml
scrape_configs:
  - job_name: 'node_exporter' # o 'windows_exporter'
    static_configs:
      - targets: ['<INSTANCE_IP>:9100'] # o 9182 per Windows Exporter
```

2\. Ricarica Prometheus:

> [!tabs]
> Per Linux
>>
>> ```bash
>> sudo systemctl reload prometheus
>> ```
>>
> Per Windows
>>
>> ```powershell
>> sc stop prometheus
>> sc start prometheus
>> ```
>>

3\. Le metriche Node Exporter o Windows Exporter della tua istanza OVHcloud dovrebbero ora apparire in Prometheus.

## Per saperne di più

[Documentazione ufficiale di Node Exporter](https://github.com/prometheus/node_exporter)

[Creare e configurare un gruppo di sicurezza in Horizon](/pages/public_cloud/compute/setup_security_group)

Contatta la nostra [Community di utenti](/links/community).