---
title: 'Korzystanie z Backup Storage na serwerze dedykowanym'
slug: usluga-backup-storage
excerpt: 'Dowiedz się, jak aktywować usługę Backup Storage'
section: Storage
---

**Ostatnia aktualizacja z dnia 29-08-2018**

## Wprowadzenie

W ramach oferty [serwerów dedykowanych](https://www.ovh.pl/serwery_dedykowane/){.external} udostępniamy do każdego serwera przestrzeń dyskową 500 GB, która umożliwia [zabezpieczenie Twoich danych](https://docs.ovh.com/pl/dedicated/porady-zabezpieczanie-serwera-dedykowanego/){.external}.

**Niniejszy przewodnik wyjaśnia, jak aktywować i używać przestrzeni dyskowej.**


## Wymagania początkowe

- Posiadanie [serwera dedykowanego](https://www.ovh.pl/serwery_dedykowane/){.external}
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, sekcja `Dedykowane`{.action}


## W praktyce

### Aktywacja przestrzeni Backup Storage

Zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i przejdź do strony serwera w sekcji `Dedykowane`{.action}. Następnie wybierz zakładkę `Backup Storage`{.action}, kliknij przycisk `Aktywuj backup Storage`{.action} i zatwierdź.

![Aktywacja przestrzeni Backup Storage](images/backup_storage_activation.png){.thumbnail}

Otrzymasz wówczas e-mail potwierdzający aktywację. Twój Backup Storage będzie dostępny w ciągu kilku minut.


### Konfiguracja kontroli dostępu

Dostęp do Twojej przestrzeni dyskowej jest ograniczony do adresu IP znajdującego się na liście kontroli dostępu czyli *Access Control List* (ACL). Dostęp do przestrzeni dyskowej z wszystkich adresów IP przypisanych do Twojego konta realizowany jest domyślnie przez FTP/FTPS. Inne protokoły (NFS I CIFS) nie są domyślnie ustawione. Aby mieć do nich dostęp, utwórz ACL.


#### Dodawanie dostępu

W sekcji `Backup Storage`{.action} kliknij `Dodaj dostęp`{.action}.

![Dodaj dostęp do backupu](images/add_access.png){.thumbnail}

Wybierz blok IP, który chcesz autoryzować. Po wybraniu bloku IP wybierz protokół, który chcesz autoryzować, następnie kliknij `Dalej`{.action}.

> [!primary]
>
> Aby uzyskać dostęp do przestrzeni dyskowej, możesz autoryzować jedynie bloki IP dostępne na Twoim koncie OVH.
>

![Dodaj dostęp do backupu](images/add_access_ip.png){.thumbnail}

Potwierdź dodanie dostępu, klikając `Zakończ`{.action}.

![Dodaj dostęp do backupu](images/add_access_confirmation.png){.thumbnail}

Możesz teraz łączyć się z przestrzenią Backup Storage Twojego serwera za pomocą wybranego bloku IP.


#### Modyfikacja dostępu

Aby zmienić protokoły autoryzowanego bloku IP, kliknij przycisk `...`{.action}, następnie `Zmodyfikuj dostęp`{.action} w linii odpowiadającej blokowi, który chcesz zmodyfikować. Zaznacz lub usuń zaznaczenie przy wybranych protokołach. Następnie kliknij `Zatwierdź`{.action}.

![Zmodyfikuj dostęp](images/modify_access.png){.thumbnail}


#### Usuwanie dostępu

Aby cofnąć autoryzację dla bloku IP, kliknij przycisk `...`{.action}, po czym kliknij `Usuń dostęp`{.action} w linii odpowiadającej blokowi, który chcesz usunąć.

![Zmodyfikuj dostęp](images/delete_access.png){.thumbnail}

Następnie kliknij `Zatwierdź`{.action}. Dostęp do Backup Storage zostanie wówczas usunięty dla wybranego bloku IP. 


### Zmiana hasła 

W sekcji `Backup Storage`{.action} kliknij `Nie pamiętasz hasła?`{.action}, następnie zatwierdź.

![Zmień Twoje hasło](images/forgotten_password.png){.thumbnail}

Na adres e-mail zarejestrowany w Twoim koncie administratora zostanie wysłany link umożliwiający zmianę hasła. Postępuj zgodnie ze wskazówkami, aby zmienić hasło. 


### Usuwanie Backup Storage

W sekcji `Backup Storage`{.action} kliknij `Usuń Backup Storage`{.action}, następnie zatwierdź.

![Usuń Backup Storage](images/backup_storage_delete.png){.thumbnail}

> [!warning]
> 
> Zlecenie usunięcia Backup Storage jest nieodwracalne. 
> 

Twój Backup Storage zostanie definitywnie usunięty po kilku minutach. 


### Zamawianie dodatkowej przestrzeni dyskowej

W sekcji `Backup Storage`{.action} kliknij przycisk `Zamów przestrzeń dyskową`{.action}. 

![Zamów przestrzeń dyskową](images/additional_space_order.png){.thumbnail}

Zaznacz wybraną wielkość przestrzeni dyskowej, następnie kliknij `Dalej`{.action}.

![Wybór dodatkowej przestrzeni dyskowej](images/additional_space_order_selection.png){.thumbnail}

Przeczytaj i zaakceptuj regulaminy oraz szczegóły zamówienia, klikając `Zatwierdź`{.action}

Zostanie wówczas utworzone zamówienie. Po dokonaniu płatności uzyskasz dostęp do przestrzeni dyskowej.


### Korzystanie z Backup Storage

> [!primary]
>
> W ramach usługi Backup Storage nie są wykonywane automatyczne kopie Twoich danych. Otrzymujesz do dyspozycji przestrzeń dyskową i możesz łączyć się z przestrzenią za pomocą dostępnych protokołów. Wybór odpowiedniej metody wykonywania kopii zapasowych oraz narzędzi należy do Ciebie. Firma OVH nie jest odpowiedzialna za dane przechowywane na przestrzeni dyskowej.
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
> Aby użyć protokołu FTPS, zmień nazwę Twojej usługi Backup Storage. Na przykład, jeśli nazwa brzmi „ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net”, zmień ją w następujący sposób: „ftpback-rbxX-YYY.mybackup.ovh.net”. Dodaj również flagę `-ssl` do poniższej komendy.
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
> lftp używa domyślnie FTP+SSL/TLS. W związku z tym zmień nazwę Twojej usługi Backup Storage. Na przykład, jeśli nazwa brzmi „ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net”, zmień ją w następujący sposób: „ftpback-rbxX-YYY.mybackup.ovh.net”.
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

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.