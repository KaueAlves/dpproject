# Etapa 1: Construção
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /app

# Comando para manter o container rodando sem executar o projeto
CMD ["tail", "-f", "/dev/null"]