---
title: "Zmiana hasła do konta FTP"
excerpt: "Dowiedz się, jak zmienić hasło dla użytkownika FTP utworzonego na Twoim hostingu"
updated: 2026-03-31
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

Wraz z pakietami hostingowymi OVHcloud zyskujesz dostęp do przestrzeni dyskowej plików online dostępnej w protokole **FTP**: przestrzeni dyskowej FTP.

Dostęp do przestrzeni dyskowej możliwy jest za pomocą **użytkownika FTP** oraz przypisanego do niego hasła.

W szczególności dostęp ten umożliwia [umieszczenie strony w Internecie](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online).

**Dowiedz się, jak zmienić hasło do konta FTP utworzonego na Twoim hostingu.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywają na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner). Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.
>

## Wymagania początkowe

- Posiadanie [hostingu OVHcloud](/links/web/hosting).

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

### Zmiana hasła użytkownika FTP

> [!primary]
>
> Aby uzyskać więcej informacji na temat dobrych praktyk w zakresie zarządzania hasłami, zapoznaj się z przewodnikiem "[Tworzenie i zarządzanie hasłem do konta](/pages/account_and_service_management/account_information/manage-ovh-password)".

W zależności od pakietu [hostingowego OVHcloud](/links/web/hosting) zmiana hasła do konta FTP odbywa się na dwa różne sposoby.

**Kliknij swoją ofertę, aby wyświetlić zawartość.**

/// details | Oferty Perso i darmowy Hosting 100M (jeden użytkownik FTP)

Kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Krok 3**
>>
>> Tabela wyświetla *użytkowników FTP* utworzonych na Twoim hostingu. Kliknij *piktogram w formie ołówka* w kolumnie `Hasło`{.action}, wprowadź nowe hasło **zgodnie z polityką haseł**, a następnie potwierdź zmianę, klikając *zielony przycisk* do zatwierdzenia.
>>
>> ![change-ftp-password-step1-perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-perso.png){.thumbnail}

///

/// details | Oferty Pro i Performance (wielu użytkowników FTP)

Kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Krok 3**
>>
>> Tabela wyświetla *użytkowników FTP* utworzonych na Twoim hostingu. Kliknij przycisk `...`{.action} po prawej stronie odpowiedniego użytkownika FTP, a następnie kliknij `Zmień hasło`{.action}. W oknie, które się wyświetla, wprowadź nowe hasło **zgodnie z polityką haseł**, potwierdź, wprowadzając je ponownie, i kliknij przycisk `Zatwierdź`{.action}.
>>
>> ![change-ftp-password-pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-pro.png){.thumbnail}

///

> [!primary]
>
> Nowe hasło powinno być zgodne z następującą **polityką haseł**:
>
> - Minimum 9 znaków
> - Maksymalnie 30 znaków
> - Przynajmniej jedna wielka litera
> - Przynajmniej jedna mała litera
> - Przynajmniej jedna cyfra
> - Składać się wyłącznie z cyfr i liter

Następnie przejdź do zakładki `Zadania w toku`{.action} i odśwież stronę regularnie. Zmiana wymaga zaledwie kilku minut, aby stała się skuteczna.

### Dostęp do przestrzeni dyskowej

Aby uzyskać dostęp do przestrzeni FTP, zapoznaj się z naszym przewodnikiem "[Logowanie do przestrzeni dyskowej Twojego hostingu](/pages/web_cloud/web_hosting/ftp_connection)".

## Sprawdź również <a name="go-further"></a>

[Tworzenie i zarządzanie hasłem do konta](/pages/account_and_service_management/account_information/manage-ovh-password)

[Logowanie do przestrzeni dyskowej hostingu](/pages/web_cloud/web_hosting/ftp_connection)

[Umieszczenie strony WWW w Internecie](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).