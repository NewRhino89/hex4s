
using Hex4s.Web.Server.WebAPI.HubConfig;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddSignalR();

//builder.Services.AddDbContextFactory<Hex>(
//    options =>
//        options.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=Test"));

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseEndpoints(endpoints =>
{
    endpoints.MapHub<KingdomHub>("/kingdom");
});

app.Run();
