---
title: Creare firme automatiche
excerpt: Come aggiungere firme automatiche ai tuoi account email
updated: 2020-03-26
---

## Obiettivo

Nello Spazio Cliente OVHcloud, è possibile creare firme universali (footers) per indirizzi email usando lo stesso dominio (firma "aziendale"). Queste firme saranno aggiunte automaticamente alle email inviate dall'account di un utente.

**Questa guida ti mostra come creare una firma automatica dallo Spazio Cliente OVHcloud.**

## Prerequisiti

- avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Disporre di una [soluzione Exchange OVHcloud](https://www.ovhcloud.com/it/emails/hosted-exchange/) o [Email Pro](https://www.ovhcloud.com/it/emails/email-pro/) attive 

## Procedura

Per effettuare questa operazione, accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}:

- **Exchange**: Clicca su `Microsoft`{.action} > `Exchange`{.action}. 
- **Email Pro**: Clicca su `Email Pro`{.action}.

Seleziona il nome del servizio in cui si trova l’account per cui vuoi creare la delega e clicca sulla scheda `Account email`{.action}. Clicca sulla scheda `More+`{.action}nel menu orizzontale e seleziona `Footers`{.action}.

![exchangesig](images/exchange-footer-step1.png){.thumbnail}

In questa sezione visualizzi i tuoi domini associati, per ognuno dei quali puoi creare una firma. Per aprire l’editor HTML, clicca sui tre puntini `...`{.action} e poi su `Configuration`{.action}.

![exchangesig](images/exchange-footer-step2.png){.thumbnail}

L’editor propone una selezione di variabili che corrispondono ai dati dell’utente nelle impostazioni dell’account. È possibile, ad esempio, comporre un messaggio di chiusura generico e aggiungere una sigla di chiusura appropriata o alcune informazioni di contatto, utilizzando le variabili. Clicca sui tre puntini per selezionare una variabile, quindi clicca su `Insert a variable`{.action} per aggiungerla nel riquadro di modifica.

![exchangesig](images/exchange-footer-step3aag.gif){.thumbnail}

La firma è creata tramite i tag HTML, che consentono alcune opzioni di formattazione. Per personalizzare la firma puoi utilizzare la barra degli strumenti situata in alto. Per verificare il codice HTML, clicca su `Source`{.action}.
 
![exchangesig](images/exchange-footer-step4.png){.thumbnail}

Spunta la casella “Enable the signature for outgoing mail only” per evitare che la firma venga aggiunta alle email inviate agli utenti dello stesso dominio. Clicca su `Confirm`{.action} per completare l’operazione. A questo punto, la firma è aggiunta alle email inviate dagli account associati a questo dominio. Dopo aver creato le firme, è possibile modificarle o eliminarle dallo Spazio Cliente OVHcloud.

Prima di creare una firma per utenti, prendi in considerazione queste informazioni:

- Ad eccezione di “Nome”, “Cognome”, e “Nome visualizzato”, le informazioni dell’account non possono essere modificate dallo Spazio Cliente OVHcloud, ma è necessario specificarlo nell’OWA dell’utente ("Options", "General", "My account").

![exchangesig](images/exchange-footer-step5.png){.thumbnail}

- La firma verrà aggiunta al corpo dell’email senza spazi, quindi ti consigliamo di iniziare la firma con almeno una riga vuota.
- In OWA non è indicato se una firma è attiva in questo dominio e non è presente **nessuna sincronizzazione**. Se ciascun utente aggiunge la [propria firma](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa#aggiungere-una-firma), l’email includerà sia la firma individuale che la firma associata al dominio.
- L’editor supporta la formattazione HTML, gli hyperlinks, le immagini, ecc. Tuttavia, le firme non dovrebbero fare troppo affidamento su queste opzioni. I destinatari potrebbero utilizzare client di posta elettronica incompatibili con HTML e immagini incorporate, oppure la firma potrebbe apparire in modo diverso dal previsto. Attenzione: se un messaggio viene inviato come “Testo normale” da OWA, i tag HTML saranno completamente rimossi.
- Il servizio non prende in considerazione le “iniziali”, pertanto aggiungere questa variabile potrebbe rivelarsi inutile.

## Per saperne di più

[Guida all’utilizzo di Outlook Web App con un account Exchange](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Delegare i diritti su un account email](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation)

[Condividi un calendario con la Webmail OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

Partecipa alla nostra community di utenti all’indirizzo <https://community.ovh.com/en/>.
