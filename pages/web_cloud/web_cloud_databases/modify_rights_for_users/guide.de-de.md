---
title: "Web Cloud Databases - Nutzerrechte ändern"
excerpt: "Erfahren Sie, wie Sie die Rechte eines Benutzers auf Ihrer Web Cloud Databases Lösung ändern"
updated: 2026-03-24
---

## Ziel

Die Lösung [Web Cloud Databases](/links/web/databases) kann mehrere Datenbanken enthalten. Damit können Sie einen oder mehrere Benutzer für die Verwaltung und Nutzung Ihrer Datenbanken definieren. Diese Benutzer können je nach ihren Rollen in den Datenbanken über mehr oder weniger erweiterte Rechte verfügen.
Bei der Verwendung des Produkts kann es erforderlich sein, die Rechte eines Benutzers auf Ihrer [Web Cloud Databases](/links/web/databases) Lösung zu ändern.

**Diese Anleitung erklärt, wie Sie die Benutzerrechte für Ihre Web Cloud Databases Lösung ändern.**

## Voraussetzungen

- Sie verfügen über eine [Web Cloud Databases](/links/web/databases) Lösung und einen oder mehrere Benutzer.

<!-- CP-NAV-START:web-cloud-databases -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Navigationspfad:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Wählen Sie Ihren Datenbankdienst aus

---
<!-- CP-NAV-END:web-cloud-databases -->

## In der praktischen Anwendung

> [!primary]
> Um einen neuen Benutzer für Ihre Web Cloud Databases Lösung zu erstellen, lesen Sie den Abschnitt **Einen Benutzer erstellen** unserer Anleitung "[Datenbanken und Benutzer auf Ihrem Datenbankserver erstellen](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)".

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf der angezeigten Seite auf den Tab `Benutzer und Rechte`{.action}.
>>
>> ![Users and rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Button `...`{.action} rechts neben dem betreffenden Benutzer und dann auf `Rechte verwalten`{.action}.
>>
>> ![Manage rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights-user-alone.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Auf der neuen Seite finden Sie eine Tabelle mit allen Datenbanken Ihrer Web Cloud Databases Lösung. In dieser Tabelle sehen Sie alle Rechte, die Ihr Benutzer für jede Datenbank Ihrer Web Cloud Databases Lösung hat.
>>
>> ![Changing user rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights-db-alone.png){.thumbnail}
>>
>> Hier können Sie die Rechte Ihres Benutzers für jede Ihrer Datenbanken ändern. Klicken Sie hierzu für jede betroffene Datenbank auf die leeren Kreise, die den Rechten entsprechen, die Sie für Ihren Benutzer neu definieren möchten. Die Änderung wird innerhalb weniger Augenblicke wirksam.

Im Folgenden finden Sie eine zusammenfassende Tabelle der möglichen Abfragetypen für eine Datenbank, basierend auf den dem Benutzer zugewiesenen Rechten:

<table align="center">
<thead>
<tr>
<th><center>Rechte</center></th>
<th><center>Administrator</center></th>
<th><center>Lesen / Schreiben</center></th>
<th><center>Lesen</center></th>
<th><center>Keine</center></th>
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

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
