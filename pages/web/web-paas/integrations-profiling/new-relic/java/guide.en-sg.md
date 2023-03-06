---
title: Java
slug: java
section: New-Relic
updated: 2021-05-11
---

**Last updated 11th May 2021**


## Get your license key

Sign up at https://newrelic.com and get your license key.

## Add your license key

Add your New Relic license key as an environment level variable:

```bash
webpaas variable:create --level environment --environment '<your-environment>' --visible-build false --inheritable false env:NEW_RELIC_LICENSE_KEY --value '<your-new-relic-license-key>'
```

## Give your application a name

Add a new environment level variable to give your application a recognizable name:

```bash
webpaas variable:create --level environment --environment '<your-environment>' --visible-build false --inheritable false env:NEW_RELIC_APP_NAME --value '<your-application-name>'
```

> [!primary]  
> Repeat these two steps for every environment you want to monitor, making sure you give them different application names, matching the ones you entered in the New Relic interface.
> 

## Set up the New Relic agent

To set up New Relic in the Java project, we have two ways:

- Using the Maven project

- Download the code through `.platform.app.yaml`.


### Using Maven

This section explains how to configure Maven to download and unzip the `newrelic-java.zip` file, which contains all New Relic Java agent components.

Configure your `pom.xml` to download `newrelic-java.zip`:

```xml
<dependency>
  <groupId>com.newrelic.agent.java</groupId>
  <artifactId>newrelic-java</artifactId>
    <version>JAVA_AGENT_VERSION</version>
  <scope>provided</scope>
  <type>zip</type>
</dependency>
```

Replace `JAVA_AGENT_VERSION` with the [latest Java agent version 1](https://docs.newrelic.com/docs/agents/java-agent/getting-started/java-release-notes).

Unzip `newrelic-java.zip` by configuring `maven-dependency-plugin` in your `pom.xml`:

```xml
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-dependency-plugin</artifactId>
      <version>3.1.1</version>
      <executions>
        <execution>
          <id>unpack-newrelic</id>
          <phase>package</phase>
          <goals>
            <goal>unpack-dependencies</goal>
          </goals>
          <configuration>
            <includeGroupIds>com.newrelic.agent.java</includeGroupIds>
            <includeArtifactIds>newrelic-java</includeArtifactIds>
            <excludes>**/newrelic.yml</excludes>
            <overWriteReleases>false</overWriteReleases>
            <overWriteSnapshots>false</overWriteSnapshots>
            <overWriteIfNewer>true</overWriteIfNewer>
            <outputDirectory>${project.build.directory}</outputDirectory>
          </configuration>
        </execution>
      </executions>
    </plugin>
```

The next step is to configure the [`.platform.app.yaml`](../../../configuration-app) file to set the agent in the JVM parameters:

```yaml
name: app
type: 'java:8'
disk: 1024

hooks:
    build: |
        mvn clean package
        rm -rf newrelic/
        mv target/newrelic/ newrelic/

web:
    commands:
        start: |
            java -jar \
            -Xmx$(jq .info.limits.memory /run/config.json)m -XX:+ExitOnOutOfMemoryError \
            -javaagent:/app/newrelic/newrelic.jar
```

### Manual Configuration

To use this installation it is only required that you modify `.platform.app.yaml` , which will download and set the New Relic Java agent for you.

```yaml
name: app
type: 'java:8'
disk: 1024

variables:
    env:
        NEW_RELIC_URL: https://download.newrelic.com/newrelic/java-agent/newrelic-agent/current/newrelic-java.zip

hooks:
    build: |
      mvn clean package
      rm -rf newrelic
      curl -O $NEW_RELIC_URL
      unzip newrelic-java.zip

web:
    commands:
        start: |
            java -jar \
            -Xmx$(jq .info.limits.memory /run/config.json)m \
            -XX:+ExitOnOutOfMemoryError \
            -javaagent:/app/newrelic/newrelic.jar
```

You need to wait a little bit for your New Relic dashboard to be generated.
