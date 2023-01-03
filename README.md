# Serverless TODO

This application is a simple TODO application using AWS Lambda and Serverless framework. This application will allow creating/removing/updating/fetching TODO items. Each TODO item can optionally have an attachment image. If this TODO item has an attachment image, download and delete attachment file. Each user only has access to TODO items that he/she has created.

This project is upgrade version of [Udagram Project 04](https://github.com/qmnguyenw/udacity-aws-project4.git). This project provide the following addition features: Fetch a certificate from Auth0 instead of hard coding it in an authorizer, feature download attachment file (with new lambda), feature delete attachment file(with new lambda), ci/cd backend 

# How to run the application

**Note:** I just deployed Backend modules in AWS serverless modules, so reviewer only need to run command in frontend one 

## Frontend

```
cd client
npm install
npm run start
```
