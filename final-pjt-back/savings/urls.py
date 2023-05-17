from django.urls import path
from . import views


urlpatterns = [
  path('api_test/', views.api_test),
]

