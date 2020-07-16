---
title: Java - How to use OVHcloud Object Storage with Apache Spark on the Data Processing platform
slug: object-storage-java
excerpt: OpenStack Swift and its S3 compatible API is a common way to store the data you want to use for your Apache Spark jobs. Let's find out how to do it in Java!
section: How to
order: 6
---

**Last updated 19<sup>th</sup> May, 2020**

## Objective
This guide gives you a basic example about using OpenStack Swift and its S3 API with OVHcloud Data Processing using Java.

We will use the OpenStack S3 API to read and write data to OVHcloud Object Storage.

Samples are based on the well-known WordCount. We will first read data from a text file, then count the occurrences of each word in this particular file. And then print the result in output log and also write the result in a text file in OVHcloud Swift Object Storage. 

## Requirements
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}.
- An OVHcloud account.
- A cloud project in your OVHcloud account (see [How to create a cloud project](../../public-cloud/getting_started_with_public_cloud_logging_in_and_creating_a_project){.external} for details).
- Data Processing activated (see [How to activate the Data Processing service](../activation){.external} for details).
- The input file 'novel.txt' used by the following samples is available [here](https://github.com/ovh/data-processing-samples/tree/master/java_S3WordCount/novel.txt){.external}.
You have to upload it in an Object Storage container. (see [Getting started with the Swift API](../../public-cloud/getting_started_with_the_swift_api/){.external} to read more about how to create an OVHcloud Object Storage container). In this example, we created a container named 'textfile" and uploaded the novel.txt object into that container. 
- OVHcloud Object Storage "secret key" and "access key" for the container that you have uploaded the 'novel.txt' text file (textfile container in this example). (See [How to create EC2 credentials](../../public-cloud/getting_started_with_the_swift_S3_API/){.external} for more details).

## Read/Write data with Apache Spark using OpenStack Swift S3 API in Java

Find below the code in Java that:

- reads 'novel.txt' object in OVHcloud Object Storage through its S3 API
- counts the occurrences of each word in the file
- stores the results in the OVHcloud Object Storage through its S3 API
- prints the results in the output log of the job 

This code in Java reads one object novel.txt that is uploaded into a container named `textfile` and prints the number of occurrences per word in output logs of the job. As it is mentioned in requirements, we created a container named textfile and uploaded the novel.txt object into that container. 

You need to create a jar file from your Java code and upload it in your OVHcloud Object Storage as well. This jar file and novel.txt can be uploaded in separated containers or even in different cloud projects or OVHcloud accounts. Also this program will write the result in another text file named `result.txt` in the same container that novel.txt have been uploaded.  

JavaWordCount.java :
```java
import org.apache.hadoop.conf.Configuration;
import scala.Tuple2;

import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.sql.SparkSession;

import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;

public final class JavaWordCount {
    private static final Pattern SPACE = Pattern.compile(" ");

    public static void main(String[] args) throws Exception {

        String myAccessKey = "7decf61921524a6b828c9305a77bb201";
        String mySecretKey = "9e9c50f2ff514fc3bdc5f98e61bec81f";
        String bucket = "textfile";
        String filepath = "novel.txt";
        String filepath_result = "result.txt"; 
        SparkSession spark = SparkSession
                .builder()
                .appName("JavaWordCount")
                .getOrCreate();

        Configuration hadoopConf = spark.sparkContext().hadoopConfiguration();
        hadoopConf.set("fs.s3a.access.key", myAccessKey);
        hadoopConf.set("fs.s3a.secret.key", mySecretKey);
        hadoopConf.set("fs.s3a.impl", "org.apache.hadoop.fs.s3a.S3AFileSystem");
        hadoopConf.set("fs.s3a.endpoint","s3.gra.cloud.ovh.net"); 
        hadoopConf.set("fs.s3a.path.style.access", "true");

        JavaRDD<String> lines = spark.read().textFile("s3a://" + bucket + "/" + filepath).javaRDD();
        JavaRDD<String> words = lines.flatMap(s -> Arrays.asList(SPACE.split(s)).iterator());
        JavaPairRDD<String, Integer> ones = words.mapToPair(s -> new Tuple2<>(s, 1));
        JavaPairRDD<String, Integer> counts = ones.reduceByKey((i1, i2) -> i1 + i2);
        
        counts.saveAsTextFile("s3a://" + bucket + "/" + filepath_result);
        List<Tuple2<String, Integer>> output = counts.collect();
        for (Tuple2<?,?> tuple : output) {
            System.out.println(tuple._1() + ": " + tuple._2());
        }
        spark.stop();
    }
}
```

One way to package this java code and create a jar file, is to create a pom.xml file and build with Maven software with command `mvn package`. You can use this pom.xml file for example: 

pom.xml :
```xml 
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.ovh.dataprocessing</groupId>
    <artifactId>sparkwordcount</artifactId>
    <version>1.0-SNAPSHOT</version>
    
    <properties>
        <spark.version>2.4.3</spark.version>
        <hadoop.aws.version>2.8.5</hadoop.aws.version>
    </properties>
    
    <dependencies>
        <dependency>
            <groupId>org.apache.spark</groupId>
            <artifactId>spark-core_2.11</artifactId>
            <scope>provided</scope> 
            <version>${spark.version}</version>
        </dependency>
        <dependency>
            <groupId>org.apache.spark</groupId>
            <artifactId>spark-sql_2.11</artifactId>
            <scope>provided</scope> 
            <version>${spark.version}</version>
        </dependency>
        <dependency>
            <groupId>org.apache.hadoop</groupId>
            <artifactId>hadoop-aws</artifactId>
            <scope>provided</scope> 
            <version>${hadoop.aws.version}</version>
        </dependency>
    </dependencies>
    
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <source>8</source>
                    <target>8</target>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-shade-plugin</artifactId>
                <version>3.0.0</version>
                <configuration>
                </configuration>
                <executions>
                    <execution>
                        <phase>package</phase>
                        <goals>
                            <goal>shade</goal>
                        </goals>
                        <configuration>
                            <shadedClassifierName>fat</shadedClassifierName>
                            <shadedArtifactAttached>true</shadedArtifactAttached>
                            <filters>
                                <filter>
                                    <artifact>*:*</artifact>
                                    <excludes>
                                        <exclude>META-INF/*.SF</exclude>
                                        <exclude>META-INF/*.DSA</exclude>
                                        <exclude>META-INF/*.RSA</exclude>
                                    </excludes>
                                </filter>
                            </filters>
                            <transformers>
                                <transformer implementation="org.apache.maven.plugins.shade.resource.ServicesResourceTransformer"/>
                                <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                                    <mainClass>JavaWordCount</mainClass>
                                </transformer>
                            </transformers>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>

</project>
```

> [!warning]
> Everything in OVHcloud object storage container in which you uploaded your code, will be downloaded to the Data Processing cluster. If you have big volume of data, the best practice is to put your data in a separated Object Storage container. 


You can find the source code of this project in OVHcloud github repository in this address: [ovh/data-processing-samples](https://github.com/ovh/data-processing-samples/tree/master/){.external}

## Go further

These samples are quite basic. They provide the first step to interact with object storage from within your code and, then, go further.

Concerning the 'WordCount' use case, here is a link to a more advanced tutorial about [Wordcount](../wordcount-spark){.external}.

If you are not familiar with Apache Spark, we recommend you to visit [Apache Spark's official website](https://spark.apache.org/){.external}

You can send your questions, suggestions or feedbacks in our community of users in our public [Gitter](https://gitter.im/ovh/data-processing){.external}

