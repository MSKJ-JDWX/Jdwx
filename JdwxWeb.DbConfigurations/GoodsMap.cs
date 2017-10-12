using JdwxWeb.Domains;
using Mingshu.Framework.MSWeb.DataAccess.Configurations;

namespace JdwxWeb.DbConfigurations
{
    public class GoodsMap: DbEntityTypeConfiguration<Goods>
    {
        public GoodsMap()
        {
            this.ToTable("Goods");

            this.Property(e => e.ID)
                .HasColumnName("id")
                .HasMaxLength(36);

            this.Property(e => e.description)
                .HasMaxLength(500);

            this.Property(e => e.reason)
                .HasMaxLength(500);

            this.Property(e => e.link)
                .HasMaxLength(256);

            this.Property(e => e.command)
                .HasMaxLength(36);

            this.Property(e => e.oldprice)
                .HasMaxLength(36);

            this.Property(e => e.price)
                .HasMaxLength(36);

            this.Property(e => e.recommender)
                .HasMaxLength(36);

            this.Property(e => e.recommendtime)
                .HasColumnType("datetime");

            this.Property(e => e.recommendname)
                .HasMaxLength(36);

            this.Property(e => e.auditopinion)
                .HasMaxLength(500);

            this.Property(e => e.audituser)
                .HasMaxLength(36);

            this.Property(e => e.auditname)
                .HasMaxLength(36);

            this.Property(e => e.image)
                .HasColumnType("text");

            this.Property(e => e.buyimage)
                .HasColumnType("text");
            
        }
    }
}
