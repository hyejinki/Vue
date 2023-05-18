from django.db import models

# Create your models here.
class SavingProducts(models.Model):
    fin_prdt_cd = models.TextField(unique=True)
    kor_co_nm = models.TextField(default='')
    fin_prdt_nm = models.TextField(default='')
   

class SavingOptions(models.Model):
    fin_prdt_cd = models.ForeignKey(SavingProducts, on_delete=models.CASCADE)
    intr_rate_type_nm = models.CharField(max_length=100, default='')
    save_trm = models.IntegerField(default=0)
    intr_rate = models.FloatField(null=True, default=0.0)
    intr_rate2 = models.FloatField(null=True, default=0.0)
   
