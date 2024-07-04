---
title: Włącz połączenia Entra ID SSO z Twoim kontem OVHcloud
excerpt: "Dowiedz się, jak powiązać identyfikator Entra ID (dawniej Azure Active Directory) z kontem OVHcloud przy użyciu protokołu SAML 2.0"
updated: 2024-06-25
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Możesz użyć uwierzytelnienia **SSO** (*Single Sign-On*), aby zalogować się do Twojego konta OVHcloud. Aby włączyć te połączenia, Twoje konto i identyfikator Entra ID (dawniej Azure Active Directory) muszą zostać skonfigurowane przy użyciu protokołu SAML (*Security Assertion Markup Language*).

**Dowiedz się, jak powiązać Twoje konto OVHcloud z zewnętrznym Entra ID.**

## Wymagania początkowe

- Dostęp do ról **Administrator aplikacji** i **administrator użytkowników** usługi Entra ID
- Posiadanie [konta OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)wferee
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

> [!primary]
>
> Aby dostawca usług (na przykład Twoje konto OVHcloud) nawiązał połączenie SSO z dostawcą tożsamości (na przykład Entra ID), musisz nawiązać wzajemne zaufanie, rejestrując połączenie SSO w obu usługach.
>

### Użytkownicy i grupy AD

Twój Entra ID działa jako dostawca tożsamości. Zlecenia uwierzytelnienia Twojego konta OVHcloud zostaną przyjęte tylko wtedy, gdy wstępnie zadeklarowałeś je jako zaufaną osobę trzecią.

Skupmy się na tożsamości dostawcy tożsamości.

#### Użytkownicy Azure

Aby rozpocząć, przejdź do dashboardu Entra ID.

![Dashboard Entra ID](images/azure_ad_dashboard.png){.thumbnail}

Następnie kliknij `Users`{.action} w menu po lewej stronie.

![Użytkownik menu Entra ID](images/azure_ad_menu_user.png){.thumbnail}

Twórz wybraną liczbę użytkowników i/lub sprawdzaj użytkowników klikając na nią.

W tym przykładzie użyty zostanie użytkownik **John Smith**.

![Użytkownik Entra ID](images/azure_ad_user.png){.thumbnail}

W przypadku uwierzytelnienia SSO tożsamość **John Smith** jest przekazywana przez Entra ID na konto OVHcloud. Jednakże tożsamość ta musi zawierać co najmniej jedną grupę. Jeśli grupa nie istnieje, sprawdź poniżej, jak ją utworzyć, aby dodać do niej **John Smith**.

#### Grupy Entra ID

Kliknij `Groups`{.action} w menu po lewej stronie.

![Grupy menu Azure](images/azure_ad_menu_groups.png){.thumbnail}

Kliknij `New group`{.action} w menu na górze i uzupełnij wszystkie niezbędne informacje.

W tym przykładzie użyta zostanie grupa **manager@ovhcloudsaml**.

![Etap 1 Entra ID Group](images/azure_ad_group_1.png){.thumbnail}

Kliknij przycisk `Create`{.action}, aby wyświetlić wszystkie informacje o tej grupie.

![Etap 2 Entra ID Group](images/azure_ad_group_2.png){.thumbnail}

Teraz użytkownicy, którzy będą używali do uwierzytelniania SSO muszą zostać dodani do grupy.

W tym przykładzie, skupmy użytkownika **John Smith** na grupie **manager@ovhcloudsaml**.

W interfejsie wybranej grupy kliknij `Members`{.action} w menu po lewej stronie, a następnie kliknij `Add members`{.action} w menu na górze.

![Entra ID Group User Asignment Etap 1](images/azure_ad_group_user_assignment_1.png){.thumbnail}

Wybierz użytkownika, który chcesz dodać do tej grupy, następnie kliknij przycisk `Select`{.action}.

![Entra ID Group User Asignment Etap 2](images/azure_ad_group_user_assignment_2.png){.thumbnail}

Teraz użytkownik jest przypisany do grupy.

Aby wykonywać uwierzytelnienia SSO, należy utworzyć aplikację Entra ID.

W tej aplikacji należy skonfigurować jednorazowe uwierzytelnienie.

### Aplikacje Entra ID

Po pierwsze, utwórz aplikację, jeśli jeszcze jej nie ma.

#### Tworzenie aplikacji Entra ID

Kliknij `Enterprise applications`{.action} w menu po lewej stronie.

![Aplikacje menu Entra ID](images/azure_ad_menu_applications.png){.thumbnail}

Kliknij `New application`{.action} w menu na górze.

![Aplikacje Entra ID etap 1](images/azure_ad_applications_1.png){.thumbnail}

Kliknij `Create your own application`{.action} w menu na górze.

![Aplikacje Entra ID etap 2](images/azure_ad_applications_2.png){.thumbnail}

Wybierz `Non-gallery`{.action} z menu po lewej stronie i kliknij przycisk `Create`{.action}.

