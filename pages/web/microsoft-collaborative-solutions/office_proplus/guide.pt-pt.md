---
title: Utilizar o ambiente de trabalho remoto com Microsoft 365 apps
legacy_guide_number: 2339
slug: office365-proplus-escritório-a-distância
excerpt: Saiba como instalar e utilizar Microsoft 365 apps num ambiente de trabalho remoto (RDS) ou num computador partilhado
section: Office
order: 4
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 06/09/2021**

## Objetivo

Deseja utilizar o pacote de software presente no pack Microsoft 365 apps numa máquina distante ou partilhada. Para isso, é necessário seguir o procedimento de instalação descrito neste guia.

**Saiba como instalar e utilizar Microsoft 365 apps num ambiente de trabalho remoto (RDS) ou num computador partilhado.**

## Requisitos

- Dispor de uma licença Microsoft 365 apps for entreprise (Ex Office 365 ProPlus)
- Utilizar Microsoft Windows através de um escritório à distância (**R**emote **D**esktop **S**ervices)

> [!warning]
>
> A licença Microsoft 365 Apps for business é incompatível com uma utilização via RDS e computador partilhado.
> 

## Instruções

Este guia baseia-se nas informações fornecidas no guia Microsoft [Deploy Microsoft 365 Apps by using Remote Desktop Services](https://docs.microsoft.com/pt/deployoffice/deploy-microsoft-365-apps-remote-desktop-services).

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção «Quer saber mais?» deste guia.
> 

### Método 1: Configuração manual

A instalação de uma oferta Microsoft 365 Apps for entreprise num computador partilhado utilizando os serviços de ambiente de trabalho remoto (RDS) não funciona sem uma configuração específica. Sem esta configuração, deverá obter a seguinte mensagem:

![emails](images/4717.png){.thumbnail}

> [!primary]
>
> Se já realizou a instalação da sua licença Office 365 Proplus, é necessário **desinstalar** a licença.
>

- Depois de desinstalar a sua licença, queira [clicar aqui](https://www.microsoft.com/en-us/download/details.aspx?id=49117){.external} para descarregar a ferramenta de implementação Microsoft 365.


- **Execute** a ferramenta de implementação na sua máquina.


- Altere o ficheiro de `configuration.xml`.

![office 365](images/4720.png){.thumbnail}

Edite o ficheiro de `configuration.xml` e depois descarregue as seguintes linhas:

```xml
Display Level="None" AcceptEULA="True"
Property Name="SharedComputerLicensing" Value="1"
```

Se estas linhas não existirem, pode copiá-las/colá-las no ficheiro.

- Registe as alterações efetuadas. A seguir, abra um terminal powershell e execute estes dois comandos a partir da pasta onde está o ficheiro de `configuration.xml`:

```powershell
./setup.exe /download configuration.xml
```

e

```powershell
./setup.exe /configure configuration.xml
```
> [!primary]
>
> A execução destes comandos pode levar vários minutos.

- Abra o editor do registo windows executando o `Regedit` e siga o seguinte caminho:

```powershell
HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Office\\ClickToRun\\Configuration
```

- Verifique a seguinte chave:

```powershell
SharedComputerLicensing
```

Certifique-se de que o seu valor é de `1`. Se esta chave não existir, pode criá-la.

![emails](images/4723.png){.thumbnail}

- Execute uma aplicação da suite Office 365 e deverá introduzir o seu nome de utilizador e a respetiva palavra-passe.

![emails](images/4724.png){.thumbnail}

- Agora pode utilizar a suite Office 365 a partir do seu computador partilhado utilizando os serviços de ambiente de trabalho remoto (RDS).


![emails](images/4726.png){.thumbnail}


## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
