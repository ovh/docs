---
title: 'Eksportowanie witryny internetowej'
slug: eksportowanie-witryna-internetowa
excerpt: 'Dowiedz się, jak wyeksportować swoją witrynę internetową OVHcloud'
section: 'Pierwsze kroki'
order: 2
---

**Ostatnia aktualizacja z dnia 14-01-2020**

## Wprowadzenie

Niniejszy przewodnik przedstawia etapy procedury eksportu wszystkich elementów Twojej witryny internetowej w standardowym formacie z poziomu [hostingu WWW OVHcloud](https://www.ovh.pl/hosting/){.external}.

**Dowiedz się, jak wyeksportować swoją witrynę internetową w hostingu OVHcloud.**

## Wymagania początkowe

- Posiadanie [hostingu WWW OVHcloud](https://www.ovh.pl/hosting/){.external}
- Dostęp do [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

## W praktyce

### Etap 1: pobranie plików z Twojej przestrzeni dyskowej FTP

#### 1.1 Zaloguj się do przestrzeni dyskowej.

Aby zalogować się do przestrzeni dyskowej, powinieneś posiadać następujące elementy:

- aktywne konto FTP lub SSH;
- hasło powiązane z kontem FTP lub SSH;
- adres serwera;
- port połączenia z serwerem.

Dane te otrzymasz w wiadomości e-mail potwierdzającej instalację hostingu. Jeśli nie posiadasz wskazanych wyżej informacji, zaloguj się do [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} w sekcji „Web” i kliknij `Hostingi`{.action} na pasku usług po lewej stronie. Wybierz odpowiedni hosting i przejdź do karty `FTP - SSH`{.action}. 

![export-website](images/export-website-step1-1.png){.thumbnail}

Wyświetlą się wówczas dane dotyczące Twojej przestrzeni dyskowej. Dzięki nim będziesz mógł odnaleźć dane potrzebne do zalogowania się do przestrzeni dyskowej. Jeśli potrzebujesz więcej informacji, zapoznaj się z przewodnikiem: [„Logowanie do przestrzeni dyskowej hostingu WWW”](https://docs.ovh.com/pl/hosting/logowanie-przestrzen-dyskowa-ftp-hosting-web/){.external}. W razie utraty hasła zapoznaj się z instrukcjami zawartymi w przewodniku[„Zmiana hasła do konta FTP”](https://docs.ovh.com/pl/hosting/zmiana-hasla-konto-ftp/){.external}.

Gdy będziesz posiadał już wszystkie potrzebne informacje, możesz pobrać pliki z przestrzeni dyskowej na dwa sposoby:

- **program kompatybilny z protokołem FTP lub SFTP**: zainstaluj na Twoim komputerze odpowiedni program, np. [ FileZilla](https://docs.ovh.com/pl/hosting/hosting_www_przewodnik_dotyczacy_korzystania_z_programu_filezilla/). Jeśli chcesz uzyskać pomoc w zakresie korzystania z tego programu, skontaktuj się z jego producentem.

- **dostęp przez SSH**: wpisz odpowiednie komendy w terminalu, aby połączyć się z przestrzenią dyskową. Do tego dostępu konieczne są bardziej zaawansowane umiejętności techniczne oraz [posiadanie hostingu OVHcloud](https://www.ovh.pl/hosting/){.external}. Aby uzyskać więcej informacji, zapoznaj się z naszą instrukcją [„Korzystanie z dostępu SSH do hostingu WWW”](https://docs.ovh.com/pl/hosting/hosting_www_ssh_na_hostingu/){.external}. 

#### 1.2 Pobranie plików z przestrzeni dyskowej.

Po zalogowaniu się do przestrzeni dyskowej pobierz pliki Twojej witryny. **Zalecamy szczególną ostrożność przy wyborze katalogu, w którym znajdują się pliki Twojej witryny.** W przypadku instalacji tylko jednej strony WWW na hostingu, pliki powinny znaleźć się w katalogu „www”. Jeśli jednak zainstalowałeś na Twoim hostingu więcej witryn WWW, z pewnością skonfigurowałeś różne katalogi dla domen w opcji **MultiSite**.

Aby sprawdzić, w którym katalogu powinna zostać opublikowana strona WWW, przejdź do karty `MultiSite`{.action} w panelu klienta OVHcloud. W tabeli, która się wyświetla dla wybranej domeny znajdź `Katalog główny`{.action}.

![export-website](images/export-website-step1-2.png){.thumbnail}

### Etap 2: utworzenie i pobranie kopii bazy danych (opcjonalnie)

> [!primary]
>
> Ten etap jest opcjonalny, jeśli Twoja witryna nie wykorzystuje bazy danych.
>

Z naszego przewodnika dowiesz się, jak utworzyć i pobrać kopię zapasową bazy danych:
[„Tworzenie i pobieranie kopii zapasowej bazy danych na hostingu WWW”](https://docs.ovh.com/pl/hosting/eksport-bazy-danych/){.external}.

Jeśli korzystasz z **Prywatnego serwera SQL** w Twojej witrynie, zapoznaj się z sekcją poświęconą kopii zapasowej w naszym przewodniku:
[„Wszystko o prywatnym serwerze SQL”](https://docs.ovh.com/pl/hosting/prywatny_sql/){.external}.

### Etap 3: pobranie logów z hostingu OVHcloud

Jeśli chcesz pobrać historię logów Twojej witryny, możesz to zrobić z poziomu planu hostingu WWW.

Kliknij przycisk `Hosting`{.action} na pasku usług po lewej stronie i wybierz odpowiednie rozwiązanie. Kliknij przycisk`Plus +`{.action}, a następnie `Statystyki i logi`{.action}.

![export-website](images/export-website-step3-1.png){.thumbnail}

Następnie kliknij link pod napisem**Logi** :

![export-website](images/export-website-step3-2.png){.thumbnail}

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

![export-website](images/export-website-step3-3.png){.thumbnail}

Po wybraniu logów danego typu i z konkretnego miesiąca, są one prezentowane dzień po dniu:

![export-website](images/export-website-step3-4.png){.thumbnail}

## Sprawdź również

[Logowanie do przestrzeni dyskowej hostingu](https://docs.ovh.com/pl/hosting/logowanie-przestrzen-dyskowa-ftp-hosting-web/){.external}.

[Zmiana hasła do konta FTP](https://docs.ovh.com/pl/hosting/zmiana-hasla-konto-ftp/){.external}.

[Korzystanie z programu FileZilla na Twoim hostingu](https://docs.ovh.com/pl/hosting/hosting_www_przewodnik_dotyczacy_korzystania_z_programu_filezilla/){.external}.

[Korzystanie z dostępu przez SSH do hostingu WWW](https://docs.ovh.com/pl/hosting/hosting_www_ssh_na_hostingu/){.external}. 

[Tworzenie i pobieranie kopii zapasowej bazy danych na hostingu WWW](https://docs.ovh.com/pl/hosting/eksport-bazy-danych/){.external}.

[Wszystko o prywatnym serwerze SQL](https://docs.ovh.com/pl/hosting/prywatny_sql/){.external}.

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en>.
