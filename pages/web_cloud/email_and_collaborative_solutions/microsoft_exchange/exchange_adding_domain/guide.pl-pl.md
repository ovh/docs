---
title: Dodaj domenę do platformy e-mail
excerpt: Dowiedz się, jak dodać domenę do platformy Exchange lub E-mail Pro
updated: 2025-04-28
---

<style>
.w-600 {
  max-width:600px !important;
}
.h-400 {
  max-height:400px !important;
}
</style>

## Wprowadzenie

Dodanie domeny do usługi Exchange jest niezbędne, abyś mógł korzystać z kont, które zamówiłeś w ramach usługi. Można również dodać kilka domen do usługi Exchange lub E-mail Pro.

**Dowiedz się, jak dodać domenę do platformy Exchange lub E-mail Pro.**

## Wymagania początkowe

- Posiadanie rozwiązania [Exchange](/links/web/emails) lub [Email Pro](/links/web/email-pro).
- Zarejestrowana domena lub kilka domen.
- Możliwość modyfikacji konfiguracji twojej domeny ([strefy DNS](/pages/web_cloud/domains/dns_zone_edit)).
- Dostęp do [Panelu klienta OVHcloud](/links/manager).

## W praktyce

### Dostęp do zarządzania usługą

> [!tabs]
> **Exchange**
>>
>> 1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
>> 1. Przejdź do sekcji `Web Cloud`{.action}.
>> 1. W sekcji `MICROSOFT` kliknij `Exchange`{.action}.
>> 1. Wybierz odpowiednią platformę.
>>
> **Email Pro**
>>
>> 1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
>> 1. Kliknij zakładkę `Web Cloud`{.action}.
>> 1. Kliknij `Email Pro`{.action}.
>> 1. Wybierz odpowiednią platformę.
>>

### Dodaj domenę

1. Kliknij w zakładkę `Przypisane domeny`{.action} w twojej platformie Exchange lub E-mail Pro.
1. W tabeli, która się wyświetla znajdziesz nazwy domen aktualnie przypisanych do twojej usługi.
1. Kliknij przycisk `Dodaj domenę`{.action}.

![Add Domain](images/add_domain_exchange_step1.png){.thumbnail .w-600}

> [!warning]
>
> Domyślnie wszystkie konta e-mail platformy są ze sobą powiązane. Wszystkie konta e-mail utworzone w ramach twojej usługi e-mail będą mogły wyświetlać w katalogu wszystkie adresy tej usługi, również te, które mają różne nazwy domen. Aby wyłączyć ten sposób wyświetlania kont w domenach, należy zamówić inną usługę [Exchange lub Email Pro](/links/web/emails) dla danej domeny lub domen.
>

W oknie dodawania domeny:

- **wybierz domenę z listy**: na liście znajdziesz domeny, którymi w pełni zarządzasz (lub przynajmniej strefę DNS) w Panelu klienta OVHcloud.

- **wpisanie domeny, która nie jest zarządzana na twoim koncie OVHcloud**: aby skonfigurować usługę, musisz mieć możliwość modyfikacji konfiguracji domeny, a w szczególności jej strefy DNS.

Po dokonaniu wyboru, kliknij przycisk `Dalej`{.action}.

![Add Domain](images/add_domain_exchange_step2.png){.thumbnail .w-600}

Okno wyświetla teraz informacje dotyczące konfiguracji trybów.

- **Jeśli wybrałeś z listy nazwę domeny obsługiwaną przez OVHcloud**: możesz wybrać jeden z dwóch dostępnych trybów.
    - **Zalecana konfiguracja**: twoja strefa DNS zostanie skonfigurowana automatycznie. Odpowiedni, jeśli nie posiadasz w strefie DNS określonej konfiguracji dla rekordów MX, SPF, DKIM i SRV.
    - **Konfiguracja spersonalizowana**: odpowiednia, jeśli dla twojej domeny skonfigurowałeś już usługę e-mail. Możesz wybrać elementy, które Cię interesują.
        - Jeśli chcesz korzystać z prywatnej lub zewnętrznej usługi e-mail OVHcloud jako uzupełnienie platformy e-mail, wpisz nazwę hosta serwera e-mail w polu `URL docelowego serwera e-mail`.
        - *Automatyczna konfiguracja rekordu MX*: umożliwia automatyczne wprowadzanie serwerów poczty przychodzącej OVHcloud (dotyczy wszystkich ofert e-mail OVHcloud).
        - *Konfiguracja rekordu SPF automatycznie*: pozwala na automatyczne wprowadzanie rekordu SPF, aby serwery poczty elektronicznej OVHcloud mogły wysyłać wiadomości e-mail. Wpis ten dotyczy wszystkich ofert e-mail OVHcloud.
        - *Automatyczna konfiguracja DKIM*: umożliwia automatyczne wprowadzanie rekordów niezbędnych do uwierzytelniania wysyłanych wiadomości e-mail.
        - *Konfiguracja SRV automatycznie*: umożliwia programowi pocztowemu automatyczną konfigurację kont Exchange dla twojej domeny.

