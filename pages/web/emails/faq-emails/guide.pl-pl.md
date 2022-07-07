---
title: FAQ e-mail OVHcloud
slug: faq-konta-email
section: Pierwsze kroki
order: 07
---

**Ostatnia aktualizacja z dnia 15-05-2020**

## Najczęściej zadawane pytania dotyczące kont e-mail

### Co zrobić, jeśli nie mogę wysyłać/odbierać wiadomości e-mail? 

W większości przypadków brak możliwości wysyłania/odbierania wiadomości e-mail wiąże się z konfiguracją adresu w programie pocztowym. Aby to sprawdzić, zaloguj się w interfejsie [webmail](https://www.ovh.pl/mail/){.external} i przeprowadź test wysyłania i odbierania wiadomości z Twojego adresu.

- Jeśli wszystko działa normalnie, to znaczy, że źródło problemu leży w konfiguracji oprogramowania. 
- Jeśli natomiast wysyłanie lub odbieranie wciąż jest niemożliwe, masz do wyboru kilka rozwiązań.

Czy po wysłaniu e-maila na Twoje konto e-mail dostajesz komunikat błędu? Jeśli tak, zlokalizuj ten komunikat — znajdziesz w nim przyczynę problemów (przepełniona lub nieistniejąca skrzynka itp.).

Możesz także sprawdzić, czy Twoja domena dostarcza wiadomości e-mail we właściwe miejsce. W tym celu przejdź do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, wybierz strefę DNS Twojej domeny i spójrz na ustawione wpisy typu MX. Wpisy te powinny mieć następujący format: „mx\*.mail.ovh.net.” (symbol „\*” zastąp cyfrą od 0 do 3).
Jeśli wpisy MX są różne, to znaczy, że być może korzystasz z oferty e-mail od innego operatora niż OVHcloud.

**Wskazówki i porady**: Jeśli nie możesz się zalogować do interfejsu webmail, to znaczy, że hasło może być błędne. Sprawdź hasło, a w razie potrzeby zmień je w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i zaloguj się ponownie. W tym celu przejdź do [naszej dokumentacji](../zaawansowane_korzystanie_z_e-maili_ovh/).

### Jak skonfigurować mój adres e-mail i używać go w interfejsie webmail? 

Konto e-mail można skonfigurować w programie pocztowym takim jak Outlook, Thunderbird, Mail na komputery Mac itd.
W tym celu przygotowaliśmy przewodniki, z których dowiesz się, jak skonfigurować Twój adres. Znajdziesz je na [tej stronie](../).

Za sprawą interfejsu [webmail](https://www.ovh.pl/mail/){.external} w każdej chwili możesz uzyskać dostęp do Twojej poczty za pośrednictwem dowolnego urządzenia z dostępem do Internetu. Po utworzeniu konta e-mail zaloguj się tam, aby uzyskać dostęp do poczty.

**Wskazówki i porady**: Jeśli konfigurujesz konto e-mail w programie pocztowym, zalecamy użycie protokołu IMAP. Dzięki temu wiadomości e-mail będą przechowywane na serwerze i będzie można uzyskać do nich dostęp z dowolnego miejsca za pomocą interfejsu [webmail](https://www.ovh.pl/mail/){.external}. W tym celu przejdź do [naszej dokumentacji](../hosting_www_informacje_ogolne_o_kontach_e-mail_ovh/).

### Zarządzanie usługami e-mail 

Wszystkimi Twoimi kontami e-mail zarządzasz w [Panelu klienta OVHcloud] (https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Zaloguj się do Panelu klienta i przejdź do odpowiedniej usługi. Możesz zmienić hasła do kont e-mail, sprawdzić dostępne miejsce na każdym z kont, utworzyć nowe konta lub usunąć istniejące. 

**Porady i podpowiedzi**: Dzięki rozwiązaniom poczty elektronicznej MX Plan możesz delegować uprawnienia do zarządzania kontem e-mail innemu kontu OVHcloud, jednocześnie zachowując nad nim kontrolę. Nadaj uprawnienia odpowiedniemu kontu w [Panelu klienta OVHcloud] (https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. W tym celu zaloguj się do Panelu klienta OVHcloud, przejdź do sekcji „Konta e-mail” i wybierz odpowiednią domenę. Następnie przejdź do zakładki „Konta e-mail” i wybierz opcję:

- `Zarządzaj elementami współdzielonymi przez wszystkie konta e-mail`{.action} po prawej stronie, jeśli chcesz delegować uprawnienia do zarządzania wszystkimi kontami dla tej domeny
- `Zarządzanie delegacjami uprawnień`{.action}, jeśli chcesz delegować uprawnienia do zarządzania określonym kontem (kliknij `...`{.action} obok konta)  

Pamiętaj, że w przypadku obu opcji wymagane jest podanie identyfikatora klienta OVHcloud (NIC).

### Jak ograniczyć ilość otrzymywanego spamu? 

Aby ograniczyć liczbę wiadomości-śmieci, możesz skonfigurować filtry dla poczty e-mail (w ofercie MXPlan — „Filtrowanie”). Ich celem jest usunięcie lub przeniesienie tego typu wiadomości do folderu „Spam” w momencie ich odebrania.
W tym celu zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, przejdź do rubryki `E-mail`, a następnie wybierz daną domenę, kartę `E-mail`{.action}, a potem w kolumnie `Filtrowanie`{.action} kliknij przycisk akcji.

Jeśli w Panelu klienta nie widzisz kolumny `Filtrowanie`{.action}, wówczas tworzenie filtrów odbywa się za pośrednictwem reguł zarządzania skrzynką odbiorczą w interfejsie [webmail](https://www.ovh.pl/mail/){.external}. Więcej szczegółów znajdziesz w przewodniku: [Reguły skrzynki odbiorczej w interfejsie OWA](../../microsoft-collaborative-solutions/tworzenie-regul-skrzynki-odbiorczej-w-owa/).

**Wskazówki i porady**: Jeśli włączysz filtr antyspamowy, możliwe, że niektóre prawidłowe wiadomości zostaną uznane za spam. Jest to tzw. wynik „fałszywie pozytywny”. Jeśli tak się zdarzy, zachęcamy do otwarcia zgłoszenia w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, aby poinformować nas o tym. Dzięki temu będziemy mogli podjąć odpowiednie kroki, aby takie wiadomości nie były w przyszłości uznawane za spam.

### Czy oferta Office 365 Pro Plus zawiera licencję Skype? 

Oferta Office 365 Pro Plus nie zawiera licencji Skype. W ofercie zawarty jest jedynie program Skype for Business. 

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
