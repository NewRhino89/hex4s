using Hex4s.Web.Server.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Hex4s.Web.Server.Data
{
    class Hex4sDbContext : DbContext
    {
        public Hex4sDbContext(DbContextOptions<Hex4sDbContext> options) : base(options)
        {
        }

        DbSet<Kingdom> Kingdoms;
    }
}
