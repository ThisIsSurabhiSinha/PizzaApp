# Generated by Django 4.2.5 on 2024-06-16 16:29

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pizza', '0004_alter_pizza_base_alter_pizza_extra_cheese_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pizza',
            name='images',
            field=models.ImageField(blank=True, default='images/default_pizza_pic.jpg', help_text='Upload pizza image', upload_to='images', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'gif'])], verbose_name='Pizza Image'),
        ),
    ]