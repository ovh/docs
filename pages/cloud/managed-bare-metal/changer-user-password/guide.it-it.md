---
title: Modificare la password utente
routes:
    canonical: '/pages/cloud/private-cloud/changement_du_mot_de_passe_utilisateur'
excerpt: Come impostare una nuova password per un utente del client vSphere dallo Spazio Cliente OVHcloud
updated: 2020-11-18
---

**Ultimo aggiornamento: 18/11/2020**
 
## Obiettivo

Le autorizzazioni e le password associate agli utenti del client vSphere possono essere gestite dallo Spazio Cliente di OVHcloud.

**Questa guida ti mostra come modificare la password di un utente.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Disporre di un account utente creato dallo Spazio Cliente OVHcloud. Per maggiori informazioni, consulta [questa guida](/pages/cloud/managed-bare-metal/manager-ovhcloud#utenti)
  
## Procedura

### Modifica la password

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e, nella sezione `Bare Metal Cloud`{.action}  (1), clicca su `Managed Bare Metal`{.action} (2), seleziona il server dalla lista (3) e clicca sulla scheda `Utenti`{.action}(4).

![Accesso allo Spazio Cliente](images/userpassword1.png){.thumbnail}

Clicca sul pulsante `(...)`{.action} in corrispondenza dell’account interessato e seleziona `Modifica la password`{.action}.

![Modifica password](images/userpassword2.png){.thumbnail}

Nella nuova finestra, inserisci la password e confermala.

![Modifica password](images/userpassword3.png){.thumbnail}

> [!primary]
> Se non viene inserita una password, ne verrà generata una in modo casuale che sarà poi inviata via email all’indirizzo associato all’utente.
> 


> [!warning]
>
>Per non compromettere la sicurezza dell’infrastruttura, consigliamo di seguire alcune best practice. La password deve:
>
> - contenere almeno 8 caratteri
> - contenere almeno 3 tipi di caratteri
> - non essere tratta dal dizionario
> - non contenere informazioni personali
> - non essere utilizzata per più accessi
> - essere salvata in un <i>password manager</i>
> - essere cambiata ogni 3 mesi
> - essere diversa dalle password precedenti
>

## Per saperne di più

[Modificare i diritti di un utente](/pages/cloud/managed-bare-metal/change-user-rights)

[Impostare e gestire la password di un account OVHcloud](/pages/account/customer/manage-ovh-password)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
