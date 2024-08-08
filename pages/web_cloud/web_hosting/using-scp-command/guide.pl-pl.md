---
title: "Hosting WWW - Kopiowanie plików za pomocą polecenia SCP"
excerpt: "Dowiedz się, jak używać komendy Secure Copy Protocol (SCP) przez SSH do kopiowania plików z lub na Twój hosting"
updated: 2024-01-30
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Secure Copy Protocol (SCP) umożliwia bezpieczne kopiowanie (przy użyciu protokołu SSH) danych między dwoma urządzeniami. Możesz skopiować zawartość:

- dostępny lokalnie z komputera na urządzeniu zdalnym;
- z urządzenia zdalnego do komputera;
- z jednego serwera na inny serwer (niedostępny między dwoma hostingami OVHcloud).

Za pomocą terminala i polecenia Linux można skopiować plik lub folder zawierający jeden lub więcej plików.

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Jeśli jednak napotkasz trudności, zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner). Niestety firma OVH nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.
>

**Dowiedz się, jak używać polecenia Secure Copy Protocol (SCP) przez SSH do kopiowania plików z lub na Twój hosting.**
  
## Wymagania początkowe

- Terminal kompatybilny z poleceniami Linux i SSH (na przykład *terminal* MacOS lub emulator *Ubuntu* na Windows)
- Zaznajomienie się z poleceniami Linux i SSH
- Posiadanie [hostingu web](/links/web/hosting) z dostępem przez SSH
- Dostęp do [panelu klienta OVHcloud](/links/manager){.external}

## W praktyce

Niniejszy przewodnik zawiera niewyczerpujące informacje na temat funkcji dostępnych za pomocą polecenia `scp`. Zachęcamy do kontaktu z [naszych użytkowników](/links/community), jeśli chcesz dowiedzieć się więcej na temat tego zamówienia.

### Etap 1 - Pobieranie dostępów SSH do hostingu WWW

Aby odnaleźć dostęp SSH do Twojego hostingu, zapoznaj się z naszym przewodnikiem "[Korzystanie z dostępu SSH do hostingu WWW](/pages/web_cloud/web_hosting/ssh_on_webhosting)".

### Etap 2 - Pobierz pełną ścieżkę dostępu do przestrzeni dyskowej FTP Twojego hostingu WWW<a name="step2"></a>

Otwórz terminal i zaloguj się na hosting przez SSH.

Po zalogowaniu się przez SSH do hostingu wpisz następujące polecenie: 

```ssh
cd ..
```

Zatwierdź polecenie za pomocą przycisku `enter`(↲) na klawiaturze i wprowadź następującą komendę:

```ssh
ls
```

Zatwierdź to drugie polecenie za pomocą przycisku `enter`(↲) na klawiaturze.

W Twoim terminalu pojawia się wynik podobny do naszego poniższego przykładu:

```ssh
FTP-login@ssh0X.cluster0XX.xxx.hosting.ovh.net (php/X.X/production/legacy) /homez.XXX $
FTP-main-login
```

W naszym przykładzie:

- `FTP-login`: nazwa jednego z użytkowników FTP (głównego lub nie) na Twoim hostingu.
-`/homez.XXX`: *filer*, na którym znajduje się Twój hosting.
- `FTP-main-login`: ścieżka do katalogu przestrzeni dyskowej FTP Twojego hostingu. Nazwa katalogu jest zazwyczaj taka sama jak nazwa głównego loginu FTP na Twoim hostingu.

W naszym przykładzie pełna ścieżka dostępu do przestrzeni dyskowej FTP w celu uzyskania dostępu do katalogu głównego FTP hostingu WWW jest następująca:`/homez.XXX/FTP-main-login`.

Tylko z katalogu odpowiadającego katalogowi `FTP-main-login` w naszym przykładzie będziesz mógł użyć komendy `scp`.

W przypadku klasycznego logowania do przestrzeni FTP hostingu, logowanie odbywa się bezpośrednio do katalogu odpowiadającego folderowi `FTP-main-login` w naszym przykładzie.

Na tym właśnie poziomie znajdują się domyślnie katalog `www` oraz plik`.ovhconfig` Twojego hostingu.

### Etap 3 - Użyj komendy "scp" na Twoim hostingu

