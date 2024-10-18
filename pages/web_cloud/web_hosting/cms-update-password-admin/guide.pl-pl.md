---
title: "Jak zmienić hasło administratora CMS"
excerpt: "Dowiedz się, jak zmienić hasło administratora Twojego CMS bezpośrednio w interfejsie zarządzania CMS lub za pomocą narzędzia phpMyAdmin w Panelu klienta OVHcloud"
updated: 2024-10-15
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Straciłeś dostęp do interfejsu administracyjnego WordPressa, PrestaShop, Joomla! lub Drupal? A może chcesz tylko zwiększyć bezpieczeństwo Twojej strony www zmieniając hasło administratora? W tym przewodniku wyjaśniamy krok po kroku, jak to zrobić, bezpośrednio w interfejsie administracyjnym CMS lub za pomocą phpMyAdmin w Panelu klienta OVHcloud.

**Dowiedz się, jak zmienić hasło administratora w systemach CMS WordPress, PrestaShop, Joomla! i Drupal, aby zapewnić bezpieczeństwo i optymalny dostęp do witryny.**

## Wymagania początkowe

- Posiadanie [hostingu WWW](/links/web/hosting) umożliwiającego instalację modułu za pomocą 1 kliknięcia.
- Utworzenie modułu za pomocą 1 kliknięcia na Twoim hostingu (jeśli jeszcze tego nie przeprowadziłeś, postępuj zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/web_cloud/web_hosting/cms_install_1_click_modules)).
- Zalogowanie do [Panelu klienta OVHcloud](/links/manager) (tylko w części phpMyAdmin).

## W praktyce

Istnieje kilka metod zmiany hasła administratora CMS w zależności od Twojego przypadku:

