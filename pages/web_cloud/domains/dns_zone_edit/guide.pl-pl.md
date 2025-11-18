---
title: 'Modyfikacja strefy DNS'
excerpt: 'Dowiedz się, jak edytować strefę DNS w Panelu klienta'
updated: 2025-04-28
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

> [!success]
> Dołącz do ankiety i pomóż nam ulepszyć ten przewodnik!<br>
> Podziel się z nami swoją opinią i pomysłami.<br>
> [przejdź do ankiety.](https://s.elq.fr/ovhext/8NwNKiG)

## Wprowadzenie

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Skrót **DNS** oznaczający **D**omain **N**ame **S**ystem to zbiór elementów (serwery DNS, strefy DNS, etc.) pozwalających na dopasowanie nazwy domeny do adresu IP.

Aby uzyskać więcej informacji, zapoznaj się z naszymi przewodnikami "[Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)" i "[Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)".

**Dowiedz się, jak edytować strefę DNS w Panelu klienta.**

## Wymagania początkowe

- Dostęp do interfejsu zarządzania domeną w Panelu [klienta OVHcloud](/links/manager).
- Dostęp do [Panelu klienta OVHcloud](/links/manager).
- Używanie konfiguracji OVHcloud (serwerów DNS OVHcloud) dla danej domeny.

> [!warning]
>
> - Jeśli Twoja domena nie używa serwerów DNS OVHcloud, przeprowadź zmianę w interfejsie dostawcy zarządzającego konfiguracją Twojej domeny.
> 
> - Jeśli domena jest zarejestrowana w OVHcloud, możesz sprawdzić, czy używa ona konfiguracji OVHcloud. W tym celu przejdź do [Panelu klienta OVHcloud](/links/manager) w zakładce `Serwery DNS`{.action} danej domeny. W razie potrzeby sprawdź przewodnik "[Modyfikacja serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
> 
> W obu przypadkach należy zachować ostrożność wykonując zmiany na serwerach DNS. Poprzednia konfiguracja, która może zostać zastosowana do Twojej domeny, nie będzie już aktywna, jeśli nie skonfigurowałeś i spersonalizowałeś wcześniej nowej strefy DNS w OVHcloud.<br>
> Możesz mieć tylko jedną strefę DNS aktywowaną dla każdej domeny.
>

## W praktyce

### Dostęp do interfejsu zarządzania strefą DNS

> [!primary]
>
> W przeciwieństwie do nazwy domeny, nie ma tu pojęcia właściciela strefy DNS, lecz zarządzanie kontaktami w przypadku strefy DNS OVHcloud. Jeśli chcesz przełączyć zarządzanie swoją strefą DNS na inne konto OVHcloud, postępuj zgodnie z naszym przewodnikiem [Zarządzanie kontaktami swoich usług](/pages/account_and_service_management/account_information/managing_contacts).

Aby uzyskać dostęp do interfejsu zarządzania strefą DNS OVHcloud, kliknij poniższe zakładki, aby wyświetlić kolejno poszczególne **3** etapy.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etap 3**
>> 
>> W tabeli, która się wyświetla dla każdego wiersza wyświetlony zostanie rekord DNS powiązany z Twoją domeną w OVHcloud. Możesz sortować ich zawartość według typu rekordu lub nazwy domeny.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}

### Edycja strefy DNS OVHcloud dla Twojej domeny

**Edycja strefy DNS jest operacją wymagającą odpowiedniej wiedzy** : wprowadzenie omyłkowej zmiany mogłoby na przykład uniemożliwić dostęp do Twojej strony WWW lub odbiór nowych wiadomości e-mail.

Poznanie poszczególnych rekordów będzie pomocne w lepszym zrozumieniu zmian, które wprowadzisz w strefie DNS Twojej domeny.

> [!success]
>
> Zapoznaj się z przewodnikiem dotyczącym [rekordów DNS](/pages/web_cloud/domains/dns_zone_records), aby dowiedzieć się więcej na temat operacji DNS.
>
> Więcej informacji na ten temat znajdziesz w przewodniku dotyczącym [subdomen](/pages/web_cloud/domains/domain_create_subdomains).
>

