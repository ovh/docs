---
title: 'Partilhado: Os problemas FTP recorrentes'
slug: partilhado_os_problemas_ftp_recorrentes
excerpt: 'Partilhado: Os problemas FTP recorrentes'
id: '1996'
legacy_guide_number: g1996
---

## Transferi os meus ficheiros com um software FTP mas nada é apresentado

- É necessário verificar que os ficheiros do seu website estão presentes na pasta /www do seu alojamento.
- Se efetuou uma modificação na sua zona DNS, é necessário aguardar entre 4-24 horas.

## Os meus códigos FTP não funcionam
Confirme que recopiou a password correta. O melhor é mesmo copiar/colar (Ctrl-C Ctrl-V em windows). Atenção à confusão que pode haver com o l (L) e 1 (um) bem como o O (a letra o) e 0 (zero).
Se não funcionar, os identificadores utilizados não devem ser os corretos, e nesse caso sugerimos que os recupere com a ajuda [deste guia](https://www.ovh.pt/g1374.colocar-o-meu-site-online#colocar_os_meus_ficheiros_no_ftp_obter_os_meus_identificadores_ftp).


## Qual o espaço que me resta no meu website?
A falta de espaço no seu alojamento partilhado pode gerar maus funcionamentos se tentar colocar online novos ficheiros.

- Para verificar esta situação deve aceder ao seu [espaço cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Selecione o seu alojamento.



![](images/img_3298.jpg){.thumbnail}
Será apresentado depois um resumo sobre o seu alojamento, nomeadamente a quota do mesmo.

![](images/img_3299.jpg){.thumbnail}


## Não consigo enviar ficheiros para o meu servidor FTP, o que fazer?
É necessário estar em modo passivo (Modo de configuração de um servidor FTP na qual o servidor FTP determina ele mesmo a paorta de ligação) no seu espaço cliente FTP. Para o Filezilla, por exemplo, deve aceder a Edição -> Parâmetros -> Ligação -> Parâmetros Firewall -> Modo passivo.


## Para que serve a pasta cgi-bin?
A pasta cgi.bin não é lida diretamente a patir do servidor Web. É um diretorio que é paralelo ao www. Ele existe pelas seguintes razões de segurança:

- Os ficheiros colocados na pasta cgi-bin não podem ser lidos. Eles podem ser unicamente executados. Não pode então colocar, por exemplo, imagens gif ou jpeg. A leitura provocará erros,
- Na medida em que os ficheiros não podem ser lidos em cgi-bin, poderá colocar os ficheiros de bases de dados em teste, por exemplo, para que as possa proteger,
- A excecução desses scripts cgi a partir de cgi-bin efetua-se através de um alias do seu website. Não poderá executar os scripts que não com o seu nome de domínio.



