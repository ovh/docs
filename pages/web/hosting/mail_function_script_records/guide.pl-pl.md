---
title: 'Monitoring i zarządzanie automatycznymi wiadomościami e-mail na Twoim hostingu'
slug: hosting_www_monitorowanie_automatycznych_e-maili
excerpt: 'Dowiedz się, jak monitorować i zarządzać automatycznymi wiadomościami e-mail wysyłanymi z hostingu OVHcloud'
section: Diagnostyka
---

**Ostatnia aktualizacja dnia 2018-05-14**

## Wprowadzenie

Automatyczne wiadomości e-mail są wysyłane za pomocą skryptów. Używane są na przykład w formularzach kontaktowych na stronie WWW.

Dowiedz się, jak monitorować i zarządzać automatycznymi wiadomościami e-mail wysyłanymi z hostingu OVHcloud.

## Wymagania początkowe

- Posiadanie [hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external}
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}

> [!primary]
>
> Tematem tego przewodnika są tylko wiadomości e-mail wysyłane za pośrednictwem skryptów z Twojego hostingu w OVHcloud.
>
> Aby zarządzać adresami e-mail zawartymi w MX Plan lub [hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external}, przejdź do sekcji `E-maile`{.action} w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
>

## W praktyce

Możesz monitorować i zarządzać automatycznymi wiadomościami e-mail w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Zaloguj się do Panelu klienta, kliknij `Hosting`{.action}, następnie wybierz z listy odpowiedni hosting. Teraz kliknij zakładkę `Więcej`{.action}, a następnie `Skrypty e-mail`{.action}.

Wyświetli się strona, dzięki której będziesz mógł monitorować i zarządzać automatycznymi wiadomościami e-mail wysyłanymi z hostingu OVHcloud

![wysyłka wiadomości e-mail ze skryptu](images/monitoring-automatic-emails-step1.png){.thumbnail}

### Monitorowanie wysyłki automatycznych maili

Strona, która wyświetliła się po kliknięciu `Skrypty e-mail`{.action}, podaje informacje umożliwiające bieżące monitorowanie aktywności związanych z wysyłką automatycznych wiadomości generowanych za pomocą skryptów. 

|Informacja|Szczegóły|
|---|---|
|Status usługi|Pokazuje aktualny status usługi realizującej wysyłkę automatycznych maili z Twojego hostingu. Status w zielonej ramce oznacza poprawne wysyłanie e-maili, natomiast status w czerwonej ramce wskazuje, że e-maile nie są wysyłane. Od statusu usługi zależał będzie sposób zarządzania wysyłką. Sprawdź informacje na ten temat w poniższej sekcji niniejszego przewodnika [„Zarządzanie wysyłką automatycznych wiadomości e-mail”](https://docs.ovh.com/pl/hosting/hosting_www_monitorowanie_automatycznych_e-maili/#zarzadzanie-wysylka-automatycznych-wiadomosci-e-mail){.external}.|
|Raporty o błędach|Możesz otrzymywać codzienny raport o błędach na dowolny adres e-mail. Możesz go określić, klikając przycisk `Zmień odbiorcę`{.action}. Raport o błędach zawiera listę wiadomości e-mail wysłanych z Twojego hostingu, które zostały zwrócone do OVHcloud, gdyż nie mogły zostać dostarczone do odbiorców. Możesz także wyświetlić raport o błędach, klikając przycisk `Błędy wysyłki e-maili`{.action} w Panelu klienta.|
|Łączna liczba wysłanych wiadomości|Pokazuje łączną liczbę automatycznych wiadomości e-mail wysłanych od momentu skonfigurowania Twojego hostingu.|
|Wiadomości e-mail wysłane dzisiaj|Pokazuje łączną liczbę automatycznych wiadomości e-mail wysłanych tylko dzisiaj.|
|Łączna liczba zwróconych wiadomości e-mail|Pokazuje łączną liczbę niedostarczonych automatycznych wiadomości e-mail wysłanych z Twojego hostingu od momentu jego skonfigurowania.|
|Historia wysłanych wiadomości e-mail|Wykres pokazuje historię wiadomości e-mail wysłanych z Twojego mailingu w poprzednich dniach.|

> [!primary]
>
> Aby zapobiec sytuacjom niepożądanej wysyłki automatycznych wiadomości e-mail z Twojego hostingu, zalecamy, aby formularze (np. formularz kontaktowy) na Twojej stronie WWW były wyposażone w system bezpieczeństwa, taki jak Captcha.
>

![wysyłka wiadomości e-mail ze skryptu](images/monitoring-automatic-emails-step2.png){.thumbnail}

Jeśli Twoje automatyczne e-maile nie są wysyłane za pośrednictwem skryptów, mimo że status usługi wskazuje, że powinny być wysyłane, zalecamy wykonanie następujących czynności:

- **sprawdź skrypty odpowiedzialne za wysyłkę**: istnieje możliwość, że skrypty nie wysyłają maili z powodu błędu składni. Sprawdź zawartość skryptów, jeśli to konieczne, skoryguj je, następnie podejmij nową próbę wysyłki;

- **przeprowadź test wysyłki wiadomości e-mail za pośrednictwem skryptu testowego**: utwórz skrypt testowy, który wyśle wiadomość e-mail na Twój osobisty adres. Jeśli otrzymasz wiadomość e-mail, oznacza to, że Twoje skrypty, których używasz do wysyłki automatycznych e-maili zawierają błędy. Skrypty testowe są dostępne w Internecie.

- **nie używaj serwera SMTP do wysyłki wiadomości e-mail**: nie wpisuj parametrów serwera SMTP do Twoich skryptów. Jeśli dysponujesz interfejsem do zarządzania wysyłką wiadomości e-mail z Twojej strony WWW, upewnij się, że parametry te można zmodyfikować w konfiguracji Twojej strony.

### Zarządzanie wysyłką automatycznych wiadomości e-mail

Po kliknięciu `Skrypty e-mail`{.action} zobaczysz kilka przycisków umożliwiających zarządzanie wysyłką automatycznych wiadomości e-mail z Twojego hostingu. Niektóre z nich mogą być niedostępne w zależności od bieżącego statusu usługi.

|Działania|Szczegóły|
|---|---|
|Blokuj wysyłkę|Pozwala zablokować dystrybucję automatycznych wiadomości e-mail wysyłanych z Twojego hostingu. Wiadomości e-mail generowane przez Twoje skrypty po zablokowaniu będą czekały w kolejce przez 72 godziny. |
|Odblokuj wysyłkę|Pozwala odblokować wysyłkę automatycznych wiadomości e-mail z Twojego hostingu. Wiadomości oczekujące w kolejce zostaną ponownie przydzielone do dystrybucji.|
|Usuń wiadomości e-mail|Pozwala usunąć wiadomości e-mail oczekujące w kolejce i odblokować ich wysyłkę.|

Aby wykonać wybraną czynność, kliknij odpowiedni przycisk, a następnie `Zatwierdź`{.action}. W niektórych przypadkach należy odczekać kilka minut, zanim zmiany wprowadzone w wyniku jednej z powyższych czynności staną się widoczne.

![wysyłka wiadomości e-mail ze skryptu](images/monitoring-automatic-emails-step3.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.