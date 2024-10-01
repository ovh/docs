---
title: Włącz połączenia Active Directory Federation Services (AD FS) SSO z Twoim kontem OVHcloud
excerpt: "Dowiedz się, jak powiązać usługę Active Directory Federation Services (AD FS) z Twoim kontem OVHcloud przez SAML 2.0"
updated: 2024-06-25
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Do zalogowania się do konta OVHcloud możesz użyć **unikalnego** uwierzytelnienia SSO (*Single Sign-On*). Aby włączyć te połączenia, Twoje konto oraz usługi AD FS (*Active Directory Federation Services*) muszą być skonfigurowane za pomocą uwierzytelniania SAML (*Security Assertion Markup Language*).

**Niniejszy przewodnik wyjaśnia, jak powiązać Twoje konto OVHcloud z zewnętrzną Active Directory.**

## Wymagania początkowe

- Usługi AD FS (Active Directory Federation Services) muszą być wykonywane na serwerze
- Posiadanie [konta OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Zalogowanie do [Panelu klienta OVHcloud](/links/manager)

## W praktyce

> [!primary]
>
> Aby usługodawca (tzn. Twoje konto OVHcloud) mógł nawiązać połączenie SSO z dostawcą tożsamości (tzn. usługą AD FS), należy przede wszystkim nawiązać relację zaufania.
>

### Budowa zaufania AD FS

Twój AD FS działa jako dostawca tożsamości. Zlecenia uwierzytelnienia Twojego konta OVHcloud zostaną przyjęte tylko wtedy, gdy zostanie ono uznane za zaufaną organizację trzecią.

W kontekście Active Directory oznacza to, że należy go dodać jako `Relying Party Trust`.

W menedżerze serwerów otwórz menu `Tools`{.action} i wybierz `AD FS Management`{.action}.

![Menu Narzędzia Windows Server](images/windows_server_tools_menu.png){.thumbnail}

Kliknij `Relying Party Trusts`{.action}.

![AD FS Menu](images/adfs_menu.png){.thumbnail}

Następnie kliknij `Add Relying Party Trust...`{.action}.

![Menu zatwierdzeń AD FS](images/adfs_relying_party_trusts_menu.png){.thumbnail}

Wybierz `Claims aware`{.action} i zatwierdź przyciskiem `Start`{.action}.

![AD FS dodanie zatwierdzenia - etap 1](images/adfs_add_relying_party_trust_1.png){.thumbnail}

Możesz wprowadzić ręcznie informacje dotyczące zaufanego podmiotu trzeciego lub zaimportować je z pliku metadanych.

#### Importuj metadane OVHcloud SP

Możesz uzyskać odpowiedni plik metadanych za pomocą następujących linków:

- [Metadane regionu UE](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [Metadane regionu CA](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Wybierz `Import data about the relying party from a file`{.action} i wybierz Twój plik metadanych.

Następnie kliknij przycisk `Next`{.action}.

![AD FS - dodanie zatwierdzenia - etap 2](images/adfs_add_relying_party_trust_2.png){.thumbnail}

Wprowadź nazwę wyświetlacza dla zaufanej strony trzeciej i kliknij przycisk `Next`{.action}.

![AD FS - dodanie zatwierdzenia - etap 3](images/adfs_add_relying_party_trust_3.png){.thumbnail}

Kliknij `Next`{.action} w oknie kontroli dostępu.

![AD FS - dodanie zatwierdzenia - etap 4](images/adfs_add_relying_party_trust_4.png){.thumbnail}

Kliknij `Next`{.action}, aby kontynuować.

![AD FS - dodanie zatwierdzenia - etap 5](images/adfs_add_relying_party_trust_5.png){.thumbnail}

Kliknij przycisk `Close`{.action} w ostatnim oknie. Zatwierdzenie przez OVHcloud jako zaufaną organizację trzecią zostało dodane do Twojego AD FS.

![Zatwierdzenia AD FS](images/adfs_relying_party_trusts.png){.thumbnail}

> [!primary]
>
> Z OVHcloud dodanym jako zaufany podmiot zewnętrzny, powinieneś już mieć możliwość logowania się przez SSO. Jednak wszystkie informacje dotyczące tożsamości użytkownika (w zakresie "twierdzenia" SAML) pozostaną niedostępne do czasu skonfigurowania strategii dopasowania pól LDAP Active Directory do atrybutów SAML.
>

#### Korespondencja atrybutów LDAP z atrybutami SAML

Kliknij pozycję OVHcloud w części "Relying Party Trusts".

![Mapa zatwierdzenia AD FS etap 1](images/adfs_relying_party_trusts_mapping_1.png){.thumbnail}

Następnie kliknij `Edit Claim Issuance Policy...`{.action}.

![Mapa zatwierdzenia AD FS etap 2](images/adfs_relying_party_trusts_mapping_2.png){.thumbnail}

Kliknij przycisk `Add Rule...`{.action}.

![Mapa zatwierdzenia AD FS etap 3](images/adfs_relying_party_trusts_mapping_3.png){.thumbnail}

Kliknij `Next`{.action}.

Wpisz nazwę reguły i zdefiniuj tabelę korelacji.

Wybierz `Active Directory` jako `Attribute store`.

> [!primary]
>
> Poniższe parametry mogą być dowolnie skonfigurowane tak, aby dostawca usług mógł poprawnie odczytać dane LDAP Active Directory. Jako przykład możesz wykorzystać poniższy obraz.

Po zakończeniu kliknij przycisk `Finish`{.action}.

![Mapa zatwierdzenia AD FS etap 4](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

![Mapa zatwierdzenia AD FS etap 5](images/adfs_relying_party_trusts_mapping_5.png){.thumbnail}

Kliknij przycisk `Apply`{.action} i zatwierdź `OK`{.action}.

![Mapa zatwierdzenia etapu 6](images/adfs_relying_party_trusts_mapping_6.png){.thumbnail}

Po utworzeniu tabeli korelacji Twoja usługa AD FS stała się zaufana OVHcloud jako dostawca usług. Kolejnym krokiem jest sprawdzenie, czy konto OVHcloud zaufa użytkownikowi AD FS.

### Budowa zaufania do konta OVHcloud i konfiguracja połączenia

Opcja dodawania AD FS jako zaufanego dostawcy danych jest dostępna w [panelu klienta OVHcloud](/links/manager), w którym możesz dostarczyć metadane dostawcy tożsamości.

[Kliknij nazwę konta w prawym górnym rogu, a następnie ponownie na pasku bocznym.

![Dostęp do menu IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Aby uzyskać dostęp do menu IAM, przejdź do Panelu klienta.

![Dostęp do menu IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

Następnie kliknij zakładkę `Tożsamości`{.action}, aby zarządzać użytkownikami lokalnymi.

![Dostęp do menu IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Kliknij przycisk `SSO connection`{.action} .

![Etap 1 OVHcloud logowania SSO](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Wpisz metadane XML Twojej usługi AD FS. W tym przypadku pole `Nazwa atrybutu grupy` jest opcjonalne. Kliknij na `Zatwierdź`{.action}.

Użytkowników lokalnych można zachować, zaznaczając pole `Zachowaj status „aktywny” dla użytkowników OVHcloud`.

![Etap 2 OVHcloud logowania SSO](images/ovhcloud_user_management_connect_sso_2.png){.thumbnail}

Odszukaj AD FS jako dostawcę danych, a także grupy domyślne.

![Etap 3 OVHcloud logowania SSO](images/ovhcloud_user_management_connect_sso_3.png){.thumbnail}

Aby uzyskać więcej informacji, kliknij link pod `URL usługi SSO`.

![Etap 4 OVHcloud logowania SSO](images/ovhcloud_user_management_connect_sso_4.png){.thumbnail}

![Etap 5 OVHcloud logowania SSO](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

Przycisk `...`{.action} pozwala na aktualizację lub usunięcie certyfikatu SSO i na zapoznanie się z jego szczegółami.

![Etap 6 OVHcloud logowania SSO](images/ovhcloud_user_management_connect_sso_6.png){.thumbnail}

Usługa AD FS jest obecnie uważana za zaufanego dostawcę tożsamości. Jednocześnie należy dodać grupy do konta OVHcloud.

> [!warning]
> Jeśli spróbujesz zalogować się przez SSO, prawdopodobnie wyświetli się komunikat błędu `Not in valid groups`.
>
> Twoje konto OVHcloud sprawdza, czy użytkownik loguje się do grupy istniejącej na koncie.
>

Aby to zrobić, sprawdź informacje zebrane w atrybucie "Group" zwróconym przez usługę AD FS.

Weźmy na przykład użytkownika "John Doe" z Active Directory, jak pokazano na poniższym obrazku.

![Użytkownik AD FS](images/adfs_user.png){.thumbnail}

Sprawdź tabelę korelacji w AD FS:

![Mapowanie zatwierdzenia części zaufania AD FS](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

W tym przykładzie atrybut "Group" zwrócony przez Active Directory dla użytkownika "John Doe" jest "title". Odpowiada to "job title", który jest `manager@<my-domain>.com`.

Możesz również sprawdzić w twierdzeniu SAML:

```xml
<AttributeStatement>
    <Attribute Name="http://schemas.xmlsoap.org/claims/Group">
        <AttributeValue>manager@<my-domain>.com</AttributeValue>
    </Attribute>
    ...
</AttributeStatement>
```

Oznacza to, że należy dodać grupę `manager@<my-domain>.com` do Twojego konta OVHcloud i przypisać do niego określoną rolę. W przeciwnym razie Twoje konto OVHcloud nie wie, co może robić użytkownik.

Dodaj konto klikając przycisk `Zgłoś grupę`{.action} i wypełniając pola:

![Grupy zarządzania użytkownikami AD FS](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![Grupy zarządzania użytkownikami AD FS](images/ovhcloud_user_management_groups_2.png){.thumbnail}

Następnie możesz sprawdzić, czy grupa została dodana do Twojego konta OVHcloud w sekcji `Grupy`:

![Grupy zarządzania użytkownikami AD FS](images/ovhcloud_user_management_groups_3.png){.thumbnail}

Po zalogowaniu się z użytkownikiem Active Directory "John Doe" Twoje konto OVHcloud potwierdzi rolę "REGULAR" określoną przez jego grupę.

Uwaga: jeśli nadasz tej grupie uprawnienia `Brak`, konieczne będzie przypisanie uprawnień za pośrednictwem [zasad IAM](/pages/account_and_service_management/account_information/iam-policy-ui).

Następnie będziesz mógł wylogować się ze swojego konta i ponownie zalogować się z AD FS jako dostawcą danych.

### Logowanie przez SSO

Na [stronie logowania OVHcloud](/links/manager) wpisz [identyfikator](/pages/account_and_service_management/account_information/ovhcloud-account-creation#jaki-jest-moj-identyfikator-klienta), po którym następuje **/idp** bez hasła i kliknij przycisk `Login`{.action}.

![Połączenie z federacją OVHcloud](images/ovhcloud_federation_login_1.png){.thumbnail}

Zostaniesz przekierowany na stronę logowania AD FS. Wprowadź login/hasło użytkownika Active Directory LDAP, następnie kliknij przycisk `Sign in`{.action}.

![OVHcloud Federacja Logiczna Przekierowania AD FS](images/ovhcloud_federation_login_2.png){.thumbnail}

Teraz jesteś zalogowany tym samym identyfikatorem klienta, ale za pomocą użytkownika Active Directory oraz SSO AD FS.

![Federacja Informacji o Użytkownikach OVHcloud](images/ovhcloud_user_infos_federation.png){.thumbnail}

## Sprawdź również

[Załóż konto OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)

[Zabezpieczenie konta OVHcloud i zarządzanie danymi osobowymi](/pages/account_and_service_management/account_information/all_about_username)

[Definicja i zarządzanie hasłem do konta](/pages/account_and_service_management/account_information/manage-ovh-password)

[Zabezpieczenie konta OVHcloud za pomocą weryfikacji dwuetapowej](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Jak korzystać z polityki IAM w Panelu klienta](/pages/account_and_service_management/account_information/iam-policy-ui).

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
