---
title: 'Postępowanie w przypadku błędu 500 Internal Server Error'
excerpt: 'Dowiedz się, jak przeprowadzić diagnopstykę w przypadku błędu 500 Internal Server Error'
id: '1987'
slug: hosting_www_postepowanie_w_przypadku_bledu_500_internal_server_error
section: Diagnostyka
---

## .htaccess
Jeśli składnia pliku .htaccess jest nieprawidłowa, serwer www wyświetli błąd 500. Należy zmienić nazwę pliku .htaccess na przykład na .htaccess_bak. Jeśli strona zacznie działać, przyczyną błędu jest plik .htaccess.

Kliknij tutaj, aby uzyskać więcej informacji: []({legacy}1967)


## Uprawnienia
Musisz przestrzegać kilku reguł bezpieczeństwa na poziomie uprawnień, które nadajesz swoim skryptom:

- Katalog główny Twojej strony musi mieć obowiązkowo uprawnienia 705 (uprawnienia ustawione domyślnie przez OVH). Chodzi o katalog / lub . (kropka) na serwerze FTP. Nie dokonuj tutaj zmian. 
- Inne katalogi powinny mieć maksymalnie uprawnienia 755.
- Skrypty php/cgi powinny mieć maksymalnie uprawnienia 755.




## Błąd skryptu
Jeśli programujesz na przykład w perlu, błąd działania Twojego skryptu to błąd 500. Ze względów bezpieczeństwa nie uzyskasz więcej informacji. Aby sprawdzić działanie skryptów, możesz skorzystać z połączenia przez ssh (opcja dostępna od oferty Pro).

Kliknij tutaj, aby uzyskać więcej informacji: []({legacy}1962)

