---
title: FAQ e-mail OVHcloud
updated: 2024-06-27
---

## Najczęściej zadawane pytania dotyczące kont e-mail

### Co zrobić, jeśli nie mogę wysyłać/odbierać wiadomości e-mail?

W większości przypadków brak możliwości wysyłania/odbierania wiadomości e-mail wiąże się z konfiguracją adresu w programie pocztowym. Aby to sprawdzić, zaloguj się w interfejsie [webmail](/links/web/email) i przeprowadź test wysyłania i odbierania wiadomości z Twojego adresu.

- Jeśli wszystko działa normalnie, to znaczy, że źródło problemu leży w konfiguracji oprogramowania.
- Jeśli natomiast wysyłanie lub odbieranie wciąż jest niemożliwe, masz do wyboru kilka rozwiązań.

Czy po wysłaniu e-maila na Twoje konto e-mail dostajesz komunikat błędu? Jeśli tak, zlokalizuj ten komunikat — znajdziesz w nim przyczynę problemów (przepełniona lub nieistniejąca skrzynka itp.).

Możesz także sprawdzić, czy Twoja domena dostarcza wiadomości e-mail we właściwe miejsce. W tym celu przejdź do [Panelu klienta OVHcloud](/links/manager), wybierz strefę DNS Twojej domeny i spójrz na ustawione wpisy typu MX. Wpisy te powinny mieć następujący format: „mx\*.mail.ovh.net.” (symbol „\*” zastąp cyfrą od 0 do 3).
Jeśli wpisy MX są różne, to znaczy, że być może korzystasz z oferty e-mail od innego operatora niż OVHcloud.

**Wskazówki i porady**: Jeśli nie możesz się zalogować do interfejsu webmail, to znaczy, że hasło może być błędne. Sprawdź hasło, a w razie potrzeby zmień je w [Panelu klienta OVHcloud](/links/manager) i zaloguj się ponownie. W tym celu przejdź do [naszej dokumentacji](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced).

### Jak skonfigurować mój adres e-mail i używać go w interfejsie webmail?

Konto e-mail można skonfigurować w programie pocztowym takim jak Outlook, Thunderbird, Mail na komputery Mac itd.
W tym celu przygotowaliśmy przewodniki, z których dowiesz się, jak skonfigurować Twój adres. Znajdziesz je na [tej stronie](/products/web-cloud-email-collaborative-solutions-mx-plan).

Za sprawą interfejsu [webmail](/links/web/email) w każdej chwili możesz uzyskać dostęp do Twojej poczty za pośrednictwem dowolnego urządzenia z dostępem do Internetu. Po utworzeniu konta e-mail zaloguj się tam, aby uzyskać dostęp do poczty.

