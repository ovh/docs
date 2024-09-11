---
title: "Konfiguracja i korzystanie z GitHub na hostingu OVHcloud"
excerpt: "Dowiedz się, jak skonfigurować i korzystać z GitHub na Twoim hostingu w Panelu klienta OVHcloud"
updated: 2024-08-22
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

W dzisiejszym świecie cyfrowym społeczeństwa stają się coraz bardziej dynamiczne i innowacyjne. Zdolność skutecznego zarządzania i wdrażania kodu strony WWW jest kluczowa dla utrzymania konkurencyjności i rentowności Twojej marki. GitHub, najpopularniejszy na świecie system zarządzania wersjami, pozwala na przechowywanie kodu strony internetowej na platformach takich jak GitHub, umożliwiając lepsze śledzenie zmian, a także szybszą automatyzację i wdrożenia. Jeśli jesteś klientem OVHcloud, dysponujesz solidną infrastrukturą do hostowania strony WWW, przy jednoczesnym wykorzystaniu zalet GitHub do rozwoju i skalowania strony WWW.

**Dowiedz się, jak skonfigurować GitHub i korzystać z niego w ramach Twojego hostingu w Panelu klienta OVHcloud.**

## Wymagania początkowe

- Posiadanie hostingu [OVHcloud](/links/web/hosting).
- Dostęp do [Panelu klienta OVHcloud](/links/manager), sekcja Web Cloud.
- Posiadanie konta [GitHub](https://github.com/){.external} i logowanie.

## W praktyce

> [!primary]
>
> Aby powiązać i skonfigurować GitHub, wprowadź zmiany na koncie GitHub. Przed rozpoczęciem korzystania z przewodnika zaloguj się do konta GitHub.
>

### Przypisz katalog do GitHub <a name="associateGitRepo"></a>

> [!warning]
>
> Po dołączeniu katalogu do GitHub wszystkie nazwy domen w tym katalogu będą również powiązane z GitHub. Na przykład, jeśli katalog odpowiadający przypisanej do Ciebie stronie WWW to `www`, wówczas wszystkie domeny przypisane do katalogu `www` będą również powiązane z GitHub.
>

Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i wykonaj następujące czynności:

- Przejdź do zakładki `Web Cloud`{.action}.
- Wybierz hosting w rubryce `Hosting`{.action} po lewej stronie.
- Kliknij zakładkę `MultiSite`{.action}.
- W tabeli, która się wyświetli wskaż linię odpowiadającą katalogowi, który chcesz powiązać z GitHub.
- Kliknij przycisk `...`{.action} i wybierz `Powiąż Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/link-git.png){.thumbnail}

Zostanie wyświetlony formularz powiązania GitHub. Należy skonfigurować kilka elementów:

- Klucz SSH
- Repozytorium GitHub
- Gałąź repozytorium GitHub
- Webhook (opcjonalnie)

#### Przypisz klucz SSH do GitHuba <a name="linkSSHKey"></a>

> [!primary]
>
> Wygenerowanie klucza SSH jest kluczowym etapem, ponieważ ustanawia bezpieczne, zaszyfrowane połączenie między katalogiem Twojej strony WWW i repozytorium GitHub. Klucz ten gwarantuje, że transfer danych oraz modyfikacje kodu są realizowane w bezpieczny i uwierzytelniony sposób, zapobiegając nieautoryzowanemu dostępowi oraz zapewniając integralność kodu.
>

Skopiuj i zapisz klucz SSH na koncie GitHub. Pozwala to na nawiązanie bezpiecznego połączenia bez konieczności wprowadzania hasła do każdej operacji GitHub, którą będziesz musiał wykonać.

- Zaloguj się do swojego konta GitHub.
- Kliknij na Twój obraz profilu w prawym górnym rogu, a następnie `Settings`{.action}.
- Na nowej stronie kliknij `SSH and GPG keys`{.action} w kolumnie po lewej stronie.
- Wybierz `New SSH key`{.action} lub `Add SSH key`{.action}.

Zostanie wyświetlony formularz dodawania nowego klucza SSH:

- **Title** : dodaj opis dla Twojego klucza SSH. Na przykład możesz nazwać ten klucz "OVHcloud".
- **Type of key**: pozostaw wartość domyślną `authentication key`{.action}
- **Key** : wklej klucz SSH.

Aby zatwierdzić informacje, kliknij `Add SSH key`{.action}. Jeśli zostanie wyświetlony monit, potwierdź dostęp do konta w GitHub.

#### Ustaw repozytorium GitHub

Powrót do formularza przypisania GitHub w Panelu klienta OVHcloud. Wprowadź adres repozytorium GitHub. Jeśli nie masz jeszcze repozytorium GitHub dla swojego projektu, utwórz je.

Aby utworzyć nowe repozytorium:

- Zaloguj się do swojego konta GitHub.
- Kliknij na Twój obraz profilu w prawym górnym rogu, a następnie `Your repositories`{.action}.
- Kliknij `New`{.action} po prawej stronie ekranu, który się wyświetli.

Nadaj nazwę repozytorium i podaj wymagane informacje.

> [!warning]
>
> Zaznacz opcję `Add a README file`, aby GitHub poprawnie zainicjował repozytorium.
>

Na koniec kliknij przycisk `Create Repository`{.action}.

Skopiuj adres repozytorium GitHub. Musi mieć formę `https://github.com/<username>/<repository_name.git>. Wróć do formularza kojarzenia GitHub i wklej adres Twojego repozytorium GitHub w polu `Repozytorium`{.action}. Jeśli adres ma niepoprawny format, wyświetlany jest następujący komunikat o błędzie:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/error-wrong-git-branch-name.png){.thumbnail}

Teraz zdefiniuj gałąź repozytorium GitHub. Domyślną gałęzią jest `main`, ale jeśli chcesz użyć innej gałęzi, utwórz ją w GitHubie wykonując poniższe kroki:

- Zaloguj się do swojego konta GitHub.
- Kliknij na Twój obraz profilu w prawym górnym rogu, a następnie `Your repositories`{.action}.
- Przejdź do odpowiedniego repozytorium GitHub.
- Kliknij na `Main`{.action}, następnie `View all branches`{.action}, lub kliknij bezpośrednio na zakładkę `x Branch`{.action}.
- Po prawej stronie ekranu, który się wyświetli kliknij `New branch`{.action}.
- Nadaj nazwę nowej gałęzi i potwierdź, klikając na `Create new branch`{.action}.

Powróć do formularza stowarzyszenia GitHub w Panelu klienta OVHcloud i podaj nazwę nowo utworzonej gałęzi.

#### Skonfiguruj automatyczne wdrażanie

W dolnej części formularza kojarzenia GitHub, wyświetla się sekcja `Skonfiguruj automatyczne wdrożenie`{.action} wraz z adresem URL elementu webhook. Konfiguracja interfejsu webhook pozwala repozytorium GitHub na automatyczne powiadamianie hostingu OVHcloud o zdarzeniach, które mają miejsce w repozytorium GitHub (nowe wdrożenie, zmiana kodu, itp.). Funkcja ta jest szczególnie przydatna, jeśli pracujesz w grupie nad tym samym projektem i chcesz być na bieżąco ze wszystkimi zmianami w repozytorium GitHub. Aby dowiedzieć się więcej, sprawdź, jak [skonfigurować webhook na GitHubie](#configureWebhook).

#### Zatwierdź powiązanie GitHub

Przed zatwierdzeniem formularza skojarzenia GitHub, upewnij się, że:

- Twój klucz SSH został zarejestrowany na koncie GitHub.
- Adres repozytorium GitHub jest poprawny. Musi mieć formę `https://github.com/<username>/<repository_name.git>`.
- Nazwa gałęzi repozytorium GitHub jest poprawna.
- Twój katalog instalacyjny jest pusty.

Aby zatwierdzić informacje zawarte w formularzu powiązania GitHub, kliknij przycisk `Zastosuj konfigurację`{.action}.

### Aktywacja powiązania GitHub

#### Sukces w powiązaniu z GitHub

Po zatwierdzeniu formularza Asocjacja GitHub zostaniesz przekierowany do zakładki MultiSite.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/banner-git-activation-ongoing.png){.thumbnail}

Zielony baner informuje, że GitHub jest aktywowany. Śledź aktywację GitHub, klikając link `Zadania w trakcie`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ongoing-task-git-activation.png){.thumbnail}

