---
title: 'Datenbank auf Ihrem Datenbankserver wiederherstellen und importieren'
slug: datenbank-importieren
excerpt: 'Erfahren Sie hier, wie Sie Ihre Datenbank wiederherstellen und importieren'
section: SQL Private
order: 5
---

**Stand 11.06.2020**

## Ziel

Nach einem Fehler auf Ihrer Datenbank müssen Sie in der Lage sein, ein Backup wiederherzustellen oder eine lokale Datenbank importieren zu können. 

**Diese Anleitung erklärt, wie Sie eine Datenbank auf Ihrem Datenbankserver wiederherstellen oder importieren können.**

## Voraussetzungen

- Sie verfügen über ein [SQL Private oder ](https://www.ovh.com/fr/hebergement-web/options-sql.xml){.external}Cloud Databases Hosting[ ](https://www.ovh.com/fr/cloud-databases){.external}.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} angemeldet.

## In der praktischen Anwendung

> [!primary]
>
> Beachten Sie, dass die [SQL Private](https://www.ovh.com/fr/hebergement-web/options-sql.xml){.external} und [Cloud Databases](https://www.ovh.com/fr/cloud-databases){.external} Angebote keinen Zugriff auf den Host gewähren, aber auf den darauf gehosteten Datenbanken gibt es keinen "root" Superuser Zugang. Generische SQL-Befehle funktionieren normal, und Programme wie HeidiSQL, SQuirreL oder Adminer sind vollständig kompatibel.
> 

### Datenbank über das Kundencenter wiederherstellen und importieren

Begeben Sie sich in Ihr Kundencenter (Rubrik IP) Klicken Sie auf den Tab `Web` und dann `auf`{.action} Datenbank im linken Bereich. Wählen Sie den Namen Ihres Datenbankservers aus. Gehen Sie zum Tab `Datenbanken`.

In der Spalte **"Sicherungen"** entspricht die Zahl der für Ihre Datenbank verfügbaren Sicherungen.

#### 1. Eine Sicherung wiederherstellen

Klicken Sie auf `...`{.action} rechts neben der Datenbank und dann auf `Sicherungen anzeigen`{.action}.

Die Liste der verfügbaren Backups erscheint, klicken Sie auf den Button `...`{.action} rechts neben dem ausgewählten Backup und dann auf `Backup wiederherstellen`{.action}.

![private-sql](images/private-sql-restore01.png){.thumbnail}

> [!warning]
>
> Wiederherstellung bedeutet, dass der Inhalt der Datenbank nach der Wiederherstellung ersetzt wird.
> Wenn Sie sich nicht sicher sind, was Sie tun, nehmen Sie bitte ein Backup vor.
> 

#### 2. Eine lokale Sicherung importieren

Klicken Sie auf den Button `..`{.action}. rechts neben der Datenbank und dann auf `Datei importieren`{.action}.

![private-sql](images/private-sql-import01.png){.thumbnail}

Hierzu haben Sie zwei Möglichkeiten:

#####  Eine neue Datei importieren

Klicken Sie anschließend auf **"Eine neue Datei importieren"** und dann auf `Weiter`{.action}.

Geben Sie einen Namen für Ihre importierte Datei ein, klicken Sie auf `Durchsuchen`{.action}, um diese auszuwählen, dann `Versenden`{.action} und dann auf `Weiter`{.action}.

> [!warning]
>
> Die Datei muss im ".gz"-Format sein.
> 

![private-sql](images/private-sql-import02.png){.thumbnail}

Setzen Sie, wenn Sie möchten, **"Aktuelle Datenbank leeren"** vor dem Import und **"E-Mail am Ende des Imports senden"ein, um über den Abschluss der Operation auf der Referenz-E-Mail-Adresse Ihres OVHcloud Accounts informiert zu werden, und klicken Sie dann auf **Bestätigen` `{.action}.

##### Bestehende Datei verwenden

Wenn Sie bereits zuvor eine Datei importiert haben, können Sie die Option "**Bestehende Datei importieren"auswählen**.

Wählen Sie dann die Datei im Drop-down-Menü aus und klicken Sie auf `Weiter`{.action}.

![private-sql](images/private-sql-import03.png){.thumbnail}

Setzen Sie, wenn Sie möchten, **"Aktuelle Datenbank leeren"** vor dem Import und **"E-Mail am Ende des Imports senden"ein, um über den Abschluss der Operation auf der Referenz-E-Mail-Adresse Ihres OVHcloud Accounts informiert zu werden, und klicken Sie dann auf **Bestätigen` `{.action}.

### MySQL oder MariaDB Datenbank-Import außerhalb des Kundencenters

In manchen Fällen kann es sein, dass der auf Ihrem Datenbankserver verfügbare RAM nicht ausreicht, um den gewünschten Import durchzuführen. Ist das der Fall, empfehlen wir Ihnen, das Tool von OVHcloud im Kundencenter zu verwenden. In dieser Anleitung finden [Sie den Abschnitt "Datenbank wiederherstellen und importieren"](./#sauvegarde-restauration-et-importation-depuis-lespace-client_1){.external}.


#### Meine MySQL oder MariaDB Datenbank über phpMyAdmin importieren
Um Ihre Datenbank direkt über phpMyAdmin zu importieren müssen Sie sich zuerst mit ihr verbinden. Gehen Sie hierzu in den Abschnitt ["Mit einer MySQL oder MariaDB Datenbank verbinden"](../tout-sur-le-sql-prive/#se-connecter-a-une-base-de-donnees-mysql-ou-mariadb){.external}

Wenn Sie auf phpMyAdmin eingeloggt sind, wählen Sie Ihre Datenbank aus, indem Sie auf ihren Namen klicken.

Klicken Sie anschließend auf den Tab `Importieren`{.action}.

Wählen Sie Ihre Backup-Datei aus, indem Sie `Durchsuchen`{.action} klicken (Achtung, die Datei darf 100 MB nicht überschreiten).

> [!primary]
>
> Wir empfehlen Ihnen, Ihre Datenbank in mehrere Dateien aufzuteilen, wenn sie mehr als 100 MB beträgt, und mehrere Importe über phpMyAdmin durchzuführen.<br>
> Der Import von Dateien über 100 MB kann über das Kundencenter erfolgen, indem [Sie den Schritt "Eine Datenbank speichern, wiederherstellen und importieren" durchführen](./#sauvegarder-restaurer-et-importer-une-base-de-donnees-depuis-lespace-client) 


Lassen Sie die Standardoptionen liegen und klicken Sie auf `Ausführen`{.action}, um den Import zu starten.

![private-sql](images/private-sql-import04.png){.thumbnail}

#### Meine Datenbank MySQL oder MariaDB in die Kommandozeile importieren

Diese Aktion ist nur über [SSH]( ../mutualise-le-ssh-sur-les-hebergements-mutualises/){.external} über ein OVHcloud Shared Hosting möglich.

```bash
cat nom_de_la_base.sql | mysql --host=serveur --user=utilisateur --port=port --password=password nom_de_la_base
```
#### Meine MySQL oder MariaDB Datenbank aus einer PHP Datei importieren

```php
1. <?php
2. echo "Ihre Datenbank wird wiederhergestellt.......<br>"
3. system("cat nom_de_la_base.sql | mysql --host=serveur --user=utilisateur --port=port --password=password nom_de_la_base");
4. echo: "Es ist vorbei. Ihre Datenbank ist auf diesem Hosting eingerichtet."
5
```

> [!warning]
>
> - Um zu vermeiden, dass jemand auf diese Datei mit sensiblen Daten zugreift, stellen Sie in der Anleitung sicher, dass der Zugriff darauf gesichert ist: [Wie kann ich den Zugang zu einem Verzeichnis per Authentifizierung schützen?]( ../mutualise-le-ssh-sur-les-hebergements-mutualises/){.external}
> - Diese Aktion ist nur über ein Shared Hosting von OVHcloud möglich.
>

### Import von PostgreSQL-Datenbanken außerhalb des Kundencenters

In manchen Fällen kann es sein, dass der auf Ihrem Datenbankserver verfügbare RAM nicht ausreicht, um den gewünschten Import durchzuführen. Ist das der Fall, empfehlen wir Ihnen, das Tool von OVHcloud im Kundencenter zu verwenden. In dieser Anleitung finden [Sie den Abschnitt "Datenbank wiederherstellen und importieren"](./#sauvegarde-restauration-et-importation-depuis-lespace-client_1){.external}.

#### Meine PostgreSQL Datenbank in die Kommandozeile importieren

Diese Aktion ist nur über [SSH]( ../mutualise-le-ssh-sur-les-hebergements-mutualises/){.external} von einem OVHcloud Shared Hosting in einer stabilen oder höheren Version möglich.

```bash
psql --host=serveur --port=port --user=utilisateur --password=password nom_de_la_base < nom_de_la_base.sql
```

#### Meine PostgreSQL-Datenbank aus einer PHP-Datei importieren

```php
1. <?php
2. echo "Ihre Datenbank wird wiederhergestellt.......<br>"
3. system("PGPASSWORD=mot_de_passe psql --host=serveur --port=port --user=utilisateur --password=password nom_de_la_base < nom_de_la_base.sql");
4. echo: "Es ist vorbei. Ihre Datenbank ist auf diesem Hosting eingerichtet."
5
```

> [!warning]
>
> - Um zu vermeiden, dass jemand auf diese Datei mit sensiblen Daten zugreift, denken Sie daran, den Zugang zu dieser Datei abzusichern, indem Sie in der Anleitung "Wie schützen Sie den Zugang zu einem Verzeichnis [durch Authentifizierung?"]( ../mutualise-le-ssh-sur-les-hebergements-mutualises/){.external}
> - Diese Aktion ist nur über ein Shared Hosting von OVHcloud möglich.
>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com>.

