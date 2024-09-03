---
title: "Erste Schritte mit Zimbra"
excerpt: "So starten Sie mit Ihrem Zimbra-Angebot über Ihr OVHcloud Kundencenter"
updated: 2024-09-02
---

<style>
.w-400 {
max-width:400px!importante;
}
</style>

> [!primary]
>
> **Wichtig**
>
> Das Zimbra Angebot ist ein Beta-Produkt.
>
> Es ist nur für Personen verfügbar, die das [Beta-Anmeldeformular ausgefüllt haben](https://labs.ovhcloud.com/en/zimbra-beta/) .
>
> Einige der in diesem Handbuch aufgeführten Funktionen oder Einschränkungen können sich nach der Markteinführung des Produkts ändern.

## Ziel

Mit dem Zimbra Angebot bietet Ihnen OVHcloud eine kollaborative Open Source Messaging-Plattform mit allen für eine professionelle Nutzung notwendigen Funktionen. In dieser Anleitung erfahren Sie, wie Sie mit der Konfiguration Ihrer Zimbra E-Mail-Accounts beginnen.

**So starten Sie mit Zimbra E-Mail**

## Voraussetzungen

- Sie haben einen E-Mail-Account auf unserer Zimbra E-Mail-Lösung von OVHcloud abonniert.
- Sie besitzen eine [OVHcloud Domain](/links/web/domains).
- Sie sind in Ihrem [OVHcloud Kundencenter](/links/manager) eingeloggt.

## In der Praxis

### Auf die Verwaltung Ihrer Dienstleistung zugreifen

Um auf Ihren Zimbra-Dienst zuzugreifen, loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und klicken Sie auf den Tab `Web Cloud`{.action}. Klicken Sie im Bereich `E-Mails`{.action} auf `Zimbra`{.action}.

### Ihren Zimbra Dienst konfigurieren

Bevor Sie mit der Konfiguration Ihrer Zimbra E-Mail-Accounts beginnen, beachten Sie bitte die drei Elemente, die Ihre Zimbra Dienstleistung hierarchisch strukturieren :

- [**Organisation**](#organizations) : Gruppierung von Domainnamen zur Verknüpfung. **Es ist nicht notwendig, eine Organisation zu erstellen, um einen E-Mail-Account erstellen zu können**.
- [**Domainname**](#domains) : Diese Domain ist für die Erstellung eines E-Mail-Accounts erforderlich. Verwalten Sie mindestens ein Zertifikat über Ihr OVHcloud Kundencenter und fügen Sie es zu Ihrem Zimbra-Dienst hinzu.
- [**E-Mail-Accounts**](#emails) : Wenn Sie die zu Ihrem Zimbra Dienst hinzugefügten Domainnamen verwenden, können Sie eine E-Mail-Adresse erstellen.

Die folgende Abbildung zeigt die hierarchische Beziehung zwischen den oben genannten Elementen.

![zimbra](images/zimbra_organization.png){.thumbnail .w-400}

### Organisationen <a name="organizations"></a>

Wenn Sie eine große Anzahl von Domainnamen zu Ihrem Zimbra Dienst hinzufügen, kann es nützlich sein, diese zu einer „Organisation“ zusammenzufassen. Klicken Sie in Ihrem Zimbra Dienst auf `Organisation`{.action}.

#### Organisation erstellen

Um eine Organisation zu erstellen, klicken Sie auf `Organisation hinzufügen`{.action}. Legen Sie den `Namen` der Organisation und das `Label der Organisation` fest. Dabei handelt es sich um eine kurze Beschreibung der Organisation, anhand derer Sie die Anzeige der Domainnamen und E-Mail-Accounts Ihrer Zimbra Dienstleistung filtern können.

### Nach Organisation filtern

Stellen Sie nach der Erstellung Ihrer Organisationen sicher, dass die Domainnamen, die auf Ihrer Zimbra Dienstleistung deklariert sind, einer Organisation zugeordnet sind.

In den Registerkarten `Organisation`{.action}, `Domain`{.action} und `E-Mail-Accounts`{.action} erstellen Sie einen Filter, der nur die Elemente anzeigt, die mit dieser Organisation verknüpft sind.<br>
Sie sehen, dass der Filter angewendet wird, wenn das Label neben dem Namen Ihres Zimbra-Dienstes angezeigt wird.<br>
Um den Filter zu entfernen, klicken Sie einfach auf das Filterkreuz.

![zimbra](images/zimbra_organization_filter.png){.thumbnail .w-400}

### Domains <a name="domains"></a>

In diesem Tab finden Sie alle Domains, die zu Ihrer Zimbra Dienstleistung hinzugefügt wurden. Sie müssen über Ihr OVHcloud Kundencenter verwaltet werden, um hinzugefügt zu werden.

Die Tabelle der Domainnamen enthält zwei Informationen :

- **Organisation** : Diese wird bestimmt, wenn Sie Ihren Domainnamen hinzufügen, dessen Label Sie automatisch in dieser Spalte finden.
- **Anzahl der Accounts** : Hier finden Sie alle Accounts, die unter dem betreffenden Domainnamen erstellt wurden.

#### Eine Domain hinzufügen

Um eine Domain zu Ihrer Zimbra Dienstleistung hinzuzufügen, klicken Sie auf `Domain`{.action} und dann auf `Domain hinzufügen`{.action}.

Wenn Sie Organisationen erstellt haben, wählen Sie eine Organisation aus dem Drop-down-Menü aus und wählen Sie eine Domain aus der Liste aus (die Domains müssen in Ihrem OVHcloud Kundencenter verwaltet werden). Klicken Sie anschließend auf `Bestätigen`{.action}, um das Hinzufügen der Domain abzuschließen.

### E-Mail-Accounts <a name="emails"></a>

Die Verwaltung der E-Mail-Adressen Ihrer Zimbra Dienstleistung erfolgt über den Tab `E-Mail-Accounts`{.action}. Die Tabelle enthält eine Liste der auf Ihrem Dienst vorhandenen E-Mail-Accounts sowie 3 Informationen zu jedem Account :

- **Organisation** : Wenn der Domainname Ihres E-Mail-Accounts mit einer Organisation verbunden ist, finden Sie das zugehörige Label automatisch in dieser Spalte.
- **Angebot** : Da Ihre Zimbra Dienstleistung mehrere Zimbra Angebote enthalten kann, finden Sie das Ihrem E-Mail-Account zugeordnete Angebot in dieser Spalte.
- **Größe** : Diese Spalte zeigt die Gesamtkapazität und den aktuellen Speicherplatz Ihres E-Mail-Accounts an.

Außerdem finden Sie oben auf dieser Seite einen Link zum [Webmail](/links/web/email), um sich direkt mit dem Inhalt Ihres E-Mail-Accounts über Ihren Webbrowser zu verbinden.

#### Einen E-Mail-Account erstellen

Um einen E-Mail-Account auf Ihrer Zimbra Dienstleistung zu erstellen, klicken Sie auf den Tab `E-Mail-Accounts`{.action} und dann auf `Einen Account erstellen`{.action}.

Geben Sie die angezeigten Informationen ein.

- **E-Mail-Account** : Geben Sie den *Namen des Accounts* ein, den Ihre E-Mail-Adresse erhalten soll (zum Beispiel Vorname.Name) und *wählen Sie einen Domainnamen* aus dem Drop-down-Menü aus.

> [!warning]
>
> Die Wahl des Namens Ihrer E-Mail-Adresse muss folgende Bedingungen erfüllen :
>
> - Mindestens 2 Zeichen
> - Maximal 32 Zeichen
> - Keine Zeichen mit Akzent
> - Keine Sonderzeichen außer `.`, `,`, `-` und `_`

- **Vorname** : Geben Sie einen Vornamen ein.
- **Name** : Geben Sie einen Namen ein.
- **Vollständiger Name** : Geben Sie den Namen ein, der als Absender angezeigt wird, wenn E-Mails von dieser Adresse aus versendet werden.
- **Passwort** : Legen Sie ein sicheres Passwort fest, das aus (mindestens) 9 Zeichen, einem Großbuchstaben, einem Kleinbuchstaben und einer Ziffer besteht. Verwenden Sie aus Sicherheitsgründen nicht dasselbe Kennwort zweimal. Wählen Sie einen Namen aus, der in keinem Zusammenhang mit Ihren persönlichen Daten steht (vermeiden Sie z. B. Ihren Namen, Vornamen und Ihr Geburtsdatum). Ändern Sie es regelmäßig.

> [!warning]
>
> Die Wahl des Passworts muss folgende Bedingungen erfüllen :
>
> - Mindestens 9 Zeichen
> - Maximal 30 Zeichen
> - Keine Zeichen mit Akzent

Klicken Sie auf `Bestätigen`{.action}, um die Erstellung des Accounts zu starten.

## Weiterführende Informationen <a name="go-further"></a>

[Zimbra Webmail verwenden](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[OVHcloud Zimbra FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