Status `W realizacji`{.action} wskazuje, że trwa przypisywanie do GitHub. Proces może potrwać kilka minut. Po wykonaniu zadania pojawia się status `Włączony`{.action}.

Możesz również śledzić postęp aktywacji GitHub w zakładce `MultiSite`{.action}. W tabeli określ wiersze odpowiadające katalogowi, który chcesz skojarzyć z GitHub. W kolumnie `Git`{.action}, w kolumnie `W realizacji`{.action}, pojawia się informacja, że GitHub jest aktywowany.

Po przypisaniu GitHub status `Aktywny`{.action} pojawia się w kolumnie `Git`{.action} dla wybranych wierszy.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Błędy skojarzenia GitHub

W tabeli w zakładce `MultiSite`{.action} znajdź wiersze odnoszące się do katalogu, który chcesz powiązać z GitHub. Jeśli pojawi się informacja `Błąd`, w kolumnie `Git` oznacza to, że wystąpił co najmniej jeden z następujących błędów:

- Klucz SSH nie został zapisany na Twoim koncie GitHub.
- Katalog instalacyjny nie jest pusty.
- Adres repozytorium GitHub nie istnieje lub jest nieprawidłowy.
- Gałąź repozytorium GitHub nie istnieje lub jej nazwa jest nieprawidłowa.

