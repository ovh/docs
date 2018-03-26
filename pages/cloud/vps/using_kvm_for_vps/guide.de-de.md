---
title: Verwendung der KVM-Konsole für VPS
excerpt: So verwenden Sie die KVM-Konsole zur Verwaltung von Virtual Private Servern
slug: verwendung_von_kvm_fur_vps
section: Erste Schritte
---

**Stand 15.01.2018**

## Einleitung

Die KVM-Konsole ermöglicht eine direkte Verbindung zu Ihrem VPS, ohne externe Software (Terminal, Putty usw.) installieren zu müssen.  Diese Konsole ist sowohl über Ihr Kundencenter als auch via API zugänglich.  

**Beide Möglichkeiten werden in dieser Anleitung beschrieben.**


## Voraussetzungen

- Sie müssen im [OVH Kundencenter](https://www.ovh.com/auth){.external} eingeloggt sein.

## Beschreibung

### Zugang zur KVM-Konsole über das OVH Kundencenter

Wenn Sie im Kundencenter eingeloggt sind, begeben Sie sich einfach auf die Verwaltungsseite Ihres VPS. Auf der rechten Seite sehen Sie einen `KVM`{.action} Button:

![Klicken Sie auf den KVM Button](images/activating_kvm_manager.png){.thumbnail}

 
Es wird ein neues Fenster geöffnet, das die Verbindung zu Ihrem VPS herstellt. Dieser Vorgang kann einige Sekunden dauern. Danach brauchen Sie sich nur noch einzuloggen. 

![Verbindung zur KVM-Konsole](images/kvm_screen.png){.thumbnail}

> [!primary]
>
> Die Tastenfolge kann je nach Tastatur verschieden eingestellt sein. Achten Sie auf diesen Punkt: die Tastatur kann zum Beispiel in QWERTY eingestellt sein, statt in AZERTY. 
>

### Verbindung mit der KVM-Konsole über die API

Es kann manchmal vorkommen, dass Sie über Ihr Kundencenter keine Verbindung zur KVM-Konsole herstellen können.  In dem Fall können Sie über die API eine Verbindung herstellen. Loggen Sie sich zuerst auf der [API OVH](https://api.ovh.com/) ein.

#### Auf einem VPS 2014

Beim VPS 2014 kann Fehler 1006 auftreten. Dies kann über die API gelöst werden.  So verwenden Sie die API:

> [!api]
>
> @api {POST} /vps/{serviceName}/openConsoleAccess
>

Trotz positiver Rückmeldung der API kann es vorkommen, dass der Aufbau der Verbindung ein bis zwei Minuten dauert, bis der Port auch tatsächlich geöffnet ist.

#### Auf einem VPS 2016

Bei Problemen mit der KVM-Konsole ist dies die empfohlene API für die Verbindung zur KVM:

> [!api]
>
> @api {POST} /vps/{serviceName}/getConsoleUrl
>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.