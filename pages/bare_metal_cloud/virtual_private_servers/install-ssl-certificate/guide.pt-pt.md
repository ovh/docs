---
title: 'Como instalar um certificado SSL num VPS'
excerpt: 'Saiba como instalar um certificado SSL num VPS OVHcloud'
updated: 2025-01-24
---

## Objetivo

A segurança do seu website é essencial para proteger os dados sensíveis dos seus utilizadores e melhorar a sua confiança. Graças a um certificado SSL (**S**ecure **S**ockets **L**ayer) pode encriptar as trocas de informações entre os seus visitantes e o seu website, reforçando a sua credibilidade. Este guia documenta a utilização do **Let's Encrypt**, um serviço gratuito e automatizado.

**Saiba como instalar um certificado SSL num VPS OVHcloud.**

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
>
> Nós disponibilizamos-lhe este tutorial a fim de o acompanhar nas tarefas mais comuns. Contudo, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Mais informações na secção [Quer saber mais?](#go-further) deste tutorial.
>

## Requisitos

- Dispor de um serviço [VPS](/links/bare-metal/vps)
- Ter acesso de administrador (sudo) via SSH ao VPS
- Ter um website funcional acessível em "HTTP"

## Instruções

### Índice

- [Etapa 1 - Ligue-se ao seu VPS OVHcloud](#step1)
- [Etapa 2 - Instalar Certbot](#step2)
- [Etapa 3 - Obtenha um certificado SSL com o Let's Encrypt](#step3)
- [Etapa 4 - Configure o seu servidor web](#step4)
- [Etapa 5 - Ativar a renovação automática](#step5)

### Etapa 1 - Ligue-se ao seu VPS OVHcloud <a name="step1"></a>

1. Transfira um cliente SSH como [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) ou utilize o terminal integrado do seu sistema operativo.
2. Ligue-se ao seu VPS OVHcloud com as informações de ligação fornecidas:

```bash
ssh root@<vps_ip>
```
Substitua `<vps_ip>` pelo endereço IP do seu VPS OVHcloud.

### Etapa 2 - Instale Certbot <a name="step2"></a>

Certbot é uma ferramenta que permite gerir automaticamente os certificados Let's Encrypt. Siga os passos abaixo para instalar o Certbot de acordo com a sua distribuição Linux.

> [!tabs]
> **Ubuntu/Debian**
>>
>> ```bash
>> sudo apt update
>> sudo apt install certbot
>> ```
>>
> **CentOS**
>>
>> ```bash
>> sudo yum install epel-release
>> sudo yum install certbot
>> ```
>>
> **Fedora**
>>
>> ```bash
>> sudo dnf install certbot
>> ```

Verifique se o Certbot está instalado corretamente executando o seguinte comando:

```bash
certbot --version
```

Isso deve mostrar a versão do Certbot instalada.

### Etapa 3 - Obtenha um certificado SSL com o Let's Encrypt <a name="step3"></a>

> [!primary]
>
> Se instalou o seu servidor web (Nginx ou Apache), recomendamos que utilize os plugins Certbot para automatizar a configuração SSL e ativar os reencaminhamentos `HTTPS`. Estes plugins simplificam a instalação, gerindo diretamente os ficheiros de configuração do servidor web.

#### Utilização automática com os plugins Certbot Nginx ou Apache (recomendado)

Consoante o servidor web, utilize as linhas de comandos correspondentes:

> [!tabs]
> **Nginx**
>>
>> Instale o plugin Certbot Nginx:
>>
>> ```bash
>> sudo apt install python3-certbot-nginx -y
>> ```
>>
>> Gerar o certificado SSL :
>>
>> ```bash
>> sudo certbot --nginx -d your_domain
>> ```
>>
> **Apache**
>>
>> Instale o plugin Certbot Apache:
>>
>> ```bash
>> sudo apt install python3-certbot-apache -y
>> ```
>>
>> Gerar o certificado SSL :
>>
>> ```bash
>> sudo certbot --apache -d your_domain
>> ```

Certbot irá configurar automaticamente o certificado SSL e o reencaminhamento `HTTPS`. Verifique que o seu website está acessível em "HTTPS".

#### Utilização em modo autónomo

Se preferir configurar manualmente o seu servidor, utilize Certbot no modo autónomo. Este modo utiliza um servidor temporário integrado no Certbot para validar o seu nome de domínio e gerar um certificado SSL.

Utilize o seguinte comando para pedir um certificado:

```bash
sudo certbot certonly --standalone -d your_domain
```

Substitua `your_domain` pelo seu nome de domínio.

> [!warning]
> Este método interrompe temporariamente qualquer serviço que utilize a porta 80 (por exemplo, um outro servidor web).

Uma vez o certificado gerado, os ficheiros estão disponíveis em `/etc/letsencrypt/live/your_domain/` :

- `fullchain.pem`: o certificado completo.
- `privkey.pem`: a chave privada.

### Etapa 4 - Configure o seu servidor web <a name="step4"></a>

> [!primary]
> Se utilizou a solução automática (com os plugins Certbot) anteriormente ([Etapa 3](#step3)) e o seu website está acessível em `HTTPS`, passe diretamente para a [etapa 5](#step5).

#### Exemplo para Nginx

1\. Abra o ficheiro de configuração do seu website (por exemplo, `/etc/nginx/sites-available/your_domain.conf`).

2\. Adicione as seguintes linhas para ativar o SSL:

```nginx
server {
    listen 443 ssl;
    server_name your_domain;

    ssl_certificate /etc/letsencrypt/live/your_domain/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your_domain/privkey.pem;

    # Parâmetros de segurança adicionais
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Redirecionamento HTTP para HTTPS
    location / {
        try_files $uri $uri/ =404;
    }
}
```

3\. Adicione um reencaminhamento automático `HTTP` para `HTTPS`:

```nginx
server {
    listen 80;
    server_name your_domain;
    return 301 https://$host$request_uri;
}
```

4\. Teste e reinicie o Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Verifique que o seu website está acessível em "HTTPS".

#### Exemplo para Apache

1\. Ative os módulos SSL e os headers:

```bash
sudo a2enmod ssl
sudo a2enmod headers
```

2\. Altere a configuração do seu website (por exemplo `/etc/apache2/sites-available/your_domain.conf`) para incluir:

```apache
<VirtualHost *:80>
    ServerName your_domain
    DocumentRoot /var/www/your_domain

    Redirect permanent / https://your_domain/

    <Directory /var/www/your_domain>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/ssltest_error.log
    CustomLog ${APACHE_LOG_DIR}/ssltest_access.log combined
</VirtualHost>

<VirtualHost *:443>
    ServerName your_domain
    DocumentRoot /var/www/your_domain

    # Ativar SSL
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/your_domain/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/your_domain/privkey.pem

    # Parâmetros de segurança adicionais
    SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1
    SSLCipherSuite HIGH:!aNULL:!MD5
    SSLHonorCipherOrder on

    <Directory /var/www/your_domain>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/ssltest_error.log
    CustomLog ${APACHE_LOG_DIR}/ssltest_access.log combined
</VirtualHost>
```

3\. Teste e reinicie o Apache:

```bash
sudo apachectl configtest
sudo systemctl restart apache2
```

Verifique que o seu website está acessível em `HTTPS`.

### Etapa 5 - Ative a renovação automática <a name="step5"></a>

Os certificados Let's Encrypt são válidos durante 90 dias. Configure uma renovação automática com Certbot:

Teste a renovação automática:

```bash
sudo certbot renew --dry-run
```

Certbot configura automaticamente uma tarefa `cron` ou um timer systemd para gerir a renovação. Verifique o estado do ficheiro com:

```bash
sudo systemctl list-timers | grep certbot
```

## Quer saber mais? <a name="go-further"></a>
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Fale com nossa [comunidade de utilizadores](/links/community).