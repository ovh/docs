---
title: Attiva le connessioni SSO di Google Workspace con il tuo account OVHcloud
excerpt: "Questa guida ti mostra come associare il tuo servizio Google Workspace al tuo account OVHcloud tramite SAML 2.0"
updated: 2024-07-05
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

L'autenticazione **SSO** (*Single Sign-On*) è disponibile per accedere al tuo account OVHcloud. Per attivare queste connessioni, il tuo account OVHcloud e i tuoi account Google Workspace devono essere configurati con le credenziali SAML (*Security Assertion Markup Language*).

**Questa guida ti mostra come associare il tuo account OVHcloud a un servizio Google Workspace esterno.**

## Prerequisiti

- Essere amministratore di un servizio Google Workspace
- Disporre di un [account OVHcloud attivo](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

> [!primary]
>
> Affinché un provider di servizi (cioè il tuo account OVHcloud) possa stabilire una connessione SSO con un provider di identità (cioè il tuo Google Workspace), l'essenziale è stabilire un rapporto di fiducia reciproca memorizzando la connessione SSO nei due servizi.
>

### Salva OVHcloud su Google Workspace

Il tuo Google Workspace agisce come provider di identità. Le richieste di autenticazione al tuo account OVHcloud saranno accettate solo se l'hai precedentemente dichiarato come organismo terzo di fiducia.

Significa che deve essere aggiunto come `Web and mobile aps`.

Accedi all'interfaccia di gestione di [Google Workspace](https://admin.google.com) con il tuo account amministratore.

Accedi alla sezione `Apps`{.action} e poi `Web and mobile apps`{.action}.

![Aggiungi un'applicazione Web o mobile](images/google_workspace_web_mobile_add_saml_app.png){.thumbnail}

Clicca su `Add app`{.action} e poi su `Add custom SAML app`{.action}.

Nello step "App details", aggiungi un nome per questa interconnessione. Se non hai un'ispirazione, **OVHcloud** è un nome adatto. Clicca su `Continue`{.action}.

![Aggiungi un'applicazione SAML, Step 1](images/google_workspace_web_mobile_add_saml_app_step1.png){.thumbnail}

Nello step "Google Identity Provider details", scarica il file di metadati cliccando su `Download metadata`{.action} e poi su `Continue`{.action}.

![Aggiungi un'applicazione SAML, Step 2](images/google_workspace_web_mobile_add_saml_app_step2.png){.thumbnail}

Nello step "Service provider details", completa i record `ACS URL` e `Entity ID` con i valori della tua Region:

- Region EU: **ACS URL**: `https://www.ovhcloud.com/eu/auth/saml/acs` e **Entity ID**: `https://www.ovhcloud.com/eu/auth/`
- Region CA: **ACS URL**: `https://www.ovhcloud.com/ca/auth/saml/acs` e **Entity ID**: `https://www.ovhcloud.com/ca/auth/`

Clicca su `Continue`{.action}.

![Aggiungi un'applicazione SAML, Step 3](images/google_workspace_web_mobile_add_saml_app_step3.png){.thumbnail}

Nello step "Attribute mapping", aggiungi questa mapping:

- **First Name**: Name
- **Last Name**: Surname
- **Primary email**: E-mail Address

Clicca su `Finish`{.action}.

![Aggiungi un'applicazione SAML, Step 4](images/google_workspace_web_mobile_add_saml_app_step4.png){.thumbnail}

Attiva l'accesso a questa applicazione cliccando su `OFF for everyone`{.action} nella sezione "User Access". Clicca su `ON for everyone`{.action} e poi sul pulsante `SAVE`{.action}

![Attiva l'applicazione per tutti gli utenti](images/google_workspace_web_mobile_enable_app1.png){.thumbnail}

![Attiva l'applicazione per tutti gli utenti](images/google_workspace_web_mobile_enable_app2.png){.thumbnail}

> [!primary]
>
> L'aggiunta dell'accesso di un'applicazione agli utenti potrebbe richiedere diverse ore.
>

Il tuo Google Workspace si fida di OVHcloud come provider di servizi. Lo step successivo consiste nell'assicurarsi che l'account OVHcloud confidi nel tuo Google Workspace come provider di identità.

### Affidare la fiducia all'account OVHcloud e configurare la connessione

L'aggiunta del Google workspace come affidabilità provider avviene nello [Spazio Cliente OVHcloud](/links/manager), dove è possibile fornire i metadati del provider.

Clicca sul nome del tuo account in alto a destra e poi di nuovo sul tuo nome nella barra laterale.

![Accesso al menu IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Accedi al menu IAM tramite la voce dedicata dello Spazio Cliente.

![Accesso al menu IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

Clicca sulla scheda `Identità`{.action} per accedere alla gestione degli utenti locali.

![Accesso al menu IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Clicca sul pulsante `Connessione SSO`{.action}.

![OVHcloud di connessione SSO Step 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Inserisci i metadati XML del tuo servizio Google Workspace. Completa il campo "Nome dell'attributo utente" con il valore `Name` e il campo "Nome dell'attributo del gruppo" con il valore `Group`. Clicca su `Conferma`{.action}.

Per conservare gli utenti locali, spunta la casella `Conservare gli utenti OVHcloud attivi`.

![OVHcloud di connessione SSO Step 2](images/ovhcloud_user_management_connect_sso_2.png){.thumbnail}

A questo punto è necessario trovare il Google Workspace come provider di identità e i gruppi predefiniti.

![OVHcloud di connessione SSO Step 3](images/ovhcloud_user_management_connect_sso_3.png){.thumbnail}

Per maggiori informazioni, clicca sul link situato sotto "URL del servizio SSO".

![OVHcloud di connessione SSO Step 4](images/ovhcloud_user_management_connect_sso_4.png){.thumbnail}

Il pulsante `...`{.action} permette di aggiornare o eliminare l'SO e di consultarne i dettagli.

![OVHcloud di connessione SSO step 5](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

Il tuo Google Workspace è considerato un provider affidabile. È comunque necessario aggiungere gruppi al tuo account OVHcloud.

> [!warning]
> Se stai cercando di accedere via SSO, probabilmente comparirà un messaggio di errore `Not in valid groups`.
>
> Infatti, il tuo account OVHcloud verifica se l'utente che si autentica appartiene a un gruppo esistente sull'account.
>

È necessario autorizzare i gruppi che verranno trasmessi da Google Workspace a OVHcloud. Questi gruppi sono gli stessi utilizzati per classificare i tuoi utenti.

Accedi all'interfaccia di amministrazione di [Google Workspace](https://admin.google.com) con il tuo account amministratore

Accedi alla sezione `Apps`{.action} e poi `Web and mobile apps`{.action}.

![Gestisci le applicazioni Web e mobile](images/google_workspace_web_mobile_add_saml_app.png){.thumbnail}

Clicca sulla riga dell'applicazione che hai aggiunto in precedenza.

![Elenco delle applicazioni web e mobili](images/google_workspace_web_mobile_list_app.png){.thumbnail}

Clicca su `SAML attribute mapping`{.action} per modificare la mapping delle informazioni condivise tra Google Workspace e OVHcloud.

![Dettagli dell'applicazione SAML](images/google_workspace_web_mobile_show_app.png){.thumbnail}

Nella categoria "Group membership (optional)", aggiungi tutti i gruppi che vuoi autorizzare a connettersi a OVHcloud. Nel campo "App attribute", indica `Group`.

In seguito, è necessario attribuire **ruoli** a questi gruppi di utenti in OVHcloud. In caso contrario, il tuo account OVHcloud non sa cosa è autorizzato a fare l'utente e, di default, non viene assegnato alcun diritto.

![Configurazione dei gruppi di utenti](images/google_workspace_web_mobile_setup_groups.png){.thumbnail}

Dallo Spazio Cliente OVHcloud è possibile aggiungere un gruppo cliccando sul pulsante `Dichiarare un gruppo`{.action} e inserendo i campi:

- **Nome del gruppo**: nome del gruppo in seno a Google Workspace
- **Privilegio**: livello di diritto concesso a tale gruppo

![Gruppi di gestione utenti Google Workspace](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![Gruppi di gestione utenti Google Workspace](images/ovhcloud_user_management_groups_2.png){.thumbnail}

Verifica che il gruppo sia aggiunto al tuo account OVHcloud nella sezione "Gruppi":

![Gruppi di gestione utenti Google Workspace](images/ovhcloud_user_management_groups_3.png){.thumbnail}

Quando ti connetti con un utente del gruppo **Intern**, il tuo account OVHcloud riconoscerà che l'utente ha il ruolo "UNPRIVILEGED" specificato dal suo gruppo.

Attenzione: se concedi il privilegio `Nessuno`, sarà necessario assegnare i diritti a questo gruppo tramite le [politiche IAM](/pages/account_and_service_management/account_information/iam-policy-ui).

In seguito, potrai disconnetterti dal tuo account e collegarti al tuo Google Workspace come provider di identità.

### Connexion via SSO

Nella [pagina di identificazione OVHcloud](/links/manager), inserisci il tuo [identificativo cliente](/pages/account_and_service_management/account_information/ovhcloud-account-creation#qual-e-il-mio-identificativo-cliente) seguito da **/idp** senza password e clicca sul pulsante `Login`{.action}.

![Connessione alla federazione OVHcloud](images/ovhcloud_federation_login_1.png){.thumbnail}

Verrai reindirizzato alla pagina di connessione Google Workspace. Inserisci un login/password di un utente del tuo Google Workspace e clicca sul pulsante `Sign in`{.action}.

![OVHcloud Federation login Reindirizzamento Google Workspace](images/ovhcloud_federation_login_2.png){.thumbnail}

Adesso sei connesso con lo stesso identificativo cliente, ma tramite l'utente Google Workspace.

![Federazione delle informazioni degli utenti OVHcloud](images/ovhcloud_user_infos_federation.png){.thumbnail}

## Per saperne di più

[Crea un account OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)

[Rendere sicuro il tuo account OVHcloud e gestire le tue informazioni personali](/pages/account_and_service_management/account_information/all_about_username)

[Definizione e gestione della password del tuo account](/pages/account_and_service_management/account_information/manage-ovh-password)

[Rendere sicuro il tuo account OVHcloud con la doppia autenticazione](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Come utilizzare le politiche IAM dallo Spazio Cliente](/pages/account_and_service_management/account_information/iam-policy-ui).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
