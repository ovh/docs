---
title: "Hosting WWW - Jak zarządzać użytkownikami FTP"
excerpt: "Dowiedz się, jak tworzyć, modyfikować lub usuwać użytkowników FTP na Twoim hostingu OVHcloud"
updated: 2024-10-07
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Wraz z pakietami hostingowymi OVHcloud zyskujesz dostęp do przestrzeni FTP. Przestrzeń ta pozwala na przykład na umieszczanie w Internecie plików z Twoich stron www lub Twoich aplikacji. Do przestrzeni dyskowej możesz zalogować się, używając protokołu FTP lub SSH oraz powiązanego z nim hasła. Prowadząc działalność, możesz mieć kilku użytkowników FTP dla swoich współpracowników.

**Dowiedz się, jak tworzyć, modyfikować i usuwać użytkowników FTP na Twoim hostingu OVHcloud.**

> [!primary]
>
> Niniejszy przewodnik dotyczy wyłącznie hostingu **Pro** lub **Performance**. Tylko te 2 oferty pozwalają na aktywację kilku użytkowników FTP.

## Wymagania początkowe

- Posiadanie kompatybilnego [hostingu OVHcloud](/links/web/hosting).
- Dostęp do [panelu klienta OVHcloud](/links/manager), sekcja `Web Cloud`{.action}.

## W praktyce

### Tworzenie nowego użytkownika FTP na Twoim hostingu <a name="create-ftp-user"></a>

Aby utworzyć nowego użytkownika FTP na Twoim hostingu za pośrednictwem Panelu klienta OVHcloud, wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu rozwijane `Hosting`{.action}.
4. Wybierz odpowiedni hosting.
5. Na stronie, która się wyświetli kliknij zakładkę `FTP-SSH`{.action}.
6. Aby utworzyć nowego użytkownika FTP, kliknij przycisk `Utwórz użytkownika`{.action} po prawej stronie. W zależności od rozdzielczości ekranu przycisk może znajdować się w dolnej części strony.

![FTP-SSH create user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user.png){.thumbnail}

Pojawi się następujące okno:

![FTP-SSH create user step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-1.png){.thumbnail}

Wpisz parametry nowego użytkownika FTP, definiując następujące elementy / formularze:

- *Użytkownik* : odnosi się do pełnej nazwy użytkownika FTP, którą określisz dla swojego współpracownika. Serwer ten pozwoli Ci na zalogowanie się do przestrzeni dyskowej FTP Twojego hostingu. Niezależnie od tego, który nowy użytkownik FTP utworzy na Twoim hostingu, wybrana nazwa będzie zawsze poprzedzona głównym loginem FTP na Twoim hostingu, a następnie myślnikiem.
- Na przykład, jeśli Twoim głównym loginem FTP jest `FTPLogin` i chcesz utworzyć nowego użytkownika FTP `user1`, loginem FTP nowego użytkownika będzie `FTPLogin-user1`.

- *Katalog główny* : jest to nazwa katalogu lub podkatalogu, w którym użytkownik FTP może logować się do przestrzeni dyskowej FTP.
- Na przykład, jeśli Twój pracownik potrzebuje dostępu do całej przestrzeni dyskowej FTP Twojego hostingu, pozostaw ten formularz pusty. W przeciwnym razie podaj nazwę katalogu, do którego będzie miał dostęp (przykłady: `www`, `blog`, `website1`, `www/development`, etc.).

- *Protokoły logowania* : pozwala na zdefiniowanie protokołu lub protokołów, których użytkownik FTP będzie mógł używać do łączenia się z przestrzenią dyskową FTP Twojego hostingu.
- Na przykład, jeśli wybierzesz trzecią opcję (protokoły **FTP**,**SFTP** i **SSH**), użytkownik FTP będzie mógł łączyć się z trzema protokołami. Dzięki temu pracownik, który będzie używał tego użytkownika FTP, będzie mógł na przykład zalogować się za pomocą wiersza poleceń przez protokół **SSH**, ale także zarządzać treścią FTP z poziomu tego samego protokołu.

Po wpisaniu ustawień kliknij przycisk `Dalej`{.action}, aby przejść do etapu 2 tworzenia nowego użytkownika FTP:

![FTP-SSH create user step 2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-2.png){.thumbnail}

W drugim kroku ustaw i potwierdź w 2 formularzach hasło nowego użytkownika FTP. Aby przejść do etapu 3, postępuj zgodnie z polityką haseł zamieszczoną poniżej 2 formularzy.

Po wybraniu i potwierdzeniu hasła kliknij przycisk `Dalej`{.action}, aby przejść do etapu 3 tworzenia nowego użytkownika FTP:

