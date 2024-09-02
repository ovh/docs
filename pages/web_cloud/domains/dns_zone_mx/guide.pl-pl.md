---
title: "Konfiguracja rekordu MX dla emaili"
excerpt: "Dowiedz się, jak skonfigurować rekord MX dla Twojej domeny w OVHcloud"
updated: 2024-02-29
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Rekord MX umożliwia powiązanie domeny z serwerem platformy e-mail. Jest to niezbędne, aby usługa e-mail nadawcy mogła dotrzeć do usługi e-mail odbiorcy.

**Dowiedz się, jak skonfigurować rekord MX dla Twojej domeny w OVHcloud.**

## Wymagania początkowe

- Dostęp do interfejsu zarządzania strefą DNS danej domeny w [Panelu klienta](/links/manager).
- Dostęp do [Panelu klienta OVHcloud](/links/manager).
- Wybrana domena musi korzystać z konfiguracji OVHcloud (tzn. z serwerów DNS OVHcloud).
- Posiadanie konta e-mail MX Plan (zawartego w pakiecie [hostingowym](/links/web/hosting), [bezpłatnym hostingu 100M](/links/web/domains-free-hosting) lub w ofercie MX Plan zamówionej oddzielnie), jednej z naszych [ofert e-mail OVHcloud](/links/web/emails) lub zewnętrznej usługi e-mail.

> [!primary]
>
> - Jeśli Twoja domena nie używa serwerów DNS OVHcloud, przeprowadź zmianę wpisów MX w interfejsie dostawcy zarządzającego konfiguracją Twojej domeny.
>
> - Jeśli Twoja domena jest zarejestrowana w OVHcloud, możesz sprawdzić, czy używa ona konfiguracji OVHcloud w Twoim [Panelu klienta](/links/manager). Po wybraniu domeny w zakładce `Informacje ogólne`{.action} w sekcji `Serwery DNS`{.action}, jeśli pozycja `Aktywne` znajduje się pod adresem "**Serwery DNS**", korzystasz z serwerów DNS OVHcloud.
>
> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/dns-servers-enabled.png){.thumbnail}

## W praktyce

### Zrozumienie roli rekordów MX 

Rekordy MX (**M**ail **e**Xchange) umożliwiają powiązanie Twojej domeny z serwerami poczty przychodzącej przypisanymi do Twojej usługi e-mail. Posłużemy się przykładem.

Gdy adres **sender@otherdomain.ovh** wysyła wiadomość na adres **contact@modomain.ovh**, serwer poczty (**Outgoing mail server**) przechodzi:

- **(1)** odpytywanie strefy DNS domeny **mydomain.ovh** i odczytywanie rekordów **MX**.
- **(2)** Prześlij wiadomość e-mail na adres URL odczytanego rekordu **MX**.

![email](/pages/assets/schemas/emails/mx-dns-resolution.png){.thumbnail}

Wiadomość e-mail zostanie wysłana na adres docelowy **mx0.mail.ovh.net** poprzedzony wartością **0**. Ta wartość jest nazywana priorytetem. Najniższa jest odpytywana w pierwszej kolejności, a najwyższa w ostatniej. Oznacza to, że obecność wielu rekordów może zapobiec brakowi odpowiedzi rekordu MX o najniższym priorytecie.

Dla tej samej domeny można skonfigurować wiele rekordów MX. W takim przypadku konieczne jest określenie numeru priorytetu dla każdego z nich. Rekordy MX są odpytywane w kolejności rosnącej, od najniższego numeru do najwyższego, aż do uzyskania odpowiedzi z serwera poczty przychodzącej.

> [!warning]
>
> Ogólnie rzecz biorąc, **modyfikacja rekordów MX w strefie DNS domeny jest operacją wymagającą wiedzy** : omyłkowe działanie może uniemożliwić spływanie e-maili na Twoje adresy. Zalecamy szczególną ostrożność podczas wykonywania tej operacji.
> W przypadku wątpliwości zalecamy skorzystanie z pomocy wyspecjalizowanego [usługodawcy](/links/partner).

### Wartości konfiguracji MX OVHcloud <a name="mxovhcloud"></a>

