---
title: 'Webhosting: Chyba při načítání stránky'
excerpt: Příručka o chybném nastavení domény
id: '1585'
slug: webhosting_chyba_pri_nacitani_stranky
legacy_guide_number: g1585
---


## Obecné
Tato stránka se zobrazí když je chyba ve směrování domény, nebo doména nebyla na serveru plně deklarována.

Tato chybová hláška se může zobrazit z několika důvodů:


- máte špatné nastavení webového přesměrování

- Vaše doména či subdoména není nasměrována na hostingový server

- Vaše doména nesměruje na správné místo



![](images/img_2321.jpg){.thumbnail}
Užitečné informace:


- Když změníte IP adresu, je potřeba vyčkat na provedení propagace, která trvá zhruba 4 - 24 hodin. Během této doby se Vám tato stránka může zobrazovat.




## Chyba při nastavení webového přesměrování
Tato stránka se může zobrazit, protože jste nastavili pouze částečné přesměrování.

Příklad: Nastavil jsem doménu či subdoménu na přesměrovanou IP serveru (213.186.33.5), ale nenastavil jsem přesměrování v [Zákaznickém prostoru](https://www.ovh.com/manager/web/auth.html/).

V tomto případě si zkontrolujte webové přesměrování pro hlavní doménu a subdoménu "www" a zkontrolujte, zda Vaše doména směruje na správnou IP (213.186.33.5 je IP adresa přesměrovaného serveru).

Příručku jak nastavit přesměrování webu naleznete zde: []({legacy}1339)

![](images/img_2268.jpg){.thumbnail}


## Chyba spojení Vaší domény či subdomény s hostingovým serverem
Tato stránka se může zobrazit, protože jedna z Vašich domén či subdomén nebyla správně nainstalována.

Příklad: Nasměroval jsem moji doménu či subdoménu na IP webového serveru (clusteru), ale nenastavil jsem ji v [Zákaznickém prostoru](https://www.ovh.com/manager/web/auth.html/).

![](images/img_2269.jpg){.thumbnail}
V tomto případě si zkontrolujte, že Vaše doména či subdoména byla správně přidána do Zákaznického prostoru kliknutím na tlačítko "Přidat doménu".
Nezapomeňte zkontrolovat, že doména či subdoména směruje na správnou IP adresu (IP adresu Vašeho serveru můžete nalézt v [Zákaznickém prostoru](https://www.ovh.com/manager/web/auth.html/)).

Příručka, která Vám pomůže v nastavení multidomén je dostupná zde: []({legacy}1332)

![](images/img_2272.jpg){.thumbnail}


## Chyba směrování domény
Tato stránka se zobrazí, protože Vaše doména nesměruje na správnou IP adresu, nebo směruje na IP adresu serveru, na kterém není Vaše doména nainstalována.

Příklad: server Vaší domény je na cluster12, ale Vaše doména směruje na cluster14.

[Více informací o IP adrese hostingového serveru.](https://www.ovh.cz/g1290.cdn-geocache).

![](images/img_2274.jpg){.thumbnail}

