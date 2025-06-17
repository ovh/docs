---
title: "Logowanie do przestrzeni dyskowej FTP hostingu"
excerpt: "Dowiedz się, jak się zalogować do przestrzeni dyskowej FTP Twojego hostingu WWW OVHcloud"
updated: 2025-06-10
---

## Wprowadzenie 

Wraz z pakietami hostingowymi OVHcloud zyskujesz dostęp do przestrzeni dyskowej FTP umożliwiającej umieszczanie w Internecie plików z Twoich stron WWW lub aplikacji. Dostęp do przestrzeni dyskowej jest możliwy przez użytkownika FTP lub SSH z przypisanymi do niego hasłami.

**Dowiedz się, jak się zalogować do przestrzeni dyskowej FTP Twojego hostingu WWW OVHcloud.**

## Wymagania początkowe

- Posiadanie [hostingu OVHcloud](/links/web/hosting){.external}
- Dostęp do [Panelu klienta](/links/manager){.external}, sekcja `Web Cloud`{.action}

> [!primary]
> Tylko hosting WWW **Pro** lub **Performance** umożliwia aktywację kilku użytkowników FTP i połączenie przez SSH.
>
> W przypadku hostingu WWW nie jest już możliwe zalogowanie się do przestrzeni FTP przy użyciu narzędzia online FTP Explorer/Net2FTP. Aby kontynuować łączenie się przez FTP z Twoim hostingiem, skorzystaj z oprogramowania [Filezilla](https://filezilla-project.org/download.php){.external} lub [Cyberduck](https://cyberduck.io/){.external}.

## W praktyce

### Etap 1: pobierz informacje potrzebne do zalogowania

Aby zalogować się do przestrzeni dyskowej FTP, pobierz następujące elementy:

- aktywne konto FTP lub SSH;
- hasło powiązane z kontem FTP lub SSH;
- adres serwera FTP lub SSH na Twoim hostingu;
- port połączenia z serwerem FTP lub SSH Twojego hostingu.

> [!primary]
>
> Dane te otrzymasz w wiadomości e-mail potwierdzającej instalację hostingu podczas jego rejestracji. Są one dostępne w [Panelu klienta OVHcloud](/links/manager){.external}.
> 
> **Jeśli dysponujesz już tymi elementami**, przejdź bezpośrednio do etapu 2  [niniejszego przewodnika](#ftp_storage_access).
> 

Jeśli nie posiadasz tych elementów, zaloguj się do [Panelu klienta OVHcloud](/links/manager){.external} i przejdź do sekcji `Web Cloud`{.action}. W kolumnie po lewej stronie kliknij pozycję `Hosting`{.action}. Wybierz odpowiedni hosting i przejdź do zakładki `FTP - SSH`{.action}. 

Wyświetlą się wówczas informacje dotyczące Twojej przestrzeni dyskowej oraz tabela zawierająca nazwy użytkowników FTP i SSH utworzonych na Twoim hostingu.

![ftpconnect](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-pro.png){.thumbnail}

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
> W zależności od oferty [hosting OVHcloud](/links/web/hosting){.external}, którą posiadasz, niektóre z informacji opisanych powyżej (zwłaszcza dotyczących SSH) mogą się nie pojawić.
>

Jeśli nie znasz hasła użytkownika FTP lub SSH, zapoznaj się z naszym przewodnikiem "[Zmiana hasła do konta FTP](/pages/web_cloud/web_hosting/ftp_change_password)".

![ftpconnect](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password.png){.thumbnail}

W tym momencie dysponujesz wszystkimi elementami pozwalającymi na zalogowanie się do przestrzeni dyskowej FTP.

### Etap 2: ddostęp do przestrzeni dyskowej FTP <a name="ftp_storage_access"></a>

Połączenie z przestrzenią dyskową FTP można wykonać na kilka sposobów. Przejdź do opisu operacji, której chcesz użyć.

#### 1. Logowanie przez program FTP <a name="ftpsoftware"></a>

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

#### 2. Logowanie przez SSH <a name="ssh"></a>

Do tego dostępu konieczne są zaawansowane umiejętności techniczne oraz oferta[hostingu OVHcloud](/links/web/hosting){.external} **Pro** lub **Performance**.

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
ssh sshlogin@ssh.clusterXXX.hosting.ovh.net -p 22
```

W powyższej komendzie zastąp:

- wartość `sshlogin` przez główny login FTP opisany w [etap 2.1](#ftpsoftware) (lub przez login FTP z dostępem SSH);
- `XXX` przez cyfry odpowiadające numerowi klastra, w którym znajduje się Twój hosting.

Po wysłaniu polecenia zostaniesz poproszony o wpisanie hasła użytkownika SSH.

Jeśli wprowadzone dane są poprawne, otrzymasz dostęp do przestrzeni FTP. 

Skorzystaj z naszej dokumentacji "[Korzystanie z połączenia SSH na hostingu](/pages/web_cloud/web_hosting/ssh_on_webhosting)", jeśli to konieczne.

![ftpconnect](/pages/assets/screens/other/web-tools/terminal/terminal-ssh-connected.png){.thumbnail}

## Sprawdź również

[Zmień hasło użytkownika FTP](/pages/web_cloud/web_hosting/ftp_change_password){.external}.

[Korzystanie z połączenia SSH na hostingu](/pages/web_cloud/web_hosting/ssh_on_webhosting){.external}.

[Użyj PuTTY do logowania przez SSH](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Korzystaj z programu FileZilla na Twoim hostingu](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Korzystaj z Cyberduck na Twoim hostingu](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community). 