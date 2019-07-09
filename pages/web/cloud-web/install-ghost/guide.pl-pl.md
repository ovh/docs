---
title: 'Instalacja platformy Ghost na hostingu Cloud Web'
slug: instalacja-ghost-cloud-web
excerpt: 'Dowiedz się, jak zainstalować blog na Cloud Web za pomocą platformy Ghost'
section: Tutoriale
order: 1
---

## Wprowadzenie

[Ghost](https://ghost.org/){.external} to silnik bloga z otwartym kodem źródłowym. Ma on na celu uproszczenie procesu publikacji online dla blogerów i dziennikarzy. To oprogramowanie jest napisane w JavaScript i wykorzystuje [Node.js](https://nodejs.org/){.external}, platformę programową do tworzenia witryn i interfejsów API w JavaScript po stronie serwera.

[Hosting Cloud Web]({ovh_www}/hosting/cloud-web.xml){.external} umożliwia użycie Node.js jako frameworka dla Twoich stron WWW oraz instalację i hosting silnika Ghost lub innej aplikacji stworzonej na potrzeby Node.js.

W niniejszym tutorialu wyjaśnimy, jak zainstalować blog za pomocą silnika Ghost na hostingu Cloud Web w OVH oraz jak udostępnić go pod Twoją domeną.

## Wymagania początkowe

### Co powinieneś umieć:

- Znać podstawy ekosystemu Node.js
- Łączyć się z serwerem za pomocą protokołu SSH
- Edytować plik za pomocą wiersza poleceń przy użyciu (na przykład) Vim, Emacs lub Nano.

### Powinieneś posiadać:

- Hosting [Cloud Web]({ovh_www}/hosting/cloud-web.xml){.external} od OVH
- Node.js aktywowany jako framework
- Domenę dodaną w opcji MultiSite oraz Node.js wskazany jako jej framework.
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} > sekcja `Web`{.action}

## W praktyce

### Etap 1: włącz Node.js jako framework

Aby uzyskać dostęp do frameworków Twojego hostingu Cloud Web, zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}. Po zalogowaniu kliknij `Hosting`{.action} na pasku usług po lewej stronie, następnie wybierz odpowiedni hosting Cloud Web. Teraz przejdź do zakładki `Frameworki`{.action}.

