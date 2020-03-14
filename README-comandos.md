Comandos

jekyll serve --livereload --watch --force-polling

Executa o servidor do jekkyl.

jekyll new newblog

jekyll build

gem install "jekyll-theme-hydeout"

Conectar, com o bash, no container

docker run --rm -it -v "/d/repositorios/josenaldo.github.io:/srv/jekyll" -v "/d/repositorios/josenaldo.github.io/vendor/bundle:/usr/local/bundle" -p 4000:4000 --name josenaldo.github.io josenaldo.github.io bash


Referências 

https://dev.to/michael/compile-a-jekyll-project-without-installing-jekyll-or-ruby-by-using-docker-4184

https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages

https://ddewaele.github.io/running-jekyll-in-docker/

https://github.com/envygeeks/jekyll-docker