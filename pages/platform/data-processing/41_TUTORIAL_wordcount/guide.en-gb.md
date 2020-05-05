---
title: Python : Word count with Apache Spark
slug: wordcount-spark
excerpt: Couting occurences of words in a file is a basic example about how using Apache Spark. Let's find how !
section: Tutorials
order: 2
---

**Last updated 04<sup>th</sup> May, 2020**

## Objective
This guide  gives you a basic example about using Apache Spark and OVHcloud Data Processing.
We will first read data from a CSV file, then count the frequence of each word in this particular file.

Here we will use as an example a dataset of lyrics from billboard songs, and find the most common words used over time.

Apart being fun here, word count is really helpful when you want to analyze products reviews, support tickets, most researched words, and so on.
You can easily make statistics for yourself or users. Famous social networks such as Twitter also analyze the trending topics by counting frequencies of words.

At the end of the tutorial, you will succeed to read CSV file from OVHcloud Object Storage, count words, remove stop words, and find the twentiest most used ones.


## Requirements 
- Access to [OVHcloud Manager](https://www.ovh.com/auth/?action=gotomanager){.external}
- An OVHcloud account 
- A cloud project in your OVHcloud account (see [How to create a cloud project](../../public-cloud/getting_started_with_public_cloud_logging_in_and_creating_a_project){.external} for details.)
- Data Processing activated (see [How to activate the Data Processing](../30_HOWTO_activate_project){.external} for details.)


## Step 1: Download dataset

For this tutorial we will download a CSV file who includes :
- Rank, Year, Artist, Song Title, Lyrics of TOP 100 billboard songs
- From 1965 to 2015

This dataset, created by Kaylin Pavlik, can be downloaded on [his Github repository](https://github.com/walkerkq/musiclyrics){.external}.

She also wrote a [really interesting blog post](https://www.kaylinpavlik.com/50-years-of-pop-music/){.external} about this data immersion in pop culture:

![Logs](images/wordspersong.png){.thumbnail}

As you can see in the graph we can find surprising results. She wrote that "Average word counts (both unique and total) have increased over time. Variance in word counts has also increased, perhaps due to greater genre diversity in the chart rankings over time".

Let's go back to the tutorial. Click on the CSV file, then download "billboard_lyrics_1964-2015.csv" on your computer.


## Step 2 : Write a wordcount function locally in Python with Apache Spark

> [!primary]
>
> You can download Python and Environment files generated here on [official OVHcloud Github repository](https://github.com/ovh/data-processing-samples){.external} 
> We recommend the use of Conda as a preferred Python environment.
> Also, if you want to execute this code on your computer, it will require Apache Spark up and running, locally.
>

Apache Spark comes with handy functions to read various kind of data sources but also powerful ones to analyze data.

Create a new Python file in the same folder as your CSV file and add inside it:

```python
import sys
import numpy

from operator import add
from pyspark.sql import SparkSession
from pyspark.ml.feature import Tokenizer
from pyspark.ml.feature import StopWordsRemover
import pyspark.sql.functions as f

spark = SparkSession\
  .builder \
  .appName("PythonWordCount") \
  .getOrCreate()


# Read CSV from OVHcloud Object Storage https://github.com/walkerkq/musiclyrics
data = spark.read.format('csv').options(header='true', inferSchema='true') \
  .load('billboard_lyrics_1964-2015.csv') \

print('############ CSV extract:')
data.show()
```

This first piece of code creates a new Apache Spark session, then read and load a CSV file into a dataframe called "data".


When executed, inside our logs we will see the content of the dataframe thanks to the data.show() function:

    +----+--------------------+--------------------+----+--------------------+------+
    |Rank|                Song|              Artist|Year|              Lyrics|Source|
    +----+--------------------+--------------------+----+--------------------+------+
    |   1|         wooly bully|sam the sham and ...|1965|sam the sham misc...|     3|
    |   2|i cant help mysel...|           four tops|1965| sugar pie honey ...|     1|
    |   3|i cant get no sat...|  the rolling stones|1965|                    |     1|
    |   4| you were on my mind|             we five|1965| when i woke up t...|     1|
    |   5|youve lost that l...|the righteous bro...|1965| you never close ...|     1|
    |   6|            downtown|        petula clark|1965| when youre alone...|     1|
    |   7|                help|         the beatles|1965|help i need someb...|     3|
    |   8|cant you hear my ...|     hermans hermits|1965|carterlewis every...|     5|
    |   9|crying in the chapel|       elvis presley|1965| you saw me cryin...|     1|
    |  10|             my girl|     the temptations|1965|ive got sunshine ...|     3|
    |  11|      help me rhonda|      the beach boys|1965|well since she pu...|     3|
    |  12|    king of the road|        roger miller|1965| trailer for sale...|     1|
    |  13|the birds and the...|         jewel akens|1965|let me tell ya bo...|     3|
    |  14|hold me thrill me...|          mel carter|1965| hold me hold me ...|     1|
    |  15|             shotgun|junior walker  th...|1965|i said ̢shotgun s...|     3|
    |  16|      i got you babe|         sonny  cher|1965|they say were you...|     3|
    |  17|   this diamond ring|gary lewis  the p...|1965|who wants to buy ...|     3|
    |  18|        the in crowd|   ramsey lewis trio|1965|        instrumental|     3|
    |  19|mrs brown youve g...|     hermans hermits|1965| mrs brown youve ...|     1|
    |  20|stop in the name ...|        the supremes|1965| stop in the name...|     1|
    +----+--------------------+--------------------+----+--------------------+------+
    only showing top 20 rows
    

Now, we can play with this dataframe! Let's explode the strings of the "Lyrics" column and count the words frequencies:

```python
# Count and group word frequencies on the column Lyrics, when splitted by space comma
data.withColumn('word', f.explode(f.split(f.col('Lyrics'), ' '))) \
  .groupBy('word') \
  .count() \
  .sort('count', ascending=False)
  .show()
```

The explode() function will take the data inside the Lyrics column, and separate all the data found based on the separator "whitespace character".

Here is the result shown in the logs:

    +----+-----+
    |word|count|
    +----+-----+
    | you|64606|
    |   i|56466|
    | the|53451|
    |  to|35752|
    | and|32555|
    |  me|31170|
    |   a|29282|
    |  it|25688|
    |  my|22821|
    |  in|18553|
    |that|16151|
    |  on|15814|
    |your|15459|
    |love|15283|
    |  im|14278|
    |  be|13004|
    |  of|12825|
    |    |12266|
    | all|11895|
    |dont|11587|
    +----+-----+
    only showing top 20 rows


It works as expected, but the Top 20 is filled with stop words like "I", "The", "To", ... We will now remove them.

Apache Spark has a feature called StopWordsRemover that will clean up the data for us.
The input shoud not be a string such as "I love you" but an array like [I, love, you].

We will first transform our data with tokenization then redo a GroupBy function:

```python
# To remove stop words (like "I", "The", ...), we need to provide arrays of words, not strings. Here we use APache Spark Tokenizer to do so.
# We create a new column to push our arrays of words
tokenizer = Tokenizer(inputCol="Lyrics", outputCol="words_token")
tokenized = tokenizer.transform(data).select('Rank','words_token')

print('############ Tokenized data extract:')
tokenized.show()


# Once in arrays, we can use the Apache Spark function StopWordsRemover
# A new column "words_clean" is here as an output
remover = StopWordsRemover(inputCol='words_token', outputCol='words_clean')
data_clean = remover.transform(tokenized).select('Rank', 'words_clean')

print('############ Data Cleaning extract:')
data_clean.show()


# Final step : like on the beginning, we can group again words and sort them by the most used
result = data_clean.withColumn('word', f.explode(f.col('words_clean'))) \
  .groupBy('word') \
  .count().sort('count', ascending=False) \

print('############ TOP20 Most used words in Billboard songs are:')
result.show()

# Stop Spark Process
spark.stop()
```

The result is much better:

    +-----+-----+
    | word|count|
    +-----+-----+
    | love|15283|
    |   im|14278|
    | dont|11587|
    | know|11166|
    | like|10949|
    |   oh| 9736|
    | baby| 9098|
    |  got| 8289|
    |  get| 8265|
    |     | 7982|
    |youre| 6592|
    | yeah| 6259|
    | want| 6214|
    |   go| 6105|
    | make| 5520|
    |  one| 5412|
    | cant| 5338|
    |  see| 5264|
    | time| 5176|
    |  let| 4927|
    +-----+-----+
    only showing top 20 rows


Here is the main finding: if we analyse the lyrics of most famous songs during the last 50 years, the word "love" comes in first position with 15283 occurences.
Followred by "i'm", "don't", "know", and so on.

Our code is now complete, let's now use OVHcloud Data Processing to benefit from an online Apache Spark cluster, with automation and scalability.



## Step 3 : Create an environment.yml file

All Python jobs launched via Data Processing require a conda environment.yml file in order to manage libraries used and versions.
You can find how to generate them here: [How to submit a Python job on the Data Processing platform using the OVHcloud manager](../job-submit-form){.external}

Both files must be placed in the same object container.

*In this particular case*, you can use this environment below. Copy and paste in a environment.yml file.

```python
name: data-processing-environment
channels:
  - defaults
dependencies:
  - python=3.7.6
  - pyspark
```


## Step 4 : submit your job with Data Processing

You are now ready to submit this job.

A detailed version about how to deploy a job in Python is explained on the guide [How to submit a job in Python](../31_HOWTO_submit-python-ui){.external}.

Briefly, inside OVHcloud Data Processing control panel, click on "start a new job" then:

- Put your CSV file, your Python Script and environment.yml file in the same OVHcloud Object storage container (public or private) at the root level
- Select `Data Processing`{.action} from the left panel 
- Select `Submit a new job`{.action}
- Select Apache Spark, chose a region
- Configure your Spark cluster (4vCores - 15GB memory for driver & executor template, executor count set to 1 recommended)
- Name your job, select your object storage container, find your Python file (the environement file is detected automatically within your job's container), do not set additional arguments
- Submit your job (make sure that your code stops your SparkSession, otherwise it will be kept running)

When the job is completed, you can access his log file, either in the object container 'odp-files' or in the dashboard of your job. Below are two extracts of this log.

Here is an extract :

![Logs](images/logs.png){.thumbnail}

As you can see, all our the Python's print functions are displayed in the logs. It is the easiest way to keep track of a job run. We also see Apache Spark logs.


## Go further

Counting word frequencies on a 8MB file as shown here does not require lot of power, and could have been done on a single laptop.
But as said previously we can imagine much more useful use-cases, such as analyzing product review sfor an e-commerce website, dig into social networks messages, analyzing most recurring patterns in support tickets and so on.

Usually it will require more compute power due to the amount of data to manipulate.
That's where OVHcloud Data Processing will become helpful, bringing automation and scalability.

You can read data from multiple sources, like Object Storage via AWS S3 API protocols, then write your results in files.

If you are not familiar with Apache Spark, we recommend you to visit [Apache Spark's official website](https://spark.apache.org/) and [pyspark's documentation](https://spark.apache.org/docs/latest/api/python/index.html).

You can send your questions, suggestions or feedbacks in our community of users in our public [Gitter](https://gitter.im/ovh/data-processing){.external}
