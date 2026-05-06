---
title: "Backup Agent - So funktionieren Vaults"
excerpt: "Erfahren Sie, wie das Vault-System funktioniert und wo Ihre Backup-Daten gespeichert werden"
updated: 2026-01-28
---

## Ziel

Diese Anleitung erklärt, wie das Vault-System im Backup Agent-Produkt funktioniert und wo Ihre Daten gespeichert werden, abhängig von der Lage Ihrer Bare Metal Server.

## Voraussetzungen

- Sie haben einen Backup Agent-Dienst, der entweder zum Zeitpunkt des Bestellens Ihres Bare Metal Servers oder später über das Menü `Backup Agent`{.action} in Ihrem OVHcloud Kundencenter bestellt wurde.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Navigationspfad:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

## In der praktischen Anwendung

### Übersicht über Vaults

Ein Vault ist Ihr Speicherort, an den Ihre Backup-Daten bei jedem Backup gesendet werden. Vaults werden automatisch von OVHcloud erstellt, um sicherzustellen, dass Ihre Daten nicht im gleichen Rechenzentrum wie Ihr Bare Metal Server gehostet werden.

Dies basiert auf unseren Object Storage-Buckets, die Sie [hier](/links/public-cloud/object-storage) finden können.

Um Ihre Vaults zu finden, klicken Sie auf [diesen Link](/links/control-panel/baremetal-backup-agent), um auf den Bereich `Backup Agent`{.action} zuzugreifen, und klicken Sie dann auf den Tab `Vaults`{.action}.

![Backup Agent Vault Liste](images/01-backup-agent-vault-list.png){.thumbnail}

### Lokalisierungsprinzip

**Wichtige Regel:** Backup-Daten werden immer an einen Vault gesendet, der sich in einem anderen Rechenzentrum befindet als das Rechenzentrum, in dem sich Ihr Bare Metal Server befindet. Dies gewährleistet die Resilienz und Sicherheit Ihrer Daten.

### Anwendungsfälle

Hier sind verschiedene Szenarien, die veranschaulichen, wie das Vault-System funktioniert:

![Backup Agent Vault Anwendungsfälle](images/01-backup-agent-vault-use-cases.png){.thumbnail}

### Anwendungsfall 1: Ein Bare Metal Server in RBX

Wenn Sie einen Bare Metal Server in **Roubaix (RBX)** haben und den Backup Agent bestellen:

- Ihr Bare Metal Server mit installiertem Backup Agent befindet sich in **RBX**.
- Ihre Backup-Daten werden automatisch an einen Vault gesendet, der in **Gravelines (GRA)** erstellt wurde und **backup-vault-gra1** heißt.
- Dies stellt sicher, dass Ihre Daten in einem anderen Rechenzentrum als Ihrem Server gespeichert werden.

### Anwendungsfall 2: Zwei Bare Metal Server in RBX und GRA

Wenn Sie zwei Bare Metal Server haben, einen in **Roubaix (RBX)** und einen anderen in **Gravelines (GRA)**:

- Der Bare Metal Server in **RBX** sendet seine Daten an **backup-vault-sbg-1** in **Gravelines**.
- Der Bare Metal Server in **GRA** sendet seine Daten an **backup-vault-gra-1** in **Strasbourg (SBG)**.
- Jeder Server nutzt einen Vault in einem anderen Rechenzentrum als seinem eigenen.

### Anwendungsfall 3: Drei Bare Metal Server in RBX, GRA und LIM

Wenn Sie drei Bare Metal Server in verschiedenen Rechenzentren haben:

- Der Server in **RBX** sendet seine Daten an **backup-vault-gra-1** in **GRA**.
- Der Server in **GRA** sendet seine Daten an **backup-vault-sbg-1** in **SBG**.
- Der Server in **Limburg (LIM)** sendet seine Daten an **backup-vault-sbg-1** in **SBG**.
- Jeder Server stellt sicher, dass seine Daten in einem weit entfernten Rechenzentrum gespeichert werden.

### Anwendungsfall 4: Bare Metal Server in BHS mit EU-NIC

Wenn Sie einen Bare Metal Server in **Beauharnois (BHS)** mit einer europäischen Netzwerkschnittstelle haben:

- Ihr Bare Metal Server befindet sich in **BHS**.
- Ihre Backup-Daten werden an **backup-vault-tor-1** in **Toronto (TOR)** gesendet.
- Der Vault-Ort wird basierend auf der Netzwerkkonfiguration Ihres Servers festgelegt.

## Wichtige Punkte

- Vaults werden automatisch von OVHcloud erstellt, Sie können sie nicht manuell erstellen.
- Sie können den Vault für einen Agenten nach der Konfiguration nicht ändern.
- Der Vault-Ort ist immer anders als der Ort Ihres Bare Metal Servers, um Resilienz zu gewährleisten.
- Der Vault-Name folgt in der Regel der Konvention: `backup-vault-<location>-<number>`.

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.