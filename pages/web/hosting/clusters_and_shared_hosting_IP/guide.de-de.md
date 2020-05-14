---
title: 'Verzeichnis von IP-Adressen für die Webhosting Cluster'
excerpt: 'Erfahren Sie hier, welche IP-Adresse für Ihr OVHcloud Webhosting zu verwenden ist'
slug: verzeichnis-der-ip-adressen-web-hosting-cluster
section: Webhosting-Konfiguration
order: 3
---

**Letzte Aktualisierung am 29.04.2020**

## Ziel

Es kann notwendig werden, Zugriffseinstellungen für Dienste manuell anzupassen. Hierfür benötigen Sie dann die korrekte IP-Adresse, die zur spezifischen Konfiguration Ihres Webhostings gehört. Das ist etwa der Fall beim Konfigurieren von DNS-Zonen, ACLs oder OVHcloud Zusatzleistungen wie CDN, Länder-IPs oder SSL-Zertifikate.

**Diese Anleitung verzeichnet alle verfügbaren IP-Adressen für OVHcloud Webhostings, sortiert nach Clustern.**

> [!primary]
>
> Bitte beachten Sie, dass die IP-Adressen der CDN-Option "Anycast"-Adressen sind; das bedeutet, sie benötigen keine Geolokalisierung (siehe auch die Informationen auf unserer [Webseite](https://www.ovh.de/hosting/cdn.xml).
> 

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovh.de/hosting) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).

## In der praktischen Anwendung

Um herauszufinden, auf welchem Webhosting Cluster Ihr Dienst liegt, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und klicken Sie im Bereich `Web`{.action} links in der Menüleiste auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und gehen Sie dann auf den Tab `FTP - SSH`{.action}. Sie können hier die Clusternummer unter **FTP-Server** ablesen.

### Cluster 002

#### IP-Adressen der Cluster nach Land


|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|213.186.33.2|2001:41d0:1:1b00:213:186:33:2|
|Irland|IE|188.165.7.2|2001:41d0:1:1b00:188:165:7:2|
|Portugal|PT|94.23.79.2|2001:41d0:1:1b00:94:23:79:2|
|Vereinigtes Königreich|UK|87.98.255.2|2001:41d0:1:1b00:87:98:255:2|
|Italien|IT|94.23.64.2|2001:41d0:1:1b00:94:23:64:2|
|Spanien|ES|87.98.231.2|2001:41d0:1:1b00:87:98:231:2|
|Polen|PL|87.98.239.2|2001:41d0:1:1b00:87:98:239:2|
|Tschechische Republik|CZ|94.23.175.2|2001:41d0:1:1b00:94:23:175:2|
|Niederlande|NL|94.23.151.2|2001:41d0:1:1b00:94:23:151:2|
|Finnland|FI|188.165.143.2|2001:41d0:1:1b00:188:165:143:2|
|Litauen|LT|188.165.31.2|2001:41d0:1:1b00:188:165:31:2|
|Deutschland|DE|87.98.247.2|2001:41d0:1:1b00:87:98:247:2|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
213.186.33.69
```

Wenn Sie ein **Sectigo SSL Zertifikat (kostenpflichtig)** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
46.105.174.33
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
51.68.11.191
```


## Cluster 003

#### IP-Adressen der Cluster nach Land


|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|213.186.33.4|2001:41d0:1:1b00:213:186:33:4|
|Irland|IE|188.165.7.4|2001:41d0:1:1b00:188:165:7:4|
|Portugal|PT|94.23.79.4|2001:41d0:1:1b00:94:23:79:4|
|Vereinigtes Königreich|UK|87.98.255.4|2001:41d0:1:1b00:87:98:255:4|
|Italien|IT|94.23.64.4|2001:41d0:1:1b00:94:23:64:4|
|Spanien|ES|87.98.231.4|2001:41d0:1:1b00:87:98:231:4|
|Polen|PL|87.98.239.4|2001:41d0:1:1b00:87:98:239:4|
|Tschechische Republik|CZ|94.23.175.4|2001:41d0:1:1b00:94:23:175:4|
|Niederlande|NL|94.23.151.4|2001:41d0:1:1b00:94:23:151:4|
|Finnland|FI|188.165.143.4|2001:41d0:1:1b00:188:165:143:4|
|Litauen|LT|188.165.31.4|2001:41d0:1:1b00:188:165:31:4|
|Deutschland|DE|87.98.247.4|2001:41d0:1:1b00:87:98:247:4|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
213.186.33.85
```

Wenn Sie ein **Sectigo SSL Zertifikat (kostenpflichtig)** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
46.105.174.34
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
51.68.11.195
```


