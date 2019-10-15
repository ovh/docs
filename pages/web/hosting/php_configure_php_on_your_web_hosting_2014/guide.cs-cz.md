---
title: 'Změna PHP verze na webhostingu OVH'
slug: konfigurace-php-webhosting
excerpt: 'Zjistěte, jak změnit verzi PHP na svém webhostingovém řešení'
section: PHP
order: 1
---

**Poslední aktualizace 08/10/2018**

## Cíl

Na Internetu existuje nepřeberné množství stránek. Ať již chcete zveřejnit blog nebo online obchod, sdílet své koníčky či propagovat své podnikání, [webhostingové balíčky OVH](https://www.ovh.cz/webhosting/){.external} zajistí dostupnost Vašich stránek pro miliony uživatelů po celém světě (za předpokladu kompatibility stránek s [konfigurací našich infrastruktur](https://cluster028.hosting.ovh.net/infos/){.external}). Ve všech uvedených případech může nastat situace, kdy budete na svém webhostingu potřebovat nastavit jinou verzi PHP než tu, s níž je hosting dodáván ve výchozím nastavení.

Zjistěte, jak změnit verzi PHP na svém webhostingovém řešení OVH.

## Prerekvizity

- Některý z [webhostingových balíčků OVH](https://www.ovh.cz/webhosting/){.external}.
- Přístup do administračního rozhraní webhostingu prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager) nebo přístupové údaje pro připojení k FTP. 

## Postup

V současné době existuje několik verzí programovacího jazyka PHP.  Nabídka společnosti OVH zahrnuje všechny hlavní verze, jejichž kompletní seznam naleznete na následujícím odkazu: <https://www.ovh.cz/webhosting/php.xml> 

**Před provedením jakýchkoli úprav ověřte kompatibilitu vybrané verze PHP se svými webovými stránkami.**

### Fáze 1: ověření kompatibility webových stránek

Podobně, jako se společnost OVH stará o instalaci nejnovějších verzí programovacího jazyka PHP na svých serverech, je úkolem webmastera zajistit kompatibilitu hostovaných stránek s těmito verzemi. V závislosti na typu hostovaných stránek existují dva způsoby, jak toho dosáhnout:

**Webové stránky vytvořené pomocí redakčního systému** (WordPress, Joomla!, PrestaShop a další):

- Obraťte se na oficiální dokumentaci vydavatele softwaru, v níž naleznete veškeré informace o fungování Vašeho redakčního systému a postupu pro jeho aktualizaci. 
- V případě nutnosti aktualizujte svůj redakční systém na nejnovější verzi.

**Webové stránky založené na individuálním řešení**: 

- Spojte se s webmasterem spravujícím Vaše stránky.
- Detailní informace týkající se procesu pro změnu verze PHP naleznete v oficiální dokumentaci na následujícím odkazu: <http://php.net/manual/en/appendices.php>.
- V případě nutnosti aktualizujte zdrojový kód svých stránek tak, aby byl kompatibilní s příslušným webhostingovým řešením OVH.

Informace o aktuální verzi PHP používané Vaším webhostingovým řešením můžete získat některým z následujících způsobů: 

|Metoda|Popis|
|---|---|
|Zákaznický prostor OVH|Přihlaste se do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, v levém postranním panelu klikněte na položku `Hostingy`{.action} a vyberte příslušné webhostingové řešení. V záložce `Základní informace`{.action} přejděte do karty **Konfigurace**, v níž je uvedena aktuálně používaná verze globálního PHP. |
|Skript|Vytvořte **.php** skript obsahující následující kód: `<?php phpinfo(); ?>`. Po nahrání na webhostingové úložiště skript spusťte zadáním jeho kompletní URL adresy.|

![phpversion](images/change-php-version-step1.png){.thumbnail}

Pokud se Vám z nějakého důvodu nepodaří zajistit kompatibilitu svých webových stránek s nejnovější verzí programovacího jazyka PHP, pak - **i přesto, že to důrazně nedoporučujeme** - můžete v případě nutnosti zkusit aktuální verzi PHP na svém webhostingu downgradovat. V takovém případě se však vystavujete riziku vzniku vážných potíží s fungováním Vašich webových stránek.  

Jakmile jste připraveni provést změnu verze programovacího jazyka PHP na svém webhostingu, pokračujte k další části této příručky.

### Fáze 2: změna PHP verze na webhostingu OVH

Přechod na jinou verzi PHP lze realizovat dvěma způsoby:

- **Konfigurační asistent v Zákaznickém prostoru OVH**: konfigurační asistent Vás provede procesem úpravy konfigurace. Toto řešení předpokládá nižší míru technických dovedností. Detailní informace na toto téma naleznete v následující dokumentaci: [Úprava konfigurace webhostingu](https://docs.ovh.com/cz/cs/hosting/modifikace-os-webhosting/){.external}.

- **Manuální úprava konfiguračního souboru .ovhconfig**: toto řešení předpokládá vyšší míru technických dovedností a vyžaduje připojení k webhostingovému úložišti. Detailní informace na toto téma naleznete v následující dokumentaci: [Konfigurace souboru .ovhconfig](https://docs.ovh.com/cz/cs/hosting/konfigurace-souboru-ovhconfig/){.external}.

Možnost změny verze PHP prostřednictvím souboru .htaccess není v rámci nových [webhostingových balíčků OVH](https://www.ovh.cz/webhosting/){.external} dostupná. Direktiva pro změnu PHP verze v souboru .htaccess neumožňuje použití posledních verzí PHP na našich infrastrukturách. Z toho důvodu je tyto změny zapotřebí provádět v souboru „.ovhconfig“. Detailní informace na toto téma naleznete v následující dokumentaci: [Konfigurace souboru .ovhconfig](https://docs.ovh.com/cz/cs/hosting/konfigurace-souboru-ovhconfig/){.external}.

## Kam dál

[Úprava konfigurace webhostingu](https://docs.ovh.com/cz/cs/hosting/modifikace-os-webhosting/){.external}.

[Konfigurace souboru .ovhconfig](https://docs.ovh.com/cz/cs/hosting/konfigurace-souboru-ovhconfig/){.external}.

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.