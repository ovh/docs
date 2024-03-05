---
title: "Präsentation der Identitäten, die innerhalb eines OVHcloud Accounts interagieren können"
excerpt: "Entdecken Sie die verschiedenen Identitätstypen für die Interaktion mit einem OVHcloud Produkt"
updated: 2024-03-05
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Diese Anleitung erklärt die verschiedenen Identitätstypen, die über einen Account von OVHcloud verwaltet werden können.

## Voraussetzungen

- Sie haben einen [OVHcloud Kunden-Account](/pages/account_and_service_management/account_information/ovhcloud-account-creation).

## In der praktischen Anwendung

### Grundlegendes zu Identitäten

Es gibt verschiedene Identitätstypen, die mit OVHcloud Produkten interagieren können:

![identities-types](images/identities_types.png){.thumbnail}

### OVHcloud Kunden-Account

Hierbei handelt es sich um die primäre Kennung, mit der Sie sich im OVHcloud Kundencenter einloggen. Sie verwenden den OVHcloud Account, wenn Sie sich mit Ihrer E-Mail-Adresse oder Kundenkennung (z.B. xx1111-ovh) im Kundencenter anmelden.

Diese Identität fungiert als Root-Account und kann nicht eingeschränkt werden, unabhängig von den verwendeten Zugriffsrichtlinien.

Der OVHcloud Kunden-Account kann in der Dokumentation auch als NIC oder NIC-Handle bezeichnet werden.

### Lokale Benutzer

Lokale Benutzer sind Identitäten, die mit Ihrem OVHcloud Kunden-Account verknüpft sind. Diese Accounts sind für **menschliche Interaktionen** mit OVHcloud Produkten konzipiert, da sie auf Authentifizierung über Login und Passwort basieren und deren Zugriffsrechte von den mit [IAM](/pages/account_and_service_management/account_information/iam-policy-ui) implementierten Richtlinien abhängen.

Die Konfiguration der lokalen Benutzer ist in der [zugehörigen Dokumentation](/pages/account_and_service_management/account_information/ovhcloud-users-management) erklärt.

Sie können auch für die Verbindung mit den OVHcloud APIs verwendet werden, indem [ein dem Benutzer zugeordnetes Token generiert wird](/pages/manage_and_operate/api/first-steps). Die Rechte für dieses Token können zusätzlich zu den IAM-Richtlinien auf einen bestimmten Bereich beschränkt werden.

Damit eine tokenbasierte Anwendung, die an einen lokalen Benutzer gebunden ist, eine OVHcloud API verwenden kann, muss das Token diese in seinen Perimeter integrieren und der Benutzer, der das Token erstellt hat, über die Rechte für diese API verfügen.

Lokale Benutzer können in der Dokumentation auch als *sub-user* bezeichnet werden.

### Service Accounts

Bei Service Accounts handelt es sich um Identitäten, die mit Ihrem OVHcloud Kunden-Account verknüpft sind. Diese Accounts sind für **maschinelle Interaktionen** mit OVHcloud Produkten konzipiert, da sie auf einer Authentifizierung auf Client-Token-Basis basieren und deren Zugriffsrechte von den [IAM-Richtlinien](/pages/account_and_service_management/account_information/iam-policy-ui) abhängen.

Die Erstellung von Service Accounts wird in der [zugehörigen Dokumentation](/pages/manage_and_operate/api/manage-service-account) behandelt.

Ein Service Account kann dann für die [Verbindung zu den OVHcloud APIs](/pages/account_and_service_management/account_information/authenticate-api-with-service-account) sowie für APIs von Drittanbietern verwendet werden, wie sie von [OpenStack](/pages/manage_and_operate/iam/authenticate-api-openstack-with-service-account) verfügbar gemacht werden.

Die Verbindung mit Service Accounts wird auf Terraform SDKs und Providern noch nicht unterstützt.

### Federated users

Dies sind Benutzerkonten aus einem [Identitätsverbund](/products/manage-operate-user-federation). Diese Benutzer stammen aus einem Verzeichnis eines Drittanbieters und werden daher nicht direkt von OVHcloud verwaltet. Ihre Zugriffsrechte hängen von den [IAM-Richtlinien](/pages/account_and_service_management/account_information/iam-policy-ui) ab, die implementiert wurden.

Verbundbenutzer werden auf Ebene der Rechteverwaltung durch Benutzergruppen dargestellt.

### Benutzergruppen

Verschiedene Identitäten können Benutzergruppen zugeordnet werden, um deren Handhabung zu erleichtern.
Die Konfiguration von Benutzergruppen wird in der Dokumentation zur [Verwaltung lokaler Benutzer](/pages/account_and_service_management/account_information/ovhcloud-users-management) behandelt.

## Weiterführende Informationen

Die Verwaltung von Identitäten kann über die [OVHcloud API](/pages/manage_and_operate/api/first-steps) oder den [OVHcloud Terraform Provider](/pages/manage_and_operate/terraform/terraform-at-ovhcloud) automatisiert werden.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
