from django.urls import path
from .import views

app_name="todos"
urlpatterns = [
    path('test/', views.index, name="index"),
    path('', views.todo_list, name="todo_list")
    
]