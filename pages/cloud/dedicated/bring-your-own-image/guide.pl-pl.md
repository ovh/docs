---
title: Korzystanie z funkcji Bring Your Own Image
excerpt: Dowiedz się, jak tworzyć obrazy za pomocą Bring Your Own Image
slug: bringjourownizm
section: Poziom zaawansowany
---

**Ostatnia aktualizacja z dnia 21-07-2020**

## Wprowadzenie

Dzięki technologii Bring Your Own Image możesz teraz wdrażać obrazy cloudready* * bezpośrednio na serwerach dedykowanych. Możesz zatem użyć produktu bare metal jako zasobu do wdrożenia.

**Dowiedz się, jak skonfigurować BringYourOwnImage z poziomu APIv6 OVHcloud**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego OVHcloud](https://www.ovhcloud.com/pl/bare-metal/).
- Wygenerowanie [credentials do korzystania z APIv6](https://docs.ovh.com/gb/en/api/first-steps-with-ovh-api/).

> [!warning]
>
> Nowa instalacja przez BringYourOwnImage usunie wszystkie dane przechowywane na serwerze.
>

## W praktyce

### Ograniczenia techniczne

Obecnie istnieje kilka ograniczeń technicznych związanych z korzystaniem z produktów fizycznych, takich jak serwery dedykowane.
Przygotowując wdrożenie, należy wziąć pod uwagę wymagania wymienione poniżej. Lista ta nie jest wyczerpująca.

- Typ boot: **uefi** lub **legacy**
- Typ partycji: **MBR** lub **GPT**
- Format obrazu: **qcow** lub **raw**

Jeśli Twój serwer ma boot **uefi**, należy koniecznie przewidzieć na zdjęciu partycję **EFI**, jeśli chcesz, aby Twój serwer mógł się zwiększyć.

### Uruchom Twój obraz

Zaloguj się na stronie [https://api.ovh.com/](https://api.ovh.com/){.external} i przejdź do sekcji `/dedicated/server`{.action}. Pole `Filter` pozwoli Ci wyszukać "BringYourOwnImage".

Dysponujesz trzema połączeniami API związanymi z funkcją BringYourOwnImage.

![calls API](images/apicalls.png){.thumbnail}

Aby utworzyć i wdrożyć obraz, zadzwoń i uzupełnij wymagane pola:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/bringYourOwnImage
>


| Pole | |
|-|-|
| serviceName | Nazwa serwera |
| URL | Adres URL, gdzie można pobrać obraz. |
| checkSum | Checksum na zdjęciu. |
| checkSumType | Checksum obrazu do wdrożenia (md5, sha1, sha256, sha512). |
| enable (ConfigDrive)* | Włącz tworzenie partycji ConfigDrive (cloud-init) |
| hostname (ConfigDrive)* | Hostname serwera. |
| sshKey (ConfigDrive)* | Twój publiczny klucz SSH. |
| userData (ConfigDrive)* | Skrypt poinstalacyjny. |
| userMetadatas (ConfigDrive)* | Meta datas używany przez CloudInit w momencie uruchamiania bootu. |
| | Nazwa obrazu. |
| diskGroupId | ID dysku, który ma być używany. |
| httpHeader | Tylko w razie potrzeby do pobrania obrazu. |
| | Typ/format obrazu (qcow2, raw, ova). |

* ConfigDrive to partycja używana przez cloud-init przy pierwszym uruchamianiu serwera, w celu ustalenia pożądanej konfiguracji. Możesz włączyć lub nie tę opcję.

![POST API call](images/postapicall.png){.thumbnail}

Po uzupełnieniu pól uruchom wdrożenie, klikając `Execute`{.action}.

### Sprawdź wdrażanie

Możesz śledzić wdrażanie obrazu za pomocą następującego wywołania API lub za pomocą KVM / [IPMI](../uzywanie-ipmi-serwery-dedykowane/).

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/bringYourOwnImage
>

W tym przykładzie wdrażanie jest w trakcie uruchamiania.

![GET API call](images/getapicall.png){.thumbnail}

Wdrożenie może trwać kilkadziesiąt minut. Po zakończeniu operacji status wdrożenia zmieni się na "done", a serwer zostanie zrestartowany na dysk.

#### Przykłady powrotu

Oto kilka przykładów:

| Wiadomość | Znaczenie |
|-|-|
| Can't write qcow2 on disk. | Nie można zapisać obrazu qcow2 na dysku. |
| Could not download, qcow2 image is too big to download in memory. | Nie ma wystarczająco dużo miejsca w pamięci RAM, aby pobrać obraz. |
| Could not download image located: http://path/of/your/image | Nie można pobrać obrazu znajdującego się na stronie: http://chemin/de/votre/image |
| Format obrazu, expected: qcow2, raw. | Format obrazu jest nieprawidłowy. |
| Bad checkSumType, expected: sha1, sha256, md5. | Typ checksum jest nieprawidłowy. |
| Bad $checkSumType for downloaded file, got: 1234 while expecting 5678. | Checksum jest nieprawidłowy. |
| Can not move backup GPT data structures to the end of disk. | Format dysku jest nieprawidłowy. |
| Could not create configdrive on disk. | Nie można utworzyć partycji skonfigurowanej na dysku. |


### Usuń wdrażanie

Możesz usunąć wdrożenie, wykonując następujące połączenie:

> [!api]
>
> @api {DELETE} /dedicated/server/{serviceName}/bringYourOwnImage
>

Dzięki temu będziesz mógł usunąć stan wdrożenia i umieścić serwer w trybie rescue.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
