---
title: Verwendung der KVM-Konsole zum Zugriff auf einen VPS
excerpt: Erfahren Sie hier, wie Sie mithilfe der KVM-Funktion über einen Webbrowser auf Ihren VPS zugreifen können
updated: 2025-02-07
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>


## Ziel

Die KVM-Konsole für VPS ist in Ihrem OVHcloud Kundencenter verfügbar und ermöglicht es Ihnen, eine Verbindung zu Ihrem VPS über Ihren Webbrowser herzustellen, unabhängig von zusätzlicher Verbindungssoftware. In diesem Zusammenhang bedeutet KVM "*keyboard, video, and mouse*" und bezieht sich auf die emulierte Eingabe-/Ausgabemethode der Remote-Verbindung.

> [!primary]
>
> Beachten Sie, dass die KVM-Konsole keine alternative Zugriffsmethode ist, wenn Sie den Zugriff auf das Betriebssystem Ihres VPS verloren haben. Es ist in diesem Fall notwendig, [den Rescue-Modus des VPS zu verwenden, um den Server-Zugang wiederherzustellen](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password).
>

**Diese Anleitung erklärt, wie Sie mit der KVM-Konsole auf Ihren VPS zugreifen.**

## Voraussetzungen

- Sie haben einen [VPS](/links/bare-metal/vps) in Ihrem Kunden-Account.

<!-- CP-NAV-START:baremetal-vps -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [VPS-Verwaltung](/links/control-panel/baremetal-vps)
- **Navigationspfad:** `Bare Metal Cloud`{.action} > `Virtual Private Server`{.action} > Wählen Sie Ihren VPS aus

---
<!-- CP-NAV-END:baremetal-vps -->

## In der praktischen Anwendung

### Zugang zur KVM-Konsole über das OVHcloud Kundencenter

Klicken Sie im Tab `Allgemeine Informationen`{.action} auf den Button `...`{.action} neben dem Namen Ihres VPS im Bereich **Ihr VPS**.

![Open KVM](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_kvm.png){.thumbnail}

### Zugang zur KVM-Konsole über die OVHcloud API

/// details | Diesen Abschnitt erweitern

Wenn Sie mit der Verwendung der OVHcloud API nicht vertraut sind, folgen Sie unserer Anleitung zu den [Grundlagen zur Nutzung der OVHcloud API](/pages/manage_and_operate/api/first-steps).

Öffnen Sie diesen Aufruf, um die URL zum KVM-Zugriff abzurufen:

> [!api]
>
> @api {v1} /vps POST /vps/{serviceName}/getConsoleUrl
>

Geben Sie den internen Namen Ihres VPS (`vps-x11x11xyy.vps.ovh.net`) in das Feld `serviceName` ein.

Klicken Sie auf die Schaltfläche `EXECUTE`{.action}.

Die URL für den Zugang wird im Bereich `RESPONSE` angezeigt.

///

### Verwendung der KVM-Konsole

Wenn Sie über Ihr Kundencenter auf die KVM-Konsole zugreifen, wird ein Popup-Fenster geöffnet. Um den Vollbildmodus zu verwenden, klicken Sie unten rechts auf den Link `In einem neuen Fenster öffnen`{.action}. Hierdurch wird in der Regel ein neuer Browser-Tab geöffnet.

![KVM-Verbindung](images/kvm_screen.png){.thumbnail}

Die Anzeige im KVM-Bildschirm hängt vom Betriebssystem und dem individuellen Status des VPS ab. Wenn Sie dazu aufgefordert werden, melden Sie sich mit den Anmeldeinformationen eines aktiven Benutzer-Accounts an.

Sie können sich auch über eine Client-Software eines Drittanbieters verbinden.

#### Änderung der Tastaturbelegung

> [!primary]
>
> Das Tastatur-Layout der KVM-Konsole kann von Ihrer eigenen Tastatur abweichen. Geben Sie daher vor der Eingabe eines Passworts einige Zeichen ein, um die Tastenbelegung zu überprüfen, etwa mithilfe [dieser Seite](https://en.wikipedia.org/wiki/Keyboard_layout#Conventional_Latin-script_keyboard_layouts).
>

Sie können die von Ihnen bevorzugte Tastaturkonfiguration aktivieren, um die Verwendung der Konsole zu vereinfachen. Geben Sie folgenden Befehl ein:

```bash
sudo dpkg-reconfigure keyboard-configuration
```

Falls nötig, installieren Sie das Paket zuerst über den Paketmanager Ihrer Distribution (`sudo dnf install keyboard-configuration` oder `sudo apt install keyboard-configuration`).

Es öffnet sich ein grafisches Menü, in dem Sie ein Tastaturmodell auswählen können.

![KVM](images/kvm_vps01.png){.thumbnail}

Verwenden Sie die Pfeiltasten, um die Option zu wählen, die Ihrer Hardware am nächsten kommt, und drücken Sie dann `Enter`{.action}.

Wählen Sie im nächsten Menü Ihr Land aus.

![KVM](images/kvm_vps02.png){.thumbnail}

Im dritten Menü können Sie die tatsächlich angewendete Tastenbelegung Ihrer Tastatur auswählen.

![KVM](images/kvm_vps03.png){.thumbnail}

Abhängig von Ihrer Auswahl können nach diesem dritten Menü weitere Optionen erscheinen.

Geben Sie zurück in der Kommandozeile folgenden Befehl ein, um die Änderungen zu übernehmen:

```bash
sudo systemctl restart keyboard-setup
```

> [!primary]
>
> Diese Änderung wird nicht beibehalten, wenn der Server neu gestartet wird.
>

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.