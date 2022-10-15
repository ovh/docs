---
title: Object Storage Swift - Umieszczenie kontenera Object Storage za domeną
excerpt: Umieszczenie kontenera Object Storage za domeną
slug: pcs/link-domain
section: OpenStack Swift Storage Class Specifics
legacy_guide_number: g2006
order: 120
---


## Wprowadzenie

Gdy tworzysz Publiczny kontener, wszyscy mają dostęp do Twoich danych. Jest do rozwiązanie dobre w przypadku udostępniania plików w Internecie. 
Aby móc udostępniać pliki znajomym, musisz dostarczyć im długi adres URL, który jest trudny do zapamiętania. 
Być może będziesz chciał korzystać z tych obiektów na swojej stronie www bez potrzeby korzystania z innej nazwy domeny. 
Dzięki nazwie domeny będziesz mógł dostarczyć własny adres URL do udostępnianych danych. 

Przewodnik ten wyjaśnia, jak skonfigurować domenę na kontenerach, aby ułatwić dostęp do nich.

## Wymagania

- [Dodanie przestrzeni dyskowej](https://docs.ovh.com/gb/en/storage/pcs/create-container/) (EN)
- Domena

## W teorii
Gdy zapytanie HTTP dociera na Object Storage OpenStack, wykonywana jest weryfikacja na poziomie nagłówka "hosta". Jeśli różni się on od aktualnej nazwy hosta, system stwierdzi, że jest to wpis mapowany i wykona zapytanie DNS, aby uzyskać pełny wpis DNS, który odnosi się do hosta. Jeśli wpis DNS zostanie odnaleziony, odpowiedź zostanie podzielona, w celu odnalezienia i odłączenia kontenera, konta i szukanego obiektu. Następnie zapytanie zostanie przepisane. 
Upewnij się, że Twój klient poprawnie umieścił nagłówek "host". W przeciwnym razie Object Storage nie będzie w stanie wykryć i przetworzyć Twojego zapytania.


## HTTP i HTTPS
Funkcjonalność ta działa prawidłowo z HTTP.
Jeśli używasz HTTPS, pojawi się błąd certyfikatu (nie posiadamy prywatnego certyfikatu). 
Będziesz mógł korzystać z HTTPS, ale będziesz otrzymywać alerty dotyczące certyfikatu w większości najnowszych przeglądarek.


## Wpis CNAME lub TXT
Można używać jednego z tych wpisów:


- CNAME: Jest to domyślny wpis. Używaj tego wpisu, jeśli jesteś w stanie zarządzać strefą DNS. Będzie ono automatycznie śledzić nasz punkt dostępowy, nawet jeśli adres IP ulegnie zmianie. 

- TXT: Używaj tego wpisu tylko, jeśli chcesz skonfigurować nazwę domeny na innej usłudze, na przykład na usłudze CDN. Będziesz musiał sprawdzać, czy adres IP punktu dostępowego nie uległ zmianie. Możesz również używać "wirtualnego wpisu CNAME", jeśli Twój dostawca CDN na to pozwala.




## Z CNAME
Wybierz subdomenę (na przykład static.mypersonaldomain.ovh), dodaj pole CNAME i wpisz adres docelowy postępując zgodnie z regułami opisanymi poniżej. 

Pole CNAME musi przestrzegać następujących reguł, aby było rozpoznawane przez Object Storage. Musisz dostosować [ZMIENNE], aby odnosiły się one do prawidłowych wartości:


```
[NAZWA_KONTENERA].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```


Przykład: Kontener o nazwie staticct i projekt 123xxxx456 używany w SBG:


```
staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


Wpis DNS będzie następujący:


```
static IN CNAME staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```




## Z TXT
Dodaj pole TXT i wartość postępując zgodnie z regułami opisanymi poniżej. 

Pole TXT musi przestrzegać następujących reguł, aby było rozpoznawane przez Object Storage:


```
'_swift-remap.' + subdomena
```


Dla subdomeny static.mypersonaldomain.ovh:


```
_swift-remap.static
```


Musisz dostosować [ZMIENNE], aby odnosiły się one do prawidłowych wartości:


```
[NAZWA_KONTENERA].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```


Przykład: Kontener o nazwie staticct i projekt 123xxxx456 używany w SBG:


```
staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


Wpis DNS będzie następujący:


```
_swift-remap.static IN TXT staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


Jeśli nie chcesz używać subdomeny:


```
_swift-remap IN TXT staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


Ostatnim Étapem konfiguracji pola TXT jest dodanie pola A dla (sub)domeny. Pole to ma wskazywać na adres IP Object Storage w usłudze Public Cloud. Adres ten możesz uzyskać za pomocą takich poleceń:


```
dig storage.sbg.cloud.ovh.net
dig storage.gra.cloud.ovh.net
dig storage.bhs.cloud.ovh.net
```



## Informacje
W nazwie kontenera nie można używać poniższych znaków:


- [ . ]
- [ _ ] w zależności od dostawcy DNS
- Nie używaj wielkich liter
- Zamień auth-ProjectID na auth_ProjectID




## 
[Przewodniki Cloud]({legacy}1785)

