from django.db import models

# Create your models here.

class Subject(models.Model):
    name = models.CharField(max_length=50)

DIFFICULTY_CHOICES = {
    ('easy', 'easy'),
    ('medium', 'medium'),
    ('difficult', 'difficult')
}

GRADE_CHOICES = {
    ('Pre-k', 'Pre-K'),
    ('Kindergarten', 'Kindergarten'),
    ('1st Grage', '1st Grade'),
    ('2nd Grage', '2nd Grade'),
    ('3rd Grage', '3rd Grade'),
}

class Quiz(models.Model):
    text = models.CharField(max_length=250)
    subject = models.ForeignKey(Subject, related_name='quizzes', on_delete=models.CASCADE)
    difficulty = models.CharField(max_length=20, choices=DIFFICULTY_CHOICES, blank = True)
    grade = models.CharField(max_length=50, choices=GRADE_CHOICES, blank = True)

class Question(models.Model):
    text = models.CharField(max_length=250)

class Answer(models.Model):
    text = models.CharField(max_length=250)
    question = models.ForeignKey(Question, related_name='answers', on_delete=models.CASCADE)
    is_correct = models.BooleanField(default=False)