from django.db import models
from django.contrib.auth.models import User
from quiz.models import Quiz
# Create your models here.

AVATAR_CHOICES = {
    ('1', 'avatar1')
}

GRADE_CHOICES = {
    ('Pre-K', 'Pre-K'),
    ('Kindergarten', 'Kindergarten'),
    ('1st Grade', '1st Grade'),
    ('2nd Grade', '2nd Grade'),
    ('3rd Grade', '3rd Grade'),
}

class Student(models.Model):
    instuctor = models.ForeignKey(User, related_name='children', on_delete = models.CASCADE)
    name = models.CharField(max_length=50)
    avatar = models.CharField(max_length=50, choices=AVATAR_CHOICES)
    grade = models.CharField(max_length=50, choices=GRADE_CHOICES)
    reward = models.IntegerField

    def __str__(self):
        return self.name

class TakenQuiz(models.Model):
    student = models.ForeignKey(Student, related_name='quizzes', on_delete = models.CASCADE )
    quiz = models.ForeignKey(Quiz, related_name='taken_quizzes', on_delete = models.CASCADE )
    score = models.IntegerField()