## Cluster 005

#### IP-Adressen der Cluster nach Land


|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|213.186.33.16|2001:41d0:1:1b00:213:186:33:16|
|Irland|IE|188.165.7.16|2001:41d0:1:1b00:188:165:7:16|
|Portugal|PT|94.23.79.16|2001:41d0:1:1b00:94:23:79:16|
|Vereinigtes Königreich|UK|87.98.255.16|2001:41d0:1:1b00:87:98:255:16|
|Italien|IT|94.23.64.16|2001:41d0:1:1b00:94:23:64:16|
|Spanien|ES|87.98.231.16|2001:41d0:1:1b00:87:98:231:16|
|Polen|PL|87.98.239.16|2001:41d0:1:1b00:87:98:239:16|
|Tschechische Republik|CZ|94.23.175.16|2001:41d0:1:1b00:94:23:175:16|
|Niederlande|NL|94.23.151.16|2001:41d0:1:1b00:94:23:151:16|
|Finnland|FI|188.165.143.16|2001:41d0:1:1b00:188:165:143:16|
|Litauen|LT|188.165.31.16|2001:41d0:1:1b00:188.165.31.16|
|Deutschland|DE|87.98.247.16|2001:41d0:1:1b00:87:98:247:16|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
213.186.33.95
```

Wenn Sie ein **Sectigo SSL Zertifikat (kostenpflichtig)** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
46.105.174.35
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
51.68.11.199
```


## Cluster 006

#### IP-Adressen der Cluster nach Land


|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|213.186.33.17|2001:41d0:1:1b00:213:186:33:17|
|Irland|IE|188.165.7.17|2001:41d0:1:1b00:188:165:7:17|
|Portugal|PT|94.23.79.17|2001:41d0:1:1b00:94:23:79:17|
|Vereinigtes Königreich|UK|87.98.255.17|2001:41d0:1:1b00:87:98:255:17|
|Italien|IT|94.23.64.17|2001:41d0:1:1b00:94:23:64:17|
|Spanien|ES|87.98.231.17|2001:41d0:1:1b00:87:98:231:17|
|Polen|PL|87.98.239.17|2001:41d0:1:1b00:87:98:239:17|
|Tschechische Republik|CZ|94.23.175.17|2001:41d0:1:1b00:94:23:175:17|
|Niederlande|NL|94.23.151.17|2001:41d0:1:1b00:94:23:151:17|
|Finnland|FI|188.165.143.17|2001:41d0:1:1b00:188:165:143:17|
|Litauen|LT|188.165.31.17|2001:41d0:1:1b00:188:165:31:17|
|Deutschland|DE|87.98.247.17|2001:41d0:1:1b00:87:98:247:17|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
213.186.33.97
```

Wenn Sie ein **Sectigo SSL Zertifikat (kostenpflichtig)** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
46.105.174.36
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
51.68.11.203
```

## Cluster 007

#### IP-Adressen der Cluster nach Land


|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|213.186.33.18|2001:41d0:1:1b00:213:186:33:18|
|Irland|IE|188.165.7.18|2001:41d0:1:1b00:188:165:7:18|
|Portugal|PT|94.23.79.18|2001:41d0:1:1b00:94:23:79:18|
|Vereinigtes Königreich|UK|87.98.255.18|2001:41d0:1:1b00:87:98:255:18|
|Italien|IT|94.23.64.18|2001:41d0:1:1b00:94:23:64:18|
|Spanien|ES|87.98.231.18|2001:41d0:1:1b00:87:98:231:18|
|Polen|PL|87.98.239.18|2001:41d0:1:1b00:87:98:239:18|
|Tschechische Republik|CZ|94.23.175.18|2001:41d0:1:1b00:94:23:175:18|
|Niederlande|NL|94.23.151.18|2001:41d0:1:1b00:94:23:151:18|
|Finnland|FI|188.165.143.18|2001:41d0:1:1b00:188:165:143:18|
|Litauen|LT|188.165.31.18|2001:41d0:1:1b00:188:165:31:18|
|Deutschland|DE|87.98.247.18|2001:41d0:1:1b00:87:98:247:18|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
213.186.33.105
```

Wenn Sie ein **Sectigo SSL Zertifikat (kostenpflichtig)** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
46.105.174.37
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
51.68.11.207
```


