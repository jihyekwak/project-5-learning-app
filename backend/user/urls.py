from django.urls import URLPattern, path, include
from rest_framework import routers
from . import views

appname = "user"

router = routers.DefaultRouter()
router.register(r'', views.UserViewSet, 'user')
# router.register(r'students', views.StudentView, 'student')

urlpatterns = [
    path('', include(router.urls)),
    # path('current', views.current_user)
    path('/profile', views.UserAPI.as_view()),
]