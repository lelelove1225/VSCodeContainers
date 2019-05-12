FROM elixir:latest

RUN apt-get update && apt-get install -y --no-install-recommends locales
ENV LANG ja_JP.UTF-8
ENV LC_ALL ja_JP.UTF-8
RUN echo $LANG UTF-8 > /etc/locale.gen
RUN locale-gen
RUN update-locale LANG=$LANG