---
title: FAQ VPS OVHcloud
slug: vps-faq
section: 'Pierwsze kroki'
order: 1
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

## FAQ VPS

### Do czego służy serwer?

VPS to serwer wirtualny (Virtual Private Server), na którym można instalować strony WWW (witryny, serwisy e-commerce, treści...) oraz aplikacje (portale wewnątrzfirmowe, rozwiązania do pracy zespołowej, wiki, CRM, ...).
 W przeciwieństwie do hostingu, VPS umożliwia odizolowanie od siebie kilku aplikacji utrzymywanych na jednej wirtualnej maszynie, która należy do jednego klienta. 

VPS, rozwiązanie pośrednie między hostingiem a serwerem fizycznym, charakteryzuje się niezawodnością i wydajnością sprzętu dedykowanego, różni się jednak tym, że nie musisz nim zarządzać.

### VPS czy hosting?

Serwer VPS jest kolejnym wyborem po hostingu.  Daje Ci więcej swobody w zakresie konfiguracji i korzystania z różnych funkcjonalności (dostęp root, Apache PHP,init).  Możesz również zainstalować własny certyfikat SSL i dowolne oprogramowanie.

Pamiętaj jednak, żeby wybrać odpowiedni VPS.  Potrzebujesz konfiguracji dopasowanej do wymagań Twoich aplikacji oraz możliwości dostosowywania jej wraz z rozwojem Twoich projektów.

### VPS czy hosting Plesk?

Wraz z pakietem hostingowym Plesk otrzymujesz serwer, na którym jest wstępnie zainstalowana platforma Plesk.  Możesz zarządzać stronami WWW, ale nie jesteś administratorem usługi. Może on być wykorzystywany wyłącznie do zarządzania.
Wybierając VPS, stajesz się administratorem Twojego serwera, a OVHcloud nie ma dostępu do jego zawartości. Możesz zatem używać go dowolnie zgodnie z Twoimi potrzebami.

### VPS czy serwer dedykowany?

Zaletą VPS jest to, że nie musisz zarządzać sprzętem, np. monitorować stanu dysków twardych, pamięci RAM i CPU. Oferta VPS jest odpowiednia dla większości zastosowań WWW wchodzących w zakres projektów o średniej wielkości. 

Serwer dedykowany jest zalecany, jeśli chcesz: całkowicie administrować środowiskiem, budować rozwiązania na bazie bardziej kompleksowych architektur, tworzyć infrastrukturę obejmującą sieć prywatną (vRack) czy wdrażać zaawansowane rozwiązania niezwiązane z usługami WWW.

Użytkownicy VPS, których projekty szybko się rozwijają, w kolejnym kroku mogą wybrać serwer dedykowany lub rozwiązania Public Cloud. W ramach tych usług zyskają bardziej złożoną i elastyczną infrastrukturę dostosowaną do dynamicznego wzrostu działalności.

### Jakie są różnice między rozwiązaniami VPS a Public Cloud?

VPS to rozwiązanie przewidziane dla środowisk preprodukcyjnych i produkcyjnych, które nie wymagają stałej wydajności.
OVHcloud oferuje infrastrukturę z wieloma serwerami o wysokiej dostępności. W przeciwieństwie do VPS, Public Cloud obejmuje również usługę vRack.

### Jak wybrać serwer VPS?

Aby wybrać serwer VPS dostosowany do Twoich potrzeb, sprawdź:

- ilość niezbędnych zasobów (procesor, pamięć, przestrzeń dyskowa, przepustowość,...);
- wymagany system operacyjny (Linux lub Windows);
- wymagania techniczne niezbędne do prawidłowego działania aplikacji (np. baza danych wymaga prędkości odczytu/zapisu).

Pozwoli Ci to dokonać właściwego wyboru spośród naszych rozwiązań VPS:

- **VPS Starter**: ekskluzywna maszyna do testowania naszej oferty (tylko z dystrybucją Linux, bez webowego panelu zarządzania);
- **VPS Value, Essential i Comfort**: idealne do hostingu stron WWW, usług e-commerce lub systemów monitoringu;
- **VPS Elite**: dostosowane do sklepów internetowych i aplikacji wymagających większych zasobów procesora i pamięci.


