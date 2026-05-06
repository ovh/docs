---
title: "Backup Agent - Abrechnung"
excerpt: "Abrechnung des Backup Agent"
updated: 2026-01-09
---

## Ziel

Diese Seite hat das Ziel, zu erklären, wie der Backup Agent abgerechnet wird.

## Abrechnung

Das Produkt verwendet zwei Elemente, um seinen Dienst anzubieten:

- Den Backup Agent, der auf Ihren Bare Metal Servern installiert ist.
- [OVHcloud Object Storage](/links/public-cloud/object-storage).

Wir berechnen Ihnen den Backup Agent auf Ihren Servern nicht, d.h., Sie können ihn auf einem oder mehreren Bare Metal Servern kostenfrei bereitstellen.

Allerdings wird Ihnen pro GB und Monat die Nutzung von OVHcloud Object Storage berechnet. Sie werden am Anfang jedes Monats für die Nutzung des vorherigen Monats berechnet.

Finden Sie den Preis pro GB und Monat auf unserer [Website](/links/storage/backup-agent).

Sie können das Dashboard `Abrechnung`{.action} in Ihrem [OVHcloud Kundencenter](/links/manager) nutzen, um Ihre aktuelle Nutzung anzuzeigen und somit die finale Rechnung am Ende des Monats vorherzusagen.

- Beispiel 1: Sie haben den Backup Agent auf 3 Bare Metal Servern bereitgestellt, und diese senden ihre Daten zu ihren jeweiligen Vaults. Die Gesamtkapazität, die Ihre Backup-Daten auf den Vault-Servern beanspruchen, beträgt 600 GB. Am Ende des Monats werden Ihnen 600 GB berechnet.

- Beispiel 2: Sie haben den Backup Agent auf 10 Bare Metal Servern bereitgestellt, und diese senden ihre Daten zu ihren jeweiligen Vaults. Die Gesamtkapazität, die Ihre Backup-Daten auf den Vault-Servern beanspruchen, beträgt 600 GB. Nach einigen Backups entfernen Sie den Backup Agent von 4 Servern, wodurch die Daten nach 14 Tagen gelöscht werden. Die Gesamtnutzung des Vaults sinkt auf 400 GB. Am Ende des Monats werden Ihnen 600 GB berechnet.

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.