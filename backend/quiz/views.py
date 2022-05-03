from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import QuizSerializer, QuestionSerializer, AnswerSerializer
from .models import Quiz, Question, Answer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.shortcuts import get_object_or_404

# Create your views here.

def home(request):
    return HttpResponse("Backend Home")

class QuizView(viewsets.ModelViewSet):
    serializer_class = QuizSerializer
    queryset = Quiz.objects.order_by('-created_at')

class QuestionView(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()
