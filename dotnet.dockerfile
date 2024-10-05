# Etapa 1: Construção
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /app

#  dotnet add package Microsoft.EntityFrameworkCore
#  dotnet add package Microsoft.EntityFrameworkCore.Design
#  dotnet add package Pomelo.EntityFrameworkCore.MySql --version 9.0.0-preview.1
#  dotnet tool install -g dotnet-ef
#  dotnet tool install -g dotnet-aspnet-codegenerator
#  export PATH="$PATH:/root/.dotnet/tools"


# Comando para manter o container rodando sem executar o projeto
CMD ["tail", "-f", "/dev/null"]