Zapoznaj się z przedstawioną poniżej konfiguracją MX OVHcloud przewidzianą dla rozwiązań MX Plan (występującą samodzielnie lub włączoną do oferty [hostingu WWW OVHcloud](/links/web/hosting)), [E-mail Pro](/links/web/email-pro) oraz [Exchange](/links/web/emails). Na serwerach poczty elektronicznej OVH zainstalowane jest oprogramowanie antyspamowe i antywirusowe.

Wartości te są wspólne dla wszystkich ofert z wyjątkiem [Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private) i Dedicated Exchange.

|Domena|TTL|Typ rekordu|Priorytet|Adres docelowy|
|---|---|---|---|---|
|*pozostaw puste*|3600|MX|1|mx0.mail.ovh.net.|
|*pozostaw puste*|3600|MX|5|mx1.mail.ovh.net.|
|*pozostaw puste*|3600|MX|50|mx2.mail.ovh.net.|
|*pozostaw puste*|3600|MX|100|mx3.mail.ovh.net.|
|*pozostaw puste*|3600|MX|200|mx4.mail.ovh.net.|

Rekordy MX muszą być skonfigurowane w strefie DNS Twojej domeny.

### Konfiguracja rekordu MX w strefie DNS OVHcloud

Aby utworzyć lub zmodyfikować rekordy MX w konfiguracji OVHcloud Twojej domeny, zaloguj się do [Panelu klienta OVHcloud](/links/manager). Przejdź do sekcji `Nazwy domen`{.action}, kliknij odpowiednią domenę, następnie przejdź do zakładki `Strefa DNS`{.action}.

W tabeli, która się wyświetli znajdziesz konfigurację Twojej domeny OVHcloud. Każdy wiersz odpowiada jednemu rekordowi DNS.

W pierwszym kroku sprawdź, czy jakieś rekordy MX zostały już wcześniej dodane do konfiguracji DNS OVHcloud Twojej domeny. Pomoże Ci w tym lista filtrów znajdująca się nad tabelą Twojej strefy DNS.<br>
Wybierz typ **MX**, a następnie potwierdź, aby wyświetlić tylko wpisy DNS MX strefy DNS. Pomóż w zrzucie ekranu poniżej.

![dnsmxrecord](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/mx-entries-research.png){.thumbnail}

- Jeśli rekordy MX już istnieją i chcesz je zmienić, kliknij przycisk `...`{.action} po prawej stronie każdego wiersza w tabeli odpowiadającego rekordowi, a następnie kliknij `Zmień rekord`{.action}.
- Jeśli rekord MX nie jest obecny, kliknij przycisk `Dodaj rekord`{.action} po prawej stronie tabeli i wybierz `MX`{.action}. Uzupełnij wymagane informacje w zależności od wybranego rozwiązania poczty elektronicznej:

**Jeśli dysponujesz rozwiązaniem e-mail OVHcloud**, zapoznaj się z informacjami podanymi w etapie "[Wiedza na temat konfiguracji MX OVHcloud](#mxovhcloud)".

![dnsmxrecord](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-a-dns-zone-record-mx-step-1.png){.thumbnail}

Po wpisaniu informacji zakończ ostatni etap, następnie kliknij `Zatwierdź`{.action}.

**Jeśli używasz innego rozwiązania poczty** e-mail, skorzystaj z informacji dostarczonych przez Twojego dostawcę usługi e-mail.

> [!primary]
>
> W związku z wprowadzoną zmianą, należy wziąć pod uwagę czas propagacji, który wynosi od 4 do 24 godzin maksimum. Po tym czasie zmiana będzie aktywna.
>

## Sprawdź również

[Informacje na temat serwerów DNS.](/pages/web_cloud/domains/dns_server_general_information)

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Poprawa bezpieczeństwa e-maili poprzez rekord SPF](/pages/web_cloud/domains/dns_zone_spf)

[Poprawa bezpieczeństwa e-maili poprzez rekord DKIM](/pages/web_cloud/domains/dns_zone_dkim)

Jeśli potrzebujesz specjalistycznych usług (SEO, programowanie, etc.), skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz uzyskać wsparcie w zakresie użytkowania i konfiguracji Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami wsparcia](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).