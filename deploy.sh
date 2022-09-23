#!/bin/bash

rm -rf build

yarn build

scp -r build deploy@10.9.215.125:/home/deploy/apps/web

