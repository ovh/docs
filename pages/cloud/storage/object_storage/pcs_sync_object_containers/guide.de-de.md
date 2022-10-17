---
title: Object Storage Swift - Objektcontainer synchronisieren
slug: pcs/sync-object-containers
section: OpenStack Swift Storage Class Specifics
order: 060
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 27.10.2021**

## Ziel

Wenn Sie Ihre Objekte von einem Rechenzentrum in ein anderes oder gar von einem Projekt in ein anderes verschieben möchten, ist die Synchronisation von Objekten zwischen Containern die beste Lösung, um eine Unterbrechung des Dienstes während der Migration zu vermeiden. In dieser Anleitung erfahren Sie, wie Sie diese Lösung umsetzen.

## Voraussetzungen

- [Umgebung für die Verwendung der OpenStack-API mit dem Swift-Client vorbereiten](https://docs.ovh.com/de/public-cloud/vorbereitung_der_umgebung_fur_die_verwendung_der_openstack_api/)
- [Die OpenStack Umgebungsvariablen laden](https://docs.ovh.com/de/public-cloud/die-variablen-der-umgebung-openstack-laden/)
- 2 Objektcontainer in 2 verschiedenen Rechenzentren

## In der praktischen Anwendung

> [!primary]
>
> Enthält Ihr Container Objekte mit einer Größe von mehr als 5 GB, müssen beide Container dendelben Namen haben.
>

### Synchronisationskonfiguration

#### Erstellung des Synchronisationsschlüssels

Damit sich die Container authentifizieren können, muss ein Schlüssel erstellt und auf jedem Objekt-Container konfiguriert werden:

- Schlüssel erstellen:


```bash
root@server-1:~$ sharedKey=$(openssl rand -base64 32)
```


#### Konfiguration des Empfänger-Containers

Zuerst muss der Schlüssel auf dem Container konfiguriert werden, der die Daten empfängt. In diesem Fall befindet er sich in BHS.

- Überprüfen Sie die geladene Region in den Umgebungsvariablen:

```bash
root@server-1:~$ env | grep OS_REGION

OS_REGION_NAME=BHS
```

- Konfigurieren Sie den Schlüssel im Empfänger-Container:

```bash
root@server-1:~$ swift post --sync-key "$sharedKey" containerBHS
```

- Überprüfen Sie mit dem folgenden Befehl, ob die Konfiguration korrekt ist, und ermitteln Sie dabei gleichzeitig den Inhalt der Variable "Account":

```bash
root@server-1:~$ swift stat containerBHS
                         Account: AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29
                       Container: containerBHS
                         Objects: 0
                           Bytes: 0
                        Read ACL:
                       Write ACL:
                         Sync To:
                        Sync Key: 4cA5j5LyaaG2ws32d1fsdQSxnvIJv+y2qFnbnm6Kw=
Meta Access-Control-Allow-Origin: https://www.ovh.com
                   Accept-Ranges: bytes
                X-Storage-Policy: Policy-0
                      Connection: close
                     X-Timestamp: 1444812373.28095
                      X-Trans-Id: B2210C05:895E_9E45A961:01BB_561E52E1_16A3:5298
                    Content-Type: text/plain; charset=utf-8
```

- Rufen Sie die Adresse des Empfänger-Containers ab, um sie anschließend im Quell-Container zu konfigurieren (in diesem Fall: "//OVH_PUBLIC_CLOUD/Region/Account/Container").

```bash
root@server-1:~$ export destContainer="//OVH_PUBLIC_CLOUD/BHS/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerBHS"
```

#### Konfiguration des Quell-Containers

- Region in den Umgebungsvariablen ändern:

```bash
root@server-1:~$ export OS_REGION_NAME=GRA
```

- Konfigurieren des Schlüssels im Quell-Container:

```bash
root@server-1:~$ swift post --sync-key "$sharedKey" containerGRA
```

- Konfigurieren Sie den Empfängercontainer im Quell-Container:

```bash
root@server-1:~$ swift post --sync-to "$destContainer" containerGRA
```

- Wie zuvor kann die Konfigurationen mit folgendem Befehl überprüft werden:

```bash
root@server-1:~$ swift stat containerGRA
         Account: AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29
       Container: containerGRA
         Objects: 3
           Bytes: 15
        Read ACL:
       Write ACL:
         Sync To: //OVH_PUBLIC_CLOUD/BHS/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerBHS
        Sync Key: 4cA5j5LyaaG2wU4lDYnDmEwQSxnvIJv+y2qFnbnm6Kw=
   Accept-Ranges: bytes
      Connection: close
     X-Timestamp: 1444813114.55493
      X-Trans-Id: B2210C05:879E_052711B1:01BB_561E559B_24AE:6B1B
X-Storage-Policy: Policy-0
    Content-Type: text/plain; charset=utf-8
```

#### Überprüfung der Synchronisation

Nach einigen Minuten (abhängig von Anzahl und Größe der zu versendenden Dateien) kann überprüft werden, ob die Synchronisation korrekt verläuft, indem die Dateien einfach in jedem Container aufgelistet werden.

- Auflisten der Dateien im Quell-Container:

```bash
root@server-1:~$ swift list containerGRA
test1.txt
test2.txt
test3.txt
```

- Auflisten der Dateien im Empfänger-Container:

```bash
root@server-1:~$ swift list containerBHS
test1.txt
test2.txt
test3.txt
```

### Synchronisation zwischen zwei Containern umkehren

Um die Synchronisation zwischen zwei Containern umzukehren, muss der Metadaten-Eintrag `—sync-to` aus dem Quell-Container gelöscht und dann auf dem anderen Container deklariert werden, der so zum neuen Quell-Container wird.

> [!warning]
>
> Vergessen Sie nicht, auch die Region in der neuen `—sync-to`-URL zu ändern.
>

```bash
root@server-1:~$ swift post -H "X-Container-Sync-To:" containerGRA
root@server-1:~$ export destContainer="//OVH_PUBLIC_CLOUD/GRA/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerGRA"
root@server-1:~$ export OS_REGION_NAME=BHS
root@server-1:~$ swift post --sync-to "$destContainer" containerBHS
```

### Synchronisation zwischen zwei Containern abbrechen

Um die Synchronisation zwischen zwei Containern zu beenden, müssen die Metadaten `—sync-key` und `—sync-to` gelöscht werden.

```bash
swift post -H "X-Container-Sync-Key:" containerGRA
swift post -H "X-Container-Sync-To:" containerGRA
```

> [!primary]
>
> Diese Anleitung kann auch für die Migration von RunAbove-Objekten nach Public Cloud verwendet werden.
>

## Weiterführende Informationen

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
