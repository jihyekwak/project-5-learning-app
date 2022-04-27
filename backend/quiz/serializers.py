from rest_framework import serializers
from .models import Quiz, Question, Answer

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

    class Meta:
        model = Quiz
        fields = ('id', 'title', 'subject', 'difficulty', 'questions', 'grade', 'created_at')

    def create(self, validated_data):
        question_data = validated_data.pop('questions')
        quiz = Quiz.objects.create(**validated_data)
        Question.objects.create(quiz = quiz, **question_data)
        return quiz