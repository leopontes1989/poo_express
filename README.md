# Trybeteca API

App para gestão de bibliotecas desenvolvidas no conteúdo do dia 10.1.

## Iniciando o Projeto

Clone esse repositório com o comando:

```bash
git clone git@github.com:tryber/library-api.git
```

Entre no diretório raiz:

```bash
cd library-api
```

Instale as dependências do projeto:

```bash
npm install
```

Inicie os containers do banco de dados e backend:

```bash
docker-compose up -d
```

Execute o container que você acabou de criar:

```bash
docker exec -it library-api bash
```

Rode o servidor da aplicação:

```bash
npm run dev
```

### Atenção

Os comandos `npm run dev` e `npm test` podem ser rodados tanto fora quanto dentro do container Docker. Execute-os onde achar melhor!

### Dica

Caso tenha conflitos com portas já usadas. Use os comandos:

```bash
killall node # Parar qualquer aplicação node que esteja sendo executados na máquina!
docker stop $(docker ps -qa) # Para containers que estão sendo executados!
```
