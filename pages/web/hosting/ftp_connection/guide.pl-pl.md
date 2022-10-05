---
title: 'Logowanie do przestrzeni dyskowej hostingu'
slug: logowanie-przestrzen-dyskowa-ftp-hosting-web
excerpt: 'Dowiedz się, jak się zalogować do przestrzeni dyskowej hostingu od OVHcloud'
section: 'FTP i SSH'
order: 02
---

**Ostatnia aktualizacja z dnia 19-01-2022**

## Wprowadzenie

Wraz z pakietami hostingowymi OVHcloud otrzymujesz dostęp do przestrzeni dyskowej umożliwiającej umieszczanie w Internecie plików z Twojej strony WWW. Do przestrzeni dyskowej możesz zalogować się, używając protokołu FTP lub SSH oraz odpowiednich haseł.

**Dowiedz się, jak zalogować się do przestrzeni dyskowej hostingu od OVHcloud.**

## Wymagania początkowe

- Posiadanie [hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external}
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, sekcja `Web Cloud`{.action}

## W praktyce

### Etap 1: pobranie informacji niezbędnych do logowania

Aby zalogować się do przestrzeni dyskowej, powinieneś posiadać następujące dane:

- aktywne konto FTP lub SSH;
- hasło powiązane z kontem FTP lub SSH;
- adres serwera;
- port połączenia z serwerem.

