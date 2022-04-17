from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SubjectSerializer, QuizSerializer, QuestionSerializer, AnswerSerializer
from .models import Subject, Quiz, Question, Answer

# Create your views here.

class SubjectView(viewsets.ModelViewSet):
    serializer_class = SubjectSerializer
    queryset = Subject.objects.all()

class QuizView(viewsets.ModelViewSet):
    serializer_class = QuizSerializer
    queryset = Quiz.objects.all()

class QuestionView(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()

class AnswerView(viewsets.ModelViewSet):
    serializer_class = AnswerSerializer
    queryset = Answer.objects.all()