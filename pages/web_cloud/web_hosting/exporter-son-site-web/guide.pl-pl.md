---
title: "Eksportowanie witryny internetowej"
excerpt: "Dowiedz się, jak wyeksportować swoją witrynę internetową OVHcloud"
updated: 2026-05-04
---

## Wprowadzenie 

Niniejszy przewodnik przedstawia etapy procedury eksportu wszystkich elementów Twojej witryny internetowej w standardowym formacie z poziomu [hostingu WWW OVHcloud](/links/web/hosting).

**Dowiedz się, jak wyeksportować swoją witrynę internetową w hostingu OVHcloud.**

## Wymagania początkowe

- Posiadanie [hostingu WWW OVHcloud](/links/web/hosting)

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

### 1 - Pobranie plików z Twojej przestrzeni dyskowej FTP

#### 1.1 Zaloguj się do przestrzeni dyskowej.

Aby zalogować się do przestrzeni dyskowej, powinieneś posiadać następujące elementy:

- aktywne konto FTP lub SSH;
- hasło powiązane z kontem FTP lub SSH;
- adres serwera;
- port połączenia z serwerem.

Dane te otrzymasz w wiadomości e-mail potwierdzającej instalację hostingu.

Jeśli nie posiadasz wskazanych wyżej informacji, kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Krok 3**
>>
>> Wyświetlą się wówczas dane dotyczące Twojej przestrzeni dyskowej. Dzięki nim będziesz mógł odnaleźć dane potrzebne do zalogowania się do przestrzeni dyskowej.
>>
>> ![FTP - SSH tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-pro.png){.thumbnail}
>>
>> Jeśli potrzebujesz więcej informacji, zapoznaj się z przewodnikiem: "[Logowanie do przestrzeni dyskowej hostingu WWW](/pages/web_cloud/web_hosting/ftp_connection)".
>>
>> W razie utraty hasła zapoznaj się z instrukcjami zawartymi w przewodniku"[Zmiana hasła do konta FTP](/pages/web_cloud/web_hosting/ftp_change_password)".

Gdy będziesz posiadał już wszystkie potrzebne informacje, możesz pobrać pliki z przestrzeni dyskowej na dwa sposoby:

- **Program kompatybilny z protokołem FTP lub SFTP**: zainstaluj na Twoim komputerze odpowiedni program, np. [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide). Jeśli chcesz uzyskać pomoc w zakresie korzystania z tego programu, skontaktuj się z jego producentem.

- **Dostęp przez SSH**: wpisz odpowiednie komendy w terminalu, aby połączyć się z przestrzenią dyskową. Do tego dostępu konieczne są bardziej zaawansowane umiejętności techniczne oraz [posiadanie hostingu OVHcloud](/links/web/hosting). Aby uzyskać więcej informacji, zapoznaj się z naszą instrukcją "[Korzystanie z dostępu SSH do hostingu WWW](/pages/web_cloud/web_hosting/ssh_on_webhosting)". 

#### 1.2 Pobranie plików z przestrzeni dyskowej.

Po zalogowaniu się do swojego miejsca przechowywania i w zależności od witryn internetowych hostowanych na nim, może pojawić się kilka folderów.

W razie potrzeby wcześniej zidentyfikuj w swoim hostingu nazwę katalogu głównego, w którym znajduje się Twoja witryna internetowa. Aby to zrobić, kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

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
>> W tabeli, która się pojawi, dla wybranej witryny internetowej sprawdź `Katalog główny`{.action}, który jest wyświetlany.
>>
>> ![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

Nadal zalogowany do swojego miejsca przechowywania, musisz tylko pobrać pliki swojej witryny internetowej, uzyskując dostęp do wcześniej zidentyfikowanego katalogu głównego.

### 2 - Utworzenie i pobranie kopii bazy danych (opcjonalnie)

> [!primary]
>
> Ten etap jest opcjonalny, jeśli Twoja witryna nie wykorzystuje bazy danych.
>

Z naszego przewodnika dowiesz się, jak utworzyć i pobrać kopię zapasową bazy danych:
"[Tworzenie i pobieranie kopii zapasowej bazy danych na hostingu WWW](/pages/web_cloud/web_hosting/sql_database_export)".

Jeśli korzystasz z **serwera Web Cloud Databases** w Twojej witrynie, zapoznaj się z sekcją poświęconą kopii zapasowej w naszym przewodniku:
[Tworzenie i eksportowanie bazy danych na serwerze baz danych](/pages/web_cloud/web_cloud_databases/save-export-on-database-server).

### 3 - Pobranie logów z hostingu OVHcloud

Zapoznaj się z naszym dedykowanym przewodnikiem: [Hosting WWW - Sprawdzanie statystyk i logów strony internetowej](/pages/web_cloud/web_hosting/logs_and_statistics).

## Sprawdź również

[Logowanie do przestrzeni dyskowej hostingu](/pages/web_cloud/web_hosting/ftp_connection).

[Zmiana hasła do konta FTP](/pages/web_cloud/web_hosting/ftp_change_password).

[Korzystanie z programu FileZilla na Twoim hostingu](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide).

[Korzystanie z dostępu przez SSH do hostingu WWW](/pages/web_cloud/web_hosting/ssh_on_webhosting). 

[Tworzenie i pobieranie kopii zapasowej bazy danych na hostingu WWW](/pages/web_cloud/web_hosting/sql_database_export).

[Pierwsze kroki z usługą Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community). 
