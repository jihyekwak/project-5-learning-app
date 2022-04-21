from django.urls import URLPattern, path, include
from rest_framework import routers
from . import views

appname = "user"

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
]