FROM ubuntu

EXPOSE 4000
WORKDIR /root/github-pages/

ARG PACKAGES="git curl gcc g++ make zlib1g-dev libreadline-dev ruby-build"
ARG RUBY_VERSION="2.6.6"

ENV GEM_HOME $HOME/gems
ENV GEM_PATH $HOME/gems/bin
ENV RBENV_PATH $HOME/.rbenv/bin
ENV BUNDLE_PATH $HOME/gems
ENV PATH $GEM_PATH:$RBENV_PATH:$PATH

# update packages and install packages
RUN apt update && \
apt install -y $PACKAGES

#Install ruby using rbenv
RUN git clone https://github.com/rbenv/rbenv.git ~/.rbenv && \
echo 'eval "$(rbenv init -)"' >> ~/.bashrc && \
exec $SHELL && \
git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build && \
rbenv install $RUBY_VERSION && \
rbenv global $RUBY_VERSION

# install bundler with Ruby
RUN gem install bundler:2.3.7

# Start container standard in shell
CMD ["bash"]