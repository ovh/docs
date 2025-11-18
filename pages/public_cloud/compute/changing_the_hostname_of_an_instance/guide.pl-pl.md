---
title: 'Zmiana hostname instancji Public Cloud'
excerpt: 'Dowiedz się, jak zmienić hostname instancji Public Cloud'
updated: 2025-03-20
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Moduł Cloud-init pozwala na skonfigurowanie [instancji Public Cloud](/links/public-cloud/public-cloud) podczas jej tworzenia oraz podczas każdego restartu. Jeśli chcesz ponownie skonfigurować hostname, na przykład na skutek błędu podczas tworzenia instancji lub aby zmienić konfigurację serwera mailowego, musisz wyłączyć moduł Cloud-init, który zajmuje się konfiguracją hostname, aby nie został on przywrócony. 

**Przewodnik ten wyjaśnia, jak skonfigurować Cloud-init, aby móc zmienić hostname instancji.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, za które to Ty przejmujesz odpowiedzialność. Firma OVHcloud nie ma dostępu do Twoich serwerów, nie pełni funkcji administratora i w związku z tym nie będzie mogła udzielić Ci wsparcia. Dlatego to do Ciebie należy codzienne zarządzanie oprogramowaniem i dbanie o bezpieczeństwo.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Jeśli jednak napotkasz jakiekolwiek trudności lub wątpliwości związane z administrowaniem, użytkowaniem lub dbaniem o bezpieczeństwo serwera, zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner). Więcej informacji znajduje się w sekcji "Sprawdź również".
>
> Ten przewodnik jest przeznaczony dla instancji opartych na dystrybucji Linux **tylko**.
>

## Wymagania początkowe

* Utworzenie [instancji Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)
* [Połączenie przez SSH](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) (sudo) z instancją

## W praktyce

### Wyłączenie modułu Cloud-init

> [!primary]
>
> Dla celów tego przewodnika, będziemy używać edytora plików **vi**, ponieważ jest on domyślnie obecny w dystrybucjach Linuksa. Możesz oczywiście użyć wybranego przez siebie edytora.
>
> Podstawowe użycie vi :
>
> - Naciśnij **i**, aby przejść do trybu wstawiania tekstu.
> - Naciśnij **Escape** (Esc), aby wyjść z trybu wstawiania.
> - Naciśnij **:wq**, a następnie **Enter**, aby zapisać i wyjść.
> - Naciśnij **:q!**, a następnie **Enter**, aby wyjść bez zapisywania.

Aby dezaktywować cloud-init, należy zacząć od modyfikacji pliku konfiguracyjnego:

```sh
sudo vi /etc/cloud/cloud.cfg
```

Wystarczy dodać dwie poniższe linie lub zmodyfikować je, jeśli już istnieją:

```sh
preserve_hostname: true
manage_etc_hosts: false
```

### Zmień hostname

Pierwszym krokiem jest zmiana nazwy hosta (*hostname*). W tym przykładzie zmienimy nazwę hosta na **webserver**. Możesz oczywiście zmienić ją zgodnie z własnymi preferencjami:

W pierwszym kroku zmień hostname:

```sh
sudo vi /etc/hostname
```

Dodaj lub zamień zawartość na:

```sh
webserver
```

Następnie zmodyfikuj plik `/etc/hosts`:

```sh
sudo vi /etc/hosts
```

Dodaj lub zamień zawartość na:


```sh
127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

Teraz zrestartuj instancję:

```bash
sudo reboot
```

Po restarcie zmiana hostname została uwzględniona:

```sh
sudo cat /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

## Sprawdź również 

Dołącz do [grona naszych użytkowników](/links/community).