---
title: Enterprise File Storage - FAQ
excerpt: 'FAQ dotyczący rozwiązania Entreprise File Storage'
slug: netapp-faq
section: Enterprise File Storage
order: 7
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 21-03-2022**

## Wprowadzenie

Oto najczęściej zadawane pytania dotyczące oferty Enterprise File Storage od OVHcloud.

## Pytania ogólne

### Co to jest rozwiązanie Enterprise File Storage OVHcloud?

Enterprise File Storage od OVHcloud to rozwiązanie do przechowywania plików o wysokiej wydajności i wysokiej dostępności. Opiera się ona na software-defined rozwiązanie ONTAP Select firmy NetApp&#174; i jest w pełni zarządzana przez OVHcloud.

### Co mogę zrobić z Enterprise File Storage?

Enterprise File Storage pozwala na rozwiązanie wielu praktycznych problemów z modernizacją firmowej infrastruktury przechowywania danych, zwłaszcza dzięki integracji protokołu NFS.<br>
Umożliwia na przykład zewnętrzne zarządzanie współdzieloną przestrzenią dyskową wirtualnych maszyn lub serwerów opartych na Linuxie dla różnych obciążeń (aplikacje krytyczne, bazy danych firm, CRM, ERP...), co zwiększy ogólną odporność infrastruktury i jakość usługi (QoS).<br>
Enterprise File Storage pozwala na zastosowanie prostych zastosowań serwerów plików współdzielonych, dla których usługa musi oferować wysoką wydajność, wysoką dostępność i gwarantowaną przepustowość.

Rozwiązanie to pozwala również na rozwiązanie bardziej złożonych problemów praktycznych, takich jak np. nadmierne obciążenie pracą w infrastrukturze lokalnej czy migracja do chmury. Ale również przykłady kopii zapasowych danych w chmurze w ramach planów odporności, zarówno jako dobra praktyka rynkowa w zarządzaniu danymi i ich trwałości, jak i w celu optymalizacji kosztów operacyjnych (dane ciepłe i zimne oraz dane wysokie i średnie w chmurze).

### Czy można zarządzać Enterprise File Storage w Panelu klienta?

Tak, usługa ta jest dostępna bezpośrednio w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), w sekcji `Bare Metal Cloud`{.action}, następnie `Storage i Backup`{.action}.

## Dostępność

### Jaki poziom niezawodności i redundancji mogę osiągnąć za pomocą Enterprise File Storage?

Enterprise File Storage to usługa przestrzeni dyskowej o wysokiej dostępności, redundantna ze względu na projekt. Jego aktywna/aktywna architektura zabezpiecza tę redundancję, zasilając dwa różne serwery plików w dwóch szafach tego samego centrum danych. W przypadku awarii pierwszego serwer automatycznie replikuje dane na obu serwerach. Migracja zwykle następuje w przypadku awarii aktywnego serwera lub w przypadku planowanej konserwacji.

### Jaki SLA jest dostarczany z Enterprise File Storage?

Enterprise File Storage jest dostarczany z poziomem dostępności 99,99%.

## Sieć i bezpieczeństwo

### Jakie protokoły do przesyłania plików są aktualnie obsługiwane w rozwiązaniu Enterprise File Storage?

Enterprise File Storage obsługuje transfer plików przez NFS (NFSv3).

### Z jakich usług mogę hostować dane?

Enterprise File Storage to usługa, która może otrzymywać dane ze wszystkich istniejących usług OVHcloud: Bare-Metal, Public Cloud, Hosted Private Cloud (Dedicated server/VPS/Public Cloud/Hosted Private Cloud/So you Start/Kimsufi/ADSL).

### Czy usługa może być połączona z Microsoft Active Directory (AD)?

Nie.

### Jakie są certyfikaty przypisane do Enterprise File Storage?

Nasze rozwiązanie Enterprise File Storage jest zgodne z kilkoma najnowocześniejszymi standardami branżowymi, w tym ISO27001, RODO i polityką kilku krajów w zakresie danych medycznych.

