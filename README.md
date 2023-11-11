## 環境設定

part of this environment is structured based on the site below  
[ZEN:Laravel9 を Docker で導入してみよう!](https://zenn.dev/eguchi244_dev/articles/laravel-and-docker-introduction-20230822)  
part of database structure is based on the site below  
[Laravel Rest API Vue JS CRUD Full Tutorial | Laravel Vue Tutorial for beginners](https://www.youtube.com/watch?v=GTiBa9bPCZc&t=490s)
Create your docker env by following the first document
create your
`./docker-compose.yml`  
`./docker/nginx/default.conf`  
`./docker/php/dockerfile`  
`./docker/php/php.ini`
Give each file the proper description and run `docker-compose up`

after running compose up command get in to your virtual env and do the following steps

exec the command below to enter the virtual env  
`docker-compose exec php bash`

install laravel using composer written below  
`composer create-project "laravel/laravel=9.*" LaravelTestProject`  
this command shows which version you want to use and what name you want the project to be  
`composer create-project "laravel/laravel=<VERSION>" <PROJECT NAME FOR Laravel>`

to install vuejs to this project follow the next steps inside the container

1. run `composer require laravel/ui`
2. in this env you do not have npm installed, so run`apt update`and `apt install nodejs npm`
3. finally you run`npm install`

## composer を使うために

when you want to use `composer` command don't forget to change your current to `LaravelTestProject` in your docker terminal

## laravel よくする操作

when you use laravel, it's often the time when you want to edit some database. and the tools you use related to database is the `artisan`
`artisan` has vary of commands and you might get confused. Here I listed up some frequently used commands that I noticed in this project

1. `php artisan make:migration <create_NAME_table>`  
   this command is to make database more independent and helps database to generate
2. `php artisan migrate`
   this command is to generate your database file(in this project the applicable file is `database/database.sqlite`)

### Tailwindcss の導入

to install tailwindcss in your vue project, follow the next instruction

1. run `npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`
2. run `npx tailwindcss init -p`

### データベースにまつわること

to use artisan, you must change your current directory to the repository that is running laravel, which means `LaravelTestProject` in this case.Then,you can use `php artisan <something>`

## 後始末

after you practiced your laravel env project, try not to forget erasing all of your docker image, container and volume  
`docker-compose down -v --rmi all`
