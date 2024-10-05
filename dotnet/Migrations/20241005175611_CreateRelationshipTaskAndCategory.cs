using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace app.Migrations
{
    /// <inheritdoc />
    public partial class CreateRelationshipTaskAndCategory : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TaskCategories_Tasks_TaskModelId",
                table: "TaskCategories");

            migrationBuilder.DropIndex(
                name: "IX_TaskCategories_TaskModelId",
                table: "TaskCategories");

            migrationBuilder.DropColumn(
                name: "TaskModelId",
                table: "TaskCategories");

            migrationBuilder.CreateTable(
                name: "TaskCategoryModelTaskModel",
                columns: table => new
                {
                    TaskCategoriesId = table.Column<int>(type: "int", nullable: false),
                    TasksId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TaskCategoryModelTaskModel", x => new { x.TaskCategoriesId, x.TasksId });
                    table.ForeignKey(
                        name: "FK_TaskCategoryModelTaskModel_TaskCategories_TaskCategoriesId",
                        column: x => x.TaskCategoriesId,
                        principalTable: "TaskCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TaskCategoryModelTaskModel_Tasks_TasksId",
                        column: x => x.TasksId,
                        principalTable: "Tasks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_TaskCategoryModelTaskModel_TasksId",
                table: "TaskCategoryModelTaskModel",
                column: "TasksId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TaskCategoryModelTaskModel");

            migrationBuilder.AddColumn<int>(
                name: "TaskModelId",
                table: "TaskCategories",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TaskCategories_TaskModelId",
                table: "TaskCategories",
                column: "TaskModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_TaskCategories_Tasks_TaskModelId",
                table: "TaskCategories",
                column: "TaskModelId",
                principalTable: "Tasks",
                principalColumn: "Id");
        }
    }
}
