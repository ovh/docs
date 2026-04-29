---
title: "Konfiguracja i korzystanie z Git na hostingu OVHcloud"
excerpt: "Dowiedz się, jak skonfigurować i korzystać z Git na Twoim hostingu w Panelu klienta OVHcloud"
updated: 2026-05-04
---

## Wprowadzenie

W dzisiejszym świecie cyfrowym społeczeństwa stają się coraz bardziej dynamiczne i innowacyjne. Zdolność skutecznego zarządzania i wdrażania kodu strony WWW jest kluczowa dla utrzymania konkurencyjności i rentowności Twojej marki. Git, najpopularniejszy na świecie system zarządzania wersjami, pozwala na przechowywanie kodu strony internetowej na platformach takich jak GitHub, umożliwiając lepsze śledzenie zmian, a także szybszą automatyzację i wdrożenia. Jeśli jesteś klientem OVHcloud, dysponujesz solidną infrastrukturą do hostowania strony WWW, przy jednoczesnym wykorzystaniu zalet Git i GitHub do rozwoju i skalowania strony WWW.

**Dowiedz się, jak skonfigurować Git i korzystać z niego w ramach Twojego hostingu w Panelu klienta OVHcloud.**

## Wymagania początkowe

- Posiadanie hostingu [OVHcloud](/links/web/hosting).
- Posiadanie konta [GitHub](https://github.com/) i logowanie.

> [!primary]
>
> W dniu dotychczasowym w ramach współpracy z usługami hostingowymi OVHcloud obsługiwana jest tylko platforma GitHub.

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

> [!primary]
>
> Aby powiązać i skonfigurować Git, wprowadź zmiany na koncie GitHub. Przed rozpoczęciem korzystania z przewodnika zaloguj się do konta GitHub.

### Przypisz katalog do Git <a name="associateGitRepo"></a>

> [!warning]
>
> Po dołączeniu katalogu do Git wszystkie nazwy domen w tym katalogu będą również powiązane z Git. Na przykład, jeśli katalog odpowiadający przypisanej do Ciebie stronie WWW to `www`, wówczas wszystkie domeny przypisane do katalogu `www` będą również powiązane z Git.

<!-- CP-STEPS-START:associate-git-repo -->
Kliknij poniższe zakładki, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 3**
>>
>> W tabeli, która się pojawi, kliknij przycisk `⁝`{.action} po prawej stronie odpowiedniego strony internetowej, a następnie `Powiąż Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Krok 4**
>>
>> Wyświetlony zostanie formularz powiązania Git. Wymagane jest skonfigurowanie kilku elementów:
>>
>> - Repozytorium GitHub
>> - Gałąź repozytorium GitHub
>> - Klucz SSH (dla prywatnego repozytorium GitHub)
>> - Webhook (opcjonalnie)
>>
>> Kontynuuj czytanie tego przewodnika, aby uzyskać informacje potrzebne do wypełnienia wymaganych pól.
<!-- CP-STEPS-END:associate-git-repo -->

<!-- CP-STEPS-START:git-association-form -->
#### Ustaw repozytorium GitHub

Wprowadź adres Twojego repozytorium GitHub. Jeśli nie masz jeszcze repozytorium GitHub dla swojego projektu, utwórz je.

Aby utworzyć nowe repozytorium:

- Zaloguj się do swojego konta GitHub.
- Kliknij na Twój obraz profilu w prawym górnym rogu, a następnie `Your repositories`{.action}.
- Kliknij `New`{.action} po prawej stronie ekranu, który się wyświetli.

Nadaj nazwę repozytorium i podaj wymagane informacje.

> [!warning]
>
> Zaznacz opcję `Add a README file`, aby GitHub poprawnie zainicjował repozytorium.

Na koniec kliknij przycisk `Create Repository`{.action}.

Skopiuj adres repozytorium GitHub. Musi mieć formę:

- `https://github.com/<username>/<repository_name>.git` w repozytorium publicznym.
- `git@github.com:<username>/<repository_name>.git` w prywatnym repozytorium.

Wróć do formularza kojarzenia Git i wklej adres Twojego repozytorium GitHub w polu `Repozytorium`{.action}. Jeśli adres ma niepoprawny format, wyświetlany jest następujący komunikat o błędzie:

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/error-wrong-git-branch-name.png){.thumbnail}

