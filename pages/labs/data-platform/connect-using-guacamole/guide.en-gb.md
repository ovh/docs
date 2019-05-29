---
title: 'Connect to your Data Platform using Guacamole'
excerpt: 'Connect to your platform via your web browser, either to run complex data jobs or to administrate the platform.'
section: How-to
order: 4
---

## What is Guacamole ?

[Apache Guacamole](https://guacamole.apache.org/) is a **clientless
remote desktop gateway**, supporting standard protocols like SSH, VNC
and RDP.

Clientless because you don't need plugins or client software to use it, just access in a web browser.

## Access to your Guacamole

When your cluster is deployed, you can access to Guacamole interface
with the URL `https://guacamole.{cluster_id}.datalake.ovh`.

![Guacamole login](images/guacamole_login.png)

## Guacamole overview

After log in succeed, you can see all available connections and recent
connections on the home screen.

![All available connections](images/guacamole_recent_connections.png)

Clicking on any connection will open that connection within the current
window, multiple connections can be used simultaneously.

![Open connection](images/guacamole_opened_connection.png)

## Copy / Paste text into Guacamole

If you need to use the copy/paste command into your opened connection on
Guacamole, you can use `Ctrl+Alt+Shift` keys to display the Guacamole
clipboard.

![Guacamole clipboard](images/guacamole_clipboard.png)

Enter the text you want to paste into your opened SSH connection, use
again `Ctrl+Alt+Shift` keys to close the Guacamole clipboard. Then use
`Ctrl+Shift+V` keys to paste the text from the Guacamole clipboard

![Guacamole paste from clipboard](images/guacamole_paste.png)
