---
title: "Logowanie do przestrzeni dyskowej FTP hostingu"
excerpt: "Dowiedz się, jak się zalogować do przestrzeni dyskowej FTP Twojego hostingu WWW OVHcloud"
updated: 2023-06-01
---

**Ostatnia aktualizacja z dnia 01-06-2023**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie 

Wraz z pakietami hostingowymi OVHcloud zyskujesz dostęp do przestrzeni dyskowej FTP umożliwiającej umieszczanie w Internecie plików z Twoich stron WWW lub aplikacji. Dostęp do przestrzeni dyskowej jest możliwy przez użytkownika FTP lub SSH z przypisanymi do niego hasłami.

**Dowiedz się, jak się zalogować do przestrzeni dyskowej FTP Twojego hostingu WWW OVHcloud.**

## Wymagania początkowe

- Posiadanie [hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external}
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, sekcja `Web Cloud`{.action}

> [!primary]
> Tylko hosting WWW **Pro** lub **Performance** umożliwia aktywację kilku użytkowników FTP i połączenie przez SSH.
>

## W praktyce

### Etap 1: pobierz informacje potrzebne do zalogowania

Aby zalogować się do przestrzeni dyskowej FTP, pobierz następujące elementy:

- aktywne konto FTP lub SSH;
- hasło powiązane z kontem FTP lub SSH;
- adres serwera FTP lub SSH na Twoim hostingu;
- port połączenia z serwerem FTP lub SSH Twojego hostingu.