## Cluster 010

#### IP-Adressen der Cluster nach Land


|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|213.186.33.19|2001:41d0:1:1b00:213:186:33:19|
|Irland|IE|188.165.7.19|2001:41d0:1:1b00:188:165:7:19|
|Portugal|PT|94.23.79.19|2001:41d0:1:1b00:94:23:79:19|
|Vereinigtes Königreich|UK|87.98.255.19|2001:41d0:1:1b00:87:98:255:19|
|Italien|IT|94.23.64.19|2001:41d0:1:1b00:94:23:64:19|
|Spanien|ES|87.98.231.19|2001:41d0:1:1b00:87:98:231:19|
|Polen|PL|87.98.239.19|2001:41d0:1:1b00:87:98:239:19|
|Tschechische Republik|CZ|94.23.175.19|2001:41d0:1:1b00:94:23:175:19|
|Niederlande|NL|94.23.151.19|2001:41d0:1:1b00:94:23:151:19|
|Finnland|FI|188.165.143.19|2001:41d0:1:1b00:188:165:143:19|
|Litauen|LT|188.165.31.19|2001:41d0:1:1b00:188:165:31:19|
|Deutschland|DE|87.98.247.19|2001:41d0:1:1b00:87:98:247:19|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
213.186.33.107
```

Wenn Sie ein **Sectigo SSL Zertifikat (kostenpflichtig)** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
46.105.174.38
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
51.68.11.211
```


## Cluster 011

#### IP-Adressen der Cluster nach Land


|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|213.186.33.40|2001:41d0:1:1b00:213:186:33:40|
|Irland|IE|188.165.7.40|2001:41d0:1:1b00:188:165:7:40|
|Portugal|PT|94.23.79.40|2001:41d0:1:1b00:94:23:79:40|
|Vereinigtes Königreich|UK|87.98.255.40|2001:41d0:1:1b00:87:98:255:40|
|Italien|IT|94.23.64.40|2001:41d0:1:1b00:94:23:64:40|
|Spanien|ES|87.98.231.40|2001:41d0:1:1b00:87:98:231:40|
|Polen|PL|87.98.239.40|2001:41d0:1:1b00:87:98:239:40|
|Tschechische Republik|CZ|94.23.175.40|2001:41d0:1:1b00:94:23:175:40|
|Niederlande|NL|94.23.151.40|2001:41d0:1:1b00:94:23:151:40|
|Finnland|FI|188.165.143.40|2001:41d0:1:1b00:188:165:143:40|
|Litauen|LT|188.165.31.40|2001:41d0:1:1b00:188:165:31:40|
|Deutschland|DE|87.98.247.40|2001:41d0:1:1b00:87:98:247:40|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
213.186.33.151
```

Wenn Sie ein **Sectigo SSL Zertifikat (kostenpflichtig)** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
46.105.174.39
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
51.68.11.215
```


## Cluster 012

#### IP-Adressen der Cluster nach Land


|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|213.186.33.48|2001:41d0:1:1b00:213:186:33:48|
|Irland|IE|188.165.7.48|2001:41d0:1:1b00:188:165:7:48|
|Portugal|PT|94.23.79.48|2001:41d0:1:1b00:94:23:79:48|
|Vereinigtes Königreich|UK|87.98.255.48|2001:41d0:1:1b00:87:98:255:48|
|Italien|IT|94.23.64.48|2001:41d0:1:1b00:94:23:64:48|
|Spanien|ES|87.98.231.48|2001:41d0:1:1b00:87:98:231:48|
|Polen|PL|87.98.239.48|2001:41d0:1:1b00:87:98:239:48|
|Tschechische Republik|CZ|94.23.175.48|2001:41d0:1:1b00:94:23:175:48|
|Niederlande|NL|94.23.151.48|2001:41d0:1:1b00:94:23:151:48|
|Finnland|FI|188.165.143.48|2001:41d0:1:1b00:188:165:143:48|
|Litauen|LT|188.165.31.48|2001:41d0:1:1b00:188:165:31:48|
|Deutschland|DE|87.98.247.48|2001:41d0:1:1b00:87:98:247:48|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
213.186.33.153
```

Wenn Sie ein **Sectigo SSL Zertifikat (kostenpflichtig)** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
46.105.174.40
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
51.68.11.219
```


