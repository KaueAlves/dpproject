# DPproject

    Pré-requisito:
        1. Git
        2. WSL + Docker Engine
        3. VSCode + WSL Extension

    Passo a passo:
        1. git clone
        2. sudo docker compose up
        3. ctrl + c
        4. sudo docker compose up (Atualmente é necessário pois na primeira vez o container laravel utiliza o php migrate antes do banco estar funcional)


## Cores

### Default
    - bg-sky-900
    - bg-sky-800
    - border-sky-600

### Dark Mode
    - bg-zinc-900
    - bg-zinc-800
    - bg-zinc-700
    - border-zinc-600

### Hover
    - hover:bg-sky-700 
    - dark:hover:bg-zinc-700

# Configurando MYSQL
    1. dotnet add package Microsoft.EntityFrameworkCore
    2. dotnet add package Pomelo.EntityFrameworkCore.MySql
    4. dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
    5. dotnet add package Microsoft.EntityFrameworkCore.Tools
    6. dotnet add package Microsoft.EntityFrameworkCore.SqlServer
    7. dotnet aspnet-codegenerator controller -name ExemploController -m ExemploModel -dc MySqlContext -outDir Controllers -api
