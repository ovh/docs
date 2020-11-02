---
deprecated: true
title: 'Konfigurace dynamického DNS'
slug: hosting-dynhost
excerpt: 'Zjistěte, jak nakonfigurovat dynamický DNS záznam (DynHost) na své OVH doméně'
section: 'DNS a DNS zóna'
order: 6
---

**Poslední aktualizace 17/08/2018**

## Cíl

DNS zóna představuje konfigurační soubor domény a sestává z technických informací, které jsou označovány jako záznamy. Existuje mnoho situací, v nichž je za účelem minimalizace nedostupnosti služby zapotřebí DNS záznamy dynamicky aktualizovat. Příkladem takové situace může být hosting herního serveru bez fixní IP adresy. 

**Zjistěte, jak nakonfigurovat dynamický DNS záznam (DynHost) na své OVH doméně.**

## Prerekvizity

- Dostatečná oprávnění ke správě domény prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Doména musí být nakonfigurována na DNS servery OVH.
- DynHost záznam, který se chystáte vytvořit, nesmí v OVH DNS zóně Vaší domény existovat ve formě A záznamu.

> [!warning]
>
> - Pokud Vaše doména nepoužívá DNS servery OVH, kontaktujte prosím poskytovatele služby spravujícího konfiguraci Vaší domény a požádejte o informace týkající se postupu pro vytvoření příslušného záznamu.
> 
> - Pokud je Vaše doména registrována u OVH, můžete snadno ověřit, zda používá naši konfiguraci. Za tímto účelem přejděte do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, vyberte příslušnou doménu a přejděte do záložky `DNS servery`{.action}.
>

## Postup

### Fáze 1: vytvoření uživatele DynHost

První krok spočívá ve vytvoření uživatele DynHost. Tento krok Vám umožní provést aktualizaci dynamického DNS záznamu, který se chystáte vytvořit. Ze všeho nejdříve se přihlaste do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, v levém postranním panelu klikněte na položku `Domény`{.action} a následně vyberte doménu, v jejímž rámci si přejete provést požadované úpravy. Poté přejděte do záložky `DynHost`{.action}.

![dynhost](images/use-dynhost-step1.png){.thumbnail}

Klikněte na tlačítko `Správa přístupu`{.action} a následně na `Vytvořit identifikátor`{.action}. V dialogovém okně vyplňte požadované informace:

|Informace|Popis|
|---|---|
|Přípona přístupového identifikátoru|Zadejte příponu pro DynHost uživatele|
|Subdoména|Zadejte subdoménu, pro níž je DNS záznam určen|
|Heslo|Zadejte přístupové heslo uživatele DynHost|

Klikněte na tlačítko `Schválit`{.action}. Nově vytvořený uživatel se zobrazí v tabulce. Pokud si přejete vytvořit další uživatele, předchozí postup opakujte.

![dynhost](images/use-dynhost-step2.png){.thumbnail}

### Fáze 2: vytvoření dynamického DNS záznamu (DynHost)

Druhý krok sestává z vytvoření DNS záznamu, který má být dynamicky aktualizován. Připomínáme, že tento záznam nesmí v OVH DNS zóně Vaší domény existovat jako A záznam. Pro informace o postupu pro ověření a případné odstranění existujícího DNS záznamu se obraťte na následující dokumentaci: [Modifikace DNS zóny](https://docs.ovh.com/cz/cs/domains/modifikace-dns-zony/){.external}.

Jakmile je vše připraveno pro vytvoření DynHost záznamu, přejděte do záložky `DynHost`{.action} a klikněte na tlačítko `Přidat DynHost`{.action}. V dialogovém okně vyplňte požadované informace:

|Informace|Popis|
|---|---|
|Subdoména|Zadejte subdoménu, pro níž má být DNS záznam dynamicky aktualizován. Tato subdoména musí být shodná se subdoménou, kterou jste zadali při vytváření uživatele DynHost.|
|Cílová IP adresa|Zadejte IP adresu, která má být DNS záznamem aktuálně používána. V souladu s principem DynHost bude tato IP adresa následně dynamicky aktualizována.|

Klikněte na tlačítko `Schválit`{.action}. Nově vytvořený DynHost záznam se zobrazí v tabulce. Pokud si přejete vytvořit další záznamy, předchozí postup opakujte.

![dynhost](images/use-dynhost-step3.png){.thumbnail}

### Fáze 3: automatizace aktualizací DynHost

Po vytvoření uživatele a DynHost záznamu nezbývá než automatizovat aktualizace DNS záznamu tak, aby byly prováděny dynamicky. Za tímto účelem je nezbytné použít klienta provádějícího pravidelné kontroly změn cílové IP adresy.

> [!warning]
>
> Instalaci a konfiguraci klienta je nutné provést na základě Vašich vlastních technických dovedností. Níže naleznete několik obecných informací vážících se k instalačnímu postupu. V případě jakýchkoli nejasností se prosím obraťte na profesionálního poskytovatele. Společnost OVH v tomto ohledu nenabízí přímou podporu. 
>

V souvislosti s danou problematikou existuje široké spektrum možností a je možné, že klient je již na Vašem serveru či počítači nainstalován. Pokud disponujete kompatibilním routerem, je možné, že klient je předinstalován v jeho rozhraní. Po výběru a instalaci klienta je zapotřebí provést jeho konfiguraci, a to za použití údajů DynHost uživatele, kterého jste vytvořili v první části této příručky.

V závislosti na typu klienta může být vyžadována i aktualizační URL adresa a některé další informace vážící se k uživateli DynHost a příslušné subdoméně. V takovém případě použijte níže uvedenou URL šablonu a nahraďte generické informace informacemi vztahujícími se k Vaší službě.

http://www.ovh.com/nic/update?system=dyndns&hostname=**$HOSTNAME**&myip=**$IP**

|Informace|Doplňte|
|---|---|
|$HOSTNAME|Subdoména, jíž se modifikace dotýká.|
|$IP|Nová cílová IP adresa.|

Aktualizaci cílové IP adresy můžete ověřit ve svém Zákaznickém prostoru OVH, záložka `DynHost`{.action}. 

![dynhost](images/use-dynhost-step4.png){.thumbnail}

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.