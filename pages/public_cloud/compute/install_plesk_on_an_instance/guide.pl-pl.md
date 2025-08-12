---
title: "Jak zainstalować Plesk na instancji Public Cloud"
excerpt: "Dowiedz się, jak wdrożyć Plesk na instancji Public Cloud"
updated: 2025-04-08
--- 

## Wprowadzenie

Plesk to prosty w użytkowaniu interfejs administracyjny dla serwerów dedykowanych.  Można go zainstalować i z niego korzystać na jednej z instancji [Public Cloud](/links/public-cloud/public-cloud).

**Dowiedz się, jak wdrożyć Plesk na instancji Public Cloud.** 

> [!warning]
> 
> OVHcloud oddaje do Twojej dyspozycji usługi, za które przejmujesz odpowiedzialność. Firma OVHcloud nie ma dostępu do Twoich serwerów, nie pełni funkcji administratora i w związku z tym nie będzie mogła udzielić Ci wsparcia. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Jeśli jednak napotkasz jakiekolwiek trudności lub wątpliwości związane z administrowaniem, użytkowaniem lub dbaniem o bezpieczeństwo serwera, zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner). Przyłącz się do [forum społeczności](/links/community) i rozmawiaj z innymi użytkownikami.
>

## Wymagania początkowe

- [Utworzenie instancji w Panelu klienta OVHcloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project)
- [Dostęp administratora](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance)

## W praktyce

### Etap 1: instalacja Pleska

Interfejs Plesk można zainstalować za pomocą połączenia SSH. W tym celu pobierz i wykonaj skrypt instalacyjny Pleska, używając najbardziej odpowiedniego dla Twojego przypadku polecenia.

> [!primary]
>
> W zależności od systemu operacyjnego instancji, samo polecenie sudo może nie być wystarczające. Jeśli pojawi się błąd, przed rozpoczęciem instalacji przełącz się w tryb super-użytkownika:
>
> <pre class="highlight language-console"><code class="language-console">sudo su</code></pre>
>

- **Domyślna, niespersonalizowana instalacja Pleska**:

```bash
sudo sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

- **Spersonalizowana instalacja Pleska**:

```bash
sudo sh <(curl https://autoinstall.plesk.com/plesk-installer || wget -O - https://autoinstall.plesk.com/plesk-installer)
```

Odczekaj chwilę, aż instalacja się zakończy. 

### Etap 2: zakończenie konfiguracji i dodanie licencji

Po zakończeniu instalacji, interfejs wiersza poleceń (CLI) wyświetli następujące informacje:

- Wygenerowane są dwa adresy URL:
    - Jedna z adresem IP serwera (w HTTPS z certyfikatem SSL z własnym podpisem, który może wywołać alert bezpieczeństwa w niektórych przeglądarkach).
    - Drugi z domeną Plesk (w HTTPS z podpisanym certyfikatem SSL, bez alertu bezpieczeństwa).
    - Oba są bezpieczne, ale zaleca się korzystanie z drugiego.
- Pojawi się komunikat: "Możesz również zalogować się jako 'root' przy użyciu hasła 'root'." Domyślnie nie jest generowane hasło root. W razie potrzeby klienci mogą skorzystać z [tego przewodnika](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds), aby aktywować użytkownika root i ustawić hasło.

Po przejściu na stronę Plesk postępuj zgodnie z instrukcjami wyświetlanymi na ekranie, aby dokończyć instalację.

![Plesk configuration](images/plesk_configuration.png){.thumbnail}

Aby dodać licencję Plesk, użyj klucza, który otrzymałeś od Twojego dostawcy.

> [!primary]
>
> Nie sprzedajemy licencji Plesk dla usługi Public Cloud. Możesz zamówić licencję bezpośrednio na stronie [Plesk](https://www.plesk.com/).
> 

Jeśli chcesz zmienić licencję (wymiana klucza testowego, zmiana oferty), możesz to zrobić w interfejsie Plesk, przechodząc do części `Server Management` i wybierając `Tools & Settings`{.action}.  Następnie w części **Plesk** wybierz `License information`{.action}.


## Sprawdź również

[Oficjalna dokumentacja Plesk](https://docs.plesk.com/en-US/onyx/)

Przyłącz się do [społeczności użytkowników](/links/community).