Aby poznać dokładną przyczynę błędu, zobacz informacje o ostatnim wdrożeniu. W tabeli wskaż wiersz odpowiadający nazwie domeny, której logi chcesz sprawdzić podczas ostatniego wdrożenia. Po prawej stronie linii kliknij przycisk `...`{.action}, a następnie `Informacje o ostatnim wdrożeniu`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/latest-deployment-information.png){.thumbnail}

Po zidentyfikowaniu(ych) błędu(ów) przypisz ponownie GitHub. Spróbuj ponownie wykonać operację, klikając przycisk `...`{.action} w odpowiedniej linii, a następnie `Powiąż Git`{.action}.

### Uruchomienie repozytorium GitHub na hostingu OVHcloud

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Web Cloud`{.action}, kliknij `Hosting`{.action}, a następnie wybierz odpowiedni hosting. Wybierz zakładkę `MultiSite`{.action}. W tabeli, która się wyświetli, wskaż linię odpowiadającą nazwie domeny, którą chcesz wdrożyć za pomocą GitHub. Upewnij się, że stan kolumny Git jest `Aktywny`{.action}. Kliknij przycisk `...`{.action}, a następnie `Uruchom Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/deploy-git.png){.thumbnail}

Zostanie wyświetlony komunikat potwierdzenia wraz z polem wyboru informującym, że w przypadku konfliktu podczas wdrażania możesz wymusić zdalne zmiany (repozytorium GitHub) w repozytorium lokalnym. Zaznacz lub nie tę kratkę, w zależności od dokonanego wyboru, następnie kliknij `Zatwierdź`{.action}, aby zatwierdzić wdrożenie.

> [!warning]
>
> Aby uniknąć utraty lokalnych zmian, pamiętaj o zapisaniu ich przed nadpisaniem przez zmiany w odgałęzieniu zdalnym.
>

