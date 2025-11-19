---
title: "Jak odłączyć nazwę domeny od istniejącej strony internetowej ?"
excerpt: "Dowiedz się, jak odłączyć nazwę domeny lub poddomeny od istniejącej strony internetowej na Twoim hostingu"
updated: 2025-11-27
---

## Wprowadzenie

Możesz hostować wiele stron internetowych na jednym pakiecie hostingu, nawet jeśli nazwy domen nie są zarejestrowane u OVHcloud. Ponadto możesz przypisać jedną lub więcej nazw domen lub poddomen do tej samej strony internetowej.

Nie chcesz już używać nazwy domeny lub poddomeny dla swojej strony internetowej?
Chcesz przypisać swoją nazwę domeny lub poddomenę do innej strony internetowej na jednym z Twoich hostingu?
Musisz zmienić katalog główny przypisany do swojej strony internetowej i utworzyć nową stronę internetową na swoim hostingu?

**Dowiedz się, jak odłączyć nazwę domeny lub poddomenę od istniejącej strony internetowej na Twoim hostingu.**

## Wymagania początkowe

- Posiadanie pakietu [hostingu OVHcloud](/links/web/hosting-multisite) kompatybilnego.
- Posiadanie jednej lub więcej [nazw domen](/links/web/domains).
- Możliwość zmiany konfiguracji swoich nazw domen z ich [stref DNS](/pages/web_cloud/domains/dns_zone_edit).
- Zalogowanie się do swojego [Panelu klienta OVHcloud](/links/manager), sekcja `Web Cloud`{.action}.

## W praktyce

> [!warning]
>
> Odłączenie nazwy domeny lub poddomeny od strony internetowej na Twoim hostingu to czynność wrażliwa. W rzeczywistości po tej operacji Twoja strona internetowa nie będzie już dostępna w Internecie za pomocą swojej nazwy domeny i/lub poddomeny.

Kliknij w karty poniżej, aby kolejno wyświetlić **5** etapów.

> [!tabs]
> **Krok 1**
>>
>> Zaloguj się do swojego [Panelu klienta OVHcloud](/links/manager), a następnie przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij na menu `Hosting`{.action}, a następnie wybierz odpowiedni pakiet hostingu.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 3**
>>
>> Na stronie, która się wyświetli, kliknij na kartę `Moje strony`{.action}.
>>
>> ![Moje strony](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 4**
>>
>> W tabeli, która się pojawi, kliknij przycisk `>`{.action} po lewej stronie nazwy strony internetowej, aby wyświetlić przypisane nazwy domen i poddomeny.
>>
>> ![Strona internetowa](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Następnie kliknij przycisk `⁝`{.action} po prawej stronie nazwy domeny lub poddomeny, a następnie `Odłącz domenę`{.action}.
>>
>> ![Opcje domen przypisanych](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Krok 5**
>>
>> Nowe okno prosi o potwierdzenie odłączenia nazwy domeny lub poddomeny.
>>
>> ![Moje strony](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> W zależności od wyboru, zaznacz lub nie zaznacz pole `Automatyczna konfiguracja (zalecana)`{.action}, a następnie kliknij `Potwierdź`{.action}, aby potwierdzić swój wybór.
>>
>> > ![!warning]
>> >
>> > **Przypadek specjalny: Przypisałeś Git na swojej stronie internetowej i tylko jedna nazwa domeny jest przypisana do strony internetowej**
>> >
>> > Jeśli tak jest, zobaczysz następujące okno:
>> >
>> > ![Moje strony](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>> >
>> > Jak wskazuje wiadomość, musisz najpierw [usunąć swoje przypisanie Git](/pages/web_cloud/web_hosting/git_integration_webhosting), **przed** odłączeniem swojej nazwy domeny.

### Przypadek specjalny: Odłączenie nazwy domeny lub poddomeny, aby użyć jej z inną stroną internetową

- Jeśli chcesz dodać swoją nazwę domeny lub poddomenę do istniejącej strony internetowej na innym pakiecie hostingu, zapoznaj się z [tym przewodnikiem](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).
- Jeśli chcesz utworzyć nową stronę internetową na pakiecie hostingu z odłączoną niedawno nazwą domeny lub poddomeną, zapoznaj się z [tym przewodnikiem](/pages/web_cloud/web_hosting/multisites_configure_multisite).

## Sprawdź również

Dla usług specjalistycznych (indeksowanie, rozwój, itp.), skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli potrzebujesz pomocy w użyciu i konfiguracji swoich rozwiązań OVHcloud, zapraszamy do zapoznania się z naszymi różnymi [ofertami wsparcia](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).