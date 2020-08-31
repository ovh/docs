---
title: Zugriff auf das Verwaltungsinterface NSX.
slug: zugriff-auf-verwaltungsinterface-nsx
excerpt: Lernen Sie das Interface NSX kennen
section: NSX
order: 01
---

**Stand 29.06.2020**

## Einleitung

NSX ist eine Lösung der Art „Software Defined Network (SDN)“ und wurde von VMware entwickelt. Sie wird im vCenter aktiviert und direkt über das Interface vSphere gesteuert. Mit NSX können Sie ganz einfach Zugangsregeln für Ihre Netzwerke konfigurieren, Sicherheitsregeln definieren und innerhalb von nur wenigen Minuten die Netzwerkdienste einsetzen, die für die Erstellung Ihrer Infrastruktur nötig sind.

**Diese Anleitung stellt Ihnen das Interface vor.**

## Voraussetzungen

- Sie haben eine aktive Nutzerkennung mit den für NSX erforderlichen Rechten.
- Sie sind in Ihrem [vSphere Interface](../den_vsphere_client_installieren/) angemeldet.

## Praktische Anwendung

VMWare NSX ist ausschließlich über das Interface vSphere verfügbar.

Klicken Sie auf der Startseite des vSphere Clients auf die Kategorie `Networking and Security`{.action} im Menü auf der linken Seite:

![Networking and Security](images/nsx01.png){.thumbnail}

Sie haben nun Zugang zu NSX mit allen verbundenen Menus.


> [!primary]
>
> Für den Zugang zum NSX API verwenden Sie https://nsx.pcc-x-x-x-x.ovh.com/api
>
> Ein Beispiel dafür, wie Sie Ihre Konfiguration der Firewall abrufen: 
>
> ```
> curl -u "admin:xxxx" -XGET "https://nsx.pcc-x-x-x-x.ovh.com/api/4.0/firewall/globalroot-0/defaultconfig"
> ```
>
> Aus Sicherheitsgründen wird /api/1.0/ nicht unterstützt.
> 


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com>.
