// See https://aka.ms/new-console-template for more information
using CommandLine;
using Hex4s.Web.Server.AdminConsole;
using Hex4s.Web.Server.Data;
using Hex4s.Web.Server.Data.Models;
using Microsoft.EntityFrameworkCore;

DbContextOptionsBuilder<Hex4sDbContext> builder = new DbContextOptionsBuilder<Hex4sDbContext>();
builder.UseSqlServer(@"Server=localhost;Database=Hex4s");

Hex4sDbContext context = new Hex4sDbContext(builder.Options);

Random random = new Random(64363762);

Parser.Default.ParseArguments<Options>(args)
       .WithParsed<Options>(o =>
       {
           if (o.Command == "create")
           {
               for(int x = 0;x < 50; x++)
               {
                   for(int y = 0; y < 50; y++)
                   {
                       var kingdom = new Kingdom();
                       kingdom.x = x;
                       kingdom.y = y;
                       kingdom.Name = random.Next(0, 12312).ToString();

                       context.Add(kingdom);
                   }
               }
           }

           context.SaveChanges();
       });