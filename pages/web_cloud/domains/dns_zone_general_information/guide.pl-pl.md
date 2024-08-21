---
title: "Wszystko o strefie DNS"
excerpt: "Dowiedz się, jaką rolę odgrywa strefa DNS oraz jakie rekordy zawiera dla domeny"
updated: 2024-06-17
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Skrót **DNS** oznaczający **D**omain **N**ame **S**ystem to zbiór elementów (serwery DNS, strefy DNS, etc.) pozwalających na dopasowanie nazwy domeny do adresu IP.

Rozróżnienie między **serwerami DNS** i **strefą DNS** jest niezwykle istotne. **serwer DNS** jest skonfigurowany na poziomie **strefa DNS**.

Aby lepiej zrozumieć całość odpowiedzi, zalecamy zapoznanie się z naszym przewodnikiem "[Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)".

Na przykład, jeśli chcesz wejść na stronę *domain.tld* za pośrednictwem przeglądarki internetowej, Twoje zapytanie jest początkowo przetwarzane przez ten zestaw DNS. Serwer DNS dostarczy w odpowiedzi na Twoją przeglądarkę internetową adres IP serwera hostującego stronę *domain.tld*.

Po wpisaniu *domain.tld** wszystkie **serwery DNS** powiązane z tą domeną zostaną zbadane. Zawierają one **strefę DNS** nazwy domeny *domain.tld*, w której jest podany adres IP hostingu *domain.tld*. Następnie Twoja przeglądarka będzie mogła wyświetlić stronę WWW *domain.tld* zawartą na hostingu. Nazywamy to rozdzielczością DNS.

**Dowiedz się, jaką rolę odgrywa strefa DNS, co to jest strefa DNS i jak działa z nazwą domeny.**

## W praktyce

### Rola strefy DNS

Strefa DNS domeny zawiera konfigurację odnoszącą się do domeny. Zawiera on informacje techniczne nazywane *rekordami DNS*. Strefa DNS jest, w pewnym sensie, centrum koordynacji dla nazwy domeny.

Możesz na przykład w nim określić:

- Adres IP (rekordy DNS typu *A* i *AAAA*) Twojego hostingu, aby wyświetlał Twoją stronę WWW wraz z domeną.
- Serwery email (rekordy DNS typu *MX*), na które Twoja domena powinna przekierowywać wiadomości e-mail.
- Informacje związane z bezpieczeństwem / uwierzytelnianiem usług (hosting, serwer www, serwer e-mail, itp.) przypisane do Twojej domeny (rekordy DNS typu SPF, DKIM, DMARC, etc.).

Strefa DNS jest instalowana / rejestrowana na **serwerach DNS**. Należy zadeklarować **serwery DNS** (u rejestratora domeny), aby korzystać ze strefy DNS, którą hostują.

Więcej informacji na ten temat znajdziesz na naszej stronie WWW [jak działa serwer DNS](/links/web/domains-dns-server).

### Rekordy DNS

Istnieje wiele rekordów DNS. Każda z nich ma specjalny cel w zakresie rozpoznawania nazw DNS. W OVHcloud wyróżniamy je na trzy części:

- Rekordy wskazywania (A, AAAA, CNAME, DNAME, NS)
- Rekordy email (MX, SPF, DKIM, DMARC)
- Rozszerzone rekordy (TXT, SRV, CAA, NAPTR, LOC, SSHFP, TLSA)

Więcej informacji na temat różnych typów rekordów opisanych powyżej znajdziesz w przewodniku [rekordy DNS](/pages/web_cloud/domains/dns_zone_records). Znajdziesz w nim elementy, które pozwolą Ci na przykład lepiej zrozumieć [edycję strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

### Przykład strefy DNS

Aby lepiej zrozumieć, czym jest strefa DNS, zapoznaj się z przykładem strefy DNS hostowanej w OVHcloud dla domeny *domain.tld*. Jest ona skonfigurowana na serwerach DNS *dns200.anycast.me* i *ns200.anycast.me* OVHcloud:

![DNS zone dashboard](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-dashboard.png){.thumbnail}

Poniżej znajdziesz jego odpowiednik w "trybie tekstowym":

```bash
$TTL 3600
@	IN SOA dns200.anycast.me. tech.ovh.net. (2024051800 86400 3600 3600000 60)
                 IN NS     ns200.anycast.me.
                 IN NS     dns200.anycast.me.
                 IN MX     1 mx1.mail.ovh.net.
                 IN MX     5 mx2.mail.ovh.net.
                 IN MX     10 mx3.mail.ovh.net.
                 IN A      203.0.113.0
www              IN A      203.0.113.0
```

W tym przykładzie strefa DNS między innymi precyzuje następujące informacje dotyczące wysyłanych zapytań DNS:

- Serwery DNS zadeklarowane dla domeny *domain.tld* to serwery DNS *dns200.anycast.me* i *ns200.anycast.me*.
- Serwer musi zwrócić adres IP 203.0.113.0, jeśli zapytanie DNS jest wysyłane do domeny *domain.tld* lub subdomeny *www.domain.tld*. Za adresem IP 203.0.113.0 znajduje się na przykład strona www *domain.tld*.
- W przypadku e-maili strefa DNS wskazuje, że zapytania DNS zrealizowane dla adresów e-mail oznaczonych *@domain.tld* muszą być wysyłane na serwer *mx1.mail.ovh.net* w pierwszej kolejności. Jeśli odpowiedź na to pytanie trwa zbyt długo lub jest niedostępna, zapytanie zostanie przesłane na serwer *mx2.mail.ovh.net*, itd. do ostatniego zadeklarowanego serwera *mx3.mail.ovh.net*.
- SOA (**S**tart **O**f **A**uthority) w strefie DNS OVHcloud wskazuje, że data ostatniej aktualizacji strefy DNS to 18/05/2024, a czas odświeżania strefy DNS to 3600 sekund. W strefach DNS hostowanych poza OVHcloud kod SOA może zawierać inne elementy, takie jak adres e-mail administratora strefy DNS. Ze względów bezpieczeństwa OVHcloud nie wyświetla tej informacji w SOA.

## Sprawdź również

[Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)

[Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)

[Utwórz strefę DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Zarządzanie historią strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_history)

[Usuń strefę DNS OVHcloud](/pages/web_cloud/domains/dns_zone_deletion)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).