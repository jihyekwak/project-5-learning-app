# Generated by Django 4.0.4 on 2022-04-20 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0002_alter_quiz_difficulty_alter_quiz_grade'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quiz',
            name='difficulty',
            field=models.CharField(blank=True, choices=[('difficult', 'difficult'), ('medium', 'medium'), ('easy', 'easy')], max_length=20),
        ),
        migrations.AlterField(
            model_name='quiz',
            name='grade',
            field=models.CharField(blank=True, choices=[('1st Grade', '1st Grade'), ('Kindergarten', 'Kindergarten'), ('2nd Grade', '2nd Grade'), ('Pre-K', 'Pre-K'), ('3rd Grade', '3rd Grade')], max_length=50),
        ),
    ]