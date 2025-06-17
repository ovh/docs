---
title: 'Como instalar o Plesk numa instância Public Cloud'
excerpt: 'Saiba como instalar o Plesk na sua instância Public Cloud'
updated: 2025-04-08
---

## Sumário

O Plesk é uma interface de gestão de servidores simples de utilizar. Pode instalá-la e utilizá-la nas suas instâncias Public Cloud da OVHcloud.

**Saiba como instalar o Plesk na sua instância Public Cloud.** 

> [!warning]
> 
> A utilização e a gestão dos serviços OVHcloud são da responsabilidade do cliente. Uma vez que não temos acesso a estas máquinas, não podemos administrá-las nem fornecer-lhe assistência. O cliente é o único responsável pela gestão e pela segurança do serviço.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. Se encontrar dificuldades ou dúvidas relativamente à administração, à utilização ou à segurança de um servidor, deverá contactar um [fornecedor especializado](/links/partner). Não hesite em consultar o nosso [fórum comunitário](/links/community) para trocar informações com outros utilizadores.
>

## Requisitos

- [Ter criado uma instância a partir da Área de Cliente OVHcloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
- [Dispor de um acesso de administrador](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance).

## Instruções

### 1 - Instalar o Plesk

A instalação do Plesk é realizada facilmente a partir de uma ligação SSH. Para isso, descarregue e execute o script de instalação do Plesk através do comando mais adaptado à sua situação (ver abaixo).

> [!primary]
>
> Dependendo do SO da sua instância, o comando sudo só por si pode não ser suficiente. Se encontrar um erro, altere para o modo de "superutilizador" antes de iniciar a instalação:
>
> <pre class="highlight language-console"><code class="language-console">sudo su</code></pre>
>

- **Para uma instalação predefinida não personalizada do Plesk**:

```bash
sudo sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

- **Para uma instalação personalizada do Plesk**:

```bash
sudo sh <(curl https://autoinstall.plesk.com/plesk-installer || wget -O - https://autoinstall.plesk.com/plesk-installer)
```

De seguida, aguarde até a instalação ficar concluída. 

### 2 - finalizar a configuração e adicionar uma licença

Uma vez concluída a instalação, a interface de linha de comandos (CLI) apresentará as seguintes informações:

- São gerados dois URLs:
    - Um com o endereço IP do servidor (em HTTPS com um certificado SSL autoassinado, o que pode ativar um alerta de segurança em certos browsers).
    - O outro com um domínio Plesk (em HTTPS com um certificado SSL assinado, sem alerta de segurança).
    - Ambos são seguros, mas é recomendado que utilize o segundo.
- Uma mensagem indica: "Você também pode se conectar como um ‘root’ com sua palavra-passe ‘root’." No entanto, não é gerada nenhuma palavra-passe root por predefinição. Se necessário, os clientes podem seguir [este guia](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds) para ativar o utilizador root e definir uma palavra-passe.

Uma vez na página Plesk, siga as instruções apresentadas no ecrã para finalizar a instalação.

![plesk configuration](images/plesk_configuration.png){.thumbnail}

Para adicionar uma licença Plesk, tenha consigo a chave que lhe foi fornecida pelo seu fornecedor.

> [!primary]
>
> A OVHcloud não vende licenças Plesk para as soluções de Public Cloud. No entanto, poderá adquirir uma licença através do site [Plesk](https://www.plesk.com/){.external}.
> 

Pretende alterar a sua licença para substituir uma chave de teste ou para alterar a sua oferta, por exemplo? A partir da interface Plesk, aceda à secção `Tools & Settings`{.action}. Na secção **Plesk**, selecione a opção `License information`{.action}.

## Quer saber mais?

[Documentação oficial do Plesk.](https://docs.plesk.com/en-US/obsidian/){.external}

Fale com a nossa [comunidade de utilizadores](/links/community).