- [przez automatyczny e-mail (nie pamiętam hasła)](#via-email)
- [w interfejsie zarządzania CMS](#via-cms)
- [via phpMyAdmin w Panelu klienta OVHcloud](#via-phpMyAdmin)

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywają na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy do Twojej dyspozycji niniejszy tutorial, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego webmastera](/links/partner) lub producenta systemu CMS, który wybrałeś. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego tutoriala.
>
> Aby skontaktować się z poszczególnymi edytorami systemów zarządzania treścią, zapoznaj się z poniższymi linkami do ich odpowiednich oficjalnych stron:
>
> - [WordPress](https://wordpress.com/support/){.external}
> - [Joomla!](https://www.joomla.org/){.external}
> - [Drupal](https://www.drupal.org/){.external}
> - [PrestaShop](https://www.prestashop.com/en/support){.external}

### Zmiana hasła administratora za pomocą automatycznego konta e-mail (zapomniane hasło) <a name="via-email"></a>

Nadal masz dostęp do poczty e-mail i do interfejsu logowania? Jest to najszybsza metoda, która eliminuje dostęp do ustawień CMS czy phpMyAdmin.

> [!tabs]
> WordPress
>>
>> Aby zmienić hasło administratora WordPressa za pomocą opcji "Nie pamiętam hasła", wykonaj kolejne kroki w sekcji "[Through the automatic emailer](https://wordpress.org/documentation/article/reset-your-password/#through-the-automatic-emailer)" w oficjalnej dokumentacji WordPressa.
>>
> PrestaShop
>>
>> Przejdź do interfejsu logowania PrestaShop Twojej strony WWW (typu `https://your-domain.com/admin/`), następnie kliknij "Nie pamiętam hasła", aby otrzymać e-mail z prośbą o zresetowanie hasła.
>>
> Joomla!
>>
>> Aby zmienić hasło administratora Joomla! za pomocą opcji "Nie pamiętam hasła", wykonaj kolejne kroki w sekcji "[Frontend](https://docs.joomla.org/Resetting_a_user_password/en)" oficjalnej dokumentacji Joomla!.
>>
> Drupal
>>
>> Aby zmienić hasło administratora Drupal za pomocą opcji "Nie pamiętam hasła", wykonaj następujące kroki:
>>
>> - Przejdź do interfejsu logowania administratora.
>> - Kliknij łącze "Żądaj nowego hasła".
>> - W oknie dialogowym, które się pojawi, wpisz nazwę użytkownika lub adres e-mail przypisany do konta administratora.
>> - Kliknij "Wyślij nowe hasło" lub "E-mail z nowym hasłem".
>> - Otwórz otrzymany e-mail i kliknij na podany link.
>> - Wpisz nowe hasło i potwierdź.
>> - Wróć na stronę logowania Drupal i zaloguj się przy użyciu nowego hasła, które właśnie ustawiłeś.

### Zmiana hasła administratora w systemie CMS <a name="via-cms"></a>

Masz dostęp do interfejsu administracyjnego CMS i znasz swoje aktualne hasło? Zmień hasło bezpośrednio w ustawieniach konta administratora.

> [!tabs]
> WordPress
>> Aby zmienić hasło administratora WordPressa za pomocą interfejsu zarządzania CMS, wykonaj kolejne kroki w sekcji "[To Change Your Password](https://wordpress.org/documentation/article/reset-your-password/#to-change-your-password)" w oficjalnej dokumentacji WordPressa.
>>
> PrestaShop
>>
>> W oficjalnej dokumentacji PrestaShop nie wyjaśniono, jak zmienić hasło administratora za pomocą interfejsu logowania. Zapoznaj się z [oficjalną dokumentacją PrestaShop](https://help-center.prestashop.com/hc/en-us/articles/10799006732818-Recover-your-admin-password), aby znaleźć inną metodę aktualizacji Twojego hasła.
>>
> Joomla!
>>
>> Aby zmienić hasło administratora Joomla! za pomocą interfejsu administracyjnego, wykonaj kolejne kroki w sekcji "[Backend](https://docs.joomla.org/Resetting_a_user_password/en)" oficjalnej dokumentacji Joomla!.
>>
> Drupal
>>
>> W oficjalnej dokumentacji Drupal nie ma możliwości zmiany hasła administratora za pośrednictwem interfejsu logowania. Zapoznaj się z [oficjalną dokumentacją Drupal](https://www.drupal.org/node/44164), aby znaleźć inną metodę aktualizacji hasła.

### Zmiana hasła administratora za pomocą narzędzia phpMyAdmin w Panelu klienta OVHcloud <a name="via-phpmyadmin"></a>

Nie masz dostępu do interfejsu administracyjnego CMS lub nie możesz użyć funkcji "Nie pamiętasz hasła", ponieważ powiązany adres e-mail jest niedostępny? Użyj narzędzia phpMyAdmin w [Panelu klienta OVHcloud](/links/manager), aby zresetować hasło bezpośrednio z bazy danych.

Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i wybierz opcję `Web Cloud`{.action}. Kliknij pozycję `Hosting`{.action} i wybierz odpowiednią ofertę. W zakładce `Bazy danych`{.action} znajdź bazę danych używaną przez Twój CMS, kliknij przycisk `...`{.action}, a następnie `Dostęp do phpMyAdmin`{.action}.

Wpisz identyfikatory bazy danych (nazwa użytkownika i hasło), które zdefiniowałeś podczas tworzenia bazy danych. Po zalogowaniu do phpMyAdmin kliknij odpowiednią zakładkę poniżej.

> [!tabs]
> WordPress
>>
>> Wykonaj kolejne kroki w sekcji "[Through phpMyAdmin](https://wordpress.org/documentation/article/reset-your-password/#through-phpmyadmin)" oficjalnej dokumentacji WordPress.
>>
> PrestaShop
>>
>> Postępuj zgodnie z instrukcjami w sekcji "[You do not have access to your e-mail address](https://help-center.prestashop.com/hc/en-us/articles/10799006732818-Recover-your-admin-password)" oficjalnej dokumentacji PrestaShop.
>>
> Joomla!
>>
>> Wykonaj kolejne kroki w sekcji "[Resetting in phpMyAdmin](https://docs.joomla.org/Resetting_a_user_password/en)" oficjalnej dokumentacji Joomla!.
>>
> Drupal
>>
>> Po zalogowaniu do phpMyAdmin wykonaj następujące kroki:
>>
>> - Wybierz bazę danych, której Drupal używa dla Twojej strony WWW.
>> - Zlokalizuj tabelę `users_field_data` (dla Drupal 8 i nowszych wersji) lub users (dla Drupal 7 i nowszych wersji).
>> - Znajdź użytkownika administratora z `uid = 1`.
>> - Kliknij przycisk `Modify`.
>> - W polu `pass` wybierz `MD5` w kolumnie `Function` po prawej stronie pola.
>> - Wprowadź nowe hasło w kolumnie wartości.
>> - Zatwierdź i zapisz zmiany.

## Sprawdź również <a name="go-further"></a>

[Jak zarządzać modułem za 1 kliknięciem](/pages/web_cloud/web_hosting/cms_manage_1_click_module)

[Tutorial - Ręczna instalacja modułu WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Ręczna instalacja modułu Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Ręczna instalacja modułu Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Ręczna instalacja modułu PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Dołącz do [grona naszych użytkowników](/links/community).