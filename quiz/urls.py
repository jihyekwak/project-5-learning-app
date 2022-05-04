from django.urls import URLPattern, path, include
from rest_framework import routers
from . import views

appname = "quiz"

router = routers.DefaultRouter()
router.register(r'quizzes', views.QuizView, 'quiz')
router.register(r'questions', views.QuestionView, 'question')
# router.register(r'answers', views.AnswerView, 'answer')

urlpatterns = [
    path('', include(router.urls)),
    path('home/', views.home, name='home'),
]    