![FTP-SSH create user step 3](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-3.png){.thumbnail}

Ten ostatni etap podsumowuje wybrane ustawienia nowego użytkownika FTP. Jeśli te parametry odpowiadają Twoim potrzebom, kliknij `Zatwierdź`{.action}, aby dokończyć operację tworzenia nowego użytkownika FTP na Twoim hostingu.

> [!primary]
>
> Po zatwierdzeniu zlecenia utworzenia konta, przyjęcie nowego użytkownika do Twojego hostingu może potrwać do 15 minut.

W razie potrzeby przetestuj nowego użytkownika FTP za pomocą przewodnika "[Logowanie do przestrzeni dyskowej FTP hostingu](/pages/web_cloud/web_hosting/ftp_connection)".

### Zmiana użytkownika FTP

Aby zmodyfikować użytkownika FTP, wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu rozwijane `Hosting`{.action}.
4. Wybierz odpowiedni hosting.
5. Na stronie, która się wyświetli kliknij zakładkę `FTP-SSH`{.action}.
6. W tabeli u dołu strony i w prawej części wiersza odpowiadającego danemu użytkownikowi FTP kliknij przycisk`...`{.action}, a następnie kliknij `Zmień`{.action}.

![FTP-SSH edit user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/edit-user1.png){.thumbnail}

Pojawi się następujące okno:

![FTP-SSH edit user step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/modify-a-user-step1.png){.thumbnail}

W tym miejscu można zmienić *katalog główny* i *Protokoły logowania* zdefiniowane dla użytkownika FTP. Można również edytować nazwę użytkownika FTP i powiązane z nim hasło. Więcej informacji na temat *katalog główny* i *Protokoły logowania* znajdziesz w sekcji "[Tworzenie nowego użytkownika FTP na Twoim hostingu](#create-ftp-user)" znajdującej się powyżej tego przewodnika.

W razie potrzeby możesz również *Wyłącz użytkownika* zaznaczając odpowiednie pole. Opcja ta jest przydatna, jeśli chcesz uniemożliwić pracownikowi dostęp do Twojej przestrzeni FTP bez usuwania logów FTP i SSH z nią związanych. Logi te pozwolą Ci określić operacje wykonywane przez Twojego pracownika w przypadku wykrycia niepożądanych interwencji na Twoim hostingu.

Po wprowadzeniu modyfikacji kliknij przycisk `Dalej`{.action}, aby przejść do etapu 2. Sprawdź zlecenia zmian, następnie kliknij `Zatwierdź`{.action}, aby dokończyć operację zmiany ustawień użytkownika FTP na Twoim hostingu.

> [!primary]
>
> Jeśli chcesz zmienić tylko hasło użytkownika FTP, zapoznaj się z naszym przewodnikiem "[Zmień hasło użytkownika FTP](/pages/web_cloud/web_hosting/ftp_change_password)".
>
> Jeśli chcesz zmienić nazwę użytkownika FTP, pamiętaj, że ta funkcja jest niedostępna. Musisz [utworzyć nowego użytkownika FTP](#create-ftp-user) z nową nazwą użytkownika. Następnie możesz [usunąć starego użytkownika FTP](#delete-ftp-user).

### Usuń użytkownika FTP <a name="delete-ftp-user"></a>

Aby usunąć użytkownika FTP, wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu rozwijane `Hosting`{.action}.
4. Wybierz odpowiedni hosting.
5. Na stronie, która się wyświetli kliknij zakładkę `FTP-SSH`{.action}.
6. W tabeli u dołu strony i w prawej części wiersza odpowiadającego danemu użytkownikowi FTP kliknij przycisk `...`{.action}, a następnie kliknij `Usuń`{.action}.

![FTP-SSH delete user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/delete-user1.png){.thumbnail}

Pojawi się następujące okno:

![FTP-SSH delete user confirmation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/delete-user1-confirmation.png){.thumbnail}

Kliknij przycisk `Zatwierdź`{.action}, aby trwale usunąć użytkownika FTP z Twojego hostingu.

## Sprawdź również

[Logowanie do przestrzeni dyskowej FTP hostingu](/pages/web_cloud/web_hosting/ftp_connection).

[Zmień hasło użytkownika FTP](/pages/web_cloud/web_hosting/ftp_change_password).

[Korzystanie z połączenia SSH na hostingu](/pages/web_cloud/web_hosting/ssh_on_webhosting).

[Użyj PuTTY do logowania przez SSH](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Korzystaj z programu FileZilla na Twoim hostingu](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Korzystaj z Cyberduck na Twoim hostingu](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community). 