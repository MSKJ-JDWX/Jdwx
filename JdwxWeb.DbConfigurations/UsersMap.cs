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
                .HasColumnName("id")
                .HasMaxLength(36);

            this.Property(e => e.userid)
                .HasMaxLength(20);

            this.Property(e => e.password)
                .HasMaxLength(36);

            this.Property(e => e.nickname)
                .HasMaxLength(20);

            this.Property(e => e.idcard)
                .HasMaxLength(18);

            this
                .Property(e => e.realname)
                .HasMaxLength(32);

            this
                .Property(e => e.phonenumber)
                .HasMaxLength(11);

            this
                .Property(e => e.avatar)
                .HasMaxLength(800);

            this
                .Property(e => e.usersignature)
                .HasMaxLength(256);

            this
                .Property(e => e.wechat)
                .HasMaxLength(36);

            this
                .Property(e => e.qq)
                .HasMaxLength(16);

            this
                .Property(e => e.sina)
                .HasMaxLength(32);

            this
                .Property(e => e.taobao)
                .HasMaxLength(64);
        }
    }
}
