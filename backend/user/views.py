from django.shortcuts import render
from rest_framework import viewsets
from .serializers import StudentSerializer, UserSerializer
from django.contrib.auth.models import User
from .models import Student, TakenQuiz

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class StudentView(viewsets.ModelViewSet):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()

