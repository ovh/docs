---
title: 'Korzystanie z konta e-mail w interfejsie Webmail Outlook Web App (OWA)'
excerpt: 'Dowiedz się, jak korzystać z konta e-mail w interfejsie Webmail OWA'
updated: 2026-05-04
---

## Wprowadzenie

Dzięki rozwiązaniom poczty elektronicznej OVHcloud możesz wysyłać i odbierać e-maile na wybranym urządzeniu i z wybranego klienta poczty. OVHcloud udostępnia internetową usługę poczty e-mail o nazwie Outlook Web App (OWA), która umożliwia dostęp do konta z dowolnego miejsca za pośrednictwem przeglądarki. Wszystkie aktywne konta e-mail w usługach MX Plan, E-mail Pro i Hosted Exchange korzystają ze wspólnego punktu dostępu do odpowiedniego interfejsu OWA: naszej [strony logowania do interfejsu webmail](/links/web/email).

**Dowiedz się, jak wykonywać typowe działania na koncie e-mail w interfejsie OWA.**

## Wymagania początkowe

- Skonfigurowane rozwiązanie poczty elektronicznej OVHcloud z poniższych ofert:
    - [**MX Plan**](/links/web/hosting), dostępne w ramach hostingu WWW, zawarte w [darmowym hostingu 100M](/links/web/domains-free-hosting) lub zamówione oddzielnie jako rozwiązanie autonomiczne;
    - [**Hosted Exchange**](/links/web/emails-hosted-exchange);
    - [**E-mail Pro**](/links/web/email-pro).
- Dane do logowania dla adresu e-mail, którego chcesz używać.

## W praktyce

Ten przewodnik pomoże Ci lepiej zrozumieć typowe zadania dostępne na koncie e-mail w interfejsie OWA. Ponieważ jednak interfejs ten nie został pierwotnie utworzony przez OVHcloud, nie możemy udostępnić szczegółowych instrukcji dotyczących ustawień, które nie zostały opisane w tym przewodniku.

