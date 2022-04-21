# Generated by Django 4.0.4 on 2022-04-21 07:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0004_alter_quiz_grade_alter_quiz_subject_delete_subject'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quiz',
            name='grade',
            field=models.CharField(blank=True, choices=[('Kindergarten', 'Kindergarten'), ('Pre-K', 'Pre-K'), ('1st Grade', '1st Grade'), ('2nd Grade', '2nd Grade'), ('3rd Grade', '3rd Grade')], max_length=50),
        ),
        migrations.AlterField(
            model_name='quiz',
            name='subject',
            field=models.CharField(blank=True, choices=[('Science', 'Science'), ('Social Studies', 'Social Studies'), ('English', 'English'), ('Math', 'Math'), ('Korean', 'Korean'), ('Spanish', 'Spanish')], max_length=20),
        ),
    ]
