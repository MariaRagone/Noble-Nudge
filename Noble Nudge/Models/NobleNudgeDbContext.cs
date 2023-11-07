using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.DataProtection;
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

    public virtual DbSet<NobeCategory> NobeCategories { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserNobe> UserNobes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer(Secret.optbuild);

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

        modelBuilder.Entity<NobeCategory>(entity =>
        {
            entity.HasKey(e => e.CategoryId).HasName("PK__NobeCate__19093A2B5F9A3F71");

            entity.Property(e => e.CategoryId)
                .ValueGeneratedNever()
                .HasColumnName("CategoryID");
            entity.Property(e => e.CategoryName)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.IconImage)
                .HasMaxLength(255)
                .IsUnicode(false);
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
        });

        modelBuilder.Entity<UserNobe>(entity =>
        {
            entity.HasKey(e => e.GoogleId).HasName("PK__userNobe__0DA2E4E3EAD9DCC8");

            entity.ToTable("userNobes");

            entity.Property(e => e.GoogleId)
                .HasMaxLength(255)
                .HasColumnName("googleID");
            entity.Property(e => e.NobeId)
                .HasMaxLength(255)
                .HasColumnName("nobeID");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
