---
title: "Jak utworzyć subdomenę?"
excerpt: "Dowiedz się, jak zdefiniować subdomenę i jak ją utworzyć w OVHcloud"
updated: 2023-11-28
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie <a name="goal"></a>

Internet składa się z *serwerów* i *urządzeń*, które współdziałają ze sobą w sieci globalnej. Jeśli te *serwery* i ich *urządzenia* są połączone z siecią internetową, przydzielany jest im *publiczny adres IP* (równoważny adresowi pocztowemu). *Ten adres IP* umożliwia zdalne połączenie z serwerem lub urządzeniem, dzięki czemu użytkownik może wejść na stronę WWW, wprowadzając ten *adres IP* za pomocą przeglądarki internetowej zainstalowanej na jego komputerze.

**Domeny** zostały wprowadzone, aby ułatwić dostęp do witryny internetowej użytkownikom sieci Internet. Łatwiej jest bowiem zapamiętać nazwę składającą się z wybranego ciągu znaków (przykład: ovhcloud.com), a nie z ciągu cyfr składającego się z *adresu IP* (przykład: 54.39.46.56).

**Nazwa domeny** składa się z poziomów. Poziomy te są zazwyczaj oddzielone znakiem `.` (z wyjątkiem niektórych **rozszerzeń** od *pierwszego poziomu*, takich jak *.co.uk*, *.gouv.fr* i *.notaires.fr*):

- **T**op **L**evel **D**omain (**TLD**): reprezentuje domeny *pierwszego poziomu*. Najczęściej nazywamy je **rozszerzeniami**. Obecnie istnieją 4 typy domen najwyższego poziomu: 

    - **c**ountry **c**ode **T**op **L**evel **D**omains (**ccTLDs**): składają się z dwóch znaków, odpowiadają różnym krajom na świecie. Na przykład rozszerzenia *.pl*, *.es*, *.it* lub *.fr* są rozszerzeniami ccTLD;
    - **g**eneric **T**op **L**evel **D**omains (**gTLDs**): składają się z minimum trzech znaków i reprezentują bardziej ogólne tematy lub sektory działalności. Na przykład rozszerzenia *.com*, *.net*, *.org* lub *.info* są rozszerzeniami gTLD;
    - **new** **g**eneric **T**op **L**evel **D**omains (**new gTLDs**):
    Nowe rozszerzenia utworzone w 2012 r. przez firmę **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) w odpowiedzi na gwałtowny wzrost liczby zgłoszeń dotyczących rejestracji domen. Mogą odnosić się do tematów ogólnych, marek, regionów lub miast. Na przykład rozszerzenia *.love*, *.ovh* lub *.paris* to nowe rozszerzenia gTLD;
    - **Corp**oration **T**op **L**evel **D**omains (**CorpTLDs**): jest to w rzeczywistości podkategoria nowej GTLD. Na prośbę organizacji **ICANN**, firmy lub organizacje mogą zamówić własny TLD. Na przykład, rozszerzenie *.ovh* to CorpTLD utworzone przez OVHcloud kilka lat temu.

- **S**econd **L**evel **D**omain (**SLD**): reprezentuje domeny *drugiego poziomu*. Najczęściej nazywamy je **labels**. W przypadku zamówienia domeny możesz dowolnie zdefiniować **label** (pod warunkiem, że nie została ona wcześniej zarejestrowana przez innego użytkownika dla tego samego rozszerzenia i z ograniczeniem do 63 znaków). Na przykład *ovhcloud* to etykieta domeny *ovhcloud.com*.

- Third Level Domain (**subdomain**): Od tego trzeciego poziomu mówimy o *subdomenie*. W tym przewodniku wyjaśnimy szczegółowo jego definicję i wyjaśnimy, jak wdrożyć je w ramach Twoich różnych usług.

![URL content](images/url-composition.png){.thumbnail}
  
**Poznaj subdomeny i dowiedz się, jak je utworzyć w OVHcloud.**