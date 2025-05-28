---
title: "Erste Schritte mit Zimbra"
excerpt: "Erfahren Sie hier, wie Sie Ihr Zimbra Angebot über Ihr OVHcloud Kundencenter verwalten"
updated: 2025-05-19
---

<style>
.w-500 {
  max-width:500px !important;
}
</style>

## Ziel

Mit dem Zimbra Dienst bietet Ihnen OVHcloud eine kollaborative Open Source Messaging Plattform mit allen für eine professionelle Nutzung notwendigen Funktionen. In dieser Anleitung erfahren Sie, wie Sie mit der Konfiguration Ihrer Zimbra E-Mail-Accounts beginnen.

**Diese Anleitung erklärt, wie Sie Zimbra E-Mail im OVHcloud Kundencenter konfigurieren.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/q8QCtcXRbME?si=bAjQhzr-PQ--3Aj7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Voraussetzungen

- Sie haben einen E-Mail-Account auf der OVHcloud Zimbra E-Mail-Lösung abonniert.
- Sie verwalten einen [OVHcloud Domainnamen](/links/web/domains).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

**Inhalt**

- [Zur Verwaltung Ihres Dienstes](#zimbra-access)
- [Konfigurieren Sie Ihre Zimbra Dienstleistung](#zimbra-conf)
- [Organisationen](#organizations)
    - [Organisation erstellen](#organizations-create)
    - [Nach Organisation filtern](#organizations-filters)
- [Domains](#domains)
    - [Domain hinzufügen](#domains-add)
    - [Domainnamen bearbeiten](#domains-modify)
- [E-Mail Accounts](#emails)
    - [E-Mail-Account erstellen](#emails-create)
- [E-Mail-Account einsehen](#emails-consult)
- [Weiterleitungen](#redirections)
- [Alias](#alias)
- [automatische Antworten](#autoreply)

### Auf die Verwaltung Ihrer Dienstleistung zugreifen <a name="zimbra-access"></a>

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
1. Öffnen Sie den Bereich `Web Cloud`{.action}.
1. Klicken Sie auf `Zimbra Mail`{.action}.

![zimbra](images/zimbra_general_information.png){.thumbnail .w-500}

### Ihren Zimbra Dienst konfigurieren <a name="zimbra-conf"></a>

Bevor Sie mit der Konfiguration Ihrer Zimbra E-Mail-Accounts beginnen, beachten Sie die drei Elemente, die Ihre Zimbra Dienstleistung hierarchisch strukturieren:

- [**Organisation**](#organizations): Gruppierung von Domainnamen zur Verwendung mit E-Mails.
- [**Domainname**](#domains): Notwendig zur Erstellung eines E-Mail-Accounts; mindestens ein Domainname in Ihrem OVHcloud Kundencenter ist erforderlich, um ihn dem Zimbra-Dienst hinzufügen zu können.
- [**E-Mail-Accounts**](#emails): Mit den zu Ihrem Zimbra Dienst hinzugefügten Domainnamen können Sie E-Mail-Adressen erstellen.

> [!primary]
>
> Die *Organisation* dient zur Abbildung einer Entität (Unternehmen, Verein, persönliches Projekt, etc.). Sie erlaubt die Trennung von E-Mail-Accounts, die Anwendung spezifischer Sicherheitsrichtlinien (zukünftige Funktion) und die Übertragung von Rechten an eine Organisation (zukünftige Funktion). Die Verwendung von Organisationen vereinfacht die Navigation und Verwaltung Ihres Zimbra Dienstes.

Die folgende Abbildung zeigt die hierarchische Beziehung zwischen den oben genannten Elementen.

![zimbra](images/zimbra_organization.png){.thumbnail .w-500}

### Organisationen <a name="organizations"></a>

Wenn Sie eine große Anzahl von Domainnamen zu Ihrem Zimbra Dienst hinzufügen, kann es nützlich sein, diese zu einer "Organisation" zusammenzufassen. Klicken Sie in Ihrem Zimbra Dienst auf `Organisation`{.action}.

![zimbra](images/zimbra_organization_tab.png){.thumbnail .w-500}

#### Organisation erstellen <a name="organizations-create"></a>

Um eine Organisation zu erstellen, klicken Sie auf `Organisation hinzufügen`{.action}. Legen Sie den `Namen` der Organisation und das `Label der Organisation` fest. Dabei handelt es sich um eine kurze Beschreibung der Organisation, anhand derer Sie die Anzeige der Domainnamen und E-Mail-Accounts Ihrer Zimbra Dienstleistung filtern können.

![zimbra](images/zimbra_organization_add.png){.thumbnail .w-500}

### Nach Organisation filtern <a name="organizations-filters"></a>

In den Tabs `Organisation`{.action}, `Domain`{.action} und `E-Mail-Accounts`{.action} erstellen Sie einen Filter, der nur die Elemente anzeigt, die mit dieser Organisation verknüpft sind.

Sie sehen, dass der Filter angewendet wird, wenn das Label neben dem Namen Ihres Zimbra Dienstes angezeigt wird.

Um den Filter zu entfernen, klicken Sie auf das Filterkreuz.

![zimbra](images/zimbra_organization_filter.png){.thumbnail .w-500}

### Domains <a name="domains"></a>

> [!warning]
>
> Für einen optimalen Betrieb, wenn Sie den gleichen Domainnamen für OVHcloud [Exchange](/links/web/emails-hosted-exchange), [E-Mail Pro](/links/web/email-pro) und Zimbra verwenden, muss der Domainname als `nicht-autoritativ` konfiguriert werden.   Weitere Informationen zum Konfigurieren eines nicht-autoritativen Domainnamens für die Dienste Exchange und E-Mail Pro finden Sie in unserer Anleitung: [Domainnamen zu Ihrem Exchange Dienst hinzufügen](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain).

In diesem Tab finden Sie alle Domainnamen, die zu Ihrer Zimbra Dienstleistung hinzugefügt wurden. Sie müssen über Ihr OVHcloud Kundencenter verwaltet werden, um sie verwenden zu können.

Die Tabelle der Domainnamen enthält zwei Informationen:

- **Organisation**: Diese wird festgelegt, wenn Sie Ihren Domainnamen hinzufügen. Dessen Label wird automatisch in dieser Spalte angezeigt.
- **Anzahl der Accounts**: Hier finden Sie alle Accounts, die unter dem betreffenden Domainnamen erstellt wurden.

![zimbra](images/zimbra_domain_tab.png){.thumbnail .w-500}

#### Einen Domainnamen hinzufügen <a name="domains-add"></a>

> [!warning]
>
> Um eine Domain zu Ihrer Zimbra Dienstleistung hinzuzufügen, müssen Sie eine [Organisation erstellen](#organisations).

Um eine Domain zu Ihrer Zimbra Dienstleistung hinzuzufügen, klicken Sie auf `Domain`{.action} und dann auf `Domain hinzufügen`{.action}.

Wählen Sie im Dropdown-Menü eine Organisation aus, und wählen Sie dann eine der folgenden Optionen aus:

- **Domain in der Liste auswählen** (interne Domain): In dieser Liste finden Sie die Domainnamen, die Sie über Ihr OVHcloud Kundencenter verwalten.
- **Eine Domain angeben, die nicht in Ihrem OVHcloud Account verwaltet wird** (externe Domain): Geben Sie einen Domainnamen ein, der nicht in Ihrem OVHcloud Kundencenter verwaltet wird oder der bei einem anderen Registrar registriert ist und von Ihnen verwaltet wird.

Wählen Sie den betreffenden Tab aus:

> [!tabs]
> **Interne Domain**
>>
>> Wählen Sie eine über Ihr OVHcloud Kundencenter verwaltete Domain aus der Liste aus.
>>
>> ![zimbra](images/zimbra_domain_add_internal01.png){.thumbnail .w-500}
>>
>> Wählen Sie eine der folgenden Optionen aus, um Ihre DNS-Zone zu konfigurieren:
>>
>> - **Empfohlene Konfiguration**: Ihre DNS-Zone wird automatisch konfiguriert. Diese Option eignet sich, wenn Sie für Ihre Domain kein E-Mail-Angebot eingerichtet haben.
>> - **Benutzerdefinierte Konfiguration**: Wenn Sie bereits ein E-Mail-Angebot für Ihre Domain eingerichtet haben, können Sie die für Sie interessanten Elemente auswählen.
>>    - *MX-Eintrag automatisch konfigurieren*: Ermöglicht die automatische Eingabe der Empfangsserver von OVHcloud (gilt für alle E-Mail-Angebote von OVHcloud).
>>    - *SPF-Eintrag automatisch konfigurieren*: Ermöglicht die automatische Eingabe des Eintrags, der den OVHcloud E-Mail-Servern den Versand Ihrer E-Mails erlaubt. Diese Registrierung gilt für alle OVHcloud E-Mail-Angebote.
>>    - *DKIM-Eintrag automatisch konfigurieren*: Damit werden automatisch die erforderlichen Einträge für die Authentifizierung des Versands von E-Mails eingegeben.
>>
>> ![zimbra](images/zimbra_domain_add_internal02.png){.thumbnail .w-500}
>>
>> Klicken Sie auf `Bestätigen`{.action}, um das Hinzufügen Ihrer Domain abzuschließen und den Konfigurationsprozess zu starten.
>>
> **Externe Domain**
>>
>> Geben Sie einen Domainnamen ein, der nicht in Ihrem Kundencenter verwaltet wird. Vergewissern Sie sich, dass Sie die notwendigen Rechte haben, um die DNS-Zone der betreffenden Domain zu ändern.
>>
>> Klicken Sie anschließend auf `Bestätigen`{.action}
>>
>> ![zimbra](images/zimbra_domain_add_external01.png){.thumbnail .w-500}
>>
>> Das folgende Fenster wird angezeigt. Sie müssen diesen CNAME-Eintrag in der DNS-Zone der Domain eingeben, damit er auf Ihrer Zimbra-Plattform validiert werden kann.
>>
>> ![zimbra](images/zimbra_domain_add_external02.png){.thumbnail .w-500}
>>
>> > [!warning]
>> >
>> > Nach 48 Stunden wird der Vorgang abgebrochen, wenn der CNAME in der DNS-Zone nicht sichtbar ist. In diesem Fall muss der Vorgang wiederholt werden.

#### Domainnamen bearbeiten <a name="domains-modify"></a>

Sie können einen Domainnamen bearbeiten, um dessen Organisation zu ändern oder die zugehörigen DNS-Einträge zu überprüfen.

Klicken Sie im Tab `Domain`{.action} Ihres Zimbra Dienstes auf das Symbol &#8285; rechts neben der betreffenden Domain, um die Optionen anzuzeigen.

![zimbra](images/zimbra_domain_modify01.png){.thumbnail .w-500}

- Klicken Sie auf `Konfigurieren`{.action}, um die Ihrem Domainnamen zugeordnete Organisation zu ändern.
- Klicken Sie auf `Diagnose`{.action}, um die Ansicht für die Diagnose der DNS-Einträge anzuzeigen. Es sollten keine Warnungen für die DNS-Einträge in den Tabs angezeigt werden. Falls Warnungen angezeigt werden, folgen Sie jeweils den Anweisungen in den Tabs, um die DNS-Einträge zu konfigurieren:
    - **MX**: Notwendig zum Empfang Ihrer E-Mails.
    - **SPF**: Sicherheitseintrag, der von den meisten E-Mail-Empfänger-Servern verlangt wird, um die OVHcloud Server für den E-Mail-Versand mit Ihrem Domainnamen zu legitimieren.
    - **DKIM**: Ermöglicht die Einrichtung eines Signatursystems für jede E-Mail, die von Ihrem Zimbra-Dienst gesendet wird. Die Signatur wird vom Empfänger anhand des öffentlichen Schlüssels überprüft, der in Ihrer DNS-Zone hinterlegt ist.

![zimbra](images/zimbra_domain_modify02.png){.thumbnail .w-500}

### E-Mail-Accounts <a name="emails"></a>

Die Verwaltung der E-Mail-Accounts Ihrer Zimbra Dienstleistung erfolgt über den Tab `E-Mail-Accounts`{.action}. Die Tabelle enthält eine Liste der auf Ihrem Dienst vorhandenen E-Mail-Accounts sowie 3 Informationen zu jedem Account:

- **Organisation**: Wenn der Domainname Ihres E-Mail-Accounts mit einer Organisation verbunden ist, finden Sie das zugehörige Label automatisch in dieser Spalte.
- **Angebot**: Da Ihre Zimbra Dienstleistung mehrere Dienste enthalten kann, finden Sie den Ihrem E-Mail-Account zugeordneten Dienst in dieser Spalte.
- **Größe**: Diese Spalte zeigt die Gesamtkapazität und den aktuellen Speicherplatz Ihres E-Mail-Accounts an.

Außerdem finden Sie oben auf dieser Seite einen Link zum [Webmail](/links/web/email), um die Inhalte des E-Mail-Accounts im Webbrowser anzuzeigen.

![zimbra](images/zimbra_emailaccounts_tab.png){.thumbnail .w-500}

#### Einen E-Mail-Account erstellen <a name="emails-create"></a>

Um einen E-Mail-Account auf Ihrer Zimbra Dienstleistung zu erstellen, klicken Sie auf den Tab `E-Mail-Accounts`{.action} und dann auf `Einen Account erstellen`{.action}.

Geben Sie die angezeigten Informationen ein.

- **E-Mail-Account**: Geben Sie den *Namen des Accounts* ein, den Ihre E-Mail-Adresse erhalten soll (zum Beispiel Vorname.Name) und *wählen Sie einen Domainnamen* aus dem Drop-down-Menü aus.

> [!warning]
>
> Die Wahl des Namens Ihrer E-Mail-Adresse muss folgende Bedingungen erfüllen:
>
> - Mindestens 2 Zeichen.
> - Maximal 32 Zeichen.
> - Keine Zeichen mit Akzent.
> - Keine Sonderzeichen außer `.`, `+`, `-` und `_`.

- **Vorname**: Geben Sie einen Vornamen ein.
- **Name**: Geben Sie einen Namen ein.
- **Anzeigename**: Geben Sie den Namen ein, der als Absender angezeigt wird, wenn E-Mails von dieser Adresse aus versendet werden.
- **Passwort**: Legen Sie ein sicheres Passwort fest, das aus (mindestens) 9 Zeichen, einem Großbuchstaben, einem Kleinbuchstaben und einer Ziffer besteht. Verwenden Sie aus Sicherheitsgründen nicht dasselbe Kennwort zweimal. Wählen Sie einen Namen aus, der in keinem Zusammenhang mit Ihren persönlichen Daten steht (vermeiden Sie z. B. Ihren Namen, Vornamen und Ihr Geburtsdatum). Ändern Sie es regelmäßig.

> [!warning]
>
> Die Wahl des Passworts muss folgende Bedingungen erfüllen:
>
> - Mindestens 10 Zeichen.
> - Maximal 64 Zeichen.
> - Mindestens 1 Großbuchstabe.
> - Mindestens 1 Sonderzeichen.
> - Keine Zeichen mit Akzent.

Klicken Sie auf `Bestätigen`{.action}, um die Erstellung des Accounts zu starten.

![zimbra](images/zimbra_emailaccounts_add.png){.thumbnail .w-500}

### E-Mail-Account einsehen <a name="mail-consult"></a>

Um Ihren E-Mail-Account einzusehen:

- Loggen Sie sich über einen Webbrowser auf [webmail](/links/web/email) ein und geben Sie Ihre E-Mail-Adresse und Ihr Passwort ein. Weitere Informationen finden Sie auf unserer Seite „[Zimbra Webmail verwenden](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)“.
- Richten Sie ein E-Mail-Programm auf Ihrem Computer, Smartphone oder Tablet ein. Besuchen Sie unsere Seite „[Zimbra-E-Mail-Adresse auf einem E-Mail-Client konfigurieren](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)“.

### Weiterleitungen <a name="redirections"></a>

Um eine Weiterleitung auf eine Zimbra E-Mail-Adresse zu erstellen, loggen Sie sich im [webmail] ein (/links/web/email).
Die Erstellung einer Weiterleitung erfolgt über Posteingangsregeln, im Webmail als „Filter“ bezeichnet. Diese Regeln, die beim Empfang einer E-Mail angewendet werden, erlauben es, eine E-Mail weiterzuleiten oder umzuleiten.

Um die E-Mails Ihres Zimbra-Accounts an eine andere E-Mail-Adresse weiterzuleiten, wenden wir eine Transferregel an. Folgen Sie den unten stehenden Tabs, um Ihre Weiterleitung einzurichten.

> [!primary]
>
> Im Beispiel unten sollen alle eingehenden E-Mails an eine andere E-Mail-Adresse weitergeleitet werden. Als Beispiel-Account wird **zimbra@mydomain.ovh** verwendet und alle eingehenden E-Mails an diese E-Mail-Adresse werden an die Adresse **address@example.com** geleitet.

> [!tabs]
> **Schritt 1**
>>
>> Klicken Sie auf die Schaltfläche &#9881; oben rechts in Ihrem Webmail-Fenster und dann auf `Einstellungen`{.action}.
>>
>> ![zimbra](images/zimbra_settings01.png){.thumbnail .w-500}
>>
> **Schritt 2**
>>
>> Klicken Sie im Parameterfenster auf den Abschnitt `Filter`{.action} und dann auf die Schaltfläche `Filter hinzufügen`{.action}.
>>
>> ![zimbra](images/zimbra_redirection02.png){.thumbnail .w-500}
>>
> **Schritt 3**
>>
>> - Klicken Sie oben rechts auf <u>Erweiterter Modus</u>, um diese Regel zu implementieren.
>> - Geben Sie einen Namen für Ihren Filter in das Feld `Filtername` ein.
>> - Lassen Sie das Dropdown-Menü auf `Alle` im Satz „Wenn eine eingehende Nachricht ... dieser Bedingungen entspricht“.
>> - Wählen Sie im ersten Pop-up-Menü der Regeln `An` (To) aus, lassen Sie `enthält` (contains) und geben Sie die Quell-Adresse in das Feld rechts ein.
>> - Wählen Sie unter „Dann“ (Then) im Drop-down-Menü `Weiterleiten an` (Forward to) aus und geben Sie die Ziel-Adresse ein.
>> - Klicken Sie unten auf `+ Bedingung hinzufügen`{.action}(Add an action) und wählen Sie `Im Posteingang aufbewahren` (Keep in Inbox).
>> - Klicken Sie auf `Speichern`{.action} im Fenster Ihres Filters und im Fenster der Einstellungen.
>>
>> ![zimbra](images/zimbra_redirection03.png){.thumbnail .w-500}
>>

Weitere Informationen zur Verwendung von Zimbra Webmail finden Sie in unserer Anleitung „[Zimbra Webmail verwenden](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)“.

### Alias <a name="alias"></a>

Mit Alias-Adressen für Ihren E-Mail-Account können Sie Ihre Account-E-Mail-Adresse privat halten. Sie können die Alias-Adressen an Ihre Kontakte weitergeben und an diese Adressen gesendete E-Mails werden dann an Ihren E-Mail-Account weitergeleitet.

Die Erstellung eines Alias erfolgt über das [OVHcloud Kundencenter](/links/manager). Klicken Sie auf die Tabs um die Schritte anzuzeigen:

> [!tabs]
> **Schritt 1**
>>
>> - Klicken Sie auf den Tab `E-Mail-Accounts`{.action} Ihres Zimbra Dienstes.
>> - Klicken Sie auf den Button &#8942; des betreffenden E-Mail-Accounts.
>> - Klicken Sie auf `Bearbeiten`{.action}.
>>
>> ![zimbra](images/zimbra_alias01.png){.thumbnail .w-500}
>>
> **Schritt 2**
>>
>> Das Fenster zur Konfiguration Ihres E-Mail-Accounts wird angezeigt. Klicken Sie oben auf den Tab `Alias`{.action}.
>>
>> ![zimbra](images/zimbra_alias02.png){.thumbnail .w-500}
>>
> **Schritt 3**
>>
>> Das folgende Fenster enthält eine Liste der Aliase, die Sie dem betreffenden Account zuordnen können. Klicken Sie auf den Button `Alias erstellen`{.action}.
>>
>> ![zimbra](images/zimbra_alias03.png){.thumbnail .w-500}
>>
> **Schritt 4**
>>
>> Legen Sie die Adresse Ihres Alias fest und wählen Sie einen der mit Ihrem Zimbra Dienst verbundenen Domainnamen aus.
>>
>> ![zimbra](images/zimbra_alias04.png){.thumbnail .w-500}
>>

### Automatische Antworten <a name="autoreply"></a>

Wenn Sie abwesend sind und Ihre E-Mails nicht bearbeiten können, können Sie eine Abwesenheitsnachricht einrichten. Führen Sie die folgenden Schritte aus:

- Klicken Sie auf den Button &#9881; oben rechts in Ihrem Webmail-Fenster und dann auf `Einstellungen`{.action}.

![zimbra](images/zimbra_settings01.png){.thumbnail .w-500}

- Klicken Sie auf den Abschnitt `Abwesend im Büro` hinter dem Fenster der Parameter.
- Aktivieren Sie das Kontrollkästchen „Automatische Antwort für diese Datumsangaben (inklusive) aktivieren“.
- Geben Sie das Startdatum der Abwesenheit vor dem Vermerk „Von“ ein.
- Deaktivieren Sie die Option „Kein Enddatum“, wenn Sie ein Enddatum für die Abwesenheit festlegen möchten.
- Geben Sie in das Feld Ihre Abwesenheitsmeldung ein.
- Klicken Sie auf `Speichern`{.action}, um die Abwesenheitsnotiz abzuschließen.

![zimbra](images/zimbra_autoreply01.png){.thumbnail .w-500}

Weitere Informationen zur Verwendung von Zimbra Webmail finden Sie in unserer Anleitung „[Zimbra Webmail verwenden](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)“.

## Weiterführende Informationen <a name="go-further"></a>

[Zimbra-E-Mail-Adresse auf einem E-Mail-Client konfigurieren](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[Zimbra Webmail verwenden](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[OVHcloud Zimbra FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
