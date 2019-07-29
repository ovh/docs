---
title: 'Was tun, wenn Ihr Hosting aus Sicherheitsgründen deaktiviert wurde?'
slug: sicherheit-hosting-deaktiviert
excerpt: 'Hier erklären wir Ihnen gängige Sicherheitspraktiken und wie Sie bei einer Deaktivierung Ihres Hostings reagieren können.'
section: Diagnose
order: 1
---

**Stand 11.07.2019**

## Einleitung

Über Ihr Webhosting können Sie eine oder mehrere Websites online stellen. Möglicherweise haben Sie von OVH eine Nachricht erhalten, dass für Ihr Webhosting eine Sicherheitsmaßnahme getroffen wurde. Es kann passieren, dass Ihre Website nicht mehr aufrufbar oder einige ihrer Funktionen eingeschränkt sind. Solche Maßnahmen werden jedoch nur vorgenommen, wenn für Ihr Webhosting verdächtige oder böswillige Aktivitäten festgestellt wurden. 

**In dieser Anleitung erklären wir Ihnen gängige Sicherheitspraktiken und wie Sie bei einer Deaktivierung Ihres Hostings reagieren können.**

## Voraussetzungen

- Sie besitzen ein [OVH Webhosting](https://www.ovh.de/hosting/){.external} Angebot.
- Sie haben die Zugangsdaten, um sich mit dem Speicherplatz Ihres Hostings zu verbinden.
- Sie sind im [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt und befinden sich im Bereich `Web`{.action}.

## Beschreibung

Im Internet gibt es viele verschiedene Websites. Die für Websites verwendeten Technologien entwickeln sich stets weiter – egal ob sie auf gebrauchsfertigen Lösungen (beispielsweise einem CMS wie WordPress) basieren oder ihnen eine angepasste Struktur zugrunde liegt, die von Ihnen selbst oder von Dritten programmiert wurde. 

**Websites müssen daher stets aktuell gehalten werden** und bei jeder Aktualisierung wird ihr Code verändert. Diese Änderungen können neue Funktionen, Stabilitätsverbesserungen sowie Sicherheitspatches beinhalten, um eventuelle Sicherheitslücken zu beheben.

Websites können eine oder sogar mehrere Sicherheitslücken aufweisen. Denn leider gibt es zahlreiche Möglichkeiten und Angriffspunkte. Über diese Lücken können Hacker zwar nicht auf unsere Server gelangen, aber sie können Ihre gehosteten Daten beschädigen und im Fall umfangreicher Attacken durch Schneeballeffekte die Stabilität unserer Infrastruktur beeinträchtigen.

Hacker können Ihr Hosting dann für böswillige Zwecke nutzen, wie beispielsweise für den Versand einer großen Anzahl an Spam-Mails oder um eine betrügerische Website zu hosten. Auch wenn diese Aktivitäten von Ihnen nicht autorisiert wurden, können sie über eine Sicherheitslücke auf Ihrer Seite ausgeführt werden. 

Um Ihre eigene Sicherheit und die unserer Kunden zu garantieren, sehen wir in solchen Fällen vor, Ihr Hosting oder einige seiner Funktionen vorübergehend zu deaktivieren. Ist das der Fall, müssen mehrere Einstellungen vorgenommen werden, um die Deaktivierung aufzuheben. Auch wenn es keine allgemein gültige Vorgehensweise gibt, können Sie sich an dieser Anleitung orientieren. 

> [!warning]
>
> Diese Anleitung ersetzt nicht die Unterstützung eines professionellen Webmasters. Wir empfehlen Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten.
>

### Schritt 1: Die Situation einschätzen

Bevor Sie damit beginnen, Einstellungen für Ihre Website zu ändern, sehen Sie sich genau an, was passiert ist. Die folgenden Punkte helfen Ihnen dabei, eine Analyse durchzuführen. 

#### 1.1 Die Benachrichtigung von OVH genau lesen

Sie sollten von OVH eine Benachrichtigung erhalten haben, dass für Ihr Webhosting eine Sicherheitsmaßnahme durchgeführt wurde. Lesen Sie die in der Nachricht enthaltenen Informationen. Die Inhalte der Benachrichtigung unterscheiden sich von Fall zu Fall und wir können in der vorliegenden Anleitung leider nicht alle möglichen Informationen aufführen. Es wird Ihnen jedoch stets mitgeteilt:

- wann Ihr Hosting deaktiviert wurde,
- warum eine Deaktivierung vorgenommen wurde.

Diese Informationen helfen Ihnen bei weiteren Recherchen und Einstellungen.

#### 1.2 Die Sicherheit Ihrer Website einschätzen

Egal ob sie eine Website haben, die auf einer gebrauchsfertigen Lösung basiert, oder ob sie Ihre Seite selbst programmiert haben: **Ihre Website muss regelmäßig aktualisiert werden**. 

Das gilt insbesondere für CMS (wie beispielsweise WordPress), da sie über Themes und Add-ons (oder Plug-ins) stark personalisierbar sind. Letztere sind zwar sehr praktisch sind, können Ihrer Website jedoch Code hinzufügen oder bestehenden Code ändern, ohne dass Sie die Herkunft dieses Codes oder sein Sicherheitsniveau kennen.

Stellen Sie sich also folgende Fragen: 

- **Habe ich kürzlich Updates für meine Website vorgenommen?** 

Das können Updates der Website selbst (durchgeführt von Ihnen oder Ihrem Webmaster), eines Themes oder eines Add-ons sein. Ist das nicht der Fall, dann hat Ihre Seite möglicherweise eine Sicherheitslücke, die durch ein Update behoben werden kann, dass Sie noch nicht installiert haben. 

Überprüfen Sie daher im nächsten Schritt, ob Ihre Website und die zusätzlich installierten Elemente auf dem neuesten Stand sind. Sollte dies nicht der Fall sein, nehmen Sie die nötigen Updates vor.

- **Habe ich meiner Website in letzter Zeit ein neues Theme oder ein Add-on hinzugefügt?**

Ist das der Fall, so könnte dieses eine bekannte Sicherheitslücke enthalten, die bereits von böswilligen Hackern ausgenutzt wird. Bitte beachten Sie, dass es sich hierbei nur um eine Möglichkeit handelt. Die Ursache für die Sicherheitsbedrohung muss nicht unbedingt das neu installierte Element sein.

Stellen Sie im nächsten Schritt sicher, dass die verschiedenen Zusatzelemente Ihrer Website sicher sind und online einen guten Ruf haben.

#### 1.3 Aktivität und Logs Ihres Hostings prüfen

Sie erhalten so einen Überblick über die Aktivität Ihres Dienstes und Ihrer Website. Ziel ist es, zu analysieren, was zum Zeitpunkt der Deaktivierung passiert ist.

Um die Aktivität und Logs Ihres Hostings einzusehen, loggen Sie sich in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein und gehen Sie in den Bereich `Web`{.action}. Klicken Sie nach dem Login links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Je nach den gesuchten Informationen haben Sie nun zwei Möglichkeiten:

- **Die Aktivität Ihres Webhostings einsehen**

Sie haben nun mehr Informationen darüber, was passiert ist, und können die notwendigen Änderungen an Ihrer Website vornehmen oder haben zumindest eine bessere Vorstellung davon, was zu tun ist. 

Vergewissern Sie sich, dass Sie sich im Tab `Allgemeine Informationen`{.action} befinden, und scrollen Sie dann bis zum Bereich `Aktivität des Webhostings` herunter.

![Hosting Deaktivierung](images/hosting-deactivation-step1.png){.thumbnail}

- **Die Logs Ihres Webhostings einsehen**

Sie haben die Möglichkeit, auf alle Logs Ihres Dienstes zuzugreifen, insbesondere auf alle Web-Anfragen (Requests), die an Ihren Dienst gesendet wurden. Auf diese Weise können Sie eine oder mehrere Dateien identifizieren, die ein Hacker für böswillige Aktivitäten auf Ihrem Hosting genutzt hat. Diese Analyse ist oft schwierig und sehr technisch. Lassen Sie sich, wenn nötig, von einem Webmaster helfen.

Um auf die Logs zuzugreifen, klicken Sie auf den Tab `Mehr +`{.action} und dann auf `Statistiken und Logs`{.action}. Verwenden Sie die angezeigten Informationen, um sich mit der Seite der Logs Ihres Webhostings zu verbinden. 

![Hosting Deaktivierung](images/hosting-deactivation-step2.png){.thumbnail}

Überprüfen Sie nun die „Web“-Logs zu dem Datum, das Sie als relevant einstufen (das Datum der Deaktivierung oder der Zeitpunkt, an dem die ungewöhnliche Aktivität angefangen hat).

Beginnen Sie mit der ausgewählten Uhrzeit und erweitern Sie dann Schritt für Schritt Ihr Suchfeld auf die Zeiten davor. Ziel ist es, ungewöhnliche oder seltsame Aktivitäten zu identifizieren, die normalerweise von „POST“-Anfragen stammen. Wie bereits erwähnt, kann sich diese Analyse aufgrund ihrer Komplexität als schwierig erweisen. Lassen Sie sich, wenn nötig, von einem Webmaster helfen.

### Schritt 2: Änderungen an Ihrer Website vornehmen

Sie haben nun mehr Informationen darüber, was passiert ist, und können die notwendigen Änderungen an Ihrer Website vornehmen oder haben zumindest eine bessere Vorstellung davon, was zu tun ist. 

Die Maßnahmen in diesem Schritt lassen sich in zwei sich ergänzende Kategorien einteilen:

- **Schließen einer oder mehrerer Sicherheitslücken.** Dies verhindert, dass weitere Personen die Sicherheitslücken erneut ausnutzen.

- **Beseitigung von schädlichem Code.** Ein Hacker konnte über die Sicherheitslücke unbemerkt, wie durch eine Hintertür, Code auf Ihrer Website platzieren. So hat er versteckt Zugriff auf Ihre Website und Ihr Hosting. Überprüfen Sie daher, ob schädlicher Code hinzugefügt wurde und beseitigen Sie diesen.

> [!warning]
>
> Beide Maßnahmen sind komplementär.
> 
> Wenn Sie die Sicherheitslücke schließen, ohne den auf Ihrem Hosting befindlichen Schadcode zu beseitigen, hat der Hacker immer noch versteckten Zugriff auf das Hosting. Er kann Ihr Hosting also weiterhin für böswillige Zwecke nutzen.
>
> Wenn Sie den Schadcode beseitigen, ohne die Sicherheitslücke zu schließen, kann der Hacker diese erneut ausnutzen, um wieder Schadcode auf Ihrem Hosting zu platzieren. Er hätte sogar die Möglichkeit, eine neue Hintertür zu programmieren.
>

Für diese Änderungen gibt es keine allgemein gültige Vorgehensweise, denn die einzelnen Fälle sind sehr verschieden. Nachfolgend finden Sie einige Maßnahmen, die Ihnen dabei helfen können. Passen Sie diese an Ihre eigene Situation an. Wir empfehlen Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. 

#### 2.1 Ihre Website über ein Backup wiederherstellen

Backups ermöglichen es Ihnen, die Website wieder in einen früheren Zustand zu versetzen, bevor sie von einem Dritten verändert wurde. Hierzu benötigen Sie eine Backup-Version, die noch keinen Schadcode enthält. Andernfalls wäre die Maßnahme nutzlos. 

> [!warning]
>
> Bei einer Wiederherstellung wird lediglich der schädliche Code beseitigt, der unbemerkt auf Ihrem Hosting platziert wurde. **Sicherheitslücken werden dabei nicht geschlossen.**
>

Für die Wiederherstellung Ihrer Website haben Sie mehrere Optionen:

- **Wenn Sie über eine eigene Kopie Ihrer Website verfügen**: 

Sie können Ihre Website einfach über Ihr Hosting wiederherstellen, indem Sie die Inhalte im Speicherplatz und in der Datenbank mit denen des Backups ersetzen. In der Anleitung „[Backup in eine Webhosting-Datenbank importieren](https://docs.ovh.com/de/hosting/webhosting_import_einer_mysql-datenbank/){.external}“ werden Ihnen die erforderlichen Schritte erklärt.

- **Wenn OVH über eine Kopie Ihrer Website verfügt (Speicherplatz und Datenbank)**:

Je nachdem, für welches Datum Sie eine Backup-Version benötigen, kann Ihnen OVH möglicherweise ein Backup zur Verfügung stellen. Weitere Informationen finden Sie in unseren Anleitungen „[Den Speicherplatz Ihres Webhostings wiederherstellen](https://docs.ovh.com/de/hosting/webhosting-speicherplatz-wiederherstellen/){.external}“, „[Backup einer Webhosting-Datenbank exportieren](https://docs.ovh.com/de/hosting/webhosting_hilfe_zum_export_von_datenbanken/){.external}“ und „[Backup in eine Webhosting-Datenbank importieren](https://docs.ovh.com/de/hosting/webhosting_import_einer_mysql-datenbank/){.external}“. Vergewissern Sie sich außerdem soweit möglich, dass die Daten (Erstellungszeitpunkte) der ausgewählten Backups übereinstimmen.

- **Wenn weder Sie noch OVH über eine Kopie Ihrer Website verfügen**: 

Verändern Sie den Code Ihrer Website in diesem Fall selbst, um die nötigen Korrekturen vorzunehmen. Lesen Sie hierzu den Abschnitt „[Den Code Ihrer Website manuell korrigieren](https://docs.ovh.com/de/hosting/sicherheit-hosting-deaktiviert/#23-den-code-ihrer-website-manuell-korrigieren){.external}“. 

#### 2.2 Ihre Website aktualisieren

Dieser Vorgang erscheint vielleicht einfach, dennoch sind einige technische Elemente zu beachten. Vergewissern Sie sich, dass Sie Zugriff auf Ihre Website haben, bevor Sie Updates durchführen. 

> [!primary]
>
> Wenn Ihre Website aufgrund der von OVH durchgeführten Sicherheitsmaßnahme nicht länger erreichbar ist, können Sie diese nicht direkt aktualisieren. Gehen Sie in diesem Fall zunächst zu Schritt 3 „[Webhosting erneut aktivieren](https://docs.ovh.com/de/hosting/sicherheit-hosting-deaktiviert/#schritt-3-webhosting-erneut-aktivieren_1){.external}“, um wieder Zugriff auf Ihre Seite zu erhalten. Danach können Sie das Update durchführen.
>

Verbinden Sie sich mit dem Verwaltungsinterface Ihrer Website (nicht mit dem OVH Interface). Überprüfen Sie hier, ob:

- Ihre Website aktuell ist,
- alle installierten Themes, Add-ons (oder Plug-ins) aktuell sind.

Ist das nicht der Fall, führen Sie die nötigen Updates durch. Folgen Sie dazu den Anweisungen im Verwaltungsinterface Ihrer Website. 

> [!warning]
>
> **Bevor Sie mit dieser Maßnahme beginnen, raten wir Ihnen ausdrücklich, alle eventuellen Empfehlungen zu dem Update, das Sie durchführen möchten, zu lesen.** Diese Empfehlungen kommen direkt vom Herausgeber und/oder Entwickler der Website, Themes und Add-ons, die Sie installiert haben.
>

Diese enthalten möglicherweise Elemente, die das gewünschte Update blockieren könnten. Zum Beispiel:

- Vergewissern Sie sich, dass die neue Version Ihres CMS (z. B. WordPress) mit der auf Ihrem Hosting installierten PHP-Version kompatibel ist. Wenn die PHP-Version geändert werden muss, lesen Sie die entsprechende Anleitung „[PHP-Version Ihres Webhostings ändern](https://docs.ovh.com/de/hosting/konfiguration_von_php_fur_ein_ovh_webhosting_2014/){.external}“.
- Überprüfen Sie außerdem, dass Ihre Themes und Add-ons mit der neuen Version Ihres CMS kompatibel sind. Ist das nicht der Fall, können Sie diese Elemente nicht mehr nutzen und müssen eine alternative Lösung finden.

#### 2.3 Den Code Ihrer Website manuell korrigieren

Wenn Sie keine gebrauchsfertige Lösung (beispielsweise ein CMS wie WordPress) nutzen oder über kein Backup verfügen, das Sie wiederherstellen können, müssen die nötigen Änderungen manuell am Code vorgenommen werden. **Diese Änderungen sind sehr technisch und wir empfehlen Ihnen deshalb, sich an einen Experten zu wenden.** 

Es gibt keine allgemein gültige Vorgehensweise, da jeder Fall anders ist. Die Logs Ihres Hosting können Ihnen allerdings dabei helfen, herauszufinden, wo sich die infizierten Dateien befinden, die Sie korrigieren möchten.

### Schritt 3: Webhosting erneut aktivieren

Für die Reaktivierung Ihres Webhostings müssen Einstellungen in Ihrem Speicherplatz vorgenommen werden. Ändern Sie hierzu die Berechtigungen (oder Rechte) für „705“ des Wurzelverzeichnisses (angegeben mit „ / “) Ihres Speicherplatzes.

> [!primary]
>
> Wenn in der Benachrichtigung von OVH explizit darauf hingewiesen wurde, dass Sie Ihr Hosting nicht selbst reaktivieren können, folgen Sie den Anweisungen in dieser E-Mail.
>

Wenn Sie Ihr Webhosting selbst erneut aktivieren können, suchen Sie die notwendigen Informationen heraus, um sich mit Ihrem Speicherplatz zu verbinden (also mit dem FTP-Server, d. h. Sie benötigen den FTP-Benutzernamen und das zugehörige Passwort).

Loggen Sie sich hierfür in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein und klicken Sie links im Menü auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und gehen Sie dann auf den Tab `FTP - SSH`{.action}. Auf dieser Seite können Sie, wenn nötig, auch das [Passwort eines FTP-Benutzers ändern](https://docs.ovh.com/de/hosting/ftp-benutzer-passwort-aendern/){.external}.

![Hosting Deaktivierung](images/hosting-deactivation-step3.png){.thumbnail}

Sobald Sie die nötigen Informationen haben, haben Sie mehrere Möglichkeiten, je nachdem welche Software oder welches Webinterface Sie verwenden möchten.

#### 3.1 Das Hosting mit FileZilla erneut aktivieren

Öffnen Sie FileZilla und verbinden Sie sich mit Ihrem Speicherplatz. Klicken Sie im Menü auf `Server`{.action} und dann auf `Benutzerdefinierten Befehl eingeben`{.action} (die Bezeichnungen können je nach FileZilla-Version leicht variieren, z. B. auch „FTP-Befehl eingeben“). Geben Sie im angezeigten Fenster folgenden Befehl ein und bestätigen Sie diesen.

```
SITE CHMOD 705 /
```

Ein „ok“ sollte Ihnen bestätigen, dass die Einstellungen vorgenommen wurden. Um dies zu überprüfen, versuchen Sie, auf Ihre Website zuzugreifen. Wenn Sie diese nun aktualisieren möchten, gehen Sie zu Schritt 2.2 dieser Anleitung: „[Ihre Website aktualisieren](https://docs.ovh.com/de/hosting/sicherheit-hosting-deaktiviert/#22-ihre-website-aktualisieren){.external}“.

![Hosting Deaktivierung](images/hosting-deactivation-step4.png){.thumbnail}

#### 3.2 Das Hosting über den FTP-Explorer „net2ftp“ erneut aktivieren

Gehen Sie für diese Option ebenfalls auf den Tab `FTP - SSH`{.action} in Ihrem OVH Kundencenter, klicken Sie auf den Button `FTP-Explorer`{.action} und verbinden Sie sich mit Ihrem Speicherplatz. Klicken Sie auf `Erweitert`{.action}, dann auf den Button `Weiter`{.action} neben „Sende benutzerdefinierte FTP-Kommandos zum FTP-Server“.

![Hosting Deaktivierung](images/hosting-deactivation-step5.png){.thumbnail}

Geben Sie oben auf der Seite den folgenden Befehl ein und klicken Sie auf den grünen Haken. 

```
SITE CHMOD 705 /
```

Sie sollten eine Bestätigung erhalten, dass die Einstellungen vorgenommen wurden. Um dies zu überprüfen, versuchen Sie, auf Ihre Website zuzugreifen. Wenn Sie diese nun aktualisieren möchten, gehen Sie zu Schritt 2.2 dieser Anleitung: „[Ihre Website aktualisieren](https://docs.ovh.com/de/hosting/sicherheit-hosting-deaktiviert/#22-ihre-website-aktualisieren){.external}“.

![Hosting Deaktivierung](images/hosting-deactivation-step6.png){.thumbnail}

#### 3.3 Das Hosting via SSH erneut aktivieren

Verbinden Sie sich via SSH mit Ihrem Speicherplatz. Geben Sie nun den untenstehenden Befehl ein und bestätigen diesen.

```
chmod 705 .
```

Sie können mit folgendem Befehl überprüfen, ob die Zugriffsrechte korrekt sind.

```
ls -la
```

Sie können auch versuchen, auf Ihre Website zuzugreifen. Wenn Sie diese nun aktualisieren möchten, gehen Sie zu Schritt 2.2 dieser Anleitung: „[Ihre Website aktualisieren](https://docs.ovh.com/de/hosting/sicherheit-hosting-deaktiviert/#22-ihre-website-aktualisieren){.external}“.

### Schritt 4: Die Sicherheit Ihrer Website gewährleisten

Wenn Ihre Website keine Sicherheitslücken und keinen Schadcode mehr enthält, ist es wichtig, die Sicherheit der Seite weiter sicherzustellen. Hierzu empfehlen wir Ihnen:

- Ihre Website regelmäßig zu aktualisieren (mit allen Themes und Add-ons)
- Vertrauenswürdige Inhalte zu installieren: Je mehr Sie Ihre Website mit Themes und Add-ons anpassen, desto mehr Code wird geändert oder hinzugefügt. Achten Sie auf Bewertungs- oder Reputationssysteme, die über Benutzer-Feedback auf Probleme hinweisen können.

Das Ziel ist, insgesamt wachsamer zu sein und stets darauf zu achten, welche Programme Sie auf Ihrer Website installieren, und diese regelmäßig zu aktualisieren.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.