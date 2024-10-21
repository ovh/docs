---
title: "Jak przesyłać i pobierać dane z serwera dedykowanego za pośrednictwem SFTP"
excerpt: 'Dowiedz się, jak przesłać dane z serwera dedykowanego na komputer lokalny i na odwrót'
updated: 2024-02-23
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

W procesie migracji może być konieczne pobranie danych z serwera dedykowanego, a następnie przesłanie ich na inną maszynę. Protokół Secure File Transfer Protocol (SFTP) umożliwia szybki i łatwy transfer plików przez bezpieczne połączenie SSH.

**Tutorial ten wyjaśnia, jak przesyłać lub pobierać dane z serwera dedykowanego za pomocą SFTP.**

> [!warning]
>Niniejszy przewodnik wyjaśnia, jak korzystać z jednego lub kilku rozwiązań OVHcloud za pomocą zewnętrznych narzędzi i opisuje działania, jakie należy podjąć w konkretnym przypadku. Może być konieczne dostosowanie instrukcji do Twojego przypadku.
>
>W przypadku trudności w stosowaniu tych instrukcji, zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/directory/). Więcej informacji znajdziesz w sekcji [Sprawdź](#gofurther) ten przewodnik.
>

## Wymagania początkowe

- Serwer [dedykowany](https://www.ovhcloud.com/pl/bare-metal/){.external}, na którym zainstalowana jest dystrybucja GNU/Linux.
- Klient FTP, który obsługuje połączenia SFTP (ten przewodnik dokumentuje korzystanie z [FileZilla](https://filezilla-project.org/){.external}).
- Dostęp administracyjny przez SSH do Twojego serwera.

## W praktyce

### Użyj programu FileZilla do pobierania i upuszczania danych

Protokół SFTP może być używany do przesyłania plików za pomocą bezpiecznego połączenia (SSH). W przypadku tego scenariusza istnieją dwie możliwości: lub masz normalny dostęp do serwera, lub możesz łączyć się z nim w [trybie rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

Domyślnie serwer z systemem operacyjnym GNU/Linux będzie miał dostęp SSH przez port 22. Być może zmodyfikowałeś już ten port (na przykład postępując zgodnie z [naszym przewodnikiem dotyczącym bezpieczeństwa serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)).

#### **Jeśli masz dostęp do serwera**

W graficznym interfejsie FileZilla wprowadź adres IP Twojego serwera w polu `Host`, a także nazwę użytkownika i hasło w odpowiednich polach. Jeśli chodzi o pole `Port`, wprowadź "22" lub port, który słucha Twoja usługa SSH, jeśli ją zmodyfikowałeś.

> [!warning]
> Pamiętaj, że dostęp do folderu użytkownika `root` przez SFTP jest możliwy tylko przy użyciu poświadczeń konta użytkownika. Jeśli chcesz uzyskać zdalny dostęp do tego folderu, zapoznaj się z informacjami dotyczącymi aktywacji tego połączenia w naszym [Przewodniku po koncie użytkownika](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

Po nawiązaniu połączenia pojawi się drzewo plików w odległej części `Strony`.

![site distant sftp](images/sftp_sd_01.png){.thumbnail}

W poniższym przykładzie dane do pobrania znajdują się w katalogu "/home/data". Możesz przeciągnąć i upuścić pliki do pobrania z prawej strony (zdalna `strona`) do lewego okienka (`strona lokalna`), aby je zapisać na lokalnym urządzeniu.

Aby umieszczać pliki na serwerze, przeciągnij i upuść pliki z lokalnego folderu do zdalnego docelowego folderu znajdującego się w prawym okienku.

Postępy transferu danych wyświetlają się wówczas na dole interfejsu FileZilla.

![postęp transferu sftp](images/sftp_sd_02.png){.thumbnail}

#### **Jeśli Twój serwer znajduje się w trybie Rescue**

W trybie rescue najpierw zamontuj partycję. W tym celu postępuj zgodnie z instrukcjami zawartymi w [tym przewodniku](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

Po zamontowaniu partycji kliknij klienta FileZilla w sposób opisany powyżej, korzystając z portu 22 do połączenia z serwerem.

> [!primary]
>
> Dane do logowania, których używasz są wysyłane e-mailem po włączeniu trybu Rescue na Twoim serwerze.
>

Jeśli poprawnie utworzyłeś punkt montowania, dane znajdują się w katalogu "/mnt" ("/mnt/home/data" w tym przykładzie).

![tryb rescue - sftp na zdalnej stronie](images/sftp_sd_03.png){.thumbnail}

## Sprawdź również

[Uruchamianie i korzystanie z trybu Rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Zabezpieczanie serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

Dołącz do społeczności naszych użytkowników na <https://community.ovh.com/en/>.
