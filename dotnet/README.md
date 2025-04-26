# Etapas de intalação

1. dotnet new webapi --use-controllers -o dotnet
2. dotnet dev-certs https --trust
3. dotnet add package NSwag.AspNetCore
4. dotnet add package Microsoft.EntityFrameworkCore.Relational --version 8.0.13
5. dotnet add package Microsoft.EntityFrameworkCore --version 8.0.13
6. dotnet add package Microsoft.EntityFrameworkCore.Design --version 8.0.13
7. dotnet add package Pomelo.EntityFrameworkCore.MySql --version 8.0.3
8. mkdir Models
9. touch Models/PlayerCharacterModel.cs
11. touch Models/ClassModel.cs
12. Crie e configure as classes
13. mkdir Data
14. touch Data/AppDbContext.cs
15. Crie e configure o AppDbContext.cs (Adicione os Dbsets e relacionamentos)
16. Ajuste o Program.cs para utilizar o Mysql 
17. dotnet ef migrations add CriarTabelas
18. dotnet ef database update
19. mkdir Services
20. touch Services/PlayerCharacter/PlayerCharacterService.cs
21. touch Services/Class/ClassService.cs
22. Modifique o Program.cs, adicione `builder.Services.AddScoped<IPlayerCharacterService, PlayerCharacterService>();`, para informar que a interface deve implementar o que estiver na classe base.
23. 


