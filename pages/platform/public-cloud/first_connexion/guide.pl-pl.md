---
title: 'Logowanie do instancji OVHcloud Public Cloud'
slug: pierwsze-logowanie
legacy_guide_number: 1787
excerpt: 'Ten przewodnik zawiera informacje o logowaniu do instancji OVHcloud Public Cloud przy użyciu systemu Windows i Linux'
section: 'Szybki start'
---

**Ostatnia aktualizacja: 06-12-2019**

## Wprowadzenie

Logowanie do instancji OVHcloud Public Cloud odbywa się podobnie jak zwykłe logowanie do VPS czy serwera dedykowanego, ale każda instancja ma konkretne konto użytkownika.

**Ten przewodnik zawiera informacje o logowaniu do instancji OVHcloud Public Cloud przy użyciu systemu Windows i Linux.**

## Wymagania początkowe

* dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}
* [instancja OVHcloud Public Cloud](https://www.ovhcloud.com/pl/public-cloud/){.external} utworzona na koncie

## W praktyce

### Logowanie do instancji systemu Linux przy użyciu systemu operacyjnego Linux/Mac

Aby zalogować się do instancji OVHcloud Public Cloud, uruchom następujące polecenie SSH, zastępując „user” odpowiednim użytkownikiem, a „instance_IP” adresem IP swojej instancji:

```sh
ssh user@instance_IP
```

Użytkownik usługi Public Cloud będzie różny w zależności od używanego systemu operacyjnego. Poniższa tabela zawiera listę użytkowników (niewyczerpującą) według systemu operacyjnego:

|System operacyjny|Użytkownik|
|---|---|
|Arch Linux|arch|
|CentOS 6|centos|
|CentOS 7|centos|
|CoreOS|core|
|Debian 7|debian|
|Debian 8|debian|
|Debian 9|debian|
|Fedora 25|fedora|
|Fedora 26|fedora|
|FreeBSD 11.0 ZFS|freeBSD|
|Ubuntu 14.04|ubuntu|
|Ubuntu 16.04|ubuntu|
|Ubuntu 16.10|ubuntu|
|Ubuntu 17.04|ubuntu|

> [!primary]
>
> Zalogowanie bezpośrednio powoduje uzyskanie dostępu z prawami zwykłego użytkownika. Aby uzyskać prawa administratora (użytkownika root), należy użyć polecenia sudo -i lub sudo su.
>


**Ostrzeżenie dotyczące skrótu serwera zdalnego SSH:**

Podczas pierwszego logowania należy potwierdzić autentyczność hosta, klikając `yes` (tak).

```sh
The authenticity of host 217.xxx.xxx.98 (217.xxx.xx.98) cant be established.
ECDSA key fingerprint is f4:95:09:ce:b6:63:73:ea:54:db:76:5e:64:f1:5e:6d.
Are you sure you want to continue connecting (yes/no)?`
```


### Logowanie do instancji systemu Linux przy użyciu systemu operacyjnego Windows

Aby zalogować się do instancji systemu Linux przy użyciu systemu Windows, można użyć programu [PuTTY](https://www.putty.org/){.external} lub — w przypadku najnowszych wydań systemu Windows 10 — [funkcji natywnych](https://docs.microsoft.com/en-us/windows/wsl/about){.external}. Następnie można postąpić zgodnie z powyższą instrukcją.


### Logowanie do instancji systemu Windows

#### Zakończenie instalacji

Po utworzeniu instancji należy przeprowadzić do końca przygotowanie systemu, czyli tak zwany proces *sysprep*. W tym celu zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} i uruchom konsolę VNC z poziomu pulpitu nawigacyjnego instancji:

![VNC console](images/vnc_console.png)

W pierwszym kroku wybierz kraj, język i układ klawiatury, a następnie kliknij przycisk `Next`{.action} (Dalej):

![Choose language in sysprep](images/sysprep_first_step.png)

Następnie wybierz hasło *administratora*:

![Choose password in sysprep](images/sysprep_password.png)

Na koniec potwierdź wprowadzone zmiany, klikając przycisk `Finish`{.action} (Zakończ). Instancja zostanie zrestartowana, a następnie będzie można zalogować się do serwera z systemem Windows.


#### Logowanie do systemu Windows

Do instancji systemu Windows należy zalogować się bezpośrednio z komputera z systemem Windows przy użyciu funkcji `Pulpit zdalny`:

![Choose password in sysprep](images/remote_desktop.png)

W następnych krokach należy wpisać adres IP instancji (pierwszy krok logowania się za pośrednictwem Pulpitu zdalnego), nazwę użytkownika (administratora) i ustawione hasło.

![Remote desktop - Login](images/remote_desktop_connection_IP.png)

![Remote desktop - User login](images/remote_desktop_connection_user.png)

Zostanie wyświetlony komunikat z prośbą o potwierdzenie danych logowania. Kliknij przycisk `Tak`{.action}:

![Login confirmation](images/connection_validation.png)

Nastąpi zalogowanie do instancji.

> [!primary]
>
> W przypadku wystąpienia problemów z zalogowaniem się do instancji systemu Windows sprawdź, czy zapora systemu Windows autoryzuje połączenia RDP. Więcej informacji na ten temat zawiera przewodnik dotyczący [konfiguracji systemu Windows Server](https://docs.ovh.com/pl/vps/windows-first-config/){.external}.
> 


## Sprawdź również

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.