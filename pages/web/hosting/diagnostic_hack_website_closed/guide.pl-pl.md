---
title: 'Działania do wykonania w przypadku blokady hostingu z powodu włamania'
slug: blokada-hostingu-z-powodu-wlamania
excerpt: 'Poznaj dobre praktyki dotyczące bezpieczeństwa na hostingu'
section: Diagnostyka
order: 7
---

**Ostatnia aktualizacja z dnia 28-01-2019**

## Wprowadzenie

Twój hosting umożliwia Ci zamieszczenie w Internecie jednej lub kilku stron WWW. Może się zdarzyć, że otrzymasz od OVH e-maila z informacją, że dla Twojego hostingu zostały zastosowane środki bezpieczeństwa. Wprowadzone przez OVH zabezpieczenia mogą spowodować niedostępność Twoich stron WWW lub ograniczyć niektóre z ich funkcji. Tego typu działanie przeprowadzane jest tylko w przypadku, gdy została wykryta podejrzana, i zazwyczaj złośliwa, aktywność na Twoim hostingu. 

**Dowiedz się, jakie działania powinieneś podjąć w przypadku blokady Twojego hostingu i poznaj niektóre z dobrych praktyk dotyczących bezpieczeństwa.**

## Wymagania początkowe

- Posiadanie [hostingu OVH](https://www.ovhcloud.com/pl/web-hosting/){.external}
- Posiadanie danych do logowania do przestrzeni dyskowej Twojego hostingu
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, sekcja `Web Cloud`{.action}

## W praktyce

W sieci istnieje bardzo wiele stron WWW. Niezależnie od tego, czy strona została zbudowana w oparciu o gotowe rozwiązanie (takie jak CMS, np. WordPress) czy też została napisana od podstaw, użyte technologie z czasem się zmieniają. 

W związku z tym **strona WWW powinna być aktualizowana**, co wymaga zmian w jej kodzie. W wyniku modyfikacji pojawić się mogą nowe funkcje, lepsza stabilność, a także łatki służące do usunięcia potencjalnych luk bezpieczeństwa .

Strona WWW może zawierać jedną lub nawet kilka luk bezpieczeństwa. Luki te co prawda nie pozwolą atakującemu wkraść się do serwerów OVH, jednak mogą uszkodzić hostowane przez Ciebie dane i zaburzyć stabilność naszej infrastruktury w przypadku masowej eksploatacji.

Kiedy tak się dzieje, haker może wykorzystać Twój hosting w złym celu, jak np. wysyłka dużej liczby wiadomości spam lub publikacja w Internecie nielegalnej strony. Nawet jeśli nie chcesz, aby taka sytuacja zaistniała, może się ona zdarzyć, jeśli na Twojej stronie WWW występuje luka bezpieczeństwa. 

Dla bezpieczeństwa Twojego i Twoich klientów, hosting lub niektóre jego funkcje mogą zostać tymczasowo wyłączone. Jeśli tak się stanie, należy wykonać kilka czynności, aby zabezpieczyć stronę WWW i rozwiązać tę sytuację. Nie istnieje uniwersalne rozwiązanie, w tym przewodniku podajemy jednak wskazówki, które pomogą Ci przejść przez ten proces.

> [!warning]
>
> Ta dokumentacja nie zastąpi wsparcia specjalisty. W przypadku trudności zalecamy skorzystanie z pomocy webmastera lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie.
>

### Etap 1: ocena sytuacji

Zanim podejmiesz jakiekolwiek działania na Twojej stronie WWW, najpierw zdiagnozuj, co się wydarzyło. Aby to zrobić, zapoznaj się z poniższymi instrukcjami. 

#### 1.1 wiadomość od OVH

Powinieneś dostać od OVH e-maila z informacją, że podjęliśmy działanie mające na celu zapewnienie bezpieczeństwa Twojego hostingu. Zapoznaj się z treścią tej wiadomości. Treść ta może się różnić w zależności od danego przypadku i nie jest możliwe opisanie ich wszystkich w niniejszym przewodniku. Mimo wszystko zawarte w nim instrukcje pozwolą Ci:

- określić dokładny moment, kiedy włączona została blokada;
- poznać przyczynę, dlaczego nastąpiło zablokowanie hostingu.

Informacje te będą dla Ciebie pomocne również w przyszłości.

#### 1.2 ocena bezpieczeństwa Twojej strony WWW

Niezależnie od tego, czy Twoja strona została zbudowana w oparciu o gotowe rozwiązanie czy też została napisana od podstaw, **musi być regularnie aktualizowana**. 

Dotyczy to szczególnie stron opartych o CMS (np. WordPress), ponieważ dają one duże możliwości personalizacji dzięki szablonom i dodatkowym modułom (lub wtyczkom). Elementy te, chociaż są bardzo praktyczne, mogą modyfikować lub dodawać na Twojej stronie WWW wiersze kodu, którego pochodzenia ani poziomu bezpieczeństwa nie znasz. 

Odpowiedz sobie zatem na następujące pytania: 

- **Czy przeprowadzałeś ostatnio aktualizację Twojej strony WWW?** 

Pytanie dotyczy aktualizacji nie tylko samej strony WWW, ale również szablonu lub dodatkowego modułu. Jeśli nie przeprowadzałeś aktualizacji, możliwe jest, że na Twojej stronie WWW występuje luka bezpieczeństwa, która zostałaby usunięta podczas aktualizacji. 

Sprawdź w kolejnym kroku, czy Twoja strona WWW i dodatkowe elementy na niej zainstalowane są zaktualizowane. Jeśli tak nie jest, zaktualizuj je.

- **Czy dodałeś ostatnio do Twojej strony jakiś szablon lub dodatkowy moduł?**

Jeśli tak, możliwe, że zawiera on znaną lukę bezpieczeństwa, niestety już wykorzystaną przez cyberprzestępców. Uwaga: jest to tylko jedna z możliwości. Powodem problemów ze stroną niekoniecznie jest ostatni zainstalowany element.

W kolejnym etapie sprawdź, czy poszczególne dodatkowe elementy zainstalowane na Twojej stronie WWW są zabezpieczone lub czy posiadają wiarygodną reputację. Zwróć uwagę na ilość pobrań oraz opinie o wtyczce czy szablonie.

#### 1.3 Sprawdź aktywność na hostingu oraz logi

W ten sposób dowiesz się, jak działa Twoja usługa i strona WWW. Dowiesz się, co się działo w momencie zablokowania Twojego hostingu.

Aby sprawdzić operacje na hostingu oraz logi, zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} > sekcja `Web Cloud`{.action}. Kliknij `Hosting`{.action} na pasku usług po lewej stronie, po czym wybierz odpowiedni hosting. Teraz istnieją dwie możliwości, w zależności od informacji, które chcesz uzyskać. 

