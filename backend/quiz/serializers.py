from dataclasses import field
from rest_framework import serializers
from .models import Subject, Quiz, Question, Answer

class AnswerSerializer(serializers.ModelSerializer):
    question = serializers.CharField()

    class Meta:
        model = Answer
        fields = ('id', 'text', 'is_correct', 'question')

class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True)
    quiz = serializers.CharField()

    class Meta:
        model = Question
        fields = ('id', 'text', 'quiz', 'answers')

class QuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True)
    subject = serializers.CharField()

    class Meta:
        model = Quiz
        fields = ('id', 'title', 'subject', 'difficulty', 'grade', 'questions', 'created_at')

class SubjectSerializer(serializers.ModelSerializer):
    quizzes = QuizSerializer(many=True)

    class Meta:
        model = Subject
        fields = ('id', 'name', 'quizzes')