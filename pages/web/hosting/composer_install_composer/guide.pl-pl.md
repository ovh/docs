---
title: 'Instalacja oprogramowania "Composer" na hostingu'
excerpt: 'Instalacja oprogramowania "Composer" na hostingu www'
slug: instalacja_oprogramowania_composer_na_hostingu_www
section: Composer
---

## Wstępne wymagania
"Composer" może byc instalowany na hostingu www od oferty Pro. Należy dysponować dostępem przez SSH, ponieważ jest to narzędzie działające z linii poleceń.


## Instalacja

## Połącz się przez SSH
Sprawdź, czy korzystasz z najnowszej wersji PHP (5.6) w linii poleceń:


```
php --version
```


Jeśli nie jest to prawidłowa wersja, możesz skonfigurować alias:


```
alias php='/usr/local/php5.6/bin/php'
```


Zalecamy pozostanie w katalogu głównym hostingu, aby pliki programu "Composer" nie były dostępne publicznie.

## Pobierz i zainstaluj
Wykonaj tę komendę:


```
curl -sS https://getcomposer.org/installer | php
```


Program "Composer" został zainstalowany na Twoim hostingu www!


## Przykłady zastosowania
Jeśli chcesz zainstalować Symfony 2, możesz uruchomić tę komendę:


```
php composer.phar create-project symfony/framework-standard-edition my_project_name "2.7.*"
```


Możesz również skorzystać z API OVH korzystając z oficjalnej funkcji. W tym celu wystarczy dodać plik o nazwie composer.jso z listą zależności, których potrzebujesz. Oto przykład tego pliku z funkcją API OVH:


```
{
"name": "Example Application",
"description": "This is an example of OVH APIs wrapper usage",
"require": {
"ovh/ovh": "1.1.*"
}
}
```


Aby dokonać instalacji, wystarczy uruchomić poniższą komendę w tym samym katalogu:


```
php composer.phar install
```


Aby korzystać z tej biblioteki, skorzystaj z dokumentacji oraz z kodu dostępnego na [github](https://github.com/ovh/php-ovh).