![Aplikacje Entra ID etap 3](images/azure_ad_applications_3.png){.thumbnail}

Wyświetlą się wówczas szczegółowe informacje dotyczące aplikacji.

![Aplikacje Entra ID etap 4](images/azure_ad_applications_4.png){.thumbnail}

Aplikacja Entra ID została utworzona. Użytkownicy, którzy chcą uwierzytelniać SSO za pomocą tej aplikacji, powinni teraz zostać dodani do tej aplikacji.

#### Aplikacja Entra ID - Przydział dla użytkowników

> [!primary]
>
> Aby użytkownik wykonał uwierzytelnienie SSO z aplikacji Entra ID, należy go dodać do tej aplikacji. Poniżej znajdziesz metody dodawania użytkownika do aplikacji Entra ID.
>
> Jednakże, w przypadku gdy dysponujesz usługą **Entra ID Premium**, lepiej jest dodać grupę użytkowników.
>

W menu po lewej stronie kliknij `Users and groups`{.action}, a następnie `Add user/group`{.action} w menu na górze.

Następnie kliknij sekcję `Users`{.action}, wybierz użytkownika, który ma zostać dodany do aplikacji, po czym kliknij przycisk `Select`{.action}.

![Entra ID Application User Dołącz do etapu 1](images/azure_ad_application_user_assignment_1.png){.thumbnail}

![Entra ID Application User Dołącz do etapu 2](images/azure_ad_application_user_assignment_2.png){.thumbnail}

Aplikacja jest utworzona, użytkownik jest przydzielony. Wystarczy uruchomić SSO przez SAML.

#### Entra ID aplikacja SSO

Przejdź do ogólnego widoku przez przycisk `Overview`{.action} w menu po lewej stronie, a następnie kliknij sekcję `Set up single sign on`{.action}.

![Etap 1 Entra ID SSO](images/azure_ad_sso_1.png){.thumbnail}

Kliknij `SAML`{.action}.

![Etap 2 Entra ID SSO](images/azure_ad_sso_2.png){.thumbnail}

Kliknij `Upload metadata file`{.action} w menu na górze.

![Etap 3 Entra ID SSO](images/azure_ad_sso_3.png){.thumbnail}

Kliknij ikonę przycisku `Select a file`{.action}, wybierz plik metadanych OVHcloud Service Provider i kliknij przycisk `Add`{.action}.

Możesz uzyskać odpowiedni plik metadanych za pomocą następujących linków:

