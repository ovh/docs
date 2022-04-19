---
title: 'Tworzenie i konfigurowanie grupy zabezpieczeń w interfejsie Horizon'
slug: konfiguracja_grupy_zabezpieczen
excerpt: 'Dowiedz się, jak utworzyć grupę zabezpieczeń i skonfigurować ją na instancji Public Cloud'
legacy_guide_number: g1925
section: Zarządzanie w interfejsie Horizon
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 24-08-2021**

## Wprowadzenie

Ze względów bezpieczeństwa możesz konfigurować i używać reguł filtrowania, które zdefiniują dostęp do instancji. Możesz zezwolić lub zablokować niektóre połączenia przychodzące lub wychodzące za pomocą grup zabezpieczeń. Reguły te mogą być stosowane w przypadku ruchu pochodzącego z niektórych adresów IP lub nawet w przypadku instancji skonfigurowanych w grupach zabezpieczeń.

**Dowiedz się, jak utworzyć grupę zabezpieczeń i skonfigurować ją na instancji Public Cloud.**

## Wymagania początkowe

- Projekt [Public Cloud](https://www.ovhcloud.com/pl/public-cloud/).
- [Dostęp do interfejsu Horizon](https://docs.ovh.com/pl/public-cloud/tworzenie-i-usuwanie-uzytkownika-openstack/)

## W praktyce

### Etap 1: utworzyć grupę zabezpieczeń

Dostęp do interfejsu [Horizon](https://docs.ovh.com/pl/public-cloud/tworzenie-i-usuwanie-uzytkownika-openstack/). Wybierz region, w którym chcesz utworzyć grupę zabezpieczeń, klikając przycisk w lewym górnym rogu.

![określenie regionu](images/security-group0.png){.thumbnail}

> [!primary]
>
> Jeśli grupa zabezpieczeń ma być używana w kilku regionach, należy ją utworzyć dla każdego z nich.
>

Teraz rozwiń menu `Network`{.action} i kliknij `Security Groups`{.action}. Tabela zawiera listę utworzonych grup zabezpieczeń. Grupa "default" została już wymieniona. Pozwala on na przepuszczanie całego ruchu przychodzącego i wychodzącego.

Aby dodać nową grupę zabezpieczeń, kliknij przycisk `+ Create Security Group`{.action}.

![dostęp do grup zabezpieczeń](images/security-group1.png){.thumbnail}

Na stronie, która się wyświetla podaj nazwę i opis grupie, którą zamierzasz utworzyć. Po wykonaniu tego działania kliknij przycisk `Create Security Group`{.action}.

![utworzyć grupę zabezpieczeń](images/security-group2.png){.thumbnail}

W zakładce `Security Groups`{.action} tabela wyświetla nowo utworzoną grupę. Reguły są skonfigurowane domyślnie. Ruch wychodzący z listy jest przepuszczalny. Przejdź do kolejnego etapu, jeśli chcesz je zmienić.

Jeśli użytkownik zgadza się z tymi zasadami, zapoznaj się z tym przewodnikiem w etapie 3 "[konfiguracja grupy zabezpieczeń na jego instancji](#instance-security-group)".

### Etap 2: skonfiguruj reguły grupy zabezpieczeń

Aby zmienić domyślne reguły lub zmienić Twoje potrzeby, kliknij przycisk `Manage Rules`{.action}.

![zarządzanie regułami](images/security-group3.png){.thumbnail}

Jeśli zostawiłeś domyślne reguły dla grupy zabezpieczeń, przepuszczają one tylko ruch wychodzący.

```bash
root@serveur:~$ ssh admin@149.xxx.xxx.177

ssh: connect to host 149.xxx.xxx.177 port 22: Connection timed out
```

Teraz na stronie zarządzania regułami możesz:

- usuń istniejącą regułę: w tym celu użyj przycisku `Delete Rule`{.action};
- dodaj nową regułę: Użyj przycisku `+ Add Rule`{.action}.

Podczas dodawania reguły należy uzupełnić wymagane informacje, a następnie kliknąć `Add`{.action}.

W poniższym przykładzie pozwolimy na połączenie SSH z instancją.

![dodaj regułę](images/security-group4.png){.thumbnail}

Po dodaniu nowej reguły odczekaj kilka minut, aż zostanie ona uwzględniona.

```bash
root@serveur:~$ ssh admin@149.xxx.xxx.177

Last login: Tue Oct 13 13:56:30 2015 from proxy-109-190-254-35.ovh.net
admin@serveur1:~
```

### Konfiguracja grupy zabezpieczeń na instancji <a name="instance-security-group"></a>

W interfejsie Horizon rozwiń menu `Compute`{.action} i wybierz `Instancje`{.action}. Na tej stronie możesz utworzyć nową instancję za pomocą przycisku `Launch Instance`{.action}.

Po utworzeniu instancji możesz, za pomocą menu `Security Groups`{.action}, wybrać nową grupę zabezpieczeń utworzoną na poprzednim etapie.

![przypisz grupę zabezpieczeń](images/security-group5.png){.thumbnail}

Możesz zastosować nową grupę zabezpieczeń dla instancji, która została już utworzona, klikając `Edit Security Groups`{.action} po prawej stronie instancji.

![zmiana grupy zabezpieczeń](images/security-group6.png){.thumbnail}

### Usuń grupę zabezpieczeń

Aby usunąć grupę zabezpieczeń, zaznacz ją w odpowiednim polu po lewej stronie, następnie kliknij Delete `Security Groups`{.action}

![usuń grupę zabezpieczeń](images/security-group7.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
