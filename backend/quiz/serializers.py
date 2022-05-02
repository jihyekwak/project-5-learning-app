from django.shortcuts import get_object_or_404
from rest_framework import serializers
from .models import Quiz, Question, Answer

class AnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Answer
        fields = ('id', 'text', 'is_correct')

class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True)

    class Meta:
        model = Question
        fields = ('id', 'text', 'answers', 'quiz')

    def create(self, validated_data):
        answers = validated_data.pop('answers')
        question = Question.objects.create(**validated_data)
        for answer in answers:
            Answer.objects.create(question = question, **answer)
        return Question

class QuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Quiz
        fields = ('id', 'title', 'subject', 'difficulty', 'grade', 'questions', 'created_at', 'author')

    # def create(self, validated_data):
    #     questions = validated_data.pop('questions')
    #     quiz = Quiz.objects.create(**validated_data)

    #     for question in questions:
    #         answers = question.pop('answers')
    #         Question.objects.create(quiz = quiz, **question)
    #         for answer in answers:
    #             Answer.objects.create(question = question, **answer)
    #         return quiz

    # def update(self, instance, validated_data):
    #     questions = validated_data.pop('questions')
    #     instance.text = validated_data.get('text', instance.text)
    #     instance.save()
    #     keep_questions = []
    #     existing_ids = [question.id for question in instance.questions]
    #     for question in questions:
    #         if 'id' in question.keys():
    #             if Question.objectts.filter(id=question[id]).exists():
    #                 question = Question.objects.get(id=question['id'])
    #                 question.text = question.get('text', question.text)
    #                 question.save()
    #                 keep_questions.append(question)
    #             else:
    #                 continue
    #         else:
    #             question = Question.objects.create(**question, quiz = instance)
    #             keep_questions.append(question.id)
    #     for question in instance.questions:
    #         if question.id not in keep_questions:
    #             question.delete()
        
    #     return instance