---
deprecated: true
title: 'Svetainių talpinimas: kiti veiksmai, atliekami su .htaccess failu'
excerpt: Šiame gide pateikiamos kituose giduose neaprašytos .htaccess galimybės.
slug: svetainiu_talpinimas_kiti_veiksmai_atliekami_su_htaccess_failu
legacy_guide_number: g1972
---


## Katalogo peržiūros uždraudimas
Jeigu norite uždrausti lankytojams peržiūrėti katalogų turinį, jeigu juose nėra index (.cgi, .html, .php...) failo, sukurkite .htaccess failą ir jame įrašykite:


```
Options -Indexes
```




## Nestandartiniai klaidų pranešimai
Jeigu norite naudoti savo klaidų pranešimų puslapius arba, esant klaidai, nukreipti lankytojus į tam tikrą puslapį, į .htaccess failą įrašykite tokio tipo komandą:


```
ErrorDocument klaidos_numeris pranešimas_arba_puslapis
```


Parametrą „klaidos_numeris“ keiskite atitinkamu klaidos numeriu. Dažniausiai pasitaikančios klaidos yra:


- 401: Authorization required. Ši klaida matoma, kai lankytojas nori atidaryti apsaugotą katalogą ar failą, bet įveda blogą prisijungimo vardą ar slaptažodį.
- 403: Access denied. Klaida matoma, kai bandomas atidaryti katalogas, kuriame nėra index.html (arba index.php ir pan.) failo ir uždraustas katalogų turinio rodymas.
- 404: Not Found. Failas, kuris nurodytas adrese, nerastas. 
- 500: Server Error. Paprastai ši klaida matoma dėl klaidingai įvykdyto PHP ar CGI failo, taip pat, jei failui priskirta per mažai teisių.


Parametrą „pranešimas_arba_puslapis“ keiskite veiksmu. Jeigu norite, kad būtų matomas paprastas pranešimas, tiesiog įveskite jį. Jeigu norite, kad lankytojas būtų nukreiptas į tam tikrą puslapį, nurodykite kelią iki jo.


- Norite, kad esant klaidai 403 būtų matomas pranešimas „Apgailestaujame, jums nesuteikta teisė atverti šio failo“. Tokiu atveju į .htaccess failą įrašykite:


```
ErrorDocument 403 „Apgailestaujame, jums nesuteikta teisė atverti šio failo“
```


- Norite, kad esant klaidai 404 būtų atidaromas jūsų sukurtas puslapis 404.html (domenui domenas.com):


```
ErrorDocument 404 http://www.domenas.com/404.php
```



Taip pat galite nukreipti lankytojus į CGI scenarijų, kuris pateiks pranešimą, nukreips lankytoją į kitą puslapį, priklausantį nuo prieš tai lankyto (tai galima padaryti naudojant REQUEST_URI), taip pat gali išsiųsti įspėjantį laišką administratoriui ir t.t. Nukreipimo į scenarijų pavyzdys:


```
Errordocument 404 /cgi-bin/klaida.cgi?tipas=404
```


Keitimas atliekamas tik kai puslapį bandoma atidaryti naudojant https (SSL):


```
Errordocument 401 /~login/error.html
```


Jeigu tai neveikia, įsitikinkite, kad „Internet Explorer“ nustatymuose, kortelėje „Advanced“ pažymėta Rodyti paprastus HTTP klaidų pranešimus (show simplified HTTP errors).


## Kito index failo nurodymas
Pagal nutylėjimą, katalogo index failas yra index.html, index.htm arba index.php. Jeigu norite naudoti kitą failą, galite jį nurodyti .htaccess faile:


```
DirectoryIndex failo_pavadinimas
```


Pavyzdžiui, norite naudoti failą pradinis.html kaip pagrindinį svetainės puslapį:


```
DirectoryIndex pradinis.html
```




## Nukreipimai
Jeigu norite sukurti nukreipimus, skaitykite [šį gidą](https://www.ovh.lt/g1339.redirection-nom-de-domaine#nukreipimas_per_htaccess).


## URL perrašymas
Apie URL perrašymą skaitykite [šiame gide](https://www.ovh.lt/g1971.url_perrasymas_su_mod_rewrite).


## 
Daugiau informacijos apie .htaccess failą rasite [šiame gide](https://www.ovh.lt/g1967.viskas_apie_htaccess_faila).

