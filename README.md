# Lista de Nomes do Capeta

## Comandos úteis

### Construção da imagem

Para construir a imagem do contêiner, usamos o comando abaixo, na pasta do projeto.

```shell
docker build -t nomesdocapeta .
```

### Execução do contêiner

Criar, dentro da pasta do projeto, a pasta `vendor/bundle`

Então, executar o contêiner com o seguinte comando:

```shell
docker run --rm -it -v "/d/repositorios/nomesdocapeta:/srv/jekyll" -v "/d/repositorios/nomesdocapeta/vendor/bundle:/usr/local/bundle" -p 4000:4000 --name nomesdocapeta nomesdocapeta bash
```

### Pra executar o servidor de desenvolvimento

Executa o servidor do jekyll.

```shell
jekyll serve --livereload --watch --force-polling
```

Verifique, no Kitematic, qual a o IP para acessar o container ou execute, no terminal do host, o comando `docker-machine ip`

### Conectando num container que está rodando

```shell
docker exec -it nomesdocapeta bash
```

## Referências

* [https://dev.to/michael/compile-a-jekyll-project-without-installing-jekyll-or-ruby-by-using-docker-4184](https://dev.to/michael/compile-a-jekyll-project-without-installing-jekyll-or-ruby-by-using-docker-4184)
* [https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages)
* [https://ddewaele.github.io/running-jekyll-in-docker/](https://ddewaele.github.io/running-jekyll-in-docker/)
* [https://github.com/envygeeks/jekyll-docker](https://github.com/envygeeks/jekyll-docker)
