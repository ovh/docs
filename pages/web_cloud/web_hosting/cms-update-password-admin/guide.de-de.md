---
title: "So ändern Sie das Administratorpasswort eines CMS"
excerpt: "So ändern Sie das Administratorpasswort Ihres CMS direkt über das Verwaltungsinterface des CMS oder verwenden phpMyAdmin im OVHcloud Kundencenter"
updated: 2024-10-15
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Sie haben den Zugriff auf Ihr Verwaltungsinterface von WordPress, PrestaShop, Joomla! oder Drupal verloren? Oder möchten Sie einfach nur die Sicherheit Ihrer Website erhöhen, indem Sie das Administrator-Passwort ändern? In dieser Anleitung erfahren Sie Schritt-für-Schritt, wie Sie vorgehen, ob Sie direkt über das Verwaltungsinterface des CMS oder über phpMyAdmin im OVHcloud Kundencenter vorgehen.

**Erfahren Sie, wie Sie Ihr Administrator-Passwort für die CMS WordPress, PrestaShop, Joomla! und Drupal ändern, um die Sicherheit und den optimalen Zugriff auf Ihre Website zu gewährleisten.**

## Voraussetzungen

- Sie verfügen über ein [Webhosting Angebot](/links/web/hosting), mit dem Sie ein 1-Klick-Modul installieren können.
- Sie haben ein 1-Klick-Modul auf Ihrem Webhosting erstellt (wenn Sie diese Installation noch nicht durchgeführt haben, folgen Sie den Anweisungen in dieser [Anleitung](/pages/web_cloud/web_hosting/cms_install_1_click_modules).
- Sie sind in Ihrem [OVHcloud Kundencenter](/links/manager) eingeloggt (nur für den mit phpMyAdmin verbundenen Teil).

## In der praktischen Anwendung

Es gibt mehrere Möglichkeiten, das Administratorpasswort Ihres CMS an Ihre Situation anzupassen:

- [per automatischer E-Mail (Passwort vergessen)](#via-email)
- [über das Verwaltungsinterface Ihres CMS](#via-cms)
- [über phpMyAdmin in Ihrem OVHcloud Kundencenter](#via-phpmyadmin)

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Dieses Tutorial soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) oder den Herausgeber des CMS zu kontaktieren. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>
> Um die verschiedenen Herausgeber der oben genannten CMS zu kontaktieren, finden Sie hier die Links zu ihren offiziellen Seiten:
>
> - [WordPress](https://wordpress.com/support/){.external}
> - [Joomla!](https://www.joomla.org/){.external}
> - [Drupal](https://www.drupal.org/){.external}
> - [PrestaShop](https://www.prestashop.com/en/support){.external}

### Administratorpasswort per automatischer E-Mail ändern (Passwort vergessen) <a name="via-email"></a>

Sie haben noch Zugriff auf Ihre E-Mails und das Login-Interface? Diese Methode ist am schnellsten, da der Zugriff auf die Einstellungen des CMS oder der Umweg über phpMyAdmin vermieden wird.

> [!tabs]
> WordPress
>>
>> Um Ihr WordPress-Administratorpasswort über die Option „Passwort vergessen“ zu ändern, folgen Sie den Schritten im Abschnitt „[Through the automatic emailer](https://wordpress.org/documentation/article/reset-your-password/#through-the-automatic-emailer)“ der offiziellen WordPress-Dokumentation.
>>
> PrestaShop
>>
>> Gehen Sie zum PrestaShop Login-Interface Ihrer Website (Typ `https://your-domain.com/admin/`) und klicken Sie dann auf „Passwort vergessen“, um eine E-Mail zu erhalten, in der Sie dazu aufgefordert werden, Ihr Passwort zurückzusetzen.
>>
> Joomla!
>>
>> Um Ihr Joomla! Administrator-Passwort über die Option „Passwort vergessen“ zu ändern, folgen Sie den Schritten im Abschnitt „[Frontend](https://docs.joomla.org/Resetting_a_user_password/en)“ der offiziellen Joomla! Dokumentation.
>>
> Drupal
>>
>> Um Ihr Drupal Administrator-Passwort über die Option „Passwort vergessen“ zu ändern, folgen Sie diesen Schritten:
>>
>> - Navigieren Sie zum Administratorverbindungsinterface.
>> - Klicken Sie auf den Link „Neues Passwort anfordern“.
>> - Geben Sie im angezeigten Dialogfeld entweder den Benutzernamen oder die E-Mail-Adresse ein, die dem Administrator-Account zugeordnet ist.
>> - Klicken Sie auf „Neues Passwort senden“ oder „E-Mail-Adresse für neues Passwort“.
>> - Öffnen Sie die empfangene E-Mail und klicken Sie auf den bereitgestellten Link.
>> - Geben Sie Ihr neues Passwort ein und bestätigen Sie es.
>> - Kehren Sie zur Drupal-Anmeldeseite zurück und melden Sie sich mit dem neuen Passwort an, das Sie gerade festgelegt haben.

### Administratorpasswort über das CMS ändern <a name="via-cms"></a>

Sie haben Zugriff auf das Verwaltungsinterface des CMS und kennen Ihr aktuelles Passwort? Ändern Sie Ihr Passwort direkt in den Einstellungen Ihres Administrator-Accounts.

> [!tabs]
> WordPress
>> Um Ihr WordPress-Administratorpasswort über das Verwaltungsinterface des CMS zu ändern, folgen Sie den Schritten im Abschnitt „[To Change Your Password](https://wordpress.org/documentation/article/reset-your-password/#to-change-your-password)“ der offiziellen WordPress-Dokumentation.
>>
> PrestaShop
>>
>> In der offiziellen PrestaShop-Dokumentation wird nicht erklärt, wie Sie das Administratorpasswort über das Login-Interface ändern können. In der [offiziellen PrestaShop-Dokumentation](https://help-center.prestashop.com/hc/en-us/articles/10799006732818-Recover-your-admin-password) finden Sie eine alternative Methode zur Aktualisierung Ihres Passworts.
>>
> Joomla!
>>
>> Um Ihr Joomla! Administrator-Passwort über das Administrations-Interface zu ändern, folgen Sie den Schritten im Abschnitt „[Backend](https://docs.joomla.org/Resetting_a_user_password/en)“ der offiziellen Joomla! Dokumentation.
>>
> Drupal
>>
>> In der offiziellen Drupal-Dokumentation wird nicht erklärt, wie das Administratorpasswort über das Login-Interface geändert werden kann. In der [offiziellen Drupal-Dokumentation](https://www.drupal.org/node/44164) finden Sie eine andere Methode zum Aktualisieren Ihres Passworts.

### Administratorpasswort über phpMyAdmin über das OVHcloud Kundencenter ändern <a name="via-phpmyadmin"></a>

Sie haben keinen Zugriff mehr auf das Verwaltungsinterface des CMS oder können die Funktion „Passwort vergessen“ nicht verwenden, weil die zugehörige E-Mail-Adresse nicht erreichbar ist? Verwenden Sie phpMyAdmin in Ihrem [OVHcloud Kundencenter](/links/manager), um das Passwort direkt über die Datenbank zurückzusetzen.

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](/links/manager) und wählen Sie `Web Cloud`{.action}. Klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Angebot aus. Im Tab `Datenbanken`{.action} identifizieren Sie die von Ihrem CMS verwendete Datenbank, klicken Sie auf den Button `...`{.action} und dann auf `Zugang zu phpMyAdmin`{.action} zugreifen.

Geben Sie die Datenbank-IDs (Benutzername und Kennwort) ein, die Sie bei der Erstellung der Datenbank festgelegt haben. Wenn Sie bei phpMyAdmin eingeloggt sind, klicken Sie unten auf den entsprechenden Tab.

> [!tabs]
> WordPress
>>
>> Folgen Sie den Schritten im Abschnitt „[Through phpMyAdmin](https://wordpress.org/documentation/article/reset-your-password/#through-phpmyadmin)“ der offiziellen WordPress-Dokumentation.
>>
> PrestaShop
>>
>> Folgen Sie den Schritten im Abschnitt „[You do not have access to your e-mail address](https://help-center.prestashop.com/hc/en-us/articles/10799006732818-Recover-your-admin-password)“ der offiziellen PrestaShop Dokumentation.
>>
> Joomla!
>>
>> Folgen Sie den Schritten im Abschnitt „[Resetting in phpMyAdmin](https://docs.joomla.org/Resetting_a_user_password/en)“ der offiziellen Joomla! Dokumentation.
>>
> Drupal
>>
>> Nachdem Sie sich bei phpMyAdmin eingeloggt haben, folgen Sie diesen Schritten:
>>
>> - Wählen Sie die Datenbank aus, die Drupal für Ihre Website verwendet.
>> - Suchen Sie die Tabelle `users_field_data` (für Drupal 8 und höher) oder die Tabelle users (für Drupal 7 und früher).
>> - Finden Sie den Administrator-Benutzer mit `uid = 1`.
>> - Klicken Sie auf `Modify`.
>> - Wählen Sie im Feld `pass` in der Spalte `Function` rechts neben dem Feld `MD5` aus.
>> - Geben Sie ein neues Kennwort in die Wertespalte ein.
>> - Übernehmen und speichern Sie die Änderungen.

## Weiterführende Informationen <a name="go-further"></a>

[Wie kann ich mein 1-Klick-Modul verwalten?](/pages/web_cloud/web_hosting/cms_manage_1_click_module)

[Tutorial - Manuelle Installation von WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Manuelle Installation von Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Manuelle Installation von Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Manuelle Installation von PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Treten Sie unserer [User Community](/links/community) bei.