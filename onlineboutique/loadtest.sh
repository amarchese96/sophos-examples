#!/bin/bash

FRONTEND_ADDR=$1
USERS=$2

docker run --network kind -e FRONTEND_ADDR=$FRONTEND_ADDR -e USERS=$USERS gcr.io/google-samples/microservices-demo/loadgenerator:v0.3.9