## Cluster 013

#### IP-Adressen der Cluster nach Land

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|213.186.33.24|2001:41d0:1:1b00:213:186:33:24|
|Irland|IE|188.165.7.24|2001:41d0:1:1b00:188:165:7:24|
|Portugal|PT|94.23.79.24|2001:41d0:1:1b00:94:23:79:24|
|Vereinigtes Königreich|UK|87.98.255.24|2001:41d0:1:1b00:87:98:255:24|
|Italien|IT|94.23.64.24|2001:41d0:1:1b00:94:23:64:24|
|Spanien|ES|87.98.231.24|2001:41d0:1:1b00:87:98:231:24|
|Polen|PL|87.98.239.24|2001:41d0:1:1b00:87:98:239:24|
|Tschechische Republik|CZ|94.23.175.24|2001:41d0:1:1b00:94:23:175:24|
|Niederlande|NL|94.23.151.24|2001:41d0:1:1b00:94:23:151:24|
|Finnland|FI|188.165.143.24|2001:41d0:1:1b00:188:165:143:24|
|Litauen|LT|188.165.31.24|2001:41d0:1:1b00:188:165:31:24|
|Deutschland|DE|87.98.247.24|2001:41d0:1:1b00:87:98:247:24|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
213.186.33.83
```

Wenn Sie ein **Sectigo SSL Zertifikat (kostenpflichtig)** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
46.105.174.41
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
51.68.11.223
```


## Cluster 014

#### IP-Adressen der Cluster nach Land


|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|213.186.33.87|2001:41d0:1:1b00:213:186:33:87|
|Irland|IE|188.165.7.87|2001:41d0:1:1b00:188:165:7:87|
|Portugal|PT|94.23.79.87|2001:41d0:1:1b00:94:23:79:87|
|Vereinigtes Königreich|UK|87.98.255.87|2001:41d0:1:1b00:87:98:255:87|
|Italien|IT|94.23.64.87|2001:41d0:1:1b00:94:23:64:87|
|Spanien|ES|87.98.231.87|2001:41d0:1:1b00:87:98:231:87|
|Polen|PL|87.98.239.87|2001:41d0:1:1b00:87:98:239:87|
|Tschechische Republik|CZ|94.23.175.87|2001:41d0:1:1b00:94:23:175:87|
|Niederlande|NL|94.23.151.87|2001:41d0:1:1b00:94:23:151:87|
|Finnland|FI|188.165.143.87|2001:41d0:1:1b00:188:165:143:87|
|Litauen|LT|188.165.31.87|2001:41d0:1:1b00:188:165:31:87|
|Deutschland|DE|87.98.247.87|2001:41d0:1:1b00:87:98:247:87|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
213.186.33.169
```

Wenn Sie ein **Sectigo SSL Zertifikat (kostenpflichtig)** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
46.105.174.42
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
51.68.11.227
```


## Cluster 015

#### IP-Adressen der Cluster nach Land


|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|213.186.33.3|2001:41d0:1:1b00:213:186:33:3|
|Irland|IE|188.165.7.3|2001:41d0:1:1b00:188:165:7:3|
|Portugal|PT|94.23.79.3|2001:41d0:1:1b00:94:23:79:3|
||Vereinigtes Königreich|UK|87.98.255.3|2001:41d0:1:1b00:87:98:255:3|
|Italien|IT|94.23.64.3|2001:41d0:1:1b00:94:23:64:3|
|Spanien|ES|87.98.231.3|2001:41d0:1:1b00:87:98:231:3|
|Polen|PL|87.98.239.3|2001:41d0:1:1b00:87:98:239:3|
|Tschechische Republik|CZ|94.23.175.3|2001:41d0:1:1b00:94:23:175:3|
|Niederlande|NL|94.23.151.3|2001:41d0:1:1b00:94:23:151:3|
|Finnland|FI|188.165.143.3|2001:41d0:1:1b00:188:165:143:3|
|Litauen|LT|188.165.31.3|2001:41d0:1:1b00:188:165:31:3|
|Deutschland|DE|87.98.247.3|2001:41d0:1:1b00:87:98:247:3|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
213.186.33.171
```

Wenn Sie ein **Sectigo SSL Zertifikat (kostenpflichtig)** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
46.105.174.43
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
51.68.11.231
```


