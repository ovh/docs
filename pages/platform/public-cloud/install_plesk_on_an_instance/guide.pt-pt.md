---
title: 'Instalar Plesk numa instância'
slug: instalar-plesk-numa-instancia
excerpt: 'Saiba como instalar o Plesk na sua instância Public Cloud'
section: Tutoriais
---

**Última atualização: 10/05/2019**

## Sumário

O Plesk é uma interface de gestão de servidores simples de utilizar. Pode instalá-la e utilizá-la nas suas instâncias Public Cloud da OVH.

**Saiba como instalar o Plesk na sua instância Public Cloud.** 

> [!warning]
> 
> A utilização e a gestão dos serviços OVH são da responsabilidade do cliente. Uma vez que não temos acesso a estas máquinas, não podemos administrá-las nem fornecer-lhe assistência. O cliente é o único responsável pela gestão e pela segurança do serviço.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. Se encontrar alguma dificuldade ou tiver dúvidas relativamente à administração, à utilização ou à segurança de um servidor, deverá contactar um fornecedor especializado. Não hesite em consultar o [fórum da comunidade](https://community.ovh.com/en/){.external} para trocar opiniões com outros utilizadores.
>

## Requisitos

- [Ter criado uma instância a partir da Área de Cliente OVH](https://docs.ovh.com/pt/public-cloud/criar_uma_instancia_a_partir_do_espaco_cliente_ovh/).
- [Tornar-se o utilizador root e selecionar uma palavra-passe](https://docs.ovh.com/pt/public-cloud/tornar-se_root_e_definir_uma_palavra-passe/).

## Instruções

### 1 - Instalar o Plesk

A instalação do Plesk é realizada facilmente a partir de uma ligação SSH. Para isso, descarregue e execute o script de instalação do Plesk através do comando mais adaptado à sua situação (ver abaixo).

- **Para uma instalação predefinida não personalizada do Plesk**:

```bash
# sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

- **Para uma instalação personalizada do Plesk**:

```bash
# sh <(curl https://autoinstall.plesk.com/plesk-installer || wget -O - https://autoinstall.plesk.com/plesk-installer)
```

De seguida, aguarde até a instalação ficar concluída. 

### 2 - Configurar o Plesk

Já é possível ligar-se à interface Plesk e configurá-la. Para isso, utilize o endereço `https://IP.de.l.instance:8443` no seu navegador de Internet. Deverá indicar as suas credenciais **root**.

![public-cloud](images/3301.png){.thumbnail}

Depois de ligado, um assistente de configuração irá aparecer. Este irá permitir-lhe configurar o tipo de visualização que pretende definir para a sua interface Plesk. Faça a sua escolha em função da sua atividade.

![public-cloud](images/3302.png){.thumbnail}

Selecione o tipo de visualização da interface Plesk que pretende aplicar.

![public-cloud](images/3303.png){.thumbnail}

A seguir, deverá indicar as informações relativamente ao acesso à sua instância:

- o hostname;
- o endereço IP;
- a palavra-passe root.

Preencha estas informações nos campos especificados.

![public-cloud](images/3304.png){.thumbnail}

Finalmente, deverá indicar as informações sobre a conta **administrador**.

![public-cloud](images/3305.png){.thumbnail}

### 3 - Adicionar uma licença

Para adicionar uma licença Plesk, tenha consigo a chave que lhe foi fornecida pelo seu fornecedor.

> [!primary]
>
> A OVH não vende licenças Plesk para as soluções de Public Cloud. No entanto, poderá adquirir uma licença através do site [Plesk](https://www.plesk.com/){.external}.
> 

Ao aceder pela primeira vez à interface, uma nova página irá propor-lhe a instalação da sua licença Plesk de forma automática.

![public-cloud](images/3306-2.png){.thumbnail}

Pretende alterar a sua licença para substituir uma chave de teste ou para alterar a sua oferta, por exemplo? A partir da interface Plesk, aceda à secção `Server Management` e clique em `Tools & Settings`{.action}. Na secção **Plesk**, selecione a opção `License Management`{.action}.

Depois de adicionar a nova chave, poderá visualizar o tipo de licença instalada na parte superior da barra de menu à esquerda.

![public-cloud](images/3322-2.png){.thumbnail}

## Quer saber mais?

[Documentação oficial do Plesk.](https://docs.plesk.com/en-US/onyx/){.external}

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.