---
title: Włączanie szyfrowania maszyn wirtualnych (VM Encryption)
slug: szyfrowanie-vm
excerpt: Dowiedz się, jak włączyć szyfrowanie maszyn wirtualnych
section: Funkcjonalności VMware vSphere
order: 08
---

**Ostatnia aktualizacja z dnia 01-07-2020**

## Wprowadzenie

Celem niniejszego przewodnika jest wyjaśnienie szczegółów dotyczących konfiguracji VM Encryption w ofercie Private Cloud OVHcloud poprzez wdrożenie strategii przestrzeni dyskowej wykorzystującej zewnętrzny serwer klucza (KMS, *Key Management Server*).

**Dowiedz się, jak skonfigurować szyfrowanie maszyn wirtualnych przy użyciu VM Encryption.**

## Wymagania początkowe

- Posiadanie oferty [Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/){.external}.
- Posiadanie kompatybilnego zewnętrznego serwera zarządzania kluczami (KMS) **[KMIP](https://en.wikipedia.org/wiki/Key_Management_Interoperability_Protocol_(KMIP)){.external} 1.1** i znajdującego się w [matrycy zgodności](https://www.vmware.com/resources/compatibility/search.php?deviceCategory=kms&details=1&feature=293&page=1&display_interval=500&sortColumn=Partner&sortOrder=Asc){.external} VMware.
- Dostęp do interfejsu zarządzania vSphere.
- Posiadanie maszyn wirtualnych z wersją Hardware 13 lub wyższą.

## W praktyce

### Pobieranie identyfikatora certyfikatu z serwera zarządzania kluczami (KMS)

W zależności od serwera KMS możesz się do niego zalogować za pomocą przeglądarki. Kliknij opcję `View Certificate`{.action}, a następnie `Thumbprint`{.action}.

![empreinte du certificat](images/certificate_thumbprints_01.png){.thumbnail}

![empreinte du certificat](images/certificate_thumbprints_02.png){.thumbnail}

Następnie wyodrębnij wartość z wiersza `SHA1 Fingerprint`.

Oto inna metoda przy użyciu OpenSSL:

```shell
openssl s_client -connect 192.0.2.1:5696 < /dev/null 2>/dev/null | openssl x509 -fingerprint -noout -in /dev/stdin
```

Tutaj jest to wartość po prawej stronie znaku równości:


```shell
> SHA1 Fingerprint=7B:D9:46:BE:0C:1E:B0:27:CE:33:B5:2E:22:0F:00:84:F9:18:C6:61
```

### Rejestracja serwera zarządzania kluczami (KMS)

#### W Panelu klienta OVHcloud

W Panelu klienta przejdź do sekcji `Serwer`. Kliknij `Private Cloud`{.action} na pasku usług po lewej stronie, po czym wybierz odpowiednią usługę Private Cloud.

Na stronie głównej usługi kliknij opcję `Bezpieczeństwo`{.action}.

![espace client OVHcloud](images/vm-encrypt_nupanel_01.png){.thumbnail}

Niżej na stronie znajduje się sekcja **Virtual Machine Encryption Key Management Servers**. Kliknij przycisk `Dodaj nowy serwer KMS`{.action}.

![server KMS](images/vm-encrypt_manager_03.png){.thumbnail}

Pojawi się nowe okno. Podaj w nim następujące informacje:

* adres IP serwera KMS;
* uprzednio uzyskany kod SSLThumbprint serwera KMS Server.

Potwierdź uwzględnienie tej dokumentacji, a następnie kliknij `Dalej`{.action}. 

![server KMS](images/vm-encrypt_manager_04.png){.thumbnail}

Pojawia się okno postępu zadania.

#### Za pośrednictwem API OVHcloud

Funkcje szyfrowania można aktywować za pośrednictwem API OVHcloud.

Aby uzyskać nazwę „serviceName”, użyj następującego wywołania API:

> [!api]
>
> @api {GET} /dedicatedCloud
>

Aby sprawdzić, czy szyfrowanie nie zostało jeszcze aktywowane, wykonaj następujące wywołanie API:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/vmEncryption
>

```shell
>     "state": "disabled"
```


Następnie przeprowadź rejestrację serwera KMS:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/kms
>

Aby wykonać tę operację, przygotuj poniższe informacje:

* poprzednio uzyskana nazwa „serviceName”;
* adres IP serwera KMS;
* uprzednio uzyskany kod SSLThumbprint serwera KMS Server.

### Dodawanie serwera klucza (KMS) do vCenter

#### Informacje o tej części

**Podczas dodawania pierwszej instancji KMS vCenter Server tworzy klaster KMS.** 

- Podczas dodawania KMS ustaw ten klaster jako domyślny. Można to zmienić później. 
- Gdy vCenter utworzy pierwszy klaster, możesz dodawać do niego nowe instancje KMS tego samego dostawcy. 
- Możesz skonfigurować klaster z co najmniej jedną instancją KMS.
- Jeśli Twoje środowisko uwzględnia rozwiązania KMS różnych dostawców, możesz dodać więcej klastrów KMS. 
- Jeśli środowisko zawiera kilka klastrów KMS i usuniesz domyślny klaster, musisz określić inny jako domyślny. Zobacz „Ustawianie klastra KMS jako domyślnego”.

#### Procedura

Rozpocznij operację, logując się do usługi Private Cloud przy użyciu klienta Web vSphere. Następnie przejrzyj listę zasobów i wybierz vCenter. Kliknij opcję „Zarządzaj”, a następnie „Key Management Servers”. Kliknij `Dodaj KMS`{.action}, a w asystencie, który się pojawi, podaj informacje o KMS i kliknij `OK`{.action}.
Kliknij `Trust`{.action}, aby zatwierdzić certyfikat.

![procédure ajout clé KMS](images/vm-encrypt_01.png){.thumbnail}

Wybierz następujące opcje:

|Nazwa opcji|Opis|
|---|---|
|„KMS cluster”|Wybierz opcję „Utwórz nowy klaster”, aby utworzyć nowy klaster. Jeśli klaster już istnieje, możesz go wybrać.|
|„Cluster name”|Nazwa klastra KMS. Nazwa ta może być potrzebna do zalogowania się do KMS, jeśli vCenter będzie niedostępny. Bardzo ważne jest, aby nazwa klastra była unikatowa. Należy też ją zanotować.|
|„Server alias”|Alias serwera KMS. Alias ten może być potrzebny do zalogowania się do KMS, jeśli vCenter będzie niedostępny.|
|„Server address”|Adres IP lub FQDN serwera KMS.|
|„Server port”|Port, na którym serwer vCenter loguje się do KMS. Standardowy port KMIP to 5696. Może być też inny, jeśli serwer KMS innego dostawcy jest skonfigurowany na konkretnym porcie.|
|„Proxy address”|Zostaw to pole puste.|
|„Proxy port”|Zostaw to pole puste.|
|„User name”|Niektórzy dostawcy KMS pozwalają użytkownikom na izolowanie kluczy szyfrowania używanych przez różnych użytkowników lub grupy poprzez określenie nazwy użytkownika i hasła. Nazwę użytkownika określ tylko wtedy, jeśli Twój serwer KMS obsługuje tę funkcję i masz zamiar jej używać.|
|„Password”|Niektórzy dostawcy KMS pozwalają użytkownikom na izolowanie kluczy szyfrowania używanych przez różnych użytkowników lub grupy poprzez określenie nazwy użytkownika i hasła. Hasło określ tylko wtedy, jeśli Twój serwer KMS obsługuje tę funkcję i masz zamiar jej używać.|


#### Import certyfikatu KMS

Większość dostawców KMS potrzebuje certyfikatu, aby [nawiązać bezpieczne połączenie](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.security.doc/GUID-0212CEF2-7871-4E00-ADF2-0C71401D5E1A.html){.external} z vCenter.

W vCenter wybierz uprzednio dodany serwer KMS. W sekcji „Wszystkie opcje” kliknij `Ustal zaufane połączenie z KMS`{.action}.

> [!warning]
>
> Podczas pobierania certyfikatu z serwera KMS upewnij się, że nie jest zaszyfrowany z użyciem hasła. Jeśli na przykład tworzysz użytkownika, utwórz go bez hasła i pobierz certyfikat dla użytkownika KMS.
> 

![import certificat KMS](images/vm-encrypt_02.png){.thumbnail}

#### Sprawdzanie konfiguracji KMS

Sprawdź, czy **Connection Status** odpowiadający serwerowi KMS jest w trybie „Normal”.

![vérifier connection status](images/vm-encrypt_03.png){.thumbnail}

#### Zmiana polityki przechowywania „VM Encryption Storage”

Utwórz maszynę wirtualną. Po utworzeniu kliknij ją prawym przyciskiem myszy. Następnie kliknij `VM Policies`{.action}, a potem `Edit VM Storage Policies`{.action}.

![VM encryption storage](images/vm-encrypt_04.png){.thumbnail}

Wybierz pliki maszyny wirtualnej i inne dyski twarde, które mają zostać zaszyfrowane.

![VM encryption storage](images/vm-encrypt_05.png){.thumbnail}

Upewnij się, że zadania zostały wykonane bez błędów.

> [!primary]
>
> Jeśli serwer KMS nie jest skonfigurowany prawidłowo i występują nieprawidłowości podczas wymiany kluczy między vCenter a KMS, w zadaniu z komunikatem o błędzie „Cannot generate key” pojawi się błąd „RuntimeFault”.
>

#### Zaszyfrowany vMotion

W przypadku vMotion szyfrowanie działa na poziomie maszyny wirtualnej. Do synchronizacji są używane 256-bitowe klucze szyfrowania.

Szyfrowanie ruchu vMotion działa na poziomie jądra maszyny wirtualnej z użyciem powszechnie używanego algorytmu AES-GCM (Advanced Encryption Standard-Galois Counter Mode).

Edytuj maszynę wirtualną i przejdź do `VM Options`{.action}.

Jeśli vMotion ma zostać zaszyfrowany, musisz wybrać opcje. Istnieją trzy polityki dotyczące zaszyfrowanego vMotion:

|Stan|Opis|
|---|---|
|Disabled|Wyłączony.|
|Opportunistic|Szyfrowanie tylko, jeśli jest obsługiwane przez host źródłowy i host docelowy ESXi. W przeciwnym razie vMotion nie zostanie zaszyfrowany.|
|Required|Szyfrowanie zostanie użyte.|

![Zaszyfrowany vMotion](images/vm-encrypt_06.png){.thumbnail}

Przenoszenie maszyn między hostami odbywa się poprzez wymianę unikalnych kluczy, które są generowane i obsługiwane przez serwer vCenter, a nie przez KMS.

#### Sprawdzenie konfiguracji

![vérification de la configuration](images/vm-encrypt_07.png){.thumbnail}

![vérification de la configuration](images/vm-encrypt_08.png){.thumbnail}

![vérification de la configuration](images/vm-encrypt_09.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
