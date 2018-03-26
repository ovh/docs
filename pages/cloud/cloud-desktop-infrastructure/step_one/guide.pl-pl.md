---
title: Etap 1 - Twoja platforma VMware Horizon 7.1
slug: platforma-horizon-7
excerpt: Dowiedz się, jak zalogować się po raz pierwszy do platformy VMware Horizon 7.1
section: Wdrożenie
order: 1
---

**Ostatnia aktualizacja dnia 2018-03-19**

## Wprowadzenie

W pięci etapach wyjaśnimy, jak rozpocząć korzystanie z usługi [Cloud Desktop Infrastructure](https://www.ovh.pl/cloud/cloud-desktop/infrastructure/){.external}.

Poniżej **wyjaśniamy, jak uruchomić platformę VMware Horizon 7.1**.

## Wymagania początkowe

- Dane dostępowe do [Cloud Desktop Infrastructure](https://www.ovh.pl/cloud/cloud-desktop/infrastructure/){.external} otrzymane w e-mailu.

## W praktyce

### Informacje ogólne

Na platformę VMware Horizon 7.1 składa się kilka elementów:

- interfejs zarządzania VMware Horizon 7.1
- adres dostępowy URL do Twojej pierwszej puli wirtualnych stacji roboczych
- platforma [Private Cloud](https://www.ovh.pl/private-cloud/){.external} do uruchomienia wirtualnych maszyn (VM) i wirtualnych stacji roboczych.


### Infrastruktura

![infrastruktura VMware Horizon 7.1](images/1200.png){.thumbnail}

Infrastruktura *(ConnectionServer, Composer, ActiveDirectory)* jest uruchamiana, zarządzana i monitorowana przez OVH. Dzięki temu ilość zasobów przeznaczonych do tworzenia puli nie zostaje pomniejszona.

OVH uruchamia wirtualne routery (vRouter OVH) oraz punkty *AccessPoint* umożliwiające dostęp pul do zasobów infrastruktury Private Cloud dostarczonej z platformą.

Prywatna sieć wraz z punktami *AccessPoint* zostaje skonfigurowana domyślnie w momencie uruchomienia platformy. Istnieje możliwość zwiększenia liczby punktów dostępowych w Panelu klienta.


### Uruchomienie usług

Po opłaceniu zamówienia otrzymasz w ciągu godziny mail o treści przedstawionej poniżej. W mailu zawarte będą informacje, które umożliwią Ci zalogowanie się do Twojej infrastruktury, abyś mógł utworzyć i zarządzać Twoją pierwszą pulą. 

> [!secondary]
>
> Drogi Kliencie,
>
> właśnie zainstalowałeś w Twoim centrum danych usługę Cloud Desktop Infrastructure (CDI).
>
>Poniżej podajemy dane dostępowe, które posłużą Ci do zalogowania się do usługi:
>
> * link dostępowy dla administratora: https://#URL#/admin
> 
> * login: #USERNAME#
> 
> * hasło: #PASSWORD#
> 
> 
> Abyś mógł zarządzać Twoimi szablonami, zaloguj się do infrastruktury Private Cloud.
>
> W tym celu użyj:
> 
> - klienta vSphere
> 
> Aby pobrać klienta vSphere, kliknij w link: https://#VPNHOSTNAME#/client/VMware-viclient.exe
> 
> Adres IP: #VPNHOSTNAME#
> 
> - interfejsu webowego vSphere: https://#VPNHOSTNAME#/vsphere-client
>
> vSphere używa następujących portów: 80, 443 i 8443. Do stworzenia Twojej pierwszej puli potrzebne Ci będą następujące dane:
>
> * link dostępowy (desktop access): https://#POOLURL#
> 
> * sieć DHCP: #PORTGROUP#
>
> 
> Lista 10 użytkowników domeny:
> 
> * vdi1 : #USER1#
> 
> * vdi2 : #USER2#
> 
> * vdi3 : #USER3#
> ...
>
> 
> Więcej informacji o rozwiązaniu Cloud Desktop Infrastructure znajdziesz na stronie:
>
> https://www.ovh.pl/cloud/cloud-desktop/infrastructure/
>
> 
> Dołącz do naszej listy mailingowe, aby zadawać pytania i podzielić się Twoimi uwagami, wysyłając wiadomość e-mail na adres:
>
> cdi@ml.ovh.net
> 
>
> Dziękujemy za zaufanie i pozostajemy dyspozycji.
> 
> Zespół Cloud Desktop Infrastructure
> 


Dowiedz się, jak [stworzyć szablon dla puli](https://docs.ovh.com/pl/cloud-desktop-infrastructure/tworzenie-szablonu-puli/){.external}.


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.