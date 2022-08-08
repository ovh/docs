---
title: 'Pierwsze kroki z serwerem VPS'
excerpt: 'Poznaj podstawy korzystania z serwera VPS'
slug: pierwsze-kroki-vps
section: 'Pierwsze kroki'
order: 1
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 25-03-2022**
 
## Wprowadzenie

Prywatny serwer wirtualny VPS (z ang. *Virtual Private Server*) to wirtualny serwer dedykowany. W przeciwieństwie do hostingu, gdzie techniczne zarządzanie należy do zadań OVHcloud, Twój serwer VPS jest administrowany wyłącznie przez Ciebie.

**Niniejszy przewodnik zawiera podstawowe informacje, które pomogą Ci zarządzać serwerem VPS.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji serwery, za które w pełni odpowiadasz - nie mając dostępu do tych maszyn, nie możemy być ich administratorem. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta. Oddajemy w Twoje ręce przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji “Sprawdź również” niniejszego przewodnika.
>

## Wymagania początkowe

- Rezerwacja Twojego serwera VPS na [stronie OVHcloud](https://www.ovhcloud.com/pl/vps/){.external}.
- Zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}
- Dane do logowania wysłane e-mailem po instalacji

## W praktyce

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer w części `Prywatny serwer wirtualny`{.action}.

Otrzymasz dashboard, który zawiera ważne informacje o Twojej usłudze i pozwala na wykonywanie najważniejszych operacji. Jego wygląd będzie różnił się w zależności od gamy, do jakiej należy Twój VPS.

- Jeżeli właśnie zamówiłeś/-aś serwer VPS, jego numer referencyjny przedstawia się w sposób następujący:  *vps-XXXXXXX.vps.ovh.net* (przy czym *X* odpowiada cyfrze lub literze).
- Jeśli zarządzasz starszym modelem VPS, jego numer referencyjny będzie skonstruowany inaczej: *vpsXXXX.ovh.net* (gdzie *X* odpowiada liczbie).

W przypadku aktualnej gamy VPS, przeczytaj następną sekcję niniejszego przewodnika: **Pierwsze kroki (aktualna gama VPS)**.

