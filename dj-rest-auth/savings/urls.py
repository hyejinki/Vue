from django.urls import path
from . import views

urlpatterns = [
    # path('api_test/', views.api_test),
    path('saving-products/', views.save_saving_products)
]
