# Invocador de Nomes do Capeta

## Comandos úteis

### Construção da imagem

Para construir a imagem do contêiner, usamos o comando abaixo, na pasta do projeto.

```shell
docker build -t invocador-de-nomes-do-capeta .
```

### Execução do contêiner

Criar, dentro da pasta do projeto, a pasta `vendor/bundle`

Então, executar o contêiner com o seguinte comando:

```shell
docker run --rm -it -v "/d/repositorios/invocador-de-nomes-do-capeta:/srv/jekyll" -v "/d/repositorios/invocador-de-nomes-do-capeta/vendor/bundle:/usr/local/bundle" -p 4000:4000 -p 35729:35729 --name invocador-de-nomes-do-capeta invocador-de-nomes-do-capeta bash
```

### Pra executar o servidor de desenvolvimento

Executa o servidor do jekyll.

```shell
jekyll serve --watch --force-polling --livereload
```

Após a execução do `jekyll serve`, verifique, no Kitematic, qual a o IP para acessar o container ou execute, no terminal do host, o comando `docker-machine ip`. O endereço para acesso é [http://IP_DO_DOCKER_MACHINE/invocador-de-nomes-do-capeta]([http://IP_DO_DOCKER_MACHINE/invocador-de-nomes-do-capeta])

### Conectando num container que está rodando

```shell
docker exec -it invocador-de-nomes-do-capeta bash
```


### Se precisar reconectar num servidor que já está rodando

```shell
killall jekyll
```

ou

```shell
pkill -u jekyll
```
