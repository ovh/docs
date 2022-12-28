---
title: Primeiros passos com as aplicações pré-instaladas
slug: aplicacoes-pre-instaladas
excerpt: Saiba como implementar aplicações pré-instaladas nas suas instâncias Public Cloud
section: Introdução
order: 7
---

**Última atualização: 07/09/2021**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A OVHcloud oferece aos clientes Public Cloud imagens de aplicações pré-instaladas para uma implementação rápida e fácil em apenas alguns cliques.

**Saiba como implementar aplicações pré-instaladas nas suas instâncias Public Cloud.**

## Requisitos

- Uma [instância Public Cloud](../criar_uma_instancia_a_partir_do_espaco_cliente_ovh/) na sua conta OVHcloud.

## Instruções

### Etapas comuns a todas as aplicações

#### Instale a aplicação pré-instalada à sua escolha

Na Área [de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), nas API OVHcloud ou na API OpenStack Horizon, instale a aplicação à sua escolha na sua instância Public Cloud.

#### Detalhes de ligação à aplicação

Depois de escolher a instância criada e uma aplicação pré-instalada, pode recuperar as suas informações de ligação unicamente através da API OVHcloud.

1. Ligue-se à [consola API](https://api.ovh.com/)
2. A seguir, utilize [esta chamada API](https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/applicationAccess#POST)

> Chamada API
>> > [!api]
>> >
>> > @api {POST} /cloud/project/{serviceName}/instance/{instanceId}/applicationAccess
>> >
>
> Parâmetros
>
>> serviceName *
>>> Trata-se do seu ID de projeto Public Cloud
>>
>> instânciaId *
>>> Trata-se da UID da sua instância

#### Let's Encrypt SSL

Esta secção aplica-se apenas às instalações WordPress, Drupal, Joomla! e PrestaShop. A presente diretiva não é aplicável às outras instalações.

1. Deve criar ou alterar, na Área de Cliente OVHcloud, dois registos `A` que apontam para o endereço IP do seu servidor. Por exemplo, se o seu nome de domínio for "personaldomain.ovh", deve criar registos `A` para:  

     personaldomain.ovh <br>
     www.personaldomain.ov <br>  

Se o seu domínio estiver registado na OVHcloud, pode seguir [este guia](../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/).
<br>Se o seu domínio estiver registado numa outra empresa, deverá contactá-la para obter ajuda na configuração dos seus registos `A`.

<ol start="2">
  <li>Talvez tenha de esperar 24 horas até que os dois registos se propaguem completamente. Pode sempre verificá-lo com <a href="https://mxtoolbox.com/DnsLookup.aspx">mxtoolbox</a>
  <li>Ligue-se ao seu servidor com o utilizador CentOS em SSH e execute os seguintes comandos para instalar Certbot:</li>
</ol>

> [!warning]
>
> Substitua o personaldomain.ovh pelo seu próprio nome de domínio nos seguintes comandos.
>

```sh
sudo -i
dnf install -y epel-release
dnf install -y certbot python3-certbot apache mod_ssl
echo "ServerName personaldomain.ovh" > /etc/httpd/conf/httpd.conf
systemctl restart httpd
```

<ol start="4">
  <li> Gere o seu certificado SSL utilizando Certbot (siga as instruções do ecrã).</li>
</ol>

```sh
certbot certonly -d personaldomain.ovh —webroot
```

Quando for convidado a introduzir "Input the webroot", deve introduzir uma variável do tipo "/var/www/wordpress". Se instalar o Joomla!, deverá substituir "wordpress" por "joomla".

Agora, certifique-se de que Certbot também coloca esta variável no ficheiro ssl.conf. Para isso, introduza:

```sh
certbot-d personaldomain.ovh —apache
```

Quando for convidado a fazê-lo, responda à primeira pergunta com "1" e à segunda com "1".

Se o certificado SSL tiver sido gerado, deverá obter o seguinte resultado:

```sh
IMPORTANTE NOTAS:
 - Congratul! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/personaldomain.ovh/fullchain.pem
   Your key file been saved at:
   /etc/letsencrypt/live/personaldomain.ovh/privkey.pem
   O seu cert will expira no 2020-11-12. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   com a opção "certonly". TB non-interatively renew *all* of
   your certificates, run "certbot renew"
```

### cPanel

Encontrará abaixo as primeiras etapas relativas à implementação da imagem pré-instalada do cPanel. Os passos assinalados com "\*" serão seguidos de uma FAQ.

1. Obtenha o URL de utilização única [seguindo estas etapas](./#detalhes-de-ligacao-a-aplicacao).
2. Clique no URL reenviado pela API.

> [!primary]
>
> Se o link já expirou, ligue-se em SSH à instância com a ajuda do utilizador CentOS e execute o comando "whmlogin" para gerar um novo ou reinstalar a instância.
>

<ol start="3">
  <li>Leia e aceite as condições particulares do cPanel.</li>
  <li>Introduza os seus servidores de mensagens e servidores DNS *.</li>
  <li>Defina a palavra-passe root que irá utilizar na próxima vez que aceder à WHM *.</li>
</ol>

![horizon](images/change_root.png){.thumbnail}

Não é necessário mais nenhuma etapa para terminar a primeira configuração desta aplicação.

> [!faq]
>
> Posso utilizar os meus próprios servidores DNS?
>> Sim, podem. Certifique-se de que criou os registos "GLUE" com o seu agente de registo de domínio. Por exemplo, se deseja "ns1.mydomain.com" e "ns2.mydomain.com", deve configurar os registos "GLUE" para que ambos apontem para o endereço IP do seu servidor. Se o seu domínio estiver registado com a OVHcloud, pode seguir [este guia.](../../domains/glue_registry/#1-adicionar-os-registos-glue). Note que a criação pode levar 24 horas.
> Porquê definir a password root?
>> O WHM utiliza de forma padrão o utilizador root para a autenticação. O URL de utilização única permite aceder à primeira configuração e modificar a palavra-passe root. Na próxima vez que aceder ao WHM, deverá utilizar o utilizador root e a palavra-passe que definiu.
> Onde está a minha licença para o cPanel?
>> A OVHcloud não fornece atualmente nenhuma licença para os servidores Public Cloud que não as licenças Windows. Deve adquirir uma licença junto de um fornecedor terceiro para o cPanel. Para isso, recomendamos que contacte diretamente o editor do cPanel.

### Plesk

Encontrará abaixo os primeiros passos para a implementação da imagem pré-instalada do Plesk. Os passos assinalados com "\*" serão seguidos de uma FAQ.

1. Obtenha o URL de acesso à sua aplicação seguindo [estas etapas](./#detalhes-de-ligacao-a-aplicacao).
2. Clique no URL reenviado pela API.
3. Ligue-se com o nome de utilizador e a palavra-passe retornada pela API.
4. Uma vez ligado, o Plesk irá pedir-lhe:
    a) Os seus dados.  
    b) Uma nova palavra-passe para o utilizador "admin" que irá utilizar para se ligar à interface do Plesk.  
    c) Informações sobre a licença.*  
    d) Ler e aceitar os contratos de licença do utilizador.  

Não é necessário mais nenhuma etapa para terminar a primeira configuração desta aplicação.

> [!faq]
>
> Onde está a minha licença Plesk?
>> A OVHcloud não fornece atualmente nenhuma licença para os servidores Public Cloud que não as licenças Windows. Os clientes devem adquirir uma licença junto de um fornecedor terceiro para o Plesk. Para isso, recomendamos que contacte diretamente o editor do Plesk.

### Virtualmin

Encontrará abaixo os primeiros passos para a implementação da imagem pré-instalada de Virtualmin. 

1. Obtenha o URL de acesso à sua aplicação seguindo [estas etapas](./#detalhes-de-ligacao-a-aplicacao).
2. Clique no URL reenviado pela API.
3. Ligue-se com o nome de utilizador e a palavra-passe retornada pela API.
4. Depois de se conectar, para responder às suas necessidades e ajudar o Virtualmin a configurar-se, complete o questionário de otimização.

Não é necessário mais nenhuma etapa para terminar a primeira configuração desta aplicação.

### Vestacp

Encontrará abaixo as primeiras etapas relativas à implementação da imagem pré-instalada do Vestacp.

1. Obtenha o URL de acesso à sua aplicação seguindo [estas etapas](./#detalhes-de-ligacao-a-aplicacao).
2. Clique no URL reenviado pela API.
3. Ligue-se com o nome de utilizador e a palavra-passe retornada pela API.

Não é necessário mais nenhuma etapa para terminar a primeira configuração desta aplicação.

### Docker

Encontrará abaixo os primeiros passos para a implementação da imagem pré-instalada do Docker.

1. Aceda ao servidor com o protocolo SSH (CentOS).
2. Verifique que o Docker funciona com o comando "docker run hello-world".

Não é necessário mais nenhuma etapa para terminar a primeira configuração desta aplicação.

## Quer saber mais?
 
Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
