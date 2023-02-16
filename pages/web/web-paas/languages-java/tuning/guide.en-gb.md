---
title: Performance tuning Java
slug: tuning
section: Java
updated: 2022-06-02
---

**Last updated 2nd June 2022**



## Objective  

There are a number of settings that can be adjusted for each application to optimize its performance on Web PaaS.

## Memory limits

The JVM generally requires specifying a maximum memory size it is allowed to use, using the `Xmx` parameter.  That should be set based on the available memory on the application container, which will vary with its size.

To extract the container-scaled value on the command line, use `$(jq .info.limits.memory /run/config.json)`.

You should also set the `ExitOnOutOfMemoryError`.  When you enable this option, the JVM exits on the first occurrence of an out-of-memory error.  Web PaaS will restart the application automatically.

These are the recommended parameters for running a Java application. Thus, the command to use to start a Java application is:

```bash
java -jar -Xmx$(jq .info.limits.memory /run/config.json)m -XX:+ExitOnOutOfMemoryError //The rest of the arguments and the jar file.
```

## Garbage collection

When migrating the application to a cloud environment, it is often essential to analyze the Garbage Collector's log and behavior. For this, there are two options:

* Placing the log into the Web PaaS `/var/log/app.log` file (which captures `STDOUT`).
* Creating a log file specifically for the GC.

To use the `STDOUT` log, you can add the parameter `-XX: + PrintGCDetails`, E.g.:

```bash
java -jar -Xmx$(jq .info.limits.memory /run/config.json)m -XX:+ExitOnOutOfMemoryError -XX:+PrintGCDetails //The rest of the arguments and the jar file.
```

Java supports a number of different garbage collection strategies.  Which one is optimal for your application will vary depending on your available memory, Java version, and application profile.  Determining which is best for your application is out of scope, but the main options and how to enable them are:

| Name        | Command  Flag         | Description  |
| ------------- |:-------------:| -----:|
|Serial Garbage Collector|-XX:+UseSerialGC|This is the simplest GC implementation, as it basically works with a single thread.|
|Parallel Garbage Collector|-XX:+UseParallelGC|Unlike Serial Garbage Collector, this uses multiple threads for managing heap space. But it also freezes other application threads while performing GC.|
|CMS Garbage Collector|-XX:+USeParNewGC|The Concurrent Mark Sweep (CMS) implementation uses multiple garbage collector threads for garbage collection. It's for applications that prefer shorter garbage collection pauses, and that can afford to share processor resources with the garbage collector while the application is running.|
|G1 Garbage Collector|-XX:+UseG1GC|Garbage First, G1, is for applications running on multiprocessor machines with large memory space.|

The default strategy on Java 9 and later is G1.  The GC strategy to use can be set in the start line with:

### Serial

```bash
java -jar -Xmx$(jq .info.limits.memory /run/config.json)m -XX:+ExitOnOutOfMemoryError -XX:+PrintGCDetails -XX:+UseSerialGC //The rest of the arguments and the jar file.
```

### Parallel Garbage Collector

```bash
java -jar -Xmx$(jq .info.limits.memory /run/config.json)m -XX:+ExitOnOutOfMemoryError -XX:+PrintGCDetails -XX:+UseParallelGC //The rest of the arguments and the jar file.
```

### CMS Garbage Collector

```bash
java -jar -Xmx$(jq .info.limits.memory /run/config.json)m -XX:+ExitOnOutOfMemoryError -XX:+PrintGCDetails -XX:+USeParNewGC //The rest of the arguments and the jar file.
```

### G1

```bash
java -jar -Xmx$(jq .info.limits.memory /run/config.json)m -XX:+ExitOnOutOfMemoryError -XX:+PrintGCDetails -XX:+UseG1GC //The rest of the arguments and the jar file.
```

## Java 8 Optimization

Ideally, all applications should run the latest LTS release of the JVM at least.  That is currently Java 11.  Java 11 has a number of performance improvements, particularly on container-based environments such as Web PaaS.

However, in many cases, this is not possible.  If you are still running on Java 8 there are two additional considerations.

The default garbage collector for Java 8 is Parallel GC.  In most cases G1 will offer better performance.  We recommend enabling it, as above.

Furthermore, there is the `UseStringDeduplication` flag which works to eliminate duplicate `String`s within the GC process.  That flag can save between 13% to 30% of memory, depending on application. However, this can impact on the pause time of your app.

```bash
java -jar -Xmx$(jq .info.limits.memory /run/config.json)m -XX:+UseG1GC -XX:+UseStringDeduplication -XX:+ExitOnOutOfMemoryError -XX:+PrintGCDetails
```

## References

* [How to Migrate my Java application to Web PaaS](https://community.platform.sh/t/how-to-migrate-my-java-application-to-platfrom-sh/529)
* [Introduction to Garbage Collection Tuning](https://docs.oracle.com/en/java/javase/14/gctuning/introduction-garbage-collection-tuning.html#GUID-326EB4CF-8C8C-4267-8355-21AB04F0D304)