![Add Domain](images/add_domain_exchange_step2-1b.png){.thumbnail .w-600}

- **Jeśli podałeś nazwę domeny nieobsługiwanej przez twoje konto OVHcloud**: oznacza to, że domena, a w szczególności jej strefa DNS, nie jest zarządzana z poziomu twojego panelu klienta OVHcloud. Domena może być zarejestrowana u innego operatora. Konieczne będzie przeprowadzenie konfiguracji bezpośrednio w panelu klienta, bez względu na dokonany wybór.
    - **Zalecana konfiguracja**: odpowiednia, jeśli korzystasz tylko z kont e-mail OVHcloud.<br><br>
    - **Konfiguracja spersonalizowana**: jeśli chcesz korzystać z prywatnej lub zewnętrznej usługi e-mail OVHcloud jako uzupełnienie platformy e-mail, w polu `URL docelowego serwera e-mail` wpisz nazwę hosta.

![Add Domain](images/add_domain_exchange_step2-2.png){.thumbnail .w-600}

Przed zakończeniem konfiguracji sprawdź wyświetlające się informacje, następnie kliknij przycisk `Potwierdź`{.action}, aby zatwierdzić dodanie domeny.

### Konfiguracja domeny (strefa DNS)

Po dodaniu przypisanej domeny upewnij się, że konfiguracja jest poprawna, korzystając z tabeli, która się wyświetla poniżej. Zielony przycisk oznacza, że domena została poprawnie skonfigurowana.<br>

W przypadku gdy przycisk jest czerwony:

- **jeśli podczas dodawania domeny wybrałeś automatyczną konfigurację**: wprowadzone ustawienia mogą wyświetlić się w Panelu klienta OVHcloud po kilku minutach.

- **jeśli podałeś nazwę domeny nieobsługiwanej przez twoje konto OVHcloud**:
    - Kliknij czerwony przycisk `MX`, `SRV`, `SPF` i `DKIM`, aby wyświetlić listę modyfikacji do wprowadzenia. Jeśli ta nazwa domeny nie używa konfiguracji OVHcloud (serwerów DNS OVHcloud), musisz wprowadzić zmiany za pomocą interfejsu zarządzania twoją domeną.
    - W związku z czerwonym przyciskiem `CNAME` zapoznaj się z naszym przewodnikiem, jak [utworzyć pole CNAME po dodaniu przypisanej domeny](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname).

![exchange](images/add_domain_exchange_step4.png){.thumbnail .w-600}

> [!primary]
>
> Efekty modyfikacji domeny staną się widoczne po upływie 4-24 godzin ze względu na niezbędny czas propagacji.
>

Aby sprawdzić, czy konfiguracja nazwy domeny jest prawidłowa, otwórz tabelę `Domeny przypisane`{.action} do twojej usługi. Jeśli przycisk jest zielony, nazwa domeny została poprawnie skonfigurowana. Jeśli nie jest zielony, może to oznaczać, że nie zakończyła się jeszcze propagacja.

### Zmień tryb przypisanej domeny

Możesz zmienić tryb domeny przypisanej do twojej platformy. Najpierw należy zrozumieć różnicę w działaniu między trybami autorytatywnymi i nieautorytatywnymi.

> [!primary]
>
> **Autorytatywny / nieautorytatywny**
>
> - Wybór trybu **autorytatywnego** na twojej platformie e-mail (*Server A*) wiąże się z koniecznością hostowania wszystkich adresów e-mail twojej domeny na tej platformie.<br>Na przykład jeśli zostanie wysłana wiadomość e-mail na adres "*mary.johnson@mydomain.ovh*", adres "*Server A*" zwróci nadawcy komunikat o niepowodzeniu, ponieważ taki adres nie istnieje na serwerze "*Server A*".<br>
>
> - Tryb **nieautorytatywny** na twojej platformie e-mail (*Server A*) pozwala na rozdzielenie adresów e-mail twojej domeny między twoją główną platformę e-mail (*Server A*) i inną usługę e-mail (*Server B*).<br>Na przykład jeśli wyślemy wiadomość e-mail na adres "*mary.johnson@mydomain.ovh*", "*Serwer A*" prześle e-mail do "*Server B*", aby ten mógł ją dostarczyć.<br>
>
> ![Autorytatywny](images/add_domain_exchange_authoritative.png){.thumbnail .w-600}

1. Kliknij zakładkę `Przypisane domeny`{.action}.
1. Kliknij przycisk `...`{.action} na wybrany wiersz nazwy domeny.
1. Kliknij przycisk `Konfiguracja`{.action}.
1. Wybierz tryb.

