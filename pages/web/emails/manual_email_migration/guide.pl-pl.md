---
title: Ręczna migracja Twojego konta e-mail
excerpt: Dowiedz się, jak ręcznie przenieść Twoje konto e-mail na inny adres e-mail
updated: 2021-01-05
---

**Ostatnia aktualizacja z dnia 27-10-2020**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

## Wprowadzenie

[Automatyczna](/pages/web/microsoft-collaborative-solutions/migration_omm){.external} migracja konta e-mail jest możliwa przy użyciu narzędzia [OVH Mail Migrator](https://omm.ovh.net/){.external}. Możesz również ręcznie przenieść Twoje konto e-mail za pomocą programu pocztowego.

**Dowiedz się, jak przenieść ręcznie Twoje konto e-mail.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji "Sprawdź również" niniejszego przewodnika.
>

## Wymagania początkowe

- Posiadanie usługi e-mail w OVHcloud, takiej jak oferta [Exchange](https://www.ovhcloud.com/pl/emails/){.external}, [E-mail Pro](https://www.ovhcloud.com/pl/emails/email-pro/){.external} lub MX Plan (w postaci pakietu MX Plan lub w postaci pakietu [hostingowego OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external})
- Posiadanie danych dostępowych do kont e-mail, które chcesz przenieść (konta źródłowe)
- Posiadanie danych dostępowych do kont e-mail OVHcloud, na które przeniesione zostaną dane (konta docelowe)

## W praktyce

> [!primary]
> Sprawdź najpierw, czy automatyczna migracja jest możliwa przy użyciu narzędzia [OVH Mail Migrator](https://omm.ovh.net/){.external}. W tym celu skorzystaj z przewodnika [Migracja kont e-mail przez OVH Mail Migrator](/pages/web/microsoft-collaborative-solutions/migration_omm){.external}.

W tym przewodniku przeprowadziliśmy operacje na 3 najczęściej używanych programach pocztowych, **Outlook**, **Mail** na Mac OS i **Thunderbird**.

Poniższe instrukcje są podzielone na dwie części:

- **Eksport**. Dzięki temu możesz pobrać kompletną kopię zapasową Twojego konta e-mail, aby przenieść ją na inne konto, program pocztowy lub na inne konto. Jeśli musisz przenieść elementy z jednego konta e-mail na inny adres skonfigurowany w tym samym programie pocztowym, możesz skopiować/wkleić lub przeciągnąć/upuścić jedno do drugiego. Zalecamy użycie systemu eksportu oprogramowania, którego używasz.

- **Import**. Dzięki temu możesz zastosować kopię zapasową utworzoną na Twoim nowym komputerze lub nowym oprogramowaniu. Sprawdź, czy plik kopii zapasowej, który chcesz importować jest kompatybilny z używanym przez Ciebie oprogramowaniem poczty elektronicznej.

### Outlook

Jeśli posiadasz konto e-mail [Exchange OVHcloud](https://www.ovhcloud.com/pl/emails/hosted-exchange/), możesz je wyeksportować bezpośrednio w formacie PST w Panelu klienta.

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i przejdź do sekcji `Web Cloud`{.action}. Wybierz `Microsoft`{.action}, a następnie `Exchange`{.action}. Kliknij nazwę odpowiedniej usługi Hosted Exchange.

W karcie `Konta e-mail`{.action} kliknij przycisk `...`{.action} po prawej stronie konta e-mail, które chcesz wyeksportować, a następnie wybierz opcję `Eksportuj w formacie PST`{.action}.

![emails](images/manager-export-pst01.png){.thumbnail}

Następnie należy poczekać na eksport, który może trwać od kilku minut do kilku godzin, w zależności od wielkości eksportu. Po zakończeniu operacji wystarczy powrócić do przycisku `Eksportuj w formacie PST`{.action}, aby pobrać link do pobrania pliku.

![emails](images/manager-export-pst02.png){.thumbnail}

#### Eksport z systemu Windows

- Kliknij `plik` w lewym górnym rogu, a następnie `Otwórz i wyeksportuj`, a następnie wybierz `import/eksport`.

![emails](images/outlook-export-import-win.png){.thumbnail}

- Wybierz Eksportuj `dane do pliku`, po czym kliknij `Dalej`.

![emails](images/outlook-export-win02.png){.thumbnail}

- Wybierz `Plik danych Outlook (.pst)` i kliknij `Dalej`.

![emails](images/outlook-export-win03.png){.thumbnail}

- Wybierz nazwę konta e-mail, które chcesz wyeksportować.

> [!primary]
> Możesz wyeksportować tylko jedno konto jednocześnie.

Zaznacz dobrze `Dodaj podkatalogi`, a następnie kliknij `Dalej`.

![emails](images/outlook-export-win04.png){.thumbnail}

- Wybierz docelowy folder kopii zapasowej i podaj nazwę kopii zapasowej klikając `Przeglądaj`. Wybierz odpowiednią opcję i kliknij `Zakończ`.

![emails](images/outlook-export-win05.png){.thumbnail}

Rozpoczyna się eksport pliku. Podczas tworzenia pliku zostaniesz poproszony o określenie hasła. Jest on opcjonalny.

![emails](images/outlook-export-win06.png){.thumbnail}

#### Import z systemu Windows

- Kliknij `plik` w lewym górnym rogu, a następnie `Otwórz i wyeksportuj`, a następnie wybierz `import/eksport`.

![emails](images/outlook-export-import-win.png){.thumbnail}

- Wybierz Importuj `z innego programu lub pliku`, a następnie kliknij `Dalej`.

![emails](images/outlook-import-win02.png){.thumbnail}

- Wybierz `Plik danych Outlook (.pst)` i kliknij `Dalej`.

![emails](images/outlook-import-win03.png){.thumbnail}

- Wybierz plik kopii zapasowej, klikając `Przeglądaj`. Wybierz odpowiednią opcję i kliknij `Zakończ`.

![emails](images/outlook-import-win04.png){.thumbnail}

- Jeśli ustaliłeś hasło do pliku kopii zapasowej, wprowadź je i kliknij `OK`.

- Wybierz `Importuj elementy do aktywnego` folderu, a następnie kliknij `Zakończ`.

Rozpoczyna się import kopii zapasowej.

#### Eksportuj z systemu Mac OS

W zakładce `Narzędzia` w oknie Outlook kliknij `Eksportuj`.

![emails](images/outlook-export-mac01.png){.thumbnail}

W oknie "Eksport do pliku archiwum (.olm)" zaznacz elementy, które chcesz dodać do pliku kopii zapasowej, następnie kliknij `Dalej`.

![emails](images/outlook-export-mac02.png){.thumbnail}

Następnie wybierz docelowy folder dla kopii zapasowej, a następnie kliknij `Zapisz`.

![emails](images/outlook-export-mac03.png){.thumbnail}

Pojawi się okno postępu, kliknij `Dalej` po zakończeniu operacji. Twój plik kopii zapasowej znajdziesz w wybranym wcześniej katalogu.

#### Import z systemu Mac OS

W zakładce `Narzędzia` w oknie Outlook kliknij `Importuj`.

![emails](images/outlook-import-mac01.png){.thumbnail}

Wybierz format kopii zapasowej, którą chcesz importować, a następnie kliknij `Dalej`.

![emails](images/outlook-import-mac02.png){.thumbnail}

Wybierz Twój plik kopii zapasowej, po czym kliknij `importuj`.

![emails](images/outlook-import-mac03.png){.thumbnail}

Pojawi się okno postępu, kliknij `Dalej` po zakończeniu operacji. Twoja kopia zapasowa jest wdrażana w programie Outlook.

### Mail na Mac OS

#### Eksport

W kolumnie z lewej strony wybierz jedno lub kilka kont e-mail. Kliknij `Skrzynka na listy` w menu poziomym, a następnie kliknij `Eksportuj skrzynkę na listy`.

![emails](images/mail-export-mac01.png){.thumbnail}

Wybierz lub utwórz nowy folder, następnie kliknij `Wybierz`.

![emails](images/mail-export-mac02.png){.thumbnail}

Twój eksport to plik ".mbox".

#### Import

Kliknij `Plik` w menu poziomym, a następnie kliknij `Importuj skrzynki na listy`.

![emails](images/mail-import-mac01.png){.thumbnail}

Wybierz plik kopii zapasowej w formacie.mbox, po czym kliknij `Dalej`.

![emails](images/mail-import-mac02.png){.thumbnail}

Z lewej strony, importowane e-maile znajdują się na nowym koncie e-mail o nazwie "Import". Możesz przeciągnąć foldery i wiadomości z konta "Import" na Twoje skonfigurowane konta e-mail. Po zakończeniu transferu będziesz mógł usunąć konto "Import".

### Thunderbird

Aktualnie nie istnieje funkcjonalność umożliwiająca eksportowanie lub importowanie konta e-mail z Thunderbird. Można jednak zapisać profil Thunderbirda. Zawiera ona wszystkie konta i e-maile znajdujące się lokalnie na Twoim komputerze. Zobaczymy, jak zapisać profil Thunderbird i ponownie włączyć go do nowej instancji Thunderbird.

#### Eksport

W oknie głównym kliknij menu w prawym górnym rogu, następnie `Pomoc`, a następnie `Informacje dotyczące rozwiązywania problemów`.

![emails](images/thunderbird_menu.png){.thumbnail}

Pojawi się tabela. Wyszukaj linię `Katalog Profilowy` i kliknij przycisk `Otwórz odpowiedni` katalog.

![emails](images/thunderbird_open_folder.png){.thumbnail}

Zostaniesz przekierowany do folderu profilu. Przejdź z folderu do drzewa.

![emails](images/thunderbird_profil_folder1.png){.thumbnail}

Skopiuj folder profilu za pomocą prawym przyciskiem myszy, a następnie wklej ten folder do wybranego folderu lub pomocy.

![emails](images/thunderbird_profil_folder2.png){.thumbnail}

#### Import

Zamiast importowania, będzie tu o ładowanie profilu.
Jeśli konta e-mail zostały już skonfigurowane w docelowej instancji Thunderbird, zostaną one wyświetlone w profilu A.
Gdy Thunderbird załaduje nowy profil (profil B), może załadować **tylko** elementy tego profilu B.
Dlatego zalecamy załadowanie najpierw nowego profilu (profil B), a następnie skonfigurowanie kont e-mail pochodzących z profilu A.

Najpierw należy uruchomić Thunderbird za pomocą menedżera profili.

- W systemie Windows przejdź do menu `Start`, a następnie do programu `Uruchom`. Wpisz `thunderbird.exe -ProfileManager` i kliknij `OK`.

![emails](images/thunderbird-run-profil.png){.thumbnail}

- W systemie Mac OS uruchom aplikację Terminal i przeciągnij i upuść aplikację Thunderbird w oknie terminala, dodając ją do linii `/Contents/MacOS/thunderbird-bin -ProfileManager`. Wpisz przycisk `Enter` ( ⏎), aby zatwierdzić.

![emails](images/thunderbird-terminal-profil.png){.thumbnail}

W następnym oknie wyświetlą się istniejące profile. Kliknij `Utwórz profil`, a następnie `Dalej`, gdy pojawi się komunikat informacyjny.

![emails](images/thunderbird-profil-create01.png){.thumbnail}

Na następnym etapie nadaj nazwę profilowi i podaj folder, w którym utworzony zostanie profil, poniżej zdania "Twoje ustawienia użytkownika, preferencje i wszystkie dane osobowe będą zapisane w":

![emails](images/thunderbird-profil-create02.png){.thumbnail}

> [!primary]
> Zalecamy skopiowanie kopii zapasowej Twojego profilu Thunderbird do folderu z profilami Thunderbirda.

Kliknij `Wybierz katalog...` aby wybrać folder z kopią zapasową. Kliknij `Zakończ`, aby utworzyć profil z kopii zapasowej.

Okno wyboru profilu znajdziesz w nowym, wybranym profilu. Kliknij `Uruchom Thunderbird`, Thunderbird zostanie uruchomiony z wszystkimi elementami, które posiadasz w kopii zapasowej.

### Sprawdź import na nowy adres e-mail

Po wykonaniu czynności zgodnie z instrukcjami dotyczącymi importu sprawdź, czy Twoje dane są zainstalowane na serwerze.

Zaloguj się do [interfejsu Webmail](https://www.ovh.pl/mail/).

foldery i e-maile zapisane adresu e-mail znajdziesz w skrzynce odbiorczej oraz w kolumnie z lewej strony.

> [!primary]
> Pamiętaj, że po upływie tego czasu elementy zainstalowane na Twoim komputerze muszą zostać przesłane na serwer e-mail. Może to potrwać kilka minut lub godzin, w zależności od połączenia z Internetem.

## Sprawdź również

[Przeniesienie kont e-mail za pomocą OVH Mail Migrator](/pages/web/microsoft-collaborative-solutions/migration_omm){.external}

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
