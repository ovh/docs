---
title: "Fine del supporto Plesk e cPanel per VPS - Garantire la continuità dei servizi"
excerpt: "Scopri le date di fine del supporto dei sistemi operativi del tuo VPS OVHcloud che interessano le licenze Plesk e cPanel"
updated: 2025-07-22
---

## Obiettivo

Questa guida ti mostra come garantire la continuità dei tuoi servizi migrando il tuo VPS OVHcloud verso un sistema operativo compatibile con le ultime versioni di **Plesk** e **cPanel**, in seguito alla fine del supporto annunciato per diversi sistemi operativi.

**Informazioni sulle date di fine supporto dei sistemi operativi del VPS OVHcloud che interessano le licenze Plesk e cPanel.**

## Prerequisiti

- Disporre di una soluzione [VPS](/links/bare-metal/vps) con [distribuzione compatibile](/links/bare-metal/vps-os).

## Procedura

I software **Plesk** e **cPanel** annunciano la fine del supporto per i seguenti sistemi operativi:

| Sistema operativo | Prodotto       | Fine del support   |
| ----------------- | -------------- | ------------------ |
| Ubuntu 18.04      | Plesk          | **1 gennaio 2026** |
| Debian 10         | Plesk          | **1 gennaio 2026** |
| CentOS 7          | Plesk / cPanel | **1 gennaio 2026** |
| CloudLinux 7      | Plesk / cPanel | **1 gennaio 2026** |

Per ulteriori informazioni sul supporto, consultare la documentazione ufficiale:

- [Plesk](https://docs.plesk.com/release-notes/obsidian/system-requirements/).
- [cPanel](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/).

### Che fare concretamente?

> [!primary]
>
> Dal punto di vista **sicurezza**, continuare a utilizzare un sistema operativo non supportato ti espone ad attacchi.
> Consigliamo di leggere:
>
> - [le raccomandazioni di cPanel](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/).
> - [le raccomandazioni di Plesk](https://docs.plesk.com/en-US/obsidian/administrator-guide/plesk-administration/securing-plesk.59464/).

#### 1. Verifica il sistema attuale

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Bare Metal Cloud`{.action} e seleziona il server nella sezione `Server privati virtuali`{.action}.

![EOS Plesk cPanel](images/vpshome.png){.thumbnail}

Nella scheda `Home page`{.action}, trovi i dettagli del sistema operativo nella sezione `SO/Distribuzione` nel riquadro `Il tuo VPS`.

#### 2. Identificare un OS compatibile

Se il sistema operativo fa parte degli OS che non saranno più supportati, passa a un sistema compatibile consigliato dall’editor.

Consulta la documentazione ufficiale degli OS supportati:

- [Elenco degli OS supportati da Plesk](https://docs.plesk.com/release-notes/obsidian/system-requirements/).
- [Elenco degli OS compatibili con cPanel](https://docs.cpanel.net/installation-guide/system-requirements/).

#### 3. Migrare il servizio

**Opzione A — Reinstallazione manuale**

1. [Eseguire il backup dei dati](/pages/bare_metal_cloud/virtual_private_servers/using-automated-backups-on-a-vps) (contenuto web, database, email, ecc.).
2. Per reinstallare un OS compatibile dallo Spazio Cliente OVHcloud, consulta la sezione `Reinstalla il tuo VPS` della nostra guida [Iniziare a utilizzare un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).
3. [Reinstallare cPanel](/pages/bare_metal_cloud/virtual_private_servers/cpanel) o Plesk sul nuovo sistema.
4. Ripristinare i dati a partire dai backup.

**Opzione B — Migrazione via Plesk o cPanel**

Questo metodo è consigliato se è possibile distribuire un nuovo VPS con un sistema aggiornato contemporaneamente a quello precedente.

Ordina un nuovo VPS con OS compatibile, se non lo hai già fatto. [Installare cPanel](/pages/bare_metal_cloud/virtual_private_servers/cpanel) o Plesk.

Utilizza lo strumento di migrazione che preferisci. Questi strumenti permettono di trasferire automaticamente siti Web, database, account email e configurazioni da un VPS all'altro:

- Plesk Migrator - [Documentazione ufficiale](https://docs.plesk.com/en-US/obsidian/migration-guide/introduction.75496/).
- cPanel Transfer Tool - [Documentazione ufficiale](https://docs.cpanel.net/whm/transfers/transfer-tool/).

**Opzione C — Aggiornamento diretto del sistema operativo senza reinstallazione o migrazione (utenti avanzati)**

Se non riesci a creare un nuovo VPS, è possibile utilizzare alcuni strumenti per effettuare l'aggiornamento direttamente dal sistema operativo**, mantenendo installato Plesk o cPanel. Questo metodo è indicato per utenti esperti, in quanto comporta rischi in caso di esecuzione non corretta.

- Per **Plesk** (passaggio da CentOS 7 verso AlmaLinux 8), utilizza lo script `centos2alma` proposto nella [documentazione ufficiale di Plesk](https://github.com/plesk/centos2alma). Consulta anche le istruzioni dettagliate del [supporto di Plesk](https://support.plesk.com/hc/en-us/articles/12377714344983).

- Per **cPanel** (passaggio da CentOS 7 verso AlmaLinux 8), utilizza lo strumento **Elevate** proposto nella [documentazione ufficiale di cPanel](https://cpanel.github.io/elevate/).

> [!primary]
>
> Questi strumenti non sono garantiti al 100% e richiedono backup completi prima di procedere. Assicurati che il tuo VPS disponga di risorse sufficienti (RAM, CPU, disco).

## Per saperne di più <a name="go-further"></a>

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).
 
Contatta la nostra [Community di utenti](/links/community).