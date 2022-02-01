---
title: "Zmiana hasła do konta FTP"
slug: zmiana-hasla-uzytkownika-ftp
excerpt: "Dowiedz się, jak zmienić hasło do konta FTP utworzonego na Twoim hostingu OVHcloud"
section: 'FTP i SSH'
order: 2
---

**Ostatnia aktualizacja z dnia 14-01-2022**

## Wprowadzenie

Wraz z pakietami hostingowymi OVHcloud zyskujesz dostęp do przestrzeni dyskowej plików online, z której możesz korzystać przy użyciu protokołu **FTP**.<br>Dostęp do przestrzeni dyskowej jest możliwy przez użytkownika FTP i powiązane z nim hasło.
<br>W ten sposób będziesz mógł umieścić [Twoją stronę WWW w Internecie](https://docs.ovh.com/fr/hosting/mettre-mon-site-en-ligne/#etape-2-mise-en-ligne-des-fichiers-du-site-sur-lespace-de-stockage).

**Dowiedz się, jak zmienić hasło do konta FTP utworzonego na Twoim hostingu.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź](#aller-plus-loin) ten przewodnik.
>

## Wymagania początkowe

- Posiadanie hostingu [OVHcloud](https://www.ovhcloud.com/fr/web-hosting/).
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## W praktyce

### Etap 1: dostęp do zarządzania użytkownikami FTP

Zaloguj się do Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), przejdź do sekcji `Web Cloud`{.action}, kliknij `Hosting`{.action}, a następnie wybierz odpowiednią nazwę hostingu. Wybierz kartę `FTP-SSH`{.action}.

W tabeli wyświetlają się nazwy użytkowników FTP utworzone na Twoim hostingu. Użytkownicy ci umożliwiają dostęp do Twojej przestrzeni dyskowej FTP, aby umieścić w Internecie pliki z Twojej strony WWW. Pierwszy użytkownik (login) tworzony jest automatycznie podczas instalacji hostingu.

### Etap 2: zmiana hasła użytkownika FTP

> [!primary]
>
> Aby uzyskać więcej informacji na temat dobrych praktyk w zakresie zarządzania hasłami, zapoznaj się z instrukcjami zawartymi w tym [przewodniku](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/).
>

W zależności od pakietu [hostingowego OVHcloud](https://www.ovhcloud.com/fr/web-hosting/) zmiana hasła do konta FTP w zakładce `FTP-SSH`{.action} zostanie wykonana na dwie różne sposoby:

- **w przypadku pakietów, które nie pozwalają na utworzenie drugiego użytkownika FTP** (oferty Start 10M, Kimsufi Web i Perso): kliknij ikonkę ołówka w kolumnie `Hasło`{.action}, wprowadź nowe hasło, a następnie potwierdź zmianę, klikając zielony przycisk.

![change-ftp-password-step1-perso](images/change-ftp-password-step1-perso.png){.thumbnail}

- **w przypadku pakietów umożliwiających utworzenie kilku użytkowników FTP** (oferty Pro i Performance): kliknij trzy kropki po prawej stronie wybranego użytkownika FTP, a następnie `Zmień hasło`{.action}. W oknie, które się wyświetla wprowadź nowe hasło i kliknij je dwukrotnie, a następnie kliknij przycisk `Zatwierdź`{.action}.

![change-ftp-password-step1-pro](images/change-ftp-password-step1-pro.png){.thumbnail}

Wybierz nowe hasło do bazy danych i zapisz je. W obu przypadkach musi on spełniać następujące warunki:

- Minimum 8 znaki;
- Maksymalnie 30 znaków;
- Przynajmniej jedna wielka litera;
- Przynajmniej jedna mała litera;
- Przynajmniej jedną cyfrę;
- Składać się wyłącznie z cyfr i liter.

Następnie przejdź do zakładki `Zadania w trakcie`{.action} i odśwież stronę regularnie. Efekty modyfikacji to zaledwie kilka minut.

### Etap 3: dostęp do Twojej przestrzeni dyskowej

Możesz łączyć pliki z przestrzenią dyskową na kilka sposobów:

- **FTP Explorer**\: program ten jest dostępny w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Aby z niego korzystać, w zakładce `FTP-SSH`{.action} kliknij przycisk `FTP Explorer`{.action};

- **program FTP**\: zainstaluj na Twoim komputerze program kompatybilny z protokołem FTP (np. [FileZilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/));

- **dostęp SSH** (tylko w ofercie Pro i Performance): zapoznaj się z przewodnikiem "[Korzystanie z dostępu SSH do hostingu](https://docs.ovh.com/fr/hosting/mutualise-le-ssh-sur-les-hebergements-mutualises/)", aby korzystać z tego protokołu.

> [!primary]
>
> Aby uzyskać więcej informacji, zapoznaj się z przewodnikiem ["Logowanie do przestrzeni dyskowej Twojego hostingu"](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).
>

## Sprawdź <a name="aller-plus-loin"></a>

[Krajowy system cyberbezpieczeństwa](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/){.external}

[Korzystanie z programu FileZilla na Twoim hostingu](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)

[SSH na hostingu](https://docs.ovh.com/fr/hosting/mutualise-le-ssh-sur-les-hebergements-mutualises/)

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, sprawdź naszą [ofertę pomocy](https://www.ovhcloud.com/fr/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/>.
