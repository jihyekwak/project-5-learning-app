from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import StudentSerializer, UserSerializer
from django.contrib.auth.models import User
from .models import Student, TakenQuiz
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

# class UserProfileView(APIView):
#     def get(self, request):
#         serializer = UserSerializer(self.request.user)
#         return Response(serializer.data)

class StudentView(viewsets.ModelViewSet):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()

