
# Create your views here.
from django.shortcuts import render
from django.conf import settings
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import requests
from django.shortcuts import get_object_or_404
from .models import SavingProducts, SavingOptions
from .serializers import SavingProductsSerializer, SavingOptionSerializer
from django.db.models import Max


# Create your views here.
BASE_URL = 'http://finlife.fss.or.kr/finlifeapi/'

API_KEY = settings.API_KEY

# @api_view(['GET'])
# def api_test(request):
#     URL = BASE_URL + 'savingProductsSearch.json'
#     params = {
#         'auth': API_KEY,
#         'topFinGrpNo' : '020000',
#         'pageNo' : 1
#     }
#     response = requests.get(URL, params=params).json()
#     return JsonResponse({'response' : response})


@api_view(['GET'])
def save_saving_products(request):
    URL = BASE_URL + 'savingProductsSearch.json'
    params = {
        'auth': API_KEY,
        'topFinGrpNo' : '020000',
        'pageNo' : 1
    }
    response = requests.get(URL, params=params).json()
    # return JsonResponse({'response':response})
    products = response.get('result').get('baseList')
    for product in products:
        # serializer = SavingProductsSerializer(data=product)
        fin_prdt_cd = product['fin_prdt_cd']
        kor_co_nm = product['kor_co_nm']
        fin_prdt_nm = product['fin_prdt_nm']
      
        instance, created = SavingProducts.objects.get_or_create(fin_prdt_cd=fin_prdt_cd, defaults={
            'kor_co_nm': kor_co_nm,
            'fin_prdt_nm': fin_prdt_nm
        })
        
        if created:
            serializer = SavingProductsSerializer(instance, data=product)
            if serializer.is_valid():
                serializer.save()
    # return Response(serializer.data, status=status.HTTP_200_OK)


    options = response.get('result').get('optionList')
    for option in options:
        fin_prdt_cd = option.get('fin_prdt_cd')
        saving_product = SavingProducts.objects.get(fin_prdt_cd=fin_prdt_cd)
        serializer = SavingOptionSerializer(data=option)
        if serializer.is_valid(raise_exception=True):
            serializer.save(fin_prdt_cd=saving_product)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

