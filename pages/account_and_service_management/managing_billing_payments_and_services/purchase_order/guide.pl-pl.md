---
title: 'Pojęcie numeru zamówienia lub Purchase Order (PO)'
excerpt: 'Zrozumienie i zastosowanie pojęcia numeru zamówienia lub zamówienia w ramach regulowania należności za faktury OVHcloud'
updated: 2022-07-22
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Niniejszy przewodnik wyjaśnia, jak interpretować numer zamówienia lub polecenie Purchase (PO) zastosowane do fakturowania OVHCloud.

## W praktyce

### Numer zamówienia i Purchase Order (PO) Number

W przypadku zakupów towarów lub usług przedsiębiorstwa muszą zatwierdzać zamówienia. W większości przypadków walidacja dokonywana jest poprzez zwrócenie dokumentu (w formie papierowej lub cyfrowej) do nagłówka przedsiębiorstwa, które przypomina nabyte towary lub usługi, podając jednocześnie numer zamówienia.
W świecie anglosaskim dokument ten nazywa się **Purchase Order** i jest skrócony do **PO**.

W przypadku przedsiębiorstwa wystawiającego PO dokument ten ma na celu monitorowanie zakupów towarów i usług od dostawców, w szczególności poprzez nałożenie wymogu, aby wszystkie wystawione faktury zawierały numer zamówienia (lub PO Number).

Istnieją zasadniczo dwa rodzaje poleceń opisanych poniżej.

#### Zamknięte zamówienie / Purchase Order (PO)

Jest to dokument potwierdzający zamówienie na towary lub usługi w ustalonej ilości i na określony czas.

W przypadku OVHcloud dokument musi zawierać co najmniej następujące informacje:

* Nazwa przedsiębiorstwa
* Numer zamówienia
* Typ(y) zamówionych usług
* Ilości
* Ceny jednostkowe
* Data rozpoczęcia ważności
* Data wygaśnięcia

#### Zamówienie otwarte / Blancket Purchase Order (BPO)

Jest to dokument potwierdzający zamówienie na towary lub usługi w zmiennej ilości o maksymalnej kwocie i o ustalonym czasie trwania.

W przypadku OVHcloud dokument musi zawierać co najmniej następujące informacje:

* Nazwa przedsiębiorstwa
* Numer zamówienia
* Typ(y) zamówionych usług
* Ceny jednostkowe
* Łączna kwota zamówienia
* Data rozpoczęcia ważności
* Data wygaśnięcia

### Jak wpisać numer Purchase Order (PO) w Panelu klienta OVHcloud

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), a następnie w zakładce `Dashboard`{.action} kliknij `Wyświetl moje zamówienia`{.action}.

![Panel klienta](images/internalreference00.png){.thumbnail}

Kliknij kartę `Moje oznaczenia wewnętrzne`{.action}, a następnie przycisk `+ Dodaj wewnętrzne oznaczenia referencyjne`{.action}.

![Panel klienta](images/internalreference01.png){.thumbnail}

W zależności od tego, czy chcesz wyświetlić na swoich fakturach wzorzec `Wewnętrzne odniesienia` **lub**  `„purchase order”`, masz do dyspozycji dwie terminologie.<br>
Wybierz w ten sposób `Utwórz Twoje wewnętrzne oznaczenie referencyjne`{.action} lub `Utwórz „purchase order”`{.action}.

Nadaj nazwę swojemu wewnętrznemu referencyjnemu / Purchase Order w odpowiednim polu, wprowadź **datę rozpoczęcia** oraz **datę zakończenia** (data zakończenia jest wyłączona), a następnie kliknij `Zatwierdź`{.action}.

> [!primary]
> Nie możesz utworzyć 2 wewnętrznych referencji / Purchase Orders w tym samym czasie.

![Panel klienta](images/internalreference02.png){.thumbnail}

Ten numer pojawi się wówczas na kolejnych fakturach odpowiadających przedziałowi czasowemu określonemu przez Ciebie.

![Panel klienta](images/internalreference03.png){.thumbnail}

W zakładce `Moje oznaczenia wewnętrzne`{.action} możesz zmienić lub wyłączyć już utworzony numer referencyjny, klikając przycisk `...`{.action} po prawej stronie danego punktu odniesienia.

![Panel klienta](images/internalreference04.png){.thumbnail}

> [!primary]
> Jeśli chcesz wyłączyć/zmienić odniesienie na korzyść innego **w tym samym przedziale czasowym**, należy skorzystać z opcji `Zmień`{.action}, aby zmienić przedział czasowy pierwszego odniesienia.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.