> [!primary]
>
> Dane te otrzymasz w wiadomości e-mail potwierdzającej instalację hostingu podczas jego rejestracji. Są one dostępne w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
> 
> **Jeśli dysponujesz już tymi elementami**, przejdź bezpośrednio do etapu 2  [niniejszego przewodnika](#ftp_storage_access).
> 

Jeśli nie posiadasz tych elementów, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i przejdź do sekcji `Web Cloud`{.action}. W kolumnie po lewej stronie kliknij pozycję 'Hosting{.action}. Wybierz odpowiedni hosting i przejdź do zakładki `FTP - SSH`{.action}. 

Wyświetlą się wówczas informacje dotyczące Twojej przestrzeni dyskowej oraz tabela zawierająca nazwy użytkowników FTP i SSH utworzonych na Twoim hostingu.

![ftpconnect](images/connect-ftp-step1.png){.thumbnail}

> [!primary]
>
> Jeśli chcesz utworzyć nowego użytkownika FTP/SSH z tej samej strony, kliknij przycisk `Utwórz użytkownika`{.action} z prawej strony.
> Zdefiniuj rozszerzenie nazwy nowego `Użytkownik`{.action} i `Folder główny`{.action}, w którym użytkownik będzie mógł działać, a następnie kliknij `Dalej`{.action}.
> Wybierz hasło dla tego nowego konta użytkownika, kliknij na `Dalej`{.action}, następnie kliknij na `Potwierdź`{.action}.
>

Wszystkie elementy potrzebne do zalogowania się do przestrzeni dyskowej FTP znajdują się na tej samej stronie.

Poniżej znajduje się opis najważniejszych informacji wyświetlanych na stronie `FTP-SSH`:

- **Serwer FTP i SFTP** : adres serwera FTP hostingu pozwalający na dostęp do przestrzeni dyskowej FTP. Używając na przykład oprogramowania FTP za pomocą protokołu FTP lub SFTP.

> Klasycznym portem połączenia jest port "21". Użyj portu "22", aby połączyć się przez protokół SFTP (w przypadku gdy jest on aktywny)

- **Serwer SSH**: adres serwera SSH na hostingu umożliwiający dostęp do przestrzeni dyskowej FTP. Używając terminala przez protokół SSH.

> Port połączenia SSH to port "22".

- **Login główny**: główny identyfikator FTP utworzony na Twoim hostingu. Możesz znaleźć wszystkich użytkowników (S)FTP Twojego hostingu w kolumnie "Login" tabeli.

> [!primary]
>
> W zależności od oferty [hosting OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external}, którą posiadasz, niektóre z informacji opisanych powyżej (zwłaszcza dotyczących SSH) mogą się nie pojawić.
>

Jeśli nie znasz hasła użytkownika FTP lub SSH, zapoznaj się z naszym przewodnikiem "[Zmiana hasła do konta FTP](/pages/web_cloud/web_hosting/ftp_change_password)".

![ftpconnect](images/connect-ftp-step2.png){.thumbnail}

W tym momencie dysponujesz wszystkimi elementami pozwalającymi na zalogowanie się do przestrzeni dyskowej FTP.

### Etap 2: ddostęp do przestrzeni dyskowej FTP <a name="ftp_storage_access"></a>

Połączenie z przestrzenią dyskową FTP można wykonać na kilka sposobów. Przejdź do opisu operacji, której chcesz użyć.

- [1. Logowanie przez "FTP Explorer"](#ftpexplorer): pozwala na dostęp do Twojej przestrzeni dyskowej FTP z poziomu przeglądarki internetowej.

- [2. Połączenie przez program FTP](#ftpsoftware): umożliwia dostęp do Twojej przestrzeni dyskowej FTP przy użyciu programu (takiego jak [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) lub [Cyberduck](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)). 
Najpierw zainstaluj wybrany program/klient FTP na komputerze.

- [3. Połączenie przez dostęp SSH](#ssh): umożliwia dostęp do Twojej przestrzeni dyskowej FTP przez SSH. Do tego dostępu konieczne są zaawansowane umiejętności techniczne oraz oferta[hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external} **Pro** lub **Performance**.

#### 1. Logowanie przez FTP Explorer <a name="ftpexplorer"></a>

Aby zalogować się do Twojej przestrzeni dyskowej FTP za pomocą "FTP Explorer", zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i przejdź do sekcji `Web Cloud`{.action}.

W kolumnie po lewej stronie kliknij pozycję `Hosting`{.action}. Wybierz odpowiedni hosting, przejdź do zakładki `FTP - SSH`{.action} i kliknij na przycisk `FTP Explorer`{.action}.

![ftpconnect](images/connect-ftp-step3.png){.thumbnail}

Na nowej stronie, która się pojawi, wprowadź Twój identyfikator FTP oraz hasło, a następnie zaloguj się. Jeśli wprowadzone dane są poprawne, Twoja przestrzeń dyskowa się wyświetla.

![ftpconnect](images/connect-ftp-step4.png){.thumbnail}

#### 2. Logowanie przez program FTP <a name="ftpsoftware"></a>

Po zainstalowaniu na komputerze odpowiedniego oprogramowania FTP (takiego jak [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) lub [Cyberduck](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac), uruchom je. 

Należy odnaleźć konkretne pola, w których należy wpisać dane do logowania. 

> [!warning]
>
> Ponieważ operacja ta jest ściśle związana z używanym przez Ciebie oprogramowaniem i jego wersją, nie możemy opisać wszystkich operacji w tej dokumentacji.
>

Poniżej znajduje się przypomnienie informacji, które należy wprowadzić:

- **Serwer FTP i SFTP** : adres serwera FTP umożliwiający dostęp do Twojej przestrzeni dyskowej FTP. W zależności od użytego programu nazwa może wyglądać jak: "Serwer", "Adres serwera", "Nazwa hosta" lub "Host".
- **Login główny**: identyfikator umożliwiający dostęp do Twojej przestrzeni dyskowej FTP W zależności od użytego programu nazwa może wyglądać jak: "Użytkownik", "Nazwa użytkownika", "Identyfikator", "Login" lub "Username".
- **Hasło użytkownika FTP**: hasło powiązane z loginem FTP. W zależności od użytego programu nazwa może wyglądać jak "Hasło" lub "Password".
- **Port połączenia**: jest on zazwyczaj uzupełniany automatycznie przez oprogramowanie. Jeśli musisz go wprowadzić:
    - użyj portu "21", aby połączyć się za pomocą protokołu FTP;
    - użyj portu "22", aby połączyć się przez protokół SFTP (w przypadku gdy jest on aktywny).

Jeśli wprowadzone dane są poprawne, program, którego używasz wyświetla zawartość Twojej przestrzeni dyskowej FTP. Może pojawić się komunikat (zwany również "statusem") w celu potwierdzenia, że zawartość została wyświetlona poprawnie za pomocą programu FTP.

#### 3. Logowanie przez SSH <a name="ssh"></a>

Aby zalogować się przez SSH, użyj terminala, aby połączyć się bezpośrednio z przestrzenią dyskową FTP za pomocą wierszy poleceń. 

Więcej informacji na temat SSH znajdziesz w naszym przewodniku [korzystanie z SSH na hostingu OVHcloud](/pages/web_cloud/web_hosting/ssh_on_webhosting)

Narzędzie to jest zainstalowane domyślnie na *macOS*, *Linux* i *Windows 10*. Starsze środowisko Windows będzie wymagało instalacji oprogramowania, takiego jak [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) lub dodania funkcji "*OpenSSH*". 

> [!warning]
> 
> Ponieważ operacja ta jest ściśle związana z używanym przez Ciebie systemem operacyjnym, nie możemy jej szczegółowo opisać w przewodniku.
>

Po ustanowieniu połączenia SSH i w zależności od wybranej metody możesz zalogować się na dwie metody: 

- **z poziomu oprogramowania**: pola tekstowe muszą być uzupełnione informacjami dotyczącymi logowania;
- **w wierszu poleceń**: należy przestrzegać specjalnej składni.

W wierszu poleceń użyj następującej składni:

```bash
ssh sshlogin@sshserver -p connectionport
```

Zastąp elementy `sshlogin`, `sshserver` i `connectionport` własnymi informacjami. 

Po wysłaniu polecenia zostaniesz poproszony o wpisanie hasła użytkownika SSH.

Jeśli wprowadzone dane są poprawne, otrzymasz dostęp do przestrzeni FTP. 

Skorzystaj z naszej dokumentacji "[Korzystanie z połączenia SSH na hostingu](/pages/web_cloud/web_hosting/ssh_on_webhosting)", jeśli to konieczne.

![ftpconnect](images/connect-ftp-step5.png){.thumbnail}

## Sprawdź również

[Zmień hasło użytkownika FTP](/pages/web_cloud/web_hosting/ftp_change_password){.external}.

[Korzystanie z połączenia SSH na hostingu](/pages/web_cloud/web_hosting/ssh_on_webhosting){.external}.

[Użyj PuTTY do logowania przez SSH](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Korzystaj z programu FileZilla na Twoim hostingu](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Korzystaj z Cyberduck na Twoim hostingu](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>. 