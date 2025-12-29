---
title: "Eksportowanie witryny internetowej"
excerpt: "Dowiedz się, jak wyeksportować swoją witrynę internetową OVHcloud"
updated: 2025-10-28
---

## Wprowadzenie 

Niniejszy przewodnik przedstawia etapy procedury eksportu wszystkich elementów Twojej witryny internetowej w standardowym formacie z poziomu [hostingu WWW OVHcloud](/links/web/hosting).

**Dowiedz się, jak wyeksportować swoją witrynę internetową w hostingu OVHcloud.**

## Wymagania początkowe

- Posiadanie [hostingu WWW OVHcloud](/links/web/hosting)
- Dostęp do [panelu klienta OVHcloud](/links/manager).

## W praktyce

### 1 - Pobranie plików z Twojej przestrzeni dyskowej FTP

#### 1.1 Zaloguj się do przestrzeni dyskowej.

Aby zalogować się do przestrzeni dyskowej, powinieneś posiadać następujące elementy:

- aktywne konto FTP lub SSH;
- hasło powiązane z kontem FTP lub SSH;
- adres serwera;
- port połączenia z serwerem.

Dane te otrzymasz w wiadomości e-mail potwierdzającej instalację hostingu.

Jeśli nie posiadasz wskazanych wyżej informacji, kliknij poniższe zakładki, aby wyświetlić kolejne **4** etapy.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etap 4**
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

Po zalogowaniu się do swojego obszaru magazynowania, pozostaje Ci tylko pobrać pliki swojej strony internetowej. **Zwracamy Ci szczególne uwagę na katalog, w którym zainstalowałeś swoją stronę**. W przypadku typowego użycia, strona powinna zostać pobrana do katalogu "www". Jednak jeśli korzystasz z hostingu, aby hostować wiele stron internetowych, prawdopodobnie zadeklarowałeś wiele stron internetowych.

Aby sprawdzić katalog, w którym znajduje się Twoja strona internetowa, przejdź do karty `MultiSite`{.action} w Panelu klienta OVHcloud. W wyświetlonej tabeli, dla wybranego domeny, sprawdź `Katalog główny`{.action}, który jest wyświetlany.

![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

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

Jeśli chcesz pobrać historię logów Twojej witryny, możesz to zrobić z poziomu planu hostingu WWW.

Kliknij przycisk `Hosting`{.action} i wybierz odpowiednie rozwiązanie. Kliknij zakładkę `Statystyki i logi`{.action}.

![statistics-and-logs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs.png){.thumbnail}

Następnie kliknij link pod napisem `Sprawdź logi`{.action}:

![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/view-logs.png){.thumbnail}

Pojawi się okno z różnymi typami dostępnych logów. Są one podzielone według miesięcy:

| Typ  	| Opis                                                                                                                                                                                         	|
|-------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Web   	| Tutaj znajdziesz logi dotyczące odwiedzin Twojej witryny, a także działań wykonywanych z jej poziomu. Dzięki temu możesz wykryć np. próby włamania. 	|
| FTP   	| w tych logach są przechowywane połączenia z FTP.                                                                                                                     	|
| Error 	| różne błędy generowane przez Twoją witrynę.                                                                                                                                                    	|
| CGI   	| przeprowadzone wywołania skryptów cgi.bin.                                                                                                                                     	|
| out   	| statystyki hostingu w zakresie wywołań zewnętrznych.                                                                                                                  	|
| ssh   	| te logi przedstawiają różne połączenia zrealizowane za pomocą protokołu SSH.                                                                                                                      	|
| cron  	| wynik realizacji zaplanowanych przez Ciebie zadań.                                                                                                                                                	|

![export-website](/pages/assets/screens/other/web-tools/logs/raw-logs-general.png){.thumbnail}

Po wybraniu logów danego typu i z konkretnego miesiąca, są one prezentowane dzień po dniu:

![export-website](/pages/assets/screens/other/web-tools/logs/raw-logs.png){.thumbnail}

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