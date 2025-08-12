---
title: FAQ VPS OVHcloud
updated: 2025-08-07
---

## FAQ VPS

### Do czego służy serwer?

VPS to serwer wirtualny (Virtual Private Server), na którym można instalować strony WWW (witryny, serwisy e-commerce, treści...) oraz aplikacje (portale wewnątrzfirmowe, rozwiązania do pracy zespołowej, wiki, CRM, ...).  
 W przeciwieństwie do hostingu, VPS umożliwia odizolowanie od siebie kilku aplikacji utrzymywanych na jednej wirtualnej maszynie, która należy do jednego klienta. 

VPS, rozwiązanie pośrednie między hostingiem a serwerem fizycznym, charakteryzuje się niezawodnością i wydajnością sprzętu dedykowanego, różni się jednak tym, że nie musisz nim zarządzać.

### VPS czy hosting?

Serwer VPS jest kolejnym wyborem po hostingu.  Daje Ci więcej swobody w zakresie konfiguracji i korzystania z różnych funkcjonalności (dostęp root, Apache PHP,init).  Możesz również zainstalować własny certyfikat SSL i dowolne oprogramowanie.

Pamiętaj jednak, żeby wybrać odpowiedni VPS.  Potrzebujesz konfiguracji dopasowanej do wymagań Twoich aplikacji oraz możliwości dostosowywania jej wraz z rozwojem Twoich projektów.

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

- **VPS Starter**: ekskluzywna maszyna do testowania naszej oferty (tylko z dystrybucją Linux);
- **VPS Value, Essential i Comfort**: idealne do hostingu stron WWW, usług e-commerce lub systemów monitoringu;
- **VPS Elite**: dostosowane do sklepów internetowych i aplikacji wymagających większych zasobów procesora i pamięci.
- **VPS Limited Edition** (Ilość ograniczona): serwery VPS zapewniają większą wydajność i dużą zaletę w hostowaniu złożonych stron WWW, aplikacji wymagających ogromnych zasobów, a nawet serwerów gier. Ta oferta jest ważna do wyczerpania zapasów.

> [!primary]
> Możesz zmienić VPS Limited Edition na inny VPS z tej samej gamy, ale ze względów technicznych nie można zmienić VPS Limited Edition na VPS z innej gamy (Starter, Value, Essential lub Comfort).

### Kto może korzystać z serwera VPS?

Każda osoba posiadająca podstawową wiedzę techniczną z zakresu administracji serwerami może korzystać z VPS.  Kompetencje te są niezbędne do zarządzania zainstalowanym na maszynie systemem operacyjnym (Linux lub Windows) i do konfigurowania aplikacji. Myślisz, że potrzebujesz serwera VPS, ale czy nie posiadasz wymaganych kompetencji? Prosimy o kontakt z jednym z naszych [partnerów](/links/partner).

Jeśli chcesz korzystać z gwarantowanych zasobów bez znajomości administrowania serwerami, zalecamy nasze [hosting Performance](/links/web/hosting-performance-offer).

### Jak się zalogować do mojego VPS?

Możesz łączyć się zdalnie z Twoim serwerem VPS, używając danych dostarczonych w wiadomości e-mail po udostępnieniu usługi.  
Sposób połączenia zależy od używanego systemu operacyjnego.

Szczegóły znajdziesz w przewodniku ["Pierwsze kroki z serwerem VPS"](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).

### Czy mogę zainstalować kilka stron WWW na jednym serwerze VPS?

Tak Możesz podzielić serwer VPS i dostosować go do Twoich potrzeb. Możesz zainstalować kilka stron lub projektów, przydzielając każdemu prywatną przestrzeń o wybranym rozmiarze. Realizacja tych operacji będzie prostsza, jeśli zainstalujesz panel administracyjny Plesk lub cPanel.

### Czy mój VPS ma kopię zapasową?

W zależności od wrażliwości danych zalecamy zastosowanie odpowiedniej strategii tworzenia kopii zapasowych.  
Przejdź na naszą [stronę WWW VPS](/links/bare-metal/vps-options), aby uzyskać więcej informacji na temat dostępnych opcji.

### Jak zabezpieczyć serwer VPS?

VPS jest dostarczany jako "goły" i nie ma na nim żadnej konfiguracji bezpieczeństwa. To pierwsza rzecz, którą musisz zrobić w recepcji
W tym celu zapoznaj się z przewodnikiem ["Zabezpieczenie serwera VPS"](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps).

### Jaka jest przepustowość przypisana do mojego VPS? Czy jest gwarantowana?

Przepustowość podana na stronie produktowej VPS jest gwarantowana. Jest to minimalna przydzielona przepustowość.

### Jakie warunki SLA są stosowane na moim serwerze VPS?

OVHcloud oferuje SLA na poziomie 99,9% dla wszystkich ofert VPS.

### Jak uzyskać dostęp do usługi backup storage z innego adresu IP niż moja usługa? <a name="backupstorage"></a>

Dostęp do backupu FTP może być ograniczony do usługi, do której jest on przypisany za pośrednictwem Panelu klienta OVHcloud.

Aby autoryzować dodatkowe adresy IP, z których chcesz uzyskać dostęp do Backup Storage, skorzystaj z API OVHcloud.  
Dzięki temu będziesz mógł pobierać kopie zapasowe danych z innej usługi za pomocą różnych protokołów (FTP, NFS, CIFS).

> [!warning]
> Zezwala się wyłącznie na adresy IP OVHcloud.
>

Zaloguj się do [konsoli API OVHcloud](/links/api) przy użyciu danych logowania do konta klienta i wykonaj następujące wywołanie:

> [!api]
>
> @api {v1} /vps POST /vps/{serviceName}/backupftp/access
>

Zmień parametry w następujący sposób:

- `serviceName`: wprowadź wewnętrzną nazwę Twojego serwera VPS (`vps-x11x11xyy.vps.ovh.net`).
- `cifs`: Jeśli używasz tego protokołu, ustaw dla tego parametru wartość `true`.
- `ftp`: ustaw dla tego parametru wartość `true`, jeśli używasz tego protokołu.
- `ipBlock`: wprowadź adres IP, który będzie miał do niego dostęp, w formie `203.0.113.100/32`.
- `nfs`: Jeśli używasz tego protokołu, ustaw dla tego parametru wartość `true`.

Kliknij przycisk `EXECUTE`{.action}.

Aby sprawdzić, czy Twój adres IP jest poprawnie autoryzowany, użyj następującego połączenia:

> [!api]
>
> @api {v1} /vps GET /vps/{serviceName}/backupftp/access
>

## Sprawdź również

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).