---
title: 'Korzystanie z Backup Storage na serwerze dedykowanym'
slug: usluga-backup-storage
excerpt: 'Dowiedz się, jak aktywować i uzyskać dostęp do dodatkowej przestrzeni dyskowej'
section: Storage
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 15-03-2021**

## Wprowadzenie

Serwery dedykowane OVHcloud dysponują dodatkową przestrzenią do przechowywania ważnych danych i plików konfiguracyjnych. Przestrzeń ta jest skalowalna, zabezpieczona i niezależna od serwera głównego

**Niniejszy przewodnik wyjaśnia, jak aktywować i korzystać z przestrzeni dyskowej**.

> [!primary]
> Aby uzyskać więcej informacji, zalecamy zapoznanie się ze [stroną handlową](https://www.ovhcloud.com/pl/bare-metal/backup-storage/) opcji Backup Storage.
>
> Niniejszy przewodnik nie ma zastosowania do usług OVHcloud US.
>

## Wymagania początkowe

* Posiadanie [serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/){.external} na koncie OVHcloud
* Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](https://eco.ovhcloud.com/pl/about/).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](https://eco.ovhcloud.com/pl/compare/).
>

## W praktyce

### Włącz Backup Storage

Zaloguj się do [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Wybierz serwer, przechodząc do części `Bare Metal Cloud`{.action}, a następnie `Serwery dedykowane`{.action}. W zakładce `Backup Storage`{.action} kliknij przycisk `Aktywuj Backup Storage`{.action}.

![Włącz Backup Storage](images/backup-storage01.png){.thumbnail}

Kliknij `Zatwierdź`{.action} w menu, które się wyświetli.

![Włącz Backup Storage](images/backup-storage02.png){.thumbnail}

Backup Storage zostanie skonfigurowany w ciągu kilku minut. Po zakończeniu konfiguracji otrzymasz e-mail z potwierdzeniem.

### Konfiguracja kontroli dostępu

Dostęp do Twojej przestrzeni dyskowej jest ograniczony do adresów IP z listą kontroli dostępu (<i>Access Control List</i> lub ACL). Dostęp do przestrzeni dyskowej mają tylko adresy IP Twojego konta OVHcloud zapisane w ACL. Protokoły dostępu (FTP, NFS i CIFS) nie są domyślnie autoryzowane, ale mogą być wybrane podczas dodawania adresów IP.

#### Dodaj dostęp do backupu

Zaloguj się do [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Wybierz serwer, przechodząc do części `Bare Metal Cloud`{.action}, a następnie `Serwery dedykowane`{.action}. Następnie wybierz kartę `Backup Storage`{.action}, po czym kliknij przycisk `Dodaj dostęp`{.action}.

![Dodaj dostęp do backupu](images/backup-storage03.png){.thumbnail}

Wybierz blok IP, który chcesz autoryzować. Po wybraniu konfiguracji wybierz protokół, który chcesz autoryzować, następnie kliknij `Dalej`{.action}.

> [!primary]
>
> Tylko bloki adresów IP Twojego konta OVHcloud mogą zostać dodane do ACL w Panelu klienta.
>

![Dodaj dostęp do backupu](images/backup-storage04.png){.thumbnail}

Potwierdź, klikając `Zakończ`{.action}.

Teraz możesz uzyskać dostęp do Backup Storage Twojego serwera z wybranego bloku IP.

#### Zmień lub usuń dostęp do backupu

Po aktywacji usługi tabela ACL wyświetla się w zakładce `Backup Storage`{.action}. Kliknij `...`{.action} po prawej stronie bloku IP, aby otworzyć menu dostępu.

![Dodaj dostęp do backupu](images/backup-storage05.png){.thumbnail}

Aby zmienić protokoły autoryzowanego bloku IP, kliknij `Zmień dostęp`{.action} i wybierz/usuń protokoły z menu, które się wyświetli. Zapisz zmiany klikając na `Zatwierdź`{.action}.

Aby usunąć autoryzację dla bloku IP, kliknij `Usuń dostęp`{.action}, a następnie `Zatwierdź`{.action} w menu, które się wyświetli.

#### Dostęp do Backup Storage z adresu IP spoza Twojej usługi <a name="accessbackup"></a>

Dostęp do Twojej usługi Backup Storage może zostać ograniczony do usługi, do której jest ona powiązana za pośrednictwem Panelu klienta OVHcloud.

Aby móc dodawać inne adresy IP różnych usług, możesz użyć API OVHcloud.
Dzięki temu będziesz mógł pobrać Twoje kopie zapasowe z usługi w innej lokalizacji.

> [!warning]
> Zezwala się wyłącznie na adresy IP OVHcloud.
>

Zaloguj się do [api.ovh.com](https://api.ovh.com/) i skorzystaj z następującego połączenia:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/features/backupFTP/access
>

Wpisz pola w następujący sposób:

- `serviceName`\: nazwa serwera dedykowanego
- `cifs`\: zaznacz w razie potrzeby
- `ftp`\: zaznacz w razie potrzeby
- `ipBlock`\: wprowadź adres IP, który będzie miał dostęp w formie `1.2.3.4/32`
- `nfs`\: zaznacz w razie potrzeby

![apiacladdress](images/aclapi01.png){.thumbnail}

Aby sprawdzić, czy Twój adres IP jest poprawnie autoryzowany, użyj następującego połączenia:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/features/backupFTP/access
>

![apiacladdress](images/aclapi02.png){.thumbnail}

### Zresetuj hasło

Zaloguj się do [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Wybierz serwer, przechodząc do części `Bare Metal Cloud`{.action}, a następnie `Serwery dedykowane`{.action}. Następnie wybierz kartę `Backup Storage`{.action} i kliknij przycisk `Zapomniałeś hasła?`{.action}.

Po kliknięciu `Potwierdź`{.action} w oknie, które się wyświetli, otrzymasz e-mail z hasłem wysłany na adres e-mail zarejestrowany na Twoim koncie administratora. Postępuj zgodnie z instrukcjami zawartymi w tej instrukcji, aby zresetować Twoje hasło.

### Usuń Backup Storage

Zaloguj się do [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Wybierz serwer, przechodząc do części `Bare Metal Cloud`{.action}, a następnie `Serwery dedykowane`{.action}. Następnie wybierz kartę `Backup Storage`{.action}, po czym kliknij przycisk `Usuń Backup Storage`{.action}.

Kliknij `Zatwierdź`{.action} komunikat ostrzegawczy, aby przystąpić do usunięcia. Twój Backup Storage zostanie usunięty po kilku minutach. Wszystkie dane z przestrzeni dyskowej zostaną usunięte.

### Zamawianie dodatkowej przestrzeni dyskowej

Zaloguj się do [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Wybierz serwer, przechodząc do części `Bare Metal Cloud`{.action}, a następnie `Serwery dedykowane`{.action}. Następnie wybierz kartę `Backup Storage`{.action} i kliknij przycisk `Zamów przestrzeń dyskową`{.action}.

![Zamawianie dodatkowej przestrzeni dyskowej](images/backup-storage06.png){.thumbnail}

Wybierz przestrzeń dyskową, którą chcesz zamówić, następnie kliknij `Dalej`{.action}.

Zapoznaj się z cennikiem i warunkami ogólnymi i zatwierdź zamówienie, klikając `Zatwierdź`{.action}.
Zostanie utworzone zamówienie. Po zaksięgowaniu płatności otrzymasz powiadomienie o rozszerzeniu przestrzeni dyskowej.

### Korzystanie z Backup Storage

> [!primary]
>
> Usługa Backup Storage nie wykonuje automatycznych kopii zapasowych danych. Otrzymujesz do dyspozycji przestrzeń dyskową i możesz łączyć się z przestrzenią za pomocą dostępnych protokołów. Wybór odpowiedniej metody wykonywania kopii zapasowych oraz narzędzi należy do Ciebie. OVHcloud nie ponosi odpowiedzialności za dane zawarte w tych przestrzeniach.
>

#### FTP/FTPS

##### NcFTP (na Linux)

Aby zapisać jeden plik, możesz użyć następującej komendy:

```sh
# ncftpput -u FtpUserName -p FtpPassword HostName /FolderLocation /File
```

**Komenda ta nie wspiera protokołu FTPS. Jeśli chcesz wykonać bezpieczny transfer, skorzystaj z klienta lftp lub cURL.**

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **FtpUsername**\: Twoja nazwa użytkownika FTP.
* **FtpPassword**\: Twoje hasło FTP.
* **HostName**\: nazwę Twojej usługi Backup Storage.
* **FolderLocation**\: ścieżka dostępu do katalogu docelowego, w którym zamierzasz zapisać plik. 
* **File**\: nazwa pliku, który chcesz zapisać. 

Aby zapisać katalog, wystarczy go zarchiwizować i przesłać do katalogu kopii zapasowych:

```sh
# tar czf - /FolderName | ncftpput -u FtpUserName -p FtpPassword -c HostName ArchiveName.tar.gz
```

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **FolderName**\: ścieżka dostępu do katalogu, który chcesz zapisać. 
* **FtpUsername**\: Twoja nazwa użytkownika FTP.
* **FtpPassword**\: Twoje hasło FTP.
* **HostName**\: nazwę Twojej usługi Backup Storage.
* **ArchiveName**\: nazwa katalogu, który chcesz zapisać.

Aby pobrać plik archiwalny z Backup Storage, możesz użyć następującej komendy:

```sh
# ncftpget -v -u FtpUsername -p FtpPassword HostName /LocalFolder /File
```

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **FtpUsername**\: Twoja nazwa użytkownika FTP.
* **FtpPassword**\: Twoje hasło FTP.
* **HostName**\: nazwę Twojej usługi Backup Storage.
* **LocalFolder**\: ścieżka dostępu do katalogu lokalnego, w którym chcesz zapisać plik
* **File**\: ścieżka dostępu pliku do pobrania

##### Curl (dla systemu Linux)

> [!primary]
>
> Aby korzystać z FTPS, zmień nazwę Backup Storage. Na przykład, jeśli nazwa Backup Storage to "ftpback-rbxX-YY.ip-Z.Z.Z.net", zmień ją w następujący sposób: "ftpback-rbxX-YYY.mybackup.ovh.net". Należy również dodać argument \`-ssl\` do poniższej komendy.
>

Aby zapisać jeden plik, możesz użyć następującej komendy:

```sh
# curl -aT File ftp://FtpUsername:FtpPassword@HostName/FolderLocation
```

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **File**\: nazwa pliku, który chcesz zapisać. 
* **FtpUsername**\: Twoja nazwa użytkownika FTP.
* **FtpPassword**\: Twoje hasło FTP.
* **HostName**\: nazwę Twojej usługi Backup Storage.
* **FolderLocation**\: ścieżka dostępu do katalogu docelowego, w którym zamierzasz zapisać plik. 

Aby zapisać katalog, wystarczy go zarchiwizować i przesłać do katalogu kopii zapasowych:

```sh
# tar czf - /FolderName | curl ftp://FtpUsername:FtpPassword@HostName/FolderLocation/ArchiveName-$(date +%Y%m%d%H%M).tar.gz -T -
```

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **FolderName**\: ścieżka dostępu do katalogu, który chcesz zapisać. 
* **FtpUsername**\: Twoja nazwa użytkownika FTP.
* **FtpPassword**\: Twoje hasło FTP.
* **HostName**\: nazwę Twojej usługi Backup Storage.
* **FolderLocation**\: ścieżka dostępu do docelowego katalogu lokalnego, w którym chcesz zapisać plik
* **ArchiveName**\: nazwa katalogu, który chcesz zapisać.

Aby pobrać plik archiwalny z Backup Storage, możesz użyć następującej komendy:

```sh
# cd /LocalFolder
# curl -u FtpUsername:FtpPassword ftp://HostName/File 
```

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **FtpUsername**\: Twoja nazwa użytkownika FTP.
* **FtpPassword**\: Twoje hasło FTP.
* **HostName**\: nazwę Twojej usługi Backup Storage.
* **LocalFolder**\: ścieżka dostępu do katalogu lokalnego, w którym zamierzasz zapisać plik. 
* **File**\: ścieżka dostępu pliku do pobrania

##### lftp (na Linux)

> [!primary]
>
> lftp używa domyślnie FTP+SSL/TLS. W związku z tym zmień nazwę Twojej usługi Backup Storage. Na przykład, jeśli nazwa brzmi "ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net", zmień ją w następujący sposób: "ftpback-rbxX-YY.mybackup.ovh.net".
>

#### FTP/FTPS

##### NcFTP (na Linux)

Aby zapisać jeden plik, możesz użyć następującej komendy:

```sh
ncftpput -u FtpUserName -p FtpPassword HostName /FolderLocation /File
```

**Komenda ta nie wspiera protokołu FTPS. Jeśli chcesz wykonać bezpieczny transfer, użyj klienta lftp lub interfejsu cURL.**

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **FtpUsername**: Twoja nazwa użytkownika FTP.
* **FtpPassword**: Twoje hasło FTP.
* **HostName**: nazwa Twojej usługi Backup Storage.
* **FolderLocation**: ścieżka dostępu do katalogu docelowego, w którym zamierzasz zapisać plik. 
* **File**: nazwa pliku, który chcesz zapisać. 

Aby zapisać katalog, wystarczy zarchiwizować go i przesłać do katalogu kopii zapasowych:

```sh
tar czf - /FolderName | ncftpput -u FtpUserName -p FtpPassword -c HostName ArchiveName.tar.gz
```

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **FolderName**: ścieżka dostępu do katalogu, który chcesz zapisać. 
* **FtpUsername**: Twoja nazwa użytkownika FTP.
* **FtpPassword**: Twoje hasło FTP.
* **HostName**: nazwa Twojej usługi Backup Storage.
* **ArchiveName**: nazwa katalogu, który chcesz zapisać.

Aby pobrać plik archiwalny z Twojej przestrzeni dyskowej, możesz użyć następującej komendy:

```sh
ncftpget -v -u FtpUsername -p FtpPassword HostName /LocalFolder /File
```

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **FtpUsername**: Twoja nazwa użytkownika FTP.
* **FtpPassword**: Twoje hasło FTP.
* **HostName**: nazwa Twojej usługi Backup Storage.
* **LocalFolder**: ścieżka dostępu do katalogu lokalnego, w którym zamierzasz zapisać plik. 
* **File**: ścieżka dostępu pliku do pobrania. 

##### cURL (Linux)

> [!primary]
>
> Aby użyć protokołu FTPS, zmień nazwę Twojej usługi Backup Storage. Na przykład, jeśli nazwa brzmi “ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net”, zmień ją w następujący sposób: “ftpback-rbxX-YYY.mybackup.ovh.net”. Dodaj również flagę `-ssl` do poniższej komendy.
>

Aby zapisać jeden plik, możesz użyć następującej komendy:

```sh
curl -aT File ftp://FtpUsername:FtpPassword@HostName/FolderLocation
```

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **File**: nazwa pliku, który chcesz zapisać. 
* **FtpUsername**: Twoja nazwa użytkownika FTP.
* **FtpPassword**: Twoje hasło FTP.
* **HostName**: nazwa Twojej usługi Backup Storage.
* **FolderLocation**: ścieżka dostępu do katalogu docelowego, w którym zamierzasz zapisać plik. 

Aby zapisać katalog, wystarczy zarchiwizować go i przesłać do katalogu kopii zapasowych:

```sh
tar czf - /FolderName | curl ftp://FtpUsername:FtpPassword@HostName/FolderLocation/ArchiveName-$(date +%Y%m%d%H%M).tar.gz -T -
```

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **FolderName**: ścieżka dostępu do katalogu, który chcesz zapisać. 
* **FtpUsername**: Twoja nazwa użytkownika FTP.
* **FtpPassword**: Twoje hasło FTP.
* **HostName**: nazwa Twojej usługi Backup Storage.
* **FolderLocation**: ścieżka dostępu do docelowego katalogu lokalnego, w którym zamierzasz zapisać plik. 
* **ArchiveName**: nazwa katalogu, który chcesz zapisać.

Aby pobrać plik archiwalny z Twojej przestrzeni dyskowej, możesz użyć następującej komendy:

```sh
cd /LocalFolder
curl -u FtpUsername:FtpPassword ftp://HostName/File 
```

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **FtpUsername**: Twoja nazwa użytkownika FTP.
* **FtpPassword**: Twoje hasło FTP.
* **HostName**: nazwa Twojej usługi Backup Storage.
* **LocalFolder**: ścieżka dostępu do katalogu lokalnego, w którym zamierzasz zapisać plik. 
* **File**: ścieżka dostępu pliku do pobrania. 


##### lftp (Linux)

> [!primary]
>
> lftp używa domyślnie FTP+SSL/TLS. W związku z tym zmień nazwę Twojej usługi Backup Storage. Na przykład, jeśli nazwa brzmi “ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net”, zmień ją w następujący sposób: “ftpback-rbxX-YYY.mybackup.ovh.net”.
>

Aby zapisać jeden plik, możesz użyć następującej komendy:

```sh
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put File; quit"
```

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **File**: nazwa pliku, który chcesz zapisać. 
* **FtpUsername**: Twoja nazwa użytkownika FTP.
* **FtpPassword**: Twoje hasło FTP.
* **HostName**: nazwa Twojej usługi Backup Storage.
* **FolderLocation**: ścieżka dostępu do katalogu docelowego, w którym zamierzasz zapisać plik. 

Aby zapisać katalog, wystarczy zarchiwizować go i przesłać do katalogu kopii zapasowych:

```sh
tar czf - /FolderName | ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put /dev/stdin -o ArchiveName-$(date +%Y%m%d%H%M).tar.gz;quit"
```

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **FolderName**: ścieżka dostępu do katalogu, który chcesz zapisać. 
* **FtpUsername**: Twoja nazwa użytkownika FTP.
* **FtpPassword**: Twoje hasło FTP.
* **HostName**: nazwa Twojej usługi Backup Storage.
* **FolderLocation**: ścieżka dostępu do docelowego katalogu lokalnego, w którym zamierzasz zapisać plik. 
* **ArchiveName**: nazwa katalogu, który chcesz zapisać.

Aby pobrać plik archiwalny z Twojej przestrzeni dyskowej, możesz użyć następującej komendy:

```sh
cd /LocalFolder
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "get /File; quit"
```

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **FtpUsername**: Twoja nazwa użytkownika FTP.
* **FtpPassword**: Twoje hasło FTP.
* **HostName**: nazwa Twojej usługi Backup Storage.
* **LocalFolder**: ścieżka dostępu do katalogu lokalnego, w którym zamierzasz zapisać plik. 
* **File**: ścieżka dostępu pliku do pobrania. 

##### FileZilla

Zainstaluj klienta FileZilla na Twoim serwerze i skonfiguruj go, aby zalogować się do Backup Storage przy użyciu danych dostępowych FTP, które otrzymałeś po aktywacji usługi. Do zalogowania będziesz potrzebował nazwy użytkownika i hasła.


#### NFS

Upewnij się, że zezwalasz blokom IP na dostęp do przestrzeni dyskowej oraz używania protokołu NFS. W zależności od dystrybucji Linux, jaką posiadasz, być może powinieneś zainstalować klienta NFS i uruchomić usługę NFS/portmap.

Po zainstalowaniu klienta NFS i uruchomieniu usługi portmap możesz zamontować zasób NFS jako zwykłą partycję, jak pokazano poniżej:

```sh
mount -t nfs HostName:/export/ftpbackup/ServiceName /FolderMount
```

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **HostName**: nazwa Twojej usługi Backup Storage.
* **ServiceName**: nazwa Twojego serwera (np: ns0000000.ip-123-123-123.net).
* **FolderMount**: katalog w którym chcesz zamontować zasób NFS.

Po zamontowaniu zasobu możesz używać komend, takich jak **cp** i rsync, tak jak ma to miejsce w przypadku zwykłego katalogu.


#### CIFS

##### Windows

Zaloguj się do serwera, otwórz wiersz poleceń i wprowadź następującą komendę:

```sh
net use z: \\HostName\ServiceName
```

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **HostName**: nazwa Twojej usługi Backup Storage.
* **ServiceName**: nazwa Twojego serwera (np: ns0000000.ip-123-123-123.net).

##### Linux

Połącz się z serwerem za pomocą SSH i wpisz następujące polecenie:

```sh
mount -t cifs -o sec=ntlm,uid=root,gid=100,dir_mode=0700,username=root,password= //HostName/ServiceName /mnt/FolderMount
```

Poniższy przykład kodu zawiera zmienne, które należy zastąpić odpowiednimi danymi.

* **HostName**: nazwa Twojej usługi Backup Storage.
* **ServiceName**: nazwa Twojego serwera (np: ns0000000.ip-123-123-123.net).
* **FolderMount**: katalog, w którym chcesz zamontować zasób (powinien już istnieć).


## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.