> [!primary]
>
> Dane te otrzymasz w wiadomości e-mail potwierdzającej instalację hostingu.
>
> **Jeśli masz już dostęp do tych danych**, przejdź bezpośrednio do etapu 2: [Dostęp do przestrzeni dyskowej](./#etap-2-dostep-do-przestrzeni-dyskowej).
> 

[Jeśli nie posiadasz wskazanych wyżej informacji](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, zaloguj się do `Panelu klienta`{.action} i kliknij `Hosting`{.action}. Wybierz odpowiedni hosting i przejdź do zakładki `FTP - SSH`{.action}. 

Wyświetlą się wówczas informacje dotyczące Twojej przestrzeni dyskowej oraz tabela zawierająca nazwy użytkowników FTP i SSH utworzonych na Twoim hostingu.

![ftpconnect](images/connect-ftp-step1.png){.thumbnail}

Dzięki tym danym będziesz mógł odnaleźć dane wymagane do logowania się do przestrzeni dyskowej. Jeśli nie udaje ci się ich odnaleźć, skorzystaj z tabeli. Pamiętaj, że niektóre informacje mogą się nie wyświetlić. Zależy to od oferty, którą wykupiłeś.

- **Serwer FTP i SFTP**: Jest to adres serwera umożliwiający dostęp do Twojej przestrzeni dyskowej przy użyciu programu FTP przy użyciu protokołu FTP lub SFTP.

> Klasycznym portem połączenia jest port "21". Użyj portu "22", aby połączyć się przez protokół SFTP (w przypadku gdy jest on aktywny)

- **Serwer SSH**: Jest to adres serwera umożliwiający dostęp do Twojej przestrzeni dyskowej przy użyciu terminala przez protokół SSH.
- **Login główny**: Główny identyfikator (S)FTP utworzony na Twoim hostingu. Możesz odnaleźć wszystkich użytkowników (S)FTP Twojego hostingu w kolumnie "Login" tabeli.

Jeśli nie znasz hasła użytkownika FTP lub SSH, w zależności od oferty kliknij ikonę ołówka lub przycisk `...`{.action}, a następnie wybierz `Zmień hasło`{.action}. Przewodnik techniczny [Zmień hasło użytkownika FTP](https://docs.ovh.com/pl/hosting/zmiana-hasla-konto-ftp/) pomoże w przeprowadzeniu tej operacji.

![ftpconnect](images/connect-ftp-step2.png){.thumbnail}

Aby zalogować się do przestrzeni dyskowej, powinieneś posiadać następujące dane:

### Etap 2: dostęp do przestrzeni dyskowej

Logowanie do przestrzeni dyskowej można przeprowadzić na kilka sposobów. Przejdź do opisu operacji, którą chcesz przeprowadzić.

1. [Logowanie przez FTP Explorer](#ftpexplorer): umożliwia dostęp do przestrzeni dyskowej przy użyciu przeglądarki internetowej.

2. [Logowanie przez program FTP](#ftpsoftware): umożliwia dostęp do Twojej przestrzeni dyskowej przy użyciu programu (np. FileZilla lub Cyberduck). W pierwszym kroku zainstaluj wybrany program na komputerze.

3. [Logowanie przez SSH](#ssh): umożliwia dostęp do Twojej przestrzeni dyskowej przez SSH. W przypadku tego dostępu konieczne są bardziej zaawansowane umiejętności techniczne oraz posiadanie [hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external} z dostępem SSH.

#### 1. Logowanie przez FTP Explorer <a name="ftpexplorer"></a>

Aby zalogować się do Twojej przestrzeni dyskowej przez FTP Explorer, zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, kliknij `Hosting`{.action} na pasku usług po lewej stronie, następnie wybierz odpowiednią nazwę hostingu. 

Przejdź do zakładki `FTP - SSH`{.action} i kliknij przycisk `FTP Explorer`{.action}. 

![ftpconnect](images/connect-ftp-step3.png){.thumbnail}

Na stronie, która się otworzy, zaloguj się, wprowadzając login FTP i hasło. Jeśli wprowadzone dane są poprawne, możesz rozpocząć operacje na Twojej przestrzeni dyskowej.

![ftpconnect](images/connect-ftp-step4.png){.thumbnail}

#### 2. Logowanie przez program FTP <a name="ftpsoftware"></a>

Po zainstalowaniu na Twoim komputerze wybranego programu FTP (takiego jak FileZilla czy Cyberduck), uruchom go. 

Znajdź miejsce, w którym należy wpisać dane logowania. Ponieważ operacja ta jest ściśle związana z konkretnym programem i wersją, której używasz, nie możemy opisać wszystkich możliwych wariantów w naszej dokumentacji.

W ramach przypomnienia zamieszczamy poniżej informacje, które należy wprowadzić.

- **Serwer FTP i SFTP**: Adres serwera umożliwiający dostęp do Twojej przestrzeni dyskowej. W zależności od użytego programu adres ten może być określony jako: „Serwer”, „Adres serwera”, „Host” lub „Nazwa hosta”.
- **Login główny**: Jest to identyfikator, który umożliwia dostęp do przestrzeni dyskowej. W zależności od użytego programu identyfikator ten może być określony jako: „Użytkownik”, „Nazwa użytkownika”, „Identyfikator”, „Login” lub „Username”.
- **Hasło użytkownika FTP**: Hasło powiązane z loginem FTP. W zależności od użytego programu możesz zostać poproszony o „Hasło” lub z angielskiego „Password”.
- **Port połączenia**: Jest on zazwyczaj uzupełniany automatycznie przez program. Jeśli jednak zostaniesz poproszony o jego wprowadzenie:
    - użyj portu "21", aby połączyć się przez protokół FTP;
    - użyj portu "22", aby połączyć się przez protokół SFTP (w przypadku gdy jest on aktywny).

Jeśli wprowadzone informacje są poprawne, program, którego używasz powinien wyświetlać zawartość Twojej przestrzeni dyskowej. Może pojawić się komunikat (zwany również „statusem”) potwierdzający, że zawartość została wyświetlona poprawnie przez oprogramowanie.

#### 3. Logowanie przez SSH <a name="ssh"></a>

Aby zalogować się przez SSH, użyj terminala, dzięki któremu będziesz mógł działać bezpośrednio na Twojej przestrzeni dyskowej za pomocą wierszy poleceń.

Narzędzie to jest zainstalowane domyślnie na MacOS lub Linuxie. Środowisko Windows będzie wymagało instalacji oprogramowania, takiego jak PuTTY lub dodania funkcji „OpenSSH”. Ponieważ operacja ta jest ściśle związana z systemem operacyjnym, którego używasz, nie możemy jej szczegółowo opisać w przewodniku.

Po ustanowieniu połączenia SSH i w zależności od wybranej metody możesz zalogować się na dwa sposoby: 

- za pomocą programu: w odpowiednie pola tekstowe należy wpisać dane logowania;
- za pomocą wiersza poleceń: należy przestrzegać określonej składni polecenia.

W tym drugim przypadku użyj następującego polecenia. Zastąp elementy „sshlogin”, „sshserver” oraz „connectionport” danymi odpowiadającymi Twojemu przypadkowi. Po wysłaniu polecenia zostaniesz poproszony o wpisanie hasła użytkownika SSH.

```ssh
ssh sshlogin@sshserver -p connectionport
```

Jeśli wprowadzone dane są poprawne, możesz rozpocząć operacje na Twojej przestrzeni dyskowej. W razie takiej potrzeby, skorzystaj z przewodnika technicznego [Dostęp przez SSH na hostingu](../hosting_www_ssh_na_hostingu/).

![ftpconnect](images/connect-ftp-step5.png){.thumbnail}

## Sprawdź również

[Zmiana hasła do konta FTP](../zmiana-hasla-konto-ftp/){.external}

[Dostęp przez SSH na hostingu](../hosting_www_ssh_na_hostingu/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.