Teraz zdefiniuj gałąź repozytorium GitHub. Domyślną gałęzią jest `main`, ale jeśli chcesz użyć innej gałęzi, utwórz ją w GitHubie wykonując poniższe kroki:

- Zaloguj się do swojego konta GitHub.
- Kliknij na Twój obraz profilu w prawym górnym rogu, a następnie `Your repositories`{.action}.
- Przejdź do odpowiedniego repozytorium GitHub.
- Kliknij na `Main`{.action}, następnie `View all branches`{.action}, lub kliknij bezpośrednio na zakładkę `x Branch`{.action}.
- Po prawej stronie ekranu, który się wyświetli kliknij `New branch`{.action}.
- Nadaj nazwę nowej gałęzi i potwierdź, klikając na `Create new branch`{.action}.

Powróć do formularza stowarzyszenia Git w Panelu klienta OVHcloud i podaj nazwę nowo utworzonej gałęzi.

Jeśli wprowadzasz adres prywatnego repozytorium w serwisie GitHub (typu `git@github.com:<username>/<repository_name>.git`), pod polem `Branch` wyświetli się pole `SSH key` (klucz SSH).

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/field-ssh-key.png){.thumbnail}

Aby skonfigurować klucz SSH, zapoznaj się z etapem "Przypisanie klucza SSH do GitHuba (tylko w przypadku prywatnych repozytoriów GitHub)" poniżej.

#### Przypisz klucz SSH do GitHuba (tylko w przypadku prywatnych repozytoriów GitHub) <a name="linkSSHKey"></a>

> [!primary]
>
> **Dlaczego klucz SSH jest wymagany tylko w przypadku rejestracji prywatnej?**
>
> Gdy repozytorium GitHub jest publiczne, pliki mogą być odzyskiwane bez uwierzytelniania, co oznacza, że Git może klonować i aktualizować kod bez potrzeby posiadania klucza SSH. Jeśli repozytorium jest prywatne, GitHub wymaga uwierzytelnienia, aby uzyskać do niego dostęp. Klucz SSH pozwala następnie na nawiązanie bezpiecznego połączenia i gwarantuje, że tylko autoryzowani użytkownicy mogą wchodzić w interakcje z repozytorium.

> [!primary]
>
> Wygenerowanie klucza SSH jest kluczowym etapem, ponieważ ustanawia bezpieczne, zaszyfrowane połączenie między katalogiem Twojej strony WWW i repozytorium GitHub. Klucz ten gwarantuje, że transfer danych oraz modyfikacje kodu są realizowane w bezpieczny i uwierzytelniony sposób, zapobiegając nieautoryzowanemu dostępowi oraz zapewniając integralność kodu.

Skopiuj klucz SSH, klikając przycisk po prawej stronie.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/field-ssh-key-copy.png){.thumbnail}

Zapisz klucz SSH na koncie GitHub:

- Zaloguj się do swojego konta GitHub.
- Kliknij na Twój obraz profilu w prawym górnym rogu, a następnie `Settings`{.action}.
- Na nowej stronie kliknij `SSH and GPG keys`{.action} w kolumnie po lewej stronie.
- Wybierz `New SSH key`{.action} lub `Add SSH key`{.action}.

Zostanie wyświetlony formularz dodawania nowego klucza SSH:

- **Title**: dodaj opis dla Twojego klucza SSH. Na przykład możesz nazwać ten klucz "OVHcloud".
- **Type of key**: pozostaw wartość domyślną `authentication key`{.action}
- **Key**: wklej klucz SSH.

