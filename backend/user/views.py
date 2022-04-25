from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import StudentSerializer, UserSerializer
from django.contrib.auth.models import User
from .models import Student, TakenQuiz
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view
from rest_framework import generics, permissions

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def dispatch(self, request, *args, **kwargs):
        if kwargs.get('pk') == 'current' and request.user:
            kwargs['pk'] = request.user.pk

        return super().dispatch(request, *args, **kwargs)

# class UserProfileView(APIView):
#     def get(self, request):
#         serializer = UserSerializer(request.user)
#         return Response(serializer.data)

# @api_view(['GET'])
# def current_user(request):

#     serializer = UserSerializer(request.user)
#     return Response(serializer.data)

class StudentView(viewsets.ModelViewSet):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()

class UserAPI(generics.RetrieveAPIView):
  permission_classes = [
    permissions.IsAuthenticated,
  ]
  serializer_class = UserSerializer

  def get_object(self):
    return self.request.user
