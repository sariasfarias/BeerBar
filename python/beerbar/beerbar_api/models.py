from django.db import models


class Beer(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()


class Stock(models.Model):
    last_updated = models.DateTimeField()


class Order(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    paid = models.BooleanField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)
    taxes = models.DecimalField(max_digits=10, decimal_places=2)
    discounts = models.DecimalField(max_digits=10, decimal_places=2)


class Round(models.Model):
    order = models.ForeignKey(Order, related_name='rounds', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)


class OrderItem(models.Model):
    round = models.ForeignKey(Round, related_name='round', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    quantity = models.IntegerField()
