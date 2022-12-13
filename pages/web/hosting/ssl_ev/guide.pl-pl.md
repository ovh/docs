---
title: "Użyj certyfikatu SSL EV dla swojej strony www"
slug: ssl-ev
excerpt: "Dowiedz się, jak zamówić i zainstalować certyfikat SSL EV na Twoim hostingu WWW OVHcloud"
section: SSL
order: 03
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 13-12-2022**
  
## Wprowadzenie

Certyfikaty Secure Socket Layer (SSL) umożliwiają szyfrowanie informacji przesyłanych na Twojej stronie WWW. Dzięki temu możesz uniknąć sytuacji, w której osoba lub złośliwy robot "odsłuchuje" zapytań wysyłanych lub wysyłanych z Twojej strony WWW.

OVHcloud oferuje kilka typów certyfikatów SSL dla naszych ofert [hosting OVHcloud](https://www.ovhcloud.com/fr/web-hosting/). Są one przedstawione w naszym przewodniku "[Zarządzanie certyfikatem SSL na hostingu](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/)". Certyfikaty SSL są niezbędne dla bezpieczeństwa Twojej strony WWW.

Istnieją trzy rodzaje certyfikatów SSL:

- Domain Validation (DV)
- Organizacja potwierdzania (OV)
- Rozszerzenie weryfikacji (EV)

Poziomy szyfrowania SSL są identyczne między tymi trzema typami certyfikatu.

Główną różnicą jest poziom weryfikacji, który zostanie przeprowadzony przez organ certyfikacji (AC) wydający certyfikat SSL i poświadczający jego autentyczność.

Certyfikaty SSL EV są certyfikatami o najwyższych poziomach weryfikacji i bezpieczeństwa. Certyfikat SSL EV jest zazwyczaj wykorzystywany do tworzenia bardzo dużych stron www lub wrażliwych stron internetowych. Certyfikat ten zapewni najwyższy dostępny poziom identyfikacji.

W przypadku hostingu współdzielonego OVHcloud instytucja certyfikująca certyfikaty SSL EV to [Sectigo](https://sectigostore.com){.external}.

> [!warning]
>
> Certyfikaty SSL EV nie są dostępne dla wszystkich. Sprawdź, czy możesz zamówić licencję **przed**, korzystając z informacji podanych w tym przewodniku [Wymagania początkowe](#requirements).
>
> Pamiętaj, że po złożeniu i przekazaniu zamówienia do naszego dostawcy certyfikatów/autoryzacji Sectigo, **nie będzie możliwe zwrot**.
>

**Dowiedz się, jak zamówić i zainstalować certyfikat SSL EV na Twoim hostingu WWW OVHcloud**
    
## Wymagania początkowe <a name="requirements"></a>

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Zamów lub zamów [hosting OVHcloud](https://www.ovhcloud.com/fr/web-hosting/), dla którego nie został zainstalowany żaden certyfikat SSL.
- Zamów [domenę](https://www.ovhcloud.com/fr/domains/) i uzyskaj wyłączne prawa do korzystania z tej domeny. Nazwa domeny nie może być już powiązana z certyfikatem SSL.
- Być organizacją (firma, agencja rządowa, ...) zarejestrowaną w oficjalnym rejestrze.
- Posiadanie upoważnienia organizacji do zamawiania certyfikatu SSL EV
- Być w stanie dokładnie uzasadnić informacje i dane kontaktowe dotyczące organizacji.

Aby sprawdzić, czy możesz zamówić certyfikat SSL EV, przejdź do [link](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}.
  
## W praktyce

## Sprawdź również <a name="go-further"></a>

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>. 