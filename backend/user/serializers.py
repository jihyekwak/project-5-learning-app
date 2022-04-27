from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token
from .models import Student, TakenQuiz
from quiz.serializers import QuizSerializer

class TakenQuizSerializer(serializers.ModelSerializer):

    quiz = QuizSerializer()

    class Meta:
        model = TakenQuiz
        fields = ('id', 'student', 'quiz', 'score', 'is_completed', 'created_at')

    def create(self, validated_data):
        return TakenQuiz(**validated_data)

class StudentSerializer(serializers.ModelSerializer):
    # instuctor = UserSerializer(read_only=True)
    quizzes = TakenQuizSerializer(many=True, read_only=True)


    class Meta:
        model = Student
        fields = ('id', 'instuctor', 'name', 'avatar', 'grade', 'level', 'reward', 'quizzes')

class UserSerializer(serializers.ModelSerializer):
    students = StudentSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'password', 'students')
        extra_kwargs = {'password': {
            'write_only': True,
            'required': True
        }}


