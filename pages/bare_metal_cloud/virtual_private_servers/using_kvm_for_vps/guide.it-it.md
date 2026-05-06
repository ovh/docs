---
title: Utilizzare la console KVM per accedere a un VPS
excerpt: Scopri come connettersi a un VPS tramite un browser Web grazie alla funzionalità KVM
updated: 2025-02-07
---

<style>
details>summary {
color:rgb(33, 153, 232) !important;
cursor: pointer;
}
details>summary::before {
content:'\25B6';
padding-right:1ch;
}
details[open]>summary::before {
content:'\25BC';
}
</style>

## Obiettivo

La console KVM per VPS, disponibile nello Spazio Cliente OVHcloud, permette di aprire una connessione al VPS nel browser Web, indipendentemente da un software di connessione aggiuntivo. In questo contesto, KVM sta per *keyboard, video, and mouse*, con riferimento al metodo emulato di input/output della connessione remota.

> [!primary]
>
> Ti ricordiamo che la console KVM non è una soluzione alternativa se hai perso l'accesso al sistema operativo del tuo VPS. Sarà necessario [utilizzare il Rescue mode del VPS per recuperare l'accesso al server](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password).

**Questa guida ti mostra come utilizzare la console KVM per accedere al tuo VPS.**

## Prerequisiti

- Un [VPS](/links/bare-metal/vps) nel tuo account OVHcloud

<!-- CP-NAV-START:baremetal-vps -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [VPS management](/links/control-panel/baremetal-vps)
- **Percorso di navigazione:** `Bare Metal Cloud`{.action} > `Server Privati Virtuali`{.action} > Seleziona il tuo VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## Procedura

### Come aprire la console KVM dallo Spazio Cliente OVHcloud

Nella scheda `Informazioni generali`{.action}, clicca sul pulsante `...`{.action} accanto al nome del tuo VPS nella sezione **Il tuo VPS**.

![Open KVM](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_kvm.png){.thumbnail}

### Come aprire la console KVM via API OVHcloud

/// details | Espandi questa sezione

Per chi non ha familiarità con l’API OVHcloud, consulta la nostra guida "[Iniziare a utilizzare le API OVHcloud](/pages/manage_and_operate/api/first-steps)".

Per recuperare l’URL di accesso KVM, apri questo endpoint:

> [!api]
>
> @api {v1} /vps POST /vps/{serviceName}/getConsoleUrl
>

Inserisci il nome interno del tuo VPS (`vps-x11x11xyy.vps.ovh.net`) nel campo `serviceName`.

Clicca sul pulsante `EXECUTE`{.action}.

L’URL di accesso verrà visualizzato nella sezione `RESPONSE`.

///

### Utilizzo della console KVM

Se accedi al KVM dal tuo Spazio Cliente OVHcloud, viene visualizzata una finestra pop-up. Per utilizzarlo a schermo intero, clicca sul link `Apri in una nuova finestra`{.action} nell’angolo in basso a destra. In genere verrà aperta una nuova scheda del browser.

![Connessione al KVM](images/kvm_screen.png){.thumbnail}

Lo schermo KVM visualizzato dipende dal sistema operativo e dallo stato individuale del VPS. Se richiesto, accedere con le credenziali di un account utente attivo.

È inoltre possibile utilizzare software client di terze parti per eseguire l'accesso.

#### Come cambiare il layout di tastiera

> [!primary]
>
> La tastiera della console KVM potrebbe avere un layout diverso dal proprio. Prima di immettere una password, digitare alcuni caratteri per verificare il layout, ad esempio [questa pagina](https://en.wikipedia.org/wiki/Keyboard_layout#Conventional_Latin-script_keyboard_layouts).
>

È possibile attivare il layout di tastiera per semplificare l'utilizzo della console. Immettere il comando seguente:

```bash
sudo dpkg-reconfigure keyboard-configuration
```

Se necessario, installare il pacchetto prima tramite il gestore di pacchetti della distribuzione (`sudo dnf install keyboard-configuration` o `sudo apt install keyboard-configuration`).

Viene visualizzato un menu grafico in cui è possibile selezionare un modello di tastiera.

![KVM](images/kvm_vps01.png){.thumbnail}

Utilizza i tasti freccia per accedere all’opzione più vicina al tuo hardware e clicca su `Enter`{.action}.

Nel menu seguente, seleziona il tuo paese.

![KVM](images/kvm_vps02.png){.thumbnail}

Nel terzo menu è possibile specificare il layout effettivo della tastiera.

![KVM](images/kvm_vps03.png){.thumbnail}

In base alle selezioni effettuate, dopo il terzo menu possono essere visualizzate altre opzioni.

Per applicare le modifiche, esegui questo comando:

```bash
sudo systemctl restart keyboard-setup
```

> [!primary]
>
> Questa modifica non persisterà se il server viene riavviato.
>

## Per saperne di più

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).