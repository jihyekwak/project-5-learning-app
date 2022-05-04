from django.urls import URLPattern, path, include
from rest_framework import routers
from . import views

appname = "user"

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet, 'user')
router.register(r'students', views.StudentViewSet, 'student')
router.register(r'takenquizzes', views.TakenQuizViewSet, 'takenquiz')

urlpatterns = [
    path('', include(router.urls)),
]