from rest_framework import viewsets
from .serializers import StudentSerializer, TakenQuizSerializer, UserSerializer
from django.contrib.auth.models import User
from .models import Student, TakenQuiz
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class StudentViewSet(viewsets.ModelViewSet):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()

class TakenQuizViewSet(viewsets.ModelViewSet):
    serializer_class = TakenQuizSerializer
    queryset = TakenQuiz.objects.all()

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer