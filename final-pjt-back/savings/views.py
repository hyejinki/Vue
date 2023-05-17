from django.shortcuts import render
from django.conf import settings
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import requests


# Create your views here.
BASE_URL = 'http://finlife.fss.or.kr/finlifeapi/'

API_KEY = settings.API_KEY

@api_view(['GET'])
def api_test(request):
    URL = BASE_URL + 'savingProductsSearch.json'
    params = {
        'auth': API_KEY,
        'topFinGrpNo' : '020000',
        'pageNo' : 1
    }
    response = requests.get(URL, params=params).json()
    return JsonResponse({'response' : response})