- [Metadane w regionie UE](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [Metadane regionu CA](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Pobierz plik metadanych, będziesz tego potrzebował później.

![Etap 5 Entra ID SSO](images/azure_ad_sso_5.png){.thumbnail}

Wyświetli się konfiguracja SAML.

![Etap 6 Entra ID SSO](images/azure_ad_sso_6.png){.thumbnail}

W sekcji `Attributes & Claims`{.action} kliknij przycisk `Edit`{.action}.

![Etap 9 Entra ID SSO](images/azure_ad_sso_9.png){.thumbnail}

Dodaj atrybut UPN (User Principal Name) do informacji SAML, aby poinformować OVHcloud o wiadomości e-mail użytkownika. Ten krok jest niezbędny.

Kliknij na `Add a new claim`{.action} w menu na górze.

W polu `Name`{.action} wpisz wartość `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn`.

W polu `Source attribute`{.action} wpisz `user.mail`{.action}.

Oczekuje się, że Twój interfejs będzie dość podobny do następującego zrzutu ekranu:

![Entra ID SSO — wprowadzanie UPN](images/azure_ad_sso_9bis.png){.thumbnail}

Kliknij na `Save`{.action}

Zadeklaruj teraz atrybut używany dla grupy użytkownika.

Kliknij `Add a group claim`{.action} w menu na górze.

![Etap 10 Entra ID SSO](images/azure_ad_sso_10.png){.thumbnail}

Wybierz `Security groups`{.action} i **Group ID** w `Source attribute`{.action}, a następnie kliknij przycisk `Save`{.action}.

![Etap 11 Entra ID SSO](images/azure_ad_sso_11.png){.thumbnail}

Prośba o **groups** musi się teraz znaleźć na liście.

Skopiuj i zapisz gdzieś wartość **Claim name** (np. notatnik). Będziesz potrzebował jej później.

![Etap 12 Entra ID SSO](images/azure_ad_sso_12.png){.thumbnail}

W sekcji `SAML certificates`{.action} skopiuj wartość pola `App Federation Metadata Url`{.action}.

Użyj tego linku do pobrania pliku metadanych aplikacji Entra ID, aby później korzystać z tego linku na koncie OVHcloud.

![Etap 8 Entra ID SSO](images/azure_ad_sso_8.png){.thumbnail}

### Budowa zaufania do konta OVHcloud i konfiguracja połączenia

Aplikacja Entra ID zostaje dodana jako zatwierdzony dostawca danych w Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), w którym możesz dostarczyć metadane dostawcy tożsamości.

#### Zaufanie OVHcloud

Kliknij nazwę konta w prawym górnym rogu, a następnie ponownie na pasku bocznym.

![Dostęp do menu IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Aby uzyskać dostęp do menu IAM, przejdź do Panelu klienta.

![Dostęp do menu IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

Następnie kliknij zakładkę `Tożsamości`{.action}, aby zarządzać użytkownikami lokalnymi.

![Dostęp do menu IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Następnie kliknij przycisk `Logowanie SSO`{.action}.

![OVHcloud connect SSO step 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Uzupełnij pole **Nazwa atrybutu użytkownika** nazwą oświadczenia aplikacji identyfikatora wewnętrznego **upn** oraz w polu **Nazwa atrybutu grupy** wartością nazwy oświadczenia **groups**, która została wcześniej zapisana.

Wypełnij metadane XML aplikacji Entra ID z wcześniej zarejestrowanego pliku.

Użytkowników lokalnych można zachować, zaznaczając pole `Zachowaj status „aktywny” dla użytkowników OVHcloud`.

Kliknij przycisk `Zatwierdź`{.action}.

![Ovhcloud SSO step 1](images/ovhcloud_sso_1.png){.thumbnail}

Dodawanie aplikacji Entra ID do Twojego konta e-mail zostało ustanowione, ale należy dodać grupy do Twojego konta OVHcloud.

> [!warning]
> Jeśli spróbujesz zalogować się przez SSO, prawdopodobnie wyświetli się komunikat błędu "`Not in valid groups`".
>
> Twoje konto OVHcloud sprawdza, czy uwierzytelniony użytkownik należy do grupy istniejącej na koncie.
>

Aby rozwiązać tę sytuację, sprawdź atrybut "Group" zwrócony przez aplikację Entra ID: Pole **Object Id**.

#### Sprawozdawczość grup OVHcloud

![Etap 2 Entra ID Group](images/azure_ad_group_2.png){.thumbnail}

Dodaj plik, klikając przycisk `Declarer grupy`{.action}.

![Grupy zarządzania użytkownikami Ovhcloud etap 1](images/ovhcloud_sso_menu_1.png){.thumbnail}

Uzupełnij pola, następnie kliknij przycisk `Zatwierdź`{.action}.

![Grupy zarządzania użytkownikami Ovhcloud etap 2](images/ovhcloud_sso_menu_2.png){.thumbnail}

Utworzona grupa musi pojawić się na liście.

![Grupy zarządzania użytkownikami Ovhcloud etap 3](images/ovhcloud_sso_menu_3.png){.thumbnail}

Uwaga: jeśli nadasz tej grupie uprawnienia `Brak`, konieczne będzie przypisanie uprawnień za pośrednictwem [zasad IAM](/pages/account_and_service_management/account_information/iam-policy-ui).

### Logowanie przez SSO

Na [stronie logowania OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) wpisz [identyfikator](/pages/account_and_service_management/account_information/ovhcloud-account-creation#jaki-jest-moj-identyfikator-klienta), po którym następuje **/idp** bez hasła i kliknij przycisk `Login`{.action}.

![Ovhcloud SSO Login step 1](images/ovhcloud_sso_login_1.png){.thumbnail}

Zostaniesz przekierowany na stronę logowania do aplikacji Entra ID. Wybierz `Use another account`{.action}.

![Etap 1 Entra ID Login](images/azure_ad_login_1.png){.thumbnail}

Wpisz e-mail użytkownika aplikacji Entra ID, a następnie kliknij przycisk `Next`{.action}.

![Etap 2 Entra ID Login](images/azure_ad_login_2.png){.thumbnail}

Wprowadź hasło użytkownika aplikacji Entra ID, a następnie kliknij przycisk `Sign In`{.action}.

![Etap 3 Entra ID Login](images/azure_ad_login_3.png){.thumbnail}

Teraz jesteś zalogowany do tego samego identyfikatora klienta, ale za pośrednictwem użytkownika Active Directory i korzystając z SSO aplikacji Entra ID.

![Ovhcloud SSO Login step 2](images/ovhcloud_sso_login_2.png){.thumbnail}

Jeśli Twój e-mail nie wyświetla się poniżej `Connected via SSO`, oznacza to, że nie skonfigurowałeś poprawnie atrybutu **UPN** i niektóre funkcje nie będą działać.

## Sprawdź również

[Załóż konto OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)

[Zabezpieczenie konta OVHcloud i zarządzanie danymi osobowymi](/pages/account_and_service_management/account_information/all_about_username)

[Definicja i zarządzanie hasłem do konta](/pages/account_and_service_management/account_information/manage-ovh-password)

[Zabezpieczenie konta OVHcloud za pomocą weryfikacji dwuetapowej](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Jak korzystać z polityki IAM w Panelu klienta](/pages/account_and_service_management/account_information/iam-policy-ui).

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
