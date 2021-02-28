## Integrating AWS S3 with Node
* AWS S3 is Amazon Web Service's File Storage. You can interact with your File Storage via Node.js by pulling files into your application and uploading files to your storage

# Setup
1. Get an IAM User created on your AWS Console: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html
2. Generate API Keys for that IAM User: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html
3. Create the S3 Bucket (Where your files will be stored): https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html
4. Set up a policy that only that IAM User can interact with the S3 Bucket: https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html
  * This is done in the "Permissions" tab when viewing your S3 Bucket
  * I have disabled all the Blocks (i.e. Block all public access is equal to Off)
  * My policy looks like this, which enables only my IAM User to interact with the bucket:
  ```
    {
      "Version": "2012-10-17",
      "Statement": [
          {
              "Effect": "Deny",
              "Principal": "*",
              "Action": "s3:*",
              "Resource": "arn:aws:s3:::<BUCKET_NAME>",
              "Condition": {
                  "StringNotLike": {
                      "aws:username": "<IAM Username>"
                  }
              }
          }
      ]
    }
  ```
5. Store your API Credentials as Environment Variables: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html
  * You dont see the environment variables in the code because the aws-sdk looks directly into your environment variables and sets up the connection that way