W przypadku starszego modelu VPS, zapraszamy do dalszej lektury przewodnika po kliknięciu w link: [Pierwsze kroki (poprzednia gama VPS)](./#pierwsze-kroki-poprzednia-gama-vps_1).

### Pierwsze kroki (aktualna gama VPS)

#### Łączenie z Twoim serwerem VPS (gama aktualna)

W momencie pierwszej instalacji lub reinstalacji z poziomu panelu klienta, zostanie stworzony profil użytkownika posiadający wszystkie uprawnienia. Jego dane identyfikacyjne zostaną Ci wysłane w wiadomości e-mail.
Nazwa użytkownika zostanie wygenerowana w zależności od systemu operacyjnego, na przykład “ubuntu” czy “debian”.

Z serwerem VPS będzie można połączyć się za pomocą SSH, używając nazwy użytkownika oraz hasła dostępu. (SSH to szyfrowany protokół komunikacyjny. Aby dowiedzieć się więcej na jego temat, zapraszamy do lektury [przewodnika wprowadzającego do tematyki SSH dla serwerów dedykowanych OVHcloud](../../dedicated/ssh-wprowadzenie/). Dostęp do Twojego serwera odbywa się przez okienko terminala linii poleceń (Linux lub MAC), a w systemie Windows za pomocą oprogramowania innych producentów (zalecamy PuTTy).

Jeśli korzystasz na przykład z oprogramowania PuTTy, wystarczy, że otworzysz aplikację i wpiszesz nazwę serwera lub jego adres IPv4, aby zainicjować połączenie. Po wpisaniu nazwy użytkownika oraz hasła otrzymasz dostęp do interfejsu linii poleceń CLI (z ang. <i>Command Line Interface</i>).

![zastosowanie putty](images/putty1.png){.thumbnail}

Po otworzeniu terminala należy wpisać następujące polecenie, aby połączyć się z Twoim serwerem VPS używając informacji przekazanych e-mailem (nazwa użytkownika i adres IPv4):

```bash
ssh username@IPv4_of_your_VPS
```

Ponieważ jesteś teraz zalogowany z wysokimi prawami (użytkownik *sudo*), możesz wprowadzić polecenia do wykonywania zadań administracyjnych. Przed rozpoczęciem tych operacji zalecamy zmianę hasła:

```bash
~$ sudo passwd username
New password:
Retype new password:
passwd: password updated successfully
```

Należy zaznaczyć, iż hasła nie są wyświetlane. Zmień następnie profil użytkownika na profil “root” i ustaw Twoje hasło dostępu dla administratora:

```bash
~$ sudo su -
~# passwd
New password:
Retype new password:
passwd: password updated successfully
```

#### Aktywacja połączeń root

Ze względów bezpieczeństwa połączenie z użytkownikiem "root" zostało wyłączone. Jeśli chcesz zezwolić na tego typu połączenia, skorzystaj z instrukcji zawartych w [tym przewodniku](../root-password/#wlacz-haslo-root_1).

#### Restart Twojego serwera VPS (gama aktualna) <a name="reboot-current-range"></a>

Restart może być niezbędny do aktualizacji konfiguracji lub rozwiązania problemu. Jeśli to możliwe, wykonaj "soft reboot" serwera za pomocą wiersza poleceń:

```bash
reboot
```

W każdej chwili możesz jednak wykonać "reboot hard" w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). W zakładce `Strona główna`{.action} kliknij `...`{.action} naprzeciwko "Boot" w strefie **Twój VPS**, następnie `Restart serwera VPS`{.action} ponownie i `Zatwierdź`{.action} w oknie kontekstowym.

![Restart](images/reboot-vps-current01.png){.thumbnail}

#### Instalacja lub reinstalacja Twojego serwera VPS (gama aktualna) <a name="reinstallvps"></a>

Każdą reinstalację możesz przeprowadzić bezpośrednio z poziomu panelu klienta OVHcloud. Z zakładce “Strona główna” odszukaj  “OS / Dystrybucja” w części **Twój VPS**. Kliknij `...`{.action}, a następnie `Reinstalacja serwera VPS`{.action}.

![Reinstalacja serwera VPS](images/2022panel_02.png){.thumbnail}

Po otwarciu się okna będziesz mieć do wyboru:

- jedną spośród proponowanych dystrybucji;
- [klucz SSH](../../dedicated/tworzenie-klucze-ssh-dedykowane/) (opcjonalnie).

![Reinstalacja serwera VPS](images/2020panel_01.png){.thumbnail}

> [!primary]
>
> Niektóre zastrzeżone systemy operacyjne lub platformy, takie jak Plesk lub cPanel, wymagają licencji, które generują dodatkowe koszty. Licencjami można zarządzać w Panelu klienta OVHcloud: przejdź do sekcji `Serwer`{.action} w lewym górnym rogu Panelu klienta i kliknij `Licencje`{.action}.
> 
Aby system operacyjny **Windows** uruchomił się na serwerze VPS, **wybierz go na etapie zamówienia**. Na serwerze VPS, na którym zainstalowano inny system operacyjny, nie można zainstalować systemu Windows przy użyciu opisanej powyżej metody.
> 

W Twoim panelu klienta wyświetli się pasek postępu informujący o stanie zaawansowania procesu reinstalacji, która może trwać do 30 minut.

### Pierwsze kroki (poprzednia gama VPS)

#### Łączenie z Twoim serwerem VPS (poprzednia gama)

Podczas instalacji (lub reinstalacji) serwera VPS otrzymasz e-mail z hasłem dostępu root. Połączenie będzie realizowane przy użyciu protokołu SSH. szyfrowanego protokołu komunikacyjnego. Aby dowiedzieć się więcej na jego temat, zapraszamy do lektury [przewodnika wprowadzającego do tematyki SSH dla serwerów dedykowanych OVHcloud](../../dedicated/ssh-wprowadzenie/). 

Dostęp do Twojego serwera odbywa się przez okienko terminala linii poleceń (Linux lub MAC), a w systemie Windows za pomocą oprogramowania innych producentów (zalecamy PuTTy).

Jeśli korzystasz na przykład z oprogramowania PuTTy, wystarczy, że otworzysz aplikację i wpiszesz nazwę serwera lub jego adres IPv4, aby zainicjować połączenie. Po wpisaniu nazwy użytkownika oraz hasła otrzymasz dostęp do interfejsu linii poleceń CLI (z ang. <i>Command Line Interface</i>).

![zastosowanie putty](images/putty1.png){.thumbnail}

Po otworzeniu terminala należy wpisać następujące polecenie, aby połączyć się z serwerem VPS:

```bash
ssh root@IPv4_of_your_VPS
```

Albo:

```bash
ssh root@your_VPS_reference_name
```

#### Restart Twojego serwera VPS (poprzednia gama) <a name="reboot-older-range"></a>

Restart może być niezbędny do aktualizacji konfiguracji lub rozwiązania problemu. Jeśli to możliwe, wykonaj "soft reboot" serwera za pomocą wiersza poleceń:

```bash
reboot
```

W każdej chwili możesz jednak wykonać "reboot hard" w Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). W zakładce `Strona główna`{.action} kliknij  `Restart serwera VPS`{.action} ponownie i `Zatwierdź`{.action} w oknie kontekstowym.

![Restart](images/reboot-vps-older.png){.thumbnail}

#### Instalacja lub reinstalacja Twojego serwera VPS (poprzednia gama)

Każda reinstalacja zostaje przeprowadzona bezpośrednio z poziomu Twojego panelu klienta. W tym celu wystarczy kliknąć przycisk `Reinstalacja serwera VPS`{.action} w zakładce `Strona główna`{.action}:

![Reinstalacja serwera VPS](images/reinstall_manager.png){.thumbnail}

Po otwarciu się okna będziesz mieć do wyboru:

- jedną spośród proponowanych dystrybucji;
- język;
- [klucz SSH](../../dedicated/tworzenie-klucze-ssh-dedykowane/) (opcjonalnie).

![Menu z opcjami reinstalacji](images/reinstall_menu.png){.thumbnail}

> [!primary]
>
> Niektóre zastrzeżone systemy operacyjne lub platformy, takie jak Plesk lub cPanel, wymagają licencji, które generują dodatkowe koszty. Licencjami można zarządzać w Panelu klienta OVHcloud: przejdź do sekcji `Serwer`{.action} w lewym górnym rogu Panelu klienta i kliknij `Licencje`{.action}.
>
Aby system operacyjny **Windows** uruchomił się na serwerze VPS, **wybierz go na etapie zamówienia**. Na serwerze VPS, na którym zainstalowano inny system operacyjny, nie można zainstalować systemu Windows przy użyciu opisanej powyżej metody.
>

W Twoim panelu klienta wyświetli się pasek postępu informujący o stanie zaawansowania procesu reinstalacji, która może trwać do 30 minut.

### Zabezpiecz Twój serwer VPS

Jak wyjaśniono w sekcji "Cel" niniejszego przewodnika, jesteś administratorem Twojego serwera VPS. Jesteś odpowiedzialny za Twoje dane i ich bezpieczeństwo.

Aby uzyskać podstawowe porady, zapoznaj się z przewodnikiem [Zabezpieczenie serwera VPS](../porady-zabezpieczenie-vps/).

### Przypisz domenę

Korzystanie z serwera VPS do edycji strony WWW wiąże się z przypisaniem domeny za pomocą DNS. Jeśli zarządzasz domeną w OVHcloud, zapoznaj się z naszym przewodnikiem dotyczącym [modyfikacji strefy DNS](../../domains/hosting_www_jak_edytowac_strefe_dns/), aby uzyskać instrukcje.

### Zabezpiecz swoją domenę certyfikatem SSL

Po zainstalowaniu i zabezpieczeniu Twojego serwera VPS, masz możliwość zabezpieczenia nazwy Twojej domeny oraz Twojej strony web. W tym celu konieczne jest zainstalowanie certyfikatu SSL, który umożliwi transfer danych w ramach protokołu szyfrowanego *https*, a nie wyłącznie na podstawie protokołu *http*.

Certyfikat SSL możesz zainstalować ręcznie, bezpośrednio na serwerze VPS. W tym celu skonsultuj oficjalne materiały informacyjne odnoszące się do używanej przez Ciebie dystrybucji.

OVHcloud zaproponuje Ci w sposób automatyczny [SSL Gateway](https://www.ovh.pl/ssl-gateway/). Zachęcamy do odwiedzenia [strony komercyjnej](https://www.ovh.pl/ssl-gateway/){.external} lub zapoznania się z [dokumentacją](https://docs.ovh.com/pl/ssl-gateway/){.external} dotyczącą tej oferty.

## Sprawdź również

[Wprowadzenie do protokołów SSH](../../dedicated/ssh-wprowadzenie/)

[Zabezpieczenie serwera VPS](../porady-zabezpieczenie-vps/)

[Skonfiguruj nową instalację Windows Server](../windows-first-config/)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
