from django.urls import URLPattern, path, include
from rest_framework import routers
from . import views

appname = "user"

router = routers.DefaultRouter()
router.register(r'', views.UserView, 'user')
router.register(r'students', views.StudentView, 'student')

urlpatterns = [
    path('', include(router.urls)),
]