### Czy można uzyskać dostęp do Enterprise File Storage z prywatnej sieci vRack?

Nie w tej chwili, ale ta funkcja będzie wkrótce dostępna (vRack endpoint).

## Dostęp *On-premises*

### Czy można uzyskać dostęp do Enterprise File Storage poza siecią OVHcloud?

Z definicji Enterprise File Storage jest dostępny tylko w sieci OVHcloud.<br>
Można jednak zamontować architekturę pozwalającą na połączenie z infrastrukturą zewnętrzną.<br>
Prosimy o dołączenie do usługi handlowej lub pomocy technicznej w celu zaprojektowania infrastruktury dostosowanej do Twojego ekosystemu i rozwiązania. 

## Wydajność i wydajność

### Jakie są dostępne możliwości przechowywania danych?

Minimalny rozmiar usługi to 1TiB, a maksymalny rozmiar to 58TiB. Granulat wynosi 1TiB.

### Jak wiele usług Enterprise File Storage mogę tworzyć na koncie klienta?

Nie ma limitu liczby usług na konto klienta.

### Jaka jest maksymalna liczba woluminów na usługę?

Możesz utworzyć maksymalnie 10 wolumenów na usługę. Minimalny rozmiar to 100GiB, a maksymalny rozmiar to 29TiB.

### Jaki poziom wydajności jest dostępny dla Enterprise File Storage?

Firma File Storage jest dostarczana z gwarantowanym przepływem 64MB/s na TiB i 4000 IOPS na TiB.

Na przykład podczas dostarczania puli 10 TiB możesz korzystać z przepustowości 640MB/s i 40000 IOPS.

## Snapshoty i kopie zapasowe

### Jak można przywrócić pliki z poprzedniej wersji?

Snapshoty są dostępne w odpowiednim katalogu (.snapshoty).

### Jaka polityka tworzenia kopii zapasowych jest przypisana do Enterprise File Storage?

Użytkownicy są odpowiedzialni za zarządzanie kopiami zapasowymi (narzędzie i reguły). Ze względów bezpieczeństwa i odporności infrastruktury OVHcloud wykonuje codzienną kopię zapasową usługi na zdalnym serwerze. W przypadku awarii lub ataku, OVHcloud może przywrócić dane z poprzedniego dnia. Operacja ta jest realizowana na żądanie i opcjonalnie płatna usługa.

### Czy snapshoty są zawarte w pojemności usługi?

Do kopii zapasowych snapshot przydziela się co najmniej 5% przestrzeni dyskowej. Na przykład, w usłudze 5TiB, 250GiB jest zarezerwowane dla snapshotów.

### Jaka jest maksymalna liczba snapshotów na usługę?

200

### Jaka jest maksymalna liczba snapshotów na wolumen?

200

### Jak wiele polityk snapshotów mogę tworzyć na podstawie wolumenu?

1

### Ile reguł mogę tworzyć za pomocą polityki snapshotów?

4

### Gdzie są przechowywane snapshoty?

Twoje snapshoty są przechowywane na tym samym poziomie, co Twoja usługa. Snapshoty są replikowane na dwóch różnych serwerach, w dwóch różnych konfiguracjach. Jednocześnie OVHcloud wykonuje codzienną kopię zapasową snapshota zdalnej strony WWW.

### Jak monitorować wykorzystanie puli i wolumenów?

Nie ma jeszcze zintegrowanych metryk, które mógłbyś monitorować wykorzystanie puli i wolumenów. 

## Ceny

### Jaki rodzaj opłat jest przypisany do usługi?

Enterprise File Storage to usługa płatna co miesiąc za wolumen (od 1 do 58 TiB w odstępach 1 TiB). Możliwe jest również, opcjonalnie, zobowiązanie się na czas użytkowania usługi (12, 24 lub 36 miesięcy).

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
