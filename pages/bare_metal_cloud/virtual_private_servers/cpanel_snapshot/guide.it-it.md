---
title: Backup automatico - Kernel panic (cPanel)
excerpt: Come risolvere i problemi di blocco dei server cPanel durante il backup automatico OVHcloud
updated: 2023-06-06
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 06/06/2023**

## Obiettivo

Quando utilizzi la funzione di backup automatico su un VPS che esegue cPanel, puoi riscontrare casi in cui il tuo VPS viene bloccato nello stato di backup per troppo tempo e diventa inaccessibile. La causa principale è legata agli utenti di cPanel che utilizzano l'accesso Jailed Shell. che crea un "virtfs" sul tuo file system. 

Quando crei un backup del tuo VPS (nel caso di una sottoscrizione di backup automatici o di Snapshot), l'hypervisor comunica con il tuo VPS tramite il QEMU Guest Agent per bloccare il file system sul VPS prima di procedere al backup. Questo meccanismo permette di garantire che non vengano effettuate scritture sul disco durante l'esecuzione del backup e garantisce quindi la coerenza del backup.
<br>Tuttavia, quando autorizzi l'accesso a Jailed Shell, cPanel crea un "virtfs" che non può essere bloccato in questo modo. che si blocca e provoca un kernel panico.
<br>Esistono tre metodi per evitare che ciò accada:

1. Disattiva il QEMU Guest Agent
2. Non autorizzare Jailed Shell
3. Disattiva la sicurezza della partizione /tmp (non consigliata da cPanel, ma si tratta di un'opzione disponibile)

## Prerequisiti

- Disporre di un [VPS](https://www.ovhcloud.com/it/vps/) (VPS Value, Essential, Comfort o Elite) sul proprio account OVHcloud
- cPanel deve essere installato sul tuo server

## Procedura

Scegli tra le 3 opzioni e segui la sezione della guida che preferisci. Dovete seguirne una sola.
Siete pregati di scegliere attentamente perché ognuno ha i suoi vantaggi e svantaggi.

### Disattiva il QEMU Guest Agent

Per prima cosa, verifica se il QEMU Guest Agent è in corso di esecuzione sul tuo server. Per verificarlo, esegui questo comando:

```bash
systemctl status qemu-guest-agent
```

Lo stato del servizio è indicato accanto a "Active:". Se attivo o in corso di esecuzione, il servizio deve essere sospeso e disattivato per impedirne la riattivazione in futuro. utilizzando questi comandi:

```bash
systemctl stop qemu-guest-agent
systemctl disable qemu-guest-agent
```

### Passare da Jailed Shell a Normal Shell

Scopri le differenze tra Jailed Shell e Normal Shell [qui](https://support.cpanel.net/hc/en-us/articles/360051992634-Differences-Between-Normal-and-Jailed-Shell).

Per disattivare un ambiente Jailed Shell per tutti gli utenti, è necessario disattivare di default l'opzione jailshell nell'interfaccia "WHM's Tweak Settings" (WHM >> Home >>Server Configuration >>Tweak Settings).

Questa opzione ti permette di attivare/disattivare l'utilizzo di una Jailed Shell per i nuovi account e quelli utilizzati nelle seguenti interfacce:

1. L'interfaccia "WHM's Modify an Account" (WHM >> Home >>Account Functions >>Modify An Account).
2. L'interfaccia "WHM's Upgrade/Downgrade an Account" (WHM >> Home >>Account Functions >>Upgrade/Downgrade An Account).

Questa opzione non riguarda gli account che esistono già sul server ma che non hai ancora modificato.

Per disattivare l'ambiente Jailed Shell da un utente specifico, utilizza l'interfaccia "WHM's Manage Shell Access" (WHM >> Home >>Account Functions >>Manage Shell Access).

Tutte le informazioni sono disponibili nella [documentazione ufficiale cPanel](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#disable-or-remove-a-jailed-shell-environment).

> [!warning]
>
> Come indicato da cPanel, alcune funzionalità possono continuare a utilizzare le cartelle create da Jailed Shell. Nonostante la disattivazione dell'ambiente Jailed Shell, è possibile continuare a sperimentare difficoltà nella gestione dei backup.
>
> Se vuoi disattivare la funzionalità Jailed Shell ed eliminare le cartelle "virtfs" create, fai attenzione perché la cancellazione della directory "virtfs" può causare la perdita dei dati utente.
>
> Assicurati di aver effettuato tutti i backup necessari.

### Disattiva la sicurezza della partizione /tmp su cPanel

Ti ricordiamo che questo metodo non è consigliato da cPanel. Il suo utilizzo è a vostro rischio e pericolo. Se vuoi continuare con questa opzione, leggi gli step esatti a partire dalla [documentazione cPanel](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#harden-your-tmp-partition).

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