Wyświetli się tabela z listą frameworków obecnie dodanych do Twojego hostingu Cloud Web. Upewnij się, czy framework Node.js jest aktywowany. Jeśli tak, przejdź do etapu 2 [Powiąż Node.js ze stroną podpiętą w opcji MultiSite](./#etap-2-powiaz-nodejs-ze-strona-podpieta-w-opcji-multisite).

![ghostcloudweb](images/ghost-cloud-web-step1.png){.thumbnail}

Jeśli framework nie jest aktywowany, dodaj nowy (o ile umożliwia Ci to Twój pakiet) lub zmień istniejący framework.

- **jeśli chcesz dodać framework**: kliknij `Operacje`{.action} nad tabelą, po czym `Dodaj framework`{.action};
- **jeśli chcesz zmienić framework**: kliknij przycisk `...`{.action} po prawej stronie odpowiedniego frameworku, po czym kliknij `Zmień`{.action}.

W oknie, które się wyświetla uzupełnij pola informacjami z poniższego przykładu lub dostosuj je do Twojego przypadku.

|Informacja|Wartość do wprowadzenia| 
|---|---| 
|Spersonalizowana nazwa|NodeJS 8|
|Framework|nodejs-8|
|Ścieżka dostępu do katalogu publicznego|public|
|Środowisko aplikacji|produkcja|
|Skrypt uruchamiania aplikacji|server.js|

Po uzupełnieniu informacji, kliknij przycisk `Zatwierdź`{.action}. Jeśli potrzebujesz więcej informacji o zarządzaniu frameworkami, skorzystaj z naszego przewodnika [Zarządzanie frameworkami Cloud Web](../zarzadzanie-framework-runtime-cloud-web/){.external}.

![ghostcloudweb](images/ghost-cloud-web-step2.png){.thumbnail}

### Etap 2: powiąż Node.js ze stroną podpiętą w opcji MultiSite

Po aktywacji Node.js jako frameworka powiąż go ze stroną podpiętą w MultiSite. W tym celu przejdź do zakładki `MultiSite`{.action}. Tabela, która się wyświetla zawiera wszystkie nazwy domen dodanych w opcji MultiSite. 

![ghostcloudweb](images/ghost-cloud-web-step3.png){.thumbnail}

W powyższej tabeli zwróć uwagę na dwie kolumny. Upewnij się, czy silnik Node.js jest powiązany z odpowiednimi domenami i czy katalog główny jest poprawny. W razie potrzeby wykorzystaj do tego podane poniżej informacje. Jeśli tak jest, przejdź do etapu 3 [Tworzenie bazy danych MySQL](./#etap-3-tworzenie-bazy-danych-mysql).

|Kolumna|Opis | 
|---|---| 
|Katalog główny|Katalog, który powinien zawierać kod źródłowy danej domeny (nosi nazwę „DocumentRoot”). W naszym przykładzie wskazujemy „ghost”. Powinien on zatem zawierać kod źródłowy Node.js.|
|Framework|Framework powiązany z odpowiednią domeną. Nazwa, która się wyświetla odpowiada „Spersonalizowanej nazwie”, którą określiłeś podczas tworzenia frameworka. W naszym przykładzie powinieneś znaleźć „NodeJS 8”.|

Jeśli nie znajdujesz, dodaj nową stronę w opcji MultiSite lub zmień istniejącą.

- **jeśli chcesz dodać stronę podpiętą w opcji MultiSite**: kliknij `Dodaj domenę lub subdomenę`{.action} po prawej stronie tabeli.
- **jeśli chcesz zmienić stronę podpiętą w opcji MultiSite**: kliknij koło zębate po prawej stronie odpowiedniej domeny, po czym kliknij `Zmień`{.action}.

W oknie, które się wyświetla, wprowadź wymagane informacje: Poniższa tabela wyszczególnia informacje użyte na potrzeby tego tutoriala.

|Informacja|Wartość przykładowa użyta na potrzeby tego tutoriala| 
|---|---| 
|Domena|ghost.demo-nodejs.ovh|
|Katalog główny|ghost|
|Framework|NodeJS 8|

Wybierz opcje dodatkowe, które chcesz aktywować. Po wpisaniu informacji kliknij `Dalej`{.action} i zakończ operację. Może to potrwać do godziny. Zmiana konfiguracji DNS może potrwać do 24 godzin, zanim stanie się w pełni aktywna. Jeśli potrzebujesz więcej informacji o zarządzaniu stronami podpiętymi w opcji MultiSite, skorzystaj z naszego przewodnika [Instalacja kilku stron WWW na jednym hostingu](../../hosting/konfiguracja-multisite-na-hostingu/){.external}.

![ghostcloudweb](images/ghost-cloud-web-step4.png){.thumbnail}

### Etap 3: tworzenie bazy danych MySQL

Przejdź do zakładki `Bazy danych`{.action}. Jeśli zakładka nie pojawia się na liście, kliknij przycisk w formie trzech kresek. W tabeli wyświetlają się bazy danych stworzone wcześniej na Twoim hostingu. Aby rozpocząć tworzenie nowej bazy danych, masz do dyspozycji możliwości:

- **jeśli jeszcze nie stworzyłeś bazy danych**: kliknij przycisk `Stwórz bazę danych`{.action};

- **jeśli już utworzyłeś bazę danych**: kliknij przycisk `Operacje`{.action} nad tabelą, a następnie `Stwórz bazę danych`{.action}.

![ghostcloudweb](images/ghost-cloud-web-step5.png){.thumbnail}

W oknie, które się wyświetla wybierz „MySQL”, a następnie wybierz wersję. Na potrzeby tego tutoriala wybraliśmy wersję „5.6”. Wybierz następnie „Przechowywana w Twojej instancji Cloud Web”, po czym kliknij `Dalej`{.action}.

Wybierz następnie nazwę użytkownika i określ dla niej hasło. Teraz kliknij przycisk `Dalej`{.action}. Potwierdź utworzenie bazy danych, klikając `Zatwierdź`{.action}. Odczekaj kilka minut, aż operacja się zakończy.

![ghostcloudweb](images/ghost-cloud-web-step6.png){.thumbnail}

### Etap 4: konfiguracja zmiennych środowiskowych

Etap ten może być opcjonalny, jeśli nie chcesz tworzyć zmiennych środowiskowych. My jednak zalecamy wykonanie tej operacji. 

Na potrzeby tego tutoriala utworzymy zmienne środowiskowe, do których wprowadzimy dane umożliwiające logowanie do bazy danych MySQL. Jeśli dane się zmienią, na przykład hasło, wystarczy zmienić wartość zmiennej w Panelu klienta zamiast zmieniać kod źródłowy.

W tym celu przejdź do zakładki `Zmienne środowiskowe`{.action}. W tabeli wyświetlają się wcześniej utworzone zmienne. Aby dodać nową zmienną, kliknij przycisk `Operacje`{.action} nad tabelą, a następnie `Dodaj zmienną środowiskową`{.action}.

![ghostcloudweb](images/ghost-cloud-web-step7.png){.thumbnail}

W oknie, które się wyświetla, wprowadź wymagane informacje, po czym kliknij przycisk `Potwierdź`{.action}, aby utworzyć zmienną. Oto zmienne, które utworzyliśmy na potrzeby tego tutoriala:

|Nazwa|Typ zmiennej|Wartość| 
|---|---|---|
|database__connection__host|string|Adres serwera MySQL|
|database__connection__user|string|Nazwa użytkownika MySQL wybrana w momencie jego tworzenia|
|database__connection__database|string|Nazwa bazy danych MySQL|
|database__connection__password|hasło|Hasło MySQL wybrane w momencie jego tworzenia|
|database__client|string|mysql|
|server__port|integer|80|
|server__host|string|0.0.0.0|

![ghostcloudweb](images/ghost-cloud-web-step8.png){.thumbnail}

### Etap 5: logowanie do Cloud Web za pomocą SSH

Przygotuj najpierw informacje potrzebne do zalogowania się. Teraz przejdź do zakładki `FTP - SSH`{.action}. Jeśli zakładka nie pojawia się na liście, kliknij przycisk w formie trzech kresek. Wyświetlą się wówczas dane dotyczące Twojej przestrzeni dyskowej. Znajdź dane wymienione obok następujących elementów:

|Elementy|Opis | 
|---|---| 
|Dostęp SSH do klastra|Dane, które się wyświetlą będą zawierać informacje: <br>**- adres serwera**: zaczyna się po „ssh://” i kończy się przed ”:”;<br> **- port połączenia**: numer podany jest po „:”. <br><br>Przykładowe dane: ssh://`ssh.cluster024.hosting.ovh.net`:`12345`/, a zatem „ssh.cluster024.hosting.ovh.net” to adres serwera, a „12345” to port połączenia.|
|Główny login SSH|Główny identyfikator SSH utworzony na Twoim hostingu.|

Jeśli nie znasz hasła użytkownika SSH, kliknij przycisk `...`{.action} po prawej stronie odpowiedniego użytkownika, po czym kliknij `Zmień hasło`{.action}.

![ghostcloudweb](images/ghost-cloud-web-step9.png){.thumbnail}

Teraz, aby zalogować się przez SSH, użyj terminala. Narzędzie to jest zainstalowane domyślnie na MacOS lub Linuxie. Środowisko Windows wymaga instalacji programu, takiego jak PuTTY lub dodania funkcji „OpenSSH”. Ponieważ operacja ta jest związana ściśle z używanym przez Ciebie systemem operacyjnym, nie możemy opisać jej przebiegu w tej dokumentacji. 

Poniżej przykład wiersza poleceń, którego możesz użyć. Zastąp elementy „sshlogin”, „sshserver” oraz „connectionport” elementami odpowiadającymi Twojemu przypadkowi. Po wysłaniu polecenia zostaniesz poproszony o wpisanie hasła użytkownika SSH.

```sh
ssh sshlogin@sshserver -p connectionport
```

Możesz następnie sprawdzić, czy zmienne środowiskowe utworzone [podczas etapu 4](./#etap-4-konfiguracja-zmiennych-srodowiskowych) są widoczne. W przykładzie podanym w tutorialu odnajdziemy zatem:

```sh
demonon@cloudweb-ssh:~ $ env | grep "database_"
database__client=mysql
database__connection__host=demononghost.mysql.db
database__connection__user=demononghost
database__connection__password=ZuperZecure123
database__connection__database=demononghost
```

### Etap 6: instalacja silnika Ghost

Instalację rozpocznij od otwarcia katalogu głównego wskazanego w procesie dodawani domeny [podczas etapu 2](./#etap-2-powiaz-nodejs-ze-strona-podpieta-w-opcji-multisite). W niniejszym tutorialu jest to katalog „ghost”.

```sh
demonon@cloudweb-ssh:~ $ ls -l
drwxr-xr-x 3 demonon demonon 4 Mar  6 16:53 ghost
drwx---r-x 3 demonon demonon 5 Mar  6 16:48 www
demonon@cloudweb-ssh:~ $ cd ghost/
demonon@cloudweb-ssh:~/ghost $
```

Pobierz [najnowszą wersję silnika Ghost](https://ghost.org/fr/developers/){.external} i rozpakuj jego zawartość.

```sh
demonon@cloudweb-ssh:~/ghost $ ls
public  server.js
demonon@cloudweb-ssh:~/ghost $ curl -s -LO https://github.com/TryGhost/Ghost/releases/download/2.16.4/Ghost-2.16.4.zip
demonon@cloudweb-ssh:~/ghost $ unzip Ghost-2.16.4.zip
Archiwum:  Ghost-2.16.4.zip
   creating: content/
   creating: content/adapters/
  inflating: content/adapters/README.md 
   creating: content/apps/
  inflating: content/apps/README.md 
  ....
demonon@cloudweb-ssh:~/ghost $ rm Ghost-2.16.4.zip
demonon@cloudweb-ssh:~/ghost $ ls
Gruntfile.js  LICENSE  MigratorConfig.js  PRIVACY.md  README.md  content  core  index.js  package.json  public  server.js  yarn.lock
```

Ghost używa [Yarn](https://yarnpkg.com/en/){.external}, będącego alternatywą dla **npm**, jako menedżera zależności Node.js. Zainstaluj Yarn za pośrednictwem **npm** i dodaj następujące pliki binarne do „PATH”:

```sh
demonon@cloudweb-ssh:~/ghost $ npm-node8 install yarn
npm notice created a lockfile as package-lock.json. You should commit this file.
+ yarn@1.13.0
added 1 package and audited 1 package in 2.893s
found 0 vulnerabilities
 
demonon@cloudweb-ssh:~/ghost $ export PATH=$PATH:/usr/local/nodejs8/bin/:~/ghost/node_modules/.bin/
demonon@cloudweb-ssh:~/ghost $ node --version
v8.15.0
demonon@cloudweb-ssh:~/ghost $ yarn --version
1.13.0
```

Możesz zachować te zmiany w „PATH”, dodając eksport w pliku „~/.profile”:

```sh
demonon@cloudweb-ssh:~ $ echo "export PATH=$PATH:/usr/local/nodejs8/bin/:~/ghost/node_modules/.bin/" >> ~/.profile
```

Następnie zainstaluj zależności Ghost, używając Yarn:

```sh
demonon@cloudweb-ssh:~/ghost $ yarn install
yarn install v1.13.0
[1/5] Validating package.json...
[2/5] Resolving packages...
[3/5] Fetching packages...
[4/5] Linking dependencies...
[5/5] Building fresh packages...
success Saved lockfile.
Done in 269.89s.
```

Nie wychodząc z folderu „~ / ghost”, utwórz plik `config.production.json` zawierający konfigurację Ghost:

```json
{
    "url": "http://ghost.demo-nodejs.ovh",
    "paths": {
        "contentPath": "content/"
    }
}
```

Następnie przekieruj plik `server.js` (określony [podczas etapu 1](./#etape-1-activer-nodejs-comme-moteur-dexecution)) do pliku `index.js` silnika Ghost:

```sh
demonon@cloudweb-ssh:~/ghost $ unlink  server.js
demonon@cloudweb-ssh:~/ghost $ ln -s index.js server.js
```

Instalacja i konfiguracja silnika Ghost są zakończone. Teraz uruchom ponownie *daemona* Node.js, aby uwzględnił zmiany przeprowadzone w katalogu „~/ghost”.

### Etap 7: ponowne uruchomienie *daemona* Node.js

Aby ponownie uruchomić *daemon* Node.js, wróć do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}. Przejdź do zakładki `MultiSite`{.action}, kliknij koło zębate po prawej stronie nazwy odpowiedniej domeny, po czym kliknij `Uruchom ponownie`{.action}.

W wyniku tej operacji aplikacja będzie dostępna za pośrednictwem nazwy domeny wybranej w konfiguracji Twojej strony podpiętej w opcji MultiSite.

![ghostcloudweb](images/ghost-cloud-web-step10.png){.thumbnail}

### Etap 8: użycie HTTPS

Aby zwiększyć bezpieczeństwo Twojej strony WWW, możesz skonfigurować przekierowanie HTTP na HTTPS. W tym celu utwórz w katalogu `ghost` plik .htaccess` z następującą treścią:

```
RewriteCond %{ENV:HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Podsumowanie

W tym tutorialu przedstawiliśmy poszczególne etapy instalacji aplikacji Node.js na hostingu Cloud Web. Teraz czas na korzystanie z Ghosta i publikację pierwszych treści!