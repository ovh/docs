---
title: 'Ghost auf einem Cloud Web Hosting installieren'
slug: ghost-auf-cloud-web-installieren
excerpt: 'Hier erfahren Sie, wie Sie mit der Ghost-Engine einen Blog auf Cloud Web einrichten.'
section: Tutorials
order: 1
---

**Stand 03.09.2019**

## Einleitung

[Ghost](https://ghost.org/){.external}  ist eine Open-Source-Blog-Engine, die entwickelt wurde, um den Prozess der Online-Veröffentlichung für Blogger und Journalisten zu vereinfachen. Das Programm ist in JavaScript geschrieben und verwendet [Node.js](https://nodejs.org/){.external},  eine Software-Plattform, mit der Sie Ihre Websites und APIs serverseitig in JavaScript erstellen können.

Mit [OVH Cloud Web Hosting](https://www.ovh.de/hosting/cloud-web.xml){.external} können Sie Node.js als Runtime Engine für Ihre Websites verwenden und somit auch Ghost oder jede andere für Node.js entwickelte Anwendung installieren.

In diesem Tutorial richten wir mit Ghost einen Blog auf einem Cloud Web Hosting ein und veröffentlichen diesen über Ihre Domain.

## Voraussetzungen

### Erforderliche Kenntnisse:

- Sie haben Grundkenntnisse im Node.js-Ökosystem.
- Sie wissen, wie Sie sich via SSH verbinden.
- Sie können eine Datei in der Kommandozeile zum Beispiel via Vim, Emacs oder Nano bearbeiten.

### Sie benötigen:

- ein [OVH Cloud Web Hosting](https://www.ovh.de/hosting/cloud-web.xml){.external}.
- Sie haben Node.js als Runtime Engine aktiviert.
- Sie haben die betreffende Domain als Multisite hinzugefügt und Node.js als deren Runtime Engine festgelegt.
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt und befinden sich im Bereich `Web`{.action}.

## Beschreibung

### Schritt 1: Node.js als Runtime Engine aktivieren

Um auf die Runtime Engines Ihres Cloud Web Hostings zuzugreifen, loggen Sie sich zunächst in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein. Klicken Sie links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Cloud Hosting aus. Gehen Sie dann auf den Tab `Runtime Engines`{.action}.

Es wird eine Tabelle angezeigt, die alle aktuell hinzugefügten Runtime Engines enthält. Vergewissern Sie sich, dass Node.js als Runtime Engine aktiviert ist. Ist das der Fall, gehen Sie zu Schritt 2 „[Node.js mit einer Multisite verbinden](./#schritt-2-nodejs-mit-einer-multisite-verbinden)“ über.

![ghost cloud web](images/ghost-cloud-web-step1.png){.thumbnail}

Ist das nicht der Fall, fügen Sie eine neue Engine hinzu (falls Ihr Hosting Angebot dies erlaubt) oder ändern Sie die vorhandene Runtime Engine.

- **Wenn Sie eine Engine hinzufügen möchten**: Klicken Sie unter der Tabelle auf `Aktionen`{.action} und dann auf `Runtime Engine hinzufügen`{.action}.
- **Wenn Sie die vorhandene Engine ändern möchten**: Klicken Sie rechts neben der betreffenden Engine auf den Button `...`{.action} und dann auf `Ändern`{.action}.

Geben Sie im angezeigten Fenster die folgenden Werte aus unserem Beispiel ein oder passen Sie diese an Ihre Situation an.

|Information|Einzugebender Wert| 
|---|---| 
|Angepasster Name|NodeJS 8|
|Runtime Engine|nodejs-8|
|Zugriffspfad zum öffentlichen Verzeichnis|öffentlich|
|Anwendungsumgebung|Produktion|
|Startskript der Anwendung|server.js|

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Bestätigen`{.action}. Für weitere Informationen zur Verwaltung der Runtime Engines lesen Sie unsere Anleitung „[Cloud Web Runtime Engines verwalten](https://docs.ovh.com/de/cloud-web/cloud-web-runtime-engines-verwalten){.external}“.

![ghost cloud web](images/ghost-cloud-web-step2.png){.thumbnail}

### Schritt 2: Node.js mit einer Multisite verbinden

Nun, da Node.js als Runtime Engine aktiviert ist, muss es mit einer Ihrer Multisites verbunden werden. Gehen Sie zunächst zum Tab `Multisite`{.action}. Die angezeigte Tabelle listet alle Domains auf, die Ihrem Hosting als Multisite zugewiesen sind. 

![ghost cloud web](images/ghost-cloud-web-step3.png){.thumbnail}

Zwei Spalten enthalten für uns wichtige Informationen. Stellen Sie sicher, dass die Runtime Engine Node.js mit den betreffenden Domains verbunden und dass das Wurzelverzeichnis korrekt ist. Verwenden Sie wenn nötig die nachstehenden Informationen. Ist beides der Fall, gehen Sie weiter zu Schritt 3 „[MySQL-Datenbank erstellen](./#schritt-3-mysql-datenbank-erstellen)“.

|Spalte|Beschreibung| 
|---|---| 
|Wurzelverzeichnis|Hierbei handelt es sich um das Wurzelverzeichnis, das den Quellcode der betreffenden Domain enthält (entspricht „DocumentRoot“). In unserem Beispiel geben wir „ghost“ an. Das Wurzelverzeichnis sollte also unseren Node.js-Quellcode enthalten.|
|Runtime Engine|Dies ist die mit der betreffenden Domain verbundene Runtime Engine. Der angezeigte Name entspricht dem „angepassten Namen“, denn Sie bei Erstellung der Runtime Engine festgelegt haben. In unserem Beispiel steht hier „NodeJS 8“.|

Ist das nicht der Fall, fügen Sie eine neue Multisite hinzu oder ändern Sie die vorhandene Multisite.

- **Wenn Sie eine Multisite hinzufügen möchten**: Klicken Sie rechts neben der Tabelle auf `Eine Domain oder Subdomain hinzufügen`{.action}.
- **Wenn Sie eine vorhandene Multisite ändern möchten**: Klicken Sie rechts neben der betreffenden Domain auf das Zahnrad-Symbol und dann auf `Ändern`{.action}.

Geben Sie im angezeigten Fenster die für Ihre Situation notwendigen Informationen ein. Die nachstehende Tabelle enthält die für dieses Tutorial verwendeten Informationen.

|Information|In unserem Beispiel verwendeter Wert| 
|---|---| 
|Domain|ghost.demo-nodejs.ovh|
|Wurzelverzeichnis|ghost|
|Runtime Engine|NodeJS 8|

Wählen Sie aus den zusätzlichen Optionen diejenigen aus, die Sie aktivieren möchten. Wenn Sie alle Informationen eingegeben haben, klicken Sie auf `Weiter`{.action} und schließen Sie den Vorgang ab. Das Hinzufügen der Multisite kann bis zu einer Stunde dauern. Die Änderung der DNS-Konfiguration kann jedoch bis zu 24 Stunden in Anspruch nehmen, bis sie effektiv ist. Weitere Informationen zur Verwaltung von Multisites finden Sie in der Anleitung „[Mehrere Websites auf einem Webhosting einrichten](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/){.external}“.

![ghost cloud web](images/ghost-cloud-web-step4.png){.thumbnail}

### Schritt 3: MySQL-Datenbank erstellen

Gehen Sie jetzt auf den Tab `Datenbanken`{.action}. Wird dieser nicht angezeigt, klicken Sie zunächst auf den Button mit den drei Balken. Die Tabelle enthält alle Datenbanken, die bereits auf Ihrem Hosting erstellt wurden. Es gibt zwei Möglichkeiten zur Erstellung einer neuen Datenbank:

- **Wenn Sie noch keine Datenbank erstellt haben**: Klicken Sie auf den Button `Datenbank erstellen`{.action}.

- **Wenn Sie bereits eine Datenbank erstellt haben**: Klicken Sie auf den Button `Aktionen`{.action} und anschließend auf `Datenbank erstellen`{.action}.

![ghost cloud web](images/ghost-cloud-web-step5.png){.thumbnail}

Wählen Sie im angezeigten Fenster „MySQL“ und anschließend die gewünschte Version aus. Im vorliegenden Tutorial haben wir die Version „5.6“ ausgewählt. Wählen Sie nun „In Ihrer Cloud Web Instanz gespeichert“ aus und klicken Sie auf `Weiter`{.action}.

Geben Sie anschließend einen angepassten Benutzernamen ein und legen Sie ein Passwort fest. Wenn Sie fertig sind, klicken Sie auf `Weiter`{.action}. Bestätigen Sie anschließend die Erstellung der Datenbank, indem Sie auf `Bestätigen`{.action} klicken. Warten Sie einige Minuten ab, bis der Vorgang abgeschlossen ist.

![ghost cloud web](images/ghost-cloud-web-step6.png){.thumbnail}

### Schritt 4: Umgebungsvariablen erstellen

Dieser Schritt ist optional, wenn Sie keine Umgebungsvariablen erstellen möchten. Wir empfehlen Ihnen jedoch dringend, diesen Schritt durchzuführen. 

In diesem Tutorial erstellen wir Umgebungsvariablen, in denen wir die Verbindungsinformationen für unsere MySQL-Datenbank eingeben. So können wir, wenn sich die Verbindungsinformationen zum Beispiel aufgrund einer Passwortänderung ändern, einfach den Wert der Variablen im Kundencenter anpassen, anstatt den Quellcode zu ändern.

Gehen Sie hierzu zum Tab `Umgebungsvariablen`{.action}. Die Tabelle enthält die bereits erstellten Umgebungsvariablen. Um eine neue Variable hinzuzufügen, klicken Sie über der Tabelle auf den Button `Aktionen`{.action} und anschließend auf `Umgebungsvariable hinzufügen`{.action}.

![ghost cloud web](images/ghost-cloud-web-step7.png){.thumbnail}

Geben Sie im angezeigten Fenster die für Ihre Situation notwendigen Informationen ein und klicken Sie dann auf den Button `Bestätigen`{.action}, um die Variable zu erstellen. Hier die Variablen, die wir für dieses Tutorial erstellt haben:

|Name|Variablentyp|Wert| 
|---|---|---|
|database__connection__host|string|Adresse des MySQL-Servers|
|database__connection__user|string|bei Erstellung der Datenbank gewählter MySQL-Benutzername|
|database__connection__database|string|Name der MySQL-Datenbank|
|database__connection__password|password|bei Erstellung gewähltes Passwort|
|database__client|string|mysql|
|server__port|integer|80|
|server__host|string|0.0.0.0|

![ghost cloud web](images/ghost-cloud-web-step8.png){.thumbnail}

### Schritt 5: Via SSH auf Ihrem Cloud Web Hosting einloggen

Stellen Sie zunächst sicher, dass Sie die erforderlichen Informationen haben, um sich einzuloggen. Gehen Sie hierzu auf den Tab `FTP - SSH`{.action}. Wird dieser nicht angezeigt, klicken Sie zunächst auf den Button mit den drei Balken. Es werden nun die Informationen für Ihren Speicherplatz angezeigt. Notieren Sie die Informationen neben den nachfolgenden Elementen:

|Element|Beschreibung| 
|---|---| 
|SSH-Zugang zum Cluster|Das angezeigte Element enthält zwei Informationen: <br>**- Serveradresse**: Die Adresse beginnt hinter „ssh://“ und endet vor dem Doppelpunkt („:“).<br> **- Verbindungsport**: Der Port ist die Nummer hinter „:“. <br><br>So ist zum Beispiel bei ssh://`sshcloud.cluster024.hosting.ovh.net`:`12345`/ „sshcloud.cluster024.hosting.ovh.net“ die Serveradresse und „12345“ der Verbindungsport.|
|SSH Haupt-Login:|Hierbei handelt es sich um den Haupt-SSH-Benutzer Ihres Hostings.|

Wenn Sie das Passwort des SSH-Benutzers vergessen haben, klicken Sie rechts neben dem betreffenden Benutzer auf den Button `...`{.action} und dann auf `Passwort ändern`{.action}.

![ghost cloud web](images/ghost-cloud-web-step9.png){.thumbnail}

Verwenden Sie ein Terminal, um sich nun via SSH zu verbinden. Dieses Tool ist standardmäßig auf macOs oder Linux installiert. Bei einer Windows-Umgebung muss ein Programm wie PuTTY installiert oder die Funktion „OpenSSH“ hinzugefügt werden. Dieser Vorgang variiert je nach verwendetem Betriebssystem. Wir können die Vorgehensweise daher in dieser Anleitung nicht im Detail beschreiben.

Hier ein Beispiel für eine Befehlszeile, die Sie verwenden können. Ersetzen Sie die Elemente „sshlogin“, „sshserver“ und „connectionport“ mit den entsprechenden Angaben. Nachdem Sie den Befehl abgeschickt haben, werden Sie dazu aufgefordert, das Passwort des SSH-Benutzers einzugeben.

```sh
ssh sshlogin@sshserver -p connectionport
```

Nun können Sie zum Beispiel überprüfen, ob die in [Schritt 4](./#schritt-4-umgebungsvariablen-erstellen) erstellten Umgebungsvariablen vorhanden sind. So finden wir im vorliegenden Tutorial:

```sh
demonon@cloudweb-ssh:~ $ env | grep "database_"
database__client=mysql
database__connection__host=demononghost.mysql.db
database__connection__user=demononghost
database__connection__password=ZuperZecure123
database__connection__database=demononghost
```

### Schritt 6: Ghost installieren

Gehen Sie zunächst zu dem in [Schritt 2](./#schritt-2-nodejs-mit-einer-multisite-verbinden) angegebenen Wurzelverzeichnis. Im vorliegenden Tutorial ist dies das Verzeichnis „ghost“.

```sh
demonon@cloudweb-ssh:~ $ ls -l
drwxr-xr-x 3 demonon demonon 4 Mar  6 16:53 ghost
drwx---r-x 3 demonon demonon 5 Mar  6 16:48 www
demonon@cloudweb-ssh:~ $ cd ghost/
demonon@cloudweb-ssh:~/ghost $
```

Laden Sie die [neueste Version von Ghost](https://ghost.org/docs/){.external} herunter und entpacken Sie den Inhalt.

```sh
demonon@cloudweb-ssh:~/ghost $ ls
public  server.js
demonon@cloudweb-ssh:~/ghost $ curl -s -LO https://github.com/TryGhost/Ghost/releases/download/2.16.4/Ghost-2.16.4.zip
demonon@cloudweb-ssh:~/ghost $ unzip Ghost-2.16.4.zip
Archive:  Ghost-2.16.4.zip
   creating: content/
   creating: content/adapters/
  inflating: content/adapters/README.md 
   creating: content/apps/
  inflating: content/apps/README.md 
  ....
demonon@cloudweb-ssh:~/ghost $ rm Ghost-2.16.4.zip
demonon@cloudweb-ssh:~/ghost $ ls
Gruntfile.js  LICENSE  MigratorConfig.js  PRIVACY.md  README.md  content  core  index.js  package.json  public  server.js  yarn.lock
```

Ghost verwendet [Yarn](https://yarnpkg.com/en/){.external}, eine Alternative für **npm**, als Manager für Node.js-Abhängigkeiten. Installieren Sie Yarn via **npm** und fügen Sie diese Binärdateien zu Ihrem „PATH“ hinzu.

```sh
demonon@cloudweb-ssh:~/ghost $ npm-node8 install yarn
npm notice created a lockfile as package-lock.json. You should commit this file.
+ yarn@1.13.0
added 1 package and audited 1 package in 2.893s
found 0 vulnerabilities
 
demonon@cloudweb-ssh:~/ghost $ export PATH=$PATH:/usr/local/nodejs8/bin/:~/ghost/node_modules/.bin/
demonon@cloudweb-ssh:~/ghost $ node --version
v8.15.0
demonon@cloudweb-ssh:~/ghost $ yarn --version
1.13.0
```

Um diese Änderungen in „PATH“ persistent zu machen, können Sie den Export in der Datei „~/.profile“ hinzufügen.

```sh
demonon@cloudweb-ssh:~ $ echo "export PATH=$PATH:/usr/local/nodejs8/bin/:~/ghost/node_modules/.bin/" >> ~/.profile
```

Installieren Sie anschließend mithilfe von Yarn die Ghost-Abhängigkeiten:

```sh
demonon@cloudweb-ssh:~/ghost $ yarn install
yarn install v1.13.0
[1/5] Validating package.json...
[2/5] Resolving packages...
[3/5] Fetching packages...
[4/5] Linking dependencies...
[5/5] Building fresh packages...
success Saved lockfile.
Done in 269.89s.
```

Erstellen Sie nun im Ordner „~/ghost“ eine `config.production.json`-Datei mit der Ghost-Konfiguration:

```json
{
    "url": "http://ghost.demo-nodejs.ovh",
    "paths": {
        "contentPath": "content/"
    }
}
```

Verweisen Sie dann die Datei `server.js` (in [Schritt 1](./#schritt-1-nodejs-als-runtime-engine-aktivieren) festgelegt) auf die Ghost-`index.js`-Datei.

```sh
demonon@cloudweb-ssh:~/ghost $ unlink  server.js
demonon@cloudweb-ssh:~/ghost $ ln -s index.js server.js
```

Installation und Konfiguration von Ghost sind hiermit abgeschlossen. Starten Sie nur noch den Node.js-*Daemon* neu, damit die im Verzeichnis „~/ghost“ vorgenommenen Änderungen effektiv werden.

### Schritt 7: Node.js-*Daemon* neu starten

Um den Node.js-*Daemon* neu zu starten, gehen Sie zunächst in Ihr [Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external}. Gehen Sie zum Tab `Multisite`{.action} und klicken Sie rechts neben der betreffenden Domain auf das Zahnrad-Symbol, dann auf `Neu starten`{.action}.

Nach dem Neustart ist die Anwendung über die in der Konfiguration Ihrer Multisite ausgewählte Domain erreichbar.

![ghost cloud web](images/ghost-cloud-web-step10.png){.thumbnail}

### Schritt 8: HTTPS verwenden

Um die Sicherheit Ihrer Website zu verbessern, können Sie eine HTTP-Weiterleitung auf HTTPS einrichten. Gehen Sie hierzu in das Verzeichnis `ghost` und erstellen Sie eine `.htaccess`-Datei mit folgendem Inhalt:

```
RewriteCond %{ENV:HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Zusammenfassung

Wir haben gesehen, wie man anhand der verschiedenen Schritte eine Node.js-Anwendung auf einem Cloud Web Hosting installiert. Sie können Ghost jetzt verwenden und Ihre ersten Inhalte veröffentlichen!