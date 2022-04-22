from tokenize import Token
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import QuizSerializer, QuestionSerializer, AnswerSerializer
from .models import Quiz, Question, Answer
from rest_framework.authentication import TokenAuthentication

# Create your views here.

def home(request):
    return HttpResponse("Backend Home")

class QuizView(viewsets.ModelViewSet):
    serializer_class = QuizSerializer
    queryset = Quiz.objects.all()
    authentication_classes = (TokenAuthentication,)


    # def get_queryset(self):
    #     qs = super().get_queryset()

    #     search = self.request.query_params.get('search', '')
    #     if search:
    #         qs = qs.filter(title_icontains = search)
    #     return qs

class QuestionView(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()

class AnswerView(viewsets.ModelViewSet):
    serializer_class = AnswerSerializer
    queryset = Answer.objects.all()