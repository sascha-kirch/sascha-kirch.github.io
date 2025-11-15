FROM ubuntu:24.04

SHELL ["/bin/bash", "-c"]

EXPOSE 4000

ARG USER_ID=1000
ARG GROUP_ID=1000
ARG USER_NAME=dev_user

ARG http_proxy
ARG https_proxy
ARG no_proxy

ARG PACKAGES="git curl gcc g++ make zlib1g-dev libreadline-dev ruby-build sudo"
ARG RUBY_VERSION="2.6.6"

ENV GEM_HOME=/home/${USER_NAME}/gems
ENV GEM_PATH=/home/${USER_NAME}/gems/bin
ENV RBENV_PATH=/home/${USER_NAME}/.rbenv/bin
ENV BUNDLE_PATH=/home/${USER_NAME}/gems
ENV PATH=$GEM_PATH:$RBENV_PATH:$PATH

ENV http_proxy=${http_proxy}
ENV https_proxy=${https_proxy}
ENV no_proxy=${no_proxy}

# Remove ubuntu user and its home directory
RUN userdel -r ubuntu || true

# update packages and install packages
RUN apt update && \
apt install -y $PACKAGES

RUN groupadd -o -g ${GROUP_ID} ${USER_NAME} && \
useradd -m -l -u ${USER_ID} -o -g ${USER_NAME} -G sudo ${USER_NAME} && \
passwd -d ${USER_NAME}

USER ${USER_NAME}

#Install ruby using rbenv
RUN git clone https://github.com/rbenv/rbenv.git --branch v1.2.0 --single-branch ~/.rbenv && \
echo 'eval "$(rbenv init -)"' >> ~/.bashrc && \
rbenv init - && \
mkdir -p ~/.rbenv/plugins && \
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build && \
rbenv install $RUBY_VERSION && \
rbenv global $RUBY_VERSION

# install bundler with Ruby
RUN gem install bundler:2.3.7

RUN git clone https://github.com/sascha-kirch/linux-forgeup.git /home/${USER_NAME}/linux-forgeup && \
git clone https://github.com/sascha-kirch/dotfiles.git /home/${USER_NAME}/dotfiles

# SET WORKDIR
WORKDIR /home/${USER_NAME}/website/docs