## Cluster 017

#### IP-Adressen der Cluster nach Land


|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|213.186.33.50|2001:41d0:1:1b00:213:186:33:50|
|Irland|IE|188.165.7.50|2001:41d0:1:1b00:188:165:7:50|
|Portugal|PT|94.23.79.50|2001:41d0:1:1b00:94:23:79:50|
|Vereinigtes Königreich|UK|87.98.255.50|2001:41d0:1:1b00:87:98:255:50|
|Italien|IT|94.23.64.50|2001:41d0:1:1b00:94:23:64:50|
|Spanien|ES|87.98.231.50|2001:41d0:1:1b00:87:98:231:50|
|Polen|PL|87.98.239.50|2001:41d0:1:1b00:87:98:239:50|
|Tschechische Republik|CZ|94.23.175.50|2001:41d0:1:1b00:94:23:175:50|
|Niederlande|NL|94.23.151.50|2001:41d0:1:1b00:94:23:151:50|
|Finnland|FI|188.165.143.50|2001:41d0:1:1b00:188:165:143:50|
|Litauen|LT|188.165.31.50|2001:41d0:1:1b00:188:165:31:50|
|Deutschland|DE|87.98.247.50|2001:41d0:1:1b00:87:98:247:50|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
213.186.33.173
```

Wenn Sie ein **Sectigo SSL Zertifikat (kostenpflichtig)** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
46.105.174.44
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
51.68.11.239
```


## Cluster 020

#### IP-Adressen der Cluster nach Land


|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|46.105.57.169|2001:41d0:301::20|
|Irland|IE|51.254.78.227|2001:41d0:301:3::20|
|Portugal|PT|5.135.59.60|2001:41d0:301:2::20|
|Vereinigtes Königreich|UK|51.254.94.183|2001:41d0:301:12::20|
|Italien|IT|37.59.236.156|2001:41d0:301:11::20|
|Spanien|ES|37.59.203.111|2001:41d0:301:4::20|
|Polen|PL|178.32.149.185|2001:41d0:301:5::20|
|Tschechische Republik|CZ|51.254.181.43|2001:41d0:301:6::20|
|Niederlande|NL|37.59.164.205|2001:41d0:301:7::20|
|Finnland|FI|5.196.208.117|2001:41d0:301:8::20|
|Litauen|LT|5.196.129.52|2001:41d0:301:9::20|
|Deutschland|DE|5.135.108.219|2001:41d0:301:1::20|
|Belgien|BE|5.196.203.200|2001:41d0:301:10::20|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
213.186.33.176
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
91.134.248.253
```


## Cluster 021

#### IP-Adressen der Cluster nach Land


|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|188.165.53.185|2001:41d0:301::21|
|Irland|IE|188.165.6.20|2001:41d0:301:6::21|
|Portugal|PT|94.23.75.235|2001:41d0:301:2::21|
|Vereinigtes Königreich|UK|94.23.152.220|2001:41d0:301:12::21|
|Italien|IT|94.23.69.227|2001:41d0:301:11::21|
|Spanien|ES|87.98.230.241|2001:41d0:301:4::21|
|Polen|PL|188.165.23.19|2001:41d0:301:5::21|
|Tschechische Republik|CZ|94.23.173.184|2001:41d0:301:6::21|
|Niederlande|NL|94.23.144.60|2001:41d0:301:7::21|
|Finnland|FI|188.165.139.219|2001:41d0:301:8::21|
|Litauen|LT|188.165.30.41|2001:41d0:301:9::21|
|Deutschland|DE|94.23.162.9|2001:41d0:301:1::21|
|Belgien|BE|178.32.40.72|2001:41d0:301:10::21|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:


```bash
213.186.33.177
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
91.134.248.245
```

## Cluster 023

#### IP-Adressen der Cluster nach Land

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|164.132.235.17|2001:41d0:301::23|
|Irland|IE|79.137.112.24|2001:41d0:301:3::23|
|Portugal|PT|5.135.68.66|2001:41d0:301:2::23|
|Vereinigtes Königreich|UK|178.32.59.150|2001:41d0:301:12::23|
|Italien|IT|178.32.140.171|2001:41d0:301:11::23|
|Spanien|ES|51.254.16.36|2001:41d0:301:4::23|
|Polen|PL|87.98.235.184|2001:41d0:301:5::23|
|Tschechische Republik|CZ|94.23.169.83|2001:41d0:301:6::23|
|Niederlande|NL|94.23.148.187|2001:41d0:301:7::23|
|Finnland|FI|178.32.17.246|2001:41d0:301:8::23|
|Litauen|LT|37.59.69.122|2001:41d0:301:9::23|
|Deutschland|DE|87.98.242.65|2001:41d0:301:1::23|
|Belgien|BE|137.74.229.68|2001:41d0:301:10::23|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
213.186.33.186
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
91.134.248.235
```