Dodatkowe przewodniki dotyczące funkcji specyficznych dla Exchange znajdziesz w sekcji [Sprawdź również](./#sprawdz-rowniez) na końcu tego przewodnika.

> [!primary]
>
> Po zalogowaniu się i zapoznaniu się z interfejsem nie musisz wykonywać instrukcji w podanej kolejności.

### Logowanie do OWA

Aby zalogować się do OWA przy użyciu adresu e-mail, otwórz [stronę logowania do interfejsu webmail](/links/web/email). Wpisz pełny adres e-mail i hasło. Następnie kliknij `Zaloguj się`{.action}.

![useowa](images/use-owa-step1.png){.thumbnail}

> [!warning]
>
> Jeśli zostaniesz przekierowany do interfejsu **Roundcube**, oznacza to, że korzystasz ze starszej wersji oferty MX Plan. Aby uzyskać więcej informacji na temat oferty MX Plan, zapoznaj się z naszą stroną [Pierwsze kroki z ofertą MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).
>
> Aby zapoznać się z interfejsem **Roundcube**, sprawdź nasz przewodnik [Korzystanie z konta e-mail w interfejsie Webmail Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube).

Jeśli logujesz się do OWA przy użyciu tego adresu e-mail po raz pierwszy, pojawi się monit o ustawienie języka interfejsu i strefy czasowej. Następnie kliknij `Zapisz`{.action}, aby kontynuować.

> [!primary]
>
> Strefy czasowe są wymienione zgodnie ze [standardem UTC (uniwersalny czas koordynowany)](https://pl.wikipedia.org/wiki/Uniwersalny_czas_koordynowany), a nie alfabetycznie według miast.
>
> **Przykład**: Dla Europy Zachodniej jest to UTC +1 (Bruksela, Kopenhaga, Madryt, Paryż).

![useowa](images/use-owa-step2.png){.thumbnail}

Od tej pory po zalogowaniu domyślnie będzie wyświetlana skrzynka odbiorcza.

![useowa](images/use-owa-step3.png){.thumbnail}

### Zaznajomienie z widokiem interfejsu OWA

Interfejs OWA zawiera kilka sekcji. Aby zapoznać się z nim, zapoznaj się z poniższą tabelą i obrazem.

|Części|Opis|
|---|---|
|Sekcja górna (1)|Zawiera dwa paski z kartami: pierwszy umożliwia dostęp do ustawień ogólnych (takich jak [sekcja opcji](./#dostep-do-sekcji-opcji)). Drugi pasek umożliwia wykonywanie konkretnych działań związanych z Twoim adresem (takich jak wysyłanie e-maili lub odpowiadanie na nie).|
|Lewa strona (2)|Wyświetla listę folderów dla Twojego adresu e-mail. Foldery te są widoczne w formie drzewa menu, które można rozwinąć lub zwinąć.|
|Część środkowa (3)|Wyświetla listę wiadomości (przeczytanych i nieprzeczytanych) z folderu wybranego w lewym menu. W tej sekcji mogą również być widoczne wyniki wyszukiwania.|
|Prawa strona (4)|Wyświetla okienko odczytu, gdy wybrano e-mail.|

![useowa](images/use-owa-step4.png){.thumbnail}

Rozmiar sekcji pionowych można zmienić, klikając i przeciągając ich linie obramowania.

### Wyświetlanie e-maili

Aby wyświetlić e-maile, wybierz folder po lewej stronie. Wiadomości przychodzące, które nie są przetwarzane przez reguły skrzynki odbiorczej, pojawią się w folderze "Skrzynka odbiorcza". Aby sprawdzić, czy otrzymałeś nowe e-maile, sprawdź, czy obok danego folderu pojawia się liczba.

![useowa](images/use-owa-step5.png){.thumbnail}

Aby przeczytać e-mail, wybierz w razie potrzeby jego folder. Następnie kliknij e-mail, aby wyświetlić jego treść w okienku odczytu. Wiadomości nieprzeczytane są pogrubione, co pozwala odróżnić je od przeczytanych.

![useowa](images/use-owa-step6.png){.thumbnail}

### Sortowanie i filtrowanie e-maili

W prawym górnym rogu listy wiadomości przycisk `Filtr`{.action} otwiera menu zawierające wszystkie opcje wyświetlania dla wybranego folderu.

- **Filtruj według kategorii**: wybierz pozycję, aby wyświetlić tylko wybrane e-maile spośród `Wszystkie`{.action}, `Nieprzeczytane`{.action}, `Do mnie`{.action} (e-maile zaadresowane bezpośrednio do Twojego adresu), `Oflagowane`{.action} (e-maile oznaczone do dalszego przetwarzania) lub `Wzmianki`{.action} (e-maile, w których wymieniono Twój adres).

- **Sortuj według**: najedź kursorem na pozycję `Sortuj według`{.action}, aby wybrać kryterium sortowania e-maili: **Data**, **Od**, **Do**, **Temat**, **Załączniki**, **Ważność** lub **Rozmiar**. Strzałka po lewej stronie kryterium wskazuje aktualny porządek; kliknij to samo kryterium ponownie, aby go odwrócić.

- **Pokaż jako**: najedź kursorem na pozycję `Pokaż jako`{.action}, aby przełączać między widokiem **Wiadomości** (jeden e-mail w wierszu) a widokiem **Konwersacje** (e-maile pogrupowane według wątku dyskusji).

### Wysyłanie i odpowiadanie

**Aby wysłać nową wiadomość**, kliknij ikonę `Nowy`{.action} w górnej części interfejsu OWA. Po prawej stronie pojawi się okienko edycji. Wypełnij pola e-maila (odbiorcy, temat, treść wiadomości, załączniki). Gdy wiadomość będzie gotowa, kliknij `Wyślij`{.action}.

![useowa](images/use-owa-step7.png){.thumbnail}

**Aby odpowiedzieć na wiadomość**, najpierw kliknij ją, aby ją wyświetlić. Następnie kliknij `Odpowiedz wszystkim`{.action}, aby odpowiedzieć wszystkim odbiorcom. Użyj przycisku strzałki w dół, jeśli chcesz odpowiedzieć tylko nadawcy e-maila (z pominięciem odbiorców kopii), a następnie kliknij `Odpowiedz`{.action}.

![useowa](images/use-owa-step8.png){.thumbnail}

Gdy wybierzesz opcję odpowiedzi, nad e-mailem pojawi się edytor szybkiej odpowiedzi. Wpisz tam swoją odpowiedź, a kiedy będziesz gotowy do wysłania wiadomości, kliknij `Wyślij`{.action}. Pamiętaj, że dla każdej opcji odpowiedzi (takiej jak dodanie podpisu) musisz najpierw rozwinąć ją do pełnego okienka edycji, klikając symbol podwójnej strzałki.

![useowa](images/use-owa-step9.png){.thumbnail}

### Porządkowanie skrzynki odbiorczej

OWA oferuje kilka sposobów porządkowania skrzynki odbiorczej. Możesz:

- [tworzyć foldery i podfoldery](./#tworzenie-folderu),
- [przenosić e-maile](./#przenoszenie-e-maili),
- [ustawiać reguły](./#tworzenie-regul-skrzynki-odbiorczej), aby po odebraniu nowego e-maila automatycznie były wykonywane konkretne działania,
- [zablokować nadawcę](./#blokowanie-nadawcy), aby nie otrzymywać już jego wiadomości.

#### Tworzenie folderu

Aby utworzyć nowy folder, kliknij prawym przyciskiem myszy nazwę adresu e-mail w drzewie folderów, a następnie wybierz `Utwórz nowy folder`{.action}. W taki sam sposób możesz utworzyć podfolder w istniejących folderach, klikając `Utwórz nowy podfolder`{.action}.

![useowa](images/use-owa-step10.png){.thumbnail}

#### Przenoszenie e-maili

**Aby przenieść e-mail**, możesz po prostu przeciągnąć go i upuścić w folderze docelowym lub kliknąć go prawym przyciskiem myszy i wybrać `Przenieś`{.action}.
**Aby przenieść wiele e-maili** jednocześnie, zaznacz je wszystkie za pomocą pól wyboru. Następnie kliknij `Przenieś`{.action} (po prawej stronie) lub `Przenieś do`{.action} (w górnej sekcji). Następnie wybierz folder docelowy.

![useowa](images/use-owa-step11.png){.thumbnail}

#### Tworzenie reguł skrzynki odbiorczej

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/z1D2wc7XWX4?start=48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Aby tworzyć reguły i nimi zarządzać, najpierw kliknij ikonę koła zębatego u góry, a następnie kliknij `Opcje`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Na nowej stronie, która zostanie otwarta, kliknij `Reguły skrzynki odbiorczej i oczyszczania`{.action} w lewym menu. W widoku drzewa "Opcje" znajdziesz tę funkcję pod pozycją "Poczta", w sekcji "Automatyczne przetwarzanie". W tym obszarze możesz tworzyć, edytować i przenosić reguły na liście.

Aby dodać nową regułę, kliknij przycisk `+`{.action}.

![useowa](images/use-owa-step13.png){.thumbnail}

Wypełnij wymagane informacje w zależności od zadania, które ma wykonywać reguła. Następnie kliknij `OK`{.action}.

![useowa](images/use-owa-step14.png){.thumbnail}

Aby uzyskać bardziej szczegółowe instrukcje dotyczące tworzenia reguł skrzynki odbiorczej, zapoznaj się z naszym przewodnikiem: [Tworzenie reguł skrzynki odbiorczej w OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan).

#### Blokowanie nadawcy

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ivad4FgJ2No" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Kliknij ikonę koła zębatego w prawym górnym rogu, a następnie kliknij `Opcje`{.action}. Nadal w lewej kolumnie przejdź drzewem "Poczta" w sekcji "Konta", a następnie "Blokuj lub zezwalaj".

W sekcji "**Zablokowani nadawcy**" wpisz adres e-mail lub nazwę domeny do zablokowania, a następnie kliknij przycisk `+`{.action}, aby dodać go do listy.

![useowa](images/owa_exchange_block.png){.thumbnail}

### Zarządzanie kontaktami

Aby zarządzać kontaktami, kliknij najpierw niebieski przycisk uruchamiania aplikacji w lewym górnym rogu strony (który zapewnia również dostęp do kalendarza, zadań i innych modułów), a następnie kliknij `Osoby`{.action}.

![useowa](images/use-owa-step15.png){.thumbnail}

Na nowej stronie możesz dodać nowy kontakt, utworzyć listę kontaktów i usunąć istniejące kontakty.

#### Dodawanie kontaktu

Kliknij `Nowy`{.action}, a następnie wpisz dane kontaktu, który chcesz dodać. Po wprowadzeniu danych kliknij `Zapisz`{.action}.

![useowa](images/use-owa-step16.png){.thumbnail}

#### Tworzenie listy kontaktów

Kliknij strzałkę w dół obok przycisku `Nowy`{.action}, a następnie kliknij `Lista kontaktów`{.action}. Nadaj jej nazwę, dodaj do niej kontakty, a następnie kliknij `Zapisz`{.action}.

![useowa](images/use-owa-step17.png){.thumbnail}

### Zmiana hasła

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/z1D2wc7XWX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Po zalogowaniu się do OWA możesz zmienić hasło do konta. W tym celu kliknij ikonę koła zębatego u góry, a następnie kliknij `Opcje`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Na nowej stronie rozwiń kartę "Ogólne" w drzewie po lewej stronie, a następnie kliknij `Moje konto`{.action}. Na koniec kliknij `Zmień hasło`{.action}.

![useowa](images/use-owa-step18.png){.thumbnail}

W nowym oknie, które zostanie otwarte, wpisz aktualne hasło. Następnie wpisz nowe hasło i potwierdź je, wpisując je ponownie. Kliknij `Zapisz`{.action}, aby zapisać nowe hasło.

> [!primary]
>
> Pamiętaj, aby wprowadzić nowe hasło na wszystkich urządzeniach używanych do dostępu do tego konta (na przykład w oprogramowaniu klienta poczty e-mail). W przypadku problemów z hasłem skontaktuj się z administratorem usługi.

![useowa](images/use-owa-step19.png){.thumbnail}

### Dodawanie odpowiedzi automatycznej

W OWA możesz utworzyć odpowiedź automatyczną dla swojej skrzynki odbiorczej, aby e-maile nie pozostawały bez odpowiedzi podczas Twojej nieobecności. W tym celu kliknij ikonę koła zębatego u góry, a następnie kliknij `Odpowiedzi automatyczne`{.action}.

![useowa](images/use-owa-step20.png){.thumbnail}

W oknie, które zostanie otwarte, wybierz opcję "Wysyłaj odpowiedzi automatyczne". Następnie możesz skonfigurować autoresponder zgodnie z różnymi kryteriami, takimi jak:

- wysyłanie e-maili z odpowiedzią automatyczną przez ustalony przedział czasu lub w sposób ciągły, aż do ręcznego wyłączenia,
- określenie, którzy nadawcy będą otrzymywać e-maile z odpowiedzią automatyczną (tylko nadawcy wewnętrzni lub również nadawcy zewnętrzni).

Wypełnij wymagane informacje w zależności od zadania, które chcesz wykonać przy użyciu tej reguły. Po wprowadzeniu danych kliknij `OK`{.action}.

![useowa](images/use-owa-step21.png){.thumbnail}

Aby uzyskać bardziej szczegółowe instrukcje dotyczące tworzenia odpowiedzi automatycznych, zapoznaj się z naszym przewodnikiem: [Tworzenie odpowiedzi automatycznej w OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies).

### Dodawanie podpisu

Aby dodać podpis e-mail, kliknij ikonę koła zębatego u góry, a następnie kliknij `Opcje`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Po lewej stronie nowej strony kliknij `Podpis e-mail`{.action}. W opcjach drzewa pozycja ta znajduje się pod "Poczta" i "Układ". W tym obszarze możesz włączyć, wyłączyć i edytować podpis.

![useowa](images/use-owa-step22.png){.thumbnail}

Skomponuj swój podpis e-mail w polu edytora. Możesz określić, czy chcesz dołączać domyślny podpis tylko do nowych e-maili, czy również do odpowiedzi i wiadomości przesyłanych dalej. Po zakończeniu kliknij `Zapisz`{.action}, aby potwierdzić.

Aby uzyskać instrukcje dotyczące tworzenia automatycznych podpisów przy użyciu szablonów dla całej domeny, zapoznaj się z naszym przewodnikiem: [Tworzenie automatycznych podpisów](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers).

### Dostęp do sekcji opcji

Aby uzyskać dostęp do wszystkich ustawień, kliknij ikonę koła zębatego u góry, a następnie kliknij `Opcje`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Po lewej stronie strony możesz następnie przeglądać widok drzewa "Opcje". Z tej strony można dostosowywać układ i zachowanie konta e-mail. Pamiętaj, że ze względów bezpieczeństwa niektóre opcje konta mogą być wyłączone przez OVHcloud.

![useowa](images/use-owa-step23.png){.thumbnail}

### Zarządzanie plikami cookie

Webmail używany w naszych ofertach e-mail jest oparty na oprogramowaniu Microsoft Outlook Web App. Może więc wymieniać metadane z serwerami Microsoft w postaci plików cookie nazywanych `appsforoffice.microsoft.com`.

Jeśli chcesz wyłączyć tę wymianę, możesz w przeglądarce używać rozszerzenia blokującego treści (takiego jak uBlock Origin lub Ghostery).
Wyłączenie tych plików cookie może jednak wpłynąć na stabilność usługi webmail.

## Sprawdź również

[Tworzenie odpowiedzi automatycznych w OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies)

[Współdzielenie folderu w interfejsie OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_directory_sharing)

[Współdzielenie kalendarzy w interfejsie OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

[Tworzenie grupy kontaktów](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_groups)

Dołącz do [grona naszych użytkowników](/links/community).
