---
title: Object Storage Swift - Associar um container a um nome de domínio
slug: pcs/link-domain
excerpt: Saiba como associar um domínio a um container.
section: OpenStack Swift Storage Class Specifics
order: 120
---

**Última atualização: 27/10/2021**

## Objetivo

Um container de tipo Public é uma boa solução para partilhar os seus ficheiros através da Internet, pois todos podem aceder aos seus dados. Para facilitar esta partilha sem utilizar um URL longo, é possível utilizar um nome de domínio, que pode ser o mesmo que o do seu site.

Este manual explica-lhe como configurar um domínio nos seus containers para facilitar o acesso.


### Requisitos

- Consulte o guia [Criação de container de armazenamento](https://docs.ovh.com/fr/storage/pcs/creation-de-conteneur/)
- Um domínio

## Como funciona?

### Princípio 
Quando um pedido HTTP chega ao Object Storage do OpenStack, é efetuada uma verificação ao nível do cabeçalho **"host"**. Se for diferente do nome do host atual, o sistema considera que se trata de uma entrada associada e faz um pedido DNS para obter a entrada DNS ao número completo que corresponde ao host. Se for encontrada uma entrada DNS, a resposta será dividida de forma a encontrar e extrair o container, a conta e o objeto pretendido e, em seguida, o pedido será reescrito. Tenha a certeza de que o seu cliente implementou corretamente o cabeçalho **"host"**, caso contrário o Object Storage não será capaz de detetar e tratar o seu pedido.


### HTTP e HTTPS
A funcionalidade está corretamente operacional com HTTP. No entanto, terá um erro de certificado se utilizar HTTPS, uma vez que não dispomos do seu certificado privado. Poderá continuar a utilizar o HTTPS, mas receberá alertas relativos ao certificado na maioria dos browsers recentes.


### Registo CNAME ou TXT
Pode registar o CNAME ou o TXT.:

- CNAME: É o registo histórico e por predefinição. Utilize-o se estiver em condições de gerir a zona DNS, ele seguirá o nosso ponto de acesso automaticamente mesmo que o endereço IP mude.
- TXT: Utilize-o apenas se precisar de configurar o seu nome de domínio num suporte diferente, como um CDN, por exemplo. No entanto, deve verificar se o endereço IP do ponto de acesso está a mudar. Também pode utilizar um "CNAME virtual" se o seu fornecedor de CDN o permitir.


## Configure o seu DNS

### Com CNAME
Escolha um subdomínio (por exemplo, static.mypersonaldomain.ovh), adicione um campo do tipo CNAME e adicione o alvo seguindo as regras explicadas em baixo.

O CNAME deve seguir as regras seguintes para ser compreendido pelo Object Storage, deve adaptar as **\[VARIÁVEIS]** de forma a corresponder ao bom valor:


```bash
[CONTAINER_NAME].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```

Por exemplo, para um container chamado **staticct** e um projeto **123xxxx456** que será utilizado em SBG:


```bash
staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```

O seu registo DNS será:


```bash
static IN CNAME staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


### Com TXT
Adicione um campo do tipo TXT e adicione o valor de acordo com as regras explicadas abaixo.

O campo TXT deve seguir as seguintes regras para ser compreendido pelo Object Storage:


```bash
'_swift-remap.' + subdomínio
```

Ou por exemplo, para um subdomínio static.mondominio.tld:


```bash
_swift-remap.static
```

Tal como o CNAME, deve também seguir as regras seguintes, adaptando as **\[VARIÁVEIS]** de modo a corresponder ao bom valor:


```bash
[CONTAINER_NAME].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```

Por exemplo, para um container chamado **staticct** e um projeto **123xxxx456** que será utilizado em SBG:


```bash
staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```

O seu registo DNS será:


```bash
_swift-remap.static IN TXT staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```

Se não deseja utilizar um subdomínio, pode fazer o seguinte:


```bash
_swift-remap IN TXT staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```

Por fim, a última etapa para a configuração do campo TXT é adicionar um campo A ao (sub)domínio que aponta para o endereço IP do Object Storage do Public Cloud. Para o obter, utilize os seguintes comandos:


```bash
storage.sbg.cloud.ovh.net
dig storage.gra.cloud.ovh.net
storage.bhs.cloud.ovh.net
```



> [!alert]
>
> Não pode utilizar os seguintes caracteres no seu nome de container:
> \- [ . ]
> \- [ _ ] de acordo com o seu fornecedor DNS
> \- Não utilizar maiúsculas
> \- Substituir o auth-ProjectID por auth_ProjectID
>
