---
title: "Backup Agent - Funktionsweise des Vault"
excerpt: "Erfahren Sie, wie das Vault-System funktioniert und wo Ihre Backup-Daten gespeichert werden"
updated: 2026-01-23
---

## Ziel

Diese Anleitung erklärt, wie das Vault-System im Backup Agent Produkt funktioniert und wie Ihre Daten entsprechend dem Standort Ihrer Bare Metal Server lokalisiert und gespeichert werden.

## Voraussetzungen
- Sie haben einen Backup Agent Dienst bei der Bestellung Ihres Bare Metal Servers oder später über das Menü `Backup-Agent`{.action} in Ihrem Kundencenter bestellt.

## In der praktischen Anwendung
### Vault-Übersicht

Ein Vault ist Ihr Speicherplatz, an den Ihre Backup-Daten bei jedem Backup gesendet werden. Vaults werden automatisch von OVHcloud erstellt, um sicherzustellen, dass Ihre Daten nicht im selben Rechenzentrum wie Ihr Bare Metal Server gehostet werden.

Dies basiert auf unseren Object Storage Buckets, die Sie unter diesem [Link](/links/public-cloud/object-storage) finden können.

Sie finden Ihre Vaults in Ihrem Kundencenter, im Bereich Vaults.
![Backup Agent Vault List](images/01-backup-agent-vault-list.png){.thumbnail}

### Lokalisierungsprinzip

**Wichtige Regel:** Backup-Daten werden immer an ein Vault in einem anderen Rechenzentrum als dem Ihres Bare Metal Servers gesendet. Dies gewährleistet die Resilienz und Sicherheit Ihrer Daten.

### Anwendungsfälle

Hier sind verschiedene Szenarien, die die Funktionsweise des Vault-Systems veranschaulichen:

![Backup Agent Vault Use Cases](images/01-backup-agent-vault-use-cases.png){.thumbnail}

### Anwendungsfall 1: Ein Bare Metal Server in RBX

Wenn Sie einen Bare Metal Server in **Roubaix (RBX)** haben und den Backup Agent bestellen:

- Ihr Bare Metal Server mit installiertem Backup Agent befindet sich in **RBX**.
- Ihre Backup-Daten werden automatisch an ein Vault in **Gravelines (GRA)** gesendet, das **backup-vault-gra1** heißt.
- Dies stellt sicher, dass Ihre Daten in einem anderen Rechenzentrum als Ihr Server gespeichert werden.

### Anwendungsfall 2: Zwei Bare Metal Server in RBX und GRA

Wenn Sie zwei Bare Metal Server haben, einen in **Roubaix (RBX)** und den anderen in **Gravelines (GRA)**:

- Der Bare Metal Server in **RBX** sendet seine Daten an **backup-vault-sbg-1** in **Gravelines**.
- Der Bare Metal Server in **GRA** sendet seine Daten an **backup-vault-gra-1** in **Straßburg (SBG)**.
- Jeder Server verwendet ein Vault in einem anderen Rechenzentrum als seinem eigenen.

### Anwendungsfall 3: Drei Bare Metal Server in RBX, GRA und LIM

Wenn Sie drei Bare Metal Server in verschiedenen Rechenzentren haben:

- Der Server in **RBX** sendet seine Daten an **backup-vault-gra-1** in **GRA**.
- Der Server in **GRA** sendet seine Daten an **backup-vault-sbg-1** in **SBG**.
- Der Server in **Limburg (LIM)** sendet seine Daten an **backup-vault-sbg-1** in **SBG**.
- Jeder Server stellt sicher, dass seine Daten in einem entfernten Rechenzentrum gespeichert werden.

### Anwendungsfall 4: Bare Metal Server in BHS mit EU NIC

Wenn Sie einen Bare Metal Server in **Beauharnois (BHS)** mit einer europäischen Netzwerkschnittstelle haben:

- Ihr Bare Metal Server befindet sich in **BHS**.
- Ihre Backup-Daten werden an **backup-vault-tor-1** in **Toronto (TOR)** gesendet.
- Die Vault-Lokalisierung wird basierend auf der Netzwerkkonfiguration Ihres Servers bestimmt.

## Wichtige Punkte

- Vaults werden automatisch von OVHcloud erstellt, Sie können sie nicht manuell erstellen.
- Sie können das Vault eines Agents nicht ändern, sobald es konfiguriert ist.
- Die Vault-Lokalisierung ist immer anders als die Ihres Bare Metal Servers, um Resilienz zu gewährleisten.
- Der Vault-Name folgt im Allgemeinen der Konvention: `backup-vault-<lokalisierung>-<nummer>`.

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.

