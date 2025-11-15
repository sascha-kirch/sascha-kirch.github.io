# sascha-kirch.github.io
Website: [https://sascha-kirch.github.io](https://sascha-kirch.github.io)

[![pages-build-deployment](https://github.com/sascha-kirch/sascha-kirch.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/sascha-kirch/sascha-kirch.github.io/actions/workflows/pages/pages-build-deployment)

# General Highlights
- Google Analytics support
- GitHub API access
- StackOverflow RSS access
- Medium Blog RSS access
- Github pages with Jekyll
- [Bulma](https://bulma.io/) CSS framework
- Bulma Timeline extension

# Prerequisites and Installation for your own Github Page
## Option 1: Use supplied Dockerfile
- Install [docker](https://docs.docker.com/get-started/overview/).
- Clone/fork this repo and change directory into repo
- Build the docker image with the tag github-pages:
  ```bash
  docker build -t github-pages .
  ```
- Create a container named github-pages with an interactive terminal, the name of your choice, bind the this repo and enable port forwarding of a port of your choice:
  ```
  docker container create -it --name website -v ~/git/sascha-kirch.github.io:/home/dev_user/website/ -p 4000:4000 website  
  ```
- Start container in interactive mode:
  ```
  docker container start -i <YOUR-IMAGE-NAME>
  ```
- Install gems:
  ```bash
  # inside ~/website/docs
  bundle install
  ```
- Make changes and test with:
  ```
  bundle exec jekyll serve --host=0.0.0.0
  ```
- On your docker host, open the browser on `127.0.0.1:<YOUR-PORT>`

## Option 2: Fork this Repo as starting point
- Install [Jekyll incl. dependencies](https://jekyllrb.com/docs/installation/) and [set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- Fork this repo
- Rename the repo to you user name
- Make your changes
- Build the page
- Upload to Github to host the page

## Option 3: Starting from Scratch
- Follow the Github's guide on how to [Creating a GitHub Pages site with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll)


# Repo Stats
![](https://komarev.com/ghpvc/?username=saschakirchgithubio&color=yellow) since 16.04.2022 
