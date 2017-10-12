using JdwxWeb.Domains;
using Mingshu.Framework.MSWeb.DataAccess.Configurations;

namespace JdwxWeb.DbConfigurations
{
    public class QuestionsMap : DbEntityTypeConfiguration<Questions>
    {
        public QuestionsMap()
        {
            this.ToTable("Questions");

            this.Property(e => e.ID)
                .HasColumnName("id")
                .HasMaxLength(36);

            this.Property(e => e.feedbackuserid)
                .HasMaxLength(36);

            this.Property(e => e.feedbackusernickname)
                .HasMaxLength(36);

            this.Property(e => e.contact)
                .HasMaxLength(36);

            this.Property(e => e.content)
                .HasColumnType("text");
        }
    }
}