Nowa wersja Twojej strony została pomyślnie wdrożona na Twoim hostingu OVHcloud. Jeśli inne osoby pracują nad tym samym projektem i wprowadzają zmiany w repozytorium GitHub, możesz [skonfigurować webhook na GitHub](#configureWebhook), aby zmiany zostały automatycznie wdrożone na Twoim hostingu. Dzięki temu nie musisz ręcznie wdrażać GitHub, a Twój hosting zawsze będzie aktualny.

### Zmiana nazwy domeny

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Web Cloud`{.action}, kliknij `Hosting`{.action}, a następnie wybierz odpowiedni hosting. Wybierz zakładkę `MultiSite`{.action}. W tabeli, która się wyświetli wskaż wiersz odpowiadający domenie, którą chcesz zmodyfikować. Kliknij przycisk `...`{.action}, a następnie `Zmień domenę`{.action}. Możliwe są dwa scenariusze:

#### Nazwa domeny nie jest jedyną nazwą przypisaną do tego samego katalogu

Pojawi się następujące okno:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}

Zmień wybrane informacje i kliknij na `Dalej`{.action}.

Wyświetli się drugie okno potwierdzenia z podsumowaniem zmian.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Kliknij przycisk `Zatwierdź`{.action}, aby zatwierdzić zmiany w nazwie domeny.

#### Domena jest jedyną nazwą przypisaną do katalogu

Pojawi się następujące okno:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}

Jak wskazuje komunikat, [usuń swoje powiązanie Git](#deleteGitAssociation) przed zmianą nazwy domeny.

### Odłącz domenę

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Web Cloud`{.action}, kliknij `Hosting`{.action}, a następnie wybierz odpowiedni hosting. Wybierz zakładkę `MultiSite`{.action}. W tabeli, która się wyświetli, zidentyfikuj linię odpowiadającą domenie, którą chcesz oddzielić od Twojego hostingu. Kliknij przycisk `...`{.action}, a następnie `Odłącz domenę`{.action}. Możliwe są dwa scenariusze:

#### Nazwa domeny nie jest jedyną nazwą przypisaną do tego samego katalogu

Pojawi się następujące okno.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}

Kliknij na `Zatwierdź`{.action}, aby potwierdzić odłączenie domeny.

#### Domena jest jedyną nazwą przypisaną do katalogu

Pojawi się następujące okno:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}

