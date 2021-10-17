using Hex4s.Web.Server.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Hex4s.Web.Server.Data
{
    public class Hex4sDbContext : DbContext
    {
        public Hex4sDbContext(DbContextOptions<Hex4sDbContext> options) : base(options)
        {
        }

        public class Company
        {
            public int Id { get; set; }
            public Address Address { get; set; }
        }

        public class Address
        {
            public int Id { get; set; }
            public int EntityId { get; set; }
            public Company Company { get; set; }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Company>()
                .HasOne(c => c.Address)
                .WithOne(a => a.Company)
                .HasForeignKey("EntityId");
        }

        DbSet<Kingdom> Kingdoms;
    }
}
