---
title: "Come salvare le chiavi SSH nello Spazio Cliente"
excerpt: "Scopri come importare chiavi SSH pubbliche nello Spazio Cliente OVHcloud"
updated: 2024-12-04
---

## Obiettivo

Le coppie di chiavi vengono utilizzate per autenticare le connessioni SSH tra gli host, ad esempio tra il client locale del computer e un server remoto. Durante la reinstallazione di un server dedicato o di un VPS dallo Spazio Cliente, è possibile aggiungere una chiave pubblica al sistema operativo. L’archiviazione di chiavi SSH pubbliche nello Spazio Cliente OVH facilita questo processo.

**Questa guida ti mostra come archiviare le tue chiavi SSH pubbliche nello Spazio Cliente.**

## Prerequisiti

- Un [server dedicato](/links/bare-metal/bare-metal) o un [VPS](/links/bare-metal/vps) nel tuo account OVHcloud
- Accesso allo [Spazio Cliente OVHcloud](/links/manager)

> [!primary]
>
> Per maggiori informazioni sull'utilizzo delle chiavi SSH con i servizi [Public Cloud](/links/public-cloud/public-cloud), consulta la nostra guida dedicata:
>
> [Come creare chiavi SSH con OpenSSH per le istanze Public Cloud](/pages/public_cloud/compute/creating-ssh-keys-pci)

## Procedura

Se non hai ancora creato coppie di chiavi SSH, consulta le nostre guide:

- [Creare e utilizzare chiavi SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Tutorial - Come utilizzare PuTTY per connessioni SSH e autenticazione](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca sul nome dell’account in alto a destra e apri `Catalogo prodotti`{.action}.

![products and services](/pages/assets/screens/control_panel/product-selection/right-menu/my-solutions-and-services.png){.thumbnail}

Nella sezione `I miei servizi` dello Spazio Cliente, clicca su `Chiavi SSH`{.action}.

![control panel ssh keys](images/importkey1.png){.thumbnail}

Clicca sul pulsante `Aggiungi una chiave SSH`{.action} e seleziona `Dedicato`{.action} nel menu.

![control panel ssh keys](images/importkey2.png){.thumbnail}

Nella nuova finestra, inserisci un "label" per la chiave nel primo campo.  
Copiare l'intera stringa di chiave pubblica e incollarla nel secondo campo.

![control panel ssh keys](images/importkey3.png){.thumbnail}

Clicca sul pulsante `Conferma`{.action}.

La chiave sarà disponibile in caso di reinstallazione di un server dedicato o di un VPS dallo Spazio Cliente.

Per maggiori informazioni, consulta le nostre guide "Primi passi":

- [Server dedicato](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Server dedicato della gamma **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

## Per saperne di più

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