> [!warning]
>
> Jeśli podczas dodawania domeny do platformy e-mail otrzymasz komunikat "**authoritative domain detected**", oznacza to, że domena ta jest zadeklarowana w trybie **autorytatywnym** na innej platformie e-mail. Aby obydwie platformy mogły funkcjonować jednocześnie, należy dla nich ustawić tryb **nieautorytatywny**.

### Konfiguracja i korzystanie z kont

Po dodaniu żądanych domen do usługi możesz skonfigurować konta e-mail. Operację tę możesz przeprowadzić, klikając zakładkę `Konta e-mail`{.action}. W razie potrzeby możesz zamówić dodatkowe konta, korzystając z przycisku `Action`{.action}/`Zamów konta`{.action} lub `Dodaj konto`{.action}.

Wszystkie konta e-mail utworzone w ramach twojej usługi będą mogły wyświetlać w katalogu wszystkie adresy e-mail powiązane z tą usługą, również te, które mają różne nazwy domen.

Po skonfigurowaniu wszystkich kont możesz zacząć ich używać. W tym celu OVHcloud oddaje do twojej dyspozycji **webmail**, dostępny [tutaj](/links/web/email). Abyś mógł korzystać z adresu w sposób optymalny, upewnij się, czy jest on kompatybilny z twoim programem pocztowym.

Jeśli chcesz skonfigurować twoje konto e-mail na smartfonie, tablecie lub programie pocztowym lub jeśli chcesz uzyskać pomoc w zakresie funkcji twojej usługi e-mail, skorzystaj z naszej dokumentacji dostępnej na stronach [Exchange](/links/web/emails) i [E-mail Pro](/links/web/email-pro).

Licencje Outlook możesz wykupić w [Panelu klienta OVHcloud](/links/manager), a licencje Office 365 — na stronie [Microsoft 365](/links/web/ms365). Zalecamy skorzystanie z jednego z tych rozwiązań, jeśli chcesz używać programu pocztowego Outlook lub innych programów Office.

## Usunięcie domeny z platformy

Jeśli chcesz usunąć domenę powiązaną z twoją usługą Exchange lub E-mail Pro, upewnij się, że nie jest ona powiązana z kontami e-mail, aliasami, zasobami, kontami współdzielonymi (tylko w przypadku usługi Exchange), grupami, kontaktami zewnętrznymi ani ustawionymi stopkami. W takim przypadku konieczne będzie **powiązanie tych kont z inną nazwą domeny** na twojej platformie lub **usunięcie**.

> [!warning]
>
> Przed usunięciem kont e-mail upewnij się, że nie są one używane. Może być wymagana kopia zapasowa tych kont. Jeśli potrzebujesz więcej informacji, zapoznaj się z przewodnikiem [Ręczna migracja twojego konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), który opisuje, jak wyeksportować dane konta z Panelu klienta lub z programu pocztowego.

Przejdź do zakładki `Domeny przypisane`{.action} na twojej platformie. W tabeli kolumna `Konta` wyświetla liczbę kont przypisanych do domen z listy.

Jeśli do kont e-mail przypisana jest nazwa domeny, którą chcesz odłączyć, masz dwie możliwości:

**Przypisz konta do innej domeny**:

1. Przejdź do zakładki `Konta e-mail`{.action}.
1. Po prawej stronie listy kont, które chcesz zmienić, kliknij przycisk `...`{.action}.
1. Kliknij na `Zmień`{.action}.

![exchange](images/add_domain_exchange_step8.png){.thumbnail .w-600}

4\. W oknie edycji możesz zmienić nazwę domeny przypisanej do konta w rozwijanym menu.

![exchange](images/add_domain_exchange_step9.png){.thumbnail .w-600}

**Usuń konta z platformy**:

1. Przejdź do zakładki `Konta e-mail`{.action}.
1. Po prawej stronie konta, które chcesz usunąć, kliknij przycisk`...`{.action}.
1. Kliknij na `Zresetuj to konto`{.action} lub `Resetuj`{.action}.

![exchange](images/add_domain_exchange_step7.png){.thumbnail .w-600}

Po ponownym przypisaniu kont do innej domeny lub po ich zresetowaniu można przystąpić do usunięcia domeny.

W zakładce `Przypisane domeny`{.action} twojej platformy kliknij przycisk `...`{.action} po prawej stronie odpowiedniej domeny, a następnie `Usuń tę domenę`{.action}.

![exchange](images/add_domain_exchange_step10.png){.thumbnail .w-600}

## Sprawdź również

[Tworzenie pola CNAME po dodaniu przypisanej domeny](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

[Modyfikacja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Skontaktuj się z [partnerami OVHcloud](/links/partner), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, sprawdź naszą [ofertę pomocy](/links/support)

Dołącz do [grona naszych użytkowników](/links/community).
