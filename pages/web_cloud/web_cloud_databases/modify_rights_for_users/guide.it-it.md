---
title: "Web Cloud Databases - Modificare i diritti di un utente"
excerpt: "Scopri come modificare i diritti di un utente sulla tua soluzione Web Cloud Databases"
updated: 2026-03-24
---

## Obiettivo

La soluzione [Web Cloud Databases](/links/web/databases) può contenere diversi database. Permette di definire uno o più utenti per la gestione e l'utilizzo dei database. Questi utenti possono disporre di diritti più o meno elevati in base al loro ruolo a livello di database.
Durante l'utilizzo del prodotto, potrebbe essere necessario modificare i diritti di un utente sul tuo [Web Cloud Databases](/links/web/databases).

**Questa guida ti mostra come modificare i diritti di un utente sulla tua soluzione Web Cloud Databases.**

## Prerequisiti

- Disporre di una soluzione [Web Cloud Databases](/links/web/databases) e di uno o più utenti.

<!-- CP-NAV-START:web-cloud-databases -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Seleziona il tuo database service

---
<!-- CP-NAV-END:web-cloud-databases -->

## Procedura

> [!primary]
> Per creare un nuovo utente sulla tua soluzione Web Cloud Databases, consulta la sezione **Creare un utente** della nostra guida "[Crea i tuoi database e i tuoi utenti sul tuo database server](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)".

Clicca sulle schede qui sotto per visualizzare ciascuno dei **4** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella pagina che appare, clicca sulla scheda `Utenti e diritti`{.action}.
>>
>> ![Users and rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Clicca sul pulsante `...`{.action} a destra dell'utente interessato e poi su `Gestisci i diritti`{.action}.
>>
>> ![Manage rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights-user-alone.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Nella nuova pagina che appare, troverai una tabella con tutti i database presenti sulla tua soluzione Web Cloud Databases. Questa tabella mostra tutti i diritti di cui dispone l'utente per ciascun database presente sulla tua soluzione Web Cloud Databases.
>>
>> ![Changing user rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights-db-alone.png){.thumbnail}
>>
>> È qui che puoi modificare i diritti dell'utente per ciascun database. Per farlo, per ciascun database interessato, clicca sui cerchi vuoti corrispondenti ai diritti che desideri ridefinire per il tuo utente. La modifica diventa effettiva in pochi istanti.


Di seguito è riportata una tabella riassuntiva dei tipi di richieste possibili su un database in base ai diritti assegnati all'utente:

<table align="center">
<thead>
<tr>
<th><center>Diritti</center></th>
<th><center>Amministratore</center></th>
<th><center>Lettura / Scrittura</center></th>
<th><center>Lettura</center></th>
<th><center>Nessuno</center></th>
</tr>
</thead>
<tbody>
<tr>
<td><center>Select</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td>
</tr>
<tr>
<td><center>Insert</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td>
</tr>
<tr>
<td><center>Update</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td>
</tr>
<td><center>Delete</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td>
</tr>
<td><center>Create</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Alter</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Drop</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td><td></td>
</tr>
</tbody>
</table>

## Per saperne di più

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre diverse [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
