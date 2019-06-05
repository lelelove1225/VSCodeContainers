FROM ubuntu:latest

RUN apt-get update \
  && apt-get install -y python3 python3-pip git curl wget make xz-utils file sudo unzip \
  && apt-get install -y mecab libmecab-dev mecab-ipadic-utf8 \
  && apt-get install -y locales \
  && locale-gen ja_JP.UTF-8 \
  && apt clean \
  && update-locale LANG=ja_JP.UTF-8

# Set locale
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP.UTF-8
ENV LC_ALL ja_JP.UTF-8

RUN git clone --depth 1 https://github.com/neologd/mecab-ipadic-neologd.git \
  && cd mecab-ipadic-neologd \
  && ./bin/install-mecab-ipadic-neologd -n -y \
  && cd .. \
  && rm -rf mecab-ipadic-neologd

# Set mecab-ipadic-NEologd as default
RUN sed -i 's/dicdir = \/var\/lib\/mecab\/dic\/debian/dicdir = \/usr\/lib\/x86_64-linux-gnu\/mecab\/dic\/mecab-ipadic-neologd/' /etc/mecabrc

# Set the default shell to bash instead of sh
ENV SHELL /bin/bash