---
title: 'Exchange - Konfiguracja konta e-mail w programie Outlook dla systemu Windows'
excerpt: 'Dowiedz się, jak skonfigurować konto Exchange w programie Outlook dla systemu Windows'
updated: 2026-01-09
---

<style>
details>summary {
    color:rgb(255,165,0) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-600 {
  max-width:600px !important;
}
.h-500 {
  max-width:500px !important;
}
</style>

## Wprowadzenie

Konta Exchange mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych.  Dzięki temu możesz używać Twojego konta e-mail, korzystając z wybranej przez Ciebie aplikacji. Microsoft Outlook jest aplikacją zalecaną do korzystania z konta e-mail Exchange ze swoimi funkcjami współpracy.

**Dowiedz się, jak skonfigurować konto Exchange w programie Microsoft Outlook na urządzeniu z systemem Windows.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/2YeGXo10CX8?si=mINBBXq6qb4MiFEt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Wymagania początkowe

- Wykupienie usługi [Exchange](/links/web/emails).
- Posiadanie aplikacji [klasyczny program Outlook](https://support.microsoft.com/pl-pl/office/instalowanie-lub-ponowne-instalowanie-klasycznego-programu-outlook-na-komputerze-z-systemem-windows-5c94902b-31a5-4274-abb0-b07f4661edf5) w systemie Windows.
- Dane do logowania do konta e-mail, które chcesz skonfigurować
- Pole SRV OVHcloud musi być poprawnie skonfigurowane w strefie DNS domeny. Sprawdź nasz przewodnik [Dodaj domenę do usługi Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain).

/// details | Informacje dotyczące zarządzania i konfiguracji usług OVHcloud

OVHcloud oferuje usługi, których konfiguracja, zarządzanie i odpowiedzialność należy do Ciebie. Musisz więc zadbać o ich poprawne działanie.

Dostarczamy ten przewodnik, aby pomóc Ci w wykonywaniu codziennych zadań. Niemniej, w przypadku trudności, zalecamy kontakt z [specjalistycznym partnerem](/links/partner) i/lub z twórcą usługi. Nie będziemy bowiem mogli udzielić wsparcia. Więcej informacji w sekcji "[Sprawdź również](#go-further)".

///

> [!primary]
>
> Używasz programu Outlook i później na urządzeniu Mac? Zapoznaj się z naszą dokumentacją: [Konfiguracja konta Exchange w programie Outlook na urządzeniu Mac](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016_mac).

## W praktyce

> [!warning]
>
> Przed rozpoczęciem konfigurowania swojego konta ważne jest, aby zauważyć, że aplikacja Outlook, która jest dostarczana za darmo z Windows 11, jest [niekompatybilna](https://learn.microsoft.com/pl-pl/microsoft-365-apps/outlook/get-started/supported-account-types) z rozwiązaniami OVHcloud Exchange, znanymi jako lokalne. Będziesz musiał użyć **klasycznej wersjiOutlook**.
>
> Aby zainstalować klasyczną wersję Outlook na swoim komputerze z Windows, pobierz ją ze strony Microsofta "[Instalowanie lub ponowne instalowanie klasycznego programu Outlook na komputerze z systemem Windows](https://support.microsoft.com/pl-pl/office/instalowanie-lub-ponowne-instalowanie-klasycznego-programu-outlook-na-komputerze-z-systemem-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)", a następnie zainstaluj.
>
> Po zakończeniu instalacji, aby odróżnić dwie wersje, gdy są zainstalowane, wpisz "Outlook" w pasku wyszukiwania systemu Windows. Możesz następnie zobaczyć różnicę, jak poniżej.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Dodaj konto

- **Podczas pierwszego uruchomienia aplikacji**: wyświetli się asystent konfiguracji i poprosi o wpisanie adresu e-mail.

- **Jeżeli inne konto zostało wcześniej skonfigurowane**: kliknij `Plik`{.action} na pasku menu na górze Twojego ekranu, a następnie kliknij `Dodaj konto`{.action}.

![Outlook](images/config-outlook-exchange01.png){.thumbnail .h-500}

- Zaznacz `Konto poczty` i uzupełnij poniższe informacje:
    - **Imię i nazwisko**: ustaw nazwę do wyświetlenia.
    - **Adres poczty**: wpisz pełny adres e-mail.
    - **Hasło**: wpisz hasło przypisane do adresu e-mail.
    - **Potwierdź hasło**: ponownie wpisz hasło przypisane do adresu e-mail.
- Kliknij `Dalej`{.action}, aby kontynuować.

![exchange](images/config-outlook-exchange02.png){.thumbnail .h-500}

- Jeśli konfiguracja Twojej nazwy domeny jest poprawna, może pojawić się komunikat o autoryzacji połączenia z serwerem Exchange OVHcloud. Kliknij `Autoryzuj`{.action} **(1)**, aby umożliwić automatyczną konfigurację konta Exchange.
- Pojawia się drugie okno uwierzytelniania, wpisz hasło do swojego adresu e-mail **(2)**.

![exchange](images/config-outlook-exchange03.png){.thumbnail .h-500}

Po autoryzacji i uwierzytelnieniu na serwerze Exchange OVHcloud konfiguracja zostanie zakończona, a konto będzie gotowe do użytku.

### Użyj konta e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz zacząć wysyłać i odbierać wiadomości.

Twój adres e-mail Exchange oraz wszystkie jego funkcje do pracy zespołowej są również dostępne w interfejsie [OWA](/links/web/email). W przypadku pytań dotyczących korzystania z tego konta, zapoznaj się z naszym przewodnikiem [Sprawdź konto Exchange w interfejsie OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Modyfikowanie istniejących ustawień

> [!warning]
>
> Nie można zmodyfikować ustawień serwera dla konta Exchange. Jeśli napotkasz problem z synchronizacją z serwerem, konieczne będzie usunięcie konta z Outlooka i jego ponowne skonfigurowanie. Aby to zrobić, wykonaj poniższe instrukcje.

Jeśli konto e-mail zostało już skonfigurowane i musisz uzyskać dostęp do ustawień konta, aby je usunąć:

- Przejdź do `Plik`{.action} w górnym pasku menu.
- Wybierz konto do modyfikacji w rozwijanej liście **(1)**.
- Kliknij `Ustawienia konta`{.action} **(2)** poniżej.
- Kliknij `Ustawienia konta...`{.action} **(3)**, aby otworzyć okno ustawień.

![Outlook](images/config-outlook-exchange04.png){.thumbnail .h-500}

- Pojawia się okno ustawień konta, wybierz odpowiednie konto e-mail i kliknij `Usuń`{.action}.

![Outlook](images/config-outlook-exchange05.png){.thumbnail .h-500}

Po usunięciu konta Exchange, przejdź do sekcji "[Dodawanie konta](#add-account)" tego przewodnika, aby ponownie skonfigurować swoje konto e-mail.

### Pobierz kopię zapasową Twojego konta e-mail

Jeśli musisz wykonać operację, która może spowodować utratę danych przypisanych do Twojego konta e-mail, zalecamy wykonanie kopii zapasowej odpowiedniego konta e-mail. W tym celu zapoznaj się z sekcją "**Eksport z systemu Windows**" w przewodniku [Ręczna migracja Twojego konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#eksport-z-systemu-windows).

## Sprawdź również <a name="go-further"></a>

> [!primary]
>
> Aby uzyskać więcej informacji na temat konfigurowania konta e-mail z poziomu aplikacji Outlook na urządzeniach z systemem Windows, zobacz [Centrum pomocy Microsoft](https://support.microsoft.com/pl-pl/office/dodawanie-konta-e-mail-do-programu-outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

[Konfiguracja konta e-mail, zawartego w usłudze MX Plan lub usłudze hostingu, w programie Outlook na urządzeniu z systemem Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016).

[Konfiguracja konta E-mail Pro w programie Outlook na urządzeniu z systemem Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016)

Dołącz do [grona naszych użytkowników](/links/community).