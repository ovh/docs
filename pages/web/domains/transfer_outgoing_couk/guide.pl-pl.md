---
title: "Transfer domeny .uk do innego operatora"
slug: transfer_wychodzacy_domeny_couk
excerpt: "Dowiedz się, jak wykonać transfer domeny wychodzącej z domeny UK do innego operatora"
section: Transfer
order: 5
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 12-07-2021**

## Wprowadzenie

Proces zmiany operatora domeny *najwyższego poziomu* (*top-level domain*, lub **TLD**) dla domeny najwyższego poziomu **UK** (**.uk**) różni się od tego wyszczególnionego w naszym [przewodniku transferu domen globalnychKET](../transfer_wychodzacy_domeny_globalnej_lub_geograficznej/). Poniższe instrukcje dotyczą następujących rozszerzeń:

- .uk
- .co.uk
- .ac.uk
- .gov.uk
- .me.uk
- .net.uk
- .org.uk
- .plc.uk
- .sch.uk

**Niniejszy przewodnik wyjaśnia, jak rozpocząć transfer wychodzący dla tych domen w Panelu klienta OVHcloud.**

## Wymagania początkowe

- Posiadanie [domeny .uk](https://www.ovhcloud.com/pl/domains/) zarejestrowanej w OVHcloud
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i posiadanie uprawnień niezbędnych do zarządzania domeną (administrator domeny)
- Nazwa domeny musi być zawsze aktywna, co oznacza, że nie wygasła lub nie może zostać zablokowana przez OVHcloud
- Nazwa domeny nie może być przedmiotem sporu toczącego się w rejestrze [Nominet](https://www.nominet.uk/)

> [!primary]
>
> Jeśli jesteś **właścicielem** domeny, ale zarządzanie nią w Panelu klienta OVHcloud jest niedostępne, zarówno poprzez własny dostęp, jak i poprzez kontakt administracyjny domeny, zapoznaj się z [tym przewodnikiem](../../customer/zarzadzanie_kontaktami/#przypadek-wlasciciela-domeny).
>
> Jeśli domena wygasła na **mniej niż 90 dni**, nadal może być przeniesiona. Prosimy o kontakt z naszym zespołem pomocy technicznej poprzez utworzenie wniosku o wsparcie w Panelu client OVHcloud, aby odblokować nazwę domeny do transferu.
>

## W praktyce

Każdy z tych TLD posiada *TAG* odpowiadający aktualnemu operatorowi domen, takiemu jak OVHcloud. Transfer rozpoczyna się od zastąpienia APR identyfikatorem nowego operatora.

Jeśli nie znasz jeszcze wymaganego wpisu TAG, możesz złożyć wniosek u nowego operatora lub sprawdzić [listę rejestratorów Nominet](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/).

### Etap 1: sprawdzenie niezbędnych informacji

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) wybierz `Web Cloud`{.action}. Kliknij `Domeny`{.action}, po czym wybierz odpowiednią nazwę domeny.

Pamiętaj, że musisz być zalogowany jako kontakt administracyjny.

W zakładce `Informacje ogólne`{.action} możesz sprawdzić, czy spełnione są warunki niezbędne do przeprowadzenia procesu transferu.

### Etap 2: zmień APR dla Twojej domeny

Kliknij link `Tag transferu wychodzącego`{.action} w sekcji zatytułowanej **Bezpieczeństwo**.

![transfer wychodzący](images/img_4267.jpg){.thumbnail}

W oknie, które się wyświetli wprowadź TAG nowego operatora, po czym kliknij `Zatwierdź`{.action}.

![transfer wychodzący](images/img_4268.jpg){.thumbnail}

Jeśli nie możesz zmienić wpisu TAG Twojej domeny w Panelu klienta, możesz zlecić jego zmianę w rejestrze Nominet. Więcej informacji znajduje się na oficjalnej [stronie internetowej Nominet](https://www.nominet.uk/domain-support/).

### Etap 3: sprawdź proces transferu u nowego operatora

Zmiana znacznika TAG aktywuje proces transferu.

Skontaktuj się z nowym dostawcą, aby uzyskać więcej informacji oraz wszelkie pytania dotyczące śledzenia transferu.

## Sprawdź również

[Transfer domeny do innego operatora](../transfer_wychodzacy_domeny_globalnej_lub_geograficznej/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