Możesz zmodyfikować strefę DNS OVHcloud Twojej domeny, dodając, zmieniając lub usuwając rekord DNS.<br>
W tym celu możesz ręcznie zmienić strefę w trybie tekstowym lub skorzystać z asystenta konfiguracji.

#### Ręczna zmiana strefy w trybie tekstowym <a name="txtmod"></a>

> [!warning]
>
> Tylko dla zaawansowanych użytkowników. Zachowaj szczególną ostrożność podczas wprowadzania zmian.
>

Aby zmienić strefę DNS OVHcloud w trybie tekstowym, kliknij poniższe zakładki, aby wyświetlić kolejno poszczególne **3** etapy.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etap 3**
>> 
>> Kliknij `Zmień w trybie tekstowym`{.action} po prawej stronie lub poniżej tabeli, po czym postępuj zgodnie z kolejnymi instrukcjami, które się wyświetlą.
>>
>> > [!warning]
>> >
>> > Nie zmieniaj wpisów DNS strefy DNS za pomocą przycisku `Zmień w trybie tekstowym`{.action} na rzecz serwerów DNS zewnętrznych wobec OVHcloud. Ta strefa DNS działa **tylko** z serwerami DNS OVHcloud.

#### Skorzystaj z naszych asystentów konfiguracji

Od tego momentu niniejszy przewodnik opisuje jedynie konfigurację przy użyciu asystenta.

> [!primary]
>
> Przygotuj informacje, które chcesz zmienić w strefie DNS OVHcloud. Jeśli przeprowadzasz tę zmianę na wniosek dostawcy usług, dostawca usług musi przekazać Ci listę elementów do zmiany.
>

**Kliknij cztery nagłówki poniżej, aby wyświetlić wyjaśnienia.**

/// details | Dodanie nowego rekordu DNS

Aby dodać nowy rekord DNS, kliknij poniższe zakładki, aby wyświetlić kolejno poszczególne **3** etapy.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etap 3**
>> 
>> Po prawej stronie lub poniżej tabeli kliknij `Dodaj rekord`{.action}, po czym postępuj zgodnie z kolejnymi instrukcjami, które będą się wyświetlały.
>>
>> Sprawdź wcześniej, czy ten rekord już nie istnieje i nie wskazuje na inny cel. W tym celu włącz sortowanie zawartości tabeli według typu rekordu i nazwy domeny. Jeśli rekord już istnieje, rekomendujemy jego modyfikację zgodnie z procedurą opisaną poniżej.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry.png){.thumbnail}
>>
>> > Gdy celem rekordu jest adres URL, pamiętaj, aby go wpisać. W przeciwnym razie domena zostanie automatycznie dodana na końcu grupy docelowej.
>> >
>> > **Przykład** : chcesz utworzyć rekord CNAME `test.mydomain.ovh` na `mydomain.ovh`.
>> >
>> > Wówczas należy mieć jako cel `mydomain.ovh.` a nie `mydomain.ovh` bez **.** na końcu.

///


/// details | Modyfikacja istniejącego rekordu DNS

Aby zmodyfikować rekord DNS, kliknij poniższe zakładki, aby wyświetlić kolejno poszczególne **3** etapy.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etap 3**
>> 
>> W tabeli, która się wyświetli kliknij piktogram `...`{.action} po prawej stronie odpowiedniego wpisu.
>>
>> Następnie kliknij `Zmień rekord`{.action} i postępuj zgodnie z kolejnymi instrukcjami, które się wyświetlą.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-record.png){.thumbnail}

///


/// details | Usunięcie rekordu DNS

Aby usunąć rekord DNS, kliknij poniższe zakładki, aby wyświetlić kolejno poszczególne **3** etapy.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etap 3**
>> 
>> W tabeli, która się wyświetli kliknij piktogram `...`{.action} po prawej stronie odpowiedniego wpisu.
>>
>> Następnie kliknij `Usuń rekord`{.action} i postępuj zgodnie z kolejnymi instrukcjami, które się wyświetlą.
>>
>> Możesz usunąć kilka rekordów za jednym razem, zaznaczając je wcześniej w lewej części tabeli i klikając przycisk `Usuń`{.action}.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/delete-record.png){.thumbnail}

///


/// details | Zresetuj strefę DNS