Jak wskazuje komunikat, [usuń swoje powiązanie Git](#deleteGitAssociation) przed odłączeniem domeny.

### Konfiguracja GitHub

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Web Cloud`{.action}, kliknij `Hosting`{.action}, a następnie wybierz odpowiedni hosting. Wybierz zakładkę `MultiSite`{.action}. W tabeli, która się wyświetla określ wiersz odpowiadający katalogowi, który chcesz skonfigurować za pomocą GitHub. Kliknij przycisk `...`{.action}, a następnie `Skonfiguruj Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

Wyświetlą się następujące informacje:

- Klucz SSH: jeśli jeszcze tego nie zrobiłeś, [zarejestruj klucz SSH na swoim koncie GitHub](#linkSSHKey).
- Rejestracja: adres repozytorium GitHub. To pole jest nieaktywne, ponieważ nie można zmienić adresu repozytorium GitHub. Aby zmienić adres repozytorium GitHub, musisz [usunąć skojarzenie Git z Twojego katalogu](#deleteGitAssociation), a następnie ponownie [powiązać katalog z Git](#associateGitRepo).
- Gałąź: nazwa gałęzi repozytorium GitHub. To pole można edytować.
- URL webhook : jeśli chcesz zoptymalizować swoje wdrożenia w GitHub, [skonfiguruj webhook na GitHubie](#configureWebhook).

### Informacje o ostatnim wdrożeniu

Po wdrożeniu repozytorium GitHub na Twoim hostingu możesz sprawdzić informacje dotyczące ostatniego wdrożenia, takie jak błędy, testy lub inne przydatne informacje.

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Web Cloud`{.action}, kliknij `Hosting`{.action}, a następnie wybierz odpowiedni hosting. Wybierz zakładkę `MultiSite`{.action}. W tabeli, która się wyświetla wskaż wiersz odpowiadający domenie, której logi chcesz sprawdzić podczas ostatniego wdrożenia. Po prawej stronie linii kliknij przycisk `...`{.action}, a następnie `Informacje o ostatnim wdrożeniu`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/latest-deployment-information.png){.thumbnail}

Na tym ekranie znajdziesz wszystkie informacje dotyczące najnowszego wdrożenia.

### Usuń powiązanie GitHub <a name="deleteGitAssociation"></a>

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Web Cloud`{.action}, kliknij `Hosting`{.action}, a następnie wybierz odpowiedni hosting. Wybierz zakładkę `MultiSite`{.action}. W tabeli, która się wyświetla określ wiersz odpowiadający katalogowi, którego powiązanie chcesz usunąć za pomocą GitHub. Kliknij przycisk `...`{.action}, a następnie `Usuń Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-button.png){.thumbnail}

Pojawi się następujące okno:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}

Poinformujemy, że usunięcie zostanie zastosowane do wszystkich domen przypisanych do katalogu. Zaznacz pole wyboru `Czy chcesz wyczyścić zawartość katalogu <your_directory>?`{.action} jeśli chcesz również usunąć zawartość (foldery i pliki) z katalogu.

1\.	Po zaznaczeniu tego pola wyboru pojawi się następujące okno:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}

Kliknij przycisk `Zatwierdź`{.action}, aby potwierdzić usunięcie powiązania GitHub z katalogu i jego zawartości.

2\.	Jeśli nie zaznaczysz tego pola, wyświetli się następujące okno:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}

Kliknij przycisk `Zatwierdź`{.action}, aby potwierdzić usunięcie powiązania GitHub z Twojego katalogu.

### Konfiguracja interfejsu webhook na GitHubie

#### Pobierz adres URL elementu webhook

> [!primary]
>
> Jeśli korzystasz już ze skojarzenia GitHub, skopiuj adres URL elementu webhook i przejdź do etapu "[Konfiguruj element webhook](#configureWebhook)".
>

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Web Cloud`{.action}, kliknij `Hosting`{.action}, a następnie wybierz odpowiedni hosting. Wybierz zakładkę `MultiSite`{.action}. W tabeli, która się wyświetla określ wiersz odpowiadający katalogowi, w którym chcesz skonfigurować element webhook. Kliknij przycisk `...`{.action}, a następnie `Skonfiguruj Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

Na dole formularza, który się wyświetla znajdź adres pola `URL webhooka`{.action} i skopiuj go. Teraz zapisz adres URL i skonfiguruj webhook na koncie GitHub.

#### Skonfiguruj webhook <a name="configureWebhook"></a>

Zaloguj się na swoje konto GitHub i przejdź do repozytorium, w którym chcesz skonfigurować webhook. Przejdź do zakładki `Settings`{.action}, a następnie w bocznym menu ustawień kliknij `Webhooks`{.action}. Kliknij przycisk `Add webhook`{.action}, aby przejść do formularza:

- **Payload URL**: wprowadź adres URL podany w formularzu powiązania GitHub (`URL webhooka`{.action}).
- **Content type** : wybierz `application/json`{.action} jako typ treści dla przesłanych danych.
- **Secret**: klucz jest opcjonalny. GitHub będzie go używać do podpisywania wiadomości wysyłanych przez webhook, zwiększając tym samym bezpieczeństwo.
- **SSL verification** : jeśli Twoja strona WWW używa protokołu HTTPS, pozostaw tę opcję włączoną, aby zwiększyć bezpieczeństwo.
- **Which events would you like to trigger this webhook ?** : wybierz zdarzenia, które spowodują wysłanie funkcji webhook. W przypadku wdrożenia automatycznego, `Just the push event`{.action} (Just the push event) jest często wystarczające, ale możesz wybrać `Send me everything`{.action}, aby otrzymywać powiadomienia o wszystkich zdarzeniach.
- **Active** : upewnij się, że zaznaczone jest pole wyboru pozwalające na aktywację elementu webhook.

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