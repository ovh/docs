---
title: 'E-Mail Alias und Weiterleitung verwenden'
excerpt: 'Erfahren Sie hier, wie Sie E-Mail Aliase und Weiterleitungen verwalten'
routes:
  canonical: "/pages/web/emails/feature_redirections"
updated: 2020-05-20
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung 01.02.2023**

## Ziel

In dieser Anleitung finden Sie Informationen und Instruktionen zur Konfiguration von Weiterleitungen und Aliasen für Ihre E-Mail-Lösung, zum Beispiel um auf einem Account A empfangene E-Mails an eine Adresse B weiterzuleiten.

**Diese Anleitung erklärt, wie Sie E-Mail Aliase und Weiterleitungen konfigurieren.**

### Was ist eine E-Mail-Weiterleitung?

Sie können Weiterleitungen verwenden, um das Routing einer E-Mail zu ändern und sie somit an eine oder mehrere andere E-Mail-Adressen weiterzusenden.

Sie möchten zum Beispiel, dass E-Mails an **contact@mydomain.ovh** auch an **john.smith@otherdomain.ovh** zugestellt werden. So können Sie automatisch E-Mails von **contact@mydomain.ovh** zu **john.smith@otherdomain.ovh** weiterleiten lassen.

### Was ist ein E-Mail Alias?

Im Gegensatz zur Weiterleitung ist eine Alias-Adresse kein eigener E-Mail-Account, sondern eine sekundäre Adresse für den E-Mail-Account, für den der Alias eingerichtet wurde.

Indem Sie einen Alias für Ihren E-Mail-Account erstellen, können Sie Ihren Kontakten eine "verschleiernde" Adresse mitteilen, anstatt Ihre persönliche E-Mail-Adresse preiszugeben. Ein E-Mail-Account kann mehrere Alias-Adressen haben.

Für die E-Mail-Adresse **john.smith@mydomain.ovh** besteht beispielsweise der Alias **information@mydomain.ovh**. Sie können dann die Adresse **information@mydomain.ovh** öffentlich machen und Ihre E-Mails auf dem Account von **john.smith@mydomain.ovh** empfangen, ohne dass Absender die Adresse **john.smith@mydomain.ovh** kennen.

### Weiterleitung und Alias im Vergleich <a name="diagram"></a>

- **Einfache Weiterleitung (Schema 1)**: Die E-Mail wird direkt an die Weiterleitungsadresse gesendet, der ursprüngliche Empfänger-Account erhält die E-Mail nicht.

- **Weiterleitung mit lokaler Kopie (Schema 2)**: Sowohl der ursprüngliche Empfänger als auch der Ziel-Account der Weiterleitung erhalten die E-Mail.

- **E-Mail Alias (Schema 3)**: Die E-Mail wird an die Alias-Adresse gesendet und von dem E-Mail-Account empfangen, für das der Alias konfiguriert wurde.

![E-Mails](images/schema-redirect.png){.thumbnail}

> [!primary]
>
> Beachten Sie, dass eine Weiterleitung auch zu mehreren E-Mail-Adressen eingerichtet werden kann.

## Voraussetzungen

- Sie verfügen über eine bereits konfigurierte OVHcloud E-Mail-Lösung: [**Hosted Exchange**](https://www.ovhcloud.com/de/emails/hosted-exchange/), [**Email Pro**](https://www.ovhcloud.com/de/emails/email-pro/) oder **MX Plan** (enthalten in einem [Webhosting](https://www.ovhcloud.com/de/web-hosting/), einem kostenlosen Start 10M Hosting](https://www.ovhcloud.com/de/domains/free-web-hosting/) oder separat bestellt).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Folgen Sie unserem Leitfaden [E-Mail Alias und Weiterleitung verwenden](/pages/web/emails/feature_redirections) im Abschnitt "Hosted E-Mail - MX Plan".