- **Sprawdź aktywność na Twoim hostingu**

Możesz sprawdzić, jak działała Twoja usługa w ciągu ostatnich dni, tygodni lub miesięcy. Dzięki temu możesz zobaczyć, czy jakaś nietypowa operacja wystąpiła, zanim firma OVH ją wykryła i wyłączyła Twój hosting.

Upewnij się, że jesteś w zakładce `Informacje ogólne`{.action}, następnie przewiń stronę w dół aż do sekcji `Aktywność hostingu`.

![hostingdeactivation](images/hosting-deactivation-step1.png){.thumbnail}

- **Sprawdź logi Twojego hostingu**

Możesz uzyskać dostęp do logów Twojej usługi, a w szczególności do wszystkich zapytań z sieci. Czynność ta pozwoli Ci odnaleźć pliki, które umożliwiły hakerowi wykorzystanie Twojego hostingu do złych celów. Analiza ta jest często trudna, gdyż wymaga zaawansowanej wiedzy technicznej. Jeśli potrzebujesz pomocy, zwróć się do webmastera.

Aby uzyskać dostęp do logów, kliknij zakładkę `Więcej`{.action}, a następnie `Statystyki i logi`{.action}. Użyj informacji, które się wyświetlają i zaloguj się do strony logów Twojego hostingu.

![hostingdeactivation](images/hosting-deactivation-step2.png){.thumbnail}

Teraz sprawdź logi „web” w dniu, w którym Twoim zdaniem mogło nastąpić niepożądane zdarzenie lub w którym nastąpiło zablokowanie hostingu.

