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
  ```
  docker build -t github-pages .
  ```
- Create a container named github-pages with an interactive terminal, the name of your choice, bind the this repo and enable port forwarding of a port of your choice:
  ```
  docker container create -it --name <YOUR-IMAGE-NAME> -v <PATH-TO-REPO>/sascha-kirch.github.io:/root/github-pages/ -p <YOUR-PORT>:4000 github-pages
  ```
- Start container in interactive mode:
  ```
  docker container start -i <YOUR-IMAGE-NAME>
  ```
- Install gems:
  ```
  cd docs/
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


# Webpages Preview
## Start Page
Link to [Start Page](https://sascha-kirch.github.io/).
![image](https://user-images.githubusercontent.com/72045951/158271330-39848e01-6d4f-4634-8721-8329d254ecbe.png)

## Projects
Link to [Projects](https://sascha-kirch.github.io/projects.html).

https://user-images.githubusercontent.com/72045951/158588546-bbda5fc0-430f-4820-b590-f415cc40329c.mp4

## Curriculum Vitae
Link to [Curriculum Vitae](https://sascha-kirch.github.io/cv.html).

https://user-images.githubusercontent.com/72045951/155887404-1ec7e7c6-f951-41c5-b2e9-d2ebdc21db1f.mp4

## Blog
Link to [Blog](https://sascha-kirch.github.io/blog.html).
The blog page shows all my stories posted on [my Medium account](https://medium.com/@SaschaKirch) via an RSS feed.

https://user-images.githubusercontent.com/72045951/155887172-8c5c83fe-db06-4327-809f-ddbc7be2ce74.mp4

## Programming Site
Link to [Programming Site](https://sascha-kirch.github.io/programming_sites.html).
On this page I show the highlights of my [StackOverflow](https://stackoverflow.com/users/17905764/sascha-kirch) and my [GitHub](https://github.com/sascha-kirch) account. StackOverflow is accessed by RSS and GitHub via it's API.

https://user-images.githubusercontent.com/72045951/155887394-3c05ed77-06d5-4e72-b352-a8d28cfade24.mp4

## Conferences
Link to [Conferences](https://sascha-kirch.github.io/conferences.html).
On this page I implement Bulma's timeline extension to show my attendence reccord on conferences.

https://user-images.githubusercontent.com/72045951/155887384-3999d2a1-cf1d-4581-b86c-7bac25fb8991.mp4

## About Me
Link to [About Me](https://sascha-kirch.github.io/about.html).

https://user-images.githubusercontent.com/72045951/155887380-bf191614-22e7-4d0c-8c80-18273e36a834.mp4

# Repo Stats
![](https://komarev.com/ghpvc/?username=saschakirchgithubio&color=yellow) since 16.04.2022 
