# Generated by Django 5.0.2 on 2024-03-02 17:56

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='WantedCriminal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('alias', models.CharField(blank=True, max_length=100)),
                ('description', models.TextField()),
                ('age', models.PositiveIntegerField()),
                ('gender', models.CharField(max_length=10)),
                ('nationality', models.CharField(max_length=100)),
                ('criminal_offenses', models.TextField()),
                ('last_known_location', models.CharField(max_length=100)),
                ('reward', models.DecimalField(decimal_places=2, default=0, max_digits=10)),
                ('contact_information', models.TextField()),
                ('date_posted', models.DateField(default=django.utils.timezone.now)),
            ],
        ),
    ]
