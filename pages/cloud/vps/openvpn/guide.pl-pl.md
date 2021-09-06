---
title: 'Wdrażanie serwera OpenVPN'
slug: openvpn
excerpt: 'Dowiedz się, jak zainstalować serwer OpenVPN na serwerze VPS'
section: 'Poziom zaawansowany'
hidden: true
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 24-06-2021**

## Wprowadzenie

OpenVPN to oprogramowanie pozwalające na tworzenie wirtualnej sieci prywatnej (VPN). Za pomocą szablonu VPS OVHcloud dla serwera OpenVPN będziesz mógł zainstalować i korzystać z osobistej usługi VPN w kilku etapach.

**Dowiedz się, jak utworzyć własną usługę VPN z serwerem VPS i OpenVPN.**

## Wymagania początkowe

- Posiadanie serwera [VPS](https://www.ovhcloud.com/pl/vps/) w Panelu klienta OVHcloud
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

## W praktyce

### Zainstaluj serwer OpenVPN

> [!primary]
>
Jeśli chcesz korzystać z istniejącej usługi VPS, możesz to zrobić w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), [reinstalując tę usługę za pomocą szablonu OpenVPN](../pierwsze-kroki-vps/#reinstallvps).
>

Zamów serwer VPS na [stronie produktu](https://www.ovhcloud.com/pl/vps/). Podczas wyboru obrazu wybierz `Dystrybucja z aplikacją`{.action}, a następnie `OpenVPN`{.action} jako system operacyjny.

![Zamówienie VPS](images/order_vps.png){.thumbnail}

Po zainstalowaniu serwera VPS otrzymasz e-mail z danymi do logowania.

![E-mail instalacyjny](images/opencredent2.png){.thumbnail}

Twój serwer VPN jest gotowy. Aby się zalogować, kliknij link w e-mailu instalacyjnym, który otworzy interfejs Web OpenVPN Client. Wprowadź dane identyfikacyjne OpenVPN podane w tym samym e-mailu.

![Strona logowania](images/login_user.png){.thumbnail}

### Instalacja i wykorzystanie klienta OpenVPN

#### W systemie Windows

W interfejsie klienta wybierz `symbol Windows`{.action}.

![Interfejs użytkownika](images/windows_client.png){.thumbnail}

Zapisz plik `.msi` i uruchom go.

Po zainstalowaniu aplikacji klient możesz ją uruchomić w menu Windows lub na pasku zadań.

![Win app](images/win_launch.png){.thumbnail}

Zaloguj się za pomocą identyfikatora OpenVPN dostarczonego w e-mailu instalacyjnym.

![Connexion Windows](images/win_login.png){.thumbnail}

Od tej pory będziesz korzystał z adresu IP Twojego VPN.

Możesz sprawdzić adres IP na stronie [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.

#### Na Linux

##### **Zainstaluj klienta OpenVPN**

Do instalacji klienta dla dystrybucji typu Fedora/CentOS/RedHat:

```sh
sudo yum install openvpn
```

Instalacja klienta dla dystrybucji typu Ubuntu/Debian:

```sh
sudo apt-get install openvpn
```

Pobierz również plik konfiguracyjny `client.ovpn` z interfejsu WWW klienta OpenVPN.

![Interfejs użytkownika](images/ovpn.png){.thumbnail}

##### **Uruchom klienta OpenVPN z plikiem konfiguracyjnym**

```sh
sudo openvpn --config client.ovpn
```

Zostaniesz poproszony o wpisanie danych dostępowych:

```sh
 Enter Auth Username: openvpn
 Enter Auth Password: **********************
```

Od tej pory będziesz korzystał z adresu IP Twojego VPN.

Możesz sprawdzić adres IP na stronie [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.

#### Na MacOS

Po zalogowaniu wybierz `symbol Apple`{.action}.

![Interfejs użytkownika](images/mac_client.png){.thumbnail}

Zapisz plik i uruchom go.

![Login Mac](images/login_screen_mac.png){.thumbnail}

Zaloguj się za pomocą identyfikatora OpenVPN dostarczonego w e-mailu instalacyjnym.

![Login Mac](images/connection_openvpn_mac.png){.thumbnail}

Od tej pory będziesz korzystał z adresu IP Twojego VPN.

Możesz sprawdzić adres IP na stronie [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.

### Dostęp do serwera OpenVPN

W interfejsie Web OpenVPN Client (dostępnym poprzez adres URL podany w e-mailu instalacyjnym) kliknij przycisk `Admin`{.action}.

![Interfejs użytkownika](images/admin_button.png){.thumbnail}

Możesz również dodać `admin` do URL OpenVPN, aby uzyskać bezpośredni dostęp do strony logowania:

```sh
https://IP_of_your_VPS:943/admin
```

Zaloguj się za pomocą tych samych danych OpenVPN, które są dostępne w e-mailu i akceptuj warunki.

Teraz masz dostęp do panelu konfiguracyjnego serwera OpenVPN.

![Serwer dostępu OpenVPN](images/admin_access.png){.thumbnail}

## Sprawdź również

[Pierwsze kroki z serwerem VPS](../pierwsze-kroki-vps/)

[OpenVPN](https://openvpn.net/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.