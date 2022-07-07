---
title: 'Primeiros passos com as aplicações pré-instaladas'
slug: aplicacoes-pre-instaladas
excerpt: Saiba como implementar aplicações pré-instaladas no seu VPS
section: 'Primeiros passos'
order: 4
---

**Última atualização: 16/09/2021**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A OVHcloud oferece aos clientes VPS imagens de aplicações pré-instaladas para uma implementação rápida e fácil em apenas alguns cliques.

**Saiba como implementar aplicações pré-instaladas no seu VPS.**

## Requisitos

- Ter um [VPS](https://www.ovhcloud.com/pt/vps/) na sua conta OVHcloud.

## Instruções

### Instalar a aplicação pré-instalada à sua escolha

A partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) ou das API OVHcloud, instale a aplicação que desejar. Também pode consultar o nosso guia [VPS](../instalar-gerir-vps/): primeira utilização.

#### cPanel

Encontrará abaixo as primeiras etapas relativas à implementação da imagem pré-instalada do cPanel. Os passos assinalados com "\*" serão seguidos de uma FAQ.

1. Abra o e-mail que recebeu com os dados de acesso à aplicação.
2. Clique no URL do cPanel nesse e-mail.

> [!primary]
>
> Se a ligação já expirou, ligue-se ao seu VPS via SSH usando o utilizador CentOS e execute o comando « sudo whmlogin » para gerar uma nova ligação.
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
>> Sim, podem. Certifique-se de que criou os registos "GLUE" com o seu agente de registo de domínio. Por exemplo, se deseja "ns1.mydomain.com" e "ns2.mydomain.com", deve configurar os registos "GLUE" para que ambos apontem para o endereço IP do seu servidor. Se o seu domínio estiver registado com a OVHcloud, pode seguir [este guia](../../domains/glue_registry/#1-adicionar-os-registos-glue). Note que a criação pode levar 24 horas.
> Porquê definir a password root?
>> O WHM utiliza de forma padrão o utilizador root para a autenticação. O URL de utilização única permite aceder à primeira configuração e modificar a palavra-passe root. Na próxima vez que aceder ao WHM, deverá utilizar o utilizador root e a palavra-passe que definiu.
> Onde está a minha licença para o cPanel?
>> Pode encomendar a sua licença cPanel para o seu VPS a partir [da Área de Cliente OVHcloud](https://www.ovh.com/manager/dedicated/#/configuration/license/order).

#### Plesk

Encontrará abaixo os primeiros passos para a implementação da imagem pré-instalada do Plesk. Os passos assinalados com "\*" serão seguidos de uma FAQ.

1. Abra o e-mail que recebeu com os dados de acesso à aplicação.
2. Clique no URL do Plesk neste e-mail.
3. Ligue-se com o nome de utilizador e a palavra-passe presentes no e-mail.
4. Uma vez ligado, o Plesk irá pedir-lhe:<br>
    a) Os seus dados.  
    b) Uma nova palavra-passe para o utilizador "admin" que irá utilizar para se ligar à interface do Plesk.  
    c) Informações sobre a licença.*  
    d) Ler e aceitar os contratos de licença do utilizador.  

Não é necessário mais nenhuma etapa para terminar a primeira configuração desta aplicação.

> [!faq]
>
> Onde está a minha licença Plesk?
>> Pode encomendar a sua licença Plesk para o seu VPS a partir da [Área de Cliente OVHcloud](https://www.ovh.com/manager/dedicated/#/configuration/license/order).

#### Virtualmin

Encontrará abaixo os primeiros passos para a implementação da imagem pré-instalada de Virtualmin. 

1. Abra o e-mail que recebeu com os dados de acesso à aplicação.
2. Clique no URL de Virtualmin nesse e-mail.
3. Ligue-se com o nome de utilizador e a palavra-passe presentes no e-mail.
4. Depois de se conectar, para responder às suas necessidades e ajudar o Virtualmin a configurar-se, complete o questionário de otimização.

Não é necessário mais nenhuma etapa para terminar a primeira configuração desta aplicação.

#### Vestacp

Encontrará abaixo as primeiras etapas relativas à implementação da imagem pré-instalada do Vestacp.

1. Abra o e-mail que recebeu com os dados de acesso à aplicação.
2. Clique no URL da Vestacp neste e-mail.
3. Ligue-se com o nome de utilizador e a palavra-passe presentes no e-mail.

Não é necessário mais nenhuma etapa para terminar a primeira configuração desta aplicação.

#### Docker

Encontrará abaixo os primeiros passos para a implementação da imagem pré-instalada do Docker.

1. Aceda ao servidor com o nome de utilizador e a palavra-passe presentes no e-mail.
2. Verifique que o Docker funciona com o comando "docker run hello-world".

Não é necessário mais nenhuma etapa para terminar a primeira configuração desta aplicação.

### Let's Encrypt SSL

Esta secção aplica-se apenas às instalações WordPress, Drupal, Joomla! e PrestaShop. A presente diretiva não é aplicável às outras instalações.

1. Deve criar ou alterar, na Área de Cliente OVHcloud, dois registos `A `que apontam para o endereço IP do seu servidor. Por exemplo, se o seu nome de domínio for "personaldomain.ovh", deve criar registos `A` para:  

     personaldomain.ovh <br>
     www.personaldomain.ovh <br>  

Se o seu domínio estiver registado na OVHcloud, pode seguir [este guia](../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/).
<br>Se o seu domínio estiver registado numa outra empresa, deverá contactá-la para obter ajuda na configuração dos seus registos `A`.

<ol start="2">
  <li>Talvez tenha de esperar 24 horas até que os dois registos se propaguem completamente. Pode sempre verificá-lo com <a href="https://mxtoolbox.com/DnsLookup.aspx">mxtoolbox</a>. Se o endereço IP do seu domínio for apresentado no mxtoolbox da mesma forma que o do seu servidor, pode passar ao passo seguinte.</li>

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

## Vá mais longe

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
