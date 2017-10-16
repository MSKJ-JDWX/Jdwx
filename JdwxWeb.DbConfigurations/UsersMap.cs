using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using JdwxWeb.Domains;

using Mingshu.Framework.MSWeb.DataAccess.Configurations;

namespace JdwxWeb.DbConfigurations
{
    public class UsersMap : DbEntityTypeConfiguration<Users>
    {
        public UsersMap()
        {
            this.ToTable("Users");

            this.Property(e => e.ID)
                .HasMaxLength(36);

            this.Property(e => e.UserCode)
                .HasMaxLength(20);

            this.Property(e => e.PassWord)
                .HasMaxLength(36);

            this.Property(e => e.Nickname)
                .HasMaxLength(20);

            this.Property(e => e.IdCard)
                .HasMaxLength(18);

            this.Property(e => e.RealName)
                .HasMaxLength(32);

            this.Property(e => e.PhoneNumber)
                .HasMaxLength(11);

            this.Property(e => e.Avatar)
                .HasMaxLength(800);

            this.Property(e => e.UserSignature)
                .HasMaxLength(256);

            this.Property(e => e.Wechat)
                .HasMaxLength(36);

            this.Property(e => e.QQ)
                .HasMaxLength(16);

            this.Property(e => e.Sina)
                .HasMaxLength(32);

            this.Property(e => e.Taobao)
                .HasMaxLength(64);

            this.Property(e => e.Address)
                .HasMaxLength(512);
        }
    }
}