## Cluster 024

#### IP-Adressen der Cluster nach Land

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|188.165.61.82|2001:41d0:301::24|
|Irland|IE|188.165.6.81|2001:41d0:301:3::24|
|Portugal|PT|5.135.68.67|2001:41d0:301:2::24|
|Vereinigtes Königreich|UK|178.32.59.194|2001:41d0:301:12::24|
|Italien|IT|178.32.140.172|2001:41d0:301:11::24|
|Spanien|ES|51.255.132.41|2001:41d0:301:4::24|
|Polen|PL|94.23.88.105|2001:41d0:301:5::24|
|Tschechische Republik|CZ|94.23.169.75|2001:41d0:301:6::24|
|Niederlande|NL|94.23.149.14|2001:41d0:301:7::24|
|Finnland|FI|188.165.138.2|2001:41d0:301:8::24|
|Litauen|LT|164.132.150.73|2001:41d0:301:9::24|
|Deutschland|DE|178.33.38.88|2001:41d0:301:1::24|
|Belgien|BE|213.32.81.103|2001:41d0:301:10::24|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
213.186.33.187
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
91.134.248.230
```

## Cluster 025

#### IP-Adressen der Cluster nach Land

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|188.165.59.25|2001:41d0:301::25|
|Irland|IE|188.165.6.82|2001:41d0:301:3::25|
|Portugal|PT|213.251.139.148|2001:41d0:301:2::25|
|Vereinigtes Königreich|UK|178.32.52.5|2001:41d0:301:12::2|
|Italien|IT|178.32.138.102|2001:41d0:301:11::25|
|Spanien|ES|188.165.130.4|2001:41d0:301:4::25|
|Polen|PL|188.165.16.78|2001:41d0:301:5::25|
|Tschechische Republik|CZ|51.254.146.179|2001:41d0:301:6::25|
|Niederlande|NL|51.254.154.69|2001:41d0:301:7::25|
|Finnland|FI|178.32.129.72|2001:41d0:301:8::25|
|Litauen|LT|188.165.26.160|2001:41d0:301:9::25|
|Deutschland|DE|178.33.34.108|2001:41d0:301:1::25|
|Belgien|BE|87.98.252.243|2001:41d0:301:10::25|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
145.239.37.172
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
91.134.248.215
```

## Cluster 026