Rozpocznij analizę od wybranej godziny, a następnie rozszerzaj zakres poszukiwań do wcześniejszych godzin. W ten sposób znajdziesz nietypowe zdarzenia, których źródłem są zazwyczaj zapytania „POST”. Ze względu na poziom złożoności, analiza ta może być trudna. Jeśli potrzebujesz pomocy, zwróć się do webmastera.

### Etap 2: zmiany na Twojej stronie WWW

Kiedy masz już informacje odnośnie tego, co się wydarzyło, powinieneś być w stanie wykonać niezbędne operacje na Twojej stronie WWW lub, przynajmniej, mieć wiedzę, jakie operacje należy przeprowadzić. 

Na ten etap składają się dwa rodzaje działań, które się uzupełniają.

- **Instalacja łatki, aby usuniąć luki bezpieczeństwa**. Dzięki łatce nikt nie będzie mógł wykorzystać luki.

- **Usunięcie złośliwego kodu**. Cyberprzestępca mógł wykorzystać lukę bezpieczeństwa i umieścić na Twojej stronie WWW złośliwy kod, jako tylne wejście (backdoor). Dzięki temu ma on ukryty dostęp do Twojej strony WWW i do Twojego hostingu. Sprawdź zatem, czy nie został dodany złośliwy kod, a jeśli tak - usuń go.

> [!warning]
>
> Wykonanie obu tych czynności jest niezbędne.
> 
> Jeśli usuniesz lukę bezpieczeństwa, nie usuwając złośliwego kod, haker będzie nadal mieć dostęp do Twojego hostingu. Będzie mógł zatem w dalszym ciągu wykorzystywać go do szkodliwych działań.
>
> Jeśli usuniesz złośliwy kod, nie usuwając przy tym luki bezpieczeństwa, cyberprzestępca będzie mógł ponownie wykorzystać ją, aby umieścić złośliwy kod na Twoim hostingu. Będzie mógł nawet utworzyć sobie nowy dostęp (backdoor).
>

Nie istnieje uniwersalny sposób postępowania, aby przeprowadzić te operacje, ponieważ przypadki są bardzo różnorodne. Poniżej znajdziesz kilka przykładów, które pomogą Ci w zabezpieczeniu strony WWW. Dostosuj je i użyj w zależności od Twojego przypadku. Jeśli masz trudności, zalecamy skorzystanie z pomocy webmastera lub kontakt z producentem oprogramowania. 

#### 2.1 przywrócenie strony WWW z kopii zapasowej

Przywrócenie strony WWW z kopii zapasowej przywrócić jej stan z momentu utworzenia kopii. Powinieneś zatem dysponować kopią zapasową nie zawierającą jeszcze złośliwego kodu. 

> [!warning]
>
> Przywrócenie strony WWW pozwala tylko usunąć złośliwy kod umieszczony bez Twojej wiedzy na Twoim hostingu. **Operacja ta nie usuwa luki lub luk bezpieczeństwa.**
>

Istnieje kilka sposobów przywrócenia Twojej strony WWW. 

- **Posiadasz kopię zapasową Twojej strony WWW**: 

