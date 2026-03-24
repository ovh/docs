---
title: "Konfiguracja rekordu MX dla emaili"
excerpt: "Dowiedz się, jak skonfigurować rekord MX dla Twojej nazwy domeny w OVHcloud"
updated: 2026-02-19
---

<style>
.w-600 {
  max-width:600px !important;
}
.w-300 {
  max-width:300px !important;
}
</style>

## Wprowadzenie

Rekord MX umożliwia powiązanie nazwy domeny z serwerem platformy e-mail. Jest to niezbędne, aby usługa e-mail nadawcy mogła dotrzeć do usługi e-mail odbiorcy.

**Dowiedz się, jak skonfigurować rekord MX dla Twojej nazwy domeny w OVHcloud.**

## Wymagania początkowe

- Wybrana nazwa domeny musi korzystać z konfiguracji OVHcloud (tzn. z serwerów DNS OVHcloud).
- Posiadanie konta e-mail MX Plan (zawartego w pakiecie [hostingowym](/links/web/hosting), [bezpłatnym hostingu 100M](/links/web/domains-free-hosting) lub w ofercie MX Plan zamówionej oddzielnie), jednej z naszych [ofert e-mail OVHcloud](/links/web/emails) lub zewnętrznej usługi e-mail.

<!-- CP-NAV-START:web-dns-zone -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Strefy DNS](/links/control-panel/web-dns-zone)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Strefy DNS`{.action} > Wybierz nazwę domeny

---
<!-- CP-NAV-END:web-dns-zone -->

> [!primary]
>
> - Jeśli Twoja nazwa domeny nie używa serwerów DNS OVHcloud, przeprowadź zmianę wpisów MX w interfejsie dostawcy zarządzającego konfiguracją Twojej nazwy domeny.
>
> - Jeśli Twoja nazwa domeny jest zarejestrowana w OVHcloud, możesz sprawdzić, czy używa ona konfiguracji OVHcloud w Twoim [Panelu klienta](/links/manager). Po wybraniu nazwy domeny w zakładce `Informacje ogólne`{.action} w sekcji `Serwery DNS`{.action}, jeśli pozycja `Standardy` znajduje się pod adresem "**Serwery DNS**", korzystasz z serwerów DNS OVHcloud.
>
> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/dns-servers-enabled.png){.thumbnail .w-300}

## W praktyce

### Zrozumienie roli rekordów MX

Rekord MX (**M**ail e**X**change) to typ rekordu DNS, który określa, które serwery poczty przychodzącej są przypisane do Twojej nazwy domeny.

Aby zrozumieć, jak to działa, posłużymy się przykładem:

- Adres **sender@otherdomain.ovh** wysyła wiadomość e-mail na adres **contact@mydomain.ovh**.
- Serwer poczty wychodzącej (**Outgoing mail server**) odpytuje strefę DNS nazwy domeny **mydomain.ovh** i odczytuje rekordy **MX**.
- Wiadomość e-mail jest przekazywana na adres URL odczytanego rekordu **MX**.
- Wiadomość e-mail zostaje wysłana na adres docelowy **mx0.mail.ovh.net**, poprzedzony wartością **0**. Ta wartość odpowiada priorytetowi: najniższa wartość jest odpytywana w pierwszej kolejności, a najwyższa w ostatniej. Oznacza to, że obecność wielu rekordów MX pozwala na kompensację braku odpowiedzi z serwera wskazanego przez rekord o najniższym priorytecie, poprzez przejście do kolejnych serwerów w kolejności priorytetów.

![email](/pages/assets/schemas/emails/mx-dns-resolution.png){.thumbnail .w-600}

Dla tej samej nazwy domeny można skonfigurować wiele rekordów MX. W takim przypadku konieczne jest określenie numeru priorytetu dla każdego z nich. Rekordy MX są odpytywane w kolejności rosnącej, od najniższego numeru do najwyższego, aż do uzyskania odpowiedzi z serwera poczty przychodzącej.

> [!warning]
>
> Ogólnie rzecz biorąc, **modyfikacja rekordów MX w strefie DNS nazwy domeny jest operacją wymagającą wiedzy**: omyłkowe działanie może uniemożliwić spływanie e-maili na Twoje adresy. Zalecamy szczególną ostrożność podczas wykonywania tej operacji.
> W przypadku wątpliwości zalecamy skorzystanie z pomocy wyspecjalizowanego [usługodawcy](/links/partner).

### Wartości konfiguracji MX OVHcloud <a name="mxovhcloud"></a>

Zapoznaj się z przedstawioną poniżej konfiguracją MX OVHcloud przewidzianą dla rozwiązań MX Plan (występującą samodzielnie lub włączoną do oferty [hostingu WWW OVHcloud](/links/web/hosting)), [E-mail Pro](/links/web/email-pro), [Exchange](/links/web/emails-exchange) oraz [Zimbra](/links/web/zimbra). Na serwerach poczty elektronicznej OVH zainstalowane jest oprogramowanie antyspamowe i antywirusowe.

Wartości te są wspólne dla wszystkich ofert z wyjątkiem [Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private) i Dedicated Exchange.

|Domena|TTL|Typ rekordu|Priorytet|Adres docelowy|
|---|---|---|---|---|
|*pozostaw puste*|3600|MX|1|mx0.mail.ovh.net.|
|*pozostaw puste*|3600|MX|5|mx1.mail.ovh.net.|
|*pozostaw puste*|3600|MX|50|mx2.mail.ovh.net.|
|*pozostaw puste*|3600|MX|100|mx3.mail.ovh.net.|
|*pozostaw puste*|3600|MX|200|mx4.mail.ovh.net.|

Rekordy MX muszą być skonfigurowane w strefie DNS Twojej nazwy domeny.

### Konfiguracja rekordu MX w strefie DNS OVHcloud

Aby utworzyć lub zmodyfikować rekordy MX w konfiguracji OVHcloud Twojej nazwy domeny, zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}. Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią nazwę domeny.

W tabeli, która się wyświetli znajdziesz konfigurację Twojej nazwy domeny OVHcloud. Każdy wiersz odpowiada jednemu rekordowi DNS.

W pierwszym kroku sprawdź, czy jakieś rekordy MX zostały już wcześniej dodane do konfiguracji DNS OVHcloud Twojej nazwy domeny. Pomoże Ci w tym lista filtrów znajdująca się nad tabelą Twojej strefy DNS.<br>
Wybierz typ **MX**, a następnie potwierdź, aby wyświetlić tylko wpisy DNS MX strefy DNS. Pomóż w zrzucie ekranu poniżej.

![dnsmxrecord](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/mx-entries-research.png){.thumbnail .w-600}

- Jeśli rekordy MX już istnieją i chcesz je zmienić, kliknij przycisk `...`{.action} po prawej stronie każdego wiersza w tabeli odpowiadającego rekordowi, a następnie kliknij `Zmień rekord`{.action}.
- Jeśli rekord MX nie jest obecny, kliknij przycisk `Dodaj rekord`{.action} po prawej stronie tabeli i wybierz `MX`{.action}. Uzupełnij wymagane informacje w zależności od wybranego rozwiązania poczty elektronicznej:

**Jeśli dysponujesz rozwiązaniem e-mail OVHcloud**, zapoznaj się z informacjami podanymi w etapie "[Wiedza na temat konfiguracji MX OVHcloud](#mxovhcloud)".

![dnsmxrecord](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-a-dns-zone-record-mx-step-1.png){.thumbnail .w-600}

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