#### IP-Adressen der Cluster nach Land

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|87.98.154.146|2001:41d0:301::26|
|Irland|IE|188.165.4.35|2001:41d0:301:3::26|
|Portugal|PT|51.254.64.107|2001:41d0:301:2::26|
|Vereinigtes Königreich|UK|91.134.201.112|2001:41d0:301:12::26|
|Italien|IT|94.23.66.212|2001:41d0:301:11::26|
|Spanien|ES|188.165.129.145|2001:41d0:301:4::26|
|Polen|PL|178.32.205.96|2001:41d0:301:5::26|
|Tschechische Republik|CZ|137.74.234.211|2001:41d0:301:6::26|
|Niederlande|NL|137.74.180.117|2001:41d0:301:7::26|
|Finnland|FI|137.74.48.119|2001:41d0:301:8::26|
|Litauen|LT|188.165.29.126|2001:41d0:301:9::26|
|Deutschland|DE|94.23.160.29|2001:41d0:301:1::26|
|Belgien|BE|178.32.43.46|2001:41d0:301:10::26|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
188.165.51.93
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
91.134.248.211
```

## Cluster 027

#### IP-Adressen der Cluster nach Land

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|54.36.91.62|2001:41d0:301::27|
|Irland|IE|54.36.31.145|2001:41d0:301:3::27|
|Portugal|PT|193.70.24.82|2001:41d0:301:2::27|
|Vereinigtes Königreich|UK|54.36.203.165|2001:41d0:301:12::27|
|Italien|IT|178.32.138.212|2001:41d0:301:11::27|
|Spanien|ES|213.32.37.233|2001:41d0:301:4::27|
|Polen|PL|178.32.203.125|2001:41d0:301:5::27|
|Tschechische Republik|CZ|54.37.182.230|2001:41d0:301:6::27|
|Niederlande|NL|54.36.41.83|2001:41d0:301:7::27|
|Finnland|FI|188.165.140.194|2001:41d0:301:8::27|
|Litauen|LT|51.255.97.18|2001:41d0:301:9::27|
|Deutschland|DE|91.134.179.251|2001:41d0:301:1::27|
|Belgien|BE|193.70.58.226|2001:41d0:301:10::27|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
145.239.51.129
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
54.37.121.239
```

## Cluster 028

#### IP-Adressen der Cluster nach Land

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|51.91.236.193|2001:41d0:301::28|
|Irland|IE|92.222.139.190|2001:41d0:301:3::28|
|Portugal|PT|217.182.39.251|2001:41d0:301:2::28|
|Vereinigtes Königreich|UK|193.70.71.149|2001:41d0:301:12::28|
|Italien|IT|51.255.117.202|2001:41d0:301:11::28|
|Spanien|ES|54.36.145.173|2001:41d0:301:4::28|
|Polen|PL|213.32.10.111|2001:41d0:301:5::28|
|Tschechische Republik|CZ|54.38.116.114|2001:41d0:301:6::28|
|Niederlande|NL|176.31.23.191|2001:41d0:301:7::28|
|Finnland|FI|51.255.135.35|2001:41d0:301:8::28|
|Litauen|LT|51.83.29.135|2001:41d0:301:9::28|
|Deutschland|DE|54.37.173.127|2001:41d0:301:1::28|
|Belgien|BE|193.70.70.144|2001:41d0:301:10::28|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
51.255.119.116
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
91.134.248.249
```

## Cluster 029

#### IP-Adressen der Cluster nach Land

|Country|Country Code|IPv4|IPv6|
|---|---|----|---|
|Frankreich|FR|51.91.236.255|2001:41d0:301::29|
|Irland|IE|92.222.139.156|2001:41d0:301:3::29|
|Portugal|PT|46.105.159.220|2001:41d0:301:2::29|
|Vereinigtes Königreich|UK|178.32.48.109|2001:41d0:301:12::29|
|Italien|IT|178.32.137.139|2001:41d0:301:11::29|
|Spanien|ES|188.165.132.144|2001:41d0:301:4::29|
|Polen|PL|213.32.10.205|2001:41d0:301:5::29|
|Tschechische Republik|CZ|5.196.248.55|2001:41d0:301:6::29|
|Niederlande|NL|51.83.124.4|2001:41d0:301:7::29|
|Finnland|FI|79.137.116.129|2001:41d0:301:8::29|
|Litauen|LT|164.132.14.117|2001:41d0:301:9::29|
|Deutschland|DE|145.239.222.45|2001:41d0:301:1::29|
|Belgien|BE|178.32.44.140|2001:41d0:301:10::29|

Wenn Sie die Option **CDN** für Ihr Webhosting aktiviert haben, verwenden Sie diese IP-Adresse:

```bash
 51.255.215.242 
```

Wenn Sie die **ausgehende IP-Adresse** des Webhostings benötigen, verwenden Sie diese IP-Adresse:

```bash
91.134.248.192
```

## Weiterführende Informationen

[Mehrere Websites auf einem Webhosting einrichten](../multisites-mehrere-websites-konfigurieren/)

[Website mit SSL-Zertifikat auf HTTPS umstellen](../website-umstellen-https-ssl)

[Optimierung der Performance Ihrer Webseite](../webhosting_optimierung_der_performance_ihrer_webseite)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.