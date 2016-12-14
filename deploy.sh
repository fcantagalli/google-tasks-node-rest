#!/bin/bash
echo "compiling javasacript with babel"
npm run build
echo "pushing code to heroku"
git push heroku master
