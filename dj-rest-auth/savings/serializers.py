from rest_framework import serializers
from .models import SavingProducts, SavingOptions

class SavingProductsSerializer(serializers.ModelSerializer):
  class Meta:
    model = SavingProducts
    fields = '__all__'


class SavingOptionSerializer(serializers.ModelSerializer):
  fin_prdt_cd = serializers.IntegerField(read_only=True)

  class Meta:
    model = SavingOptions
    fields = '__all__'