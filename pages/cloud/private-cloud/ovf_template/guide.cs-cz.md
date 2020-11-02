---
deprecated: true
title: 'Aplikace OVF šablony Windows a SQL server'
slug: pouziti-sablony-ovh
excerpt: 'Naučte se pracovat s OVF šablonou Windows a SQL server'
section: 'Služby a volitelná rozšíření OVH'
---

**Poslední aktualizace 04/06/2018**

## Cíl

OVH poskytuje šablony Windows a SQL server (ve formátu OVF), které lze na Vašem virtuálním stroji aplikovat přímo pomocí tlustého klienta (verze 5.5 a 6.0) a webového klienta (flash a HTML 5 pro verzi 6.5) vSphere.

**V této příručce se dozvíte, kde jsou umístěny zdrojové soubory a jak s nimi pracovat.**

> [!primary]
> 
> Ceny jednotlivých diskových obrazů naleznete na [těchto stránkách](https://www.ovh.cz/private-cloud/moznosti/images-licences.xml){.external}.
>

## Prerekvizity

- Přístup k webovému či tlustému klientovi v závislosti na používané verzi.
- Aktivní licence Windows (aktivaci lze provést prostřednictvím [Zákaznického prostoru OVH](https://docs.ovh.com/gb/en/private-cloud/control-panel-ovh-private-cloud/#windows-licence){.external}, záložka [Licence Windows](https://www.ovh.com/auth/?action=gotomanager){.external} u příslušného datacentra). 


## Postup

### Získání URL adresy OVF šablony

Prostřednictvím webového prohlížeče přejděte na hlavní stránku svého Private Cloud řešení a klikněte na tlačítko `OVH Templates`{.action}.

![Název obrázku](images/gatewayssl.png){.thumbnail}

Na stránce `Templates Library` se zobrazí nabídka dostupných šablon pro jednotlivé operační systémy Windows a SQL server. 

Vyberte požadovanou šablonu. Následně se zobrazí nabídka odkazů pro instalaci šablony v závislosti na Vámi používané verzi řešení vSphere.

![Název obrázku](images/copylink.png){.thumbnail}


### Aplikace OVF šablony

Po připojení k webovému klientovi vSphere přejděte na stránku `Host and Clusters`{.action}. Pravým tlačítkem myši klikněte na své datacentrum a vyberte možnost `Deploy OVF Template...`{.action}:

![Název obrázku](images/selectdeploy.png){.thumbnail}

Zobrazí se kontextová nabídka, v jejímž rámci budete požádáni o upřesnění konfigurace aplikované šablony: ze všeho nejdříve zadejte URL adresu šablony, kterou jste si v předcházející fázi zkopírovali do schránky:

![Název obrázku](images/puturl.png){.thumbnail}

V dalším kroku vyberte datacentrum, v němž má být virtuální stroj spuštěn:

![Název obrázku](images/selectdatacenter.png){.thumbnail}

Vyberte cluster, v němž má být virtuální stroj spuštěn:

![Název obrázku](images/selectcluster.png){.thumbnail}

Následně se zobrazí přehled informací o šabloně, včetně výchozího přístupového hesla.
 Z bezpečnostních důvodů je důležité heslo při prvním připojení změnit:

![Název obrázku](images/detailstemplate.png){.thumbnail}

Vyberte datové úložiště pro ukládání dat příslušného virtuální stroje a zvolte formát disku:

![Název obrázku](images/selectdatastore.png){.thumbnail}

Vyberte síť, která má být použita.

![Název obrázku](images/selectnetwork.png){.thumbnail}

V poslední fázi Vám bude nabídnut detailní přehled zvolené konfigurace:

![Název obrázku](images/resume.png){.thumbnail}

Po kliknutí na tlačítko `Finish`{.action} se vytvoří úkol, díky němuž budete moci sledovat průběh aplikačního procesu.

![Název obrázku](images/startdeploy.png){.thumbnail}

Po úspěšném dokončení můžete okno zavřít.

Nově spuštěný virtuální stroj nyní naleznete ve svém inventáři.

![Název obrázku](images/inventory.png){.thumbnail}


## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.