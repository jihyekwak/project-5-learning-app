from dataclasses import field
from rest_framework import serializers
from .models import Subject, Quiz, Question, Answer

class AnswerSerializer(serializers.ModelSerializer):
    # question = serializers.CharField()

    class Meta:
        model = Answer
        fields = ('id', 'text', 'is_correct')

class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True)
    # quiz = serializers.CharField()

    class Meta:
        model = Question
        fields = ('id', 'text', 'answers')

class QuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only = True)
    # subject = SubjectSerializer()
    # subject = serializers.CharField()

    class Meta:
        model = Quiz
        fields = ('id', 'title', 'subject', 'difficulty', 'questions', 'grade', 'created_at')

    def create(self, validated_data):
        return Quiz(**validated_data)

class SubjectSerializer(serializers.ModelSerializer):
    quizzes = QuizSerializer(many=True, read_only = True)

    class Meta:
        model = Subject
        fields = ('id', 'name', 'quizzes')