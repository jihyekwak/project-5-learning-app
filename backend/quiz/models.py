from django.db import models

# Create your models here.

class Subject(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

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
    title = models.CharField(max_length=250)
    subject = models.ForeignKey(Subject, related_name='quizzes', on_delete=models.CASCADE)
    difficulty = models.CharField(max_length=20, choices=DIFFICULTY_CHOICES, blank = True)
    grade = models.CharField(max_length=50, choices=GRADE_CHOICES, blank = True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Question(models.Model):
    text = models.CharField(max_length=250)
    quiz = models.ForeignKey(Quiz, related_name='questions', on_delete=models.CASCADE)

    def __str__(self):
        return self.text 

class Answer(models.Model):
    text = models.CharField(max_length=250)
    question = models.ForeignKey(Question, related_name='answers', on_delete=models.CASCADE)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.text 