Przywróć ją na Twoim hostingu i zastąp zawartość przestrzeni dyskowej oraz bazy danych zawartością z kopii. Może Ci w tym pomóc przewodnik OVH [Import kopii zapasowej do bazy danych](https://docs.ovh.com/pl/hosting/hosting_www_importowanie_bazy_danych_mysql/){.external}.

- **OVH posiada kopię zapasową Twojej strony WWW (przestrzeń dyskowa i baza danych)**:

OVH będzie mogło dostarczyć Ci kopię Twojej strony WWW w zależności od tego, z jakiej daty chcesz przywrócić kopię. W przeprowadzeniu tej operacji pomogą Ci przewodniki OVH: [Przywrócenie przestrzeni dyskowej Twojego hostingu](https://docs.ovh.com/pl/hosting/hosting_przywrocenie_kopii_zawartosci_ftp_w_aplikacji_filezilla/){.external}, [Przywrócenie kopii zapasowej bazy danych](https://docs.ovh.com/pl/hosting/eksport-bazy-danych/){.external} oraz [Import kopii zapasowej bazy danych](https://docs.ovh.com/pl/hosting/hosting_www_importowanie_bazy_danych_mysql/){.external}. W miarę możliwości postaraj się dopasować daty wybranych kopii zapasowych.

- **Ani Ty ani OVH nie posiadacie kopii zapasowej Twojej strony WWW**: 

W takim przypadku [zmień ręcznie kod Twojej strony WWW](./#23-reczna-korekta-kodu-na-stronie-www){.external}, aby wprowadzić niezbędne poprawki. 

#### 2.2 aktualizacja strony WWW

Operacja ta może wydawać się prosta, ale trzeba w niej uwzględnić kilka czynników technicznych. Przed przeprowadzeniem aktualizacji upewnij się, że posiadasz dostęp do Twojej strony WWW. 

> [!primary]
>
> Jeśli w wyniku interwencji OVH Twoja strona jest niedostępna, nie będziesz mógł jej zaktualizować. W takim przypadku wykonaj najpierw kroki z etapu 3 dotyczącego [odblokowania Twojego hostingu](./#etap-3-odblokowanie-hostingu_1){.external}. Teraz będziesz mógł przeprowadzić aktualizację.
>

Zaloguj się do interfejsu administracyjnego Twojej strony WWW (nie do Panelu OVH). Następnie wyszukaj w interfejsie, czy:

- Twoja strona WWW jest poprawnie zaktualizowana;
- aktualne są wszystkie szablony i dodatkowe moduły (lub wtyczki).

Jeśli tak nie jest, zaktualizuj je. W tym celu postępuj zgodnie z instrukcjami, które wyświetlają się w interfejsie administracyjnym Twojej strony WWW. 

> [!warning]
>
> **Zalecamy, abyś przed rozpoczęciem tej operacji zapoznał się z wszelkimi możliwymi rekomendacjami dotyczącym aktualizacji.** Rekomendacje te pochodzące bezpośrednio od producenta i/lub autora strony WWW, szablonów i dodatkowych modułów, których używasz.
>

Znajdziesz w nich informacje o elementach, które mogą blokować aktualizację. Przykład:

- upewnij się, że nowa wersja Twojego CMS (np. WordPress) jest zgodna z wersją PHP skonfigurowaną na Twoim hostingu. W przypadku konieczności jej zmiany, skorzystaj z naszego przewodnika [Zmiana wersji PHP na hostingu](https://docs.ovh.com/pl/hosting/konfiguracja_php_na_hostingu_www_ovh_2014/){.external};
- upewnij się, że Twoje szablony i dodatkowe moduły są kompatybilne z nową wersją CMS. Jeśli tak nie jest, nie będziesz mógł ich użyć i powinieneś znaleźć rozwiązanie alternatywne.

#### 2.3 ręczna korekta kodu na stronie WWW 

Jeśli nie korzystasz ze strony zbudowanej w oparciu o gotowe rozwiązanie (np. WordPress) lub jeśli nie posiadasz kopii umożliwiającej jej przywrócenie, wprowadź ręcznie poprawki w kodzie. **Ponieważ operacja ta wymaga bardzo wysokich umiejętności technicznych, zalecamy uzyskanie wsparcia specjalisty posiadającego wymagane kompetencje.** 

Nie istnieje uniwersalny sposób postępowania, aby przeprowadzić tę operację, ponieważ przypadki są bardzo różnorodne. Możesz jednak wykorzystać logi hostingu, aby łatwiej zlokalizować zainfekowany plik lub pliki, które powinieneś naprawić.

### Etap 3: odblokowanie hostingu

Ponowne opublikowanie zawartości hostingu online możesz wykonać bezpośrednio na Twojej przestrzeni dyskowej za pomocą FTP. Aby to wykonać, zmień uprawnienia do katalogu głównego (oznaczanego „/”) na 705 na Twojej przestrzeni dyskowej.

> [!primary]
>
> Jeśli e-mail otrzymany od OVH zawiera wyraźną informację, że nie masz możliwości samodzielnie reaktywować hostingu, postępuj zgodnie z instrukcjami zawartymi w tym przewodniku.
>

Jeśli możesz samodzielnie reaktywować hosting, przygotuj dane do logowania do przestrzeni dyskowej (serwer FTP, użytkownik FTP oraz hasło).

Zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, po czym kliknij `Hosting`{.action} na pasku usług po lewej stronie. Wybierz odpowiedni hosting i przejdź do zakładki `FTP - SSH`{.action}. Na tej stronie będziesz mógł [zmienić hasło użytkownika FTP](https://docs.ovh.com/pl/hosting/zmiana-hasla-konto-ftp/){.external}, jeśli będzie taka konieczność.

![hostingdeactivation](images/hosting-deactivation-step3.png){.thumbnail}

Kiedy przygotujesz już wymagane informacje, będziesz miał kilka możliwości, w zależności od programu lub interfejsu, którego chcesz użyć.

#### 3.1 odblokowanie hostingu za pomocą FileZilla

Otwórz Twój program FileZilla, po czym zaloguj się do przestrzeni dyskowej. Teraz kliknij `Serwer`{.action} na pasku menu, po czym kliknij `Wprowadź polecenie FTP`{.action} (nazwa może lekko się różnić w zależności od wersji FileZilla, której używasz). W oknie, które się wyświetla wprowadź poniższe polecenie i zatwierdź je.

```
SITE CHMOD 705 /
```

Jeśli operacja została prawidłowo wykonana, powinieneś otrzymać odpowiedź „ok”. Aby to sprawdzić, wywołaj adres Twojej strony WWW w przeglądarce. Jeśli musisz przeprowadzić jej aktualizację, wróć do części [2.2 Aktualizacja strony WWW](./#22-aktualizacja-strony-www){.external} tego przewodnika.

![hostingdeactivation](images/hosting-deactivation-step4.png){.thumbnail}

#### 3.2 odblokowanie hostingu za pomocą FTP Explorera „net2ftp”

W zakładce `FTP - SSH`{.action} Twojego Panelu klienta kliknij przycisk `FTP Explorer`{.action} i zaloguj się do Twojej przestrzeni dyskowej. Teraz kliknij przycisk `Zaawansowane`{.action}, a następnie przycisk `Go`{.action} obok „Wyślij dowolne polecenia FTP do serwera FTP”.

![hostingdeactivation](images/hosting-deactivation-step5.png){.thumbnail}

W górnej części strony wprowadź poniższe polecenie, a następnie kliknij zielony przycisk „v”. 

```
SITE CHMOD 705 /
```

Jeśli operacja została prawidłowo wykonana, powinieneś otrzymać odpowiedź „ok”. Aby to sprawdzić, wywołaj adres Twojej strony WWW w przeglądarce. Jeśli musisz przeprowadzić jej aktualizację, wróć do części [2.2 Aktualizacja strony WWW](./#22-aktualizacja-strony-www){.external} tego przewodnika.

![hostingdeactivation](images/hosting-deactivation-step6.png){.thumbnail}

#### 3.3 odblokowanie hostingu za pomocą SSH

Połącz się z przestrzenią dyskową za pomocą SSH. Następnie wprowadź poniższe polecenie i zatwierdź je.

```
chmod 705 .
```

Możesz sprawdzić, czy uprawnienia są teraz poprawne za pomocą polecenia:

```
ls -la
```

Lub wywołać stronę WWW w przeglądarce. Jeśli musisz przeprowadzić jej aktualizację, wróć do części [2.2 Aktualizacja strony WWW](./#22-aktualizacja-strony-www){.external} tego przewodnika.

### Etap 4: dobre praktyki w zakresie bezpieczeństwa Twojej strony WWW

Gdy pozbyłeś się już z Twojej strony WWW luk bezpieczeństwa oraz złośliwego kodu, zadbaj o jej zabezpieczenie na przyszłość. Zalecamy:

- regularne aktualizacje oprogramowania strony (w tym również szablonów i dodatkowych modułów);
- instalowanie jedynie zaufanych elementy: im bardziej personalizujesz stronę, instalując szablony i dodatkowe moduły, tym więcej kodu do niej dodajesz. Uważnie obserwuj system opinii oraz rekomendacji użytkowników, gdyż to oni mogą powiadomić Cię o problemach ze stroną WWW.

Podsumowując, celem nie jest nadmierna podejrzliwość, ale większa ostrożność w odniesieniu do elementów, które instalujesz na Twojej stronie oraz jej regularna aktualizacja.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.