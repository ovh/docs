---
title: Tworzenie sieci VLAN
slug: tworzenie-vlan
routes:
    canonical: 'https://docs.ovh.com/pl/private-cloud/tworzenie-vlan-vxlan/'
excerpt: Dowiedz się, jak tworzyć sieci VLAN (vRack)
section: Funkcje OVHcloud
order: 02
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 18-11-2020**

## Wprowadzenie

W infrastrukturze Managed Bare Metal dysponujesz podstawą 11 sieci VLAN dostarczanych z vRack.

**Niniejszy przewodnik wyjaśnia, jak utworzyć dodatkowe sieci VLAN.**

## Wymagania początkowe

- Dostęp do klienta vSphere Web (HTML5)

## W praktyce

### Tworzenie sieci VLAN

W ofercie Managed Bare Metal dysponujesz dwoma wirtualnymi switchami (vDS). 

Do *vDS* zalicza się kilka *portGroup*, z których każdy ma swoją użyteczność.

Pierwszy vDS dysponuje jednym rodzajem *portGroup*, VMnetwork pozwalający na komunikację z Internetem.

Drugi serwer vDS dysponuje również jednym rodzajem *portGroup*, czyli siecią VLAN pozwalającą na odizolowanie prywatnej komunikacji wewnątrz Managed Bare Metal oraz między różnymi usługami OVHcloud kompatybilnymi z vRack (Serwer dedykowany, Public Cloud...). 

W tym switchu 11 sieci VLAN są tworzone w oparciu o podstawowe projekty (VLAN10 w VLAN20). Dzięki uprawnieniu `administratora` do `dostępu do sieci VLAN` w [zarządzaniu użytkownikami w Panelu klienta](../manager-ovhcloud/#uzytkownicy){.external-link}, będziesz mógł utworzyć dodatkowe sieci VLAN.

Po pierwsze, przejdź do widoku `tworzenia sieci` Twojego klienta vSphere. Uruchom folder **vrack**, kliknij prawym przyciskiem myszy **na serwer **dVS** kończący się *-vrack*, a następnie kliknij `New Distributed Port Group`{.action}.

![vRack](images/07network.png){.thumbnail}

![New Distributed Port Group](images/08network1.png){.thumbnail}

Następnym krokiem jest nazwa Twojego **PortGroup**:

![nazwa portgroup](images/09network2.png){.thumbnail}

Następnie skonfiguruj parametry zalecane przez OVHcloud:

- **Port Binding**: Static (Rezerwacja i przypisanie portu do wirtualnej maszyny)
- **Port przydział**: Elastic (Pozwala na zwiększenie liczby portów bez przerwy w działaniu)
- **Numer portu**: 24
- **VLAN typu**: VLAN (inne to [PVLAN](https://kb.vmware.com/s/article/1010691){.external} i Trunk)
- **VLAN ID**: 21 (wiedząc, że ID może być skonfigurowany w zakresie od 1 do 4096)
- Zaznacz opcję *Customize default policies configuration*.

![konfiguracja portgroup](images/10network3.png){.thumbnail}

Masz 3 ustawień bezpieczeństwa, które mogą być aktywowane w zależności od potrzeb: 

- *Promiscuous tryb* (Eliminacja wszelkich filtrowania odbioru, które adapter wirtualnej maszyny może wykonać, aby wybrany system operacyjny otrzymywał cały ruch zaobserwowany w sieci.)
- *Adres MAC dla zmian* (wpływa na ruch, który otrzymuje wirtualna maszyna. Jeśli opcja jest zdefiniowana w **Akceptuj**, ESXi akceptuje wnioski o zmianę rzeczywistego adresu MAC na inny adres niż początkowy adres MAC.)
- *Forged transfer* (wpływa na ruch przesyłany z wirtualnej maszyny. Jeśli opcja jest zdefiniowana w **Akceptuj**, ESXi nie porównuje źródłowych i rzeczywistych adresów MAC).

> [!primary]
>
> Najczęstszym zastosowaniem tych 3 parametrów jest CARP, w tym **pfSense**.
> 

![parametry bezpieczeństwa](images/11network4.png){.thumbnail}

Pozostawiamy [wygładzanie ruchu](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-CF01515C-8525-4424-92B5-A982489BACE2.html){.external} wyłączony.

![wygładzanie ruchu](images/12network5.png){.thumbnail}

Na poziomie Load Balancing wybierz *Route Based on IP hash*, które jest najlepszą metodą redundancji i rozdzielania.

> [!warning]
>
> Uwaga na poziomie konfiguracji kolejności przełączania, konieczne jest umieszczenie łącza `typu alg` w *Active* (połączenie między siecią wirtualną i siecią fizyczną), w przeciwnym razie nie będzie możliwe połączenie między hostami.
>

![load balancing](images/13network6.png){.thumbnail}

Netflow `jest wyłączony` (stosunek aktywności do ruchu)

![netflow](images/14network7.png){.thumbnail}

Pozostaw wartość `Block All Ports` na "No".

![finalizacja portgroup](images/15network9.png){.thumbnail}

Otrzymasz wówczas podsumowanie zmian. Kliknij przycisk `Zakończ`, aby potwierdzić utworzenie.

![finalizacja portgroup](images/16network10.png){.thumbnail}

W tym miejscu widzimy, że **VLAN21** jest dobrze dostępny i działa.

![vlan utworzony](images/17network11.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
