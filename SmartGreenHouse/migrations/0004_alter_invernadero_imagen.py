# Generated by Django 5.1.6 on 2025-03-11 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SmartGreenHouse', '0003_alter_invernadero_imagen'),
    ]

    operations = [
        migrations.AlterField(
            model_name='invernadero',
            name='imagen',
            field=models.ImageField(default='./assets/Untitled.png', upload_to='./assets/'),
        ),
    ]
