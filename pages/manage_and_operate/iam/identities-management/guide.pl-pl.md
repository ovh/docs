---
title: "Prezentacja tożsamości, które mogą współdziałać w ramach konta OVHcloud"
excerpt: "Poznaj różne typy tożsamości pozwalające na korzystanie z produktu OVHcloud"
updated: 2024-10-21
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Celem niniejszego przewodnika jest zaprezentowanie różnych typów tożsamości, którymi można zarządzać na koncie OVHcloud.

## Wymagania początkowe

- Posiadanie [konta klienta OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).

## W praktyce

### Prezentacja tożsamości

Istnieje kilka rodzajów tożsamości, które mogą wchodzić w interakcje z produktami OVHcloud:

![identities-types](images/identities_types.png){.thumbnail}

### Konto OVHcloud

Jest to główna tożsamość, za pomocą której możesz zalogować się do Panelu klienta OVHcloud. Korzystasz z konta OVHcloud, gdy logujesz się za pomocą adresu e-mail lub identyfikatora klienta (na przykład: xx1111-ovh) w Panelu klienta.

Tożsamość ta działa jako konto root i nie można ograniczyć jej praw bez względu na wdrożone polityki dostępu.

Konto OVHcloud może być również wskazane w dokumentacji jako NIC lub NIC-handle.

### Użytkownicy lokalni

Użytkownicy lokalni to tożsamości powiązane z Twoim kontem OVHcloud. Konta te są przeznaczone do **interakcji międzyludzkich** z produktami OVHcloud, ponieważ opierają się na uwierzytelnianiu typu login/password i których prawa dostępu zależą od wdrożonych [zasad IAM](/pages/account_and_service_management/account_information/iam-policy-ui).

Konfiguracja użytkowników lokalnych została szczegółowo opisana w [dokumentacji dedykowanej](/pages/account_and_service_management/account_information/ovhcloud-users-management).

Możesz również użyć ich do połączenia się z API OVHcloud [generując token powiązany z użytkownikiem](/pages/manage_and_operate/api/first-steps). Uprawnienia do tego tokena mogą być ograniczone do określonego zakresu, w uzupełnieniu do polityki IAM.

Aby aplikacja oparta na tokenach powiązana z użytkownikiem lokalnym mogła korzystać z API OVHcloud, konieczne jest, aby token zintegrował ją w swoim zakresie, a użytkownik, który utworzył token, miał uprawnienia do tego API.

Użytkownicy lokalni mogą być również określani w dokumentacji jako *sub-user*.

Zalecamy, aby w celu zapewnienia identyfikowalności włączyć użytkowników lokalnych, gdy tylko więcej niż jedna osoba będzie musiała zalogować się na Twoje konto OVHcloud.

### Kont usług

Konta usług to tożsamości powiązane z Twoim kontem OVHcloud. Konta te są przeznaczone do **interakcji maszyn** z produktami OVHcloud, ponieważ opierają się na uwierzytelnianiu typu klient/token i których prawa dostępu zależą od wdrożonych [zasad IAM](/pages/account_and_service_management/account_information/iam-policy-ui).

Tworzenie kont usług opisano w [dokumentacji dedykowanej] (/pages/manage_and_operate/api/manage-service-account).

Konto usługi może być następnie użyte do logowania [logowania do API OVHcloud](/pages/account_and_service_management/account_information/authenticate-api-with-service-account) oraz do interfejsów API innych firm, takich jak te udostępniane przez [OpenStack](/pages/manage_and_operate/iam/authenticate-api-openstack-with-service-account).

Logowanie za pomocą kont usług nie jest jeszcze obsługiwane w zestawach SDK i przez providera Terraform.

### użytkowników federacyjnych

To są konta użytkowników z [federacji tożsamości] (/products/manage-operate-user-federation). Użytkownicy ci pochodzą z katalogu innych firm i nie są bezpośrednio zarządzani przez OVHcloud. Ich prawa dostępu zależą od wdrożonych [polityk IAM](/pages/account_and_service_management/account_information/iam-policy-ui).

Użytkownicy federacyjni są reprezentowani przez grupy użytkowników na poziomie zarządzania prawami.

Zalecamy utworzenie federacji tożsamości, gdy tylko liczba osób zaloguje się na Twoje konto OVHcloud stanie się wystarczająca lub jeśli chcesz scentralizować dostęp w katalogu osób trzecich używanym do świadczenia innych usług niż OVHcloud.

### Grupy użytkowników

W celu ułatwienia operacji różne tożsamości można powiązać z grupami użytkowników.
Konfiguracja grup użytkowników jest opisana w dokumentacji zarządzania [użytkownicy lokalni](/pages/account_and_service_management/account_information/ovhcloud-users-management).

### Użytkownicy produktów OVHcloud

Niektóre produkty udostępnione przez OVHcloud mogą dodatkowo proponować swoich własnych użytkowników, takie jak OpenStack, VMware vSphere lub Object Storage.
Użytkownicy ci są niezależni od konta OVHcloud i są zarządzani bezpośrednio za pomocą odpowiednich produktów.

W przypadku produktów umożliwiających korzystanie z tożsamości OVHcloud (użytkownik lokalny, konto usługi, użytkownik federacyjny) lub z tożsamości konkretnego użytkownika produktu zalecamy skorzystanie z tych użytkowników, jeśli chcesz zachować odwracalność produktu i ograniczyć zależność od OVHcloud.
Jeśli chcesz, aby wszystkie Twoje produkty były zarządzane centralnie, zalecamy użycie tożsamości OVHcloud.

## Sprawdź również <a name="go-further"></a>

Zarządzanie tożsamością można zautomatyzować za pośrednictwem interfejsów [API OVHcloud] (/pages/manage_and_operate/api/first-steps) lub za pośrednictwem [provider Terraform OVHcloud] (/pages/manage_and_operate/terraform/terraform-at-ovhcloud).

Dołącz do [grona naszych użytkowników](/links/community).
