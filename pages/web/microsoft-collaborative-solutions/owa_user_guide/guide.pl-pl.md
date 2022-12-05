---
title: 'Korzystanie z interfejsu Outlook Web App wraz z kontem Exchange'
slug: exchange_2016_przewodnik_dotyczacy_korzystania_z_outlook_web_app
excerpt: 'Dowiedz się, jak zarządzać adresem programu Exchange przy użyciu interfejsu OWA webmail'
section: 'Outlook Web Application (OWA)'
order: 01
---

**Ostatnia aktualizacja: 25-06-2021**

## Wprowadzenie

Dzięki usłudze OVHcloud Hosted Exchange można wysyłać oraz odbierać e-maile przy użyciu wybranego urządzenia i klienta poczty. Aby umożliwić dostęp do konta z dowolnego miejsca przy użyciu przeglądarki, OVHcloud udostępnia klient poczty e-mail online o nazwie Outlook Web Application (OWA). [Strona logowania do interfejsu webmail](https://www.ovh.pl/mail/) zapewnia dostęp do odpowiednich interfejsów OWA dla wszystkich aktywnych kont e-mail w ramach usług MX Plan, E-mail Pro i Hosted Exchange.

**Dowiedz się, jak wykonać typowe działania dotyczące adresu e-mail w interfejsie OWA.**

## Wymagania początkowe

- skonfigurowane rozwiązanie poczty elektronicznej OVHcloud (**usługa MX Plan** dostępna w ramach [hostingu WWW](https://www.ovhcloud.com/pl/web-hosting/), zawarta w [bezpłatnym hostingu Start10M](https://www.ovhcloud.com/pl/domains/free-web-hosting/) lub zamówiona oddzielnie jako rozwiązanie autonomiczne; [**Hosted Exchange**](https://www.ovhcloud.com/pl/emails/hosted-exchange/) lub [**E-mail Pro**](https://www.ovhcloud.com/pl/emails/email-pro/))
- dane do logowania dla adresu e-mail, który chcesz skonfigurować

## W praktyce

Ten przewodnik zawiera informacje o zwykłych zadaniach dotyczących konta e-mail, które są dostępne w interfejsie OWA webmail. Ponieważ interfejs nie został opracowany przez OVHcloud, nie możemy udostępnić konkretnych instrukcji dotyczących ustawień, których nie obejmuje ten przewodnik. Przygotowaliśmy natomiast dodatkowe przewodniki dotyczące funkcji programu Exchange i można je znaleźć w poniższej sekcji [**Sprawdź również**](./#sprawdz-rowniez_1).


> [!primary]
>
> Instrukcji przedstawionych po dwóch pierwszych krokach nie trzeba wykonywać w konkretnej kolejności. Pasek nawigacji znajdujący się po lewej stronie przewodnika umożliwia przejście do fragmentów przydatnych w danym przypadku.
>

### 1. Dostęp do interfejsu OWA webmail

Aby zalogować się do interfejsu OWA webmail przy użyciu swojego adresu e-mail, przejdź do ogólnej [strony logowania do interfejsu webmail](https://www.ovh.pl/mail/). Wpisz pełny adres e-mail i hasło, a następnie kliknij przycisk `Zaloguj`{.action}.

![useowa](images/owa_exchange_step1.png){.thumbnail}

Jeśli pierwszy raz logujesz się do interfejsu OWA webmail przy użyciu danego adresu e-mail, pojawi się monit o ustawienie języka interfejsu i strefy czasowej. Kliknij przycisk `Zapisz`{.action}, aby kontynuować.

![useowa](images/owa_exchange_step2.png){.thumbnail}

Od tej pory po zalogowaniu domyślnie będzie wyświetlany widok skrzynki odbiorczej.

![useowa](images/owa_exchange_step3.png){.thumbnail}

### 2. Zaznajomienie z widokiem interfejsu OWA

Interfejs OWA ma kilka sekcji. W poznaniu ich pomogą poniższa tabela i obrazy.

|Części|Opis|  
|---|---|  
|Sekcja górna (1)|Zawiera dwa paski z kartami: pierwszy umożliwia dostęp do ustawień ogólnych (takich jak [sekcja opcji](./#dostep-do-sekcji-opcji)), a drugi służy do wykonywania konkretnych działań przy użyciu adresu (na przykład wysyłania e-maili lub odpowiadania na nie).|  
|Lewa strona (2)|Tutaj znajduje się lista folderów na potrzeby Twojego adresu e-mail. Jest widoczna w formie drzewa menu, które można rozwinąć lub ukryć.|
|Część środkowa (3)|Zawiera listę wiadomości (przeczytanych i nieprzeczytanych) z folderu wybranego w lewym menu. W tej sekcji mogą też być widoczne wyniki wyszukiwania.|
|Prawa strona (4)|Gdy wybrano e-mail, po prawej jest widoczne okienko odczytu.|

![useowa](images/owa_exchange_step4.png){.thumbnail}

Rozmiar sekcji pionowych można zmienić, klikając i przeciągając ich linie obramowania.

### Wyświetlanie e-maili

Aby wyświetlić e-maile, wybierz folder po lewej stronie. Wiadomości przychodzące, których nie uwzględnią reguły skrzynki odbiorczej, pojawią się w folderze „Skrzynka odbiorcza”. Aby dowiedzieć się, czy masz nowe e-maile, sprawdź liczbę widoczną obok danego folderu.

![useowa](images/owa_exchange_step5.png){.thumbnail}

Aby przeczytać e-mail, wybierz jego folder. Kliknij e-mail, aby wyświetlić jego treść w sekcji odczytu. Wiadomości nieprzeczytane mają inny kolor, co pozwala odróżnić je od przeczytanych.

![useowa](images/owa_exchange_step6.png){.thumbnail}

### Wysyłanie i odpowiadanie

**Aby wysłać nowy e-mail**, kliknij przycisk `Nowy`{.action} w górnej części interfejsu webmail. Po prawej stronie pojawi się okienko edycji. Wypełnij pola e-maila (odbiorcy, temat, treść, załączniki). Gdy wiadomość będzie gotowa do wysłania, kliknij przycisk `Wyślij`{.action}.

![useowa](images/owa_exchange_step7.png){.thumbnail}

**Aby odpowiedzieć na e-mail**, [najpierw kliknij go](./#wyswietlanie-e-maili) w celu wyświetlenia. Następnie kliknij przycisk `Odpowiedz wszystkim`{.action}. Jeśli natomiast chcesz odpowiedzieć tylko nadawcy e-maila (pomijając odbiorców kopii), kliknij przycisk strzałki w dół.

![useowa](images/owa_exchange_step8.png){.thumbnail}

Gdy wybierzesz działanie odpowiedzi, nad e-mailem pojawi się edytor szybkiej odpowiedzi. Ułóż odpowiedź, a kiedy e-mail będzie gotowy do wysłania, kliknij przycisk `Wyślij`{.action}. Aby wyświetlić wszystkie opcje odpowiedzi (takie jak dodanie podpisu), najpierw trzeba w pełni rozwinąć okienko edycji, klikając symbol dwóch strzałek.

![useowa](images/owa_exchange_step9.png){.thumbnail}

### Porządkowanie skrzynki odbiorczej

Interfejs OWA umożliwia porządkowanie skrzynki odbiorczej. Możesz

- [tworzyć foldery i podfoldery](./#tworzenie-folderu)
- [przenosić e-maile](./#przenoszenie-e-maili)
- [ustawiać reguły](./#tworzenie-regul-skrzynki-odbiorczej), aby po odebraniu nowego e-maila automatycznie były wykonywane konkretne działania

#### Tworzenie folderu

Aby utworzyć nowy folder, kliknij prawym przyciskiem myszy nazwę adresu e-mail w drzewie folderów i wybierz pozycję `Utwórz nowy folder`{.action}. W taki sam sposób możesz utworzyć podfolder w istniejących folderach (`Utwórz nowy podfolder`{.action}). 

![useowa](images/owa_exchange_step10.png){.thumbnail}

#### Przenoszenie e-maili

**Aby przenieść e-mail**, po prostu przeciągnij go i upuść w folderze docelowym lub kliknij go prawym przyciskiem myszy i wybierz pozycję `Przenieś`{.action}.
**Aby przenieść wiele e-maili** jednocześnie, wybierz je przez zaznaczenie pól wyboru i kliknij pozycję `Przenieś`{.action} (po prawej stronie) lub `Przenieś do`{.action} (w górnej sekcji). Następnie wybierz folder docelowy.

![useowa](images/owa_exchange_step11.png){.thumbnail}

#### Tworzenie reguł skrzynki odbiorczej

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/msmUN7cLSNI?start=48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Aby zarządzać regułami, kliknij ikonę koła zębatego u góry, a następnie kliknij pozycję `Opcje`{.action}.

![useowa](images/owa_exchange_step12.png){.thumbnail}

Zostanie wyświetlona nowa strona, na której kliknij pozycję `Skrzynka odbiorcza i reguły oczyszczania`{.action} w lewym menu. W widoku drzewa „Opcje” ten element jest widoczny po rozwinięciu kolejno pozycji „Poczta” i „Automatyczne przetwarzanie”. W tym obszarze można tworzyć, edytować i usuwać reguły oraz przenosić je na liście. 

Aby dodać nową regułę, kliknij przycisk `+`{.action}. 

![useowa](images/owa_exchange_step13.png){.thumbnail}

Podaj wymagane informacje w zależności od działania, które ma wykonywać reguła. Na koniec kliknij `OK`{.action}. 

![useowa](images/owa_exchange_step14.png){.thumbnail}

Szczegółowe instrukcje tworzenia reguł skrzynki odbiorczej zawiera przewodnik: [Tworzenie reguł skrzynki odbiorczej w aplikacji OWA](../tworzenie-regul-skrzynki-odbiorczej-w-owa/).

#### Zablokuj nadawcę

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UeNdpFwdXm0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Kliknij ikonę koła zębatego w prawym górnym rogu, a następnie kliknij przycisk `Opcje`{.action}. W lewej kolumnie, po drzewie "Mail" w "Konta", a następnie "Zablokuj lub autoryzuj".

W sekcji "**Nadawcy zablokowani**" wpisz adres e-mail lub nazwę domeny, którą chcesz zablokować, następnie kliknij przycisk `+`{.action}, aby dodać ją do listy.

![useowa](images/owa_exchange_block.png){.thumbnail}

### Zarządzanie listą kontaktów

Aby zarządzać listą kontaktów, kliknij niebieski przycisk „uruchamiania” w lewym górnym rogu, a następnie kliknij ikonę `Kontakty`{.action}.

![useowa](images/owa_exchange_step15.png){.thumbnail}

Zostanie wyświetlona nowa strona, na której można dodać nowy kontakt, utworzyć listę kontaktów lub usunąć istniejące kontakty.

**Aby dodać nowy kontakt**, kliknij przycisk `Nowy`{.action} i wpisz informacje o kontakcie do dodania. Po ich wprowadzeniu kliknij przycisk `Zapisz`{.action}.

![useowa](images/owa_exchange_step16.png){.thumbnail}

**Aby utworzyć listę kontaktów**, kliknij przycisk strzałki w dół obok przycisku „Nowy”, a następnie kliknij pozycję `Lista kontaktów`{.action}. Nadaj liście nazwę, dodaj do niej kontakty, a następnie kliknij przycisk `Zapisz`{.action}.

![useowa](images/owa_exchange_step17.png){.thumbnail}

### Zmiana hasła

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/msmUN7cLSNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Po zalogowaniu do interfejsu OWA możesz zmienić hasło do konta. W tym celu kliknij ikonę koła zębatego u góry, a następnie kliknij pozycję `Opcje`{.action}.

![useowa](images/owa_exchange_step12.png){.thumbnail}

Na nowej stronie rozwiń kartę „Ogólne” w drzewie po lewej, a następnie kliknij pozycję `Moje konto`{.action}. Na koniec kliknij przycisk `Zmień hasło`{.action}.

![useowa](images/owa_exchange_step18.png){.thumbnail}

Zostanie wyświetlone nowe okno. Wpisz w nim bieżące hasło. Następnie wpisz nowe hasło i podaj je ponownie, aby potwierdzić. Kliknij przycisk `Zapisz`{.action}, aby zapisać nowe hasło.

> [!primary]
>
> Wprowadź nowe hasło na każdym urządzeniu (na przykład kliencie poczty e-mail), z którego uzyskujesz dostęp do tego konta. W przypadku problemów z hasłem skontaktuj się z administratorem usługi.
>

![useowa](images/owa_exchange_step19.png){.thumbnail}

### Dodawanie odpowiedzi automatycznej

W interfejsie OWA możesz utworzyć odpowiedź automatyczną z Twojego adresu e-mail, aby podczas nieobecności nie pozostawiać e-maili bez odpowiedzi. W tym celu kliknij ikonę koła zębatego u góry, a następnie kliknij pozycję `Odpowiedzi automatyczne`{.action}.

![useowa](images/owa_exchange_step20.png){.thumbnail}

W wyświetlonym oknie zaznacz opcję „Wysyłaj odpowiedzi automatyczne”. Możesz też ustawić różne kryteria automatycznych odpowiedzi:

- wysyłanie e-maili z automatyczną odpowiedzią w stałych przedziałach czasu lub ciągle, aż do ręcznego wyłączenia,
- którzy nadawcy będą otrzymywać e-maile z automatyczną odpowiedzią (tylko nadawcy wewnętrzni lub również nadawcy zewnętrzni).

Podaj wymagane informacje w zależności od działania, które ma być wykonywane. Po ich wprowadzeniu kliknij przycisk `OK`{.action}.

![useowa](images/owa_exchange_step21.png){.thumbnail}

Szczegółowe instrukcje tworzenia odpowiedzi automatycznych zawiera przewodnik: [Tworzenie odpowiedzi automatycznych w interfejsie OWA](../exchange_2016_uruchomienie_autorespondera_w_interfejsie_owa/).

### Dodawanie podpisu

Aby dodać podpis e-maila, kliknij ikonę koła zębatego u góry, a następnie kliknij pozycję `Opcje`{.action}.

![useowa](images/owa_exchange_step12.png){.thumbnail}

Na nowej stronie (po lewej) kliknij pozycję `Podpis wiadomości e-mail`{.action}. W drzewie opcji ten element znajduje się pod pozycjami „Poczta” i „Układ”. W tym obszarze można włączyć, wyłączyć i edytować podpis.

![useowa](images/owa_exchange_step22.png){.thumbnail}

Przygotuj podpis elektroniczny w polu edytora. Możesz określić, czy podpis ma być dołączany domyślnie tylko do nowych e-maili, czy też do odpowiedzi i wiadomości przesłanych dalej. Na koniec kliknij przycisk `Zapisz`{.action}, aby potwierdzić.

Instrukcje dotyczące tworzenia automatycznych podpisów przy użyciu szablonów dla domeny zawiera przewodnik: [Automatyczny podpis](../exchange_20132016_automatyczny_podpis_-_disclaimer/).

### Dostęp do sekcji opcji

Aby uzyskać dostęp do wszystkich ustawień, kliknij ikonę koła zębatego u góry, a następnie kliknij pozycję `Opcje`{.action}.

![useowa](images/owa_exchange_step12.png){.thumbnail}

Po lewej stronie pojawi się drzewo menu „Opcje”. W tym widoku można dostosować układ i zachowanie konta e-mail. Niektóre opcje konta mogą być wyłączone po stronie OVHcloud ze względów bezpieczeństwa.

![useowa](images/owa_exchange_step23.png){.thumbnail}

### Zarządzanie plikami cookie

Aplikacja webmail, która jest używana w naszych ofertach e-mail, jest oparta na oprogramowaniu Microsoft Outlook Web Application. Może więc wymieniać metadane z serwerami Microsoft w postaci plików cookie nazywanych `appsforoffice.microsoft.com`.

Jeśli chcesz wyłączyć tę wymianę, możesz w przeglądarce używać rozszerzenia typu bloker treści (takiego jak uBlock Origin lub Ghostery).
Wyłączenie tych plików cookie może mieć wpływ na stabilność usługi webmail.

## Sprawdź również

[Tworzenie odpowiedzi automatycznych w interfejsie OWA](../exchange_2016_uruchomienie_autorespondera_w_interfejsie_owa/)

[Współdzielenie katalogu w interfejsie OWA](../exchange_2016_wspoldzielenie_katalogu_poprzez_webmail_owa/)

[Współdzielenie kalendarza w interfejsie OWA](../exchange_2016_wspoldzielenie_kalendarza_poprzez_webmail_owa/)

[Korzystanie z grup (mailing listy) dostępnych z kontem Exchange](../exchange_20132016_korzystanie_z_grup_wewnetrzne_grupy_dyskusyjne/)

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.