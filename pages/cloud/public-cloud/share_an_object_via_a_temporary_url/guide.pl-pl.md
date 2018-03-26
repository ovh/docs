---
title: Udostępnianie obiektu za pomocą tymczasowego adresu
excerpt: Udostępnianie obiektu za pomocą tymczasowego adresu
slug: udostepnianie_obiektu_za_pomoca_tymczasowego_adresu
legacy_guide_number: g2007
section: Object Storage
---


## 
OpenStack Swift pozwala na przechowywanie dużej liczby plików. 
Aby móc zarządzać plikami, należy zalogować się za pomocą tokena, w przypadku każdego zapytania wysyłanego do API. Dzięki temu można potwierdzić uprawnienia (odczyt, zapis,...) w oprogramowaniu Swift. 
Token jest generowany w systemie uwierzytelniania, do którego logujesz się za pomocą identyfikatora i hasła. 

Jeśli udostępnić plik znajomym, ale nie chcesz podawać im swoich danych do logowania, skorzystaj z tymczasowych adresów URL (tempurl).


Temp url to funkcjonalność pozwalająca na kontrolowanie plików, które chcesz udostępniać oraz czasu dostępności adresu.


## Zasady działania
Funkcja Temp url generuje tymczasowy adres korzystając z poniższych elementów:


- Adres punktu dostępowego, na przykład: "https://storage.sbg1.cloud.ovh.net/"
- Ścieżka do obiektu zawierająca projekt, kontener i nazwę obiektu: "v1/AUTH_tenant/default/file"
- Pierwszy dodatkowy parametr tempurlsign odnoszący się do podpisu, który został wygenerowany zgodnie z kluczem, metodą HTTP, ścieżką do pliku i datą wygaśnięcia. 
- Drugi parametr url_expires odnoszący się do daty wygaśnięcia linka.




## Wymagania

- [Przygotowanie środowiska dla API OpenStack]({legacy}1851)
- [Pobranie zmiennych środowiskowych OpenStack]({legacy}1852)
- Python zainstalowany na komputerze
- Skrypt Python: [swift-temp-url](https://raw.githubusercontent.com/openstack/swift/master/bin/swift-temp-url)




## Generowanie klucza
W pierwszej kolejności należy wygenerować klucz. Będzie on używany dla wszystkich plików projektu. Wygenerowanie tego klucza wystarczy dla wszystkich przyszłych TempURL. Zaleca się więc wybranie długiego bezpiecznego klucza. W każdej chwili można wygenerować nowy klucz. 

Zalecamy wykorzystanie minimum 20 znaków. Możesz skorzystać z narzędzi takich jak:

- [http://www.random.org/strings/](http://www.random.org/strings/)
- Polecenie w systemie Linux: "/dev/urandom"
- Lub polecenie: "date +%s | md5sum"


Po uzyskaniu klucza możemy go skonfigurować na danym projekcie za pomoca klienta swift (zastąp ciąg "12345" swoim kluczem):


```
swift post -m "Temp-URL-Key: 12345"
```


Lub za pomocą curla:


```
curl -i -X POST \ -H "X-Account-Meta-Temp-URL-Key: 12345" \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```



## Informacje
Pełna nazwa nagłówka to X-Account-Meta-Temp-Url-Key, ale klient Swift używa Temp-Url-Key, ponieważ automatycznie dodaje X-Account-Meta.
Po skonfigurowaniu klucza na koncie, można sprawdzić, czy nagłówek został prawidłowo wprowadzony. Skorzystaj z tego polecenia w kliencie Swift:


```
swift stat
```


Lub za pomocą curla:


```
curl -i -X HEAD \ -H "X-Auth-Token: abcdef12345" \ ttps://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```




## Generowanie adresu URL
Te zadania mogą zostać wykonane offline.

Wygenerujemy tymczasowy adres URL za pomocą skryptu swift-temp-url:


```
python swift-temp-url GET 60 /v1/AUTH_tenant/default/file 12345
```



- GET: Metoda HTTP
- 60: Link dostępny przez 60 sekund. Możesz dostosować tę wartość. 
- 12345: Zamień na swój klucz.
- /v1/AUTH_tenant/default/file: Ścieżka do pliku. Nie trzeba dodawać punktu dostępowego na tym etapie procedury.


Otrzymasz tempURL tego typu:


```
v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```


Widać tutaj ścieżkę do pliku, podpis i datę wygaśnięcia. 

Aby adres działał prawidłowo, należy dodać adres punktu dostępowego przed tempURL:


```
https://storage.sbg1.cloud.ovh.net/v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```


W naszym przykładzie URL pozwala wszystkim na pobranie pliku "file" z kontenera "default", przez 60 sekund bez uwierzytelniania. 
Po 60 sekundach URL przestanie działać.
Dla bardziej zaawansowanych użytkowników, którzy chcą generować tempURL bez użycia skryptu [swift-temp-url](https://raw.githubusercontent.com/openstack/swift/master/bin/swift-temp-url), polecamy [dokumentację OpenStack](http://docs.openstack.org/liberty/config-reference/content/object-storage-tempurl.html).


## 
[Przewodniki Cloud]({legacy}1785)

