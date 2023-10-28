# Generated by Django 4.2.6 on 2023-10-18 12:24

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("todobackend", "0003_usertoken"),
    ]

    operations = [
        migrations.CreateModel(
            name="Reset",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("email", models.EmailField(max_length=255)),
                ("token", models.CharField(max_length=255, unique=True)),
            ],
        ),
    ]