Zresetowanie strefy DNS pozwala na przywrócenie minimalnej konfiguracji z domyślnymi wpisami OVHcloud lub wpisami usług. Możesz również wskazać swoją domenę na niestandardowy hosting WWW oraz usługi e-mail.

> [!alert]
>
> Przed zresetowaniem strefy DNS upewnij się, że Twoja domena nie jest powiązana z usługami, które są obecnie używane, takimi jak strona WWW lub konta e-mail.
>

Aby zresetować strefę DNS, kliknij poniższe zakładki, aby wyświetlić kolejno poszczególne **5** etapy.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etap 3**
>> 
>> Po prawej stronie lub poniżej tabeli kliknij `Zresetuj strefę DNS`{.action}, następnie postępuj zgodnie z 2 kolejnymi instrukcjami, które się wyświetlą.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/reset-my-dns-zone.png){.thumbnail}
>>
> **Etap 4**
>>
>> Odpowiedz na pytanie `Czy chcesz włączyć wpisy minimalne podczas resetowania strefy DNS?`. Ustanowienie minimalnych wpisów w strefie DNS zapobiega sytuacji, w której zapytanie do nazwy domeny nie doprowadzi do błędu.
>>
>> - `Tak, chcę zresetować strefę DNS z minimalnymi wpisami`
>> - `Nie, ale chcę zresetować strefę DNS`
>>
> **Etap 5**
>>
>> Bez względu na wybór dokonany na poprzednim etapie, konieczne jest zdefiniowanie odpowiedzi podczas odpytywania nazwy domeny, aby uniknąć odpowiedzi DNS z błędem.
>>
>> Wybierz obie opcje, klikając poniższe zakładki.
>>
>> **Adres IP hostingu**
>>
>> - `Przekierowanie`: Twoja domena będzie wskazywać na serwer przekierowania OVHcloud. Pomaga to w wyświetleniu strony głównej OVHcloud, co pozwala uniknąć błędu DNS.<br>
>> - `Hosting WWW OVHcloud`: Twoja domena będzie wskazywać na adres IP hostingu powiązanego z domeną <br>
>> - `Niestandardowy`: ustaw wartość IPv4 ([rekord A](/pages/web_cloud/domains/dns_zone_records#pointer-records)) hostingu, który chcesz wskazywać. <br><br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-reset-01.png){.thumbnail}
>>
>> **Adres email**
>>
>> - `Przekierowanie`: Twoja domena będzie wskazywać na serwery przekierowań email. Ten wybór. Jest to szczególnie przydatne, jeśli nie masz żadnej oferty e-mail, ale chcesz, aby e-maile były wysyłane na jeden lub więcej adresów e-mail poza Twoją domeną.<br>
>> - `Serwer E-mail OVHcloud`: do ustawienia, gdy posiadasz ofertę e-mail na hostingu.<br>
>> - `Niestandardowy`: ustaw adres URL i priorytet serwera e-mail ([rekord MX](/pages/web_cloud/domains/dns_zone_records#mail-records)), który chcesz wskazać.<br><br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-reset-02.png){.thumbnail}

///


### Czas propagacji

Czas propagacji wprowadzonych w strefie DNS zmian wynosi maksymalnie 24 godziny.

Jeśli chcesz skrócić czas propagacji w przypadku kolejnych modyfikacji strefy DNS OVHcloud, możesz to uczynić, do pewnego stopnia, przez dostosowanie TTL (*Time To Live*), który zostanie zastosowany do wszystkich rekordów strefy DNS. W tym celu kliknij poniższe zakładki, aby wyświetlić kolejne **3** etapy.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etap 3**
>> 
>> Kliknij przycisk `Zmień domyślny TTL`{.action} po prawej stronie lub poniżej tabeli i postępuj zgodnie z kolejnymi instrukcjami, które się wyświetlą.
>>
>> Możesz również zmienić TTL rekordu DNS. Operacja ta może być jednak przeprowadzona tylko na jednym rekordzie, po zmianie lub po dodaniu rekordu.

## Sprawdź również

[Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)

[Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)

[Dodawanie rekordu SPF podczas konfiguracji domeny](/pages/web_cloud/domains/dns_zone_spf).

[Zabezpieczenie domeny przed Cache Poisoning za pomocą DNSSEC](/pages/web_cloud/domains/dns_dnssec).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).