Aby zatwierdzić informacje, kliknij `Add SSH key`{.action}. Jeśli zostanie wyświetlony monit, potwierdź dostęp do konta w GitHub.

#### Skonfiguruj automatyczne wdrażanie

W dolnej części formularza kojarzenia Git, wyświetla się sekcja `Skonfiguruj automatyczne wdrożenie`{.action} wraz z adresem URL elementu webhook. Konfiguracja interfejsu webhook pozwala repozytorium GitHub na automatyczne powiadamianie hostingu OVHcloud o zdarzeniach, które mają miejsce w repozytorium GitHub (nowe wdrożenie, zmiana kodu, itp.). Funkcja ta jest szczególnie przydatna, jeśli pracujesz w grupie nad tym samym projektem i chcesz być na bieżąco ze wszystkimi zmianami w repozytorium GitHub. Aby dowiedzieć się więcej, sprawdź, jak [skonfigurować webhook na GitHubie](#configureWebhook).

#### Zatwierdź powiązanie Git

Przed zatwierdzeniem formularza skojarzenia Git, upewnij się, że:

- Twój klucz SSH został zarejestrowany na koncie GitHub.
- Adres repozytorium GitHub jest poprawny. Musi mieć formę `https://github.com/<username>/<repository_name>.git`.
- Nazwa gałęzi repozytorium GitHub jest poprawna.
- Twój katalog instalacyjny jest pusty.

Aby zatwierdzić informacje zawarte w formularzu powiązania Git, kliknij przycisk `Zastosuj konfigurację`{.action}.
<!-- CP-STEPS-END:git-association-form -->

### Aktywacja powiązania Git

<!-- CP-STEPS-START:git-activation-status -->
#### Sukces w powiązaniu z Git

Po potwierdzeniu formularza powiązania Git zostaniesz przekierowany na stronę karty `Moje strony`{.action}.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/git-activation-ongoing.png){.thumbnail}

Zielony baner informuje, że Git jest aktywowany. Śledź aktywację Git, klikając link `Zadania w trakcie`{.action}.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ongoing-tasks/ongoing-task-git-activation.png){.thumbnail}

Status `W realizacji`{.action} wskazuje, że trwa przypisywanie do Git. Proces może potrwać kilka minut. Po wykonaniu zadania pojawia się status `Włączony`{.action}.

Możesz również śledzić postęp aktywacji Git w karcie `Moje strony`{.action}. W kolumnie `Git`{.action} tabeli, wpis `W realizacji`{.action} na linii odpowiedniego strony internetowej informuje, że Git jest w trakcie aktywacji.

Gdy powiązanie Git zostanie wykonane, status `Aktywny`{.action} pojawi się w kolumnie `Git`{.action} dla odpowiedniego strony internetowej.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Błędy skojarzenia Git

W tabeli karty `Moje strony`{.action} zidentyfikuj wiersze odpowiadające katalogowi strony internetowej, którą chcesz powiązać z Git. W kolumnie `Git`, jeśli pojawi się wpis `Błąd`, oznacza to, że wystąpiła co najmniej jedna z poniższych błędów:

- Klucz SSH nie został zapisany na Twoim koncie GitHub.
- Katalog instalacyjny nie jest pusty.
- Adres repozytorium GitHub nie istnieje lub jest nieprawidłowy.
- Gałąź repozytorium GitHub nie istnieje lub jej nazwa jest nieprawidłowa.

Aby dowiedzieć się, jaki dokładnie błąd wystąpił, sprawdź informacje ostatniego wdrożenia. W tabeli kliknij przycisk `⁝`{.action} po prawej stronie odpowiedniego strony internetowej, a następnie `Informacje o ostatnim wdrożeniu`{.action}.

![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}

Po zidentyfikowaniu błędu(-ów), ponownie powiąż Git. Powtórz operację, klikając przycisk `⁝`{.action} po prawej stronie odpowiedniego strony internetowej, a następnie `Powiąż Git`{.action}.
<!-- CP-STEPS-END:git-activation-status -->

