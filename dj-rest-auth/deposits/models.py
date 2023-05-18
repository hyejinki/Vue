
from django.db import models

# Create your models here.

# DepositOptions
class DepositProducts(models.Model):
    fin_prdt_cd = models.TextField(unique=True)
    kor_co_nm = models.TextField()
    fin_prdt_nm = models.TextField()
    intr_rate_type_nm = models.CharField(max_length=100)
    intr_rate = models.FloatField()
    intr_rate2 = models.FloatField()
    save_trm = models.IntegerField()


# class DepositOptions(models.Model):
#     fin_prdt_cd = models.ForeignKey(DepositProducts, on_delete=models.CASCADE)
#     intr_rate_type_nm = models.CharField(max_length=100)
#     intr_rate = models.FloatField()
#     intr_rate2 = models.FloatField()
#     save_trm = models.IntegerField()
