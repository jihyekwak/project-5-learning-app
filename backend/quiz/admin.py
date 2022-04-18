from django.contrib import admin
from .models import Subject, Quiz, Question, Answer

# Register your models here.

class AnswerAdmin(admin.ModelAdmin):
    list_display = ['question', 'text', 'is_correct']
    list_display_links = ['question']
    list_editable = ['text', 'is_correct']
    list_filter = ['question']

class AnswerAdminInline(admin.TabularInline):
    model = Answer
    fk_name = "question"

class QuestionAdmin(admin.ModelAdmin):
    inlines = [AnswerAdminInline]

    list_display = ['quiz', 'text']
    list_display_links = ['quiz']
    list_editable = ['text']
    list_filter = ['quiz']

class QuestionAdminInline(admin.TabularInline):
    model = Question
    fk_name = "quiz"

class QuizAdmin(admin.ModelAdmin):
    inlines = [QuestionAdminInline]

    list_display = ['title', 'subject', 'difficulty', 'grade', 'created_at']
    list_display_links = ['title']

class QuizAdminInline(admin.TabularInline):
    model = Quiz
    fk_name = "subject"

class SubjectAdmin(admin.ModelAdmin):
    inlines = [QuizAdminInline]

    list_display = ['name']
    list_display_links = ['name']

admin.site.register(Subject, SubjectAdmin)
admin.site.register(Quiz, QuizAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Answer, AnswerAdmin)