**Wskazówki i porady**: Jeśli konfigurujesz konto e-mail w programie pocztowym, zalecamy użycie protokołu IMAP. Dzięki temu wiadomości e-mail będą przechowywane na serwerze i będzie można uzyskać do nich dostęp z dowolnego miejsca za pomocą interfejsu [webmail](/links/web/email). W tym celu przejdź do [naszej dokumentacji](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

### Zarządzanie usługami e-mail

Wszystkimi Twoimi kontami e-mail zarządzasz w [Panelu klienta OVHcloud](/links/manager). Zaloguj się do Panelu klienta i przejdź do odpowiedniej usługi. Możesz zmienić hasła do kont e-mail, sprawdzić dostępne miejsce na każdym z kont, utworzyć nowe konta lub usunąć istniejące.

**Porady i podpowiedzi**: Dzięki rozwiązaniom poczty elektronicznej MX Plan możesz delegować uprawnienia do zarządzania kontem e-mail innemu kontu OVHcloud, jednocześnie zachowując nad nim kontrolę. Nadaj uprawnienia odpowiedniemu kontu w [Panelu klienta OVHcloud](/links/manager). W tym celu zaloguj się do Panelu klienta OVHcloud, przejdź do sekcji „Konta e-mail” i wybierz odpowiednią domenę. Następnie przejdź do zakładki „Konta e-mail” i wybierz opcję:

- `Zarządzaj elementami współdzielonymi przez wszystkie konta e-mail`{.action} po prawej stronie, jeśli chcesz delegować uprawnienia do zarządzania wszystkimi kontami dla tej domeny
- `Zarządzanie delegacjami uprawnień`{.action}, jeśli chcesz delegować uprawnienia do zarządzania określonym kontem (kliknij `...`{.action} obok konta)  

Pamiętaj, że w przypadku obu opcji wymagane jest podanie identyfikatora klienta OVHcloud (NIC).

## Co należy wiedzieć przed utworzeniem konta e-mail?

Utworzenie adresu e-mail nie jest skomplikowane, ale należy przestrzegać pewnych zasad definiowania **nazwy adresu e-mail** i **hasła**.

**Nazwa Twojego konta e-mail** musi spełniać następujące wymagania:

- Minimum 2 znaki
- Maksymalnie 32 znaki
- Brak znaków akcentowanych
- Brak znaków specjalnych z wyjątkiem następujących znaków:`.`,`,`,`- et`_`

**hasło** musi spełniać następujące wymagania:

- Minimum 9 znaków
- Maksymalnie 30 znaków
- Brak znaków akcentowanych

> [!warning]
> Ze względów bezpieczeństwa zalecamy nie używać dwa razy tego samego hasła. Najlepiej wybrać hasło nie mające żadnego związku z Twoimi danymi osobistymi (należy unikać używania imienia, nazwiska, daty urodzenia, etc.) i regularnie je zmieniać.

### Jak odzyskać zapomniane hasło?

Ze względów bezpieczeństwa i prywatności nie jest możliwe **odzyskanie** hasła. Zgodnie z opisem w sekcji "[Zmiana hasła do konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)" należy zresetować hasło, jeśli nie jest ono już znane.

> [!primary]
>
> Jeśli chcesz zachować hasło, zalecane jest użycie menedżera haseł, takiego jak **Keepass**.

### Jak ograniczyć ilość otrzymywanego spamu?

Aby ograniczyć liczbę wiadomości-śmieci, możesz skonfigurować filtry dla poczty e-mail (w ofercie MXPlan — „Filtrowanie”). Ich celem jest usunięcie lub przeniesienie tego typu wiadomości do folderu „Spam” w momencie ich odebrania.
W tym celu zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do rubryki `E-mail`, a następnie wybierz daną domenę, kartę `E-mail`{.action}, a potem w kolumnie `Filtrowanie`{.action} kliknij przycisk akcji.

Jeśli w Panelu klienta nie widzisz kolumny `Filtrowanie`{.action}, wówczas tworzenie filtrów odbywa się za pośrednictwem reguł zarządzania skrzynką odbiorczą w interfejsie [webmail](/links/web/email). Więcej szczegółów znajdziesz w przewodniku: [Reguły skrzynki odbiorczej w interfejsie OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan).

**Wskazówki i porady**: Jeśli włączysz filtr antyspamowy, możliwe, że niektóre prawidłowe wiadomości zostaną uznane za spam. Jest to tzw. wynik „fałszywie pozytywny”. Jeśli tak się zdarzy, zachęcamy do otwarcia zgłoszenia w [Panelu klienta OVHcloud](/links/manager), aby poinformować nas o tym. Dzięki temu będziemy mogli podjąć odpowiednie kroki, aby takie wiadomości nie były w przyszłości uznawane za spam.

### Mój adres e-mail jest zajęty. Nie mam już miejsca. Co mogę zrobić?

Jeśli zamówiłeś [jedną z naszych ofert e-mail OVHcloud](/links/web/emails) i jedno z Twoich kont e-mail jest zapełnione, zapoznaj się z naszym przewodnikiem "[Zarządzanie przestrzenią dyskową konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota)". Przewodnik ten pomoże Ci określić, czy możesz zoptymalizować istniejącą przestrzeń lub czy konieczna jest zmiana oferty e-mail w celu zwiększenia przestrzeni dyskowej.

### Chcę zmienić ofertę e-mail na mój adres. Jak mogę to zrobić zachowując jej zawartość?

Chcesz zmienić [ofertę e-mail](/links/web/emails) na większą przestrzeń i więcej funkcji, ale chcesz zachować zawartość swojego istniejącego adresu. W tym celu skorzystaj z jednego z naszych przewodników:

- [Przeniesienie adresu e-mail MX Plan na konto E-mail Pro lub Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)
- [Przenoszenie adresów e-mail z jednej platformy e-mail OVHcloud na inną](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)
- [Ręczna migracja Twojego konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)
- [Przeniesienie kont e-mail za pomocą OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm)
- [Przeniesienie konta Gmail do konta e-mail OVHcloud za pośrednictwem OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/security_gmail)

### Czy oferta Office 365 Pro Plus zawiera licencję Skype?

Oferta Office 365 Pro Plus nie zawiera licencji Skype. W ofercie zawarty jest jedynie program Skype for Business.

### Jak mogę przenieść na serwery OVHcloud moje e-maile, stronę WWW, bazę danych i domenę bez przerwy w dostępności usług?

Wszystkie kolejne etapy znajdują się w przewodniku "[Przeniesienie strony WWW i powiązanych z nią usług do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".

## Sprawdź również <a name="go-further"></a>

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
