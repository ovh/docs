---
deprecated: true
title: Změna FTP hesla
slug: zmena-hesla-ftp
excerpt: Zjistěte, jak změnit přístupové heslo FTP uživatele na webhostingu OVH
section: FTP a SSH
order: 1
---

**Poslední aktualizace 13/03/2018**

## Cíl

V rámci webhostingových balíčků OVH máte přístup k FTP úložišti, na němž jsou nahrány soubory Vašich webových stránek. K tomuto úložišti se lze připojit zadáním přihlašovacích údajů příslušného FTP uživatele (uživatelské jméno a heslo).

Zjistěte, jak změnit přístupové heslo FTP uživatele na webhostingu OVH.

## Prerekvizity

- Některý z [webhostingových balíčků OVH](https://www.ovh.cz/webhosting/){.external}.
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Postup

### Fáze 1: přechod do rozhraní pro správu FTP uživatelů

Ze všeho nejdříve se přihlaste do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, v levém postranním panelu klikněte na položku `Hostingy`{.action} a vyberte webhostingové řešení, v jehož rámci si přejete provést požadované úpravy. V základním rozhraní pro správu webhostingu klikněte na záložku `FTP - SSH`{.action}.

Tabulka nabízí přehled všech FTP uživatelů vytvořených na Vašem webhostingu. Pomocí těchto uživatelských účtů se můžete připojit ke svému FTP úložišti a provádět správu zde uložených souborů. Při instalaci webhostingu je automaticky vytvořen jeden FTP uživatel.

![ftppassword](images/change-ftp-password-step1.png){.thumbnail}

### Fáze 2: změna přístupového hesla FTP uživatele

Změnu hesla lze v závislosti na typu [webhostingového řešení OVH](https://www.ovh.cz/webhosting/){.external} provést dvěma různými způsoby:

- **Webhostingové balíčky s jedním FTP uživatelem** (Start 10M, Kimsufi Web a Perso): klikněte na ikonku tužky v kolonce `Heslo`{.action} a zadejte nové heslo.

- **Webhostingové balíčky umožňující vytvoření několika FTP uživatelů** (Pro a Performance): klikněte na ikonku ozubeného kolečka v pravé části tabulky a vyberte možnost `Změna hesla`{.action}. Zadejte nové heslo a změnu potvrďte kliknutím na tlačítko `Schválit`{.action}.

Změna hesla může trvat několik minut.

> [!primary]
>
> Heslo musí splňovat předem daná formální kritéria. Při změně hesla se řiďte pokyny uvedenými v Zákaznickém prostoru OVH. Zároveň doporučujeme dbát následujících bezpečnostních opatření:
>
> - Nikdy nepoužívejte stejné heslo dvakrát.
>
> - Používejte hesla, která neobsahují Vaše osobní údaje (jméno, příjmení, datum narození apod.).
>
> - Heslo pravidelně aktualizujte.
>
> - Heslo si nikam nezapisujte a nesdílejte jej s ostatními lidmi prostřednictvím e-mailu.
>
> - Nedávejte svému webovému prohlížeči svolení k zapamatování hesla.
>

### Fáze 3: připojení k FTP úložišti

Jakmile změníte přístupové heslo FTP uživatele, můžete se jeho prostřednictvím připojit ke svému FTP úložišti.

V závislosti na typu [webhostingového řešení](https://www.ovh.cz/webhosting/){.external} existuje několik způsobů, jak se k FTP úložišti připojit:

- **FTP Explorer**: připojení k FTP úložišti prostřednictvím webového prohlížeče. V záložce `FTP-SSH`{.action} jednoduše klikněte na tlačítko `FTP Explorer`{.action}.

- **Externí FTP klient**: k FTP úložišti se můžete připojit také prostřednictvím externího FTP klienta, jakým je např. FileZilla.

- **SSH přístup**: komunikace s úložištěm prostřednictvím SSH probíhá na bázi zadávání příkazů do terminálu. Tento typ připojení vyžaduje pokročilé technické dovednosti.

## Kam dál

Přidejte se k naší uživatelské komunitě na [https://community.ovh.com](https://community.ovh.com){.external}.