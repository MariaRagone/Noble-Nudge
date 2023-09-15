using System;
using System.Collections.Generic;
using FinalProject.Models;
using Microsoft.EntityFrameworkCore;

namespace Noble_Nudge.Models;

public partial class NobleNudgeDbContext : DbContext
{
    public NobleNudgeDbContext()
    {
    }

    public NobleNudgeDbContext(DbContextOptions<NobleNudgeDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Nobe> Nobes { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer(Secret.optionsBuilder);

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Nobe>(entity =>
        {
            entity.HasKey(e => e.NobeId).HasName("PK__Nobe__872C1D1D588BCF00");

            entity.ToTable("Nobe");

            entity.Property(e => e.NobeId).HasColumnName("NobeID");
            entity.Property(e => e.Category)
                .HasMaxLength(30)
                .HasColumnName("category");
            entity.Property(e => e.NobeName).HasMaxLength(50);
            entity.Property(e => e.Points).HasColumnName("points");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__Users__1788CCACD3F2CC57");

            entity.Property(e => e.UserId).HasColumnName("UserID");
            entity.Property(e => e.Age).HasColumnName("age");
            entity.Property(e => e.FirstName)
                .HasMaxLength(30)
                .HasColumnName("firstName");
            entity.Property(e => e.GoogleId)
                .HasMaxLength(255)
                .HasColumnName("GoogleID");
            entity.Property(e => e.LastName)
                .HasMaxLength(30)
                .HasColumnName("lastName");
            entity.Property(e => e.Points).HasColumnName("points");
            entity.Property(e => e.ZipCode)
                .HasMaxLength(10)
                .HasColumnName("zipCode");

            entity.HasMany(d => d.Nobes).WithMany(p => p.Users)
                .UsingEntity<Dictionary<string, object>>(
                    "UserNobe",
                    r => r.HasOne<Nobe>().WithMany()
                        .HasForeignKey("NobeId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__UserNobe__NobeID__628FA481"),
                    l => l.HasOne<User>().WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__UserNobe__UserID__619B8048"),
                    j =>
                    {
                        j.HasKey("UserId", "NobeId").HasName("PK__UserNobe__DFFA0D7D5F8E5CE7");
                        j.ToTable("UserNobe");
                        j.IndexerProperty<int>("UserId").HasColumnName("UserID");
                        j.IndexerProperty<int>("NobeId").HasColumnName("NobeID");
                    });
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
