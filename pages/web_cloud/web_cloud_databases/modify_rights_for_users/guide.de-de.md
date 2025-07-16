---
title: "Web Cloud Databases - Nutzerrechte ändern"
excerpt: "Erfahren Sie, wie Sie die Rechte eines Benutzers auf Ihrer Web Cloud Databases Lösung ändern können"
updated: 2025-06-23
---

## Ziel

Die Lösung [Web Cloud Databases](/links/web/databases) kann mehrere Datenbanken enthalten. Damit können Sie einen oder mehrere Benutzer für die Verwaltung und Nutzung Ihrer Datenbanken definieren. Diese Benutzer können je nach ihren Rollen in den Datenbanken über mehr oder weniger erweiterte Rechte verfügen.  
Bei der Verwendung des Produkts können Sie die Rechte eines Benutzers auf Ihrer [Web Cloud Databases](/links/web/databases) ändern.

**Diese Anleitung erklärt, wie Sie die Benutzerrechte für Ihre Web Cloud Databases Lösung ändern können.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie verfügen über einen [Web Cloud Databases](/links/web/databases) Dienst und einen oder mehrere Benutzer.

## In der praktischen Anwendung

> [!primary]
> Um einen neuen Benutzer für Ihre Web Cloud Databases Lösung zu erstellen, lesen Sie den Abschnitt **Einen Benutzer erstellen** unserer Anleitung "[Datenbanken und Benutzer auf Ihrem Datenbankserver erstellen](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)".

Klicken Sie jeweils auf die Tabs, um die **5** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `Web Cloud Databases`{.action} und wählen Sie die betreffende Web Cloud Databases Lösung aus.
>>
>>![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie auf der angezeigten Seite auf den Tab `Benutzer und Rechte`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 4**
>>
>> In der angezeigten Tabelle klicken Sie auf den Button `...`{.action} rechts neben dem betreffenden Benutzer und dann auf `Rechte verwalten`{.action}.
>>
>> ![Manage rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights-user-alone.png){.thumbnail}
>>
> **Schritt 5**
>>
>> Auf der neu geöffneten Seite finden Sie eine Tabelle mit allen Datenbanken, die auf Ihrer Web Cloud Databases Lösung vorhanden sind. In dieser Tabelle sehen Sie alle Rechte, die Ihr Benutzer für jede der Datenbanken in Ihrer Web Cloud Databases Lösung hat.
>>
>> ![Changing user rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights-db-alone.png){.thumbnail}
>>
>> Hier können Sie die Rechte Ihres Benutzers für jede Ihrer Datenbanken ändern. Klicken Sie hierzu für jede der betroffenen Datenbanken auf die lren Kreise, die den Rechten entsprechen, die Sie für Ihren Benutzer neu definieren möchten. Die Änderung wird innerhalb weniger Augenblicke wirksam.

Im Folgenden finden Sie eine zusammenfassende Tabelle der möglichen Abfragetypen für eine Datenbank, basierend auf den Berechtigungen, die dem Benutzer zugewiesen sind:

<table align="center">
<thead>
<tr>
<th><center>Rechte</center></th>
<th><center>Administrator</center></th>
<th><center>Lesen / Schreiben</center></th>
<th><center>Lesen</center></th>
<th><center>Keiner </center></th>
</tr>
</thead>
<tbody>
<tr>
<td><center>Select</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td>
</tr>
<tr>
<td><center>Insert</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<tr>
<td><center>Update</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<td><center>Delete</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<td><center>Create</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Alter</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Drop</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
</tbody>
</table>

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.