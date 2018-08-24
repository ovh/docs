---
title: 'Schritt 1 − Die Plattform VMware Horizon 7.1'
slug: horizon-7-plattform
excerpt: 'So loggen Sie sich zum ersten Mal in VMware Horizon 7.1 ein'
section: Einrichtung
order: 1
---

**Stand 24.08.2018**

## Einleitung

Wir zeigen Ihnen in fünf ausführlichen Schritten, wie Sie Ihre [Cloud Desktop Infrastructure](https://www.ovh.de/cloud/cloud-desktop/infrastructure/){.external} verwalten.

**In dieser Anleitung erklären wir die ersten Schritte auf Ihrer VMware Horizon 7.1 Plattform**.

## Voraussetzungen

- Sie haben eine E-Mail mit den Zugriffsdaten Ihrer [Cloud Desktop Infrastructure](https://www.ovh.de/cloud/cloud-desktop/infrastructure/){.external} erhalten.

## Beschreibung

### Allgemeine Informationen

Die Plattform VMware Horizon 7.1 umfasst mehrere Komponenten:

- ein VMware Horizon 7.1 Verwaltungsinterface
- eine Zugriffs-URL zu Ihrer ersten Gruppe virtueller Desktops (Pool)
- eine [Private Cloud](https://www.ovh.de/private-cloud/){.external} Plattform für das Deployment virtueller Maschinen (VMs) und virtueller Desktops


### Infrastruktur

![VMware Horizon 7.1 Infrastruktur](images/1200.png){.thumbnail}

Die Verwaltungsinfrastruktur (*ConnectionServer*, *Composer*, *ActiveDirectory*) wird von OVH eingerichtet, verwaltet und gemonitort, um die Ressourcenkapazitäten für das Deployment der Pools zu schonen.

OVH richtet virtuelle Router (OVH vRouter) sowie *AccesPoints* ein, damit die Pools auf die mit Ihrer Plattform gelieferten Private Cloud Ressourcen zugreifen können.

Standardmäßig wird bei der Lieferung der Plattform ein privates Netzwerk mit einem *AccessPoint* eingerichtet. Sie können über Ihr Kundencenter weitere hinzufügen.


### Lieferung

Nachdem Sie Ihren Bestellschein beglichen haben, erhalten Sie innerhalb einer Stunde die nachstehende E-Mail. Diese enthält alle notwendigen Informationen und Elemente, um sich in Ihrer Infrastruktur einzuloggen und Ihren ersten Pool zu erstellen und zu verwalten. 

> [!secondary]
>
> Sehr geehrter Kunde,
>
> Sie haben soeben die Virtual Desktop Infrastructure Option (VDI) für Ihr Datacenter installiert und wir danken Ihnen für Ihr Vertrauen.
>
> 
>Hier die Verbindungsdaten für den Zugriff auf Ihren Dienst:
>
> 
> * Desktop Admin-Zugang: https://#URL#/admin
> 
> * Benutzer: #USERNAME#
> 
> * Passwort: #PASSWORD#
> 
> 
> Verbinden Sie sich mit Ihrer Private Cloud, um Ihre Templates zu verwalten.
>
> Sie erhalten Zugriff über:
> 
> - den vSphere Client
> 
>   * Client Download: https://#VPNHOSTNAME#/client/VMware-viclient.exe
> 
>   * IP-Adresse: #VPNHOSTNAME#
>
> 
> - oder den vSphere Web Client
> 
>   *  https://#VPNHOSTNAME#/vsphere-client
>
> Hinweis: vSphere verwendet folgende Zugriffsports: 80, 443, 8443. Um Ihren ersten Pool zu erstellen, verwenden Sie folgende Informationen:
>
> 
> * Desktop Zugang: https://#POOLURL#
> 
> * DHCP-Netzwerk: #PORTGROUP#
>
> 
> Hier sind die Benutzer Ihrer Domain:
> 
> * vdi1 : #USER1#
> 
> * vdi2 : #USER2#
> 
> * vdi3 : #USER3#
> ...
>
> 
> Die Dokumentation zu Cloud Desktop Infrastructure finden Sie unter
> 
>  
> https://docs.ovh.com/gb/en/cloud-desktop-infrastructure/.
>
> 
> Sie können sich auch gerne auf der folgenden Mailingliste eintragen, um uns Ihre Fragen zu stellen oder Ihr Feedback mitzuteilen:
>
> 
> cdi@ml.ovh.net
> 
>  
> Wir danken Ihnen vielmals für Ihr Vertrauen in OVH und stehen Ihnen gerne weiterhin zur Verfügung.
> 
> Ihr OVH Kundendienst
> 


Im nächsten Schritt erfahren Sie, wie Sie eine [Pool-Vorlage erstellen](https://docs.ovh.com/de/cloud-desktop-infrastructure/pool-vorlage-erstellen){.external}.


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.