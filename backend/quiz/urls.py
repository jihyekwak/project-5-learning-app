from django.urls import URLPattern, path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'quizzes', views.QuizView, 'quiz')
router.register(r'subjects', views.SubjectView, 'subject')

urlpatterns = [
    path('', include(router.urls)),
    path('home/', views.home, name='home'),
]