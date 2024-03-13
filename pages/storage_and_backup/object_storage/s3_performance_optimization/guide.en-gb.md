# Introduction

There are several ways you can use to optimize the performances of your buckets on OVHcloud Object Storage. The following guide will walk you through the different optimization methods.

# Using byte range fetch

OVHcloud Object Storage supports byte range fetch. The idea behind is to fetch an object chunk by chunk, each chunk being defined by a range of bytes. The main benefit is that it allows you to parallelize GET requests to download an object, each GET requesting a specific range of bytes: typical sizes for byte-range requests are 8 MB or 16 MB but you can specify any size.

![Schema 1](images/sharding1.png)

To download part of an object, you must use additional parameters to specify which part of an object that you want to fetch. The following example dowloads the first part ranging from 0 to 500 bytes of an object named "filename" stored in the "test-bucket" bucket and writes the output as a file named "object_part" :

```bash
user@host:~$ aws s3api get-object --bucket test-bucket --key filename --range bytes=0-500 object_part
```
# Using MPUs

You can upload a single object as a collection of parts using multipart upload. These parts are yours to upload separately and in any sequence. You can retransmit a part without affecting the others if transmission of any part fails. After you complete the upload of all parts, OVHcloud Object Storage puts the pieces together and rebuilds the object.

> ✔️: You should consider using multipart uploads for objects > 100MB
The benefits of using multipart upload are as follows:

* Increased throughput: each part can be uploaded concurrently
* Fast recovery from network problems: since each part can be uploaded separately and independently, you can re-upload the missing part without restarting the whole upload.

# In practice 
## Using the AWS cli ##
### Prerequisites ###

* an OVHcloud bucket created
* the AWS cli installed and configured
* a large file split into multiple parts

  
> ✔️: **Did you know You ?**
> When you use a high level command to upload an object using the cp command, the AWS cli automatically does a multipart-upload. To better optimize the default configuration values for doing multipart uploads (multipart_threshold, multipart_chunksize), you can check this article and see the table explaining the configuration of the AWS cli.

The following section explains how to perform a multipart upload using the low level commands of the AWS cli.

First, you need to initiate a multipart upload:

```bash
user@host:~$ aws s3api create-multipart-upload --bucket test-bucket --key filename
{
    "Bucket": "test-bucket",
    "Key": "filename",
    "UploadId": "YjgxYmRmODItOWRiMi00YmI2LTk1NTMtODBhYWYwYmFjZGYx"
}
```
> ⚠️: Do not forget to save the upload ID, key and bucket name for use with the upload-part command.

Then, for each part, you need to make an upload-part command where you specify the bucket, key and upload ID:

> :exclamation: Part numbers can be any number from 1 to 10,000 inclusive. You can check the technical limitations,["here"](https://help.ovhcloud.com/csm/en-ca-public-cloud-storage-s3-limitations?id=kb_article_view&sysparm_article=KB0034706).

```bash
user@host:~$ aws s3api upload-part --bucket test-bucket --key filename --part-number 1 --body filename_part1 --upload-id "YjgxYmRmODItOWRiMi00YmI2LTk1NTMtODBhYWYwYmFjZGYx"
{
    "ETag": "\"6769849e543eeb257675b65e7a199aa2\""
}
```

> ⚠️: Save the ETag value of each part for later. They are required to complete the multipart upload.

 After, you upload all the parts, you have to call the complete-multipart-upload command in order to finish and for OVHcloud Object Storage to rebuild the final object:
 
```bash
user@host:~$ aws s3api complete-multipart-upload --bucket test-bucket --key filename --upload-id "YjgxYmRmODItOWRiMi00YmI2LTk1NTMtODBhYWYwYmFjZGYx" --multipart-upload file://mpu.json
```
