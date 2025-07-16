---
title: "Web Cloud Databases - Jak autoryzować adres IP?"
excerpt: "Dowiedz się, jak autoryzować jeden lub więcej adresów IP, aby uzyskać dostęp do rozwiązania Web Cloud Databases"
updated: 2025-07-10
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

## Wprowadzenie

Rozwiązania [Web Cloud Databases](/links/web/databases) mogą być używane z usługami OVHcloud lub zewnętrznymi wobec OVHcloud.

Domyślnie i ze względów bezpieczeństwa:

- Dostęp do zawartości baz danych jest możliwy tylko dla adresów IP powiązanych z naszą infrastrukturą hostingu.
- Dostęp do logów rozwiązania nie jest ograniczony na podstawie adresów IP. Pozwala to na przykład na dostęp do danych z komputera.

Chcesz zmienić te uprawnienia/ograniczenia?

**Dowiedz się, jak autoryzować jeden lub więcej adresów IP, aby uzyskać dostęp do rozwiązania Web Cloud Databases.**

## Wymagania początkowe

- Posiadanie rozwiązania [Web Cloud Databases](/links/web/databases).
- Sprawdź adres IP (lub zakres adresów IP), który chcesz autoryzować w Twoim rozwiązaniu.
- Dostęp do [Panelu klienta OVHcloud](/links/manager).

## W praktyce

### Autoryzacja adresu IP lub zakresu adresów IP

> [!primary]
>
> Przypominamy, że jeśli właśnie aktywowałeś rozwiązanie [Web Cloud Databases](/links/web/databases) i chcesz z niego korzystać w ramach oferty [hostingu OVHcloud](/links/web/hosting), adresy IP tych ofert są już domyślnie autoryzowane.

Kliknij poniższe zakładki, aby wyświetlić kolejne kroki **5**.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Web Cloud Databases`{.action}, następnie wybierz odpowiednie rozwiązanie Web Cloud Databases.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Autoryzowane IP`{.action}.
>>
>> ![Authorised IPs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Etap 4**
>>
>> Na stronie, która się wyświetli kliknij przycisk `Dodaj adres IP / maskę`{.action} znajdujący się nad tabelą.
>>
>> ![Authorised IPs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}
>>
>> > [!success]
>> >
>> > Jeśli chcesz zmienić już autoryzowany adres IP lub zakres adresów IP, kliknij bezpośrednio w tabeli przycisk `...`{.action} znajdujący się po prawej stronie wiersza odpowiadającego adresowi IP lub zakresowi adresów IP do zmodyfikowania, a następnie kliknij `Edytuj białą listę`{.action}.
>>
> **Etap 5**
>>
>> W oknie, które się otworzy, wypełnij kilka pól:
>>
>> ![Add an IP address or mask](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}
>>
>> - `IP / maska *`{.action}: Tutaj wpisz adres IP (na przykład: `203.0.113.44`) lub zakres adresów IP (na przykład: `203.0.113.0/24` reprezentujący wszystkie adresy IP od `203.0.113.0` do `203.0.113.255`), które chcesz autoryzować w rozwiązaniu Web Cloud Databases.
>> - `Opis`{.action} (opcjonalnie): Możesz na przykład dodać informacje o roli adresu IP lub zakresu adresów IP.
>> - `Bazy danych`{.action}: Zaznacz to pole, aby adres IP lub zakres adresów IP miał prawo dostępu do baz danych znajdujących się w Twoim rozwiązaniu Web Cloud Databases.
>> - `SFTP`{.action}: Zaznacz to pole, aby adres IP lub zakres adresów IP miał dostęp do logów Twojego rozwiązania Web Cloud Databases.
>>
>> > [!warning]
>> >
>> > Odradzamy zaznaczenie pola `Bazy danych`{.action}, aby zezwolić zakresowi adresów IP `0.0.0.0/0` na dostęp do Twoich baz danych.
>> >
>> > Umożliwiłoby to autoryzację dostępu do Twoich baz danych dla wszystkich istniejących adresów IPv4.
>>
>> Po wpisaniu informacji kliknij przycisk `Zatwierdź`{.action}.

## Szczególne przypadki

**Kliknij na poniższe przykłady, aby wyświetlić odpowiednie informacje.**

/// details | Zakres adresów IP 0.0.0.0/0

Podczas aktywacji usługi Web Cloud Databases linia dla zakresu adresów IP `0.0.0.0/0` jest już domyślnie obecna, aby zezwolić na dostęp **SFTP** do rozwiązania.

Upoważnienie to zostało wprowadzone dobrowolnie, abyś mógł uzyskać dostęp do plików logów Twojego rozwiązania Web Cloud Databases bez konieczności deklarowania adresu IP punktu dostępu do Internetu.

Adres IP może się regularnie zmieniać w zależności od dostawców usług internetowych.

Ponadto zalecamy, aby **nie** zmienić tego uprawnienia i nie zezwalać na dostęp do baz danych znajdujących się w rozwiązaniu Web Cloud Databases.

Umożliwiłoby to autoryzację dostępu do Twoich baz danych dla wszystkich istniejących adresów IPv4, co stanowi zagrożenie dla bezpieczeństwa danych.

///


/// details | Autoryzacja dostępu do hostingu WWW OVHcloud

Podczas aktywacji rozwiązania Web Cloud Databases autoryzacja dostępu do hostingu WWW OVHcloud jest aktywowana domyślnie.

Jeśli chcesz wyłączyć to uprawnienie, ponieważ nie korzystasz z hostingu WWW z rozwiązaniem Web Cloud Databases, wykonaj następujące kolejno kroki: **4**:

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Web Cloud Databases`{.action}, następnie wybierz odpowiednie rozwiązanie Web Cloud Databases.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Autoryzowane IP`{.action}.
>>
>> ![Authorised IPs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Etap 4**
>>
>> Na stronie, która się wyświetli, usuń zaznaczenie w kratce przed wzmianką `Zezwól hostingowi OVHcloud na dostęp do bazy danych`{.action}.
>>
>> ![Authorised IPs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}

///

## Sprawdź również
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).