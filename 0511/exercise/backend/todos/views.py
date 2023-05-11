from django.shortcuts import get_list_or_404
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Todo
from .serializezrs import TodoSerializer

# Create your views here.
def index(request):
    return JsonResponse({ 'message': 'okay'})

@api_view(['GET', 'POST'])
def todo_list(request):
    if request.method == 'POST':
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

    todos = get_list_or_404(Todo)
    serializers = TodoSerializer(todos, many=True)
    return Response(serializers.data)

