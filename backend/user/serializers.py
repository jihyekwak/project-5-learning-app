from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Student, TakenQuiz

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = ('id', 'instuctor', 'name', 'avatar', 'grade', 'reward')

class UserSerializer(serializers.ModelSerializer):
    students = StudentSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'students')
        extra_kwargs = {'password': {
            'write_only': True,
            'required': True
        }}

# class TakenQuizSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = TakenQuiz
#         field = ('id', 'quiz', 'score')