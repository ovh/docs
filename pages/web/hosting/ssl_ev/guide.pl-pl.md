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

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/fr/). Niestety nie będziemy w stanie udzielić wsparcia **na wszystkich etapach weryfikacji bezpośrednio z organem certyfikującym Sectigo**. Więcej informacji znajduje się w sekcji [Sprawdź również](#go-further) niniejszego przewodnika.
>

### Etap 1: zamów certyfikat SSL EV

#### 1.1 - Dla już istniejącej domeny i hostingu OVHcloud

Zapoznaj się z naszym przewodnikiem dotyczącym [zarządzania certyfikatem SSL na hostingu](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/) i wybierz **Certyfikat SSL EV** po przyjeździe do tunelu zamówienia.

Wpisz poprawnie informacje wymagane przez **Sectigo**, zanim otrzymasz certyfikat SSL EV. 

![SSL EV form](images/ssl_ev_order_6.png){.thumbnail}

Kliknij polecenie `Dalej`{.action} raz **wszystkie elementy** poprawnie wprowadzone.

Postępuj zgodnie z poleceniem aż do płatności, aby potwierdzić zlecenie utworzenia certyfikatu SSL.

> [!alert]
>
> Po zatwierdzeniu zamówienia wniosek o certyfikat SSL EV jest wysyłany do instytucji certyfikującej **Sectigo**.
>
> **Przed opłaceniem certyfikatu** sprawdź, czy spełniasz warunki uprawniające do korzystania z certyfikatu SSL EV.
>
> Faktycznie, zwrot kosztów certyfikatu SSL EV nie będzie możliwy, **nawet jeśli procedura weryfikacji w Sectigo nie zakończy się**.
>

#### 1.2 - Dla nowej domeny i nowego hostingu

Jeśli jeszcze nie zamówiłeś domeny i przypisanego hostingu, przejdź do [strony głównej OVHcloud](https://www.ovhcloud.com/fr/), wpisz nazwę domeny w **formularz przeszukiwania przeznaczony do tego celu**, a następnie kliknij `Szukaj`{.action}, aby rozpocząć zamówienie.

![SSL EV select domain](images/ssl_ev_order_1.png){.thumbnail}

Następnie wybierz domenę, wybierz hosting oraz opcje, aż do etapu `Konfiguracja hostingu.

Wybierz moduł `moduł za 1 kliknięciem`{.action} i `CDN`{.action} i przejdź na dół strony, aż do sekcji `Zabezpiecz swoją stronę za pomocą naszych certyfikatów SSL`{.action}.

![SSL EV order](images/ssl_ev_order.png){.thumbnail}

Wybierz `Sectigo EV SSL`{.action} i kliknij `Dalej`{.action}.

Na nowej stronie, która się wyświetla, wprowadź poprawnie informacje wymagane przez **Sectigo**, zanim certyfikat SSL EV zostanie wydany:

![SSL EV form](images/ssl_ev_order_6.png){.thumbnail}

Kliknij polecenie `Dalej`{.action} raz **wszystkie elementy** poprawnie wprowadzone.

Postępuj zgodnie z poleceniami aż do płatności i rozpocznij instalację swoich usług.

> [!alert]
>
> Po zatwierdzeniu zamówienia wniosek o certyfikat SSL EV jest wysyłany do instytucji certyfikującej **Sectigo**. 
>
> **Przed opłaceniem certyfikatu** sprawdź, czy spełniasz warunki uprawniające do korzystania z certyfikatu SSL EV.
>
> Faktycznie, zwrot kosztów certyfikatu SSL EV nie będzie możliwy, **nawet jeśli procedura weryfikacji w Sectigo nie zakończy się**.
>

### Etap 2: weryfikacji z Urzędem Certyfikacji (AC) Sectigo

Wszystkie działania opisane na tym etapie mogą być przeprowadzane w ciągu kilku dni. Terminy **zależą** od weryfikacji przeprowadzonej przez Sectigo.

> [!warning]
>
> Na tym etapie cały proces zależy od dostawcy certyfikatu **Sectigo** oraz informacji podanych podczas składania zamówienia na certyfikat SSL EV. 
>
> Tylko **Sectigo** będzie mógł interweniować na tym etapie, a OVHcloud nie będzie mógł działać na tym poziomie.
>
> Rola AC Sectigo polega na niezależnym i bezstronnym poświadczaniu informacji Twojej organizacji, które mają zostać włączone do certyfikatu SSL EV.
>
> To **Sectigo** decyduje, czy wydać certyfikat EV SSL i w ogóle OVHcloud. Sectigo jest z definicji jedynym posiadaczem certyfikacji.
>

#### 2.1 - Otrzymanie wiadomości e-mail z potwierdzeniem przez Sectigo

Po zrealizowaniu zamówienia Sectigo prześle Ci wiadomość e-mail z linkiem uwierzytelniającym i z procedurą, którą należy postępować.
Sprawdź Twoje dane i zatwierdź zlecenie, postępując zgodnie z instrukcjami zawartymi w tym e-mailu. 

Aby upewnić się, że korespondencja za pomocą wiadomości e-mail z Sectigo przebiega prawidłowo, sprawdź również ważność konta e-mail podanego w formularzu podczas składania zamówienia na certyfikat SSL EV, jak również adres e-mail do kontaktu powiązany z Twoim [Panelem klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

#### 2.2 - Weryfikacje wykonane przez Urząd Certyfikacji Sectigo

Sectigo sprawdzi następnie, czy Twoja organizacja istnieje i jest zarejestrowana w oficjalnych rejestrach.

> [!primary]
>
> Sectigo może nie być w stanie sprawdzić wszystkich informacji w oficjalnych rejestrach. Służby Sectigo mogą skontaktować się z Tobą telefonicznie na numer podany podczas składania zamówienia lub na numer telefonu firmy.
>

Sectigo sprawdzi, czy posiadasz wyłączność/autorytet w zakresie własności i korzystania z domeny, z którą będziesz korzystać z certyfikatu SSL EV.

#### 2.3 - Ostatnie weryfikacje przez telefon z Sectigo

Po dokonaniu weryfikacji przez Sectigo skontaktujemy się z Tobą przez ich usługi, aby dokończyć subskrypcję certyfikatu SSL EV.

> [!success]
>
> Szczegółowe informacje na temat operacji opisanych **w etapie 2** powyżej znajdują się w [oficjalnej dokumentacji Sectigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external} na ten temat.
>

### Etap 3: instalacja certyfikatu SSL EV z domeną i hostingiem OVHcloud

Po przeprowadzeniu wszystkich weryfikacji przez Sectigo ich usługi generują certyfikat SSL EV i przekazują nam niezbędne informacje do zainstalowania go na Twoim hostingu.

Aby w pełni korzystać z certyfikatu SSL EV, wystarczy kliknąć na [załadować stronę WWW na HTTPS](https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/).

## Sprawdź również <a name="go-further"></a>

[Oficjalna strona Sectigo](https://sectigostore.com){.external}

[Opis weryfikacji przeprowadzonych przez Setigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}

[Zarządzanie certyfikatem SSL na hostingu](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/)

[Przejdź na stronę przez HTTPS](https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>. 