### Uruchomienie repozytorium GitHub na hostingu OVHcloud

<!-- CP-STEPS-START:deploy-github-repo -->
Kliknij poniższe zakładki, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 3**
>>
>> W tabeli, która się pojawi, kliknij przycisk `⁝`{.action} po prawej stronie odpowiedniego strony internetowej, a następnie `Wdrożyć Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Krok 4**
>>
>> Wyświetlony zostanie komunikat potwierdzenia oraz pole wyboru informujące, że w przypadku konfliktu podczas wdrażania, możesz zastosować zmiany zdalne (z repozytorium GitHub) nad zmianami lokalnymi. Zaznacz lub nie zaznacz pole zgodnie ze swoim wyborem, a następnie kliknij `Zatwierdź`{.action}, aby potwierdzić wdrożenie.
>>
>> > [!warning]
>> >
>> > Aby uniknąć utraty lokalnych zmian, zapisz je przed nadpisaniem zmianami z gałęzi zdalnej.
>>
>> Nowa wersja strony internetowej została pomyślnie wdrożona na Twoim hostingu OVHcloud. Jeśli inni pracują nad tym samym projektem i wprowadzają zmiany do repozytorium GitHub, możesz [skonfigurować webhook na GitHub](#configureWebhook), aby ich zmiany były automatycznie wdrażane na Twoim hostingu. Dzięki temu nie musisz ręcznie wdrażać Git, a Twoja strona internetowa będzie zawsze aktualna.
<!-- CP-STEPS-END:deploy-github-repo -->

### Zmiana nazwy domeny

<!-- CP-STEPS-START:modify-domain-name -->
Kliknij poniższe zakładki, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 3**
>>
>> W tabeli, która się pojawi, kliknij przycisk `>`{.action} po lewej stronie nazwy strony internetowej, aby wyświetlić przypisane domeny lub poddomeny.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Następnie kliknij przycisk `⁝`{.action} po prawej stronie nazwy domeny lub poddomeny, a następnie kliknij `Edytuj domenę`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Krok 4**
>>
>> Istnieją dwa możliwe scenariusze:
>>
>> **1 - Do strony internetowej są przypisane jedna lub więcej innych domen**
>>
>> Wyświetlony zostanie następujący ekran:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}
>>
>> Zmień informacje zgodnie z potrzebami i kliknij `Dalej`{.action}.
>>
>> Wyświetlony zostanie drugi ekran potwierdzenia z podsumowaniem Twoich zmian:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}
>>
>> Kliknij `Zatwierdź`{.action}, aby potwierdzić zmiany w Twojej domenie.
>>
>> **2 - Do strony internetowej jest przypisana tylko jedna domena**
>>
>> Wyświetlony zostanie następujący ekran:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}
>>
>> Jak wskazuje komunikat, [usuwaj powiązanie Git](#deleteGitAssociation) wcześniej, zanim zmienisz swoją domenę.
<!-- CP-STEPS-END:modify-domain-name -->

### Odłącz domenę

<!-- CP-STEPS-START:detach-domain-name -->
Kliknij poniższe zakładki, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 3**
>>
>> W tabeli, która się pojawi, kliknij przycisk `>`{.action} po lewej stronie nazwy strony internetowej, aby wyświetlić przypisane domeny lub poddomeny.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Następnie kliknij przycisk `⁝`{.action} po prawej stronie nazwy domeny lub poddomeny, a następnie kliknij `Odłącz domenę`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Krok 4**
>>
>> Istnieją dwa możliwe scenariusze:
>>
>> **1 - Do strony internetowej są przypisane jedna lub więcej innych domen**
>>
>> Wyświetlony zostanie następujący ekran.
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> Kliknij `Zatwierdź`{.action}, aby potwierdzić odłączenie Twojej domeny.
>>
>> **2 - Do strony internetowej jest przypisana tylko jedna domena**
>>
>> Wyświetlony zostanie następujący ekran:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>>
>> Jak wskazuje komunikat, [usuwaj powiązanie Git](#deleteGitAssociation) wcześniej, zanim odłączysz swoją domenę.
<!-- CP-STEPS-END:detach-domain-name -->

### Konfiguracja Git

<!-- CP-STEPS-START:configure-git -->
Kliknij poniższe zakładki, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 3**
>>
>> W tabeli, która się pojawi, kliknij przycisk `⁝`{.action} po prawej stronie odpowiedniego strony internetowej, a następnie `Skonfiguruj Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Krok 4**
>>
>> Wyświetlone zostaną następujące informacje:
>>
>> - Klucz SSH: Jeśli jeszcze tego nie zrobiłeś, [zapisz swój klucz SSH w swoim koncie GitHub](#linkSSHKey).
>> - Repozytorium: Adres Twojego repozytorium Git. To pole jest zasłonięte, ponieważ nie możesz zmienić adresu repozytorium Git. Aby zmienić adres URL repozytorium Git, musisz [usunąć powiązanie Git z Twojego katalogu](#deleteGitAssociation), a następnie ponownie [powiązać katalog z Git](#associateGitRepo).
>> - Gałąź: Nazwa gałęzi repozytorium GitHub. Możesz zmienić to pole, jeśli to konieczne.
>> - URL webhooka: Jeśli chcesz zoptymalizować swoje wdrożenia na Git, [skonfiguruj webhook na GitHub](#configureWebhook).
<!-- CP-STEPS-END:configure-git -->

### Informacje o ostatnim wdrożeniu

Po wdrożeniu repozytorium GitHub na Twoim hostingu możesz sprawdzić informacje dotyczące ostatniego wdrożenia, takie jak błędy, testy lub inne przydatne informacje.

<!-- CP-STEPS-START:latest-deployment-info -->
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
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 3**
>>
>> W tabeli, która się pojawi, kliknij przycisk `⁝`{.action} po prawej stronie odpowiedniego strony internetowej, a następnie `Informacje o ostatnim wdrożeniu`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
>> Na tym ekranie znajdziesz wszystkie informacje dotyczące ostatniego wdrożenia.
<!-- CP-STEPS-END:latest-deployment-info -->

### Usuń powiązanie Git <a name="deleteGitAssociation"></a>

<!-- CP-STEPS-START:delete-git-association -->
Kliknij poniższe zakładki, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 3**
>>
>> W tabeli, która się pojawi, kliknij przycisk `⁝`{.action} po prawej stronie odpowiedniego strony internetowej, a następnie `Usuń Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Krok 4**
>>
>> Komunikat informuje, że usunięcie będzie dotyczyć wszystkich nazw domen przypisanych do Twojej strony internetowej. Zaznacz pole `Czy chcesz wyczyścić zawartość katalogu <twój_katalog>?`{.action}, jeśli chcesz również usunąć zawartość (katalogi i pliki) katalogu.
>> 
>> 1\. Jeśli zaznaczysz pole, pojawia się następujące okno:
>> 
>> ![Moje strony](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}
>> 
>> Kliknij `Zatwierdź`{.action}, aby zweryfikować usunięcie powiązania Git z Twoim katalogiem oraz jego zawartości.
>> 
>> 2\. Jeśli nie zaznaczysz pola, pojawia się następujące okno:
>> 
>> ![Moje strony](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}
>> 
>> Kliknij `Zatwierdź`{.action}, aby zweryfikować usunięcie powiązania Git z Twoim katalogiem.
<!-- CP-STEPS-END:delete-git-association -->

### Konfiguracja interfejsu webhook na GitHubie

#### Pobierz adres URL elementu webhook

> [!primary]
>
> Jeśli korzystasz już ze skojarzenia Git, skopiuj adres URL elementu webhook i przejdź do etapu "[Konfiguruj element webhook](#configureWebhook)".

<!-- CP-STEPS-START:configure-webhook -->
Kliknij poniższe zakładki, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 3**
>>
>> W tabeli, która się pojawi, kliknij przycisk `⁝`{.action} po prawej stronie odpowiedniego strony internetowej, a następnie `Skonfiguruj Git`{.action}.
>> 
>> ![Strona internetowa](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>> 
> **Krok 4**
>> 
>> Na dole formularza, który się pojawia, skopiuj adres zawarty w polu `URL webhooka`{.action}. Musisz teraz zarejestrować adres URL i skonfigurować webhook na swoim koncie GitHub.
<!-- CP-STEPS-END:configure-webhook -->

#### Skonfiguruj webhook <a name="configureWebhook"></a>

Zaloguj się na swoje konto GitHub i przejdź do repozytorium, w którym chcesz skonfigurować webhook. Przejdź do zakładki `Settings`{.action}, a następnie w bocznym menu ustawień kliknij `Webhooks`{.action}. Kliknij przycisk `Add webhook`{.action}, aby przejść do formularza:

- **Payload URL**: wprowadź adres URL podany w formularzu powiązania Git (`URL webhooka`{.action}).
- **Content type**: wybierz `application/json`{.action} jako typ treści dla przesłanych danych.
- **Secret**: klucz jest opcjonalny. GitHub będzie go używać do podpisywania wiadomości wysyłanych przez webhook, zwiększając tym samym bezpieczeństwo.
- **SSL verification**: jeśli Twoja strona WWW używa protokołu HTTPS, pozostaw tę opcję włączoną, aby zwiększyć bezpieczeństwo.
- **Which events would you like to trigger this webhook?**: wybierz zdarzenia, które spowodują wysłanie funkcji webhook. W przypadku wdrożenia automatycznego, `Just the push event`{.action} (Just the push event) jest często wystarczające, ale możesz wybrać `Send me everything`{.action}, aby otrzymywać powiadomienia o wszystkich zdarzeniach.
- **Active**: upewnij się, że zaznaczone jest pole wyboru pozwalające na aktywację elementu webhook.

Kliknij przycisk `Add webhook`{.action}, aby zarejestrować i aktywować nowy webhook.

#### Przetestuj Twój webhook

Po utworzeniu elementu webhook w GitHubie przejdź do listy elementów webhook i wybierz ten, który właśnie utworzyłeś, lub kliknij na `Edit`{.action}.

Na wyświetlonym ekranie kliknij zakładkę `Recent Deliveries`{.action}. Aby wysłać zdarzenie testowe specjalnie, GitHub zazwyczaj wysyła zdarzenie `ping` podczas tworzenia elementu webhook, a do przetestowania tego zdarzenia możesz użyć przycisku `Redeliver`{.action} obok tego zdarzenia.

Jeśli test się powiódł, zakładka `Response`{.action} zwraca kod 200. Jeśli kod błędu zostanie zwrócony (zazwyczaj 500 lub 400), oznacza to, że webhook został nieprawidłowo skonfigurowany. Wróć do formularza dodawania elementu webhook i sprawdź informacje, a w szczególności adres URL elementu webhook dostarczony przez OVHcloud.

#### Korzystanie z funkcji webhook

Po skonfigurowaniu elementu webhook kod Twojej strony WWW będzie aktualizowany automatycznie za każdym razem, gdy pojawią się zmiany w repozytorium GitHub. Na przykład jeśli w repozytorium GitHub jedna ze współpracowników wprowadzi zmiany, kod Twojej strony WWW zostanie zaktualizowany lokalnie (na Twoim hostingu OVHcloud).

### Zakończenie

Powiązałeś kod Twojej strony WWW z Git za pomocą repozytorium GitHub. Możesz teraz wdrożyć zmiany w repozytorium GitHub na Twoim hostingu lub wdrożyć je automatycznie za pomocą interfejsu webhook, sprawdzić logi wdrożeń i wykonywać wiele operacji - wszystko to za pomocą kilku kliknięć w Panelu klienta.

## Sprawdź również

[Uruchomienie strony WWW na hostingu](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).
