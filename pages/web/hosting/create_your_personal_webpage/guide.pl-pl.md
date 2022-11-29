---
title: 'Tutorial - Tworzenie strony WWW w OVHcloud'
slug: create-your-own-web-page
excerpt: 'Dowiedz się, jak utworzyć pierwszą stronę internetową na darmowym hostingu Start 10M'
section: 'Tutoriale'
order: 01
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 22-11-2022**

## Wprowadzenie

Dowiedz się, jak utworzyć pierwszą stronę internetową na hostingu Start 10M oferowanym bezpłatnie w przypadku zakupu domeny od OVHcloud.

## Wymagania początkowe

- Posiadanie [domeny](https://www.ovhcloud.com/pl/domains/)
- Posiadanie [hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/) lub bezpłatnego [hostingu Start 10M](https://www.ovhcloud.com/pl/domains/free-web-hosting/)
- Posiadanie edytora tekstu (notatnik, TextEdit, Notepad++, itp.)
- Instalacja klienta FTP (takiego jak [Cyberduck](https://cyberduck.io/), [FileZilla](https://filezilla-project.org/download.php), etc.) do pobrania (umieszczenie na hostingu) plików z serwera dedykowanego.

## Wprowadzenie

### Z czego jest zrobiona strona internetowa?

Zawartość strony internetowej często składa się z kilku stron www. Strona www wyświetla treści, zamrożone lub nie, które zostały opracowane do obsługi doświadczenia nawigacyjnego. Strony, które wyświetlasz w przeglądarce, są wynikiem trzech elementów, które szczegółowo omówimy:

- **HTML (HyperText Markup Language)**: język używany do strukturyzacji stron. "Struktura" oznacza elementy i ich organizację.<br>
**Przykład**: po tytule dokumentu następuje nagłówek i jeden lub więcej ustępów.

Elementy używane do strukturyzacji zawartości są nazywane "znacznikami" i piszą się za pomocą otwartych i zamkniętych kropli.<br>
**Przykład**: Znacznik `<p>` to ta, która rozpoczyna paragraf, przy czym ten sam punkt jest zamknięty przez zamknięty tag `</p>`. 

>[!warning]
>
> W przypadku każdego otwartego znacznika należy utworzyć zamknięty tag. Znaki nie pokrywają się (zamykają się w odwrotnej kolejności ich otwarcia) i nie mogą być interpretowane inaczej niż za pomocą znaczników HTML.
>

Dostępnych jest ponad 100 tagów, ale niektóre z nich będą gotowe do użycia.

- **CSS (Cascading Style Sheet, kaskadowe arkusze stylów)**: język opisujący sposób umiejscowienia, wymiarowania, zachowania, kolorowania lub wyświetlania elementów HTML. Reguły te mogą mieć zastosowanie do elementów ogólnych (ten sam kolor dla wszystkich tytułów strony, lub czcionka, która będzie używana do wszystkich tekstów) lub do określonych elementów (tekst zawarty w fotelu, zachowanie podczas przelotu menu nawigacyjnego).

- **JavaScript**: język wzbogacający interakcje na stronie internetowej (lub aplikacji internetowej). Mimo, że jest to niezbędne dla programistów www, nie jest konieczne, aby utworzyć Twoją stronę WWW.<br>
Jeśli nie znasz kodu w różnych językach, możesz skopiować/wkleić przykłady kodu, które są zawarte w tym przewodniku, pozwolą Ci one na utworzenie strony WWW, która będzie mogła być użyta na Twoim hostingu.

### Jakie narzędzia?

Aby utworzyć stronę www, zapisz w pliku kod źródłowy w jednym z trzech języków wymienionych powyżej. Oto ich główne nazwy rozszerzeń: *".html"* (dla plików HTML), *".css"* (dla plików CSS), *".js"* (dla plików JavaScript).

Pliki można zapisać w edytorach tekstu, w tym pliki, które są domyślnie dostępne w systemie operacyjnym (notatnik, TextEdit). Darmowe rozwiązania Open Source oferują wiele dodatkowych funkcji: [Notepad++](https://notepad-plus-plus.org/), [Brackets](https://brackets.io/), [Sublime Text](https://www.sublimetext.com/) lub [micro](https://micro-editor.github.io/). Można również korzystać z IDE (Integrated Development Environment, zintegrowane środowisko rozwoju), takich jak [Visual Studio Code](https://code.visualstudio.com/) lub [Geany](https://www.geany.org/).

Aby wyświetlać i dostosowywać strony przed umieszczeniem ich na hostingu, użyj przeglądarki internetowej. W tym celu otwórz plik z lokalnej lokalizacji bezpośrednio w przeglądarce.

### Strona **statyczna** czy **dynamiczna**?

Strona jest **statyczna**, gdy strony wyświetlane w przeglądarce są zawsze takie same i nie oferują żadnych specjalnych interakcji innych niż efekty (np. menu rozwijane), animacje i filmy.

Strona WWW, która **dynamicznie** się wyświetla zakłada, że przeglądane strony są generowane przez serwer www, który wykonuje kod, dostęp do bazy danych itp. Pozwala to na uzyskanie wyniku w zależności od zapytań użytkowników (przeglądanie stron, uwierzytelnianie, wysyłanie danych za pomocą formularza, przeglądanie zapasów lub spisów itp.).

### Czym jest język PHP?

PHP (*PHP Hypertext Preprocessor*) to język używany głównie w rozwoju sieci. Działa on wyłącznie po stronie serwera, więc nie jest konieczne, aby zbudować elementy widoczne w przeglądarce. Przydatne do pobrania wiadomości, które zostaną wysłane za pomocą formularza kontaktowego na Twojej stronie WWW.

## W praktyce

Poniższe etapy pozwolą Ci stworzyć Twoją pierwszą stronę www.

### Rozwiń zawartość swojej strony za pomocą kodu HTML

Aby zbudować Twoją pierwszą stronę WWW, stwórz katalog gdziekolwiek na Twoim komputerze, w którym umieścisz wszystkie pliki.

Nazwij pierwszy plik `index.html` i będzie zawierał kod HTML. Jest to pierwszy plik, który należy utworzyć, ponieważ serwery HTTP są skonfigurowane domyślnie, aby żądanie na Twoim hostingu (wpisując nazwę domeny na pasku adresowym przeglądarki) wyświetlało plik "index".

Otwórz edytor tekstu i zapisz plik roboczy. 

> [!primary]
> 
> Zalecamy zachowanie kilku kopii tego katalogu roboczego w celu wykonania kopii zapasowych.
> Strona będzie dostępna na Twoim hostingu. Pamiętaj, aby zachować kopię lokalną oraz kopie zapasowe na innych nośnikach, takich jak zewnętrzne dyski twarde.
>

#### Tworzenie strony HTML typu

Strony HTML są zawsze skonstruowane w taki sam sposób:

- oświadczenie DOCTYPE, które wskazuje przeglądarce, aby odczytała następujące treści w sposób zgodny z maksymalnie standardami;
- znacznik `<html>`, który będzie obramować wszystkie inne znaczniki dokumentu;
- znacznik `<head>`, który zawiera informacje o kodowaniu strony i jej tytule;
- znacznik `<body>`, który będzie zawierał "ciało" twojej strony HTML.

Możesz skopiować/wkleić ten kod do pliku `index.html`:

```html
<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Moja strona osobista</title>
    </head>
    <body>
         
    </body>
</html>
```

Niektóre znaczniki zawierają więcej informacji niż inne, np. tag `<html lang="en">` w powyższym przykładzie.<br>
W tym przypadku mamy na myśli atrybuty, które pozwolą określić niektóre elementy. W tym konkretnym przypadku chodzi o wskazanie, który język jest głównym językiem strony internetowej. Niektóre z tych atrybutów są uniwersalne i mogą być używane na wszystkich tagach (z pewnymi wyjątkami), inne są specyficzne.

Znacznik `<head>` zawiera elementy, które nie będą wyświetlane na ekranie. Znaki `<meta>` będą wskazywać przeglądarce, ale także wyszukiwarkom, np. kodowanie znaków używanych w dokumencie (UTF-8 w powyższym przykładzie) lub informacje o wyświetlaczu na telefonie komórkowym ("viewport" w powyższym przykładzie).
Znaczący jest znacznik `<title>`. Umożliwia ona określenie strony, która pojawi się na karcie przeglądarki, ale przede wszystkim będzie indeksowana przez wyszukiwarki.<br>
Tytuł ten pozwoli Ci na przykład wyświetlić się w wynikach wyszukiwania Google, DuckDuckGo, etc.<br>
Położenie najwyższego poziomu w wynikach to ćwiczenie zdefiniowane przez reguły SEO (*Search Engine Optimization*). W tym artykule nie będziemy o tym rozmawiać.

Jeśli chodzi o tag `<body>`, będzie on zawierać inne znaczniki HTML, które mają mieć strukturę dokumentu.

#### Uzupełnij tytułem, podtytułem i treścią

Teraz edytujemy zawartość tekstową Twojej strony, zawsze zgodnie ze standardową strukturą HTML, aby dodać tytuł, podtytuł, akapity i listy tekstu.

- **Znaki `<h1>` do `<h6>`**

Papiery wartościowe pisane są między znacznikami `<h...>`, które są hierarchizowane jak na każdym dokumencie: najpierw `<h1>`, następnie `<h2>`, etc., ostatni to tag `<h6>`. Znacznik `<h1>` jest więc niezbędny, jeśli chcesz napisać tag `<h2>`. Jeśli jednak nie przestrzegasz tej reguły, przeglądarka wyświetli wynik bez błędów.

```html
<body>
    <h1>Witamy na mojej stronie osobistej</h1>
    <h2>Szybkie i proste tworzenie strony WWW</h2>
</body>
```

Możesz zobaczyć wynik, otwierając plik HTML za pomocą przeglądarki internetowej (Firefox, Chrome, Safari, itp.): oba ciągi znaków będą wyświetlane w różnych rozmiarach.

- **Znacznik `<p>`**

Znacznik ten jest używany do zapisywania tekstu ("p" do akapitu). Istnieje kilka opcji:

```html
<body>
    <h1>Witamy na mojej stronie osobistej</h1>
    <h2>Szybkie i proste tworzenie strony WWW</h2>
    <p>OVHcloud oferuje hosting Start 10M dla każdej zarejestrowanej domeny.</p>
</body>
```

- **Znaki `<ul>` i `<li>`**

W HTML możesz używać list. Weźmiemy przykład prostych list, tzw. nieuporządkowanych (takich jak te dostępne w edycji tekstu). Aby utworzyć listę, używamy tagu `<ul>` (*unordered list*). Ten znacznik będzie ramka inne elementy, znaczniki `<li>`, które będą zawierać zawartość Twoich list:

```html
<body>
    <h1>Witamy na mojej stronie osobistej</h1>
    <h2>Szybkie i proste tworzenie strony WWW</h2>
    <p>
        <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
    </p>
    <p>OVHcloud oferuje hosting Start 10M dla każdej zarejestrowanej domeny.</p>
    <p>Oferta "Domena" zawiera:</p>
    <ul>
        <li>Hosting WWW 10 MB gratis</li>
        <li>Konto E-mail 5 GB za darmo</li>
        <li>DNSSEC: ochrona przed zatruciem cache (cache poisoning)</li>
        <li>Easy Redirect: dostęp do sieci społecznościowych z domeny</li>
    </ul>
</body>
```

Możesz zobaczyć wynik w przeglądarce: domyślnie elementy list są wyświetlane chipami.

#### Dodaj obrazy, aby Twoja strona była bardziej atrakcyjna

Internet to przede wszystkim medium wizualne. W tej części zobaczymy, jak wstawić obrazy do treści. Oferta Start 10M oferuje przestrzeń dyskową 10 MB. To wystarczy dla Twoich stron HTML i CSS, ale może być to ograniczone, jeśli chcesz umieścić dużo obrazów na swojej stronie. W tym przypadku zalecamy wybranie [oferty hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/) umożliwiającej szybsze przechowywanie danych.

Znacznik HTML używany do wyświetlania obrazu jest znacznikiem `<img>`. W przeciwieństwie do tych, które widzieliśmy wcześniej, nie ma otwartości i zamknięcia tego elementu. Porozmawiamy o autofermantycznym tagu. Są to atrybuty tego znacznika, które umożliwiają powiązanie lokalizacji pliku z opisowym tekstem obrazu.

##### **Optymalizacja obrazów**

Duży obraz to obraz, który zajmie dużo czasu, zwłaszcza jeśli internauci używają smartfona lub tabletu podłączonego do sieci 4 lub 5G.
Ogólnie rzecz biorąc, musisz zoptymalizować obrazy i ograniczyć ich wagę. Waga jest wyrażona w bajtach. Zazwyczaj używane jednostki to kilobajty (1 kb = 1,000 bajtu) lub megabajt (1 MB = 1,000,000 bajtów). Obraz powyżej kilkudziesięciu KB jest uważany za ciężki i zasługuje na optymalizację. 

**Przykład**: jeśli Twoje obrazy ważą każde 1 MB, to będziesz mógł umieścić poniżej 10 obrazów na Twoim hostingu Start10M. Jeśli uda Ci się zmniejszyć rozmiar między 50 KB a 200 KB, może pojawić się nawet 100 na Twojej stronie WWW.

Zalecenia dotyczące najlżejszych plików:

- ograniczaj definicję obrazków zmieniając ich rozmiar do rozmiaru, na jakim będą wyświetlane na Twojej stronie;
- rozmiar wyraża się w pikselach szerokości×wysokość (np. 300×250 pikseli to szerokość standardowego obrazu reklamowego);
- zmień rozdzielczość (opcja "web" wykorzystuje domyślną rozdzielczość 72 dpi);
- preferuj kompresowane formaty, takie jak *JPEG*, *PNG* lub *Webp*;
- można również używać formatu wektorowego (SVG);
- unikaj niekompresowanych formatów *BPM* i *TIFF*.

##### **Przechowywanie obrazów na hostingu**

Ze względu na czytelność, obrazy przechowuje się w dedykowanym katalogu:

![Drzewo plików i folderów](images/create_your_personal_webpage_1.png){.thumbnail}

Weźmy przykład pliku w formacie *PNG*. Umieść go w katalogu "images":

![Drzewo plików i folderów z obrazem](images/create_your_personal_webpage_2.png){.thumbnail}

Teraz utworzymy nowy punkt, w którym umieścimy obraz (w tym przykładzie nie określamy wielkości wyświetlania obrazu w pikselach. Przeglądarka wyświetla go w zależności od oryginalnego rozmiaru, w formie pliku).

```html
<body>
    <h1>Witamy na mojej stronie osobistej</h1>
    <h2>Szybkie i proste tworzenie strony WWW</h2>
    <p>
        <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
    </p>
    <p>OVHcloud oferuje hosting Start 10M dla każdej zarejestrowanej domeny.</p>
    <p>Oferta "Domena" zawiera:</p>
    <ul>
        <li>Hosting WWW 10 MB gratis</li>
        <li>Konto E-mail 5 GB za darmo</li>
        <li>DNSSEC: ochrona przed zatruciem cache (cache poisoning)</li>
        <li>Easy Redirect: dostęp do sieci społecznościowych z domeny</li>
    </ul>
</body>
```

Wynik w przeglądarce powinien być następujący:

![Wynik kodu HTML w przeglądarce](images/create_your_personal_webpage_3.png){.thumbnail}

### Aplikuj na Twoje treści korzystając ze stylów CSS

Widzieliśmy, jak uporządkować zawartość w HTML. Rezultat jest minimalistyczny w stylu, który ogranicza się do rozmiarów papierów i napisów zdefiniowanych domyślnie.
Arkusze stylów umożliwiają zmianę wyglądu i zachowania elementów zakodowanych w HTML.

#### Zasady

##### **Tworzenie pliku CSS**

Podobnie jak w przypadku plików HTML, pliki CSS mogą być tworzone z dowolnym edytorem tekstu. Rozszerzenie tych plików musi być dostępne w formacie *.css*.

![Umieszczenie pliku CSS](images/create_your_personal_webpage_4.png){.thumbnail}

Teraz musimy powiązać ten plik CSS, który nazwaliśmy konwencją *style.css*, z naszą stroną HTML. Link ten jest wykonywany poprzez dodanie znacznika `<link>` do znacznika `<head>` w pliku index.html:

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moja strona osobista</title>
    <link rel="stylesheet" href="style.css">
</head>
```

Aby sprawdzić, w naszym arkuszu stylów zapiszemy kolor określony dla każdego elementu `<h1>` na naszej stronie internetowej. Zmień plik style.css dodając te linie:

```html
h1 {
    color: red;
}
```

Ten zbiór instrukcji nazywany jest "regułą CSS" i oznacza: wszystkie elementy HTML `<h1>` będą miały kolor *(color)* czerwony *(red)*.

Możesz przetestować inny kolor na elemencie `<h2>`, paragrafy i elementy listy:

```html
h1 {
    color: red;
}
 
h2 {
    color: blue;
}
 
p {
    color: slategray;
}
 
li {
    color: slategray;
}
```

Odśwież stronę przeglądarki, naciskając klawisz `F5`: twój tytuł zostanie teraz wyświetlony na czerwono.

Przeglądarki mają domyślne style, w tym szczegółowe reguły pozycjonowania elementów. Zmodyfikujemy odpowiednio plik CSS i określimy regułę, która będzie miała zastosowanie do wszystkich elementów HTML wyświetlanych przez przeglądarkę. Używa się uniwersalnego selektywnika `*` (gwiazda), który jest ustawiany na początku pliku CSS:

```html
* {
    padding: 0;
    margin: 0;
}
```

Zauważcie, że teksty są teraz przyklejone do krawędzi przeglądarki.

Własność padding definiuje obracającą krawędź (wewnętrzny margines), czyli przestrzeń poza blokiem, który zawiera tekst (lub jakikolwiek element). Poniższy schemat ilustruje zgodność tych terminów w tzw. modelu pudełek w CSS:

![Model pudełka CSS](images/create_your_personal_webpage_5.png){.thumbnail}

### Poprawa struktury HTML dokumentu

Umieściliśmy podstawowe elementy w Twoim znaczniku `<body>`: `h1`, `h2`, `p`, `ul` i `li`.

W swojej ostatniej iteracji język [HTML5](https://html.spec.whatwg.org/) proponuje nowe znaczniki, które pozwalają lepiej ustrukturyzować dokument i wzbogacić go z semantycznego punktu widzenia. Klasyczny dokument (w tym na tradycyjnym nośniku) zawiera wizualnie możliwe do zidentyfikowania bloki, które można odtworzyć w HTML:

- nagłówek, który będzie umieszczony w znaczniku `<header>` (nie mylić z znacznikiem `<head>`);
- główny element, określony przez tag `<main>`;
- wreszcie, stopka-strona, opisane przez element `<footer>`.

Każdy z tych elementów może być wykorzystywany do konkretnych zastosowań:

- na przykład `header` będzie zawierał menu nawigacyjne (samo w sobie oprawione znacznikiem `<nav>`);
- w `ręce` będą figurować wszystkie elementy związane z treścią, które mogą również jeszcze dokładniej ustrukturyzować dokument (`sekcja`, `artykuł`, `Azji`, `div` itp.);
- oferta `footer` będzie zawierała bardziej ogólne informacje, takie jak linki do sieci społecznościowych, informacje prawne, ogólne warunki korzystania z usługi oraz prawdopodobnie inne menu nawigacyjne.

Kod HTML pojawi się w następującej strukturze:

```html
<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Moja strona osobista</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
                <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
        </header>
        <main>
            <h1>Witamy na mojej stronie osobistej</h1>
            <h2>Szybkie i proste tworzenie strony WWW</h2>
            <p>OVHcloud oferuje hosting Start 10M dla każdej zarejestrowanej domeny.</p>
            <p>Oferta "Domena" zawiera:</p>
            <ul>
                <li>Hosting WWW 10 MB gratis</li>
                <li>Konto E-mail 5 GB za darmo</li>
                <li>DNSSEC: ochrona przed zatruciem cache (cache poisoning)</li>
                <li>Easy Redirect: dostęp do sieci społecznościowych z domeny</li>
            </ul>
        </main>
        <footer>
            <p>© 2022 Strona osobista</p>
        </footer>
    </body>
</html>
```

### Tworzenie interaktywnych elementów

Linki umożliwiające poruszanie się między stronami są istotnymi elementami strony internetowej. Aby je wdrożyć, należy użyć tagu `<a>` (_anchor_, kotwica), który sprawia, że element interaktywny, wraz z atrybutem `href`, który będzie zawierać adres, do którego wskazuje. W poniższym przykładzie uczynimy interaktywne logo zawarte w znaczniku `<header>`:

```html
<header> 
    <a href="index.html">
        <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
    </a>
</header>
```

Możemy zrobić to w ten sam sposób, aby tekst był interaktywny:

```html
<p>Oferta <a href="https://www.ovhcloud.com/fr/domains/">"Domena"</a> zawiera:</p>
```

Aby wyświetlić cel linku w nowej zakładce, wystarczy dodać atrybut `target` do tagu `<a>`:

```html
<p>Oferta <a href="https://www.ovhcloud.com/fr/domains/" target="_blank">"Nazwa domeny"</a> zawiera:</p>
```

### Jak przechowywać treści na hostingu?

Aby Twoje strony WWW były widoczne dla wszystkich użytkowników, należy je umieścić na hostingu (należy aktywować hosting zgodnie [z instrukcjami zawartymi w tym przewodniku](https://docs.ovh.com/fr/hosting/activer-start10m/)).

Pliki są przesyłane za pomocą dedykowanego protokołu: **FTP** (dla **F**ile **T**ransfert **P**protokół). Skorzystaj z programu dedykowanego do tej operacji, takiego jak [FileZilla](https://filezilla-project.org/download.php?type=client) lub [Cyberduck](https://cyberduck.io/download/).

### Uruchom swoją stronę przez FTP

Aby umieszczać pliki na Twoim hostingu, zapoznaj się z przewodnikiem dotyczącym [korzystania z FileZilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/#connexion-avec-filezilla-en-ftp).

Po całkowitym przeniesieniu plików na Twój hosting możesz zobaczyć wynik wpisując nazwę domeny na pasku adresowym przeglądarki lub naciskając klawisz `F5` na klawiaturze, aby odświeżyć stronę, jeśli już jesteś na Twojej stronie.

> [!warning]
> 
> Nasza infrastruktura zawiera system cache pozwalający twoim stronom na wyświetlanie się z jak najkrótszym czasem odpowiedzi. Podczas wdrażania może nie być widoczne zmiany wykonane w przeglądarce. W takim przypadku odczekaj kilka sekund i odśwież cache przeglądarki za pomocą połączenia przycisków `Ctrl` + `F5`.
> 

### Ulepsz swoją stronę za pomocą szablonu

CSS i HTML to języki łatwe do zrozumienia i szybkie rezultaty. Jednak języki te, a zwłaszcza CSS, uległy znacznym zmianom. Jeśli arkusze stylów kaskadowych oferują więcej funkcji (animacje, gradienty, umiejscowienie elementów na stronie, itp.), stały się bardziej złożone do kodowania.

Oszczędzaj czas na wyglądzie Twojej strony WWW i skup się na zawartości, a tym samym na pozycjonowaniu. Często korzystasz z *szablonów*, aby zaoszczędzić czas i uzyskać wynik zarówno graficzny, jak i funkcjonalny (design, ergonomia, widoczność na smartfonie i tablecie).

#### Czym jest szablon? Jakie rozwiązania wybrać?

Szablon to *szablon* lub przykład, który można użyć ponownie, dopasowując lub nie. Korzystanie z *szablonów* pozwala zaoszczędzić czas na budowie obiektu, dostosowując elementy już zaprojektowane, zapewniając jednocześnie właściwości, których można wymagać od "profesjonalnej" strony internetowej. Można również użyć słowa "temat".

W Internecie dostępne są bezpłatne rozwiązania "Open Source", takie jak [Bootstrap](https://materializecss.com/), [Materialize](https://materializecss.com/), [Foundation](https://get.foundation/) czy [Semantic UI](https://semantic-ui.com/). Narzędzia te określane są jako "framework": księgarnie ułatwiające tworzenie stron WWW lub aplikacji internetowych. Oferują one standardowe, spersonalizowane i nadające się do ponownego użycia elementy oraz *szablony* wielokrotnego użytku.

#### Bootstrap

Wśród narzędzi używanych przez programistów www, Bootstrap jest najczęściej używanym frameworkiem. Pierwotnie opracowana w 2010 roku przez inżynierów pracujących dla Twittera w celu zharmonizowania rozwoju wewnętrznych interfejsów. Bootstrap, dostępny na licencji Open Source od 2011 roku, ewoluował w sposób ciągły w miarę rozwoju technologicznego (zmian technologicznych i zastosowań).

Przykłady stron WWW i aplikacji wykonanych z Bootstrap:

- [https://themes.getbootstrap.com/](https://themes.getbootstrap.com/)
- [https://bootswatch.com/](https://bootswatch.com/)
- [https://bootstrapmade.com/](https://bootstrapmade.com/)
- [https://bootstraptaste.com/](https://bootstraptaste.com/)
- [https://bootstrapthemes.co/](https://bootstrapthemes.co/).

## Sprawdź również

W Internecie znajdziesz mnóstwo zasobów do nauki i ulepszania swojej praktyki, kopiowania całych elementów kodu lub części kodu, dodawania funkcji na swojej stronie bez ryzyka błędów lub usterek. Oto kilka punktów odniesienia:

- [Rozpocznij od HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [Przewodnik dotyczący znaczników HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Tutorial W3Schools w HTML](https://www.w3schools.com/html/)
- [Tutoriale CSS Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Tutorials)
- [CSS Tutorial W3 Schools](https://www.w3schools.com/css/).

### Wykonuj obrazy

Istnieje wiele darmowych narzędzi, które umożliwiają przeprojektowanie Twoich ilustracji:

- Aplikacja [Zdjęcia](https://apps.microsoft.com/store/detail/photos-microsoft/9WZDNCRFJBH4) Windows 10 i 11
- Aplikacja [Zdjęcia](https://support.apple.com/en-US/guide/photos/welcome/mac) macOS
- [Paint.Net](https://www.getpaint.net/), [GIMP](https://www.gimp.org/), [darktable](https://www.darktable.org/)
- Pamiętaj również o aplikacjach do edycji zdjęć dostępnych na smartfonach z systemem Android lub iOS.

Znajdziesz tu również zasoby online:

- [Kompresja](https://compressor.io/)
- [Szrink](https://shrinkme.app/)
- [Free Online Image Optimizer](https://kraken.io/web-interface)
- [TinyJPG](https://tinyjpg.com/) i [TinyPNG](https://tinypng.com/).

Skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, sprawdź naszą [ofertę wsparcia](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
