---
title: Dateisystem auf FreeBSD 12 anpassen
excerpt: Erfahren Sie hier, wie Sie das Dateisystem einer Public Cloud Instanz oder eines VPS unter FreeBSD 12 anpassen
updated: 2020-10-27
---

**Letzte Aktualisierung am 27.10.2020**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

In dieser Anleitung erfahren Sie, wie Sie Ihr Dateisystem nach der Installation oder einer Größenänderung unter FreeBSD 12 anpassen. So kann Ihr System den gesamten verfügbaren Speicherplatz nutzen.

## Voraussetzungen

- Sie haben eine Instanz mit FreeBSD 12 in Ihrem [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud/) oder einen [VPS](https://www.ovhcloud.com/de/vps/) mit FreeBSD 12
- Sie haben die Instanz / den VPS kürzlich installiert oder [angepasst](/pages/platform/public-cloud/resize_of_an_instance)

> [!primary]
>
> In diesem Tutorial wird eine `r2-15` Instanz verwendet. Die Instruktionen können für einen VPS oder eine Public Cloud Instanz befolgt werden. Das Dateisystem hat ursprünglich eine Größe von 5 GB. Nach Abschluss der Anwendungsschritte werden es 50 GB sein.
>

## In der praktischen Anwendung

Um Ihr Dateisystem anpassen zu können, müssen Sie zuerst die Partitionen reparieren.

Verbinden Sie sich mit Ihrer Instanz und schauen Sie sich den Status Ihrer Partitionen an:

```
freebsd@freebsd:~ % sudo gpart show
=>      40  10239920  vtbd0  GPT  (50G) [CORRUPT]
        40      1024      1  freebsd-boot  (512K)
      1064       984         - free -  (492K)
      2048  10235904      2  freebsd-zfs  (4.9G)
  10237952 2008 - free - (1.0M)
```

Hier sehen Sie, dass das Dateisystem korrupt ist. Dieser Zustand ist normal, da er durch die Installation des Images auf der Instanz oder durch die Größenanpassung bedingt ist. Sie müssen es reparieren:

```
freebsd@freebsd:~ % sudo gpart recover vtbd0
vtbd0 recovered
```

Wenn Sie den ersten Befehl wiederholen, können Sie nun feststellen, dass das Dateisystem repariert ist:

```
freebsd@freebsd:~ % sudo gpart show
=>       40  104857520  vtbd0  GPT  (50G)
         40       1024      1  freebsd-boot  (512K)
       1064        984         - free -  (492K)
       2048   10235904      2  freebsd-zfs  (4.9G)
   10237952   94619608         - free -  (45G)
```

Sie können nun die Partition `freebsd-zfs` anpassen. Verwenden Sie hierzu folgenden Befehl:

```
freebsd@freebsd:~ % sudo gpart resize -i 2 vtbd0
vtbd0p2 resized
```

> [!primary]
>
> Möglicherweise ist die Partitionsnummer verschieden; um die richtige Nummer zu finden, überprüfen Sie die Spalte `vtbd0` und die Nummer vor der Zeile `freebsd-zfs`.
>

Sie haben nun Ihr Dateisystem neu dimensioniert. ZFS ist konfiguriert, um sich automatisch zu erweitern. Um dies zu überprüfen, führen Sie folgenden Befehl aus:

```
freebsd@freebsd:~ % zpool list
NAME    SIZE  ALLOC   FREE  CKPOINT  EXPANDSZ   FRAG    CAP  DEDUP  HEALTH  ALTROOT
zroot 49.5G 854M 48.7G - 0% 1% 1.00x ONLINE -
```

Sie werden feststellen, dass in diesem Beispiel `zroot` nun 50 GB groß ist. ZFS wurde also korrekt erweitert.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