### Kto może korzystać z serwera VPS?

Każda osoba posiadająca podstawową wiedzę techniczną z zakresu administracji serwerami może korzystać z VPS.  Kompetencje te są niezbędne do zarządzania zainstalowanym na maszynie systemem operacyjnym (Linux lub Windows) i do konfigurowania aplikacji. Myślisz, że potrzebujesz serwera VPS, ale czy nie posiadasz wymaganych kompetencji? Prosimy o kontakt z jednym z naszych partnerów. 

Jeśli chcesz korzystać z gwarantowanych zasobów bez znajomości administrowania serwerami, zalecamy nasze [hosting Performance](https://www.ovh.pl/hosting/hosting-performance.xml).

### Jak się zalogować do mojego VPS?

Połączenie z serwerem VPS będzie realizowane za pomocą protokołu SSH, przy użyciu adresu IP, nazwy użytkownika i hasła przesłanego e-mailem po otrzymaniu zamówienia.
Na komputerze z systemem Windows zalecane jest logowanie się przy użyciu programu Putty. Połączenie można wykonać bezpośrednio na urządzeniu z poziomu komputera Linux.

Szczegóły znajdziesz w przewodniku ["Pierwsze kroki z serwerem VPS"](../pierwsze-kroki-vps/).

### Czy mogę zainstalować kilka stron WWW na jednym serwerze VPS?

Tak Możesz podzielić serwer VPS i dostosować go do Twoich potrzeb. Możesz zainstalować kilka stron lub projektów, przydzielając każdemu prywatną przestrzeń o wybranym rozmiarze. Realizacja tych operacji będzie prostsza, jeśli zainstalujesz panel administracyjny Plesk lub cPanel.

### Czy mój VPS ma kopię zapasową?

OVHcloud nie tworzy kopii zapasowych danych hostowanych na Twoim serwerze VPS. Ich utworzenie należy zatem do Ciebie.
W tym celu możesz skorzystać z następujących opcji: ręczna kopia zapasowa (Snapshot) lub automatyczny backup.

### Jak zabezpieczyć serwer VPS?

VPS jest dostarczany jako "goły" i nie ma na nim żadnej konfiguracji bezpieczeństwa. To pierwsza rzecz, którą musisz zrobić w recepcji
W tym celu zapoznaj się z przewodnikiem ["Zabezpieczenie serwera VPS"](../porady-zabezpieczenie-vps/).

### Jaka jest przepustowość przypisana do mojego VPS? Czy jest gwarantowana?

Przepustowość podana na stronie produktowej VPS jest gwarantowana. Jest to minimalna przydzielona przepustowość.

### Jakie warunki SLA są stosowane na moim serwerze VPS?

OVHcloud oferuje SLA na poziomie 99,9% dla wszystkich ofert VPS.

### Jak uzyskać dostęp do usługi backup storage z innego adresu IP niż moja usługa? <a name="backupstorage"></a>

Dostęp do backupu FTP może być ograniczony do usługi, do której jest on przypisany za pośrednictwem Panelu klienta OVHcloud.

Aby móc dodawać inne adresy IP różnych usług, możesz użyć API OVHcloud.
Dzięki temu będziesz mógł pobrać Twoje kopie zapasowe z usługi w innej lokalizacji.

> [!warning]
> Zezwala się wyłącznie na adresy IP OVHcloud.
>

Zaloguj się na stronie [https://api.ovh.com/](https://api.ovh.com/) i skorzystaj z następującego połączenia:

> [!api]
>
> @api {POST} vps/{serviceName}/backupftp/access
>

Wpisz pola w następujący sposób:

- `serviceName `: nazwa serwera VPS
- `cifs `: zaznacz w razie potrzeby
- `ftp`: zaznacz w razie potrzeby
- `ipBlock`: wprowadź adres IP, który będzie miał dostęp w formie `1.2.3.4/32`
- `nfs`: zaznacz w razie potrzeby

![post api](images/post-api.png){.thumbnail}

Aby sprawdzić, czy Twój adres IP jest poprawnie autoryzowany, użyj następującego połączenia:

> [!api]
>
> @api {GET} /vps/{serviceName}/backupftp/access
>

![get api](images/get-api.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
