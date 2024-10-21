---
title: 'Zmiana hostname instancji Public Cloud'
excerpt: 'Dowiedz się, jak zmienić hostname instancji Public Cloud'
updated: 2018-09-18
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Moduł Cloud-Init pozwala na skonfigurowanie [instancji Public Cloud](https://www.ovh.pl/public-cloud/instances/){.external} podczas jej tworzenia oraz podczas każdego restartu.  Jeśli chcesz ponownie skonfigurować hostname, na przykład na skutek błędu podczas tworzenia instancji lub aby zmienić konfigurację serwera mailowego, musisz wyłączyć moduł Cloud-Init, który zajmuje się konfiguracją hostname, aby nie został on przywrócony. 

**Przewodnik ten wyjaśnia, jak skonfigurować Cloud-init, aby móc zmienić hostname instancji.**

> [!warning]
>
> OVH oddaje do Twojej dyspozycji usługi, za które przejmujesz odpowiedzialność. Firma OVH nie ma dostępu do Twoich serwerów, nie pełni funkcji administratora i w związku z tym nie będzie mogła udzielić Ci wsparcia. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta.
>
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji “Sprawdź również”.
>

## Wymagania początkowe

* Utworzenie [instancji Public Cloud](https://www.ovh.pl/public-cloud/instances/){.external}
* [Połączenie przez SSH](/pages/public_cloud/compute/public-cloud-first-steps) (sudo) z instancją

## W praktyce

### Wyłączenie modułu Cloud-init

Aby wyłączyć moduł Cloud-init, najpierw trzeba zmodyfikować plik konfiguracyjny:

```sh
sudo vim /etc/cloud/cloud.cfg
```

Wystarczy dodać lub zmodyfikować następujące dwa wiersze:

```sh
preserve_hostname: true
manage_etc_hosts: false
```

### Zmiana hostname

W pierwszym kroku zmień hostname:

```sh
sudo vim /etc/hostname
webserver
```

Następnie zmodyfikuj plik `/etc/hosts`:

```sh
sudo vim /etc/hosts

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

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.