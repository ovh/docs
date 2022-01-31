---
title: 'FAQ - Migracja na najnowsze wersje PHP'
excerpt: 'Hosting www: FAQ - Migracja na najnowsze wersje PHP'
id: '1758'
slug: hosting_www_faq_-_migracja_na_najnowsze_wersje_php
section: PHP
hidden: true
---

## Informacje związane z PHP
Czym jest PHP?
PHP do język programowania używany do tworzenia dynamicznych stron www.
Aktualnie jest to najbardziej popularny w Internecie język programowania, na którym opierają się moduły takie jak Wordpress, Joomla, Drupal...
Dlaczego niektóre wersje PHP zostaną wyłączone przez OVH?
Podobnie jak inne języki programowania, PHP się rozwija. Jest to związane z pojawianiem się nowych funkcji, z poprawianiem błędów... Stare wersje są utrzymywane przez określony czas, następnie są wycofywane.
Stare nie utrzymywane już wersje są ryzykowne dla OVH i użytkowników ze względów bezpieczeństwa. To dlatego zostaną wyłączone.
Jakie korzyści z przejścia na nowe wersje PHP będzie miał użytkownik?
Przenosząc stronę na najnowsze obsługiwane wersje PHP, zmniejszasz ryzyko związane z bezpieczeństwem (włamania) i korzystasz z nowości. 
Poza tym OVH proponuje darmową funkcję PHP-FPM, która zwiększa wydajność począwszy od wersji 5.3. Kliknij [tutaj](https://www.ovh.pl/g1175.optimisation-php-fpm), aby otrzymać więcej informacji.
Które wersje i kiedy zostaną wyłączone?
Oto wersje, które zostaną wyłączone:

|Wersja|Koniec oficjalnego obsługiwania|Obsługa zakończona od ponad...|
|---|---|---|
|4.X|7 sierpnia 2008|6 lat i 8 miesięcy|
|5.2|6 stycznia 2011|4 lat i 3 miesięcy|
|5.3|14 sierpnia 2014|8 miesięcy|


Źródło: http://php.net/eol.php

Te wersje zostaną wyłączone 24 września 2015 roku. Informacje na temat prowadzonych prac są dostępne na tej stronie: [http://prace.ovh.pl/?do=details&id=19466](http://prace.ovh.pl/?do=details&id=19466)
Jakich hostingów to dotyczy?
Wyłączenie starych wersji PHP dotyczy wszystkich hostingów www poza 60free i Demo1G.
Moja strona korzysta ze starych wersji PHP. Co robić?
Twoje strony i zadania CRON domyślnie przejdą na PHP 5.6.
Zalecamy przetestowanie stron i zadań CRON z tymi nowymi wersjami już teraz. W dalszej części tego przewodnika wyjaśnimy, co trzeba zrobić.
Dlaczego OVH nie przeniesie moich skryptów automatycznie?
Możesz zmienić wersję PHP na swoim hostingu w panelu klienta. Zapoznaj się z tym przewodnikiem: []({legacy}1999)

Każda strona jest unikalna. OVH nie może dostosować się do wszystkich klientów, którzy powinni wykonać te operacje samodzielnie.


## ETAP 1: Sprawdź, czy strona jest kompatybilna.
A) Jeśli używasz modułu takiego jak Wordpress, Joomla, Dotclear, PHPBB,... najpierw należy zaktualizować stronę postępując zgodnie z oficjalnymi przewodnikami:


- Wordress: [https://codex.wordpress.org/Upgrading_WordPress](https://codex.wordpress.org/Upgrading_WordPress)
- Joomla: [https://docs.joomla.org/Portal:Upgrading_Versions/en](https://docs.joomla.org/Portal:Upgrading_Versions/en)
- Drupal: [https://www.drupal.org/upgrade](https://www.drupal.org/upgrade)
- Prestashop: [http://doc.prestashop.com/pages/viewpage.action?pageId=11272342](http://doc.prestashop.com/pages/viewpage.action?pageId=11272342)
- ...

B) Jeśli Twoja strona opiera się na spersonalizowanym rozwiązaniu, należy skorzystać z [oficjalnych przewodników PHP na temat migracji](http://php.net/manual/fr/appendices.php).
Jeśli nie tworzyłeś samodzielnie strony, skontaktuj się ze swoim webmasterem.


## ETAP 2: Już dziś skonfiguruj wersję PHP swojej strony.
Masz dwie możliwości:
Możesz zmienić wersję PHP w panelu klienta.

Aby to zrobić, skorzystaj z tego przewodnika: []({legacy}1999)
Możesz również dokonać ręcznej modyfikacji, postępując zgodnie z poniższymi wskazówkami:
Zaloguj się do FTP i przejdź do katalogu głównego. Możesz skorzystać w tego [przewodnika](https://www.ovh.com/fr/g1380.utilisation-filezilla).


- Jeśli nie dysponujesz plikiem .ovhconfig, należy go utworzyć. Wprowadź te 4 linie do pliku tekstowego za pomocą edytora tekstu (wersja 5.6 jest tutaj przykładem):


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```



Zapisz plik pod nazwą ".ovhconfig" i wgraj pliki do katalogu głównego na hostingu. 


- Jeśli dysponujesz już na hostingu plikiem .ovhconfig, możesz zmodyfikować jego zawartość za pomocą edytora tekstu (notatnik, itp.).


Więcej informacji na temat parametrów tego pliku znajduje się w tym 
[przewodniku](https://www.ovh.pl/g1207.konfiguracja-php-hosting-www)