> [!success]
>
> Wszystkie poniższe polecenia są wykonywane z terminala urządzenia/komputera **lokalnie**. Nie musisz więc logować się przez SSH do terminala na Twoim hostingu.
>
> Ścieżka pliku użyta wraz z poleceniem `scp` odnosi się do bieżącego katalogu lokalnego. Aby przenieść dane do hostingu lub z hostingu na urządzenie lokalne, upewnij się, że uruchamiasz polecenia z lokalnego katalogu nadrzędnego, jak pokazano w poniższych przykładach.
>

Pamiętaj, aby zastąpić wszystkie następujące ustawienia ogólne własnymi ustawieniami:

- `FTP-login`: login FTP do Twojego hostingu.
- `ssh.cluster0XX.hosting.ovh.net` : zastąp `XX` numerem klastra, w którym znajduje się Twój hosting. W razie potrzeby sprawdź przewodnik "[Korzystanie z dostępu SSH do hostingu WWW](/pages/web_cloud/web_hosting/ssh_on_webhosting)", aby uzyskać te informacje.
-`/homez.XXX/FTP-main-login/`: zmień `XXX` na numer *filer* i `FTP-main-login` na parametry pobrane podczas [etapu 2](#step2) tego przewodnika.
- `source_folder`: nazwa folderu źródłowego, który ma zostać skopiowany lub do którego znajduje się kopiowany plik. *Jeśli drzewo katalogów odnosi się do serii zagnieżdżonych katalogów, podaj wszystkie nazwy katalogów, rozdzielając je znakiem `/`*.
- `target_folder`: nazwa folderu docelowego, który otrzyma folder lub plik lokalny do skopiowania. *Jeśli drzewo katalogów odnosi się do serii zagnieżdżonych katalogów, podaj wszystkie nazwy katalogów, rozdzielając je znakiem `/`*.
- `file`: Nazwa pliku do skopiowania przy użyciu polecenia `scp`. Pamiętaj, aby określić rozszerzenie tego pliku (przykłady: *.html*, *.css*, *.php*, *.txt*, etc.).

#### Kopiuj treści dostępne lokalnie na Twoim urządzeniu na Twój hosting WWW

Aby skopiować pojedynczy plik lokalny na Twój hosting, wprowadź następującą komendę:

```ssh
scp source_folder/file FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder
```

Aby skopiować lokalny katalog i całą jego zawartość na Twój hosting, użyj następującego polecenia:

```ssh
scp -r source_folder FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder 
```

#### Kopiuj treści z Twojego hostingu na Twoje lokalne urządzenie

Aby skopiować pojedynczy plik z Twojego hostingu na urządzenie lokalne, użyj następującego polecenia:

```ssh
scp FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main/login/source_folder/file target_folder 
```

Aby skopiować cały katalog i zawartość katalogu znajdującą się na Twoim hostingu na Twoje urządzenie lokalne, użyj następującego polecenia:

```ssh
scp -r FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/source_folder target_folder
```

#### Kopiuj treści z Twojego hostingu WWW OVHcloud na inny hosting WWW OVHcloud

Ze względów bezpieczeństwa zamówienie `scp` zostało w dniu odrzucone przez SSH w infrastrukturze hostingu WWW OVHcloud, gdy dwa hostingi podjęły próbę skopiowania zawartości między sobą.

### Etap 4 - Upewnij się, że zawartość została skopiowana

Aby sprawdzić, czy zawartość zainstalowana lokalnie na Twoim komputerze została skopiowana na Twój hosting, możesz [zalogować się do przestrzeni dyskowej FTP Twojego hostingu](/pages/web_cloud/web_hosting/ftp_connection), a następnie przejść do katalogu docelowego, do którego zawartość ma zostać skopiowana.

Aby sprawdzić, czy zawartość z Twojego hostingu została lokalnie skopiowana na Twój komputer, przejdź do katalogu docelowego na Twoim urządzeniu/komputerze, a następnie sprawdź, czy zawartość, która ma zostać skopiowana, rzeczywiście znajduje się w tym katalogu.

## Sprawdź również <a name="go-further"></a>

[Korzystanie z dostępu do hostingu WWW przez SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Logowanie do przestrzeni dyskowej FTP Twojego hostingu](/pages/web_cloud/web_hosting/ftp_connection)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Dołącz do [grona naszych użytkowników](/links/community).