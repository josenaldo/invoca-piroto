FROM jekyll/jekyll:3.8.5

LABEL author Josenaldo Matos

VOLUME [ "/srv/jekyll", "/usr/local/bundle" ]

ENV JEKYLL_ENV production

EXPOSE 4000

RUN chmod 777 /srv/jekyll
