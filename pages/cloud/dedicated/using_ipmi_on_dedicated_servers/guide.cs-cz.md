---
deprecated: true
title: 'Použití konzole IPMI pro dedikované servery'
slug: pouziti-ipmi-dedikovane-servery
excerpt: 'Díky IPMI se můžete připojit ke svému serveru bez použití externího softwaru'
section: 'První kroky'
---

**Poslední aktualizace 20/08/2018**

## Cíl

Konzole IPMI (Intelligent Platform Management Interface) umožňuje navázat přímé spojení s dedikovaným serverem bez použití externího softwaru (např. terminál nebo Putty). V této příručce se dozvíte, jak konzoli IPMI spustit.

Mějte prosím na paměti, že toto řešení je někdy také označováno jako KVM (Keyboard Video and Mouse), a to zejména v prostředí virtuálních privátních serverů.

## Prerekvizity

- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager).


## Postup

Připojení pomocí konzole IPMI lze provést dvěma způsoby: prostřednictvím Java applet (doporučený způsob) nebo pomocí prohlížeče (Serial over LAN).

### Připojení přes Java applet

Má-li Java applet fungovat, musí být na Vašem počítači nainstalováno prostředí Java. Pokud na Vašem počítači prostředí Java chybí, přejděte na [oficiální stránky](https://www.java.com/en/download/){.external}.

V Zákaznickém prostoru OVH přejděte do sekce  `IPMI`{.action} a klikněte na tlačítko `Java applet (KVM)`{.action}:

![IPMI Java initiated](images/java_ipmi_initiate.png){.thumbnail}

Nyní je zapotřebí stáhnout a spustit soubor s názvem `kvm.jnlp`:

![IPMI Java opening](images/java_ipmi_activation.png){.thumbnail}

Následně budete přesměrováni na přihlašovací stránku, kam zadáte přihlašovací údaje pro účet `root` (podobně jako při přihlášení prostřednictvím terminálu nebo externího softwaru):

![IPMI Java login](images/java_ipmi_login.png){.thumbnail}

Nyní můžete provádět správu serveru.

### Přihlášení prostřednictvím prohlížeče v režimu Serial over LAN (SoL)

Přestože se doporučuje navazovat spojení přes Java applet, pro připojení je možné použít i konzoli IPMI v režimu Serial over LAN. Za tímto účelem přejděte do sekce `IPMI`{.action} a klikněte na tlačítko `Z prohlížeče (SoL)`{.action}:

![IPMI SoL activation](images/sol_ipmi_activation.png){.thumbnail}

> [!warning]
>
> Připojení v režimu SoL může trvat několik minut. Z toho důvodu je doporučováno připojení prostřednictvím Java applet.
>

### Test a restart IPMI

V některých situacích může dojít k tomu, že konzole IPMI přestane reagovat. Pokud se Vám ke konzoli nedaří připojit, otestujte ji kliknutím na tlačítko `Otestovat IPMI`{.action}:

![IPMI test](images/ipmi_test.png){.thumbnail}

Pokud je vše v pořádku, stejně tak jako v našem příkladu, pravděpodobně se jedná o místní problém (připojení k internetu, počítač). Pokud konzole IPMI zjistí problém, můžete ji restartovat kliknutím na tlačítko `Restartovat IPMI`{.action}.

![IPMI test](images/ipmi_reboot.png){.thumbnail}

Restart může trvat několik minut.

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.