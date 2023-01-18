---
title: "Tutorial - Installation und Konfiguration von Cecil, einem statischen Site Generator (SSG) in PHP"
slug: install-configure-cecil
excerpt: "In diesem Tutorial wird erklärt, wie Sie mit Cecil Ihre statische Website mithilfe einer modernen Template-Engine (Jamstack) erstellen können."
section: 'Tutorials'
order: 04
---

**Letzte Aktualisierung am 18-01-2023**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

Dieses Tutorial zeigt Ihnen, wie Sie [Cecil](https://cecil.app/){.external} installieren und konfigurieren können. Es ist eine in PHP geschriebene Anwendung, die statische Webseiten generieren und verwalten kann.

Eine im Wesentlichen aus statischen Seiten bestehende Website garantiert Ihren Besuchern eine bessere Ladezeit und eine höhere Sicherheit. Ohne dynamischen Inhalt sind Ihre Seiten robuster gegen Cyber-Angriffe. Die Erstellung einer statischen Seite erlaubt Ihnen die Erstellung einer Seite Ihrer Wahl. Sie sparen auch Zeit, da Sie nicht bei Null anfangen müssen.

**In diesem Tutorial wird erläutert, wie Sie mit Cecil Ihre statische Website mit einer modernen Template-Engine (Jamstack) erstellen können.**

## Voraussetzungen

- Sie verfügen über ein OVHcloud [Webhosting Angebot](https://www.ovhcloud.com/de/web-hosting/) mit SSH Zugang. Über diesen Zugang können Sie eine oder mehrere Alternativlösungen online installieren, die die standardmäßig in unseren Webhosting Angeboten ergänzen.
- Machen Sie sich mit der Befehlszeileneingabe vertraut.
- Übertragen Sie Ihre Dateien per FTP mit einem Client wie [FileZilla](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/).
- Konfigurieren Sie Ihre DNS Zone, um Ihre Domain (oder Subdomain) auf Ihr Webhosting zu verweisen. Dies ist besonders nützlich, wenn Sie auf Ihrem Shared Hosting mehrere Websites in [Multisites](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/) hosten möchten.
- Installieren Sie [Composer](https://getcomposer.org/){.external} mit der Datei `composer.phar` im Wurzelverzeichnis Ihres Webhostings oder im Zielordner Ihrer Domain.

## In der praktischen Anwendung

Sie können [Shared Hosting](https://www.ovhcloud.com/de/web-hosting/) verwenden, um Domains oder Subdomains auf mehreren Websites zu deklarieren. Sie benötigen eine Domain oder Subdomain, um Ihre mit **Cecil** erstellte Seite zu deployen.

Um Ihnen dabei zu helfen, eine Domain oder Subdomain auf mehreren Websites Ihres Webhostings zu deklarieren, gehen Sie auf unsere Seite "[Mehrere Websites auf Ihrem Webhosting hosten](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/)".

### Erstellen Sie das Verzeichnis, in dem sich Ihre Dateien befinden

Sobald Sie sich über SSH bei Ihrem Webhosting angemeldet haben, erstellen Sie ein Root-Verzeichnis mit dem folgenden Befehl:

```sh
mkdir mystaticwebsite
```

Ersetzen Sie `mystaticwebsite` durch den Ordnernamen Ihrer Wahl (ohne Akzente und Leerzeichen).

Gehen Sie anschließend in diesen Ordner:

```sh
cd mystaticwebsite
```

Ersetzen Sie `mystaticwebsite` durch Ihren Ordnernamen.

### Herunterladen

Laden Sie in dem Verzeichnis, das Sie gerade erstellt haben, Cecil herunter:

```sh
curl -OL https://github.com/Cecilapp/Cecil/releases/latest/download/cecil.phar
```

### Installation

Starten Sie die Cecil-Installation mit dem folgenden Befehl:

```sh
php cecil.phar new:site
```

Tragen Sie die geforderten Angaben ein:

- Ihre Webseite _(Titel)_
- Eine _Baseline_
- URL Ihrer Seite (Beispiel: `https://mywebsite.ovh`)
- Eine Beschreibung Ihrer Seite

![Cecil-Installation](images/static_website_installation_cecil01.png){.thumbnail}

Nachdem Sie diese Informationen eingegeben haben, müssen Sie die Website jetzt mit dem folgenden Befehl bereitstellen:

```sh
php cecil.phar build
```

Wenn Sie den Inhalt des Verzeichnisses anzeigen, wird das Verzeichnis `_site` angezeigt. Dieses Verzeichnis enthält alle HTML-Dateien und -Assets:

![Cecil-Installation](images/static_website_installation_cecil02.png){.thumbnail}

Sie können nun das Ergebnis sehen, indem Sie zu Ihrem Domainnamen gehen:

![Cecil-Installation](images/static_website_installation_cecil03.png){.thumbnail}

#### Konfiguration des Points der Domain oder Subdomain

Um die Ergebnisse Ihrer Website in Ihrem Browser anzuzeigen, ändern Sie die Art und Weise, wie Ihre Domain oder Subdomain auf das Verzeichnis `_site` verweist, das Sie bei der Installation von **Cecil** erstellt haben.

Wenn Ihre Domain oder Subdomain bei OVHcloud gehostet wird, lesen Sie unsere Anleitungen zur [DNS-Konfiguration](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/) und Einrichtung von [Multisites auf Ihrem Webhosting](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/).

### Ihre Webseite konfigurieren

Allgemeine Informationen zu Ihrer Website können Sie in der Datei `config.yml` konfigurieren:

```sh
nano config.yml
```

Ersetzen Sie die Standardinformationen durch Ihre eigenen, und speichern Sie die Datei.

![YAML-Konfigurationsdatei](images/static_website_installation_cecil04.png){.thumbnail}

### Neue Seite erstellen

Sie können Seiten mit den Daten Ihrer Website mithilfe von Dateien im Markdown-Format erstellen. Diese Seiten können angepasst werden. **Cecil** enthält [Twig](https://twig.symfony.com/){.external}, die Template Engine, die standardmäßig für das [Symfony](https://symfony.com/){.external} Framework verwendet wird.

Ordner und Dateien sind wie folgt organisiert:

- `assets`: Enthält Grafiken, Audio-, Video-, JavaScript- und Formatvorlagen (CSS, Sass).
- `Layouts`: Enthält Vorlagen.
- `Seiten`: Enthält Markdown-Dateien.
- `_site`: Verzeichnis, in dem sich die generierten Dateien befinden und auf das der Domainname verweist.
- `static`: Enthält alle statischen PDF-Dateien.

#### Erstellen einer Markdown-Datei in der Befehlszeile

Geben Sie im Stammverzeichnis der Site den folgenden Befehl ein:

```sh
php cecil.phar new:page mypage.md
```

Anschließend wird im Stammverzeichnis `/pages` eine Datei `mypage.md` erstellt.

Ersetzen Sie `mypage` durch den Namen Ihrer eigenen Seite.

![Cecil-Installation](images/static_website_installation_cecil05.png){.thumbnail}

#### Statische Dateien generieren

Geben Sie im Stammverzeichnis den folgenden Befehl ein:

```sh
php cecil.phar build
```

Ihre Datei befindet sich im Ordner `_site/mypage/`:

![Cecil-Installation](images/static_website_installation_cecil06.png){.thumbnail}

Sie können die Anzeige auf Ihrem Server durchführen, indem Sie die URL Ihrer Seite gefolgt von `/mypage/`:

![Browserergebnis](images/static_website_installation_cecil07.png){.thumbnail}

### Passen Sie Ihre Website-Dateien an

#### Auf Server ändern

Markdown-Dateien können direkt auf dem Webhosting-Server bearbeitet werden. Mit Ihrem [Performance Hosting](https://www.ovhcloud.com/de/web-hosting/performance-offer/) SSH Zugang können Sie [GNU nano](https://nano-editor.org/){.external}, [vi](https://ex-vi.sourceforge.net/){.external} oder [vim](https://www.vim.org/){.external} verwenden.
Die Screenshots dieses Tutorials wurden unter **GNU nano** gemacht.

Bearbeiten Sie die Datei `mypage.md` im Verzeichnis `pages`, indem Sie den folgenden Befehl eingeben, wenn Sie sich im Stammverzeichnis Ihrer Website befinden:

```sh
nano pages/mypage.md
```

Ersetzen Sie `mypage` durch den Namen Ihrer eigenen Seite.

![Datei in GNU nano bearbeiten](images/static_website_installation_cecil08.png){.thumbnail}

Fügen Sie einige Zeilen mithilfe der Markdown-Syntax hinzu:

![Inhalt zur Datei hinzufügen](images/static_website_installation_cecil09.png){.thumbnail}

Löschen Sie die Dateien im Cache mit dem folgenden Befehl:

```sh
php cecil.phar clear
```

Erstellen Sie Ihre Seiten neu, nachdem Sie Ihre Datei gespeichert haben:

```sh
php cecil.phar build
```

Kehren Sie dann zu Ihrer Seite zurück, um das Ergebnis zu sehen:

![Seite aktualisiert](images/static_website_installation_cecil10.png){.thumbnail}

#### Arbeitsplatz ändern

Wenn Sie es vorziehen, Ihren gewohnten Code-Editor zu verwenden, melden Sie sich mit einem FTP-Client auf Ihrem Server an, um die Dateien auf Ihrem Computer abzurufen:

![FileZilla Download](images/static_website_installation_cecil11.png){.thumbnail}

Sie können nun die Dateien in Ihrem I.D.E. bearbeiten:

![Anzeigen in Visual Studio-Code](images/static_website_installation_cecil12.png){.thumbnail}

Laden Sie einfach Ihre veränderten oder neuen Dateien auf Ihren Server und erstellen Sie neu, um Ihre Seiten online zu stellen.

### Die erstellte Seite zum Menü Ihrer Seite hinzufügen

Um diese neue Seite zum Website-Menü hinzuzufügen, ändern Sie manuell den Header der `.md`-Datei, indem Sie die folgende Zeile hinzufügen:

```sh
menu: main
```

### Fazit

**Cecil** ist ein Tool, mit dem eine statische Site aus *Markdown*-Dateien erstellt werden kann. Diese Markup-Sprache ist einfacher zu implementieren als HTML. Die Organisation von Markdown-Dateien bestimmt die Hierarchie Ihrer Webseiten.<br/>
Die Verwendung einer Template Engine, die in der Web-Entwickler-Community weit verbreitet ist, ermöglicht es Ihnen, viele Quellen im Internet zu finden, um eine professionell aussehende Benutzeroberfläche zu entwerfen.

## Weiterführende Informationen

[Offizielle Webseite der Cecil Applikation](https://cecil.app/){.external}

[Hilfe zum Markdown-Format](https://www.markdownguide.org/){.external}

[Unsere Verwendung von FileZilla](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/)
