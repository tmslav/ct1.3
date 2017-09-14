namespace angular1.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=Model1")
        {
        }

        public virtual DbSet<Booking> Booking { get; set; }
        public virtual DbSet<cars> cars { get; set; }
        public virtual DbSet<login> login { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Booking>()
                .Property(e => e.carID)
                .IsFixedLength();

            modelBuilder.Entity<Booking>()
                .Property(e => e.userID)
                .IsFixedLength();

            modelBuilder.Entity<cars>()
                .Property(e => e.carName)
                .IsUnicode(false);

            modelBuilder.Entity<cars>()
                .Property(e => e.imageUrl)
                .IsUnicode(false);

            modelBuilder.Entity<login>()
                .Property(e => e.username)
                .IsUnicode(false);

            modelBuilder.Entity<login>()
                .Property(e => e.password)
                .IsUnicode(false);
        }
    }
}
