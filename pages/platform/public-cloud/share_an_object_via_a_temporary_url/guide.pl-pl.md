---
title: 'Udostępnianie obiektu za pomocą tymczasowego adresu'
excerpt: 'Dowiedz się, jak udostępnić obiekt bez ujawniania danych osobowych'
slug: udostepnianie_obiektu_za_pomoca_tymczasowego_adresu
legacy_guide_number: g2007
section: 'Object Storage'
---

**Ostatnia aktualizacja z dnia 10-06-2019**

## Wprowadzenie 

OpenStack Swift umożliwia przechowywanie dużej liczby plików. Aby zarządzać plikami, zaloguj się za pomocą *tokena* oddzielnie dla każdego zapytania wysyłanego do API. W ten sposób potwierdzisz Twoje uwierzytelnienia w OpenStack Swift w trybie odczytu i zapisu. *Token* pochodzi z systemu uwierzytelniania i używa Twojego loginu i hasła. 

Jeśli chcesz współdzielić plik z innym użytkownikiem, ze zrozumiałych względów nie chcesz dzielić się danymi do logowania. Skorzystaj zatem z tymczasowych plików (*tempurl*).

**Dowiedz się, jak udostępnić obiekt za pomocą tymczasowego adresu.**

## Wymagania początkowe

- [Przygotowanie środowiska do korzystania z API OpenStack](https://docs.ovh.com/pl/public-cloud/przygotowanie_srodowiska_dla_api_openstack/){.ref}
- [Pobranie zmiennych środowiskowych OpenStack](https://docs.ovh.com/pl/public-cloud/zmienne-srodowiskowe-openstack/){.ref}
- Python zainstalowany na stacji roboczej

## W praktyce

### Zasada działania

Adres tymczasowy (*tempurl*) jest funkcją, która umożliwia kontrolowanie plików, które chcesz współdzielić. Wykorzystywane są do tego następujące elementy:

- **adres punktu dostępu**, np. https://storage.sbg1.cloud.ovh.net;
- **ścieżka do obiektu zawierającego Twój projekt, kontener i nazwę obiektu**, np. `v1/AUTH_tenant/default/file`;
- **parametr tempurlsign**, który został wygenerowany zgodnie z kluczem, metodą HTTP, ścieżką do pliku i datą wygaśnięcia;
- **parametr url_expires**, który odpowiada dacie wygaśnięcia Twojego tymczasowego adresu.

### Generowanie tymczasowego adresu (*tempurl*)

#### 1. Generowanie klucza

W pierwszym kroku wygeneruj klucz. Będzie on ważny dla wszystkich plików Twojego projektu. Wystarczy zatem tylko raz wygenerować klucz dla wszystkich Twoich tymczasowych adresów. 

> [!primary]
>
> Zalecamy wybór długiego, bezpiecznego klucza, zawierającego co najmniej 20 znaków.  Pamiętaj, że w dowolnym momencie możesz wygenerować nowy klucz.
> 

W celu wygenerowania klucza możesz użyć jednej z dostępnych metod, takich jak wiersze poleceń sha512sum lub sha256sum. Zalecamy użycie metody najlepiej dostosowanej do Twojej sytuacji i zgodnie z poziomem szyfrowania, który chcesz zastosować. Na przykład, od najmniej do najbardziej skutecznego szyfrowania:

- date +%s | sha512sum
- date +%s | sha256sum
- date +%s | md5sum 

Po wygenerowania klucza możesz go skonfigurować w Twoim projekcie za pomocą klienta Swift. Pamiętaj, aby zastąpić ciąg „12345” Twoim kluczem:

```bash
swift post -m "Temp-URL-Key: 12345"
```

Lub przy użyciu curl:

```bash
curl -i -X POST \ -H "X-Account-Meta-Temp-URL-Key: 12345" \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```

> [!primary]
>
> Pełna nazwa nagłówka to `X-Account-Meta-Temp-Url-Key`, ale klient Swift używa `Temp-Url-Key`, ponieważ automatycznie dodaje `X-Account-Meta`.
> 

Kiedy klucz jest już skonfigurowany na koncie, sprawdź, czy **nagłówek** został poprawnie zastosowany przy użyciu klienta Swift za pomocą następującego wiersza poleceń:

```bash
swift stat
```

Lub za pomocą curl:

```bash
curl -i -X HEAD \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```

#### 2. Generowanie URL

Następujące zadania mogą być wykonywane offline. Poniżej pokazujemy, jak wygenerować tymczasowy adres URL za pomocą wiersza poleceń. Spersonalizuj go, używając Twoich danych.

Na przykład dla poniższych elementów:

- **GET**: metoda HTTP.
- **60**: link dostępny przez 60 sekund (możesz dopasować tę wartość do Twoich potrzeb).
- **/v1/AUTH_tenant/default/file**: ścieżka do Twojego pliku. Na tym etapie procedury nie jest konieczne dodawanie punktu dostępowego.
- **12345**: zastąp Twoim kluczem.

```
swift tempurl GET 60 /v1/AUTH_tenant/default/file 12345
```

Otrzymasz **tempURL**, który umożliwia wyświetlenie **ścieżki do pliku**, **podpisu** i **daty ważności**, jak wyjaśniono powyżej.

```
v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```

Aby URL działał poprawnie, dodaj adres punktu dostępowego przed**tempURL**:

```
https://storage.sbg1.cloud.ovh.net/v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```

Powyższy przykład pokazuje, że adres tymczasowy pozwala pobrać plik **file** do domyślnego kontenera w ciągu 60 sekund, bez uwierzytelniania. Po upływie 60 sekund URL już nie zadziała.

> [!primary]
>
> Zaawansowani użytkownicy, którzy chcą generować tymczasowe adresy bez skryptu **swift-temp-url**, mogą uzyskać więcej informacji bezpośrednio w oficjalnej dokumentacji OpenStack.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.