from django.urls import URLPattern, path, include
from rest_framework import routers
from . import views

appname = "quiz"

router = routers.DefaultRouter()
router.register(r'quizzes', views.QuizView, 'quiz')

urlpatterns = [
    path('', include(router.urls)),
    path('home/', views.home, name='home'),
]